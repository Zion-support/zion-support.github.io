#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class CodeQualityMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'reports');
    this.startTime = Date.now();
    this.results = {
      qualityScore: 0,
      issuesFound: 0,
      filesAnalyzed: 0,
      metrics: {},
      success: false
    };
    
    // Ensure reports directory exists
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Code Quality Monitor: ${message}`);
  }

  async analyzeCodeQuality() {
    this.log('Analyzing code quality...');
    
    try {
      const metrics = {};
      
      // Analyze file structure
      metrics.fileStructure = await this.analyzeFileStructure();
      
      // Analyze code complexity
      metrics.complexity = await this.analyzeCodeComplexity();
      
      // Analyze code duplication
      metrics.duplication = await this.analyzeCodeDuplication();
      
      // Analyze maintainability
      metrics.maintainability = await this.analyzeMaintainability();
      
      // Analyze test coverage
      metrics.testCoverage = await this.analyzeTestCoverage();
      
      // Analyze documentation
      metrics.documentation = await this.analyzeDocumentation();
      
      this.results.metrics = metrics;
      
      // Calculate overall quality score
      this.results.qualityScore = this.calculateQualityScore(metrics);
      
      this.log(`Code quality analysis completed. Overall score: ${this.results.qualityScore}/100`);
      
      return metrics;
      
    } catch (error) {
      this.log(`Code quality analysis failed: ${error.message}`);
      return {};
    }
  }

  async analyzeFileStructure() {
    this.log('Analyzing file structure...');
    
    try {
      const sourceDirs = ['src', 'scripts', 'utils', 'components', 'pages', 'hooks', 'context'];
      const structure = {
        totalFiles: 0,
        directories: 0,
        averageFilesPerDir: 0,
        largestDirectory: '',
        largestDirectorySize: 0
      };
      
      for (const dir of sourceDirs) {
        const dirPath = path.join(this.projectRoot, dir);
        if (fs.existsSync(dirPath)) {
          const stats = this.getDirectoryStats(dirPath);
          structure.totalFiles += stats.fileCount;
          structure.directories += stats.dirCount;
          
          if (stats.fileCount > structure.largestDirectorySize) {
            structure.largestDirectorySize = stats.fileCount;
            structure.largestDirectory = dir;
          }
        }
      }
      
      structure.averageFilesPerDir = structure.directories > 0 ? 
        Math.round(structure.totalFiles / structure.directories) : 0;
      
      return structure;
      
    } catch (error) {
      this.log(`File structure analysis failed: ${error.message}`);
      return {};
    }
  }

  getDirectoryStats(dirPath) {
    let fileCount = 0;
    let dirCount = 0;
    
    try {
      const items = fs.readdirSync(dirPath);
      
      for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          dirCount++;
          const subStats = this.getDirectoryStats(fullPath);
          fileCount += subStats.fileCount;
          dirCount += subStats.dirCount;
        } else if (this.isSourceFile(item)) {
          fileCount++;
        }
      }
    } catch (error) {
      // Skip directories we can't read
    }
    
    return { fileCount, dirCount };
  }

  isSourceFile(filename) {
    const extensions = ['.js', '.jsx', '.ts', '.tsx', '.cjs', '.mjs'];
    return extensions.some(ext => filename.endsWith(ext));
  }

  async analyzeCodeComplexity() {
    this.log('Analyzing code complexity...');
    
    try {
      const complexity = {
        averageCyclomaticComplexity: 0,
        highComplexityFunctions: 0,
        totalFunctions: 0
      };
      
      // Simple complexity analysis based on control flow statements
      const sourceFiles = this.findSourceFiles();
      let totalComplexity = 0;
      
      for (const file of sourceFiles) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          const fileComplexity = this.calculateFileComplexity(content);
          totalComplexity += fileComplexity;
          complexity.totalFunctions += this.countFunctions(content);
          
          if (fileComplexity > 10) {
            complexity.highComplexityFunctions++;
          }
        } catch (error) {
          // Skip files we can't read
        }
      }
      
      complexity.averageCyclomaticComplexity = sourceFiles.length > 0 ? 
        Math.round((totalComplexity / sourceFiles.length) * 100) / 100 : 0;
      
      return complexity;
      
    } catch (error) {
      this.log(`Code complexity analysis failed: ${error.message}`);
      return {};
    }
  }

  findSourceFiles() {
    const sourceDirs = ['src', 'scripts', 'utils', 'components', 'pages', 'hooks', 'context'];
    const files = [];
    
    for (const dir of sourceDirs) {
      const dirPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(dirPath)) {
        this.collectSourceFiles(dirPath, files);
      }
    }
    
    return files;
  }

  collectSourceFiles(dirPath, files) {
    try {
      const items = fs.readdirSync(dirPath);
      
      for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          this.collectSourceFiles(fullPath, files);
        } else if (this.isSourceFile(item)) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      // Skip directories we can't read
    }
  }

  calculateFileComplexity(content) {
    let complexity = 1; // Base complexity
    
    // Add complexity for control flow statements
    const patterns = [
      /\bif\b/g,
      /\belse\b/g,
      /\bfor\b/g,
      /\bwhile\b/g,
      /\bdo\b/g,
      /\bswitch\b/g,
      /\bcase\b/g,
      /\bcatch\b/g,
      /\b\?\b/g, // Ternary operator
      /\b&&\b/g, // Logical AND
      /\b\|\|\b/g // Logical OR
    ];
    
    for (const pattern of patterns) {
      const matches = content.match(pattern);
      if (matches) {
        complexity += matches.length;
      }
    }
    
    return complexity;
  }

  countFunctions(content) {
    const patterns = [
      /\bfunction\s+\w+\s*\(/g,
      /\bconst\s+\w+\s*=\s*\(/g,
      /\blet\s+\w+\s*=\s*\(/g,
      /\bvar\s+\w+\s*=\s*\(/g,
      /\b\w+\s*:\s*\(/g, // Arrow functions in objects
      /\b\w+\s*:\s*function\s*\(/g // Method definitions
    ];
    
    let count = 0;
    for (const pattern of patterns) {
      const matches = content.match(pattern);
      if (matches) {
        count += matches.length;
      }
    }
    
    return count;
  }

  async analyzeCodeDuplication() {
    this.log('Analyzing code duplication...');
    
    try {
      const duplication = {
        duplicateLines: 0,
        duplicateBlocks: 0,
        totalLines: 0,
        duplicationPercentage: 0
      };
      
      const sourceFiles = this.findSourceFiles();
      const allLines = [];
      
      // Collect all lines from source files
      for (const file of sourceFiles) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          const lines = content.split('\n').map(line => line.trim()).filter(line => line.length > 0);
          allLines.push(...lines);
          duplication.totalLines += lines.length;
        } catch (error) {
          // Skip files we can't read
        }
      }
      
      // Find duplicate lines
      const lineCounts = {};
      for (const line of allLines) {
        lineCounts[line] = (lineCounts[line] || 0) + 1;
      }
      
      for (const [line, count] of Object.entries(lineCounts)) {
        if (count > 1) {
          duplication.duplicateLines += count - 1;
        }
      }
      
      duplication.duplicationPercentage = duplication.totalLines > 0 ? 
        Math.round((duplication.duplicateLines / duplication.totalLines) * 100) : 0;
      
      return duplication;
      
    } catch (error) {
      this.log(`Code duplication analysis failed: ${error.message}`);
      return {};
    }
  }

  async analyzeMaintainability() {
    this.log('Analyzing maintainability...');
    
    try {
      const maintainability = {
        averageFileSize: 0,
        largeFiles: 0,
        longFunctions: 0,
        maintainabilityIndex: 0
      };
      
      const sourceFiles = this.findSourceFiles();
      let totalSize = 0;
      
      for (const file of sourceFiles) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          const lines = content.split('\n');
          const size = lines.length;
          
          totalSize += size;
          
          if (size > 500) {
            maintainability.largeFiles++;
          }
          
          // Check for long functions
          const functions = this.extractFunctions(content);
          for (const func of functions) {
            if (func.lines > 50) {
              maintainability.longFunctions++;
            }
          }
          
        } catch (error) {
          // Skip files we can't read
        }
      }
      
      maintainability.averageFileSize = sourceFiles.length > 0 ? 
        Math.round(totalSize / sourceFiles.length) : 0;
      
      // Calculate maintainability index (simplified)
      maintainability.maintainabilityIndex = Math.max(0, 100 - 
        (maintainability.largeFiles * 5) - 
        (maintainability.longFunctions * 3) - 
        (maintainability.averageFileSize / 10));
      
      return maintainability;
      
    } catch (error) {
      this.log(`Maintainability analysis failed: ${error.message}`);
      return {};
    }
  }

  extractFunctions(content) {
    const functions = [];
    const lines = content.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('function') || line.includes('=>') || line.includes('(')) {
        let startLine = i;
        let braceCount = 0;
        let inFunction = false;
        
        // Find function start
        if (line.includes('{')) {
          braceCount++;
          inFunction = true;
        }
        
        // Find function end
        if (inFunction) {
          for (let j = i + 1; j < lines.length; j++) {
            const funcLine = lines[j];
            if (funcLine.includes('{')) braceCount++;
            if (funcLine.includes('}')) braceCount--;
            
            if (braceCount === 0) {
              functions.push({
                startLine: startLine + 1,
                endLine: j + 1,
                lines: j - startLine + 1
              });
              break;
            }
          }
        }
      }
    }
    
    return functions;
  }

  async analyzeTestCoverage() {
    this.log('Analyzing test coverage...');
    
    try {
      const coverage = {
        testFiles: 0,
        sourceFiles: 0,
        coveragePercentage: 0
      };
      
      // Count test files
      const testDirs = ['tests', 'test', '__tests__'];
      for (const dir of testDirs) {
        const dirPath = path.join(this.projectRoot, dir);
        if (fs.existsSync(dirPath)) {
          const testFiles = this.countTestFiles(dirPath);
          coverage.testFiles += testFiles;
        }
      }
      
      // Count source files
      coverage.sourceFiles = this.findSourceFiles().length;
      
      // Calculate coverage percentage
      coverage.coveragePercentage = coverage.sourceFiles > 0 ? 
        Math.round((coverage.testFiles / coverage.sourceFiles) * 100) : 0;
      
      return coverage;
      
    } catch (error) {
      this.log(`Test coverage analysis failed: ${error.message}`);
      return {};
    }
  }

  countTestFiles(dirPath) {
    let count = 0;
    
    try {
      const items = fs.readdirSync(dirPath);
      
      for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          count += this.countTestFiles(fullPath);
        } else if (item.includes('.test.') || item.includes('.spec.')) {
          count++;
        }
      }
    } catch (error) {
      // Skip directories we can't read
    }
    
    return count;
  }

  async analyzeDocumentation() {
    this.log('Analyzing documentation...');
    
    try {
      const documentation = {
        documentedFiles: 0,
        totalFiles: 0,
        documentationPercentage: 0,
        readmeFiles: 0
      };
      
      const sourceFiles = this.findSourceFiles();
      documentation.totalFiles = sourceFiles.length;
      
      // Check for README files
      const readmeFiles = ['README.md', 'README.txt', 'README'];
      for (const readme of readmeFiles) {
        if (fs.existsSync(path.join(this.projectRoot, readme))) {
          documentation.readmeFiles++;
        }
      }
      
      // Check for JSDoc comments in source files
      for (const file of sourceFiles) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          if (content.includes('/**') || content.includes('/*') || content.includes('//')) {
            documentation.documentedFiles++;
          }
        } catch (error) {
          // Skip files we can't read
        }
      }
      
      documentation.documentationPercentage = documentation.totalFiles > 0 ? 
        Math.round((documentation.documentedFiles / documentation.totalFiles) * 100) : 0;
      
      return documentation;
      
    } catch (error) {
      this.log(`Documentation analysis failed: ${error.message}`);
      return {};
    }
  }

  calculateQualityScore(metrics) {
    let score = 100;
    
    // Deduct points for various issues
    if (metrics.complexity) {
      if (metrics.complexity.averageCyclomaticComplexity > 5) {
        score -= 10;
      }
      if (metrics.complexity.highComplexityFunctions > 0) {
        score -= metrics.complexity.highComplexityFunctions * 2;
      }
    }
    
    if (metrics.duplication) {
      score -= Math.min(20, metrics.duplication.duplicationPercentage);
    }
    
    if (metrics.maintainability) {
      if (metrics.maintainability.largeFiles > 0) {
        score -= Math.min(15, metrics.maintainability.largeFiles * 3);
      }
      if (metrics.maintainability.longFunctions > 0) {
        score -= Math.min(15, metrics.maintainability.longFunctions * 2);
      }
    }
    
    if (metrics.testCoverage) {
      if (metrics.testCoverage.coveragePercentage < 50) {
        score -= 20;
      } else if (metrics.testCoverage.coveragePercentage < 80) {
        score -= 10;
      }
    }
    
    if (metrics.documentation) {
      if (metrics.documentation.documentationPercentage < 30) {
        score -= 15;
      } else if (metrics.documentation.documentationPercentage < 60) {
        score -= 8;
      }
    }
    
    return Math.max(0, Math.round(score));
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      results: this.results,
      summary: {
        qualityScore: this.results.qualityScore,
        issuesFound: this.results.issuesFound,
        filesAnalyzed: this.results.filesAnalyzed,
        grade: this.getQualityGrade(this.results.qualityScore),
        efficiency: `Analysis completed in ${Math.round((Date.now() - this.startTime) / 1000)}s`
      }
    };
    
    const reportPath = path.join(this.reportsDir, 'code-quality-monitor-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Report generated: ${reportPath}`);
    return report;
  }

  getQualityGrade(score) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  }

  async run() {
    this.log('Starting Code Quality Monitor...');
    
    try {
      // Analyze code quality
      const metrics = await this.analyzeCodeQuality();
      
      // Count total issues
      this.results.issuesFound = this.countTotalIssues(metrics);
      this.results.filesAnalyzed = this.findSourceFiles().length;
      
      // Determine success
      this.results.success = this.results.qualityScore >= 70;
      
      // Generate report
      await this.generateReport();
      
      this.log(`Code Quality Monitor completed. Quality score: ${this.results.qualityScore}/100 (${this.getQualityGrade(this.results.qualityScore)})`);
      this.log(`Found ${this.results.issuesFound} issues in ${this.results.filesAnalyzed} files`);
      
      return this.results;
      
    } catch (error) {
      this.log(`Code Quality Monitor failed: ${error.message}`);
      this.results.success = false;
      return this.results;
    }
  }

  countTotalIssues(metrics) {
    let total = 0;
    
    if (metrics.complexity) {
      total += metrics.complexity.highComplexityFunctions;
    }
    
    if (metrics.maintainability) {
      total += metrics.maintainability.largeFiles;
      total += metrics.maintainability.longFunctions;
    }
    
    if (metrics.duplication) {
      total += Math.ceil(metrics.duplication.duplicationPercentage / 10);
    }
    
    return total;
  }
}

// Run the monitor if called directly
if (require.main === module) {
  const monitor = new CodeQualityMonitor();
  monitor.run().then(results => {
    process.exit(results.success ? 0 : 1);
  }).catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = CodeQualityMonitor;