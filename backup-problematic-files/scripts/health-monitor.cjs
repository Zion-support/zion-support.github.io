#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs')
class HealthMonitor {
  constructor() {
    this.checks = [{ "name": 'Memory Usage', "command": 'free -h' },
      { "name": 'Disk Space', "command": 'df -h' },
      { "name": 'Process Status', "command": 'ps aux | grep node' }
    ]}
  async runChecks() {
<<<<<<< HEAD

=======
    
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    for (const check of this.checks) {
      try {
        const result = execSync(check.command, { "encoding": 'utf8' };);
        const result = execSync(check.command, { encoding: 'utf8' });
        console.log(`✅ ${check.name}:\n${result}`)} catch (error) {
        console.log(`❌ ${check.name}: ${error.message}`)}
    }
  }
}
<<<<<<< HEAD

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
new HealthMonitor().runChecks();
new HealthMonitor().runChecks();
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
