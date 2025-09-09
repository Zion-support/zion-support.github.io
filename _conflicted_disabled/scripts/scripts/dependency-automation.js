#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class DependencyAutomation {
  constructor() {
    this.projectRoot = path.resolve(__dirname, '..');
    this.logFile = path.join(this.projectRoot, 'logs', 'dependency-automation.log');
    this.dependencyReportFile = path.join(this.projectRoot, 'logs', 'dependency-report.json');
    this.updatedDependencies = [];
    this.failedUpdates = [];
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    // Append to log file
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async runCommand(command, options = {}) {
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: options.silent ? 'pipe' : 'inherit',
        ...options
      });
      return { success: true, output: result };
    } catch (error) {
      return { success: false, error: error.message, output: error.stdout || '' };
    }
  }

  async checkDependencies() {
    this.log('🔍 Checking dependency status...');
    
    const checks = {
      outdated: await this.checkOutdatedDependencies(),
      vulnerabilities: await this.checkVulnerabilities(),
      unused: await this.checkUnusedDependencies(),
      peerDependencies: await this.checkPeerDependencies()
    };
    
    return checks;
  }

  async checkOutdatedDependencies() {
    this.log('Checking for outdated dependencies...');
    
    const result = await this.runCommand('npm outdated --json', { silent: true });
    
    if (result.success) {
      try {
        const outdated = JSON.parse(result.output);
        return Object.entries(outdated).map(([name, info]) => ({
          name,
          current: info.current,
          wanted: info.wanted,
          latest: info.latest,
          location: info.location
        }));
      } catch (e) {
        this.log('Failed to parse outdated dependencies', 'WARN');
        return [];
      }
    }
    
    return [];
  }

  async checkVulnerabilities() {
    this.log('Checking for security vulnerabilities...');
    
    const result = await this.runCommand('npm audit --json', { silent: true });
    
    if (result.success) {
      try {
        const audit = JSON.parse(result.output);
        return {
          vulnerabilities: audit.metadata?.vulnerabilities || {},
          summary: audit.metadata?.summary || {},
          advisories: audit.advisories || {}
        };
      } catch (e) {
        this.log('Failed to parse security audit', 'WARN');
        return { vulnerabilities: {}, summary: {}, advisories: {} };
      }
    }
    
    return { vulnerabilities: {}, summary: {}, advisories: {} };
  }

  async checkUnusedDependencies() {
    this.log('Checking for unused dependencies...');
    
    // This would typically use a tool like depcheck
    // For now, we'll provide a placeholder
    return {
      message: 'Unused dependency check requires depcheck to be installed'
    };
  }

  async checkPeerDependencies() {
    this.log('Checking peer dependencies...');
    
    try {
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8'));
      const peerDeps = packageJson.peerDependencies || {};
      
      return Object.entries(peerDeps).map(([name, version]) => ({
        name,
        version,
        installed: this.isPeerDependencyInstalled(name, version)
      }));
    } catch (e) {
      this.log('Failed to check peer dependencies', 'WARN');
      return [];
    }
  }

  isPeerDependencyInstalled(name, requiredVersion) {
    try {
      const nodeModulesPath = path.join(this.projectRoot, 'node_modules', name);
      if (!fs.existsSync(nodeModulesPath)) {
        return false;
      }
      
      const packageJsonPath = path.join(nodeModulesPath, 'package.json');
      if (!fs.existsSync(packageJsonPath)) {
        return false;
      }
      
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      const installedVersion = packageJson.version;
      
      // Simple version comparison - in practice, you'd use semver
      return this.satisfiesVersion(installedVersion, requiredVersion);
    } catch (e) {
      return false;
    }
  }

  satisfiesVersion(installed, required) {
    // Simple version satisfaction check
    // In practice, you'd use a proper semver library
    if (required === '*') return true;
    if (required.startsWith('^')) {
      const baseVersion = required.substring(1);
      return installed.startsWith(baseVersion.split('.')[0]);
    }
    if (required.startsWith('~')) {
      const baseVersion = required.substring(1);
      return installed.startsWith(baseVersion.split('.').slice(0, 2).join('.'));
    }
    return installed === required;
  }

  async updateDependencies(checks) {
    this.log('🔧 Starting dependency updates...');
    
    let totalUpdated = 0;
    
    // Update outdated dependencies
    if (checks.outdated.length > 0) {
      this.log(`Updating ${checks.outdated.length} outdated dependencies...`);
      const updatedCount = await this.updateOutdatedDependencies(checks.outdated);
      totalUpdated += updatedCount;
    }
    
    // Fix security vulnerabilities
    if (checks.vulnerabilities && Object.keys(checks.vulnerabilities).length > 0) {
      this.log('Fixing security vulnerabilities...');
      const fixedCount = await this.fixVulnerabilities(checks.vulnerabilities);
      totalUpdated += fixedCount;
    }
    
    // Install missing peer dependencies
    if (checks.peerDependencies && checks.peerDependencies.length > 0) {
      const missingPeers = checks.peerDependencies.filter(p => !p.installed);
      if (missingPeers.length > 0) {
        this.log(`Installing ${missingPeers.length} missing peer dependencies...`);
        const installedCount = await this.installPeerDependencies(missingPeers);
        totalUpdated += installedCount;
      }
    }
    
    return totalUpdated;
  }

  async updateOutdatedDependencies(outdated) {
    let updatedCount = 0;
    
    for (const dep of outdated) {
      try {
        this.log(`Updating ${dep.name} from ${dep.current} to ${dep.latest}...`);
        
        // Update the specific dependency
        const updateResult = await this.runCommand(`npm install ${dep.name}@${dep.latest}`, { silent: true });
        
        if (updateResult.success) {
          updatedCount++;
          this.updatedDependencies.push({
            name: dep.name,
            from: dep.current,
            to: dep.latest,
            type: 'update',
            timestamp: new Date().toISOString()
          });
          this.log(`✅ Successfully updated ${dep.name}`);
        } else {
          this.failedUpdates.push({
            name: dep.name,
            error: updateResult.error,
            type: 'update',
            timestamp: new Date().toISOString()
          });
          this.log(`❌ Failed to update ${dep.name}: ${updateResult.error}`, 'ERROR');
        }
      } catch (error) {
        this.log(`Error updating ${dep.name}: ${error.message}`, 'ERROR');
        this.failedUpdates.push({
          name: dep.name,
          error: error.message,
          type: 'update',
          timestamp: new Date().toISOString()
        });
      }
    }
    
    return updatedCount;
  }

  async fixVulnerabilities(vulnerabilities) {
    let fixedCount = 0;
    
    try {
      this.log('Running npm audit fix...');
      const fixResult = await this.runCommand('npm audit fix', { silent: true });
      
      if (fixResult.success) {
        this.log('✅ Security vulnerabilities fixed automatically');
        fixedCount = Object.values(vulnerabilities).reduce((sum, count) => sum + count, 0);
      } else {
        this.log('⚠️ Some vulnerabilities could not be fixed automatically', 'WARN');
      }
      
      // Try to fix remaining vulnerabilities with force
      this.log('Attempting to fix remaining vulnerabilities...');
      const forceFixResult = await this.runCommand('npm audit fix --force', { silent: true });
      
      if (forceFixResult.success) {
        this.log('✅ Remaining vulnerabilities fixed with force');
        fixedCount += Object.values(vulnerabilities).reduce((sum, count) => sum + count, 0);
      }
      
    } catch (error) {
      this.log(`Error fixing vulnerabilities: ${error.message}`, 'ERROR');
    }
    
    return fixedCount;
  }

  async installPeerDependencies(missingPeers) {
    let installedCount = 0;
    
    for (const peer of missingPeers) {
      try {
        this.log(`Installing peer dependency ${peer.name}@${peer.version}...`);
        
        const installResult = await this.runCommand(`npm install ${peer.name}@${peer.version}`, { silent: true });
        
        if (installResult.success) {
          installedCount++;
          this.updatedDependencies.push({
            name: peer.name,
            version: peer.version,
            type: 'peer-install',
            timestamp: new Date().toISOString()
          });
          this.log(`✅ Successfully installed ${peer.name}`);
        } else {
          this.failedUpdates.push({
            name: peer.name,
            error: installResult.error,
            type: 'peer-install',
            timestamp: new Date().toISOString()
          });
          this.log(`❌ Failed to install ${peer.name}: ${installResult.error}`, 'ERROR');
        }
      } catch (error) {
        this.log(`Error installing ${peer.name}: ${error.message}`, 'ERROR');
        this.failedUpdates.push({
          name: peer.name,
          error: error.message,
          type: 'peer-install',
          timestamp: new Date().toISOString()
        });
      }
    }
    
    return installedCount;
  }

  async cleanup() {
    this.log('🧹 Cleaning up after dependency updates...');
    
    try {
      // Remove node_modules and reinstall
      this.log('Removing node_modules...');
      await this.runCommand('rm -rf node_modules', { silent: true });
      
      // Clear npm cache
      this.log('Clearing npm cache...');
      await this.runCommand('npm cache clean --force', { silent: true });
      
      // Reinstall dependencies
      this.log('Reinstalling dependencies...');
      const installResult = await this.runCommand('npm install', { silent: true });
      
      if (installResult.success) {
        this.log('✅ Cleanup completed successfully');
        return true;
      } else {
        this.log('⚠️ Cleanup completed with some issues', 'WARN');
        return false;
      }
    } catch (error) {
      this.log(`Error during cleanup: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async generateReport(checks, updatedCount) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalOutdated: checks.outdated.length,
        totalVulnerabilities: Object.values(checks.vulnerabilities).reduce((sum, count) => sum + count, 0),
        totalPeerDependencies: checks.peerDependencies.length,
        updatedDependencies: updatedCount,
        successRate: this.updatedDependencies.length / (this.updatedDependencies.length + this.failedUpdates.length) * 100
      },
      checks,
      updatedDependencies: this.updatedDependencies,
      failedUpdates: this.failedUpdates,
      recommendations: this.generateRecommendations(checks)
    };
    
    // Save report
    fs.writeFileSync(this.dependencyReportFile, JSON.stringify(report, null, 2));
    
    this.log(`📊 Dependency report generated: ${updatedCount} dependencies updated`);
    return report;
  }

  generateRecommendations(checks) {
    const recommendations = [];
    
    // Outdated dependencies
    if (checks.outdated.length > 0) {
      const majorUpdates = checks.outdated.filter(dep => {
        const currentMajor = dep.current.split('.')[0];
        const latestMajor = dep.latest.split('.')[0];
        return currentMajor !== latestMajor;
      });
      
      if (majorUpdates.length > 0) {
        recommendations.push({
          category: 'major-updates',
          priority: 'medium',
          message: `${majorUpdates.length} dependencies have major version updates available`,
          dependencies: majorUpdates.map(d => d.name)
        });
      }
    }
    
    // Security vulnerabilities
    if (checks.vulnerabilities && Object.keys(checks.vulnerabilities).length > 0) {
      const highVulns = checks.vulnerabilities.high || 0;
      const criticalVulns = checks.vulnerabilities.critical || 0;
      
      if (criticalVulns > 0) {
        recommendations.push({
          category: 'security',
          priority: 'critical',
          message: `${criticalVulns} critical security vulnerabilities detected`,
          action: 'Update immediately'
        });
      }
      
      if (highVulns > 0) {
        recommendations.push({
          category: 'security',
          priority: 'high',
          message: `${highVulns} high security vulnerabilities detected`,
          action: 'Update soon'
        });
      }
    }
    
    // Peer dependencies
    if (checks.peerDependencies && checks.peerDependencies.length > 0) {
      const missingPeers = checks.peerDependencies.filter(p => !p.installed);
      if (missingPeers.length > 0) {
        recommendations.push({
          category: 'peer-dependencies',
          priority: 'medium',
          message: `${missingPeers.length} peer dependencies are not installed`,
          dependencies: missingPeers.map(p => p.name)
        });
      }
    }
    
    return recommendations;
  }

  async run() {
    this.log('🚀 Starting Dependency Automation');
    
    try {
      // Check dependencies
      const checks = await this.checkDependencies();
      
      // Log initial status
      this.log(`📊 Initial status:`);
      this.log(`  - Outdated: ${checks.outdated.length}`);
      this.log(`  - Vulnerabilities: ${Object.values(checks.vulnerabilities).reduce((sum, count) => sum + count, 0)}`);
      this.log(`  - Peer dependencies: ${checks.peerDependencies.length}`);
      
      if (checks.outdated.length === 0 && Object.values(checks.vulnerabilities).reduce((sum, count) => sum + count, 0) === 0) {
        this.log('✅ All dependencies are up to date and secure');
        return;
      }
      
      // Update dependencies
      const updatedCount = await this.updateDependencies(checks);
      
      // Cleanup if needed
      if (updatedCount > 0) {
        await this.cleanup();
      }
      
      // Generate final report
      const report = await this.generateReport(checks, updatedCount);
      
      this.log(`✅ Dependency automation completed! Updated ${updatedCount} dependencies`);
      
      // Log recommendations
      if (report.recommendations.length > 0) {
        this.log(`💡 ${report.recommendations.length} recommendations:`);
        report.recommendations.forEach(rec => {
          this.log(`  - ${rec.message} (${rec.priority} priority)`);
        });
      }
      
    } catch (error) {
      this.log(`❌ Error in dependency automation: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run the dependency automation
if (import.meta.url === `file://${process.argv[1]}`) {
  const automation = new DependencyAutomation();
  automation.run().catch(console.error);
}

export default DependencyAutomation;