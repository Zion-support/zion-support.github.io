#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class AllMissingImportsFixer {
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
      
      // Common imports that are often missing
      const commonImports = {
        'Layout': "import Layout from '../components/Layout';",
        'Link': "import Link from 'next/link';",
        'Head': "import Head from 'next/head';",
        'Image': "import Image from 'next/image';",
        'useState': "import { useState } from 'react';",
        'useEffect': "import { useEffect } from 'react';",
        'useRouter': "import { useRouter } from 'next/router';",
        'motion': "import { motion } from 'framer-motion';",
        'framer-motion': "import { motion } from 'framer-motion';"
      };
      
      // Check for missing imports
      for (const [component, importStatement] of Object.entries(commonImports)) {
        if (content.includes(component) && !content.includes(importStatement)) {
          // Add import at the top of the file
          content = importStatement + '\n' + content;
          modified = true;
        }
      }
      
      if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.fixedFiles.push(filePath);
        this.log(`✅ Fixed missing imports in: ${path.relative(this.projectRoot, filePath)}`);
        return true;
      }
      return false;
    } catch (error) {
      this.log(`❌ Error fixing ${filePath}: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async findFilesToFix() {
    this.log('🔍 Finding files that need import fixes...');
    
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
    this.log('🚀 Starting comprehensive missing imports fix...');
    
    try {
      const files = await this.findFilesToFix();
      
      for (const file of files) {
        await this.fixFile(file);
      }
      
      this.log(`\n📊 Missing Imports Fix Summary:`);
      this.log(`  - Files processed: ${files.length}`);
      this.log(`  - Files fixed: ${this.fixedFiles.length}`);
      
      this.log('\n🎉 Comprehensive missing imports fix completed!');
      
    } catch (error) {
      this.log(`❌ Fatal error: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

// Run the fixer
const fixer = new AllMissingImportsFixer();
fixer.run().catch(console.error);