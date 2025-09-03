#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class FinalSyntaxCleanup {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
  }

  fixFile(filePath) {
    try {
      if (!fs.existsSync(filePath)) return false;
      
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      
      // Fix specific syntax errors
      content = content.replace(/\);,/g, ');');
      content = content.replace(/dynamic\(\(\) => import\("([^"]+)"\)\s*{\s*ssr:\s*false\s*}\)/g, 'dynamic(() => import("$1"), { ssr: false })');
      content = content.replace(/dynamic\(\(\) => import\("([^"]+)"\)\s*{\s*ssr:\s*false\s*}/g, 'dynamic(() => import("$1"), { ssr: false })');
      content = content.replace(/import\("([^"]+)"\)\s*{\s*ssr:\s*false\s*}/g, 'import("$1"), { ssr: false }');
      content = content.replace(/import\("([^"]+)"\)\s*{\s*ssr:\s*false\s*}/g, 'import("$1"), { ssr: false }');
      content = content.replace(/export default (\w+)\s*$/gm, 'export default $1;');
      content = content.replace(/const (\w+) = dynamic\(\(\) => import\("([^"]+)"\)\s*{\s*ssr:\s*false\s*}\)/g, 'const $1 = dynamic(() => import("$2"), { ssr: false })');
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.fixedFiles.push(filePath);
        console.log(`Fixed: ${filePath}`);
        return true;
      }
      return false;
    } catch (error) {
      console.error(`Error fixing ${filePath}:`, error.message);
      return false;
    }
  }

  fixPagesDirectory() {
    const pagesDir = path.join(this.projectRoot, 'pages');
    if (!fs.existsSync(pagesDir)) return;
    
    const files = fs.readdirSync(pagesDir, { withFileTypes: true });
    let fixedCount = 0;

    files.forEach(file => {
      if (file.isFile() && (file.name.endsWith('.tsx') || file.name.endsWith('.jsx'))) {
        const filePath = path.join(pagesDir, file.name);
        if (this.fixFile(filePath)) {
          fixedCount++;
        }
      }
    });

    console.log(`Fixed ${fixedCount} page files`);
  }

  run() {
    console.log('Starting final syntax cleanup...');
    this.fixPagesDirectory();
    console.log('Final syntax cleanup completed!');
  }
}

if (require.main === module) {
  const cleanup = new FinalSyntaxCleanup();
  cleanup.run();
}

module.exports = FinalSyntaxCleanup;