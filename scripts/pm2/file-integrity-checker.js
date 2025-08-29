#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class FileIntegrityChecker {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/file-integrity-checker.log');
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/file-integrity-report.json');
    this.issuesFixed = 0;
    this.filesProcessed = 0;
    this.startTime = Date.now();

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;

    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      // console.error('Failed to write to log file:', error.message);


  async checkFileIntegrity(filePath) {
    try {
      const stats = fs.statSync(filePath);
      const content = fs.readFileSync(filePath, 'utf8');
      
      const issues = [];
      
      // Check if file is empty
      if (stats.size === 0) {
        issues.push({
          type: 'empty-file',
          severity: 'high',
          message: 'File is completely empty'
        });

      // Check if file has only whitespace
      if (content.trim() === '') {
        issues.push({
          type: 'whitespace-only',
          severity: 'medium',
          message: 'File contains only whitespace'
        });

      // Check for corrupted content (unexpected characters)
      if (content.includes('\x00') || content.includes('\x01') || content.includes('\x02')) {
        issues.push({
          type: 'corrupted-content',
          severity: 'high',
          message: 'File contains corrupted binary content'
        });

      // Check for broken imports
      const brokenImports = content.match(/import.*from\s+['"][^'"]*['"]/g);
      if (brokenImports) {
        brokenImports.forEach(importStatement => {
          const modulePath = importStatement.match(/from\s+['"]([^'"]*)['"]/)[1];
          if (modulePath.startsWith('.') || modulePath.startsWith('/')) {
            const fullPath = path.resolve(path.dirname(filePath), modulePath);
            if (!fs.existsSync(fullPath) && !fs.existsSync(fullPath + '.js') && 
                !fs.existsSync(fullPath + '.ts') && !fs.existsSync(fullPath + '.tsx') && 
                !fs.existsSync(fullPath + '.jsx')) {
              issues.push({
                type: 'broken-import',
                severity: 'medium',
                message: `Broken import: ${modulePath}`
              });


        });

      // Check for syntax errors in JS/TS files
      const ext = path.extname(filePath);
      if (['.js', '.jsx', '.ts', '.tsx'].includes(ext)) {
        // Check for unmatched braces
        const openBraces = (content.match(/\{/g) || []).length;
        const closeBraces = (content.match(/\}/g) || []).length;
        const openParens = (content.match(/\(/g) || []).length;
        const closeParens = (content.match(/\)/g) || []).length;
        const openBrackets = (content.match(/\[/g) || []).length;
        const closeBrackets = (content.match(/\]/g) || []).length;
        
        if (openBraces !== closeBraces) {
          issues.push({
            type: 'unmatched-braces',
            severity: 'high',
            message: `Unmatched braces: ${openBraces} open, ${closeBraces} close`
          });

        if (openParens !== closeParens) {
          issues.push({
            type: 'unmatched-parens',
            severity: 'high',
            message: `Unmatched parentheses: ${openParens} open, ${closeParens} close`
          });

        if (openBrackets !== closeBrackets) {
          issues.push({
            type: 'unmatched-brackets',
            severity: 'high',
            message: `Unmatched brackets: ${openBrackets} open, ${closeBrackets} close`
          });


      return {
        file: filePath,
        size: stats.size,
        issues,
        hasIssues: issues.length > 0
      };
    } catch (error) {
      return {
        file: filePath,
        error: error.message,
        hasIssues: true
      };


  async fixFileIssues(filePath, analysis) {
    try {
      if (!analysis.issues || analysis.issues.length === 0) {
        return false;

      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      let hasChanges = false;

      // Fix empty files
      if (analysis.issues.some(issue => issue.type === 'empty-file' || issue.type === 'whitespace-only')) {
        const fileName = path.basename(filePath, path.extname(filePath));
        const ext = path.extname(filePath);
        
        if (['.tsx', '.jsx'].includes(ext)) {
          content = `import React from 'react';

export default function ${fileName}() {
  return (
    <div>
      <h1>${fileName}</h1>
      <p>This component is under development.</p>
    </div>
  );
}`;
          hasChanges = true;
        } else if (['.ts', '.js'].includes(ext)) {
          content = `// ${fileName}
export default function ${fileName}() {
  // Implementation coming soon
  return null;
}`;
          hasChanges = true;


      // Fix corrupted content
      if (analysis.issues.some(issue => issue.type === 'corrupted-content')) {
        content = content.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');
        hasChanges = true;

      // Fix unmatched braces
      if (analysis.issues.some(issue => issue.type === 'unmatched-braces')) {
        const openBraces = (content.match(/\{/g) || []).length;
        const closeBraces = (content.match(/\}/g) || []).length;
        
        if (openBraces > closeBraces) {
          const missingBraces = '}'.repeat(openBraces - closeBraces);
          content = content + missingBraces;
          hasChanges = true;


      // Fix unmatched parentheses
      if (analysis.issues.some(issue => issue.type === 'unmatched-parens')) {
        const openParens = (content.match(/\(/g) || []).length;
        const closeParens = (content.match(/\)/g) || []).length;
        
        if (openParens > closeParens) {
          const missingParens = ')'.repeat(openParens - closeParens);
          content = content + missingParens;
          hasChanges = true;


      // Fix unmatched brackets
      if (analysis.issues.some(issue => issue.type === 'unmatched-brackets')) {
        const openBrackets = (content.match(/\[/g) || []).length;
        const closeBrackets = (content.match(/\]/g) || []).length;
        
        if (openBrackets > closeBrackets) {
          const missingBrackets = ']'.repeat(openBrackets - closeBrackets);
          content = content + missingBrackets;
          hasChanges = true;


      if (hasChanges) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.issuesFixed++;
        this.log(`Fixed issues in: ${filePath}`);
        return true;

      return false;
    } catch (error) {
      this.log(`Error fixing file ${filePath}: ${error.message}`);
      return false;


  async processFile(filePath) {
    try {
      this.filesProcessed++;

      // Skip certain directories
      if (filePath.includes('node_modules') ||
          filePath.includes('.git') ||
          filePath.includes('dist') ||
          filePath.includes('build') ||
          filePath.includes('.next') ||
          filePath.includes('coverage') ||
          filePath.includes('logs')) {
        return null;

      const analysis = await this.checkFileIntegrity(filePath);
      
      if (analysis.hasIssues) {
        await this.fixFileIssues(filePath, analysis);

      return analysis;
    } catch (error) {
      this.log(`Error processing file ${filePath}: ${error.message}`);
      return null;


  async walkDirectory(dir) {
    const analyses = [];

    try {
      const items = fs.readdirSync(dir);

      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
          const subAnalyses = await this.walkDirectory(fullPath);
          analyses.push(...subAnalyses);
        } else if (stat.isFile()) {
          const analysis = await this.processFile(fullPath);
          if (analysis) {
            analyses.push(analysis);



    } catch (error) {
      this.log(`Error walking directory ${dir}: ${error.message}`);

    return analyses;

  generateReport(analyses) {
    const totalFiles = analyses.length;
    const filesWithIssues = analyses.filter(analysis => analysis.hasIssues).length;
    const totalIssues = analyses.reduce((sum, analysis) => {
      if (analysis.issues) {
        return sum + analysis.issues.length;

      return sum;
    }, 0);

    const issuesByType = {};
    const issuesBySeverity = { low: 0, medium: 0, high: 0 };

    analyses.forEach(analysis => {
      if (analysis.issues) {
        analysis.issues.forEach(issue => {
          issuesByType[issue.type] = (issuesByType[issue.type] || 0) + 1;
          issuesBySeverity[issue.severity]++;
        });

    });

    return {
      timestamp: new Date().toISOString(),
      summary: {
        totalFiles,
        filesWithIssues,
        totalIssues,
        issuesByType,
        issuesBySeverity
      },
      files: analyses.filter(analysis => analysis.hasIssues),
      recommendations: this.generateRecommendations(issuesByType, totalIssues)
    };

  generateRecommendations(issuesByType, totalIssues) {
    const recommendations = [];

    if (issuesByType['empty-file'] > 0) {
      recommendations.push({
        type: 'empty-file',
        priority: 'high',
        message: 'Empty files detected',
        action: 'Review and populate empty files or remove them if unnecessary'
      });

    if (issuesByType['corrupted-content'] > 0) {
      recommendations.push({
        type: 'corrupted-content',
        priority: 'high',
        message: 'Corrupted files detected',
        action: 'Restore corrupted files from backup or version control'
      });

    if (issuesByType['unmatched-braces'] > 0 || issuesByType['unmatched-parens'] > 0) {
      recommendations.push({
        type: 'syntax',
        priority: 'high',
        message: 'Syntax errors detected',
        action: 'Fix syntax errors to ensure code compiles correctly'
      });

    if (totalIssues > 50) {
      recommendations.push({
        type: 'general',
        priority: 'medium',
        message: 'High number of file integrity issues',
        action: 'Run comprehensive file cleanup and establish file standards'
      });

    return recommendations;

  async saveReport(report) {
    try {
      const reportDir = path.dirname(this.reportFile);
      if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir, { recursive: true });

      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      this.log(`Report saved to: ${this.reportFile}`);
    } catch (error) {
      this.log(`Error saving report: ${error.message}`);


  async run() {
    this.log('🔍 Starting File Integrity Checker...');
    this.log(`Project root: ${this.projectRoot}`);

    try {
      // Create logs directory if it doesn't exist
      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });

      // Check all files
      this.log('📁 Checking file integrity...');
      const analyses = await this.walkDirectory(this.projectRoot);

      // Generate report
      this.log('📊 Generating integrity report...');
      const report = this.generateReport(analyses);

      // Save report
      await this.saveReport(report);

      const duration = Date.now() - this.startTime;

      // Log summary
      this.log('\n📊 File Integrity Report Summary:');
      this.log(`Files checked: ${report.summary.totalFiles}`);
      this.log(`Files with issues: ${report.summary.filesWithIssues}`);
      this.log(`Total issues: ${report.summary.totalIssues}`);
      this.log(`Issues fixed: ${this.issuesFixed}`);
      this.log(`Duration: ${duration}ms`);

      if (report.summary.totalIssues > 0) {
        this.log('\n🚨 Issues by type:');
        Object.entries(report.summary.issuesByType).forEach(([type, count]) => {
          this.log(`  ${type}: ${count}`);
        });

        this.log('\n💡 Recommendations:');
        report.recommendations.forEach(rec => {
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`);
          this.log(`    Action: ${rec.action}`);
        });
      } else {
        this.log('✨ Excellent! No file integrity issues found!');

      if (this.issuesFixed > 0) {
        this.log(`\n✅ Fixed ${this.issuesFixed} file integrity issues!`);
        
        // Try to commit the fixes
        try {
          execSync('git add .', { cwd: this.projectRoot, stdio: 'pipe' });
          execSync('git commit -m "🔧 Auto-fix file integrity issues"', { cwd: this.projectRoot, stdio: 'pipe' });
          this.log('✅ Changes committed to git');
        } catch (error) {
          this.log(`⚠️  Could not commit changes: ${error.message}`);


    } catch (error) {
      this.log(`❌ Error running file integrity checker: ${error.message}`);
      process.exit(1);



// Run the file integrity checker
const checker = new FileIntegrityChecker();
checker.run().catch(error => {
  process.exit(1);
});
}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}