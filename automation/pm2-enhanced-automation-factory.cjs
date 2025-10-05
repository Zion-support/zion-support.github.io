#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class PM2EnhancedAutomationFactory {
  constructor() {
    this.automationTemplates = new Map();
    this.activeAutomations = new Map();
    this.performanceMetrics = new Map();
    this.config = {
      logDir: './logs',
      maxConcurrentAutomations: 10,
      autoScalingThreshold: 0.8,
      resourceOptimizationInterval: 60000, // 1 minute
      intelligentScheduling: true
    };
    
    this.ensureLogDirectory();
    this.loadAutomationTemplates();
    this.startResourceOptimization();
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.config.logDir)) {
      fs.mkdirSync(this.config.logDir, { recursive: true });
    }
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}\n`;
    console.log(message);
    fs.appendFileSync(path.join(this.config.logDir, 'pm2-factory.log'), logMessage);
  }

  loadAutomationTemplates() {
    // Define automation templates with PM2 integration
    const templates = [
      {
        name: 'smart-lint-automation',
        description: 'Intelligent linting with PM2 process management',
        template: {
          name: 'smart-lint-{timestamp}',
          script: './automation/lint-automation-manager.cjs',
          args: 'intelligent',
          instances: 1,
          autorestart: true,
          watch: ['./src/**/*.{js,jsx,ts,tsx}'],
          max_memory_restart: '256M',
          env: {
            NODE_ENV: 'production',
            INTELLIGENT_MODE: 'true',
            PM2_INTEGRATED: 'true'
          },
          error_file: './automation/logs/smart-lint-error.log',
          out_file: './automation/logs/smart-lint-out.log',
          log_file: './automation/logs/smart-lint-combined.log',
          time: true
        },
        triggers: ['file-change', 'commit', 'manual'],
        priority: 'high'
      },
      {
        name: 'ai-code-analyzer',
        description: 'AI-powered code analysis with PM2 scaling',
        template: {
          name: 'ai-analyzer-{timestamp}',
          script: './automation/ai-code-analyzer.cjs',
          args: 'continuous',
          instances: 'max',
          exec_mode: 'cluster',
          autorestart: true,
          watch: ['./src/**/*.{js,jsx,ts,tsx}'],
          max_memory_restart: '512M',
          env: {
            NODE_ENV: 'production',
            AI_MODE: 'true',
            CLUSTER_MODE: 'true'
          },
          error_file: './automation/logs/ai-analyzer-error.log',
          out_file: './automation/logs/ai-analyzer-out.log',
          log_file: './automation/logs/ai-analyzer-combined.log',
          time: true
        },
        triggers: ['file-change', 'build', 'deployment'],
        priority: 'medium'
      },
      {
        name: 'performance-monitor',
        description: 'Real-time performance monitoring with PM2',
        template: {
          name: 'perf-monitor-{timestamp}',
          script: './automation/performance-optimizer.cjs',
          args: 'monitor',
          instances: 1,
          autorestart: true,
          watch: ['./automation/performance-optimizer.cjs'],
          max_memory_restart: '128M',
          env: {
            NODE_ENV: 'production',
            MONITORING_MODE: 'true',
            ALERT_THRESHOLD: '0.8'
          },
          error_file: './automation/logs/perf-monitor-error.log',
          out_file: './automation/logs/perf-monitor-out.log',
          log_file: './automation/logs/perf-monitor-combined.log',
          time: true
        },
        triggers: ['continuous', 'performance-alert'],
        priority: 'high'
      },
      {
        name: 'security-scanner-enhanced',
        description: 'Enhanced security scanning with PM2 process management',
        template: {
          name: 'security-scanner-{timestamp}',
          script: './automation/security-scanner.cjs',
          args: 'enhanced',
          instances: 2,
          exec_mode: 'cluster',
          autorestart: true,
          watch: ['./automation/security-scanner.cjs'],
          max_memory_restart: '256M',
          env: {
            NODE_ENV: 'production',
            ENHANCED_MODE: 'true',
            CLUSTER_INSTANCES: '2'
          },
          error_file: './automation/logs/security-scanner-error.log',
          out_file: './automation/logs/security-scanner-out.log',
          log_file: './automation/logs/security-scanner-combined.log',
          time: true
        },
        triggers: ['scheduled', 'security-alert', 'deployment'],
        priority: 'critical'
      },
      {
        name: 'intelligent-test-runner',
        description: 'AI-powered test execution with PM2 scaling',
        template: {
          name: 'test-runner-{timestamp}',
          script: './automation/intelligent-test-runner.cjs',
          args: 'auto',
          instances: 'max',
          exec_mode: 'cluster',
          autorestart: true,
          watch: ['./tests/**/*.{js,ts}', './src/**/*.{js,jsx,ts,tsx}'],
          max_memory_restart: '512M',
          env: {
            NODE_ENV: 'production',
            AI_TESTING: 'true',
            PARALLEL_EXECUTION: 'true'
          },
          error_file: './automation/logs/test-runner-error.log',
          out_file: './automation/logs/test-runner-out.log',
          log_file: './automation/logs/test-runner-combined.log',
          time: true
        },
        triggers: ['file-change', 'test-request', 'deployment'],
        priority: 'medium'
      }
    ];

    for (const template of templates) {
      this.automationTemplates.set(template.name, template);
    }
  }

  async createAutomation(templateName, options = {}) {
    const template = this.automationTemplates.get(templateName);
    if (!template) {
      throw new Error(`Template not found: ${templateName}`);
    }

    // Check if we can create more automations
    if (this.activeAutomations.size >= this.config.maxConcurrentAutomations) {
      this.log(`⚠️ Maximum concurrent automations reached (${this.config.maxConcurrentAutomations})`, 'warn');
      await this.optimizeResourceUsage();
    }

    const timestamp = Date.now();
    const automationName = template.template.name.replace('{timestamp}', timestamp);
    
    // Customize template with options
    const customizedTemplate = this.customizeTemplate(template.template, options, timestamp);
    
    // Create PM2 process
    const success = await this.startPM2Process(automationName, customizedTemplate);
    
    if (success) {
      const automation = {
        id: timestamp,
        name: automationName,
        template: templateName,
        status: 'running',
        startTime: new Date(),
        options,
        pm2Name: automationName,
        performance: {
          memoryUsage: 0,
          cpuUsage: 0,
          executionTime: 0
        }
      };
      
      this.activeAutomations.set(automationName, automation);
      this.log(`✅ Created automation: ${automationName}`);
      
      // Start monitoring this automation
      this.startAutomationMonitoring(automationName);
      
      return automation;
    } else {
      throw new Error(`Failed to start automation: ${automationName}`);
    }
  }

  customizeTemplate(template, options, timestamp) {
    const customized = { ...template };
    
    // Replace placeholders
    customized.name = customized.name.replace('{timestamp}', timestamp);
    
    // Apply custom options
    if (options.instances) {
      customized.instances = options.instances;
    }
    
    if (options.maxMemory) {
      customized.max_memory_restart = options.maxMemory;
    }
    
    if (options.watchPaths) {
      customized.watch = options.watchPaths;
    }
    
    if (options.env) {
      customized.env = { ...customized.env, ...options.env };
    }
    
    // Add intelligent scaling based on priority
    if (options.priority === 'critical') {
      customized.instances = Math.max(2, customized.instances || 1);
      customized.max_memory_restart = '512M';
    }
    
    return customized;
  }

  async startPM2Process(name, config) {
    try {
      // Create temporary ecosystem file for this automation
      const tempEcosystemPath = path.join(this.config.logDir, `${name}-ecosystem.json`);
      const ecosystemConfig = {
        apps: [config]
      };
      
      fs.writeFileSync(tempEcosystemPath, JSON.stringify(ecosystemConfig, null, 2));
      
      // Start PM2 process
      const result = execSync(`pm2 start ${tempEcosystemPath}`, { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      // Clean up temporary file
      fs.unlinkSync(tempEcosystemPath);
      
      this.log(`🚀 Started PM2 process: ${name}`);
      return true;
    } catch (error) {
      this.log(`❌ Failed to start PM2 process ${name}: ${error.message}`, 'error');
      return false;
    }
  }

  async stopAutomation(automationName) {
    const automation = this.activeAutomations.get(automationName);
    if (!automation) {
      throw new Error(`Automation not found: ${automationName}`);
    }

    try {
      // Stop PM2 process
      execSync(`pm2 stop ${automationName}`, { stdio: 'pipe' });
      
      // Remove from active automations
      this.activeAutomations.delete(automationName);
      
      this.log(`🛑 Stopped automation: ${automationName}`);
      return true;
    } catch (error) {
      this.log(`❌ Failed to stop automation ${automationName}: ${error.message}`, 'error');
      return false;
    }
  }

  async restartAutomation(automationName) {
    const automation = this.activeAutomations.get(automationName);
    if (!automation) {
      throw new Error(`Automation not found: ${automationName}`);
    }

    try {
      // Restart PM2 process
      execSync(`pm2 restart ${automationName}`, { stdio: 'pipe' });
      
      automation.status = 'running';
      automation.startTime = new Date();
      
      this.log(`🔄 Restarted automation: ${automationName}`);
      return true;
    } catch (error) {
      this.log(`❌ Failed to restart automation ${automationName}: ${error.message}`, 'error');
      return false;
    }
  }

  async scaleAutomation(automationName, instances) {
    const automation = this.activeAutomations.get(automationName);
    if (!automation) {
      throw new Error(`Automation not found: ${automationName}`);
    }

    try {
      // Scale PM2 process
      execSync(`pm2 scale ${automationName} ${instances}`, { stdio: 'pipe' });
      
      automation.options.instances = instances;
      
      this.log(`📈 Scaled automation ${automationName} to ${instances} instances`);
      return true;
    } catch (error) {
      this.log(`❌ Failed to scale automation ${automationName}: ${error.message}`, 'error');
      return false;
    }
  }

  startAutomationMonitoring(automationName) {
    // Monitor automation performance every 30 seconds
    setInterval(async () => {
      await this.updateAutomationMetrics(automationName);
    }, 30000);
  }

  async updateAutomationMetrics(automationName) {
    try {
      const automation = this.activeAutomations.get(automationName);
      if (!automation) return;

      // Get PM2 status for this process
      const result = execSync(`pm2 jlist`, { encoding: 'utf8', stdio: 'pipe' });
      const pm2Status = JSON.parse(result);
      
      const pm2Process = pm2Status.find(process => process.name === automationName);
      if (pm2Process) {
        automation.performance = {
          memoryUsage: pm2Process.monit.memory / (1024 * 1024), // MB
          cpuUsage: pm2Process.monit.cpu || 0,
          executionTime: Date.now() - automation.startTime.getTime()
        };
        
        // Update global performance metrics
        this.updatePerformanceMetrics(automationName, automation.performance);
      }
    } catch (error) {
      this.log(`⚠️ Failed to update metrics for ${automationName}: ${error.message}`, 'warn');
    }
  }

  updatePerformanceMetrics(automationName, metrics) {
    if (!this.performanceMetrics.has(automationName)) {
      this.performanceMetrics.set(automationName, []);
    }
    
    const history = this.performanceMetrics.get(automationName);
    history.push({
      timestamp: Date.now(),
      ...metrics
    });
    
    // Keep only last 50 metrics
    if (history.length > 50) {
      history.shift();
    }
  }

  startResourceOptimization() {
    setInterval(async () => {
      await this.optimizeResourceUsage();
    }, this.config.resourceOptimizationInterval);
  }

  async optimizeResourceUsage() {
    this.log('⚡ Performing resource optimization...');
    
    const optimizationActions = [];
    
    for (const [name, automation] of this.activeAutomations) {
      const metrics = this.performanceMetrics.get(name);
      if (!metrics || metrics.length < 3) continue;
      
      const recentMetrics = metrics.slice(-3);
      const avgMemory = recentMetrics.reduce((sum, m) => sum + m.memoryUsage, 0) / recentMetrics.length;
      const avgCPU = recentMetrics.reduce((sum, m) => sum + m.cpuUsage, 0) / recentMetrics.length;
      
      // Memory optimization
      if (avgMemory > 400) { // 400MB threshold
        optimizationActions.push({
          action: 'restart',
          automation: name,
          reason: `High memory usage (${avgMemory.toFixed(2)}MB avg)`
        });
      }
      
      // CPU optimization
      if (avgCPU > 70) { // 70% threshold
        const currentInstances = automation.options.instances || 1;
        const suggestedInstances = Math.min(currentInstances + 1, 4);
        
        if (suggestedInstances > currentInstances) {
          optimizationActions.push({
            action: 'scale',
            automation: name,
            reason: `High CPU usage (${avgCPU.toFixed(2)}% avg) - scaling to ${suggestedInstances} instances`
          });
        }
      }
    }
    
    // Execute optimization actions
    for (const action of optimizationActions) {
      this.log(`💡 Optimization: ${action.reason}`);
      
      try {
        if (action.action === 'restart') {
          await this.restartAutomation(action.automation);
        } else if (action.action === 'scale') {
          const currentInstances = this.activeAutomations.get(action.automation).options.instances || 1;
          await this.scaleAutomation(action.automation, currentInstances + 1);
        }
      } catch (error) {
        this.log(`❌ Optimization failed for ${action.automation}: ${error.message}`, 'error');
      }
    }
  }

  async getAutomationStatus(automationName) {
    const automation = this.activeAutomations.get(automationName);
    if (!automation) {
      return { error: 'Automation not found' };
    }

    try {
      // Get current PM2 status
      const result = execSync(`pm2 jlist`, { encoding: 'utf8', stdio: 'pipe' });
      const pm2Status = JSON.parse(result);
      
      const pm2Process = pm2Status.find(process => process.name === automationName);
      
      return {
        ...automation,
        pm2Status: pm2Process ? pm2Process.pm2_env.status : 'unknown',
        currentPerformance: automation.performance,
        uptime: Date.now() - automation.startTime.getTime()
      };
    } catch (error) {
      return {
        ...automation,
        error: error.message
      };
    }
  }

  async getAllAutomationsStatus() {
    const statuses = [];
    
    for (const [name, automation] of this.activeAutomations) {
      const status = await this.getAutomationStatus(name);
      statuses.push(status);
    }
    
    return statuses;
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalTemplates: this.automationTemplates.size,
        activeAutomations: this.activeAutomations.size,
        maxConcurrent: this.config.maxConcurrentAutomations
      },
      templates: Array.from(this.automationTemplates.keys()),
      activeAutomations: await this.getAllAutomationsStatus(),
      performanceMetrics: Object.fromEntries(this.performanceMetrics),
      configuration: this.config
    };
    
    const reportPath = path.join(this.config.logDir, 'pm2-factory-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 Report generated: ${reportPath}`);
    return report;
  }

  async cleanup() {
    this.log('🧹 Cleaning up automation factory...');
    
    // Stop all active automations
    for (const [name, automation] of this.activeAutomations) {
      try {
        await this.stopAutomation(name);
      } catch (error) {
        this.log(`⚠️ Failed to cleanup ${name}: ${error.message}`, 'warn');
      }
    }
    
    this.log('✅ Cleanup completed');
  }
}

