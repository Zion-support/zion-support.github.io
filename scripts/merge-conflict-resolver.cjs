#!/usr/bin/env node

<<<<<<< HEAD
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// ANSI color codes for better output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function resolveMergeConflict(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let fixed = false;

    // Strategy 1: Remove all merge conflict markers and keep the incoming changes
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      // Remove merge conflict markers and keep incoming changes (from our branch)
      content = content.replace(/<<<<<<< HEAD[\s\S]*?=======\s*\n?/g, '');
      content = content.replace(/>>>>>>> [^\n]*\n?/g, '');
      
      // Clean up any remaining conflict markers
      content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]*\n?/g, '');
      
      fixed = true;
    }

    // Strategy 2: Fix common syntax issues that might have been introduced
    // Remove any remaining malformed content
    content = content.replace(/<<<<<<< HEAD[\s\S]*/g, '');
    content = content.replace(/=======[\s\S]*/g, '');
    content = content.replace(/>>>>>>> [^\n]*[\s\S]*/g, '');

    // Strategy 3: Clean up any empty lines or malformed imports
    content = content.replace(/^\s*import\s+.*?from\s+['"][^'"]*['"]\s*;\s*$/gm, '');
    content = content.replace(/^\s*export\s+.*?from\s+['"][^'"]*['"]\s*;\s*$/gm, '');
    
    // Remove duplicate empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

    if (fixed && content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }

    return false;
  } catch (error) {
    log(`Error processing ${filePath}: ${error.message}`, 'red');
    return false;
  }
}

function findConflictedFiles() {
  try {
    const result = execSync('git status --porcelain | grep "^UU" | awk "{print $2}"', { encoding: 'utf8' });
    return result.trim().split('\n').filter(line => line.trim());
  } catch (error) {
    log('Error finding conflicted files', 'red');
    return [];
  }
}

function main() {
  log('🚀 Starting comprehensive merge conflict resolution...', 'cyan');
  
  const conflictedFiles = findConflictedFiles();
  log(`Found ${conflictedFiles.length} files with merge conflicts`, 'yellow');
  
  if (conflictedFiles.length === 0) {
    log('✅ No merge conflicts found!', 'green');
    return;
  }

  let resolvedCount = 0;
  let errorCount = 0;

  for (const filePath of conflictedFiles) {
    try {
      if (resolveMergeConflict(filePath)) {
        resolvedCount++;
        log(`✅ Resolved: ${filePath}`, 'green');
      } else {
        log(`⚠️  No changes needed: ${filePath}`, 'yellow');
      }
    } catch (error) {
      errorCount++;
      log(`❌ Error processing ${filePath}: ${error.message}`, 'red');
    }
  }

  log('\n📊 Resolution Summary:', 'cyan');
  log(`Total conflicted files: ${conflictedFiles.length}`, 'blue');
  log(`Successfully resolved: ${resolvedCount}`, 'green');
  log(`Errors encountered: ${errorCount}`, 'red');

  if (resolvedCount > 0) {
    log('\n🎯 Next steps:', 'cyan');
    log('1. Review the resolved files', 'blue');
    log('2. Run: git add .', 'blue');
    log('3. Run: git commit -m "Resolve merge conflicts"', 'blue');
    log('4. Continue with your workflow', 'blue');
  }
}

if (require.main === module) {
  main();
}

module.exports = { resolveMergeConflict, findConflictedFiles };
=======
const fs = require('fs').promises;
const path = require('path');
const { exec } = require('child_process');
const util = require('util');

const execAsync = util.promisify(exec);

class MergeConflictResolver {
  constructor() {
    this.logFile = path.join(__dirname, '../logs/merge-resolver.log');
    this.reportFile = path.join(__dirname, '../logs/merge-conflicts-resolved.json');
    this.projectRoot = path.join(__dirname, '..');
    this.backupDir = path.join(__dirname, '../backups/merge-conflicts');
  }

