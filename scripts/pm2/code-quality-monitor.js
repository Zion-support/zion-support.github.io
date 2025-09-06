<<<<<<< HEAD
<<<<<<<< HEAD:scripts/pm2/code-quality-monitor.js

<<<<<<< HEAD
=======
<<<<<<< HEAD
}}; async analyzeFile(filePath) {try {; const content = fs.readFileSync(filePath, 'utf8'); const stats = fs.statSync(filePath); const analysis = {; file: filePath, size: stats.size, lines: content.split('\n').length
    issues: []}; // Check for common code quality issues; const lines = content.split('\n'); lines.forEach((line, index) = > {const lineNum = index + 1; // Trailing spaces; if (line.match(/[ \t]+$/)) {; analysis.issues.push({; line: lineNum, type: 'trailing-spaces', message: 'Trailing spaces found'
    severity: 'low'})}; // Long lines (over 120 characters); if (line.length > 120) {analysis.issues.push({; line: lineNum, type: 'long-line', message: `Line is ${line.length} characters long (max: 120)`
    severity: 'medium'})}; // Console statements; if (line.match(/console\.(log|warn|error|info|debug)/)) {analysis.issues.push({; line: lineNum, type: 'console-statement', message: 'Console statement found - should be removed in production'
    severity: 'medium'})}; // TODO/FIXME comments; if (line.match(/TODO|FIXME|HACK|XXX/)) {analysis.issues.push({; line: lineNum, type: 'todo-comment', message: 'TODO/FIXME comment found'
    severity: 'low'})}; // Unused imports (basic check); if (line.match(/^import.*from/) && !line.includes('//')) {const importMatch = line.match(/import\s+(\w+)/); if (importMatch) {; const importName = importMatch[1]; if (importName ! = = 'React' && !content.includes(importName)) {; analysis.issues.push({; line: lineNum, type: 'unused-import', message: `Potentially unused import ${importName}`; severity: 'medium'})}}}}); return analysis} catch (error) {this.log(`Error analyzing file ${filePath}: ${error.message}`); return null}}; async walkDirectory(dir) {const analyses = []; try {; const items = fs.readdirSync(dir); for (const item of items) {; const fullPath = path.join(dir, item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) {; if (!fullPath.includes('node_modules') &&; !fullPath.includes('.git') &&; !fullPath.includes('dist') &&; !fullPath.includes('build') &&; !fullPath.includes('.next') &&; !fullPath.includes('coverage') &&; !fullPath.includes('logs')) {; const subAnalyses = await this.walkDirectory(fullPath); analyses.push(...subAnalyses)}} else if (stat.isFile()) {const ext = path.extname(fullPath); if (['.js', '.jsx', '.ts', '.tsx'].includes(ext)) {; const analysis = await this.analyzeFile(fullPath); if (analysis) {; analyses.push(analysis)}}}}} catch (error) {this.log(`Error walking directory ${dir}: ${error.message}`)}; return analyses}; generateReport(analyses) {const totalFiles = analyses.length; const totalIssues = analyses.reduce((sum, analysis) = > sum + analysis.issues.length, 0); const issuesByType = {}; const issuesBySeverity = { low: 0, medium: 0, high: 0 }; analyses.forEach(analysis = > {analysis.issues.forEach(issue = > {; // Count by type; issuesByType[issue.type] = (issuesByType[issue.type] |0) + 1; // Count by severity; issuesBySeverity[issue.severity]++})}); const report = {timestamp: new Date().toISOString(), summary: {
      , totalFiles; totalIssues; issuesByType; issuesBySeverity
    }
    files: analyses.filter(analysis = > analysis.issues.length > 0)
    recommendations: this.generateRecommendations(issuesByType, totalIssues)}; return report}; generateRecommendations(issuesByType, totalIssues) {const recommendations = []; if (issuesByType['trailing-spaces'] > 0) {; recommendations.push({; type: 'trailing-spaces', priority: 'low', message: 'Remove trailing spaces from files'
    action: 'Run the lint-fixer to automatically remove trailing spaces'})}; if (issuesByType['console-statement'] > 0) {recommendations.push({; type: 'console-statement', priority: 'medium', message: 'Remove console statements from production code'
    action: 'Replace console statements with proper logging or remove them'})}; if (issuesByType['unused-import'] > 0) {recommendations.push({; type: 'unused-import', priority: 'medium', message: 'Remove unused imports'
    action: 'Clean up unused imports to reduce bundle size'})}; if (totalIssues > 100) {recommendations.push({; type: 'general', priority: 'high', message: 'High number of code quality issues detected'
    action: 'Run comprehensive code cleanup and establish coding standards'})}; return recommendations}; async saveReport(report) {try {; const reportDir = path.dirname(this.reportFile); if (!fs.existsSync(reportDir)) {; fs.mkdirSync(reportDir, { recursive: true })}; fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)); this.log(`Report saved to: ${this.reportFile}`)} catch (error) {this.log(`Error saving report: ${error.message}`)}}; async checkGitStatus() {try {; const status = execSync('git status --porcelain', {; cwd: this.projectRoot
    encoding: 'utf8'}); if (status.trim()) {this.log('⚠️ Uncommitted changes detected'); return false}; return true} catch (error) {this.log(`Error checking git status: ${error.message}`); return false}}; async run() {this.log('🔍 Starting Code Quality Monitor...'); this.log(`Project root: ${this.projectRoot}`); try {// Create logs directory if it doesn't exist; const logsDir = path.dirname(this.logFile); if (!fs.existsSync(logsDir)) {; fs.mkdirSync(logsDir, { recursive: true })}; // Check git status; const isClean = await this.checkGitStatus(); // Analyze all files; this.log('📁 Analyzing code files...'); const analyses = await this.walkDirectory(this.projectRoot); // Generate report; this.log('📊 Generating quality report...'); const report = this.generateReport(analyses); // Save report; await this.saveReport(report); const duration = Date.now() - this.startTime; // Log summary; this.log('\n📊 Code Quality Report Summary: '); this.log(`Files analyzed: ${report.summary.totalFiles}`); this.log(`Total issues: ${report.summary.totalIssues}`); this.log(`Duration: ${duration}ms`); if (report.summary.totalIssues > 0) {this.log('\n🚨 Issues by type: '); Object.entries(report.summary.issuesByType).forEach(([type, count]) = > {; this.log(` ${type}: ${count}`)}); this.log('\n💡 Recommendations: '), report.recommendations.forEach(rec = > {, this.log(` [${rec.priority.toUpperCase()}] ${rec.message}`); this.log(` Action: ${rec.action}`)}); // If there are many issues and git is clean, suggest running the lint fixer; if (report.summary.totalIssues > 50 && isClean) {this.log('\n🔧 Suggesting to run lint-fixer to auto-fix issues')}} else {this.log('✨ Excellent! No code quality issues found!')}
} catch (error) {this.log(`❌ Error running code quality monitor: ${error.message}`); process.exit(1)}}}
// Run the code quality monitor;
const monitor = new CodeQualityMonitor();
monitor.run().catch(error = > {process.exit(1)});
=======
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
; const report = {; timestamp: new Date().toISOString(); summary: {; totalFiles; totalIssues; issuesByType; issuesBySeverity}; files: analyses.filter(analysis = > analysis.issues.length > 0); recommendations: this.generateRecommendations(issuesByType, totalIssues)};
; return report};
; generateRecommendations(issuesByType, totalIssues) {; const recommendations = [];
; if (issuesByType['trailing-spaces'] > 0) {; recommendations.push({; type: 'trailing-spaces'; priority: 'low'; message: 'Remove trailing spaces from files'; action: 'Run the lint-fixer to automatically remove trailing spaces'})};
; if (issuesByType['console-statement'] > 0) {; recommendations.push({; type: 'console-statement'; priority: 'medium'; message: 'Remove console statements from production code'; action: 'Replace console statements with proper logging or remove them'})};
; if (issuesByType['unused-import'] > 0) {; recommendations.push({; type: 'unused-import'; priority: 'medium'; message: 'Remove unused imports'; action: 'Clean up unused imports to reduce bundle size'})};
; if (totalIssues > 100) {; recommendations.push({; type: 'general'; priority: 'high'; message: 'High number of code quality issues detected'; action: 'Run comprehensive code cleanup and establish coding standards'})};
; return recommendations};
; async saveReport(report) {; try {; const reportDir = path.dirname(this.reportFile); if (!fs.existsSync(reportDir)) {; fs.mkdirSync(reportDir, { recursive: true })};
; fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)); this.log(`Report saved to: ${this.reportFile}`)} catch (error) {; this.log(`Error saving report: ${error.message}`)}};
; async checkGitStatus() {; try {; const status = execSync('git status --porcelain', {; cwd: this.projectRoot; encoding: 'utf8'});
; if (status.trim()) {; this.log('⚠️ Uncommitted changes detected'); return false};
; return true} catch (error) {; this.log(`Error checking git status: ${error.message}`); return false}};
; async run() {; this.log('🔍 Starting Code Quality Monitor...'); this.log(`Project root: ${this.projectRoot}`);
; try {; // Create logs directory if it doesn't exist; const logsDir = path.dirname(this.logFile); if (!fs.existsSync(logsDir)) {; fs.mkdirSync(logsDir, { recursive: true })};
; // Check git status; const isClean = await this.checkGitStatus();
; // Analyze all files; this.log('📁 Analyzing code files...'); const analyses = await this.walkDirectory(this.projectRoot);
; // Generate report; this.log('📊 Generating quality report...'); const report = this.generateReport(analyses);
; // Save report; await this.saveReport(report);
; const duration = Date.now() - this.startTime;
; // Log summary; this.log('\n📊 Code Quality Report Summary: '); this.log(`Files analyzed: ${report.summary.totalFiles}`); this.log(`Total issues: ${report.summary.totalIssues}`); this.log(`Duration: ${duration}ms`);
; if (report.summary.totalIssues > 0) {; this.log('\n🚨 Issues by type: '); Object.entries(report.summary.issuesByType).forEach(([type, count]) = > {; this.log(` ${type}: ${count}`)});
; this.log('\n💡 Recommendations: '); report.recommendations.forEach(rec = > {; this.log(` [${rec.priority.toUpperCase()}] ${rec.message}`); this.log(` Action: ${rec.action}`)});
; // If there are many issues and git is clean, suggest running the lint fixer; if (report.summary.totalIssues > 50 && isClean) {; this.log('\n🔧 Suggesting to run lint-fixer to auto-fix issues')}} else {; this.log('✨ Excellent! No code quality issues found!')};
} catch (error) {; this.log(`❌ Error running code quality monitor: ${error.message}`); process.exit(1)}}};
;
// Run the code quality monitor;
const monitor = new CodeQualityMonitor();
monitor.run().catch(error = > {; process.exit(1)});
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
};
};
;
  async analyzeFile(filePath) {;
    try {;
      const content = fs.readFileSync(filePath, 'utf8');
      const stats = fs.statSync(filePath);
;
      const analysis = {;
        file: filePath;
        size: stats.size;
        lines: content.split('\n').length;
        issues: [];
      ;
;
      // Check for common code quality issues;
      const lines = content.split('\n');
;
      lines.forEach((line, index) => {;
        const lineNum = index + 1;
;
        // Trailing spaces;
        if (line.match(/[ \t]+$/)) {;
          analysis.issues.push({;
            line: lineNum;
            type: 'trailing-spaces';
            message: 'Trailing spaces found';
            severity: 'low';
          });
<<<<<<< HEAD
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/scripts/pm2/code-quality-monitor.js
}};
<<<<<<< HEAD
; async analyzeFile(filePath) {; try {; const content = fs && fs.readFileSync(filePath, 'utf8'); const stats = fs && fs.statSync(filePath);
; const analysis = {; file: filePath, size: stats && stats.size, lines: content && content.split('\n').length,
    issues: []};
; // Check for common code quality issues; const lines = content && content.split('\n');
; lines && lines.forEach((line, index) = > {; const lineNum = index + 1;
; // Trailing spaces; if (line && line.match(/[ \t]+$/)) {; analysis && analysis.issues.push({; line: lineNum, type: 'trailing-spaces', message: 'Trailing spaces found',
    severity: 'low'})};
; // Long lines (over 120 characters); if (line && line.length > 120) {; analysis && analysis.issues.push({; line: lineNum, type: 'long-line', message: `Line is ${line && line.length} characters long (max: 120)`,
    severity: 'medium'})};
; // Console statements; if (line && line.match(/console\.(log|warn|error|info|debug)/)) {; analysis && analysis.issues.push({; line: lineNum, type: 'console-statement', message: 'Console statement found - should be removed in production',
    severity: 'medium'})};
