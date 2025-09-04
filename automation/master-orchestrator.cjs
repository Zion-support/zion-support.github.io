#!/usr/bin/env node

/**
 * Master Automation Orchestrator
 * Coordinates all automation processes
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class MasterOrchestrator {
    constructor() {
        this.projectRoot = process.cwd();
        this.logFile = path.join(this.projectRoot, 'logs', 'master-orchestrator.log');
        this.reportFile = path.join(this.projectRoot, 'master-automation-report.json');
        this.ensureLogsDirectory();
    }

    ensureLogsDirectory() {
        const logsDir = path.join(this.projectRoot, 'logs');
        if (!fs.existsSync(logsDir)) {
            fs.mkdirSync(logsDir, { recursive: true });
        }
    }

    log(message) {
        const timestamp = new Date().toISOString();
        const logMessage = `[${timestamp}] ${message}\n`;
        fs.appendFileSync(this.logFile, logMessage);
        console.log(message);
    }

    async runAutomation(scriptPath, name) {
        this.log(`Running ${name}...`);
        
        try {
            const result = execSync(`node ${scriptPath}`, { 
                cwd: this.projectRoot, 
                encoding: 'utf8',
                stdio: 'pipe'
            });
            
            this.log(`${name} completed successfully`);
            return { status: 'success', output: result };
        } catch (error) {
            this.log(`${name} failed: ${error.message}`);
            return { status: 'failed', error: error.message };
        }
    }

    async runAllAutomations() {
        this.log('Starting master automation orchestration...');
        
        const automations = [
            { script: 'scripts/automation/ai-code-analyzer.cjs', name: 'AI Code Analyzer' },
            { script: 'scripts/automation/smart-performance-optimizer.cjs', name: 'Smart Performance Optimizer' },
            { script: 'scripts/automation/intelligent-dependency-manager.cjs', name: 'Intelligent Dependency Manager' },
            { script: 'scripts/automation/smart-deployment-automation.cjs', name: 'Smart Deployment Automation' },
            { script: 'scripts/automation/enhanced-security-automation.cjs', name: 'Enhanced Security Automation' },
            { script: 'scripts/automation/project-health-monitor.cjs', name: 'Project Health Monitor' },
            { script: 'scripts/automation/pm2-sync-automation.cjs', name: 'PM2 Sync Automation' },
            { script: 'scripts/automation/link-checker-automation.cjs', name: 'Link Checker Automation' },
            { script: 'scripts/automation/typescript-syntax-fixer.cjs', name: 'TypeScript Syntax Fixer' },
            { script: 'scripts/automation/console-error-fixer.cjs', name: 'Console Error Fixer' }
        ];
        
        const results = {};
        
        for (const automation of automations) {
            if (fs.existsSync(path.join(this.projectRoot, automation.script))) {
                results[automation.name] = await this.runAutomation(automation.script, automation.name);
            } else {
                this.log(`Script not found: ${automation.script}`);
                results[automation.name] = { status: 'skipped', reason: 'Script not found' };
            }
        }
        
        return results;
    }

    generateMasterReport(results) {
        this.log('Generating master automation report...');
        
        const report = {
            timestamp: new Date().toISOString(),
            project: this.projectRoot,
            orchestrator: 'Master Automation Orchestrator',
            results: results,
            summary: {
                total: Object.keys(results).length,
                successful: Object.values(results).filter(r => r.status === 'success').length,
                failed: Object.values(results).filter(r => r.status === 'failed').length,
                skipped: Object.values(results).filter(r => r.status === 'skipped').length
            },
            recommendations: this.generateMasterRecommendations(results)
        };

        fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
        this.log(`Master automation report saved to ${this.reportFile}`);
        
        return report;
    }

    generateMasterRecommendations(results) {
        const recommendations = [];
        
        const failedCount = Object.values(results).filter(r => r.status === 'failed').length;
        const skippedCount = Object.values(results).filter(r => r.status === 'skipped').length;
        
        if (failedCount > 0) {
            recommendations.push('Review and fix failed automation scripts');
        }
        
        if (skippedCount > 0) {
            recommendations.push('Create missing automation scripts');
        }
        
        recommendations.push('Set up automated scheduling for regular runs');
        recommendations.push('Implement monitoring and alerting for automation failures');
        recommendations.push('Consider using PM2 for process management');
        recommendations.push('Implement logging and reporting improvements');
        
        return recommendations;
    }

    async run() {
        this.log('Master Automation Orchestrator started');
        
        try {
            const results = await this.runAllAutomations();
            const report = this.generateMasterReport(results);
            
            this.log('Master Automation Orchestrator completed successfully');
            this.log(`Summary: ${report.summary.successful}/${report.summary.total} automations successful`);
            
            return report;
        } catch (error) {
            this.log(`Master Automation Orchestrator failed: ${error.message}`);
            throw error;
        }
    }
}

// Run the orchestrator if this script is executed directly
if (require.main === module) {
    const orchestrator = new MasterOrchestrator();
    orchestrator.run().catch(console.error);
}

module.exports = MasterOrchestrator;