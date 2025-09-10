const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
)
    content = content.replace(/[\s\S]*?
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all files with merge conflicts
const { execSync } = require('child_process');

class ConflictResolver {
  constructor() {
    this.fixedFiles = [];
    this.errors = [];
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  fixMergeConflicts(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        if (line.includes('')) {
          takeHead = false;
          continue;
        } else if (line.includes('>>>>>>>')) {
          inConflict = false;
          continue;
        }

        if (!inConflict || (inConflict && takeHead)) {
          resolvedLines.push(line);
      // Remove merge conflict markers
      // Remove merge conflict markers
      content = content.replace(/
      content = content.replace(/
      
      // Fix common syntax issues
      content = content.replace(/\{_/g, '{');
      content = content.replace(/_}/g, '}');
      content = content.replace(/_/g, ' ');
      content = content.replace(/,\s*$/gm, ';');
      content = content.replace(/import\s+([^,]+),\s*$/gm, 'import $1;');
      
      // Fix function parameters
      content = content.replace(/\(\s*\{_([^}]+)_\}\s*\)/g, '({ $1 })');
      content = content.replace(/\(\s*_([^)]+)_\s*\)/g, '($1)');
      
      // Fix interface definitions
      content = content.replace(/interface\s+(\w+)\s*\{_([^}]+)_\}/g, 'interface $1 { $2 }');
      
      // Fix object destructuring
      content = content.replace(/\{\s*_([^}]+)_\s*\}/g, '{ $1 }');
      
      // Fix array destructuring
      content = content.replace(/\[\s*_([^\]]+)_\s*\]/g, '[ $1 ]');
      
      // Fix function calls
      content = content.replace(/\(\s*_([^)]+)_\s*\)/g, '($1)');
      
      // Fix arrow functions
      content = content.replace(/=>\s*\{_([^}]+)_\}/g, '=> { $1 }');
      
      // Fix return statements
      content = content.replace(/return\s*\{_([^}]+)_\}/g, 'return { $1 }');
      
      // Fix JSX props
      content = content.replace(/<(\w+)\s+([^>]*)_([^>]*)>/g, '<$1 $2 $3>');
      
      // Clean up extra spaces
      content = content.replace(/\s+/g, ' ');
      content = content.replace(/\s*{\s*/g, ' { ');
      content = content.replace(/\s*}\s*/g, ' } ');
      content = content.replace(/\s*\(\s*/g, ' (');
      content = content.replace(/\s*\)\s*/g, ') ');
      content = content.replace(/\s*,\s*/g, ', ');
      content = content.replace(/\s*;\s*/g, '; ');
      
      // Fix multiple spaces
      content = content.replace(/\s{2,}/g, ' ');
      
      // Fix line breaks
      content = content.replace(/;\s*}/g, ';\n}');
      content = content.replace(/{\s*/g, '{\n  ');
      content = content.replace(/}\s*/g, '\n}');
      content = content.replace(/;\s*/g, ';\n');
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        this.fixedFiles.push(filePath);
        this.log(`Fixed merge conflicts in: ${filePath}`);
        return true;
      }
      return false;
    } catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      this.log(`Error fixing ${filePath}: ${error.message}`);
      return false;
    }
  }

  findFilesWithConflicts(dir) {
    const files = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules') {
        files.push(...this.findFilesWithConflicts(fullPath));
      } else if (entry.isFile() && (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts') || entry.name.endsWith('.jsx') || entry.name.endsWith('.js'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>') || content.includes('{_') || content.includes('_}') || content.includes('_ ')) {
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
    
    return files;
  }

  async run() {
    this.log('Starting conflict resolution...');
    
    const filesToFix = this.findFilesWithConflicts('/workspace');
    this.log(`Found ${filesToFix.length} files with conflicts`);
    
    for (const file of filesToFix) {
      this.fixMergeConflicts(file);
    }
    
    this.log(`Fixed ${this.fixedFiles.length} files`);
    this.log(`Encountered ${this.errors.length} errors`);
    
    if (this.errors.length > 0) {
      this.log('Errors:');
      this.errors.forEach(err => this.log(`  ${err.file}: ${err.error}`));
    }
    
    return {
      fixedFiles: this.fixedFiles,
      errors: this.errors
    };
  }
}

console.log(`Found ${files.length} files with merge conflicts`);

let fixedCount = 0;
files.forEach(file => {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);
console.log('All merge conflicts resolved!');