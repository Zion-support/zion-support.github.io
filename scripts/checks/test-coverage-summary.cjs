'use strict';
// Fail closed on missing, malformed, or subthreshold Jest coverage evidence.
// This is not a substitute for the preceding Jest command succeeding.
const fs = require('node:fs');

function verifyCoverage(report, threshold = 60) {
  if (!Number.isFinite(threshold) || threshold < 0 || threshold > 100) {
    throw new Error('invalid-threshold');
  }
  if (!report || typeof report !== 'object' || !report.total || !report.total.lines) {
    throw new Error('missing-lines-summary');
  }
  const { total, covered } = report.total.lines;
  if (!Number.isSafeInteger(total) || total <= 0 ||
      !Number.isSafeInteger(covered) || covered < 0 || covered > total) {
    throw new Error('invalid-lines-count');
  }
  const percent = (100 * covered) / total;
  return { percent, covered, total, threshold, pass: percent + 1e-9 >= threshold };
}

function main(args = process.argv.slice(2)) {
  const file = args[0] || 'coverage/coverage-summary.json';
  const threshold = args[1] === undefined ? 60 : Number(args[1]);
  let result;
  try {
    result = verifyCoverage(JSON.parse(fs.readFileSync(file, 'utf8')), threshold);
  } catch (error) {
    console.error(`Coverage unavailable or invalid (${error.code || error.message}); failing closed.`);
    return 2;
  }
  console.log(`Verified Jest line coverage: ${result.covered}/${result.total} (${result.percent.toFixed(2)}%), required ${threshold}%.`);
  if (process.env.GITHUB_STEP_SUMMARY) {
    fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY,
      `\n### Verified Jest coverage\n- Lines: ${result.covered}/${result.total} (${result.percent.toFixed(2)}%)\n- Minimum: ${threshold}%\n- Result: **${result.pass ? 'PASS' : 'FAIL'}**\n`);
  }
  if (!result.pass) console.error(`::error title=Insufficient Jest coverage::${result.percent.toFixed(2)}% < ${threshold}%`);
  return result.pass ? 0 : 1;
}

module.exports = { verifyCoverage, main };
if (require.main === module) process.exitCode = main();
