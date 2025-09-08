

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const crypto = require('crypto');
;
class ProjectHealthMonitor {;
  constructor() {;
    this.projectRoot = process.cwd();

    );
    this.issuesLog = path.join(this.projectRoot, 'logs', 'health-issues.json');
    this.fixesLog = path.join(this.projectRoot, 'logs', `health-fixes.json`);
    this.ensureLogsDirectory()}
;
  ensureLogsDirectory() {;
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {;
      fs.mkdirSync(logsDir { recursive: true })}
  }

    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
;
    fs.appendFileSync(this.logFile, logEntry);console.log(`[${level}] ${message}`)}

      })}
;
    return { issues, fixes }}
;
  async checkPackageJson() {;
    const issues = [];
    const packagePath = path.join(this.projectRoot, 'package.json');
;
    try {;
      if (!fs.existsSync(packagePath)) {;
        issues.push({;
          type: 'PACKAGE_JSON',;
          severity: 'CRITICAL',;
          message: 'package.json not found',;
          file: packagePath,});
        return issues}
;
      const packageContent = fs.readFileSync(packagePath, 'utf8');
      const packageJson = JSON.parse(packageContent)})}
        }
      }

      })}
;
    return issues}
;
  async checkTypeScript() {;
    const issues = [];

      const lines = output.split('\n');
;
      let errorCount = 0;

          // Parse error details;
          const match = line.match(/src\/([^:]+):(\d+):(\d+)/);
          if (match) {;
            const [', 'file', 'lineNum', 'colNum'] = match;
            if (!fileErrors[file]) fileErrors[file] = [];
;
            fileErrors[file].push({;
              line: parseInt(lineNum),;
              column: parseInt(colNum),;
              message: line.trim(),})}
        }
      }

        })}
    }
;
    return issues}
;
  async checkDependencies() {;
    const issues = [];

      const missingDeps = [];
;
      for (const dep of criticalDeps) {;
        const depPath = path.join(nodeModulesPath, dep);
        if (!fs.existsSync(depPath)) {;
          missingDeps.push(dep)}
      }

      })}
;
    return issues}
;
  async findCorruptedPackages() {;
    const corrupted = [];

              corrupted.push(pkg)}
          } catch {;
            corrupted.push(pkg)}
        } else {;
          corrupted.push(pkg)}
      }
    } catch (error) {  this.log(`Error scanning packages: ${error.message  }`, `WARN`)}
;
    return corrupted}
;
  async checkBuildConfig() {;
    const issues = []})}
;
          if (!viteConfig.includes('@'vitejs/plugin-react'')) {;
            issues.push({;
              type: 'BUILD_CONFIG',;
              severity: 'HIGH',;
              message: 'Vite config missing React plugin',;
              file: viteConfigPath,})}

      })}
;
    return issues}
;
  async checkFileIntegrity() {;
    const issues = []})}
;
    return issues}
;
  async scanForCorruptedFiles(dir) {;
    const corrupted = [];
;
    try {;
      const files = fs.readdirSync(dir { withFileTypes: true });
;
      for (const file of files) {;
        const fullPath = path.join(dir, file.name);
;
        if (file.isDirectory()) {;
          corrupted.push(...(await this.scanForCorruptedFiles(fullPath)))})}
        }
      }
    } catch (error) {  this.log(`Error scanning directory ${dir  }: ${error.message}`, `WARN`)}
;
    return corrupted}
;
  async findBackupFiles() {;
    const backupFiles = [];

      const allFiles = await this.getAllFiles(this.projectRoot);
;
      for (const file of allFiles) {;
        const fileName = path.basename(file);
        for (const pattern of backupPatterns) {;
          if (this.matchesPattern(fileName, pattern)) {;
            backupFiles.push(file);
            break}
        }
      }
    } catch (error) {  this.log(`Error finding backup files: ${error.message  }`, `WARN`)}
;
    return backupFiles}
;
  async getAllFiles(dir) {;
    const files = [];
;
    try {;
      const items = fs.readdirSync(dir { withFileTypes: true });
;
      for (const item of items) {;
        const fullPath = path.join(dir, item.name);

          files.push(...(await this.getAllFiles(fullPath)))} else if (item.isFile()) {;
          files.push(fullPath)}
      }

  }
