<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
#!/usr/bin/env node
<<<<<<< HEAD
<<<<<<< HEAD
const { execSync } = require('child_process');

console.log('🏥 Running Health Check...');

=======
<<<<<<< HEAD
#!/usr/bin/env node
const { execSync } = require('child_process');
<<<<<<< HEAD

console.log('🏥 Running Health Check...');

=======
console.log('🏥 Running Health Check...');
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======

#!/usr/bin/env node
const { execSync } = require('child_process');
console.log('🏥 Running Health Check...');
origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
});
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934






<<<<<<< HEAD
if (healthCheck.status === 'healthy') {
  
  process.exit(0);
} else {
  
  process.exit(1);
}
=======
#!/usr/bin/env node

<<<<<<< HEAD


=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
});
origin/cursor/expand-services-advertise-and-build-project-c28b

#!/usr/bin/env node

>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
const fs = require("fs");
const path = require("path");
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======



>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
class HealthChecker {
  // TODO: Implement
  constructor() {
    this.projectRoot = process.cwd();
<<<<<<< HEAD
    this.checks = [];
    this.errors = [];
  }

<<<<<<< HEAD
<<<<<<< HEAD
  log(message) {
    console.log(`🏥 [Health Check] ${message}`);
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
#!/usr/bin/env node
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

/**
 * Health Check Monitor;
 * Monitors application health and provides alerts;
 */
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
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
    
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class HealthCheckMonitor {
>>>>>>> origin/chore/fix-lint-and-merge
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'health-check.log');
    this.ensureLogDir();
    this.healthStatus = 'unknown';
    this.lastCheck = null;
  }

