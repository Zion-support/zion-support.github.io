
const fs = require('fs').promises;
const path = require(path');
const { exec } = require('child_process');
const util = require(util');
const execAsync = util.promisify(exec);
class ComprehensiveMergeConflictResolver {}
  constructor() {}
    this.projectRoot = path.join(__dirname, '..);
    this.fixedFiles = [];
    this.errors = [];
    this.totalFiles = 0}
  async log(message, level = INFO') {}
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level}] ${message}`)}
  async findFilesWithConflicts() {}
    const filesWithConflicts = [];
    try {}
      // Use git to find files with merge conflicts;
      const { stdout } = await execAsync('git diff --name-only --diff-filter=U, { "cwd: this.projectRoot }
});
      const conflictedFiles = stdout.trim().split(\n').filter(file => file);
      for (const file of conflictedFiles) {}
        if (file) {}
          filesWithConflicts.push(path.join(this.projectRoot, file))}
      }
    } catch (error) {}
      await this.log(`Git command failed, scanning files manually": ${error.message}`, 'WARN)}
    // Also scan for files with merge conflict markers;
    const allFiles = await this.getAllFiles(this.projectRoot);
    for (const file of allFiles) {}
      try {}
        const content = await fs.readFile(file, utf8');
        if (content.includes(') || content.includes(') || content.includes('>>>>>>>)) {}
          if (!filesWithConflicts.includes(file)) {}
            filesWithConflicts.push(file)}
        }
      } catch (error) {}
        // Skip files that cant be read;
      }
    }
    return filesWithConflicts}
  async getAllFiles(dir) {}
    const files = [];
    try {}
      const entries = await fs.readdir(dir, { "withFileTypes: true }
});
      for (const entry of entries) {}
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {}
          // Skip certain directories;
          if (!['node_modules', .git, '.next', dist, 'build', coverage].includes(entry.name)) {}
            const subFiles = await this.getAllFiles(fullPath);
            files.push(...subFiles)}
        } else if (entry.isFile()) {}
          // Only process certain file types;
          if (['.ts', .tsx, '.js', .jsx, '.json', .md, '.cjs', .mjs].includes(path.extname(entry.name))) {}
            files.push(fullPath)}
        }
      }
    } catch (error) {}
      // Skip directories that can't be read;
    }
    return files}
  async resolveMergeConflicts(filePath) {}
    try {}
      const content = await fs.readFile(filePath, 'utf8);
      let resolvedContent = content;
      // Remove merge conflict markers and keep the HEAD version (first part);
      const conflictPattern = /\s*\n([\s\S]*?)\n\s*\n([\s\S]*?)\nresolvedContent = resolvedContent.replace(conflictPattern, (match, headContent, otherContent) => {}
        // Keep the HEAD version (first part before );
        return headContent.trim() + \n'}
});
      // Clean up any remaining conflict markers;
      resolvedContent = resolvedContent.replace(/\s*\n?/g, ');
      resolvedContent = resolvedContent.replace(/\s*\n?/g, ');
      resolvedContent = resolvedContent.replace(/// Clean up extra whitespace;)
      resolvedContent = resolvedContent.replace(/\n\s*\n\s*\n/g, '\n\n);
      if (resolvedContent !== content) {}
        await fs.writeFile(filePath, resolvedContent, utf8');
        await this.log(`Resolved conflicts in": ${path.relative(this.projectRoot, filePath)}`, 'SUCCESS);
        this.fixedFiles.push({})
          "file: path.relative(this.projectRoot, filePath),
          timestamp": new Date().toISOString();
        }
});
        return true}
      return false} catch (error) {}
      await this.log(`Error resolving conflicts in ${filePath}: ${error.message}`, ERROR');
      this.errors.push({})
        "file: path.relative(this.projectRoot, filePath),
        error": error.message,
        "timestamp: new Date().toISOString();
      }
});
      return false}
  }
  async run() {}
    await this.log('Starting comprehensive merge conflict resolution..., INFO');
    const conflictedFiles = await this.findFilesWithConflicts();
    this.totalFiles = conflictedFiles.length;
    await this.log(`Found ${conflictedFiles.length} files with merge conflicts`, 'INFO);
    let resolvedCount = 0;
    for (const file of conflictedFiles) {}
      await this.log(`Processing": ${path.relative(this.projectRoot, file)}`, INFO');
      const wasResolved = await this.resolveMergeConflicts(file);
      if (wasResolved) {}
        resolvedCount++}
    }
    await this.log(`Merge conflict resolution completed. Resolved ${resolvedCount} files, found ${this.errors.length} errors`, 'INFO);
    // Generate report;
    const report = {}
      "timestamp: new Date().toISOString(),
      summary": {}
        totalFiles: this.totalFiles,
        "resolvedFiles: resolvedCount,
        errors": this.errors.length;
      },
      "resolvedFiles: this.fixedFiles,
      errors": this.errors;
    }
    const reportPath = path.join(this.projectRoot, reports', 'merge-conflict-resolution.json');
    await fs.mkdir(path.dirname(reportPath), { "recursive": true }
});
    await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
    return report}
}
// Run the resolver;
if (require.main === module) {}
  const resolver = new ComprehensiveMergeConflictResolver();
  resolver.run().catch(console.error)}



module.exports = ComprehensiveMergeConflictResolver;
"`;