; // TODO/FIXME comments; if (line && line.match(/TODO|FIXME|HACK|XXX/)) {; analysis && analysis.issues.push({; line: lineNum, type: 'todo-comment', message: 'TODO/FIXME comment found',
    severity: 'low'})};
; // Unused imports (basic check); if (line && line.match(/^import.*from/) && !line && line.includes('//')) {; const importMatch = line && line.match(/import\s+(\w+)/); if (importMatch) {; const importName = importMatch[1]; if (importName ! = = 'React' && !content && content.includes(importName)) {; analysis && analysis.issues.push({; line: lineNum, type: 'unused-import', message: `Potentially unused import ${importName}`; severity: 'medium'})}}}});
; return analysis} catch (error) {; this && this.log(`Error analyzing file ${filePath}: ${error && error.message}`); return null}};
; async walkDirectory(dir) {; const analyses = [];
; try {; const items = fs && fs.readdirSync(dir);
; for (const item of items) {; const fullPath = path && path.join(dir, item); const stat = fs && fs.statSync(fullPath);
; if (stat && stat.isDirectory()) {; if (!fullPath && fullPath.includes('node_modules') &&; !fullPath && fullPath.includes('.git') &&; !fullPath && fullPath.includes('dist') &&; !fullPath && fullPath.includes('build') &&; !fullPath && fullPath.includes('.next') &&; !fullPath && fullPath.includes('coverage') &&; !fullPath && fullPath.includes('logs')) {; const subAnalyses = await this && this.walkDirectory(fullPath); analyses && analyses.push(...subAnalyses)}} else if (stat && stat.isFile()) {; const ext = path && path.extname(fullPath); if (['.js', '.jsx', '.ts', '.tsx'].includes(ext)) {; const analysis = await this && this.analyzeFile(fullPath); if (analysis) {; analyses && analyses.push(analysis)}}}}} catch (error) {; this && this.log(`Error walking directory ${dir}: ${error && error.message}`)};
; return analyses};
; generateReport(analyses) {; const totalFiles = analyses && analyses.length; const totalIssues = analyses && analyses.reduce((sum, analysis) = > sum + analysis && analysis.issues.length, 0);
; const issuesByType = {}; const issuesBySeverity = { low: 0, medium: 0, high: 0 };
; analyses && analyses.forEach(analysis = > {; analysis && analysis.issues.forEach(issue = > {; // Count by type; issuesByType[issue && issue.type] = (issuesByType[issue && issue.type] || 0) + 1;
; // Count by severity; issuesBySeverity[issue && issue.severity]++})});
; const report = {; timestamp: new Date().toISOString(), summary: {
      , totalFiles; totalIssues; issuesByType; issuesBySeverity
    },
    files: analyses && analyses.filter(analysis = > analysis && analysis.issues.length > 0),
    recommendations: this && this.generateRecommendations(issuesByType, totalIssues)};
; return report};
; generateRecommendations(issuesByType, totalIssues) {; const recommendations = [];
; if (issuesByType['trailing-spaces'] > 0) {; recommendations && recommendations.push({; type: 'trailing-spaces', priority: 'low', message: 'Remove trailing spaces from files',
    action: 'Run the lint-fixer to automatically remove trailing spaces'})};
; if (issuesByType['console-statement'] > 0) {; recommendations && recommendations.push({; type: 'console-statement', priority: 'medium', message: 'Remove console statements from production code',
    action: 'Replace console statements with proper logging or remove them'})};
; if (issuesByType['unused-import'] > 0) {; recommendations && recommendations.push({; type: 'unused-import', priority: 'medium', message: 'Remove unused imports',
    action: 'Clean up unused imports to reduce bundle size'})};
; if (totalIssues > 100) {; recommendations && recommendations.push({; type: 'general', priority: 'high', message: 'High number of code quality issues detected',
    action: 'Run comprehensive code cleanup and establish coding standards'})};
; return recommendations};
; async saveReport(report) {; try {; const reportDir = path && path.dirname(this && this.reportFile); if (!fs && fs.existsSync(reportDir)) {; fs && fs.mkdirSync(reportDir, { recursive: true })};
; fs && fs.writeFileSync(this && this.reportFile, JSON && JSON.stringify(report, null, 2)); this && this.log(`Report saved to: ${this && this.reportFile}`)} catch (error) {; this && this.log(`Error saving report: ${error && error.message}`)}};
; async checkGitStatus() {; try {; const status = execSync('git status --porcelain', {; cwd: this && this.projectRoot,
    encoding: 'utf8'});
; if (status && status.trim()) {; this && this.log('⚠️ Uncommitted changes detected'); return false};
; return true} catch (error) {; this && this.log(`Error checking git status: ${error && error.message}`); return false}};
; async run() {; this && this.log('🔍 Starting Code Quality Monitor...'); this && this.log(`Project root: ${this && this.projectRoot}`);
; try {; // Create logs directory if it doesn't exist; const logsDir = path && path.dirname(this && this.logFile); if (!fs && fs.existsSync(logsDir)) {; fs && fs.mkdirSync(logsDir, { recursive: true })};
; // Check git status; const isClean = await this && this.checkGitStatus();
; // Analyze all files; this && this.log('📁 Analyzing code files...'); const analyses = await this && this.walkDirectory(this && this.projectRoot);
; // Generate report; this && this.log('📊 Generating quality report...'); const report = this && this.generateReport(analyses);
; // Save report; await this && this.saveReport(report);
; const duration = Date && Date.now() - this && this.startTime;
; // Log summary; this && this.log('\n📊 Code Quality Report Summary: '); this && this.log(`Files analyzed: ${report && report.summary.totalFiles}`); this && this.log(`Total issues: ${report && report.summary.totalIssues}`); this && this.log(`Duration: ${duration}ms`);
; if (report && report.summary.totalIssues > 0) {; this && this.log('\n🚨 Issues by type: '); Object && Object.entries(report && report.summary.issuesByType).forEach(([type, count]) = > {; this && this.log(` ${type}: ${count}`)});
; this && this.log('\n💡 Recommendations: '), report && report.recommendations.forEach(rec = > {, this && this.log(` [${rec && rec.priority.toUpperCase()}] ${rec && rec.message}`); this && this.log(` Action: ${rec && rec.action}`)});
; // If there are many issues and git is clean, suggest running the lint fixer; if (report && report.summary.totalIssues > 50 && isClean) {; this && this.log('\n🔧 Suggesting to run lint-fixer to auto-fix issues')}} else {; this && this.log('✨ Excellent! No code quality issues found!')};
} catch (error) {; this && this.log(`❌ Error running code quality monitor: ${error && error.message}`); process && process.exit(1)}}};
// Run the code quality monitor;
const monitor = new CodeQualityMonitor();
<<<<<<<< HEAD:scripts/pm2/code-quality-monitor.js


=======
========
monitor && monitor.run().catch(error = > {; process && process.exit(1)});
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/scripts/pm2/code-quality-monitor.js
    };
  };
,
  async analyzeFile(filePath) {,
    try {,
      const content = fs.readFileSync(filePath, 'utf8'),
      const stats = fs.statSync(filePath),
,
      const analysis = {,
        file: filePath,
        size: stats.size,
        lines: content.split('\n').length,
        issues: [],
      };
,
      // Check for common code quality issues,
      const lines = content.split('\n'),
,
      lines.forEach((line, index) => {,
        const lineNum = index + 1,
,
        // Trailing spaces,
        if (line.match(/[ \t]+$/)) {,
          analysis.issues.push({,
            line: lineNum,
            type: 'trailing-spaces',
            message: 'Trailing spaces found',
            severity: 'low',
          }),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        };
,
        // Long lines (over 120 characters),
        if (line.length > 120) {,
          analysis.issues.push({,
            line: lineNum,
            type: 'long-line',
            message: `Line is ${line.length} characters long (max: 120)`,
            severity: 'medium',
          }),
        };
,
        // Console statements,
        if (line.match(/console\.(log|warn|error|info|debug)/)) {,
          analysis.issues.push({,
            line: lineNum,
            type: 'console-statement',
            message: 'Console statement found - should be removed in production',
            severity: 'medium',
          }),
        };
,
        // TODO/FIXME comments,
        if (line.match(/TODO|FIXME|HACK|XXX/)) {,
          analysis.issues.push({,
            line: lineNum,
            type: 'todo-comment',
            message: 'TODO/FIXME comment found',
            severity: 'low',
          }),
        };
,
        // Unused imports (basic check),
        if (line.match(/^import.*from/) && !line.includes('//')) {,
          const importMatch = line.match(/import\s+(\w+)/),
          if (importMatch) {,
            const importName = importMatch[1],
            if (importName !== 'React' && !content.includes(importName)) {,
              analysis.issues.push({,
                line: lineNum,
                type: 'unused-import',
                message: `Potentially unused import ${importName}`,
                severity: 'medium',
              }),
            };
          };
        };
      }),
,
      return analysis,
    } catch (error) {,
      this.log(`Error analyzing file ${filePath}: ${error.message}`),
      return null,
    };
  };
,
  async walkDirectory(dir) {,
    const analyses = [],
,
    try {,
      const items = fs.readdirSync(dir),
,
      for (const item of items) {,
        const fullPath = path.join(dir, item),
        const stat = fs.statSync(fullPath),
,
        if (stat.isDirectory()) {,
          if (!fullPath.includes('node_modules') &&,
              !fullPath.includes('.git') &&,
              !fullPath.includes('dist') &&,
              !fullPath.includes('build') &&,
              !fullPath.includes('.next') &&,
              !fullPath.includes('coverage') &&,
              !fullPath.includes('logs')) {,
            const subAnalyses = await this.walkDirectory(fullPath),
            analyses.push(...subAnalyses),
          };
        } else if (stat.isFile()) {,
          const ext = path.extname(fullPath),
          if (['.js.jsx', '.ts.tsx'].includes(ext)) {,
            const analysis = await this.analyzeFile(fullPath),
            if (analysis) {,
              analyses.push(analysis),
=======
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
        fil:e:filePath;
        siz:e:stats.size;
        line:s:content.split('\n').length;
        issue:s:[];
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
            lin:e:lineNum;
            typ:e:'trailing-spaces';
            messag:e:'Trailing spaces found';
            severit:y:'low';          });
            line: lineNum,
            type: 'trailing-spaces';
            message: 'Trailing spaces found';
            severity: 'low'})
        };
;
        // Long lines (over 120 characters);
        if (line.length > 120) {_;
          analysis.issues.push({;
            lin:e:lineNum;
            typ:e:'long-line';
            messag:e:`Line is ${line.length} characters long (ma:x:120)`;
            severit:y:'medium';          });
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
            lin:e:lineNum;
            typ:e:'console-statement';
            messag:e:'Console statement found - should be removed in production';
            severit:y:'medium';          });
            line: lineNum,
            type: 'console-statement';
            message: 'Console statement found - should be removed in production';
            severity: 'medium'})
        };
