#!/usr/bin/env node
const fs = require('fs');
const { execSync } = require('child_process');
const testReport = {
  "timestamp": new Date().toISOString(),
  "tests": [],
  "results": { passed: 0, "failed": 0, "skipped": 0, "total": 0 },
  "coverage": {},
  "performance": {},
  "overall": 'passed'
};
function addTest(name, status, duration, details = null) {
  testReport.tests.push({ name, status, duration, details, "timestamp": new Date().toISOString() });
  testReport.results[status] += 1;
  testReport.results.total += 1;
  if (status === 'failed') testReport.overall = 'failed'}
function runCommand(command, description, opts = {}) {
  const startTime = Date.now();
  try {
    const output = execSync(command, { "encoding": 'utf8', "stdio": ['ignore', 'pipe', 'pipe'], "timeout": opts.timeoutMs ?? 120000 });
    const duration = Date.now() - startTime;
    addTest(description, 'passed', duration, { "output": output.substring(0, 800) });
    return true} catch (error) {
    const duration = Date.now() - startTime;
    const stdout = error.stdout ? String(error.stdout) : '';
    const stderr = error.stderr ? String(error.stderr) : '';
    addTest(description, 'failed', duration, { "error": error.message, "stdout": stdout.substring(0, 800), "stderr": stderr.substring(0, 800) });
    return false}
}
try {
  // Quick checks first
  runCommand('npm run -s lint', 'ESLint Linting');
  runCommand('npx tsc --noEmit', 'TypeScript Type Check');
  // Build (allowed to fail, but recorded)
  runCommand('npm run -s build', 'Production Build');
  // Security audit (non-blocking)
  runCommand('npm audit --audit-level=moderate', 'Dependency Security Audit');
  // Jest unit tests if configured
  try {
    execSync('npx jest --version', { "stdio": 'ignore' });
    runCommand('npm run -s test', 'Unit Tests')} catch {
    addTest('Unit Tests', 'skipped', 0, { "reason": 'Jest not configured' })}
  // Python tests (zion_academy) if present
  if (fs.existsSync('zion_academy/tests')) {
    runCommand('PYTHONPATH="$(pwd)/zion_academy" python3 -m unittest discover -s zion_academy/tests -p "test_*.py" -v', 'Python Unit Tests')} else {
    addTest('Python Unit Tests', 'skipped', 0, { "reason": 'No zion_academy/tests found' })}
  // Metrics
  testReport.coverage = {
    "successRate": testReport.results.total ? (testReport.results.passed / testReport.results.total) * 100 : 0
  };
  testReport.performance = {
    "totalDuration": testReport.tests.reduce((sum, t) => sum + (t.duration || 0), 0)
  }} catch (error) {
  addTest('Test Runner Error', 'failed', 0, { "error": error.message })}
