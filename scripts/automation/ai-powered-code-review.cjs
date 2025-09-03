<<<<<<< HEAD
#!/''usr/bin/env'' node;
/**
 * AI-Powered Code Review - PM2 Automation;
 * Automatically reviews code quality, suggests improvements, and fixes common issues;
 */
=======
#!/'usr/bin/env' node;

/**;
 * AI-Powered Code Review - PM2 Automation;
 * Automatically reviews code quality, suggests improvements, and fixes common issues;
 */;
>>>>>>> main

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
;
class AIPoweredCodeReview {;
  constructor() {;
    this.projectRoot = process.cwd();
<<<<<<< HEAD
    this.logFile = path.join(;
      this.projectRoot,logs',;
      'ai-code-review.log';
    );
    this.reviewHistory = path.join(;
      this.projectRoot,logs',;
      'code-review-history.json';
=======
    this.logFile = path.join(
      this.projectRoot, 'logs',
      'ai-code-review.log'
    );
    this.reviewHistory = path.join(
      this.projectRoot, 'logs',
      'code-review-history.json'
>>>>>>> main
    );
    this.issuesFound = 0;
    this.improvementsSuggested = 0;
    this.autoFixesApplied = 0;
  }
<<<<<<< HEAD
;
  async initialize() {;
    console.log(`'🤖 AI-Powered Code Review System Initialized');
=======

  async initialize() {
    console.log(`🤖 AI-Powered Code Review System Initialized`);
>>>>>>> main
    this.ensureLogDirectory();
    this.loadReviewHistory();
<<<<<<< HEAD
    
=======
    ;
>>>>>>> main
    // Start continuous monitoring;
    this.startContinuousReview();
  }
;
  ensureLogDirectory() {;
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {;
      fs.mkdirSync(logDir, { recursive: true });
    }
  }
;
  loadReviewHistory() {;
    try {;
      if (fs.existsSync(this.reviewHistory)) {;
        const data = fs.readFileSync(this.reviewHistory, 'utf8');
        this.history = JSON.parse(data);
      } else {;
        this.history = {;
          totalReviews: 0,;
          totalIssues: 0,;
          totalImprovements: 0,;
          totalAutoFixes: 0,;
          lastReview: null,;
          reviewStats: {}
        };
      }
<<<<<<< HEAD
    } catch (error) {  
      console.error('Error loading review history:', error);
      this.history = {
        totalReviews: 0,
        totalIssues: 0,
        totalImprovements: 0,
        totalAutoFixes: 0,
        lastReview: null,
        reviewStats: {  }
=======
    } catch (error) {;
      console.error('Error loading review history:', error);
      this.history = {;
        totalReviews: 0,;
        totalIssues: 0,;
        totalImprovements: 0,;
        totalAutoFixes: 0,;
        lastReview: null,;
        reviewStats: {}
>>>>>>> main
      };
    }
  }
<<<<<<< HEAD
;
  async startContinuousReview() {;
    console.log(`'🔍 Starting continuous code review...');
    ;
    // Initial review;
=======

  async startContinuousReview() {
    console.log(`🔍 Starting continuous code review...`);
    
<<<<<<< HEAD
    // Initial review;
    await this.performFullCodeReview();
    
    // Set up file watching for real-time reviews;
    this.watchForChanges();
    
    // Periodic comprehensive reviews;
    setInterval(async () => {
=======
    // Initial review
>>>>>>> main
    await this.performFullCodeReview();
    ;
    // Set up file watching for real-time reviews;
    this.watchForChanges();
    ;
    // Periodic comprehensive reviews;
    setInterval(async () => {;
>>>>>>> main
      await this.performFullCodeReview();
    }, 30 * 60 * 1000); // Every 30 minutes;
  }
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
<<<<<<< HEAD

    try {
      // Review ``TypeScript/JavaScript`` files;
      await this.reviewTypeScriptFiles(reviewResults);
      
      // Review React components;
      await this.reviewReactComponents(reviewResults);
      
      // Review configuration files;
      await this.reviewConfigFiles(reviewResults);
      
      // Review package dependencies;
      await this.reviewDependencies(reviewResults);
      
      // Generate AI-powered suggestions;
      await this.generateAISuggestions(reviewResults);
      
      // Apply auto-fixes;
      await this.applyAutoFixes(reviewResults);
      
      // Update statistics;
      reviewResults.duration = Date.now() - startTime;
      this.updateReviewHistory(reviewResults);
      
=======
;
    try {;
      // Review 'TypeScript/JavaScript' files;
      await this.reviewTypeScriptFiles(reviewResults);
      ;
      // Review React components;
      await this.reviewReactComponents(reviewResults);
      ;
      // Review configuration files;
      await this.reviewConfigFiles(reviewResults);
      ;
      // Review package dependencies;
      await this.reviewDependencies(reviewResults);
      ;
      // Generate AI-powered suggestions;
      await this.generateAISuggestions(reviewResults);
      ;
      // Apply auto-fixes;
      await this.applyAutoFixes(reviewResults);
      ;
      // Update statistics;
      reviewResults.duration = Date.now() - startTime;
      this.updateReviewHistory(reviewResults);
      ;
>>>>>>> main
      // Log results;
      this.logReviewResults(reviewResults);
      ;
      console.log(✅ Code review completed in ${reviewResults.duration}ms);console.log(📊 Found ${reviewResults.issues.length} issues, ${reviewResults.improvements.length} improvements``);
<<<<<<< HEAD
      
    } catch (error) {  
      console.error(`❌ Error during code review:`, error);
      this.logError(`Code review failed`, error);
      }
  }

  async reviewTypeScriptFiles(results) {
    console.log(`'🔍 Reviewing ''TypeScript/JavaScript'' files...');
    
    const tsFiles = this.findFiles(['**/*.ts', '**/*.tsx', '**/*.js', `**/*.jsx`]);
    
    for (const file of tsFiles) {
      try {
        const content = fs.readFileSync(file, `utf8`);
=======
      ;
    } catch (error) {;
      console.error('❌ Error during code review:', error);
      this.logError('Code review failed', error);
    }
  }
;
  async reviewTypeScriptFiles(results) {;
    console.log(`'🔍 Reviewing 'TypeScript/JavaScript' files...');
    ;
    const tsFiles = this.findFiles(['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx']);
    ;
    for (const file of tsFiles) {;
      try {;
        const content = fs.readFileSync(file, 'utf8');
>>>>>>> main
        const fileResults = await this.analyzeTypeScriptFile(file, content);
<<<<<<< HEAD
        ;
        results.filesReviewed++;
        results.issues.push(...fileResults.issues);
        results.improvements.push(...fileResults.improvements);
        ;
=======
        
<<<<<<< HEAD
      } catch (error) {  console.error(Error reviewing ${file  }:, error`);
=======
        results.filesReviewed++;`);
        results.issues.push(...fileResults.issues);`);
        results.improvements.push(...fileResults.improvements);`);
        `);
>>>>>>> main
      } catch (error) {console.error(Error reviewing ${file}:, error`);
>>>>>>> main
      }
    }
  }
;
  async analyzeTypeScriptFile(filePath, content) {;
    const results = { issues: [], improvements: [] };
<<<<<<< HEAD
    
    // Check for common TypeScript issues;
    if (content.includes(`any`)) {
      results.issues.push({
        file: filePath,
        type: `typescript`,
        severity: 'warning',
        message: 'Usage of "any" type detected. Consider using proper TypeScript types.',
        line: this.findLineNumber(content, 'any'),
        suggestion: 'Replace with specific interface or union type'
      });
    }
    
=======
    ;
    // Check for common TypeScript issues;
    if (content.includes('any')) {;
      results.issues.push({;
        file: filePath,;
        type: 'typescript',;
        severity: 'warning',;
        message: 'Usage of "any" type detected. Consider using proper TypeScript types.',;
        line: this.findLineNumber(content, 'any'),;
        suggestion: 'Replace with specific interface or union type';
      });
    }
    ;
>>>>>>> main
    // Check for unused imports;
    const importMatches = content.match(/import\s+.*\s+from\s+['"][^'"]+['"]/g);
    if (importMatches) {;
      for (const importStmt of importMatches) {;
        const importedItem = importStmt.match(/import\s+{?\s*(\w+)/)?.[1];
<<<<<<< HEAD
        if (importedItem && !content.includes(importedItem)) {
          results.issues.push({
            file: filePath,
            type: `typescript`,
            severity: `info`,message: `Unused import: ${importedItem}`,
            line: this.findLineNumber(content, importStmt),
            suggestion: `Remove unused import`
=======
        if (importedItem && !content.includes(importedItem)) {;
          results.issues.push({;
            file: filePath,;
            type: 'typescript',;
            severity: 'info',message: `Unused import: ${importedItem}`,;
            line: this.findLineNumber(content, importStmt),;
            suggestion: 'Remove unused import';
>>>>>>> main
          });
        }
      }
    }
<<<<<<< HEAD
    
    // Check for performance issues;
    if (content.includes(`useEffect`) && content.includes('[]')) {
      results.improvements.push({
        file: filePath,
        type: 'react',
        severity: 'info',
        message: 'Consider adding dependencies to useEffect or using ''useCallback/useMemo''',
        line: this.findLineNumber(content, 'useEffect'),
        suggestion: 'Review useEffect dependencies for optimization'
=======
    ;
    // Check for performance issues;
    if (content.includes('useEffect') && content.includes('[]')) {;
      results.improvements.push({;
        file: filePath,;
        type: 'react',;
        severity: 'info',;
        message: 'Consider adding dependencies to useEffect or using 'useCallback/useMemo'',;
        line: this.findLineNumber(content, 'useEffect'),;
        suggestion: 'Review useEffect dependencies for optimization';
>>>>>>> main
      });
    }
    ;
    return results;
  }
<<<<<<< HEAD
;
  async reviewReactComponents(results) {;
    console.log(`'⚛️ Reviewing React components...');
    ;
=======

  async reviewReactComponents(results) {
    console.log(`⚛️ Reviewing React components...`);
    
<<<<<<< HEAD
    const reactFiles = this.findFiles(['**/*.tsx', `**/*.jsx`]);
    
    for (const file of reactFiles) {
      try {
        const content = fs.readFileSync(file, `utf8`);
=======
>>>>>>> main
    const reactFiles = this.findFiles(['**/*.tsx', '**/*.jsx']);
    ;
    for (const file of reactFiles) {;
      try {;
        const content = fs.readFileSync(file, 'utf8');
>>>>>>> main
        const componentResults = await this.analyzeReactComponent(file, content);
        ;
        results.issues.push(...componentResults.issues);
        results.improvements.push(...componentResults.improvements);
<<<<<<< HEAD
        
      } catch (error) {  console.error(Error reviewing React component ${file  }:, error`);
=======
        ;
      } catch (error) {console.error(Error reviewing React component ${file}:, error`);
>>>>>>> main
      }
    }
  }
;
  async analyzeReactComponent(filePath, content) {;
    const results = { issues: [], improvements: [] };
<<<<<<< HEAD
    
    // Check for missing PropTypes or TypeScript interfaces;
    if (!content.includes(`interface`) && !content.includes(`type Props`) && !content.includes('PropTypes')) {
      results.improvements.push({
        file: filePath,
        type: 'react',
        severity: 'info',
        message: 'Component lacks type definitions',
        line: 1,
        suggestion: 'Add TypeScript interface or PropTypes for better type safety'
      });
    }
    
    // Check for accessibility issues;
    if (content.includes('<button') && !content.includes('aria-label') && !content.includes('aria-labelledby')) {
      results.improvements.push({
        file: filePath,
        type: 'accessibility',
        severity: 'warning',
        message: 'Button missing accessibility attributes',
        line: this.findLineNumber(content, '<button'),
        suggestion: 'Add aria-label or aria-labelledby for screen readers'
=======
    ;
    // Check for missing PropTypes or TypeScript interfaces;
    if (!content.includes('interface') && !content.includes('type Props') && !content.includes('PropTypes')) {;
      results.improvements.push({;
        file: filePath,;
        type: 'react',;
        severity: 'info',;
        message: 'Component lacks type definitions',;
        line: 1,;
        suggestion: 'Add TypeScript interface or PropTypes for better type safety';
      });
    }
    ;
    // Check for accessibility issues;
    if (content.includes('<button') && !content.includes('aria-label') && !content.includes('aria-labelledby')) {;
      results.improvements.push({;
        file: filePath,;
        type: 'accessibility',;
        severity: 'warning',;
        message: 'Button missing accessibility attributes',;
        line: this.findLineNumber(content, '<button'),;
        suggestion: 'Add aria-label or aria-labelledby for screen readers';
>>>>>>> main
      });
    }
    ;
    return results;
  }
<<<<<<< HEAD
;
  async reviewConfigFiles(results) {;
    console.log(`'⚙️ Reviewing configuration files...');
    ;
    const configFiles = ['package.json', 'tsconfig.json', 'next.config.js', 'tailwind.config.js', 'eslint.config.js'];
    ;
    for (const configFile of configFiles) {;
      if (fs.existsSync(configFile)) {;
        try {;
=======

  async reviewConfigFiles(results) {
    console.log(`⚙️ Reviewing configuration files...`);
    
    const configFiles = ['package.json'', 'tsconfig.json', 'next.config.js'', 'tailwind.config.js', 'eslint.config.js``];
    
    for (const configFile of configFiles) {
      if (fs.existsSync(configFile)) {
        try {
<<<<<<< HEAD
          const content = fs.readFileSync(configFile, `utf8`);
=======
>>>>>>> main
          const content = fs.readFileSync(configFile, 'utf8');
>>>>>>> main
          const configResults = await this.analyzeConfigFile(configFile, content);
          ;
          results.issues.push(...configResults.issues);
          results.improvements.push(...configResults.improvements);
<<<<<<< HEAD
          
        } catch (error) {  console.error(Error reviewing config file ${configFile  }:, error`);
=======
          ;
        } catch (error) {console.error(Error reviewing config file ${configFile}:, error`);
>>>>>>> main
        }
      }
    }
  }
;
  async analyzeConfigFile(filePath, content) {;
    const results = { issues: [], improvements: [] };
<<<<<<< HEAD
    
    if (filePath === `package.json`) {
      try {
        const pkg = JSON.parse(content);
        
        // Check for outdated dependencies;
        if (pkg.dependencies) {
          for (const [`dep`, 'version'] of Object.entries(pkg.dependencies)) {
            if (version.startsWith('^') || version.startsWith('~')) {
              results.improvements.push({
                file: filePath,
                type: `dependencies`,
                severity: `info`,message: `Consider pinning dependency version: ${dep}`,
                line: this.findLineNumber(content, dep),
                suggestion: `Use exact version for production stability`
=======
    ;
    if (filePath === 'package.json') {;
      try {;
        const pkg = JSON.parse(content);
        ;
        // Check for outdated dependencies;
        if (pkg.dependencies) {;
          for (const ['dep', 'version'] of Object.entries(pkg.dependencies)) {;
            if (version.startsWith('^') || version.startsWith('~')) {;
              results.improvements.push({;
                file: filePath,;
                type: 'dependencies',;
                severity: 'info',message: `Consider pinning dependency version: ${dep}`,;
                line: this.findLineNumber(content, dep),;
                suggestion: 'Use exact version for production stability';
>>>>>>> main
              });
            }
          }
        }
<<<<<<< HEAD
        
        // Check for security issues;
        if (pkg.scripts && pkg.scripts.start && pkg.scripts.start.includes(`--inspect`)) {
          results.issues.push({
            file: filePath,
            type: 'security',
            severity: 'warning',
            message: 'Debug mode enabled in start script',
            line: this.findLineNumber(content, '--inspect'),
            suggestion: 'Remove --inspect flag from production scripts'
          });
        }
        
      } catch (error) {  
=======
        ;
        // Check for security issues;
        if (pkg.scripts && pkg.scripts.start && pkg.scripts.start.includes('--inspect')) {;
          results.issues.push({;
            file: filePath,;
            type: 'security',;
            severity: 'warning',;
            message: 'Debug mode enabled in start script',;
            line: this.findLineNumber(content, '--inspect'),;
            suggestion: 'Remove --inspect flag from production scripts';
          });
        }
        ;
      } catch (error) {;
>>>>>>> main
        console.error('Error parsing package.json:', error);
        }
    }
    ;
    return results;
  }
<<<<<<< HEAD
;
  async reviewDependencies(results) {;
    console.log(`'📦 Reviewing package dependencies...');
    ;
    try {;
      // Check for outdated packages;
      const outdatedCheck = execSync('npm outdated --json', { ;
        cwd: this.projectRoot,;
        encoding: 'utf8',;
        stdio: 'pipe';
=======

  async reviewDependencies(results) {
    console.log(`📦 Reviewing package dependencies...`);
    
    try {
      // Check for outdated packages;
      const outdatedCheck = execSync('npm outdated --json', { 
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
>>>>>>> main
      });
      ;
      if (outdatedCheck.trim()) {;
        const outdated = JSON.parse(outdatedCheck);
<<<<<<< HEAD
        for (const ['pkg', 'info'] of Object.entries(outdated)) {
          results.improvements.push({
            file: 'package.json',
            type: `dependencies`,
            severity: `info`,message: Outdated package: ${pkg} (current: ${info.current}, latest: ${info.latest}),
            line: 0,suggestion: `Update ${pkg} to latest version`
          }`);
        }
      }
      
      // Check for security vulnerabilities;
      const auditCheck = execSync(`npm audit --json`, { 
        cwd: this.projectRoot,
        encoding: `utf8`,
        stdio: 'pipe'
=======
        for (const ['pkg', 'info'] of Object.entries(outdated)) {;
          results.improvements.push({;
            file: 'package.json',;
            type: 'dependencies',;
            severity: 'info',message: Outdated package: ${pkg} (current: ${info.current}, latest: ${info.latest}),;
            line: 0,suggestion: `Update ${pkg} to latest version`;
          }`);
        }
      }
      ;
      // Check for security vulnerabilities;
      const auditCheck = execSync('npm audit --json', { ;
        cwd: this.projectRoot,;
        encoding: 'utf8',;
        stdio: 'pipe';
>>>>>>> main
      });
      ;
      if (auditCheck.trim()) {;
        const audit = JSON.parse(auditCheck);
<<<<<<< HEAD
        if (audit.vulnerabilities) {
          for (const ['pkg', 'vuln'] of Object.entries(audit.vulnerabilities)) {
            results.issues.push({
              file: 'package.json',
              type: `security`,
              severity: `high`,message: `Security vulnerability in ${pkg}: ${vuln.title}`,
              line: 0,suggestion: `Run `npm audit fix` or update ${pkg}`
=======
        if (audit.vulnerabilities) {;
          for (const ['pkg', 'vuln'] of Object.entries(audit.vulnerabilities)) {;
            results.issues.push({;
              file: 'package.json',;
              type: 'security',;
              severity: 'high',message: `Security vulnerability in ${pkg}: ${vuln.title}`,;
              line: 0,suggestion: `Run 'npm audit fix' or update ${pkg}`;
>>>>>>> main
            });
          }
        }
      }
<<<<<<< HEAD
      ;
    } catch (error) {;
      // npm commands might fail if no issues found;
      console.log(`'No dependency issues found');
    }
  }
;
  async generateAISuggestions(results) {;
    console.log(`'🧠 Generating AI-powered suggestions...');
    ;
    // Analyze patterns and generate intelligent suggestions;
=======
      
<<<<<<< HEAD
    } catch (error) {  
      // npm commands might fail if no issues found;
      console.log(``No dependency issues found`);
      }
  }

  async generateAISuggestions(results) {
    console.log(``🧠 Generating AI-powered suggestions...`);
    
    // Analyze patterns and generate intelligent suggestions;
    const patterns = this.analyzeCodePatterns(results);
    
    for (const pattern of patterns) {
      results.improvements.push({
        file: 'AI Analysis',
        type: 'ai-suggestion',
        severity: 'info',
        message: pattern.message,
        line: 0,
=======
    } catch (error) {
      // npm commands might fail if no issues found
      console.log(`No dependency issues found`);
    }
  }

  async generateAISuggestions(results) {
    console.log(`🧠 Generating AI-powered suggestions...`);
    
    // Analyze patterns and generate intelligent suggestions
>>>>>>> main
    const patterns = this.analyzeCodePatterns(results);
    ;
    for (const pattern of patterns) {;
      results.improvements.push({;
        file: 'AI Analysis',;
        type: 'ai-suggestion',;
        severity: 'info',;
        message: pattern.message,;
        line: 0,;
>>>>>>> main
        suggestion: pattern.suggestion;
      });
    }
  }
;
  analyzeCodePatterns(results) {;
    const patterns = [];
<<<<<<< HEAD
    
    // Analyze issue patterns;
    const issueTypes = results.issues.reduce((acc, issue) => {
      acc[issue.type] = (acc[issue.type] || 0) + 1;
      return acc;
    }, {});
    
    // Suggest improvements based on patterns;
    if (issueTypes.typescript > 5) {
      patterns.push({
        message: 'High number of TypeScript issues detected',
        suggestion: 'Consider implementing stricter TypeScript configuration and linting rules'
=======
    ;
    // Analyze issue patterns;
    const issueTypes = results.issues.reduce((acc, issue) => {;
      acc[issue.type] = (acc[issue.type] || 0) + 1;
      return acc;
    }, {});
    ;
    // Suggest improvements based on patterns;
    if (issueTypes.typescript > 5) {;
      patterns.push({;
        message: 'High number of TypeScript issues detected',;
        suggestion: 'Consider implementing stricter TypeScript configuration and linting rules';
>>>>>>> main
      });
    }
    ;
    if (issueTypes.security > 0) {;
      patterns.push({;
        message: 'Security vulnerabilities detected',;
        suggestion: 'Prioritize security fixes and implement automated security scanning';
      });
    }
    ;
    return patterns;
  }
<<<<<<< HEAD
;
  async applyAutoFixes(results) {;
    console.log(`'🔧 Applying automatic fixes...');
    ;
=======

  async applyAutoFixes(results) {
    console.log(`🔧 Applying automatic fixes...`);
    
>>>>>>> main
    let fixesApplied = 0;
<<<<<<< HEAD
    
    for (const issue of results.issues) {
      if (issue.severity === `info` && issue.type === `typescript`) {
        if (await this.autoFixIssue(issue)) {
=======
    ;
    for (const issue of results.issues) {;
      if (issue.severity === 'info' && issue.type === 'typescript') {;
        if (await this.autoFixIssue(issue)) {;
>>>>>>> main
          fixesApplied++;
          results.autoFixes.push(issue);
        }
      }
    }
    console.log(✅ Applied ${fixesApplied} automatic fixes);
  }
<<<<<<< HEAD

  async autoFixIssue(issue) {
    try {
      if (issue.message.includes(`Unused import`)) {
        // Remove unused import;
        const content = fs.readFileSync(issue.file, `utf8`);
        const lines = content.split('\n');
        const importLine = lines[issue.line - 1];
        
        if (importLine.includes(`import`)) {
=======
;
  async autoFixIssue(issue) {;
    try {;
      if (issue.message.includes('Unused import')) {;
        // Remove unused import;
        const content = fs.readFileSync(issue.file, 'utf8');
        const lines = content.split('\n');
        const importLine = lines[issue.line - 1];
        ;
        if (importLine.includes('import')) {;
>>>>>>> main
          lines.splice(issue.line - 1, 1);
          fs.writeFileSync(issue.file, lines.join(`\n`));
          return true;
        }
      }
      ;
      return false;
    } catch (error) {  console.error(Error auto-fixing issue in ${issue.file  }:, error`);
      return false;
    }
  }
;
  findFiles(patterns) {;
    const files = [];
<<<<<<< HEAD
    
    for (const pattern of patterns) {
      try {
        const glob = require(`glob`);
        const matches = glob.sync(pattern, { cwd: this.projectRoot });
        files.push(...matches);
      } catch (error) {  
=======
    ;
    for (const pattern of patterns) {;
      try {;
        const glob = require('glob');
        const matches = glob.sync(pattern, { cwd: this.projectRoot });
        files.push(...matches);
      } catch (error) {;
>>>>>>> main
        // Fallback to simple file search;
        this.simpleFileSearch(pattern, files);
        }
    }
    ;
    return [...new Set(files)];
  }
;
  simpleFileSearch(pattern, files) {;
    const walkDir = (dir) => {;
      const items = fs.readdirSync(dir);
      for (const item of items) {;
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
<<<<<<< HEAD
        
        if (stat.isDirectory() && !item.startsWith(`.`) && !item.includes('node_modules')) {
=======
        ;
        if (stat.isDirectory() && !item.startsWith('.') && !item.includes('node_modules')) {;
>>>>>>> main
          walkDir(fullPath);
        } else if (stat.isFile() && this.matchesPattern(fullPath, pattern)) {;
          files.push(fullPath);
        }
      }
    };
    ;
    walkDir(this.projectRoot);
  }
;
  matchesPattern(filePath, pattern) {;
    const ext = path.extname(filePath);
    if (pattern.includes('*.ts') && ext === '.ts') return true;
    if (pattern.includes('*.tsx') && ext === '.tsx') return true;
    if (pattern.includes('*.js') && ext === '.js') return true;
    if (pattern.includes('*.jsx') && ext === '.jsx') return true;
    return false;
  }
;
  findLineNumber(content, searchText) {;
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {;
      if (lines[i].includes(searchText)) {;
        return i + 1;
      }
    }
    return 0;
  }
;
  updateReviewHistory(results) {;
    this.history.totalReviews++;
    this.history.totalIssues += results.issues.length;
    this.history.totalImprovements += results.improvements.length;
    this.history.totalAutoFixes += results.autoFixes.length;
    this.history.lastReview = new Date().toISOString();
<<<<<<< HEAD
    
    // Update stats by type;
    for (const issue of results.issues) {
      this.history.reviewStats[issue.type] = (this.history.reviewStats[issue.type] || 0) + 1;
    }
    
    // Save updated history;
    try {
      fs.writeFileSync(this.reviewHistory, JSON.stringify(this.history, null, 2));
    } catch (error) {  
=======
    ;
    // Update stats by type;
    for (const issue of results.issues) {;
      this.history.reviewStats[issue.type] = (this.history.reviewStats[issue.type] || 0) + 1;
    }
    ;
    // Save updated history;
    try {;
      fs.writeFileSync(this.reviewHistory, JSON.stringify(this.history, null, 2));
    } catch (error) {;
>>>>>>> main
      console.error('Error saving review history:', error);
      }
  }
<<<<<<< HEAD

  logReviewResults(results) {
    const logEntry = {
      timestamp: new Date().toISOString(),
      summary: {
        filesReviewed: results.filesReviewed,
        issuesFound: results.issues.length,
        improvementsSuggested: results.improvements.length,
        autoFixesApplied: results.autoFixes.length,
        duration: results.duration;
      },
=======
;
  logReviewResults(results) {;
    const logEntry = {;
      timestamp: new Date().toISOString(),;
      summary: {;
        filesReviewed: results.filesReviewed,;
        issuesFound: results.issues.length,;
        improvementsSuggested: results.improvements.length,;
        autoFixesApplied: results.autoFixes.length,;
        duration: results.duration;
      },;
>>>>>>> main
      details: results;
    };
    ;
    try {;
      fs.appendFileSync(this.logFile, JSON.stringify(logEntry) + '\n');
<<<<<<< HEAD
    } catch (error) {  
=======
    } catch (error) {;
>>>>>>> main
      console.error('Error logging review results:', error);
      }
  }
<<<<<<< HEAD

  logError(message, error) {
    const errorEntry = {
      timestamp: new Date().toISOString(),
      message,
      error: error.message,
=======
;
  logError(message, error) {;
    const errorEntry = {;
      timestamp: new Date().toISOString(),;
      message,;
      error: error.message,;
>>>>>>> main
      stack: error.stack;
    };
    ;
    try {;
      fs.appendFileSync(this.logFile, JSON.stringify(errorEntry) + '\n');
<<<<<<< HEAD
    } catch (error) {  
=======
    } catch (error) {;
>>>>>>> main
      console.error('Error logging error:', error);
      }
  }
<<<<<<< HEAD
;
  watchForChanges() {;
    console.log(`'👀 Setting up file change monitoring...');
    ;
    // Simple file watching for demonstration;
    // In production, you'd use chokidar or similar;
    setInterval(() => {;
=======

  watchForChanges() {
    console.log(`👀 Setting up file change monitoring...`);
    
    // Simple file watching for demonstration;
    // In production, you'd use chokidar or similar;
    setInterval(() => {
>>>>>>> main
      this.checkForRecentChanges();
    }, 10000); // Check every 10 seconds;
  }
;
  async checkForRecentChanges() {;
    try {;
      const gitStatus = execSync('git status --porcelain', { ;
        cwd: this.projectRoot,;
        encoding: 'utf8';
      });
<<<<<<< HEAD
      ;
      if (gitStatus.trim()) {;
        console.log(`'📝 Changes detected, performing quick review...');
=======
      
      if (gitStatus.trim()) {
        console.log(`📝 Changes detected, performing quick review...`);
>>>>>>> main
        await this.performQuickReview();
      }
<<<<<<< HEAD
    } catch (error) {  
      // Git might not be available;
      }
  }

  async performQuickReview() {
=======
    } catch (error) {;
      // Git might not be available;
    }
  }
;
  async performQuickReview() {;
>>>>>>> main
    // Quick review of changed files only;
    const changedFiles = this.getChangedFiles();
    ;
    for (const file of changedFiles) {;
      if (file.endsWith('.ts') || file.endsWith('.tsx')) {;
        await this.reviewChangedFile(file);
      }
    }
  }
;
  getChangedFiles() {;
    try {;
      const gitStatus = execSync('git status --porcelain', { ;
        cwd: this.projectRoot,;
        encoding: 'utf8';
      });
<<<<<<< HEAD
      
      return gitStatus;
        .split('\n')
        .filter(line => line.trim())
        .map(line => line.split(' ').pop())
        .filter(file => file && !file.startsWith('.'));
    } catch (error) {  
=======
      ;
      return gitStatus;
        .split('\n');
        .filter(line => line.trim());
        .map(line => line.split(' ').pop());
        .filter(file => file && !file.startsWith('.'));
    } catch (error) {;
>>>>>>> main
      return [];
      }
  }
;
  async reviewChangedFile(filePath) {;
    try {;
      const content = fs.readFileSync(filePath, 'utf8');
      const results = await this.analyzeTypeScriptFile(filePath, content);
      ;
      if (results.issues.length > 0 || results.improvements.length > 0) {console.log(🔍 Quick review of ${filePath}:);console.log(   Issues: ${results.issues.length}, Improvements: ${results.improvements.length}``);
      }
    } catch (error) {  console.error(`Error reviewing changed file ${filePath  }:`, error);
    }
  }
}
<<<<<<< HEAD

// Start the AI-powered code review system;
const codeReview = new AIPoweredCodeReview();
codeReview.initialize().catch(console.error);

=======
;
// Start the AI-powered code review system;
const codeReview = new AIPoweredCodeReview();
codeReview.initialize().catch(console.error);
;
>>>>>>> main
// Export for PM2;
module.exports = codeReview;