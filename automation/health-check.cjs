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
class HealthChecker {
  constructor() {
    this.logFile = path.join(__dirname, '../logs/health-check.log');
    this.issues = [];
    this.startTime = new Date();
  }

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
=======
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
=======
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-59d5
#!/usr/bin/env node

<<<<<<< HEAD
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🏥 Starting Health Check...');

class HealthChecker {
  constructor() {
    this.results = {
      timestamp: new Date().toISOString(),
      overallHealth: 'unknown',
      checks: [],
      metrics: {},
      recommendations: [],
    };
  }

  async checkBuild() {
    console.log('🔨 Checking build health...');
    try {
      execSync('npm run build', { encoding: 'utf8', stdio: 'pipe' });
      this.results.checks.push({
        name: 'build',
        status: 'healthy',
        message: 'Build completed successfully',
      });
    } catch (error) {
      this.results.checks.push({
        name: 'build',
        status: 'unhealthy',
        message: 'Build failed',
        error: error.message,
      });
    }
  }

  async checkTests() {
    console.log('🧪 Checking test health...');
    try {
      execSync('npm run test:smoke', { encoding: 'utf8', stdio: 'pipe' });
      this.results.checks.push({
        name: 'tests',
        status: 'healthy',
        message: 'Tests passed successfully',
      });
    } catch (error) {
      this.results.checks.push({
        name: 'tests',
        status: 'unhealthy',
        message: 'Tests failed',
        error: error.message,
      });
    }
  }

  async checkDependencies() {
    console.log('📦 Checking dependency health...');
    try {
      execSync('npm list --depth=0', { encoding: 'utf8', stdio: 'pipe' });
      this.results.checks.push({
        name: 'dependencies',
        status: 'healthy',
        message: 'All dependencies are properly installed',
      });
    } catch (error) {
      this.results.checks.push({
        name: 'dependencies',
        status: 'unhealthy',
        message: 'Dependency issues detected',
        error: error.message,
      });
    }
  }

  async checkLinting() {
    console.log('🔍 Checking linting health...');
    try {
      execSync('npm run lint', { encoding: 'utf8', stdio: 'pipe' });
      this.results.checks.push({
        name: 'linting',
        status: 'healthy',
        message: 'No linting errors found',
      });
    } catch (error) {
      this.results.checks.push({
        name: 'linting',
        status: 'warning',
        message: 'Linting issues detected',
        error: error.message,
      });
    }
  }

  async checkFileStructure() {
    console.log('📁 Checking file structure health...');

    const criticalFiles = [
      'package.json',
      'next.config.js',
      'tsconfig.json',
      'tailwind.config.js',
    ];

    const missingFiles = criticalFiles.filter(file => !fs.existsSync(file));

    if (missingFiles.length === 0) {
      this.results.checks.push({
        name: 'file_structure',
        status: 'healthy',
        message: 'All critical files present',
      });
    } else {
      this.results.checks.push({
        name: 'file_structure',
        status: 'unhealthy',
        message: `Missing critical files: ${missingFiles.join(', ')}`,
      });
    }
  }

  calculateOverallHealth() {
    const healthyChecks = this.results.checks.filter(
      check => check.status === 'healthy'
    ).length;
    const totalChecks = this.results.checks.length;
    const healthPercentage = (healthyChecks / totalChecks) * 100;

    if (healthPercentage >= 90) {
      this.results.overallHealth = 'excellent';
    } else if (healthPercentage >= 70) {
      this.results.overallHealth = 'good';
    } else if (healthPercentage >= 50) {
      this.results.overallHealth = 'fair';
    } else {
      this.results.overallHealth = 'poor';
    }

    this.results.metrics.healthPercentage = healthPercentage;
    this.results.metrics.healthyChecks = healthyChecks;
    this.results.metrics.totalChecks = totalChecks;
  }

  async generateRecommendations() {
    console.log('💡 Generating health recommendations...');

    const unhealthyChecks = this.results.checks.filter(
      check => check.status === 'unhealthy'
    );

    unhealthyChecks.forEach(check => {
      switch (check.name) {
        case 'build':
          this.results.recommendations.push({
            type: 'build_fix',
            priority: 'high',
            description:
              'Fix build errors to ensure application can be deployed',
          });
          break;
        case 'tests':
          this.results.recommendations.push({
            type: 'test_fix',
            priority: 'high',
            description: 'Fix failing tests to ensure code quality',
          });
          break;
        case 'dependencies':
          this.results.recommendations.push({
            type: 'dependency_fix',
            priority: 'medium',
            description: 'Resolve dependency issues',
          });
          break;
        case 'linting':
          this.results.recommendations.push({
            type: 'linting_fix',
            priority: 'low',
            description: 'Fix linting issues for better code quality',
          });
          break;
      }
    });
  }

  async saveReport() {
    const logsDir = path.join(process.cwd(), 'logs');
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }

    const reportPath = path.join(logsDir, `health-check-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(this.results, null, 2));
    console.log(`📊 Report saved to: ${reportPath}`);
  }

  async run() {
    console.log('🚀 Starting health check...');

    await this.checkBuild();
    await this.checkTests();
    await this.checkDependencies();
    await this.checkLinting();
    await this.checkFileStructure();

    this.calculateOverallHealth();
    await this.generateRecommendations();
    await this.saveReport();

    console.log(
      `✅ Health check completed! Overall health: ${this.results.overallHealth}`
    );
  }
}

// Run the health checker
const healthChecker = new HealthChecker();
healthChecker.run().catch(console.error);
=======
const { execSync } = require('child_process');

console.log('🏥 Running Health Check...');

<<<<<<< HEAD
// Exit with appropriate code
if (healthReport.status === 'unhealthy') {
    process.exit(1);
} else if (healthReport.status === 'degraded') {
    process.exit(2);
} else {
    process.exit(0);
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-f0bd
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
=======
const checks = [
  { nam: e: 'Build Status', comman: d: 'npm run build' },
  { nam: e: 'Test Status', comman: d: 'npm run: test:smoke' },
  { nam: e: 'Lint Status', comman: d: 'npm run: lint:check' },
  { nam: e: 'Type Check', comman: d: 'npm run type-check' }
];

checks.forEach(check => {
  try {
    execSync(check.command, { stdi: o: 'pipe' });
    console.log(`✅ ${check.name}: OK`);
  } catch (error) {
    console.log(`❌ ${check.name}: FAILED`);
  }
});

>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
>>>>>>> cursor/automate-test-improve-and-merge-code-59d5
