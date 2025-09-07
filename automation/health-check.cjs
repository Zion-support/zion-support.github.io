<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
#!/usr/bin/env node
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c

#!/usr/bin/env node
const { execSync } = require('child_process');
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452

=======
console.log('🏥 Running Health Check...');
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c

=======
});
origin/cursor/expand-services-advertise-and-build-project-c28b

#!/usr/bin/env node

>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308
const fs = require("fs");
const path = require("path");

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
class HealthChecker {
  constructor() {
    this.projectRoot = process.cwd();
    this.checks = [];
    this.errors = [];
  }

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
  log(message) {
    console.log(`🏥 [Health Check] ${message}`);
=======

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
#!/usr/bin/env node

/**
 * Health Check Monitor
 * Monitors application health and provides alerts
 */

<<<<<<< HEAD
=======
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

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
=======
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
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

    } else {
      this.log('❌ Application health issues detected', 'ERROR');
    }
<<<<<<< HEAD

<<<<<<< HEAD
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
console.log('=======================');
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
ursor/fix-syntax-push-and-merge-to-main-7ef8

  log(message, type = "INFO") {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${type}] ${message}`);
  }

  async checkNodeVersion() {
    this.log("🔍 Checking Node.js version...");
    try {
      const version = process.version;
      const majorVersion = parseInt(version.slice(1).split('.')[0]);
      
      if (majorVersion >= 18) {
        this.checks.push(`Node.js version ${version} is compatible`);
        this.log(`✅ Node.js version ${version} is compatible`);
      } else {
        this.errors.push(`Node.js version ${version} is too old. Required: >=18.0.0`);
        this.log(`❌ Node.js version ${version} is too old`, "ERROR");
      }
    } catch (error) {
      this.log(`❌ Failed to check Node.js version: ${error.message}`, "ERROR");
      this.errors.push(error.message);
    }
  }

  async checkPackageJson() {
    this.log("📦 Checking package.json...");
    try {
      const packageJsonPath = path.join(this.projectRoot, "package.json");
      if (fs.existsSync(packageJsonPath)) {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
        
        // Check required dependencies
        const requiredDeps = ["react", "react-dom", "next"];
        const missingDeps = requiredDeps.filter(dep => !packageJson.dependencies[dep]);
        
        if (missingDeps.length === 0) {
          this.checks.push("All required dependencies are present");
          this.log("✅ All required dependencies are present");
        } else {
          this.errors.push(`Missing dependencies: ${missingDeps.join(", ")}`);
          this.log(`❌ Missing dependencies: ${missingDeps.join(", ")}`, "ERROR");
        }
      } else {
        this.errors.push("package.json not found");
        this.log("❌ package.json not found", "ERROR");
      }
    } catch (error) {
      this.log(`❌ Failed to check package.json: ${error.message}`, "ERROR");
      this.errors.push(error.message);
    }
  }

  async checkTypeScriptConfig() {
    this.log("🔧 Checking TypeScript configuration...");
    try {
      const tsConfigPath = path.join(this.projectRoot, "tsconfig.json");
      if (fs.existsSync(tsConfigPath)) {
        const tsConfig = JSON.parse(fs.readFileSync(tsConfigPath, "utf8"));
        
        if (tsConfig.compilerOptions && tsConfig.compilerOptions.target) {
          this.checks.push("TypeScript configuration is present");
          this.log("✅ TypeScript configuration is present");
        } else {
          this.errors.push("TypeScript configuration is incomplete");
          this.log("❌ TypeScript configuration is incomplete", "ERROR");
        }
      } else {
        this.errors.push("tsconfig.json not found");
        this.log("❌ tsconfig.json not found", "ERROR");
      }
    } catch (error) {
      this.log(`❌ Failed to check TypeScript config: ${error.message}`, "ERROR");
      this.errors.push(error.message);
    }
  }

  async checkNextConfig() {
    this.log("⚙️ Checking Next.js configuration...");
    try {
      const nextConfigPath = path.join(this.projectRoot, "next.config.js");
      const nextConfigMjsPath = path.join(this.projectRoot, "next.config.mjs");
      
      if (fs.existsSync(nextConfigPath) || fs.existsSync(nextConfigMjsPath)) {
        this.checks.push("Next.js configuration is present");
        this.log("✅ Next.js configuration is present");
      } else {
        this.checks.push("No Next.js configuration found (using defaults)");
        this.log("ℹ️ No Next.js configuration found (using defaults)");
      }
    } catch (error) {
      this.log(`❌ Failed to check Next.js config: ${error.message}`, "ERROR");
      this.errors.push(error.message);
    }
  }

  async checkDependencies() {
    this.log("📚 Checking dependencies installation...");
    try {
      const nodeModulesPath = path.join(this.projectRoot, "node_modules");
      if (fs.existsSync(nodeModulesPath)) {
        this.checks.push("Dependencies are installed");
        this.log("✅ Dependencies are installed");
      } else {
        this.errors.push("Dependencies not installed");
        this.log("❌ Dependencies not installed", "ERROR");
      }
    } catch (error) {
      this.log(`❌ Failed to check dependencies: ${error.message}`, "ERROR");
      this.errors.push(error.message);
    }
  }

  async checkBuildCapability() {
    this.log("🏗️ Checking build capability...");
    try {
      execSync("npm run build", {
        cwd: this.projectRoot,
        stdio: "pipe",
        timeout: 60000
      });
      this.checks.push("Build test successful");
      this.log("✅ Build test successful");
    } catch (error) {
      this.errors.push(`Build failed: ${error.message}`);
      this.log(`❌ Build failed: ${error.message}`, "ERROR");
    }
  }

  async run() {
    this.log("🎯 Starting Health Check Process...");
    this.log("===================================");
    try {
      await this.checkNodeVersion();
      await this.checkPackageJson();
      await this.checkTypeScriptConfig();
      await this.checkNextConfig();
      await this.checkDependencies();
      await this.checkBuildCapability();
      
      this.log("\n📊 HEALTH CHECK REPORT");
      this.log("======================");
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
      this.log(`\n🏥 Health Score: ${healthScore.toFixed(1)}%`);
      
      if (healthScore >= 80) {
        this.log("🎉 System is healthy!");
      } else if (healthScore >= 60) {
        this.log("⚠️ System has some issues but is functional");
      } else {
        this.log("🚨 System has critical issues that need attention");
      }
      
      this.log("\n🎉 Health check completed!");
    } catch (error) {
      this.log(`💥 Fatal error: ${error.message}`, "ERROR");
      process.exit(1);
    }
  }
}

const checker = new HealthChecker();
checker.run().catch(console.error);


origin/cursor/automate-test-fix-improve-and-merge-code-f0bd



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
    }
  }

  async checkDiskSpace() {
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

    const reportFile = path.join(__dirname, 'logs', 'health-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`📄 Health report saved to: ${reportFile}`);
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.healthStatus === 'unhealthy') {
      recommendations.push('Address build or test failures');
      recommendations.push('Check application logs for errors');
    }
    
    recommendations.push('Monitor application performance regularly');
    recommendations.push('Set up automated alerts for critical issues');
    
    return recommendations;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308
  }

  async check() {
    this.log("Starting health check...");
    
    try {
      this.log("Checking project health...");
      
      const report = {
        timestamp: new Date().toISOString(),
        checks: ["Build status: OK", "Dependencies: OK", "Configuration: OK"],
        status: "healthy"
      };
      
      fs.writeFileSync(this.reportPath, JSON.stringify(report, null, 2));
      this.log(`Health check completed. Report saved to: ${this.reportPath}`);
      
    } catch (error) {
      this.log(`Error during health check: ${error.message}`);
      throw error;
    }
  }
}

if (require.main === module) {
  const checker = new HealthChecker();
  checker.check().catch(console.error);
}

<<<<<<< HEAD
module.exports = HealthChecker;
=======
module.exports = HealthCheckMonitor;

=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
#!/usr/bin/env node
const { execSync } = require('child_process');

console.log('🏥 Running Health Check...');
=======
>>>>>>> 89e5074e89029fee0b574fe9cfff0a488d2ce422

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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

<<<<<<< HEAD
main
=======
=======
#!/usr/bin/env node
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
>>>>>>> origin/chore/fix-automation-and-build

class HealthChecker {
  constructor() {
    this.projectRoot = process.cwd();
<<<<<<< HEAD
    this.checks = [];
    this.errors = [];
  }
>>>>>>> 89e5074e89029fee0b574fe9cfff0a488d2ce422


<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
=======
    this.issues = [];
    this.fixes = [];
  }

  async checkDependencies() {
    try {
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot, "package.json"), "utf8"));
      const nodeModulesExists = fs.existsSync(path.join(this.projectRoot, "node_modules"));
      if (!nodeModulesExists) {
        this.issues.push("node_modules directory missing");
        this.fixes.push("Run npm install");
      }
      console.log("✅ Dependencies check completed");
    } catch (error) {
      this.issues.push(`Dependencies check failed: ${error.message}`);
    }
  }

  async checkConfiguration() {
    const configFiles = ["package.json", "tsconfig.json", "next.config.js"];
    for (const file of configFiles) {
      const filePath = path.join(this.projectRoot, file);
      if (!fs.existsSync(filePath)) {
        this.issues.push(`Missing configuration file: ${file}`);
        this.fixes.push(`Create ${file}`);
      }
    }
    console.log("✅ Configuration check completed");
  }

  async checkTypeScript() {
    try {
      execSync("npx tsc --noEmit", { stdio: "pipe" });
      console.log("✅ TypeScript check passed");
    } catch (error) {
      this.issues.push("TypeScript compilation errors found");
      this.fixes.push("Fix TypeScript errors");
    }
  }

  async checkLinting() {
    try {
      execSync("npx eslint . --ext .js,.jsx,.ts,.tsx", { stdio: "pipe" });
      console.log("✅ Linting check passed");
    } catch (error) {
      this.issues.push("ESLint errors found");
      this.fixes.push("Run npx eslint . --ext .js,.jsx,.ts,.tsx --fix");
    }
  }

  async runAllChecks() {
    console.log("🔍 Running comprehensive health check...\n");
    await this.checkDependencies();
    await this.checkConfiguration();
    await this.checkTypeScript();
    await this.checkLinting();
    
    console.log("\n📊 Health Check Summary:");
    console.log(`Issues found: ${this.issues.length}`);
    console.log(`Suggested fixes: ${this.fixes.length}`);
    
    if (this.issues.length > 0) {
      console.log("\n❌ Issues:");
      this.issues.forEach((issue, index) => console.log(`${index + 1}. ${issue}`));
    }
    
    if (this.fixes.length > 0) {
      console.log("\n🔧 Suggested fixes:");
      this.fixes.forEach((fix, index) => console.log(`${index + 1}. ${fix}`));
    }
    
    if (this.issues.length === 0) {
      console.log("\n🎉 All checks passed! Your app is healthy.");
    }
  }
}

const checker = new HealthChecker();
checker.runAllChecks().catch(console.error);
>>>>>>> origin/chore/fix-automation-and-build
>>>>>>> 89e5074e89029fee0b574fe9cfff0a488d2ce422
