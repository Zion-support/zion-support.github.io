#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting Enhanced PM2 Automation Dashboard...');

class EnhancedAutomationDashboard {
  constructor() {
    this.processes = [];
    this.reports = {};
    this.analysisData = {};
    this.updateInterval = 30000; // 30 seconds
  }

  async getPM2Status() {
    try {
      const output = execSync('pm2 jlist', { encoding: 'utf8' });
      const allProcesses = JSON.parse(output);
      
      // Filter automation processes
      this.processes = allProcesses.filter(proc => 
        proc.name !== 'pm2-logrotate' &&
        proc.name.includes('automation') || 
        proc.name.includes('analyzer') ||
        proc.name.includes('checker') ||
        proc.name.includes('fixer') ||
        proc.name.includes('runner') ||
        proc.name.includes('monitor') ||
        proc.name.includes('improvement') ||
        proc.name.includes('security') ||
        proc.name.includes('quality') ||
        proc.name.includes('performance') ||
        proc.name.includes('dependency') ||
        proc.name.includes('test') ||
        proc.name.includes('link') ||
        proc.name.includes('sitemap') ||
        proc.name.includes('front') ||
        proc.name.includes('console')
      );

      return {
        totalProcesses: this.processes.length,
        onlineProcesses: this.processes.filter(p => p.pm2_env.status === 'online').length,
        erroredProcesses: this.processes.filter(p => p.pm2_env.status === 'errored').length,
        stoppedProcesses: this.processes.filter(p => p.pm2_env.status === 'stopped').length
      };
    } catch (error) {
      console.error('❌ Failed to get PM2 status:', error.message);
      return null;
    }
  }

  async loadAnalysisReports() {
    try {
      // Load reports from all automation directories
      const reportDirs = [
        'intelligent-analysis-reports',
        'test-analysis-reports', 
        'dependency-analysis-reports',
        'performance-analysis-reports',
        'ci-cd-reports'
      ];

      reportDirs.forEach(dir => {
        const dirPath = path.join(process.cwd(), dir);
        if (fs.existsSync(dirPath)) {
          this.loadReportsFromDirectory(dir, dirPath);
        }
      });

      // Load latest summary reports
      this.loadLatestSummaries();
      
    } catch (error) {
      console.log('⚠️  Could not load analysis reports:', error.message);
    }
  }

  loadReportsFromDirectory(dirName, dirPath) {
    try {
      const files = fs.readdirSync(dirPath);
      const jsonFiles = files.filter(file => file.endsWith('.json'));
      
      if (jsonFiles.length > 0) {
        // Sort by modification time (newest first)
        jsonFiles.sort((a, b) => {
          const statA = fs.statSync(path.join(dirPath, a));
          const statB = fs.statSync(path.join(dirPath, b));
          return statB.mtime.getTime() - statA.mtime.getTime();
        });

        // Load the most recent report
        const latestReport = jsonFiles[0];
        const reportPath = path.join(dirPath, latestReport);
        const reportContent = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
        
        this.reports[dirName] = {
          latest: reportContent,
          timestamp: reportContent.timestamp,
          filename: latestReport
        };
      }
    } catch (error) {
      console.log(`⚠️  Could not load reports from ${dirName}:`, error.message);
    }
  }

  loadLatestSummaries() {
    try {
      const summaryFiles = [
        'latest-summary.json',
        'latest-test-summary.json',
        'latest-dependency-summary.json',
        'latest-performance-summary.json'
      ];

      summaryFiles.forEach(summaryFile => {
        const summaryPath = path.join(process.cwd(), summaryFile);
        if (fs.existsSync(summaryPath)) {
          try {
            const summary = JSON.parse(fs.readFileSync(summaryPath, 'utf8'));
            this.reports[summaryFile] = summary;
          } catch (error) {
            // Ignore parsing errors
          }
        }
      });
    } catch (error) {
      console.log('⚠️  Could not load latest summaries:', error.message);
    }
  }

