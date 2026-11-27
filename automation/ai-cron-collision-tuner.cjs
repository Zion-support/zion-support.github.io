'use strict';

// Read-only forecast of declared UTC schedules. Never edits or executes workflows.
const fs = require('node:fs');
const path = require('node:path');
const yaml = require('js-yaml');
const { writeReport } = require('./report-size-budget-guard.cjs');
const MINUTE = 60000;
const DAY = 1440 * MINUTE;
const SAMPLE_LIMIT = 50;
const MONTHS = 'JAN FEB MAR APR MAY JUN JUL AUG SEP OCT NOV DEC'.split(' ');
const WEEKDAYS = 'SUN MON TUE WED THU FRI SAT'.split(' ');

function integer(value, fallback, minimum, maximum) {
  const text = String(value === undefined ? fallback : value);
  if (!/^\d+$/.test(text)) throw new Error('invalid_configuration');
  const result = Number(text);
  if (!Number.isSafeInteger(result) || result < minimum || result > maximum) throw new Error('invalid_configuration');
  return result;
}

function field(text, minimum, maximum, names = []) {
  const values = new Set();
  function number(token) {
    const named = names.indexOf(token.toUpperCase());
    const value = named >= 0 ? named + minimum : (/^\d+$/.test(token) ? Number(token) : NaN);
    if (!Number.isInteger(value) || value < minimum || value > maximum) throw new Error('invalid_cron');
    return value;
  }
  for (const part of text.split(',')) {
    const pieces = part.split('/');
    if (pieces.length > 2 || !pieces[0]) throw new Error('invalid_cron');
    const step = pieces.length === 2 ? integer(pieces[1], 1, 1, maximum - minimum + 1) : 1;
    let first;
    let last;
    if (pieces[0] === '*') {
      first = minimum;
      last = maximum;
    } else {
      const range = pieces[0].split('-');
      if (range.length > 2) throw new Error('invalid_cron');
      first = number(range[0]);
      last = range.length === 2 ? number(range[1]) : (pieces.length === 2 ? maximum : first);
      if (last < first) throw new Error('invalid_cron');
    }
    for (let value = first; value <= last; value += step) values.add(value);
  }
  return [...values].sort((a, b) => a - b);
}

function parseCron(expression) {
  if (typeof expression !== 'string' || expression.length > 256) throw new Error('invalid_cron');
  const parts = expression.trim().split(/\s+/);
  if (parts.length !== 5) throw new Error('invalid_cron');
  return {
    minutes: field(parts[0], 0, 59),
    hours: field(parts[1], 0, 23),
    days: field(parts[2], 1, 31),
    months: field(parts[3], 1, 12, MONTHS),
    weekdays: field(parts[4], 0, 6, WEEKDAYS),
    dayWildcard: parts[2].startsWith('*'),
    weekdayWildcard: parts[4].startsWith('*'),
  };
}

function matchesDate(cron, date) {
  if (!cron.months.includes(date.getUTCMonth() + 1)) return false;
  const day = cron.days.includes(date.getUTCDate());
  const weekday = cron.weekdays.includes(date.getUTCDay());
  // Restricted POSIX day fields are alternatives. */step retains wildcard semantics.
  return cron.dayWildcard || cron.weekdayWildcard ? day && weekday : day || weekday;
}

