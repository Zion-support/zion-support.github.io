#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Fix remaining syntax errors from accessibility enhancements
 */

class RemainingSyntaxFixer {
  constructor() {
    this.workspacePath = process.cwd();
    this.processedFiles = 0;
    this.fixedErrors = 0;
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

  // Fix remaining syntax errors
  fixRemainingErrors(content) {
    let modifiedContent = content;
    let fixedCount = 0;

    // Fix malformed useCallback patterns
    const patterns = [
      // Pattern 1: useCallback(() = aria-label="..." > function, [])
      {
        regex: /useCallback\(\(\) = aria-label="[^"]*"[^>]*> ([^,]+), \[\]\)/g,
        replacement: 'useCallback(() => $1, [])'
      },
      // Pattern 2: onClick={useCallback(() = aria-label="..." > function, [])}
      {
        regex: /onClick=\{useCallback\(\(\) = aria-label="[^"]*"[^>]*> ([^,]+), \[\]\)\}/g,
        replacement: 'onClick={useCallback(() => $1, [])}'
      },
      // Pattern 3: onKeyDown with malformed useCallback
      {
        regex: /onKeyDown=\{\(e\) => \{ if \(e\.key === "Enter" \|\| e\.key === " "\) \{ useCallback\(\(\) = aria-label="[^"]*"[^>]*> ([^,]+), \[\]\)\(e\); \} \}\}/g,
        replacement: 'onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { $1; } }}'
      }
    ];

    patterns.forEach(pattern => {
      const matches = modifiedContent.match(pattern.regex);
      if (matches) {
        fixedCount += matches.length;
        modifiedContent = modifiedContent.replace(pattern.regex, pattern.replacement);
      }
    });

    return { content: modifiedContent, fixedCount };
  }

  // Process a single file
  processFile(filePath) {
    const content = this.readFile(filePath);
    if (!content) return false;

    const { content: modifiedContent, fixedCount } = this.fixRemainingErrors(content);
    
    if (fixedCount > 0) {
      if (this.writeFile(filePath, modifiedContent)) {
        this.fixedErrors += fixedCount;
        console.log(`✅ Fixed ${fixedCount} remaining syntax errors in ${filePath}`);
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
    console.log('🔧 Starting remaining syntax error fixes...');
    
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
      !file.includes('netlify/') &&
      !file.includes('backup') &&
      !file.includes('dist/')
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
    console.log(`🔧 Fixed: ${this.fixedErrors} remaining syntax errors`);
    
    if (this.errors.length > 0) {
      console.log(`❌ Errors: ${this.errors.length}`);
      this.errors.forEach(error => console.log(`   ${error}`));
    }

    console.log('\n🎉 Remaining syntax error fixes completed!');
  }
}

// Run the script
if (import.meta.url === `file://${process.argv[1]}`) {
  const fixer = new RemainingSyntaxFixer();
  fixer.run().catch(console.error);
}

export default RemainingSyntaxFixer;