#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ConfigurationValidator {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'config-validator.log');
    this.reportFile = path.join(this.projectRoot, 'reports', 'config-validation-report.json');
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    
    fs.appendFileSync(this.logFile, logMessage);
    console.log(logMessage.trim());
  }

  validateConfiguration() {
    this.log('Starting configuration validation...');
    
    const validationResults = {
      timestamp: new Date().toISOString(),
      checks: [],
      overall: 'PASS'
    };
    
    // Check package.json
    validationResults.checks.push(this.checkPackageJson());
    
    // Check TypeScript configuration
    validationResults.checks.push(this.checkTypeScriptConfig());
    
    // Check Next.js configuration
    validationResults.checks.push(this.checkNextConfig());
    
    // Check Tailwind configuration
    validationResults.checks.push(this.checkTailwindConfig());
    
    // Check for corrupted files
    validationResults.checks.push(this.checkForCorruptedFiles());
    
    // Determine overall status
    const failedChecks = validationResults.checks.filter(check => check.status === 'FAIL');
    if (failedChecks.length > 0) {
      validationResults.overall = 'FAIL';
    }
    
    // Save report
    fs.writeFileSync(this.reportFile, JSON.stringify(validationResults, null, 2));
    
    this.log(`Configuration validation completed: ${validationResults.overall}`);
    return validationResults;
  }

  checkPackageJson() {
    const check = { name: 'package.json', status: 'PASS', issues: [] };
    
    try {
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      if (!fs.existsSync(packageJsonPath)) {
        check.status = 'FAIL';
        check.issues.push('package.json not found');
        return check;
      }
      
      const content = fs.readFileSync(packageJsonPath, 'utf8');
      const packageJson = JSON.parse(content);
      
      if (!packageJson.scripts) {
        check.status = 'FAIL';
        check.issues.push('No scripts defined');
      }
      
      if (!packageJson.dependencies && !packageJson.devDependencies) {
        check.status = 'FAIL';
        check.issues.push('No dependencies defined');
      }
      
    } catch (error) {
      check.status = 'FAIL';
      check.issues.push(`Parse error: ${error.message}`);
    }
    
    return check;
  }

  checkTypeScriptConfig() {
    const check = { name: 'TypeScript Config', status: 'PASS', issues: [] };
    
    try {
      const tsConfigPath = path.join(this.projectRoot, 'tsconfig.json');
      if (!fs.existsSync(tsConfigPath)) {
        check.status = 'FAIL';
        check.issues.push('tsconfig.json not found');
        return check;
      }
      
      const content = fs.readFileSync(tsConfigPath, 'utf8');
      const tsConfig = JSON.parse(content);
      
      if (!tsConfig.compilerOptions) {
        check.status = 'FAIL';
        check.issues.push('No compiler options defined');
      }
      
    } catch (error) {
      check.status = 'FAIL';
      check.issues.push(`Parse error: ${error.message}`);
    }
    
    return check;
  }

  checkNextConfig() {
    const check = { name: 'Next.js Config', status: 'PASS', issues: [] };
    
    try {
      const nextConfigPath = path.join(this.projectRoot, 'next.config.js');
      if (!fs.existsSync(nextConfigPath)) {
        check.status = 'FAIL';
        check.issues.push('next.config.js not found');
        return check;
      }
      
      const content = fs.readFileSync(nextConfigPath, 'utf8');
      
      if (content.includes('module.exports')) {
        check.status = 'FAIL';
        check.issues.push('Using CommonJS syntax in ES module project');
      }
      
    } catch (error) {
      check.status = 'FAIL';
      check.issues.push(`Read error: ${error.message}`);
    }
    
    return check;
  }

  checkTailwindConfig() {
    const check = { name: 'Tailwind Config', status: 'PASS', issues: [] };
    
    try {
      const tailwindConfigPath = path.join(this.projectRoot, 'tailwind.config.js');
      if (!fs.existsSync(tailwindConfigPath)) {
        check.status = 'FAIL';
        check.issues.push('tailwind.config.js not found');
        return check;
      }
      
      const content = fs.readFileSync(tailwindConfigPath, 'utf8');
      
      if (content.includes('import React')) {
        check.status = 'FAIL';
        check.issues.push('Contains React imports (corrupted)');
      }
      
      if (content.includes('module.exports')) {
        check.status = 'FAIL';
        check.issues.push('Using CommonJS syntax in ES module project');
      }
      
    } catch (error) {
      check.status = 'FAIL';
      check.issues.push(`Read error: ${error.message}`);
    }
    
    return check;
  }

  checkForCorruptedFiles() {
    const check = { name: 'Source Files', status: 'PASS', issues: [] };
    
    try {
      const sourceDirs = ['src', 'pages', 'components'];
      let corruptedCount = 0;
      
      sourceDirs.forEach(dir => {
        const dirPath = path.join(this.projectRoot, dir);
        if (fs.existsSync(dirPath)) {
          corruptedCount += this.countCorruptedFiles(dirPath);
        }
      });
      
      if (corruptedCount > 0) {
        check.status = 'FAIL';
        check.issues.push(`Found ${corruptedCount} corrupted files`);
      }
      
    } catch (error) {
      check.status = 'FAIL';
      check.issues.push(`Scan error: ${error.message}`);
    }
    
    return check;
  }

  countCorruptedFiles(dirPath) {
    let count = 0;
    
    try {
      const files = fs.readdirSync(dirPath);
      
      files.forEach(file => {
        const filePath = path.join(dirPath, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
          count += this.countCorruptedFiles(filePath);
        } else if (file.match(/\.(tsx?|jsx?)$/)) {
          try {
            const content = fs.readFileSync(filePath, 'utf8');
            if (content.includes('import') && content.includes('export') && content.includes('{')) {
              if (content.split('{').length !== content.split('}').length) {
                count++;
              }
            }
          } catch (error) {
            count++;
          }
        }
      });
    } catch (error) {
      // Directory access error
    }
    
    return count;
  }

  run() {
    this.log('Configuration Validator started');
    
    // Run validation
    const results = this.validateConfiguration();
    
    // Log results
    this.log(`Validation completed: ${results.overall}`);
    results.checks.forEach(check => {
      if (check.status === 'FAIL') {
        this.log(`❌ ${check.name}: ${check.issues.join(', ')}`);
      } else {
        this.log(`✅ ${check.name}: Passed`);
      }
    });
    
    this.log('Configuration Validator completed');
  }
}

// Start the validator
const validator = new ConfigurationValidator();
validator.run();
