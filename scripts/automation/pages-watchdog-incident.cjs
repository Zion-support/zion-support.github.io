'use strict';
// Read-only incident decision logic for the existing Pages Watchdog.
// GitHub API reads/writes remain explicitly in the workflow, not this module.
const INCIDENT_TITLE = '🔴 Pages Watchdog Failure';
const INCIDENT_MARKER = '<!-- zion-pages-watchdog-regression-v1 -->';

function isVerifiedRegression(report) {
  return Boolean(report && Number.isInteger(report.routes_checked) && report.routes_checked > 0 &&
    Number.isInteger(report.routes_broken) && report.routes_broken >= 2 &&
    report.routes_broken <= report.routes_checked &&
    typeof report.checked_at === 'string' && Number.isFinite(Date.parse(report.checked_at)));
}

const MAX_REPORT_AGE_MS = 30 * 60 * 1000;
const MAX_INCIDENT_AGE_MS = 7 * 24 * 60 * 60 * 1000;

function isFreshVerifiedRegression(report, now = new Date()) {
  if (!isVerifiedRegression(report)) return false;
  const observed = Date.parse(report.checked_at);
  const elapsed = now.getTime() - observed;
  return elapsed >= -5 * 60 * 1000 && elapsed <= MAX_REPORT_AGE_MS;
}

function decideIncident(report, openIssues = []) {
  if (!isVerifiedRegression(report)) return { action: 'skip', reason: 'no-verified-page-regression' };
  if (!Array.isArray(openIssues)) throw new TypeError('Expected open issue list');
  const incidentTimestamp = Date.parse(report.checked_at);
  const existing = openIssues.find(issue => {
    if (!issue || issue.state !== 'open' || issue.pull_request) return false;
    const created = Date.parse(issue.created_at || '');
    // A months-old unresolved incident cannot suppress an unrelated fresh outage.
    if (!Number.isFinite(created) || created > incidentTimestamp + 5 * 60 * 1000 ||
        incidentTimestamp - created > MAX_INCIDENT_AGE_MS) return false;
    return issue.title === INCIDENT_TITLE ||
      (typeof issue.title === 'string' && issue.title.startsWith(INCIDENT_TITLE + ' - ')) ||
      (typeof issue.body === 'string' && issue.body.includes(INCIDENT_MARKER));
  });
  return existing ? { action: 'existing', issueNumber: existing.number } : { action: 'create' };
}

function buildIssueBody(report, runUrl) {
  if (!isVerifiedRegression(report)) throw new TypeError('Cannot create issue from invalid report');
  if (!/^https:\/\/github\.com\/[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+\/actions\/runs\/\d+$/.test(runUrl))
    throw new TypeError('Invalid GitHub Actions run URL');
  // Public aggregate counts only: exclude route names, errors and report internals.
  return [INCIDENT_MARKER, '## Pages watchdog regression', '',
    `- Routes checked: ${report.routes_checked}`,
    `- Routes not returning HTTP 200: ${report.routes_broken}`,
    `- Checked at: ${new Date(report.checked_at).toISOString()}`,
    `- CI run and artifact: ${runUrl}`, '',
    'One open issue is reused for subsequent failures. Investigate current CI artifacts before closing.'].join('\n');
}
module.exports = { INCIDENT_TITLE, INCIDENT_MARKER, isVerifiedRegression, isFreshVerifiedRegression, decideIncident, buildIssueBody };
