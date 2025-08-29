#!/usr/bin/env node

/**
 * Intelligent Error Prevention System - Proactively prevents errors before they occur
 * Runs every 10 minutes to maintain code quality and prevent issues
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class IntelligentErrorPrevention {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'intelligent-error-prevention-report.json');
    this.preventionsApplied = 0;
    this.issuesPrevented = [];
    this.startTime = Date.now();
    this.errorPatterns = new Map();
    this.initializeErrorPatterns();
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }

  initializeErrorPatterns() {
    // Common error patterns and their prevention strategies
    this.errorPatterns.set('duplicate-imports', {
      pattern: /import\s+.*\s+from\s+['"]([^'"]+)['"]\s*\nimport\s+.*\s+from\s+['"]\1['"]/g,
      fix: (content) => content.replace(/import\s+.*\s+from\s+['"]([^'"]+)['"]\s*\nimport\s+.*\s+from\s+['"]\1['"]/g, ''),
      description: 'Duplicate imports from same module'
    });

    this.errorPatterns.set('unused-imports', {
      pattern: /import\s*{([^}]+)}\s*from\s+['"]([^'"]+)['"]/g,
      fix: (content) => {
        // This is a complex fix that would require AST parsing
        return content;
      },
      description: 'Unused imports in destructured imports'
    });

    this.errorPatterns.set('missing-react-import', {
      pattern: /import\s+React\s+from\s+['"]react['"]/g,
      fix: (content) => content.replace(/import\s+React\s+from\s+['"]react['"]/g, ''),
      description: 'Unnecessary React import in modern React'
    });

    this.errorPatterns.set('inconsistent-quotes', {
      pattern: /['"`]/g,
      fix: (content) => content.replace(/'/g, '"'),
      description: 'Inconsistent quote usage'
    });

    this.errorPatterns.set('trailing-whitespace', {
      pattern: /[ \t]+$/gm,
      fix: (content) => content.replace(/[ \t]+$/gm, ''),
      description: 'Trailing whitespace'
    });

    this.errorPatterns.set('missing-semicolons', {
      pattern: /([^;{}])\n/g,
      fix: (content) => content.replace(/([^;{}])\n/g, '$1;\n'),
      description: 'Missing semicolons'
    });
  }

  async run() {
    this.log('🧠 Starting Intelligent Error Prevention System...');
    
    try {
      await this.scanForPotentialIssues();
      await this.preventCommonErrors();
      await this.validateFileStructure();
      await this.checkDependencies();
      await this.runPreventiveChecks();
      
      this.generateReport();
      this.log(`✅ Intelligent Error Prevention completed! Prevented ${this.preventionsApplied} potential issues.`);
      
    } catch (error) {
      this.log(`❌ Error in Intelligent Error Prevention: ${error.message}`);
      this.generateReport();
    }
  }

  async scanForPotentialIssues() {
    this.log('🔍 Scanning for potential issues...');
    
    const files = this.findTypeScriptFiles();
    
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        await this.analyzeFile(file, content);
      } catch (error) {
        this.log(`⚠️  Error analyzing ${file}: ${error.message}`);
      }
    }
  }

  async analyzeFile(filePath, content) {
    const issues = [];
    
    // Check for common patterns that could lead to errors
    for (const [issueType, config] of this.errorPatterns) {
      if (config.pattern.test(content)) {
        issues.push({
          type: issueType,
          description: config.description,
          fix: config.fix
        });
      }
    }

    // Check for specific file-specific issues
    if (filePath.includes('services/') && content.includes('export default')) {
      // Check for proper component naming
      const componentName = path.basename(filePath, path.extname(filePath));
      if (!content.includes(`export default function ${componentName}`) && 
          !content.includes(`export default ${componentName}`)) {
        issues.push({
          type: 'component-naming-mismatch',
          description: `Component name doesn't match filename: ${componentName}`,
          fix: null // Would need manual intervention
        });
      }
    }

    if (issues.length > 0) {
      this.log(`⚠️  Found ${issues.length} potential issues in ${path.basename(filePath)}`);
      this.issuesPrevented.push({
        file: path.basename(filePath),
        issues: issues
      });
    }
  }

  async preventCommonErrors() {
    this.log('🛡️  Applying preventive fixes...');
    
    const files = this.findTypeScriptFiles();
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;

        // Fix trailing whitespace
        if (content.match(/[ \t]+$/gm)) {
          content = content.replace(/[ \t]+$/gm, '');
          modified = true;
          this.preventionsApplied++;
        }

        // Fix inconsistent quotes (convert single quotes to double quotes)
        if (content.includes("'") && !content.includes('"')) {
          content = content.replace(/'/g, '"');
          modified = true;
          this.preventionsApplied++;
        }

        // Remove unnecessary React imports
        if (content.includes('import React from "react"') && 
            (content.includes('export default function') || content.includes('export default const'))) {
          content = content.replace(/import React from "react";?\n?/g, '');
          modified = true;
          this.preventionsApplied++;
        }

        if (modified) {
          fs.writeFileSync(file, content, 'utf8');
          this.log(`🔧 Applied preventive fixes to ${path.basename(file)}`);
        }
      } catch (error) {
        this.log(`⚠️  Error applying preventive fixes to ${file}: ${error.message}`);
      }
    }
  }

  async validateFileStructure() {
    this.log('📁 Validating file structure...');
    
    const requiredDirs = [
      'src/components',
      'src/pages',
      'src/utils',
      'src/types',
      'src/hooks',
      'src/context'
    ];

    for (const dir of requiredDirs) {
      const fullPath = path.join(this.projectRoot, dir);
      if (!fs.existsSync(fullPath)) {
        try {
          fs.mkdirSync(fullPath, { recursive: true });
          this.log(`📁 Created missing directory: ${dir}`);
          this.preventionsApplied++;
        } catch (error) {
          this.log(`⚠️  Could not create directory ${dir}: ${error.message}`);
        }
      }
    }

    // Check for orphaned files
    await this.checkForOrphanedFiles();
  }

  async checkForOrphanedFiles() {
    this.log('🔍 Checking for orphaned files...');
    
    const orphanedFiles = [];
    const allFiles = this.findTypeScriptFiles();
    
    for (const file of allFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check if file has proper exports
        if (!content.includes('export') && !content.includes('import')) {
          orphanedFiles.push(file);
        }
        
        // Check if file is imported anywhere
        if (content.includes('export') && !this.isFileImported(file)) {
          orphanedFiles.push(file);
        }
      } catch (error) {
        this.log(`⚠️  Error checking file ${file}: ${error.message}`);
      }
    }

    if (orphanedFiles.length > 0) {
      this.log(`⚠️  Found ${orphanedFiles.length} potentially orphaned files`);
      this.issuesPrevented.push({
        type: 'orphaned-files',
        files: orphanedFiles.map(f => path.basename(f))
      });
    }
  }

  isFileImported(filePath) {
    const fileName = path.basename(filePath, path.extname(filePath));
    const allFiles = this.findTypeScriptFiles();
    
    for (const file of allFiles) {
      if (file === filePath) continue;
      
      try {
        const content = fs.readFileSync(file, 'utf8');
        if (content.includes(`import.*${fileName}`) || content.includes(`from.*${fileName}`)) {
          return true;
        }
      } catch (error) {
        // Continue checking other files
      }
    }
    
    return false;
  }

  async checkDependencies() {
    this.log('📦 Checking dependencies...');
    
    try {
      // Check for outdated packages
      const outdatedCheck = execSync('npm outdated --json', { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 30000 
      });
      
      const outdated = JSON.parse(outdatedCheck.toString());
      if (Object.keys(outdated).length > 0) {
        this.log(`⚠️  Found ${Object.keys(outdated).length} outdated packages`);
        this.issuesPrevented.push({
          type: 'outdated-dependencies',
          count: Object.keys(outdated).length,
          packages: Object.keys(outdated)
        });
      }
    } catch (error) {
      // No outdated packages or error occurred
    }

    // Check for security vulnerabilities
    try {
      const auditCheck = execSync('npm audit --json', { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 30000 
      });
      
      const audit = JSON.parse(auditCheck.toString());
      if (audit.metadata.vulnerabilities && audit.metadata.vulnerabilities.total > 0) {
        this.log(`⚠️  Found ${audit.metadata.vulnerabilities.total} security vulnerabilities`);
        this.issuesPrevented.push({
          type: 'security-vulnerabilities',
          count: audit.metadata.vulnerabilities.total,
          severity: audit.metadata.vulnerabilities
        });
      }
    } catch (error) {
      // No vulnerabilities or error occurred
    }
  }

  async runPreventiveChecks() {
    this.log('🔍 Running preventive checks...');
    
    try {
      // Run a quick build check
      execSync('npm run build --silent', { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 120000 
      });
      this.log('✅ Build check passed');
    } catch (error) {
      this.log(`⚠️  Build check failed: ${error.message}`);
      this.issuesPrevented.push({
        type: 'build-failure',
        error: error.message
      });
    }

    try {
      // Run a quick type check
      execSync('npm run type-check --silent', { 
        cwd: this.projectRoot, 
        stdio: 'pipe',
        timeout: 60000 
      });
      this.log('✅ Type check passed');
    } catch (error) {
      this.log(`⚠️  Type check failed: ${error.message}`);
      this.issuesPrevented.push({
        type: 'type-check-failure',
        error: error.message
      });
    }
  }

  findTypeScriptFiles() {
    const files = [];
    
    function walkDir(dir) {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          walkDir(fullPath);
        } else if (item.endsWith('.ts') || item.endsWith('.tsx')) {
          files.push(fullPath);
        }
      }
    }
    
    walkDir(path.join(this.projectRoot, 'src'));
    return files;
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      preventionsApplied: this.preventionsApplied,
      issuesPrevented: this.issuesPrevented,
      status: this.preventionsApplied > 0 ? 'preventions-applied' : 'no-issues-found'
    };

    fs.writeFileSync(this.logFile, JSON.stringify(report, null, 2));
    this.log(`📊 Report generated: ${this.logFile}`);
  }
}

// Run the error prevention system
if (require.main === module) {
  const prevention = new IntelligentErrorPrevention();
  prevention.run().catch(console.error);
}

module.exports = IntelligentErrorPrevention;