;
        // TODO/FIXME comments;
        if (line.match(/TODO|FIXME|HACK|XXX/)) {_;
          analysis.issues.push({;
            lin:e:lineNum;
            typ:e:'todo-comment';
            messag:e:'TODO/FIXME comment found';
            severit:y:'low';          });
            line: lineNum,
            type: 'todo-comment';
            message: 'TODO/FIXME comment found';
            severity: 'low'})
        };
;
        // Unused imports (basic check);
        if (line.match(/^import.*from/) && !line.includes('//')) {_;
=======
        };
;
        // Long lines (over 120 characters);
        if (line.length > 120) {;
          analysis.issues.push({;
            line: lineNum;
            type: 'long-line';
            message: `Line is ${line.length} characters long (max: 120)`;
            severity: 'medium';
          });
        };
;
        // Console statements;
        if (line.match(/console\.(log|warn|error|info|debug)/)) {;
          analysis.issues.push({;
            line: lineNum;
            type: 'console-statement';
            message: 'Console statement found - should be removed in production';
            severity: 'medium';
          });
        };
;
        // TODO/FIXME comments;
        if (line.match(/TODO|FIXME|HACK|XXX/)) {;
          analysis.issues.push({;
            line: lineNum;
            type: 'todo-comment';
            message: 'TODO/FIXME comment found';
            severity: 'low';
          });
        };
