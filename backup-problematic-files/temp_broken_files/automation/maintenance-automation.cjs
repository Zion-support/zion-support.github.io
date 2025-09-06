#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class MaintenanceAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'automation-reports');
    this.ensureDirectories();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  async runCommand(command, description, timeout = 30000) {
    this.log(`🚀 Starting: ${description}`);
    try {
      const result = execSync(command, { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        timeout: timeout
      });
      this.log(`✅ Completed: ${description}`);
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ Failed: ${description} - ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async cleanupOldFiles() {
    this.log('🧹 Cleaning up old files...');
    
    const cleanupTasks = [
      {
        command: 'find . -name "*.log" -type f -mtime +7 -delete',
        description: 'Remove old log files',
        timeout: 10000
      },
      {
        command: 'find . -name "*.tmp" -type f -delete',
        description: 'Remove temporary files',
        timeout: 10000
      },
      {
        command: 'find . -name ".DS_Store" -type f -delete',
        description: 'Remove .DS_Store files',
        timeout: 10000
      },
      {
        command: 'find . -name "node_modules/.cache" -type d -exec rm -rf {} + 2>/dev/null || true',
        description: 'Clear node_modules cache',
        timeout: 30000
      }
    ];
    
    const results = [];
    
    for (const task of cleanupTasks) {
      const result = await this.runCommand(task.command, task.description, task.timeout);
      results.push({ ...task, ...result });
    }
    
    return results;
  }

  async updateDependencies() {
    this.log('📦 Checking for dependency updates...');
    
    const updateCommands = [
      {
        command: 'npm outdated',
        description: 'Check outdated dependencies',
        timeout: 30000
      },
      {
        command: 'npm audit fix --dry-run',
        description: 'Check security fixes (dry run)',
        timeout: 30000
      }
    ];
    
    const results = [];
    
    for (const cmd of updateCommands) {
      const result = await this.runCommand(cmd.command, cmd.description, cmd.timeout);
      results.push({ ...cmd, ...result });
    }
    
    return results;
  }

  async optimizeBuild() {
    this.log('⚡ Optimizing build...');
    
    const optimizeCommands = [
      {
        command: 'npm run build',
        description: 'Build application',
        timeout: 120000
      },
      {
        command: 'du -sh .next/static 2>/dev/null || echo "Build size check"',
        description: 'Check build size',
        timeout: 10000
      }
    ];
    
    const results = [];
    
    for (const cmd of optimizeCommands) {
      const result = await this.runCommand(cmd.command, cmd.description, cmd.timeout);
      results.push({ ...cmd, ...result });
    }
    
    return results;
  }

  async generateMaintenanceReport() {
    this.log('📊 Generating maintenance report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      maintenance: 'Automated Maintenance',
      systemInfo: {
        nodeVersion: process.version,
        platform: process.platform,
        arch: process.arch
      },
      diskUsage: await this.getDiskUsage(),
      fileCounts: await this.getFileCounts()
    };
    
    const reportPath = path.join(this.reportsDir, 'maintenance-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📄 Maintenance report saved to: ${reportPath}`);
    return report;
  }

  async getDiskUsage() {
    try {
      const result = execSync('df -h .', { encoding: 'utf8', timeout: 5000 });
      return result.trim();
    } catch (error) {
      return 'Unable to get disk usage';
    }
  }

  async getFileCounts() {
    const counts = {};
    
    try {
      counts.jsFiles = execSync('find . -name "*.js" -type f | wc -l', { encoding: 'utf8' }).trim();
      counts.jsxFiles = execSync('find . -name "*.jsx" -type f | wc -l', { encoding: 'utf8' }).trim();
      counts.tsFiles = execSync('find . -name "*.ts" -type f | wc -l', { encoding: 'utf8' }).trim();
      counts.tsxFiles = execSync('find . -name "*.tsx" -type f | wc -l', { encoding: 'utf8' }).trim();
    } catch (error) {
      counts.error = 'Unable to count files';
    }
    
    return counts;
  }

  async run() {
    this.log('🚀 Starting Maintenance Automation');
    
    const allResults = [];
    
    // Run maintenance tasks
    const cleanupResults = await this.cleanupOldFiles();
    const updateResults = await this.updateDependencies();
    const optimizeResults = await this.optimizeBuild();
    
    allResults.push(...cleanupResults, ...updateResults, ...optimizeResults);
    
    const report = await this.generateMaintenanceReport();
    
    this.log(`🎉 Maintenance Automation Complete!`);
    this.log(`📊 Total tasks: ${allResults.length}`);
    this.log(`✅ Successful: ${allResults.filter(r => r.success).length}`);
    this.log(`❌ Failed: ${allResults.filter(r => !r.success).length}`);
    
    return report;
  }
}

// Run the maintenance automation
const maintenance = new MaintenanceAutomation();
maintenance.run().catch(console.error);