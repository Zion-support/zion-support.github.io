#!/usr/bin/env node

/**
 * Automation Orchestrator Script
 * Orchestrates and manages all automation processes
 */

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

class AutomationOrchestrator {
  constructor() {
    this.reportsDir = 'public/reports/automation';
    this.automationTasks = [];
    this.results = [];
    this.config = {
      maxConcurrentTasks: 3,
      timeout: 300000, // 5 minutes
      retryAttempts: 2
    };
  }

  async runOrchestration() {
    console.log('🎭 Starting Automation Orchestration...');
    
    try {
      // Ensure reports directory exists
      this.ensureReportsDirectory();
      
      // Load automation tasks
      this.loadAutomationTasks();
      
      // Execute tasks in batches
      await this.executeTasks();
      
      // Generate report
      const report = this.generateReport();
      
      // Save report
      this.saveReport(report);
      
      console.log('✅ Automation orchestration completed successfully');
      return report;
      
    } catch (error) {
      console.error('❌ Automation orchestration failed:', error.message);
      throw error;
    }
  }

  ensureReportsDirectory() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  loadAutomationTasks() {
    // Define automation tasks
    this.automationTasks = [
      {
        id: 'performance-optimizer',
        name: 'Performance Optimization',
        script: 'scripts/improvements/performance-optimizer.js',
        priority: 'high',
        category: 'optimization',
        dependencies: []
      },
      {
        id: 'security-enhancer',
        name: 'Security Enhancement',
        script: 'scripts/improvements/security-enhancer.js',
        priority: 'high',
        category: 'security',
        dependencies: []
      },
      {
        id: 'seo-audit',
        name: 'SEO Audit',
        script: 'scripts/seo-audit.js',
        priority: 'medium',
        category: 'seo',
        dependencies: []
      },
      {
        id: 'code-quality-check',
        name: 'Code Quality Check',
        script: 'scripts/code-quality-checker.js',
        priority: 'medium',
        category: 'quality',
        dependencies: []
      },
      {
        id: 'dependency-updater',
        name: 'Dependency Update Check',
        script: 'scripts/dependency-updater.js',
        priority: 'low',
        category: 'maintenance',
        dependencies: []
      }
    ];

    // Filter out tasks that don't exist
    this.automationTasks = this.automationTasks.filter(task => 
      fs.existsSync(task.script)
    );

    console.log(`📋 Loaded ${this.automationTasks.length} automation tasks`);
  }

  async executeTasks() {
    console.log('🚀 Executing automation tasks...');
    
    // Sort tasks by priority
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    this.automationTasks.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
    
    // Execute tasks in batches
    const batches = this.createBatches(this.automationTasks, this.config.maxConcurrentTasks);
    
    for (let i = 0; i < batches.length; i++) {
      const batch = batches[i];
      console.log(`\n📦 Executing batch ${i + 1}/${batches.length} (${batch.length} tasks)`);
      
      const batchPromises = batch.map(task => this.executeTask(task));
      const batchResults = await Promise.allSettled(batchPromises);
      
      batchResults.forEach((result, index) => {
        const task = batch[index];
        this.results.push({
          task,
          status: result.status,
          result: result.status === 'fulfilled' ? result.value : result.reason,
          timestamp: new Date().toISOString()
        });
      });
      
      // Wait between batches
      if (i < batches.length - 1) {
        console.log('⏳ Waiting before next batch...');
        await this.sleep(2000);
      }
    }
  }

  createBatches(tasks, batchSize) {
    const batches = [];
    for (let i = 0; i < tasks.length; i += batchSize) {
      batches.push(tasks.slice(i, i + batchSize));
    }
    return batches;
  }

