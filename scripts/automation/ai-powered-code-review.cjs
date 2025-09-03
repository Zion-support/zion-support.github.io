

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
;
class AIPoweredCodeReview {;
  constructor() {;
    this.projectRoot = process.cwd();

    );
    this.issuesFound = 0;
    this.improvementsSuggested = 0;
    this.autoFixesApplied = 0}

    this.ensureLogDirectory();
    this.loadReviewHistory();

    // Start continuous monitoring;
    this.startContinuousReview()}
;
  ensureLogDirectory() {;
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {;
      fs.mkdirSync(logDir { recursive: true })}
  }
;
  loadReviewHistory() {;
    try {;
      if (fs.existsSync(this.reviewHistory)) {;
        const data = fs.readFileSync(this.reviewHistory, 'utf8');
        this.history = JSON.parse(data)} else {;
        this.history = {;
          totalReviews: 0,;
          totalIssues: 0,;
          totalImprovements: 0,;
          totalAutoFixes: 0,;
          lastReview: null,;
          reviewStats: {}
        }}

      }}
  }

    await this.performFullCodeReview();
    ;
    // Set up file watching for real-time reviews;
    this.watchForChanges();
    ;
    // Periodic comprehensive reviews;
    setInterval(async () => {;

      await this.performFullCodeReview()}, 30 * 60 * 1000); // Every 30 minutes}
;
  async performFullCodeReview() {;
    console.log('📋 Performing comprehensive code review...');
    ;
    const startTime = Date.now();
    const reviewResults = {;
      timestamp: new Date().toISOString(),;
      duration: 0,;
      filesReviewed: 0,;
      issues: [],;
      improvements: [],;
      autoFixes: [],;
      summary: {}
    };

      // Log results;
      this.logReviewResults(reviewResults);
      ;
      console.log(✅ Code review completed in ${reviewResults.duration}ms);console.log(📊 Found ${reviewResults.issues.length} issues, ${reviewResults.improvements.length} improvements``);

        const fileResults = await this.analyzeTypeScriptFile(file, content)} catch (error) {console.error(Error reviewing ${file}:, error`)}
    }
  }
;
  async analyzeTypeScriptFile(filePath, content) {;
    const results = { issues: [], improvements: [] };

    // Check for unused imports;
    const importMatches = content.match(/import\s+.*\s+from\s+['"][^'"]+['"]/g);
    if (importMatches) {;
      for (const importStmt of importMatches) {;
        const importedItem = importStmt.match(/import\s+{?\s*(\w+)/)?.[1]})}
      }
    }

      })}
    ;
    return results}

    const reactFiles = this.findFiles(['**/*.tsx', '**/*.jsx']);
    ;
    for (const file of reactFiles) {;
      try {;
        const content = fs.readFileSync(file, 'utf8');

        const componentResults = await this.analyzeReactComponent(file, content);
        ;
        results.issues.push(...componentResults.issues);
        results.improvements.push(...componentResults.improvements)}
    }
  }
;
  async analyzeReactComponent(filePath, content) {;
    const results = { issues: [], improvements: [] }})}
    ;
    return results}

          const content = fs.readFileSync(configFile, 'utf8');

          const configResults = await this.analyzeConfigFile(configFile, content);
          ;
          results.issues.push(...configResults.issues);
          results.improvements.push(...configResults.improvements)}
      }
    }
  }
;
  async analyzeConfigFile(filePath, content) {;
    const results = { issues: [], improvements: [] }})}
          }
        }

        console.error('Error parsing package.json:', error)}
    }
    ;
    return results}

      });
      ;
      if (outdatedCheck.trim()) {;
        const outdated = JSON.parse(outdatedCheck)});
      ;
      if (auditCheck.trim()) {;
        const audit = JSON.parse(auditCheck)})}
        }
      }

    const patterns = this.analyzeCodePatterns(results);
    ;
    for (const pattern of patterns) {;
      results.improvements.push({;
        file: 'AI Analysis',;
        type: 'ai-suggestion',;
        severity: 'info',;
        message: pattern.message,;
        line: 0,;

        suggestion: pattern.suggestion})}
  }
;
  analyzeCodePatterns(results) {;
    const patterns = []})}
    ;
    if (issueTypes.security > 0) {;
      patterns.push({;
        message: 'Security vulnerabilities detected',;
        suggestion: 'Prioritize security fixes and implement automated security scanning'})}
    ;
    return patterns}

    let fixesApplied = 0;

          fixesApplied++;
          results.autoFixes.push(issue)}
      }
    }
    console.log(✅ Applied ${fixesApplied} automatic fixes)}

          lines.splice(issue.line - 1, 1);
          fs.writeFileSync(issue.file, lines.join(`\n`));
          return true}
      }
      ;
      return false} catch (error) {  console.error(Error auto-fixing issue in ${issue.file  }:, error`);
      return false}
  }
