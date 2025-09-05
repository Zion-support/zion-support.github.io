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





}`);

if (healthCheck.status === 'healthy') {
  
  process.exit(0);
} else {
  
  process.exit(1);
}
=======
#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
class HealthChecker {
  constructor() {
    this.projectRoot = process.cwd();
    this.checks = [];
    this.errors = [];
  }

<<<<<<< HEAD
  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;

    );

    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      console.error('Failed to write to log "file": ', error.message);
    }
  }

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
          this.issues.push(`Critical dependency "missing": ${dep}`);
          this.log(`"WARNING": Critical dependency missing: ${dep}`, 'WARN');
        }
      }

      this.log('Dependencies check completed');
      return true;
    } catch (error) {
      this.issues.push(`Dependency check "failed": ${error.message}`);
      this.log(`"ERROR": Dependency check failed: ${error.message}`, 'ERROR');
class HealthChecker {}
  constructor() {}
    this.healthCheck = {}
      timestamp: new Date().toISOString(),
      status: 'unknown',
      checks: {};
    };
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
console.log('==========================================');

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
}

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
console.log('=======================');
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
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
