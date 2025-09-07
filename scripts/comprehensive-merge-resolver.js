#!/usr/bin/env node
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
class ComprehensiveMergeResolver {
  constructor() {
    this.projectRoot = path.join(__dirname, '..');
    this.resolvedConflicts = [];
    this.mergedBranches = [];
    this.errors = [];
    this.startTime = Date.now();
  }
  log(message) {
    console.log(`🔧 ${message}`);
  }
  error(message) {
    console.error(`❌ ${message}`);
  }
  success(message) {
    console.log(`✅ ${message}`);
  }
  async run() {
    this.log('Starting comprehensive merge conflict resolution...');
    try {
      await this.checkCurrentStatus();
      await this.resolveAllMergeConflicts();
      await this.checkForOpenPRs();
      await this.mergeOpenBranches();
      await this.cleanupTempFiles();
      await this.generateReport();
      this.success('Comprehensive merge resolution completed!');
    } catch (error) {
      this.error(`Merge resolution failed: ${error.message}`);
      this.errors.push(error.message);
    }
  }
  async checkCurrentStatus() {
    this.log('Checking current git status...');
    try {
      const status = execSync('git status --porcelain', {
        cwd: this.projectRoot,
        encoding: 'utf8'
      }).trim();
      if (status) {
        this.log('Working directory has uncommitted changes');
        console.log(status);
      } else {
        this.log('Working directory is clean');
      }
      const branch = execSync('git branch --show-current', {
        cwd: this.projectRoot,
        encoding: 'utf8'
      }).trim();
      this.log(`Current branch: ${branch}`);
    } catch (error) {
      this.error(`Status check failed: ${error.message}`);
      throw error;
    }
  }
  async resolveAllMergeConflicts() {
    this.log('Resolving all merge conflicts...');
    try {
      // Find all files with merge conflicts
      const conflictFiles = execSync('grep -r "" . --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" --include="*.json" --include="*.md" -l || true', {
        cwd: this.projectRoot,
        encoding: 'utf8'
      }).trim().split('\n').filter(f => f);
      if (conflictFiles.length === 0) {
        this.log('No merge conflicts found');
        return;
      }
      this.log(`Found ${conflictFiles.length} files with merge conflicts`);
      for (const file of conflictFiles) {
        try {
          await this.resolveFileConflicts(file);
          this.resolvedConflicts.push(file);
        } catch (error) {
          this.error(`Failed to resolve conflicts in ${file}: ${error.message}`);
          this.errors.push(`Failed to resolve conflicts in ${file}: ${error.message}`);
        }
      }
    } catch (error) {
      this.error(`Conflict resolution failed: ${error.message}`);
      throw error;
    }
  }
  async resolveFileConflicts(filePath) {
    this.log(`Resolving conflicts in ${filePath}`);
    const content = fs.readFileSync(filePath, 'utf8');
    // Remove merge conflict markers and keep the HEAD version
    let fixed = content
      .replace(/<<<<<<< HEAD[\s\S]*?
        // Extract the HEAD version (before =======)
        const headMatch = match.match(/([\s\S]*?)
        // Extract the HEAD version (when there's no =======)
        const headMatch = match.match(/<<<<<<< HEAD([\s\S]*?)>>>>>>>/);
        return headMatch ? headMatch[1].trim() : '';
      })
      .replace(/\n\n\n+/g, '\n\n')
      .replace(/^\s*\n/gm, '\n')
      .trim();
    // Additional cleanup
    fixed = fixed
      .replace(/\s+$/gm, '') // Remove trailing whitespace
      .replace(/\n{3,}/g, '\n\n') // Replace multiple newlines with double newlines
      .trim();
    fs.writeFileSync(filePath, fixed + '\n');
    this.success(`Resolved conflicts in ${filePath}`);
  }
  async checkForOpenPRs() {
    this.log('Checking for open PRs...');
    try {
      // Get all remote branches
      const branches = execSync('git branch -r', {
        cwd: this.projectRoot,
        encoding: 'utf8'
      }).trim().split('\n')
        .filter(branch => branch.includes('origin/cursor/'))
        .map(branch => branch.trim().replace('origin/', ''));
      this.log(`Found ${branches.length} cursor branches`);
      // Check which branches are not merged into main
      const unmergedBranches = [];
      for (const branch of branches) {
        try {
          const isMerged = execSync(`git branch -r --merged main | grep "origin/${branch}" || true`, {
            cwd: this.projectRoot,
            encoding: 'utf8'
          }).trim();
          if (!isMerged) {
            unmergedBranches.push(branch);
          }
        } catch (error) {
          this.log(`Could not check merge status for ${branch}`);
        }
      }
      this.log(`Found ${unmergedBranches.length} unmerged branches`);
      return unmergedBranches;
    } catch (error) {
      this.error(`PR check failed: ${error.message}`);
      return [];
    }
  }
  async mergeOpenBranches() {
    this.log('Attempting to merge open branches...');
    try {
      const unmergedBranches = await this.checkForOpenPRs();
      for (const branch of unmergedBranches.slice(0, 10)) { // Limit to first 10 branches
        try {
          this.log(`Attempting to merge ${branch}...`);
          // Try to merge the branch
          execSync(`git merge origin/${branch} --no-ff -m "Merge ${branch} into main"`, {
            cwd: this.projectRoot,
            stdio: 'inherit'
          });
          this.mergedBranches.push(branch);
          this.success(`Successfully merged ${branch}`);
        } catch (error) {
          this.log(`Failed to merge ${branch}: ${error.message}`);
          // Try to resolve conflicts automatically
          try {
            await this.resolveAllMergeConflicts();
            // Add resolved files
            execSync('git add .', { cwd: this.projectRoot });
            // Commit the merge
            execSync(`git commit -m "Resolve conflicts and merge ${branch}"`, {
              cwd: this.projectRoot
            });
            this.mergedBranches.push(`${branch} (with conflict resolution)`);
            this.success(`Successfully merged ${branch} with conflict resolution`);
          } catch (resolveError) {
            this.error(`Failed to resolve conflicts for ${branch}: ${resolveError.message}`);
            this.errors.push(`Failed to merge ${branch}: ${resolveError.message}`);
            // Abort the merge
            try {
              execSync('git merge --abort', { cwd: this.projectRoot });
            } catch (abortError) {
              this.log(`Could not abort merge for ${branch}`);
            }
          }
        }
      }
    } catch (error) {
      this.error(`Branch merging failed: ${error.message}`);
      throw error;
    }
  }
  async cleanupTempFiles() {
    this.log('Cleaning up temporary files...');
    const tempFiles = [
      '.tsbuildinfo',
      'tsconfig.tsbuildinfo',
      'temp_conflicts',
      '*.backup.*',
      '*.tmp',
      '*.temp'
    ];
    for (const pattern of tempFiles) {
      try {
        execSync(`find . -name "${pattern}" -type f -delete 2>/dev/null || true`, {
          cwd: this.projectRoot
        });
        execSync(`find . -name "${pattern}" -type d -exec rm -rf {} + 2>/dev/null || true`, {
          cwd: this.projectRoot
        });
      } catch (error) {
        this.log(`Could not clean ${pattern}: ${error.message}`);
      }
    }
  }
  async generateReport() {
    this.log('Generating comprehensive merge report...');
    const endTime = Date.now();
    const duration = endTime - this.startTime;
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration}ms`,
      resolvedConflicts: this.resolvedConflicts,
      mergedBranches: this.mergedBranches,
      errors: this.errors,
      summary: {
        totalConflictsResolved: this.resolvedConflicts.length,
        totalBranchesMerged: this.mergedBranches.length,
        totalErrors: this.errors.length,
        success: this.errors.length === 0,
        duration: duration
      }
    };
    const reportPath = path.join(this.projectRoot, 'comprehensive-merge-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.success(`Report saved to ${reportPath}`);
    // Also create a markdown summary
    const markdownReport = `# Comprehensive Merge Resolution Report
## Summary
- **Duration**: ${duration}ms
- **Conflicts Resolved**: ${this.resolvedConflicts.length}
- **Branches Merged**: ${this.mergedBranches.length}
- **Errors**: ${this.errors.length}
- **Status**: ${this.errors.length === 0 ? '✅ Success' : '❌ Issues Found'}
## Conflicts Resolved
${this.resolvedConflicts.map(file => `- ${file}`).join('\n')}
## Branches Merged
${this.mergedBranches.map(branch => `- ${branch}`).join('\n')}
## Errors Encountered
${this.errors.length > 0 ? this.errors.map(err => `- ${err}`).join('\n') : 'None'}
## Next Steps
1. Review the merged changes
2. Run tests to ensure everything works
3. Push changes to remote repository
4. Clean up any remaining branches
Generated at: ${new Date().toISOString()}
`;
    const markdownPath = path.join(this.projectRoot, 'MERGE_RESOLUTION_REPORT.md');
    fs.writeFileSync(markdownPath, markdownReport);
    this.success(`Markdown report saved to ${markdownPath}`);
  }
}
// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const resolver = new ComprehensiveMergeResolver();
  resolver.run().catch(console.error);
}
export default ComprehensiveMergeResolver;
