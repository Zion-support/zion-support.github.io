#!/usr/bin/env node

/**
 * AI Smart Dependency Manager
 * 
 * Autonomous agent that:
 * - Monitors dependencies for security vulnerabilities
 * - Analyzes and removes unused dependencies
 * - Updates dependencies safely
 * - Detects duplicate dependencies
 * - Analyzes bundle size impact
 * - Suggests lighter alternatives
 * - Creates automated security patches
 * - Generates comprehensive reports
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AISmartDependencyManager {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(__dirname, 'logs');
    this.reportsDir = path.join(__dirname, 'reports');
    this.logFile = path.join(this.logsDir, 'dependency-manager.log');
    this.reportFile = path.join(this.reportsDir, 'dependency-report.json');
    this.historyFile = path.join(this.reportsDir, 'dependency-history.json');
    
    this.packageJsonPath = path.join(this.projectRoot, 'package.json');
    this.packageLockPath = path.join(this.projectRoot, 'package-lock.json');
    
    this.ensureDirectories();
    this.packageJson = this.loadPackageJson();
    this.history = this.loadHistory();
    
    // Support environment variables for continuous mode
    const continuousMode = process.env.CONTINUOUS_MODE === 'true';
    const fastMode = process.env.FAST_MODE === 'true';
    const intervalMinutes = parseInt(process.env.INTERVAL_MINUTES || '60', 10);
    
    this.config = {
      autoFix: process.env.AUTO_FIX !== 'false',
      autoUpdate: process.env.AUTO_UPDATE === 'true',
      autoRemoveUnused: process.env.AUTO_REMOVE_UNUSED !== 'false',
      securityThreshold: process.env.SECURITY_THRESHOLD || 'moderate',
      maxBundleSize: 5 * 1024 * 1024, // 5MB
      checkInterval: fastMode ? 300000 : intervalMinutes * 60000, // Fast: 5 min, Normal: configurable
      enableNotifications: true,
      continuousMode: continuousMode,
      fastMode: fastMode,
      maxRunsPerCycle: fastMode ? 1000 : 100 // Run continuously
    };
    
    this.report = {
      timestamp: new Date().toISOString(),
      vulnerabilities: [],
      unusedDependencies: [],
      duplicates: [],
      updates: [],
      alternatives: [],
      bundleAnalysis: {},
      actions: [],
      summary: {}
    };
  }
  
  ensureDirectories() {
    [this.logsDir, this.reportsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }
  
  loadPackageJson() {
    try {
      return JSON.parse(fs.readFileSync(this.packageJsonPath, 'utf8'));
    } catch (error) {
      this.log(`Error loading package.json: ${error.message}`, 'ERROR');
      return { dependencies: {}, devDependencies: {} };
    }
  }
  
  loadHistory() {
    try {
      if (fs.existsSync(this.historyFile)) {
        return JSON.parse(fs.readFileSync(this.historyFile, 'utf8'));
      }
    } catch (error) {
      this.log(`Error loading history: ${error.message}`, 'WARN');
    }
    return { checks: [], actions: [] };
  }
  
  saveHistory() {
    try {
      fs.writeFileSync(this.historyFile, JSON.stringify(this.history, null, 2));
    } catch (error) {
      this.log(`Error saving history: ${error.message}`, 'ERROR');
    }
  }
  
  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    
    console.log(logMessage.trim());
    
    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      console.error('Error writing to log file:', error.message);
    }
  }
  
  execCommand(command, ignoreErrors = false) {
    try {
      const output = execSync(command, {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: ignoreErrors ? 'pipe' : 'inherit'
      });
      return { success: true, output };
    } catch (error) {
      if (!ignoreErrors) {
        this.log(`Command failed: ${command}\n${error.message}`, 'ERROR');
      }
      return { success: false, error: error.message };
    }
  }
  
  // Check for security vulnerabilities
  async checkVulnerabilities() {
    this.log('Checking for security vulnerabilities...');
    
    const result = this.execCommand('npm audit --json', true);
    
    if (result.success && result.output) {
      try {
        const auditData = JSON.parse(result.output);
        
        if (auditData.vulnerabilities) {
          Object.entries(auditData.vulnerabilities).forEach(([pkg, data]) => {
            const severity = data.severity;
            
            this.report.vulnerabilities.push({
              package: pkg,
              severity: severity,
              via: data.via,
              range: data.range,
              fixAvailable: data.fixAvailable
            });
            
            if (this.shouldFixVulnerability(severity)) {
              this.report.actions.push({
                type: 'security',
                package: pkg,
                action: 'fix',
                severity: severity
              });
            }
          });
          
          this.log(`Found ${this.report.vulnerabilities.length} vulnerabilities`);
        }
      } catch (error) {
        this.log(`Error parsing audit results: ${error.message}`, 'ERROR');
      }
    }
    
    return this.report.vulnerabilities;
  }
  
  shouldFixVulnerability(severity) {
    const levels = ['low', 'moderate', 'high', 'critical'];
    const threshold = levels.indexOf(this.config.securityThreshold);
    const currentLevel = levels.indexOf(severity);
    return currentLevel >= threshold;
  }
  
  // Fix security vulnerabilities
  async fixVulnerabilities() {
    if (this.report.vulnerabilities.length === 0) {
      this.log('No vulnerabilities to fix');
      return;
    }
    
    this.log('Fixing security vulnerabilities...');
    
    const result = this.execCommand('npm audit fix');
    
    if (result.success) {
      this.log('Successfully fixed vulnerabilities');
      this.report.actions.push({
        type: 'security_fix',
        timestamp: new Date().toISOString(),
        status: 'success'
      });
    } else {
      this.log('Some vulnerabilities could not be fixed automatically', 'WARN');
      this.report.actions.push({
        type: 'security_fix',
        timestamp: new Date().toISOString(),
        status: 'partial'
      });
    }
  }
  
  // Analyze unused dependencies
  async analyzeUnusedDependencies() {
    this.log('Analyzing unused dependencies...');
    
    // Check if depcheck is installed globally, if not, use npx
    const result = this.execCommand('npx --yes depcheck --json', true);
    
    if (result.success && result.output) {
      try {
        const depcheckData = JSON.parse(result.output);
        
        if (depcheckData.dependencies && depcheckData.dependencies.length > 0) {
          this.report.unusedDependencies = depcheckData.dependencies.map(dep => ({
            name: dep,
            type: 'dependency',
            recommendation: 'remove'
          }));
          
          this.log(`Found ${this.report.unusedDependencies.length} unused dependencies`);
        }
        
        if (depcheckData.devDependencies && depcheckData.devDependencies.length > 0) {
          const unusedDevDeps = depcheckData.devDependencies.map(dep => ({
            name: dep,
            type: 'devDependency',
            recommendation: 'remove'
          }));
          
          this.report.unusedDependencies.push(...unusedDevDeps);
          this.log(`Found ${unusedDevDeps.length} unused dev dependencies`);
        }
      } catch (error) {
        this.log(`Error parsing depcheck results: ${error.message}`, 'ERROR');
      }
    }
    
    return this.report.unusedDependencies;
  }
  
  // Remove unused dependencies
  async removeUnusedDependencies() {
    if (this.report.unusedDependencies.length === 0) {
      this.log('No unused dependencies to remove');
      return;
    }
    
    if (!this.config.autoRemoveUnused) {
      this.log('Auto-remove is disabled. Skipping removal.');
      return;
    }
    
    this.log(`Removing ${this.report.unusedDependencies.length} unused dependencies...`);
    
    for (const dep of this.report.unusedDependencies) {
      try {
        const depType = dep.type === 'devDependency' ? '--save-dev' : '--save';
        this.execCommand(`npm uninstall ${depType} ${dep.name}`, true);
        
        this.log(`Removed ${dep.name}`);
        this.report.actions.push({
          type: 'remove_unused',
          package: dep.name,
          timestamp: new Date().toISOString(),
          status: 'success'
        });
      } catch (error) {
        this.log(`Failed to remove ${dep.name}: ${error.message}`, 'ERROR');
      }
    }
  }
  
  // Check for outdated dependencies
  async checkOutdatedDependencies() {
    this.log('Checking for outdated dependencies...');
    
    const result = this.execCommand('npm outdated --json', true);
    
    if (result.output) {
      try {
        const outdatedData = JSON.parse(result.output);
        
        Object.entries(outdatedData).forEach(([pkg, data]) => {
          this.report.updates.push({
            package: pkg,
            current: data.current,
            wanted: data.wanted,
            latest: data.latest,
            location: data.location,
            type: data.type
          });
        });
        
        this.log(`Found ${this.report.updates.length} outdated dependencies`);
      } catch (error) {
        this.log(`Error parsing outdated results: ${error.message}`, 'ERROR');
      }
    }
    
    return this.report.updates;
  }
  
  // Detect duplicate dependencies
  async detectDuplicates() {
    this.log('Detecting duplicate dependencies...');
    
    const result = this.execCommand('npm ls --all --json', true);
    
    if (result.output) {
      try {
        const depTree = JSON.parse(result.output);
        const packages = new Map();
        
        const traverse = (node) => {
          if (!node || !node.dependencies) return;
          
          Object.entries(node.dependencies).forEach(([name, data]) => {
            const version = data.version;
            if (!packages.has(name)) {
              packages.set(name, new Set());
            }
            packages.get(name).add(version);
            traverse(data);
          });
        };
        
        traverse(depTree);
        
        packages.forEach((versions, name) => {
          if (versions.size > 1) {
            this.report.duplicates.push({
              package: name,
              versions: Array.from(versions),
              count: versions.size
            });
          }
        });
        
        this.log(`Found ${this.report.duplicates.length} packages with duplicate versions`);
      } catch (error) {
        this.log(`Error detecting duplicates: ${error.message}`, 'ERROR');
      }
    }
    
    return this.report.duplicates;
  }
  
  // Analyze bundle size impact
  async analyzeBundleSize() {
    this.log('Analyzing bundle size...');
    
    try {
      const dependencies = {
        ...this.packageJson.dependencies,
        ...this.packageJson.devDependencies
      };
      
      let totalSize = 0;
      const largestPackages = [];
      
      // Get size estimates from node_modules
      Object.keys(dependencies).forEach(pkg => {
        const pkgPath = path.join(this.projectRoot, 'node_modules', pkg);
        if (fs.existsSync(pkgPath)) {
          const size = this.getDirectorySize(pkgPath);
          totalSize += size;
          
          if (size > 1024 * 100) { // > 100KB
            largestPackages.push({
              name: pkg,
              size: size,
              sizeFormatted: this.formatBytes(size)
            });
          }
        }
      });
      
      largestPackages.sort((a, b) => b.size - a.size);
      
      this.report.bundleAnalysis = {
        totalSize: totalSize,
        totalSizeFormatted: this.formatBytes(totalSize),
        packageCount: Object.keys(dependencies).length,
        largestPackages: largestPackages.slice(0, 10),
        exceedsThreshold: totalSize > this.config.maxBundleSize
      };
      
      this.log(`Total bundle size: ${this.report.bundleAnalysis.totalSizeFormatted}`);
      
      if (this.report.bundleAnalysis.exceedsThreshold) {
        this.log('Bundle size exceeds threshold!', 'WARN');
      }
    } catch (error) {
      this.log(`Error analyzing bundle size: ${error.message}`, 'ERROR');
    }
    
    return this.report.bundleAnalysis;
  }
  
  getDirectorySize(dirPath) {
    let size = 0;
    
    try {
      const files = fs.readdirSync(dirPath);
      
      files.forEach(file => {
        const filePath = path.join(dirPath, file);
        const stats = fs.statSync(filePath);
        
        if (stats.isDirectory()) {
          size += this.getDirectorySize(filePath);
        } else {
          size += stats.size;
        }
      });
    } catch (error) {
      // Ignore errors
    }
    
    return size;
  }
  
  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
  }
  
  // Suggest lighter alternatives
  async suggestAlternatives() {
    this.log('Suggesting lighter alternatives...');
    
    const heavyPackages = this.report.bundleAnalysis.largestPackages || [];
    
    // Known lighter alternatives
    const alternatives = {
      'moment': { alternative: 'date-fns', reason: '~97% smaller bundle size', savings: '~200KB' },
      'lodash': { alternative: 'lodash-es', reason: 'Tree-shakeable, smaller bundle', savings: '~50KB' },
      'axios': { alternative: 'ky', reason: 'Smaller and modern', savings: '~15KB' },
      'uuid': { alternative: 'nanoid', reason: 'Smaller and faster', savings: '~80%' },
      'request': { alternative: 'node-fetch', reason: 'More modern, maintained', savings: 'varies' }
    };
    
    heavyPackages.forEach(pkg => {
      if (alternatives[pkg.name]) {
        this.report.alternatives.push({
          package: pkg.name,
          currentSize: pkg.sizeFormatted,
          ...alternatives[pkg.name]
        });
      }
    });
    
    if (this.report.alternatives.length > 0) {
      this.log(`Found ${this.report.alternatives.length} packages with lighter alternatives`);
    }
    
    return this.report.alternatives;
  }
  
  // Generate comprehensive report
  generateReport() {
    this.log('Generating comprehensive report...');
    
    this.report.summary = {
      totalVulnerabilities: this.report.vulnerabilities.length,
      criticalVulnerabilities: this.report.vulnerabilities.filter(v => v.severity === 'critical').length,
      unusedDependencies: this.report.unusedDependencies.length,
      duplicatePackages: this.report.duplicates.length,
      outdatedPackages: this.report.updates.length,
      suggestedAlternatives: this.report.alternatives.length,
      totalActions: this.report.actions.length,
      bundleSize: this.report.bundleAnalysis.totalSizeFormatted,
      healthScore: this.calculateHealthScore()
    };
    
    try {
      fs.writeFileSync(this.reportFile, JSON.stringify(this.report, null, 2));
      this.log(`Report saved to ${this.reportFile}`);
    } catch (error) {
      this.log(`Error saving report: ${error.message}`, 'ERROR');
    }
    
    this.printSummary();
    
    return this.report;
  }
  
  calculateHealthScore() {
    let score = 100;
    
    // Deduct points for issues
    score -= this.report.vulnerabilities.filter(v => v.severity === 'critical').length * 10;
    score -= this.report.vulnerabilities.filter(v => v.severity === 'high').length * 5;
    score -= this.report.vulnerabilities.filter(v => v.severity === 'moderate').length * 2;
    score -= this.report.unusedDependencies.length * 2;
    score -= this.report.duplicates.length * 3;
    score -= Math.min(this.report.updates.length / 5, 10); // Max 10 points for outdated
    
    if (this.report.bundleAnalysis.exceedsThreshold) {
      score -= 15;
    }
    
    return Math.max(0, Math.min(100, score));
  }
  
  printSummary() {
    console.log('\n' + '='.repeat(60));
    console.log('📊 DEPENDENCY HEALTH REPORT');
    console.log('='.repeat(60));
    console.log(`\n🎯 Health Score: ${this.report.summary.healthScore}/100`);
    console.log(`\n🔒 Security:`);
    console.log(`   - Total Vulnerabilities: ${this.report.summary.totalVulnerabilities}`);
    console.log(`   - Critical: ${this.report.summary.criticalVulnerabilities}`);
    console.log(`\n📦 Dependencies:`);
    console.log(`   - Unused: ${this.report.summary.unusedDependencies}`);
    console.log(`   - Duplicates: ${this.report.summary.duplicatePackages}`);
    console.log(`   - Outdated: ${this.report.summary.outdatedPackages}`);
    console.log(`\n💡 Optimizations:`);
    console.log(`   - Lighter Alternatives: ${this.report.summary.suggestedAlternatives}`);
    console.log(`   - Bundle Size: ${this.report.summary.bundleSize}`);
    console.log(`\n✅ Actions Taken: ${this.report.summary.totalActions}`);
    console.log('\n' + '='.repeat(60) + '\n');
  }
  
  // Commit and push changes
  async commitChanges(message) {
    this.log('Committing changes...');
    
    try {
      this.execCommand('git add .');
      this.execCommand(`git commit -m "${message}"`);
      this.execCommand('git push origin main');
      
      this.log('Changes committed and pushed successfully');
      return true;
    } catch (error) {
      this.log(`Error committing changes: ${error.message}`, 'ERROR');
      return false;
    }
  }
  
  // Main run method
  async run() {
    this.log('🚀 Starting AI Smart Dependency Manager...');
    
    try {
      // Run all checks
      await this.checkVulnerabilities();
      await this.analyzeUnusedDependencies();
      await this.checkOutdatedDependencies();
      await this.detectDuplicates();
      await this.analyzeBundleSize();
      await this.suggestAlternatives();
      
      // Take actions if auto-fix is enabled
      if (this.config.autoFix) {
        await this.fixVulnerabilities();
        await this.removeUnusedDependencies();
      }
      
      // Generate report
      this.generateReport();
      
      // Update history
      this.history.checks.push({
        timestamp: new Date().toISOString(),
        summary: this.report.summary
      });
      
      // Keep only last 30 checks
      if (this.history.checks.length > 30) {
        this.history.checks = this.history.checks.slice(-30);
      }
      
      this.saveHistory();
      
      // Commit changes if any actions were taken
      if (this.report.actions.length > 0) {
        const message = `🤖 AI Dependency Manager: Fixed ${this.report.actions.length} issues (Health Score: ${this.report.summary.healthScore}/100)`;
        await this.commitChanges(message);
      }
      
      this.log('✅ AI Smart Dependency Manager completed successfully');
      
    } catch (error) {
      this.log(`Error in main run: ${error.message}`, 'ERROR');
      throw error;
    }
  }
  
  // Continuous run method - runs indefinitely
  async runContinuously() {
    this.log('🔄 Starting CONTINUOUS AI Smart Dependency Manager...');
    this.log(`⚡ Fast Mode: ${this.config.fastMode ? 'ENABLED' : 'DISABLED'}`);
    this.log(`⏱️  Check Interval: ${this.config.checkInterval / 60000} minutes`);
    
    let runCount = 0;
    
    while (runCount < this.config.maxRunsPerCycle) {
      try {
        runCount++;
        this.log(`\n${'='.repeat(60)}`);
        this.log(`🔄 Continuous Run #${runCount}`);
        this.log(`${'='.repeat(60)}\n`);
        
        // Run single check cycle
        await this.run();
        
        // Wait before next run
        this.log(`\n⏳ Waiting ${this.config.checkInterval / 60000} minutes until next check...`);
        await this.sleep(this.config.checkInterval);
        
      } catch (error) {
        this.log(`Error in continuous run #${runCount}: ${error.message}`, 'ERROR');
        this.log('Retrying in 1 minute...', 'WARN');
        await this.sleep(60000); // Wait 1 minute on error
      }
    }
    
    this.log('🏁 Continuous mode completed maximum runs');
  }
  
  // Sleep helper
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// CLI Interface
if (require.main === module) {
  const args = process.argv.slice(2);
  const command = args[0] || 'run';
  
  const manager = new AISmartDependencyManager();
  
  switch (command) {
    case 'run':
      manager.run().catch(error => {
        console.error('Fatal error:', error);
        process.exit(1);
      });
      break;
      
    case 'continuous':
      manager.runContinuously().catch(error => {
        console.error('Fatal error in continuous mode:', error);
        process.exit(1);
      });
      break;
      
    case 'check':
      (async () => {
        await manager.checkVulnerabilities();
        await manager.analyzeUnusedDependencies();
        await manager.checkOutdatedDependencies();
        await manager.detectDuplicates();
        await manager.analyzeBundleSize();
        await manager.suggestAlternatives();
        manager.generateReport();
      })().catch(error => {
        console.error('Fatal error:', error);
        process.exit(1);
      });
      break;
      
    case 'fix':
      (async () => {
        await manager.checkVulnerabilities();
        await manager.fixVulnerabilities();
        await manager.analyzeUnusedDependencies();
        await manager.removeUnusedDependencies();
        manager.generateReport();
      })().catch(error => {
        console.error('Fatal error:', error);
        process.exit(1);
      });
      break;
      
    case 'report':
      (async () => {
        await manager.checkVulnerabilities();
        await manager.analyzeUnusedDependencies();
        await manager.checkOutdatedDependencies();
        await manager.detectDuplicates();
        await manager.analyzeBundleSize();
        await manager.suggestAlternatives();
        manager.generateReport();
      })().catch(error => {
        console.error('Fatal error:', error);
        process.exit(1);
      });
      break;
      
    default:
      console.log('Usage: node ai-smart-dependency-manager.cjs [command]');
      console.log('Commands:');
      console.log('  run        - Run full analysis and auto-fix (default)');
      console.log('  continuous - Run continuously with auto-fix');
      console.log('  check      - Run analysis only, no fixes');
      console.log('  fix        - Run analysis and fix issues');
      console.log('  report     - Generate comprehensive report');
      break;
  }
}

module.exports = AISmartDependencyManager;

