const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Check if file has merge conflicts
    if (content.includes('') || content.includes('>>>>>>>')) {
      console.log(`Fixing merge conflicts in: ${filePath}`);

      // Simple merge conflict resolution - take the HEAD version
      const lines = content.split('\n');
      const resolvedLines = [];
      let inConflict = false;
      let takeHead = true;

<<<<<<< HEAD
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
          if (content.includes('<<<<<<<') || content.includes('') || content.includes('>>>>>>>') || content.includes('{_') || content.includes('_}') || content.includes('_ ')) {
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
=======
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
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
        }
      }
      fs.writeFileSync(filePath, resolvedLines.join('\n'), 'utf8');
      console.log(`Resolved conflicts in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

function traverseDirectory(dir) {
  try {
    fs.readdirSync(dir).forEach(file => {
      const fullPath = path.join(dir, file);
      try {
        const stats = fs.statSync(fullPath);
        if (stats.isDirectory()) {
          traverseDirectory(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.jsx') || fullPath.endsWith('.js') || fullPath.endsWith('.json') || fullPath.endsWith('.toml') || fullPath.endsWith('.css') || fullPath.endsWith('.html')) {
          fixMergeConflicts(fullPath);
        }
      } catch (error) {
        // Skip broken symlinks or inaccessible files
        console.log(`Skipping ${fullPath}: ${error.message}`);
      }
    });
  } catch (error) {
    console.log(`Skipping directory ${dir}: ${error.message}`);
  }
}

traverseDirectory(path.join(__dirname));
console.log('All merge conflicts resolved.');