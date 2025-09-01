#!/usr/bin/env node

import { execSync, spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

class DependencyErrorResolver {
  constructor() {
    this.checkInterval = process.env.CHECK_INTERVAL || 600000; // 10 minutes
    this.autoInstall = process.env.AUTO_INSTALL === 'true';
    this.securityCheck = process.env.SECURITY_CHECK === 'true';
    this.logFile = 'error-reports/dependency-error-resolver-report.json';
    
    console.log('📦 Dependency Error Resolver started');
    console.log(`Check interval: ${this.checkInterval}ms`);
    console.log(`Auto-install: ${this.autoInstall}`);
    console.log(`Security check: ${this.securityCheck}`);
  }

  async start() {
    // Initial dependency check
    await this.checkDependencyErrors();
    
    // Set up interval checking
    setInterval(async () => {
      await this.checkDependencyErrors();
    }, this.checkInterval);
  }

  async checkDependencyErrors() {
    console.log('🔍 Checking dependency errors...');
    
    const report = {
      timestamp: new Date().toISOString(),
      dependencies: {
        missing: [],
        outdated: [],
        vulnerable: [],
        conflicting: []
      },
      fixes: {
        installed: [],
        updated: [],
        failed: [],
        skipped: []
      },
      recommendations: []
    };

    try {
      // Check for missing dependencies
      await this.checkMissingDependencies(report);
      
      // Check for outdated dependencies
      await this.checkOutdatedDependencies(report);
      
      // Check for security vulnerabilities
      if (this.securityCheck) {
        await this.checkVulnerabilities(report);
      }
      
      // Check for dependency conflicts
      await this.checkDependencyConflicts(report);
      
      // Auto-fix if enabled
      if (this.autoInstall) {
        await this.autoFixDependencies(report);
      }
      
      // Generate recommendations
      report.recommendations = this.generateRecommendations(report);
      
      // Save report
      this.saveReport(report);
      
      console.log(`📊 Dependency check complete.`);
      console.log(`Missing: ${report.dependencies.missing.length}, Outdated: ${report.dependencies.outdated.length}`);
      console.log(`Vulnerable: ${report.dependencies.vulnerable.length}, Conflicts: ${report.dependencies.conflicting.length}`);
      
    } catch (error) {
      console.error('Error during dependency check:', error);
      report.error = error.message;
      this.saveReport(report);
    }
  }

  async checkMissingDependencies(report) {
    try {
      // Run npm ls to check for missing dependencies
      execSync('npm ls', { stdio: 'pipe' });
    } catch (error) {
      const output = error.stdout ? error.stdout.toString() : error.stderr.toString();
      const missing = this.parseMissingDependencies(output);
      report.dependencies.missing = missing;
    }
  }

  parseMissingDependencies(output) {
    const missing = [];
    const lines = output.split('\\n');
    
    for (const line of lines) {
      if (line.includes('UNMET DEPENDENCY') || line.includes('missing:')) {
        const match = line.match(/([\\w\\-@\\/]+)@([\\d\\.\\^~]+)/);
        if (match) {
          missing.push({
            name: match[1],
            version: match[2],
            type: 'missing'
          });
        }
      }
    }
    
    return missing;
  }

  async checkOutdatedDependencies(report) {
    try {
      const output = execSync('npm outdated --json', { stdio: 'pipe' }).toString();
      const outdated = JSON.parse(output || '{}');
      
      report.dependencies.outdated = Object.entries(outdated).map(([name, info]) => ({
        name,
        current: info.current,
        wanted: info.wanted,
        latest: info.latest,
        type: 'outdated'
      }));
    } catch (error) {
      // npm outdated returns exit code 1 when outdated packages exist
      if (error.stdout) {
        try {
          const outdated = JSON.parse(error.stdout.toString() || '{}');
          report.dependencies.outdated = Object.entries(outdated).map(([name, info]) => ({
            name,
            current: info.current,
            wanted: info.wanted,
            latest: info.latest,
            type: 'outdated'
          }));
        } catch (parseError) {
          console.error('Error parsing outdated dependencies:', parseError.message);
        }
      }
    }
  }

  async checkVulnerabilities(report) {
    try {
      const output = execSync('npm audit --json', { stdio: 'pipe' }).toString();
      const audit = JSON.parse(output);
      
      if (audit.vulnerabilities) {
        report.dependencies.vulnerable = Object.entries(audit.vulnerabilities).map(([name, vuln]) => ({
          name,
          severity: vuln.severity,
          via: vuln.via,
          range: vuln.range,
          type: 'vulnerable'
        }));
      }
    } catch (error) {
      if (error.stdout) {
        try {
          const audit = JSON.parse(error.stdout.toString());
          if (audit.vulnerabilities) {
            report.dependencies.vulnerable = Object.entries(audit.vulnerabilities).map(([name, vuln]) => ({
              name,
              severity: vuln.severity,
              via: vuln.via,
              range: vuln.range,
              type: 'vulnerable'
            }));
          }
        } catch (parseError) {
          console.error('Error parsing audit results:', parseError.message);
        }
      }
    }
  }

  async checkDependencyConflicts(report) {
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const conflicts = [];
      
      // Check for peer dependency conflicts
      if (packageJson.peerDependencies) {
        for (const [name, version] of Object.entries(packageJson.peerDependencies)) {
          const installedVersion = this.getInstalledVersion(name);
          if (installedVersion && !this.versionMatches(installedVersion, version)) {
            conflicts.push({
              name,
              expected: version,
              installed: installedVersion,
              type: 'peer-conflict'
            });
          }
        }
      }
      
      report.dependencies.conflicting = conflicts;
    } catch (error) {
      console.error('Error checking dependency conflicts:', error.message);
    }
  }

  getInstalledVersion(packageName) {
    try {
      const packageJsonPath = path.join('node_modules', packageName, 'package.json');
      if (fs.existsSync(packageJsonPath)) {
        const pkg = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        return pkg.version;
      }
    } catch (error) {
      // Package not installed
    }
    return null;
  }

  versionMatches(installed, expected) {
    // Simple version matching - could be more sophisticated
    if (expected.startsWith('^')) {
      const expectedMajor = expected.substring(1).split('.')[0];
      const installedMajor = installed.split('.')[0];
      return expectedMajor === installedMajor;
    }
    
    if (expected.startsWith('~')) {
      const expectedMinor = expected.substring(1).split('.').slice(0, 2).join('.');
      const installedMinor = installed.split('.').slice(0, 2).join('.');
      return expectedMinor === installedMinor;
    }
    
    return installed === expected;
  }

  async autoFixDependencies(report) {
    // Install missing dependencies
    for (const dep of report.dependencies.missing) {
      try {
        console.log(`Installing missing dependency: ${dep.name}@${dep.version}`);
        execSync(`npm install ${dep.name}@${dep.version}`, { stdio: 'pipe' });
        report.fixes.installed.push(dep);
      } catch (error) {
        console.error(`Failed to install ${dep.name}:`, error.message);
        report.fixes.failed.push({ ...dep, error: error.message });
      }
    }

    // Update outdated dependencies (only minor/patch updates for safety)
    for (const dep of report.dependencies.outdated) {
      if (this.isSafeUpdate(dep.current, dep.wanted)) {
        try {
          console.log(`Updating dependency: ${dep.name} from ${dep.current} to ${dep.wanted}`);
          execSync(`npm install ${dep.name}@${dep.wanted}`, { stdio: 'pipe' });
          report.fixes.updated.push(dep);
        } catch (error) {
          console.error(`Failed to update ${dep.name}:`, error.message);
          report.fixes.failed.push({ ...dep, error: error.message });
        }
      } else {
        report.fixes.skipped.push({ ...dep, reason: 'Major version update - manual review required' });
      }
    }

    // Fix vulnerabilities (using npm audit fix)
    if (report.dependencies.vulnerable.length > 0) {
      try {
        console.log('Running npm audit fix...');
        execSync('npm audit fix', { stdio: 'pipe' });
        console.log('✅ Vulnerability fixes applied');
      } catch (error) {
        console.error('Failed to apply vulnerability fixes:', error.message);
      }
    }
  }

  isSafeUpdate(current, wanted) {
    const currentParts = current.split('.').map(Number);
    const wantedParts = wanted.split('.').map(Number);
    
    // Only allow minor and patch updates
    return currentParts[0] === wantedParts[0]; // Same major version
  }

  generateRecommendations(report) {
    const recommendations = [];
    
    if (report.dependencies.missing.length > 0) {
      recommendations.push(`Install ${report.dependencies.missing.length} missing dependencies`);
    }
    
    if (report.dependencies.outdated.length > 5) {
      recommendations.push(`Consider updating ${report.dependencies.outdated.length} outdated dependencies`);
    }
    
    if (report.dependencies.vulnerable.length > 0) {
      const critical = report.dependencies.vulnerable.filter(v => v.severity === 'critical').length;
      const high = report.dependencies.vulnerable.filter(v => v.severity === 'high').length;
      
      if (critical > 0) {
        recommendations.push(`URGENT: Fix ${critical} critical security vulnerabilities`);
      }
      if (high > 0) {
        recommendations.push(`Important: Fix ${high} high severity security vulnerabilities`);
      }
    }
    
    if (report.dependencies.conflicting.length > 0) {
      recommendations.push(`Resolve ${report.dependencies.conflicting.length} dependency conflicts`);
    }
    
    return recommendations;
  }

  saveReport(report) {
    try {
      fs.writeFileSync(this.logFile, JSON.stringify(report, null, 2));
    } catch (error) {
      console.error('Error saving report:', error.message);
    }
  }
}

// Start the resolver
const resolver = new DependencyErrorResolver();
resolver.start().catch(console.error);

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('📦 Dependency Error Resolver shutting down...');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('📦 Dependency Error Resolver interrupted');
  process.exit(0);
});