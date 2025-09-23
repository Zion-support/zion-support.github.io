const fs = require('fs');
<<<<<<< HEAD
const { exec, execSync } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);
=======
const { exec } = require('child_process');
const path = require('path');
>>>>>>> cursor/automate-test-improve-and-merge-code-85f4

class CompleteImprovementSuite {
  constructor() {
    this.reportsDir = './automation-reports';
<<<<<<< HEAD
    this.projectRoot = process.cwd();
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-85f4
    this.stats = {
      "mergeConflicts": { resolved: 0, "failed": 0 },
      "syntaxErrors": { fixed: 0, "failed": 0 },
      "prsProcessed": { merged: 0, "failed": 0 },
      "improvements": { applied: 0, "failed": 0 }
    };
  }

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { "recursive": true });
    }
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  async runCommand(command, description, timeout = 60000) {
    this.log(`🚀 Starting: ${description}`);
    try {
      const result = await new Promise((resolve, reject) => {
        const child = exec(command, { timeout }, (error, stdout, stderr) => {
          if (error) {
            reject(error);
          } else {
            resolve({ stdout, stderr });
          }
        });
      });
      this.log(`✅ Success: ${description}`);
      return result;
    } catch (error) {
      this.log(`❌ Failed: ${description} - ${error.message}`);
      throw error;
    }
  }

  async run() {
    this.log('🚀 Starting Complete Improvement Suite...');
    this.ensureDirectories();

    try {
      // Phase 1: Fix merge conflicts
      await this.fixMergeConflicts();
      
      // Phase 2: Fix syntax errors
      await this.fixSyntaxErrors();
      
      // Phase 3: Process PRs
      await this.processPRs();
      
      // Phase 4: Apply improvements
      await this.applyImprovements();
      
      // Generate final report
      await this.generateReport();
      
      this.log('🎉 Complete Improvement Suite finished successfully!');
    } catch (error) {
      this.log(`❌ Complete Improvement Suite failed: ${error.message}`);
      throw error;
    }
  }

  async fixMergeConflicts() {
    this.log('🔧 Phase 1: Fixing merge conflicts...');
    
    try {
      // Find files with merge conflicts
      const files = await this.findFilesWithConflicts();
      
      for (const file of files) {
        try {
          await this.resolveFileConflicts(file);
          this.stats.mergeConflicts.resolved++;
        } catch (error) {
          this.log(`❌ Failed to resolve conflicts in ${file}: ${error.message}`);
          this.stats.mergeConflicts.failed++;
        }
      }
      
      this.log(`✅ Resolved ${this.stats.mergeConflicts.resolved} merge conflicts`);
    } catch (error) {
      this.log(`❌ Failed to fix merge conflicts: ${error.message}`);
      throw error;
    }
  }

  async findFilesWithConflicts() {
    try {
      const result = await this.runCommand('git diff --name-only --diff-filter=U', 'Find files with merge conflicts');
      return result.stdout.trim().split('\n').filter(file => file.length > 0);
    } catch (error) {
      // If no conflicts found, return empty array
      return [];
    }
  }

  hasMergeConflicts(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
<<<<<<< HEAD
      return (
        content.includes('<<<<<<< HEAD') ||
        content.includes('=======') ||
        content.includes('>>>>>>> ')
      );
=======
      return content.includes('>>>>>>> ');
>>>>>>> cursor/automate-test-improve-and-merge-code-85f4
    } catch (error) {
      return false;
    }
  }

  resolveFileConflicts(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;

      // Remove merge conflict markers and keep HEAD version
      content = content.replace(
<<<<<<< HEAD
        /<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [a-f0-9]+/gs,
=======
        /<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+\n/g,
>>>>>>> cursor/automate-test-improve-and-merge-code-85f4
        '$1'
      );

      // Clean up any remaining markers
      content = content.replace(/>>>>>>> [^\n]+\n/g, '');

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.log(`✅ Resolved conflicts in: ${path.relative(process.cwd(), filePath)}`);
      }
    } catch (error) {
      this.log(`❌ Failed to resolve conflicts in ${filePath}: ${error.message}`);
      throw error;
    }
  }

  async fixSyntaxErrors() {
    this.log('🔧 Phase 2: Fixing syntax errors...');
    
    try {
      // Run linting fixes
      await this.runCommand('npm run lint:fix', 'Fix linting errors');
      this.stats.syntaxErrors.fixed++;
    } catch (error) {
      this.log(`⚠️ Linting fixes failed: ${error.message}`);
      this.stats.syntaxErrors.failed++;
    }

    try {
      // Run TypeScript checks
      await this.runCommand('npm run type-check', 'TypeScript type checking');
    } catch (error) {
      this.log(`⚠️ TypeScript checks failed: ${error.message}`);
    }
  }

  async processPRs() {
    this.log('🔧 Phase 3: Processing PRs...');
    
    try {
      // Check for open PRs
      const result = await this.runCommand('git branch -r', 'List remote branches');
      const branches = result.stdout.trim().split('\n');
      
      // Process each branch
      for (const branch of branches) {
        if (branch.includes('origin/') && !branch.includes('HEAD')) {
          try {
            await this.processBranch(branch.trim());
            this.stats.prsProcessed.merged++;
          } catch (error) {
            this.log(`❌ Failed to process branch ${branch}: ${error.message}`);
            this.stats.prsProcessed.failed++;
          }
        }
      }
    } catch (error) {
      this.log(`❌ Failed to process PRs: ${error.message}`);
      throw error;
    }
  }

  async processBranch(branch) {
    const branchName = branch.replace('origin/', '');
    this.log(`🔄 Processing branch: ${branchName}`);
    
    try {
      // Merge branch into main
      await this.runCommand(`git merge origin/${branchName}`, `Merge ${branchName}`);
      this.log(`✅ Successfully merged ${branchName}`);
    } catch (error) {
      this.log(`❌ Failed to merge ${branchName}: ${error.message}`);
      throw error;
    }
  }

  async applyImprovements() {
    this.log('🔧 Phase 4: Applying improvements...');
    
    try {
      // Run build
      await this.runCommand('npm run build', 'Build application');
      
      // Run tests
      await this.runCommand('npm run test:smoke', 'Run smoke tests');
      
      this.stats.improvements.applied++;
      this.log('✅ Improvements applied successfully');
    } catch (error) {
      this.log(`❌ Failed to apply improvements: ${error.message}`);
      this.stats.improvements.failed++;
    }
  }

  async generateReport() {
    this.log('📊 Generating improvement report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      stats: this.stats,
      summary: {
        totalConflicts: this.stats.mergeConflicts.resolved + this.stats.mergeConflicts.failed,
        totalSyntaxErrors: this.stats.syntaxErrors.fixed + this.stats.syntaxErrors.failed,
        totalPRs: this.stats.prsProcessed.merged + this.stats.prsProcessed.failed,
        totalImprovements: this.stats.improvements.applied + this.stats.improvements.failed
      }
    };

<<<<<<< HEAD
    fs.writeFileSync(
      path.join(this.reportsDir, 'complete-improvement-report.json'),
      JSON.stringify(finalReport, null, 2)
    );

    this.log('🎉 Complete Improvement Suite Finished');
    this.log("📊 Summary:");
    this.log(
      `   - Merge conflicts resolved: ${finalReport.summary.totalMergeConflictsResolved}`
    );
    this.log(
      `   - Syntax errors "fixed": ${finalReport.summary.totalSyntaxErrorsFixed}`
    );
    this.log(
      `   - Improvements "applied": ${finalReport.summary.totalImprovementsApplied}`
    );
    this.log(`   - Push "successful": ${finalReport.summary.pushSuccessful}`);
  }
}

// Run the complete improvement suite
const suite = new CompleteImprovementSuite();
suite.run().catch(console.error);
=======
    const reportPath = path.join(this.reportsDir, 'complete-improvement-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 Report saved to: ${reportPath}`);
  }
}

// Run the suite if called directly
if (require.main === module) {
  const suite = new CompleteImprovementSuite();
  suite.run().catch(console.error);
}

module.exports = CompleteImprovementSuite;
>>>>>>> cursor/automate-test-improve-and-merge-code-85f4
