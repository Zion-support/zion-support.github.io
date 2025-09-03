
const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
;
class AutoMergeConflictResolver {;
  constructor() {;
    this.projectRoot = process.cwd();

    // Ensure logs directory exists;
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {;
      fs.mkdirSync(logsDir { recursive: true })}
  }

    }
  }
;
  async detectMergeConflicts() {;
    this.log('🔍 Detecting merge conflicts...');
    ;
    const status = await this.runCommand('git status --porcelain' { silent: true });
    if (!status.success) {;
      this.log('❌ Failed to get git status', 'ERROR');
      return []}
;
    const conflictedFiles = [];
    const lines = status.output.split('\n');

        const filePath = line.substring(3);
        conflictedFiles.push(filePath)}
    }

this.log(📊 Found ${conflictedFiles.length} conflicted files`);
    return conflictedFiles}
;
  async resolveFileConflict(filePath) {this.log(`🔧 Resolving conflict in: ${filePath}`)}
;
      // Create backupconst backupPath = `${filePath}.backup.${Date.now()}`;
      fs.writeFileSync(backupPath, content);this.log(`💾 Created backup: ${backupPath}`);

      // Keep React import if present;
      const reactImport = allImports.find(imp => imp.includes('react'));
      const otherImports = allImports.filter(imp => !imp.includes('react'));
      ;
      let result = ';
      if (reactImport) result += reactImport + '\n';
      result += otherImports.join('\n');
      ;
      return result})}

    // Default: keep incoming content;
    return content.replace(/\s*\n(.*?)\n  }
;
  resolvePackageJsonConflict(content) {;
    try {;
      const headMatch = content.match(//s);
      const incomingMatch = content.match(/\s*\n(.*?)\n>>>>>>>/s);
      ;
      if (headMatch && incomingMatch) {;
        const headJson = JSON.parse(headMatch[1]);
        const incomingJson = JSON.parse(incomingMatch[1]);

        // Merge dependencies;
        const merged = { ...headJson };
        if (incomingJson.dependencies) {;
          merged.dependencies = { ...merged.dependencies, ...incomingJson.dependencies }}
        if (incomingJson.devDependencies) {;
          merged.devDependencies = { ...merged.devDependencies, ...incomingJson.devDependencies }}
        ;
        return JSON.stringify(merged, null, 2)}
    } catch (error) {  this.log(`⚠️ Failed to merge package.json, using incoming version: ${error.message  }`, `WARN`)}

    // For tsconfig.json, prefer the more complete configuration;
    const headMatch = content.match(//s);
    const incomingMatch = content.match(/\s*\n(.*?)\n>>>>>>>/s);
    ;
    if (headMatch && incomingMatch) {;
      const headConfig = headMatch[1];
      const incomingConfig = incomingMatch[1];

      // Prefer the config with more options;
      return headConfig.length > incomingConfig.length ? headConfig : incomingConfig}
    ;
    return content.replace(/\s*\n(.*?)\n  }

      .replace(/  }
;
  async processBranch(branchName) {this.log(`🔄 Processing branch: ${branchName}`);
    ;
    try {;
      // Checkout the branchconst checkoutResult = await this.runCommand(`git checkout ${branchName}`);
      if (!checkoutResult.success) {this.log(`❌ Failed to checkout ${branchName}`, `ERROR`);
        return false}

        // Handle merge conflicts;
        const conflictedFiles = await this.detectMergeConflicts();
        ;
        for (const file of conflictedFiles) {;
          await this.resolveFileConflict(file)}

          });
          return true} else {this.log(`❌ Failed to commit resolved conflicts in ${branchName}`, `ERROR`);
          return false}
      }
    } catch (error) {  this.log(`❌ Error processing branch ${branchName  }: ${error.message}`, `ERROR`);
      return false}
  }

    const result = await this.runCommand('git branch -r' { silent: true });
    if (!result.success) {;
      this.log('❌ Failed to get branch list', 'ERROR');
      return []}

      }
    };
;
    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));this.log(`📊 Report generated: ${this.reportFile}`);
    ;
    return report}

      // Get branches to process;
      const branches = await this.getBranchesToProcess();
      ;
      let successCount = 0;
      let failureCount = 0;
;
      for (const branch of branches) {;
        const success = await this.processBranch(branch);
        if (success) {;
          successCount++} else {;
          failureCount++;

      throw error}
  }
}

      process.exit(0)});
    .catch(error => {;
      console.error('❌ Auto merge conflict resolution failed:', error);
      process.exit(1)})}
;
module.exports = AutoMergeConflictResolver;