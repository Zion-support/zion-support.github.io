#!/usr/bin/env node

/**
 * CSS purging script to remove unused CSS and reduce bundle size
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class CSSPurger {
  constructor() {
    this.distPath = path.join(__dirname, '..', 'dist');
    this.srcPath = path.join(__dirname, '..', 'src');
    this.usedClasses = new Set();
    this.usedSelectors = new Set();
  }

  async purge() {
    console.log('🧹 Purging unused CSS...\n');

    if (!fs.existsSync(this.distPath)) {
      console.error('❌ Dist directory not found. Please run build first.');
      process.exit(1);
    }

    await this.scanForUsedClasses();
    await this.purgeCSSFiles();
    this.printReport();
  }

  async scanForUsedClasses() {
    console.log('🔍 Scanning for used CSS classes...');

    // Scan all HTML, JS, and TSX files for class usage
    const files = this.getAllFiles(this.srcPath, [
      '.html',
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
    ]);

    for (const file of files) {
      const content = fs.readFileSync(file, 'utf8');
      this.extractClassesFromContent(content);
    }

    // Also scan the built HTML file
    const htmlFile = path.join(this.distPath, 'index.html');
    if (fs.existsSync(htmlFile)) {
      const content = fs.readFileSync(htmlFile, 'utf8');
      this.extractClassesFromContent(content);
    }

    console.log(`✅ Found ${this.usedClasses.size} used CSS classes`);
  }

  getAllFiles(dir, extensions) {
    let files = [];
    const items = fs.readdirSync(dir, { withFileTypes: true });

    for (const item of items) {
      const fullPath = path.join(dir, item.name);

      if (
        item.isDirectory() &&
        !item.name.startsWith('.') &&
        item.name !== 'node_modules'
      ) {
        files = files.concat(this.getAllFiles(fullPath, extensions));
      } else if (
        item.isFile() &&
        extensions.some(ext => item.name.endsWith(ext))
      ) {
        files.push(fullPath);
      }
    }

    return files;
  }

  extractClassesFromContent(content) {
    // Extract class names from various patterns
    const patterns = [
      /className\s*=\s*["'`]([^"'`]+)["'`]/g,
      /class\s*=\s*["'`]([^"'`]+)["'`]/g,
      /class:\s*["'`]([^"'`]+)["'`]/g,
      /tw`([^`]+)`/g, // Tailwind template literals
      /cn\([^)]*["'`]([^"'`]+)["'`]/g, // clsx/twMerge patterns
    ];

    patterns.forEach(pattern => {
      let match;
      while ((match = pattern.exec(content)) !== null) {
        const classString = match[1];
        const classes = classString.split(/\s+/).filter(cls => cls.trim());
        classes.forEach(cls => {
          this.usedClasses.add(cls.trim());
        });
      }
    });

    // Extract Tailwind classes from template literals
    const tailwindPattern = /(?:tw|cn)\([^)]*`([^`]+)`/g;
    let match;
    while ((match = tailwindPattern.exec(content)) !== null) {
      const classString = match[1];
      const classes = classString.split(/\s+/).filter(cls => cls.trim());
      classes.forEach(cls => {
        this.usedClasses.add(cls.trim());
      });
    }
  }

  async purgeCSSFiles() {
    const cssFiles = fs
      .readdirSync(this.distPath, { recursive: true })
      .filter(file => typeof file === 'string' && file.endsWith('.css'))
      .map(file => path.join(this.distPath, file));

    for (const cssFile of cssFiles) {
      await this.purgeCSSFile(cssFile);
    }
  }

  async purgeCSSFile(cssFile) {
    const originalContent = fs.readFileSync(cssFile, 'utf8');
    const originalSize = originalContent.length;

    // Simple CSS purging - remove unused selectors
    const lines = originalContent.split('\n');
    const purgedLines = [];

    for (const line of lines) {
      if (this.isCSSRuleUsed(line)) {
        purgedLines.push(line);
      }
    }

    const purgedContent = purgedLines.join('\n');
    const purgedSize = purgedContent.length;
    const savings = (
      ((originalSize - purgedSize) / originalSize) *
      100
    ).toFixed(2);

    if (savings > 0) {
      fs.writeFileSync(cssFile, purgedContent);
      console.log(
        `📦 ${path.basename(cssFile)}: ${originalSize} → ${purgedSize} bytes (${savings}% reduction)`
      );
    } else {
      console.log(`📦 ${path.basename(cssFile)}: No unused CSS found`);
    }
  }

  isCSSRuleUsed(line) {
    // Skip comments and empty lines
    if (
      line.trim().startsWith('/*') ||
      line.trim().startsWith('*') ||
      line.trim() === ''
    ) {
      return true;
    }

    // Skip @ rules (imports, media queries, etc.)
    if (line.trim().startsWith('@')) {
      return true;
    }

    // Extract class names from CSS selectors
    const classPattern = /\.([a-zA-Z0-9_-]+)/g;
    const matches = line.match(classPattern);

    if (!matches) {
      return true; // Keep non-class selectors
    }

    // Check if any of the classes in this rule are used
    return matches.some(match => {
      const className = match.substring(1); // Remove the dot
      return this.usedClasses.has(className) || this.isUtilityClass(className);
    });
  }

  isUtilityClass(className) {
    // Keep common utility classes that might be dynamically generated
    const utilityPatterns = [
      /^[a-z]+-\d+$/, // Tailwind spacing (e.g., p-4, m-2)
      /^[a-z]+-\[.*\]$/, // Tailwind arbitrary values (e.g., w-[100px])
      /^hover:/, // Hover states
      /^focus:/, // Focus states
      /^active:/, // Active states
      /^group-hover:/, // Group hover
      /^dark:/, // Dark mode
      /^sm:/, // Small screens
      /^md:/, // Medium screens
      /^lg:/, // Large screens
      /^xl:/, // Extra large screens
      /^2xl:/, // 2xl screens
    ];

    return utilityPatterns.some(pattern => pattern.test(className));
  }

  printReport() {
    console.log('\n📊 CSS Purging Report');
    console.log('');
    console.log(`✅ Scanned ${this.usedClasses.size} CSS classes`);
    console.log('🎯 Removed unused CSS selectors');
    console.log('💡 Consider using Tailwind CSS purging for better results');
  }
}

// Run the purger
const purger = new CSSPurger();
purger.purge().catch(console.error);
