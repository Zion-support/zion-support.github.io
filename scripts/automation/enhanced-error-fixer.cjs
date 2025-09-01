#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const glob = require('glob');

class EnhancedErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.errors = [];
    this.fixes = [];
    this.report = {
      timestamp: new Date().toISOString(),
      errorsFound: 0,
      errorsFixed: 0,
      warnings: [],
      details: []
    };
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${type.toUpperCase()}] ${message}`);
  }

  async run() {
    this.log('Starting Enhanced Error Fixer...', 'info');
    
    try {
      await this.checkAndFixESLintConfig();
      await this.checkAndFixTypeScriptErrors();
      await this.checkAndFixMissingImports();
      await this.checkAndFixBuildErrors();
      await this.checkAndFixPackageJsonIssues();
      await this.checkAndFixFileExtensions();
      await this.generateReport();
      
      this.log(`Error fixing completed. Fixed ${this.report.errorsFixed} out of ${this.report.errorsFound} errors.`, 'success');
    } catch (error) {
      this.log(`Error during fixing process: ${error.message}`, 'error');
      this.report.errors.push(error.message);
    }
  }

  async checkAndFixESLintConfig() {
    this.log('Checking ESLint configuration...', 'info');
    
    const eslintConfigPath = path.join(this.projectRoot, '.eslintrc.js');
    const packageJsonPath = path.join(this.projectRoot, 'package.json');
    
    try {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      const eslintConfig = fs.readFileSync(eslintConfigPath, 'utf8');
      
      // Check if package.json has "type": "module" but ESLint config uses CommonJS
      if (packageJson.type === 'module' && eslintConfig.includes('module.exports')) {
        this.log('Fixing ESLint config for ES modules...', 'info');
        
        const fixedConfig = eslintConfig.replace('module.exports =', 'export default');
        fs.writeFileSync(eslintConfigPath, fixedConfig);
        
        this.report.errorsFixed++;
        this.report.details.push('Fixed ESLint config for ES modules');
      }
    } catch (error) {
      this.log(`ESLint config check failed: ${error.message}`, 'warning');
      this.report.warnings.push(`ESLint config check failed: ${error.message}`);
    }
  }

  async checkAndFixTypeScriptErrors() {
    this.log('Checking TypeScript errors...', 'info');
    
    try {
      const result = execSync('npx tsc --noEmit --pretty false', { 
        encoding: 'utf8', 
        cwd: this.projectRoot,
        stdio: ['pipe', 'pipe', 'pipe']
      });
      
      if (result.includes('error TS')) {
        this.report.errorsFound += (result.match(/error TS/g) || []).length;
        this.log(`Found TypeScript errors, attempting to fix...`, 'warning');
        
        await this.fixTypeScriptErrors(result);
      }
    } catch (error) {
      if (error.stdout) {
        const output = error.stdout.toString();
        this.report.errorsFound += (output.match(/error TS/g) || []).length;
        await this.fixTypeScriptErrors(output);
      }
    }
  }

  async fixTypeScriptErrors(output) {
    const errorLines = output.split('\n').filter(line => line.includes('error TS'));
    
    for (const errorLine of errorLines) {
      try {
        if (errorLine.includes('Property') && errorLine.includes('does not exist')) {
          await this.fixMissingPropertyError(errorLine);
        } else if (errorLine.includes('Cannot find module')) {
          await this.fixMissingModuleError(errorLine);
        } else if (errorLine.includes('Type') && errorLine.includes('is not assignable')) {
          await this.fixTypeMismatchError(errorLine);
        }
      } catch (error) {
        this.log(`Failed to fix TypeScript error: ${error.message}`, 'warning');
      }
    }
  }

  async fixMissingPropertyError(errorLine) {
    // Extract file path and property name from error
    const match = errorLine.match(/\.\/src\/(.+?):(\d+):(\d+)/);
    if (match) {
      const filePath = path.join(this.projectRoot, 'src', match[1]);
      const lineNum = parseInt(match[2]);
      
      if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8');
        const lines = content.split('\n');
        
        // Check if it's an import issue
        if (lines[lineNum - 1].includes('import') && lines[lineNum - 1].includes('from')) {
          // Try to fix by checking if the module exists and has the correct export
          const importMatch = lines[lineNum - 1].match(/from ['"](.+)['"]/);
          if (importMatch) {
            const modulePath = importMatch[1];
            await this.fixImportPath(filePath, lineNum, modulePath);
          }
        }
      }
    }
  }

  async fixMissingModuleError(errorLine) {
    const match = errorLine.match(/Cannot find module ['"](.+)['"]/);
    if (match) {
      const modulePath = match[1];
      const fileMatch = errorLine.match(/\.\/src\/(.+?):(\d+):(\d+)/);
      
      if (fileMatch) {
        const filePath = path.join(this.projectRoot, 'src', fileMatch[1]);
        const lineNum = parseInt(fileMatch[2]);
        
        await this.fixImportPath(filePath, lineNum, modulePath);
      }
    }
  }

  async fixImportPath(filePath, lineNum, modulePath) {
    if (!fs.existsSync(filePath)) return;
    
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    
    // Try to find the correct module path
    const possiblePaths = [
      modulePath,
      modulePath + '.tsx',
      modulePath + '.ts',
      modulePath + '.jsx',
      modulePath + '.js',
      modulePath + '/index.tsx',
      modulePath + '/index.ts',
      modulePath + '/index.jsx',
      modulePath + '/index.js'
    ];
    
    for (const possiblePath of possiblePaths) {
      const fullPath = path.resolve(path.dirname(filePath), possiblePath);
      if (fs.existsSync(fullPath)) {
        // Update the import statement
        const relativePath = path.relative(path.dirname(filePath), fullPath).replace(/\\/g, '/');
        lines[lineNum - 1] = lines[lineNum - 1].replace(
          /from ['"](.+)['"]/,
          `from '${relativePath.startsWith('.') ? relativePath : './' + relativePath}'`
        );
        
        fs.writeFileSync(filePath, lines.join('\n'));
        this.report.errorsFixed++;
        this.report.details.push(`Fixed import path in ${filePath}: ${modulePath} -> ${relativePath}`);
        break;
      }
    }
  }

  async fixTypeMismatchError(errorLine) {
    // This is a more complex fix that would require type analysis
    // For now, we'll just log it
    this.log(`Type mismatch error detected: ${errorLine}`, 'warning');
  }

  async checkAndFixMissingImports() {
    this.log('Checking for missing imports...', 'info');
    
    const tsxFiles = glob.sync('src/**/*.{tsx,ts}', { cwd: this.projectRoot });
    
    for (const file of tsxFiles) {
      const filePath = path.join(this.projectRoot, file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check for React imports in JSX files
      if (file.endsWith('.tsx') && content.includes('React') && !content.includes('import React')) {
        if (!content.includes('import * as React') && !content.includes('import React')) {
          const lines = content.split('\n');
          lines.unshift("import React from 'react';");
          fs.writeFileSync(filePath, lines.join('\n'));
          
          this.report.errorsFixed++;
          this.report.details.push(`Added React import to ${file}`);
        }
      }
    }
  }

  async checkAndFixBuildErrors() {
    this.log('Checking build errors...', 'info');
    
    try {
      execSync('npm run build', { 
        encoding: 'utf8', 
        cwd: this.projectRoot,
        stdio: ['pipe', 'pipe', 'pipe']
      });
    } catch (error) {
      if (error.stdout) {
        const output = error.stdout.toString();
        this.log(`Build errors found: ${output}`, 'warning');
        this.report.errorsFound += (output.match(/error/g) || []).length;
        
        // Try to fix common build errors
        await this.fixBuildErrors(output);
      }
    }
  }

  async fixBuildErrors(output) {
    // Fix common Next.js build errors
    if (output.includes('Cannot find module')) {
      await this.fixMissingModules();
    }
    
    if (output.includes('Property') && output.includes('does not exist')) {
      await this.fixMissingProperties();
    }
  }

  async fixMissingModules() {
    // Check for missing page files that are being imported
    const appFile = path.join(this.projectRoot, 'src', 'App.tsx');
    if (fs.existsSync(appFile)) {
      const content = fs.readFileSync(appFile, 'utf8');
      const importMatches = content.match(/import\(['"]([^'"]+)['"]\)/g);
      
      if (importMatches) {
        for (const match of importMatches) {
          const modulePath = match.match(/['"]([^'"]+)['"]/)[1];
          const fullPath = path.join(this.projectRoot, 'src', modulePath);
          
          if (!fs.existsSync(fullPath) && !fs.existsSync(fullPath + '.tsx') && 
              !fs.existsSync(fullPath + '.ts') && !fs.existsSync(fullPath + '.jsx') && 
              !fs.existsSync(fullPath + '.js')) {
            
            // Create a basic component file
            const dir = path.dirname(fullPath);
            if (!fs.existsSync(dir)) {
              fs.mkdirSync(dir, { recursive: true });
            }
            
            const componentName = path.basename(modulePath);
            const componentContent = `import React from 'react';

