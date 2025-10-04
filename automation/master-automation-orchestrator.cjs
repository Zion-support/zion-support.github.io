#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

// Master Automation Orchestrator for Zion Tech Group
// This script coordinates all automation tasks and ensures proper execution order

class MasterAutomationOrchestrator {
    constructor() {
        this.automationTasks = [];
        this.results = [];
        this.startTime = Date.now();
    }

    // Add automation task to the queue
    addTask(taskName, taskFunction, dependencies = []) {
        this.automationTasks.push({
            name: taskName,
            function: taskFunction,
            dependencies: dependencies,
            status: 'pending',
            startTime: null,
            endTime: null,
            result: null,
            error: null
        });
    }

    // Execute all tasks in dependency order
    async executeAll() {
        console.log('🚀 Starting Master Automation Orchestrator...');
        
        const sortedTasks = this.topologicalSort();
        
        for (const task of sortedTasks) {
            try {
                console.log(`📋 Executing task: ${task.name}`);
                task.status = 'running';
                task.startTime = Date.now();
                
                const result = await task.function();
                
                task.endTime = Date.now();
                task.status = 'completed';
                task.result = result;
                
                console.log(`✅ Task completed: ${task.name} (${task.endTime - task.startTime}ms)`);
                
            } catch (error) {
                task.endTime = Date.now();
                task.status = 'failed';
                task.error = error;
                
                console.error(`❌ Task failed: ${task.name} - ${error.message}`);
            }
        }
        
        this.generateReport();
    }

    // Topological sort to handle dependencies
    topologicalSort() {
        const visited = new Set();
        const visiting = new Set();
        const result = [];

        const visit = (task) => {
            if (visiting.has(task.name)) {
                throw new Error(`Circular dependency detected involving ${task.name}`);
            }
            if (visited.has(task.name)) {
                return;
            }

            visiting.add(task.name);
            
            // Visit dependencies first
            for (const depName of task.dependencies) {
                const depTask = this.automationTasks.find(t => t.name === depName);
                if (depTask) {
                    visit(depTask);
                }
            }
            
            visiting.delete(task.name);
            visited.add(task.name);
            result.push(task);
        };

        for (const task of this.automationTasks) {
            visit(task);
        }

        return result;
    }

    // Generate comprehensive execution report
    generateReport() {
        const endTime = Date.now();
        const totalTime = endTime - this.startTime;
        
        const report = {
            summary: {
                totalTasks: this.automationTasks.length,
                completed: this.automationTasks.filter(t => t.status === 'completed').length,
                failed: this.automationTasks.filter(t => t.status === 'failed').length,
                totalExecutionTime: totalTime
            },
            tasks: this.automationTasks.map(task => ({
                name: task.name,
                status: task.status,
                executionTime: task.endTime ? task.endTime - task.startTime : 0,
                error: task.error ? task.error.message : null
            }))
        };

        console.log('\n📊 Master Automation Orchestrator Report:');
        console.log(`Total Tasks: ${report.summary.totalTasks}`);
        console.log(`Completed: ${report.summary.completed}`);
        console.log(`Failed: ${report.summary.failed}`);
        console.log(`Total Time: ${report.summary.totalExecutionTime}ms`);
        
        // Save report to file
        fs.writeFileSync(
            path.join(__dirname, 'master-orchestrator-report.json'),
            JSON.stringify(report, null, 2)
        );
        
        return report;
    }
}

// Example usage and task definitions
async function main() {
    const orchestrator = new MasterAutomationOrchestrator();
    
    // Define automation tasks
    orchestrator.addTask('setup', async () => {
        console.log('🔧 Setting up automation environment...');
        // Setup logic here
        return { status: 'setup complete' };
    });
    
    orchestrator.addTask('lint', async () => {
        console.log('🔍 Running linting checks...');
        // Linting logic here
        return { status: 'linting complete' };
    }, ['setup']);
    
    orchestrator.addTask('test', async () => {
        console.log('🧪 Running tests...');
        // Testing logic here
        return { status: 'testing complete' };
    }, ['setup']);
    
    orchestrator.addTask('build', async () => {
        console.log('🏗️ Building application...');
        // Build logic here
        return { status: 'build complete' };
    }, ['lint', 'test']);
    
    orchestrator.addTask('deploy', async () => {
        console.log('🚀 Deploying application...');
        // Deployment logic here
        return { status: 'deployment complete' };
    }, ['build']);
    
    // Execute all tasks
    await orchestrator.executeAll();
}

// Run if called directly
if (require.main === module) {
    main().catch(console.error);
}

module.exports = MasterAutomationOrchestrator;