
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
;
class ConfigErrorFixer {;
  constructor() {;
    this.workspacePath = process.cwd();
    this.logsPath = path.join(this.workspacePath, 'logs');
    this.reportsPath = path.join(this.workspacePath, 'automation-reports');
    this.ensureDirectories();
    this.configHistory = new Map()}

        fs.mkdirSync(dir { recursive: true })}
    })}

  }
;
  async scanConfigFiles() {;
    this.log('🔍 Scanning configuration files...');

    const issues = [];
;
    for (const configFile of configFiles) {;
      const filePath = path.join(this.workspacePath, configFile);
      if (fs.existsSync(filePath)) {;
        try {;
          const fileIssues = await this.analyzeConfigFile(filePath);

          )}
      }
    }
;

    this.log(Found ${issues.length} configuration issues``);
    return issues}
;
  async analyzeConfigFile(filePath) {;
    const issues = [];
    const fileName = path.basename(filePath);

          JSON.parse(content)} catch (parseError) {;
          issues.push({;
            file: fileName,;
            type: 'syntax',;
            description: 'Invalid JSON syntax',;
            severity: 'high',;
            error: parseError.message,})}
      }

        const packageIssues = this.analyzePackageJson(content);
        issues.push(...packageIssues)} else if (fileName === 'tsconfig.json') {;
        const tsIssues = this.analyzeTsConfig(content);
        issues.push(...tsIssues)} else if (fileName === 'eslint.config.js') {;
        const eslintIssues = this.analyzeEslintConfig(content);
        issues.push(...eslintIssues)}

    }
;
    return issues}
;
  analyzePackageJson(content) {;
    const issues = [];
;
    try {;
      const pkg = JSON.parse(content)})}
;
      if (!pkg.version) {;
        issues.push({;
          file: 'package.json',;
          type: 'missing-field',;
          description: 'Missing version field',;
          severity: 'medium',})}

    return issues}
;
  analyzeTsConfig(content) {;
    const issues = [];
;
    try {;
      const tsConfig = JSON.parse(content);

    return issues}
;
  analyzeEslintConfig(content) {;
    const issues = []})}
    }
;
    return issues}
;
  async fixConfigIssues(issues) {this.log(`🔧 Fixing ${issues.length} configuration issues...`);
;
    let fixedCount = 0;
    const fixResults = [];
;
    for (const issue of issues) {;
      try {;
        const fixed = await this.fixConfigIssue(issue);
        if (fixed) {;
          fixedCount++}
;
        fixResults.push({;
          issue,;
          fixed,;
          timestamp: new Date().toISOString(),});

      let originalContent = content;
      let fixed = false;
;
      switch (issue.type) {;
        case 'merge-conflict':;
          content = await this.fixMergeConflicts(content);
          fixed = content !== originalContent;
          break;
;
        case 'syntax':;
          if (issue.file === 'package.json') {;
            content = await this.fixPackageJsonSyntax(content);
            fixed = content !== originalContent}
          break;
;
        case 'missing-field':;
          if (issue.file === 'package.json') {;
            content = await this.fixPackageJsonFields(content, issue);
            fixed = content !== originalContent}
          break;
;
        case 'dependency-conflict':;
          if (issue.file === 'package.json') {;
            content = await this.fixDependencyConflicts(content);
            fixed = content !== originalContent}
          break;

            content = await this.fixTsConfigOptions(content, issue);
            fixed = content !== originalContent}
          break}
;
      if (fixed) {;
        fs.writeFileSync(filePath, content);this.log(`✅ Fixed ${issue.type} in ${issue.file}`);
        return true}
;
      return false} catch (fixError) {this.log(`❌ Failed to fix config issue: ${fixError.message}`, `ERROR`);
      return false}
  }

      content = content.replace(/, '\s*']/g, ']'); // Remove trailing commas in arrays;
      return content}
  }
;
  async fixPackageJsonFields(content, issue) {;
    try {;
      const pkg = JSON.parse(content);
;
      if (issue.description.includes('name') && !pkg.name) {;
        pkg.name = 'recovered-project'}
;
      if (issue.description.includes('version') && !pkg.version) {;
        pkg.version = '1.0.0'}
;
      return JSON.stringify(pkg, null, 2);

      return content}
  }
;
  async fixDependencyConflicts(content) {;
    try {;
      const pkg = JSON.parse(content);
;
      if (pkg.dependencies && pkg.devDependencies) {;
        const deps = Object.keys(pkg.dependencies);
        const devDeps = Object.keys(pkg.devDependencies);
        const conflicts = deps.filter(dep => devDeps.includes(dep));

            delete pkg.dependencies[conflict]}
        }
      }
;
      return JSON.stringify(pkg, null, 2);

      return content}
  }
;
  async fixTsConfigOptions(content, issue) {;
    try {;
      const tsConfig = JSON.parse(content);
;
      if (tsConfig.compilerOptions) {;
        if (issue.description.includes('target')) {;
          tsConfig.compilerOptions.target = 'es2020'}
;
        if (issue.description.includes('module')) {;
          tsConfig.compilerOptions.module = 'esnext'}
      }
;
      return JSON.stringify(tsConfig, null, 2);

      return content}
  }
;
  async generateReport(fixResults) {;
    this.log('📊 Generating configuration error fixing report...');

    );
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
this.log(`📄 Report generated: ${reportFile}`);
    return report}

      );
;
      return {;
        success: fixResults.fixedCount > 0,;
        issues: issues,;
        fixed: fixResults.fixedCount,;
        report,}} catch (error) {  this.log(`💥 Config Error Fixer failed: ${error.message  }`, `ERROR`);
      throw error}
  }
}

  const fixer = new ConfigErrorFixer();
  fixer.run().catch(console.error)}
;
module.exports = ConfigErrorFixer;
