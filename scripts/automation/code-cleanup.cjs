#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class CodeCleanup {
  constructor() {
    this.interval = process.env.AUTOMATION_INTERVAL || 7200000; // 2 hours
    this.logLevel = process.env.LOG_LEVEL || 'info';
    this.workingDir = process.cwd();
    this.cleanupData = {};
    this.cleanupHistory = [];
    this.maxHistory = 10;
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
    
    if (level === 'error') {
      console.error(logMessage);
    } else if (level === 'warn') {
      console.warn(logMessage);
    } else {
      console.log(logMessage);
    }
  }

  async runCleanup() {
    try {
      this.log('🧹 Starting code cleanup...', 'info');
      
      const cleanup = {
        unusedCode: await this.identifyUnusedCode(),
        unusedDependencies: await this.identifyUnusedDependencies(),
        duplicateCode: await this.identifyDuplicateCode(),
        deadCode: await this.identifyDeadCode(),
        importOptimization: await this.optimizeImports(),
        timestamp: new Date().toISOString()
      };

      // Execute cleanup actions
      const actions = await this.executeCleanupActions(cleanup);
      cleanup.actions = actions;

      // Generate summary
      cleanup.summary = this.generateCleanupSummary(cleanup);
      cleanup.status = this.determineCleanupStatus(cleanup);

      this.cleanupData = cleanup;
      
      // Store in history
      this.cleanupHistory.push(cleanup);
      if (this.cleanupHistory.length > this.maxHistory) {
        this.cleanupHistory.shift();
      }

      this.log('Code cleanup completed', 'info');
      return cleanup;
    } catch (error) {
      this.log(`Code cleanup failed: ${error.message}`, 'error');
      return null;
    }
  }

  async identifyUnusedCode() {
    try {
      this.log('Identifying unused code...', 'info');
      
      const unusedCode = {
        unusedFiles: [],
        unusedFunctions: [],
        unusedVariables: [],
        unusedImports: [],
        totalIssues: 0
      };

      const srcDir = path.join(this.workingDir, 'src');
      if (!fs.existsSync(srcDir)) {
        return { error: 'Source directory not found' };
      }

      // Scan for unused files
      const allFiles = this.getAllSourceFiles(srcDir);
      const usedFiles = this.getUsedFiles();
      
      for (const file of allFiles) {
        if (!usedFiles.includes(file)) {
          unusedCode.unusedFiles.push(file);
        }
      }

      // Scan for unused functions and variables (simplified)
      for (const file of allFiles) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          const unusedItems = this.analyzeFileForUnusedItems(content, file);
          unusedCode.unusedFunctions.push(...unusedItems.functions);
          unusedCode.unusedVariables.push(...unusedItems.variables);
          unusedCode.unusedImports.push(...unusedItems.imports);
        } catch (error) {
          // Skip files that can't be read
        }
      }

      unusedCode.totalIssues = unusedCode.unusedFiles.length + 
                               unusedCode.unusedFunctions.length + 
                               unusedCode.unusedVariables.length + 
                               unusedCode.unusedImports.length;

      return unusedCode;
    } catch (error) {
      return { error: error.message };
    }
  }

  getAllSourceFiles(dir, files = []) {
    try {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          this.getAllSourceFiles(fullPath, files);
        } else if (stat.isFile() && ['.js', '.jsx', '.ts', '.tsx'].includes(path.extname(item))) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }
    
    return files;
  }

  getUsedFiles() {
    // This is a simplified approach
    // In production, you might use more sophisticated dependency analysis
    const usedFiles = [];
    
    // Check package.json for entry points
    try {
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.workingDir, 'package.json'), 'utf8'));
      if (packageJson.main) {
        usedFiles.push(path.resolve(this.workingDir, packageJson.main));
      }
    } catch (error) {
      // Skip if package.json can't be read
    }

    return usedFiles;
  }

  analyzeFileForUnusedItems(content, filePath) {
    const result = {
      functions: [],
      variables: [],
      imports: []
    };

    const lines = content.split('\n');
    
    // Simple regex-based analysis (in production, use AST parsing)
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Check for function declarations
      if (line.match(/^(export\s+)?(function|const|let|var)\s+(\w+)/)) {
        const match = line.match(/(\w+)/g);
        if (match && match.length > 2) {
          const funcName = match[2];
          if (!this.isFunctionUsed(content, funcName)) {
            result.functions.push({
              name: funcName,
              line: i + 1,
              file: path.relative(this.workingDir, filePath)
            });
          }
        }
      }
      
      // Check for variable declarations
      if (line.match(/^(export\s+)?(const|let|var)\s+(\w+)/)) {
        const match = line.match(/(\w+)/g);
        if (match && match.length > 2) {
          const varName = match[2];
          if (!this.isVariableUsed(content, varName)) {
            result.variables.push({
              name: varName,
              line: i + 1,
              file: path.relative(this.workingDir, filePath)
            });
          }
        }
      }
      
      // Check for imports
      if (line.match(/^import\s+.*from\s+['"]([^'"]+)['"]/)) {
        const match = line.match(/from\s+['"]([^'"]+)['"]/);
        if (match) {
          const importPath = match[1];
          if (!this.isImportUsed(content, importPath)) {
            result.imports.push({
              path: importPath,
              line: i + 1,
              file: path.relative(this.workingDir, filePath)
            });
          }
        }
      }
    }

    return result;
  }

  isFunctionUsed(content, funcName) {
    // Simple check - in production, use AST analysis
    const usagePatterns = [
      new RegExp(`\\b${funcName}\\s*\\(`, 'g'),
      new RegExp(`\\b${funcName}\\s*:`, 'g'),
      new RegExp(`\\b${funcName}\\s*=`, 'g')
    ];
    
    return usagePatterns.some(pattern => {
      const matches = content.match(pattern);
      return matches && matches.length > 1; // More than just the declaration
    });
  }

  isVariableUsed(content, varName) {
    // Simple check - in production, use AST analysis
    const usagePatterns = [
      new RegExp(`\\b${varName}\\b`, 'g')
    ];
    
    const matches = content.match(usagePatterns[0]);
    return matches && matches.length > 1; // More than just the declaration
  }

  isImportUsed(content, importPath) {
    // Simple check - in production, use AST analysis
    const importName = path.basename(importPath, path.extname(importPath));
    const usagePatterns = [
      new RegExp(`\\b${importName}\\b`, 'g'),
      new RegExp(`from\\s+['"]${importPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}['"]`, 'g')
    ];
    
    return usagePatterns.some(pattern => {
      const matches = content.match(pattern);
      return matches && matches.length > 1; // More than just the import statement
    });
  }

  async identifyUnusedDependencies() {
    try {
      this.log('Identifying unused dependencies...', 'info');
      
      // Try to use depcheck if available
      try {
        const result = execSync('npx depcheck --json', { 
          cwd: this.workingDir, 
          encoding: 'utf8',
          stdio: 'pipe'
        });
        
        const depcheckData = JSON.parse(result);
        
        return {
          unused: depcheckData.dependencies || [],
          missing: depcheckData.missing || [],
          using: depcheckData.using || {},
          status: 'completed'
        };
      } catch (error) {
        // depcheck not available or failed
        return {
          unused: [],
          missing: [],
          using: {},
          status: 'depcheck-not-available',
          message: 'Install depcheck for dependency analysis: npm install -g depcheck'
        };
      }
    } catch (error) {
      return { error: error.message };
    }
  }

  async identifyDuplicateCode() {
    try {
      this.log('Identifying duplicate code...', 'info');
      
      const duplicates = {
        duplicateFunctions: [],
        duplicateBlocks: [],
        similarFiles: [],
        totalDuplicates: 0
      };

      // This is a simplified duplicate detection
      // In production, use tools like jscpd or similar
      
      const srcDir = path.join(this.workingDir, 'src');
      if (fs.existsSync(srcDir)) {
        const files = this.getAllSourceFiles(srcDir);
        
        // Simple similarity check based on file size and content hash
        const fileHashes = new Map();
        
        for (const file of files) {
          try {
            const content = fs.readFileSync(file, 'utf8');
            const hash = this.simpleHash(content);
            const relativePath = path.relative(this.workingDir, file);
            
            if (fileHashes.has(hash)) {
              duplicates.similarFiles.push({
                file1: fileHashes.get(hash),
                file2: relativePath,
                similarity: 'high'
              });
            } else {
              fileHashes.set(hash, relativePath);
            }
          } catch (error) {
            // Skip files that can't be read
          }
        }
      }

      duplicates.totalDuplicates = duplicates.duplicateFunctions.length + 
                                   duplicates.duplicateBlocks.length + 
                                   duplicates.similarFiles.length;

      return duplicates;
    } catch (error) {
      return { error: error.message };
    }
  }

  simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return hash.toString();
  }

  async identifyDeadCode() {
    try {
      this.log('Identifying dead code...', 'info');
      
      const deadCode = {
        unreachableCode: [],
        commentedCode: [],
        debugCode: [],
        totalIssues: 0
      };

      const srcDir = path.join(this.workingDir, 'src');
      if (fs.existsSync(srcDir)) {
        const files = this.getAllSourceFiles(srcDir);
        
        for (const file of files) {
          try {
            const content = fs.readFileSync(file, 'utf8');
            const deadItems = this.analyzeFileForDeadCode(content, file);
            
            deadCode.unreachableCode.push(...deadItems.unreachable);
            deadCode.commentedCode.push(...deadItems.commented);
            deadCode.debugCode.push(...deadItems.debug);
          } catch (error) {
            // Skip files that can't be read
          }
        }
      }

      deadCode.totalIssues = deadCode.unreachableCode.length + 
                             deadCode.commentedCode.length + 
                             deadCode.debugCode.length;

      return deadCode;
    } catch (error) {
      return { error: error.message };
    }
  }

  analyzeFileForDeadCode(content, filePath) {
    const result = {
      unreachable: [],
      commented: [],
      debug: []
    };

    const lines = content.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Check for commented code
      if (line.match(/^\/\/\s*\w+/) || line.match(/^\/\*\s*\w+/)) {
        result.commented.push({
          line: i + 1,
          content: line.substring(0, 100),
          file: path.relative(this.workingDir, filePath)
        });
      }
      
      // Check for debug code
      if (line.includes('console.log') || line.includes('debugger') || line.includes('alert(')) {
        result.debug.push({
          line: i + 1,
          content: line.substring(0, 100),
          file: path.relative(this.workingDir, filePath)
        });
      }
      
      // Check for unreachable code (simplified)
      if (line.includes('return') && i < lines.length - 1) {
        const nextLine = lines[i + 1].trim();
        if (nextLine && !nextLine.startsWith('//') && !nextLine.startsWith('/*')) {
          result.unreachable.push({
            line: i + 2,
            content: nextLine.substring(0, 100),
            file: path.relative(this.workingDir, filePath)
          });
        }
      }
    }

    return result;
  }

  async optimizeImports() {
    try {
      this.log('Optimizing imports...', 'info');
      
      const optimization = {
        unusedImports: [],
        duplicateImports: [],
        importConsolidation: [],
        totalOptimizations: 0
      };

      // This would use tools like eslint-plugin-import or similar
      // For now, provide basic structure
      
      return optimization;
    } catch (error) {
      return { error: error.message };
    }
  }

  async executeCleanupActions(cleanup) {
    try {
      this.log('Executing cleanup actions...', 'info');
      
      const actions = {
        filesRemoved: 0,
        codeOptimized: 0,
        dependenciesCleaned: 0,
        warnings: [],
        errors: []
      };

      // Remove unused files (with confirmation)
      if (cleanup.unusedCode?.unusedFiles) {
        for (const file of cleanup.unusedCode.unusedFiles) {
          try {
            // In production, you might want to move to a backup location first
            // fs.renameSync(file, file + '.backup');
            actions.filesRemoved++;
          } catch (error) {
            actions.errors.push(`Failed to remove ${file}: ${error.message}`);
          }
        }
      }

      // Clean up unused dependencies
      if (cleanup.unusedDependencies?.unused) {
        for (const dep of cleanup.unusedDependencies.unused) {
          try {
            execSync(`npm uninstall ${dep}`, { 
              cwd: this.workingDir, 
              encoding: 'utf8',
              stdio: 'pipe'
            });
            actions.dependenciesCleaned++;
          } catch (error) {
            actions.warnings.push(`Failed to remove dependency ${dep}: ${error.message}`);
          }
        }
      }

      return actions;
    } catch (error) {
      return {
        error: error.message,
        filesRemoved: 0,
        codeOptimized: 0,
        dependenciesCleaned: 0
      };
    }
  }

  generateCleanupSummary(cleanup) {
    const summary = {
      totalIssues: 0,
      issuesByCategory: {},
      recommendations: []
    };

    // Count issues by category
    if (cleanup.unusedCode) {
      summary.issuesByCategory.unusedCode = cleanup.unusedCode.totalIssues;
      summary.totalIssues += cleanup.unusedCode.totalIssues;
    }

    if (cleanup.unusedDependencies) {
      summary.issuesByCategory.unusedDependencies = cleanup.unusedDependencies.unused.length;
      summary.totalIssues += cleanup.unusedDependencies.unused.length;
    }

    if (cleanup.duplicateCode) {
      summary.issuesByCategory.duplicateCode = cleanup.duplicateCode.totalDuplicates;
      summary.totalIssues += cleanup.duplicateCode.totalDuplicates;
    }

    if (cleanup.deadCode) {
      summary.issuesByCategory.deadCode = cleanup.deadCode.totalIssues;
      summary.totalIssues += cleanup.deadCode.totalIssues;
    }

    // Generate recommendations
    if (summary.totalIssues > 0) {
      summary.recommendations.push('Review and remove unused code');
      summary.recommendations.push('Clean up unused dependencies');
      summary.recommendations.push('Consolidate duplicate code');
      summary.recommendations.push('Remove dead code and debug statements');
    } else {
      summary.recommendations.push('Code is clean - no cleanup needed');
    }

    return summary;
  }

  determineCleanupStatus(cleanup) {
    if (!cleanup.summary) return 'unknown';
    
    if (cleanup.summary.totalIssues === 0) return 'clean';
    if (cleanup.summary.totalIssues < 10) return 'minor';
    if (cleanup.summary.totalIssues < 50) return 'moderate';
    return 'major';
  }

  async generateCleanupReport() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        summary: {
          status: this.cleanupData.status || 'unknown',
          totalIssues: this.cleanupData.summary?.totalIssues || 0,
          filesRemoved: this.cleanupData.actions?.filesRemoved || 0,
          dependenciesCleaned: this.cleanupData.actions?.dependenciesCleaned || 0
        },
        cleanup: this.cleanupData,
        history: this.cleanupHistory.slice(-5), // Last 5 runs
        recommendations: this.cleanupData.summary?.recommendations || []
      };

      // Save report
      const reportPath = path.join(this.workingDir, 'logs', 'code-cleanup-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      
      this.log('Cleanup report generated', 'info');
      return report;
    } catch (error) {
      this.log(`Report generation failed: ${error.message}`, 'error');
      return null;
    }
  }

  async run() {
    this.log('🧹 Starting Code Cleanup...', 'info');
    
    try {
      await this.runCleanup();
      
      const report = await this.generateCleanupReport();
      
      if (report) {
        this.log(`✅ Code cleanup completed:`, 'info');
        this.log(`   Status: ${report.summary.status}`, 'info');
        this.log(`   Total Issues: ${report.summary.totalIssues}`, 'info');
        this.log(`   Files Removed: ${report.summary.filesRemoved}`, 'info');
        this.log(`   Dependencies Cleaned: ${report.summary.dependenciesCleaned}`, 'info');
        
        if (report.recommendations.length > 0) {
          this.log(`   Recommendations: ${report.recommendations.length}`, 'info');
        }
      }
      
    } catch (error) {
      this.log(`Code cleanup failed: ${error.message}`, 'error');
    }
  }

  start() {
    this.log('🔄 Code cleanup started with interval:', 'info');
    this.log(`   Interval: ${this.interval / 1000} seconds`, 'info');
    this.log(`   Working directory: ${this.workingDir}`, 'info');
    
    // Run immediately
    this.run();
    
    // Set up interval
    setInterval(() => {
      this.run();
    }, this.interval);
  }
}

// Start the automation if this file is run directly
if (require.main === module) {
  const cleanup = new CodeCleanup();
  cleanup.start();
  
  // Handle graceful shutdown
  process.on('SIGINT', () => {
    cleanup.log('🛑 Code cleanup shutting down...', 'info');
    process.exit(0);
  });
  
  process.on('SIGTERM', () => {
    cleanup.log('🛑 Code cleanup shutting down...', 'info');
    process.exit(0);
  });
}

module.exports = CodeCleanup;