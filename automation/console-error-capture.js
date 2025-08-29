#!/usr/bin/env node

/**
 * Console Error Capture Automation
 * Captures browser console errors and sends them to Cursor chats for fixing
 */

const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const { execSync } = require('child_process');

class ConsoleErrorCapture {
  constructor() {
    this.errors = [];
    this.browser = null;
    this.page = null;
    this.outputDir = path.join(__dirname, '..', 'reports');
    this.errorLogFile = path.join(this.outputDir, 'console-errors.json');
    this.cursorChatFile = path.join(this.outputDir, 'cursor-chat-errors.md');
  }

  async initialize() {
    console.log('🚀 Initializing Console Error Capture Automation...');
    
    // Create output directory
    if (!fs.existsSync(this.outputDir)) {
      fs.mkdirSync(this.outputDir, { recursive: true });
    }

    // Check if Puppeteer is installed
    try {
      require.resolve('puppeteer');
    } catch (e) {
      console.log('📦 Installing Puppeteer...');
      execSync('npm install puppeteer', { stdio: 'inherit' });
    }

    // Launch browser
    this.browser = await puppeteer.launch({
      headless: false,
      devtools: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    this.page = await this.browser.newPage();
    
    // Set up console error listeners
    await this.setupErrorListeners();
    
    console.log('✅ Console Error Capture initialized successfully');
  }

  async setupErrorListeners() {
    // Listen for console errors
    this.page.on('console', msg => {
      if (msg.type() === 'error') {
        const error = {
          timestamp: new Date().toISOString(),
          type: 'console.error',
          message: msg.text(),
          location: msg.location(),
          stack: msg.stackTrace()
        };
        this.errors.push(error);
        console.log(`❌ Console Error: ${msg.text()}`);
      }
    });

    // Listen for page errors
    this.page.on('pageerror', error => {
      const pageError = {
        timestamp: new Date().toISOString(),
        type: 'page.error',
        message: error.message,
        stack: error.stack,
        name: error.name
      };
      this.errors.push(pageError);
      console.log(`❌ Page Error: ${error.message}`);
    });

    // Listen for unhandled rejections
    this.page.on('unhandledrejection', reason => {
      const rejectionError = {
        timestamp: new Date().toISOString(),
        type: 'unhandled.rejection',
        message: reason.reason?.message || String(reason.reason),
        stack: reason.reason?.stack,
        reason: reason.reason
      };
      this.errors.push(rejectionError);
      console.log(`❌ Unhandled Rejection: ${rejectionError.message}`);
    });

    // Listen for resource loading errors
    this.page.on('error', error => {
      const resourceError = {
        timestamp: new Date().toISOString(),
        type: 'resource.error',
        message: error.message,
        stack: error.stack
      };
      this.errors.push(resourceError);
      console.log(`❌ Resource Error: ${error.message}`);
    });
  }

  async captureErrors(urls) {
    console.log(`🔍 Starting error capture for ${urls.length} URLs...`);
    
    for (const url of urls) {
      try {
        console.log(`\n📄 Capturing errors from: ${url}`);
        await this.page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
        
        // Wait for page to fully load
        await this.page.waitForTimeout(3000);
        
        // Execute JavaScript to capture any existing errors
        await this.page.evaluate(() => {
          // Override console.error to capture errors
          const originalError = console.error;
          console.error = function(...args) {
            window.capturedErrors = window.capturedErrors || [];
            window.capturedErrors.push({
              message: args.map(arg => String(arg)).join(' '),
              timestamp: new Date().toISOString(),
              stack: new Error().stack
            });
            originalError.apply(console, args);
          };

          // Capture existing errors from window.onerror
          window.addEventListener('error', (event) => {
            window.capturedErrors = window.capturedErrors || [];
            window.capturedErrors.push({
              message: event.message,
              filename: event.filename,
              lineno: event.lineno,
              colno: event.colno,
              error: event.error?.stack,
              timestamp: new Date().toISOString()
            });
          });

          // Capture unhandled promise rejections
          window.addEventListener('unhandledrejection', (event) => {
            window.capturedErrors = window.capturedErrors || [];
            window.capturedErrors.push({
              message: event.reason?.message || String(event.reason),
              stack: event.reason?.stack,
              timestamp: new Date().toISOString()
            });
          });
        });

        // Wait a bit more for any delayed errors
        await this.page.waitForTimeout(2000);
        
        // Get captured errors from the page
        const pageErrors = await this.page.evaluate(() => {
          const errors = window.capturedErrors || [];
          window.capturedErrors = [];
          return errors;
        });

        // Add page errors to our collection
        pageErrors.forEach(error => {
          error.url = url;
          this.errors.push(error);
        });

        console.log(`✅ Completed: ${url}`);
        
      } catch (error) {
        console.error(`❌ Failed to capture from ${url}:`, error.message);
        this.errors.push({
          timestamp: new Date().toISOString(),
          type: 'capture.error',
          url: url,
          message: error.message,
          stack: error.stack
        });
      }
    }
  }

  generateCursorChatReport() {
    if (this.errors.length === 0) {
      console.log('🎉 No errors found!');
      return;
    }

    console.log(`\n📊 Generating Cursor Chat Report for ${this.errors.length} errors...`);

    // Group errors by type
    const errorsByType = this.errors.reduce((acc, error) => {
      const type = error.type || 'unknown';
      if (!acc[type]) acc[type] = [];
      acc[type].push(error);
      return acc;
    }, {});

    // Generate markdown report
    let markdown = `# Console Error Report for Cursor Chat\n\n`;
    markdown += `Generated: ${new Date().toLocaleString()}\n`;
    markdown += `Total Errors: ${this.errors.length}\n\n`;

    markdown += `## Summary\n\n`;
    Object.entries(errorsByType).forEach(([type, errors]) => {
      markdown += `- **${type}**: ${errors.length} errors\n`;
    });

    markdown += `\n## Detailed Error Analysis\n\n`;

    Object.entries(errorsByType).forEach(([type, errors]) => {
      markdown += `### ${type.toUpperCase()} (${errors.length} errors)\n\n`;
      
      errors.forEach((error, index) => {
        markdown += `#### Error ${index + 1}\n\n`;
        markdown += `**Timestamp**: ${error.timestamp}\n\n`;
        if (error.url) markdown += `**URL**: ${error.url}\n\n`;
        markdown += `**Message**: \`${error.message}\`\n\n`;
        
        if (error.stack) {
          markdown += `**Stack Trace**:\n\`\`\`\n${error.stack}\n\`\`\`\n\n`;
        }
        
        if (error.location) {
          markdown += `**Location**: ${JSON.stringify(error.location, null, 2)}\n\n`;
        }
        
        markdown += `---\n\n`;
      });
    });

    markdown += `## Recommended Actions\n\n`;
    markdown += `1. **Review Error Patterns**: Identify common error types and their root causes\n`;
    markdown += `2. **Fix Critical Errors**: Address errors that affect user experience first\n`;
    markdown += `3. **Update Error Handling**: Implement proper error boundaries and fallbacks\n`;
    markdown += `4. **Test Fixes**: Verify that fixes resolve the reported errors\n`;
    markdown += `5. **Monitor**: Set up ongoing error monitoring to prevent regressions\n\n`;

    markdown += `## Next Steps for Cursor Chat\n\n`;
    markdown += `Please analyze these errors and provide specific code fixes for each type of error. `;
    markdown += `Focus on:\n\n`;
    markdown += `- Root cause analysis\n`;
    markdown += `- Code-level solutions\n`;
    markdown += `- Prevention strategies\n`;
    markdown += `- Testing recommendations\n\n`;

    // Save markdown report
    fs.writeFileSync(this.cursorChatFile, markdown);
    console.log(`📝 Cursor Chat report saved to: ${this.cursorChatFile}`);

    // Save JSON data
    fs.writeFileSync(this.errorLogFile, JSON.stringify(this.errors, null, 2));
    console.log(`💾 Error data saved to: ${this.errorLogFile}`);

    return markdown;
  }

  async cleanup() {
    if (this.browser) {
      await this.browser.close();
    }
    console.log('🧹 Cleanup completed');
  }

  async run() {
    try {
      await this.initialize();

      // Default URLs to test (can be customized)
      const urls = [
        'http://localhost:3000',
        'http://localhost:3000/services',
        'http://localhost:3000/about',
        'http://localhost:3000/contact'
      ];

      // Check if localhost is running, if not use production URLs
      try {
        await this.page.goto('http://localhost:3000', { timeout: 5000 });
        console.log('🌐 Using localhost URLs');
      } catch (e) {
        console.log('🌐 Localhost not available, using production URLs');
        urls.length = 0;
        urls.push(
          'https://ziontechgroup.com',
          'https://ziontechgroup.com/services',
          'https://ziontechgroup.com/about',
          'https://ziontechgroup.com/contact'
        );
      }

      await this.captureErrors(urls);
      this.generateCursorChatReport();

      console.log('\n🎯 Console Error Capture completed successfully!');
      console.log(`📊 Found ${this.errors.length} errors`);
      console.log(`📝 Check the reports in: ${this.outputDir}`);

    } catch (error) {
      console.error('❌ Automation failed:', error);
    } finally {
      await this.cleanup();
    }
  }
}

// CLI interface
if (require.main === module) {
  const automation = new ConsoleErrorCapture();
  
  // Handle command line arguments
  const args = process.argv.slice(2);
  
  if (args.includes('--help') || args.includes('-h')) {
    console.log(`
Console Error Capture Automation

Usage: node console-error-capture.js [options]

Options:
  --help, -h     Show this help message
  --urls         Comma-separated list of URLs to test
  --output       Output directory for reports
  --headless     Run browser in headless mode

Examples:
  node console-error-capture.js
  node console-error-capture.js --urls "https://example.com,https://test.com"
  node console-error-capture.js --output ./custom-reports
    `);
    process.exit(0);
  }

  // Parse custom URLs if provided
  if (args.includes('--urls')) {
    const urlIndex = args.indexOf('--urls');
    if (urlIndex + 1 < args.length) {
      const customUrls = args[urlIndex + 1].split(',').map(url => url.trim());
      automation.urls = customUrls;
    }
  }

  // Parse custom output directory
  if (args.includes('--output')) {
    const outputIndex = args.indexOf('--output');
    if (outputIndex + 1 < args.length) {
      automation.outputDir = args[outputIndex + 1];
    }
  }

  // Parse headless mode
  if (args.includes('--headless')) {
    automation.headless = true;
  }

  automation.run();
}

module.exports = ConsoleErrorCapture;
