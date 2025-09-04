#!/usr/bin/env node

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class TypeChecker {
  constructor() {
    this.isRunning = false;
    this.interval = 120000; // 2 minutes
  }

  async start() {
    console.log('Starting Type Checker...');
    this.isRunning = true;
    
    // Initial type check
    await this.runTypeCheck();
    
    // Set up interval for periodic checks
    this.intervalId = setInterval(() => {
      this.runTypeCheck();
    }, this.interval);
    
    console.log('Type Checker started successfully');
  }

  async runTypeCheck() {
    try {
      console.log('Running TypeScript type check...');
      
      const child = spawn('npm', ['run', 'type-check'], {
        stdio: ['pipe', 'pipe', 'pipe'],
        cwd: process.cwd()
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
          console.log('Type check passed ✓');
        } else {
          console.log('Type check failed ✗');
          console.log('Output:', output);
          console.log('Errors:', errorOutput);
          
          // Log type errors for manual review
          this.logTypeErrors(output + errorOutput);
        }
      });
    } catch (error) {
      console.error('Error running type check:', error.message);
    }
  }

  logTypeErrors(errorOutput) {
    const lines = errorOutput.split('\n');
    const typeErrors = lines.filter(line => 
      line.includes('error TS') || line.includes('Type error')
    );
    
    if (typeErrors.length > 0) {
      console.log('TypeScript errors found:');
      typeErrors.forEach(error => {
        console.log(`  ${error}`);
      });
    }
  }

  stop() {
    console.log('Stopping Type Checker...');
    this.isRunning = false;
    
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    
    console.log('Type Checker stopped');
  }
}

// Start the checker if run directly
if (require.main === module) {
  const checker = new TypeChecker();
  
  // Handle graceful shutdown
  process.on('SIGINT', () => {
    checker.stop();
    process.exit(0);
  });
  
  process.on('SIGTERM', () => {
    checker.stop();
    process.exit(0);
  });
  
  checker.start().catch(console.error);
}

module.exports = TypeChecker;