  async displayDashboard() {
    console.clear();
    console.log('🚀 Enhanced PM2 Automation Dashboard');
    console.log('='.repeat(80));
    
    // Display PM2 status
    await this.displayPM2Status();
    
    // Display intelligent analysis overview
    this.displayIntelligentAnalysisOverview();
    
    // Display detailed reports
    this.displayDetailedReports();
    
    // Display recommendations
    this.displayRecommendations();
    
    // Display system health
    this.displaySystemHealth();
    
    // Display help
    this.displayHelp();
  }

  async displayPM2Status() {
    const status = await this.getPM2Status();
    if (!status) return;

    console.log('\n📊 PM2 Automation Status:');
    console.log('─'.repeat(80));
    console.log(`Total Processes: ${status.totalProcesses}`);
    console.log(`🟢 Online: ${status.onlineProcesses}`);
    console.log(`🔴 Errored: ${status.erroredProcesses}`);
    console.log(`🟡 Stopped: ${status.stoppedProcesses}`);
    
    if (status.erroredProcesses > 0) {
      console.log('\n⚠️  Failed Processes:');
      this.processes
        .filter(p => p.pm2_env.status === 'errored')
        .forEach(proc => {
          console.log(`  🔴 ${proc.name}: ${proc.pm2_env.status} (restarts: ${proc.pm2_env.restart_time})`);
        });
    }
  }

  displayIntelligentAnalysisOverview() {
    console.log('\n🧠 Intelligent Analysis Overview:');
    console.log('─'.repeat(80));
    
    const analysisTypes = [
      { key: 'intelligent-analysis-reports', name: 'Code Analysis', icon: '🧠' },
      { key: 'test-analysis-reports', name: 'Test Analysis', icon: '🧪' },
      { key: 'dependency-analysis-reports', name: 'Dependency Analysis', icon: '🔒' },
      { key: 'performance-analysis-reports', name: 'Performance Analysis', icon: '⚡' }
    ];

    analysisTypes.forEach(type => {
      const report = this.reports[type.key];
      if (report && report.latest && report.latest.summary) {
        const summary = report.latest.summary;
        console.log(`${type.icon} ${type.name}:`);
        
        if (summary.maintainabilityScore !== undefined) {
          console.log(`   Maintainability Score: ${summary.maintainabilityScore}/100`);
        }
        
        if (summary.overallCoverage !== undefined) {
          console.log(`   Test Coverage: ${summary.overallCoverage.toFixed(1)}% (${summary.coverageGrade})`);
        }
        
        if (summary.securityRiskScore !== undefined) {
          console.log(`   Security Risk Score: ${summary.securityRiskScore}/100`);
        }
        
        if (summary.bundleSize !== undefined) {
          console.log(`   Bundle Size: ${summary.bundleSize}`);
        }
        
        if (summary.totalIssues !== undefined) {
          console.log(`   Issues Found: ${summary.totalIssues}`);
        }
        
        if (summary.recommendations !== undefined) {
          console.log(`   Recommendations: ${summary.recommendations}`);
        }
      } else {
        console.log(`${type.icon} ${type.name}: No recent data`);
      }
    });
  }

  displayDetailedReports() {
    console.log('\n📋 Detailed Analysis Reports:');
    console.log('─'.repeat(80));
    
    Object.entries(this.reports).forEach(([key, report]) => {
      if (key.includes('reports') && report.latest) {
        console.log(`\n📁 ${key}:`);
        
        if (report.latest.summary) {
          const summary = report.latest.summary;
          Object.entries(summary).forEach(([metric, value]) => {
            if (typeof value === 'number') {
              console.log(`   ${metric}: ${value}`);
            } else if (typeof value === 'string') {
              console.log(`   ${metric}: ${value}`);
            }
          });
        }
        
        if (report.latest.details && report.latest.details.recommendations) {
          const recommendations = report.latest.details.recommendations;
          if (recommendations.length > 0) {
            console.log(`   Top Recommendations:`);
            recommendations.slice(0, 3).forEach((rec, index) => {
              console.log(`     ${index + 1}. ${rec.description || rec.type}`);
            });
          }
        }
      }
    });
  }

