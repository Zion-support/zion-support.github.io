const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class MasterAutomation {
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'master-automation.log');
    this.ensureLogDirectory();
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

  async start() {
    this.log('🚀 Starting Master Automation System...');
    
    try {
      // Run comprehensive automation
      this.log('📋 Running comprehensive automation...');
      execSync('node automation/comprehensive-automation-runner.cjs', { stdio: 'inherit' });
      
      // Run performance optimization
      this.log('⚡ Running performance optimization...');
      execSync('node automation/performance-optimizer.cjs', { stdio: 'inherit' });
      
      // Run security scan
      this.log('🔒 Running security scan...');
      execSync('node automation/security-scanner.cjs', { stdio: 'inherit' });
      
      // Run SEO optimization
      this.log('🔍 Running SEO optimization...');
      execSync('node automation/seo-optimizer.cjs', { stdio: 'inherit' });
      
      this.log('✅ Master Automation completed successfully!');
      
    } catch (error) {
      this.log(`❌ Error in Master Automation: ${error.message}`);
      throw error;
    }
  }

  async status() {
    this.log('📊 Checking Master Automation Status...');
    
    try {
      // Check if log file exists and get last few lines
      if (fs.existsSync(this.logFile)) {
        const logContent = fs.readFileSync(this.logFile, 'utf8');
        const lines = logContent.split('\n').filter(line => line.trim());
        const lastLines = lines.slice(-10);
        
        this.log('📋 Recent automation activity:');
        lastLines.forEach(line => this.log(`  ${line}`));
      } else {
        this.log('ℹ️  No automation logs found. Run automation:start first.');
      }
      
    } catch (error) {
      this.log(`❌ Error checking status: ${error.message}`);
    }
  }
}

// CLI interface
if (require.main === module) {
  const automation = new MasterAutomation();
  const command = process.argv[2];
  
  switch (command) {
    case 'start':
      automation.start().catch(console.error);
      break;
    case 'status':
      automation.status().catch(console.error);
      break;
    default:
      console.log('Usage: node master-automation-clean.cjs [start|status]');
      process.exit(1);
  }
}

module.exports = MasterAutomation;