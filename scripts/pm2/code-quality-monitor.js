; async walkDirectory(dir) {; const analyses = [];
; try {; const items = fs && fs.readdirSync(dir);
; for (const item of items) {; const fullPath = path && path.join(dir, item); const stat = fs && fs.statSync(fullPath);
; if (stat && stat.isDirectory()) {; if (!fullPath && fullPath.includes('node_modules') &&; !fullPath && fullPath.includes('.git') &&; !fullPath && fullPath.includes('dist') &&; !fullPath && fullPath.includes('build') &&; !fullPath && fullPath.includes('.next') &&; !fullPath && fullPath.includes('coverage') &&; !fullPath && fullPath.includes('logs')) {; const subAnalyses = await this && this.walkDirectory(fullPath); analyses && analyses.push(...subAnalyses)}} else if (stat && stat.isFile()) {; const ext = path && path.extname(fullPath); if (['.js', '.jsx', '.ts', '.tsx'].includes(ext)) {; const analysis = await this && this.analyzeFile(fullPath); if (analysis) {; analyses && analyses.push(analysis)}}}}} catch (error) {; this && this.log(`Error walking directory ${dir}: ${error && error.message}`)};
; return analyses};
; generateReport(analyses) {; const totalFiles = analyses && analyses.length; const totalIssues = analyses && analyses.reduce((sum, analysis) = > sum + analysis && analysis.issues.length, 0);
; const issuesByType = {}; const issuesBySeverity = { low: 0, medium: 0, high: 0 };
monitor.run().catch(error = > {; process.exit(1)});
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
            };
          };
        };
      };
    }),
,
    const report = {,
      timestamp: new Date().toISOString(),
      summary: {,
        totalFiles,
        totalIssues,
        issuesByType,
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
    };
,
    if (issuesByType['console-statement'] > 0) {,
      recommendations.push({,
        type: 'console-statement',
        priority: 'medium',
        message: 'Remove console statements from production code',
    };
,
    if (issuesByType['unused-import'] > 0) {,
      recommendations.push({,
        type: 'unused-import',
        priority: 'medium',
        message: 'Remove unused imports',
    };
,
    if (totalIssues > 100) {,
      recommendations.push({,
        type: 'general',
        priority: 'high',
        message: 'High number of code quality issues detected',
  };
,
  async saveReport(report) {,
    try {,
      const reportDir = path.dirname(this.reportFile),
      if (!fs.existsSync(reportDir)) {,
    };
  };
,
  async checkGitStatus() {,
    try {,
      const status = execSync('git status --porcelain', {,
        cwd: this.projectRoot,
    };
  };
,
  async run() {,
    this.log(`Project root: ${this.projectRoot}`),
,
    try {,
      // Create logs directory if it doesn't exist,
      const logsDir = path.dirname(this.logFile),
      if (!fs.existsSync(logsDir)) {,
      };
,
      // Check git status,
      const isClean = await this.checkGitStatus(),
,
      // Analyze all files,
      const report = this.generateReport(analyses),
,
      // Save report,
      await this.saveReport(report),
,
      const duration = Date.now() - this.startTime,
,
      // Log summary,
      this.log(`Files analyzed: ${report.summary.totalFiles}`),
      this.log(`Total issues: ${report.summary.totalIssues}`),
      this.log(`Duration: ${duration}ms`),
,
      if (report.summary.totalIssues > 0) {,
        }),
,
        // If there are many issues and git is clean, suggest running the lint fixer,
        if (report.summary.totalIssues > 50 && isClean) {,
    };
  };
};
,
// Run the code quality monitor,
const monitor = new CodeQualityMonitor(),
monitor.run().catch(error => {,