  displayRecommendations() {
    console.log('\n💡 Actionable Recommendations:');
    console.log('─'.repeat(80));
    
    const allRecommendations = [];
    
    // Collect recommendations from all reports
    Object.values(this.reports).forEach(report => {
      if (report.latest && report.latest.details && report.latest.details.recommendations) {
        allRecommendations.push(...report.latest.details.recommendations);
      }
    });
    
    if (allRecommendations.length === 0) {
      console.log('✅ No immediate recommendations at this time');
      return;
    }
    
    // Group by priority
    const critical = allRecommendations.filter(r => r.priority === 'critical');
    const high = allRecommendations.filter(r => r.priority === 'high');
    const medium = allRecommendations.filter(r => r.priority === 'medium');
    const low = allRecommendations.filter(r => r.priority === 'low');
    
    if (critical.length > 0) {
      console.log('\n🔴 Critical Priority:');
      critical.forEach(rec => {
        console.log(`   • ${rec.description || rec.type}`);
        if (rec.actions && rec.actions.length > 0) {
          rec.actions.forEach(action => console.log(`     - ${action}`));
        }
      });
    }
    
    if (high.length > 0) {
      console.log('\n🟠 High Priority:');
      high.slice(0, 3).forEach(rec => {
        console.log(`   • ${rec.description || rec.type}`);
      });
    }
    
    if (medium.length > 0) {
      console.log('\n🟡 Medium Priority:');
      medium.slice(0, 2).forEach(rec => {
        console.log(`   • ${rec.description || rec.type}`);
      });
    }
    
    if (low.length > 0) {
      console.log('\n🟢 Low Priority:');
      low.slice(0, 2).forEach(rec => {
        console.log(`   • ${rec.description || rec.type}`);
      });
    }
  }

  displaySystemHealth() {
    console.log('\n🏥 System Health Metrics:');
    console.log('─'.repeat(80));
    
    // Calculate overall health score
    let healthScore = 100;
    let issues = 0;
    
    // Check PM2 process health
    const erroredProcesses = this.processes.filter(p => p.pm2_env.status === 'errored').length;
    if (erroredProcesses > 0) {
      healthScore -= erroredProcesses * 10;
      issues += erroredProcesses;
    }
    
    // Check analysis reports for critical issues
    Object.values(this.reports).forEach(report => {
      if (report.latest && report.latest.summary) {
        const summary = report.latest.summary;
        
        if (summary.securityRiskScore > 50) {
          healthScore -= 20;
          issues++;
        }
        
        if (summary.maintainabilityScore < 70) {
          healthScore -= 15;
          issues++;
        }
        
        if (summary.overallCoverage < 60) {
          healthScore -= 10;
          issues++;
        }
      }
    });
    
    healthScore = Math.max(0, healthScore);
    
    // Display health status
    let healthIcon = '🟢';
    let healthStatus = 'Excellent';
    
    if (healthScore < 50) {
      healthIcon = '🔴';
      healthStatus = 'Critical';
    } else if (healthScore < 70) {
      healthIcon = '🟠';
      healthStatus = 'Poor';
    } else if (healthScore < 85) {
      healthIcon = '🟡';
      healthStatus = 'Fair';
    } else if (healthScore < 95) {
      healthIcon = '🟢';
      healthStatus = 'Good';
    }
    
    console.log(`${healthIcon} Overall Health: ${healthScore}/100 (${healthStatus})`);
    console.log(`📊 Issues Detected: ${issues}`);
    console.log(`🔄 Last Updated: ${new Date().toLocaleString()}`);
  }

  displayHelp() {
    console.log('\n📚 Available Commands:');
    console.log('─'.repeat(80));
    console.log('  pm2 list                    - Show all PM2 processes');
    console.log('  pm2 logs <process-name>     - View specific process logs');
    console.log('  pm2 restart <process-name>  - Restart specific process');
    console.log('  pm2 restart all             - Restart all processes');
    console.log('  pm2 monit                   - Open PM2 monitoring interface');
    console.log('  pm2 save                    - Save current process list');
    console.log('  pm2 startup                 - Configure PM2 to start on boot');
    console.log('\n💡 Dashboard will auto-refresh every 30 seconds');
    console.log('💡 Press Ctrl+C to exit');
  }

