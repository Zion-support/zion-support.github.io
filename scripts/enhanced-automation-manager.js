#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Enhanced PM2 Automation Manager');

class EnhancedAutomationManager {
  constructor() {
    this.automationProcesses = [
      'console-error-fixer',
      'intelligent-link-validator',
      'ai-code-optimizer',
      'performance-intelligence',
      'security-intelligence',
      'continuous-improvement-engine',
      'dependency-intelligence',
      'quality-intelligence',
      'seo-intelligence',
      'build-intelligence',
      'orchestration-master'
    ];
    
    this.processCategories = {
      'Core Development': ['console-error-fixer', 'intelligent-link-validator'],
      'AI & Intelligence': ['ai-code-optimizer', 'performance-intelligence', 'security-intelligence'],
      'Quality & Improvement': ['continuous-improvement-engine', 'quality-intelligence'],
      'Infrastructure': ['dependency-intelligence', 'build-intelligence', 'seo-intelligence'],
      'Orchestration': ['orchestration-master']
    };
    
    this.logFile = path.join(process.cwd(), 'logs', 'enhanced-automation-manager.log');
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    
    console.log(logMessage);
    
    try {
      fs.appendFileSync(this.logFile, logMessage + '\n');
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async showHelp() {
    console.log(`
🚀 Enhanced PM2 Automation Manager - Available Commands:

📊 Status & Monitoring:
  status                    - Show all automation processes status with categories
  status <category>         - Show status for specific category
  logs <process>           - Show logs for specific process
  monit                    - Open PM2 monitoring interface
  dashboard                - Start real-time dashboard
  health                   - Comprehensive system health check

⚙️  Process Management:
  start                    - Start all automation processes
  start <category>         - Start processes in specific category
  stop                     - Stop all automation processes
  stop <category>          - Stop processes in specific category
  restart                  - Restart all automation processes
  restart <category>       - Restart processes in specific category
  restart <process>        - Restart specific process
  delete                   - Delete all automation processes

🔍 Intelligence & Analysis:
  analyze                  - Run comprehensive analysis of all systems
  optimize                 - Apply intelligent optimizations
  report                   - Generate comprehensive reports
  insights                 - Show AI-powered insights and recommendations

🔄 Orchestration:
  orchestrate              - Trigger orchestration cycle
  schedule                 - Show intelligent scheduling information
  conflicts                - Check for and resolve process conflicts

📋 Examples:
  node scripts/enhanced-automation-manager.js status
  node scripts/enhanced-automation-manager.js status "AI & Intelligence"
  node scripts/enhanced-automation-manager.js start "Core Development"
  node scripts/enhanced-automation-manager.js analyze
  node scripts/enhanced-automation-manager.js orchestrate
    `);
  }

  async getStatus(category = null) {
    try {
      const output = execSync('pm2 jlist', { encoding: 'utf8' });
      const processes = JSON.parse(output);
      
      let filteredProcesses = processes.filter(proc => 
        this.automationProcesses.includes(proc.name)
      );
      
      if (category) {
        const categoryProcesses = this.processCategories[category];
        if (categoryProcesses) {
          filteredProcesses = filteredProcesses.filter(proc => 
            categoryProcesses.includes(proc.name)
          );
        }
      }
      
      if (category) {
        console.log(`📊 ${category} Processes Status:`);
      } else {
        console.log('📊 All Automation Processes Status:');
      }
      
      console.log('─'.repeat(100));
      console.log('Category'.padEnd(20) + 'Name'.padEnd(25) + 'Status'.padEnd(10) + 'Memory'.padEnd(10) + 'CPU'.padEnd(8) + 'Uptime'.padEnd(15) + 'Restarts');
      console.log('─'.repeat(100));
      
      filteredProcesses.forEach(proc => {
        const category = this.getProcessCategory(proc.name);
        const statusIcon = proc.pm2_env.status === 'online' ? '🟢' : proc.pm2_env.status === 'errored' ? '🔴' : '🟡';
        const memory = `${Math.round(proc.monit.memory / 1024 / 1024)}MB`;
        const uptime = this.formatUptime(proc.pm2_env.pm_uptime);
        
        console.log(
          category.padEnd(20) +
          proc.name.padEnd(25) +
          `${statusIcon} ${proc.pm2_env.status}`.padEnd(10) +
          memory.padEnd(10) +
          `${proc.monit.cpu}%`.padEnd(8) +
          uptime.padEnd(15) +
          proc.pm2_env.restart_time
        );
      });
      
      const onlineCount = filteredProcesses.filter(p => p.pm2_env.status === 'online').length;
      const totalCount = filteredProcesses.length;
      
      console.log('');
      console.log(`📈 Summary: ${onlineCount}/${totalCount} processes online`);
      
      if (onlineCount < totalCount) {
        console.log('⚠️  Some processes are not running. Use "health" to see details.');
      }
      
      return filteredProcesses;
      
    } catch (error) {
      this.log(`❌ Failed to get status: ${error.message}`, 'ERROR');
      return [];
    }
  }

  getProcessCategory(processName) {
    for (const [category, processes] of Object.entries(this.processCategories)) {
      if (processes.includes(processName)) {
        return category;
      }
    }
    return 'Unknown';
  }

  async startProcesses(category = null) {
    try {
      if (category) {
        const categoryProcesses = this.processCategories[category];
        if (categoryProcesses) {
          this.log(`🚀 Starting ${category} processes...`);
          execSync('pm2 start ecosystem.config.cjs --only automation', { stdio: 'inherit' });
          this.log(`✅ ${category} processes started`);
        } else {
          this.log(`❌ Unknown category: ${category}`, 'ERROR');
        }
      } else {
        this.log('🚀 Starting all automation processes...');
        execSync('pm2 start ecosystem.config.cjs --only automation', { stdio: 'inherit' });
        this.log('✅ All automation processes started');
      }
    } catch (error) {
      this.log(`❌ Failed to start processes: ${error.message}`, 'ERROR');
    }
  }

  async stopProcesses(category = null) {
    try {
      if (category) {
        const categoryProcesses = this.processCategories[category];
        if (categoryProcesses) {
          this.log(`🛑 Stopping ${category} processes...`);
          for (const processName of categoryProcesses) {
            try {
              execSync(`pm2 stop ${processName}`, { stdio: 'pipe' });
            } catch (error) {
              // Process might not be running
            }
          }
          this.log(`✅ ${category} processes stopped`);
        } else {
          this.log(`❌ Unknown category: ${category}`, 'ERROR');
        }
      } else {
        this.log('🛑 Stopping all automation processes...');
        execSync('pm2 stop ecosystem.config.cjs --only automation', { stdio: 'inherit' });
        this.log('✅ All automation processes stopped');
      }
    } catch (error) {
      this.log(`❌ Failed to stop processes: ${error.message}`, 'ERROR');
    }
  }

  async restartProcesses(category = null, processName = null) {
    try {
      if (processName) {
        this.log(`🔄 Restarting specific process: ${processName}`);
        execSync(`pm2 restart ${processName}`, { stdio: 'inherit' });
        this.log(`✅ ${processName} restarted`);
      } else if (category) {
        const categoryProcesses = this.processCategories[category];
        if (categoryProcesses) {
          this.log(`🔄 Restarting ${category} processes...`);
          execSync('pm2 restart ecosystem.config.cjs --only automation', { stdio: 'inherit' });
          this.log(`✅ ${category} processes restarted`);
        } else {
          this.log(`❌ Unknown category: ${category}`, 'ERROR');
        }
      } else {
        this.log('🔄 Restarting all automation processes...');
        execSync('pm2 restart ecosystem.config.cjs --only automation', { stdio: 'inherit' });
        this.log('✅ All automation processes restarted');
      }
    } catch (error) {
      this.log(`❌ Failed to restart processes: ${error.message}`, 'ERROR');
    }
  }

  async deleteProcesses() {
    try {
      this.log('🗑️  Deleting all automation processes...');
      execSync('pm2 delete ecosystem.config.cjs --only automation', { stdio: 'inherit' });
      this.log('✅ All automation processes deleted');
    } catch (error) {
      this.log(`❌ Failed to delete processes: ${error.message}`, 'ERROR');
    }
  }

  async showLogs(processName) {
    try {
      this.log(`📋 Showing logs for ${processName}...`);
      execSync(`pm2 logs ${processName} --lines 50`, { stdio: 'inherit' });
    } catch (error) {
      this.log(`❌ Failed to show logs: ${error.message}`, 'ERROR');
    }
  }

  async openMonitoring() {
    try {
      this.log('📊 Opening PM2 monitoring interface...');
      execSync('pm2 monit', { stdio: 'inherit' });
    } catch (error) {
      this.log(`❌ Failed to open monitoring: ${error.message}`, 'ERROR');
    }
  }

  async checkHealth() {
    try {
      this.log('🏥 Running comprehensive health check...');
      
      const processes = await this.getStatus();
      const healthReport = {
        timestamp: new Date().toISOString(),
        overallHealth: 'healthy',
        issues: [],
        recommendations: []
      };
      
      // Check process health
      const failedProcesses = processes.filter(proc => 
        proc.pm2_env.status === 'errored' || proc.pm2_env.status === 'stopped'
      );
      
      if (failedProcesses.length > 0) {
        healthReport.overallHealth = 'warning';
        healthReport.issues.push(`${failedProcesses.length} processes are not running`);
        healthReport.recommendations.push('Restart failed processes using "restart" command');
      }
      
      // Check resource usage
      const highMemoryProcesses = processes.filter(proc => 
        proc.monit.memory > 200 * 1024 * 1024 // > 200MB
      );
      
      if (highMemoryProcesses.length > 0) {
        healthReport.overallHealth = 'warning';
        healthReport.issues.push(`${highMemoryProcesses.length} processes using high memory`);
        healthReport.recommendations.push('Consider optimizing memory usage or restarting processes');
      }
      
      // Check restart frequency
      const highRestartProcesses = processes.filter(proc => 
        proc.pm2_env.restart_time > 5
      );
      
      if (highRestartProcesses.length > 0) {
        healthReport.overallHealth = 'critical';
        healthReport.issues.push(`${highRestartProcesses.length} processes with high restart frequency`);
        healthReport.recommendations.push('Investigate underlying issues causing frequent restarts');
      }
      
      // Display health report
      console.log(`🏥 System Health: ${healthReport.overallHealth.toUpperCase()}`);
      console.log(`⏰ Checked at: ${healthReport.timestamp}`);
      
      if (healthReport.issues.length > 0) {
        console.log('\n🚨 Issues Found:');
        healthReport.issues.forEach(issue => console.log(`  • ${issue}`));
      }
      
      if (healthReport.recommendations.length > 0) {
        console.log('\n💡 Recommendations:');
        healthReport.recommendations.forEach(rec => console.log(`  • ${rec}`));
      }
      
      // Save health report
      const reportPath = path.join(process.cwd(), 'logs', 'health-check-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(healthReport, null, 2));
      
      return healthReport;
      
    } catch (error) {
      this.log(`❌ Health check failed: ${error.message}`, 'ERROR');
      return { overallHealth: 'error', issues: [error.message] };
    }
  }

  async runAnalysis() {
    try {
      this.log('🔍 Running comprehensive system analysis...');
      
      // Check if analysis scripts exist and run them
      const analysisScripts = [
        'scripts/automation/ai-code-optimizer.cjs',
        'scripts/automation/performance-intelligence.cjs',
        'scripts/automation/security-intelligence.cjs'
      ];
      
      for (const script of analysisScripts) {
        if (fs.existsSync(script)) {
          this.log(`🔍 Running ${path.basename(script)}...`);
          try {
            execSync(`node ${script}`, { stdio: 'pipe', timeout: 300000 });
          } catch (error) {
            this.log(`⚠️  ${path.basename(script)} analysis failed: ${error.message}`, 'WARN');
          }
        }
      }
      
      this.log('✅ Comprehensive analysis completed');
      
    } catch (error) {
      this.log(`❌ Analysis failed: ${error.message}`, 'ERROR');
    }
  }

  async applyOptimizations() {
    try {
      this.log('🔧 Applying intelligent optimizations...');
      
      // Trigger optimization processes
      const optimizationProcesses = ['ai-code-optimizer', 'performance-intelligence'];
      
      for (const processName of optimizationProcesses) {
        try {
          this.log(`🔧 Triggering ${processName}...`);
          execSync(`pm2 restart ${processName}`, { stdio: 'pipe' });
        } catch (error) {
          this.log(`⚠️  Failed to trigger ${processName}: ${error.message}`, 'WARN');
        }
      }
      
      this.log('✅ Optimization processes triggered');
      
    } catch (error) {
      this.log(`❌ Optimization failed: ${error.message}`, 'ERROR');
    }
  }

  async generateReports() {
    try {
      this.log('📊 Generating comprehensive reports...');
      
      // Check for report files and display summary
      const logsDir = path.join(process.cwd(), 'logs');
      if (fs.existsSync(logsDir)) {
        const reportFiles = fs.readdirSync(logsDir).filter(file => file.endsWith('-report.json'));
        
        console.log('\n📊 Available Reports:');
        for (const reportFile of reportFiles) {
          try {
            const reportPath = path.join(logsDir, reportFile);
            const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
            
            console.log(`  📄 ${reportFile}:`);
            if (report.timestamp) {
              console.log(`    Generated: ${new Date(report.timestamp).toLocaleString()}`);
            }
            
            // Show key metrics based on report type
            if (report.overallScore) {
              console.log(`    Score: ${report.overallScore.toFixed(2)}/100`);
            }
            if (report.overallHealth) {
              console.log(`    Health: ${report.overallHealth}`);
            }
            if (report.summary) {
              console.log(`    Summary: ${JSON.stringify(report.summary)}`);
            }
            
          } catch (error) {
            console.log(`    ⚠️  Error reading ${reportFile}`);
          }
        }
      }
      
      this.log('✅ Reports generated and displayed');
      
    } catch (error) {
      this.log(`❌ Report generation failed: ${error.message}`, 'ERROR');
    }
  }

  async showInsights() {
    try {
      this.log('🧠 Generating AI-powered insights...');
      
      // Analyze recent logs and reports for insights
      const insights = await this.generateInsights();
      
      console.log('\n🧠 AI-Powered Insights:');
      insights.forEach(insight => {
        console.log(`  💡 ${insight.message}`);
        if (insight.severity === 'high') console.log('    🚨 High Priority');
        else if (insight.severity === 'medium') console.log('    ⚠️  Medium Priority');
        else console.log('    ℹ️  Low Priority');
      });
      
      this.log('✅ Insights generated');
      
    } catch (error) {
      this.log(`❌ Insights generation failed: ${error.message}`, 'ERROR');
    }
  }

  async generateInsights() {
    const insights = [];
    
    try {
      // Check for recent errors in logs
      const logsDir = path.join(process.cwd(), 'logs');
      if (fs.existsSync(logsDir)) {
        const logFiles = fs.readdirSync(logsDir).filter(file => file.endsWith('.log'));
        
        for (const logFile of logFiles) {
          try {
            const logPath = path.join(logsDir, logFile);
            const logContent = fs.readFileSync(logPath, 'utf8');
            
            // Look for error patterns
            const errorCount = (logContent.match(/ERROR/g) || []).length;
            const warningCount = (logContent.match(/WARN/g) || []).length;
            
            if (errorCount > 10) {
              insights.push({
                message: `High error rate in ${logFile} (${errorCount} errors)`,
                severity: 'high'
              });
            } else if (warningCount > 20) {
              insights.push({
                message: `High warning rate in ${logFile} (${warningCount} warnings)`,
                severity: 'medium'
              });
            }
          } catch (error) {
            // Skip files that can't be read
          }
        }
      }
      
      // Check for performance issues
      const performanceReportPath = path.join(process.cwd(), 'logs', 'performance-report.json');
      if (fs.existsSync(performanceReportPath)) {
        try {
          const report = JSON.parse(fs.readFileSync(performanceReportPath, 'utf8'));
          if (report.overallScore < 70) {
            insights.push({
              message: `Performance score is low (${report.overallScore.toFixed(2)}/100). Consider optimization.`,
              severity: 'medium'
            });
          }
        } catch (error) {
          // Skip if report can't be parsed
        }
      }
      
    } catch (error) {
      this.log(`❌ Error generating insights: ${error.message}`, 'ERROR');
    }
    
    return insights;
  }

  async triggerOrchestration() {
    try {
      this.log('🔄 Triggering orchestration cycle...');
      
      // Restart orchestration master to trigger cycle
      execSync('pm2 restart orchestration-master', { stdio: 'inherit' });
      
      this.log('✅ Orchestration cycle triggered');
      
    } catch (error) {
      this.log(`❌ Orchestration trigger failed: ${error.message}`, 'ERROR');
    }
  }

  async showScheduling() {
    try {
      this.log('📅 Showing intelligent scheduling information...');
      
      // Check orchestration master logs for scheduling info
      try {
        const logs = execSync('pm2 logs orchestration-master --lines 20 --nostream', { encoding: 'utf8' });
        console.log('\n📅 Recent Orchestration Activity:');
        console.log(logs);
      } catch (error) {
        console.log('📅 No recent orchestration activity found');
      }
      
    } catch (error) {
      this.log(`❌ Failed to show scheduling: ${error.message}`, 'ERROR');
    }
  }

  async checkConflicts() {
    try {
      this.log('🔍 Checking for process conflicts...');
      
      const processes = await this.getStatus();
      const conflicts = this.detectConflicts(processes);
      
      if (conflicts.length > 0) {
        console.log('\n⚠️  Process Conflicts Detected:');
        conflicts.forEach(conflict => {
          console.log(`  • ${conflict.type}: ${conflict.processes.join(', ')}`);
        });
        
        console.log('\n🔄 Resolving conflicts...');
        await this.resolveConflicts(conflicts);
      } else {
        console.log('✅ No process conflicts detected');
      }
      
    } catch (error) {
      this.log(`❌ Conflict check failed: ${error.message}`, 'ERROR');
    }
  }

  detectConflicts(processes) {
    const conflicts = [];
    
    // Check for resource conflicts
    const highMemoryProcesses = processes.filter(proc => 
      proc.monit.memory > 300 * 1024 * 1024 // > 300MB
    );
    
    if (highMemoryProcesses.length > 2) {
      conflicts.push({
        type: 'High Memory Usage',
        processes: highMemoryProcesses.map(p => p.name)
      });
    }
    
    // Check for process type conflicts
    const processGroups = {
      'build': ['build-intelligence', 'performance-intelligence'],
      'analysis': ['ai-code-optimizer', 'quality-intelligence']
    };
    
    for (const [group, groupProcesses] of Object.entries(processGroups)) {
      const runningProcesses = groupProcesses.filter(procName => 
        processes.some(proc => proc.name === procName && proc.pm2_env.status === 'online')
      );
      
      if (runningProcesses.length > 1) {
        conflicts.push({
          type: `${group} Process Conflict`,
          processes: runningProcesses
        });
      }
    }
    
    return conflicts;
  }

  async resolveConflicts(conflicts) {
    try {
      for (const conflict of conflicts) {
        this.log(`🔧 Resolving ${conflict.type}...`);
        
        if (conflict.type === 'High Memory Usage') {
          // Restart high-memory processes
          for (const processName of conflict.processes.slice(1)) {
            execSync(`pm2 restart ${processName}`, { stdio: 'pipe' });
            await this.sleep(5000); // Wait between restarts
          }
        } else if (conflict.type.includes('Process Conflict')) {
          // Stagger process execution
          for (let i = 1; i < conflict.processes.length; i++) {
            execSync(`pm2 stop ${conflict.processes[i]}`, { stdio: 'pipe' });
            await this.sleep(30000); // Wait 30 seconds
            execSync(`pm2 start ${conflict.processes[i]}`, { stdio: 'pipe' });
          }
        }
      }
      
      this.log('✅ Conflicts resolved');
      
    } catch (error) {
      this.log(`❌ Conflict resolution failed: ${error.message}`, 'ERROR');
    }
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  formatUptime(uptime) {
    if (!uptime) return 'N/A';
    const seconds = Math.floor((Date.now() - uptime) / 1000);
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  }

  async run() {
    const command = process.argv[2];
    const arg = process.argv[3];
    
    try {
      switch (command) {
        case 'status':
          await this.getStatus(arg);
          break;
        case 'start':
          await this.startProcesses(arg);
          break;
        case 'stop':
          await this.stopProcesses(arg);
          break;
        case 'restart':
          await this.restartProcesses(arg, process.argv[4]);
          break;
        case 'delete':
          await this.deleteProcesses();
          break;
        case 'logs':
          if (arg) {
            await this.showLogs(arg);
          } else {
            console.log('❌ Please specify a process name for logs');
          }
          break;
        case 'monit':
          await this.openMonitoring();
          break;
        case 'health':
          await this.checkHealth();
          break;
        case 'analyze':
          await this.runAnalysis();
          break;
        case 'optimize':
          await this.applyOptimizations();
          break;
        case 'report':
          await this.generateReports();
          break;
        case 'insights':
          await this.showInsights();
          break;
        case 'orchestrate':
          await this.triggerOrchestration();
          break;
        case 'schedule':
          await this.showScheduling();
          break;
        case 'conflicts':
          await this.checkConflicts();
          break;
        case 'help':
        case '--help':
        case '-h':
          await this.showHelp();
          break;
        default:
          console.log('❌ Unknown command. Use "help" to see available commands.');
          break;
      }
    } catch (error) {
      this.log(`❌ Command execution failed: ${error.message}`, 'ERROR');
    }
  }
}

// Start the manager if this file is run directly
if (require.main === module) {
  const manager = new EnhancedAutomationManager();
  manager.run().catch(error => {
    console.error('❌ Failed to run Enhanced Automation Manager:', error);
    process.exit(1);
  });
}

export default EnhancedAutomationManager;