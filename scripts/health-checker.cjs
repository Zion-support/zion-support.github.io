<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
#!/usr/bin/env node;
=======
#!/usr/bin/env node
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
/**
 * Health Checker;
 * Comprehensive health check for the application;
 */
const fs = require("child_process");
const path = require("child_process");
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
const { execSync } = require("child_process");
=======
const { execSync } = require("child_process");"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
class HealthChecker {}
  constructor() {}
    this.projectRoot = process.cwd();"
    this.healthStatus = {"overall": "healthy","checks": [],"issues": [];}"
      recommendations: []};
  };"
  log(message, type = "info") {}"
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${message}
    console.log(logEntry)};
  async runHealthChecks() {}
    try {}"
      this.log("Running comprehensive health checks...");"
      await this.checkProjectStructure();
      await this.checkDependencies();
      await this.checkConfiguration();
      await this.checkCodeQuality();
      await this.checkBuildHealth();
      await this.checkSecurity();
      this.determineOverallHealth();"

  async checkDependencies() {}
      this.log("Checking dependencies...");"
      // Check if package.json exists and is valid;"
      if (fs.existsSync("package.json")) {}
        const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
        this.healthStatus.checks.push({"name": "Package.json","status": "pass";})
          message: "Valid package.json found"}"
});
        // Check for critical dependencies;"
        const criticalDeps = ["next", "react", "react-dom"];"
        for (const dep of criticalDeps) {}
          if (packageJson.dependencies && packageJson.dependencies[dep]) {}

      } else {}"
        this.healthStatus.checks.push({"name": "Package.json","status": "fail";})
          message: "package.json not found"}"
});"

  async checkConfiguration() {}
      this.log("Checking configuration files...");"
      // Check Next.js config;"
      if (fs.existsSync("next.config.js")) {}
        const config = fs.readFileSync("next.config.js", "utf8");
        if (config.includes("experimental") || config.includes("webpack")) {}
          this.healthStatus.checks.push({"name": "Next.js Config","status": "pass";})
            message: "Configuration file exists and has custom settings"})} else {}
          this.healthStatus.checks.push({"name": "Next.js Config","status": "warn";})
            message: "Basic configuration detected"})};"

  async checkCodeQuality() {}
      this.log("Checking code quality...");"
      // Check for ESLint config;"
      const eslintConfigs = [".eslintrc.js", ".eslintrc.json", "eslint.config.js"];"
      let eslintFound = false;
      for (const config of eslintConfigs) {}
        if (fs.existsSync(config)) {}
          eslintFound = true;
          break};
      if (eslintFound) {}"
        this.healthStatus.checks.push({"name": "ESLint Config","status": "pass";})
          message: "ESLint configuration found"})} else {}
        this.healthStatus.checks.push({"name": "ESLint Config","status": "warn";})
          message: "No ESLint configuration found"}"
        this.healthStatus.recommendations.push("Add ESLint configuration for code quality")};"
      // Check for Prettier config;"
      const prettierConfigs = [".prettierrc", ".prettierrc.js", "prettier.config.js"];"
      let prettierFound = false;
      for (const config of prettierConfigs) {}
          prettierFound = true;
      if (prettierFound) {}"
        this.healthStatus.checks.push({"name": "Prettier Config","status": "pass";})
          message: "Prettier configuration found"})} else {}
        this.healthStatus.checks.push({"name": "Prettier Config","status": "warn";})
          message: "No Prettier configuration found"}"

  async checkBuildHealth() {}
      this.log("Checking build health...");"
      // Try to run a build;
        execSync("npm run build", { "cwd": this.projectRoot, "stdio": "pipe" }")

  async checkSecurity() {}
      this.log("Checking security...");"
      // Check for security configuration;"
      if (fs.existsSync("security.config.js")) {}
        this.healthStatus.checks.push({"name": "Security Config","status": "pass";})
          message: "Security configuration found"})} else {}
        this.healthStatus.checks.push({"name": "Security Config","status": "warn";})
          message: "No security configuration found"}"
        this.healthStatus.recommendations.push("Add security configuration for headers and CSP")};"
      // Check for .env files;"
      const envFiles = [".env", ".env.local", ".env.production"];"
      for (const envFile of envFiles) {}
        if (fs.existsSync(envFile)) {}

  determineOverallHealth() {}"
    const failedChecks = this.healthStatus.checks.filter(check => check.status === "fail");
    const warningChecks = this.healthStatus.checks.filter(check => check.status === "warn");"
    if (failedChecks.length > 0) {}"
      this.healthStatus.overall = "unhealthy"} else if (warningChecks.length > 0) {}
      this.healthStatus.overall = "warning"} else {}
      this.healthStatus.overall = "healthy"};"
  async generateHealthReport() {}
    const report = {}"
      "timestamp": new Date().toISOString();"
      overall: this.healthStatus.overall;,"
  summary: {totalChecks: this.healthStatus.checks.length,"passed": this.healthStatus.checks.filter(c => c.status === "pass").length,"warnings": this.healthStatus.checks.filter(c => c.status === "warn").length;}
        failed: this.healthStatus.checks.filter(c => c.status === "fail").length};
      "checks": this.healthStatus.checks;"
      issues: this.healthStatus.issues;,
  recommendations: this.healthStatus.recommendations};"
    const reportPath = path.join(this.projectRoot, "health-checker-report.json");"

    return report};
  async run() {}"
    this.log("Starting Health Checker");"
    try {}
      await this.runHealthChecks();
      const report = await this.generateHealthReport();"

      this.log(`"Summary": ${report.summary.passed}/${report.summary.totalChecks} checks passed`);"
      if (report.summary.failed > 0) {}"`;
        this.log(`${report.summary.failed} checks failed`, "error")};"
      if (report.summary.warnings > 0) {}"`;
        this.log(`${report.summary.warnings} warnings found`, "warn")};"

      throw error};
