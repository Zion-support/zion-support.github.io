#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { promisify } = require('util');
const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);

class AutomationOrchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'reports');
    this.automations = new Map();
    this.status = 'idle';
    this.startTime = Date.now();
    this.schedule = null;
  }

  async init() {
    console.log('🚀 Automation Orchestrator Starting...');
    console.log(`📁 Project Root: ${this.projectRoot}`);
    
    // Ensure reports directory exists
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }

    // Initialize automation modules
    await this.initializeAutomations();
  }

  async initializeAutomations() {
    console.log('🔧 Initializing automation modules...');
    
    try {
      // Import automation modules
      const EnhancedErrorFixer = require('./enhanced-error-fixer.cjs');
      const CodeQualityAutomation = require('./code-quality-automation.cjs');
      
      this.automations.set('error-fixer', {
        name: 'Enhanced Error Fixer',
        module: EnhancedErrorFixer,
        interval: 15 * 60 * 1000, // 15 minutes
        lastRun: null,
        status: 'ready'
      });
      
      this.automations.set('code-quality', {
        name: 'Code Quality Automation',
        module: CodeQualityAutomation,
        interval: 2 * 60 * 60 * 1000, // 2 hours
        lastRun: null,
        status: 'ready'
      });
      
      console.log(`✅ Initialized ${this.automations.size} automation modules`);
    } catch (error) {
      console.error('❌ Error initializing automations:', error);
    }
  }

  async runAutomation(name) {
    const automation = this.automations.get(name);
    if (!automation) {
      throw new Error(`Automation '${name}' not found`);
    }

    console.log(`🚀 Running ${automation.name}...`);
    automation.status = 'running';
    automation.lastRun = Date.now();

    try {
      const instance = new automation.module();
      const result = await instance.run();
      
      automation.status = 'completed';
      automation.lastResult = result;
      
      console.log(`✅ ${automation.name} completed successfully`);
      return result;
    } catch (error) {
      automation.status = 'failed';
      automation.lastError = error.message;
      
      console.error(`❌ ${automation.name} failed:`, error.message);
      throw error;
    }
  }

  async runAllAutomations() {
    console.log('🚀 Running all automations...');
    this.status = 'running';
    
    const results = {};
    const errors = [];
    
    for (const [name, automation] of this.automations) {
      try {
        results[name] = await this.runAutomation(name);
      } catch (error) {
        errors.push({ name, error: error.message });
      }
    }
    
    this.status = 'completed';
    
    return { results, errors };
  }

  async startScheduledAutomations() {
    console.log('⏰ Starting scheduled automations...');
    
    if (this.schedule) {
      clearInterval(this.schedule);
    }
    
    this.schedule = setInterval(async () => {
      await this.runScheduledAutomations();
    }, 60000); // Check every minute
    
    console.log('✅ Scheduled automations started');
  }

  async runScheduledAutomations() {
    const now = Date.now();
    
    for (const [name, automation] of this.automations) {
      if (automation.status === 'ready' && 
          (!automation.lastRun || (now - automation.lastRun) >= automation.interval)) {
        
        console.log(`⏰ Running scheduled automation: ${automation.name}`);
        try {
          await this.runAutomation(name);
        } catch (error) {
          console.error(`❌ Scheduled automation failed: ${automation.name}`, error.message);
        }
      }
    }
  }

  async stopScheduledAutomations() {
    if (this.schedule) {
      clearInterval(this.schedule);
      this.schedule = null;
      console.log('⏹️  Scheduled automations stopped');
    }
  }

  async getStatus() {
    const status = {
      orchestrator: {
        status: this.status,
        uptime: Date.now() - this.startTime,
        automations: this.automations.size
      },
      automations: {}
    };
    
    for (const [name, automation] of this.automations) {
      status.automations[name] = {
        name: automation.name,
        status: automation.status,
        lastRun: automation.lastRun,
        nextRun: automation.lastRun ? automation.lastRun + automation.interval : null,
        interval: automation.interval
      };
    }
    
    return status;
  }

  async generateOrchestratorReport() {
    const endTime = Date.now();
    const duration = endTime - this.startTime;
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration}ms`,
      status: this.status,
      automations: {},
      summary: `Orchestrator ran for ${duration}ms with status: ${this.status}`
    };
    
    for (const [name, automation] of this.automations) {
      report.automations[name] = {
        name: automation.name,
        status: automation.status,
        lastRun: automation.lastRun,
        lastResult: automation.lastResult,
        lastError: automation.lastError
      };
    }
    
    const reportPath = path.join(this.reportsDir, 'automation-orchestrator-report.json');
    await writeFile(reportPath, JSON.stringify(report, null, 2));
    
    console.log('\n📊 Orchestrator Report:');
    console.log(`⏱️  Duration: ${duration}ms`);
    console.log(`📁 Report saved to: ${reportPath}`);
    
    return report;
  }

  async healthCheck() {
    console.log('🏥 Running health check...');
    
    const health = {
      timestamp: new Date().toISOString(),
      status: 'healthy',
      checks: {}
    };
    
    // Check if all automations are ready
    for (const [name, automation] of this.automations) {
      health.checks[name] = {
        status: automation.status === 'ready' ? 'healthy' : 'unhealthy',
        message: automation.status === 'ready' ? 'Ready to run' : `Status: ${automation.status}`
      };
    }
    
    // Check if any automation is stuck
    const stuckAutomations = Array.from(this.automations.values())
      .filter(a => a.status === 'running' && (Date.now() - a.lastRun) > 300000); // 5 minutes
    
    if (stuckAutomations.length > 0) {
      health.status = 'degraded';
      health.checks.stuckAutomations = {
        status: 'unhealthy',
        message: `${stuckAutomations.length} automation(s) appear to be stuck`
      };
    }
    
    // Check disk space
    try {
      const stats = fs.statSync(this.reportsDir);
      const freeSpace = require('child_process').execSync('df . | tail -1 | awk \'{print $4}\'').toString().trim();
      health.checks.diskSpace = {
        status: 'healthy',
        message: `Free space: ${freeSpace} blocks`
      };
    } catch (error) {
      health.checks.diskSpace = {
        status: 'unhealthy',
        message: 'Could not check disk space'
      };
    }
    
    return health;
  }

  async run() {
    await this.init();
    
    try {
      // Run initial automations
      const results = await this.runAllAutomations();
      
      // Start scheduled automations
      await this.startScheduledAutomations();
      
      // Generate report
      const report = await this.generateOrchestratorReport();
      
      console.log('🎉 Automation Orchestrator started successfully!');
      console.log('📊 Initial run results:', results);
      
      return { results, report };
    } catch (error) {
      console.error('❌ Error in Automation Orchestrator:', error);
      throw error;
    }
  }

  async shutdown() {
    console.log('🔄 Shutting down Automation Orchestrator...');
    
    await this.stopScheduledAutomations();
    this.status = 'shutdown';
    
    console.log('✅ Automation Orchestrator shutdown complete');
  }
}

// Run the orchestrator if called directly
if (require.main === module) {
  const orchestrator = new AutomationOrchestrator();
  
  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    console.log('\n🔄 Received SIGINT, shutting down gracefully...');
    await orchestrator.shutdown();
    process.exit(0);
  });
  
  process.on('SIGTERM', async () => {
    console.log('\n🔄 Received SIGTERM, shutting down gracefully...');
    await orchestrator.shutdown();
    process.exit(0);
  });
  
  orchestrator.run().catch(async (error) => {
    console.error('❌ Fatal error in orchestrator:', error);
    await orchestrator.shutdown();
    process.exit(1);
  });
}

module.exports = AutomationOrchestrator;