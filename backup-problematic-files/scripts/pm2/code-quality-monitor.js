}};

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
; // Check git status; const isClean = await this.checkGitStatus();
; // Analyze all files; this.log(' Analyzing code files...'); const analyses = await this.walkDirectory(this.projectRoot);
; // Generate report; this.log(' Generating quality report...'); const report = this.generateReport(analyses);
; // Save report; await this.saveReport(report);
; const duration = Date.now() - this.startTime;
; // Log summary; this.log('\n Code Quality Report Summary: '); this.log(`Files analyzed: ${report.summary.totalFiles}`); this.log(`Total issues: ${report.summary.totalIssues}`); this.log(`Duration: ${duration}ms`);
; if (report.summary.totalIssues > 0) {_; this.log('\n Issues by type: '); Object.entries(report.summary.issuesByType).forEach(([type, count]) = > {; this.log(` ${type}: ${count}`)});
; this.log('\n Recommendations: '); report.recommendations.forEach(rec = > {_; this.log(` [${rec.priority.toUpperCase()}] ${rec.message}`); this.log(` Action: ${rec.action}`)});
; // If there are many issues and git is clean, suggest running the lint fixer; if (report.summary.totalIssues > 50 && isClean) {_; this.log('\n Suggesting to run lint-fixer to auto-fix issues')}} else {_; this.log(' Excellent! No code quality issues found!')}
} catch (error) {_; this.log(` Error running code quality monitor: ${error.message}`); process.exit(1)}}};
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
messag:e:`Potentially unused import ${importName}`;
                severit:y:'medium';              });
            };
          };
        };
                severit:y:'medium';              })
};
          }
};
      });
      return analysis;
    } catch (error) {;`;
      this.log(`Error analyzing file ${filePath} ${error.message}`);
return null;
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
analyses.push(analysis);
            };
          };
        };
      };
    } catch (error) {;
      this.log(`Error walking directory ${dir} ${error.message}`);};
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
issuesBySeverity;
      };
      file:s:analyses.filter(analysis => analysis.issues.length > 0);
      recommendation:s:this.generateRecommendations(issuesByType, totalIssues);      files: analyses.filter(analysis => analysis.issues.length > 0);
      recommendations: this.generateRecommendations(issuesByType, totalIssues);
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
fs.mkdirSync(reportDir, { recursiv:e:true });
      };
};
;
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      this.log(`Report saved: to:${this.reportFile;}`);
    } catch (error) {;
      this.log(`Error saving:report:${error.message}`);
};      };
}
};
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
this.log('⚠️  Uncommitted changes detected');
        return false};
      return true;
    } catch (error) {;
      this.log(`Error checking git:status:${error.message}`);      return false;
};
      return true
    } catch (error) {_;
      this.log(`Error checking git: status:${error.message;}`);      return false;
pr-12325
      this.log(`Error checking git status: ${error.message;}`);
      return false;
  async run() {_;
this.log('🔍 Starting Code Quality Monitor...');
    this.log(`Project:root:${this.projectRoot}`);    this.log(`Project root: ${this.projectRoot}`);
;
    try {_;
      // Create logs directory if it doesn't exist;
      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {;
fs.mkdirSync(logsDir, { recursiv:e:true });        fs.mkdirSync(logsDir, { recursive: true });
      };
};
;
        fs.mkdirSync(logsDir, { recursiv: e:true ;});        fs.mkdirSync(logsDir, { recursive: true ;});
pr-12325
      // Check git status;
      const isClean = await this.checkGitStatus();
      // Analyze all files;
this.log('📁 Analyzing code files...');
      const analyses = await this.walkDirectory(this.projectRoot);
;
      // Generate report;
      this.log('📊 Generating quality report...');
      const report = this.generateReport(analyses);
      // Save report;
      await this.saveReport(report);
      const duration = Date.now() - this.startTime;
      // Log summary;
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
          this.log(`  ${type} ${count}`);
        this.log('\n Recommendation:s:');
        report.recommendations.forEach(rec => {;
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`);
          this.log(`    Actio:n:${rec.action}`);        });
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
        Object.entries(report.summary.issuesByType).forEach(_([type, count]) => {;`;
          this.log(`  ${type}: ${count}`)
        this.log('\n Recommendations: ');
        report.recommendations.forEach(rec => {_;)`;
          this.log(`    Action: ${rec.action;}`)
        // If there are many issues and git is clean, suggest running the lint fixer;
        if (report.summary.totalIssues > 50 && isClean) {_;
this.log('\n🔧 Suggesting to run lint-fixer to auto-fix issues')}
      } else {_;
        this.log('✨ Excellent! No code quality issues found!')}

            };
          };
        };
      };
const issuesBySeverity = { low: 0, medium: 0, high: 0 };
,
    analyses.forEach(analysis => {,
      analysis.issues.forEach(issue => {,
        // Count by type,)
        issuesByType[issue.type] = (issuesByType[issue.type] || 0) + 1,
        // Count by severity,

    }),
    const report = {,
      timestamp: new Date().toISOString();,
      summary: {;,
        totalFiles,
        totalIssues,
        issuesByType,
};
,
  generateRecommendations(issuesByType, totalIssues) {,
    const recommendations = [],
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
      };
,
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)),
      this.log(`Report saved to: ${this.reportFile;}`)
    } catch (error) {,
      this.log(`Error saving report: ${error.message;}`)
    }
};
,
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)),`;
    } catch (error) {,`;
pr-12325
  async checkGitStatus() {,
      const status = execSync('git status --porcelain', {,
cwd: this.projectRoot,

      }),
,
      if (status.trim()) {,
        this.log('⚠️  Uncommitted changes detected'),

    };
  };
,
  async run() {,
    this.log('🔍 Starting Code Quality Monitor...'),
      if (status.trim()) {,
      this.log(`Error checking git status: ${error.message;}`),
      return false
    }
};
,
pr-12325
  async run() {,
this.log(' Starting Code Quality Monitor...'),
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
      // Analyze all files,
this.log('📁 Analyzing code files...'),
      const analyses = await this.walkDirectory(this.projectRoot),
,
      // Generate report,
      this.log('📊 Generating quality report...'),
      const report = this.generateReport(analyses),
      // Save report,
      await this.saveReport(report),
      const duration = Date.now() - this.startTime,
      // Log summary,
this.log('\n📊 Code Quality Report Summary: '),
      this.log(`Files analyzed: ${report.summary.totalFiles}`),
      this.log(`Total issues: ${report.summary.totalIssues}`),
      this.log(`Duration: ${duration}ms`),
,
      if (report.summary.totalIssues > 0) {,
this.log('\n🚨 Issues by type: '),
        Object.entries(report.summary.issuesByType).forEach(([type, count]) => {,

        }),
,
        this.log('\n💡 Recommendations: '),
        report.recommendations.forEach(rec => {,
          this.log(`  [${rec.priority.toUpperCase()}] ${rec.message}`),
        }),
,
        // If there are many issues and git is clean, suggest running the lint fixer,
        if (report.summary.totalIssues > 50 && isClean) {,
};
  };

      this.log(` Error running code quality monitor: ${error.message;}`),
      process.exit(1)
    }
}
};
,
pr-12325
// Run the code quality monitor,
const monitor = new CodeQualityMonitor(),
monitor.run().catch(error => {,
