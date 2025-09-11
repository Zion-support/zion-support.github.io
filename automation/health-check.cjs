<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const { execSync } = require("child_process");"console.log(" Starting Health Check.");const healthCheck = { timestamp: new Date().toISOString()," checks: {},"" status: "healthy"};/ package.jsontry {" const pkg = JSON.parse(fs.readFileSync("package.json", "utf8")); healthCheck.checks.packageJson = {"" status: "ok"," version: pkg.version | null};} catch { healthCheck.checks.packageJson = {"" status: "error","" message: "package.json not readable"};" healthCheck.status = "unhealthy";}/ dependenciestry {" const hasNodeModules = fs.existsSync("node_modules"); healthCheck.checks.dependencies = {"" status: hasNodeModules ? "ok" : "warning","" message: hasNodeModules ? "Dependencies installed" : "node_modules missing"};} catch { healthCheck.checks.dependencies = {"" status: "error","" message: "Failed to check dependencies"};}/ disktry {"" const stats = execSync("df -h .", { encoding: "utf8" });"" healthCheck.checks.disk = { status: "ok", details: stats.split("\n")[1] };} catch { healthCheck.checks.disk = {"" status: "warning","" message: "Unable to get disk info"};}/ memorytry {"" const mem = execSync("free -h", { encoding: "utf8" });"" healthCheck.checks.memory = { status: "ok", details: mem.split("\n")[1] };} catch { healthCheck.checks.memory = {"" status: "warning","" message: "Unable to get memory info"};}/ build dirtry { const hasBuild =" fs.existsSync(".next") | fs.existsSync("dist") | fs.existsSync("build");"" healthCheck.checks.build = { status: hasBuild ? "ok" : "info" };} catch { healthCheck.checks.build = {"" status: "warning","" message: "Unable to check build dir"};}const reportPath = `health-check-report-${Date.now()}.json`;fs.writeFileSync(reportPath, JSON.stringify(healthCheck, null, 2));"console.log(" Health check completed");"`console.log(` Report saved to: ${reportPath}`);/ Print summaryconst totalChecks = Object.keys(healthCheck.checks).length;const okChecks = Object.values(healthCheck.checks).filter(" check => check.status === "ok").length;const errorChecks = Object.values(healthCheck.checks).filter(" check => check.status === "error").length;"console.log(" Health Check Summary:");`console.log(` - Total checks: ${totalChecks}`);`console.log(` - OK: ${okChecks}`);`console.log(` - Errors: ${errorChecks}`);`console.log(` - Status: ${healthCheck.status.toUpperCase()}`);"if (healthCheck.status === "healthy") {" console.log(" System is healthy!"); process.exit(0);} else {" console.log(" System has issues that need attention"); process.exit(1);}class HealthChecker { constructor() {" this.logFile = path.join(__dirname, "./logs/health-check.log"); this.issues = []; this.startTime = new Date(); }" log(message, level = "INFO") { const timestamp = new Date().toISOString();` const logMessage = `[${timestamp}] [${level}] ${message}\n`; console.log(logMessage.trim()); try { fs.appendFileSync(this.logFile, logMessage); } catch (error) {"" console.error("Failed to write to log file: ", error.message); } } async checkDependencies() {" this.log("Checking dependencies."); try { / Check if node_modules exists" if (!fs.existsSync("node_modules")) {" this.issues.push("node_modules directory missing");"" this.log("CRITICAL: node_modules directory missing", "ERROR"); return false; } / Check package.json" if (!fs.existsSync("package.json")) {" this.issues.push("package.json missing");"" this.log("CRITICAL: package.json missing", "ERROR"); return false; } / Check for critical dependencies" const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));" const criticalDeps = ["next", "react", "react-dom"]; for (const dep of criticalDeps) { if ( !packageJson.dependencies[dep] !packageJson.devDependencies[dep] ) {"` this.issues.push(`Critical dependency missing: ${dep}`);""` this.log(`WARNING: Critical dependency missing: ${dep}`, "WARN"); } }" this.log("Dependencies check completed"); return true; } catch (error) {"` this.issues.push(`Dependency check failed: ${error.message}`);""` this.log(`ERROR: Dependency check failed: ${error.message}`, "ERROR"); return false; } } async checkBuild() {" this.log("Checking build status."); try { / Check if .next directory exists" if (!fs.existsSync(".next")) {" this.issues.push("Build directory (.next) missing"); this.log("" "WARNING: Build directory missing, attempting to build."," "WARN" ); try {"" execSync("npm run build", { stdio: "pipe" });" this.log("Build completed successfully"); } catch (buildError) {"` this.issues.push(`Build failed: ${buildError.message}`);""` this.log(`ERROR: Build failed: ${buildError.message}`, "ERROR"); return false; } }" this.log("Build check completed"); return true; } catch (error) {"` this.issues.push(`Build check failed: ${error.message}`);""` this.log(`ERROR: Build check failed: ${error.message}`, "ERROR"); return false; } } async checkLinting() {" this.log("Checking linting."); try {"" execSync("npm run lint", { stdio: "pipe" });" this.log("Linting passed"); return true; } catch (error) {"` this.issues.push(`Linting failed: ${error.message}`);""` this.log(`WARNING: Linting issues found: ${error.message}`, "WARN"); / Try to auto-fix try {" this.log("Attempting to auto-fix linting issues.");"" execSync("npm run lint: fix", { stdio: "pipe" });" this.log("Linting auto-fix completed"); return true; } catch (fixError) {""` this.log(`ERROR: Auto-fix failed: ${fixError.message}`, "ERROR"); return false; } } } async checkTypeScript() {" this.log("Checking TypeScript."); try {"" execSync("npm run type-check", { stdio: "pipe" });" this.log("TypeScript check passed"); return true; } catch (error) {"` this.issues.push(`TypeScript errors: ${error.message}`);""` this.log(`ERROR: TypeScript errors found: ${error.message}`, "ERROR"); return false; } } async checkSecurity() {" this.log("Checking security vulnerabilities."); try {" const result = execSync("npm audit --audit-level=moderate", {"" stdio: "pipe","" encoding: "utf8"});" if (result.includes("found 0 vulnerabilities")) {" this.log("Security check passed"); return true; } else {" this.issues.push("Security vulnerabilities found");"" this.log("WARNING: Security vulnerabilities found", "WARN"); / Try to auto-fix try {" this.log("Attempting to fix security vulnerabilities.");"" execSync("npm audit fix --force", { stdio: "pipe" });" this.log("Security vulnerabilities fixed"); return true; } catch (fixError) {""` this.log(`ERROR: Security fix failed: ${fixError.message}`, "ERROR"); return false; } } } catch (error) {"` this.issues.push(`Security check failed: ${error.message}`);""` this.log(`ERROR: Security check failed: ${error.message}`, "ERROR"); return false; } } async checkDiskSpace() {" this.log("Checking disk space."); try {"" const result = execSync("df -h .", { stdio: "pipe", encoding: "utf8" });" const lines = result.trim().split("\n"); const dataLine = lines[1]; const parts = dataLine.split(/\s+/);" const usedPercent = parseInt(parts[4].replace("%", "")); if (usedPercent > 90) {"` this.issues.push(`Disk space critical: ${usedPercent}% used`); this.log("` `CRITICAL: Disk space critical: ${usedPercent}% used`," "ERROR" ); return false; } else if (usedPercent > 80) {"` this.issues.push(`Disk space warning: ${usedPercent}% used`);""` this.log(`WARNING: Disk space warning: ${usedPercent}% used`, "WARN"); }"` this.log(`Disk space check passed: ${usedPercent}% used`); return true; } catch (error) {""` this.log(`WARNING: Could not check disk space: ${error.message}`, "WARN");" return true; / Don"t fail the health check for this } } async runAllChecks() {" this.log("Starting comprehensive health check."); const checks = [this.checkDependencies(), this.checkBuild(), this.checkLinting(), this.checkTypeScript(), this.checkSecurity(), this.checkDiskSpace(), ]; const results = await Promise.all(checks); const passed = results.filter(r => r).length; const total = results.length; const endTime = new Date(); const duration = endTime - this.startTime; this.log("` `Health check completed: ${passed}/${total} checks passed in ${duration}ms` ); if (this.issues.length > 0) {""` this.log(`Issues found: ${this.issues.length}`, "WARN");"` this.issues.forEach(issue => this.log(` - ${issue}`, "WARN")); } else {" this.log("All health checks passed successfully"); } / Write summary to file const summary = {" timestamp: endTime.toISOString()," duration: duration," checksPassed: passed," totalChecks: total," issues: this.issues,"" status: this.issues.length === 0 ? "HEALTHY" : "ISSUES_FOUND"}; try { fs.writeFileSync(" path.join(__dirname, "./logs/health-check-summary.json"), JSON.stringify(summary, null, 2) ); } catch (error) {""` this.log(`ERROR: Failed to write summary: ${error.message}`, "ERROR"); } return this.issues.length === 0; }}/ Run health check if called directlyif (require.main === module) { const healthChecker = new HealthChecker(); healthChecker .runAllChecks() .then(success => { process.exit(success ? 0 : 1); }) .catch(error => {"" console.error("Health check failed: ", error); process.exit(1); });}module.exports = HealthChecker;'"`'"`
#!/usr/bin/env node;
const fs = require('fs');
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
#!/usr/bin/env node
const { execSync } = require('child_process');
<<<<<<< HEAD

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
});
=======
const fs = require('fs');
const path = require('path');
<<<<<<< HEAD
const healthCheck = {
  timestamp: new Date().toISOString(),
  checks: {},
  status: "healthy"
};

// Check package.json
try {
  const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
  healthCheck.checks.packageJson = {
    status: "ok",
    version: pkg.version || null
  };
} catch (error) {
  healthCheck.checks.packageJson = {
    status: "error",
    message: "package.json not readable"
  };
  healthCheck.status = "unhealthy";
}

// Check dependencies
try {
  const hasNodeModules = fs.existsSync("node_modules");
  healthCheck.checks.dependencies = {
    status: hasNodeModules ? "ok" : "warning",
    message: hasNodeModules ? "Dependencies installed" : "node_modules missing"
  };
} catch (error) {
  healthCheck.checks.dependencies = {
    status: "error",
    message: "Failed to check dependencies"
  };
}

// Check disk space
try {
  const stats = execSync("df -h .", { encoding: "utf8" });
  healthCheck.checks.disk = { 
    status: "ok", 
    details: stats.split("\n")[1] 
  };
} catch (error) {
  healthCheck.checks.disk = {
    status: "warning",
    message: "Unable to get disk info"
  };
}

// Check memory
try {
  const mem = execSync("free -h", { encoding: "utf8" });
  healthCheck.checks.memory = { 
    status: "ok", 
    details: mem.split("\n")[1] 
  };
} catch (error) {
  healthCheck.checks.memory = {
    status: "warning",
    message: "Unable to get memory info"
  };
}

// Check build directory
try {
  const hasBuild = fs.existsSync(".next") || fs.existsSync("dist") || fs.existsSync("build");
  healthCheck.checks.build = { 
    status: hasBuild ? "ok" : "info",
    message: hasBuild ? "Build directory exists" : "No build directory found"
  };
} catch (error) {
  healthCheck.checks.build = {
    status: "warning",
    message: "Unable to check build dir"
  };
}

// Save report
const reportPath = `health-check-report-${Date.now()}.json`;
fs.writeFileSync(reportPath, JSON.stringify(healthCheck, null, 2));

console.log("✅ Health check completed");
console.log(`📄 Report saved to: ${reportPath}`);

// Print summary
const totalChecks = Object.keys(healthCheck.checks).length;
const okChecks = Object.values(healthCheck.checks).filter(check => check.status === "ok").length;
const errorChecks = Object.values(healthCheck.checks).filter(check => check.status === "error").length;

console.log("\n📊 Health Check Summary:");
console.log(`   - Total checks: ${totalChecks}`);
console.log(`   - OK: ${okChecks}`);
console.log(`   - Errors: ${errorChecks}`);
console.log(`   - Status: ${healthCheck.status.toUpperCase()}`);

if (healthCheck.status === "healthy") {
  console.log("🎉 System is healthy!");
  process.exit(0);
} else {
  console.log("⚠️  System has issues that need attention");
  process.exit(1);
}
class HealthChecker {
=======

class HealthCheckMonitor {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'health-check.log');
    this.ensureLogDir();
    this.healthStatus = 'unknown';
    this.lastCheck = null;
=======
#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🏥 Running Health Check...');

class HealthChecker {
  constructor() {
    this.reportsDir = path.join(process.cwd(), 'automation-reports');
    this.ensureReportsDir();
>>>>>>> origin/main
  }

  ensureReportsDir() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }
<<<<<<< HEAD
  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
<<<<<<< HEAD
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(logMessage.trim());
    );
=======
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async runCommand(command, description) {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
    try {
      this.log(`Running: ${description}`);
      const output = execSync(command, {
        encoding: 'utf8',
        cwd: '/workspace',
        stdio: 'pipe',
        timeout: 30000
      });
      this.log(`✅ ${description} completed successfully`);
      return { success: true, output };
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'ERROR');
      return { success: false, error: error.message };
    }
  }
<<<<<<< HEAD
  async checkDependencies() {
    this.log('Checking dependencies...');
    try {
      // Check if node_modules exists
      if (!fs.existsSync('node_modules')) {
        this.issues.push('node_modules directory missing');
        this.log('"CRITICAL": node_modules directory missing', 'ERROR');
        return false;
      }
      // Check package.json
      if (!fs.existsSync('package.json')) {
        this.issues.push('package.json missing');
        this.log('"CRITICAL": package.json missing', 'ERROR');
        return false;
      }
      // Check for critical dependencies
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const criticalDeps = ['next', 'react', 'react-dom'];
      for (const dep of criticalDeps) {
        if (
          !packageJson.dependencies[dep] &&
          !packageJson.devDependencies[dep]
        ) {
          this.issues.push(`Critical dependency missing: ${dep}`);
          this.log(`WARNING: Critical dependency missing: ${dep}`, 'WARN');
          this.issues.push(`Critical dependency "missing": ${dep}`);
          this.log(`"WARNING": Critical dependency missing: ${dep}`, 'WARN');
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
    this.log('Checking build status...');
    try {
      // Check if .next directory exists
      if (!fs.existsSync('.next')) {
        this.issues.push('Build directory (.next) missing');
        this.log(
          'WARNING: Build directory missing, attempting to build...',
          'WARN'
        );
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
    this.log('Checking linting...');
    try {
      execSync('npm run lint', { stdio: 'pipe' });
      this.log('Linting passed');
      return true;
    } catch (error) {
      this.issues.push(`Linting failed: ${error.message}`);
      this.log(`WARNING: Linting issues found: ${error.message}`, 'WARN');
      // Try to auto-fix
      try {
        this.log('Attempting to auto-fix linting issues...');
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
    this.log('Checking TypeScript...');
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
    this.log('Checking security vulnerabilities...');
    try {
      const result = execSync('npm audit --audit-level=moderate', {
        stdio: 'pipe',
        encoding: 'utf8',
      });
      if (result.includes('found 0 vulnerabilities')) {
        this.log('Security check passed');
        return true;
      } else {
        this.issues.push('Security vulnerabilities found');
        this.log('WARNING: Security vulnerabilities found', 'WARN');
        // Try to auto-fix
        try {
          this.log('Attempting to fix security vulnerabilities...');
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
=======

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
    }
  }
  async checkDiskSpace() {
<<<<<<< HEAD
    this.log('Checking disk space...');
    try {
      const result = execSync('df -h .', { stdio: 'pipe', encoding: 'utf8' });
      const lines = result.trim().split('\n');
      const dataLine = lines[1];
      const parts = dataLine.split(/\s+/);
      const usedPercent = parseInt(parts[4].replace('%', ''));
      if (usedPercent > 90) {
        this.issues.push(`Disk space critical: ${usedPercent}% used`);
        this.log(
          `CRITICAL: Disk space critical: ${usedPercent}% used`,
          'ERROR'
        );
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
    this.log('Starting comprehensive health check...');
=======

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }

  async runHealthCheck() {
>>>>>>> origin/main
    const checks = [
      { name: 'Build Status', command: 'npm run build' },
      { name: 'Test Status', command: 'npm run test:smoke' },
      { name: 'Lint Status', command: 'npm run lint:check' },
      { name: 'Type Check', command: 'npm run type-check' },
      { name: 'Security Audit', command: 'npm audit' }
    ];
<<<<<<< HEAD
    const results = await Promise.all(checks);
    const passed = results.filter(r => r).length;
    const total = results.length;
    const endTime = new Date();
    const duration = endTime - this.startTime;
    this.log(
      `Health check completed: ${passed}/${total} checks passed in ${duration}ms`
    );
    if (this.issues.length > 0) {
      this.log(`Issues found: ${this.issues.length}`, 'WARN');
      this.issues.forEach(issue => this.log(`  - ${issue}`, 'WARN'));
    } else {
      this.log('All health checks passed successfully');
    }
    // Write summary to file
    const summary = {
      timestamp: endTime.toISOString(),
      duration: duration,
      checksPassed: passed,
      totalChecks: total,
      issues: this.issues,
      status: this.issues.length === 0 ? 'HEALTHY' : 'ISSUES_FOUND',
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
=======

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

    const report = {
      timestamp: new Date().toISOString(),
      totalChecks: checks.length,
      passedChecks,
      failedChecks: checks.length - passedChecks,
      results,
      overallHealth: passedChecks === checks.length ? 'healthy' : 'unhealthy'
    };
>>>>>>> origin/main

    const reportPath = path.join(this.reportsDir, 'health-check-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
<<<<<<< HEAD
    if (this.healthStatus === 'unhealthy') {
      recommendations.push('Address build or test failures');
      recommendations.push('Check application logs for errors');
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
    }
=======
    this.log(`📊 Health check completed! Report saved to: ${reportPath}`);
    this.log(`📈 Overall Health: ${report.overallHealth} (${passedChecks}/${checks.length} checks passed)`);
>>>>>>> origin/main
    
    return report;
  }
}
<<<<<<< HEAD
// Check if Node.js is working
runCheck('Node.js Environment', () => {
    const version = process.version;
    return {
        status: 'pass',
        message: `Node.js ${version} is running`,
        version: version
    };
});
// Check if npm is available
runCheck('NPM Package Manager', () => {
    try {
        const version = execSync('npm --version', { encoding: 'utf8' }).trim();
        return {
            status: 'pass',
            message: `NPM ${version} is available`,
            version: version
        };
    } catch (error) {
        return {
            status: 'fail',
            message: 'NPM is not available or not working'
        };
    }
});
// Check project structure
runCheck('Project Structure', () => {
    const requiredFiles = ['package.json', 'next.config.js'];
    const missingFiles = [];
    requiredFiles.forEach(file => {
        if (!fs.existsSync(file)) {
            missingFiles.push(file);
        }
    });
    if (missingFiles.length === 0) {
        return {
            status: 'pass',
            message: 'All required project files are present',
            files: requiredFiles
        };
    } else {
        return {
            status: 'fail',
            message: `Missing required files: ${missingFiles.join(', ')}`,
            missing: missingFiles
        };
    }
});
// Check dependencies
runCheck('Dependencies', () => {
    if (!fs.existsSync('node_modules')) {
        return {
            status: 'warning',
            message: 'node_modules directory not found - run npm install',
            recommendation: 'npm install'
        };
    }
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const dependencies = Object.keys(packageJson.dependencies || {});
    return {
        status: 'pass',
        message: `Dependencies installed (${dependencies.length} packages)`,
        count: dependencies.length
    };
});
// Check build capability
runCheck('Build System', () => {
    try {
        // Just check if the build command exists in package.json
        const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
        if (packageJson.scripts && packageJson.scripts.build) {
            return {
                status: 'pass',
                message: 'Build script is configured',
                script: packageJson.scripts.build
            };
        } else {
            return {
                status: 'fail',
                message: 'No build script found in package.json'
            };
        }
    } catch (error) {
        return {
            status: 'fail',
            message: 'Could not read package.json'
        };
    }
});
// Check automation scripts
runCheck('Automation Scripts', () => {
    const automationFiles = [
        'scripts/health-check.sh',
        'scripts/automation-orchestrator.cjs',
        'run-complete-automation.sh'
    ];
    const existingFiles = automationFiles.filter(file => fs.existsSync(file));
    if (existingFiles.length === automationFiles.length) {
        return {
            status: 'pass',
            message: 'All automation scripts are present',
            files: existingFiles
        };
    } else {
        return {
            status: 'warning',
            message: `Some automation scripts missing (${existingFiles.length}/${automationFiles.length})`,
            existing: existingFiles,
            missing: automationFiles.filter(file => !fs.existsSync(file))
        };
    }
});
// Check disk space
runCheck('Disk Space', () => {
    try {
        const stats = execSync('df -h .', { encoding: 'utf8' });
        const lines = stats.trim().split('\n');
        const dataLine = lines[lines.length - 1];
        const parts = dataLine.split(/\s+/);
        const usage = parseInt(parts[4].replace('%', ''));
        if (usage < 80) {
            return {
                status: 'pass',
                message: `Disk usage is healthy (${usage}%)`,
                usage: usage
            };
        } else if (usage < 95) {
            return {
                status: 'warning',
                message: `Disk usage is getting high (${usage}%)`,
                usage: usage
            };
        } else {
            return {
                status: 'fail',
                message: `Disk usage is critical (${usage}%)`,
                usage: usage
            };
        }
    } catch (error) {
        return {
            status: 'warning',
            message: 'Could not check disk space'
        };
    }
});
// Check memory usage
runCheck('Memory Usage', () => {
    try {
        const stats = execSync('free -m', { encoding: 'utf8' });
        const lines = stats.trim().split('\n');
        const memLine = lines[1];
        const parts = memLine.split(/\s+/);
        const total = parseInt(parts[1]);
        const used = parseInt(parts[2]);
        const usage = Math.round((used / total) * 100);
        if (usage < 80) {
            return {
                status: 'pass',
                message: `Memory usage is healthy (${usage}%)`,
                usage: usage,
                total: total,
                used: used
            };
        } else if (usage < 95) {
            return {
                status: 'warning',
                message: `Memory usage is getting high (${usage}%)`,
                usage: usage,
                total: total,
                used: used
            };
        } else {
            return {
                status: 'fail',
                message: `Memory usage is critical (${usage}%)`,
                usage: usage,
                total: total,
                used: used
            };
        }
    } catch (error) {
        return {
            status: 'warning',
            message: 'Could not check memory usage'
        };
    }
});
// Determine overall status
if (healthReport.summary.failed > 0) {
    healthReport.status = 'unhealthy';
} else if (healthReport.summary.warnings > 0) {
    healthReport.status = 'degraded';
}
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
// Run if called directly
if (require.main === module) {
  const monitor = new HealthCheckMonitor();
  monitor.start().catch(console.error);
}

module.exports = HealthCheckMonitor;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
// Run health check
const healthChecker = new HealthChecker();
healthChecker.runHealthCheck().catch(console.error);
>>>>>>> origin/main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