export default function ${componentName}() {
  return (
    <div>
      <h1>${componentName}</h1>
      <p>This component is under development.</p>
    </div>
  );
}`;
            
            fs.writeFileSync(fullPath + '.tsx', componentContent);
            this.report.errorsFixed++;
            this.report.details.push(`Created missing component: ${modulePath}.tsx`);
          }
        }
      }
    }
  }

  async fixMissingProperties() {
    // This would require more sophisticated analysis
    this.log('Missing properties detected - manual review required', 'warning');
  }

  async checkAndFixPackageJsonIssues() {
    this.log('Checking package.json issues...', 'info');
    
    const packageJsonPath = path.join(this.projectRoot, 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    // Check for missing dependencies
    const missingDeps = [];
    
    // Check if TypeScript is installed
    if (!packageJson.devDependencies?.typescript) {
      missingDeps.push('typescript');
    }
    
    // Check if ESLint is installed
    if (!packageJson.devDependencies?.eslint) {
      missingDeps.push('eslint');
    }
    
    if (missingDeps.length > 0) {
      this.log(`Installing missing dependencies: ${missingDeps.join(', ')}`, 'info');
      try {
        execSync(`npm install --save-dev ${missingDeps.join(' ')}`, { 
          cwd: this.projectRoot,
          stdio: 'inherit'
        });
        this.report.errorsFixed += missingDeps.length;
        this.report.details.push(`Installed missing dependencies: ${missingDeps.join(', ')}`);
      } catch (error) {
        this.log(`Failed to install dependencies: ${error.message}`, 'error');
      }
    }
  }

  async checkAndFixFileExtensions() {
    this.log('Checking file extensions...', 'info');
    
    // Check for .js files that should be .tsx or .ts
    const jsFiles = glob.sync('src/**/*.js', { cwd: this.projectRoot });
    
    for (const file of jsFiles) {
      const filePath = path.join(this.projectRoot, file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      // If file contains JSX, rename to .tsx
      if (content.includes('jsx') || content.includes('<') && content.includes('>')) {
        const newPath = filePath.replace('.js', '.tsx');
        fs.renameSync(filePath, newPath);
        
        this.report.errorsFixed++;
        this.report.details.push(`Renamed ${file} to ${file.replace('.js', '.tsx')} (contains JSX)`);
      }
    }
  }

  async generateReport() {
    const reportPath = path.join(this.projectRoot, 'enhanced-error-fixer-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(this.report, null, 2));
    
    this.log(`Report generated: ${reportPath}`, 'info');
    
    // Also create a human-readable summary
    const summaryPath = path.join(this.projectRoot, 'enhanced-error-fixer-summary.md');
    const summary = `# Enhanced Error Fixer Report

**Generated:** ${this.report.timestamp}

## Summary
- **Errors Found:** ${this.report.errorsFound}
- **Errors Fixed:** ${this.report.errorsFixed}
- **Warnings:** ${this.report.warnings.length}

## Details
${this.report.details.map(detail => `- ${detail}`).join('\n')}

## Warnings
${this.report.warnings.map(warning => `- ${warning}`).join('\n')}
`;
    
    fs.writeFileSync(summaryPath, summary);
    this.log(`Summary generated: ${summaryPath}`, 'info');
  }
}

// Run the error fixer
if (require.main === module) {
  const fixer = new EnhancedErrorFixer();
  fixer.run().catch(console.error);
}

module.exports = EnhancedErrorFixer;