  async executeTask(task) {
    console.log(`  🔧 Executing: ${task.name}`);
    
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error(`Task ${task.id} timed out after ${this.config.timeout}ms`));
      }, this.config.timeout);

      const child = spawn('node', [task.script], {
        stdio: ['pipe', 'pipe', 'pipe'],
        cwd: process.cwd()
      });

      let stdout = '';
      let stderr = '';

      child.stdout.on('data', (data) => {
        stdout += data.toString();
      });

      child.stderr.on('data', (data) => {
        stderr += data.toString();
      });

      child.on('close', (code) => {
        clearTimeout(timeout);
        
        if (code === 0) {
          resolve({
            exitCode: code,
            stdout,
            stderr,
            success: true
          });
        } else {
          reject(new Error(`Task ${task.id} failed with exit code ${code}: ${stderr}`));
        }
      });

      child.on('error', (error) => {
        clearTimeout(timeout);
        reject(error);
      });
    });
  }

  generateReport() {
    const timestamp = new Date().toISOString();
    
    const successful = this.results.filter(r => r.status === 'fulfilled').length;
    const failed = this.results.filter(r => r.status === 'rejected').length;
    const total = this.results.length;
    
    const categories = {};
    this.automationTasks.forEach(task => {
      categories[task.category] = (categories[task.category] || 0) + 1;
    });

    const report = {
      timestamp,
      summary: {
        totalTasks: total,
        successful,
        failed,
        successRate: total > 0 ? Math.round((successful / total) * 100) : 0
      },
      categories,
      tasks: this.automationTasks,
      results: this.results,
      recommendations: this.generateRecommendations()
    };
    
    return report;
  }

  generateRecommendations() {
    const recommendations = [];
    
    const failedTasks = this.results.filter(r => r.status === 'rejected');
    if (failedTasks.length > 0) {
      recommendations.push(`Review and fix ${failedTasks.length} failed automation tasks`);
    }
    
    const successfulTasks = this.results.filter(r => r.status === 'fulfilled');
    if (successfulTasks.length > 0) {
      recommendations.push(`Continue running ${successfulTasks.length} successful automation tasks regularly`);
    }
    
    recommendations.push('Set up scheduled automation runs (daily/weekly)');
    recommendations.push('Implement monitoring and alerting for automation failures');
    recommendations.push('Consider adding more automation tasks for comprehensive coverage');
    recommendations.push('Document automation processes and dependencies');
    
    return recommendations;
  }

  saveReport(report) {
    const filename = `automation-orchestration-${Date.now()}.json`;
    const filepath = path.join(this.reportsDir, filename);
    
    fs.writeFileSync(filepath, JSON.stringify(report, null, 2));
    console.log(`📄 Automation report saved to: ${filepath}`);
    
    // Also create an HTML report
    this.createHTMLReport(report);
  }

  createHTMLReport(report) {
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Automation Orchestration Report</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; }
        .header { text-align: center; margin-bottom: 30px; }
        .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 30px 0; }
        .stat { padding: 20px; border: 1px solid #ddd; border-radius: 8px; text-align: center; }
        .success-rate { font-size: 48px; font-weight: bold; }
        .high-success { color: #4CAF50; }
        .medium-success { color: #ff9800; }
        .low-success { color: #f44336; }
        .tasks { margin-top: 30px; }
        .task-item { padding: 15px; margin: 10px 0; border-radius: 8px; }
        .task-success { background: #e8f5e8; border-left: 4px solid #4CAF50; }
        .task-failed { background: #ffebee; border-left: 4px solid #f44336; }
        .task-pending { background: #fff3e0; border-left: 4px solid #ff9800; }
        .recommendations { margin-top: 30px; }
        .rec-item { padding: 10px; margin: 5px 0; background: #e3f2fd; border-radius: 4px; }
        .priority-high { border-left-color: #f44336 !important; }
        .priority-medium { border-left-color: #ff9800 !important; }
        .priority-low { border-left-color: #2196F3 !important; }
    </style>
</head>
<body>
    <div class="header">
        <h1>Automation Orchestration Report</h1>
        <p>Generated: ${new Date(report.timestamp).toLocaleString()}</p>
        <div class="success-rate ${report.summary.successRate >= 80 ? 'high-success' : report.summary.successRate >= 60 ? 'medium-success' : 'low-success'}">
            ${report.summary.successRate}%
        </div>
        <p>Success Rate</p>
    </div>
    
    <div class="stats">
        <div class="stat">
            <h3>Total Tasks</h3>
            <p style="font-size: 24px; font-weight: bold; color: #2196F3;">${report.summary.totalTasks}</p>
        </div>
        <div class="stat">
            <h3>Successful</h3>
            <p style="font-size: 24px; font-weight: bold; color: #4CAF50;">${report.summary.successful}</p>
        </div>
        <div class="stat">
            <h3>Failed</h3>
            <p style="font-size: 24px; font-weight: bold; color: #f44336;">${report.summary.failed}</p>
        </div>
    </div>
    
    <div class="tasks">
        <h2>Task Results</h2>
        ${report.results.map(result => `
            <div class="task-item ${result.status === 'fulfilled' ? 'task-success' : 'task-failed'} priority-${result.task.priority}">
                <h4>${result.task.name}</h4>
                <p><strong>Category:</strong> ${result.task.category}</p>
                <p><strong>Priority:</strong> ${result.task.priority}</p>
                <p><strong>Status:</strong> ${result.status === 'fulfilled' ? '✅ Success' : '❌ Failed'}</p>
                <p><strong>Timestamp:</strong> ${new Date(result.timestamp).toLocaleString()}</p>
                ${result.status === 'rejected' ? `<p><strong>Error:</strong> ${result.result.message}</p>` : ''}
            </div>
        `).join('')}
    </div>
    
    <div class="recommendations">
        <h2>Recommendations</h2>
        ${report.recommendations.map(rec => `<div class="rec-item">• ${rec}</div>`).join('')}
    </div>
</body>
</html>`;
    
    const htmlFilename = `automation-orchestration-${Date.now()}.html`;
    const htmlFilepath = path.join(this.reportsDir, htmlFilename);
    
    fs.writeFileSync(htmlFilepath, htmlContent);
    console.log(`🌐 HTML report saved to: ${htmlFilepath}`);
  }

  printReport(report) {
    console.log('\n🎭 Automation Orchestration Report');
    console.log('===================================');
    console.log(`Timestamp: ${report.timestamp}`);
    console.log(`Total Tasks: ${report.summary.totalTasks}`);
    console.log(`Successful: ${report.summary.successful}`);
    console.log(`Failed: ${report.summary.failed}`);
    console.log(`Success Rate: ${report.summary.successRate}%`);
    
    console.log('\n📊 Task Results:');
    report.results.forEach((result, index) => {
      const status = result.status === 'fulfilled' ? '✅' : '❌';
      console.log(`  ${index + 1}. ${status} ${result.task.name} (${result.task.category})`);
    });
    
    console.log('\n💡 Recommendations:');
    report.recommendations.forEach((rec, index) => {
      console.log(`  ${index + 1}. ${rec}`);
    });
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// CLI interface
if (require.main === module) {
  const orchestrator = new AutomationOrchestrator();
  orchestrator.runOrchestration()
    .then(report => {
      orchestrator.printReport(report);
      process.exit(0);
    })
    .catch(error => {
      console.error('❌ Automation orchestration failed:', error.message);
      process.exit(1);
    });
}

module.exports = AutomationOrchestrator;