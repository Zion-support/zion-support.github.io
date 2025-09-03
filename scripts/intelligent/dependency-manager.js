#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class IntelligentDependencyManager {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/intelligent-dependency-manager.log');
    this.reportFile = path.join(this.projectRoot, 'logs/intelligent-dependency-manager-report.json');
    this.dependencyHistory = this.loadDependencyHistory();
    this.ensureDirectories()}

  ensureDirectories() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir { recursive: true })}
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
    console.log(logMessage);
    
    try {
      fs.appendFileSync(this.logFile, logMessage + '\n')} catch (error) {
      console.error('Failed to write to log file:', error.message)}
  }

  loadDependencyHistory() {
    try {
      if (fs.existsSync(this.reportFile)) {
        const data = fs.readFileSync(this.reportFile, 'utf8');
        return JSON.parse(data).dependencyHistory || []}
    } catch (error) {
      this.log(`Failed to load dependency history: ${error.message}`, 'warn')}
    return []}

  saveDependencyHistory() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        dependencyHistory: this.dependencyHistory,
        totalUpdates: this.dependencyHistory.length,
        lastRun: Date.now()
      };
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2))} catch (error) {
      this.log(`Failed to save dependency history: ${error.message}`, 'error')}
  }

  async analyzeDependencies() {
    this.log('📦 Analyzing current dependencies...');
    
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const packageLock = fs.existsSync('package-lock.json') ? 
        JSON.parse(fs.readFileSync('package-lock.json', 'utf8')) : null;

      const analysis = {
        dependencies: packageJson.dependencies || {},
        devDependencies: packageJson.devDependencies || {},
        totalCount: Object.keys(packageJson.dependencies || {}).length + 
                   Object.keys(packageJson.devDependencies || {}).length,
        outdated: await this.checkOutdatedDependencies(),
        vulnerabilities: await this.checkVulnerabilities(),
        duplicates: await this.findDuplicateDependencies(),
        unused: await this.findUnusedDependencies()
      };

      this.log(`Dependency Analysis Results:`);
      this.log(`  - Total Dependencies: ${analysis.totalCount}`);
      this.log(`  - Outdated: ${analysis.outdated.length}`);
      this.log(`  - Vulnerabilities: ${analysis.vulnerabilities.length}`);
      this.log(`  - Duplicates: ${analysis.duplicates.length}`);
      this.log(`  - Unused: ${analysis.unused.length}`);

      return analysis} catch (error) {
      this.log(`Dependency analysis failed: ${error.message}`, 'error');
      throw error}
  }

  async checkOutdatedDependencies() {
    try {
      this.log('🔍 Checking for outdated dependencies...');
      const output = execSync('npm outdated --json' { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        stdio: 'pipe' 
      });
      
      const outdated = JSON.parse(output);
      return Object.keys(outdated).map(name => ({
        name,
        current: outdated[name].current,
        wanted: outdated[name].wanted,
        latest: outdated[name].latest,
        type: outdated[name].type
      }))} catch (error) {
      // npm outdated returns non-zero exit code when there are outdated packages
      if (error.stdout) {
        try {
          const outdated = JSON.parse(error.stdout);
          return Object.keys(outdated).map(name => ({
            name,
            current: outdated[name].current,
            wanted: outdated[name].wanted,
            latest: outdated[name].latest,
            type: outdated[name].type
          }))} catch (parseError) {
          this.log(`Failed to parse outdated dependencies: ${parseError.message}`, 'warn');
          return []}
      }
      return []}
  }

  async checkVulnerabilities() {
    try {
      this.log('🔒 Checking for security vulnerabilities...');
      const output = execSync('npm audit --json' { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        stdio: 'pipe' 
      });
      
      const audit = JSON.parse(output);
      return audit.vulnerabilities ? Object.keys(audit.vulnerabilities).map(name => ({
        name,
        severity: audit.vulnerabilities[name].severity,
        title: audit.vulnerabilities[name].title,
        description: audit.vulnerabilities[name].description,
        fixAvailable: audit.vulnerabilities[name].fixAvailable
      })) : []} catch (error) {
      // npm audit returns non-zero exit code when vulnerabilities are found
      if (error.stdout) {
        try {
          const audit = JSON.parse(error.stdout);
          return audit.vulnerabilities ? Object.keys(audit.vulnerabilities).map(name => ({
            name,
            severity: audit.vulnerabilities[name].severity,
            title: audit.vulnerabilities[name].title,
            description: audit.vulnerabilities[name].description,
            fixAvailable: audit.vulnerabilities[name].fixAvailable
          })) : []} catch (parseError) {
          this.log(`Failed to parse audit results: ${parseError.message}`, 'warn');
          return []}
      }
      return []}
  }

  async findDuplicateDependencies() {
    try {
      this.log('🔍 Finding duplicate dependencies...');
      const output = execSync('npm ls --json' { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        stdio: 'pipe' 
      });
      
      const tree = JSON.parse(output);
      const duplicates = [];
      
      const findDuplicates = (node, seen = new Set()) => {
        if (node.dependencies) {
          Object.keys(node.dependencies).forEach(dep => {
            if (seen.has(dep)) {
              duplicates.push({
                name: dep,
                version: node.dependencies[dep].version,
                path: node.dependencies[dep].path
              })} else {
              seen.add(dep);
              findDuplicates(node.dependencies[dep], seen)}
          })}
      };
      
      findDuplicates(tree);
      return duplicates} catch (error) {
      this.log(`Failed to find duplicates: ${error.message}`, 'warn');
      return []}
  }

  async findUnusedDependencies() {
    try {
      this.log('🔍 Finding unused dependencies...');
      const output = execSync('npx depcheck --json' { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        stdio: 'pipe' 
      });
      
      const result = JSON.parse(output);
      return result.dependencies || []} catch (error) {
      this.log(`Failed to find unused dependencies: ${error.message}`, 'warn');
      return []}
  }

  async updateDependencies(outdated) {
    this.log('🔄 Updating dependencies...');
    
    const updates = [];
    
    for (const dep of outdated) {
      try {
        this.log(`Updating ${dep.name} from ${dep.current} to ${dep.latest}...`);
        
        // Determine if it's a dev dependency
        const isDevDep = dep.type === 'devDependencies';
        const updateCommand = isDevDep ? 
          `npm install --save-dev ${dep.name}@${dep.latest}` :
          `npm install ${dep.name}@${dep.latest}`;
        
        execSync(updateCommand { 
          cwd: this.projectRoot, 
          stdio: 'pipe',
          timeout: 120000 
        });
        
        updates.push({
          name: dep.name,
          from: dep.current,
          to: dep.latest,
          success: true
        });
        
        this.log(`✅ Successfully updated ${dep.name}`)} catch (error) {
        this.log(`❌ Failed to update ${dep.name}: ${error.message}`, 'error');
        updates.push({
          name: dep.name,
          from: dep.current,
          to: dep.latest,
          success: false,
          error: error.message
        })}
    }
    
    return updates}

  async fixVulnerabilities(vulnerabilities) {
    this.log('🔒 Fixing security vulnerabilities...');
    
    const fixes = [];
    
    for (const vuln of vulnerabilities) {
      try {
        if (vuln.fixAvailable) {
          this.log(`Fixing vulnerability in ${vuln.name}...`);
          
          execSync(`npm audit fix` { 
            cwd: this.projectRoot, 
            stdio: 'pipe',
            timeout: 120000 
          });
          
          fixes.push({
            name: vuln.name,
            severity: vuln.severity,
            success: true
          });
          
          this.log(`✅ Successfully fixed vulnerability in ${vuln.name}`)} else {
          this.log(`⚠️ No fix available for ${vuln.name}`, 'warn');
          fixes.push({
            name: vuln.name,
            severity: vuln.severity,
            success: false,
            reason: 'No fix available'
          })}
      } catch (error) {
        this.log(`❌ Failed to fix vulnerability in ${vuln.name}: ${error.message}`, 'error');
        fixes.push({
          name: vuln.name,
          severity: vuln.severity,
          success: false,
          error: error.message
        })}
    }
    
    return fixes}

  async removeUnusedDependencies(unused) {
    this.log('🗑️ Removing unused dependencies...');
    
    const removals = [];
    
    for (const dep of unused) {
      try {
        this.log(`Removing unused dependency: ${dep}...`);
        
        execSync(`npm uninstall ${dep}` { 
          cwd: this.projectRoot, 
          stdio: 'pipe',
          timeout: 60000 
        });
        
        removals.push({
          name: dep,
          success: true
        });
        
        this.log(`✅ Successfully removed ${dep}`)} catch (error) {
        this.log(`❌ Failed to remove ${dep}: ${error.message}`, 'error');
        removals.push({
          name: dep,
          success: false,
          error: error.message
        })}
    }
    
    return removals}

  async optimizeDependencies() {
    this.log('⚡ Optimizing dependencies...');
    
    try {
      // Clean npm cache
      execSync('npm cache clean --force' { 
        cwd: this.projectRoot, 
        stdio: 'pipe' 
      });
      
      // Remove node_modules and package-lock.json for clean install
      execSync('rm -rf node_modules package-lock.json' { 
        cwd: this.projectRoot, 
        stdio: 'pipe' 
      });
      
      // Install dependencies
      execSync('npm install' { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 300000 
      });
      
      this.log('✅ Dependencies optimized successfully');
      return true} catch (error) {
      this.log(`❌ Dependency optimization failed: ${error.message}`, 'error');
      return false}
  }

  async generateDependencyReport() {
    this.log('📊 Generating dependency management report...');
    
    const analysis = await this.analyzeDependencies();
    const updates = await this.updateDependencies(analysis.outdated);
    const vulnerabilityFixes = await this.fixVulnerabilities(analysis.vulnerabilities);
    const removals = await this.removeUnusedDependencies(analysis.unused);
    const optimizationSuccess = await this.optimizeDependencies();

    const report = {
      timestamp: new Date().toISOString(),
      analysis,
      actions: {
        updates,
        vulnerabilityFixes,
        removals,
        optimizationSuccess
      },
      summary: {
        totalDependencies: analysis.totalCount,
        outdatedFixed: updates.filter(u => u.success).length,
        vulnerabilitiesFixed: vulnerabilityFixes.filter(f => f.success).length,
        unusedRemoved: removals.filter(r => r.success).length,
        optimizationSuccess
      },
      recommendations: this.generateDependencyRecommendations(analysis)
    };

    const reportFile = path.join(this.projectRoot, 'logs/intelligent-dependency-manager-intelligence.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`📊 Dependency report saved to ${reportFile}`);
    return report}

  generateDependencyRecommendations(analysis) {
    const recommendations = [];
    
    if (analysis.outdated.length > 10) {
      recommendations.push('Consider implementing automated dependency updates')}
    
    if (analysis.vulnerabilities.length > 0) {
      recommendations.push('Implement security scanning in CI/CD pipeline')}
    
    if (analysis.duplicates.length > 0) {
      recommendations.push('Review and consolidate duplicate dependencies')}
    
    if (analysis.unused.length > 5) {
      recommendations.push('Regularly audit and remove unused dependencies')}
    
    if (analysis.totalCount > 100) {
      recommendations.push('Consider reducing dependency count through better architecture')}

    return recommendations}

  async run() {
    this.log('🚀 Starting Intelligent Dependency Manager...');
    
    try {
      // Generate comprehensive dependency report
      const report = await this.generateDependencyReport();
      
      // Save dependency history
      this.dependencyHistory.push({
        timestamp: new Date().toISOString(),
        report: report,
        summary: report.summary
      });
      
      this.saveDependencyHistory();

      this.log(`🎯 Dependency Management Complete:`);
      this.log(`   - Dependencies Analyzed: ${report.summary.totalDependencies}`);
      this.log(`   - Updates Applied: ${report.summary.outdatedFixed}`);
      this.log(`   - Vulnerabilities Fixed: ${report.summary.vulnerabilitiesFixed}`);
      this.log(`   - Unused Removed: ${report.summary.unusedRemoved}`);
      this.log(`   - Optimization: ${report.summary.optimizationSuccess ? 'Success' : 'Failed'}`)} catch (error) {
      this.log(`❌ Dependency Manager failed: ${error.message}`, 'error');
      throw error}
  }
}

// Run the dependency manager
if (import.meta.url === `file://${process.argv[1]}`) {
  const manager = new IntelligentDependencyManager();
  manager.run().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1)})}

export default $1;