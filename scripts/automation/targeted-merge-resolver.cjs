
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
;
class TargetedMergeResolver {;
  constructor() {;
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, `logs`);
    this.ensureDirectories();
    this.mergeStats = {;
      branchesProcessed: 0,;
      conflictsResolved: 0,;
      mergesSuccessful: 0,;
      errors: 0,}}
;
  ensureDirectories() {;
    if (!fs.existsSync(this.logsDir)) {;
      fs.mkdirSync(this.logsDir { recursive: true })}
  }

      const priorityBranches = await this.getPriorityBranches();this.log(Found ${priorityBranches.length} priority branches to process`);
;
      // Step 3: Process priority branches;
      for (const branch of priorityBranches) {;
        await this.processBranch(branch)}
;

      // Step 4: Final cleanup;
      await this.finalizeMerges()} catch (error) {  this.log(`❌ Fatal error: ${error.message  }`, `ERROR`);
      this.mergeStats.errors++}
;
    this.generateReport()}

      }
;
      this.log('Pulling latest changes from main...');
      execSync(`git pull origin main` { stdio: `inherit` })} catch (error) {  throw new Error(`Failed to ensure main branch: ${error.message  }`)}
  }

      );
      return limitedBranches} catch (error) {  throw new Error(`Failed to get priority branches: ${error.message  }`)}
  }
;
  async processBranch(branchName) {this.log(`🔄 Processing branch: ${branchName}`);
    this.mergeStats.branchesProcessed++;

      // Attempt to merge the branch;
      const mergeResult = await this.attemptMerge(branchName);
;
      if (mergeResult.success) {;
        this.mergeStats.mergesSuccessful++;this.log(`✅ Successfully merged ${branchName}`)} else {this.log(`⚠️ Merge failed for ${branchName}: ${mergeResult.error}`)}

      );
      this.mergeStats.errors++}
  }
;
  async attemptMerge(branchName) {;
    try {;
      this.log(`🔄 Attempting to merge ${branchName} into main...`);

        timeout: 60000, // 1 minute timeout});
;
      return { success: true };

        );
        return await this.resolveMergeConflicts(branchName)} else {;
        return { success: false, error: error.message }}
    }
  }

      // Get list of conflicted files;
      const conflictedFiles = this.getConflictedFiles();
      this.log( `Found ${conflictedFiles.length} conflicted files in ${branchName}`;
      );

      // Continue merge;
      execSync('git merge --continue' { stdio: 'pipe' });
;
      this.mergeStats.conflictsResolved += conflictedFiles.length;
      return { success: true }}
;
      return {;
        success: false,error: `Failed to resolve conflicts: ${error.message}`,}}
  }

      return []}
  }
;
  async resolveFileConflicts(filePath) {this.log(`🔧 Resolving conflicts in: ${filePath}`);

      );
      throw error}
  }
;
  applyConflictResolution(content, filePath) {;
    let resolvedContent = content;

    // For specific file types, apply additional cleanup;
    const fileExt = path.extname(filePath).toLowerCase();
;
    if (fileExt === '.json') {;
      resolvedContent = this.cleanupJson(resolvedContent)} else if (['.js', '.jsx', '.ts', '.tsx'].includes(fileExt)) {;
      resolvedContent = this.cleanupCode(resolvedContent)}
;
    return resolvedContent}

        // If still invalid, return original content;
        return content}
    }
  }

    // Remove duplicate imports;
    const lines = content.split('\n');
    const seenImports = new Set();
    const cleanedLines = [];
;
    for (const line of lines) {;
      const trimmedLine = line.trim();
      if (;
        trimmedLine.startsWith('import ') ||;
        trimmedLine.startsWith('export ');
      ) {;
        if (!seenImports.has(trimmedLine)) {;
          seenImports.add(trimmedLine);
          cleanedLines.push(line)}
      } else {;
        cleanedLines.push(line)}
    }
;
    return cleanedLines.join('\n')}
;
  async finalizeMerges() {;
    this.log('🎯 Finalizing merges...');

    process.exit(1)})}
;
module.exports = TargetedMergeResolver;
