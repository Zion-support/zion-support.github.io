const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");
const { promisify } = require("util");

const execAsync = promisify(exec);

class MasterAutomation {
  constructor() {
    this.logFile = path.join(__dirname, "logs", "master-automation.log");
    this.pm2Processes = ["error-monitor", "lint-fixer", "build-monitor", "git-automation"];
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runCommand(command, options = {}) {
    try {
      const { stdout, stderr } = await execAsync(command, {
        timeout: 30000, 
        ...options 
      });
      return { success: true, stdout, stderr };
    } catch (error) {
      this.log(`Command failed: ${command} - ${error.message}`);
      return { 
        success: false, 
        stdout: error.stdout || "", 
        stderr: error.stderr || "",
        error: error.message
      };
    }
  }

  async checkPM2Status() {
    try {
      const { stdout } = await this.runCommand("pm2 list --format json");
      const processes = JSON.parse(stdout);
      return processes.filter(p => p.status === "online").length > 0;
    } catch (error) {
      this.log(`PM2 status check failed: ${error.message}`);
      return false;
    }
  }

  async getPM2Processes() {
    try {
      const { stdout } = await this.runCommand("pm2 list --format json");
      return JSON.parse(stdout);
    } catch (error) {
      this.log(`Failed to get PM2 processes: ${error.message}`);
      return [];
    }
  }

  async startPM2Processes() {
    this.log("Starting PM2 processes...");
    for (const process of this.pm2Processes) {
      try {
        await this.runCommand(`pm2 start ecosystem.config.cjs --only ${process}`);
        this.log(`Started ${process}`);
      } catch (error) {
        this.log(`Failed to start ${process}: ${error.message}`);
      }
    }
  }

  async stopPM2Processes() {
    this.log("Stopping PM2 processes...");
    for (const process of this.pm2Processes) {
      try {
        await this.runCommand(`pm2 stop ${process}`);
        this.log(`Stopped ${process}`);
      } catch (error) {
        this.log(`Failed to stop ${process}: ${error.message}`);
      }
    }
  }

  async restartPM2Processes() {
    this.log("Restarting PM2 processes...");
    await this.stopPM2Processes();
    await new Promise(resolve => setTimeout(resolve, 2000));
    await this.startPM2Processes();
  }

  async getPM2Logs(processName, lines = 50) {
    try {
      const { stdout } = await this.runCommand(`pm2 logs ${processName} --lines ${lines} --nostream`);
      return stdout;
    } catch (error) {
      this.log(`Failed to get logs for ${processName}: ${error.message}`);
      return "";
    }
  }

  async performHealthCheck() {
    this.log("Performing health check...");
    
    // Check if PM2 is running
    const pm2Status = await this.checkPM2Status();
    if (!pm2Status) {
      this.log("PM2 is not running, attempting to start processes.");
      await this.startPM2Processes();
      return;
    }

    // Check individual processes
    const processes = await this.getPM2Processes();
    const expectedProcesses = this.pm2Processes.length;
    const runningProcesses = processes.length;

    if (runningProcesses < expectedProcesses) {
      this.log(`Only ${runningProcesses}/${expectedProcesses} processes running, restarting.`);
      await this.restartPM2Processes();
    }

    this.log("Health check completed.");
  }

  async monitorProcesses() {
    this.log("Monitoring processes...");
    
    const pm2Status = await this.checkPM2Status();
    if (!pm2Status) {
      this.log('PM2 is not running, attempting to start processes...');
      await this.startPM2Processes();
      return;
    }

    const processes = await this.getPM2Processes();
    const expectedProcesses = this.pm2Processes.length;
    const runningProcesses = processes.length;

    if (runningProcesses < expectedProcesses) {
      this.log(`Only ${runningProcesses}/${expectedProcesses} processes running, restarting...`);
      await this.restartPM2Processes();
    }

    const report = {
      timestamp: new Date().toISOString(),
      pm2Status,
      totalProcesses: runningProcesses,
      expectedProcesses,
      processes: processes.map(p => ({
        name: p.name,
        status: p.status,
        uptime: p.uptime,
        memory: p.memory,
        cpu: p.cpu
      })),
      logs: {
        errorMonitor: await this.getPM2Logs("error-monitor", 20),
        lintFixer: await this.getPM2Logs("lint-fixer", 20),
        buildMonitor: await this.getPM2Logs("build-monitor", 20),
        gitAutomation: await this.getPM2Logs("git-automation", 20)
      }
    };

    const reportFile = path.join(__dirname, "logs", "automation-report.json");
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`Report saved to ${reportFile}`);
    return report;
  }

  async generateReport() {
    return await this.monitorProcesses();
  }

  async start() {
    this.log('Master Automation started');
    
    // Ensure logs directory exists
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }

    // Start PM2 processes
    await this.startPM2Processes();

    // Perform initial health check
    await this.performHealthCheck();

    // Set up periodic health checks every 30 minutes
    setInterval(async () => {
      await this.performHealthCheck();
    }, 30 * 60 * 1000);

    this.log("Master Automation is running. Health checks every 30 minutes.");
  }

  async stop() {
    this.log("Stopping Master Automation...");
    await this.stopPM2Processes();
    this.log("Master Automation stopped.");
  }
}

// CLI interface
if (require.main === module) {
  const automation = new MasterAutomation();
  const command = process.argv[2];

  switch (command) {
    case "start":
      automation.start().catch(error => {
        console.error("Master Automation failed: ", error);
        process.exit(1);
      });
      break;
    case "stop":
      automation.stop().catch(error => {
        console.error("Failed to stop Master Automation: ", error);
        process.exit(1);
      });
      break;
    case "restart":
      automation.restartPM2Processes().catch(error => {
        console.error("Failed to restart processes: ", error);
        process.exit(1);
      });
      break;
    case "status":
      automation.monitorProcesses().catch(error => {
        console.error("Failed to get status: ", error);
        process.exit(1);
      });
      break;
    case "report":
      automation.generateReport().catch(error => {
        console.error("Failed to generate report: ", error);
        process.exit(1);
      });
      break;
    default:
      console.log("Usage: node master-automation.js [start|stop|restart|status|report]");
      process.exit(1);
  }
}

module.exports = MasterAutomation;