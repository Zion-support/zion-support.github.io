}};
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
; async analyzeFile(filePath) {_; try {; const content = fs.readFileSync(filePath, _'utf8'); const stats = fs.statSync(filePath);
; const analysis = {; file: filePath;, size: stats.size; lines: content.split('\n').length; issues: [];};
; // Check for common code quality issues; const lines = content.split('\n');
; lines.forEach((line, index) = > {_; const lineNum = index + 1;
; // Trailing spaces; if (line.match(/[ \t]+$/)) {; analysis.issues.push({; line: lineNum;, type: 'trailing-spaces'; message: 'Trailing spaces found'; severity: 'low';})};
; // Long lines (over 120 characters); if (line.length > 120) {_; analysis.issues.push({; line: lineNum;, type: 'long-line'; message: `Line is ${line.length;} characters long (max: 120)`; severity: 'medium';})};
; // Console statements; if (line.match(/console\.(log|warn|error|info|debug)/)) {_; analysis.issues.push({; line: lineNum;, type: 'console-statement'; message: 'Console statement found - should be removed in production'; severity: 'medium';})};
; // TODO/FIXME comments; if (line.match(/TODO|FIXME|HACK|XXX/)) {_; analysis.issues.push({; line: lineNum;, type: 'todo-comment'; message: 'TODO/FIXME comment found'; severity: 'low';})};`;
; // Unused imports (basic check); if (line.match(/^import.*from/) && !line.includes('//')) {_; const importMatch = line.match(/import\s+(\w+)/); if (importMatch) {; const importName = importMatch[1]; if (importName ! = = 'React' && !content.includes(importName)) {; analysis.issues.push({; line: lineNum;, type: 'unused-import'; message: `Potentially unused import ${importName;}`; severity: 'medium';})}}}});`;
; return analysis} catch (error) {_; this.log(`Error analyzing file ${filePath}: ${error.message}`); return null}};
; async walkDirectory(dir) {_; const analyses = [];
; try {; const items = fs.readdirSync(dir);
; for (const item of items) {; const fullPath = path.join(dir, item); const stat = fs.statSync(fullPath);`;
; if (stat.isDirectory()) {; if (!fullPath.includes('nodemodules') &&; !fullPath.includes('.git') &&; !fullPath.includes('dist') &&; !fullPath.includes('build') &&; !fullPath.includes('.next') &&; !fullPath.includes('coverage') &&; !fullPath.includes('logs')) {; const subAnalyses = await this.walkDirectory(fullPath); analyses.push(...subAnalyses)}} else if (stat.isFile()) {_; const ext = path.extname(fullPath); if (['.js', _'.jsx', _'.ts', _'.tsx'].includes(ext)) {; const analysis = await this.analyzeFile(fullPath); if (analysis) {; analyses.push(analysis)}}}}} catch (error) {_; this.log(`Error walking directory ${dir}: ${error.message}`)};
; return analyses};
; generateReport(analyses) {_; const totalFiles = analyses.length; const totalIssues = analyses.reduce((sum, analysis) = > sum + analysis.issues.length, 0);
; const issuesByType = {}; const issuesBySeverity = {low: 0;, medium: 0;, high: 0;};
; analyses.forEach(analysis = > {_; analysis.issues.forEach(issue = > {; // Count by type; issuesByType[issue.type] = (issuesByType[issue.type] || 0) + 1;
; // Count by severity; issuesBySeverity[issue.severity]++})});
; const report = {_; timestamp: new Date().toISOString(); summary: {; totalFiles; totalIssues; issuesByType; issuesBySeverity}; files: analyses.filter(analysis = > analysis.issues.length > 0); recommendations: this.generateRecommendations(issuesByType;, totalIssues)};
; return report};
; generateRecommendations(issuesByType, totalIssues) {_; const recommendations = [];
; if (issuesByType['trailing-spaces'] > 0) {; recommendations.push({; type: 'trailing-spaces'; priority: 'low'; message: 'Remove trailing spaces from files'; action: 'Run the lint-fixer to automatically remove trailing spaces';})};
; if (issuesByType['console-statement'] > 0) {_; recommendations.push({; type: 'console-statement'; priority: 'medium'; message: 'Remove console statements from production code'; action: 'Replace console statements with proper logging or remove them';})};
; if (issuesByType['unused-import'] > 0) {_; recommendations.push({; type: 'unused-import'; priority: 'medium'; message: 'Remove unused imports'; action: 'Clean up unused imports to reduce bundle size';})};
; if (totalIssues > 100) {_; recommendations.push({; type: 'general'; priority: 'high'; message: 'High number of code quality issues detected'; action: 'Run comprehensive code cleanup and establish coding standards';})};
; return recommendations};
<<<<<<< HEAD
; async saveReport(report) {_; try {; const reportDir = path.dirname(this.reportFile); if (!fs.existsSync(reportDir)) {; fs.mkdirSync(reportDir, _{ recursive: true})};
; fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)); this.log(`Report saved to: ${this.reportFile}`)} catch (error) {_; this.log(`Error saving report: ${error.message}`)}};
; async checkGitStatus() {_; try {; const status = execSync('git status --porcelain', _{; cwd: this.projectRoot; encoding: 'utf8'});
<<<<<<< HEAD
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
=======
; if (status.trim()) {_; this.log(' Uncommitted changes detected'); return false};
; return true} catch (error) {_; this.log(`Error checking git status: ${error.message}`); return false}};
; async run() {_; this.log(' Starting Code Quality Monitor...'); this.log(`Project root: ${this.projectRoot}`);
; try {_; // Create logs directory if it doesn't exist; const logsDir = path.dirname(this.logFile); if (!fs.existsSync(logsDir)) {; fs.mkdirSync(logsDir, _{ recursive: true})};
=======
; async saveReport(report) {_; try {; const reportDir = path.dirname(this.reportFile); if (!fs.existsSync(reportDir)) {; fs.mkdirSync(reportDir, _{ recursive: true;})};`;
; fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)); this.log(`Report saved to: ${this.reportFile;}`)} catch (error) {_; this.log(`Error saving report: ${error.message;}`)}};
; async checkGitStatus() {_; try {; const status = execSync('git status --porcelain', _{; cwd: this.projectRoot; encoding: 'utf8';});
; if (status.trim()) {_; this.log(' Uncommitted changes detected'); return false};`;
; return true} catch (error) {_; this.log(`Error checking git status: ${error.message;}`); return false}};`;
; async run() {_; this.log(' Starting Code Quality Monitor...'); this.log(`Project root: ${this.projectRoot;}`);
; try {_; // Create logs directory if it doesn't exist; const logsDir = path.dirname(this.logFile); if (!fs.existsSync(logsDir)) {; fs.mkdirSync(logsDir, _{ recursive: true;})};
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
; // Check git status; const isClean = await this.checkGitStatus();
; // Analyze all files; this.log(' Analyzing code files...'); const analyses = await this.walkDirectory(this.projectRoot);
; // Generate report; this.log(' Generating quality report...'); const report = this.generateReport(analyses);
; // Save report; await this.saveReport(report);
<<<<<<< HEAD
; const duration = Date.now() - this.startTime;
; // Log summary; this.log('\n Code Quality Report Summary: '); this.log(`Files analyzed: ${report.summary.totalFiles}`); this.log(`Total issues: ${report.summary.totalIssues}`); this.log(`Duration: ${duration}ms`);
; if (report.summary.totalIssues > 0) {_; this.log('\n Issues by type: '); Object.entries(report.summary.issuesByType).forEach(([type, count]) = > {; this.log(` ${type}: ${count}`)});
; this.log('\n Recommendations: '); report.recommendations.forEach(rec = > {_; this.log(` [${rec.priority.toUpperCase()}] ${rec.message}`); this.log(` Action: ${rec.action}`)});
; // If there are many issues and git is clean, suggest running the lint fixer; if (report.summary.totalIssues > 50 && isClean) {_; this.log('\n Suggesting to run lint-fixer to auto-fix issues')}} else {_; this.log(' Excellent! No code quality issues found!')}
} catch (error) {_; this.log(` Error running code quality monitor: ${error.message}`); process.exit(1)}}};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
; const duration = Date.now() - this.startTime;`;
; // Log summary; this.log('\n Code Quality Report Summary: '); this.log(`Files analyzed: ${report.summary.totalFiles;}`); this.log(`Total issues: ${report.summary.totalIssues;}`); this.log(`Duration: ${duration;}ms`);`;
; if (report.summary.totalIssues > 0) {_; this.log('\n Issues by type: '); Object.entries(report.summary.issuesByType).forEach(([type, count]) = > {; this.log(` ${type}: ${count}`)});`;
; this.log('\n Recommendations: '); report.recommendations.forEach(rec = > {_; this.log(` [${rec.priority.toUpperCase()}] ${rec.message}`); this.log(` Action: ${rec.action;}`)});
; // If there are many issues and git is clean, suggest running the lint fixer; if (report.summary.totalIssues > 50 && isClean) {_; this.log('\n Suggesting to run lint-fixer to auto-fix issues')}} else {_; this.log(' Excellent! No code quality issues found!')}`;
} catch (error) {_; this.log(` Error running code quality monitor: ${error.message;}`); process.exit(1)}}};
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
;
// Run the code quality monitor;
const monitor = new CodeQualityMonitor();
monitor.run().catch(error = > {_; process.exit(1)})
}
};
  async analyzeFile(filePath) {_;
    try {;
      const content = fs.readFileSync(filePath, _'utf8');
      const stats = fs.statSync(filePath);
      const analysis = {;
        fil: e:filePath;,
  siz:e: stats.size;,
  line:s: content.split('\n').length;',
  issue:s: [];,
  file: filePath;,
        size: stats.size;,
  lines: content.split('\n').length;
        issues: [];
      // Check for common code quality issues;
      const lines = content.split('\n');
      lines.forEach(_(line, index) => {;
        const lineNum = index + 1;
        // Trailing spaces;
        if (line.match(/[ \t]+$/)) {;
          analysis.issues.push({;
            lin: e:lineNum;,
  typ:e: 'trailing-spaces';',
  messag:e: 'Trailing spaces found';',)
  severit:y:'low';          });
            line: lineNum;,
            type: 'trailing-spaces';',
  message: 'Trailing spaces found';
            severity: 'low';})
        // Long lines (over 120 characters);
        if (line.length > 120) {_;
  typ:e: 'long-line';',)`;
  messag: e:`Line is ${line.length;} characters long (ma: x:120)`;,
  severit:y:'medium';          });
            type: 'long-line';',`;
  message: `Line is ${line.length;} characters long (max: 120)`;,
  severity: 'medium;
          })
        // Console statements;
        if (line.match(/console\.(log|warn|error|info|debug)/)) {_;
  typ:e: 'console-statement';',
  messag:e: 'Console statement found - should be removed in production';',)
            type: 'console-statement';',
  message: 'Console statement found - should be removed in production';
            severity: 'medium';})
        // TODO/FIXME comments;
        if (line.match(/TODO|FIXME|HACK|XXX/)) {_;
  typ:e: 'todo-comment';',
  messag:e: 'TODO/FIXME comment found';',)
            type: 'todo-comment';',
  message: 'TODO/FIXME comment found';
        // Unused imports (basic check);
        if (line.match(/^import.*from/) && !line.includes('//')) {_;
          const importMatch = line.match(/import\s+(\w+)/);
          if (importMatch) {;
            const importName = importMatch[1];
            if (importName !== 'React' && !content.includes(importName)) {;
              analysis.issues.push({;
                lin:e:lineNum;
                typ:e:'unused-import';
<<<<<<< HEAD
                messag:e:`Potentially unused import ${importName}`;
<<<<<<< HEAD
                severit:y:'medium';              });
            };
          };
        };
=======
=======
                messag: e:`Potentially unused import ${importName;}`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                severit:y:'medium';              })
};
          }
};
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  typ:e: 'unused-import';',`;
  messag: e:`Potentially unused import ${importName;}`;)
                severit:y:'medium';              });
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      });
      return analysis;
    } catch (error) {;`;
      this.log(`Error analyzing file ${filePath} ${error.message}`);
<<<<<<< HEAD
      return null;
=======
      return null
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
                line: lineNum;,
                type: 'unused-import';
                message: `Potentially unused import ${importName;}`;
                severity: 'medium';
              })
            }
          }
        }
      });
;
      return analysis
    } catch (error) {_;
      return null;
                type: 'unused-import';',`;
  message: `Potentially unused import ${importName;}`;
    } catch (error) {_;`;
pr-12325
      this.log(`Error analyzing file ${filePath}: ${error.message}`);
  async walkDirectory(dir) {_;
    const analyses = [];
      const items = fs.readdirSync(dir);
      for (const item of items) {;
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
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
<<<<<<< HEAD
              analyses.push(analysis);
            };
          };
        };
      };
    } catch (error) {;
      this.log(`Error walking directory ${dir} ${error.message}`);};
=======
              analyses.push(analysis)
};
          }
}
};
    } catch (error) {;
      this.log(`Error walking directory ${dir} ${error.message}`)
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
;
    return analyses
};
;
              analyses.push(analysis);
      this.log(`Error walking directory ${dir} ${error.message}`);};
    return analyses;
pr-12325
  generateReport(analyses) {_;
    const totalFiles = analyses.length;
    const totalIssues = analyses.reduce(_(sum, analysis) => sum + analysis.issues.length, 0);
    const issuesByType = {};
    const issuesBySeverity = { lo: w:0;, mediu: m:0;, hig:h:0 ;    const issuesBySeverity = { low: 0;, medium: 0;, high: 0 ;
    analyses.forEach(analysis => {;
      analysis.issues.forEach(issue => {;
        // Count by type;)
        issuesByType[issue.type] = (issuesByType[issue.type] || 0) + 1;
        // Count by severity;
        issuesBySeverity[issue.severity]++})
    const report = {;
      timestam: p:new Date().toISOString();,
  summar:y:{;        totalFiles;
        totalIssues;
        issuesByType;
<<<<<<< HEAD
        issuesBySeverity;
      };
      file:s:analyses.filter(analysis => analysis.issues.length > 0);
      recommendation:s:this.generateRecommendations(issuesByType, totalIssues);      files: analyses.filter(analysis => analysis.issues.length > 0);
      recommendations: this.generateRecommendations(issuesByType, totalIssues);
=======
        issuesBySeverity
};
      file:s:analyses.filter(analysis => analysis.issues.length > 0);
<<<<<<< HEAD
      recommendation:s:this.generateRecommendations(issuesByType, totalIssues);      files: analyses.filter(analysis => analysis.issues.length > 0);
      recommendations: this.generateRecommendations(issuesByType, totalIssues)
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      recommendation: s:this.generateRecommendations(issuesByType;, totalIssues);      files: analyses.filter(analysis => analysis.issues.length > 0);
      recommendations: this.generateRecommendations(issuesByType;, totalIssues)
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
};
;
    return report
};
;
        issuesBySeverity;
      file: s:analyses.filter(analysis => analysis.issues.length > 0);,
  recommendation: s:this.generateRecommendations(issuesByType;, totalIssues);      files: analyses.filter(analysis => analysis.issues.length > 0);,
  recommendations: this.generateRecommendations(issuesByType;, totalIssues);
    return report;
pr-12325
  generateRecommendations(issuesByType, totalIssues) {_;
    const recommendations = [];
    if (issuesByType['trailing-spaces'] > 0) {;
      recommendations.push({;
        typ: e:'trailing-spaces';',
  priorit:y: 'low';',
  messag:e: 'Remove trailing spaces from files';',)
  actio:n:'Run the lint-fixer to automatically remove trailing spaces';      });
  priority: 'low';
        message: 'Remove trailing spaces from files';',
  action: 'Run the lint-fixer to automatically remove trailing spaces';})
    if (issuesByType['console-statement'] > 0) {_;
        typ: e:'console-statement';',
  priorit:y: 'medium';',
  messag:e: 'Remove console statements from production code';',)
  actio:n:'Replace console statements with proper logging or remove them';      });
  priority: 'medium';
        message: 'Remove console statements from production code';',
  action: 'Replace console statements with proper logging or remove them';})
    if (issuesByType['unused-import'] > 0) {_;
        typ: e:'unused-import';',
  messag:e: 'Remove unused imports';',)
  actio:n:'Clean up unused imports to reduce bundle size';      });
        type: 'unused-import';',
        message: 'Remove unused imports';',
  action: 'Clean up unused imports to reduce bundle size';})
    if (totalIssues > 100) {_;
        typ: e:'general';',
  priorit:y: 'high';',
  messag:e: 'High number of code quality issues detected';',)
  actio:n:'Run comprehensive code cleanup and establish coding standards';      });
        type: 'general';',
  priority: 'high';
        message: 'High number of code quality issues detected';',
  action: 'Run comprehensive code cleanup and establish coding standards';})
    return recommendations;
  async saveReport(report) {_;
      const reportDir = path.dirname(this.reportFile);
      if (!fs.existsSync(reportDir)) {;
<<<<<<< HEAD
<<<<<<< HEAD
        fs.mkdirSync(reportDir, { recursiv:e:true });
      };
=======
        fs.mkdirSync(reportDir, { recursiv:e:true })
=======
        fs.mkdirSync(reportDir, { recursiv: e:true ;})
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
;
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      this.log(`Report saved: to:${this.reportFile;}`);
    } catch (error) {;
<<<<<<< HEAD
<<<<<<< HEAD
      this.log(`Error saving:report:${error.message}`);
};      };
=======
      this.log(`Error saving:report:${error.message}`)
=======
      this.log(`Error saving: report:${error.message;}`)
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
;
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
        fs.mkdirSync(reportDir, { recursiv: e:true ;});
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));`;
      this.log(`Report saved: to:${this.reportFile;}`);
      this.log(`Error saving: report:${error.message;}`);
};      };
pr-12325
      this.log(`Report saved to: ${this.reportFile;}`)
      this.log(`Error saving report: ${error.message;}`)
  async checkGitStatus() {_;
      const status = execSync('git status --porcelain', {;
        cw: d:this.projectRoot;,
  encodin:g:'utf8';')
      });;
      if (status.trim()) {_;
<<<<<<< HEAD
        this.log('⚠️  Uncommitted changes detected');
=======
        this.log('  Uncommitted changes detected');
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        return false};
      return true;
    } catch (error) {;
<<<<<<< HEAD
<<<<<<< HEAD
      this.log(`Error checking git:status:${error.message}`);      return false;
=======
      this.log(`Error checking git:status:${error.message}`);      return false
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      this.log(`Error checking git: status:${error.message;}`);      return false
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
};
      return true
    } catch (error) {_;
      this.log(`Error checking git: status:${error.message;}`);      return false;
pr-12325
      this.log(`Error checking git status: ${error.message;}`);
      return false;
  async run() {_;
<<<<<<< HEAD
<<<<<<< HEAD
    this.log('🔍 Starting Code Quality Monitor...');
=======
    this.log(' Starting Code Quality Monitor...');
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    this.log(`Project:root:${this.projectRoot}`);    this.log(`Project root: ${this.projectRoot}`);
;
=======
    this.log(' Starting Code Quality Monitor...');`;
    this.log(`Project: root:${this.projectRoot;}`);    this.log(`Project root: ${this.projectRoot;}`);
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    try {_;
      // Create logs directory if it doesn't exist;
      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {;
<<<<<<< HEAD
<<<<<<< HEAD
        fs.mkdirSync(logsDir, { recursiv:e:true });        fs.mkdirSync(logsDir, { recursive: true });
      };
=======
        fs.mkdirSync(logsDir, { recursiv:e:true });        fs.mkdirSync(logsDir, { recursive: true })
=======
        fs.mkdirSync(logsDir, { recursiv: e:true ;});        fs.mkdirSync(logsDir, { recursive: true ;})
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
;
        fs.mkdirSync(logsDir, { recursiv: e:true ;});        fs.mkdirSync(logsDir, { recursive: true ;});
pr-12325
      // Check git status;
      const isClean = await this.checkGitStatus();
      // Analyze all files;
<<<<<<< HEAD
      this.log('📁 Analyzing code files...');
      const analyses = await this.walkDirectory(this.projectRoot);
;
      // Generate report;
      this.log('📊 Generating quality report...');
=======
      this.log(' Analyzing code files...');
      const analyses = await this.walkDirectory(this.projectRoot);
      // Generate report;
      this.log(' Generating quality report...');
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      const report = this.generateReport(analyses);
      // Save report;
      await this.saveReport(report);
      const duration = Date.now() - this.startTime;
      // Log summary;
<<<<<<< HEAD
<<<<<<< HEAD
      this.log('\n📊 Code Quality Report:Summary:');
=======
      this.log('\n Code Quality Report:Summary:');
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      this.log(`Files:analyzed:${report.summary.totalFiles}`);
      this.log(`Total:issues:${report.summary.totalIssues}`);
      this.log(`Duratio:n:${duration}ms`);
;
      if (report.summary.totalIssues > 0) {;
<<<<<<< HEAD
        this.log('\n🚨 Issues by:type:');        Object.entries(report.summary.issuesByType).forEach(([type, count]) => {;
          this.log(`  ${type} ${count}`);
        });
;
        this.log('\n💡 Recommendation:s:');
=======
        this.log('\n Issues by:type:');        Object.entries(report.summary.issuesByType).forEach(([type, count]) => {;
=======
      this.log('\n Code Quality Report:Summary:');`;
      this.log(`Files: analyzed:${report.summary.totalFiles;}`);`;
      this.log(`Total: issues:${report.summary.totalIssues;}`);`;
      this.log(`Duratio: n:${duration;}ms`);
      if (report.summary.totalIssues > 0) {;
        this.log('\n Issues by:type:');        Object.entries(report.summary.issuesByType).forEach(([type, count]) => {;`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          this.log(`  ${type} ${count}`);
        this.log('\n Recommendation:s:');
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        report.recommendations.forEach(rec => {;
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`);
          this.log(`    Actio:n:${rec.action}`);        });
;
=======
        report.recommendations.forEach(rec => {;)`;
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`);`;
          this.log(`    Actio: n:${rec.action;}`);        });
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        // If there are many issues and git is clean, suggest running the lint fixer;
        if (report.summary.totalIssues > 50 && isClean) {;
<<<<<<< HEAD
          this.log('\n🔧 Suggesting to run lint-fixer to auto-fix issues');
        };
      } else {;
        this.log('✨ Excellent! No code quality issues found!');
      };
;
    } catch (error) {;
      this.log(`❌ Error running code quality:monitor:${error.message}`);      process.exit(1);
};
};
      this.log('\n📊 Code Quality Report Summary: ');
=======
          this.log('\n Suggesting to run lint-fixer to auto-fix issues')
};
      } else {;
        this.log(' Excellent! No code quality issues found!')
};
;
    } catch (error) {;
      this.log(` Error running code quality: monitor:${error.message;}`);      process.exit(1)
}
};
      this.log('\n Code Quality Report Summary: ');
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      this.log(`Files analyzed: ${report.summary.totalFiles}`);
      this.log(`Total issues: ${report.summary.totalIssues}`);
      this.log(`Duration: ${duration}ms`);
;
=======
      this.log(`Files analyzed: ${report.summary.totalFiles;}`);
      this.log(`Total issues: ${report.summary.totalIssues;}`);
          this.log('\n Suggesting to run lint-fixer to auto-fix issues');
      } else {;
        this.log(' Excellent! No code quality issues found!');
      this.log(` Error running code quality: monitor:${error.message;}`);      process.exit(1);
      this.log('\n Code Quality Report Summary: ');`;
      this.log(`Files analyzed: ${report.summary.totalFiles;}`);`;
      this.log(`Total issues: ${report.summary.totalIssues;}`);`;
pr-12325
      this.log(`Duration: ${duration;}ms`);
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      if (report.summary.totalIssues > 0) {_;
<<<<<<< HEAD
        this.log('\n🚨 Issues by type: ');
=======
        this.log('\n Issues by type: ');
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        Object.entries(report.summary.issuesByType).forEach(_([type, count]) => {;
          this.log(`  ${type}: ${count}`)
        });
;
<<<<<<< HEAD
        this.log('\n💡 Recommendations: ');
=======
        this.log('\n Recommendations: ');
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        report.recommendations.forEach(rec => {_;
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`);
          this.log(`    Action: ${rec.action}`)
        });
;
=======
        Object.entries(report.summary.issuesByType).forEach(_([type, count]) => {;`;
          this.log(`  ${type}: ${count}`)
        this.log('\n Recommendations: ');
        report.recommendations.forEach(rec => {_;)`;
          this.log(`    Action: ${rec.action;}`)
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        // If there are many issues and git is clean, suggest running the lint fixer;
        if (report.summary.totalIssues > 50 && isClean) {_;
<<<<<<< HEAD
          this.log('\n🔧 Suggesting to run lint-fixer to auto-fix issues')}
      } else {_;
        this.log('✨ Excellent! No code quality issues found!')}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

            };
          };
        };
      };
<<<<<<< HEAD

=======
          this.log('\n Suggesting to run lint-fixer to auto-fix issues')}
      } else {_;
        this.log(' Excellent! No code quality issues found!')}
      this.log(` Error running code quality monitor: ${error.message;}`);
      process.exit(1)
// Run the code quality monitor;
monitor.run().catch(error => {;)
  process.exit(1);
})
}
};
pr-12325
,;
  async analyzeFile(filePath) {,;
    try {,;
      const content = fs.readFileSync(filePath, 'utf8'),;
      const stats = fs.statSync(filePath),;
      const analysis = {,;
        fil: e:filePath;,;
        siz: e:stats.size;,;
        line: s:content.split('\n').length;,;
        issue: s:[];,
};
,;
        issue: s:[];,;
pr-12325
      // Check for common code quality issues,;
      const lines = content.split('\n'),;
      lines.forEach((line, index) => {,;
        const lineNum = index + 1,;
        // Trailing spaces,;
        if (line.match(/[ \t]+$/)) {,;
          analysis.issues.push({,;
            lin: e:lineNum;,;
            typ: e:'trailing-spaces';,;
            messag: e:'Trailing spaces found';,;
            severit: y:'low';,;
          }),
};
,;
            severit: y:'low';,;')
          }),;
pr-12325
        // Long lines (over 120 characters),;
        if (line.length > 120) {,;
            typ: e:'long-line';,;')`;
            messag: e:`Line is ${line.length;} characters long (ma: x:120)`;,;
            severit: y:'medium';,;
          }),
};
,;
pr-12325
        // Console statements,;
        if (line.match(/console\.(log|warn|error|info|debug)/)) {,;
            typ: e:'console-statement';,;
            messag: e:'Console statement found - should be removed in production';,;
            severit: y:'medium';,;
          }),
};
,;
            severit: y:'medium';,;')
pr-12325
        // TODO/FIXME comments,;
        if (line.match(/TODO|FIXME|HACK|XXX/)) {,;
            typ: e:'todo-comment';,;
            messag: e:'TODO/FIXME comment found';,;
            severit: y:'low';,;
          }),
};
,;
pr-12325
        // Unused imports (basic check),;
        if (line.match(/^import.*from/) && !line.includes('//')) {,;
          const importMatch = line.match(/import\s+(\w+)/),;
          if (importMatch) {,;
            const importName = importMatch[1],;
            if (importName !== 'React' && !content.includes(importName)) {,;
                typ: e:'unused-import';,;`;
                messag: e:`Potentially unused import ${importName;}`;
                severit: y:'medium';,;
              }),
};
          }
};
      }),;
,;
pr-12325
      return analysis,;
    } catch (error) {,;`;
      this.log(`Error analyzing file ${filePath} ${error.message}`),;
      return null,
}
};
,;
      return null,;
pr-12325
  async walkDirectory(dir) {,;
    const analyses = [],;
      const items = fs.readdirSync(dir),;
      for (const item of items) {,;
        const fullPath = path.join(dir, item),;
        const stat = fs.statSync(fullPath),;
        if (stat.isDirectory()) {,;
          if (!fullPath.includes('node_modules') &&,;
              !fullPath.includes('.git') &&,;
              !fullPath.includes('dist') &&,;
              !fullPath.includes('build') &&,;
              !fullPath.includes('.next') &&,;
              !fullPath.includes('coverage') &&,;
              !fullPath.includes('logs')) {,;
            const subAnalyses = await this.walkDirectory(fullPath),;
            analyses.push(...subAnalyses),
};
            analyses.push(...subAnalyses),;
pr-12325
        } else if (stat.isFile()) {,;
          const ext = path.extname(fullPath),;
          if (['.js.jsx', '.ts.tsx'].includes(ext)) {,;
            const analysis = await this.analyzeFile(fullPath),;
            if (analysis) {,;
              analyses.push(analysis),
};
          }
}
};
    } catch (error) {,;
      this.log(`Error walking directory ${dir} ${error.message}`),
};
,;
    return analyses,
};
,;
              analyses.push(analysis),;            };
      this.log(`Error walking directory ${dir} ${error.message}`),;
    return analyses,;  };
