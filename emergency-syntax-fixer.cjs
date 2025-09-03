#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class EmergencySyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
  }

  fixFile(filePath) {
    try {
      if (!fs.existsSync(filePath)) return false;
      
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      
      // Fix severely corrupted syntax
      content = content.replace(/,\s*;,\s*}/g, '}');
      content = content.replace(/,\s*;$/gm, '');
      content = content.replace(/,\s*$/gm, '');
      content = content.replace(/;\s*$/gm, '');
      content = content.replace(/,\s*{/g, ' {');
      content = content.replace(/\[\s*,/g, '[');
      content = content.replace(/{\s*,/g, '{');
      content = content.replace(/,\s*\]/g, ']');
      content = content.replace(/,\s*}/g, '}');
      content = content.replace(/React\.FCimport Layout from "\.\.\/components\/Layout",/g, 'React.FC');
      content = content.replace(/<LayoutProps>\s*=\s*\(\{\s*,/g, '<LayoutProps> = ({');
      content = content.replace(/children,\s*"/g, 'children,');
      content = content.replace(/title\s*=\s*"[^"]*",/g, 'title = "Zion Tech Group - Leading Technology Solutions Provider",');
      content = content.replace(/description\s*=\s*"[^"]*";,/g, 'description = "Zion Tech Group provides cutting-edge technology solutions for modern businesses."');
      content = content.replace(/const\s+(\w+)\s*=\s*\[\s*,/g, 'const $1 = [');
      content = content.replace(/{\s*,/g, '{');
      content = content.replace(/id:\s*\d+,\s*$/gm, 'id: 1,');
      content = content.replace(/title:\s*"[^"]*",\s*$/gm, 'title: "Sample Title",');
      content = content.replace(/excerpt:\s*"[^"]*",\s*$/gm, 'excerpt: "Sample excerpt",');
      content = content.replace(/date:\s*"[^"]*",\s*$/gm, 'date: "2024-01-01",');
      content = content.replace(/author:\s*"[^"]*",\s*$/gm, 'author: "Author",');
      content = content.replace(/category:\s*"[^"]*",\s*;,\s*$/gm, 'category: "Category"');
      content = content.replace(/return\s*\(\s*<>\s*,\s*$/gm, 'return (\n    <>');
      content = content.replace(/<>\s*,\s*$/gm, '<>');
      content = content.replace(/export default function (\w+)\(\)\s*{\s*$/gm, 'export default function $1() {\n  return (\n    <>\n      <div>Content</div>\n    </>\n  );');
      content = content.replace(/const\s+(\w+):\s*NextPage\s*=\s*\(\)\s*=>\s*{\s*return\s*\(\s*<>\s*,\s*$/gm, 'const $1: NextPage = () => {\n  return (\n    <>');
      content = content.replace(/}\s*$/gm, '}\n}');
      content = content.replace(/export default (\w+)\s*$/gm, 'export default $1;');
      
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

  fixDirectory(dirPath) {
    if (!fs.existsSync(dirPath)) return;
    
    const files = fs.readdirSync(dirPath, { withFileTypes: true });
    let fixedCount = 0;

    files.forEach(file => {
      if (file.isFile() && (file.name.endsWith('.tsx') || file.name.endsWith('.jsx'))) {
        const filePath = path.join(dirPath, file.name);
        if (this.fixFile(filePath)) {
          fixedCount++;
        }
      } else if (file.isDirectory() && !file.name.startsWith('.') && file.name !== 'node_modules') {
        this.fixDirectory(path.join(dirPath, file.name));
      }
    });

    return fixedCount;
  }

  run() {
    console.log('Starting emergency syntax fixer...');
    
    const directories = ['pages', 'components'];
    let totalFixed = 0;
    
    directories.forEach(dir => {
      const dirPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(dirPath)) {
        console.log(`Fixing directory: ${dir}`);
        const fixed = this.fixDirectory(dirPath);
        totalFixed += fixed;
        console.log(`Fixed ${fixed} files in ${dir}`);
      }
    });
    
    console.log(`Total files fixed: ${totalFixed}`);
    console.log('Emergency syntax fixer completed!');
  }
}

if (require.main === module) {
  const fixer = new EmergencySyntaxFixer();
  fixer.run();
}

module.exports = EmergencySyntaxFixer;