#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AutomationOrchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'reports');
    this.startTime = Date.now();
    this.automations = new Map();
    this.status = {
      running: false,
      lastRun: null,
      totalRuns: 0,
      successCount: 0,
      errorCount: 0
    };
    
    // Ensure reports directory exists
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
    
    this.initializeAutomations();
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [ORCHESTRATOR] ${message}`);
  }

  initializeAutomations() {
    // Define all available automations with their priorities
    this.automations.set('enhanced-error-fixer', {
      name: 'Enhanced Error Fixer',
      priority: 1, // Highest priority
      script: './scripts/automation/enhanced-error-fixer.cjs',
      interval: 600000, // 10 minutes
      description: 'Fixes major syntax, TypeScript, and JSX errors',
      enabled: true
    });

    this.automations.set('comprehensive-error-fixer', {
      name: 'Comprehensive Error Fixer',
      priority: 2,
      script: './scripts/automation/comprehensive-error-fixer.cjs',
      interval: 600000, // 10 minutes
      description: 'Comprehensive error fixing across all areas',
      enabled: true
    });

    this.automations.set('typescript-error-fixer', {
      name: 'TypeScript Error Fixer',
      priority: 3,
      script: './scripts/automation/typescript-error-fixer.cjs',
      interval: 900000, // 15 minutes
      description: 'Specialized TypeScript error fixing',
      enabled: true
    });

    this.automations.set('general-error-fixer', {
      name: 'General Error Fixer',
      priority: 4,
      script: './scripts/automation/error-fixer.cjs',
      interval: 1200000, // 20 minutes
      description: 'General error fixing and linting',
      enabled: true
    });

    this.automations.set('console-error-fixer', {
      name: 'Console Error Fixer',
      priority: 5,
      script: './scripts/automation/console-error-fixer.cjs',
      interval: 900000, // 15 minutes
      description: 'Fixes console and runtime errors',
      enabled: true
    });

    this.automations.set('link-checker', {
      name: 'Link Checker',
      priority: 6,
      script: './scripts/automation/link-checker.cjs',
      interval: 1800000, // 30 minutes
      description: 'Checks and fixes broken links',
      enabled: true
    });

    this.automations.set('continuous-improvement', {
      name: 'Continuous Improvement',
      priority: 7,
      script: './scripts/automation/continuous-improvement.cjs',
      interval: 7200000, // 2 hours
      description: 'Continuous code improvement and optimization',
      enabled: true
    });

    this.automations.set('daily-build-test', {
      name: 'Daily Build Test',
      priority: 8,
      script: './scripts/automation/daily-build-test.cjs',
      interval: 3600000, // 1 hour
      description: 'Regular build and test execution',
      enabled: true
    });

    this.automations.set('security-audit', {
      name: 'Security Audit',
      priority: 9,
      script: './scripts/automation/security-audit.cjs',
      interval: 14400000, // 4 hours
      description: 'Security vulnerability scanning and fixing',
      enabled: true
    });

    this.automations.set('dependency-updates', {
      name: 'Dependency Updates',
      priority: 10,
      script: './scripts/automation/dependency-updates.cjs',
      interval: 21600000, // 6 hours
      description: 'Automated dependency updates and security patches',
      enabled: true
    });

    this.automations.set('performance-monitor', {
      name: 'Performance Monitor',
      priority: 11,
      script: './scripts/automation/performance-monitor.cjs',
      interval: 7200000, // 2 hours
      description: 'Performance monitoring and optimization',
      enabled: true
    });

    this.automations.set('quality-checks', {
      name: 'Quality Checks',
      priority: 12,
      script: './scripts/automation/quality-checks.cjs',
      interval: 10800000, // 3 hours
      description: 'Code quality and standards enforcement',
      enabled: true
    });

    this.automations.set('link-integrity', {
      name: 'Link Integrity',
      priority: 13,
      script: './scripts/automation/link-integrity.cjs',
      interval: 7200000, // 2 hours
      description: 'Link integrity and validation',
      enabled: true
    });

    this.automations.set('front-maximizer', {
      name: 'Front Maximizer',
      priority: 14,
      script: './scripts/automation/front-maximizer.cjs',
      interval: 14400000, // 4 hours
      description: 'Frontend optimization and enhancement',
      enabled: true
    });

    this.automations.set('sitemap-runner', {
      name: 'Sitemap Runner',
      priority: 15,
      script: './scripts/automation/sitemap-runner.cjs',
      interval: 21600000, // 6 hours
      description: 'Sitemap generation and maintenance',
      enabled: true
    });

    this.automations.set('pm2-monitor', {
      name: 'PM2 Monitor',
      priority: 16,
      script: './scripts/automation/pm2-monitor.js',
      interval: 600000, // 10 minutes
      description: 'PM2 process monitoring and health checks',
      enabled: true
    });

    this.automations.set('enhanced-automation-runner', {
      name: 'Enhanced Automation Runner',
      priority: 17,
      script: './scripts/automation/enhanced-automation-runner.js',
      interval: 900000, // 15 minutes
      description: 'Enhanced automation coordination and execution',
      enabled: true
    });
  }

  async runAutomation(automationKey) {
    const automation = this.automations.get(automationKey);
    if (!automation || !automation.enabled) {
      this.log(`Automation ${automationKey} not found or disabled`);
      return false;
    }

    try {
      this.log(`Starting ${automation.name}...`);
      
      // Execute the automation script
      const result = execSync(`node ${automation.script}`, { 
        stdio: 'pipe',
        cwd: this.projectRoot,
        timeout: 300000 // 5 minute timeout
      });
      
      this.log(`${automation.name} completed successfully`);
      this.status.successCount++;
      return true;
      
    } catch (error) {
      this.log(`${automation.name} failed: ${error.message}`);
      this.status.errorCount++;
      return false;
    }
  }

  async runPriorityQueue() {
    this.log('Starting priority-based automation queue...');
    
    // Sort automations by priority
    const sortedAutomations = Array.from(this.automations.entries())
      .sort(([, a], [, b]) => a.priority - b.priority)
      .filter(([, automation]) => automation.enabled);

    for (const [key, automation] of sortedAutomations) {
      try {
        await this.runAutomation(key);
        
        // Small delay between automations to prevent overwhelming the system
        await new Promise(resolve => setTimeout(resolve, 1000));
        
      } catch (error) {
        this.log(`Error running ${automation.name}: ${error.message}`);
      }
    }
    
    this.status.lastRun = new Date().toISOString();
    this.status.totalRuns++;
    
    this.log('Priority queue execution completed');
  }

  async runContinuousMode() {
    this.log('Starting continuous automation mode...');
    this.status.running = true;
    
    const runCycle = async () => {
      if (!this.status.running) return;
      
      try {
        await this.runPriorityQueue();
        this.log(`Cycle completed. Next run in 5 minutes.`);
      } catch (error) {
        this.log(`Cycle failed: ${error.message}`);
      }
    };
    
    // Run immediately
    await runCycle();
    
    // Set up continuous execution every 5 minutes
    setInterval(runCycle, 300000);
    
    this.log('Continuous mode started. Press Ctrl+C to stop.');
  }

  async runSpecificAutomation(automationKey) {
    this.log(`Running specific automation: ${automationKey}`);
    return await this.runAutomation(automationKey);
  }

  async runAutomationGroup(groupName) {
    this.log(`Running automation group: ${groupName}`);
    
    let groupAutomations = [];
    
    switch (groupName) {
      case 'error-fixing':
        groupAutomations = ['enhanced-error-fixer', 'comprehensive-error-fixer', 'typescript-error-fixer', 'general-error-fixer'];
        break;
      case 'quality':
        groupAutomations = ['quality-checks', 'performance-monitor', 'security-audit'];
        break;
      case 'maintenance':
        groupAutomations = ['dependency-updates', 'link-checker', 'sitemap-runner'];
        break;
      case 'monitoring':
        groupAutomations = ['pm2-monitor', 'enhanced-automation-runner'];
        break;
      default:
        this.log(`Unknown group: ${groupName}`);
        return false;
    }
    
    for (const automationKey of groupAutomations) {
      await this.runAutomation(automationKey);
    }
    
    this.log(`Group ${groupName} execution completed`);
    return true;
  }

  getStatus() {
    return {
      orchestrator: {
        running: this.status.running,
        lastRun: this.status.lastRun,
        totalRuns: this.status.totalRuns,
        successCount: this.status.successCount,
        errorCount: this.status.errorCount,
        uptime: Date.now() - this.startTime
      },
      automations: Array.from(this.automations.entries()).map(([key, automation]) => ({
        key,
        name: automation.name,
        priority: automation.priority,
        enabled: automation.enabled,
        interval: automation.interval,
        description: automation.description
      }))
    };
  }

  generateReport() {
    const endTime = Date.now();
    const duration = endTime - this.startTime;
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: 'Automation Orchestrator Report',
      status: this.getStatus(),
      performance: {
        totalDuration: duration,
        averageTimePerRun: duration / Math.max(this.status.totalRuns, 1)
      },
      recommendations: this.generateRecommendations()
    };
    
    const reportPath = path.join(this.reportsDir, 'automation-orchestrator-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Orchestrator report saved to ${reportPath}`);
    return report;
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.status.errorCount > this.status.successCount) {
      recommendations.push('High error rate detected. Consider reviewing automation scripts and error handling.');
    }
    
    if (this.status.totalRuns === 0) {
      recommendations.push('No automations have run yet. Consider starting with error-fixing group.');
    }
    
    if (this.status.lastRun && Date.now() - new Date(this.status.lastRun).getTime() > 3600000) {
      recommendations.push('Automations have not run recently. Check system health and PM2 status.');
    }
    
    return recommendations;
  }

  stop() {
    this.log('Stopping automation orchestrator...');
    this.status.running = false;
  }
}

// Run the orchestrator if called directly
if (require.main === module) {
  const orchestrator = new AutomationOrchestrator();
  
  // Check for command line arguments
  const args = process.argv.slice(2);
  
  if (args.includes('--continuous') || args.includes('-c')) {
    orchestrator.runContinuousMode().catch(console.error);
  } else if (args.includes('--group')) {
    const groupName = args.find(arg => arg.startsWith('--group='))?.split('=')[1];
    if (groupName) {
      orchestrator.runAutomationGroup(groupName).catch(console.error);
    } else {
      console.log('Please specify group name: --group=error-fixing|quality|maintenance|monitoring');
    }
  } else if (args.includes('--specific')) {
    const automationKey = args.find(arg => arg.startsWith('--specific='))?.split('=')[1];
    if (automationKey) {
      orchestrator.runSpecificAutomation(automationKey).catch(console.error);
    } else {
      console.log('Please specify automation key: --specific=automation-name');
    }
  } else if (args.includes('--status')) {
    console.log(JSON.stringify(orchestrator.getStatus(), null, 2));
  } else {
    orchestrator.runPriorityQueue().catch(console.error);
  }
}

module.exports = AutomationOrchestrator;