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

function decideIncident(report, openIssues = []) {
  if (!isVerifiedRegression(report)) return { action: 'skip', reason: 'no-verified-page-regression' };
  if (!Array.isArray(openIssues)) throw new TypeError('Expected open issue list');
  const existing = openIssues.find(issue => issue && issue.state === 'open' && !issue.pull_request &&
    (issue.title === INCIDENT_TITLE ||
      (typeof issue.title === 'string' && issue.title.startsWith(INCIDENT_TITLE + ' - ')) ||
      (typeof issue.body === 'string' && issue.body.includes(INCIDENT_MARKER))));
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
module.exports = { INCIDENT_TITLE, INCIDENT_MARKER, isVerifiedRegression, decideIncident, buildIssueBody };