;
        // Unused imports (basic check);
        if (line.match(/^import.*from/) && !line.includes('//')) {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          const importMatch = line.match(/import\s+(\w+)/);
          if (importMatch) {;
            const importName = importMatch[1];
            if (importName !== 'React' && !content.includes(importName)) {;
              analysis.issues.push({;
<<<<<<< HEAD
                lin:e:lineNum;
                typ:e:'unused-import';
                messag:e:`Potentially unused import ${importName}`;
                severit:y:'medium';              });
=======
                line: lineNum;
                type: 'unused-import';
                message: `Potentially unused import ${importName}`;
                severity: 'medium';
              });
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            };
          };
        };
      });
;
      return analysis;
    } catch (error) {;
<<<<<<< HEAD
      this.log(`Error analyzing file ${filePath} ${error.message}`);
      return null;
};
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
=======
      this.log(`Error analyzing file ${filePath}: ${error.message}`);
      return null;
};
};
;
  async walkDirectory(dir) {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
          if (!fullPath.includes('nodemodules') &&;
=======
          if (!fullPath.includes('node_modules') &&;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              !fullPath.includes('.git') &&;
              !fullPath.includes('dist') &&;
              !fullPath.includes('build') &&;
              !fullPath.includes('.next') &&;
              !fullPath.includes('coverage') &&;
              !fullPath.includes('logs')) {;
            const subAnalyses = await this.walkDirectory(fullPath);
<<<<<<< HEAD
            analyses.push(...subAnalyses)}
        } else if (stat.isFile()) {_;
          const ext = path.extname(fullPath);
          if (['.js', _'.jsx', _'.ts', _'.tsx'].includes(ext)) {;
            const analysis = await this.analyzeFile(fullPath);
            if (analysis) {;
              analyses.push(analysis);
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
            analyses.push(...subAnalyses);
          };
        } else if (stat.isFile()) {;
          const ext = path.extname(fullPath);
          if (['.js', '.jsx', '.ts', '.tsx'].includes(ext)) {;
            const analysis = await this.analyzeFile(fullPath);
            if (analysis) {;
              analyses.push(analysis);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            };
          };
        };
      };
<<<<<<< HEAD
<<<<<<< HEAD
    } catch (error) {,
      this.log(`Error walking directory ${dir}: ${error.message}`),
    };
,
    return analyses,
  };
,
  generateReport(analyses) {,
    const totalFiles = analyses.length,
    const totalIssues = analyses.reduce((sum, analysis) => sum + analysis.issues.length, 0),
,
    const issuesByType = {};
=======
    } catch (error) {;
      this.log(`Error walking directory ${dir} ${error.message}`);};
;
    return analyses
};
;
  generateReport(analyses) {_;
    const totalFiles = analyses.length;
    const totalIssues = analyses.reduce(_(sum, analysis) => sum + analysis.issues.length, 0);
;
    const issuesByType = {};
    const issuesBySeverity = { lo:w:0, mediu:m:0, hig:h:0 ;    const issuesBySeverity = { low: 0, medium: 0, high: 0 ;
=======
    } catch (error) {;
      this.log(`Error walking directory ${dir}: ${error.message}`);
};
;
    return analyses;
};
;
  generateReport(analyses) {;
    const totalFiles = analyses.length;
    const totalIssues = analyses.reduce((sum, analysis) => sum + analysis.issues.length, 0);
;
    const issuesByType = {};
    const issuesBySeverity = { low: 0, medium: 0, high: 0 ;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
;
    analyses.forEach(analysis => {;
      analysis.issues.forEach(issue => {;
        // Count by type;
        issuesByType[issue.type] = (issuesByType[issue.type] || 0) + 1;
;
        // Count by severity;
<<<<<<< HEAD
        issuesBySeverity[issue.severity]++})
    });
;
    const report = {;
      timestam:p:new Date().toISOString();
      summar:y:{;        totalFiles;
=======
        issuesBySeverity[issue.severity]++;
      });
    });
;
    const report = {;
      timestamp: new Date().toISOString();
      summary: {;
        totalFiles;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        totalIssues;
        issuesByType;
        issuesBySeverity;
      };
<<<<<<< HEAD
      file:s:analyses.filter(analysis => analysis.issues.length > 0);
      recommendation:s:this.generateRecommendations(issuesByType, totalIssues);      files: analyses.filter(analysis => analysis.issues.length > 0);
      recommendations: this.generateRecommendations(issuesByType, totalIssues);
};
;
    return report
};
;
  generateRecommendations(issuesByType, totalIssues) {_;
=======
      files: analyses.filter(analysis => analysis.issues.length > 0);
      recommendations: this.generateRecommendations(issuesByType, totalIssues);
};
;
    return report;
};
;
  generateRecommendations(issuesByType, totalIssues) {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    const recommendations = [];
;
    if (issuesByType['trailing-spaces'] > 0) {;
      recommendations.push({;
<<<<<<< HEAD
        typ:e:'trailing-spaces';
        priorit:y:'low';
        messag:e:'Remove trailing spaces from files';
        actio:n:'Run the lint-fixer to automatically remove trailing spaces';      });
        type: 'trailing-spaces';
        priority: 'low';
        message: 'Remove trailing spaces from files';
        action: 'Run the lint-fixer to automatically remove trailing spaces'})
};
;
    if (issuesByType['console-statement'] > 0) {_;
      recommendations.push({;
        typ:e:'console-statement';
        priorit:y:'medium';
        messag:e:'Remove console statements from production code';
        actio:n:'Replace console statements with proper logging or remove them';      });
        type: 'console-statement';
        priority: 'medium';
        message: 'Remove console statements from production code';
        action: 'Replace console statements with proper logging or remove them'})
};
;
    if (issuesByType['unused-import'] > 0) {_;
      recommendations.push({;
        typ:e:'unused-import';
        priorit:y:'medium';
        messag:e:'Remove unused imports';
        actio:n:'Clean up unused imports to reduce bundle size';      });
        type: 'unused-import';
        priority: 'medium';
        message: 'Remove unused imports';
        action: 'Clean up unused imports to reduce bundle size'})
};
;
    if (totalIssues > 100) {_;
      recommendations.push({;
        typ:e:'general';
        priorit:y:'high';
        messag:e:'High number of code quality issues detected';
        actio:n:'Run comprehensive code cleanup and establish coding standards';      });
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
        fs.mkdirSync(reportDir, { recursiv:e:true });
      };
;
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      this.log(`Report saved:to:${this.reportFile}`);
    } catch (error) {;
      this.log(`Error saving:report:${error.message}`);
};      };
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
      const status = execSync('git status --porcelain', {;
        cw:d:this.projectRoot;
        encodin:g:'utf8';
      });;
      if (status.trim()) {_;
        this.log('⚠️  Uncommitted changes detected');
        return false};
