#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class TypeScriptErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'reports');
    this.errorsFixed = 0;
    this.filesProcessed = 0;
    this.startTime = Date.now();
    
    // Ensure reports directory exists
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }

  async fixAllErrors() {
    this.log('Starting TypeScript Error Fixer...');
    
    try {
      // Fix specific files with known errors
      await this.fixMicroSaasSolutions();
      await this.fixSustainabilityPage();
      await this.fixSolutionsPage();
      await this.fixEnterpriseSolutions();
      await this.fixHealthcareSolutions();
      await this.fixTeamBuilderPage();
      
      // Fix common patterns across all files
      await this.fixCommonPatterns();
      
      this.log(`TypeScript Error Fixer completed. Fixed ${this.errorsFixed} errors in ${this.filesProcessed} files.`);
      
      // Generate report
      const report = this.generateReport();
      return report;
      
    } catch (error) {
      this.log(`TypeScript Error Fixer failed: ${error.message}`);
      throw error;
    }
  }

  async fixMicroSaasSolutions() {
    const filePath = 'src/pages/services/micro-saas-solutions.tsx';
    if (!fs.existsSync(filePath)) return;
    
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      
      // Fix JSX fragment wrapper issue
      if (content.includes('<Helmet>') && !content.includes('<>')) {
        // Find the start of the component
        const componentStart = content.indexOf('export default function');
        if (componentStart !== -1) {
          // Find the first <Helmet> tag
          const helmetStart = content.indexOf('<Helmet>');
          if (helmetStart !== -1) {
            // Insert opening fragment before Helmet
            content = content.slice(0, helmetStart) + '<>\n      ' + content.slice(helmetStart);
            
            // Find the closing div and add closing fragment
            const lastDivClose = content.lastIndexOf('</div>');
            if (lastDivClose !== -1) {
              content = content.slice(0, lastDivClose) + '</div>\n    </>' + content.slice(lastDivClose + 6);
            }
          }
        }
      }
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.errorsFixed++;
        this.log(`Fixed JSX fragment issues in ${filePath}`);
      }
      
      this.filesProcessed++;
    } catch (error) {
      this.log(`Error fixing ${filePath}: ${error.message}`);
    }
  }

  async fixSustainabilityPage() {
    const filePath = 'src/pages/services/sustainability.tsx';
    if (!fs.existsSync(filePath)) return;
    
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      
      // Fix missing function declaration
      if (content.includes('const features = [') && !content.includes('export default function')) {
        // Add function declaration
        content = 'export default function Sustainability() {\n  ' + content;
        
        // Add closing brace
        if (!content.includes('}')) {
          content += '\n}';
        }
      }
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.errorsFixed++;
        this.log(`Fixed function declaration in ${filePath}`);
      }
      
      this.filesProcessed++;
    } catch (error) {
      this.log(`Error fixing ${filePath}: ${error.message}`);
    }
  {/* Removed stray closing brace */}

  async fixSolutionsPage() {
    const filePath = 'src/pages/solutions.tsx';
    if (!fs.existsSync(filePath)) return;
    
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      
      // Fix missing colons in object properties
      content = content.replace(/features\[/g, 'features: [');
      content = content.replace(/benefits\[/g, 'benefits: [');
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.errorsFixed++;
        this.log(`Fixed object property syntax in ${filePath}`);
      }
      
      this.filesProcessed++;
    } catch (error) {
      this.log(`Error fixing ${filePath}: ${error.message}`);
    }
  {/* Removed stray closing brace */}

  async fixEnterpriseSolutions() {
    const filePath = 'src/pages/solutions/Enterprise.tsx';
    if (!fs.existsSync(filePath)) return;
    
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      
      // Fix missing function declaration
      if (content.includes('const solutions = [') && !content.includes('export default function')) {
        content = 'export default function EnterpriseSolutions() {\n  ' + content;
        
        if (!content.includes('}')) {
          content += '\n}';
        }
      }
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.errorsFixed++;
        this.log(`Fixed function declaration in ${filePath}`);
      }
      
      this.filesProcessed++;
    } catch (error) {
      this.log(`Error fixing ${filePath}: ${error.message}`);
  {/* Removed stray closing brace */}
  {/* Removed stray closing brace */}

  async fixHealthcareSolutions() {
    const filePath = 'src/pages/solutions/Healthcare.tsx';
    if (!fs.existsSync(filePath)) return;
    
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      
      // Fix missing function declaration
      if (content.includes('const solutions = [') && !content.includes('export default function')) {
        content = 'export default function HealthcareSolutions() {\n  ' + content;
        
        if (!content.includes('}')) {
          content += '\n}';
        }
      }
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.errorsFixed++;
        this.log(`Fixed function declaration in ${filePath}`);
      }
      
      this.filesProcessed++;
    } catch (error) {
      this.log(`Error fixing ${filePath}: ${error.message}`);
  {/* Removed stray closing brace */}
  {/* Removed stray closing brace */}

  async fixTeamBuilderPage() {
    const filePath = 'src/pages/team-builder/index.tsx';
    if (!fs.existsSync(filePath)) return;
    
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      
      // Fix missing catch block types
      content = content.replace(/catch \(error: \)/g, 'catch (error: any)');
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.errorsFixed++;
        this.log(`Fixed catch block types in ${filePath}`);
      }
      
      this.filesProcessed++;
    } catch (error) {
      this.log(`Error fixing ${filePath}: ${error.message}`);
    }
  {/* Removed stray closing brace */}

  async fixCommonPatterns() {
    this.log('Fixing common patterns across all TypeScript files...');
    
    const tsFiles = this.findFiles(['**/*.ts', '**/*.tsx']);
    
    for (const file of tsFiles) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let originalContent = content;
        
        // Fix common patterns
        content = this.applyCommonFixes(content);
        
        if (content !== originalContent) {
          fs.writeFileSync(file, content, 'utf8');
          this.errorsFixed++;
          this.log(`Applied common fixes to ${file}`);
        }
        
        this.filesProcessed++;
      } catch (error) {
        this.log(`Error processing ${file}: ${error.message}`);
      }
    }
  {/* Removed stray closing brace */}

  applyCommonFixes(content) {
    // Fix missing colons in object properties
    content = content.replace(/(\w+)\s*\[/g, '$1: [');
    
    // Fix missing function declarations
    content = content.replace(/^(\s*)(const|let|var)\s+(\w+)\s*=\s*\[/gm, '$1export default function $3() {\n$1  $2 $3 = [');
    
    // Fix missing return statements
    content = content.replace(/return\s*\(\s*$/gm, 'return (');
    
    // Fix missing JSX fragments
    content = content.replace(/<>\s*$/gm, '<>');
    content = content.replace(/^\s*<\/>/gm, '</>');
    
    // Fix missing catch block types
    content = content.replace(/catch\s*\(\s*error\s*:\s*\)/g, 'catch (error: any)');
    
    // Fix missing semicolons
    content = content.replace(/^(\s*)(\w+)\s*=\s*([^;]+)$/gm, '$1$2 = $3;');
    
    // Fix missing React imports
    if (content.includes('React') && !content.includes("import React")) {
      content = "import React from 'react';\n" + content;
    }
    
    return content;
  }

  findFiles(patterns) {
    const files = [];
    const self = this;
    
    function walkDir(dir) {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          walkDir(fullPath);
        } else if (stat.isFile()) {
          for (const pattern of patterns) {
            if (self.matchesPattern(fullPath, pattern)) {
              files.push(fullPath);
              break;
            }
          }
        }
      }
    }
    
    walkDir(this.projectRoot);
    return files;
  }

  matchesPattern(filePath, pattern) {
    const relativePath = path.relative(this.projectRoot, filePath);
    const regexPattern = pattern
      .replace(/\*\*/g, '.*')
      .replace(/\*/g, '[^/]*')
      .replace(/\./g, '\\.');
    
    return new RegExp(`^${regexPattern}$`).test(relativePath);
  }

  generateReport() {
    const endTime = Date.now();
    const duration = endTime - this.startTime;
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: 'TypeScript Error Fixer completed',
      status: 'completed',
      duration: `${duration}ms`,
      filesProcessed: this.filesProcessed,
      errorsFixed: this.errorsFixed,
      performance: {
        filesPerSecond: Math.round((this.filesProcessed / duration) * 1000 * 100) / 100,
        errorsPerSecond: Math.round((this.errorsFixed / duration) * 1000 * 100) / 100
      }
    };
    
    const reportPath = path.join(this.reportsDir, 'typescript-error-fixer-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Report saved to ${reportPath}`);
    return report;
  }
  {/* Removed stray closing brace */}

// Run the automation if called directly
if (require.main === module) {
  const fixer = new TypeScriptErrorFixer();
  fixer.fixAllErrors().catch(console.error);
  {/* Removed stray closing brace */}

module.exports = TypeScriptErrorFixer;