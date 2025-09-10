#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const { execSync } = require("child_process");"console.log(" Starting Health Check.");const healthCheck = { timestamp: new Date().toISOString()," checks: {},"" status: "healthy"};/ package.jsontry {" const pkg = JSON.parse(fs.readFileSync("package.json", "utf8")); healthCheck.checks.packageJson = {"" status: "ok"," version: pkg.version | null};} catch { healthCheck.checks.packageJson = {"" status: "error","" message: "package.json not readable"};" healthCheck.status = "unhealthy";}/ dependenciestry {" const hasNodeModules = fs.existsSync("node_modules"); healthCheck.checks.dependencies = {"" status: hasNodeModules ? "ok" : "warning","" message: hasNodeModules ? "Dependencies installed" : "node_modules missing"};} catch { healthCheck.checks.dependencies = {"" status: "error","" message: "Failed to check dependencies"};}/ disktry {"" const stats = execSync("df -h .", { encoding: "utf8" });"" healthCheck.checks.disk = { status: "ok", details: stats.split("\n")[1] };} catch { healthCheck.checks.disk = {"" status: "warning","" message: "Unable to get disk info"};}/ memorytry {"" const mem = execSync("free -h", { encoding: "utf8" });"" healthCheck.checks.memory = { status: "ok", details: mem.split("\n")[1] };} catch { healthCheck.checks.memory = {"" status: "warning","" message: "Unable to get memory info"};}/ build dirtry { const hasBuild =" fs.existsSync(".next") | fs.existsSync("dist") | fs.existsSync("build");"" healthCheck.checks.build = { status: hasBuild ? "ok" : "info" };} catch { healthCheck.checks.build = {"" status: "warning","" message: "Unable to check build dir"};}const reportPath = `health-check-report-${Date.now()}.json`;fs.writeFileSync(reportPath, JSON.stringify(healthCheck, null, 2));"console.log(" Health check completed");"`console.log(` Report saved to: ${reportPath}`);/ Print summaryconst totalChecks = Object.keys(healthCheck.checks).length;const okChecks = Object.values(healthCheck.checks).filter(" check => check.status === "ok").length;const errorChecks = Object.values(healthCheck.checks).filter(" check => check.status === "error").length;"console.log(" Health Check Summary:");`console.log(` - Total checks: ${totalChecks}`);`console.log(` - OK: ${okChecks}`);`console.log(` - Errors: ${errorChecks}`);`console.log(` - Status: ${healthCheck.status.toUpperCase()}`);"if (healthCheck.status === "healthy") {" console.log(" System is healthy!"); process.exit(0);} else {" console.log(" System has issues that need attention"); process.exit(1);}class HealthChecker { constructor() {" this.logFile = path.join(__dirname, "./logs/health-check.log"); this.issues = []; this.startTime = new Date(); }" log(message, level = "INFO") { const timestamp = new Date().toISOString();` const logMessage = `[${timestamp}] [${level}] ${message}\n`; console.log(logMessage.trim()); try { fs.appendFileSync(this.logFile, logMessage); } catch (error) {"" console.error("Failed to write to log file: ", error.message); } } async checkDependencies() {" this.log("Checking dependencies."); try { / Check if node_modules exists" if (!fs.existsSync("node_modules")) {" this.issues.push("node_modules directory missing");"" this.log("CRITICAL: node_modules directory missing", "ERROR"); return false; } / Check package.json" if (!fs.existsSync("package.json")) {" this.issues.push("package.json missing");"" this.log("CRITICAL: package.json missing", "ERROR"); return false; } / Check for critical dependencies" const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));" const criticalDeps = ["next", "react", "react-dom"]; for (const dep of criticalDeps) { if ( !packageJson.dependencies[dep] !packageJson.devDependencies[dep] ) {"` this.issues.push(`Critical dependency missing: ${dep}`);""` this.log(`WARNING: Critical dependency missing: ${dep}`, "WARN"); } }" this.log("Dependencies check completed"); return true; } catch (error) {"` this.issues.push(`Dependency check failed: ${error.message}`);""` this.log(`ERROR: Dependency check failed: ${error.message}`, "ERROR"); return false; } } async checkBuild() {" this.log("Checking build status."); try { / Check if .next directory exists" if (!fs.existsSync(".next")) {" this.issues.push("Build directory (.next) missing"); this.log("" "WARNING: Build directory missing, attempting to build."," "WARN" ); try {"" execSync("npm run build", { stdio: "pipe" });" this.log("Build completed successfully"); } catch (buildError) {"` this.issues.push(`Build failed: ${buildError.message}`);""` this.log(`ERROR: Build failed: ${buildError.message}`, "ERROR"); return false; } }" this.log("Build check completed"); return true; } catch (error) {"` this.issues.push(`Build check failed: ${error.message}`);""` this.log(`ERROR: Build check failed: ${error.message}`, "ERROR"); return false; } } async checkLinting() {" this.log("Checking linting."); try {"" execSync("npm run lint", { stdio: "pipe" });" this.log("Linting passed"); return true; } catch (error) {"` this.issues.push(`Linting failed: ${error.message}`);""` this.log(`WARNING: Linting issues found: ${error.message}`, "WARN"); / Try to auto-fix try {" this.log("Attempting to auto-fix linting issues.");"" execSync("npm run lint: fix", { stdio: "pipe" });" this.log("Linting auto-fix completed"); return true; } catch (fixError) {""` this.log(`ERROR: Auto-fix failed: ${fixError.message}`, "ERROR"); return false; } } } async checkTypeScript() {" this.log("Checking TypeScript."); try {"" execSync("npm run type-check", { stdio: "pipe" });" this.log("TypeScript check passed"); return true; } catch (error) {"` this.issues.push(`TypeScript errors: ${error.message}`);""` this.log(`ERROR: TypeScript errors found: ${error.message}`, "ERROR"); return false; } } async checkSecurity() {" this.log("Checking security vulnerabilities."); try {" const result = execSync("npm audit --audit-level=moderate", {"" stdio: "pipe","" encoding: "utf8"});" if (result.includes("found 0 vulnerabilities")) {" this.log("Security check passed"); return true; } else {" this.issues.push("Security vulnerabilities found");"" this.log("WARNING: Security vulnerabilities found", "WARN"); / Try to auto-fix try {" this.log("Attempting to fix security vulnerabilities.");"" execSync("npm audit fix --force", { stdio: "pipe" });" this.log("Security vulnerabilities fixed"); return true; } catch (fixError) {""` this.log(`ERROR: Security fix failed: ${fixError.message}`, "ERROR"); return false; } } } catch (error) {"` this.issues.push(`Security check failed: ${error.message}`);""` this.log(`ERROR: Security check failed: ${error.message}`, "ERROR"); return false; } } async checkDiskSpace() {" this.log("Checking disk space."); try {"" const result = execSync("df -h .", { stdio: "pipe", encoding: "utf8" });" const lines = result.trim().split("\n"); const dataLine = lines[1]; const parts = dataLine.split(/\s+/);" const usedPercent = parseInt(parts[4].replace("%", "")); if (usedPercent > 90) {"` this.issues.push(`Disk space critical: ${usedPercent}% used`); this.log("` `CRITICAL: Disk space critical: ${usedPercent}% used`," "ERROR" ); return false; } else if (usedPercent > 80) {"` this.issues.push(`Disk space warning: ${usedPercent}% used`);""` this.log(`WARNING: Disk space warning: ${usedPercent}% used`, "WARN"); }"` this.log(`Disk space check passed: ${usedPercent}% used`); return true; } catch (error) {""` this.log(`WARNING: Could not check disk space: ${error.message}`, "WARN");" return true; / Don"t fail the health check for this } } async runAllChecks() {" this.log("Starting comprehensive health check."); const checks = [this.checkDependencies(), this.checkBuild(), this.checkLinting(), this.checkTypeScript(), this.checkSecurity(), this.checkDiskSpace(), ]; const results = await Promise.all(checks); const passed = results.filter(r => r).length; const total = results.length; const endTime = new Date(); const duration = endTime - this.startTime; this.log("` `Health check completed: ${passed}/${total} checks passed in ${duration}ms` ); if (this.issues.length > 0) {""` this.log(`Issues found: ${this.issues.length}`, "WARN");"` this.issues.forEach(issue => this.log(` - ${issue}`, "WARN")); } else {" this.log("All health checks passed successfully"); } / Write summary to file const summary = {" timestamp: endTime.toISOString()," duration: duration," checksPassed: passed," totalChecks: total," issues: this.issues,"" status: this.issues.length === 0 ? "HEALTHY" : "ISSUES_FOUND"}; try { fs.writeFileSync(" path.join(__dirname, "./logs/health-check-summary.json"), JSON.stringify(summary, null, 2) ); } catch (error) {""` this.log(`ERROR: Failed to write summary: ${error.message}`, "ERROR"); } return this.issues.length === 0; }}/ Run health check if called directlyif (require.main === module) { const healthChecker = new HealthChecker(); healthChecker .runAllChecks() .then(success => { process.exit(success ? 0 : 1); }) .catch(error => {"" console.error("Health check failed: ", error); process.exit(1); });}module.exports = HealthChecker;'"`'"`
#!/usr/bin/env node;
console.log('🏥 Running Health Check...');