function audit(root = process.cwd(), env = process.env, now = new Date()) {
  const errors = [];
  const empty = { exactCollisions: [], denseWindows: [], errors };
  let start;
  let days;
  let threshold;
  try {
    days = integer(env.CRON_AUDIT_DAYS, 35, 1, 366);
    threshold = integer(env.CRON_DENSITY_THRESHOLD, 4, 2, 10000);
    const startText = env.CRON_AUDIT_START === undefined ? now.toISOString().slice(0, 10) : env.CRON_AUDIT_START;
    if (!/^\d{4}-\d{2}-\d{2}$/.test(startText)) throw new Error('invalid_configuration');
    start = Date.parse(startText + 'T00:00:00Z');
    if (!Number.isFinite(start) || new Date(start).toISOString().slice(0, 10) !== startText) throw new Error('invalid_configuration');
  } catch {
    errors.push({ code: 'invalid_configuration' });
    return { status: 'error', ...empty };
  }

  const schedules = [];
  let scannedWorkflows = 0;
  let entries;
  const directory = path.join(root, '.github/workflows');
  try {
    for (const current of [path.join(root, '.github'), directory]) {
      if (!fs.lstatSync(current).isDirectory()) throw new Error('unsafe_workflow_directory');
    }
    entries = fs.readdirSync(directory).filter(name => /\.ya?ml$/.test(name)).sort();
    if (!entries.length) throw new Error('no_workflows');
  } catch (error) {
    errors.push({ path: '.github/workflows', code: error.code || error.message });
    return { status: 'error', ...empty };
  }

  for (const name of entries) {
    const relative = '.github/workflows/' + name;
    try {
      const filename = path.join(directory, name);
      if (!fs.lstatSync(filename).isFile()) throw new Error('not_regular_file');
      const document = yaml.safeLoad(fs.readFileSync(filename, 'utf8'));
      if (!document || typeof document !== 'object' || Array.isArray(document)) throw new Error('invalid_workflow');
      const triggers = document.on;
      if (triggers === undefined || triggers === null) throw new Error('missing_workflow_triggers');
      if (!['string', 'object'].includes(typeof triggers)) throw new Error('invalid_workflow');
      if (triggers === 'schedule' || (Array.isArray(triggers) && triggers.includes('schedule'))) throw new Error('invalid_schedule');
      const declared = triggers && typeof triggers === 'object' && !Array.isArray(triggers) ? triggers.schedule : undefined;
      if (declared !== undefined && (!Array.isArray(declared) || declared.length === 0)) throw new Error('invalid_schedule');
      const parsed = [];
      for (const schedule of declared || []) {
        if (!schedule || typeof schedule !== 'object' || Array.isArray(schedule)) throw new Error('invalid_schedule');
        // Never silently model timezone-aware/DST schedules as UTC.
        if (schedule.timezone !== undefined && schedule.timezone !== 'UTC' && schedule.timezone !== 'Etc/UTC') throw new Error('unsupported_timezone');
        parsed.push({ workflow: relative, cron: parseCron(schedule.cron) });
      }
      schedules.push(...parsed);
      scannedWorkflows++;
    } catch (error) {
      // YAML diagnostics include source snippets. Only persist controlled codes.
      const codes = new Set(['invalid_workflow', 'missing_workflow_triggers', 'invalid_schedule', 'unsupported_timezone', 'invalid_cron', 'invalid_configuration', 'not_regular_file']);
      errors.push({ path: relative, code: error.name === 'YAMLException' ? 'invalid_yaml' : (codes.has(error.message) ? error.message : 'unreadable_workflow') });
    }
  }
  if (errors.length) return { status: 'error', scannedWorkflows, ...empty };

  // Count a workflow once per minute even when several of its entries match.
  const slots = new Map();
  for (const schedule of schedules) {
    for (let day = 0; day < days; day++) {
      const midnight = start + day * DAY;
      if (!matchesDate(schedule.cron, new Date(midnight))) continue;
      for (const hour of schedule.cron.hours) for (const minute of schedule.cron.minutes) {
        const timestamp = midnight + (hour * 60 + minute) * MINUTE;
        if (!slots.has(timestamp)) slots.set(timestamp, new Set());
        slots.get(timestamp).add(schedule.workflow);
      }
    }
  }
  const windows = new Map();
  const exact = [];
  let uniqueWorkflowStartMinutes = 0;
  for (const [timestamp, workflows] of slots) {
    uniqueWorkflowStartMinutes += workflows.size;
    if (workflows.size >= 2) exact.push({ timestamp, workflows });
    const bucket = Math.floor(timestamp / (5 * MINUTE)) * (5 * MINUTE);
    if (!windows.has(bucket)) windows.set(bucket, new Set());
    for (const workflow of workflows) windows.get(bucket).add(workflow);
  }
  const dense = [...windows].filter(([, workflows]) => workflows.size >= threshold).map(([timestamp, workflows]) => ({ timestamp, workflows }));
  function samples(rows) {
    return rows.sort((a, b) => b.workflows.size - a.workflows.size || a.timestamp - b.timestamp).slice(0, SAMPLE_LIMIT).map(row => ({
      atUtc: new Date(row.timestamp).toISOString(), workflowCount: row.workflows.size, workflows: [...row.workflows].sort(),
    }));
  }
  return {
    schema: 'zion.cron-schedule-audit.v1',
    status: exact.length || dense.length ? 'completed_with_hotspots' : 'completed',
    scope: 'Forecast of declared UTC schedules only; unique workflows per minute and fixed five-minute UTC windows. Actual runner delays, run durations, job conditions and API enablement are not measured. No schedule or source file is changed.',
    startUtc: new Date(start).toISOString(), endUtcExclusive: new Date(start + days * DAY).toISOString(),
    days, densityThreshold: threshold, sampleLimit: SAMPLE_LIMIT,
    scannedWorkflows, scheduledWorkflows: new Set(schedules.map(item => item.workflow)).size,
    scheduleEntries: schedules.length, uniqueWorkflowStartMinutes,
    exactCollisionCount: exact.length, denseWindowCount: dense.length,
    exactCollisions: samples(exact), denseWindows: samples(dense), errors,
    recommendation: exact.length || dense.length
      ? 'Review the busiest forecast windows before proposing schedule changes. This report does not change schedules or prove runner contention.'
      : 'No hotspots found within this forecast horizon and threshold. This is not an all-time or runtime health guarantee.',
  };
}

function main(root = process.cwd(), env = process.env) {
  const report = { generatedAt: new Date().toISOString(), ...audit(root, env) };
  writeReport(root, 'cron-collision-latest.json', JSON.stringify(report, null, 2) + '\n');
  writeReport(root, 'cron-collision-latest.md', [
    '# Declared cron schedule audit', '',
    '- Status: ' + report.status,
    '- Workflows scanned: ' + (report.scannedWorkflows || 0),
    '- Forecast: ' + (report.startUtc || 'unavailable') + ' to ' + (report.endUtcExclusive || 'unavailable') + ' (exclusive)',
    '- Minutes with multiple workflows: ' + (report.exactCollisionCount ?? 'not measured'),
    '- Fixed five-minute windows at or above the threshold: ' + (report.denseWindowCount ?? 'not measured'),
    '- Scan/configuration errors: ' + report.errors.length, '',
    report.scope || 'The scan is incomplete. No collision or recovery conclusion is valid.', '',
    'The JSON artifact includes at most 50 busiest samples per category; total counts cover the full forecast. Workflow definitions and commands are not copied into this report.', '',
    report.recommendation || 'Resolve scan errors and rerun the audit.', '',
  ].join('\n'));
  console.log('Cron schedule audit: ' + report.status + '; ' + (report.exactCollisionCount ?? 'unmeasured') + ' collision minutes; ' + report.errors.length + ' errors. No schedules changed.');
  return report.status === 'error' ? 1 : 0;
}
if (require.main === module) {
  try { process.exitCode = main(); }
  catch { console.error('Cron audit could not write its reports.'); process.exitCode = 1; }
}
module.exports = { field, parseCron, matchesDate, audit, main };