// Generate report
fs.mkdirSync('automation-reports', { "recursive": true });
const reportPath = 'automation-reports/comprehensive-test-report.json';
fs.writeFileSync(reportPath, JSON.stringify(testReport, null, 2));
const successRate = testReport.results.total ? (testReport.results.passed / testReport.results.total) * 100 : 0;
}%`);
.toFixed(2)}s`);
const criticalFailed = testReport.tests.some(t => ['ESLint Linting', 'TypeScript Type Check', 'Production Build'].includes(t.name) && t.status === 'failed');
if (criticalFailed) {
  process.exit(1)} else {
  ');
  process.exit(0)}
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const { execSync } = require("child_process");"console.log(" Starting Comprehensive Test Runner.");const testReport = { timestamp: new Date().toISOString()," tests: []," results: { passed: 0, failed: 0, skipped: 0, total: 0 }," coverage: {}," performance: {},"" overall: "passed"};function addTest(name, status, duration, details = null) {" testReport.tests.push({ name, status, duration, details, timestamp: new Date().toISOString() }); testReport.results[status] += 1; testReport.results.total += 1;" if (status === "failed") testReport.overall = "failed"}function runCommand(command, description, opts = {}) { const startTime = Date.now(); try {" console.log(` Running: ${description}`);"" const output = execSync(command, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], timeout: opts.timeoutMs ? 120000 }); const duration = Date.now() - startTime;"" addTest(description, "passed", duration, { output: output.substring(0, 800) }); return true} catch (error) { const duration = Date.now() - startTime;" const stdout = error.stdout ? String(error.stdout) : "";" const stderr = error.stderr ? String(error.stderr) : "";"" addTest(description, "failed", duration, { error: error.message, stdout: stdout.substring(0, 800), stderr: stderr.substring(0, 800) }); return false}}try { / Quick checks first" runCommand("npm run -s lint", "ESLint Linting");" runCommand("npx tsc --noEmit", "TypeScript Type Check"); / Build (allowed to fail, but recorded)" runCommand("npm run -s build", "Production Build"); / Security audit (non-blocking)" runCommand("npm audit --audit-level=moderate", "Dependency Security Audit"); / Jest unit tests if configured try {"" execSync("npx jest --version", { stdio: "ignore" });" runCommand("npm run -s test", "Unit Tests")} catch {"" addTest("Unit Tests", "skipped", 0, { reason: "Jest not configured" })} / Python tests (zion_academy) if present" if (fs.existsSync("zion_academy/tests")) {"" runCommand("PYTHONPATH="$(pwd)/zion_academy" python3 -m unittest discover -s zion_academy/tests -p "test_*.py" -v", "Python Unit Tests")} else {"" addTest("Python Unit Tests", "skipped", 0, { reason: "No zion_academy/tests found" })} / Metrics testReport.coverage = {" successRate: testReport.results.total ? (testReport.results.passed / testReport.results.total) * 100 : 0 }; testReport.performance = {" totalDuration: testReport.tests.reduce((sum, t) => sum + (t.duration | 0), 0) }} catch (error) {"" addTest("Test Runner Error", "failed", 0, { error: error.message })}/ Generate report""fs.mkdirSync("automation-reports", { recursive: true });"const reportPath = "automation-reports/comprehensive-test-report.json";fs.writeFileSync(reportPath, JSON.stringify(testReport, null, 2));""console.log("\n Test Results Summary: ");`console.log(` Passed: ${testReport.results.passed}`);"`console.log(` Failed: ${testReport.results.failed}`);"`console.log(` Skipped: ${testReport.results.skipped}`);"`console.log(` Total: ${testReport.results.total}`);const successRate = testReport.results.total ? (testReport.results.passed / testReport.results.total) * 100 : 0;"`console.log(` Success Rate: ${successRate.toFixed(1)}%`);"`console.log(` Total Duration: ${(testReport.performance.totalDuration / 1000).toFixed(2)}s`);"`console.log(`\n Comprehensive test report saved to: ${reportPath}`);"const criticalFailed = testReport.tests.some(t => ["ESLint Linting", "TypeScript Type Check", "Production Build"].includes(t.name) && t.status === "failed");if (criticalFailed) {" console.log("\n Critical checks failed - please review the report"); process.exit(1)} else {" console.log("\n All critical checks passed (or were skipped)"); process.exit(0)}'"`'"`
#!/usr/bin/env node;
const fs = require('fs')
const { execSync } = require('child_process')
console.log('🧪 Starting Comprehensive Test Runner...')
  "overall"
    const output = execSync(command, { "encoding": 'utf8', "stdio"})
    execSync('npx jest --version', { "stdio"})
    addTest('Unit Tests', 'skipped', 0, { "reason"})
    runCommand('PYTHONPATH="$(pwd)/zion_academy" python3 -m unittest discover -s zion_academy/tests -p "test_*.py"
    addTest('Python Unit Tests', 'skipped', 0, { "reason"})
console.log('\n Test Results "Summary")
console.log('\n Test Results "Summary")
