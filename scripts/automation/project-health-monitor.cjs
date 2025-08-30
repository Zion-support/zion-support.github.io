#!/usr/bin/env node

/**
 * Project Health Monitor - PM2 Automation
 * Automatically detects and fixes common project issues
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const crypto = require('crypto');

class ProjectHealthMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'project-health-monitor.log');
    this.issuesLog = path.join(this.projectRoot, 'logs', 'health-issues.json');
    this.fixesLog = path.join(this.projectRoot, 'logs', 'health-fixes.json');
    this.ensureLogsDirectory();
  }

  ensureLogsDirectory() {
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    
    fs.appendFileSync(this.logFile, logEntry);
    console.log(`[${level}] ${message}`);
  }

  async runHealthCheck() {
    this.log('Starting comprehensive project health check...');
    
    const issues = [];
    const fixes = [];

    try {
      // 1. Check package.json integrity
      const packageIssues = await this.checkPackageJson();
      issues.push(...packageIssues);

      // 2. Check TypeScript compilation
      const tsIssues = await this.checkTypeScript();
      issues.push(...tsIssues);

      // 3. Check dependencies
      const depIssues = await this.checkDependencies();
      issues.push(...depIssues);

      // 4. Check build configuration
      const buildIssues = await this.checkBuildConfig();
      issues.push(...buildIssues);

      // 5. Check file integrity
      const fileIssues = await this.checkFileIntegrity();
      issues.push(...fileIssues);

      // 6. Auto-fix issues where possible
      const autoFixes = await this.autoFixIssues(issues);
      fixes.push(...autoFixes);

      // 7. Generate health report
      await this.generateHealthReport(issues, fixes);

      // 8. Trigger rebuild if needed
      if (issues.length > 0 || fixes.length > 0) {
        await this.triggerRebuild();
      }

    } catch (error) {
      this.log(`Health check failed: ${error.message}`, 'ERROR');
      issues.push({
        type: 'SYSTEM_ERROR',
        severity: 'CRITICAL',
        message: error.message,
        timestamp: new Date().toISOString()
      });
    }

    return { issues, fixes };
  }

  async checkPackageJson() {
    const issues = [];
    const packagePath = path.join(this.projectRoot, 'package.json');

    try {
      if (!fs.existsSync(packagePath)) {
        issues.push({
          type: 'PACKAGE_JSON',
          severity: 'CRITICAL',
          message: 'package.json not found',
          file: packagePath
        });
        return issues;
      }

      const packageContent = fs.readFileSync(packagePath, 'utf8');
      const packageJson = JSON.parse(packageContent);

      // Check for invalid version
      if (!packageJson.version || packageJson.version === '') {
        issues.push({
          type: 'PACKAGE_JSON',
          severity: 'HIGH',
          message: 'Invalid or missing version in package.json',
          file: packagePath,
          current: packageJson.version
        });
      }

      // Check for missing required fields
      const requiredFields = ['name', 'scripts', 'dependencies'];
      for (const field of requiredFields) {
        if (!packageJson[field]) {
          issues.push({
            type: 'PACKAGE_JSON',
            severity: 'MEDIUM',
            message: `Missing required field: ${field}`,
            file: packagePath
          });
        }
      }

      // Check for corrupted dependencies
      if (packageJson.dependencies) {
        for (const [dep, version] of Object.entries(packageJson.dependencies)) {
          if (typeof version !== 'string' || version.trim() === '') {
            issues.push({
              type: 'PACKAGE_JSON',
              severity: 'HIGH',
              message: `Invalid dependency version for ${dep}: ${version}`,
              file: packagePath,
              dependency: dep,
              current: version
            });
          }
        }
      }

    } catch (error) {
      issues.push({
        type: 'PACKAGE_JSON',
        severity: 'CRITICAL',
        message: `Failed to parse package.json: ${error.message}`,
        file: packagePath
      });
    }

    return issues;
  }

  async checkTypeScript() {
    const issues = [];
    
    try {
      this.log('Running TypeScript compilation check...');
      
      const result = execSync('npm run type-check', { 
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });

      // If we get here, TypeScript compilation succeeded
      this.log('TypeScript compilation check passed');
      
    } catch (error) {
      const output = error.stdout || error.stderr || '';
      const lines = output.split('\n');
      
      let errorCount = 0;
      let fileErrors = {};

      for (const line of lines) {
        if (line.includes('error TS')) {
          errorCount++;
          
          // Parse error details
          const match = line.match(/src\/([^:]+):(\d+):(\d+)/);
          if (match) {
            const [, file, lineNum, colNum] = match;
            if (!fileErrors[file]) fileErrors[file] = [];
            
            fileErrors[file].push({
              line: parseInt(lineNum),
              column: parseInt(colNum),
              message: line.trim()
            });
          }
        }
      }

      if (errorCount > 0) {
        issues.push({
          type: 'TYPESCRIPT',
          severity: 'HIGH',
          message: `TypeScript compilation failed with ${errorCount} errors`,
          errorCount,
          fileErrors,
          details: output
        });
      }
    }

    return issues;
  }

  async checkDependencies() {
    const issues = [];
    
    try {
      this.log('Checking dependencies...');
      
      // Check if node_modules exists and is accessible
      const nodeModulesPath = path.join(this.projectRoot, 'node_modules');
      if (!fs.existsSync(nodeModulesPath)) {
        issues.push({
          type: 'DEPENDENCIES',
          severity: 'CRITICAL',
          message: 'node_modules directory not found',
          solution: 'Run npm install'
        });
        return issues;
      }

      // Check for corrupted packages
      const corruptedPackages = await this.findCorruptedPackages();
      if (corruptedPackages.length > 0) {
        issues.push({
          type: 'DEPENDENCIES',
          severity: 'HIGH',
          message: `Found ${corruptedPackages.length} corrupted packages`,
          corruptedPackages,
          solution: 'Remove node_modules and package-lock.json, then run npm install'
        });
      }

      // Check for missing critical dependencies
      const criticalDeps = ['react', 'react-dom', 'typescript', 'vite'];
      const missingDeps = [];
      
      for (const dep of criticalDeps) {
        const depPath = path.join(nodeModulesPath, dep);
        if (!fs.existsSync(depPath)) {
          missingDeps.push(dep);
        }
      }

      if (missingDeps.length > 0) {
        issues.push({
          type: 'DEPENDENCIES',
          severity: 'HIGH',
          message: `Missing critical dependencies: ${missingDeps.join(', ')}`,
          missingDeps,
          solution: 'Run npm install'
        });
      }

    } catch (error) {
      issues.push({
        type: 'DEPENDENCIES',
        severity: 'MEDIUM',
        message: `Dependency check failed: ${error.message}`
      });
    }

    return issues;
  }

  async findCorruptedPackages() {
    const corrupted = [];
    const nodeModulesPath = path.join(this.projectRoot, 'node_modules');
    
    try {
      const packages = fs.readdirSync(nodeModulesPath);
      
      for (const pkg of packages) {
        if (pkg.startsWith('.')) continue;
        
        const pkgPath = path.join(nodeModulesPath, pkg);
        const pkgJsonPath = path.join(pkgPath, 'package.json');
        
        if (fs.existsSync(pkgJsonPath)) {
          try {
            const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf8'));
            if (!pkgJson.name || !pkgJson.version) {
              corrupted.push(pkg);
            }
          } catch {
            corrupted.push(pkg);
          }
        } else {
          corrupted.push(pkg);
        }
      }
    } catch (error) {
      this.log(`Error scanning packages: ${error.message}`, 'WARN');
    }
    
    return corrupted;
  }

  async checkBuildConfig() {
    const issues = [];
    
    try {
      // Check Vite config
      const viteConfigPath = path.join(this.projectRoot, 'vite.config.ts');
      if (fs.existsSync(viteConfigPath)) {
        try {
          const viteConfig = fs.readFileSync(viteConfigPath, 'utf8');
          
          // Check for common configuration issues
          if (!viteConfig.includes('defineConfig')) {
            issues.push({
              type: 'BUILD_CONFIG',
              severity: 'MEDIUM',
              message: 'Vite config missing defineConfig wrapper',
              file: viteConfigPath
            });
          }
          
          if (!viteConfig.includes('@vitejs/plugin-react')) {
            issues.push({
              type: 'BUILD_CONFIG',
              severity: 'HIGH',
              message: 'Vite config missing React plugin',
              file: viteConfigPath
            });
          }
        } catch (error) {
          issues.push({
            type: 'BUILD_CONFIG',
            severity: 'HIGH',
            message: `Failed to read Vite config: ${error.message}`,
            file: viteConfigPath
          });
        }
      }

      // Check TypeScript config
      const tsConfigPath = path.join(this.projectRoot, 'tsconfig.json');
      if (fs.existsSync(tsConfigPath)) {
        try {
          const tsConfig = JSON.parse(fs.readFileSync(tsConfigPath, 'utf8'));
          
          if (!tsConfig.compilerOptions) {
            issues.push({
              type: 'BUILD_CONFIG',
              severity: 'HIGH',
              message: 'TypeScript config missing compilerOptions',
              file: tsConfigPath
            });
          }
        } catch (error) {
          issues.push({
            type: 'BUILD_CONFIG',
            severity: 'HIGH',
            message: `Failed to parse TypeScript config: ${error.message}`,
            file: tsConfigPath
          });
        }
      }

    } catch (error) {
      issues.push({
        type: 'BUILD_CONFIG',
        severity: 'MEDIUM',
        message: `Build config check failed: ${error.message}`
      });
    }

    return issues;
  }

  async checkFileIntegrity() {
    const issues = [];
    
    try {
      // Check for corrupted source files
      const srcPath = path.join(this.projectRoot, 'src');
      if (fs.existsSync(srcPath)) {
        const corruptedFiles = await this.scanForCorruptedFiles(srcPath);
        if (corruptedFiles.length > 0) {
          issues.push({
            type: 'FILE_INTEGRITY',
            severity: 'HIGH',
            message: `Found ${corruptedFiles.length} corrupted source files`,
            corruptedFiles
          });
        }
      }

      // Check for backup files that shouldn't exist
      const backupFiles = await this.findBackupFiles();
      if (backupFiles.length > 0) {
        issues.push({
          type: 'FILE_INTEGRITY',
          severity: 'MEDIUM',
          message: `Found ${backupFiles.length} backup files that should be cleaned up`,
          backupFiles
        });
      }

    } catch (error) {
      issues.push({
        type: 'FILE_INTEGRITY',
        severity: 'MEDIUM',
        message: `File integrity check failed: ${error.message}`
      });
    }

    return issues;
  }

  async scanForCorruptedFiles(dir) {
    const corrupted = [];
    
    try {
      const files = fs.readdirSync(dir, { withFileTypes: true });
      
      for (const file of files) {
        const fullPath = path.join(dir, file.name);
        
        if (file.isDirectory()) {
          corrupted.push(...await this.scanForCorruptedFiles(fullPath));
        } else if (file.isFile() && file.name.endsWith('.tsx') || file.name.endsWith('.ts')) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            
            // Check for common corruption patterns
            if (content.includes('import: {') || 
                content.includes('const:') ||
                content.includes('from,') ||
                content.includes('}, from,')) {
              corrupted.push({
                file: fullPath,
                issue: 'Malformed import/export syntax',
                size: content.length
              });
            }
            
            // Check for unclosed JSX tags
            const openTags = (content.match(/<[^/][^>]*>/g) || []).length;
            const closeTags = (content.match(/<\/[^>]*>/g) || []).length;
            if (Math.abs(openTags - closeTags) > 5) {
              corrupted.push({
                file: fullPath,
                issue: 'Unbalanced JSX tags',
                openTags,
                closeTags
              });
            }
            
          } catch (error) {
            corrupted.push({
              file: fullPath,
              issue: `File read error: ${error.message}`
            });
          }
        }
      }
    } catch (error) {
      this.log(`Error scanning directory ${dir}: ${error.message}`, 'WARN');
    }
    
    return corrupted;
  }

  async findBackupFiles() {
    const backupFiles = [];
    const backupPatterns = [
      '*.backup.*',
      '*.old.*',
      '*.bak',
      '*_backup.*',
      '*_old.*'
    ];
    
    try {
      const allFiles = await this.getAllFiles(this.projectRoot);
      
      for (const file of allFiles) {
        const fileName = path.basename(file);
        for (const pattern of backupPatterns) {
          if (this.matchesPattern(fileName, pattern)) {
            backupFiles.push(file);
            break;
          }
        }
      }
    } catch (error) {
      this.log(`Error finding backup files: ${error.message}`, 'WARN');
    }
    
    return backupFiles;
  }

  async getAllFiles(dir) {
    const files = [];
    
    try {
      const items = fs.readdirSync(dir, { withFileTypes: true });
      
      for (const item of items) {
        const fullPath = path.join(dir, item.name);
        
        if (item.isDirectory() && !item.name.startsWith('.') && item.name !== 'node_modules') {
          files.push(...await this.getAllFiles(fullPath));
        } else if (item.isFile()) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      // Skip directories we can't access
    }
    
    return files;
  }

  matchesPattern(fileName, pattern) {
    const regex = pattern
      .replace(/\./g, '\\.')
      .replace(/\*/g, '.*')
      .replace(/\?/g, '.');
    return new RegExp(`^${regex}$`).test(fileName);
  }

  async autoFixIssues(issues) {
    const fixes = [];
    
    for (const issue of issues) {
      try {
        switch (issue.type) {
          case 'PACKAGE_JSON':
            const packageFix = await this.fixPackageJson(issue);
            if (packageFix) fixes.push(packageFix);
            break;
            
          case 'TYPESCRIPT':
            const tsFix = await this.fixTypeScriptIssues(issue);
            if (tsFix) fixes.push(tsFix);
            break;
            
          case 'DEPENDENCIES':
            const depFix = await this.fixDependencies(issue);
            if (depFix) fixes.push(depFix);
            break;
            
          case 'FILE_INTEGRITY':
            const fileFix = await this.fixCorruptedFiles(issue);
            if (fileFix) fixes.push(fileFix);
            break;
        }
      } catch (error) {
        this.log(`Failed to auto-fix issue ${issue.type}: ${error.message}`, 'ERROR');
      }
    }
    
    return fixes;
  }

  async fixPackageJson(issue) {
    if (issue.message.includes('Invalid or missing version')) {
      try {
        const packagePath = path.join(this.projectRoot, 'package.json');
        const packageContent = fs.readFileSync(packagePath, 'utf8');
        const packageJson = JSON.parse(packageContent);
        
        // Set a default version if missing
        if (!packageJson.version || packageJson.version === '') {
          packageJson.version = '0.1.0';
          fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
          
          return {
            type: 'PACKAGE_JSON_FIX',
            message: 'Fixed missing version in package.json',
            details: `Set version to ${packageJson.version}`,
            timestamp: new Date().toISOString()
          };
        }
      } catch (error) {
        this.log(`Failed to fix package.json: ${error.message}`, 'ERROR');
      }
    }
    
    return null;
  }

  async fixTypeScriptIssues(issue) {
    if (issue.message.includes('TypeScript compilation failed')) {
      try {
        // Try to fix common JSX syntax issues
        const fixedFiles = await this.fixJSXSyntax(issue.fileErrors);
        
        if (fixedFiles.length > 0) {
          return {
            type: 'TYPESCRIPT_FIX',
            message: `Fixed JSX syntax issues in ${fixedFiles.length} files`,
            details: `Fixed files: ${fixedFiles.join(', ')}`,
            timestamp: new Date().toISOString()
          };
        }
      } catch (error) {
        this.log(`Failed to fix TypeScript issues: ${error.message}`, 'ERROR');
      }
    }
    
    return null;
  }

  async fixJSXSyntax(fileErrors) {
    const fixedFiles = [];
    
    for (const [file, errors] of Object.entries(fileErrors)) {
      try {
        const filePath = path.join(this.projectRoot, file);
        if (!fs.existsSync(filePath)) continue;
        
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        
        // Fix common import syntax issues
        content = content.replace(/import:\s*{([^}]+)},\s*from,\s*'([^']+)'/g, "import { $1 } from '$2'");
        content = content.replace(/const:\s*([^,]+),\s*([^:]+):\s*\.FC/g, "const $1: React.FC");
        
        // Fix unclosed JSX tags (basic heuristic)
        const openTags = content.match(/<([A-Z][a-zA-Z]*)/g) || [];
        const closeTags = content.match(/<\/([A-Z][a-zA-Z]*)/g) || [];
        
        if (openTags.length > closeTags.length) {
          // Add missing closing tags (simplified approach)
          const missingTags = openTags.length - closeTags.length;
          for (let i = 0; i < missingTags; i++) {
            content += '\n      </div>';
          }
          modified = true;
        }
        
        if (modified) {
          fs.writeFileSync(filePath, content);
          fixedFiles.push(file);
        }
        
      } catch (error) {
        this.log(`Failed to fix file ${file}: ${error.message}`, 'ERROR');
      }
    }
    
    return fixedFiles;
  {/* Removed stray closing brace */}

  async fixDependencies(issue) {
    if (issue.message.includes('corrupted packages') || issue.message.includes('Missing critical dependencies')) {
      try {
        this.log('Attempting to fix dependency issues...');
        
        // Remove corrupted node_modules
        const nodeModulesPath = path.join(this.projectRoot, 'node_modules');
        const packageLockPath = path.join(this.projectRoot, 'package-lock.json');
        
        if (fs.existsSync(nodeModulesPath)) {
          fs.rmSync(nodeModulesPath, { recursive: true, force: true });
          this.log('Removed corrupted node_modules');
        }
        
        if (fs.existsSync(packageLockPath)) {
          fs.unlinkSync(packageLockPath);
          this.log('Removed package-lock.json');
        }
        
        // Reinstall dependencies
        this.log('Reinstalling dependencies...');
        execSync('npm install', { cwd: this.projectRoot, stdio: 'pipe' });
        
        return {
          type: 'DEPENDENCIES_FIX',
          message: 'Reinstalled dependencies to fix corruption issues',
          details: 'Removed corrupted node_modules and package-lock.json, then ran npm install',
          timestamp: new Date().toISOString()
        };
        
      } catch (error) {
        this.log(`Failed to fix dependencies: ${error.message}`, 'ERROR');
      }
    }
    
    return null;
  {/* Removed stray closing brace */}

  async fixCorruptedFiles(issue) {
    if (issue.message.includes('corrupted source files')) {
      try {
        const fixedFiles = [];
        
        for (const corruptedFile of issue.corruptedFiles) {
          if (corruptedFile.issue === 'Malformed import/export syntax') {
            const fixed = await this.fixJSXSyntax({ [corruptedFile.file]: [] });
            if (fixed.length > 0) {
              fixedFiles.push(corruptedFile.file);
            }
          }
        }
        
        if (fixedFiles.length > 0) {
          return {
            type: 'FILE_INTEGRITY_FIX',
            message: `Fixed ${fixedFiles.length} corrupted source files`,
            details: `Fixed files: ${fixedFiles.join(', ')}`,
            timestamp: new Date().toISOString()
          };
        }
      } catch (error) {
        this.log(`Failed to fix corrupted files: ${error.message}`, 'ERROR');
      }
    }
    
    return null;
  {/* Removed stray closing brace */}

  async generateHealthReport(issues, fixes) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalIssues: issues.length,
        totalFixes: fixes.length,
        criticalIssues: issues.filter(i => i.severity === 'CRITICAL').length,
        highIssues: issues.filter(i => i.severity === 'HIGH').length,
        mediumIssues: issues.filter(i => i.severity === 'MEDIUM').length
      },
      issues: issues,
      fixes: fixes,
      recommendations: this.generateRecommendations(issues)
    };
    
    // Save detailed report
    fs.writeFileSync(this.issuesLog, JSON.stringify(report, null, 2));
    
    // Log summary
    this.log(`Health check completed: ${issues.length} issues found, ${fixes.length} auto-fixed`);
    this.log(`Critical: ${report.summary.criticalIssues}, High: ${report.summary.highIssues}, Medium: ${report.summary.mediumIssues}`);
    
    return report;
  {/* Removed stray closing brace */}

  generateRecommendations(issues) {
    const recommendations = [];
    
    if (issues.some(i => i.type === 'DEPENDENCIES' && i.severity === 'CRITICAL')) {
      recommendations.push('Run npm install to restore dependencies');
    }
    
    if (issues.some(i => i.type === 'TYPESCRIPT' && i.severity === 'HIGH')) {
      recommendations.push('Fix TypeScript compilation errors before building');
    }
    
    if (issues.some(i => i.type === 'PACKAGE_JSON' && i.severity === 'CRITICAL')) {
      recommendations.push('Restore package.json from version control');
    }
    
    if (issues.some(i => i.type === 'FILE_INTEGRITY' && i.severity === 'HIGH')) {
      recommendations.push('Review and fix corrupted source files');
    }
    
    if (recommendations.length === 0) {
      recommendations.push('Project appears healthy, no immediate action required');
    }
    
    return recommendations;
  {/* Removed stray closing brace */}

  async triggerRebuild() {
    try {
      this.log('Triggering project rebuild...');
      
      // Run type check again
      execSync('npm run type-check', { cwd: this.projectRoot, stdio: 'pipe' });
      this.log('TypeScript compilation successful after fixes');
      
      // Try building
      execSync('npm run build', { cwd: this.projectRoot, stdio: 'pipe' });
      this.log('Project build successful after fixes');
      
    } catch (error) {
      this.log(`Rebuild failed: ${error.message}`, 'WARN');
    }
  {/* Removed stray closing brace */}
  {/* Removed stray closing brace */}

// Main execution
async function main() {
  const monitor = new ProjectHealthMonitor();
  
  try {
    const result = await monitor.runHealthCheck();
    
    // Exit with appropriate code
    if (result.issues.some(i => i.severity === 'CRITICAL')) {
      process.exit(1);
    } else if (result.issues.length > 0) {
      process.exit(2);
    } else {
      process.exit(0);
    }
    
  } catch (error) {
    monitor.log(`Fatal error: ${error.message}`, 'ERROR');
    process.exit(1);
  }
  {/* Removed stray closing brace */}

// Run if called directly
if (require.main === module) {
  main();
  {/* Removed stray closing brace */}

module.exports = ProjectHealthMonitor;
