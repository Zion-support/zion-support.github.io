#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class MergeConflictResolver {
  constructor() {
    this.projectRoot = process.cwd();
    this.conflictsResolved = 0;
    this.conflictsFound = [];
    this.logFile = path.join(
      this.projectRoot,
      'merge-conflict-resolver-report.json'
    );
    this.isRunning = false;
    this.checkInterval = 2 * 60 * 1000; // Check every 2 minutes
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }

  async start() {
    this.log('🚀 Starting Merge Conflict Resolver...');
    this.isRunning = true;

    // Initial check
    await this.checkAndResolveConflicts();

    // Set up continuous monitoring
    this.monitorInterval = setInterval(async () => {
      if (this.isRunning) {
        await this.checkAndResolveConflicts();
      }
    }, this.checkInterval);
  }

  stop() {
    this.log('🛑 Stopping Merge Conflict Resolver...');
    this.isRunning = false;
    if (this.monitorInterval) {
      clearInterval(this.monitorInterval);
    }
  }

  async checkAndResolveConflicts() {
    try {
      this.log('🔍 Checking for merge conflicts...');

      const conflicts = await this.findMergeConflicts();

      if (conflicts.length > 0) {
        this.log(`⚠️ Found ${conflicts.length} merge conflicts`);
        this.conflictsFound = conflicts;

        for (const conflict of conflicts) {
          await this.resolveConflict(conflict);
        }

        this.log(`✅ Resolved ${this.conflictsResolved} conflicts`);
      } else {
        this.log('✅ No merge conflicts found');
      }

      this.saveReport();
    } catch (error) {
      this.log(`❌ Error during conflict resolution: ${error.message}`);
    }
  }

  async findMergeConflicts() {
    const conflicts = [];
    const files = this.findFiles('.ts,.tsx,.js,.jsx,.json,.md,.yml,.yaml');

    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');

        if (
          content.includes('<<<<<<< HEAD') ||
          content.includes('=======') ||
          content.includes('>>>>>>> ')
        ) {
          conflicts.push({
            file,
            type: 'merge_conflict',
            markers: this.extractConflictMarkers(content),
          });
        }
      } catch (error) {
        this.log(`⚠️ Could not read ${file}: ${error.message}`);
      }
    }

    return conflicts;
  }

  extractConflictMarkers(content) {
    const markers = [];

    // Find all conflict markers
    const lines = content.split('\n');
    let inConflict = false;
    let conflictStart = 0;
    let conflictEnd = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (line.includes('<<<<<<< HEAD')) {
        inConflict = true;
        conflictStart = i;
      } else if (line.includes('=======') && inConflict) {
        // Middle marker
      } else if (line.includes('>>>>>>> ') && inConflict) {
        inConflict = false;
        conflictEnd = i;

        markers.push({
          start: conflictStart,
          end: conflictEnd,
          content: lines.slice(conflictStart, conflictEnd + 1).join('\n'),
        });
      }
    }

    return markers;
  }

  async resolveConflict(conflict) {
    try {
      this.log(`🔧 Resolving conflict in ${conflict.file}`);

      const content = fs.readFileSync(conflict.file, 'utf8');
      let resolvedContent = content;

      // Try to auto-resolve based on file type and content
      resolvedContent = await this.autoResolveConflict(
        conflict.file,
        resolvedContent
      );

      if (resolvedContent !== content) {
        fs.writeFileSync(conflict.file, resolvedContent);
        this.log(`✅ Auto-resolved conflict in ${conflict.file}`);
        this.conflictsResolved++;

        // Stage the resolved file
        try {
          execSync(`git add "${conflict.file}"`, { stdio: 'pipe' });
          this.log(`📝 Staged resolved file ${conflict.file}`);
        } catch (error) {
          this.log(`⚠️ Could not stage ${conflict.file}: ${error.message}`);
        }
      } else {
        this.log(`⚠️ Could not auto-resolve conflict in ${conflict.file}`);
      }
    } catch (error) {
      this.log(
        `❌ Error resolving conflict in ${conflict.file}: ${error.message}`
      );
    }
  }

  async autoResolveConflict(filePath, content) {
    const ext = path.extname(filePath);

    switch (ext) {
      case '.ts':
      case '.tsx':
        return this.resolveTypeScriptConflict(content);
      case '.js':
      case '.jsx':
        return this.resolveJavaScriptConflict(content);
      case '.json':
        return this.resolveJsonConflict(content);
      case '.md':
        return this.resolveMarkdownConflict(content);
      default:
        return this.resolveGenericConflict(content);
    }
  }

  resolveTypeScriptConflict(content) {
    // For TypeScript files, prefer the HEAD version but merge imports
    let resolved = content;

    // Remove all conflict markers
    resolved = resolved.replace(/<<<<<<< HEAD\n?/g, '');
    resolved = resolved.replace(/=======\n?/g, '');
    resolved = resolved.replace(/>>>>>>> [^\n]*\n?/g, '');

    // Clean up any duplicate imports
    resolved = this.cleanupDuplicateImports(resolved);

    // Fix any syntax issues
    resolved = this.fixTypeScriptSyntax(resolved);

    return resolved;
  }

  resolveJavaScriptConflict(content) {
    // Similar to TypeScript but without type-specific fixes
    let resolved = content;

    // Remove all conflict markers
    resolved = resolved.replace(/<<<<<<< HEAD\n?/g, '');
    resolved = resolved.replace(/=======\n?/g, '');
    resolved = resolved.replace(/>>>>>>> [^\n]*\n?/g, '');

    // Clean up any duplicate imports
    resolved = this.cleanupDuplicateImports(resolved);

    return resolved;
  }

  resolveJsonConflict(content) {
    // For JSON files, try to merge the objects
    try {
      // Extract the different versions
      const headMatch = content.match(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n/);
      const incomingMatch = content.match(/=======\n([\s\S]*?)\n>>>>>>> /);

      if (headMatch && incomingMatch) {
        const headJson = JSON.parse(headMatch[1].trim());
        const incomingJson = JSON.parse(incomingMatch[1].trim());

        // Merge the objects, preferring incoming for conflicts
        const merged = { ...headJson, ...incomingJson };

        // Remove conflict markers and replace with merged content
        let resolved = content.replace(
          /<<<<<<< HEAD\n[\s\S]*?=======\n[\s\S]*?>>>>>>> [^\n]*\n?/g,
          JSON.stringify(merged, null, 2)
        );

        return resolved;
      }
    } catch (error) {
      this.log(`⚠️ Could not parse JSON in conflict: ${error.message}`);
    }

    // Fallback: remove conflict markers and keep HEAD
    return content
      .replace(/<<<<<<< HEAD\n?/g, '')
      .replace(/=======\n?/g, '')
      .replace(/>>>>>>> [^\n]*\n?/g, '');
  }

  resolveMarkdownConflict(content) {
    // For markdown, prefer the longer version (more content)
    const headMatch = content.match(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n/);
    const incomingMatch = content.match(/=======\n([\s\S]*?)\n>>>>>>> /);

    if (headMatch && incomingMatch) {
      const headContent = headMatch[1];
      const incomingContent = incomingMatch[1];

      // Choose the longer version
      if (incomingContent.length > headContent.length) {
        return content.replace(
          /<<<<<<< HEAD\n[\s\S]*?=======\n[\s\S]*?>>>>>>> [^\n]*\n?/g,
          incomingContent
        );
      } else {
        return content.replace(
          /<<<<<<< HEAD\n[\s\S]*?=======\n[\s\S]*?>>>>>>> [^\n]*\n?/g,
          headContent
        );
      }
    }

    // Fallback: remove conflict markers
    return content
      .replace(/<<<<<<< HEAD\n?/g, '')
      .replace(/=======\n?/g, '')
      .replace(/>>>>>>> [^\n]*\n?/g, '');
  }

  resolveGenericConflict(content) {
    // Generic resolution: remove conflict markers and keep HEAD
    return content
      .replace(/<<<<<<< HEAD\n?/g, '')
      .replace(/=======\n?/g, '')
      .replace(/>>>>>>> [^\n]*\n?/g, '');
  }

  cleanupDuplicateImports(content) {
    const lines = content.split('\n');
    const imports = new Set();
    const cleanedLines = [];

    for (const line of lines) {
      if (line.trim().startsWith('import ')) {
        if (!imports.has(line.trim())) {
          imports.add(line.trim());
          cleanedLines.push(line);
        }
      } else {
        cleanedLines.push(line);
      }
    }

    return cleanedLines.join('\n');
  }

  fixTypeScriptSyntax(content) {
    // Fix common TypeScript syntax issues
    let fixed = content;

    // Fix missing type annotations
    fixed = fixed.replace(/} catch \(error: \)/g, '} catch (error: any)');
    fixed = fixed.replace(/\(([^)]+): \)/g, '($1: any)');

    // Fix JSX syntax
    fixed = fixed.replace(
      /<>([\s\S]*?)<\/>/g,
      '<React.Fragment>$1</React.Fragment>'
    );

    return fixed;
  }

  async checkGitStatus() {
    try {
      const status = execSync('git status --porcelain', { encoding: 'utf8' });
      return status
        .trim()
        .split('\n')
        .filter(line => line.length > 0);
    } catch (error) {
      this.log(`❌ Could not check git status: ${error.message}`);
      return [];
    }
  }

  async commitResolvedConflicts() {
    try {
      const status = await this.checkGitStatus();
      const resolvedFiles = status.filter(
        line => line.startsWith('M ') || line.startsWith('A ')
      );

      if (resolvedFiles.length > 0) {
        this.log(`📝 Committing ${resolvedFiles.length} resolved files...`);

        const message = `Auto-resolve merge conflicts: ${resolvedFiles.length} files resolved`;
        execSync(`git commit -m "${message}"`, { stdio: 'pipe' });

        this.log('✅ Conflicts committed successfully');
        return true;
      }
    } catch (error) {
      this.log(`❌ Could not commit resolved conflicts: ${error.message}`);
    }

    return false;
  }

  findFiles(extensions) {
    const exts = extensions.split(',');
    const files = [];

    const walkDir = dir => {
      const items = fs.readdirSync(dir);

      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (
          stat.isDirectory() &&
          !item.startsWith('.') &&
          item !== 'node_modules'
        ) {
          walkDir(fullPath);
        } else if (stat.isFile()) {
          const ext = path.extname(item);
          if (exts.some(e => e.trim() === ext)) {
            files.push(fullPath);
          }
        }
      }
    };

    walkDir(this.projectRoot);
    return files;
  }

  saveReport() {
    const report = {
      timestamp: new Date().toISOString(),
      conflictsResolved: this.conflictsResolved,
      conflictsFound: this.conflictsFound,
      status: 'completed',
    };

    fs.writeFileSync(this.logFile, JSON.stringify(report, null, 2));
  }

  getStatus() {
    return {
      isRunning: this.isRunning,
      conflictsResolved: this.conflictsResolved,
      conflictsFound: this.conflictsFound.length,
      lastCheck: new Date().toISOString(),
      logFile: this.logFile,
    };
  }
}

// Export for use in other modules
module.exports = MergeConflictResolver;

// If run directly, start the conflict resolver
if (require.main === module) {
  const conflictResolver = new MergeConflictResolver();

  // Handle graceful shutdown
  process.on('SIGINT', () => {
    conflictResolver.stop();
    process.exit(0);
  });

  process.on('SIGTERM', () => {
    conflictResolver.stop();
    process.exit(0);
  });

  // Start the conflict resolver
  conflictResolver.start();
}
