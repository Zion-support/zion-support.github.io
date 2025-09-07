const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AICodeAnalyzer {
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'ai-code-analyzer.log');
    this.ensureLogDir();
  }

  ensureLogDir() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  analyzeCodeQuality() {
    this.log('🔍 Starting AI-powered code quality analysis...');
    
    try {
      // Analyze TypeScript files
      const tsFiles = this.findFiles('.ts', '.tsx');
      this.log(`Found ${tsFiles.length} TypeScript files to analyze`);
      
      // Check for common issues
      const issues = [];
      
      tsFiles.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for console.log statements
        if (content.includes('console.log')) {
          issues.push({
            file,
            type: 'console.log',
            message: 'Console.log statement found - consider removing for production'
          });
        }
        
        // Check for TODO comments
        if (content.includes('TODO') || content.includes('FIXME')) {
          issues.push({
            file,
            type: 'todo',
            message: 'TODO or FIXME comment found'
          });
        }
        
        // Check for unused imports
        const lines = content.split('\n');
        lines.forEach((line, index) => {
          if (line.trim().startsWith('import') && line.includes('{') && line.includes('}')) {
            const imports = line.match(/\{([^}]+)\}/);
            if (imports) {
              const importList = imports[1].split(',').map(imp => imp.trim());
              importList.forEach(imp => {
                if (!content.includes(imp) && !imp.includes('*')) {
                  issues.push({
                    file,
                    type: 'unused_import',
                    message: `Potentially unused import: ${imp}`,
                    line: index + 1
                  });
                }
              });
            }
          }
        });
      });
      
      this.log(`Found ${issues.length} potential issues`);
      
      // Generate report
      const report = {
        timestamp: new Date().toISOString(),
        totalFiles: tsFiles.length,
        issuesFound: issues.length,
        issues: issues,
        recommendations: [
          'Remove console.log statements for production',
          'Address TODO/FIXME comments',
          'Remove unused imports to reduce bundle size',
          'Consider adding error boundaries for better error handling',
          'Implement proper TypeScript types for better type safety'
        ]
      };
      
      const reportFile = path.join(__dirname, 'logs', 'ai-code-analysis-report.json');
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      
      this.log(`📊 Analysis report saved to: ${reportFile}`);
      this.log('✅ AI Code Analysis completed successfully');
      
      return { success: true, report };
      
    } catch (error) {
      this.log(`❌ Error during code analysis: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  findFiles(...extensions) {
    const files = [];
    
    function searchDir(dir) {
      const items = fs.readdirSync(dir);
      
      items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip node_modules and .next directories
          if (!['node_modules', '.next', 'dist', 'build'].includes(item)) {
            searchDir(fullPath);
          }
        } else if (stat.isFile()) {
          const ext = path.extname(item);
          if (extensions.includes(ext)) {
            files.push(fullPath);
          }
        }
      });
    }
    
    searchDir(process.cwd());
    return files;
  }
}

// Run the analyzer
const analyzer = new AICodeAnalyzer();
const result = analyzer.analyzeCodeQuality();

if (!result.success) {
  process.exit(1);
}