pr-12325
  generateReport(analyses) {,;
    const totalFiles = analyses.length,;
    const totalIssues = analyses.reduce((sum, analysis) => sum + analysis.issues.length, 0),;
    const issuesBySeverity = { lo: w:0;, mediu: m:0;, hig: h:0 ;};
    analyses.forEach(analysis => {,;
      analysis.issues.forEach(issue => {,;
        // Count by type,;)
        issuesByType[issue.type] = (issuesByType[issue.type] || 0) + 1,;
        // Count by severity,;
        issuesBySeverity[issue.severity]++,;
    const report = {,;
      timestam: p:new Date().toISOString();,;
      summar: y:{;,;
        totalFiles,;
        totalIssues,;
        issuesByType,;
        issuesBySeverity,;
      },;
      file: s:analyses.filter(analysis => analysis.issues.length > 0);,;
      recommendation: s:this.generateRecommendations(issuesByType;, totalIssues),
};
,;
    return report,
};
,;
      recommendation: s:this.generateRecommendations(issuesByType;, totalIssues),;
    return report,;
pr-12325
  generateRecommendations(issuesByType, totalIssues) {,;
    const recommendations = [],;
    if (issuesByType['trailing-spaces'] > 0) {,;
      recommendations.push({,;
        priorit: y:'low';,;
        messag: e:'Remove trailing spaces from files';,;
        actio: n:'Run the lint-fixer to automatically remove trailing spaces';,;
      }),
};
,;
        actio: n:'Run the lint-fixer to automatically remove trailing spaces';,;')
pr-12325
    if (issuesByType['console-statement'] > 0) {,;
        priorit: y:'medium';,;
        messag: e:'Remove console statements from production code';,;
        actio: n:'Replace console statements with proper logging or remove them';,;
      }),
};
,;
        actio: n:'Replace console statements with proper logging or remove them';,;')
pr-12325
    if (issuesByType['unused-import'] > 0) {,;
        typ: e:'unused-import';,;
        messag: e:'Remove unused imports';,;
        actio: n:'Clean up unused imports to reduce bundle size';,;
      }),
};
,;
        actio: n:'Clean up unused imports to reduce bundle size';,;')
pr-12325
    if (totalIssues > 100) {,;
        typ: e:'general';,;
        priorit: y:'high';,;
        messag: e:'High number of code quality issues detected';,;
        actio: n:'Run comprehensive code cleanup and establish coding standards';,;
      }),
};
,;
    return recommendations,
};
,;
        actio: n:'Run comprehensive code cleanup and establish coding standards';,;')
    return recommendations,;