// CLI handling
const factory = new PM2EnhancedAutomationFactory();
const command = process.argv[2];

switch (command) {
  case 'create':
    const templateName = process.argv[3];
    const options = process.argv[4] ? JSON.parse(process.argv[4]) : {};
    
    if (!templateName) {
      console.log('Usage: node pm2-enhanced-automation-factory.cjs create <template-name> [options-json]');
      process.exit(1);
    }
    
    factory.createAutomation(templateName, options).then(automation => {
      console.log('✅ Automation created:', automation);
      process.exit(0);
    }).catch(error => {
      console.error('❌ Failed to create automation:', error.message);
      process.exit(1);
    });
    break;
    
  case 'stop':
    const automationName = process.argv[3];
    if (!automationName) {
      console.log('Usage: node pm2-enhanced-automation-factory.cjs stop <automation-name>');
      process.exit(1);
    }
    
    factory.stopAutomation(automationName).then(() => {
      console.log('✅ Automation stopped');
      process.exit(0);
    }).catch(error => {
      console.error('❌ Failed to stop automation:', error.message);
      process.exit(1);
    });
    break;
    
  case 'status':
    if (process.argv[3]) {
      factory.getAutomationStatus(process.argv[3]).then(status => {
        console.log(JSON.stringify(status, null, 2));
        process.exit(0);
      });
    } else {
      factory.getAllAutomationsStatus().then(statuses => {
        console.log(JSON.stringify(statuses, null, 2));
        process.exit(0);
      });
    }
    break;
    
  case 'report':
    factory.generateReport().then(report => {
      console.log(JSON.stringify(report, null, 2));
      process.exit(0);
    });
    break;
    
  case 'templates':
    console.log('Available templates:');
    for (const [name, template] of factory.automationTemplates) {
      console.log(`  ${name}: ${template.description}`);
    }
    process.exit(0);
    break;
    
  default:
    console.log('Usage: node pm2-enhanced-automation-factory.cjs [create|stop|status|report|templates]');
    console.log('\nCommands:');
    console.log('  create <template> [options] - Create new automation');
    console.log('  stop <name>               - Stop automation');
    console.log('  status [name]             - Show status (all or specific)');
    console.log('  report                    - Generate comprehensive report');
    console.log('  templates                 - List available templates');
    process.exit(1);
}

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('\n🛑 Shutting down PM2 Enhanced Automation Factory...');
  await factory.cleanup();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('\n🛑 Shutting down PM2 Enhanced Automation Factory...');
  await factory.cleanup();
  process.exit(0);
});