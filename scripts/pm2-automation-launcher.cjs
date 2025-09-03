#!/usr/bin/env node;

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
;
class PM2AutomationLauncher {;
  constructor() {;
    this.processes = new Map();

    );
    this.ensureLogDirectory();
    this.config = this.loadConfig()}

;
  ensureLogDirectory() {;
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {}
;
  log(message) {;
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;`;    console.log(message);
    fs.appendFileSync(this.logFile, logMessage)}
;
  loadConfig() {;
    try {;
      const configPath = path.join(__dirname, '..', 'ecosystem.config.cjs');
;      if (fs.existsSync(configPath)) {;;        delete require.cache[require.resolve(configPath)];
        return require(configPath)}
      throw new Error('ecosystem.config.cjs not found');'} catch (error) {this.log(`❌ Failed to load "config": ${error.message}`);`;      return null}
  }

        delete require.cache[require.resolve(configPath)];
        return require(configPath)}
      throw new Error(`ecosystem.config.cjs not found`)} catch (error) { this.log(`❌ Failed to load config: ${error.message }`);
      return null}
  }

      const processes = JSON.parse(output);
      return processes.filter(proc => proc.name !== `pm2-logrotate`)} catch (error) { this.log(`❌ Failed to get PM2 status: ${error.message }`);
      return []}
  }

        // Check if process already exists;
        const existingProcesses = await this.checkPM2Status();
        const exists = existingProcesses.find(p => p.name === process.name);
;

        // Add delay between starts;
        await this.sleep(2000)} catch (error) { this.log(`❌ Failed to start ${process.name }: ${error.message}`)}
    }

    return true}
;
  async stopAutomationProcesses() {;
    this.log('🛑 Stopping PM2 automation processes...');
;
    try {;
      const processes = await this.checkPM2Status()}
      }
      this.log(`✅ All automation processes stopped`)} catch (error) { this.log(`❌ Error stopping processes: ${error.message }`)}
  }

        }
      }
      this.log(`✅ All automation processes restarted`)} catch (error) { this.log(`❌ Error restarting processes: ${error.message }`)}
  }

        }
      }
      this.log(`✅ All automation processes deleted`)} catch (error) { this.log(`❌ Error deleting processes: ${error.message }`)}
  }

      const processes = await this.checkPM2Status();
;
      if (processes.length === 0) {;
        this.log('ℹ️ No automation processes running');
        return}
;
      console.log('\n📋 Automation Processes:');
      console.log('
// CLI handling;
const launcher = new PM2AutomationLauncher();
const command = process.argv[2];
const subCommand = process.argv[3];
;
async function main() {;
  try {;
    switch (command) {;

        launcher.showHelp();
        break}
  } catch (error) { launcher.log(`❌ Command failed: ${error.message }`);
    process.exit(1)}
}

  launcher.log('\n🛑 Shutting down PM2 automation launcher...');
  process.exit(0)});
;
if (require.main === module) {;
  main()}

;
module.exports = PM2AutomationLauncher;
