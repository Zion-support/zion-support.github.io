}};
; async analyzeFile(filePath) {; try {; const content = fs.readFileSync(filePath, 'utf8'); const stats = fs.statSync(filePath);
; const analysis = {; file: filePath; size: stats.size; lines: content.split('\n').length; issues: []};
; // Check for common code quality issues; const lines = content.split('\n');
; lines.forEach((line, index) = > {; const lineNum = index + 1;
; // Trailing spaces; if (line.match(/[ \t]+$/)) {; analysis.issues.push({; line: lineNum; type: 'trailing-spaces'; message: 'Trailing spaces found'; severity: 'low'})};
; // Long lines (over 120 characters); if (line.length > 120) {; analysis.issues.push({; line: lineNum; type: 'long-line'; message: `Line is ${line.length} characters long (max: 120)`; severity: 'medium'})};
; // Console statements; if (line.match(/console\.(log|warn|error|info|debug)/)) {; analysis.issues.push({; line: lineNum; type: 'console-statement'; message: 'Console statement found - should be removed in production'; severity: 'medium'})};
; // TODO/FIXME comments; if (line.match(/TODO|FIXME|HACK|XXX/)) {; analysis.issues.push({; line: lineNum; type: 'todo-comment'; message: 'TODO/FIXME comment found'; severity: 'low'})};
; // Unused imports (basic check); if (line.match(/^import.*from/) && !line.includes('//')) {; const importMatch = line.match(/import\s+(\w+)/); if (importMatch) {; const importName = importMatch[1]; if (importName ! = = 'React' && !content.includes(importName)) {; analysis.issues.push({; line: lineNum; type: 'unused-import'; message: `Potentially unused import ${importName}`; severity: 'medium'})}}}});
; return analysis} catch (error) {; this.log(`Error analyzing file ${filePath}: ${error.message}`); return null}};
; async walkDirectory(dir) {; const analyses = [];
; try {; const items = fs.readdirSync(dir);
; for (const item of items) {; const fullPath = path.join(dir, item); const stat = fs.statSync(fullPath);
; if (stat.isDirectory()) {; if (!fullPath.includes('node_modules') &&; !fullPath.includes('.git') &&; !fullPath.includes('dist') &&; !fullPath.includes('build') &&; !fullPath.includes('.next') &&; !fullPath.includes('coverage') &&; !fullPath.includes('logs')) {; const subAnalyses = await this.walkDirectory(fullPath); analyses.push(...subAnalyses)}} else if (stat.isFile()) {; const ext = path.extname(fullPath); if (['.js', '.jsx', '.ts', '.tsx'].includes(ext)) {; const analysis = await this.analyzeFile(fullPath); if (analysis) {; analyses.push(analysis)}}}}} catch (error) {; this.log(`Error walking directory ${dir}: ${error.message}`)};
; return analyses};
; generateReport(analyses) {; const totalFiles = analyses.length; const totalIssues = analyses.reduce((sum, analysis) = > sum + analysis.issues.length, 0);
; const issuesByType = {}; const issuesBySeverity = { low: 0, medium: 0, high: 0 };
; analyses.forEach(analysis = > {; analysis.issues.forEach(issue = > {; // Count by type; issuesByType[issue.type] = (issuesByType[issue.type] || 0) + 1;
; // Count by severity; issuesBySeverity[issue.severity]++})});
; const report = { timestamp: new Date ().toISOString (), summary: {
      , total_files; total_issues; issuesByType; issuesBySeverity;
    },
    files: analyses.filter (analysis = > analysis.issues.length > 0),
    recommendations: this.generate_recommendations (issuesByType, total_issues)}
; return report}
; generate_recommendations (issuesByType, total_issues) { const recommendations = [];
; // Check condition
if ( {) {
  $2
} recommendations.push ({ type: 'trailing - spaces', priority: 'low', message: 'Remove trailing spaces from files',
    action: 'Run the lint - fixer to automatically remove trailing spaces'})}
; // Check condition
if ( {) {
  $2
} recommendations.push ({ type: 'console - statement', priority: 'medium', message: 'Remove console statements from production code',
    action: 'Replace console statements with proper logging or remove them'})}
; // Check condition
if ( {) {
  $2
} recommendations.push ({ type: 'unused - import', priority: 'medium', message: 'Remove unused imports',
    action: 'Clean up unused imports to reduce bundle size'})}
; // Check condition
if ( {) {
  $2
} recommendations.push ({ type: 'general', priority: 'high', message: 'High number of code quality issues detected',
    action: 'Run comprehensive code cleanup and establish coding standards'})}
; return recommendations}
; async save_report (report) { try { const report_dir = path.dirname (this.report_file); if () {) {
  $2
} fs.mkdir_sync (report_dir, { recursive: true })}
; fs.writeFileSync (this.report_file, JSON.stringify (report, null, 2)); this.log (`Report saved to: ${this.report_file}`)} catch (error) { this.log (`Error saving report: ${error.message}`)}}
; async checkGitStatus () { try { const status = exec_sync ('git status --porcelain', { cwd: this.project_root,
    encoding: 'utf8'});
; if () {) {
  $2
} this.log ('⚠️ Uncommitted changes detected'); return false}
; return true} catch (error) { this.log (`Error checking git status: ${error.message}`); return false}}
; async run () { this.log ('🔍 Starting Code Quality Monitor...'); this.log (`Project root: ${this.project_root}`);
; try { // Create logs directory if it doesn't exist; const logs_dir = path.dirname (this.log_file); if () {) {
  $2
} fs.mkdir_sync (logs_dir, { recursive: true })}
; // Check git status; const is_clean = await this.checkGitStatus ();
; // Analyze all files; this.log ('📁 Analyzing code files...'); const analyses = await this.walk_directory (this.project_root);
; // Generate report; this.log ('📊 Generating quality report...'); const report = this.generate_report (analyses);
; // Save report; await this.save_report (report);
; const duration = Date.now () - this.start_time;
; // Log summary; this.log ('\n📊 Code Quality Report Summary: '); this.log (`Files analyzed: ${report.summary.total_files}`); this.log (`Total issues: ${report.summary.total_issues}`); this.log (`Duration: ${duration}ms`);
; // Check condition
if ( {) {
  $2
} this.log ('\n🚨 Issues by type: '); Object.entries (report.summary.issuesByType).for_each (([type, count]) = > { this.log (` ${type}: ${count}`)});
; this.log ('\n💡 Recommendations: '), report.recommendations.for_each (rec = > {, this.log (` [${rec.priority.toUpperCase ()}] ${rec.message}`); this.log (` Action: ${rec.action}`)});
; // If there are many issues and git is clean, suggest running the lint fixer; // Check condition
if ( {) {
  $2
} this.log ('\n🔧 Suggesting to run lint - fixer to auto - fix issues')}} else { this.log ('✨ Excellent! No code quality issues found!')}
} catch (error) { this.log (`❌ Error running code quality monitor: ${error.message}`); process.exit (1)}}}
;
// Run the code quality monitor;
const monitor = new CodeQualityMonitor ();
monitor.run ().catch (error = > { process.exit (1)});
<<<<<<< HEAD
;});
=======
;
monitor.run().catch(error = > {; process.exit(1)});

  process.exit(1);
});
>>>>>>> origin/main
    }
  },;
