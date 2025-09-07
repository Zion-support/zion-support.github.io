#!/usr/bin/env node
/**
 * Enhanced App Improvement Script
 * Comprehensive improvements for the Zion Tech Group application
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class EnhancedAppImprovement {
  constructor() {
    this.projectRoot = process.cwd();
    this.improvements = [];
    this.errors = [];
    this.warnings = [];
  }

  log(message, type = 'info') {
    const prefix = type === 'error' ? '❌' : type === 'success' ? '✅' : 'ℹ️';
    console.log(`${prefix} ${message}`);
  }

  async fixSyntaxErrors() {
    this.log('🔧 Fixing syntax errors...');
    
    const files = this.getAllJSFiles();
    let fixedCount = 0;
    
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        let fixedContent = content;
        
        // Fix common syntax issues
        fixedContent = this.fixCommonSyntaxIssues(fixedContent);
        
        if (fixedContent !== content) {
          fs.writeFileSync(file, fixedContent);
          this.improvements.push(`Fixed syntax errors in ${file}`);
          fixedCount++;
        }
      } catch (error) {
        this.errors.push(`Failed to fix ${file}: ${error.message}`);
      }
    }
    
    this.log(`Fixed ${fixedCount} files`, 'success');
  }

  fixCommonSyntaxIssues(content) {
    let fixed = content;
    
    // Fix escaped quotes
    fixed = fixed.replace(/\\"/g, '"');
    fixed = fixed.replace(/\\'/g, "'");
    
    // Fix JSX syntax
    fixed = fixed.replace(/className=\\"([^"]*)\\"\\s*\\/>/g, 'className="$1" />');
    fixed = fixed.replace(/className=\\"([^"]*)\\"\\s*>/g, 'className="$1">');
    
    // Fix import statements
    fixed = fixed.replace(/import\s+([^{][^;]+)\s+from\s+\\"([^"]+)\\"\\;/g, 'import $1 from "$2";');
    fixed = fixed.replace(/import\s+{\s*([^}]+)\s*}\s+from\s+\\"([^"]+)\\"\\;/g, 'import { $1 } from "$2";');
    
    // Fix string literals
    fixed = fixed.replace(/\\"([^"]*)\\"\\;/g, '"$1";');
    
    return fixed;
  }

  getAllJSFiles() {
    const files = [];
    const extensions = ['.js', '.cjs', '.mjs', '.ts', '.tsx', '.jsx'];
    
    const scanDirectory = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
              scanDirectory(fullPath);
            }
          } else if (extensions.some(ext => item.endsWith(ext))) {
            files.push(fullPath);
          }
        }
      } catch (error) {
        // Skip directories that can't be read
      }
    };
    
    scanDirectory(this.projectRoot);
    return files;
  }

  async optimizePerformance() {
    this.log('⚡ Optimizing performance...');
    
    try {
      // Remove console.logs in production files
      const files = this.getAllJSFiles();
      let optimizedCount = 0;
      
      for (const file of files) {
        if (file.includes('production') || file.includes('build')) {
          const content = fs.readFileSync(file, 'utf8');
          const optimizedContent = content
            .replace(/console\.log\([^)]*\);?\n?/g, '')
            .replace(/console\.warn\([^)]*\);?\n?/g, '')
            .replace(/console\.error\([^)]*\);?\n?/g, '');
          
          if (optimizedContent !== content) {
            fs.writeFileSync(file, optimizedContent);
            optimizedCount++;
          }
        }
      }
      
      this.improvements.push(`Optimized ${optimizedCount} files for production`);
      this.log(`Optimized ${optimizedCount} files`, 'success');
    } catch (error) {
      this.errors.push(`Performance optimization failed: ${error.message}`);
    }
  }

  async enhanceSecurity() {
    this.log('🔒 Enhancing security...');
    
    try {
      // Run security audit
      execSync('npm audit --audit-level moderate', { 
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      this.improvements.push('Security audit completed');
      this.log('Security audit completed', 'success');
    } catch (error) {
      this.warnings.push('Security vulnerabilities found - review npm audit output');
      this.log('Security vulnerabilities found', 'error');
    }
  }

  async improveCodeQuality() {
    this.log('📝 Improving code quality...');
    
    try {
      // Run ESLint fix
      execSync('npm run lint:fix', { 
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      this.improvements.push('Code quality improvements applied');
      this.log('Code quality improvements applied', 'success');
    } catch (error) {
      this.warnings.push('ESLint fix had issues - manual review needed');
      this.log('ESLint fix had issues', 'error');
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        improvements: this.improvements.length,
        errors: this.errors.length,
        warnings: this.warnings.length
      },
      improvements: this.improvements,
      errors: this.errors,
      warnings: this.warnings,
      recommendations: [
        'Regularly run automated tests',
        'Monitor performance metrics',
        'Keep dependencies updated',
        'Implement code review process',
        'Use TypeScript for better type safety'
      ]
    };
    
    const reportPath = path.join(this.projectRoot, 'enhanced-app-improvement-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`📊 Improvement report saved to ${reportPath}`, 'success');
    
    return report;
  }

  async run() {
    this.log('🚀 Starting Enhanced App Improvement...');
    
    try {
      await this.fixSyntaxErrors();
      await this.optimizePerformance();
      await this.enhanceSecurity();
      await this.improveCodeQuality();
      
      const report = await this.generateReport();
      
      this.log('🎉 Enhanced app improvement completed!', 'success');
      this.log(`Applied ${report.summary.improvements} improvements`, 'success');
      
      return report;
    } catch (error) {
      this.log(`❌ App improvement failed: ${error.message}`, 'error');
      throw error;
    }
  }
}

// Main execution
if (require.main === module) {
  const improver = new EnhancedAppImprovement();
  improver.run().catch(error => {
    console.error('App improvement failed:', error);
    process.exit(1);
  });
}

module.exports = EnhancedAppImprovement;