// Run the health checker;
if (require.main === module) {}
  const checker = new HealthChecker();
  checker.run().catch(console.error)};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
module.exports = HealthChecker;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
module.exports = HealthChecker;
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
module.exports = HealthChecker;
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class HealthChecker {
  constructor() {
    this.projectRoot = process.cwd();
    this.healthStatus = {
      overall: 'healthy',
      checks: [],
      issues: [],
      recommendations: []
    };
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
    console.log(logEntry);
  }

  async runHealthChecks() {
    this.log('Starting health checks...', 'info');
    
    try {
      await this.checkDependencies();
      await this.checkConfiguration();
      await this.checkBuildProcess();
      await this.checkTestSuite();
      await this.checkLinting();
      
      this.generateReport();
      return this.healthStatus;
    } catch (error) {
      this.log(`Health check failed: ${error.message}`, 'error');
      this.healthStatus.overall = 'unhealthy';
      this.healthStatus.issues.push({
        type: 'system_error',
        message: error.message,
        severity: 'critical'
      });
      return this.healthStatus;
    }
  }

  async checkDependencies() {
    this.log('Checking dependencies...', 'info');
    
    try {
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      if (!fs.existsSync(packageJsonPath)) {
        this.addIssue('missing_package_json', 'package.json not found', 'critical');
        return;
      }

      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      const dependencies = Object.keys(packageJson.dependencies || {});
      const devDependencies = Object.keys(packageJson.devDependencies || {});

      this.log(`Found ${dependencies.length} dependencies and ${devDependencies.length} dev dependencies`, 'info');
      
      // Check for critical dependencies
      const criticalDeps = ['react', 'next', 'typescript'];
      const missingCritical = criticalDeps.filter(dep => !dependencies.includes(dep));
      
      if (missingCritical.length > 0) {
        this.addIssue('missing_critical_deps', `Missing critical dependencies: ${missingCritical.join(', ')}`, 'high');
      }

      this.addCheck('dependencies', 'passed', 'Dependencies check completed');
    } catch (error) {
      this.addIssue('dependency_check_failed', error.message, 'medium');
    }
  }

  async checkConfiguration() {
    this.log('Checking configuration files...', 'info');
    
    const configFiles = [
      'next.config.js',
      'tsconfig.json',
      'eslint.config.js',
      'tailwind.config.js'
    ];

    let configIssues = 0;
    for (const configFile of configFiles) {
      const configPath = path.join(this.projectRoot, configFile);
      if (fs.existsSync(configPath)) {
        this.log(`✓ ${configFile} found`, 'info');
      } else {
        this.log(`✗ ${configFile} missing`, 'warning');
        configIssues++;
      }
    }

    if (configIssues === 0) {
      this.addCheck('configuration', 'passed', 'All configuration files present');
    } else {
      this.addIssue('missing_config', `${configIssues} configuration files missing`, 'medium');
    }
  }

  async checkBuildProcess() {
    this.log('Checking build process...', 'info');
    
    try {
      // Check if build script exists
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      
      if (!packageJson.scripts || !packageJson.scripts.build) {
        this.addIssue('missing_build_script', 'Build script not found in package.json', 'high');
        return;
      }

      this.addCheck('build_process', 'passed', 'Build script found');
    } catch (error) {
      this.addIssue('build_check_failed', `Build check failed: ${error.message}`, 'medium');
    }
  }

  async checkTestSuite() {
    this.log('Checking test suite...', 'info');
    
    try {
      const testFiles = this.findTestFiles();
      
      if (testFiles.length === 0) {
        this.addIssue('no_tests', 'No test files found', 'medium');
        return;
      }

      this.log(`Found ${testFiles.length} test files`, 'info');
      this.addCheck('test_suite', 'passed', 'Test files found');
    } catch (error) {
      this.addIssue('test_check_failed', error.message, 'low');
    }
  }

  findTestFiles() {
    const testExtensions = ['.test.js', '.test.ts', '.test.jsx', '.test.tsx', '.spec.js', '.spec.ts'];
    const testFiles = [];
    
    const scanDirectory = (dir) => {
      if (!fs.existsSync(dir)) return;
      
      const files = fs.readdirSync(dir);
      for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
          scanDirectory(filePath);
        } else if (testExtensions.some(ext => file.endsWith(ext))) {
          testFiles.push(filePath);
        }
      }
    };

    scanDirectory(this.projectRoot);
    return testFiles;
  }

  async checkLinting() {
    this.log('Checking linting configuration...', 'info');
    
    try {
      // Check if lint script exists
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      
      if (!packageJson.scripts || !packageJson.scripts.lint) {
        this.addIssue('missing_lint_script', 'Lint script not found in package.json', 'medium');
        return;
      }

      this.addCheck('linting', 'passed', 'Linting configuration found');
    } catch (error) {
      this.addIssue('lint_check_failed', `Lint check failed: ${error.message}`, 'medium');
    }
  }

  addCheck(type, status, message) {
    this.healthStatus.checks.push({
      type,
      status,
      message,
      timestamp: new Date().toISOString()
    });
  }

  addIssue(type, message, severity) {
    this.healthStatus.issues.push({
      type,
      message,
      severity,
      timestamp: new Date().toISOString()
    });
    
    if (severity === 'critical' || severity === 'high') {
      this.healthStatus.overall = 'unhealthy';
    }
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      healthStatus: this.healthStatus,
      summary: {
        totalChecks: this.healthStatus.checks.length,
        passedChecks: this.healthStatus.checks.filter(c => c.status === 'passed').length,
        totalIssues: this.healthStatus.issues.length,
        criticalIssues: this.healthStatus.issues.filter(i => i.severity === 'critical').length,
        highIssues: this.healthStatus.issues.filter(i => i.severity === 'high').length
      }
    };

    const reportFile = path.join(this.projectRoot, 'health-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`Health report saved to ${reportFile}`, 'info');
    
    // Print summary
    this.log('=== HEALTH CHECK SUMMARY ===', 'info');
    this.log(`Overall Status: ${this.healthStatus.overall.toUpperCase()}`, 'info');
    this.log(`Checks: ${report.summary.passedChecks}/${report.summary.totalChecks} passed`, 'info');
    this.log(`Issues: ${report.summary.totalIssues} total (${report.summary.criticalIssues} critical, ${report.summary.highIssues} high)`, 'info');
  }
}

// Run the health checker
if (require.main === module) {
  const checker = new HealthChecker();
<<<<<<< HEAD
  checker.run().catch(console.error)};

=======
  checker.runHealthChecks().catch(console.error);
}

module.exports = HealthChecker;
>>>>>>> 566d12e4e87c285827c8c1f36f24d2818c9f5bb8
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
