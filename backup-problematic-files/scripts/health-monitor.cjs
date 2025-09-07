<<<<<<< HEAD
#!/usr/bin/env node;
=======
#!/usr/bin/env node
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
const { execSync } = require('child_process');
const fs = require('fs')
class HealthMonitor {
  // TODO: Implement
}
  constructor() {
<<<<<<< HEAD
    this.checks = [{ "name": 'Memory Usage', "command": 'free -h' },
      { "name": 'Disk Space', "command": 'df -h' },
      { "name": 'Process Status', "command": 'ps aux | grep node' }']
=======
    this.checks = [{ "name": Memory Usage, "command": free -h},
      { "name": Disk Space, "command": df -h},
      { "name": Process Status, "command": ps aux | grep node}]
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
    ]}
  async runChecks() {
    
    for (const check of this.checks) {
      try {
  // TODO: Implement
<<<<<<< HEAD
        const result = execSync(check.command, { "encoding": 'utf8' };);
        const result = execSync(check.command, { encoding: 'utf8' });
        console.log(`✅ ${check.name}:\n${result}`)} catch (error) {`;
        console.log(`❌ ${check.name}: ${error.message}`)}
=======
}
        const result = execSync(check.command, { "encoding": utf8};);
        const result = execSync(check.command, { encoding: utf8});
        console.log(`✅ ${check.name}:\n${result})} catch (error) {
        console.log(`❌ ${check.name}: ${error.message})}
    }
  }
}
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
new HealthMonitor().runChecks();
`;