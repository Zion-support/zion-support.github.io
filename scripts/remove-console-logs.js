#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Remove console.log statements from production code
 * This script removes console.log, console.warn, console.error statements
 * while preserving console.debug for development debugging
 */

class ConsoleLogRemover {
  constructor() {
    this.workspacePath = process.cwd();
    this.processedFiles = 0;
    this.removedLogs = 0;
    this.errors = [];
  }

  // Read file safely
  readFile(filePath) {
    try {
      return fs.readFileSync(path.join(this.workspacePath, filePath), 'utf8');
    } catch (error) {
      this.errors.push(`Could not read file ${filePath}: ${error.message}`);
      return null;
    }
  }

  // Write file safely
  writeFile(filePath, content) {
    try {
      const fullPath = path.join(this.workspacePath, filePath);
      const dir = path.dirname(fullPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(fullPath, content);
      return true;
    } catch (error) {
      this.errors.push(`Error writing file ${filePath}: ${error.message}`);
      return false;
    }
  }

  // Remove console statements from content
  removeConsoleStatements(content) {
    let modifiedContent = content;
    let removedCount = 0;

    // Patterns to match and remove
    const patterns = [
      // console.log statements
      {
        regex: /^\s*console\.log\([^)]*\);\s*$/gm,
        replacement: ''
      },
      // console.warn statements
      {
        regex: /^\s*console\.warn\([^)]*\);\s*$/gm,
        replacement: ''
      },
      // console.error statements (but keep error logging in catch blocks)
      {
        regex: /^\s*console\.error\([^)]*\);\s*$/gm,
        replacement: ''
      },
      // Multi-line console statements
      {
        regex: /^\s*console\.(log|warn|error)\(\s*[\s\S]*?\);\s*$/gm,
        replacement: ''
      },
      // Console statements with comments
      {
        regex: /^\s*\/\/\s*console\.(log|warn|error)\([^)]*\);\s*$/gm,
        replacement: ''
      }
    ];

    patterns.forEach(pattern => {
      const matches = modifiedContent.match(pattern.regex);
      if (matches) {
        removedCount += matches.length;
        modifiedContent = modifiedContent.replace(pattern.regex, pattern.replacement);
      }
    });

    // Clean up empty lines left by removed console statements
    modifiedContent = modifiedContent.replace(/\n\s*\n\s*\n/g, '\n\n');

    return { content: modifiedContent, removedCount };
  }

  // Process a single file
  processFile(filePath) {
    const content = this.readFile(filePath);
    if (!content) return false;

    const { content: modifiedContent, removedCount } = this.removeConsoleStatements(content);
    
    if (removedCount > 0) {
      if (this.writeFile(filePath, modifiedContent)) {
        this.removedLogs += removedCount;
        console.log(`✅ Removed ${removedCount} console statements from ${filePath}`);
        return true;
      }
    }
    
    return false;
  }

  // Get all files recursively
  getAllFiles(dir, extensions) {
    let files = [];
    try {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          files = files.concat(this.getAllFiles(fullPath, extensions));
        } else if (extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      this.errors.push(`Error reading directory ${dir}: ${error.message}`);
    }
    return files;
  }

  // Main execution
  async run() {
    console.log('🧹 Starting console log removal...');
    
    const extensions = ['.ts', '.tsx', '.js', '.jsx'];
    const files = this.getAllFiles(this.workspacePath, extensions);
    
    // Filter out test files and node_modules
    const filteredFiles = files.filter(file => 
      !file.includes('node_modules') &&
      !file.includes('__tests__') &&
      !file.includes('.test.') &&
      !file.includes('.spec.') &&
      !file.includes('jest.setup') &&
      !file.includes('scripts/') &&
      !file.includes('netlify/')
    );

    console.log(`📁 Found ${filteredFiles.length} files to process`);

    for (const file of filteredFiles) {
      const relativePath = path.relative(this.workspacePath, file);
      if (this.processFile(relativePath)) {
        this.processedFiles++;
      }
    }

    // Summary
    console.log('\n📊 Summary:');
    console.log(`✅ Processed: ${this.processedFiles} files`);
    console.log(`🗑️  Removed: ${this.removedLogs} console statements`);
    
    if (this.errors.length > 0) {
      console.log(`❌ Errors: ${this.errors.length}`);
      this.errors.forEach(error => console.log(`   ${error}`));
    }

    console.log('\n🎉 Console log removal completed!');
  }
}

// Run the script
if (import.meta.url === `file://${process.argv[1]}`) {
  const remover = new ConsoleLogRemover();
  remover.run().catch(console.error);
}

export default ConsoleLogRemover;