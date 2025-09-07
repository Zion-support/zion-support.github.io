#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class ImportFixer {
  constructor() {
    this.projectRoot = path.join(__dirname, '..');
    this.fixedFiles = [];
  }

  log(message, type = 'info') {
    const prefix = type === 'error' ? '❌' : type === 'success' ? '✅' : 'ℹ️';
    console.log(`${prefix} ${message}`);
  }

  fixImports(content) {
    // Fix malformed import statements
    content = content.replace(/import\s+type\s*{\s*([^}]+),\s*from\s*'([^']+)';/g, "import type { $1 } from '$2';");
    content = content.replace(/import\s*{\s*([^}]+),\s*from\s*'([^']+)';/g, "import { $1 } from '$2';");
    content = content.replace(/import\s+([^,]+),\s*from\s*'([^']+)';/g, "import $1 from '$2';");
    
    // Fix broken import statements
    content = content.replace(/import\s+type\s*{\s*([^}]+)\s*,\s*\n\s*from\s*'([^']+)';/g, "import type { $1 } from '$2';");
    content = content.replace(/import\s*{\s*([^}]+)\s*,\s*\n\s*from\s*'([^']+)';/g, "import { $1 } from '$2';");
    
    return content;
  }

  async fixFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const fixed = this.fixImports(content);
      
      if (fixed !== content) {
        fs.writeFileSync(filePath, fixed);
        this.fixedFiles.push(filePath);
        this.log(`Fixed imports in ${filePath}`, 'success');
        return true;
      }
      
      return false;
    } catch (error) {
      this.log(`Error fixing ${filePath}: ${error.message}`, 'error');
      return false;
    }
  }

  async getAllFiles() {
    const files = [];
    const extensions = ['.ts', '.tsx', '.js', '.jsx'];
    
    const scanDirectory = (dir) => {
      try {
        if (!fs.existsSync(dir)) return;
        
        const items = fs.readdirSync(dir);
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
              scanDirectory(fullPath);
            }
          } else if (extensions.some(ext => item.endsWith(ext))) {
            files.push(fullPath);
          }
        }
      } catch (error) {
        this.log(`Error scanning directory ${dir}: ${error.message}`, 'error');
      }
    };

    scanDirectory(path.join(this.projectRoot, 'app'));
    scanDirectory(path.join(this.projectRoot, 'components'));
    scanDirectory(path.join(this.projectRoot, 'pages'));
    scanDirectory(path.join(this.projectRoot, 'src'));
    
    return files;
  }

  async run() {
    this.log('Starting import fixing...');
    
    const files = await this.getAllFiles();
    this.log(`Found ${files.length} files to check`);
    
    let fixedCount = 0;
    for (const file of files) {
      if (await this.fixFile(file)) {
        fixedCount++;
      }
    }
    
    this.log(`Fixed imports in ${fixedCount} files`);
    
    return true;
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const fixer = new ImportFixer();
  fixer.run().then(() => {
    process.exit(0);
  });
}

export default ImportFixer;