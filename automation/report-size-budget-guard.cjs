'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { randomUUID } = require('node:crypto');
const OUTPUTS = new Set(['report-size-budget-guard-latest.json', 'report-size-budget-guard-latest.md']);

function positiveBudget(value, fallback, multiplier) {
  const number = value === undefined ? fallback : Number(value);
  if (String(value ?? fallback).trim() === '' || !Number.isFinite(number) || number <= 0 || !Number.isSafeInteger(number * multiplier)) {
    throw new Error('invalid_budget');
  }
  return number * multiplier;
}

function audit(root = process.cwd(), env = process.env) {
  const errors = [];
  const files = [];
  let maxFileBytes;
  let maxTotalBytes;
  try {
    maxFileBytes = positiveBudget(env.REPORT_SIZE_MAX_FILE_KB, 1536, 1024);
    maxTotalBytes = positiveBudget(env.REPORT_SIZE_MAX_TOTAL_MB, 8, 1024 * 1024);
  } catch {
    return { status: 'error', errors: [{ code: 'invalid_budget' }], oversizedCount: 0, totalExceeded: false, topLargest: [] };
  }

  const reports = path.join(root, 'automation/reports');
  function walk(directory, prefix = '') {
    const info = fs.lstatSync(directory);
    if (!info.isDirectory()) throw Object.assign(new Error('not_directory'), { code: 'not_directory' });
    for (const name of fs.readdirSync(directory).sort()) {
      const relative = prefix ? `${prefix}/${name}` : name;
      if ((!prefix && OUTPUTS.has(name)) || name === '.runtime') continue;
      const filename = path.join(directory, name);
      const stat = fs.lstatSync(filename);
      if (stat.isSymbolicLink()) errors.push({ path: `automation/reports/${relative}`, code: 'symlink_not_scanned' });
      else if (stat.isDirectory()) walk(filename, relative);
      else if (stat.isFile()) files.push({ path: `automation/reports/${relative}`, sizeBytes: stat.size, sizeKb: Math.round(stat.size / 1024 * 1000) / 1000 });
      else errors.push({ path: `automation/reports/${relative}`, code: 'not_regular_file' });
    }
  }
  try {
    if (!fs.lstatSync(path.join(root, 'automation')).isDirectory()) throw Object.assign(new Error('not_directory'), { code: 'not_directory' });
    walk(reports);
  }
  catch (error) { errors.push({ path: 'automation/reports', code: error.code || 'unreadable' }); }

  files.sort((a, b) => b.sizeBytes - a.sizeBytes || a.path.localeCompare(b.path));
  const totalBytes = files.reduce((total, file) => total + file.sizeBytes, 0);
  const oversizedCount = files.filter(file => file.sizeBytes > maxFileBytes).length;
  const totalExceeded = totalBytes > maxTotalBytes;
  return {
    status: errors.length ? 'error' : (oversizedCount || totalExceeded ? 'breach' : 'ok'),
    scope: 'Regular files under automation/reports, recursively; .runtime and this guard\'s two outputs excluded. Symlinks are rejected. Sizes use 1024-byte KiB and 1048576-byte MiB.',
    scannedFiles: files.length,
    totalBytes,
    maxFileBytes,
    maxTotalBytes,
    oversizedCount,
    totalExceeded,
    topLargest: files.slice(0, 20),
    errors,
  };
}

function writeReport(root, basename, content) {
  if (path.basename(basename) !== basename) throw new Error('invalid_report_name');
  const directory = path.join(root, 'automation/reports');
  for (const current of [path.join(root, 'automation'), directory]) {
    if (!fs.existsSync(current)) fs.mkdirSync(current);
    if (!fs.lstatSync(current).isDirectory()) throw new Error('unsafe_report_directory');
  }
  const temporary = path.join(directory, `.${basename}.${randomUUID()}.tmp`);
  try {
    fs.writeFileSync(temporary, content, { encoding: 'utf8', flag: 'wx' });
    fs.renameSync(temporary, path.join(directory, basename));
  } finally {
    if (fs.existsSync(temporary)) fs.unlinkSync(temporary);
  }
}

function main(root = process.cwd(), env = process.env) {
  const report = { generatedAt: new Date().toISOString(), ...audit(root, env) };
  writeReport(root, 'report-size-budget-guard-latest.json', JSON.stringify(report, null, 2) + '\n');
  const markdown = [
    '# Report size budget guard', '',
    `- Status: ${report.status}`,
    `- Files measured: ${report.scannedFiles ?? 0}`,
    `- Total bytes: ${report.totalBytes ?? 'not measured'}`,
    `- Oversized files: ${report.oversizedCount}`,
    `- Total budget exceeded: ${report.totalExceeded}`,
    `- Scan/configuration errors: ${report.errors.length}`, '',
    report.scope || 'Invalid budget configuration; no successful scan is claimed.', '',
    'The JSON artifact contains the measured file inventory. No file is deleted or truncated.', '',
  ].join('\n');
  writeReport(root, 'report-size-budget-guard-latest.md', markdown);
  console.log(`Report size guard: ${report.status}; ${report.oversizedCount} oversized files; ${report.errors.length} scan/configuration errors.`);
  return report.status === 'ok' ? 0 : 1;
}

if (require.main === module) {
  try { process.exitCode = main(); }
  catch (error) { console.error(`Report size guard could not write its report (${error.code || error.message}).`); process.exitCode = 1; }
}
module.exports = { audit, main, writeReport };
