#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class MergeConflictResolver {
  constructor() {
    this.conflictFiles = [];
    this.resolvedFiles = [];
    this.failedFiles = [];
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  async runCommand(command, options = {}) {
    try {
      const result = execSync(command, { 
        encoding: 'utf8', 
        stdio: 'pipe',
        ...options 
      });
      return { success: true, output: result };
    } catch (error) {
      return { 
        success: false, 
        error: error.message, 
        output: error.stdout || error.stderr 
      };
    }
  }

  async getConflictedFiles() {
    this.log('Checking for merge conflicts...');
    const result = await this.runCommand('git status --porcelain');
    
    if (!result.success) {
      this.log('Error checking git status');
      return [];
    }

    const conflictedFiles = result.output
      .split('\n')
      .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'))
      .map(line => line.substring(3).trim())
      .filter(file => file.length > 0);

    this.conflictFiles = conflictedFiles;
    this.log(`Found ${conflictedFiles.length} conflicted files`);
    return conflictedFiles;
  }

  async resolveConflictsInFile(filePath) {
    this.log(`Resolving conflicts in ${filePath}`);
    
    if (!fs.existsSync(filePath)) {
      this.log(`File ${filePath} does not exist, skipping`);
      return false;
    }

    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Check if file has merge conflict markers
      if (!content.includes('<<<<<<<') && !content.includes('=======') && !content.includes('>>>>>>>')) {
        this.log(`No conflicts found in ${filePath}`);
        return true;
      }

      // Strategy 1: Accept incoming changes (from the branch being merged)
      let resolvedContent = this.acceptIncomingChanges(content);
      
      // Strategy 2: If that doesn't work, try accepting current changes
      if (resolvedContent.includes('<<<<<<<')) {
        resolvedContent = this.acceptCurrentChanges(content);
      }

      // Strategy 3: If still conflicts, try smart merge
      if (resolvedContent.includes('<<<<<<<')) {
        resolvedContent = this.smartMerge(content);
      }

      // If still has conflicts, log and skip
      if (resolvedContent.includes('<<<<<<<')) {
        this.log(`Could not resolve conflicts in ${filePath}, keeping current version`);
        resolvedContent = this.acceptCurrentChanges(content);
      }

      fs.writeFileSync(filePath, resolvedContent);
      this.resolvedFiles.push(filePath);
      this.log(`Resolved conflicts in ${filePath}`);
      return true;

    } catch (error) {
      this.log(`Error resolving conflicts in ${filePath}: ${error.message}`);
      this.failedFiles.push(filePath);
      return false;
    }
  }

  acceptIncomingChanges(content) {
    // Remove conflict markers and keep incoming changes
    return content
      .replace(/<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)>>>>>>> [^\n]+/g, '$1')
      .replace(/<<<<<<< [^\n]+[\s\S]*?=======([\s\S]*?)>>>>>>> [^\n]+/g, '$1');
  }

  acceptCurrentChanges(content) {
    // Remove conflict markers and keep current changes
    return content
      .replace(/<<<<<<< HEAD([\s\S]*?)=======[\s\S]*?>>>>>>> [^\n]+/g, '$1')
      .replace(/<<<<<<< [^\n]+([\s\S]*?)=======[\s\S]*?>>>>>>> [^\n]+/g, '$1');
  }

  smartMerge(content) {
    // Try to intelligently merge by looking for common patterns
    const lines = content.split('\n');
    const result = [];
    let inConflict = false;
    let currentBlock = [];
    let incomingBlock = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (line.startsWith('<<<<<<<')) {
        inConflict = true;
        currentBlock = [];
        incomingBlock = [];
        continue;
      }

      if (line.startsWith('=======')) {
        continue;
      }

      if (line.startsWith('>>>>>>>')) {
        inConflict = false;
        
        // Smart merge logic
        const merged = this.mergeBlocks(currentBlock, incomingBlock);
        result.push(...merged);
        continue;
      }

      if (inConflict) {
        if (currentBlock.length === 0 || line.trim() === '') {
          currentBlock.push(line);
        } else {
          incomingBlock.push(line);
        }
      } else {
        result.push(line);
      }
    }

    return result.join('\n');
  }

  mergeBlocks(current, incoming) {
    // Simple merge strategy: prefer non-empty lines, avoid duplicates
    const merged = [...current];
    
    for (const line of incoming) {
      if (line.trim() && !merged.includes(line)) {
        merged.push(line);
      }
    }
    
    return merged;
  }

  async addResolvedFiles() {
    this.log('Adding resolved files to git...');
    
    for (const file of this.resolvedFiles) {
      const result = await this.runCommand(`git add "${file}"`);
      if (result.success) {
        this.log(`Added ${file} to git`);
      } else {
        this.log(`Failed to add ${file}: ${result.error}`);
      }
    }
  }

  async commitMerge(message = 'Resolve merge conflicts automatically') {
    this.log('Committing merge...');
    
    const result = await this.runCommand(`git commit -m "${message}"`);
    if (result.success) {
      this.log('Merge committed successfully');
      return true;
    } else {
      this.log(`Failed to commit merge: ${result.error}`);
      return false;
    }
  }

  async resolveAllConflicts() {
    this.log('Starting merge conflict resolution...');
    
    // Get list of conflicted files
    await this.getConflictedFiles();
    
    if (this.conflictFiles.length === 0) {
      this.log('No merge conflicts found');
      return true;
    }

    // Resolve conflicts in each file
    for (const file of this.conflictFiles) {
      await this.resolveConflictsInFile(file);
    }

    // Add resolved files
    await this.addResolvedFiles();

    // Commit the merge
    const committed = await this.commitMerge();
    
    this.log(`Resolution complete:`);
    this.log(`- Resolved: ${this.resolvedFiles.length} files`);
    this.log(`- Failed: ${this.failedFiles.length} files`);
    
    if (this.failedFiles.length > 0) {
      this.log('Failed files:');
      this.failedFiles.forEach(file => this.log(`  - ${file}`));
    }

    return committed;
  }
}

// Main execution
async function main() {
  const resolver = new MergeConflictResolver();
  
  try {
    const success = await resolver.resolveAllConflicts();
    process.exit(success ? 0 : 1);
  } catch (error) {
    console.error('Error during merge conflict resolution:', error);
    process.exit(1);
  }
}

// Run if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export default MergeConflictResolver;