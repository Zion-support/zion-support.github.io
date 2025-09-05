<<<<<<< HEAD
const { execSync } = require('child_process');
const fs = require('fs');



const deploymentSteps = [{
        "name": 'Pre-deployment checks',
        "command": 'npm run lint'
    },
    {
        "name": 'Type checking',
        "command": 'npm run type-check'
    },
    {
        "name": 'Build application',
        "command": 'npm run build'
    },
    {
        "name": 'Run tests',
        "command": 'npm test'
    }
];

let allPassed = true;

deploymentSteps.forEach(step => {
    try {
        
        execSync(step.command, { "stdio": 'inherit' });
        } catch (error) {
        console.error(`❌ ${step.name} "failed": `, error.message);
        allPassed = false}
});

if (allPassed) {
    } else {
    
    process.exit(1)}
=======
<<<<<<< HEAD
const { execSync } = require("child_process");"const fs = require("fs");"console.log(" Deployment Automator Starting.");const deploymentSteps = [{" name: "Pre-deployment checks","" command: "npm run lint" }, {"" name: "Type checking","" command: "npm run type-check" }, {"" name: "Build application","" command: "npm run build" }, {"" name: "Run tests","" command: "npm test" }];let allPassed = true;deploymentSteps.forEach(step => { try { console.log(` ${step.name}.`);"" execSync(step.command, { stdio: "inherit" });` console.log(` ${step.name} completed`)} catch (error) {"` console.error(` ${step.name} failed: `, error.message); allPassed = false}});if (allPassed) {" console.log(" All deployment checks passed! Ready for deployment.")} else {" console.log(" Some deployment checks failed. Please fix issues before deploying."); process.exit(1)}""`"`
=======
const { execSync } = require('child_process')
const fs = require('fs')
console.log(' Deployment Automator Starting...')
        "name"
        "command"
        "name"
        "command"
        "name"
        "command"
        "name"
        "command"
        execSync(step.command, { "stdio"})
>>>>>>> main
>>>>>>> main