;
      return true;
    } catch (error) {;
      this.log(`Error checking git:status:${error.message}`);      return false;
};
      return true
    } catch (error) {_;
      this.log(`Error checking git status: ${error.message}`);
      return false
}
};
;
  async run() {_;
    this.log('🔍 Starting Code Quality Monitor...');
    this.log(`Project:root:${this.projectRoot}`);    this.log(`Project root: ${this.projectRoot}`);
;
    try {_;
      // Create logs directory if it doesn't exist;
      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {;
        fs.mkdirSync(logsDir, { recursiv:e:true });        fs.mkdirSync(logsDir, { recursive: true });
=======
        type: 'trailing-spaces';
        priority: 'low';
        message: 'Remove trailing spaces from files';
        action: 'Run the lint-fixer to automatically remove trailing spaces';
      });
};
;
    if (issuesByType['console-statement'] > 0) {;
      recommendations.push({;
        type: 'console-statement';
        priority: 'medium';
        message: 'Remove console statements from production code';
        action: 'Replace console statements with proper logging or remove them';
      });
};
;
    if (issuesByType['unused-import'] > 0) {;
      recommendations.push({;
        type: 'unused-import';
        priority: 'medium';
        message: 'Remove unused imports';
        action: 'Clean up unused imports to reduce bundle size';
      });
};
;
    if (totalIssues > 100) {;
      recommendations.push({;
        type: 'general';
        priority: 'high';
        message: 'High number of code quality issues detected';
        action: 'Run comprehensive code cleanup and establish coding standards';
      });
};
;
    return recommendations;
};
;
  async saveReport(report) {;
    try {;
      const reportDir = path.dirname(this.reportFile);
      if (!fs.existsSync(reportDir)) {;
        fs.mkdirSync(reportDir, { recursive: true });
      };
;
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      this.log(`Report saved to: ${this.reportFile}`);
    } catch (error) {;
      this.log(`Error saving report: ${error.message}`);
};
};
;
  async checkGitStatus() {;
    try {;
      const status = execSync('git status --porcelain', {;
        cwd: this.projectRoot;
        encoding: 'utf8';
      });
;
      if (status.trim()) {;
        this.log('⚠️  Uncommitted changes detected');
        return false;
      };
;
      return true;
    } catch (error) {;
      this.log(`Error checking git status: ${error.message}`);
      return false;
};
};
;
  async run() {;
    this.log('🔍 Starting Code Quality Monitor...');
    this.log(`Project root: ${this.projectRoot}`);
;
    try {;
      // Create logs directory if it doesn't exist;
      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {;
        fs.mkdirSync(logsDir, { recursive: true });
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
      this.log('\n📊 Code Quality Report:Summary:');
      this.log(`Files:analyzed:${report.summary.totalFiles}`);
      this.log(`Total:issues:${report.summary.totalIssues}`);
      this.log(`Duratio:n:${duration}ms`);
;
      if (report.summary.totalIssues > 0) {;
        this.log('\n🚨 Issues by:type:');        Object.entries(report.summary.issuesByType).forEach(([type, count]) => {;
          this.log(`  ${type} ${count}`);
        });
;
        this.log('\n💡 Recommendation:s:');
        report.recommendations.forEach(rec => {;
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`);
          this.log(`    Actio:n:${rec.action}`);        });
=======
      this.log('\n📊 Code Quality Report Summary: ');
      this.log(`Files analyzed: ${report.summary.totalFiles}`);
      this.log(`Total issues: ${report.summary.totalIssues}`);
      this.log(`Duration: ${duration}ms`);
;
      if (report.summary.totalIssues > 0) {;
        this.log('\n🚨 Issues by type: ');
        Object.entries(report.summary.issuesByType).forEach(([type, count]) => {;
          this.log(`  ${type}: ${count}`);
        });
;
        this.log('\n💡 Recommendations: ');
        report.recommendations.forEach(rec => {;
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`);
          this.log(`    Action: ${rec.action}`);
        });
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
;
        // If there are many issues and git is clean, suggest running the lint fixer;
        if (report.summary.totalIssues > 50 && isClean) {;
          this.log('\n🔧 Suggesting to run lint-fixer to auto-fix issues');
        };
      } else {;
        this.log('✨ Excellent! No code quality issues found!');
      };
;
    } catch (error) {;
<<<<<<< HEAD
      this.log(`❌ Error running code quality:monitor:${error.message}`);      process.exit(1);
};
};
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
=======
      this.log(`❌ Error running code quality monitor: ${error.message}`);
      process.exit(1);
};
};
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
};
;
// Run the code quality monitor;
const monitor = new CodeQualityMonitor();
monitor.run().catch(error => {;
  process.exit(1);
});
<<<<<<< HEAD
    };
  };
=======
}
},;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
,;
  async analyzeFile(filePath) {,;
    try {,;
      const content = fs.readFileSync(filePath, 'utf8'),;
      const stats = fs.statSync(filePath),;
,;
      const analysis = {,;
<<<<<<< HEAD
        fil:e:filePath,;
        siz:e:stats.size,;
        line:s:content.split('\n').length,;
        issue:s:[],;
      };
=======
        fil: e: filePath,;
        siz: e: stats.size,;
        line: s: content.split('\n').length,;
        issue: s: [],;
      ,;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
            lin:e:lineNum,;
            typ:e:'trailing-spaces',;
            messag:e:'Trailing spaces found',;
            severit:y:'low',;
          }),;
        };
=======
            lin: e: lineNum,;
            typ: e: 'trailing-spaces',;
            messag: e: 'Trailing spaces found',;
            severit: y: 'low';
          });
        },;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
,;
        // Long lines (over 120 characters),;
        if (line.length > 120) {,;
          analysis.issues.push({,;
<<<<<<< HEAD
            lin:e:lineNum,;
            typ:e:'long-line',;
            messag:e:`Line is ${line.length} characters long (ma:x:120)`,;
            severit:y:'medium',;
          }),;
        };
=======
            lin: e: lineNum,;
            typ: e: 'long-line',;
            messag: e: `Line is ${line.length} characters long (ma: x: 120)`,;
            severit: y: 'medium';
          });
        },;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
,;
        // Console statements,;
        if (line.match(/console\.(log|warn|error|info|debug)/)) {,;
          analysis.issues.push({,;
<<<<<<< HEAD
            lin:e:lineNum,;
            typ:e:'console-statement',;
            messag:e:'Console statement found - should be removed in production',;
            severit:y:'medium',;
          }),;
        };
=======
            lin: e: lineNum,;
            typ: e: 'console-statement',;
            messag: e: 'Console statement found - should be removed in production',;
            severit: y: 'medium';
          });
        },;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
,;
        // TODO/FIXME comments,;
        if (line.match(/TODO|FIXME|HACK|XXX/)) {,;
          analysis.issues.push({,;
<<<<<<< HEAD
            lin:e:lineNum,;
            typ:e:'todo-comment',;
            messag:e:'TODO/FIXME comment found',;
            severit:y:'low',;
          }),;
        };
=======
            lin: e: lineNum,;
            typ: e: 'todo-comment',;
            messag: e: 'TODO/FIXME comment found',;
            severit: y: 'low';
          });
        },;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
,;
        // Unused imports (basic check),;
        if (line.match(/^import.*from/) && !line.includes('//')) {,;
          const importMatch = line.match(/import\s+(\w+)/),;
          if (importMatch) {,;
            const importName = importMatch[1],;
            if (importName !== 'React' && !content.includes(importName)) {,;
              analysis.issues.push({,;
<<<<<<< HEAD
                lin:e:lineNum,;
                typ:e:'unused-import',;
                messag:e:`Potentially unused import ${importName}`,;
                severit:y:'medium',;
              }),;
            };
          };
        };
      }),;
,;
      return analysis,;
    } catch (error) {,;
      this.log(`Error analyzing file ${filePath} ${error.message}`),;
      return null,;
    };
  };
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
            analyses.push(...subAnalyses),;
          };
        } else if (stat.isFile()) {,;
          const ext = path.extname(fullPath),;
          if (['.js.jsx', '.ts.tsx'].includes(ext)) {,;
            const analysis = await this.analyzeFile(fullPath),;
            if (analysis) {,;
              analyses.push(analysis),;            };
          };
        };
      };
    } catch (error) {,;
      this.log(`Error walking directory ${dir} ${error.message}`),;
    };
,;
    return analyses,;  };
