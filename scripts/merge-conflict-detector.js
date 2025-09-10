#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const util = require('util');

const execAsync = util.promisify(exec);

class MergeConflictDetector {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'merge-conflict-detector.log');
    this.importantDirs = ['pages', 'components', 'lib', 'src'];
    this.importantExtensions = ['.tsx', '.ts', '.js', '.jsx', '.json', '.css', '.scss'];
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(logMessage.trim());

    // Ensure logs directory exists
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }

    fs.appendFileSync(this.logFile, logMessage);
  }

  async findMergeConflicts() {
    const conflicts = [];

    for (const dir of this.importantDirs) {
      const dirPath = path.join(this.projectRoot, dir);

      if (!fs.existsSync(dirPath)) {
        continue;
      }

      try {
        const { stdout } = await execAsync(
          `find "${dirPath}" -type f \\( ${this.importantExtensions.map(ext => `-name "*${ext}"`).join(' -o ')} \\) -exec grep -l "          { cwd: this.projectRoot }
        );

        if (stdout.trim()) {
          const files = stdout.trim().split('\n').filter(f => f);
          for (const file of files) {
            conflicts.push({
              file: path.relative(this.projectRoot, file),
              type: 'merge_conflict'
            });
          }
        }
      } catch (error) {
        this.log(`Error scanning directory ${dir}: ${error.message}`);
      }
    }

    return conflicts;
  }

  async analyzeConflict(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      const conflicts = [];

      let currentConflict = null;

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        if (line.includes('          currentConflict = {
            startLine: i + 1,
            headContent: [],
            separatorLine: null,
            incomingContent: [],
            endLine: null
          };
        } else if (line.includes('') && currentConflict) {
          currentConflict.separatorLine = i + 1;
        } else if (line.includes('          currentConflict.endLine = i + 1;
          currentConflict.commitHash = line.split(' ')[1] || 'unknown';
          conflicts.push(currentConflict);
          currentConflict = null;
        } else if (currentConflict) {
          if (currentConflict.separatorLine === null) {
            currentConflict.headContent.push(line);
          } else {
            currentConflict.incomingContent.push(line);
          }
        }
      }

      return conflicts;
    } catch (error) {
      this.log(`Error analyzing conflict in ${filePath}: ${error.message}`);
      return [];
    }
  }

  async autoResolveConflicts(conflicts) {
    let resolvedCount = 0;

    for (const conflict of conflicts) {
      try {
        const filePath = path.join(this.projectRoot, conflict.file);
        const analysis = await this.analyzeConflict(filePath);

        if (analysis.length > 0) {
          this.log(`Attempting to auto-resolve conflicts in ${conflict.file}`);

          // Simple auto-resolution strategy: prefer the incoming changes (after )
          let content = fs.readFileSync(filePath, 'utf8');

          for (const conflictDetail of analysis) {
            const conflictPattern = new RegExp(
              `              'g'
            );

            // Replace with incoming content (after )
            content = content.replace(conflictPattern, (match) => {
              const parts = match.split('');
              if (parts.length === 2) {
                const incomingPart = parts[1].split('>>>>>>>')[0];
                return incomingPart.trim();
              }
              return match;
            });
          }

          fs.writeFileSync(filePath, content);
          resolvedCount++;
          this.log(`Auto-resolved conflicts in ${conflict.file}`);
        }
      } catch (error) {
        this.log(`Failed to auto-resolve conflicts in ${conflict.file}: ${error.message}`);
      }
    }

    return resolvedCount;
  }

  async runDetection() {
    this.log('Starting merge conflict detection...');

    const conflicts = await this.findMergeConflicts();

    if (conflicts.length === 0) {
      this.log('No merge conflicts found');
      return { conflicts: [], resolved: 0 };
    }

    this.log(`Found ${conflicts.length} files with merge conflicts`);

    // Attempt auto-resolution
    const resolvedCount = await this.autoResolveConflicts(conflicts);

    // Re-check after auto-resolution
    const remainingConflicts = await this.findMergeConflicts();

    this.log(`Auto-resolved ${resolvedCount} files, ${remainingConflicts.length} conflicts remain`);

    // Save report
    const reportFile = path.join(this.projectRoot, 'merge-conflict-report.json');
    fs.writeFileSync(reportFile, JSON.stringify({
      timestamp: new Date().toISOString(),
      totalConflicts: conflicts.length,
      resolvedConflicts: resolvedCount,
      remainingConflicts: remainingConflicts.length,
      conflicts: conflicts,
      remaining: remainingConflicts,
      status: remainingConflicts.length > 0 ? 'conflicts_remain' : 'all_resolved'
    }, null, 2));

    return {
      conflicts: remainingConflicts,
      resolved: resolvedCount
    };
  }

  async start() {
    this.log('Merge Conflict Detector started');

    // Run initial detection
    await this.runDetection();

    // Set up interval for continuous monitoring
    setInterval(async () => {
      await this.runDetection();
    }, 10 * 60 * 1000); // Every 10 minutes
  }
}

// Start the detector if this script is run directly
if (require.main === module) {
  const detector = new MergeConflictDetector();
  detector.start().catch(error => {
    console.error('Merge Conflict Detector failed to start:', error);
    process.exit(1);
  });
}

module.exports = MergeConflictDetector;