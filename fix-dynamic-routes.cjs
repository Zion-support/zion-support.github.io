#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class DynamicRoutesFixer {
  constructor() {
    this.fixedFiles = [];
    this.errors = [];
    this.pagesDir = path.join(__dirname, 'pages');
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  error(message) {
    console.error(`[ERROR] ${message}`);
    this.errors.push(message);
  }

  fixDynamicRoute(fileName) {
    // Remove file extension
    const nameWithoutExt = fileName.replace(/\.(tsx?|jsx?)$/, '');
    
    // Handle dynamic routes
    if (nameWithoutExt === '[slug]') return 'SlugPage';
    if (nameWithoutExt === '[id]') return 'DetailPage';
    if (nameWithoutExt.startsWith('[') && nameWithoutExt.endsWith(']')) {
      const paramName = nameWithoutExt.slice(1, -1);
      return `${paramName.charAt(0).toUpperCase() + paramName.slice(1)}Page`;
    }
    
    return nameWithoutExt
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
  }

  async fixFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const fileName = path.basename(filePath);
      const validComponentName = this.fixDynamicRoute(fileName);
      
      // Replace the component name in the file
      const fixedContent = content
        .replace(/interface\s+[a-zA-Z0-9-_\[\]]+Props/g, `interface ${validComponentName}Props`)
        .replace(/const\s+[a-zA-Z0-9-_\[\]]+:/g, `const ${validComponentName}:`)
        .replace(/React\.FC<[a-zA-Z0-9-_\[\]]+Props>/g, `React.FC<${validComponentName}Props>`)
        .replace(/export default\s+[a-zA-Z0-9-_\[\]]+/g, `export default ${validComponentName}`)
        .replace(/<h1>[^<]*<\/h1>/g, `<h1>${validComponentName}</h1>`);
      
      if (fixedContent !== content) {
        fs.writeFileSync(filePath, fixedContent);
        this.fixedFiles.push(filePath);
        this.log(`Fixed: ${filePath}`);
        return true;
      }
      
      return false;
    } catch (err) {
      this.error(`Failed to fix ${filePath}: ${err.message}`);
      return false;
    }
  }

  async findAndFixFiles(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        await this.findAndFixFiles(filePath);
      } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')) {
        // Only fix files with dynamic routes
        if (file.startsWith('[') && file.endsWith(']')) {
          await this.fixFile(filePath);
        }
      }
    }
  }

  async run() {
    this.log('Starting dynamic routes fixing...');
    
    try {
      await this.findAndFixFiles(this.pagesDir);
      
      this.log(`Fixed ${this.fixedFiles.length} files`);
      
      if (this.errors.length > 0) {
        this.log(`Encountered ${this.errors.length} errors:`);
        this.errors.forEach(error => this.log(`  - ${error}`));
      }

      // Try to build after fixing
      this.log('Attempting build after fixes...');
      try {
        execSync('npm run build', { stdio: 'inherit' });
        this.log('Build successful!');
      } catch (buildError) {
        this.log('Build still has issues, but files should be fixed');
      }

    } catch (error) {
      this.error(`Fatal error: ${error.message}`);
      process.exit(1);
    }
  }
}

// Run the fixer
const fixer = new DynamicRoutesFixer();
fixer.run().catch(console.error);