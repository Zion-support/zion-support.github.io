#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AutomationOrchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, 'logs');
    this.reportsDir = path.join(this.projectRoot, 'reports');
    this.automations = {};
    
    this.setupDirectories();
    this.loadAutomations();
  }

  setupDirectories() {
    [this.logsDir, this.reportsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  loadAutomations() {
    // Load automation modules
    try {
      this.automations.errorPrevention = require('./error-prevention-automation.cjs');
      this.automations.typescriptFix = require('./typescript-fix-automation.cjs');
      this.automations.lintingFix = require('./linting-fix-automation.cjs');
    } catch (error) {
      console.warn('Some automation modules could not be loaded:', error.message);
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    const logFile = path.join(this.logsDir, 'automation-orchestrator.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  async runFullProjectFix() {
    this.log('🚀 Starting Full Project Error Fix Automation...');
    
    const results = {
      timestamp: new Date().toISOString(),
      phases: [],
      summary: {
        totalErrors: 0,
        totalFixed: 0,
        success: false
      }
    };

    try {
      // Phase 1: Fix package.json syntax
      this.log('📦 Phase 1: Fixing package.json syntax...');
      const packageJsonResult = await this.fixPackageJson();
      results.phases.push({
        name: 'package.json-fix',
        ...packageJsonResult
      });

      // Phase 2: TypeScript syntax fixes
      this.log('🔧 Phase 2: Fixing TypeScript syntax errors...');
      if (this.automations.typescriptFix) {
        const tsAutomation = new this.automations.typescriptFix();
        const tsResult = await tsAutomation.run();
        results.phases.push({
          name: 'typescript-fix',
          ...tsResult
        });
      }

      // Phase 3: Linting fixes
      this.log('🧹 Phase 3: Fixing linting errors...');
      if (this.automations.lintingFix) {
        const lintAutomation = new this.automations.lintingFix();
        const lintResult = await lintAutomation.run();
        results.phases.push({
          name: 'linting-fix',
          ...lintResult
        });
      }

      // Phase 4: Final validation
      this.log('✅ Phase 4: Final validation...');
      const validationResult = await this.runFinalValidation();
      results.phases.push({
        name: 'final-validation',
        ...validationResult
      });

      // Calculate summary
      results.summary = this.calculateSummary(results.phases);
      
      // Generate comprehensive report
      const report = this.generateComprehensiveReport(results);
      
      this.log('🎉 Full Project Error Fix Automation completed!');
      this.log(`📊 Summary: ${results.summary.totalFixed} errors fixed, ${results.summary.totalErrors} total errors`);
      
      if (results.summary.success) {
        this.log('✅ Project is now error-free!');
      } else {
        this.log('⚠️  Some errors remain - check the report for details');
      }
      
      return report;
      
    } catch (error) {
      this.log(`❌ Fatal error during automation: ${error.message}`, 'ERROR');
      results.error = error.message;
      throw error;
    }
  }

  async fixPackageJson() {
    try {
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      const content = fs.readFileSync(packageJsonPath, 'utf8');
      
      // Check if package.json is valid
      try {
        JSON.parse(content);
        return { success: true, message: 'package.json is already valid', fixed: 0 };
      } catch (parseError) {
        this.log('package.json has syntax errors, attempting to fix...');
        
        // Create backup
        const backupPath = packageJsonPath + '.backup';
        fs.copyFileSync(packageJsonPath, backupPath);
        
        // Apply fixes
        let fixedContent = content;
        let fixCount = 0;
        
        // Fix common issues
        const fixes = [
          { pattern: /\/\/.*$/gm, replacement: '' }, // Remove comments
          { pattern: /,\s*}/g, replacement: '}' }, // Remove trailing commas
          { pattern: /,\s*]/g, replacement: ']' }  // Remove trailing commas in arrays
        ];
        
        for (const fix of fixes) {
          const beforeCount = (fixedContent.match(fix.pattern) || []).length;
          fixedContent = fixedContent.replace(fix.pattern, fix.replacement);
          const afterCount = (fixedContent.match(fix.pattern) || []).length;
          fixCount += beforeCount - afterCount;
        }
        
        // Validate the fixed content
        try {
          JSON.parse(fixedContent);
          fs.writeFileSync(packageJsonPath, fixedContent, 'utf8');
          return { success: true, message: 'package.json syntax fixed', fixed: fixCount };
        } catch (validationError) {
          // Restore backup if fix failed
          fs.copyFileSync(backupPath, packageJsonPath);
          return { success: false, message: 'Failed to fix package.json syntax', error: validationError.message };
        }
      }
    } catch (error) {
      return { success: false, message: 'Error processing package.json', error: error.message };
    }
  }

  async runFinalValidation() {
    const validation = {
      typescript: false,
      linting: false,
      build: false,
      errors: []
    };

    try {
      // TypeScript check
      this.log('Running TypeScript validation...');
      try {
        execSync('npx tsc --noEmit --pretty', { 
          encoding: 'utf8', 
          cwd: this.projectRoot,
          stdio: 'pipe'
        });
        validation.typescript = true;
        this.log('✅ TypeScript validation passed');
      } catch (error) {
        if (error.stdout) {
          validation.errors.push({
            type: 'typescript',
            count: this.countTypeScriptErrors(error.stdout),
            output: error.stdout
          });
        }
        this.log('❌ TypeScript validation failed');
      }

      // Linting check
      this.log('Running linting validation...');
      try {
        execSync('npx eslint . --format=json', { 
          encoding: 'utf8', 
          cwd: this.projectRoot,
          stdio: 'pipe'
        });
        validation.linting = true;
        this.log('✅ Linting validation passed');
      } catch (error) {
        if (error.stdout) {
          validation.errors.push({
            type: 'linting',
            count: this.countLintingErrors(error.stdout),
            output: error.stdout
          });
        }
        this.log('❌ Linting validation failed');
      }

      // Build check
      this.log('Running build validation...');
      try {
        execSync('npm run build', { 
          encoding: 'utf8', 
          cwd: this.projectRoot,
          stdio: 'pipe',
          timeout: 60000 // 1 minute timeout
        });
        validation.build = true;
        this.log('✅ Build validation passed');
      } catch (error) {
        validation.errors.push({
          type: 'build',
          count: 1,
          output: error.message
        });
        this.log('❌ Build validation failed');
      }

    } catch (error) {
      validation.errors.push({
        type: 'validation',
        count: 1,
        output: error.message
      });
    }

    return validation;
  }

  countTypeScriptErrors(output) {
    return (output.match(/error TS/g) || []).length;
  }

  countLintingErrors(output) {
    try {
      const results = JSON.parse(output);
      return results.reduce((total, file) => total + file.messages.length, 0);
    } catch (e) {
      return 0;
    }
  }

  calculateSummary(phases) {
    let totalErrors = 0;
    let totalFixed = 0;
    let success = true;

    for (const phase of phases) {
      if (phase.name === 'final-validation') {
        // Count remaining errors from validation
        for (const error of phase.errors || []) {
          totalErrors += error.count;
        }
        success = totalErrors === 0;
      } else if (phase.summary) {
        // Count fixed errors from automation phases
        if (phase.summary.totalFixes) totalFixed += phase.summary.totalFixes;
        if (phase.summary.manuallyFixed) totalFixed += phase.summary.manuallyFixed;
      }
    }

    return { totalErrors, totalFixed, success };
  }

  generateComprehensiveReport(results) {
    const report = {
      ...results,
      recommendations: this.generateRecommendations(results),
      nextSteps: this.generateNextSteps(results)
    };

    const reportPath = path.join(this.reportsDir, `comprehensive-fix-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📋 Comprehensive report generated: ${reportPath}`);
    return report;
  }

  generateRecommendations(results) {
    const recommendations = [];
    
    if (!results.summary.success) {
      recommendations.push({
        priority: 'high',
        message: 'Project still has errors - review the validation phase for details',
        action: 'review_remaining_errors'
      });
    }

    // Check each phase for specific recommendations
    for (const phase of results.phases) {
      if (phase.recommendations) {
        recommendations.push(...phase.recommendations);
      }
    }

    if (results.summary.totalFixed > 0) {
      recommendations.push({
        priority: 'medium',
        message: 'Review all automated fixes to ensure they are correct',
        action: 'review_automated_fixes'
      });
    }

    return recommendations;
  }

  generateNextSteps(results) {
    const nextSteps = [];
    
    if (results.summary.success) {
      nextSteps.push({
        step: 1,
        action: 'Run tests to ensure functionality is preserved',
        command: 'npm test'
      });
      
      nextSteps.push({
        step: 2,
        action: 'Commit the fixes',
        command: 'git add . && git commit -m "Automated error fixes"'
      });
      
      nextSteps.push({
        step: 3,
        action: 'Deploy if ready',
        command: 'npm run deploy:staging'
      });
    } else {
      nextSteps.push({
        step: 1,
        action: 'Review remaining errors in the validation phase',
        command: 'npm run type-check && npm run lint'
      });
      
      nextSteps.push({
        step: 2,
        action: 'Manually fix remaining issues',
        command: 'Review error output and fix manually'
      });
      
      nextSteps.push({
        step: 3,
        action: 'Re-run validation',
        command: 'npm run type-check && npm run lint'
      });
    }

    return nextSteps;
  }

  async runSpecificAutomation(automationName, command) {
    if (!this.automations[automationName]) {
      throw new Error(`Automation '${automationName}' not found`);
    }

    const automation = new this.automations[automationName]();
    
    switch (command) {
      case 'run':
        return await automation.run();
      case 'scan':
        return await automation.scanForErrors ? await automation.scanForErrors() : await automation.scanTypeScriptFiles();
      case 'check':
        return await automation.runTypeScriptCheck ? await automation.runTypeScriptCheck() : await automation.runLintingCheck();
      default:
        throw new Error(`Unknown command '${command}' for automation '${automationName}'`);
    }
  }

  async run() {
    this.log('🎯 Automation Orchestrator starting...');
    
    try {
      const report = await this.runFullProjectFix();
      
      // Print summary to console
      console.log('\n' + '='.repeat(60));
      console.log('🎉 AUTOMATION COMPLETION SUMMARY');
      console.log('='.repeat(60));
      console.log(`📊 Total Errors Fixed: ${report.summary.totalFixed}`);
      console.log(`📊 Remaining Errors: ${report.summary.totalErrors}`);
      console.log(`✅ Success: ${report.summary.success ? 'YES' : 'NO'}`);
      console.log('='.repeat(60));
      
      if (report.nextSteps && report.nextSteps.length > 0) {
        console.log('\n📋 NEXT STEPS:');
        report.nextSteps.forEach(step => {
          console.log(`${step.step}. ${step.action}`);
          if (step.command) {
            console.log(`   Command: ${step.command}`);
          }
        });
      }
      
      return report;
      
    } catch (error) {
      this.log(`❌ Orchestrator failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// CLI interface
if (require.main === module) {
  const orchestrator = new AutomationOrchestrator();
  
  const command = process.argv[2];
  const automation = process.argv[3];
  const subCommand = process.argv[4];
  
  switch (command) {
    case 'run':
      orchestrator.run().then(report => {
        process.exit(0);
      }).catch(error => {
        console.error('❌ Error:', error.message);
        process.exit(1);
      });
      break;
      
    case 'automation':
      if (!automation) {
        console.error('❌ Please specify an automation name');
        process.exit(1);
      }
      
      orchestrator.runSpecificAutomation(automation, subCommand || 'run').then(result => {
        console.log(JSON.stringify(result, null, 2));
        process.exit(0);
      }).catch(error => {
        console.error('❌ Error:', error.message);
        process.exit(1);
      });
      break;
      
    default:
      console.log(`
🎯 Automation Orchestrator

Usage:
  node automation-orchestrator.cjs [command] [options]

Commands:
  run                    - Run full project error fix automation
  automation <name>      - Run specific automation
  automation <name> scan - Scan for errors in specific automation
  automation <name> check - Check status in specific automation

Available Automations:
  - errorPrevention
  - typescriptFix
  - lintingFix

Examples:
  node automation-orchestrator.cjs run
  node automation-orchestrator.cjs automation typescriptFix
  node automation-orchestrator.cjs automation lintingFix scan
      `);
      process.exit(1);
  }
}

module.exports = AutomationOrchestrator;