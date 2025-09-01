#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const glob = require('glob');

class CodeQualityMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.automationInterval = parseInt(process.env.AUTOMATION_INTERVAL) || 2400000; // 40 minutes default
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] [CodeQualityMonitor] ${message}`);
  }

  async run() {
    this.log('Starting code quality monitoring...');
    
    try {
      await this.monitorCodeQuality();
      this.log('Code quality monitoring completed.');
    } catch (error) {
      this.log(`Error during code quality monitoring: ${error.message}`);
    }
  }

  async monitorCodeQuality() {
    this.log('Monitoring code quality...');
    
    const report = {
      timestamp: new Date().toISOString(),
      metrics: {},
      issues: [],
      recommendations: []
    };
    
    try {
      // Count files and lines
      const files = glob.sync('**/*.{js,jsx,ts,tsx}', { 
        ignore: ['node_modules/**', '.git/**', 'dist/**', 'build/**', 'out/**'] 
      });
      
      let totalLines = 0;
      let totalFiles = files.length;
      
      for (const file of files) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          totalLines += content.split('\n').length;
        } catch (error) {
          // Skip files that can't be read
        }
      }
      
      report.metrics = {
        totalFiles,
        totalLines,
        averageLinesPerFile: Math.round(totalLines / totalFiles)
      };
      
      // Check for code quality issues
      report.issues = await this.detectCodeQualityIssues(files);
      
      // Generate recommendations
      report.recommendations = this.generateRecommendations(report);
      
      // Save report
      const timestamp = Date.now();
      const reportPath = path.join(this.projectRoot, 'error-reports', `code-quality-report-${timestamp}.json`);
      
      const dir = path.dirname(reportPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      this.log(`Code quality report saved to: ${reportPath}`);
      
    } catch (error) {
      this.log(`Error monitoring code quality: ${error.message}`);
    }
  }

  async detectCodeQualityIssues(files) {
    const issues = [];
    
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const lines = content.split('\n');
        
        // Check for long functions
        const functionMatches = content.match(/function\s+\w+\s*\([^)]*\)\s*\{/g) || [];
        if (functionMatches.length > 0) {
          // Simple heuristic for function length
          const functionBlocks = content.split(/function\s+\w+\s*\([^)]*\)\s*\{/);
          for (let i = 1; i < functionBlocks.length; i++) {
            const block = functionBlocks[i];
            const linesInFunction = block.split('\n').length;
            if (linesInFunction > 50) {
              issues.push({
                type: 'long_function',
                file,
                severity: 'warning',
                message: `Function with ${linesInFunction} lines detected`
              });
            }
          }
        }
        
        // Check for large files
        if (lines.length > 500) {
          issues.push({
            type: 'large_file',
            file,
            severity: 'warning',
            message: `File has ${lines.length} lines`
          });
        }
        
        // Check for TODO comments
        const todoMatches = content.match(/TODO:/g) || [];
        if (todoMatches.length > 0) {
          issues.push({
            type: 'todo_comments',
            file,
            severity: 'info',
            message: `${todoMatches.length} TODO comments found`
          });
        }
        
      } catch (error) {
        // Skip files that can't be read
      }
    }
    
    return issues;
  }

  generateRecommendations(report) {
    const recommendations = [];
    
    if (report.metrics.averageLinesPerFile > 200) {
      recommendations.push('Consider breaking down large files into smaller modules');
    }
    
    const longFunctions = report.issues.filter(issue => issue.type === 'long_function');
    if (longFunctions.length > 0) {
      recommendations.push('Refactor long functions to improve readability and maintainability');
    }
    
    const todoComments = report.issues.filter(issue => issue.type === 'todo_comments');
    if (todoComments.length > 0) {
      recommendations.push('Address TODO comments to improve code completeness');
    }
    
    return recommendations;
  }
}

const monitor = new CodeQualityMonitor();
monitor.run().catch(console.error);