  ensureLogDir() {
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async runCommand(command, description) {

=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    try {
      this.log(`Running: ${description}`);
      const output = execSync(command, {
        encoding: 'utf8',
        cwd: '/workspace',
        stdio: 'pipe',
        timeout: 30000
      });
=======

  // TODO: Implement

        timeout: 30000;)
      });`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      this.log(`✅ ${description} completed successfully`);
      return { success: true, output };

      return { success: false, error: error.message };
<<<<<<< HEAD
    }
<<<<<<< HEAD
  }

  async checkApplicationHealth() {
    this.log('🏥 Checking application health...');
    
    const healthChecks = [
      { command: 'npm run build', description: 'Build health check' },
      { command: 'npm run test:smoke', description: 'Test health check' },
    ];

    let healthy = true;
    for (const check of healthChecks) {
      const result = await this.runCommand(check.command, check.description);
      if (!result.success) {
        healthy = false;
      }
    }

    this.healthStatus = healthy ? 'healthy' : 'unhealthy';
    this.lastCheck = new Date();
    
    if (healthy) {
      this.log('✅ Application is healthy');
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

    } else {
      this.log('❌ Application health issues detected', 'ERROR');
    }
<<<<<<< HEAD
console.log(`Total Checks: ${healthReport.summary.total}`);
console.log(`✅ Passed: ${healthReport.summary.passed}`);
console.log(`⚠️  Warnings: ${healthReport.summary.warnings}`);
console.log(`❌ Failed: ${healthReport.summary.failed}`);
console.log(`\nOverall Status: ${healthReport.status.toUpperCase()}`);
console.log(`\n📄 Report saved to: ${reportPath}`);
=======

    } else {
  // TODO: Implement

                message: `Disk usage is healthy (${usage}%)`,
                usage: usage;
            };
        } else if (usage < 95) {
  // TODO: Implement

                message: `Disk usage is getting high (${usage}%)`,
  // TODO: Implement
  // TODO: Implement

                message: `Disk usage is critical (${usage}%)`,
    } catch (error) {
  // TODO: Implement

        const memLine = lines[1];
        const parts = memLine.split(/\s+/);
        const total = parseInt(parts[1]);
        const used = parseInt(parts[2]);
        const usage = Math.round((used / total) * 100);
  // TODO: Implement

                message: `Memory usage is healthy (${usage}%)`,
                usage: usage,
                total: total,
                used: used;
  // TODO: Implement

                message: `Memory usage is getting high (${usage}%)`,
  // TODO: Implement
  // TODO: Implement

                message: `Memory usage is critical (${usage}%)`,
  // TODO: Implement


// Determine overall status;
if (healthReport.summary.failed > 0) {
    healthReport.status = 'unhealthy';
} else if (healthReport.summary.warnings > 0) {
    healthReport.status = 'degraded';


// Save health report;
const reportPath = 'health-check-report.json';
fs.writeFileSync(reportPath, JSON.stringify(healthReport, null, 2));
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

    process.exit(2);
  // TODO: Implement
    process.exit(0);

<<<<<<< HEAD
=======






>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  log(message, type = "INFO") {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${type}] ${message}`);
  }
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a








  log(message, type = "INFO") {"


  async checkNodeVersion() {"
    this.log("🔍 Checking Node.js version...");"
  // TODO: Implement
      const version = process.version;"

        this.log(`✅ Node.js version ${version} is compatible`);
  // TODO: Implement

      this.errors.push(error.message);

  async checkPackageJson() {"
    this.log("📦 Checking package.json...");"
  // TODO: Implement
}"
      const packageJsonPath = path.join(this.projectRoot, "package.json");"
      if (fs.existsSync(packageJsonPath)) {"
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));"
        // Check required dependencies;"
        const requiredDeps = ["react", "react-dom", "next"];"
        const missingDeps = requiredDeps.filter(dep => !packageJson.dependencies[dep]);
        if (missingDeps.length === 0) {"
          this.checks.push("All required dependencies are present");
          this.log("✅ All required dependencies are present");"
  // TODO: Implement


  async checkTypeScriptConfig() {"
    this.log("🔧 Checking TypeScript configuration...");"
  // TODO: Implement
      const tsConfigPath = path.join(this.projectRoot, "tsconfig.json");"
      if (fs.existsSync(tsConfigPath)) {"
        const tsConfig = JSON.parse(fs.readFileSync(tsConfigPath, "utf8"));"
        if (tsConfig.compilerOptions && tsConfig.compilerOptions.target) {"
          this.checks.push("TypeScript configuration is present");
          this.log("✅ TypeScript configuration is present");"
  // TODO: Implement

          this.log("❌ TypeScript configuration is incomplete", "ERROR");"
  // TODO: Implement


  async checkNextConfig() {"
    this.log("⚙️ Checking Next.js configuration...");"
  // TODO: Implement

      const nextConfigMjsPath = path.join(this.projectRoot, "next.config.mjs");"
      if (fs.existsSync(nextConfigPath) || fs.existsSync(nextConfigMjsPath)) {"
        this.checks.push("Next.js configuration is present");
        this.log("✅ Next.js configuration is present");"
  // TODO: Implement


  async checkDependencies() {"
    this.log("📚 Checking dependencies installation...");"
  // TODO: Implement
      const nodeModulesPath = path.join(this.projectRoot, "node_modules");"
      if (fs.existsSync(nodeModulesPath)) {"
        this.checks.push("Dependencies are installed");
        this.log("✅ Dependencies are installed");"
  // TODO: Implement


  async checkBuildCapability() {"
    this.log("🏗️ Checking build capability...");"
  // TODO: Implement
      execSync("npm run build", {"
        cwd: this.projectRoot,"
        stdio: "pipe","
        timeout: 60000;)
      });"
      this.checks.push("Build test successful");
      this.log("✅ Build test successful");"

<<<<<<< HEAD
  async run() {
    this.log("🎯 Starting Health Check Process...");
    this.log("");
    try {
=======
  // TODO: Implement
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      await this.checkNodeVersion();
      await this.checkPackageJson();
      await this.checkTypeScriptConfig();
      await this.checkNextConfig();
      await this.checkDependencies();
      await this.checkBuildCapability();
<<<<<<< HEAD
      
      this.log("\n📊 HEALTH CHECK REPORT");
      this.log("=");
      this.log(`Checks Passed: ${this.checks.length}`);
      this.log(`Errors Found: ${this.errors.length}`);
      
      if (this.checks.length > 0) {
        this.log("\n✅ Checks Passed:");
        this.checks.forEach((check, index) => {
          this.log(`  ${index + 1}. ${check}`);
        });
      }
      
      if (this.errors.length > 0) {
        this.log("\n❌ Errors:");
        this.errors.forEach((error, index) => {
          this.log(`  ${index + 1}. ${error}`);
        });
      }
      
      const healthScore = this.checks.length / (this.checks.length + this.errors.length) * 100;
=======
      "

      const healthScore = this.checks.length / (this.checks.length + this.errors.length) * 100;`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      this.log(`\n🏥 Health Score: ${healthScore.toFixed(1)}%`);
      if (healthScore >= 80) {"
        this.log("🎉 System is healthy!");"
      } else if (healthScore >= 60) {"
        this.log("⚠️ System has some issues but is functional");"
  // TODO: Implement
        this.log("🚨 System has critical issues that need attention");"
      this.log("\n🎉 Health check completed!");"

  }
}



<<<<<<< HEAD
<<<<<<< HEAD
origin/cursor/automate-test-fix-improve-and-merge-code-f0bd
=======




>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



    return healthy;
  }

  async checkDependencies() {
    this.log('📦 Checking dependencies...');
    
<<<<<<< HEAD
    try {

    } catch (error) {
      this.log(`❌ Failed to check dependencies: ${error.message}`, 'ERROR');
      this.results.dependencies = {
        success: false,
        issues: ['Failed to check dependencies'],
        fixes: []
      };
    }
  }

  async checkConfiguration() {

      }

      this.results.configuration = {
        success: issues.length === 0,
        issues,
        fixes
      };

    } catch (error) {
      this.log(`❌ Failed to check configuration: ${error.message}`, 'ERROR');
      this.results.configuration = {
        success: false,
        issues: ['Failed to check configuration'],
        fixes: []
      };
    }

  }

  async checkTypeScript() {
    this.log('\n🔷 CHECKING TYPESCRIPT');
    
    try {

    }
  }

  async checkLinting() {
    this.log('\n🔍 CHECKING LINTING');
    
    try {

    }
  }

  async checkTests() {
    this.log('\n🧪 CHECKING TESTS');
    

    }
  }

  async checkDiskSpace() {
    this.log('\n💾 CHECKING DISK SPACE');
    
    try {
      const diskUsage = await this.runCommand('df -h', 'Check Disk Usage');
      
      if (diskUsage.success) {
        this.log('✅ Disk space check completed');
      } else {
        this.log('⚠️ Could not check disk space', 'WARNING');
      }
    } catch (error) {
      this.log(`❌ Failed to check disk space: ${error.message}`, 'ERROR');
    }
  }

  async checkMemoryUsage() {
    this.log('\n🧠 CHECKING MEMORY USAGE');
    
    try {
      const memoryUsage = await this.runCommand('free -h', 'Check Memory Usage');
      
      if (memoryUsage.success) {
        this.log('✅ Memory usage check completed');
      } else {
        this.log('⚠️ Could not check memory usage', 'WARNING');
      }
    } catch (error) {
      this.log(`❌ Failed to check memory usage: ${error.message}`, 'ERROR');
    }
  }

  generateReport() {
    const totalDuration = Date.now() - this.startTime;
    
    this.log('\n📊 HEALTH CHECK REPORT');
    this.log('='.repeat(60));
    this.log(`Total Duration: ${totalDuration}ms`);
    this.log('');

    let totalIssues = 0;
    let totalFixes = 0;
    let passedChecks = 0;

    Object.entries(this.results).forEach(([check, result]) => {
      const status = result.success ? '✅' : '❌';
      const issuesCount = result.issues?.length || 0;
      const fixesCount = result.fixes?.length || 0;
      
      totalIssues += issuesCount;
      totalFixes += fixesCount;
      if (result.success) passedChecks++;

      this.log(`${status} ${check}: ${issuesCount} issues, ${fixesCount} fixes`);
      
      if (issuesCount > 0) {
        result.issues.forEach(issue => this.log(`  - ${issue}`, 'WARNING'));
      }
      if (fixesCount > 0) {
        result.fixes.forEach(fix => this.log(`  + ${fix}`, 'INFO'));
      }
    });

    this.log('\n📈 SUMMARY');
    this.log(`Passed Checks: ${passedChecks}/${Object.keys(this.results).length}`);
    this.log(`Total Issues: ${totalIssues}`);
    this.log(`Total Fixes: ${totalFixes}`);

    // Save detailed report
=======
    const depCheck = await this.runCommand(
      'npm audit --audit-level=moderate',
      'Dependency security check'
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    );
    if (depCheck.success) {
      this.log('✅ Dependencies are secure');

>>>>>>> origin/chore/fix-lint-and-merge
    const report = {
      timestamp: new Date().toISOString(),
      healthStatus: this.healthStatus,
      lastCheck: this.lastCheck,
      checks: {,

    recommendations.push('Monitor application performance regularly');
    recommendations.push('Set up automated alerts for critical issues');
    return recommendations;
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308
  }
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

  async check() {

    await this.checkApplicationHealth();
    await this.checkDiskSpace();
    await this.generateHealthReport();


  async start() {
    this.log('🚀 Health Check Monitor started');
    // Initial health check;
    await this.check();
    // Set up periodic health checks every 5 minutes;
    setInterval(async () => {
    }, 5 * 60 * 1000);


// Run if called directly;
if (require.main === module) {
  const monitor = new HealthCheckMonitor();
  monitor.start().catch(console.error);



<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
module.exports = HealthCheckMonitor;
<<<<<<< HEAD
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
#!/usr/bin/env node
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
#!/usr/bin/env node
<<<<<<< HEAD
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const { execSync } = require("child_process");"console.log(" Starting Health Check.");const healthCheck = { timestamp: new Date().toISOString()," checks: {},"" status: "healthy"};/ package.jsontry {" const pkg = JSON.parse(fs.readFileSync("package.json", "utf8")); healthCheck.checks.packageJson = {"" status: "ok"," version: pkg.version | null};} catch { healthCheck.checks.packageJson = {"" status: "error","" message: "package.json not readable"};" healthCheck.status = "unhealthy";}/ dependenciestry {" const hasNodeModules = fs.existsSync("node_modules"); healthCheck.checks.dependencies = {"" status: hasNodeModules ? "ok" : "warning","" message: hasNodeModules ? "Dependencies installed" : "node_modules missing"};} catch { healthCheck.checks.dependencies = {"" status: "error","" message: "Failed to check dependencies"};}/ disktry {"" const stats = execSync("df -h .", { encoding: "utf8" });"" healthCheck.checks.disk = { status: "ok", details: stats.split("\n")[1] };} catch { healthCheck.checks.disk = {"" status: "warning","" message: "Unable to get disk info"};}/ memorytry {"" const mem = execSync("free -h", { encoding: "utf8" });"" healthCheck.checks.memory = { status: "ok", details: mem.split("\n")[1] };} catch { healthCheck.checks.memory = {"" status: "warning","" message: "Unable to get memory info"};}/ build dirtry { const hasBuild =" fs.existsSync(".next") | fs.existsSync("dist") | fs.existsSync("build");"" healthCheck.checks.build = { status: hasBuild ? "ok" : "info" };} catch { healthCheck.checks.build = {"" status: "warning","" message: "Unable to check build dir"};}const reportPath = `health-check-report-${Date.now()}.json`;fs.writeFileSync(reportPath, JSON.stringify(healthCheck, null, 2));"console.log(" Health check completed");"`console.log(` Report saved to: ${reportPath}`);/ Print summaryconst totalChecks = Object.keys(healthCheck.checks).length;const okChecks = Object.values(healthCheck.checks).filter(" check => check.status === "ok").length;const errorChecks = Object.values(healthCheck.checks).filter(" check => check.status === "error").length;"console.log(" Health Check Summary:");`console.log(` - Total checks: ${totalChecks}`);`console.log(` - OK: ${okChecks}`);`console.log(` - Errors: ${errorChecks}`);`console.log(` - Status: ${healthCheck.status.toUpperCase()}`);"if (healthCheck.status === "healthy") {" console.log(" System is healthy!"); process.exit(0);} else {" console.log(" System has issues that need attention"); process.exit(1);}class HealthChecker { constructor() {" this.logFile = path.join(__dirname, "./logs/health-check.log"); this.issues = []; this.startTime = new Date(); }" log(message, level = "INFO") { const timestamp = new Date().toISOString();` const logMessage = `[${timestamp}] [${level}] ${message}\n`; console.log(logMessage.trim()); try { fs.appendFileSync(this.logFile, logMessage); } catch (error) {"" console.error("Failed to write to log file: ", error.message); } } async checkDependencies() {" this.log("Checking dependencies."); try { / Check if node_modules exists" if (!fs.existsSync("node_modules")) {" this.issues.push("node_modules directory missing");"" this.log("CRITICAL: node_modules directory missing", "ERROR"); return false; } / Check package.json" if (!fs.existsSync("package.json")) {" this.issues.push("package.json missing");"" this.log("CRITICAL: package.json missing", "ERROR"); return false; } / Check for critical dependencies" const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));" const criticalDeps = ["next", "react", "react-dom"]; for (const dep of criticalDeps) { if ( !packageJson.dependencies[dep] !packageJson.devDependencies[dep] ) {"` this.issues.push(`Critical dependency missing: ${dep}`);""` this.log(`WARNING: Critical dependency missing: ${dep}`, "WARN"); } }" this.log("Dependencies check completed"); return true; } catch (error) {"` this.issues.push(`Dependency check failed: ${error.message}`);""` this.log(`ERROR: Dependency check failed: ${error.message}`, "ERROR"); return false; } } async checkBuild() {" this.log("Checking build status."); try { / Check if .next directory exists" if (!fs.existsSync(".next")) {" this.issues.push("Build directory (.next) missing"); this.log("" "WARNING: Build directory missing, attempting to build."," "WARN" ); try {"" execSync("npm run build", { stdio: "pipe" });" this.log("Build completed successfully"); } catch (buildError) {"` this.issues.push(`Build failed: ${buildError.message}`);""` this.log(`ERROR: Build failed: ${buildError.message}`, "ERROR"); return false; } }" this.log("Build check completed"); return true; } catch (error) {"` this.issues.push(`Build check failed: ${error.message}`);""` this.log(`ERROR: Build check failed: ${error.message}`, "ERROR"); return false; } } async checkLinting() {" this.log("Checking linting."); try {"" execSync("npm run lint", { stdio: "pipe" });" this.log("Linting passed"); return true; } catch (error) {"` this.issues.push(`Linting failed: ${error.message}`);""` this.log(`WARNING: Linting issues found: ${error.message}`, "WARN"); / Try to auto-fix try {" this.log("Attempting to auto-fix linting issues.");"" execSync("npm run lint: fix", { stdio: "pipe" });" this.log("Linting auto-fix completed"); return true; } catch (fixError) {""` this.log(`ERROR: Auto-fix failed: ${fixError.message}`, "ERROR"); return false; } } } async checkTypeScript() {" this.log("Checking TypeScript."); try {"" execSync("npm run type-check", { stdio: "pipe" });" this.log("TypeScript check passed"); return true; } catch (error) {"` this.issues.push(`TypeScript errors: ${error.message}`);""` this.log(`ERROR: TypeScript errors found: ${error.message}`, "ERROR"); return false; } } async checkSecurity() {" this.log("Checking security vulnerabilities."); try {" const result = execSync("npm audit --audit-level=moderate", {"" stdio: "pipe","" encoding: "utf8"});" if (result.includes("found 0 vulnerabilities")) {" this.log("Security check passed"); return true; } else {" this.issues.push("Security vulnerabilities found");"" this.log("WARNING: Security vulnerabilities found", "WARN"); / Try to auto-fix try {" this.log("Attempting to fix security vulnerabilities.");"" execSync("npm audit fix --force", { stdio: "pipe" });" this.log("Security vulnerabilities fixed"); return true; } catch (fixError) {""` this.log(`ERROR: Security fix failed: ${fixError.message}`, "ERROR"); return false; } } } catch (error) {"` this.issues.push(`Security check failed: ${error.message}`);""` this.log(`ERROR: Security check failed: ${error.message}`, "ERROR"); return false; } } async checkDiskSpace() {" this.log("Checking disk space."); try {"" const result = execSync("df -h .", { stdio: "pipe", encoding: "utf8" });" const lines = result.trim().split("\n"); const dataLine = lines[1]; const parts = dataLine.split(/\s+/);" const usedPercent = parseInt(parts[4].replace("%", "")); if (usedPercent > 90) {"` this.issues.push(`Disk space critical: ${usedPercent}% used`); this.log("` `CRITICAL: Disk space critical: ${usedPercent}% used`," "ERROR" ); return false; } else if (usedPercent > 80) {"` this.issues.push(`Disk space warning: ${usedPercent}% used`);""` this.log(`WARNING: Disk space warning: ${usedPercent}% used`, "WARN"); }"` this.log(`Disk space check passed: ${usedPercent}% used`); return true; } catch (error) {""` this.log(`WARNING: Could not check disk space: ${error.message}`, "WARN");" return true; / Don"t fail the health check for this } } async runAllChecks() {" this.log("Starting comprehensive health check."); const checks = [this.checkDependencies(), this.checkBuild(), this.checkLinting(), this.checkTypeScript(), this.checkSecurity(), this.checkDiskSpace(), ]; const results = await Promise.all(checks); const passed = results.filter(r => r).length; const total = results.length; const endTime = new Date(); const duration = endTime - this.startTime; this.log("` `Health check completed: ${passed}/${total} checks passed in ${duration}ms` ); if (this.issues.length > 0) {""` this.log(`Issues found: ${this.issues.length}`, "WARN");"` this.issues.forEach(issue => this.log(` - ${issue}`, "WARN")); } else {" this.log("All health checks passed successfully"); } / Write summary to file const summary = {" timestamp: endTime.toISOString()," duration: duration," checksPassed: passed," totalChecks: total," issues: this.issues,"" status: this.issues.length === 0 ? "HEALTHY" : "ISSUES_FOUND"}; try { fs.writeFileSync(" path.join(__dirname, "./logs/health-check-summary.json"), JSON.stringify(summary, null, 2) ); } catch (error) {""` this.log(`ERROR: Failed to write summary: ${error.message}`, "ERROR"); } return this.issues.length === 0; }}/ Run health check if called directlyif (require.main === module) { const healthChecker = new HealthChecker(); healthChecker .runAllChecks() .then(success => { process.exit(success ? 0 : 1); }) .catch(error => {"" console.error("Health check failed: ", error); process.exit(1); });}module.exports = HealthChecker;'"`'"`
#!/usr/bin/env node;
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
#!/usr/bin/env node
#!/usr/bin/env node
/**
 * Health Check Monitor
 * Monitors application health and provides alerts
 */
const { execSync } = require('child_process');
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
const fs = require('fs');
=======
<<<<<<< HEAD

>>>>>>> origin/main
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

console.log('🏥 Running Health Check...');

class HealthChecker {
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
const healthCheck = {
  timestamp: new Date().toISOString(),
  checks: {},
  status: 'healthy',
};
  "timestamp": new Date().toISOString(),
  "checks": {},
  "status": 'healthy'};
// package.json
try {
  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  healthCheck.checks.packageJson = {
    status: 'ok',
    version: pkg.version || null,
  };
} catch {
  healthCheck.checks.packageJson = {
    status: 'error',
    message: 'package.json not readable',
  };
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
    status: hasNodeModules ? 'ok' : 'warning',
    message: hasNodeModules ? 'Dependencies installed' : 'node_modules missing',
  };
} catch {
  healthCheck.checks.dependencies = {
    status: 'error',
    message: 'Failed to check dependencies',
  };
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
    status: 'warning',
    message: 'Unable to get disk info',
  };
    "status": 'warning',
    "message": 'Unable to get disk info'};
}
// memory
try {
  const mem = execSync('free -h', { "encoding": 'utf8' });
  healthCheck.checks.memory = { "status": 'ok', "details": mem.split('\n')[1] };
} catch {
  healthCheck.checks.memory = {
    status: 'warning',
    message: 'Unable to get memory info',
  };
    "status": 'warning',
    "message": 'Unable to get memory info'};
}
// build dir
try {
  const hasBuild =
    fs.existsSync('.next') || fs.existsSync('dist') || fs.existsSync('build');
  healthCheck.checks.build = { status: hasBuild ? 'ok' : 'info' };
} catch {
  healthCheck.checks.build = {
    status: 'warning',
    message: 'Unable to check build dir',
  };
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
}`);
if (healthCheck.status === 'healthy') {
  process.exit(0);
} else {
  process.exit(1);
}
=======

<<<<<<< HEAD
console.log('🏥 Running Health Check...');

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
class HealthChecker {
class HealthCheckMonitor {
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  constructor() {
    this.reportsDir = path.join(process.cwd(), 'automation-reports');
    this.ensureReportsDir();
  }
  ensureReportsDir() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }
  log(message) {
    const timestamp = new Date().toISOString();
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(logMessage.trim());
=======
    console.log(`[${timestamp}] ${message}`);
  }

  async runHealthCheck() {
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
<<<<<<< HEAD
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(logMessage.trim());
<<<<<<< HEAD
    );
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }
  async runCommand(command, description) {
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    try {
      fs.mkdirSync(path.dirname(this.logFile), { recursive: true });
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      console.error('Failed to write to log file: ', error.message);
    }
=======
    console.log(`[${timestamp}] ${message}`);
>>>>>>> origin/main
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    try {
      fs.mkdirSync(path.dirname(this.logFile), { recursive: true });
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      console.error('Failed to write to log file: ', error.message);
    }
  }
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-2480
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  async checkDependencies() {
    this.log('Checking dependencies.');
    try {
      // Check if node_modules exists
      if (!fs.existsSync('node_modules')) {
        this.issues.push('node_modules directory missing');
        this.log('CRITICAL: node_modules directory missing', 'ERROR');
        return false;
      }
      // Check package.json
      if (!fs.existsSync('package.json')) {
        this.issues.push('package.json missing');
        this.log('CRITICAL: package.json missing', 'ERROR');
        return false;
      }
      // Check for critical dependencies
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const criticalDeps = ['react', 'react-dom'];
      for (const dep of criticalDeps) {
        if (!packageJson.dependencies[dep] && !packageJson.devDependencies[dep]) {
          this.issues.push(`Critical dependency missing: ${dep}`);
          this.log(`WARNING: Critical dependency missing: ${dep}`, 'WARN');
        }
      }
      this.log('Dependencies check completed');
      return true;
    } catch (error) {
      this.issues.push(`Dependency check failed: ${error.message}`);
      this.log(`ERROR: Dependency check failed: ${error.message}`, 'ERROR');
      return false;
    }
  }
  async checkBuild() {
    this.log('Checking build status.');
    try {
      // Check if dist directory exists
      if (!fs.existsSync('dist')) {
        this.issues.push('Build directory (dist) missing');
        this.log('WARNING: Build directory missing, attempting to build.', 'WARN');
        try {
          execSync('npm run build', { stdio: 'pipe' });
          this.log('Build completed successfully');
        } catch (buildError) {
          this.issues.push(`Build failed: ${buildError.message}`);
          this.log(`ERROR: Build failed: ${buildError.message}`, 'ERROR');
          return false;
        }
      }
      this.log('Build check completed');
      return true;
    } catch (error) {
      this.issues.push(`Build check failed: ${error.message}`);
      this.log(`ERROR: Build check failed: ${error.message}`, 'ERROR');
      return false;
    }
  }
  async checkLinting() {
    this.log('Checking linting.');
    try {
      execSync('npm run lint', { stdio: 'pipe' });
      this.log('Linting passed');
      return true;
    } catch (error) {
      this.issues.push(`Linting failed: ${error.message}`);
      this.log(`WARNING: Linting issues found: ${error.message}`, 'WARN');
      // Try to auto-fix
      try {
        this.log('Attempting to auto-fix linting issues.');
        execSync('npm run lint:fix', { stdio: 'pipe' });
        this.log('Linting auto-fix completed');
        return true;
      } catch (fixError) {
        this.log(`ERROR: Auto-fix failed: ${fixError.message}`, 'ERROR');
        return false;
      }
    }
  }
  async checkTypeScript() {
    this.log('Checking TypeScript.');
    try {
      execSync('npm run type-check', { stdio: 'pipe' });
      this.log('TypeScript check passed');
      return true;
    } catch (error) {
      this.issues.push(`TypeScript errors: ${error.message}`);
      this.log(`ERROR: TypeScript errors found: ${error.message}`, 'ERROR');
      return false;
    }
  }
  async checkSecurity() {
    this.log('Checking security vulnerabilities.');
    try {
      const result = execSync('npm audit --audit-level=moderate', {
        stdio: 'pipe',
        encoding: 'utf8'
      });
      if (result.includes('found 0 vulnerabilities')) {
        this.log('Security check passed');
        return true;
      } else {
        this.issues.push('Security vulnerabilities found');
        this.log('WARNING: Security vulnerabilities found', 'WARN');
        // Try to auto-fix
        try {
          this.log('Attempting to fix security vulnerabilities.');
          execSync('npm audit fix --force', { stdio: 'pipe' });
          this.log('Security vulnerabilities fixed');
          return true;
        } catch (fixError) {
          this.log(`ERROR: Security fix failed: ${fixError.message}`, 'ERROR');
          return false;
        }
      }
    } catch (error) {
      this.issues.push(`Security check failed: ${error.message}`);
      this.log(`ERROR: Security check failed: ${error.message}`, 'ERROR');
      return false;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  async checkApplicationHealth() {
    this.log('🏥 Checking application health...');
    const healthChecks = [
      { command: 'npm run build', description: 'Build health check' },
      { command: 'npm run test:smoke', description: 'Test health check' },
    ];
    let healthy = true;
    for (const check of healthChecks) {
      const result = await this.runCommand(check.command, check.description);
      if (!result.success) {
        healthy = false;
      }
    }
    this.healthStatus = healthy ? 'healthy' : 'unhealthy';
    this.lastCheck = new Date();
    if (healthy) {
      this.log('✅ Application is healthy');
    } else {
      this.log('❌ Application health issues detected', 'ERROR');
    }
    return healthy;
  }
  async checkDependencies() {
    this.log('📦 Checking dependencies...');
    const depCheck = await this.runCommand(
      'npm audit --audit-level=moderate',
      'Dependency security check'
    );
    if (depCheck.success) {
      this.log('✅ Dependencies are secure');
    } else {
      this.log('⚠️ Dependency issues found', 'WARN');
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    }
  }
  async checkDiskSpace() {
<<<<<<< HEAD
    this.log('Checking disk space.');
=======
<<<<<<< HEAD
<<<<<<< HEAD
    this.log('Checking disk space.');
=======
<<<<<<< HEAD
    this.log('Checking disk space...');
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
<<<<<<< HEAD
    this.log('Checking disk space...');
=======
    this.log('Checking disk space.');
>>>>>>> cursor/automate-test-improve-and-merge-code-2480
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    try {
      const result = execSync('df -h .', { stdio: 'pipe', encoding: 'utf8' });
      const lines = result.trim().split('\n');
      const dataLine = lines[1];
      const parts = dataLine.split(/\s+/);
      const usedPercent = parseInt(parts[4].replace('%', ''));
      if (usedPercent > 90) {
        this.issues.push(`Disk space critical: ${usedPercent}% used`);
        this.log(`CRITICAL: Disk space critical: ${usedPercent}% used`, 'ERROR');
        return false;
      } else if (usedPercent > 80) {
        this.issues.push(`Disk space warning: ${usedPercent}% used`);
        this.log(`WARNING: Disk space warning: ${usedPercent}% used`, 'WARN');
      }
      this.log(`Disk space check passed: ${usedPercent}% used`);
      return true;
    } catch (error) {
      this.log(`WARNING: Could not check disk space: ${error.message}`, 'WARN');
      return true; // Don't fail the health check for this
    }
  }
  async runAllChecks() {
    this.log('Starting comprehensive health check.');
<<<<<<< HEAD
=======
    
<<<<<<< HEAD
=======
  async runHealthCheck() {
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    const checks = [
      { name: 'Build Status', command: 'npm run build' },
      { name: 'Test Status', command: 'npm run test:smoke' },
      { name: 'Lint Status', command: 'npm run lint:check' },
      { name: 'Type Check', command: 'npm run type-check' },
      { name: 'Security Audit', command: 'npm audit' }
    ];
    const results = [];
    let passedChecks = 0;
    for (const check of checks) {
      try {
        this.log(`🔍 Running ${check.name}...`);
        execSync(check.command, { stdio: 'pipe' });
        console.log(`✅ ${check.name} OK`);
        results.push({ name: check.name, status: 'passed', error: null });
        passedChecks++;
      } catch (error) {
        console.log(`❌ ${check.name} FAILED`);
        results.push({ name: check.name, status: 'failed', error: error.message });
      }
    }
    // Write summary to file
    const summary = {
      timestamp: endTime.toISOString(),
      duration: duration,
      checksPassed: passed,
      totalChecks: total,
      issues: this.issues,
      status: this.issues.length === 0 ? 'HEALTHY' : 'ISSUES_FOUND'
    };
    try {
      fs.writeFileSync(
        path.join(__dirname, '../logs/health-check-summary.json'),
        JSON.stringify(summary, null, 2)
      );
    } catch (error) {
      this.log(`ERROR: Failed to write summary: ${error.message}`, 'ERROR');
    }
    return this.issues.length === 0;
  }
}
// Run health check if called directly
if (require.main === module) {
  const healthChecker = new HealthChecker();
  healthChecker
    .runAllChecks()
    .then(success => {
      process.exit(success ? 0 : 1);
    })
    .catch(error => {
    this.log('💾 Checking disk space...');
    const diskCheck = await this.runCommand(
      'df -h /workspace',
      'Disk space check'
    );
    if (diskCheck.success) {
      this.log('✅ Disk space check completed');
    }
  }
  async generateHealthReport() {
    this.log('📊 Generating health report...');
    const report = {
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      timestamp: new Date().toISOString(),
      totalChecks: checks.length,
      passedChecks,
      failedChecks: checks.length - passedChecks,
      results,
      overallHealth: passedChecks === checks.length ? 'healthy' : 'unhealthy'
    };
<<<<<<< HEAD
    const reportPath = path.join(this.reportsDir, 'health-check-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
=======
<<<<<<< HEAD

    const reportPath = path.join(this.reportsDir, 'health-check-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 Health check completed! Report saved to: ${reportPath}`);
    this.log(`📈 Overall Health: ${report.overallHealth} (${passedChecks}/${checks.length} checks passed)`);
    
    return report;
  }
}

<<<<<<< HEAD
// Run health check if called directly
if (require.main === module) {
  const healthChecker = new HealthChecker();
  healthChecker
    .runAllChecks()
    .then(success => {
      process.exit(success ? 0 : 1);
    })
    .catch(error => {
<<<<<<< HEAD
      console.error('Health check failed: ', error);
      process.exit(1);
    });
}

module.exports = HealthChecker;
=======
      this.issues.push(`Dependency check "failed": ${error.message}`);
      this.log(`"ERROR": Dependency check failed: ${error.message}`, 'ERROR');
class HealthChecker {}
  constructor() {}
    this.healthCheck = {}
=======
    this.log('💾 Checking disk space...');
    
    const diskCheck = await this.runCommand(
      'df -h /workspace',
      'Disk space check'
    );
    
    if (diskCheck.success) {
      this.log('✅ Disk space check completed');
    }
  }

  async generateHealthReport() {
    this.log('📊 Generating health report...');
    
    const report = {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
      timestamp: new Date().toISOString(),
      healthStatus: this.healthStatus,
      lastCheck: this.lastCheck,
      checks: {
        application: 'completed',
        dependencies: 'completed',
        diskSpace: 'completed'
      },
      recommendations: this.generateRecommendations()
    };
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
  };
  async runAllChecks() {}
    try {}
      await this.checkDiskSpace();
      await this.checkMemory();
      await this.checkBuild();
      await this.checkLint();
      await this.checkTypeCheck();
      await this.checkSecurity();
      this.determineOverallStatus();
      this.saveReport();
      return this.healthCheck.status === 'healthy';
    } catch (error) {}
      console.error('Health check failed:', error);
      return false;
    };
  };
  async checkDiskSpace() {}
    try {}
      const stats = execSync('df -h .', { encoding: 'utf8' }
});
      const lines = stats.split('\n');
      const rootLine = lines[1];
      const usage = rootLine.split(/\s+/)[4];
      this.healthCheck.checks.disk = {}
        status: usage.includes('%') && parseInt(usage) < 90 ? 'ok' : 'warning',
        details: `Disk usage: ${usage}`,`
        message: usage.includes('%') && parseInt(usage) < 90 ? 'Disk space is healthy' : 'Disk space is low'
      };
    } catch (error) {}
      this.healthCheck.checks.disk = {}
        status: 'error',
        message: 'Failed to check disk space'
      };
    };
  };
  async checkMemory() {}
    try {}
      const mem = execSync('free -h', { encoding: 'utf8' }
});
      this.healthCheck.checks.memory = {}
        status: 'ok',
        details: mem.split('\n')[1],
        message: 'Memory check completed'
      };
    } catch (error) {}
      this.healthCheck.checks.memory = {}
        status: 'error',
        message: 'Failed to check memory'
      };
    };
  };
  async checkBuild() {}
    try {}
      execSync('npm run build', { stdio: 'pipe' }
});
      this.healthCheck.checks.build = {}
        status: 'ok',
        message: 'Build successful'
      };
    } catch (error) {}
      this.healthCheck.checks.build = {}
        status: 'error',
        message: 'Build failed'
      };
    };
  };
  async checkLint() {}
    try {}
      execSync('npm run lint', { stdio: 'pipe' }
});
      this.healthCheck.checks.lint = {}
        status: 'ok',
        message: 'Linting passed'
      };
    } catch (error) {}
      try {}
        execSync('npm run lint:fix', { stdio: 'pipe' }
});
        this.healthCheck.checks.lint = {}
          status: 'warning',
          message: 'Linting issues were auto-fixed'
        };
      } catch (fixError) {}
        this.healthCheck.checks.lint = {}
          status: 'error',
          message: 'Linting failed and could not be auto-fixed'
        };
      };
    };
  };
  async checkTypeCheck() {}
    try {}
      execSync('npm run type-check', { stdio: 'pipe' }
});
      this.healthCheck.checks.typeCheck = {}
        status: 'ok',
        message: 'Type checking passed'
      };
    } catch (error) {}
      this.healthCheck.checks.typeCheck = {}
        status: 'error',
        message: 'Type checking failed'
      };
    };
  };
  async checkSecurity() {}
    try {}
      execSync('npm audit', { stdio: 'pipe' }
});
      this.healthCheck.checks.security = {}
        status: 'ok',
        message: 'No security vulnerabilities found'
      };
    } catch (error) {}
      try {}
        execSync('npm audit fix --force', { stdio: 'pipe' }
});
        this.healthCheck.checks.security = {}
          status: 'warning',
          message: 'Security vulnerabilities were auto-fixed'
        };
      } catch (fixError) {}
        this.healthCheck.checks.security = {}
          status: 'error',
          message: 'Security vulnerabilities found and could not be auto-fixed'
        };
      };
    };
  };
  determineOverallStatus() {}
    const checks = Object.values(this.healthCheck.checks);
    const hasErrors = checks.some(check => check.status === 'error');
    const hasWarnings = checks.some(check => check.status === 'warning');
    if (hasErrors) {}
      this.healthCheck.status = 'unhealthy';
    } else if (hasWarnings) {}
      this.healthCheck.status = 'warning';
    } else {}
      this.healthCheck.status = 'healthy';
    };
  };
  saveReport() {}
    const reportPath = path.join(process.cwd(), 'health-report.json');
    try {}
      fs.writeFileSync(reportPath, JSON.stringify(this.healthCheck, null, 2));
      console.log(`Health report saved to ${reportPath}`);
    } catch (error) {}
      console.error('Failed to save health report:', error);
    };
  };
};
// Run if called directly;
if (require.main === module) {}
  const checker = new HealthChecker();
  checker.runAllChecks().then(success => {})
    console.log(`Health check ${success ? 'passed' : 'failed'}`);
    process.exit(success ? 0 : 1);
  }
});
};
module.exports = HealthChecker;
#!/usr/bin/env node
/**
 * Health Check Script for Zion Tech Group Automation System
 * Performs comprehensive health checks and reports system status
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
console.log('🩺 Zion Tech Group - System Health Check');
console.log('');
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
=======

<<<<<<< HEAD
    const reportFile = path.join(__dirname, 'logs', 'health-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`📄 Health report saved to: ${reportFile}`);
  }

  generateRecommendations() {
    const recommendations = [];
=======
    const reportPath = path.join(this.reportsDir, 'health-check-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
    
<<<<<<< HEAD
    this.log(`📊 Health check completed! Report saved to: ${reportPath}`);
    this.log(`📈 Overall Health: ${report.overallHealth} (${passedChecks}/${checks.length} checks passed)`);
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    if (this.healthStatus === 'unhealthy') {
      recommendations.push('Address build or test failures');
      recommendations.push('Check application logs for errors');
    }
    return report;
  }
}
      console.error('Health check failed: ', error);
      process.exit(1);
    });
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
// Save health report
const reportPath = 'health-check-report.json';
fs.writeFileSync(reportPath, JSON.stringify(healthReport, null, 2));
console.log('\n📊 Health Check Summary');
console.log('==');
console.log(`Total Checks: ${healthReport.summary.total}`);
console.log(`✅ Passed: ${healthReport.summary.passed}`);
console.log(`⚠️  Warnings: ${healthReport.summary.warnings}`);
console.log(`❌ Failed: ${healthReport.summary.failed}`);
console.log(`\nOverall Status: ${healthReport.status.toUpperCase()}`);
console.log(`\n📄 Report saved to: ${reportPath}`);
// Exit with appropriate code
if (healthReport.status === 'unhealthy') {
    process.exit(1);
} else if (healthReport.status === 'degraded') {
    process.exit(2);
} else {
    process.exit(0);
}
=======

<<<<<<< HEAD
// Run health check
const healthChecker = new HealthChecker();
healthChecker.runHealthCheck().catch(console.error);
=======
<<<<<<< HEAD
// Run if called directly
if (require.main === module) {
  const monitor = new HealthCheckMonitor();
  monitor.start().catch(console.error);
}

module.exports = HealthCheckMonitor;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
// Run health check
const healthChecker = new HealthChecker();
healthChecker.runHealthCheck().catch(console.error);
=======
=======

module.exports = HealthChecker;
>>>>>>> cursor/automate-test-improve-and-merge-code-2480
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
#!/usr/bin/env node
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const { execSync } = require('child_process');
console.log('🏥 Running Health Check...');
const checks = [
  { name: 'Build Status', command: 'npm run build' },
  { name: 'Test Status', command: 'npm run test:smoke' },
  { name: 'Lint Status', command: 'npm run lint:check' },
  { name: 'Type Check', command: 'npm run type-check' }
];
checks.forEach(check => {
  try {
    execSync(check.command, { stdio: 'pipe' });
    console.log(`✅ ${check.name}: OK`);
  } catch (error) {
    console.log(`❌ ${check.name}: FAILED`);
  }
<<<<<<< HEAD
});
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
module.exports = HealthChecker;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
module.exports = HealthChecker;
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
module.exports = HealthCheckMonitor;



<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======


  // TODO: Implement









>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
=======
=======
});
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2197
<<<<<<< HEAD
>>>>>>> origin/main
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