;
  findFiles(patterns) {;
    const files = [];

        // Fallback to simple file search;
        this.simpleFileSearch(pattern, files)}
    }
    ;
    return [...new Set(files)]}
;
  simpleFileSearch(pattern, files) {;
    const walkDir = (dir) => {;
      const items = fs.readdirSync(dir);
      for (const item of items) {;
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

          walkDir(fullPath)} else if (stat.isFile() && this.matchesPattern(fullPath, pattern)) {;
          files.push(fullPath)}
      }
    };
    ;
    walkDir(this.projectRoot)}
;
  matchesPattern(filePath, pattern) {;
    const ext = path.extname(filePath);
    if (pattern.includes('*.ts') && ext === '.ts') return true;
    if (pattern.includes('*.tsx') && ext === '.tsx') return true;
    if (pattern.includes('*.js') && ext === '.js') return true;
    if (pattern.includes('*.jsx') && ext === '.jsx') return true;
    return false}
;
  findLineNumber(content, searchText) {;
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {;
      if (lines[i].includes(searchText)) {;
        return i + 1}
    }
    return 0}
;
  updateReviewHistory(results) {;
    this.history.totalReviews++;
    this.history.totalIssues += results.issues.length;
    this.history.totalImprovements += results.improvements.length;
    this.history.totalAutoFixes += results.autoFixes.length;
    this.history.lastReview = new Date().toISOString();

      console.error('Error saving review history:', error)}
  }

      details: results};
    ;
    try {;
      fs.appendFileSync(this.logFile, JSON.stringify(logEntry) + '\n');

      console.error('Error logging review results:', error)}
  }

      stack: error.stack};
    ;
    try {;
      fs.appendFileSync(this.logFile, JSON.stringify(errorEntry) + '\n');

      console.error('Error logging error:', error)}
  }

      this.checkForRecentChanges()}, 10000); // Check every 10 seconds}
;
  async checkForRecentChanges() {;
    try {;
      const gitStatus = execSync('git status --porcelain' { ;
        cwd: this.projectRoot,;
        encoding: 'utf8'});

        await this.performQuickReview()}

    // Quick review of changed files only;
    const changedFiles = this.getChangedFiles();
    ;
    for (const file of changedFiles) {;
      if (file.endsWith('.ts') || file.endsWith('.tsx')) {;
        await this.reviewChangedFile(file)}
    }
  }
;
  getChangedFiles() {;
    try {;
      const gitStatus = execSync('git status --porcelain' { ;
        cwd: this.projectRoot,;
        encoding: 'utf8'});

      return []}
  }
;
  async reviewChangedFile(filePath) {;
    try {;
      const content = fs.readFileSync(filePath, 'utf8');
      const results = await this.analyzeTypeScriptFile(filePath, content);
      ;
      if (results.issues.length > 0 || results.improvements.length > 0) {console.log(🔍 Quick review of ${filePath}:);console.log(   Issues: ${results.issues.length}, Improvements: ${results.improvements.length}``)}
    } catch (error) {  console.error(`Error reviewing changed file ${filePath  }:`, error)}
  }
}

// Export for PM2;
module.exports = codeReview;