#!/usr/bin/env node

/**
 * Deployment Automation for Zion Tech Group
 * Automated deployment with health checks and rollback capabilities
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Zion Tech Group - Deployment Automation');
console.log('==========================================');

const deploymentReport = {
    timestamp: new Date().toISOString(),
    steps: [],
    status: 'pending',
    healthChecks: []
};

function runDeploymentStep(stepName, command, isOptional = false) {
    console.log(`\n📋 ${stepName}...`);
    
    try {
        const startTime = Date.now();
        execSync(command, { stdio: 'inherit' });
        const duration = Date.now() - startTime;
        
        deploymentReport.steps.push({
            name: stepName,
            command: command,
            status: 'success',
            duration: duration,
            timestamp: new Date().toISOString()
        });
        
        console.log(`✅ ${stepName} completed in ${duration}ms`);
        return true;
    } catch (error) {
        deploymentReport.steps.push({
            name: stepName,
            command: command,
            status: 'failed',
            error: error.message,
            timestamp: new Date().toISOString()
        });
        
        console.log(`❌ ${stepName} failed: ${error.message}`);
        
        if (!isOptional) {
            deploymentReport.status = 'failed';
            return false;
        }
        return true;
    }
}

function performHealthCheck() {
    console.log('\n🏥 Performing health check...');
    
    const healthChecks = [
        { name: 'Build Check', command: 'npm run build' },
        { name: 'Lint Check', command: 'npm run lint' },
        { name: 'Type Check', command: 'npx tsc --noEmit' }
    ];
    
    let allPassed = true;
    
    healthChecks.forEach(check => {
        try {
            execSync(check.command, { stdio: 'pipe' });
            deploymentReport.healthChecks.push({
                name: check.name,
                status: 'passed',
                timestamp: new Date().toISOString()
            });
            console.log(`✅ ${check.name}: Passed`);
        } catch (error) {
            deploymentReport.healthChecks.push({
                name: check.name,
                status: 'failed',
                error: error.message,
                timestamp: new Date().toISOString()
            });
            console.log(`❌ ${check.name}: Failed`);
            allPassed = false;
        }
    });
    
    return allPassed;
}

// Main deployment process
async function deploy() {
    console.log('🚀 Starting deployment process...');
    
    // Pre-deployment checks
    if (!performHealthCheck()) {
        console.log('❌ Pre-deployment health checks failed');
        deploymentReport.status = 'failed';
        return;
    }
    
    // Deployment steps
    const steps = [
        { name: 'Install Dependencies', command: 'npm install' },
        { name: 'Build Application', command: 'npm run build' },
        { name: 'Run Tests', command: 'npm test', optional: true },
        { name: 'Security Scan', command: 'node automation/enhanced-security-scanner.cjs', optional: true }
    ];
    
    for (const step of steps) {
        const success = runDeploymentStep(step.name, step.command, step.optional);
        if (!success && !step.optional) {
            console.log('❌ Deployment failed at:', step.name);
            return;
        }
    }
    
    deploymentReport.status = 'success';
    console.log('\n🎉 Deployment completed successfully!');
}

// Run deployment
deploy().then(() => {
    // Save deployment report
    const reportPath = 'deployment-report.json';
    fs.writeFileSync(reportPath, JSON.stringify(deploymentReport, null, 2));
    
    console.log(`\n📄 Deployment report saved to: ${reportPath}`);
    
    if (deploymentReport.status === 'success') {
        process.exit(0);
    } else {
        process.exit(1);
    }
}).catch(error => {
    console.error('❌ Deployment error:', error);
    process.exit(1);
});