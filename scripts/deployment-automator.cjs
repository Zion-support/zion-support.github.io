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
