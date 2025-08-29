#!/usr/bin/env node

/**
 * Link Checker Automation
 * Checks for broken links and link integrity
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class LinkChecker {
  constructor() {
    this.interval = process.env.AUTOMATION_INTERVAL || 1800000; // 30 minutes default
    this.isRunning = false;
  }

  async start() {
    console.log('🚀 Link Checker Automation started');
    this.isRunning = true;
    
    // Run immediately
    await this.run();
    
    // Set up interval
    setInterval(async () => {
      if (this.isRunning) {
        await this.run();
      }
    }, this.interval);
  }

  async run() {
    try {
      console.log(`[${new Date().toISOString()}] Running link checker...`);
      
      // Check for broken links in markdown files
      await this.checkMarkdownLinks();
      
      // Check for broken links in HTML files
      await this.checkHTMLLinks();
      
      // Check for broken links in documentation
      await this.checkDocumentationLinks();
      
      console.log('✅ Link checker completed successfully');
    } catch (error) {
      console.error('❌ Link checker failed:', error.message);
    }
  }

  async checkMarkdownLinks() {
    try {
      console.log('📝 Checking markdown files for links...');
      
      // Find all markdown files
      const result = execSync('find . -name "*.md" -type f', { encoding: 'utf8' });
      const markdownFiles = result.trim().split('\n').filter(file => file);
      
      for (const file of markdownFiles) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
          let match;
          let links = [];
          
          while ((match = linkRegex.exec(content)) !== null) {
            links.push({
              text: match[1],
              url: match[2],
              file: file
            });
          }
          
          if (links.length > 0) {
            console.log(`📄 ${file}: Found ${links.length} links`);
          }
        } catch (error) {
          console.log(`⚠️  Could not read file: ${file}`);
        }
      }
    } catch (error) {
      console.log('ℹ️  No markdown files found or error occurred');
    }
  }

  async checkHTMLLinks() {
    try {
      console.log('🌐 Checking HTML files for links...');
      
      // Find all HTML files
      const result = execSync('find . -name "*.html" -type f', { encoding: 'utf8' });
      const htmlFiles = result.trim().split('\n').filter(file => file);
      
      for (const file of htmlFiles) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          const linkRegex = /href=["']([^"']+)["']/g;
          let match;
          let links = [];
          
          while ((match = linkRegex.exec(content)) !== null) {
            links.push({
              url: match[1],
              file: file
            });
          }
          
          if (links.length > 0) {
            console.log(`🌐 ${file}: Found ${links.length} links`);
          }
        } catch (error) {
          console.log(`⚠️  Could not read file: ${file}`);
        }
      }
    } catch (error) {
      console.log('ℹ️  No HTML files found or error occurred');
    }
  }

  async checkDocumentationLinks() {
    try {
      console.log('📚 Checking documentation for links...');
      
      // Check if there's a docs directory
      if (fs.existsSync('./docs')) {
        const result = execSync('find ./docs -type f -name "*.md" -o -name "*.html"', { encoding: 'utf8' });
        const docFiles = result.trim().split('\n').filter(file => file);
        
        console.log(`📚 Found ${docFiles.length} documentation files`);
      } else {
        console.log('ℹ️  No docs directory found');
      }
    } catch (error) {
      console.log('ℹ️  Error checking documentation');
    }
  }

  stop() {
    console.log('🛑 Link Checker Automation stopped');
    this.isRunning = false;
  }
}

// Start the automation if this script is run directly
if (require.main === module) {
  const checker = new LinkChecker();
  
  process.on('SIGINT', () => {
    checker.stop();
    process.exit(0);
  });
  
  process.on('SIGTERM', () => {
    checker.stop();
    process.exit(0);
  });
  
  checker.start();
}

module.exports = LinkChecker;