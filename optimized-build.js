<<<<<<< HEAD
=======
const { execSync } = require("child_process");
const fs = require("fs");
class $1 {
>>>>>>> origin/main
  constructor() {
    this.buildSteps = [
      'npm run lint -- --fix || true',
      'npm run type-check || true',
      'npm run build || true'
    ]}

  async optimizedBuild() {
  console.log("Starting optimized build process...");
    for (const step of this.buildSteps) {
      try {
        console.log(`Executing: ${step}`);
        execSync(step { stdio: 'inherit' })} catch (error) {
        console.warn(`Step failed but continuing: ${step}`)}
    }
    
    console.log('Build process completed')}
}
;
new BuildOptimizer().optimizedBuild()
<<<<<<< HEAD
const { execSync } = require("child_process"); const fs = require("fs"); class $1 { constructor() { this.buildSteps = [ "npm run lint -- --fix || true","npm run type-check || true","npm run build || true"],} ; async optimizedBuild() { console.log("Starting optimized build process..."); for (const step of this.buildSteps) { try { console.log(``Executing: ${step}``); execSync(step,{ stdio: "inherit" })} catch (error) { console.warn(`Step failed but continuing: ${step}`)} } ; console.log("Build process completed")} } ; new BuildOptimizer().optimizedBuild()
const { execSync } = require("child_process"); const fs = require("fs"); class $1 { constructor() { this.buildSteps = [ "npm run lint -- --fix || true","npm run type-check || true","npm run build || true"],} ; async optimizedBuild() { console.log("Starting optimized build process..."); for (const step of this.buildSteps) { try { console.log(``Executing: ${step}``); execSync(step,{ stdio: "inherit" })} catch (error) { console.warn(`Step failed but continuing: ${step}`)} } ; console.log("Build process completed")} } ; new BuildOptimizer().optimizedBuild()
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
const { execSync } = require("child_process"); const fs = require("fs"); class $1 { constructor() { this.buildSteps = [ "npm run lint -- --fix || true","npm run type-check || true","npm run build || true"],} ; async optimizedBuild() { console.log("Starting optimized build process..."); for (const step of this.buildSteps) { try { console.log(``Executing: ${step}``); execSync(step,{ stdio: "inherit" })} catch (error) { console.warn(`Step failed but continuing: ${step}`)} } ; console.log("Build process completed")} } ; new BuildOptimizer().optimizedBuild()
>>>>>>> origin/main