=======
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
},;
,;
    return analyses;
},;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
,;
  generateReport(analyses) {,;
    const totalFiles = analyses.length,;
    const totalIssues = analyses.reduce((sum, analysis) => sum + analysis.issues.length, 0),;
,;
<<<<<<< HEAD
    const issuesByType = {};
    const issuesBySeverity = { lo:w:0, mediu:m:0, hig:h:0 };
=======
    const issuesByType = {},;
    const issuesBySeverity = { lo: w: 0, mediu: m: 0, hig: h: 0 ,;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
,;
    analyses.forEach(analysis => {,;
      analysis.issues.forEach(issue => {,;
        // Count by type,;
        issuesByType[issue.type] = (issuesByType[issue.type] || 0) + 1,;
,;
        // Count by severity,;
<<<<<<< HEAD
        issuesBySeverity[issue.severity]++,;
      }),;
    }),;
,;
    const report = {,;
      timestam:p:new Date().toISOString(),;
      summar:y:{,;
        totalFiles,;
        totalIssues,;
        issuesByType,;
        issuesBySeverity,;
      },;
      file:s:analyses.filter(analysis => analysis.issues.length > 0),;
      recommendation:s:this.generateRecommendations(issuesByType, totalIssues),;
    };
,;
    return report,;
  };
=======
        issuesBySeverity[issue.severity]++;
      });
    }),;
,;
    const report = {,;
      timestam: p: new Date().toISOString(),;
      summar: y: {,;
        totalFiles,;
        totalIssues,;
        issuesByType,;
        issuesBySeverity;
      },;
      file: s: analyses.filter(analysis => analysis.issues.length > 0),;
      recommendation: s: this.generateRecommendations(issuesByType, totalIssues);
},;
,;
    return report;
},;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
,;
  generateRecommendations(issuesByType, totalIssues) {,;
    const recommendations = [],;
,;
    if (issuesByType['trailing-spaces'] > 0) {,;
      recommendations.push({,;
<<<<<<< HEAD
        typ:e:'trailing-spaces',;
        priorit:y:'low',;
        messag:e:'Remove trailing spaces from files',;
        actio:n:'Run the lint-fixer to automatically remove trailing spaces',;
      }),;
    };
,;
    if (issuesByType['console-statement'] > 0) {,;
      recommendations.push({,;
        typ:e:'console-statement',;
        priorit:y:'medium',;
        messag:e:'Remove console statements from production code',;
        actio:n:'Replace console statements with proper logging or remove them',;
      }),;
    };
,;
    if (issuesByType['unused-import'] > 0) {,;
      recommendations.push({,;
        typ:e:'unused-import',;
        priorit:y:'medium',;
        messag:e:'Remove unused imports',;
        actio:n:'Clean up unused imports to reduce bundle size',;
      }),;
    };
,;
    if (totalIssues > 100) {,;
      recommendations.push({,;
        typ:e:'general',;
        priorit:y:'high',;
        messag:e:'High number of code quality issues detected',;
        actio:n:'Run comprehensive code cleanup and establish coding standards',;
      }),;
    };
,;
    return recommendations,;
  };
=======
        typ: e: 'trailing-spaces',;
        priorit: y: 'low',;
        messag: e: 'Remove trailing spaces from files',;
        actio: n: 'Run the lint-fixer to automatically remove trailing spaces';
      });
},;
,;
    if (issuesByType['console-statement'] > 0) {,;
      recommendations.push({,;
        typ: e: 'console-statement',;
        priorit: y: 'medium',;
        messag: e: 'Remove console statements from production code',;
        actio: n: 'Replace console statements with proper logging or remove them';
      });
},;
,;
    if (issuesByType['unused-import'] > 0) {,;
      recommendations.push({,;
        typ: e: 'unused-import',;
        priorit: y: 'medium',;
        messag: e: 'Remove unused imports',;
        actio: n: 'Clean up unused imports to reduce bundle size';
      });
},;
,;
    if (totalIssues > 100) {,;
      recommendations.push({,;
        typ: e: 'general',;
        priorit: y: 'high',;
        messag: e: 'High number of code quality issues detected',;
        actio: n: 'Run comprehensive code cleanup and establish coding standards';
      });
},;
,;
    return recommendations;
},;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
,;
  async saveReport(report) {,;
    try {,;
      const reportDir = path.dirname(this.reportFile),;
      if (!fs.existsSync(reportDir)) {,;
<<<<<<< HEAD
        fs.mkdirSync(reportDir, { recursiv:e:true }),;
      };
,;
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)),;
      this.log(`Report saved:to:${this.reportFile}`),;
    } catch (error) {,;
      this.log(`Error saving:report:${error.message}`),;
    };
  };
=======
        fs.mkdirSync(reportDir, { recursiv: e: true });
      },;
,;
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)),;
      this.log(`Report saved: to: ${this.reportFile}`);
    } catch (error) {,;
      this.log(`Error saving: report: ${error.message}`);
}
},;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
,;
  async checkGitStatus() {,;
    try {,;
      const status = execSync('git status --porcelain', {,;
<<<<<<< HEAD
        cw:d:this.projectRoot,;
        encodin:g:'utf8',;
=======
        cw: d: this.projectRoot,;
        encodin: g: 'utf8';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      }),;
,;
      if (status.trim()) {,;
        this.log('⚠️  Uncommitted changes detected'),;
<<<<<<< HEAD
        return false,;
      };
,;
      return true,;
    } catch (error) {,;
      this.log(`Error checking git:status:${error.message}`),;
      return false,;
    };
  };
,;
  async run() {,;
    this.log('🔍 Starting Code Quality Monitor...'),;
    this.log(`Project:root:${this.projectRoot}`),;
=======
        return false;
      },;
,;
      return true;
    } catch (error) {,;
      this.log(`Error checking git: status: ${error.message}`),;
      return false;
}
},;
,;
  async run() {,;
    this.log('🔍 Starting Code Quality Monitor...'),;
    this.log(`Project: root: ${this.projectRoot}`),;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
,;
    try {,;
      // Create logs directory if it doesn't exist,;
      const logsDir = path.dirname(this.logFile),;
      if (!fs.existsSync(logsDir)) {,;
<<<<<<< HEAD
        fs.mkdirSync(logsDir, { recursiv:e:true }),;
      };
=======
        fs.mkdirSync(logsDir, { recursiv: e: true });
      },;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
,;
      // Check git status,;
      const isClean = await this.checkGitStatus(),;
,;
      // Analyze all files,;
      this.log('📁 Analyzing code files...'),;
      const analyses = await this.walkDirectory(this.projectRoot),;
,;
      // Generate report,;
      this.log('📊 Generating quality report...'),;
      const report = this.generateReport(analyses),;
,;
      // Save report,;
      await this.saveReport(report),;
,;
      const duration = Date.now() - this.startTime,;
,;
      // Log summary,;
<<<<<<< HEAD
      this.log('\n📊 Code Quality Report:Summary:'),;
      this.log(`Files:analyzed:${report.summary.totalFiles}`),;
      this.log(`Total:issues:${report.summary.totalIssues}`),;
      this.log(`Duratio:n:${duration}ms`),;
,;
      if (report.summary.totalIssues > 0) {,;
        this.log('\n🚨 Issues by:type:'),;
        Object.entries(report.summary.issuesByType).forEach(([type, count]) => {,;
          this.log(`  ${type} ${count}`),;
        }),;
,;
        this.log('\n💡 Recommendation:s:'),;
        report.recommendations.forEach(rec => {,;
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`),;
          this.log(`    Actio:n:${rec.action}`),;
=======
      this.log('\n📊 Code Quality Report: Summary: '),;
      this.log(`Files: analyzed: ${report.summary.totalFiles}`),;
      this.log(`Total: issues: ${report.summary.totalIssues}`),;
      this.log(`Duratio: n: ${duration}ms`),;
,;
      if (report.summary.totalIssues > 0) {,;
        this.log('\n🚨 Issues by: type: '),;
        Object.entries(report.summary.issuesByType).forEach(([type, count]) => {,;
          this.log(`  ${type}: ${count}`);
        }),;
,;
        this.log('\n💡 Recommendation: s: '),;
        report.recommendations.forEach(rec => {,;
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`),;
          this.log(`    Actio: n: ${rec.action}`);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        }),;
,;
        // If there are many issues and git is clean, suggest running the lint fixer,;
        if (report.summary.totalIssues > 50 && isClean) {,;
<<<<<<< HEAD
          this.log('\n🔧 Suggesting to run lint-fixer to auto-fix issues'),;
        };
      } else {,;
        this.log('✨ Excellent! No code quality issues found!'),;
      };
