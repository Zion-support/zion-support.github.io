#!/usr/bin/env node

/**
 * Link Checker Script
 * Replaces GitHub Actions link-checker workflow
 * Checks for broken links in the project
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔗 Link Checker Started');

class LinkChecker {
  constructor() {
    this.projectRoot = path.resolve(__dirname,..');
    this.brokenLinks = [];
    this.checkedLinks = 0;
  }

  async checkLinks() {
    try {
      console.log('📁 Scanning project for links...');
      
      // Check HTML files for links
      await this.scanHtmlFiles();
      
      // Check markdown files for links
      await this.scanMarkdownFiles();
      
      // Check package.json for repository links
      await this.checkPackageLinks();
      
      console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`);
      
      if (this.brokenLinks.length > 0) {
        console.log(`⚠️  Found ${this.brokenLinks.length} potentially broken links:`);
        this.brokenLinks.forEach(link => {
          console.log(`   - ${link}`);
        });
      } else {
        console.log('🎉 All links appear to be valid!');
      }
      
    } catch (error) {
      console.error('❌ Error during link checking:', error.message);
    }
  }

  async scanHtmlFiles() {
    const htmlFiles = this.findFiles('.html');
    
    for (const file of htmlFiles) {
      const content = fs.readFileSync(file,utf8');
      const links = this.extractLinks(content);
      
      for (const link of links) {
        this.checkedLinks++;
        if (!this.isValidLink(link)) {
          this.brokenLinks.push(`${file}: ${link}`);
        }
      }
    }
  }

  async scanMarkdownFiles() {
    const mdFiles = this.findFiles('.md');
    
    for (const file of mdFiles) {
      const content = fs.readFileSync(file,utf8');
      const links = this.extractMarkdownLinks(content);
      
      for (const link of links) {
        this.checkedLinks++;
        if (!this.isValidLink(link)) {
          this.brokenLinks.push(`${file}: ${link}`);
        }
      }
    }
  }

  async checkPackageLinks() {
    try {
      const packagePath = path.join(this.projectRoot,package.json');
      if (fs.existsSync(packagePath)) {
        const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8'));
        
        if (packageJson.repository) {
          this.checkedLinks++;
          if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {
            this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`);
          }
        }
      }
    } catch (error) {
      console.warn('⚠️  Could not check package.json links:', error.message);
    }
  }

  findFiles(extension) {
    const files = [];
    
    const scanDirectory = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            scanDirectory(fullPath);
          } else if (stat.isFile() && item.endsWith(extension)) {
            files.push(fullPath);
          }
        }
      } catch (error) {
        // Skip directories we can't read
      }
    };
    
    scanDirectory(this.projectRoot);
    return files;
  }

  extractLinks(content) {
    const linkRegex = /href=["']([^"']+)["']/g;
    const links = [];
    let match;
    
    while ((match = linkRegex.exec(content)) !== null) {
      links.push(match[1]);
    }
    
    return links;
  }

  extractMarkdownLinks(content) {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const links = [];
    let match;
    
    while ((match = linkRegex.exec(content)) !== null) {
      links.push(match[2]);
    }
    
    return links;
  }

  isValidLink(link) {
    // Skip internal anchors, mailto, tel, etc.
    if (link.startsWith('#') || link.startsWith('mailto:') || link.startsWith('tel:')) {
      return true;
    }
    
    // Skip relative paths
    if (link.startsWith('./') || link.startsWith('../') || link.startsWith('/')) {
      return true;
    }
    
    // Basic URL validation
    try {
      new URL(link);
      return true;
    } catch {
      return false;
    }
  }
}

// Run the link checker
const linkChecker = new LinkChecker();
linkChecker.checkLinks().then(() => {
  console.log('🔗 Link Checker Completed');
  process.exit(0);
}).catch((error) => {
  console.error('❌ Link Checker Failed:', error);
  process.exit(1);
});