pr-12325
  async saveReport(report) {,;
      const reportDir = path.dirname(this.reportFile),;
      if (!fs.existsSync(reportDir)) {,;
        fs.mkdirSync(reportDir, { recursiv: e:true ;}),
};
,;
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)),;
      this.log(`Report saved: to:${this.reportFile;}`),;
    } catch (error) {,;
      this.log(`Error saving: report:${error.message;}`),
}
};
,;
        fs.mkdirSync(reportDir, { recursiv: e:true ;}),;
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)),;`;
      this.log(`Report saved: to:${this.reportFile;}`),;
      this.log(`Error saving: report:${error.message;}`),;
pr-12325
  async checkGitStatus() {,;
      const status = execSync('git status --porcelain', {,;
        cw: d:this.projectRoot;,;
        encodin: g:'utf8';,;')
      if (status.trim()) {,;
        this.log('  Uncommitted changes detected'),;
        return false,
};
,;
        return false,;
pr-12325
      return true,;
      this.log(`Error checking git: status:${error.message;}`),;
      return false,
}
};
,;
pr-12325
  async run() {,;
    this.log(' Starting Code Quality Monitor...'),;`;
    this.log(`Project: root:${this.projectRoot;}`),;
      // Create logs directory if it doesn't exist,;
      const logsDir = path.dirname(this.logFile),;
      if (!fs.existsSync(logsDir)) {,;
        fs.mkdirSync(logsDir, { recursiv: e:true ;}),
};
,;
        fs.mkdirSync(logsDir, { recursiv: e:true ;}),;