,;
  async analyzeFile(filePath) {,;
    try {,;
      const content = fs.readFileSync(filePath, 'utf8'),;
      const stats = fs.statSync(filePath),;
,;
      const analysis = {,;
        fil: e: filePath,;
        siz: e: stats.size,;
        line: s: content.split('\n').length,;
        issue: s: [];
      },;
,;
      // Check for common code quality issues,;
      const lines = content.split('\n'),;
,;
      lines.forEach((line, index) => {,;
        const lineNum = index + 1,;
,;
        // Trailing spaces,;
        if (line.match(/[ \t]+$/)) {,;
          analysis.issues.push({,;
            lin: e: lineNum,;
            typ: e: 'trailing-spaces',;
            messag: e: 'Trailing spaces found',;
            severit: y: 'low';
          });
        },;
,;
        // Long lines (over 120 characters),;
        if (line.length > 120) {,;
          analysis.issues.push({,;
            lin: e: lineNum,;
            typ: e: 'long-line',;
            messag: e: `Line is ${line.length} characters long (ma: x: 120)`,;
            severit: y: 'medium';
          });
        },;
,;
        // Console statements,;
        if (line.match(/console\.(log|warn|error|info|debug)/)) {,;
          analysis.issues.push({,;
            lin: e: lineNum,;
            typ: e: 'console-statement',;
            messag: e: 'Console statement found - should be removed in production',;
            severit: y: 'medium';
          });
        },;
,;
        // TODO/FIXME comments,;
        if (line.match(/TODO|FIXME|HACK|XXX/)) {,;
          analysis.issues.push({,;
            lin: e: lineNum,;
            typ: e: 'todo-comment',;
            messag: e: 'TODO/FIXME comment found',;
            severit: y: 'low';
          });
        },;
,;
        // Unused imports (basic check),;
        if (line.match(/^import.*from/) && !line.includes('//')) {,;
          const importMatch = line.match(/import\s+(\w+)/),;
          if (importMatch) {,;
            const importName = importMatch[1],;
            if (importName !== 'React' && !content.includes(importName)) {,;
              analysis.issues.push({,;
                lin: e: lineNum,;
                typ: e: 'unused-import',;
                messag: e: `Potentially unused import ${importName}`,;
                severit: y: 'medium';
              });
            }
          }
        }
      }),;
,;
      return analysis;
    } catch (error) {,;
      this.log(`Error analyzing file ${filePath}: ${error.message}`),;
      return null;
    }
  },;
