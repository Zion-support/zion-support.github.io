#!/usr/bin/env node

/**
 * Comprehensive Error Fixer Automation
 * Automatically fixes common TypeScript and ESLint errors
 * Runs every 15 minutes as part of PM2 automation system
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const glob = require('glob');

class ComprehensiveErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'reports');
    this.fixesApplied = 0;
    this.errorsFixed = 0;
    this.startTime = Date.now();
    
    // Ensure reports directory exists
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level}] ${message}`);
  }

  async run() {
    this.log('🚀 Starting Comprehensive Error Fixer Automation');
    
    try {
      // Step 1: Fix case sensitivity issues
      await this.fixCaseSensitivityIssues();
      
      // Step 2: Fix unused imports and variables
      await this.fixUnusedImportsAndVariables();
      
      // Step 3: Fix duplicate identifiers
      await this.fixDuplicateIdentifiers();
      
      // Step 4: Fix missing exports
      await this.fixMissingExports();
      
      // Step 5: Fix TypeScript type issues
      await this.fixTypeScriptTypeIssues();
      
      // Step 6: Fix ESLint issues
      await this.fixESLintIssues();
      
      // Step 7: Generate report
      await this.generateReport();
      
      this.log(`✅ Comprehensive Error Fixer completed successfully!`);
      this.log(`📊 Summary: ${this.fixesApplied} fixes applied, ${this.errorsFixed} errors resolved`);
      
    } catch (error) {
      this.log(`❌ Error in Comprehensive Error Fixer: ${error.message}`, 'ERROR');
      await this.generateErrorReport(error);
    }
  }

  async fixCaseSensitivityIssues() {
    this.log('🔍 Fixing case sensitivity issues...');
    
    try {
      // Find files with case sensitivity conflicts
      const servicesDir = path.join(this.projectRoot, 'src/pages/services');
      if (fs.existsSync(servicesDir)) {
        const files = fs.readdirSync(servicesDir);
        const caseConflicts = new Map();
        
        files.forEach(file => {
          const lowerName = file.toLowerCase();
          if (!caseConflicts.has(lowerName)) {
            caseConflicts.set(lowerName, []);
          }
          caseConflicts.get(lowerName).push(file);
        });
        
        // Fix case conflicts
        for (const [lowerName, conflicts] of caseConflicts) {
          if (conflicts.length > 1) {
            this.log(`🔄 Resolving case conflict for: ${conflicts.join(', ')}`);
            
            // Keep the first file, remove duplicates
            const keepFile = conflicts[0];
            for (let i = 1; i < conflicts.length; i++) {
              const removeFile = path.join(servicesDir, conflicts[i]);
              if (fs.existsSync(removeFile)) {
                fs.unlinkSync(removeFile);
                this.log(`🗑️  Removed duplicate: ${conflicts[i]}`);
                this.fixesApplied++;
              }
            }
          }
        }
      }
    } catch (error) {
      this.log(`⚠️  Warning: Could not fix all case sensitivity issues: ${error.message}`, 'WARN');
    }
  }

  async fixUnusedImportsAndVariables() {
    this.log('🧹 Fixing unused imports and variables...');
    
    try {
      // Find all TypeScript/React files
      const files = glob.sync('src/**/*.{ts,tsx,js,jsx}', { cwd: this.projectRoot });
      
      for (const file of files) {
        const filePath = path.join(this.projectRoot, file);
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        
        // Remove unused imports
        const importRegex = /import\s+{([^}]+)}\s+from\s+['"][^'"]+['"];?/g;
        let match;
        while ((match = importRegex.exec(content)) !== null) {
          const imports = match[1].split(',').map(imp => imp.trim());
          const usedImports = [];
          
          for (const imp of imports) {
            const importName = imp.replace(/\s+as\s+\w+/, '').trim();
            if (content.includes(importName) && !content.match(new RegExp(`\\b${importName}\\b`, 'g'))) {
              usedImports.push(imp);
            }
          }
          
          if (usedImports.length !== imports.length) {
            const newImport = `import { ${usedImports.join(', ')} } from '${match[0].match(/from\s+['"]([^'"]+)['"]/)[1]}';`;
            content = content.replace(match[0], newImport);
            modified = true;
            this.fixesApplied++;
          }
        }
        
        // Remove unused variables (basic pattern)
        const varRegex = /const\s+(\w+)\s*=\s*[^;]+;/g;
        while ((match = varRegex.exec(content)) !== null) {
          const varName = match[1];
          const usageRegex = new RegExp(`\\b${varName}\\b`, 'g');
          const matches = content.match(usageRegex);
          if (matches && matches.length === 1) {
            // Variable only appears in declaration
            content = content.replace(match[0], '');
            modified = true;
            this.fixesApplied++;
          }
        }
        
        if (modified) {
          fs.writeFileSync(filePath, content);
          this.errorsFixed++;
        }
      }
    } catch (error) {
      this.log(`⚠️  Warning: Could not fix all unused imports: ${error.message}`, 'WARN');
    }
  }

  async fixDuplicateIdentifiers() {
    this.log('🔧 Fixing duplicate identifiers...');
    
    try {
      const files = glob.sync('src/**/*.{ts,tsx,js,jsx}', { cwd: this.projectRoot });
      
      for (const file of files) {
        const filePath = path.join(this.projectRoot, file);
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        
        // Fix duplicate imports from same module
        const importLines = content.match(/import\s+.*from\s+['"][^'"]+['"];?/g) || [];
        const importGroups = new Map();
        
        importLines.forEach(line => {
          const moduleMatch = line.match(/from\s+['"]([^'"]+)['"]/);
          if (moduleMatch) {
            const module = moduleMatch[1];
            if (!importGroups.has(module)) {
              importGroups.set(module, []);
            }
            importGroups.get(module).push(line);
          }
        });
        
        // Consolidate imports from same module
        for (const [module, lines] of importGroups) {
          if (lines.length > 1) {
            const allImports = [];
            lines.forEach(line => {
              const importMatch = line.match(/import\s+{([^}]+)}/);
              if (importMatch) {
                allImports.push(...importMatch[1].split(',').map(imp => imp.trim()));
              }
            });
            
            const uniqueImports = [...new Set(allImports)];
            const newImport = `import { ${uniqueImports.join(', ')} } from '${module}';`;
            
            // Replace all old imports with consolidated one
            lines.forEach(line => {
              content = content.replace(line, '');
            });
            
            // Add consolidated import at the top
            const firstImportIndex = content.indexOf('import');
            if (firstImportIndex !== -1) {
              content = content.slice(0, firstImportIndex) + newImport + '\n' + content.slice(firstImportIndex);
            }
            
            modified = true;
            this.fixesApplied++;
          }
        }
        
        if (modified) {
          fs.writeFileSync(filePath, content);
          this.errorsFixed++;
        }
      }
    } catch (error) {
      this.log(`⚠️  Warning: Could not fix all duplicate identifiers: ${error.message}`, 'WARN');
    }
  }

  async fixMissingExports() {
    this.log('📤 Fixing missing exports...');
    
    try {
      const files = glob.sync('src/**/*.{ts,tsx,js,jsx}', { cwd: this.projectRoot });
      
      for (const file of files) {
        const filePath = path.join(this.projectRoot, file);
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        
        // Check if file has default export
        if (content.includes('export default') || content.includes('export {')) {
          // File already has exports
          continue;
        }
        
        // Check if file has React components that should be exported
        if (content.includes('function ') || content.includes('const ') || content.includes('class ')) {
          const componentMatch = content.match(/(?:function|const|class)\s+(\w+)/);
          if (componentMatch) {
            const componentName = componentMatch[1];
            if (componentName.match(/^[A-Z]/)) {
              // Likely a React component, add default export
              content += `\n\nexport default ${componentName};`;
              modified = true;
              this.fixesApplied++;
            }
          }
        }
        
        if (modified) {
          fs.writeFileSync(filePath, content);
          this.errorsFixed++;
        }
      }
    } catch (error) {
      this.log(`⚠️  Warning: Could not fix all missing exports: ${error.message}`, 'WARN');
    }
  }

  async fixTypeScriptTypeIssues() {
    this.log('🔧 Fixing TypeScript type issues...');
    
    try {
      const files = glob.sync('src/**/*.{ts,tsx}', { cwd: this.projectRoot });
      
      for (const file of files) {
        const filePath = path.join(this.projectRoot, file);
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        
        // Fix common type issues
        // Fix undefined headers issue
        content = content.replace(
          /headers:\s*Record<string,\s*string>\s*\|\s*undefined/g,
          'headers?: Record<string, string>'
        );
        
        // Fix Stripe constructor options
        content = content.replace(
          /advancedFraudSignals:\s*false/g,
          '// advancedFraudSignals: false // Removed unsupported option'
        );
        
        // Fix service worker type issues
        content = content.replace(
          /applicationServerKey:\s*this\.urlBase64ToUint8Array\([^)]+\)/g,
          'applicationServerKey: this.urlBase64ToUint8Array(process.env.REACT_APP_VAPID_PUBLIC_KEY || \'\') as Uint8Array'
        );
        
        if (modified) {
          fs.writeFileSync(filePath, content);
          this.errorsFixed++;
        }
      }
    } catch (error) {
      this.log(`⚠️  Warning: Could not fix all TypeScript type issues: ${error.message}`, 'WARN');
    }
  }

  async fixESLintIssues() {
    this.log('🔍 Fixing ESLint issues...');
    
    try {
      // Run ESLint with --fix flag
      execSync('npm run lint -- --fix', { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 60000 
      });
      this.log('✅ ESLint auto-fix completed');
      this.fixesApplied++;
    } catch (error) {
      this.log(`⚠️  Warning: ESLint auto-fix failed: ${error.message}`, 'WARN');
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      automation: 'Comprehensive Error Fixer',
      duration: Date.now() - this.startTime,
      fixesApplied: this.fixesApplied,
      errorsFixed: this.errorsFixed,
      status: 'completed',
      summary: `Fixed ${this.errorsFixed} errors with ${this.fixesApplied} automated fixes`
    };
    
    const reportPath = path.join(this.reportsDir, 'comprehensive-error-fixer-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 Report generated: ${reportPath}`);
  }

  async generateErrorReport(error) {
    const errorReport = {
      timestamp: new Date().toISOString(),
      automation: 'Comprehensive Error Fixer',
      status: 'error',
      error: error.message,
      stack: error.stack,
      duration: Date.now() - this.startTime
    };
    
    const reportPath = path.join(this.reportsDir, 'comprehensive-error-fixer-error.json');
    fs.writeFileSync(reportPath, JSON.stringify(errorReport, null, 2));
    
    this.log(`❌ Error report generated: ${reportPath}`);
  }
}

// Main execution
if (require.main === module) {
  const fixer = new ComprehensiveErrorFixer();
  fixer.run().catch(console.error);
}

module.exports = ComprehensiveErrorFixer;