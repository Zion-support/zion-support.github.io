<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
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
  }
  async check() {
    this.log('🔍 Starting health check...');
    await this.checkApplicationHealth();
    await this.checkDependencies();
    await this.checkDiskSpace();
    await this.generateHealthReport();
    this.log('🎉 Health check completed!');
  }
  async start() {
    this.log('🚀 Health Check Monitor started');
    // Initial health check
    await this.check();
    // Set up periodic health checks every 5 minutes
    setInterval(async () => {
      await this.check();
    }, 5 * 60 * 1000);
    this.log('🔄 Health Check Monitor is running. Checks every 5 minutes.');
  }
}
// Run if called directly
if (require.main === module) {
  const monitor = new HealthCheckMonitor();
  monitor.start().catch(console.error);
}
module.exports = HealthCheckMonitor;
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
=======
#!/usr/bin/env node
const { execSync } = require('child_process');
console.log('🏥 Running Health Check...');
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
const checks = [
  { name: 'Build Status', command: 'npm run build' },
  { name: 'Test Status', command: 'npm run test:smoke' },
  { name: 'Lint Status', command: 'npm run lint:check' },
  { name: 'Type Check', command: 'npm run type-check' }
];
<<<<<<< HEAD

=======
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
checks.forEach(check => {
  try {
    execSync(check.command, { stdio: 'pipe' });
    console.log(`✅ ${check.name}: OK`);
  } catch (error) {
    console.log(`❌ ${check.name}: FAILED`);
  }
});
<<<<<<< HEAD
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

#!/usr/bin/env node

/**
 * Health Check Monitor
 * Monitors application health and provides alerts
 */

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

    } else {
      this.log('❌ Application health issues detected', 'ERROR');
    }

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
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