#!/usr/bin/env node
const { execSync } = require('child_process');

console.log('🏥 Running Health Check...');


#!/usr/bin/env node
const { execSync } = require('child_process');
console.log('🏥 Running Health Check...');
origin/cursor/expand-services-advertise-and-build-project-c28b



const checks = [
  { name: 'Build Status', command: 'npm run build' },
  { name: 'Test Status', command: 'npm run test:smoke' },
  { name: 'Lint Status', command: 'npm run lint:check' },
  { name: 'Type Check', command: 'npm run type-check' }']

];

checks.forEach(check => {
  try {
  // TODO: Implement
})

    console.log(`✅ ${check.name}: OK`);
  } catch (error) {`;
    console.log(`❌ ${check.name}: FAILED`);
  }
});
  "timestamp": new Date().toISOString(),
  "checks": {},
  "status": 'healthy'};

// package.json
try {
  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  healthCheck.checks.packageJson = {
    "status": 'ok',
    "version": pkg.version || null};
} catch {
  healthCheck.checks.packageJson = {
    "status": 'error',
    "message": 'package.json not readable'};
  healthCheck.status = 'unhealthy';
}

// dependencies
try {
  const hasNodeModules = fs.existsSync('node_modules');
  healthCheck.checks.dependencies = {
    "status": hasNodeModules ? 'ok' : 'warning',
    "message": hasNodeModules ? 'Dependencies installed' : 'node_modules missing'};
} catch {
  healthCheck.checks.dependencies = {
    "status": 'error',
    "message": 'Failed to check dependencies'};
}

// disk
try {
  const stats = execSync('df -h .', { "encoding": 'utf8' });
  healthCheck.checks.disk = { "status": 'ok', "details": stats.split('\n')[1] };
} catch {
  healthCheck.checks.disk = {
    "status": 'warning',
    "message": 'Unable to get disk info'};
}

// memory
try {
  const mem = execSync('free -h', { "encoding": 'utf8' });
  healthCheck.checks.memory = { "status": 'ok', "details": mem.split('\n')[1] };
} catch {
  healthCheck.checks.memory = {
    "status": 'warning',
    "message": 'Unable to get memory info'};
}

// build dir
try {
  const hasBuild =
    fs.existsSync('.next') || fs.existsSync('dist') || fs.existsSync('build');
  healthCheck.checks.build = { "status": hasBuild ? 'ok' : 'info' };
} catch {
  healthCheck.checks.build = {
    "status": 'warning',
    "message": 'Unable to check build dir'};
}

const reportPath = `health-check-report-${Date.now()}.json`;
fs.writeFileSync(reportPath, JSON.stringify(healthCheck, null, 2));




// Print summary
const totalChecks = Object.keys(healthCheck.checks).length;
const okChecks = Object.values(healthCheck.checks).filter(
  check => check.status === 'ok'
).length;
const errorChecks = Object.values(healthCheck.checks).filter(
  check => check.status === 'error'
).length;






if (healthCheck.status === 'healthy') {
  
  process.exit(0);
} else {
  
  process.exit(1);
}
});
origin/cursor/expand-services-advertise-and-build-project-c28b

#!/usr/bin/env node

const fs = require("fs");
const path = require("path");




class HealthChecker {
  // TODO: Implement
  constructor() {
    this.projectRoot = process.cwd();
    this.checks = [];
    this.errors = [];
  }

  log(message) {
    console.log(`🏥 [Health Check] ${message}`);

#!/usr/bin/env node

/**
 * Health Check Monitor;
 * Monitors application health and provides alerts;
 */

const healthReport = {
    timestamp: new Date().toISOString(),
    status: 'healthy',
    checks: {},
    summary: {
        total: 0,
        passed: 0,
        failed: 0,
        warnings: 0
    }
};

function runCheck(name, checkFunction) {
    healthReport.summary.total++;
    console.log(`\n🔍 Checking: ${name}`);
    try {
        const result = checkFunction();
        if (result.status === 'pass') {
            healthReport.checks[name] = result;
            healthReport.summary.passed++;
            console.log(`✅ ${name}: ${result.message}`);
        } else if (result.status === 'warning') {
            healthReport.checks[name] = result;
            healthReport.summary.warnings++;
            console.log(`⚠️  ${name}: ${result.message}`);
        } else {
            healthReport.checks[name] = result;
            healthReport.summary.failed++;
            console.log(`❌ ${name}: ${result.message}`);
        }
    } catch (error) {
        healthReport.checks[name] = {
            status: 'fail',
            message: `Error: ${error.message}`,
            error: error.toString()
        };
        healthReport.summary.failed++;
        console.log(`❌ ${name}: Error - ${error.message}`);
    }