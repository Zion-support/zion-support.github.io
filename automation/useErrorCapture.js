import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * React Hook for Console Error Capture
 * 
 * This hook provides easy integration of console error capture
 * in React applications for sending errors to Cursor chats.
 */

export const useErrorCapture = (options = {}) => {
  const {
    maxErrors = 100,
    autoReport = false,
    reportInterval = 30000,
    reportEndpoint = null,
    captureConsole = true,
    captureNetwork = true,
    captureUnhandled = true,
    onError = null,
    onReport = null
  } = options;

  const [errors, setErrors] = useState([]);
  const [isCapturing, setIsCapturing] = useState(false);
  const [lastReport, setLastReport] = useState(null);
  
  const errorCaptureRef = useRef(null);
  const intervalRef = useRef(null);

  // Initialize error capture
  const initializeCapture = useCallback(() => {
    if (errorCaptureRef.current) return;

    const errorCapture = {
      errors: [],
      addError: (error) => {
        const errorEntry = {
          id: Date.now() + Math.random(),
          timestamp: new Date().toISOString(),
          url: window.location.href,
          userAgent: navigator.userAgent,
          ...error
        };

        setErrors(prev => {
          const newErrors = [...prev, errorEntry];
          // Keep only the latest errors
          return newErrors.slice(-maxErrors);
        });

        // Call onError callback if provided
        if (onError) {
          onError(errorEntry);
        }

        return errorEntry;
      },
      clearErrors: () => {
        setErrors([]);
        if (errorCaptureRef.current) {
          errorCaptureRef.current.errors = [];
        }
      }
    };

    errorCaptureRef.current = errorCapture;
    setIsCapturing(true);
  }, [maxErrors, onError]);

  // Capture console errors
  const captureConsoleErrors = useCallback(() => {
    if (!captureConsole || !errorCaptureRef.current) return;

    const originalError = console.error;
    const originalWarn = console.warn;
    const originalLog = console.log;

    console.error = (...args) => {
      errorCaptureRef.current.addError({
        type: 'console.error',
        message: args.map(arg => String(arg)).join(' '),
        args: args,
        stack: new Error().stack
      });
      originalError.apply(console, args);
    };

    console.warn = (...args) => {
      errorCaptureRef.current.addError({
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
        errorCaptureRef.current.addError({
          type: 'console.log.error',
          message: args.map(arg => String(arg)).join(' '),
          args: args,
          stack: new Error().stack
        });
      }
      originalLog.apply(console, args);
    };

    // Return cleanup function
    return () => {
      console.error = originalError;
      console.warn = originalWarn;
      console.log = originalLog;
    };
  }, [captureConsole]);

  // Capture unhandled errors
  const captureUnhandledErrors = useCallback(() => {
    if (!captureUnhandled || !errorCaptureRef.current) return;

    const handleError = (event) => {
      errorCaptureRef.current.addError({
        type: 'unhandled.error',
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error?.stack || event.error?.message,
        element: event.target?.tagName || null
      });
    };

    const handleUnhandledRejection = (event) => {
      errorCaptureRef.current.addError({
        type: 'unhandled.rejection',
        message: event.reason?.message || String(event.reason),
        reason: event.reason,
        stack: event.reason?.stack || new Error().stack
      });
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    // Return cleanup function
    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, [captureUnhandled]);

  // Capture network errors
  const captureNetworkErrors = useCallback(() => {
    if (!captureNetwork || !errorCaptureRef.current) return;

    // Capture fetch errors
    const originalFetch = window.fetch;
    window.fetch = (...args) => {
      return originalFetch.apply(this, args).catch(error => {
        errorCaptureRef.current.addError({
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
        errorCaptureRef.current.addError({
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

    // Return cleanup function
    return () => {
      window.fetch = originalFetch;
      XMLHttpRequest.prototype.open = originalXHROpen;
      XMLHttpRequest.prototype.send = originalXHRSend;
    };
  }, [captureNetwork]);

  // Generate report
  const generateReport = useCallback(() => {
    if (errors.length === 0) {
      return {
        summary: 'No errors captured',
        errors: [],
        timestamp: new Date().toISOString()
      };
    }

    // Group errors by type
    const errorsByType = errors.reduce((acc, error) => {
      const type = error.type || 'unknown';
      if (!acc[type]) acc[type] = [];
      acc[type].push(error);
      return acc;
    }, {});

    // Generate summary
    const summary = {
      totalErrors: errors.length,
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
      errors: errors,
      errorsByType,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent
    };
  }, [errors]);

  // Generate Cursor Chat report
  const generateCursorChatReport = useCallback(() => {
    const report = generateReport();
    
    if (report.errors.length === 0) {
      return '# No Errors Captured\n\n🎉 Your React application is running without console errors!';
    }

    let markdown = `# React Console Error Report for Cursor Chat\n\n`;
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
  }, [generateReport]);

  // Send report
  const sendReport = useCallback(async () => {
    if (!reportEndpoint) {
      console.warn('No report endpoint configured. Use generateCursorChatReport() to get the report.');
      return false;
    }

    try {
      const report = generateReport();
      const response = await fetch(reportEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(report)
      });

      if (response.ok) {
        console.log('✅ Error report sent successfully');
        setLastReport(new Date().toISOString());
        
        if (onReport) {
          onReport(report, true);
        }
        
        return true;
      } else {
        console.error('❌ Failed to send error report:', response.status);
        
        if (onReport) {
          onReport(report, false);
        }
        
        return false;
      }
    } catch (error) {
      console.error('❌ Error sending report:', error);
      
      if (onReport) {
        onReport(generateReport(), false);
      }
      
      return false;
    }
  }, [reportEndpoint, generateReport, onReport]);

  // Start auto-reporting
  const startAutoReporting = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      if (errors.length > 0) {
        console.log(`📊 Auto-reporting ${errors.length} errors...`);
        sendReport();
      }
    }, reportInterval);
  }, [errors.length, reportInterval, sendReport]);

  // Stop auto-reporting
  const stopAutoReporting = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Utility methods
  const clearErrors = useCallback(() => {
    setErrors([]);
    if (errorCaptureRef.current) {
      errorCaptureRef.current.clearErrors();
    }
  }, []);

  const getErrorCount = useCallback(() => errors.length, [errors]);

  const getErrorsByType = useCallback((type) => {
    return errors.filter(error => error.type === type);
  }, [errors]);

  // Initialize on mount
  useEffect(() => {
    initializeCapture();
    
    const cleanupConsole = captureConsoleErrors();
    const cleanupUnhandled = captureUnhandledErrors();
    const cleanupNetwork = captureNetworkErrors();

    // Start auto-reporting if enabled
    if (autoReport) {
      startAutoReporting();
    }

    // Cleanup on unmount
    return () => {
      cleanupConsole?.();
      cleanupUnhandled?.();
      cleanupNetwork?.();
      stopAutoReporting();
    };
  }, [
    initializeCapture,
    captureConsoleErrors,
    captureUnhandledErrors,
    captureNetworkErrors,
    autoReport,
    startAutoReporting,
    stopAutoReporting
  ]);

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return {
    // State
    errors,
    isCapturing,
    lastReport,
    
    // Methods
    generateReport,
    generateCursorChatReport,
    sendReport,
    clearErrors,
    getErrorCount,
    getErrorsByType,
    
    // Auto-reporting control
    startAutoReporting,
    stopAutoReporting,
    
    // Configuration
    maxErrors,
    autoReport,
    reportInterval,
    reportEndpoint
  };
};

export default useErrorCapture;
