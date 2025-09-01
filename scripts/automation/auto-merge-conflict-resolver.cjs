#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class AutoMergeConflictResolver {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'automation/logs/auto-merge-resolver.log');
    this.reportFile = path.join(this.projectRoot, 'auto-merge-resolver-report.json');
    this.conflictsResolved = [];
    this.branchesProcessed = [];
    this.startTime = Date.now();
    
    // Ensure logs directory exists
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    // Write to log file
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async runCommand(command, options = {}) {
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: options.silent ? 'pipe' : 'inherit',
        ...options
      });
      return { success: true, output: result };
    } catch (error) {
      return { success: false, error: error.message, output: error.stdout || error.stderr };
    }
  }

  async detectMergeConflicts() {
    this.log('🔍 Detecting merge conflicts...');
    
    const status = await this.runCommand('git status --porcelain', { silent: true });
    if (!status.success) {
      this.log('❌ Failed to get git status', 'ERROR');
      return [];
    }

    const conflictedFiles = [];
    const lines = status.output.split('\n');
    
    for (const line of lines) {
      if (line.includes('UU ') || line.includes('AA ') || line.includes('DD ')) {
        const filePath = line.substring(3);
        conflictedFiles.push(filePath);
      }
    }

    this.log(`📊 Found ${conflictedFiles.length} conflicted files`);
    return conflictedFiles;
  }

  async resolveFileConflict(filePath) {
    this.log(`🔧 Resolving conflict in: ${filePath}`);
    
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      if (!content.includes('<<<<<<<')) {
        this.log(`✅ No conflict markers found in ${filePath}`);
        return { success: true, action: 'no_conflict' };
      }

      // Create backup
      const backupPath = `${filePath}.backup.${Date.now()}`;
      fs.writeFileSync(backupPath, content);
      this.log(`💾 Created backup: ${backupPath}`);

      // Resolve common conflict patterns
      let resolvedContent = content;

      // Pattern 1: Import conflicts
      resolvedContent = this.resolveImportConflicts(resolvedContent, filePath);
      
      // Pattern 2: Component conflicts
      resolvedContent = this.resolveComponentConflicts(resolvedContent, filePath);
      
      // Pattern 3: Configuration conflicts
      resolvedContent = this.resolveConfigConflicts(resolvedContent, filePath);

      // Remove any remaining conflict markers
      resolvedContent = this.removeConflictMarkers(resolvedContent);

      // Write resolved content
      fs.writeFileSync(filePath, resolvedContent);
      
      this.conflictsResolved.push({
        file: filePath,
        timestamp: new Date().toISOString(),
        action: 'resolved'
      });

      this.log(`✅ Resolved conflict in ${filePath}`);
      return { success: true, action: 'resolved' };

    } catch (error) {
      this.log(`❌ Failed to resolve conflict in ${filePath}: ${error.message}`, 'ERROR');
      return { success: false, error: error.message };
    }
  }

  resolveImportConflicts(content, filePath) {
    // Handle import conflicts by keeping the most complete version
    const importPattern = /<<<<<<< HEAD\s*\n(.*?)\n=======\s*\n(.*?)\n>>>>>>> .*?\n/g;
    
    return content.replace(importPattern, (match, headContent, incomingContent) => {
      const headImports = headContent.match(/import.*?from.*?['"]/g) || [];
      const incomingImports = incomingContent.match(/import.*?from.*?['"]/g) || [];
      
      // Combine unique imports
      const allImports = [...new Set([...headImports, ...incomingImports])];
      
      // Keep React import if present
      const reactImport = allImports.find(imp => imp.includes('react'));
      const otherImports = allImports.filter(imp => !imp.includes('react'));
      
      let result = '';
      if (reactImport) result += reactImport + '\n';
      result += otherImports.join('\n');
      
      return result;
    });
  }

  resolveComponentConflicts(content, filePath) {
    // Handle component conflicts by keeping the most recent version
    const componentPattern = /<<<<<<< HEAD\s*\n(.*?)\n=======\s*\n(.*?)\n>>>>>>> .*?\n/g;
    
    return content.replace(componentPattern, (match, headContent, incomingContent) => {
      // Prefer incoming content for components (usually more recent)
      return incomingContent.trim();
    });
  }

  resolveConfigConflicts(content, filePath) {
    // Handle configuration conflicts by merging intelligently
    if (filePath.includes('package.json')) {
      return this.resolvePackageJsonConflict(content);
    }
    
    if (filePath.includes('tsconfig.json')) {
      return this.resolveTsConfigConflict(content);
    }
    
    // Default: keep incoming content
    return content.replace(/<<<<<<< HEAD\s*\n(.*?)\n=======\s*\n(.*?)\n>>>>>>> .*?\n/g, '$2');
  }

  resolvePackageJsonConflict(content) {
    try {
      const headMatch = content.match(/<<<<<<< HEAD\s*\n(.*?)\n=======/s);
      const incomingMatch = content.match(/=======\s*\n(.*?)\n>>>>>>>/s);
      
      if (headMatch && incomingMatch) {
        const headJson = JSON.parse(headMatch[1]);
        const incomingJson = JSON.parse(incomingMatch[1]);
        
        // Merge dependencies
        const merged = { ...headJson };
        if (incomingJson.dependencies) {
          merged.dependencies = { ...merged.dependencies, ...incomingJson.dependencies };
        }
        if (incomingJson.devDependencies) {
          merged.devDependencies = { ...merged.devDependencies, ...incomingJson.devDependencies };
        }
        
        return JSON.stringify(merged, null, 2);
      }
    } catch (error) {
      this.log(`⚠️ Failed to merge package.json, using incoming version: ${error.message}`, 'WARN');
    }
    
    // Fallback: remove conflict markers
    return content.replace(/<<<<<<< HEAD\s*\n(.*?)\n=======\s*\n(.*?)\n>>>>>>> .*?\n/g, '$2');
  }

  resolveTsConfigConflict(content) {
    // For tsconfig.json, prefer the more complete configuration
    const headMatch = content.match(/<<<<<<< HEAD\s*\n(.*?)\n=======/s);
    const incomingMatch = content.match(/=======\s*\n(.*?)\n>>>>>>>/s);
    
    if (headMatch && incomingMatch) {
      const headConfig = headMatch[1];
      const incomingConfig = incomingMatch[1];
      
      // Prefer the config with more options
      return headConfig.length > incomingConfig.length ? headConfig : incomingConfig;
    }
    
    return content.replace(/<<<<<<< HEAD\s*\n(.*?)\n=======\s*\n(.*?)\n>>>>>>> .*?\n/g, '$2');
  }

  removeConflictMarkers(content) {
    // Remove any remaining conflict markers
    return content
      .replace(/<<<<<<< HEAD\s*\n/g, '')
      .replace(/=======\s*\n/g, '')
      .replace(/>>>>>>> .*?\n/g, '');
  }

  async processBranch(branchName) {
    this.log(`🔄 Processing branch: ${branchName}`);
    
    try {
      // Checkout the branch
      const checkoutResult = await this.runCommand(`git checkout ${branchName}`);
      if (!checkoutResult.success) {
        this.log(`❌ Failed to checkout ${branchName}`, 'ERROR');
        return false;
      }

      // Try to merge with main
      const mergeResult = await this.runCommand('git merge main');
      
      if (mergeResult.success) {
        this.log(`✅ Successfully merged ${branchName} with main`);
        this.branchesProcessed.push({
          branch: branchName,
          status: 'merged',
          timestamp: new Date().toISOString()
        });
        return true;
      } else {
        // Handle merge conflicts
        const conflictedFiles = await this.detectMergeConflicts();
        
        for (const file of conflictedFiles) {
          await this.resolveFileConflict(file);
        }

        // Add and commit resolved conflicts
        await this.runCommand('git add .');
        const commitResult = await this.runCommand(`git commit -m "Auto-resolve merge conflicts in ${branchName}"`);
        
        if (commitResult.success) {
          this.log(`✅ Successfully resolved conflicts in ${branchName}`);
          this.branchesProcessed.push({
            branch: branchName,
            status: 'conflicts_resolved',
            timestamp: new Date().toISOString()
          });
          return true;
        } else {
          this.log(`❌ Failed to commit resolved conflicts in ${branchName}`, 'ERROR');
          return false;
        }
      }
    } catch (error) {
      this.log(`❌ Error processing branch ${branchName}: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async getBranchesToProcess() {
    this.log('📋 Getting list of branches to process...');
    
    const result = await this.runCommand('git branch -r', { silent: true });
    if (!result.success) {
      this.log('❌ Failed to get branch list', 'ERROR');
      return [];
    }

    const branches = result.output
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.startsWith('origin/cursor/'))
      .map(line => line.replace('origin/', ''));

    this.log(`📊 Found ${branches.length} cursor branches to process`);
    return branches;
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      conflictsResolved: this.conflictsResolved,
      branchesProcessed: this.branchesProcessed,
      summary: {
        totalConflicts: this.conflictsResolved.length,
        totalBranches: this.branchesProcessed.length,
        successfulBranches: this.branchesProcessed.filter(b => b.status === 'merged' || b.status === 'conflicts_resolved').length,
        failedBranches: this.branchesProcessed.filter(b => b.status === 'failed').length
      }
    };

    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    this.log(`📊 Report generated: ${this.reportFile}`);
    
    return report;
  }

  async run() {
    this.log('🚀 Starting Auto Merge Conflict Resolver');
    this.log('==========================================');

    try {
      // Ensure we're on main branch
      await this.runCommand('git checkout main');
      await this.runCommand('git pull origin main');

      // Get branches to process
      const branches = await this.getBranchesToProcess();
      
      let successCount = 0;
      let failureCount = 0;

      for (const branch of branches) {
        const success = await this.processBranch(branch);
        if (success) {
          successCount++;
        } else {
          failureCount++;
          this.branchesProcessed.push({
            branch: branch,
            status: 'failed',
            timestamp: new Date().toISOString()
          });
        }
      }

      // Generate final report
      const report = await this.generateReport();

      this.log('🎉 Auto Merge Conflict Resolver completed!');
      this.log(`📊 Summary:`);
      this.log(`   - Branches processed: ${report.summary.totalBranches}`);
      this.log(`   - Successful merges: ${report.summary.successfulBranches}`);
      this.log(`   - Failed merges: ${report.summary.failedBranches}`);
      this.log(`   - Conflicts resolved: ${report.summary.totalConflicts}`);
      this.log(`   - Duration: ${Math.round(report.duration / 1000)}s`);

      return report;

    } catch (error) {
      this.log(`❌ Fatal error: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run the resolver if called directly
if (require.main === module) {
  const resolver = new AutoMergeConflictResolver();
  resolver.run()
    .then(report => {
      console.log('✅ Auto merge conflict resolution completed successfully');
      process.exit(0);
    })
    .catch(error => {
      console.error('❌ Auto merge conflict resolution failed:', error);
      process.exit(1);
    });
}

module.exports = AutoMergeConflictResolver;