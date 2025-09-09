#!/usr/bin/env node

/**
 * Code Quality Automator - PM2 Automation Script
 * Continuously monitors and fixes code quality issues
 * Runs every 10 minutes to maintain high code standards
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class CodeQualityAutomator {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportFile = path.join(this.projectRoot, 'code-quality-automator-report.json');
    this.issues = [];
    this.fixes = [];
    this.startTime = Date.now();
    this.qualityScore = 100;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }

  async runQualityChecks() {
    this.log('🔍 Running comprehensive code quality checks...');
    
    const checks = [
      this.checkESLintIssues(),
      this.checkTypeScriptIssues(),
      this.checkUnusedImports(),
      this.checkCodeDuplication(),
      this.checkFileSizes(),
      this.checkImportOrganization(),
      this.checkCodeFormatting(),
      this.checkSecurityIssues()
    ];
    
    const results = await Promise.allSettled(checks);
    
    for (const result of results) {
      if (result.status === 'fulfilled') {
        this.issues.push(...result.value);
      } else {
        this.log(`⚠️ Quality check failed: ${result.reason.message}`);
      }
    }
    
    this.log(`Found ${this.issues.length} quality issues`);
  }

  async checkESLintIssues() {
    try {
      const result = execSync('npm run lint', { 
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      return []; // No issues found
    } catch (error) {
      const output = error.stdout || error.stderr || error.message;
      const issues = this.parseESLintOutput(output.toString());
      return issues.map(issue => ({
        type: 'eslint',
        severity: issue.type === 'error' ? 'high' : 'medium',
        file: issue.file,
        line: issue.line,
        message: issue.message,
        rule: issue.rule
      }));
    }
  }

  async checkTypeScriptIssues() {
    try {
      const result = execSync('npm run type-check', { 
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      return []; // No issues found
    } catch (error) {
      const output = error.stdout || error.stderr || error.message;
      const issues = this.parseTypeScriptOutput(output.toString());
      return issues.map(issue => ({
        type: 'typescript',
        severity: 'high',
        file: issue.file,
        line: issue.line,
        message: issue.message,
        code: issue.code
      }));
    }
  }

  async checkUnusedImports() {
    const issues = [];
    const files = this.getAllSourceFiles();
    
    for (const file of files) {
      const content = fs.readFileSync(file, 'utf8');
      const unusedImports = this.findUnusedImports(content, file);
      issues.push(...unusedImports);
    }
    
    return issues;
  }

  async checkCodeDuplication() {
    const issues = [];
    const files = this.getAllSourceFiles();
    
    // Simple duplicate code detection
    const codeBlocks = new Map();
    
    for (const file of files) {
      const content = fs.readFileSync(file, 'utf8');
      const lines = content.split('\n');
      
      for (let i = 0; i < lines.length - 5; i++) {
        const block = lines.slice(i, i + 5).join('\n');
        const hash = this.hashString(block);
        
        if (codeBlocks.has(hash)) {
          const existing = codeBlocks.get(hash);
          if (existing.file !== file) {
            issues.push({
              type: 'duplication',
              severity: 'medium',
              file: file,
              line: i + 1,
              message: `Potential code duplication with ${existing.file}:${existing.line}`,
              duplicateOf: existing
            });
          }
        } else {
          codeBlocks.set(hash, { file, line: i + 1 });
        }
      }
    }
    
    return issues;
  }

  async checkFileSizes() {
    const issues = [];
    const files = this.getAllSourceFiles();
    
    for (const file of files) {
      const stats = fs.statSync(file);
      const sizeKB = stats.size / 1024;
      
      if (sizeKB > 100) { // Files larger than 100KB
        issues.push({
          type: 'file-size',
          severity: 'low',
          file: file,
          message: `File is ${sizeKB.toFixed(1)}KB - consider splitting into smaller modules`,
          size: sizeKB
        });
      }
    }
    
    return issues;
  }

  async checkImportOrganization() {
    const issues = [];
    const files = this.getAllSourceFiles();
    
    for (const file of files) {
      const content = fs.readFileSync(file, 'utf8');
      const lines = content.split('\n');
      
      let importSection = false;
      let nonImportFound = false;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        
        if (line.startsWith('import') || line.startsWith('export')) {
          if (nonImportFound) {
            issues.push({
              type: 'import-organization',
              severity: 'low',
              file: file,
              line: i + 1,
              message: 'Import/export statements should be at the top of the file'
            });
          }
          importSection = true;
        } else if (line && !line.startsWith('//') && !line.startsWith('/*')) {
          nonImportFound = true;
        }
      }
    }
    
    return issues;
  }

  async checkCodeFormatting() {
    const issues = [];
    
    try {
      // Check if Prettier is available
      execSync('npx prettier --check .', { 
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      return []; // No formatting issues
    } catch (error) {
      const output = error.stdout || error.stderr || error.message;
      const lines = output.toString().split('\n');
      
      for (const line of lines) {
        if (line.includes('Code style issues found')) {
          issues.push({
            type: 'formatting',
            severity: 'low',
            message: 'Code formatting issues detected - run Prettier to fix',
            details: line
          });
        }
      }
      
      return issues;
    }
  }

  async checkSecurityIssues() {
    const issues = [];
    
    try {
      const result = execSync('npm audit --audit-level=moderate', { 
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      return []; // No security issues
    } catch (error) {
      const output = error.stdout || error.stderr || error.message;
      const lines = output.toString().split('\n');
      
      for (const line of lines) {
        if (line.includes('moderate') || line.includes('high') || line.includes('critical')) {
          issues.push({
            type: 'security',
            severity: 'high',
            message: 'Security vulnerabilities detected',
            details: line
          });
        }
      }
      
      return issues;
    }
  }

  parseESLintOutput(output) {
    const issues = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      const match = line.match(/^([^:]+):(\d+):(\d+)\s*(\w+)\s+([^:]+):\s*(.+)$/);
      if (match) {
        issues.push({
          file: match[1].trim(),
          line: parseInt(match[2]),
          column: parseInt(match[3]),
          type: match[4],
          rule: match[5],
          message: match[6].trim()
        });
      }
    }
    
    return issues;
  }

  parseTypeScriptOutput(output) {
    const issues = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      const match = line.match(/^([^:]+):(\d+):(\d+)\s*-\s*error\s+TS(\d+):\s*(.+)$/);
      if (match) {
        issues.push({
          file: match[1].trim(),
          line: parseInt(match[2]),
          column: parseInt(match[3]),
          code: match[4],
          message: match[5].trim()
        });
      }
    }
    
    return issues;
  }

  findUnusedImports(content, filePath) {
    const issues = [];
    const lines = content.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const importMatch = line.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]/);
      
      if (importMatch) {
        const imports = importMatch[1].split(',').map(imp => imp.trim());
        const source = importMatch[2];
        
        for (const imp of imports) {
          const importName = imp.split(' as ')[0].trim();
          const regex = new RegExp(`\\b${importName}\\b`, 'g');
          const matches = content.match(regex);
          
          if (!matches || matches.length <= 1) {
            issues.push({
              type: 'unused-import',
              severity: 'low',
              file: filePath,
              line: i + 1,
              message: `Unused import: ${importName}`,
              import: importName,
              source: source
            });
          }
        }
      }
    }
    
    return issues;
  }

  getAllSourceFiles() {
    const sourceDirs = ['src', 'components', 'pages', 'utils', 'hooks', 'context'];
    const files = [];
    
    for (const dir of sourceDirs) {
      const fullPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(fullPath)) {
        this.walkDirectory(fullPath, files);
      }
    }
    
    return files.filter(file => 
      file.endsWith('.tsx') || 
      file.endsWith('.ts') || 
      file.endsWith('.jsx') || 
      file.endsWith('.js')
    );
  }

  walkDirectory(dir, files) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && !item.includes('node_modules')) {
        this.walkDirectory(fullPath, files);
      } else if (stat.isFile()) {
        files.push(fullPath);
      }
    }
  }

  hashString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
  }

  async applyFixes() {
    this.log('🔧 Applying automatic fixes...');
    
    const autoFixableIssues = this.issues.filter(issue => 
      issue.type === 'eslint' || 
      issue.type === 'formatting' ||
      issue.type === 'unused-import'
    );
    
    for (const issue of autoFixableIssues) {
      try {
        await this.fixIssue(issue);
        this.fixes.push(issue);
      } catch (error) {
        this.log(`⚠️ Failed to fix issue: ${error.message}`);
      }
    }
    
    // Run global fixes
    await this.runGlobalFixes();
  }

  async fixIssue(issue) {
    switch (issue.type) {
      case 'eslint':
        await this.fixESLintIssue(issue);
        break;
      case 'formatting':
        await this.fixFormattingIssue(issue);
        break;
      case 'unused-import':
        await this.fixUnusedImportIssue(issue);
        break;
      default:
        this.log(`ℹ️ No auto-fix available for ${issue.type} issues`);
    }
  }

  async fixESLintIssue(issue) {
    try {
      execSync(`npx eslint ${issue.file} --fix`, { 
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      this.log(`✅ Fixed ESLint issue in ${issue.file}`);
    } catch (error) {
      this.log(`⚠️ Failed to fix ESLint issue: ${error.message}`);
    }
  }

  async fixFormattingIssue(issue) {
    try {
      execSync(`npx prettier --write ${issue.file}`, { 
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      this.log(`✅ Fixed formatting issue in ${issue.file}`);
    } catch (error) {
      this.log(`⚠️ Failed to fix formatting issue: ${error.message}`);
    }
  }

  async fixUnusedImportIssue(issue) {
    try {
      const filePath = path.resolve(this.projectRoot, issue.file);
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      
      // Remove the unused import line
      if (issue.line <= lines.length) {
        lines.splice(issue.line - 1, 1);
        const newContent = lines.join('\n');
        fs.writeFileSync(filePath, newContent);
        this.log(`✅ Removed unused import from ${issue.file}`);
      }
    } catch (error) {
      this.log(`⚠️ Failed to fix unused import: ${error.message}`);
    }
  }

  async runGlobalFixes() {
    try {
      // Run ESLint auto-fix globally
      execSync('npm run lint -- --fix', { 
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      this.log('✅ Global ESLint auto-fix completed');
      
      // Run Prettier globally
      try {
        execSync('npx prettier --write .', { 
          cwd: this.projectRoot,
          encoding: 'utf8',
          stdio: 'pipe'
        });
        this.log('✅ Global Prettier formatting completed');
      } catch (prettierError) {
        this.log('ℹ️ Prettier not available or failed');
      }
      
    } catch (error) {
      this.log(`⚠️ Global fixes had issues: ${error.message}`);
    }
  }

  calculateQualityScore() {
    const totalIssues = this.issues.length;
    const fixedIssues = this.fixes.length;
    const remainingIssues = totalIssues - fixedIssues;
    
    // Calculate score based on issue severity and fix rate
    let score = 100;
    
    for (const issue of this.issues) {
      switch (issue.severity) {
        case 'high':
          score -= 10;
          break;
        case 'medium':
          score -= 5;
          break;
        case 'low':
          score -= 2;
          break;
      }
    }
    
    // Bonus for fixing issues
    score += Math.min(fixedIssues * 2, 20);
    
    this.qualityScore = Math.max(0, Math.min(100, score));
    return this.qualityScore;
  }

  generateReport() {
    const endTime = Date.now();
    const duration = endTime - this.startTime;
    const qualityScore = this.calculateQualityScore();
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration}ms`,
      qualityScore: qualityScore,
      totalIssues: this.issues.length,
      fixedIssues: this.fixes.length,
      remainingIssues: this.issues.length - this.fixes.length,
      issuesByType: this.groupIssuesByType(),
      issuesBySeverity: this.groupIssuesBySeverity(),
      fixes: this.fixes,
      summary: {
        overallQuality: this.getQualityLevel(qualityScore),
        improvement: this.fixes.length > 0 ? 'Code quality improved' : 'No changes needed',
        recommendations: this.generateRecommendations()
      }
    };
    
    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    this.log(`📊 Report generated: ${this.reportFile}`);
    
    return report;
  }

  groupIssuesByType() {
    const groups = {};
    for (const issue of this.issues) {
      if (!groups[issue.type]) groups[issue.type] = [];
      groups[issue.type].push(issue);
    }
    return groups;
  }

  groupIssuesBySeverity() {
    const groups = { high: [], medium: [], low: [] };
    for (const issue of this.issues) {
      groups[issue.severity].push(issue);
    }
    return groups;
  }

  getQualityLevel(score) {
    if (score >= 90) return 'Excellent';
    if (score >= 80) return 'Good';
    if (score >= 70) return 'Fair';
    if (score >= 60) return 'Poor';
    return 'Critical';
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.issues.length > 0) {
      recommendations.push('Review and address remaining issues manually');
    }
    
    if (this.issues.filter(i => i.severity === 'high').length > 0) {
      recommendations.push('Prioritize fixing high-severity issues');
    }
    
    if (this.issues.filter(i => i.type === 'security').length > 0) {
      recommendations.push('Address security vulnerabilities immediately');
    }
    
    if (recommendations.length === 0) {
      recommendations.push('Maintain current code quality standards');
    }
    
    return recommendations;
  }

  async run() {
    this.log('🚀 Starting Code Quality Automator...');
    
    try {
      await this.runQualityChecks();
      await this.applyFixes();
      
      const report = this.generateReport();
      
      this.log(`✅ Code Quality Automator completed!`);
      this.log(`📊 Quality Score: ${report.qualityScore}/100 (${report.summary.overallQuality})`);
      this.log(`🔧 Issues found: ${report.totalIssues}`);
      this.log(`✅ Issues fixed: ${report.fixedIssues}`);
      this.log(`⚠️ Issues remaining: ${report.remainingIssues}`);
      this.log(`⏱️ Duration: ${report.duration}`);
      
      if (report.summary.recommendations.length > 0) {
        this.log('💡 Recommendations:');
        report.summary.recommendations.forEach(rec => this.log(`   - ${rec}`));
      }
      
    } catch (error) {
      this.log(`❌ Fatal error: ${error.message}`);
      this.generateReport();
    }
  }
}

// Run the automator if this script is executed directly
if (require.main === module) {
  const automator = new CodeQualityAutomator();
  automator.run().catch(console.error);
}

module.exports = CodeQualityAutomator;