  async startDashboard() {
    console.log('🚀 Enhanced PM2 Automation Dashboard');
    console.log('Loading data...\n');
    
    // Initial load
    await this.loadAnalysisReports();
    await this.displayDashboard();
    
    // Set up auto-refresh
    setInterval(async () => {
      await this.loadAnalysisReports();
      await this.displayDashboard();
    }, this.updateInterval);
  }

  async autoFixIssues() {
    console.log('\n🔧 Attempting to auto-fix issues...');
    
    try {
      // Restart errored processes
      const erroredProcesses = this.processes.filter(p => p.pm2_env.status === 'errored');
      
      if (erroredProcesses.length > 0) {
        console.log(`🔄 Restarting ${erroredProcesses.length} errored processes...`);
        
        erroredProcesses.forEach(proc => {
          try {
            execSync(`pm2 restart ${proc.pm_id}`, { stdio: 'inherit' });
            console.log(`✅ Restarted ${proc.name}`);
          } catch (error) {
            console.log(`❌ Failed to restart ${proc.name}: ${error.message}`);
          }
        });
      }
      
      // Check for failed processes
      const failedProcesses = this.processes.filter(proc => 
        proc.pm2_env.status === 'errored' || proc.pm2_env.status === 'stopped'
      );
      
      if (failedProcesses.length > 0) {
        console.log(`🔄 Attempting to restart ${failedProcesses.length} failed processes...`);
        
        failedProcesses.forEach(proc => {
          try {
            execSync(`pm2 restart ${proc.pm_id}`, { stdio: 'inherit' });
            console.log(`✅ Restarted ${proc.name}`);
          } catch (error) {
            console.log(`❌ Failed to restart ${proc.name}: ${error.message}`);
          }
        });
      }
      
      console.log('✅ Auto-fix completed');
      
    } catch (error) {
      console.error('❌ Auto-fix failed:', error.message);
    }
  }

  async generateHealthReport() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        pm2Status: await this.getPM2Status(),
        analysisReports: this.reports,
        systemHealth: {
          totalProcesses: this.processes.length,
          onlineProcesses: this.processes.filter(p => p.pm2_env.status === 'online').length,
          erroredProcesses: this.processes.filter(p => p.pm2_env.status === 'errored').length,
          stoppedProcesses: this.processes.filter(p => p.pm2_env.status === 'stopped').length
        },
        recommendations: this.collectAllRecommendations()
      };
      
      const reportPath = path.join(process.cwd(), 'enhanced-dashboard-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      
      console.log(`📊 Health report saved to ${reportPath}`);
      
    } catch (error) {
      console.error('❌ Failed to generate health report:', error.message);
    }
  }

  collectAllRecommendations() {
    const allRecommendations = [];
    
    Object.values(this.reports).forEach(report => {
      if (report.latest && report.latest.details && report.latest.details.recommendations) {
        allRecommendations.push(...report.latest.details.recommendations);
      }
    });
    
    return allRecommendations;
  }
}

// Main execution
async function main() {
  const dashboard = new EnhancedAutomationDashboard();
  
  // Handle command line arguments
  const args = process.argv.slice(2);
  
  if (args.includes('--fix')) {
    await dashboard.autoFixIssues();
    return;
  }
  
  if (args.includes('--report')) {
    await dashboard.generateHealthReport();
    return;
  }
  
  if (args.includes('--help')) {
    console.log(`
🚀 Enhanced PM2 Automation Dashboard

Usage:
  node scripts/enhanced-automation-dashboard.js [options]

Options:
  --fix      Auto-fix common issues
  --report   Generate health report
  --help     Show this help message

Examples:
  node scripts/enhanced-automation-dashboard.js
  node scripts/enhanced-automation-dashboard.js --fix
  node scripts/enhanced-automation-dashboard.js --report
    `);
    return;
  }
  
  // Start the dashboard
  await dashboard.startDashboard();
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Enhanced automation dashboard shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Enhanced automation dashboard shutting down gracefully...');
  process.exit(0);
});

// Start the dashboard
main().catch(error => {
  console.error('❌ Fatal error in enhanced automation dashboard:', error);
  process.exit(1);
});