#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class AllReactImportsFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${type}] ${message}`);
  }

  async fixFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Check for missing React hooks
      if (content.includes('useState') && !content.includes("import { useState } from 'react'")) {
        content = "import { useState } from 'react';\n" + content;
        modified = true;
      }
      
      if (content.includes('useEffect') && !content.includes("import { useEffect } from 'react'")) {
        if (content.includes("import { useState } from 'react'")) {
          content = content.replace("import { useState } from 'react';", "import { useState, useEffect } from 'react';");
        } else {
          content = "import { useEffect } from 'react';\n" + content;
        }
        modified = true;
      }
      
      if (content.includes('useRouter') && !content.includes("import { useRouter } from 'next/router'")) {
        content = "import { useRouter } from 'next/router';\n" + content;
        modified = true;
      }
      
      // Check for missing motion import
      if (content.includes('<motion.') && !content.includes("import { motion } from 'framer-motion'")) {
        content = "import { motion } from 'framer-motion';\n" + content;
        modified = true;
      }
      
      // Check for missing common icons
      const commonIcons = ['ArrowRight', 'CheckCircle', 'Star', 'Globe', 'Users', 'Shield', 'Zap', 'Cloud', 'Database', 'Lock', 'Eye', 'Target', 'TrendingUp', 'BarChart3', 'FileText', 'Video', 'Mic', 'Code', 'Settings', 'Monitor', 'Network', 'Car', 'Rocket', 'Heart', 'Building', 'Sprout', 'Mail', 'ShoppingCart', 'BookOpen', 'Home', 'Search', 'MessageSquare', 'Clock', 'Award', 'DollarSign', 'Package', 'Calendar', 'Trash2', 'Camera', 'HardDrive', 'Smartphone', 'Server', 'Cpu', 'Bot'];
      
      for (const icon of commonIcons) {
        if (content.includes(icon) && !content.includes(`import { ${icon}`) && !content.includes(`from 'lucide-react'`)) {
          // Find existing lucide-react import
          const lucideImportMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/);
          if (lucideImportMatch) {
            const existingImports = lucideImportMatch[1].split(',').map(imp => imp.trim());
            if (!existingImports.includes(icon)) {
              const newImports = [...existingImports, icon];
              const newImportStatement = `import { ${newImports.join(', ')} } from 'lucide-react'`;
              content = content.replace(lucideImportMatch[0], newImportStatement);
              modified = true;
            }
          } else {
            // Add new lucide-react import
            content = `import { ${icon} } from 'lucide-react';\n` + content;
            modified = true;
          }
        }
      }
      
      if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.fixedFiles.push(filePath);
        this.log(`✅ Fixed React imports in: ${path.relative(this.projectRoot, filePath)}`);
        return true;
      }
      return false;
    } catch (error) {
      this.log(`❌ Error fixing ${filePath}: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async findFilesToFix() {
    this.log('🔍 Finding files that need React import fixes...');
    
    const pagesDir = path.join(this.projectRoot, 'pages');
    const files = [];
    
    const scanDirectory = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            scanDirectory(fullPath);
          } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
            files.push(fullPath);
          }
        }
      } catch (err) {
        // Skip directories that can't be accessed
      }
    };
    
    scanDirectory(pagesDir);
    this.log(`Found ${files.length} files to check`);
    return files;
  }

  async run() {
    this.log('🚀 Starting comprehensive React imports fix...');
    
    try {
      const files = await this.findFilesToFix();
      
      for (const file of files) {
        await this.fixFile(file);
      }
      
      this.log(`\n📊 React Imports Fix Summary:`);
      this.log(`  - Files processed: ${files.length}`);
      this.log(`  - Files fixed: ${this.fixedFiles.length}`);
      
      this.log('\n🎉 Comprehensive React imports fix completed!');
      
    } catch (error) {
      this.log(`❌ Fatal error: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

// Run the fixer
const fixer = new AllReactImportsFixer();
fixer.run().catch(console.error);