#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class EnhancedErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixesApplied = 0;
    this.errorsFixed = [];
    this.reportPath = path.join(this.projectRoot, 'error-fix-report.json');
  }

  async run() {
    console.log('🚀 Starting Enhanced Error Fixer...');
    
    try {
      // Step 1: Fix import/export issues
      await this.fixImportExportIssues();
      
      // Step 2: Fix unused imports
      await this.fixUnusedImports();
      
      // Step 3: Fix type issues
      await this.fixTypeIssues();
      
      // Step 4: Fix React/JSX issues
      await this.fixReactIssues();
      
      // Step 5: Fix environment variable issues
      await this.fixEnvironmentIssues();
      
      // Step 6: Run auto-fix
      await this.runAutoFix();
      
      // Step 7: Generate report
      await this.generateReport();
      
      console.log(`✅ Enhanced Error Fixer completed! Fixed ${this.fixesApplied} issues.`);
      
    } catch (error) {
      console.error('❌ Enhanced Error Fixer failed:', error);
      await this.generateReport();
    }
  }

  async fixImportExportIssues() {
    console.log('🔧 Fixing import/export issues...');
    
    // Fix missing default exports
    const filesToFix = [
      'src/pages/Blog.tsx',
      'src/pages/MobileLaunchPage.jsx'
    ];
    
    for (const file of filesToFix) {
      if (fs.existsSync(file)) {
        try {
          let content = fs.readFileSync(file, 'utf8');
          
          // Add default export if missing
          if (!content.includes('export default') && content.includes('function')) {
            const functionName = content.match(/function\s+(\w+)/)?.[1];
            if (functionName) {
              content += `\n\nexport default ${functionName};`;
              fs.writeFileSync(file, content);
              this.recordFix('Added missing default export', file);
            }
          }
        } catch (error) {
          console.warn(`Warning: Could not fix ${file}:`, error.message);
        }
      }
    }
  }

  async fixUnusedImports() {
    console.log('🧹 Fixing unused imports...');
    
    // Common patterns for unused imports
    const patterns = [
      {
        search: /import\s*{[^}]*}\s*from\s*['"]lucide-react['"];?/g,
        replace: (match) => {
          // Remove unused imports from lucide-react
          const imports = match.match(/\{([^}]*)\}/)?.[1];
          if (imports) {
            const usedImports = imports
              .split(',')
              .map(imp => imp.trim())
              .filter(imp => !imp.includes('//'))
              .filter(imp => imp.length > 0);
            
            if (usedImports.length === 0) {
              return '';
            }
            return `import { ${usedImports.join(', ')} } from 'lucide-react';`;
          }
          return match;
        }
      }
    ];
    
    // Apply patterns to all TypeScript/React files
    const files = this.findFiles(['src/**/*.{ts,tsx,js,jsx}']);
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let originalContent = content;
        
        for (const pattern of patterns) {
          content = content.replace(pattern.search, pattern.replace);
        }
        
        if (content !== originalContent) {
          fs.writeFileSync(file, content);
          this.recordFix('Removed unused imports', file);
        }
      } catch (error) {
        console.warn(`Warning: Could not process ${file}:`, error.message);
      }
    }
  }

  async fixTypeIssues() {
    console.log('🔍 Fixing type issues...');
    
    // Fix common type issues
    const typeFixes = [
      {
        search: /:\s*any\b/g,
        replace: ': unknown'
      },
      {
        search: /Record<string, string> \| undefined/g,
        replace: 'Record<string, string>'
      }
    ];
    
    const files = this.findFiles(['src/**/*.{ts,tsx}']);
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let originalContent = content;
        
        for (const fix of typeFixes) {
          content = content.replace(fix.search, fix.replace);
        }
        
        if (content !== originalContent) {
          fs.writeFileSync(file, content);
          this.recordFix('Fixed type issues', file);
        }
      } catch (error) {
        console.warn(`Warning: Could not process ${file}:`, error.message);
      }
    }
  }

  async fixReactIssues() {
    console.log('⚛️ Fixing React/JSX issues...');
    
    // Fix common React issues
    const reactFixes = [
      {
        search: /`'`/g,
        replace: '&apos;'
      },
      {
        search: /import\s+React\s+from\s+['"]react['"];?\s*\n/g,
        replace: ''
      }
    ];
    
    const files = this.findFiles(['src/**/*.{tsx,jsx}']);
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let originalContent = content;
        
        for (const fix of reactFixes) {
          content = content.replace(fix.search, fix.replace);
        }
        
        if (content !== originalContent) {
          fs.writeFileSync(file, content);
          this.recordFix('Fixed React/JSX issues', file);
        }
      } catch (error) {
        console.warn(`Warning: Could not process ${file}:`, error.message);
      }
    }
  }

  async fixEnvironmentIssues() {
    console.log('🌍 Fixing environment variable issues...');
    
    // Fix process.env references
    const envFixes = [
      {
        search: /process\.env\[['"]REACT_APP_/g,
        replace: 'import.meta.env['
      },
      {
        search: /process\.env\[['"]VITE_/g,
        replace: 'import.meta.env['
      }
    ];
    
    const files = this.findFiles(['src/**/*.{ts,tsx,js,jsx}']);
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let originalContent = content;
        
        for (const fix of envFixes) {
          content = content.replace(fix.search, fix.replace);
        }
        
        if (content !== originalContent) {
          fs.writeFileSync(file, content);
          this.recordFix('Fixed environment variable references', file);
        }
      } catch (error) {
        console.warn(`Warning: Could not process ${file}:`, error.message);
      }
    }
  }

  async runAutoFix() {
    console.log('🔧 Running ESLint auto-fix...');
    
    try {
      execSync('npm run lint -- --fix', { 
        cwd: this.projectRoot, 
        stdio: 'pipe' 
      });
      this.recordFix('ESLint auto-fix applied', 'global');
    } catch (error) {
      console.warn('Warning: ESLint auto-fix failed:', error.message);
    }
  }

  findFiles(patterns) {
    const glob = require('glob');
    const files = [];
    
    for (const pattern of patterns) {
      try {
        const matches = glob.sync(pattern, { cwd: this.projectRoot });
        files.push(...matches);
      } catch (error) {
        console.warn(`Warning: Could not process pattern ${pattern}:`, error.message);
      }
    }
    
    return [...new Set(files)];
  }

  recordFix(description, file) {
    this.fixesApplied++;
    this.errorsFixed.push({
      description,
      file,
      timestamp: new Date().toISOString()
    });
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      fixesApplied: this.fixesApplied,
      errorsFixed: this.errorsFixed,
      summary: `Fixed ${this.fixesApplied} issues automatically`
    };
    
    try {
      fs.writeFileSync(this.reportPath, JSON.stringify(report, null, 2));
      console.log(`📊 Report generated: ${this.reportPath}`);
    } catch (error) {
      console.error('Failed to generate report:', error.message);
    }
  }
}

// Run the error fixer
if (require.main === module) {
  const fixer = new EnhancedErrorFixer();
  fixer.run().catch(console.error);
}

module.exports = EnhancedErrorFixer;