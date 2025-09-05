const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

class AdvancedAppImprovementSuite {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = './automation-reports';
    this.improvements = [];
    this.stats = {
      "filesProcessed": 0,
      "improvementsApplied": 0,
      "errorsFixed": 0,
      "performanceGains": 0
    };
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  async runCommand(command, description) {
    this.log(`🚀 Starting: ${description}`);
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 30000
      });
      this.log(`✅ Completed: ${description}`);
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ Failed: ${description} - ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async analyzeCodebase() {
    this.log('🔍 Analyzing codebase for improvement opportunities...');
    
    const analysisResults = {
      "unusedImports": await this.findUnusedImports(),
      "duplicateCode": await this.findDuplicateCode(),
      "performanceIssues": await this.findPerformanceIssues(),
      "accessibilityIssues": await this.findAccessibilityIssues(),
      "seoOpportunities": await this.findSEOOpportunities()
    };

    return analysisResults;
  }

  async findUnusedImports() {
    this.log('🔍 Scanning for unused imports...');
    const files = this.getSourceFiles();
    const unusedImports = [];

    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const importMatches = content.match(/import\s+.*?from\s+['"]([^'"]+)['"]/g) || [];
        
        for (const importMatch of importMatches) {
          const importPath = importMatch.match(/from\s+['"]([^'"]+)['"]/)[1];
          const importName = importMatch.match(/import\s+{([^}]+)}/);
          
          if (importName) {
            const names = importName[1].split(',').map(n => n.trim());
            for (const name of names) {
              const cleanName = name.replace(/\s+as\s+\w+/, '').trim();
              if (!content.includes(cleanName) || content.indexOf(cleanName) === content.indexOf(importMatch)) {
                unusedImports.push({ file, import: cleanName, line: this.getLineNumber(content, importMatch) });
              }
            }
          }
        }
      } catch (error) {
        this.log(`⚠️ Error analyzing ${file}: ${error.message}`);
      }
    }

    return unusedImports;
  }

  async findDuplicateCode() {
    this.log('🔍 Scanning for duplicate code...');
    const files = this.getSourceFiles();
    const duplicates = [];

    // Simple duplicate detection based on function signatures
    const functionSignatures = new Map();
    
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const functionMatches = content.match(/function\s+(\w+)\s*\([^)]*\)/g) || [];
        
        for (const func of functionMatches) {
          const signature = func.replace(/\s+/g, ' ').trim();
          if (functionSignatures.has(signature)) {
            duplicates.push({
              signature,
              files: [functionSignatures.get(signature), file]
            });
          } else {
            functionSignatures.set(signature, file);
          }
        }
      } catch (error) {
        this.log(`⚠️ Error analyzing ${file}: ${error.message}`);
      }
    }

    return duplicates;
  }

  async findPerformanceIssues() {
    this.log('🔍 Scanning for performance issues...');
    const issues = [];
    const files = this.getSourceFiles();

    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for common performance anti-patterns
        if (content.includes('console.log') && !file.includes('.test.')) {
          issues.push({ file, type: 'console.log', message: 'Remove console.log statements in production' });
        }
        
        if (content.includes('document.querySelector') && content.includes('for(')) {
          issues.push({ file, type: 'inefficient-dom', message: 'Consider caching DOM queries in loops' });
        }
        
        if (content.includes('useEffect') && content.includes('[]') && content.includes('fetch')) {
          issues.push({ file, type: 'missing-deps', message: 'Check useEffect dependencies for fetch calls' });
        }
      } catch (error) {
        this.log(`⚠️ Error analyzing ${file}: ${error.message}`);
      }
    }

    return issues;
  }

  async findAccessibilityIssues() {
    this.log('🔍 Scanning for accessibility issues...');
    const issues = [];
    const files = this.getSourceFiles();

    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        if (content.includes('<img') && !content.includes('alt=')) {
          issues.push({ file, type: 'missing-alt', message: 'Add alt attributes to images' });
        }
        
        if (content.includes('<button') && !content.includes('aria-label') && !content.includes('aria-labelledby')) {
          issues.push({ file, type: 'button-label', message: 'Add accessible labels to buttons' });
        }
        
        if (content.includes('<input') && !content.includes('aria-label') && !content.includes('aria-labelledby') && !content.includes('placeholder')) {
          issues.push({ file, type: 'input-label', message: 'Add accessible labels to inputs' });
        }
      } catch (error) {
        this.log(`⚠️ Error analyzing ${file}: ${error.message}`);
      }
    }

    return issues;
  }

  async findSEOOpportunities() {
    this.log('🔍 Scanning for SEO opportunities...');
    const opportunities = [];
    const files = this.getSourceFiles();

    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        if (file.includes('page.tsx') || file.includes('page.js')) {
          if (!content.includes('title') && !content.includes('Title')) {
            opportunities.push({ file, type: 'missing-title', message: 'Add page title for SEO' });
          }
          
          if (!content.includes('description') && !content.includes('Description')) {
            opportunities.push({ file, type: 'missing-description', message: 'Add meta description for SEO' });
          }
          
          if (!content.includes('h1') && !content.includes('H1')) {
            opportunities.push({ file, type: 'missing-h1', message: 'Add H1 heading for SEO' });
          }
        }
      } catch (error) {
        this.log(`⚠️ Error analyzing ${file}: ${error.message}`);
      }
    }

    return opportunities;
  }

  getSourceFiles() {
    const extensions = ['.tsx', '.ts', '.jsx', '.js'];
    const files = [];
    
    const scanDirectory = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            scanDirectory(fullPath);
          } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
            files.push(fullPath);
          }
        }
      } catch (error) {
        // Ignore permission errors
      }
    };
    
    scanDirectory(this.projectRoot);
    return files;
  }

  getLineNumber(content, searchString) {
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes(searchString)) {
        return i + 1;
      }
    }
    return 1;
  }

  async applyImprovements(analysisResults) {
    this.log('🔧 Applying improvements...');
    
    let improvementsApplied = 0;
    
    // Apply unused import fixes
    for (const unused of analysisResults.unusedImports) {
      try {
        const content = fs.readFileSync(unused.file, 'utf8');
        const lines = content.split('\n');
        const lineIndex = unused.line - 1;
        
        if (lines[lineIndex]) {
          lines[lineIndex] = lines[lineIndex].replace(new RegExp(`\\b${unused.import}\\b,?\\s*`), '');
          fs.writeFileSync(unused.file, lines.join('\n'));
          improvementsApplied++;
          this.stats.improvementsApplied++;
        }
      } catch (error) {
        this.log(`⚠️ Error fixing unused import in ${unused.file}: ${error.message}`);
      }
    }
    
    // Apply console.log removal
    for (const issue of analysisResults.performanceIssues) {
      if (issue.type === 'console.log') {
        try {
          const content = fs.readFileSync(issue.file, 'utf8');
          const cleaned = content.replace(/console\.log\([^)]*\);?\s*/g, '');
          if (cleaned !== content) {
            fs.writeFileSync(issue.file, cleaned);
            improvementsApplied++;
            this.stats.improvementsApplied++;
          }
        } catch (error) {
          this.log(`⚠️ Error removing console.log from ${issue.file}: ${error.message}`);
        }
      }
    }
    
    this.log(`✅ Applied ${improvementsApplied} improvements`);
  }

  async generateReport(analysisResults) {
    this.log('📊 Generating improvement report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      stats: this.stats,
      analysis: analysisResults,
      summary: {
        totalIssues: Object.values(analysisResults).flat().length,
        improvementsApplied: this.stats.improvementsApplied,
        filesProcessed: this.stats.filesProcessed
      }
    };
    
    const reportPath = `${this.reportsDir}/advanced-app-improvement-report.json`;
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`📊 Report saved to: ${reportPath}`);
    
    return report;
  }

  async run() {
    this.log('🚀 Starting Advanced App Improvement Suite...');
    
    // Ensure reports directory exists
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
    
    // Analyze codebase
    const analysisResults = await this.analyzeCodebase();
    
    // Apply improvements
    await this.applyImprovements(analysisResults);
    
    // Generate report
    const report = await this.generateReport(analysisResults);
    
    this.log('🎉 Advanced App Improvement Suite completed!');
    return report;
  }
}

// Run the suite if this file is executed directly
if (require.main === module) {
  const suite = new AdvancedAppImprovementSuite();
  suite.run().catch(console.error);
}

module.exports = AdvancedAppImprovementSuite;