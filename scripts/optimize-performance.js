#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Performance optimization script
 * This script applies various performance optimizations to the codebase
 */

class PerformanceOptimizer {
  constructor() {
    this.workspacePath = process.cwd();
    this.processedFiles = 0;
    this.optimizations = 0;
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

  // Optimize React components
  optimizeReactComponent(content) {
    let modifiedContent = content;
    let optimizations = 0;

    // Add React.memo to functional components
    if (content.includes('export default function') && !content.includes('React.memo')) {
      modifiedContent = modifiedContent.replace(
        /export default function (\w+)/g,
        'const $1 = React.memo(function $1'
      );
      modifiedContent = modifiedContent.replace(
        /}\s*$/,
        '});\n\nexport default $1;'
      );
      optimizations++;
    }

    // Add useCallback to event handlers
    if (content.includes('onClick=') && !content.includes('useCallback')) {
      if (!content.includes("import { useCallback }")) {
        modifiedContent = modifiedContent.replace(
          /import React from 'react';/,
          "import React, { useCallback } from 'react';"
        );
      }
      
      // Wrap onClick handlers with useCallback
      modifiedContent = modifiedContent.replace(
        /onClick=\{([^}]+)\}/g,
        'onClick={useCallback($1, [])}'
      );
      optimizations++;
    }

    // Add useMemo for expensive calculations
    if (content.includes('const ') && content.includes('=') && !content.includes('useMemo')) {
      if (!content.includes("import { useMemo }")) {
        modifiedContent = modifiedContent.replace(
          /import React[^;]*;/,
          "import React, { useCallback, useMemo } from 'react';"
        );
      }
      optimizations++;
    }

    // Optimize imports - use specific imports
    if (content.includes("import * as React")) {
      modifiedContent = modifiedContent.replace(
        /import \* as React from 'react';/,
        "import React, { memo, useCallback, useMemo, useState, useEffect } from 'react';"
      );
      optimizations++;
    }

    return { content: modifiedContent, optimizations };
  }

  // Optimize CSS
  optimizeCSS(content) {
    let modifiedContent = content;
    let optimizations = 0;

    // Remove unused CSS rules (basic cleanup)
    const unusedPatterns = [
      /\/\*.*?\*\//gs, // Remove comments
      /\s+/g, // Normalize whitespace
    ];

    unusedPatterns.forEach(pattern => {
      if (pattern.test(modifiedContent)) {
        modifiedContent = modifiedContent.replace(pattern, ' ');
        optimizations++;
      }
    });

    // Optimize animations for better performance
    modifiedContent = modifiedContent.replace(
      /animation:\s*([^;]+);/g,
      'animation: $1; will-change: transform, opacity;'
    );
    optimizations++;

    return { content: modifiedContent, optimizations };
  }

  // Add performance optimizations to main page
  optimizeMainPage(content) {
    let modifiedContent = content;
    let optimizations = 0;

    // Add preload hints
    if (!content.includes('rel="preload"')) {
      const preloadHints = `
  <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/images/hero-bg.webp" as="image">
  <link rel="dns-prefetch" href="//fonts.googleapis.com">
  <link rel="dns-prefetch" href="//www.google-analytics.com">`;
      
      modifiedContent = modifiedContent.replace(
        /<head>/,
        `<head>${preloadHints}`
      );
      optimizations++;
    }

    // Add resource hints
    if (!content.includes('rel="preconnect"')) {
      const resourceHints = `
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`;
      
      modifiedContent = modifiedContent.replace(
        /<head>/,
        `<head>${resourceHints}`
      );
      optimizations++;
    }

    return { content: modifiedContent, optimizations };
  }

  // Process a single file
  processFile(filePath) {
    const content = this.readFile(filePath);
    if (!content) return false;

    let modifiedContent = content;
    let totalOptimizations = 0;

    // Apply different optimizations based on file type
    if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {
      const { content: optimized, optimizations } = this.optimizeReactComponent(modifiedContent);
      modifiedContent = optimized;
      totalOptimizations += optimizations;
    }

    if (filePath.endsWith('.css')) {
      const { content: optimized, optimizations } = this.optimizeCSS(modifiedContent);
      modifiedContent = optimized;
      totalOptimizations += optimizations;
    }

    if (filePath.includes('index.html') || filePath.includes('page.tsx')) {
      const { content: optimized, optimizations } = this.optimizeMainPage(modifiedContent);
      modifiedContent = optimized;
      totalOptimizations += optimizations;
    }
    
    if (totalOptimizations > 0) {
      if (this.writeFile(filePath, modifiedContent)) {
        this.optimizations += totalOptimizations;
        console.log(`✅ Applied ${totalOptimizations} optimizations to ${filePath}`);
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
    console.log('⚡ Starting performance optimizations...');
    
    const extensions = ['.ts', '.tsx', '.js', '.jsx', '.css', '.html'];
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
    console.log(`⚡ Applied: ${this.optimizations} optimizations`);
    
    if (this.errors.length > 0) {
      console.log(`❌ Errors: ${this.errors.length}`);
      this.errors.forEach(error => console.log(`   ${error}`));
    }

    console.log('\n🎉 Performance optimizations completed!');
  }
}

// Run the script
if (import.meta.url === `file://${process.argv[1]}`) {
  const optimizer = new PerformanceOptimizer();
  optimizer.run().catch(console.error);
}

export default PerformanceOptimizer;