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
<<<<<<< HEAD
<<<<<<< HEAD
=======
new HealthMonitor().runChecks();

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
new HealthMonitor().runChecks();
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
=======
new HealthMonitor().runChecks();
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
