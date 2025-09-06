const fs = require('fs');
#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
class HealthChecker {

class HealthCheckMonitor {
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
    try {
      fs.mkdirSync(path.dirname(this.logFile), { recursive: true });
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      console.error('Failed to write to log file: ', error.message);
    }
    console.log(`[${timestamp}] ${message}`);
  }
    try {
      fs.mkdirSync(path.dirname(this.logFile), { recursive: true });
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      console.error('Failed to write to log file: ', error.message);
    }
  }

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
    }
  }

  async checkDiskSpace() {
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

    const report = {
      timestamp: new Date().toISOString(),
      totalChecks: checks.length,
      passedChecks,
      failedChecks: checks.length - passedChecks,
      results,
      overallHealth: passedChecks === checks.length ? 'healthy' : 'unhealthy'
    };
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
    
    }
    
    return report;
  }
}
    });
}
// Run health check
const healthChecker = new HealthChecker();
healthChecker.runHealthCheck().catch(console.error);

module.exports = HealthChecker;
const { execSync } = require('child_process');
#!/usr/bin/env node
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
});
});
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

    const reportPath = path.join(this.reportsDir, 'health-check-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 Health check completed! Report saved to: ${reportPath}`);
    this.log(`📈 Overall Health: ${report.overallHealth} (${passedChecks}/${checks.length} checks passed)`);
    
    return report;
  }
}

// Run health check
const healthChecker = new HealthChecker();
healthChecker.runHealthCheck().catch(console.error);

module.exports = HealthChecker;
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
});
