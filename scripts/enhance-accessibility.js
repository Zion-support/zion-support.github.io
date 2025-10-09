#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Accessibility enhancement script
 * This script adds accessibility improvements to the codebase
 */

class AccessibilityEnhancer {
  constructor() {
    this.workspacePath = process.cwd();
    this.processedFiles = 0;
    this.enhancements = 0;
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

  // Enhance React components for accessibility
  enhanceReactComponent(content) {
    let modifiedContent = content;
    let enhancements = 0;

    // Add ARIA labels to buttons without text
    if (content.includes('<button') && !content.includes('aria-label')) {
      modifiedContent = modifiedContent.replace(
        /<button([^>]*?)>/g,
        (match, attrs) => {
          if (!attrs.includes('aria-label') && !attrs.includes('aria-labelledby')) {
            return `<button${attrs} aria-label="Button">`;
          }
          return match;
        }
      );
      enhancements++;
    }

    // Add alt text to images
    if (content.includes('<img') && !content.includes('alt=')) {
      modifiedContent = modifiedContent.replace(
        /<img([^>]*?)>/g,
        (match, attrs) => {
          if (!attrs.includes('alt=')) {
            return `<img${attrs} alt="Image">`;
          }
          return match;
        }
      );
      enhancements++;
    }

    // Add role attributes to interactive elements
    if (content.includes('<div') && content.includes('onClick')) {
      modifiedContent = modifiedContent.replace(
        /<div([^>]*?)onClick/g,
        (match, attrs) => {
          if (!attrs.includes('role=')) {
            return `<div${attrs} role="button" tabIndex="0" onClick`;
          }
          return match;
        }
      );
      enhancements++;
    }

    // Add focus management
    if (content.includes('useState') && !content.includes('useRef')) {
      modifiedContent = modifiedContent.replace(
        /import React[^;]*;/,
        "import React, { useRef, useEffect } from 'react';"
      );
      enhancements++;
    }

    // Add keyboard navigation
    if (content.includes('onClick') && !content.includes('onKeyDown')) {
      modifiedContent = modifiedContent.replace(
        /onClick=\{([^}]+)\}/g,
        'onClick={$1} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { $1(e); } }}'
      );
      enhancements++;
    }

    // Add skip links
    if (content.includes('<main') && !content.includes('skip')) {
      const skipLink = `
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50">
          Skip to main content
        </a>`;
      modifiedContent = modifiedContent.replace(
        /<main/,
        `${skipLink}\n        <main`
      );
      enhancements++;
    }

    // Add semantic HTML elements
    if (content.includes('<div') && content.includes('header')) {
      modifiedContent = modifiedContent.replace(
        /<div([^>]*?)className="[^"]*header[^"]*"/g,
        '<header$1className="header"'
      );
      enhancements++;
    }

    if (content.includes('<div') && content.includes('footer')) {
      modifiedContent = modifiedContent.replace(
        /<div([^>]*?)className="[^"]*footer[^"]*"/g,
        '<footer$1className="footer"'
      );
      enhancements++;
    }

    // Add form accessibility
    if (content.includes('<input') && !content.includes('aria-describedby')) {
      modifiedContent = modifiedContent.replace(
        /<input([^>]*?)>/g,
        (match, attrs) => {
          if (!attrs.includes('aria-describedby')) {
            return `<input${attrs} aria-describedby="input-help">`;
          }
          return match;
        }
      );
      enhancements++;
    }

    return { content: modifiedContent, enhancements };
  }

  // Enhance CSS for accessibility
  enhanceCSS(content) {
    let modifiedContent = content;
    let enhancements = 0;

    // Add focus styles
    if (!content.includes(':focus')) {
      const focusStyles = `
/* Focus styles for accessibility */
*:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

button:focus,
a:focus,
input:focus,
textarea:focus,
select:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* Skip link styles */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.sr-only:focus {
  position: static;
  width: auto;
  height: auto;
  padding: 0.5rem;
  margin: 0;
  overflow: visible;
  clip: auto;
  white-space: normal;
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .cyber-card {
    border: 2px solid #00ffff;
  }
  
  .neon-text {
    color: #00ffff;
    text-shadow: none;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}`;
      
      modifiedContent = modifiedContent + focusStyles;
      enhancements++;
    }

    return { content: modifiedContent, enhancements };
  }

  // Process a single file
  processFile(filePath) {
    const content = this.readFile(filePath);
    if (!content) return false;

    let modifiedContent = content;
    let totalEnhancements = 0;

    // Apply different enhancements based on file type
    if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {
      const { content: enhanced, enhancements } = this.enhanceReactComponent(modifiedContent);
      modifiedContent = enhanced;
      totalEnhancements += enhancements;
    }

    if (filePath.endsWith('.css')) {
      const { content: enhanced, enhancements } = this.enhanceCSS(modifiedContent);
      modifiedContent = enhanced;
      totalEnhancements += enhancements;
    }
    
    if (totalEnhancements > 0) {
      if (this.writeFile(filePath, modifiedContent)) {
        this.enhancements += totalEnhancements;
        console.log(`✅ Applied ${totalEnhancements} accessibility enhancements to ${filePath}`);
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
    console.log('♿ Starting accessibility enhancements...');
    
    const extensions = ['.ts', '.tsx', '.js', '.jsx', '.css'];
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
    console.log(`♿ Applied: ${this.enhancements} accessibility enhancements`);
    
    if (this.errors.length > 0) {
      console.log(`❌ Errors: ${this.errors.length}`);
      this.errors.forEach(error => console.log(`   ${error}`));
    }

    console.log('\n🎉 Accessibility enhancements completed!');
  }
}

// Run the script
if (import.meta.url === `file://${process.argv[1]}`) {
  const enhancer = new AccessibilityEnhancer();
  enhancer.run().catch(console.error);
}

export default AccessibilityEnhancer;