,;
    } catch (error) {,;
      this.log(`❌ Error running code quality:monitor:${error.message}`),;
      process.exit(1),;
    };
  };
};
=======
          this.log('\n🔧 Suggesting to run lint-fixer to auto-fix issues');
        }
      } else {,;
        this.log('✨ Excellent! No code quality issues found!');
      },;
    } catch (error) {,;
      this.log(`❌ Error running code quality: monitor: ${error.message}`),;
      process.exit(1);
}
}
},;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
,;
// Run the code quality monitor,;
const monitor = new CodeQualityMonitor(),;
monitor.run().catch(error => {,;
<<<<<<< HEAD
  process.exit(1),;
}),;});
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    const issuesBySeverity = { low: 0, medium: 0, high: 0 };
,
    analyses.forEach(analysis => {,
      analysis.issues.forEach(issue => {,
        // Count by type,
        issuesByType[issue.type] = (issuesByType[issue.type] || 0) + 1,
,
        // Count by severity,
<<<<<<< HEAD
        issuesBySeverity[issue.severity]++,
      }),
=======
        issuesBySeverity[issue.severity]++
      })
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    }),
,
    const report = {,
      timestamp: new Date().toISOString(),
      summary: {,
        totalFiles,
        totalIssues,
        issuesByType,
<<<<<<< HEAD
        issuesBySeverity,
      },
      files: analyses.filter(analysis => analysis.issues.length > 0),
      recommendations: this.generateRecommendations(issuesByType, totalIssues),
    };
,
    return report,
=======
        issuesBySeverity
      },
      files: analyses.filter(analysis => analysis.issues.length > 0),
      recommendations: this.generateRecommendations(issuesByType, totalIssues)
    };
,
    return report
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  };
,
  generateRecommendations(issuesByType, totalIssues) {,
    const recommendations = [],
,
    if (issuesByType['trailing-spaces'] > 0) {,
      recommendations.push({,
        type: 'trailing-spaces',
        priority: 'low',
        message: 'Remove trailing spaces from files',
<<<<<<< HEAD
        action: 'Run the lint-fixer to automatically remove trailing spaces',
      }),
=======
        action: 'Run the lint-fixer to automatically remove trailing spaces'
      })
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    };
,
    if (issuesByType['console-statement'] > 0) {,
      recommendations.push({,
        type: 'console-statement',
        priority: 'medium',
        message: 'Remove console statements from production code',
<<<<<<< HEAD
        action: 'Replace console statements with proper logging or remove them',
      }),
=======
        action: 'Replace console statements with proper logging or remove them'
      })
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    };
,
    if (issuesByType['unused-import'] > 0) {,
      recommendations.push({,
        type: 'unused-import',
        priority: 'medium',
        message: 'Remove unused imports',
<<<<<<< HEAD
        action: 'Clean up unused imports to reduce bundle size',
      }),
=======
        action: 'Clean up unused imports to reduce bundle size'
      })
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    };
,
    if (totalIssues > 100) {,
      recommendations.push({,
        type: 'general',
        priority: 'high',
        message: 'High number of code quality issues detected',
<<<<<<< HEAD
        action: 'Run comprehensive code cleanup and establish coding standards',
      }),
    };
,
    return recommendations,
=======
        action: 'Run comprehensive code cleanup and establish coding standards'
      })
    };
,
    return recommendations
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  };
,
  async saveReport(report) {,
    try {,
      const reportDir = path.dirname(this.reportFile),
      if (!fs.existsSync(reportDir)) {,
<<<<<<< HEAD
        fs.mkdirSync(reportDir, { recursive: true }),
      };
,
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)),
      this.log(`Report saved to: ${this.reportFile}`),
    } catch (error) {,
      this.log(`Error saving report: ${error.message}`),
=======
        fs.mkdirSync(reportDir, { recursive: true })
      };
,
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)),
      this.log(`Report saved to: ${this.reportFile}`)
    } catch (error) {,
      this.log(`Error saving report: ${error.message}`)
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    };
  };
,
  async checkGitStatus() {,
    try {,
      const status = execSync('git status --porcelain', {,
        cwd: this.projectRoot,
<<<<<<< HEAD
        encoding: 'utf8',
=======
        encoding: 'utf8'
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      }),
,
      if (status.trim()) {,
        this.log('⚠️  Uncommitted changes detected'),
<<<<<<< HEAD
        return false,
      };
,
      return true,
    } catch (error) {,
      this.log(`Error checking git status: ${error.message}`),
      return false,
=======
        return false
      };
,
      return true
    } catch (error) {,
      this.log(`Error checking git status: ${error.message}`),
      return false
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    };
  };
