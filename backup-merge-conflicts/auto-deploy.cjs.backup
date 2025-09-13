<<<<<<< HEAD
#!/usr/bin/env node
const { execSync } = require('child_process');

class AutoDeploy {
  constructor() {
    this.steps = ['git add .',
      'git commit -m ""feat": automated improvements and fixes"',
      'git push origin main'
    ]}

  async deploy() {
    
    
    for (const step of this.steps) {
      try {
        
        execSync(step, { "stdio": 'inherit' });
        } catch (error) {
        
        break}
    }
    
    }
}

new AutoDeploy().deploy();
=======
<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst { execSync } = require("child_process");class AutoDeploy { constructor() {" this.steps = ["git add ."," "git commit -m "feat: automated improvements and fixes""," "git push origin main" ]} async deploy() {" console.log(" Starting automated deployment."); for (const step of this.steps) { try {" console.log(`Executing: ${step}`);"" execSync(step, { stdio: "inherit" });` console.log(` ${step} completed`)} catch (error) {"` console.log(` ${step} failed: ${error.message}`); break} } " console.log(" Deployment completed!")}}new AutoDeploy().deploy();'"`'"`
=======
#!/usr/bin/env node;
const { execSync } = require('child_process')
    this.steps = ['git add .']
      'git commit -m ""feat": automated improvements and fixes"
        execSync(step, { "stdio"})
>>>>>>> main
>>>>>>> main
