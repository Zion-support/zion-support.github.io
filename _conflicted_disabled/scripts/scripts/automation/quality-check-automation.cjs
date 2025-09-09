#!/usr/bin/env node

/**
 * Quality Check Automation Script
 * Replaces GitHub Actions quality-check.yml workflow
 * Runs on every push/PR and periodically
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class QualityCheckAutomation {
  constructor() {
    this.logFile = path.join(__dirname, '../../logs/quality-check-automation.log');
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runLinting() {
    try {
      this.log('Running linting...');
      execSync('npm run lint', { stdio: 'inherit' });
      this.log('Linting completed successfully');
      return true;
    } catch (error) {
      this.log(`Linting failed: ${error.message}`);
      return false;
    }
  }

  async runTypeChecking() {
    try {
      this.log('Running type checking...');
      execSync('npm run type-check', { stdio: 'inherit' });
      this.log('Type checking completed successfully');
      return true;
    } catch (error) {
      this.log(`Type checking failed: ${error.message}`);
      return false;
    }
  }

  async runBuildCheck() {
    try {
      this.log('Running build check...');
      execSync('npm run build', { stdio: 'inherit' });
      this.log('Build check completed successfully');
      return true;
    } catch (error) {
      this.log(`Build check failed: ${error.message}`);
      return false;
    }
  }

  async checkBundleSize() {
    try {
      this.log('Checking bundle size...');
      
      if (fs.existsSync('dist')) {
        const distStats = fs.statSync('dist');
        const distSize = (distStats.size / 1024 / 1024).toFixed(2);
        this.log(`Build directory size: ${distSize} MB`);
        
        // Check JavaScript files
        const jsFiles = this.findFiles('dist', '.js');
        if (jsFiles.length > 0) {
          let totalJsSize = 0;
          jsFiles.forEach(file => {
            const stats = fs.statSync(file);
            totalJsSize += stats.size;
          });
          this.log(`Total JavaScript size: ${(totalJsSize / 1024 / 1024).toFixed(2)} MB`);
        }
        
        // Check CSS files
        const cssFiles = this.findFiles('dist', '.css');
        if (cssFiles.length > 0) {
          let totalCssSize = 0;
          cssFiles.forEach(file => {
            const stats = fs.statSync(file);
            totalCssSize += stats.size;
          });
          this.log(`Total CSS size: ${(totalCssSize / 1024).toFixed(2)} KB`);
        }
        
        return true;
      } else {
        this.log('Build directory not found');
        return false;
      }
    } catch (error) {
      this.log(`Bundle size check failed: ${error.message}`);
      return false;
    }
  }

  findFiles(dir, extension) {
    const files = [];
    
    function traverse(currentDir) {
      const items = fs.readdirSync(currentDir);
      
      items.forEach(item => {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          traverse(fullPath);
        } else if (item.endsWith(extension)) {
          files.push(fullPath);
        }
      });
    }
    
    traverse(dir);
    return files;
  }

  async runSecurityAudit() {
    try {
      this.log('Running security audit...');
      execSync('npm audit --audit-level=moderate', { stdio: 'inherit' });
      this.log('Security audit completed successfully');
      return true;
    } catch (error) {
      this.log(`Security audit failed: ${error.message}`);
      return false;
    }
  }

  async checkOutdatedPackages() {
    try {
      this.log('Checking for outdated packages...');
      const result = execSync('npm outdated', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      if (result.trim()) {
        this.log('Outdated packages found:');
        this.log(result);
      } else {
        this.log('All packages are up to date');
      }
      
      return true;
    } catch (error) {
      this.log(`Package check failed: ${error.message}`);
      return false;
    }
  }

  async createQualityReport() {
    try {
      const reportPath = path.join(__dirname, '../../reports/quality-check-report.json');
      const reportDir = path.dirname(reportPath);
      
      if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir, { recursive: true });
      }
      
      const report = {
        timestamp: new Date().toISOString(),
        status: 'completed',
        summary: {
          linting: false,
          typeChecking: false,
          buildCheck: false,
          bundleSize: false,
          securityAudit: false,
          packageCheck: false
        },
        details: {
          lintingResults: null,
          typeCheckingResults: null,
          buildResults: null,
          bundleSizeResults: null,
          securityResults: null,
          packageResults: null
        }
      };
      
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      this.log(`Quality report saved to ${reportPath}`);
      
      return report;
    } catch (error) {
      this.log(`Failed to create quality report: ${error.message}`);
      return null;
    }
  }

  async run() {
    this.log('Starting Quality Check Automation...');
    
    try {
      const results = {
        linting: await this.runLinting(),
        typeChecking: await this.runTypeChecking(),
        buildCheck: await this.runBuildCheck(),
        bundleSize: await this.checkBundleSize(),
        securityAudit: await this.runSecurityAudit(),
        packageCheck: await this.checkOutdatedPackages()
      };
      
      // Log summary
      this.log('\n=== Quality Check Summary ===');
      Object.entries(results).forEach(([check, passed]) => {
        this.log(`${check}: ${passed ? '✅ PASSED' : '❌ FAILED'}`);
      });
      
      // Create report
      await this.createQualityReport();
      
      // Check if all checks passed
      const allPassed = Object.values(results).every(result => result === true);
      
      if (allPassed) {
        this.log('✅ All quality checks passed successfully');
      } else {
        this.log('❌ Some quality checks failed');
        process.exit(1);
      }
      
    } catch (error) {
      this.log(`Quality Check Automation failed: ${error.message}`);
      process.exit(1);
    }
  }
}

// Run the automation if this script is executed directly
if (require.main === module) {
  const automation = new QualityCheckAutomation();
  automation.run();
}

module.exports = QualityCheckAutomation;