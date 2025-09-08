#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

class ErrorPreventionOrchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'reports');
    this.startTime = Date.now();
    this.results = {
      totalErrorsFixed: 0,
      totalFilesProcessed: 0,
      orchestrationsCompleted: 0,
      success: false
    };
    
    // Ensure reports directory exists
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
    
    // Define the order of execution for error fixers
    this.errorFixerOrder = [
      'syntax-error-fixer',
      'eslint-error-fixer', 
      'typescript-error-fixer',
      'build-error-fixer',
      'dependency-error-fixer'
    ];
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Error Prevention Orchestrator: ${message}`);
  }

  async runErrorFixer(fixerName) {
    this.log(`Starting ${fixerName}...`);
    
    return new Promise((resolve, reject) => {
      const fixerPath = path.join(this.projectRoot, 'scripts', 'automation', `${fixerName}.cjs`);
      
      if (!fs.existsSync(fixerPath)) {
        this.log(`Warning: ${fixerName} script not found, skipping...`);
        resolve({ success: false, skipped: true });
        return;
      }
      
      const child = spawn('node', [fixerPath], {
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      let output = '';
      let errorOutput = '';
      
      child.stdout.on('data', (data) => {
        output += data.toString();
      });
      
      child.stderr.on('data', (data) => {
        errorOutput += data.toString();
      });
      
      child.on('close', (code) => {
        if (code === 0) {
          this.log(`${fixerName} completed successfully`);
          resolve({ success: true, output, errorOutput });
        } else {
          this.log(`${fixerName} failed with exit code ${code}`);
          resolve({ success: false, output, errorOutput, exitCode: code });
        }
      });
      
      child.on('error', (error) => {
        this.log(`${fixerName} encountered an error: ${error.message}`);
        reject(error);
      });
      
      // Set a timeout for each fixer
      setTimeout(() => {
        child.kill();
        this.log(`${fixerName} timed out, moving to next fixer`);
        resolve({ success: false, output, errorOutput, timeout: true });
      }, 300000); // 5 minutes timeout
    });
  }

  async runSequentialErrorFixers() {
    this.log('Running error fixers in sequence...');
    
    const results = {};
    let totalErrorsFixed = 0;
    let totalFilesProcessed = 0;
    
    for (const fixerName of this.errorFixerOrder) {
      try {
        const result = await this.runErrorFixer(fixerName);
        results[fixerName] = result;
        
        if (result.success && !result.skipped) {
          // Try to extract results from the fixer's report
          const reportPath = path.join(this.reportsDir, `${fixerName.replace('-', '-')}-report.json`);
          if (fs.existsSync(reportPath)) {
            try {
              const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
              if (report.results) {
                totalErrorsFixed += report.results.errorsFixed || report.results.syntaxErrorsFixed || report.results.buildErrorsFixed || 0;
                totalFilesProcessed += report.results.filesProcessed || 0;
              }
            } catch (parseError) {
              this.log(`Failed to parse report for ${fixerName}: ${parseError.message}`);
            }
          }
        }
        
        // Small delay between fixers to avoid overwhelming the system
        await this.delay(2000);
        
      } catch (error) {
        this.log(`Error running ${fixerName}: ${error.message}`);
        results[fixerName] = { success: false, error: error.message };
      }
    }
    
    this.results.totalErrorsFixed = totalErrorsFixed;
    this.results.totalFilesProcessed = totalFilesProcessed;
    
    return results;
  }

  async runParallelErrorFixers() {
    this.log('Running error fixers in parallel...');
    
    const promises = this.errorFixerOrder.map(fixerName => 
      this.runErrorFixer(fixerName).catch(error => ({
        success: false,
        error: error.message,
        fixerName
      }))
    );
    
    const results = await Promise.allSettled(promises);
    
    // Process results
    const processedResults = {};
    let totalErrorsFixed = 0;
    let totalFilesProcessed = 0;
    
    results.forEach((result, index) => {
      const fixerName = this.errorFixerOrder[index];
      if (result.status === 'fulfilled') {
        processedResults[fixerName] = result.value;
        
        if (result.value.success && !result.value.skipped) {
          // Extract results from report
          const reportPath = path.join(this.reportsDir, `${fixerName.replace('-', '-')}-report.json`);
          if (fs.existsSync(reportPath)) {
            try {
              const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
              if (report.results) {
                totalErrorsFixed += report.results.errorsFixed || report.results.syntaxErrorsFixed || report.results.buildErrorsFixed || 0;
                totalFilesProcessed += report.results.filesProcessed || 0;
              }
            } catch (parseError) {
              this.log(`Failed to parse report for ${fixerName}: ${parseError.message}`);
            }
          }
        }
      } else {
        processedResults[fixerName] = { success: false, error: result.reason.message };
      }
    });
    
    this.results.totalErrorsFixed = totalErrorsFixed;
    this.results.totalFilesProcessed = totalFilesProcessed;
    
    return processedResults;
  }

  async delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async assessProjectHealth() {
    this.log('Assessing overall project health...');
    
    try {
      // Run a quick health check
      const healthChecks = [
        this.checkLintHealth(),
        this.checkTypeScriptHealth(),
        this.checkBuildHealth()
      ];
      
      const results = await Promise.allSettled(healthChecks);
      const healthScore = results.filter(r => r.status === 'fulfilled' && r.value).length / healthChecks.length;
      
      this.log(`Project health score: ${Math.round(healthScore * 100)}%`);
      return healthScore;
      
    } catch (error) {
      this.log(`Health assessment failed: ${error.message}`);
      return 0;
    }
  }

  async checkLintHealth() {
    try {
      const { execSync } = require('child_process');
      execSync('npm run lint', { stdio: 'pipe' });
      return true;
    } catch {
      return false;
    }
  }

  async checkTypeScriptHealth() {
    try {
      const { execSync } = require('child_process');
      execSync('npm run type-check', { stdio: 'pipe' });
      return true;
    } catch {
      return false;
    }
  }

  async checkBuildHealth() {
    try {
      const { execSync } = require('child_process');
      execSync('npm run build', { stdio: 'pipe' });
      return true;
    } catch {
      return false;
    }
  }

  async generateOrchestrationReport(results) {
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      orchestratorResults: this.results,
      individualResults: results,
      summary: {
        totalFixersRun: this.errorFixerOrder.length,
        successfulFixers: Object.values(results).filter(r => r.success && !r.skipped).length,
        totalErrorsFixed: this.results.totalErrorsFixed,
        totalFilesProcessed: this.results.totalFilesProcessed,
        successRate: `${Math.round((Object.values(results).filter(r => r.success && !r.skipped).length / this.errorFixerOrder.length) * 100)}%`,
        efficiency: `Orchestration completed in ${Math.round((Date.now() - this.startTime) / 1000)}s`
      }
    };
    
    const reportPath = path.join(this.reportsDir, 'error-prevention-orchestrator-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Orchestration report generated: ${reportPath}`);
    return report;
  }

  async run() {
    this.log('Starting Error Prevention Orchestrator...');
    
    try {
      // Assess initial project health
      const initialHealth = await this.assessProjectHealth();
      this.log(`Initial project health: ${Math.round(initialHealth * 100)}%`);
      
      // Run error fixers (choose between sequential or parallel)
      const useParallel = process.env.USE_PARALLEL === 'true';
      const results = useParallel ? 
        await this.runParallelErrorFixers() : 
        await this.runSequentialErrorFixers();
      
      // Assess final project health
      const finalHealth = await this.assessProjectHealth();
      this.log(`Final project health: ${Math.round(finalHealth * 100)}%`);
      
      // Determine overall success
      this.results.success = finalHealth > initialHealth || this.results.totalErrorsFixed > 0;
      this.results.orchestrationsCompleted = 1;
      
      // Generate comprehensive report
      await this.generateOrchestrationReport(results);
      
      this.log(`Error Prevention Orchestrator completed. Overall success: ${this.results.success}`);
      this.log(`Total errors fixed: ${this.results.totalErrorsFixed}, Files processed: ${this.results.totalFilesProcessed}`);
      
      return this.results;
      
    } catch (error) {
      this.log(`Error Prevention Orchestrator failed: ${error.message}`);
      this.results.success = false;
      return this.results;
    }
  }
  {/* Removed stray closing brace */}

// Run the orchestrator if called directly
if (require.main === module) {
  const orchestrator = new ErrorPreventionOrchestrator();
  orchestrator.run().then(results => {
    process.exit(results.success ? 0 : 1);
  }).catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
  {/* Removed stray closing brace */}

module.exports = ErrorPreventionOrchestrator;