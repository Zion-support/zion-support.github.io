<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        const result = execSync(check.command, { "encoding": 'utf8' };);
        const result = execSync(check.command, { encoding: 'utf8' });
        console.log(`✅ ${check.name}:\n${result}`)} catch (error) {
        console.log(`❌ ${check.name}: ${error.message}`)}
    }
  }
}
<<<<<<< HEAD

=======
new HealthMonitor().runChecks();
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
