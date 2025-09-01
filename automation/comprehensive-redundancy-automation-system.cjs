#!/usr/bin/env node
"use strict";

const { spawnSync, execSync, spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

class ComprehensiveRedundancyAutomationSystem {
    constructor() {
        this.config = {
            checkInterval: 30000, // 30 seconds
            healthCheckInterval: 60000, // 1 minute
            recoveryAttempts: 3,
            logFile: 'automation/logs/comprehensive-redundancy.log',
            statusFile: 'automation/logs/redundancy-status.json'
        };
        
        for (const workflow of workflowFiles) {
          try {
            const workflowPath = path.join(workflowsDir, workflow);
            const workflowContent = fs.readFileSync(workflowPath, 'utf8');
            
            // Check if workflow has backup
            const hasBackup = workflowFiles.some(f => f.includes('backup') && f.includes(workflow.replace('.yml', '')));
            const isActive = !workflowContent.includes('disabled: true');
            
            if (isActive) {
              activeWorkflows++;
              this.status.github.workflows[workflow] = {
                status: "active",
                hasBackup: hasBackup,
                lastModified: fs.statSync(workflowPath).mtime.toISOString()
              };
            } else {
              this.status.github.workflows[workflow] = {
                status: "disabled",
                hasBackup: hasBackup,
                lastModified: fs.statSync(workflowPath).mtime.toISOString()
              };
            }
          } catch (error) {
            this.log(`Failed to check workflow ${workflow}: ${error.message}`, "ERROR");
          }
        }
      }
      
      coverage = totalWorkflows > 0 ? (activeWorkflows / totalWorkflows) * 100 : 0;
      
      this.status.github.status = coverage >= 80 ? "healthy" : coverage >= 50 ? "degraded" : "critical";
      this.status.github.lastCheck = new Date().toISOString();
      
      this.log(`GitHub Actions redundancy coverage: ${coverage.toFixed(1)}% (${activeWorkflows}/${totalWorkflows})`);
      
      return { coverage, status: this.status.github.status };
    } catch (error) {
      this.log(`GitHub Actions redundancy check failed: ${error.message}`, "ERROR");
      this.status.github.status = "error";
      this.status.github.lastCheck = new Date().toISOString();
      return { coverage: 0, status: "error" };
    }
  }

  async checkNetlifyFunctionsRedundancy() {
    this.log("Checking Netlify Functions redundancy coverage...");
    
    try {
      const functionsDir = path.join(this.workspace, "netlify/functions");
      const manifestPath = path.join(functionsDir, "functions-manifest.json");
      let coverage = 0;
      let totalFunctions = 0;
      let activeFunctions = 0;
      
      if (fs.existsSync(manifestPath)) {
        try {
          const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
          if (manifest.functions && Array.isArray(manifest.functions)) {
            totalFunctions = manifest.functions.length;
            
            for (const funcName of manifest.functions) {
              // Check if function file exists
              const funcPath = path.join(functionsDir, `${funcName}.js`);
              const funcPathCjs = path.join(functionsDir, `${funcName}.cjs`);
              
              let funcExists = false;
              let funcStatus = "missing";
              
              if (fs.existsSync(funcPath) || fs.existsSync(funcPathCjs)) {
                funcExists = true;
                const actualPath = fs.existsSync(funcPath) ? funcPath : funcPathCjs;
                
                try {
                  const funcContent = fs.readFileSync(actualPath, 'utf8');
                  
                  // Check if function is properly structured
                  const hasExports = funcContent.includes('exports.handler') || funcContent.includes('module.exports');
                  const hasErrorHandling = funcContent.includes('try') && funcContent.includes('catch');
                  const hasLogging = funcContent.includes('console.log') || funcContent.includes('console.error');
                  
                  if (hasExports && hasErrorHandling && hasLogging) {
                    activeFunctions++;
                    funcStatus = "active";
                  } else {
                    funcStatus = "incomplete";
                  }
                  
                  this.status.netlify.functions[funcName] = {
                    status: funcStatus,
                    hasExports,
                    hasErrorHandling,
                    hasLogging,
                    lastModified: fs.statSync(actualPath).mtime.toISOString()
                  };
                } catch (error) {
                  this.status.netlify.functions[funcName] = {
                    status: "error",
                    error: error.message,
                    lastModified: new Date().toISOString()
                  };
                }
              } else {
                this.status.netlify.functions[funcName] = {
                  status: "missing",
                  error: "Function file not found",
                  lastModified: new Date().toISOString()
                };
              }
            }
          }
        } catch (error) {
          this.log(`Failed to parse functions manifest: ${error.message}`, "ERROR");
        }
      }
      
      coverage = totalFunctions > 0 ? (activeFunctions / totalFunctions) * 100 : 0;
      
      this.status.netlify.status = coverage >= 80 ? "healthy" : coverage >= 50 ? "degraded" : "critical";
      this.status.netlify.lastCheck = new Date().toISOString();
      
      this.log(`Netlify Functions redundancy coverage: ${coverage.toFixed(1)}% (${activeFunctions}/${totalFunctions})`);
      
      return { coverage, status: this.status.netlify.status };
    } catch (error) {
      this.log(`Netlify Functions redundancy check failed: ${error.message}`, "ERROR");
      this.status.netlify.status = "error";
      this.status.netlify.lastCheck = new Date().toISOString();
      return { coverage: 0, status: "error" };
    }
  }

  async checkOverallHealth() {
    this.log("Checking overall system health...");
    
    try {
      const pm2Health = await this.checkPM2Redundancy();
      const githubHealth = await this.checkGitHubActionsRedundancy();
      const netlifyHealth = await this.checkNetlifyFunctionsRedundancy();
      
      // Calculate overall health score
      const totalCoverage = (pm2Health.coverage + githubHealth.coverage + netlifyHealth.coverage) / 3;
      
      let overallStatus = "unknown";
      if (totalCoverage >= 80) overallStatus = "healthy";
      else if (totalCoverage >= 60) overallStatus = "degraded";
      else if (totalCoverage >= 40) overallStatus = "critical";
      else overallStatus = "failed";
      
      this.status.health.status = overallStatus;
      this.status.health.score = totalCoverage;
      this.status.health.lastCheck = new Date().toISOString();
      
      this.status.redundancy.status = overallStatus;
      this.status.redundancy.coverage = totalCoverage;
      this.status.redundancy.lastCheck = new Date().toISOString();
      
      this.log(`Overall health score: ${totalCoverage.toFixed(1)}% - Status: ${overallStatus}`);
      
      this.saveStatus();
      
      return { score: totalCoverage, status: overallStatus };
    } catch (error) {
      this.log(`Overall health check failed: ${error.message}`, "ERROR");
      return { score: 0, status: "error" };
    }
  }

  async startRedundancyMonitoring() {
    this.log("Starting comprehensive redundancy monitoring...");
    
    // Start monitoring loops
    setInterval(async () => {
      await this.checkOverallHealth();
    }, this.config.intervals.health * 60 * 1000);
    
    setInterval(async () => {
      await this.checkPM2Redundancy();
    }, this.config.intervals.pm2 * 60 * 1000);
    
    setInterval(async () => {
      await this.checkGitHubActionsRedundancy();
    }, this.config.intervals.github * 60 * 1000);
    
    setInterval(async () => {
      await this.checkNetlifyFunctionsRedundancy();
    }, this.config.intervals.netlify * 60 * 1000);
    
    // Initial health check
    await this.checkOverallHealth();
    
    this.log("Comprehensive redundancy monitoring started successfully");
  }

  async createRedundancyBackups() {
    this.log("Creating redundancy backups...");
    
    try {
      const backupDir = path.join(this.workspace, "automation/backups/redundancy");
      if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
      }
      
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      
      // Backup PM2 ecosystems
      for (const ecosystem of this.config.pm2Ecosystems) {
        if (fs.existsSync(ecosystem)) {
          const backupPath = path.join(backupDir, `${ecosystem}.${timestamp}.backup`);
          fs.copyFileSync(ecosystem, backupPath);
        }
      }
      
      // Backup GitHub workflows
      const workflowsDir = path.join(this.workspace, ".github/workflows");
      if (fs.existsSync(workflowsDir)) {
        const workflowsBackupDir = path.join(backupDir, `workflows.${timestamp}`);
        fs.mkdirSync(workflowsBackupDir, { recursive: true });
        
        const workflowFiles = fs.readdirSync(workflowsDir);
        for (const workflow of workflowFiles) {
          if (workflow.endsWith('.yml')) {
            fs.copyFileSync(
              path.join(workflowsDir, workflow),
              path.join(workflowsBackupDir, workflow)
            );
          }
        }
      }
      
      // Backup Netlify functions
      const functionsDir = path.join(this.workspace, "netlify/functions");
      if (fs.existsSync(functionsDir)) {
        const functionsBackupDir = path.join(backupDir, `functions.${timestamp}`);
        fs.mkdirSync(functionsBackupDir, { recursive: true });
        
        const functionFiles = fs.readdirSync(functionsDir);
        for (const func of functionFiles) {
          if (func.endsWith('.js') || func.endsWith('.cjs')) {
            fs.copyFileSync(
              path.join(functionsDir, func),
              path.join(functionsBackupDir, func)
            );
          }
        }
      }
      
      this.log("Redundancy backups created successfully");
      return true;
    } catch (error) {
      this.log(`Failed to create redundancy backups: ${error.message}`, "ERROR");
      return false;
    }
  }

  getStatus() {
    return this.status;
  }

  async runCommand(command, args = []) {
    return new Promise((resolve, reject) => {
      const child = spawn(command, args, {
        stdio: 'pipe',
        shell: true,
        cwd: this.workspace
      });
      
      let stdout = '';
      let stderr = '';
      
      child.stdout.on('data', (data) => {
        stdout += data.toString();
      });
      
      child.stderr.on('data', (data) => {
        stderr += data.toString();
      });
      
      child.on('close', (code) => {
        if (code === 0) {
          resolve({ success: true, stdout, stderr, code });
        } else {
          reject(new Error(`Command failed with code ${code}: ${stderr}`));
        }
      });
      
      child.on('error', (error) => {
        reject(error);
      });
    });
  }
}

