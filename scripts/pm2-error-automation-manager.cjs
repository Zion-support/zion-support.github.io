const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class PM2ErrorAutomationManager {
  constructor() {
    this.ecosystemFile = './ecosystem.error-monitoring.cjs';
    this.logDir = './automation/logs';
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  log(level, message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level}] ${message}`);
  }

  async startAllServices() {
    this.log('INFO', 'Starting all PM2 error automation services...');
    
    try {
      // Start PM2 with ecosystem file
      execSync(`pm2 start ${this.ecosystemFile}`, { 
        stdio: 'inherit',
        cwd: process.cwd()
      });
      
      this.log('SUCCESS', 'All services started successfully');
      this.showStatus();
    } catch (error) {
      this.log('ERROR', `Failed to start services: ${error.message}`);
      throw error;
    }
  }

  async stopAllServices() {
    this.log('INFO', 'Stopping all PM2 error automation services...');
    
    try {
      execSync('pm2 stop ecosystem.error-monitoring.cjs', { 
        stdio: 'inherit',
        cwd: process.cwd()
      });
      
      this.log('SUCCESS', 'All services stopped successfully');
    } catch (error) {
      this.log('ERROR', `Failed to stop services: ${error.message}`);
      throw error;
    }
  }

  async restartAllServices() {
    this.log('INFO', 'Restarting all PM2 error automation services...');
    
    try {
      execSync(`pm2 restart ${this.ecosystemFile}`, { 
        stdio: 'inherit',
        cwd: process.cwd()
      });
      
      this.log('SUCCESS', 'All services restarted successfully');
      this.showStatus();
    } catch (error) {
      this.log('ERROR', `Failed to restart services: ${error.message}`);
      throw error;
    }
  }

  async reloadAllServices() {
    this.log('INFO', 'Reloading all PM2 error automation services...');
    
    try {
      execSync(`pm2 reload ${this.ecosystemFile}`, { 
        stdio: 'inherit',
        cwd: process.cwd()
      });
      
      this.log('SUCCESS', 'All services reloaded successfully');
      this.showStatus();
    } catch (error) {
      this.log('ERROR', `Failed to reload services: ${error.message}`);
      throw error;
    }
  }

  showStatus() {
    this.log('INFO', 'PM2 Status:');
    try {
      execSync('pm2 status', { stdio: 'inherit' });
    } catch (error) {
      this.log('ERROR', `Failed to get status: ${error.message}`);
    }
  }

  async showLogs(service = null, lines = 50) {
    try {
      if (service) {
        execSync(`pm2 logs ${service} --lines ${lines}`, { stdio: 'inherit' });
      } else {
        execSync(`pm2 logs --lines ${lines}`, { stdio: 'inherit' });
      }
    } catch (error) {
      this.log('ERROR', `Failed to show logs: ${error.message}`);
    }
  }

  async monitorServices() {
    this.log('INFO', 'Starting service monitoring...');
    
    setInterval(() => {
      this.checkServiceHealth();
    }, 30000); // Check every 30 seconds

    this.log('SUCCESS', 'Service monitoring started');
  }

  async checkServiceHealth() {
    try {
      const status = execSync('pm2 jlist', { encoding: 'utf8' });
      const processes = JSON.parse(status);
      
      const unhealthyServices = processes.filter(proc => 
        proc.pm2_env.status !== 'online' && 
        proc.pm2_env.status !== 'launching'
      );

      if (unhealthyServices.length > 0) {
        this.log('WARNING', `Found ${unhealthyServices.length} unhealthy services`);
        
        for (const service of unhealthyServices) {
          this.log('WARNING', `Restarting unhealthy service: ${service.name}`);
          try {
            execSync(`pm2 restart ${service.name}`, { stdio: 'pipe' });
            this.log('SUCCESS', `Restarted service: ${service.name}`);
          } catch (error) {
            this.log('ERROR', `Failed to restart service ${service.name}: ${error.message}`);
          }
        }
      }
    } catch (error) {
      this.log('ERROR', `Health check failed: ${error.message}`);
    }
  }

  async setupLogRotation() {
    this.log('INFO', 'Setting up log rotation...');
    
    try {
      // Install pm2-logrotate if not already installed
      execSync('pm2 install pm2-logrotate', { stdio: 'pipe' });
      
      // Configure log rotation
      execSync('pm2 set pm2-logrotate:max_size 10M', { stdio: 'pipe' });
      execSync('pm2 set pm2-logrotate:retain 30', { stdio: 'pipe' });
      execSync('pm2 set pm2-logrotate:compress true', { stdio: 'pipe' });
      execSync('pm2 set pm2-logrotate:workerInterval 60', { stdio: 'pipe' });
      execSync('pm2 set pm2-logrotate:rotateInterval "0 0 * * *"', { stdio: 'pipe' });
      
      this.log('SUCCESS', 'Log rotation configured successfully');
    } catch (error) {
      this.log('ERROR', `Failed to setup log rotation: ${error.message}`);
    }
  }

  async generateReport() {
    this.log('INFO', 'Generating PM2 automation report...');
    
    try {
      const status = execSync('pm2 jlist', { encoding: 'utf8' });
      const processes = JSON.parse(status);
      
      const report = {
        timestamp: new Date().toISOString(),
        totalProcesses: processes.length,
        onlineProcesses: processes.filter(p => p.pm2_env.status === 'online').length,
        processes: processes.map(proc => ({
          name: proc.name,
          status: proc.pm2_env.status,
          uptime: proc.pm2_env.uptime,
          memory: proc.monit.memory,
          cpu: proc.monit.cpu,
          restarts: proc.pm2_env.restart_time
        })),
        systemInfo: {
          uptime: process.uptime(),
          memory: process.memoryUsage(),
          platform: process.platform,
          nodeVersion: process.version
        }
      };

      const reportFile = path.join(this.logDir, 'pm2-automation-report.json');
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      
      this.log('SUCCESS', `Report generated: ${reportFile}`);
    } catch (error) {
      this.log('ERROR', `Failed to generate report: ${error.message}`);
    }
  }

  async cleanup() {
    this.log('INFO', 'Cleaning up PM2 processes...');
    
    try {
      // Stop all processes
      execSync('pm2 stop all', { stdio: 'pipe' });
      
      // Delete all processes
      execSync('pm2 delete all', { stdio: 'pipe' });
      
      // Kill PM2 daemon
      execSync('pm2 kill', { stdio: 'pipe' });
      
      this.log('SUCCESS', 'Cleanup completed');
    } catch (error) {
      this.log('ERROR', `Cleanup failed: ${error.message}`);
    }
  }
}

// CLI interface
if (require.main === module) {
  const manager = new PM2ErrorAutomationManager();
  const command = process.argv[2];
  const service = process.argv[3];

  switch (command) {
    case 'start':
      manager.startAllServices();
      break;
    case 'stop':
      manager.stopAllServices();
      break;
    case 'restart':
      manager.restartAllServices();
      break;
    case 'reload':
      manager.reloadAllServices();
      break;
    case 'status':
      manager.showStatus();
      break;
    case 'logs':
      manager.showLogs(service);
      break;
    case 'monitor':
      manager.monitorServices();
      break;
    case 'setup':
      manager.setupLogRotation();
      break;
    case 'report':
      manager.generateReport();
      break;
    case 'cleanup':
      manager.cleanup();
      break;
    default:
      console.log(`
PM2 Error Automation Manager

Usage: node pm2-error-automation-manager.cjs <command> [service]

Commands:
  start     - Start all error automation services
  stop      - Stop all error automation services
  restart   - Restart all error automation services
  reload    - Reload all error automation services
  status    - Show status of all services
  logs      - Show logs (optionally for specific service)
  monitor   - Start monitoring services
  setup     - Setup log rotation
  report    - Generate automation report
  cleanup   - Clean up all PM2 processes

Examples:
  node pm2-error-automation-manager.cjs start
  node pm2-error-automation-manager.cjs logs error-monitor
  node pm2-error-automation-manager.cjs status
      `);
  }
}

module.exports = PM2ErrorAutomationManager;