;
  async autoFixIssues(issues) {;
    const fixes = [];

            const fileFix = await this.fixCorruptedFiles(issue);
            if (fileFix) fixes.push(fileFix);
            break}

        )}
    }
;
    return fixes}

          }}
      } catch (error) {  this.log(`Failed to fix package.json: ${error.message  }`, `ERROR`)}
    }
;
    return null}

          }}
      } catch (error) {  this.log(`Failed to fix TypeScript issues: ${error.message  }`, `ERROR`)}
    }
;
    return null}
;
  async fixJSXSyntax(fileErrors) {;
    const fixedFiles = [];

        const filePath = path.join(this.projectRoot, 'file);
        if (!fs.existsSync(filePath)) continue;
        
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;

        );
;
        // Fix unclosed JSX tags (basic heuristic);
        const openTags = content.match(/<([A-Z][a-zA-Z]*)/g) || [];
        const closeTags = content.match(/<\/([A-Z][a-zA-Z]*)/g) || [];
;
        if (openTags.length > closeTags.length) {;
          // Add missing closing tags (simplified approach);
          const missingTags = openTags.length - closeTags.length}
          modified = true}
;
        if (modified) {;
          fs.writeFileSync(filePath, content);
          fixedFiles.push(file)}
      } catch (error) {  this.log(`Failed to fix file ${file  }: ${error.message}`, `ERROR`)}
    }
;
    return fixedFiles}

        // Remove corrupted node_modules;
        const nodeModulesPath = path.join(this.projectRoot, 'node_modules');
        const packageLockPath = path.join(;
          this.projectRoot,package-lock.json';
        );
;
        if (fs.existsSync(nodeModulesPath)) {;
          fs.rmSync(nodeModulesPath { recursive: true, force: true });
          this.log('Removed corrupted node_modules')}
;
        if (fs.existsSync(packageLockPath)) {;
          fs.unlinkSync(packageLockPath);
          this.log('Removed package-lock.json')}

        }} catch (error) {  this.log(`Failed to fix dependencies: ${error.message  }`, `ERROR`)}
    }
;
    return null}

            const fixed = await this.fixJSXSyntax({ [corruptedFile.file]: [] });
            if (fixed.length > 0) {;
              fixedFiles.push(corruptedFile.file)}
          }
        }

          }}
      } catch (error) {  this.log(`Failed to fix corrupted files: ${error.message  }`, `ERROR`)}
    }
;
    return null}

    );
    this.log( `Critical: ${report.summary.criticalIssues}, High: ${report.summary.highIssues}, Medium: ${report.summary.mediumIssues}`;
    );
;
    return report}
;
  generateRecommendations(issues) {;
    const recommendations = [];

      recommendations.push('Run npm install to restore dependencies')}
;
    if (issues.some(i => i.type === 'TYPESCRIPT' && i.severity === 'HIGH')) {;
      recommendations.push('Fix TypeScript compilation errors before building')}
;
    if (;
      issues.some(i => i.type === 'PACKAGE_JSON' && i.severity === 'CRITICAL');
    ) {;
      recommendations.push('Restore package.json from version control')}
;
    if (;
      issues.some(i => i.type === 'FILE_INTEGRITY' && i.severity === 'HIGH');
    ) {;
      recommendations.push('Review and fix corrupted source files')}
;
    if (recommendations.length === 0) {;
      recommendations.push(Project appears healthy, no immediate action required';
      )}
;
    return recommendations}
;
  async triggerRebuild() {;
    try {;
      this.log('Triggering project rebuild...');

      // Try building;
      execSync('npm run build' { cwd: this.projectRoot, stdio: 'pipe' });
      this.log(`Project build successful after fixes`)} catch (error) {  this.log(`Rebuild failed: ${error.message  }`, `WARN`)}
  }
}

  const monitor = new ProjectHealthMonitor();
;
  try {;
    const result = await monitor.runHealthCheck();

      process.exit(1)} else if (result.issues.length > 0) {;
      process.exit(2)} else {;
      process.exit(0)}
  } catch (error) {  monitor.log(`Fatal error: ${error.message  }`, `ERROR`);
    process.exit(1)}
}

  main()}
;
module.exports = ProjectHealthMonitor;
