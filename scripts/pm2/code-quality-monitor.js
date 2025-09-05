}};
; async analyzeFile(filePath) {_; try {; const content = fs.readFileSync(filePath, _'utf8'); const stats = fs.statSync(filePath);
; const analysis = {; file: filePath, size: stats.size; lines: content.split('\n').length; issues: []};
; // Check for common code quality issues; const lines = content.split('\n');
; lines.forEach((line, index) = > {_; const lineNum = index + 1;
; // Trailing spaces; if (line.match(/[ \t]+$/)) {; analysis.issues.push({; line: lineNum, type: 'trailing-spaces'; message: 'Trailing spaces found'; severity: 'low'})};
; // Long lines (over 120 characters); if (line.length > 120) {_; analysis.issues.push({; line: lineNum, type: 'long-line'; message: `Line is ${line.length} characters long (max: 120)`; severity: 'medium'})};
; // Console statements; if (line.match(/console\.(log|warn|error|info|debug)/)) {_; analysis.issues.push({; line: lineNum, type: 'console-statement'; message: 'Console statement found - should be removed in production'; severity: 'medium'})};
; // TODO/FIXME comments; if (line.match(/TODO|FIXME|HACK|XXX/)) {_; analysis.issues.push({; line: lineNum, type: 'todo-comment'; message: 'TODO/FIXME comment found'; severity: 'low'})};
; // Unused imports (basic check); if (line.match(/^import.*from/) && !line.includes('//')) {_; const importMatch = line.match(/import\s+(\w+)/); if (importMatch) {; const importName = importMatch[1]; if (importName ! = = 'React' && !content.includes(importName)) {; analysis.issues.push({; line: lineNum, type: 'unused-import'; message: `Potentially unused import ${importName}`; severity: 'medium'})}}}});
; return analysis} catch (error) {_; this.log(`Error analyzing file ${filePath}: ${error.message}`); return null}};
; async walkDirectory(dir) {_; const analyses = [];
; try {; const items = fs.readdirSync(dir);
; for (const item of items) {; const fullPath = path.join(dir, item); const stat = fs.statSync(fullPath);
; if (stat.isDirectory()) {; if (!fullPath.includes('nodemodules') &&; !fullPath.includes('.git') &&; !fullPath.includes('dist') &&; !fullPath.includes('build') &&; !fullPath.includes('.next') &&; !fullPath.includes('coverage') &&; !fullPath.includes('logs')) {; const subAnalyses = await this.walkDirectory(fullPath); analyses.push(...subAnalyses)}} else if (stat.isFile()) {_; const ext = path.extname(fullPath); if (['.js', _'.jsx', _'.ts', _'.tsx'].includes(ext)) {; const analysis = await this.analyzeFile(fullPath); if (analysis) {; analyses.push(analysis)}}}}} catch (error) {_; this.log(`Error walking directory ${dir}: ${error.message}`)};
; return analyses};
; generateReport(analyses) {_; const totalFiles = analyses.length; const totalIssues = analyses.reduce((sum, analysis) = > sum + analysis.issues.length, 0);
; const issuesByType = {}; const issuesBySeverity = {low: 0, medium: 0, high: 0};
; analyses.forEach(analysis = > {_; analysis.issues.forEach(issue = > {; // Count by type; issuesByType[issue.type] = (issuesByType[issue.type] || 0) + 1;
; // Count by severity; issuesBySeverity[issue.severity]++})});
; const report = {_; timestamp: new Date().toISOString(); summary: {; totalFiles; totalIssues; issuesByType; issuesBySeverity}; files: analyses.filter(analysis = > analysis.issues.length > 0); recommendations: this.generateRecommendations(issuesByType, totalIssues)};
; return report};
; generateRecommendations(issuesByType, totalIssues) {_; const recommendations = [];
; if (issuesByType['trailing-spaces'] > 0) {; recommendations.push({; type: 'trailing-spaces'; priority: 'low'; message: 'Remove trailing spaces from files'; action: 'Run the lint-fixer to automatically remove trailing spaces'})};
; if (issuesByType['console-statement'] > 0) {_; recommendations.push({; type: 'console-statement'; priority: 'medium'; message: 'Remove console statements from production code'; action: 'Replace console statements with proper logging or remove them'})};
; if (issuesByType['unused-import'] > 0) {_; recommendations.push({; type: 'unused-import'; priority: 'medium'; message: 'Remove unused imports'; action: 'Clean up unused imports to reduce bundle size'})};
; if (totalIssues > 100) {_; recommendations.push({; type: 'general'; priority: 'high'; message: 'High number of code quality issues detected'; action: 'Run comprehensive code cleanup and establish coding standards'})};
; return recommendations};
; async saveReport(report) {_; try {; const reportDir = path.dirname(this.reportFile); if (!fs.existsSync(reportDir)) {; fs.mkdirSync(reportDir, _{ recursive: true})};
; fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)); this.log(`Report saved to: ${this.reportFile}`)} catch (error) {_; this.log(`Error saving report: ${error.message}`)}};
; async checkGitStatus() {_; try {; const status = execSync('git status --porcelain', _{; cwd: this.projectRoot; encoding: 'utf8'});
; if (status.trim()) {_; this.log('⚠️ Uncommitted changes detected'); return false};
; return true} catch (error) {_; this.log(`Error checking git status: ${error.message}`); return false}};
; async run() {_; this.log('🔍 Starting Code Quality Monitor...'); this.log(`Project root: ${this.projectRoot}`);
; try {_; // Create logs directory if it doesn't exist; const logsDir = path.dirname(this.logFile); if (!fs.existsSync(logsDir)) {; fs.mkdirSync(logsDir, _{ recursive: true})};
; // Check git status; const isClean = await this.checkGitStatus();
; // Analyze all files; this.log('📁 Analyzing code files...'); const analyses = await this.walkDirectory(this.projectRoot);
; // Generate report; this.log('📊 Generating quality report...'); const report = this.generateReport(analyses);
; // Save report; await this.saveReport(report);
; const duration = Date.now() - this.startTime;
; // Log summary; this.log('\n📊 Code Quality Report Summary: '); this.log(`Files analyzed: ${report.summary.totalFiles}`); this.log(`Total issues: ${report.summary.totalIssues}`); this.log(`Duration: ${duration}ms`);
; if (report.summary.totalIssues > 0) {_; this.log('\n🚨 Issues by type: '); Object.entries(report.summary.issuesByType).forEach(([type, count]) = > {; this.log(` ${type}: ${count}`)});
; this.log('\n💡 Recommendations: '); report.recommendations.forEach(rec = > {_; this.log(` [${rec.priority.toUpperCase()}] ${rec.message}`); this.log(` Action: ${rec.action}`)});
; // If there are many issues and git is clean, suggest running the lint fixer; if (report.summary.totalIssues > 50 && isClean) {_; this.log('\n🔧 Suggesting to run lint-fixer to auto-fix issues')}} else {_; this.log('✨ Excellent! No code quality issues found!')}
} catch (error) {_; this.log(`❌ Error running code quality monitor: ${error.message}`); process.exit(1)}}};
;
// Run the code quality monitor;
const monitor = new CodeQualityMonitor();
monitor.run().catch(error = > {_; process.exit(1)})
}
};
;
  async analyzeFile(filePath) {_;
    try {;
      const content = fs.readFileSync(filePath, _'utf8');
      const stats = fs.statSync(filePath);
;
      const analysis = {;
        file: filePath,
        size: stats.size;
        lines: content.split('\n').length;
        issues: [];
      // Check for common code quality issues;
      const lines = content.split('\n');
;
      lines.forEach(_(line, index) => {;
        const lineNum = index + 1;
;
        // Trailing spaces;
        if (line.match(/[ \t]+$/)) {;
          analysis.issues.push({;
            line: lineNum,
            type: 'trailing-spaces';
            message: 'Trailing spaces found';
            severity: 'low'})
        };
;
        // Long lines (over 120 characters);
        if (line.length > 120) {_;
          analysis.issues.push({;
            line: lineNum,
            type: 'long-line';
            message: `Line is ${line.length} characters long (max: 120)`;
            severity: 'medium'
          })
        };
;
        // Console statements;
        if (line.match(/console\.(log|warn|error|info|debug)/)) {_;
          analysis.issues.push({;
            line: lineNum,
            type: 'console-statement';
            message: 'Console statement found - should be removed in production';
            severity: 'medium'})
        };
;
        // TODO/FIXME comments;
        if (line.match(/TODO|FIXME|HACK|XXX/)) {_;
          analysis.issues.push({;
            line: lineNum,
            type: 'todo-comment';
            message: 'TODO/FIXME comment found';
            severity: 'low'})
        };
;
        // Unused imports (basic check);
        if (line.match(/^import.*from/) && !line.includes('//')) {_;
          const importMatch = line.match(/import\s+(\w+)/);
          if (importMatch) {;
            const importName = importMatch[1];
            if (importName !== 'React' && !content.includes(importName)) {;
              analysis.issues.push({;
                line: lineNum,
                type: 'unused-import';
                message: `Potentially unused import ${importName}`;
                severity: 'medium'
              })
            }
          }
        }
      });
;
      return analysis
    } catch (error) {_;
      this.log(`Error analyzing file ${filePath}: ${error.message}`);
      return null
}
};
;
  async walkDirectory(dir) {_;
    const analyses = [];
;
    try {;
      const items = fs.readdirSync(dir);
;
      for (const item of items) {;
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
;
        if (stat.isDirectory()) {;
          if (!fullPath.includes('nodemodules') &&;
              !fullPath.includes('.git') &&;
              !fullPath.includes('dist') &&;
              !fullPath.includes('build') &&;
              !fullPath.includes('.next') &&;
              !fullPath.includes('coverage') &&;
              !fullPath.includes('logs')) {;
            const subAnalyses = await this.walkDirectory(fullPath);
            analyses.push(...subAnalyses)}
        } else if (stat.isFile()) {_;
          const ext = path.extname(fullPath);
          if (['.js', _'.jsx', _'.ts', _'.tsx'].includes(ext)) {;
            const analysis = await this.analyzeFile(fullPath);
            if (analysis) {;
              analyses.push(analysis)}
          }
        }
      }
    } catch (error) {_;
      this.log(`Error walking directory ${dir}: ${error.message}`)
};
;
    return analyses
};
;
  generateReport(analyses) {_;
    const totalFiles = analyses.length;
    const totalIssues = analyses.reduce(_(sum, analysis) => sum + analysis.issues.length, 0);
;
    const issuesByType = {};
    const issuesBySeverity = {low: 0, medium: 0, high: 0 ;
;
    analyses.forEach(analysis => {;
      analysis.issues.forEach(issue => {;
        // Count by type;
        issuesByType[issue.type] = (issuesByType[issue.type] || 0) + 1;
;
        // Count by severity;
        issuesBySeverity[issue.severity]++})
    });
;
    const report = {_;
      timestamp: new Date().toISOString();
      summary: {;
        totalFiles;
        totalIssues;
        issuesByType;
        issuesBySeverity};
      files: analyses.filter(analysis => analysis.issues.length > 0);
      recommendations: this.generateRecommendations(issuesByType, totalIssues)
};
;
    return report
};
;
  generateRecommendations(issuesByType, totalIssues) {_;
    const recommendations = [];
;
    if (issuesByType['trailing-spaces'] > 0) {;
      recommendations.push({;
        type: 'trailing-spaces';
        priority: 'low';
        message: 'Remove trailing spaces from files';
        action: 'Run the lint-fixer to automatically remove trailing spaces'})
};
;
    if (issuesByType['console-statement'] > 0) {_;
      recommendations.push({;
        type: 'console-statement';
        priority: 'medium';
        message: 'Remove console statements from production code';
        action: 'Replace console statements with proper logging or remove them'})
};
;
    if (issuesByType['unused-import'] > 0) {_;
      recommendations.push({;
        type: 'unused-import';
        priority: 'medium';
        message: 'Remove unused imports';
        action: 'Clean up unused imports to reduce bundle size'})
};
;
    if (totalIssues > 100) {_;
      recommendations.push({;
        type: 'general';
        priority: 'high';
        message: 'High number of code quality issues detected';
        action: 'Run comprehensive code cleanup and establish coding standards'})
};
;
    return recommendations
};
;
  async saveReport(report) {_;
    try {;
      const reportDir = path.dirname(this.reportFile);
      if (!fs.existsSync(reportDir)) {;
        fs.mkdirSync(reportDir, _{ recursive: true})
      };
;
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      this.log(`Report saved to: ${this.reportFile}`)
    } catch (error) {_;
      this.log(`Error saving report: ${error.message}`)
}
};
;
  async checkGitStatus() {_;
    try {;
      const status = execSync('git status --porcelain', _{;
        cwd: this.projectRoot;
        encoding: 'utf8'});
;
      if (status.trim()) {_;
        this.log('⚠️  Uncommitted changes detected');
        return false};
;
      return true
    } catch (error) {_;
      this.log(`Error checking git status: ${error.message}`);
      return false
}
};
;
  async run() {_;
    this.log('🔍 Starting Code Quality Monitor...');
    this.log(`Project root: ${this.projectRoot}`);
;
    try {_;
      // Create logs directory if it doesn't exist;
      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {;
        fs.mkdirSync(logsDir, _{ recursive: true})
      };
;
      // Check git status;
      const isClean = await this.checkGitStatus();
;
      // Analyze all files;
      this.log('📁 Analyzing code files...');
      const analyses = await this.walkDirectory(this.projectRoot);
;
      // Generate report;
      this.log('📊 Generating quality report...');
      const report = this.generateReport(analyses);
;
      // Save report;
      await this.saveReport(report);
;
      const duration = Date.now() - this.startTime;
;
      // Log summary;
      this.log('\n📊 Code Quality Report Summary: ');
      this.log(`Files analyzed: ${report.summary.totalFiles}`);
      this.log(`Total issues: ${report.summary.totalIssues}`);
      this.log(`Duration: ${duration}ms`);
;
      if (report.summary.totalIssues > 0) {_;
        this.log('\n🚨 Issues by type: ');
        Object.entries(report.summary.issuesByType).forEach(_([type, count]) => {;
          this.log(`  ${type}: ${count}`)
        });
;
        this.log('\n💡 Recommendations: ');
        report.recommendations.forEach(rec => {_;
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`);
          this.log(`    Action: ${rec.action}`)
        });
;
        // If there are many issues and git is clean, suggest running the lint fixer;
        if (report.summary.totalIssues > 50 && isClean) {_;
          this.log('\n🔧 Suggesting to run lint-fixer to auto-fix issues')}
      } else {_;
        this.log('✨ Excellent! No code quality issues found!')}

    } catch (error) {_;
      this.log(`❌ Error running code quality monitor: ${error.message}`);
      process.exit(1)
}
}
};
;
// Run the code quality monitor;
const monitor = new CodeQualityMonitor();
monitor.run().catch(error => {;
  process.exit(1)
});const monitor = new CodeQualityMonitor();
monitor.run().catch(error => {_;
  process.exit(1)});