  async log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    
    try {
      await fs.appendFile(this.logFile, logEntry);
      console.log(logEntry.trim());
    } catch (error) {
      console.error('Failed to write to log file:', error);
    }
  }

  async ensureBackupDir() {
    try {
      await fs.mkdir(this.backupDir, { recursive: true });
    } catch (error) {
      await this.log(`Failed to create backup directory: ${error.message}`, 'ERROR');
    }
  }

  async findAllMergeConflicts() {
    try {
      const { stdout } = await execAsync(`find ${this.projectRoot} -type f \\( -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" -o -name "*.json" -o -name "*.md" -o -name "*.css" -o -name "*.scss" \\) -not -path "*/node_modules/*" -not -path "*/.git/*" -not -path "*/dist/*" -not -path "*/out/*" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null || true`);
      
      const files = stdout.trim().split('\n').filter(line => line && !line.includes('node_modules'));
      await this.log(`Found ${files.length} files with merge conflicts`, 'INFO');
      return files;
    } catch (error) {
      await this.log(`Error finding merge conflicts: ${error.message}`, 'ERROR');
      return [];
    }
  }

  async backupFile(filePath) {
    try {
      const relativePath = path.relative(this.projectRoot, filePath);
      const backupPath = path.join(this.backupDir, `${relativePath.replace(/[/\\]/g, '_')}_${Date.now()}.backup`);
      
      const content = await fs.readFile(filePath, 'utf8');
      await fs.writeFile(backupPath, content);
      
      await this.log(`Backed up ${filePath} to ${backupPath}`, 'INFO');
      return backupPath;
    } catch (error) {
      await this.log(`Failed to backup ${filePath}: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async analyzeMergeConflict(content) {
    const conflicts = [];
    const lines = content.split('\n');
    
    let inConflict = false;
    let conflictStart = 0;
    let conflictMiddle = 0;
    let headContent = [];
    let branchContent = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<< HEAD')) {
        inConflict = true;
        conflictStart = i;
        headContent = [];
        branchContent = [];
      } else if (line.startsWith('=======') && inConflict) {
        conflictMiddle = i;
      } else if (line.startsWith('>>>>>>> ') && inConflict) {
        conflicts.push({
          start: conflictStart,
          middle: conflictMiddle,
          end: i,
          headContent: headContent.join('\n'),
          branchContent: branchContent.join('\n'),
          branchName: line.replace('>>>>>>> ', '')
        });
        inConflict = false;
      } else if (inConflict) {
        if (conflictMiddle === 0) {
          headContent.push(line);
        } else {
          branchContent.push(line);
        }
      }
    }
    
    return conflicts;
  }

  async resolveConflict(conflict, strategy = 'prefer-head') {
    switch (strategy) {
      case 'prefer-head':
        return conflict.headContent;
      case 'prefer-branch':
        return conflict.branchContent;
      case 'merge-both':
        return conflict.headContent + '\n' + conflict.branchContent;
      case 'smart-merge':
        return this.smartMerge(conflict);
      default:
        return conflict.headContent;
    }
  }

  smartMerge(conflict) {
    const head = conflict.headContent.trim();
    const branch = conflict.branchContent.trim();
    
    // If one is empty, use the other
    if (!head) return branch;
    if (!branch) return head;
    
    // If they're identical, use either
    if (head === branch) return head;
    
    // If one is a subset of the other, use the longer one
    if (head.includes(branch)) return head;
    if (branch.includes(head)) return branch;
    
    // For imports, merge both
    if (head.includes('import') && branch.includes('import')) {
      return [head, branch].join('\n');
    }
    
    // For object properties, try to merge
    if (head.includes(':') && branch.includes(':')) {
      try {
        return [head, branch].join(',\n');
      } catch {
        return head; // Fallback to head
      }
    }
    
    // Default: prefer HEAD
    return head;
  }

  async resolveMergeConflictsInFile(filePath) {
    try {
      const content = await fs.readFile(filePath, 'utf8');
      const conflicts = await this.analyzeMergeConflict(content);
      
      if (conflicts.length === 0) {
        return { resolved: false, reason: 'No conflicts found' };
      }
      
      // Backup original file
      await this.backupFile(filePath);
      
      let resolvedContent = content;
      
      // Resolve conflicts from end to start to preserve line numbers
      for (let i = conflicts.length - 1; i >= 0; i--) {
        const conflict = conflicts[i];
        const lines = resolvedContent.split('\n');
        
        const resolution = await this.resolveConflict(conflict, 'smart-merge');
        
        // Replace the conflict block with the resolution
        lines.splice(conflict.start, conflict.end - conflict.start + 1, resolution);
        resolvedContent = lines.join('\n');
      }
      
      await fs.writeFile(filePath, resolvedContent);
      
      await this.log(`Resolved ${conflicts.length} conflicts in ${filePath}`, 'INFO');
      return { resolved: true, conflictsCount: conflicts.length };
      
    } catch (error) {
      await this.log(`Failed to resolve conflicts in ${filePath}: ${error.message}`, 'ERROR');
      return { resolved: false, error: error.message };
    }
  }

  async run() {
    try {
      await this.log('Starting merge conflict resolver', 'INFO');
      await this.ensureBackupDir();
      
      const conflictFiles = await this.findAllMergeConflicts();
      
      if (conflictFiles.length === 0) {
        await this.log('No merge conflicts found', 'INFO');
        return;
      }
      
      const results = {
        timestamp: new Date().toISOString(),
        totalFiles: conflictFiles.length,
        resolved: 0,
        failed: 0,
        details: []
      };
      
      for (const file of conflictFiles) {
        const result = await this.resolveMergeConflictsInFile(file);
        
        if (result.resolved) {
          results.resolved++;
        } else {
          results.failed++;
        }
        
        results.details.push({
          file: path.relative(this.projectRoot, file),
          ...result
        });
      }
      
      await fs.writeFile(this.reportFile, JSON.stringify(results, null, 2));
      
      await this.log(`Merge conflict resolution completed: ${results.resolved}/${results.totalFiles} files resolved`, 'INFO');
      
      // If conflicts were resolved, trigger a build check
      if (results.resolved > 0) {
        exec('pm2 restart build-health-check');
        exec('pm2 restart error-monitor');
      }
      
    } catch (error) {
      await this.log(`Merge conflict resolver failed: ${error.message}`, 'ERROR');
    }
  }
}

// Run if called directly
if (require.main === module) {
  const resolver = new MergeConflictResolver();
  
  // Run once immediately, then every 30 minutes
  resolver.run();
  setInterval(() => resolver.run(), 30 * 60 * 1000);
  
  // Keep process alive
  process.on('SIGINT', () => {
    resolver.log('Merge conflict resolver shutting down', 'INFO');
    process.exit(0);
  });
}

module.exports = MergeConflictResolver;
>>>>>>> e2490d5a35d5a0dd04450da6c597434927cc01aa