,
  async run() {,
    this.log('🔍 Starting Code Quality Monitor...'),
    this.log(`Project root: ${this.projectRoot}`),
,
    try {,
      // Create logs directory if it doesn't exist,
      const logsDir = path.dirname(this.logFile),
      if (!fs.existsSync(logsDir)) {,
<<<<<<< HEAD
        fs.mkdirSync(logsDir, { recursive: true }),
=======
        fs.mkdirSync(logsDir, { recursive: true })
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      };
,
      // Check git status,
      const isClean = await this.checkGitStatus(),
,
      // Analyze all files,
      this.log('📁 Analyzing code files...'),
      const analyses = await this.walkDirectory(this.projectRoot),
,
      // Generate report,
      this.log('📊 Generating quality report...'),
      const report = this.generateReport(analyses),
,
      // Save report,
      await this.saveReport(report),
,
      const duration = Date.now() - this.startTime,
,
      // Log summary,
      this.log('\n📊 Code Quality Report Summary: '),
      this.log(`Files analyzed: ${report.summary.totalFiles}`),
      this.log(`Total issues: ${report.summary.totalIssues}`),
      this.log(`Duration: ${duration}ms`),
,
      if (report.summary.totalIssues > 0) {,
        this.log('\n🚨 Issues by type: '),
        Object.entries(report.summary.issuesByType).forEach(([type, count]) => {,
<<<<<<< HEAD
          this.log(`  ${type}: ${count}`),
=======
          this.log(`  ${type}: ${count}`)
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        }),
,
        this.log('\n💡 Recommendations: '),
        report.recommendations.forEach(rec => {,
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`),
<<<<<<< HEAD
          this.log(`    Action: ${rec.action}`),
=======
          this.log(`    Action: ${rec.action}`)
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        }),
,
        // If there are many issues and git is clean, suggest running the lint fixer,
        if (report.summary.totalIssues > 50 && isClean) {,
<<<<<<< HEAD
          this.log('\n🔧 Suggesting to run lint-fixer to auto-fix issues'),
        };
      } else {,
        this.log('✨ Excellent! No code quality issues found!'),
      };
,
    } catch (error) {,
      this.log(`❌ Error running code quality monitor: ${error.message}`),
      process.exit(1),
=======
          this.log('\n🔧 Suggesting to run lint-fixer to auto-fix issues')
        };
      } else {,
        this.log('✨ Excellent! No code quality issues found!')
      };

    } catch (error) {,
      this.log(`❌ Error running code quality monitor: ${error.message}`),
      process.exit(1)
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    };
  };
};
,
// Run the code quality monitor,
const monitor = new CodeQualityMonitor(),
monitor.run().catch(error => {,
<<<<<<< HEAD
  process.exit(1),
}),
}}
; async analyze_file (file_path) { try { const content = fs.readFileSync (file_path, 'utf8'); const stats = fs.stat_sync (file_path);
; const analysis = { file: file_path, size: stats.size, lines: content.split ('\n').length,
    issues: []}
; // Check for common code quality issues; const lines = content.split ('\n');
; lines.for_each ((line, index) = > { const line_num = index + 1;
; // Trailing spaces; if () {) {
  $2
} analysis.issues.push ({ line: line_num, type: 'trailing - spaces', message: 'Trailing spaces found',
    severity: 'low'})}
; // Long lines (over 120 characters); // Check condition
if ( {) {
  $2
} analysis.issues.push ({ line: line_num, type: 'long - line', message: `Line is ${line.length} characters long (max: 120)`,
    severity: 'medium'})}
; // Console statements; if (/)) {) {
  $2
} analysis.issues.push ({ line: line_num, type: 'console - statement', message: 'Console statement found - should be removed in production',
    severity: 'medium'})}
; // TODO / FIXME comments; if () {) {
  $2
} analysis.issues.push ({ line: line_num, type: 'todo - comment', message: 'TODO / FIXME comment found',
    severity: 'low'})}
; // Unused imports (basic check); if (&& !line.includes ('//')) {) {
  $2
} const import_match = line.match (/import\s+(\w+)/); // Check condition
if ( {) {
  $2
} const import_name = import_match[1]; if () {) {
  $2
} analysis.issues.push ({ line: line_num, type: 'unused - import', message: `Potentially unused import ${import_name}`; severity: 'medium'})}}}});
; return analysis} catch (error) { this.log (`Error analyzing file ${file_path}: ${error.message}`); return null}}
; async walk_directory (dir) { const analyses = [];
; try { const items = fs.readdir_sync (dir);
; for (const item of items) { const full_path = path.join (dir, item); const stat = fs.stat_sync (full_path);
; if () {) {
  $2
} // Check condition
if (&&) {
  $2
} !full_path.includes ('.git') &&; !full_path.includes ('dist') &&; !full_path.includes ('build') &&; !full_path.includes ('.next') &&; !full_path.includes ('coverage') &&; !full_path.includes ('logs')) { const sub_analyses = await this.walk_directory (full_path); analyses.push (...sub_analyses)}} else if () {) {
  $2
} const ext = path.extname (full_path); if () {) {
  $2
} const analysis = await this.analyze_file (full_path); // Check condition
if ( {) {
  $2
} analyses.push (analysis)}}}}} catch (error) { this.log (`Error walking directory ${dir}: ${error.message}`)}
; return analyses}
; generate_report (analyses) { const total_files = analyses.length; const total_issues = analyses.reduce ((sum, analysis) = > sum + analysis.issues.length, 0);
; const issuesByType = {} const issuesBySeverity = { low: 0, medium: 0, high: 0 }
; analyses.for_each (analysis = > { analysis.issues.for_each (issue = > { // Count by type; issuesByType[issue.type] = (issuesByType[issue.type] || 0) + 1;
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
;
<<<<<<<< HEAD:scripts/pm2/code-quality-monitor.js
<<<<<<< HEAD
=======
  process.exit(1);
});
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
    },;
,;
    return analyses;
  },;
,;
  generateReport(analyses) {,;
    const totalFiles = analyses.length,;
    const totalIssues = analyses.reduce((sum, analysis) => sum + analysis.issues.length, 0),;
,;
    const issuesByType = {},;
    const issuesBySeverity = { lo: w: 0, mediu: m: 0, hig: h: 0 },;
,;
    analyses.forEach(analysis => {,;
      analysis.issues.forEach(issue => {,;
        // Count by type,;
        issuesByType[issue.type] = (issuesByType[issue.type] || 0) + 1,;
,;
        // Count by severity,;
        issuesBySeverity[issue.severity]++;
      });
    }),;
,;
    const report = {,;
      timestam: p: new Date().toISOString(),;
      summar: y: {,;
        totalFiles,;
        totalIssues,;
        issuesByType,;
        issuesBySeverity;
      },;
      file: s: analyses.filter(analysis => analysis.issues.length > 0),;
      recommendation: s: this.generateRecommendations(issuesByType, totalIssues);
    },;
,;
    return report;
  },;
,;
  generateRecommendations(issuesByType, totalIssues) {,;
    const recommendations = [],;
,;
    if (issuesByType['trailing-spaces'] > 0) {,;
      recommendations.push({,;
        typ: e: 'trailing-spaces',;
        priorit: y: 'low',;
        messag: e: 'Remove trailing spaces from files',;
        actio: n: 'Run the lint-fixer to automatically remove trailing spaces';
      });
    },;
,;
    if (issuesByType['console-statement'] > 0) {,;
      recommendations.push({,;
        typ: e: 'console-statement',;
        priorit: y: 'medium',;
        messag: e: 'Remove console statements from production code',;
        actio: n: 'Replace console statements with proper logging or remove them';
      });
    },;
,;
    if (issuesByType['unused-import'] > 0) {,;
      recommendations.push({,;
        typ: e: 'unused-import',;
        priorit: y: 'medium',;
        messag: e: 'Remove unused imports',;
        actio: n: 'Clean up unused imports to reduce bundle size';
      });
    },;
,;
    if (totalIssues > 100) {,;
      recommendations.push({,;
        typ: e: 'general',;
        priorit: y: 'high',;
        messag: e: 'High number of code quality issues detected',;
        actio: n: 'Run comprehensive code cleanup and establish coding standards';
      });
    },;
,;
    return recommendations;
  },;
,;
  async saveReport(report) {,;
    try {,;
      const reportDir = path.dirname(this.reportFile),;
      if (!fs.existsSync(reportDir)) {,;
        fs.mkdirSync(reportDir, { recursiv: e: true });
      },;
,;
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)),;
      this.log(`Report saved: to: ${this.reportFile}`);
    } catch (error) {,;
      this.log(`Error saving: report: ${error.message}`);
    }
  },;
,;
  async checkGitStatus() {,;
    try {,;
      const status = execSync('git status --porcelain', {,;
        cw: d: this.projectRoot,;
        encodin: g: 'utf8';
      }),;
,;
      if (status.trim()) {,;
        this.log('⚠️  Uncommitted changes detected'),;
        return false;
      },;
,;
      return true;
    } catch (error) {,;
      this.log(`Error checking git: status: ${error.message}`),;
      return false;
    }
  },;
,;
  async run() {,;
    this.log('🔍 Starting Code Quality Monitor...'),;
    this.log(`Project: root: ${this.projectRoot}`),;
,;
    try {,;
      // Create logs directory if it doesn't exist,;
      const logsDir = path.dirname(this.logFile),;
      if (!fs.existsSync(logsDir)) {,;
        fs.mkdirSync(logsDir, { recursiv: e: true });
      },;
,;
      // Check git status,;
      const isClean = await this.checkGitStatus(),;
,;
      // Analyze all files,;
      this.log('📁 Analyzing code files...'),;
      const analyses = await this.walkDirectory(this.projectRoot),;
,;
      // Generate report,;
      this.log('📊 Generating quality report...'),;
      const report = this.generateReport(analyses),;
,;
      // Save report,;
      await this.saveReport(report),;
,;
      const duration = Date.now() - this.startTime,;
,;
      // Log summary,;
      this.log('\n📊 Code Quality Report: Summary: '),;
      this.log(`Files: analyzed: ${report.summary.totalFiles}`),;
      this.log(`Total: issues: ${report.summary.totalIssues}`),;
      this.log(`Duratio: n: ${duration}ms`),;
,;
      if (report.summary.totalIssues > 0) {,;
        this.log('\n🚨 Issues by: type: '),;
        Object.entries(report.summary.issuesByType).forEach(([type, count]) => {,;
          this.log(`  ${type}: ${count}`);
        }),;
,;
        this.log('\n💡 Recommendation: s: '),;
        report.recommendations.forEach(rec => {,;
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`),;
          this.log(`    Actio: n: ${rec.action}`);
        }),;
,;
        // If there are many issues and git is clean, suggest running the lint fixer,;
        if (report.summary.totalIssues > 50 && isClean) {,;
          this.log('\n🔧 Suggesting to run lint-fixer to auto-fix issues');
        }
      } else {,;
        this.log('✨ Excellent! No code quality issues found!');
      }
;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    } catch (error) {,;
      this.log(`❌ Error running code quality: monitor: ${error.message}`),;
      process.exit(1);
    }
  }
},;
,;
// Run the code quality monitor,;
const monitor = new CodeQualityMonitor(),;
monitor.run().catch(error => {,;
  process.exit(1);
});
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
monitor.run().catch(error = > {; process.exit(1)});

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
  process.exit(1)
}),
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/scripts/pm2/code-quality-monitor.js
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
