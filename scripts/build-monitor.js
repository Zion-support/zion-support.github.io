=======monitorBuild();
=======
#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class BuildMonitor {
  constructor() {
    this.logFile = path.join(process.cwd(), 'logs', 'build-monitor.log');
    this.buildCount = 0;
    this.errorCount = 0;
    this.lastBuildTime = null;
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    
    console.log(logMessage.trim());
    
    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async runBuild() {
    try {
      this.log('Starting build process...');
      
      const startTime = Date.now();
      
      // Run build command
      const result = execSync('npm run build', { 
        encoding: 'utf8', 
        cwd: process.cwd(),
        stdio: 'pipe'
      });
      
      const endTime = Date.now();
      const buildTime = endTime - startTime;
      
      this.buildCount++;
      this.lastBuildTime = new Date();
      
      this.log(`Build completed successfully in ${buildTime}ms. Build count: ${this.buildCount}`);
      
    } catch (error) {
      this.errorCount++;
      this.log(`Build failed: ${error.message}`, 'ERROR');
    }
  }

  async run() {
    this.log('Starting Build Monitor...');
    
    // Create logs directory if it doesn't exist
    const logsDir = path.join(process.cwd(), 'logs');
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
    
    // Run initial build
    await this.runBuild();
    
    // Set up interval for continuous building
    setInterval(async () => {
      await this.runBuild();
    }, 1800000); // Run every 30 minutes
  }
}

// Run the monitor
const monitor = new BuildMonitor();
monitor.run().catch(console.error);>>>>>>> origin/main
=======
export default BuildMonitor;>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
