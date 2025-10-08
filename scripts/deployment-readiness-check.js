#!/usr/bin/env node

/**
 * Comprehensive Deployment Readiness Check
 * Verifies all aspects of the application before deployment
 */

const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

class DeploymentReadinessChecker {
  constructor() {
    this.checks = [];
    this.failures = [];
    this.warnings = [];
  }

  log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`);
  }

  addCheck(name, fn) {
    this.checks.push({ name, fn });
  }

  async runCheck(check) {
    this.log(`\n🔍 Running: ${check.name}`, 'cyan');
    try {
      const result = await check.fn();
      if (result.success) {
        this.log(`✅ ${check.name}: PASSED`, 'green');
        if (result.message) {
          this.log(`   ${result.message}`, 'blue');
        }
      } else {
        if (result.severity === 'warning') {
          this.warnings.push({ check: check.name, ...result });
          this.log(`⚠️  ${check.name}: WARNING`, 'yellow');
        } else {
          this.failures.push({ check: check.name, ...result });
          this.log(`❌ ${check.name}: FAILED`, 'red');
        }
        if (result.message) {
          this.log(`   ${result.message}`, result.severity === 'warning' ? 'yellow' : 'red');
        }
      }
      return result.success;
    } catch (error) {
      this.failures.push({ check: check.name, error: error.message });
      this.log(`❌ ${check.name}: ERROR - ${error.message}`, 'red');
      return false;
    }
  }

  async runAll() {
    this.log('\n' + '='.repeat(60), 'blue');
    this.log('🚀 DEPLOYMENT READINESS CHECK', 'blue');
    this.log('='.repeat(60) + '\n', 'blue');

    for (const check of this.checks) {
      await this.runCheck(check);
    }

    this.printSummary();
    return this.failures.length === 0;
  }

  printSummary() {
    this.log('\n' + '='.repeat(60), 'blue');
    this.log('📊 SUMMARY', 'blue');
    this.log('='.repeat(60), 'blue');

    const totalChecks = this.checks.length;
    const passed = totalChecks - this.failures.length - this.warnings.length;

    this.log(`\nTotal Checks: ${totalChecks}`, 'cyan');
    this.log(`✅ Passed: ${passed}`, 'green');
    this.log(`⚠️  Warnings: ${this.warnings.length}`, 'yellow');
    this.log(`❌ Failed: ${this.failures.length}`, 'red');

    if (this.failures.length > 0) {
      this.log('\n🔴 FAILED CHECKS:', 'red');
      this.failures.forEach((failure, index) => {
        this.log(`${index + 1}. ${failure.check}: ${failure.message}`, 'red');
      });
    }

    if (this.warnings.length > 0) {
      this.log('\n🟡 WARNINGS:', 'yellow');
      this.warnings.forEach((warning, index) => {
        this.log(`${index + 1}. ${warning.check}: ${warning.message}`, 'yellow');
      });
    }

    this.log('\n' + '='.repeat(60), 'blue');

    if (this.failures.length === 0) {
      this.log('🎉 ALL CHECKS PASSED! Ready for deployment.', 'green');
      this.log('='.repeat(60) + '\n', 'blue');
      return true;
    } else {
      this.log('⛔ DEPLOYMENT BLOCKED! Please fix the issues above.', 'red');
      this.log('='.repeat(60) + '\n', 'blue');
      return false;
    }
  }
}

// Define all checks
function setupChecks(checker) {
  // Check 1: Package.json exists and is valid
  checker.addCheck('Package.json Validation', async () => {
    try {
      const pkgPath = path.join(process.cwd(), 'package.json');
      const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
      
      if (!pkg.name || !pkg.version) {
        return {
          success: false,
          message: 'package.json missing required fields (name, version)'
        };
      }
      
      return {
        success: true,
        message: `${pkg.name}@${pkg.version}`
      };
    } catch (error) {
      return {
        success: false,
        message: error.message
      };
    }
  });

  // Check 2: Dependencies installed
  checker.addCheck('Dependencies Check', async () => {
    try {
      if (!fs.existsSync('node_modules')) {
        return {
          success: false,
          message: 'node_modules not found. Run: pnpm install'
        };
      }
      return {
        success: true,
        message: 'All dependencies installed'
      };
    } catch (error) {
      return {
        success: false,
        message: error.message
      };
    }
  });

  // Check 3: Linting
  checker.addCheck('Linting', async () => {
    try {
      execSync('pnpm run lint', { stdio: 'pipe' });
      return {
        success: true,
        message: 'No linting errors'
      };
    } catch (error) {
      return {
        success: false,
        message: 'Linting failed. Run: pnpm run lint:fix'
      };
    }
  });

  // Check 4: Type checking
  checker.addCheck('Type Checking', async () => {
    try {
      execSync('pnpm run type-check', { stdio: 'pipe' });
      return {
        success: true,
        message: 'No type errors'
      };
    } catch (error) {
      return {
        success: false,
        message: 'Type checking failed'
      };
    }
  });

  // Check 5: Tests
  checker.addCheck('Test Suite', async () => {
    try {
      const result = execSync('pnpm test', { stdio: 'pipe' }).toString();
      const match = result.match(/(\d+) passed/);
      const passedTests = match ? match[1] : '0';
      return {
        success: true,
        message: `${passedTests} tests passed`
      };
    } catch (error) {
      return {
        success: false,
        message: 'Tests failed'
      };
    }
  });

  // Check 6: Build
  checker.addCheck('Build Process', async () => {
    try {
      execSync('pnpm run build:no-check', { stdio: 'pipe' });
      
      // Check if dist folder exists
      if (!fs.existsSync('dist')) {
        return {
          success: false,
          message: 'Build completed but dist folder not found'
        };
      }
      
      // Check dist size
      const stats = fs.statSync('dist');
      return {
        success: true,
        message: 'Build successful'
      };
    } catch (error) {
      return {
        success: false,
        message: 'Build failed'
      };
    }
  });

  // Check 7: Environment variables (warning only)
  checker.addCheck('Environment Variables', async () => {
    const requiredEnvVars = ['NODE_ENV'];
    const missing = requiredEnvVars.filter(v => !process.env[v]);
    
    if (missing.length > 0) {
      return {
        success: true,
        severity: 'warning',
        message: `Missing env vars: ${missing.join(', ')}`
      };
    }
    
    return {
      success: true,
      message: 'All required environment variables set'
    };
  });

  // Check 8: Security audit (warning only)
  checker.addCheck('Security Audit', async () => {
    try {
      execSync('pnpm audit --audit-level=high', { stdio: 'pipe' });
      return {
        success: true,
        message: 'No high/critical vulnerabilities'
      };
    } catch (error) {
      return {
        success: true,
        severity: 'warning',
        message: 'Security vulnerabilities found. Run: pnpm audit'
      };
    }
  });

  // Check 9: Git status
  checker.addCheck('Git Status', async () => {
    try {
      const status = execSync('git status --porcelain', { stdio: 'pipe' }).toString().trim();
      
      if (status) {
        return {
          success: true,
          severity: 'warning',
          message: 'Uncommitted changes detected'
        };
      }
      
      return {
        success: true,
        message: 'Working directory clean'
      };
    } catch (error) {
      return {
        success: true,
        severity: 'warning',
        message: 'Git status check failed'
      };
    }
  });

  // Check 10: Branch check
  checker.addCheck('Git Branch', async () => {
    try {
      const branch = execSync('git rev-parse --abbrev-ref HEAD', { stdio: 'pipe' })
        .toString()
        .trim();
      
      if (branch !== 'main' && branch !== 'master') {
        return {
          success: true,
          severity: 'warning',
          message: `Deploying from branch: ${branch}`
        };
      }
      
      return {
        success: true,
        message: `On ${branch} branch`
      };
    } catch (error) {
      return {
        success: true,
        severity: 'warning',
        message: 'Could not determine current branch'
      };
    }
  });
}

// Main execution
async function main() {
  const checker = new DeploymentReadinessChecker();
  setupChecks(checker);
  
  const success = await checker.runAll();
  
  process.exit(success ? 0 : 1);
}

// Run the checker
main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});