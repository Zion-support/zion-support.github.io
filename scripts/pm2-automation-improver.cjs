#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PM2AutomationImprover {
  constructor() {
    this.logFile = path.join(__dirname, '..', 'logs', 'pm2-automation-improver.log');
    this.improvementsFile = path.join(__dirname, '..', 'logs', 'automation-improvements.json');
    this.ensureLogDirectory();
    this.improvements = this.loadImprovements();
    this.startImprovementCycle();
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
    console.log(message);
    fs.appendFileSync(this.logFile, logMessage);
  }

  loadImprovements() {
    try {
      if (fs.existsSync(this.improvementsFile)) {
        return JSON.parse(fs.readFileSync(this.improvementsFile, 'utf8'));
      }
    } catch (error) {
      this.log(`⚠️ Could not load improvements data: ${error.message}`);
    }
    
    return {
      lastImprovement: null,
      totalImprovements: 0,
      improvements: [],
      performanceMetrics: {},
      recommendations: []
    };
  }

  saveImprovements() {
    try {
      fs.writeFileSync(this.improvementsFile, JSON.stringify(this.improvements, null, 2));
    } catch (error) {
      this.log(`❌ Could not save improvements data: ${error.message}`);
    }
  }

  async getPM2Status() {
    try {
      const output = execSync('pm2 jlist', { encoding: 'utf8' });
      const processes = JSON.parse(output);
      return processes.filter(proc => proc.name !== 'pm2-logrotate');
    } catch (error) {
      this.log(`❌ Failed to get PM2 status: ${error.message}`);
      return [];
    }
  }

  async analyzeProcessPerformance(process) {
    const analysis = {
      name: process.name,
      status: process.pm2_env.status,
      uptime: process.pm2_env.pm_uptime,
      restarts: process.pm2_env.restart_time,
      memory: process.monit.memory,
      cpu: process.monit.cpu,
      performance: 'unknown',
      issues: [],
      recommendations: []
    };

    // Performance analysis
    if (process.pm2_env.status === 'online') {
      if (process.monit.memory > 1024 * 1024 * 1024) { // > 1GB
        analysis.performance = 'poor';
        analysis.issues.push('High memory usage');
        analysis.recommendations.push('Optimize memory usage');
      } else if (process.monit.cpu > 50) {
        analysis.performance = 'poor';
        analysis.issues.push('High CPU usage');
        analysis.recommendations.push('Optimize CPU usage');
      } else if (process.pm2_env.restart_time > 10) {
        analysis.performance = 'poor';
        analysis.issues.push('High restart count');
        analysis.recommendations.push('Investigate stability issues');
      } else if (process.monit.memory > 512 * 1024 * 1024) { // > 512MB
        analysis.performance = 'fair';
        analysis.issues.push('Moderate memory usage');
        analysis.recommendations.push('Monitor memory usage');
      } else {
        analysis.performance = 'good';
      }
    } else if (process.pm2_env.status === 'errored') {
      analysis.performance = 'critical';
      analysis.issues.push('Process errored');
      analysis.recommendations.push('Restart process');
    }

    return analysis;
  }

  async generateImprovements() {
    this.log('🔧 Generating automation improvements...');
    
    try {
      const processes = await this.getPM2Status();
      const improvements = [];
      let totalScore = 0;
      let maxScore = processes.length * 100;

      for (const process of processes) {
        const analysis = await this.analyzeProcessPerformance(process);
        
        // Calculate process score
        let score = 100;
        if (analysis.performance === 'critical') score = 0;
        else if (analysis.performance === 'poor') score = 25;
        else if (analysis.performance === 'fair') score = 75;
        
        totalScore += score;

        if (analysis.recommendations.length > 0) {
          improvements.push({
            process: process.name,
            priority: analysis.performance === 'critical' ? 'high' : analysis.performance === 'poor' ? 'medium' : 'low',
            issues: analysis.issues,
            recommendations: analysis.recommendations,
            score: score,
            timestamp: new Date().toISOString()
          });
        }
      }

      const overallScore = Math.round((totalScore / maxScore) * 100);
      
      // Update improvements data
      this.improvements = {
        lastImprovement: new Date().toISOString(),
        totalImprovements: improvements.length,
        overallScore: overallScore,
        improvements: improvements,
        performanceMetrics: {
          totalProcesses: processes.length,
          onlineProcesses: processes.filter(p => p.pm2_env.status === 'online').length,
          erroredProcesses: processes.filter(p => p.pm2_env.status === 'errored').length,
          averageMemory: Math.round(processes.reduce((sum, p) => sum + p.monit.memory, 0) / processes.length / 1024 / 1024),
          averageCPU: Math.round(processes.reduce((sum, p) => sum + p.monit.cpu, 0) / processes.length * 100) / 100
        },
        recommendations: this.generateSystemRecommendations(improvements, overallScore)
      };

      this.saveImprovements();
      
      this.log(`📊 Improvement analysis completed: ${overallScore}% overall score`);
      this.log(`   Total improvements needed: ${improvements.length}`);
      
      return this.improvements;
      
    } catch (error) {
      this.log(`❌ Improvement analysis failed: ${error.message}`);
      return null;
    }
  }

  generateSystemRecommendations(improvements, overallScore) {
    const recommendations = [];
    
    if (overallScore < 50) {
      recommendations.push({
        priority: 'high',
        action: 'System-wide optimization needed',
        reason: 'Overall performance score is below 50%',
        impact: 'high'
      });
    }
    
    const criticalProcesses = improvements.filter(i => i.priority === 'high');
    if (criticalProcesses.length > 0) {
      recommendations.push({
        priority: 'high',
        action: 'Address critical process issues',
        reason: `${criticalProcesses.length} processes are in critical state`,
        impact: 'high'
      });
    }
    
    const highMemoryProcesses = improvements.filter(i => 
      i.issues.some(issue => issue.includes('memory'))
    );
    if (highMemoryProcesses.length > 0) {
      recommendations.push({
        priority: 'medium',
        action: 'Optimize memory usage',
        reason: `${highMemoryProcesses.length} processes have memory issues`,
        impact: 'medium'
      });
    }
    
    const unstableProcesses = improvements.filter(i => 
      i.issues.some(issue => issue.includes('restart'))
    );
    if (unstableProcesses.length > 0) {
      recommendations.push({
        priority: 'medium',
        action: 'Investigate process stability',
        reason: `${unstableProcesses.length} processes have high restart counts`,
        impact: 'medium'
      });
    }
    
    return recommendations;
  }

  async showImprovementReport() {
    const improvements = await this.generateImprovements();
    if (!improvements) return;

    console.log('\n🔧 PM2 Automation Improvement Report');
    console.log('=====================================\n');
    
    // Overall score
    const scoreIcon = improvements.overallScore >= 80 ? '🟢' : 
                     improvements.overallScore >= 60 ? '🟡' : '🔴';
    console.log(`${scoreIcon} Overall Performance Score: ${improvements.overallScore}%`);
    console.log(`📅 Last Analysis: ${improvements.lastImprovement}`);
    console.log(`📊 Total Improvements Needed: ${improvements.totalImprovements}`);
    
    // Performance metrics
    console.log('\n📈 Performance Metrics:');
    console.log('=======================');
    const metrics = improvements.performanceMetrics;
    console.log(`   Total Processes: ${metrics.totalProcesses}`);
    console.log(`   Online Processes: ${metrics.onlineProcesses}`);
    console.log(`   Errored Processes: ${metrics.erroredProcesses}`);
    console.log(`   Average Memory: ${metrics.averageMemory}MB`);
    console.log(`   Average CPU: ${metrics.averageCPU}%`);
    
    // Improvements needed
    if (improvements.improvements.length > 0) {
      console.log('\n🔧 Improvements Needed:');
      console.log('=======================');
      
      const priorityGroups = {
        high: improvements.improvements.filter(i => i.priority === 'high'),
        medium: improvements.improvements.filter(i => i.priority === 'medium'),
        low: improvements.improvements.filter(i => i.priority === 'low')
      };
      
      for (const [priority, items] of Object.entries(priorityGroups)) {
        if (items.length > 0) {
          const priorityIcon = priority === 'high' ? '🔴' : priority === 'medium' ? '🟡' : '🟢';
          console.log(`\n${priorityIcon} ${priority.toUpperCase()} Priority (${items.length}):`);
          
          for (const item of items) {
            console.log(`   • ${item.process} (Score: ${item.score}/100)`);
            console.log(`     Issues: ${item.issues.join(', ')}`);
            console.log(`     Recommendations: ${item.recommendations.join(', ')}`);
          }
        }
      }
    }
    
    // System recommendations
    if (improvements.recommendations.length > 0) {
      console.log('\n💡 System Recommendations:');
      console.log('==========================');
      
      for (const rec of improvements.recommendations) {
        const priorityIcon = rec.priority === 'high' ? '🔴' : '🟡';
        const impactIcon = rec.impact === 'high' ? '🔥' : '⚡';
        console.log(`${priorityIcon} ${rec.action}`);
        console.log(`   Reason: ${rec.reason}`);
        console.log(`   Impact: ${impactIcon} ${rec.impact}`);
      }
    }
  }

  async autoOptimize() {
    this.log('🚀 Starting automatic optimization...');
    
    try {
      const improvements = await this.generateImprovements();
      if (!improvements) return;
      
      let optimizationsApplied = 0;
      
      for (const improvement of improvements.improvements) {
        if (improvement.priority === 'high') {
          try {
            this.log(`🔧 Auto-optimizing ${improvement.process}...`);
            
            if (improvement.recommendations.some(r => r.includes('Restart'))) {
              execSync(`pm2 restart ${improvement.process}`, { stdio: 'pipe' });
              this.log(`✅ Restarted ${improvement.process}`);
              optimizationsApplied++;
            }
            
            // Add delay between optimizations
            await this.sleep(2000);
            
          } catch (error) {
            this.log(`❌ Failed to optimize ${improvement.process}: ${error.message}`);
          }
        }
      }
      
      this.log(`✅ Auto-optimization completed: ${optimizationsApplied} optimizations applied`);
      
    } catch (error) {
      this.log(`❌ Auto-optimization failed: ${error.message}`);
    }
  }

  async generateOptimizationReport() {
    const improvements = await this.generateImprovements();
    if (!improvements) return null;
    
    const reportPath = path.join(__dirname, '..', 'logs', 'optimization-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(improvements, null, 2));
    
    this.log(`✅ Optimization report generated: ${reportPath}`);
    return reportPath;
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  startImprovementCycle() {
    this.log('🚀 Starting PM2 automation improvement cycle...');
    
    // Initial improvement analysis
    this.generateImprovements();
    
    // Run improvement analysis every 10 minutes
    setInterval(async () => {
      await this.generateImprovements();
    }, 10 * 60 * 1000);
    
    // Show improvement report every 30 minutes
    setInterval(async () => {
      await this.showImprovementReport();
    }, 30 * 60 * 1000);
    
    // Auto-optimize critical issues every 15 minutes
    setInterval(async () => {
      await this.autoOptimize();
    }, 15 * 60 * 1000);
    
    this.log('✅ Improvement cycle started (analysis: 10min, reports: 30min, auto-optimize: 15min)');
  }

  showHelp() {
    console.log('\n🔧 PM2 Automation Improver');
    console.log('===========================\n');
    console.log('Available commands:');
    console.log('  report     - Show improvement report');
    console.log('  optimize   - Run auto-optimization');
    console.log('  generate   - Generate optimization report');
    console.log('  help       - Show this help message');
    console.log('\nExamples:');
    console.log('  node pm2-automation-improver.cjs report');
    console.log('  node pm2-automation-improver.cjs optimize');
    console.log('  node pm2-automation-improver.cjs generate');
  }
}

// CLI handling
const improver = new PM2AutomationImprover();
const command = process.argv[2];

switch (command) {
  case 'report':
    improver.showImprovementReport();
    break;
  case 'optimize':
    improver.autoOptimize();
    break;
  case 'generate':
    improver.generateOptimizationReport();
    break;
  case 'help':
  default:
    improver.showHelp();
    break;
}

// Graceful shutdown
process.on('SIGINT', () => {
  improver.log('\n🛑 Shutting down automation improver...');
  process.exit(0);
});

module.exports = PM2AutomationImprover;
