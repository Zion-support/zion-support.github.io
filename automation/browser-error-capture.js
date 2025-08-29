/**
 * Browser Console Error Capture Script
 * 
 * This script can be embedded in web pages to capture console errors
 * and send them to Cursor chats for fixing. It works independently
 * of the Node.js automation and can be used for real-time monitoring.
 */

(function() {
  'use strict';

  class BrowserErrorCapture {
    constructor(options = {}) {
      this.errors = [];
      this.maxErrors = options.maxErrors || 100;
      this.autoReport = options.autoReport || false;
      this.reportInterval = options.reportInterval || 30000; // 30 seconds
      this.reportEndpoint = options.reportEndpoint || null;
      this.captureConsole = options.captureConsole !== false;
      this.captureNetwork = options.captureNetwork !== false;
      this.captureUnhandled = options.captureUnhandled !== false;
      
      this.init();
    }

    init() {
      console.log('🔍 Browser Error Capture initialized');
      
      if (this.captureConsole) {
        this.captureConsoleErrors();
      }
      
      if (this.captureUnhandled) {
        this.captureUnhandledErrors();
        this.captureUnhandledRejections();
      }
      
      if (this.captureNetwork) {
        this.captureNetworkErrors();
      }
      
      if (this.autoReport) {
        this.startAutoReporting();
      }
      
      // Expose methods globally for manual control
      window.errorCapture = {
        getErrors: () => this.errors,
        clearErrors: () => this.errors = [],
        generateReport: () => this.generateReport(),
        sendReport: () => this.sendReport(),
        addError: (error) => this.addError(error)
      };
    }

    addError(error) {
      const errorEntry = {
        id: Date.now() + Math.random(),
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent,
        ...error
      };

      this.errors.push(errorEntry);
      
      // Keep only the latest errors
      if (this.errors.length > this.maxErrors) {
        this.errors.shift();
      }

      // Log to console for debugging
      console.log('❌ Error captured:', errorEntry);
      
      return errorEntry;
    }

    captureConsoleErrors() {
      const originalError = console.error;
      const originalWarn = console.warn;
      const originalLog = console.log;

      console.error = (...args) => {
        this.addError({
          type: 'console.error',
          message: args.map(arg => String(arg)).join(' '),
          args: args,
          stack: new Error().stack
        });
        originalError.apply(console, args);
      };

      console.warn = (...args) => {
        this.addError({
          type: 'console.warn',
          message: args.map(arg => String(arg)).join(' '),
          args: args,
          stack: new Error().stack
        });
        originalWarn.apply(console, args);
      };

      console.log = (...args) => {
        // Only capture logs that might indicate errors
        const message = args.map(arg => String(arg)).join(' ').toLowerCase();
        if (message.includes('error') || message.includes('failed') || message.includes('exception')) {
          this.addError({
            type: 'console.log.error',
            message: args.map(arg => String(arg)).join(' '),
            args: args,
            stack: new Error().stack
          });
        }
        originalLog.apply(console, args);
      };
    }

    captureUnhandledErrors() {
      window.addEventListener('error', (event) => {
        this.addError({
          type: 'unhandled.error',
          message: event.message,
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno,
          error: event.error?.stack || event.error?.message,
          element: event.target?.tagName || null
        });
      });
    }

    captureUnhandledRejections() {
      window.addEventListener('unhandledrejection', (event) => {
        this.addError({
          type: 'unhandled.rejection',
          message: event.reason?.message || String(event.reason),
          reason: event.reason,
          stack: event.reason?.stack || new Error().stack
        });
      });
    }

    captureNetworkErrors() {
      // Capture fetch errors
      const originalFetch = window.fetch;
      window.fetch = (...args) => {
        return originalFetch.apply(this, args).catch(error => {
          this.addError({
            type: 'network.fetch.error',
            message: error.message,
            url: args[0],
            stack: error.stack
          });
          throw error;
        });
      };

      // Capture XMLHttpRequest errors
      const originalXHROpen = XMLHttpRequest.prototype.open;
      const originalXHRSend = XMLHttpRequest.prototype.send;
      
      XMLHttpRequest.prototype.open = function(method, url, ...args) {
        this._errorCaptureUrl = url;
        this._errorCaptureMethod = method;
        return originalXHROpen.apply(this, [method, url, ...args]);
      };

      XMLHttpRequest.prototype.send = function(...args) {
        this.addEventListener('error', (event) => {
          window.errorCapture.addError({
            type: 'network.xhr.error',
            message: 'XMLHttpRequest failed',
            url: this._errorCaptureUrl,
            method: this._errorCaptureMethod,
            status: this.status,
            statusText: this.statusText
          });
        });
        
        return originalXHRSend.apply(this, args);
      };
    }

    generateReport() {
      if (this.errors.length === 0) {
        return {
          summary: 'No errors captured',
          errors: [],
          timestamp: new Date().toISOString()
        };
      }

      // Group errors by type
      const errorsByType = this.errors.reduce((acc, error) => {
        const type = error.type || 'unknown';
        if (!acc[type]) acc[type] = [];
        acc[type].push(error);
        return acc;
      }, {});

      // Generate summary
      const summary = {
        totalErrors: this.errors.length,
        errorTypes: Object.keys(errorsByType).length,
        errorsByType: Object.entries(errorsByType).map(([type, errors]) => ({
          type,
          count: errors.length
        })),
        mostCommonError: Object.entries(errorsByType)
          .sort(([,a], [,b]) => b.length - a.length)[0]
      };

      return {
        summary,
        errors: this.errors,
        errorsByType,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent
      };
    }

    generateCursorChatReport() {
      const report = this.generateReport();
      
      if (report.errors.length === 0) {
        return '# No Errors Captured\n\n🎉 Your application is running without console errors!';
      }

      let markdown = `# Browser Console Error Report for Cursor Chat\n\n`;
      markdown += `**Generated**: ${new Date().toLocaleString()}\n`;
      markdown += `**URL**: ${report.url}\n`;
      markdown += `**Total Errors**: ${report.summary.totalErrors}\n`;
      markdown += `**Error Types**: ${report.summary.errorTypes}\n\n`;

      markdown += `## Error Summary\n\n`;
      report.summary.errorsByType.forEach(({ type, count }) => {
        markdown += `- **${type}**: ${count} errors\n`;
      });

      markdown += `\n## Most Common Error\n\n`;
      const mostCommon = report.summary.mostCommonError;
      markdown += `**Type**: ${mostCommon[0]}\n`;
      markdown += `**Count**: ${mostCommon[1].length}\n\n`;

      markdown += `## Detailed Error Analysis\n\n`;

      Object.entries(report.errorsByType).forEach(([type, errors]) => {
        markdown += `### ${type.toUpperCase()} (${errors.length} errors)\n\n`;
        
        errors.slice(0, 5).forEach((error, index) => {
          markdown += `#### Error ${index + 1}\n\n`;
          markdown += `**Timestamp**: ${error.timestamp}\n`;
          markdown += `**Message**: \`${error.message}\`\n`;
          
          if (error.url) markdown += `**URL**: ${error.url}\n`;
          if (error.filename) markdown += `**File**: ${error.filename}:${error.lineno}:${error.colno}\n`;
          if (error.stack) markdown += `**Stack**: \`\`\`\n${error.stack}\n\`\`\`\n`;
          
          markdown += `\n---\n\n`;
        });

        if (errors.length > 5) {
          markdown += `*... and ${errors.length - 5} more errors of this type*\n\n`;
        }
      });

      markdown += `## Recommended Actions for Cursor Chat\n\n`;
      markdown += `1. **Analyze Error Patterns**: Look for common error types and their root causes\n`;
      markdown += `2. **Fix Critical Errors**: Address errors that affect user experience first\n`;
      markdown += `3. **Implement Error Boundaries**: Add proper error handling and fallbacks\n`;
      markdown += `4. **Test Fixes**: Verify that fixes resolve the reported errors\n`;
      markdown += `5. **Add Monitoring**: Implement ongoing error monitoring to prevent regressions\n\n`;

      markdown += `## Next Steps\n\n`;
      markdown += `Please provide specific code fixes for each type of error, focusing on:\n\n`;
      markdown += `- Root cause analysis\n`;
      markdown += `- Code-level solutions\n`;
      markdown += `- Prevention strategies\n`;
      markdown += `- Testing recommendations\n\n`;

      return markdown;
    }

    async sendReport() {
      if (!this.reportEndpoint) {
        console.warn('No report endpoint configured. Use generateCursorChatReport() to get the report.');
        return false;
      }

      try {
        const report = this.generateReport();
        const response = await fetch(this.reportEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(report)
        });

        if (response.ok) {
          console.log('✅ Error report sent successfully');
          return true;
        } else {
          console.error('❌ Failed to send error report:', response.status);
          return false;
        }
      } catch (error) {
        console.error('❌ Error sending report:', error);
        return false;
      }
    }

    startAutoReporting() {
      setInterval(() => {
        if (this.errors.length > 0) {
          console.log(`📊 Auto-reporting ${this.errors.length} errors...`);
          this.sendReport();
        }
      }, this.reportInterval);
    }

    // Utility methods
    getErrorCount() {
      return this.errors.length;
    }

    getErrorsByType(type) {
      return this.errors.filter(error => error.type === type);
    }

    clearErrors() {
      this.errors = [];
      console.log('🧹 All captured errors cleared');
    }

    exportErrors() {
      const dataStr = JSON.stringify(this.errors, null, 2);
      const dataBlob = new Blob([dataStr], { type: 'application/json' });
      
      const link = document.createElement('a');
      link.href = URL.createObjectURL(dataBlob);
      link.download = `console-errors-${new Date().toISOString().split('T')[0]}.json`;
      link.click();
    }
  }

  // Auto-initialize if script is loaded directly
  if (typeof window !== 'undefined') {
    // Create global instance with default options
    window.errorCaptureInstance = new BrowserErrorCapture({
      maxErrors: 100,
      autoReport: false,
      captureConsole: true,
      captureNetwork: true,
      captureUnhandled: true
    });

    // Expose constructor for custom instances
    window.BrowserErrorCapture = BrowserErrorCapture;
  }

  // Export for module systems
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = BrowserErrorCapture;
  }
})();