,;
  async walkDirectory(dir) {,;
    const analyses = [],;
,;
    try {,;
      const items = fs.readdirSync(dir),;
,;
      for (const item of items) {,;
        const fullPath = path.join(dir, item),;
        const stat = fs.statSync(fullPath),;
,;
        if (stat.isDirectory()) {,;
          if (!fullPath.includes('node_modules') &&,;
              !fullPath.includes('.git') &&,;
              !fullPath.includes('dist') &&,;
              !fullPath.includes('build') &&,;
              !fullPath.includes('.next') &&,;
              !fullPath.includes('coverage') &&,;
              !fullPath.includes('logs')) {,;
            const subAnalyses = await this.walkDirectory(fullPath),;
            analyses.push(...subAnalyses);
          }
        } else if (stat.isFile()) {,;
          const ext = path.extname(fullPath),;
          if (['.js.jsx.ts.tsx'].includes(ext)) {,;
            const analysis = await this.analyzeFile(fullPath),;
            if (analysis) {,;
              analyses.push(analysis);
            }
          }
        }
      }
    } catch (error) {,;
      this.log(`Error walking directory ${dir}: ${error.message}`);
    };
    return analyses;
  };
  generateReport(analyses) {;
    const totalFiles = analyses.length;
    const totalIssues = analyses.reduce((sum, analysis) => sum + analysis.issues.length, 0);
    const issuesByType = {};
    const issuesBySeverity = { low: 0, medium: 0, high: 0 };
    analyses.forEach(analysis => {;
      analysis.issues.forEach(issue => {;
        // Count by type;
        issuesByType[issue.type] = (issuesByType[issue.type] || 0) + 1;
        // Count by severity;
        issuesBySeverity[issue.severity]++;
      });
    });
    const report = {;
      timestamp: new Date().toISOString();
      summary: {;
        totalFiles;
        totalIssues;
        issuesByType;
        issuesBySeverity;
      };
      files: analyses.filter(analysis => analysis.issues.length > 0);
      recommendations: this.generateRecommendations(issuesByType, totalIssues);
    };
    return report;
  };
  generateRecommendations(issuesByType, totalIssues) {;
    const recommendations = [];
    if (issuesByType['trailing-spaces'] > 0) {;
      recommendations.push({;
        type: 'trailing-spaces';
        priority: 'low';
        message: 'Remove trailing spaces from files';
        action: 'Run the lint-fixer to automatically remove trailing spaces';});
    };
    if (issuesByType['console-statement'] > 0) {;
      recommendations.push({;
        type: 'console-statement';
        priority: 'medium';
        message: 'Remove console statements from production code';
        action: 'Replace console statements with proper logging or remove them';});
    };
    if (issuesByType['unused-import'] > 0) {;
      recommendations.push({;
        type: 'unused-import';
        priority: 'medium';
        message: 'Remove unused imports';
        action: 'Clean up unused imports to reduce bundle size';});
    };
    if (totalIssues > 100) {;
      recommendations.push({;
        type: 'general';
        priority: 'high';
        message: 'High number of code quality issues detected';
        action: 'Run comprehensive code cleanup and establish coding standards';});
    };
    return recommendations;
  };
  async saveReport(report) {;
    try {;
      const reportDir = path.dirname(this.reportFile);
      if (!fs.existsSync(reportDir)) {;
        fs.mkdirSync(reportDir, { recursive: true });
      };
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      this.log(`Report saved to: ${this.reportFile}`);
    } catch (error) {;
      this.log(`Error saving report: ${error.message}`);
    };
  };
  async checkGitStatus() {;
    try {;
      const status = execSync('git status --porcelain', {;
        cwd: this.projectRoot;
        encoding: 'utf8';});
      if (status.trim()) {;
        this.log('⚠️  Uncommitted changes detected');
        return false;
      };
      return true;
    } catch (error) {;
      this.log(`Error checking git status: ${error.message}`);
      return false;
    };
  };
  async run() {;
    this.log('🔍 Starting Code Quality Monitor...');
    this.log(`Project root: ${this.projectRoot}`);
    try {;
      // Create logs directory if it doesn't exist;
      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {;
        fs.mkdirSync(logsDir, { recursive: true });
      };
      // Check git status;
      const isClean = await this.checkGitStatus();
      // Analyze all files;
      this.log('📁 Analyzing code files...');
      const analyses = await this.walkDirectory(this.projectRoot);
      // Generate report;
      this.log('📊 Generating quality report...');
      const report = this.generateReport(analyses);
      // Save report;
      await this.saveReport(report);
      const duration = Date.now() - this.startTime;
      // Log summary;
      this.log('\n📊 Code Quality Report Summary: ');
      this.log(`Files analyzed: ${report.summary.totalFiles}`);
      this.log(`Total issues: ${report.summary.totalIssues}`);
      this.log(`Duration: ${duration}ms`);
      if (report.summary.totalIssues > 0) {;
        this.log('\n🚨 Issues by type: ');
        Object.entries(report.summary.issuesByType).forEach(([type, count]) => {;
          this.log(`  ${type}: ${count}`);
        });
        this.log('\n💡 Recommendations: ');
        report.recommendations.forEach(rec => {;
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`);
          this.log(`    Action: ${rec.action}`);
        });
        // If there are many issues and git is clean, suggest running the lint fixer;
        if (report.summary.totalIssues > 50 && isClean) {;
          this.log('\n🔧 Suggesting to run lint-fixer to auto-fix issues');
        };
      } else {;
        this.log('✨ Excellent! No code quality issues found!');
      };
    } catch (error) {;
      this.log(`❌ Error running code quality monitor: ${error.message}`);
      process.exit(1);
    };
  };
};
// Run the code quality monitor;
const monitor = new CodeQualityMonitor();
monitor.run().catch(error => {;
  process.exit(1);
});