// CLI interface
if (require.main === module) {
  const system = new ComprehensiveRedundancyAutomationSystem();
  const command = process.argv[2];
  
  switch (command) {
    case 'start':
      system.startRedundancyMonitoring();
      break;
    case 'status':
      console.log(JSON.stringify(system.getStatus(), null, 2));
      break;
    case 'health':
      system.checkOverallHealth().then(result => {
        console.log(JSON.stringify(result, null, 2));
      });
      break;
    case 'backup':
      system.createRedundancyBackups().then(result => {
        console.log(result ? 'Backups created successfully' : 'Backup failed');
      });
      break;
    case 'pm2':
      system.checkPM2Redundancy().then(result => {
        console.log(JSON.stringify(result, null, 2));
      });
      break;
    case 'github':
      system.checkGitHubActionsRedundancy().then(result => {
        console.log(JSON.stringify(result, null, 2));
      });
      break;
    case 'netlify':
      system.checkNetlifyFunctionsRedundancy().then(result => {
        console.log(JSON.stringify(result, null, 2));
      });
      break;
    default:
      console.log(`
Comprehensive Redundancy Automation System

Usage: node comprehensive-redundancy-automation-system.cjs <command>

Commands:
  start     - Start redundancy monitoring
  status    - Show system status
  health    - Check overall health
  backup    - Create redundancy backups
  pm2       - Check PM2 redundancy
  github    - Check GitHub Actions redundancy
  netlify   - Check Netlify Functions redundancy

Examples:
  node comprehensive-redundancy-automation-system.cjs start
  node comprehensive-redundancy-automation-system.cjs status
      `);
  }
}

module.exports = ComprehensiveRedundancyAutomationSystem;