pr-12325
      // Check git status,;
      const isClean = await this.checkGitStatus(),;
      // Analyze all files,;
      this.log(' Analyzing code files...'),;
      const analyses = await this.walkDirectory(this.projectRoot),;
      // Generate report,;
      this.log(' Generating quality report...'),;
      const report = this.generateReport(analyses),;
      // Save report,;
      await this.saveReport(report),;
      const duration = Date.now() - this.startTime,;
      // Log summary,;
      this.log('\n Code Quality Report: Summary:');,;`;
      this.log(`Files: analyzed:${report.summary.totalFiles;}`),;`;
      this.log(`Total: issues:${report.summary.totalIssues;}`),;`;
      this.log(`Duratio: n:${duration;}ms`),;
      if (report.summary.totalIssues > 0) {,;
        this.log('\n Issues by: type:');,;
        Object.entries(report.summary.issuesByType).forEach(([type, count]) => {,;`;
          this.log(`  ${type} ${count}`),;
        this.log('\n Recommendation: s:');,;
        report.recommendations.forEach(rec => {,;)`;
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`),;`;
          this.log(`    Actio: n:${rec.action;}`),;
        // If there are many issues and git is clean, suggest running the lint fixer,;
        if (report.summary.totalIssues > 50 && isClean) {,;
          this.log('\n Suggesting to run lint-fixer to auto-fix issues'),
};
      } else {,;
        this.log(' Excellent! No code quality issues found!'),
};
,;
    } catch (error) {,;
      this.log(` Error running code quality: monitor:${error.message;}`),;
      process.exit(1),
};
  }
};
,;
          this.log('\n Suggesting to run lint-fixer to auto-fix issues'),;
      } else {,;
        this.log(' Excellent! No code quality issues found!'),;
      this.log(` Error running code quality: monitor:${error.message;}`),;
      process.exit(1),;
pr-12325
// Run the code quality monitor,;
const monitor = new CodeQualityMonitor(),;
monitor.run().catch(error => {,;)
}),;});
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    const issuesBySeverity = { low: 0, medium: 0, high: 0 };
=======
    const issuesBySeverity = { low: 0;, medium: 0;, high: 0 ;};
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
,
    analyses.forEach(analysis => {,
      analysis.issues.forEach(issue => {,
        // Count by type,)
        issuesByType[issue.type] = (issuesByType[issue.type] || 0) + 1,
        // Count by severity,
<<<<<<< HEAD

=======
        issuesBySeverity[issue.severity]++
<<<<<<< HEAD
      })
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    }),
    const report = {,
      timestamp: new Date().toISOString();,
      summary: {;,
        totalFiles,
        totalIssues,
        issuesByType,
<<<<<<< HEAD
<<<<<<< HEAD

=======
        issuesBySeverity
      },
      files: analyses.filter(analysis => analysis.issues.length > 0),
      recommendations: this.generateRecommendations(issuesByType, totalIssues)
    };
,
    return report
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  };
,
=======
      },
      files: analyses.filter(analysis => analysis.issues.length > 0);,
      recommendations: this.generateRecommendations(issuesByType;, totalIssues)
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  generateRecommendations(issuesByType, totalIssues) {,
    const recommendations = [],
    if (issuesByType['trailing-spaces'] > 0) {,
      recommendations.push({,
<<<<<<< HEAD
        type: 'trailing-spaces',
        priority: 'low',
        message: 'Remove trailing spaces from files',
<<<<<<< HEAD

=======
        action: 'Run the lint-fixer to automatically remove trailing spaces'
      })
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    };
,
    if (issuesByType['console-statement'] > 0) {,
      recommendations.push({,
        type: 'console-statement',
        priority: 'medium',
        message: 'Remove console statements from production code',
<<<<<<< HEAD

=======
        action: 'Replace console statements with proper logging or remove them'
      })
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    };
,
    if (issuesByType['unused-import'] > 0) {,
      recommendations.push({,
        type: 'unused-import',
        priority: 'medium',
        message: 'Remove unused imports',
<<<<<<< HEAD

=======
        action: 'Clean up unused imports to reduce bundle size'
      })
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    };
,
    if (totalIssues > 100) {,
      recommendations.push({,
        type: 'general',
        priority: 'high',
        message: 'High number of code quality issues detected',
<<<<<<< HEAD

=======
        action: 'Run comprehensive code cleanup and establish coding standards'
      })
    };
,
    return recommendations
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  };
,
=======
        type: 'trailing-spaces';,
        priority: 'low';,
        message: 'Remove trailing spaces from files';,
        action: 'Run the lint-fixer to automatically remove trailing spaces)
    if (issuesByType['console-statement'] > 0) {,
        type: 'console-statement';,
        priority: 'medium';,
        message: 'Remove console statements from production code';,
        action: 'Replace console statements with proper logging or remove them)
    if (issuesByType['unused-import'] > 0) {,
        type: 'unused-import';,
        message: 'Remove unused imports';,
        action: 'Clean up unused imports to reduce bundle size)
    if (totalIssues > 100) {,
        type: 'general';,
        priority: 'high';,
        message: 'High number of code quality issues detected';,
        action: 'Run comprehensive code cleanup and establish coding standards)
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  async saveReport(report) {,
    try {,
      const reportDir = path.dirname(this.reportFile),
      if (!fs.existsSync(reportDir)) {,
<<<<<<< HEAD
<<<<<<< HEAD

    };
  };
=======
        fs.mkdirSync(reportDir, { recursive: true })
=======
        fs.mkdirSync(reportDir, { recursive: true ;})
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      };
,
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)),
      this.log(`Report saved to: ${this.reportFile;}`)
    } catch (error) {,
      this.log(`Error saving report: ${error.message;}`)
    }
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
,
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)),`;
    } catch (error) {,`;
pr-12325
  async checkGitStatus() {,
      const status = execSync('git status --porcelain', {,
<<<<<<< HEAD
        cwd: this.projectRoot,
<<<<<<< HEAD

      }),
,
      if (status.trim()) {,
        this.log('⚠️  Uncommitted changes detected'),

    };
  };
,
  async run() {,
    this.log('🔍 Starting Code Quality Monitor...'),
=======
        encoding: 'utf8'
      }),
,
=======
        cwd: this.projectRoot;,
        encoding: 'utf8)
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      if (status.trim()) {,
      this.log(`Error checking git status: ${error.message;}`),
      return false
    }
};
,
pr-12325
  async run() {,
<<<<<<< HEAD
    this.log(' Starting Code Quality Monitor...'),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    this.log(`Project root: ${this.projectRoot}`),
,
    try {,
      // Create logs directory if it doesn't exist,
      const logsDir = path.dirname(this.logFile),
      if (!fs.existsSync(logsDir)) {,
<<<<<<< HEAD

=======
        fs.mkdirSync(logsDir, { recursive: true })
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      };
,
=======
    this.log(' Starting Code Quality Monitor...'),`;
    this.log(`Project root: ${this.projectRoot;}`),
      // Create logs directory if it doesn't exist,
      const logsDir = path.dirname(this.logFile),
      if (!fs.existsSync(logsDir)) {,
        fs.mkdirSync(logsDir, { recursive: true ;})
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      // Check git status,
      const isClean = await this.checkGitStatus(),
      // Analyze all files,
<<<<<<< HEAD
      this.log('📁 Analyzing code files...'),
      const analyses = await this.walkDirectory(this.projectRoot),
,
      // Generate report,
      this.log('📊 Generating quality report...'),
=======
      this.log(' Analyzing code files...'),
      const analyses = await this.walkDirectory(this.projectRoot),
      // Generate report,
      this.log(' Generating quality report...'),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      const report = this.generateReport(analyses),
      // Save report,
      await this.saveReport(report),
      const duration = Date.now() - this.startTime,
      // Log summary,
<<<<<<< HEAD
<<<<<<< HEAD
      this.log('\n📊 Code Quality Report Summary: '),
=======
      this.log('\n Code Quality Report Summary: '),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      this.log(`Files analyzed: ${report.summary.totalFiles}`),
      this.log(`Total issues: ${report.summary.totalIssues}`),
      this.log(`Duration: ${duration}ms`),
,
      if (report.summary.totalIssues > 0) {,
<<<<<<< HEAD
        this.log('\n🚨 Issues by type: '),
        Object.entries(report.summary.issuesByType).forEach(([type, count]) => {,

        }),
,
        this.log('\n💡 Recommendations: '),
        report.recommendations.forEach(rec => {,
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`),

=======
        this.log('\n Issues by type: '),
        Object.entries(report.summary.issuesByType).forEach(([type, count]) => {,
          this.log(`  ${type}: ${count}`)
        }),
,
        this.log('\n Recommendations: '),
        report.recommendations.forEach(rec => {,
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`),
          this.log(`    Action: ${rec.action}`)
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        }),
,
        // If there are many issues and git is clean, suggest running the lint fixer,
        if (report.summary.totalIssues > 50 && isClean) {,
<<<<<<< HEAD

    };
  };
=======
      };
=======
      this.log('\n Code Quality Report Summary: ');,`;
      this.log(`Files analyzed: ${report.summary.totalFiles;}`),`;
      this.log(`Total issues: ${report.summary.totalIssues;}`),`;
      this.log(`Duration: ${duration;}ms`),
      if (report.summary.totalIssues > 0) {,
        this.log('\n Issues by type: ');,
        Object.entries(report.summary.issuesByType).forEach(([type, count]) => {,`;
        this.log('\n Recommendations: ');,
        report.recommendations.forEach(rec => {,)`;
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`),`;
        // If there are many issues and git is clean, suggest running the lint fixer,
        if (report.summary.totalIssues > 50 && isClean) {,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

      this.log(` Error running code quality monitor: ${error.message;}`),
      process.exit(1)
    }
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
,
pr-12325
// Run the code quality monitor,
const monitor = new CodeQualityMonitor(),
<<<<<<< HEAD
monitor.run().catch(error => {,
<<<<<<< HEAD

=======
  process.exit(1)
}),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
monitor.run().catch(error => {,)
`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
