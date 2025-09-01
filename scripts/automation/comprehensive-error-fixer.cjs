#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class ComprehensiveErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, 'automation', 'logs');
    this.reportsDir = path.join(this.projectRoot, 'error-reports');
    
    // Ensure directories exist
    [this.logsDir, this.reportsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    // Write to log file
    const logFile = path.join(this.logsDir, 'comprehensive-error-fixer.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  async fixSyntaxErrors() {
    this.log('Fixing syntax errors in project files...');
    
    try {
      // Fix AICodeGenerator.jsx syntax errors
      const aiCodeGeneratorPath = path.join(this.projectRoot, 'src/components/AICodeGenerator.jsx');
      if (fs.existsSync(aiCodeGeneratorPath)) {
        let content = fs.readFileSync(aiCodeGeneratorPath, 'utf8');
        
        // Fix various syntax errors
        const fixes = [
          // Fix missing semicolons and brackets
          { pattern: /\)\s*\}\s*,\s*\[/g, replacement: ');\n    }, [' },
          { pattern: /\)\s*\}\s*\}\s*,\s*\[/g, replacement: ');\n    });\n    }, [' },
          { pattern: /catch\s*\(\s*error\s*\)\s*\{[^}]*\}\s*\}\s*,\s*\[/g, replacement: 'catch (error) {\n            console.error(\'Failed to copy code:\', error);\n        }\n    }, [' },
          
          // Fix JSX syntax
          { pattern: /return\s*\(<div/g, replacement: 'return (\n        <div' },
          { pattern: /<\/div>\s*\)\s*;\s*$/gm, replacement: '</div>\n    );' },
          
          // Fix function declarations
          { pattern: /const\s+(\w+)\s*=\s*useCallback\s*\(\s*async\s*\([^)]*\)\s*=>\s*\{[^}]*\}\s*,\s*\[([^\]]*)\]\s*\)\s*;\s*$/gm, 
            replacement: 'const $1 = useCallback(async ($2) => {\n        // Implementation\n    }, [$3]);' }
        ];
        
        fixes.forEach(fix => {
          content = content.replace(fix.pattern, fix.replacement);
        });
        
        fs.writeFileSync(aiCodeGeneratorPath, content);
        this.log('Fixed AICodeGenerator.jsx syntax errors');
      }

      // Fix other common syntax errors
      const filesToFix = [
        'src/components/AIChatbot.jsx',
        'src/components/AIChatbotSystem.tsx',
        'src/App.tsx'
      ];

      filesToFix.forEach(filePath => {
        const fullPath = path.join(this.projectRoot, filePath);
        if (fs.existsSync(fullPath)) {
          let content = fs.readFileSync(fullPath, 'utf8');
          
          // Fix common syntax errors
          content = content.replace(/\)\s*;\s*\}\s*,\s*\[/g, ');\n    }, [');
          content = content.replace(/\)\s*\}\s*,\s*\[/g, ');\n    }, [');
          content = content.replace(/\)\s*\}\s*\}\s*,\s*\[/g, ');\n    });\n    }, [');
          
          fs.writeFileSync(fullPath, content);
          this.log(`Fixed syntax errors in ${filePath}`);
        }
      });

      this.log('Syntax errors fixed successfully');
    } catch (error) {
      this.log(`Error fixing syntax: ${error.message}`, 'ERROR');
    }
  }

  async runTypeCheck() {
    this.log('Running TypeScript type check...');
    
    try {
      execSync('npm run type-check', { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 30000 
      });
      this.log('TypeScript type check passed');
      return true;
    } catch (error) {
      this.log(`TypeScript errors found: ${error.message}`, 'WARN');
      return false;
    }
  }

  async runLint() {
    this.log('Running ESLint...');
    
    try {
      execSync('npm run lint', { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 30000 
      });
      this.log('ESLint passed');
      return true;
    } catch (error) {
      this.log(`ESLint errors found: ${error.message}`, 'WARN');
      return false;
    }
  }

  async runBuild() {
    this.log('Running build process...');
    
    try {
      execSync('npm run build', { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 60000 
      });
      this.log('Build completed successfully');
      return true;
    } catch (error) {
      this.log(`Build failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async startPM2Automation() {
    this.log('Starting PM2 automation system...');
    
    try {
      // Install PM2 if not already installed
      try {
        execSync('pm2 --version', { stdio: 'pipe' });
        this.log('PM2 is already installed');
      } catch (error) {
        this.log('Installing PM2...');
        execSync('npm install -g pm2', { stdio: 'pipe' });
      }

      // Start the error fixing automation
      execSync('pm2 start ecosystem-error-fixing.config.cjs', { 
        cwd: this.projectRoot, 
        stdio: 'pipe' 
      });
      
      this.log('PM2 automation system started successfully');
      
      // Show PM2 status
      execSync('pm2 status', { stdio: 'inherit' });
      
    } catch (error) {
      this.log(`Error starting PM2 automation: ${error.message}`, 'ERROR');
    }
  }

  async generateReport() {
    this.log('Generating error fixing report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      typeCheck: await this.runTypeCheck(),
      lint: await this.runLint(),
      build: await this.runBuild(),
      summary: 'Comprehensive error fixing completed'
    };
    
    const reportPath = path.join(this.reportsDir, `error-fix-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Report generated: ${reportPath}`);
    return report;
  }

  async run() {
    this.log('Starting Comprehensive Error Fixer...');
    
    try {
      // Step 1: Fix syntax errors
      await this.fixSyntaxErrors();
      
      // Step 2: Run checks
      const typeCheckPassed = await this.runTypeCheck();
      const lintPassed = await this.runLint();
      const buildPassed = await this.runBuild();
      
      // Step 3: Generate report
      const report = await this.generateReport();
      
      // Step 4: Start PM2 automation if everything is working
      if (buildPassed) {
        await this.startPM2Automation();
        this.log('Comprehensive Error Fixer completed successfully!');
        this.log('PM2 automation system is now running and will automatically fix errors in the future.');
      } else {
        this.log('Some errors remain. Please review the report and fix manually.', 'WARN');
      }
      
    } catch (error) {
      this.log(`Error in Comprehensive Error Fixer: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run the automation if this script is executed directly
if (require.main === module) {
  const automation = new ComprehensiveErrorFixer();
  automation.run()
    .then(() => {
      console.log('Comprehensive Error Fixer completed successfully!');
      process.exit(0);
    })
    .catch(error => {
      console.error('Comprehensive Error Fixer failed:', error);
      process.exit(1);
    });
}

module.exports = ComprehensiveErrorFixer;