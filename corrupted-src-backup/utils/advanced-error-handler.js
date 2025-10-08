/**
 * Advanced Error Handler
 * Comprehensive error handling, logging, and recovery system
 */

class AdvancedErrorHandler {
  constructor() {
    this.errorLog = [];
    this.maxLogSize = 100;
    this.reportingEnabled = true;
    this.recoveryStrategies = new Map();
    this.init();
  }

  init() {
    this.setupGlobalErrorHandlers();
    this.setupUnhandledRejectionHandler();
    this.setupResourceErrorHandler();
    this.setupNetworkErrorHandler();
    this.setupRecoveryStrategies();
  }

  setupGlobalErrorHandlers() {
    // Global error handler
    window.addEventListener('error', event => {
      this.handleError({
        type: 'JavaScript Error',
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        stack: event.error?.stack,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
      });
    });

    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', event => {
      this.handleError({
        type: 'Unhandled Promise Rejection',
        message: event.reason?.message || 'Unknown promise rejection',
        stack: event.reason?.stack,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
      });
    });
  }

  setupUnhandledRejectionHandler() {
    // Additional promise rejection handling
    window.addEventListener('rejectionhandled', event => {
      // console.log('Promise rejection was handled:', event.reason);
    });
  }

  setupResourceErrorHandler() {
    // Handle resource loading errors
    document.addEventListener(
      'error',
      event => {
        if (event.target !== document) {
          this.handleError({
            type: 'Resource Error',
            message: `Failed to load resource: ${event.target.src || event.target.href}`,
            element: event.target.tagName,
            src: event.target.src || event.target.href,
            timestamp: new Date().toISOString(),
            url: window.location.href,
          });
        }
      },
      true
    );
  }

  setupNetworkErrorHandler() {
    // Handle network-related errors
    window.addEventListener('online', () => {
      this.handleNetworkStatusChange('online');
    });

    window.addEventListener('offline', () => {
      this.handleNetworkStatusChange('offline');
    });
  }

  setupRecoveryStrategies() {
    // Define recovery strategies for different error types
    this.recoveryStrategies.set('network', this.handleNetworkError.bind(this));
    this.recoveryStrategies.set(
      'resource',
      this.handleResourceError.bind(this)
    );
    this.recoveryStrategies.set(
      'javascript',
      this.handleJavaScriptError.bind(this)
    );
    this.recoveryStrategies.set('memory', this.handleMemoryError.bind(this));
  }

  handleError(errorInfo) {
    // Log error
    this.logError(errorInfo);

    // Attempt recovery
    this.attemptRecovery(errorInfo);

    // Report to external service
    if (this.reportingEnabled) {
      this.reportError(errorInfo);
    }

    // Show user-friendly message
    this.showUserError(errorInfo);
  }

  logError(errorInfo) {
    this.errorLog.push(errorInfo);

    // Maintain log size
    if (this.errorLog.length > this.maxLogSize) {
      this.errorLog.shift();
    }

    // Console logging
    // console.error('Error logged:', errorInfo);
  }

  attemptRecovery(errorInfo) {
    const errorType = this.categorizeError(errorInfo);
    const recoveryStrategy = this.recoveryStrategies.get(errorType);

    if (recoveryStrategy) {
      try {
        recoveryStrategy(errorInfo);
      } catch (recoveryError) {
        // console.error('Recovery attempt failed:', recoveryError);
      }
    }
  }

  categorizeError(errorInfo) {
    if (
      errorInfo.message?.includes('network') ||
      errorInfo.message?.includes('fetch')
    ) {
      return 'network';
    }
    if (errorInfo.type === 'Resource Error') {
      return 'resource';
    }
    if (
      errorInfo.type === 'JavaScript Error' ||
      errorInfo.type === 'Unhandled Promise Rejection'
    ) {
      return 'javascript';
    }
    if (
      errorInfo.message?.includes('memory') ||
      errorInfo.message?.includes('allocation')
    ) {
      return 'memory';
    }
    return 'unknown';
  }

  handleNetworkError(errorInfo) {
    // Retry failed network requests
    if (errorInfo.retryCount < 3) {
      setTimeout(
        () => {
          this.retryFailedRequest(errorInfo);
        },
        Math.pow(2, errorInfo.retryCount || 0) * 1000
      );
    } else {
      this.showOfflineMessage();
    }
  }

  handleResourceError(errorInfo) {
    // Try to load fallback resources
    if (errorInfo.element === 'IMG') {
      this.loadFallbackImage(errorInfo.src);
    } else if (errorInfo.element === 'SCRIPT') {
      this.loadFallbackScript(errorInfo.src);
    } else if (errorInfo.element === 'LINK') {
      this.loadFallbackStylesheet(errorInfo.src);
    }
  }

  handleJavaScriptError(errorInfo) {
    // Try to recover from JavaScript errors
    if (errorInfo.message?.includes('Cannot read property')) {
      this.handlePropertyAccessError(errorInfo);
    } else if (errorInfo.message?.includes('is not a function')) {
      this.handleFunctionCallError(errorInfo);
    } else {
      this.reloadPage();
    }
  }

  handleMemoryError(errorInfo) {
    // Clear caches and free memory
    this.clearCaches();
    this.garbageCollect();
  }

  retryFailedRequest(errorInfo) {
    // Implement retry logic for failed requests
    const retryCount = (errorInfo.retryCount || 0) + 1;
    errorInfo.retryCount = retryCount;

    // Retry the original request
    if (errorInfo.originalRequest) {
      fetch(errorInfo.originalRequest)
        .then(response => {
          if (response.ok) {
            // console.log('Request retry successful');
          }
        })
        .catch(error => {
          this.handleError({
            ...errorInfo,
            message: `Retry ${retryCount} failed: ${error.message}`,
            retryCount,
          });
        });
    }
  }

  loadFallbackImage(src) {
    const img = document.querySelector(`img[src="${src}"]`);
    if (img) {
      img.src = '/images/placeholder.png';
      img.alt = 'Image failed to load';
    }
  }

  loadFallbackScript(src) {
    // Load from CDN or local fallback
    const script = document.createElement('script');
    script.src = src.replace('cdn.example.com', 'fallback.example.com');
    script.onerror = () => {
      // Load local fallback
      script.src = '/js/fallback.js';
    };
    document.head.appendChild(script);
  }

  loadFallbackStylesheet(src) {
    // Load fallback stylesheet
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = src.replace('cdn.example.com', 'fallback.example.com');
    link.onerror = () => {
      // Load local fallback
      link.href = '/css/fallback.css';
    };
    document.head.appendChild(link);
  }

  handlePropertyAccessError(errorInfo) {
    // Try to fix property access errors
    // console.log('Attempting to fix property access error');
    // Implementation would depend on specific error
  }

  handleFunctionCallError(errorInfo) {
    // Try to fix function call errors
    // console.log('Attempting to fix function call error');
    // Implementation would depend on specific error
  }

  clearCaches() {
    // Clear various caches
    if ('caches' in window) {
      caches.keys().then(cacheNames => {
        cacheNames.forEach(cacheName => {
          caches.delete(cacheName);
        });
      });
    }
  }

  garbageCollect() {
    // Force garbage collection if available
    if (window.gc) {
      window.gc();
    }
  }

  reloadPage() {
    // Reload page as last resort
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  showOfflineMessage() {
    // Show offline message to user
    const offlineMessage = document.createElement('div');
    offlineMessage.className = 'offline-message';
    offlineMessage.innerHTML = `
      <div style="
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: #ff6b6b;
        color: white;
        padding: 10px;
        text-align: center;
        z-index: 9999;
      ">
        You're offline. Some features may not be available.
      </div>
    `;
    document.body.appendChild(offlineMessage);
  }

  showUserError(errorInfo) {
    // Show user-friendly error message
    if (errorInfo.severity === 'critical') {
      this.showCriticalErrorModal(errorInfo);
    } else {
      this.showErrorToast(errorInfo);
    }
  }

  showCriticalErrorModal(errorInfo) {
    const modal = document.createElement('div');
    modal.className = 'error-modal';
    modal.innerHTML = `
      <div style="
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
      ">
        <div style="
          background: white;
          padding: 20px;
          border-radius: 8px;
          max-width: 500px;
          text-align: center;
        ">
          <h2>Something went wrong</h2>
          <p>We're sorry, but something unexpected happened. Please try refreshing the page.</p>
          <button onclick="window.location.reload()" style="
            background: #007bff;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 4px;
            cursor: pointer;
          ">Refresh Page</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  showErrorToast(errorInfo) {
    const toast = document.createElement('div');
    toast.className = 'error-toast';
    toast.innerHTML = `
      <div style="
        position: fixed;
        top: 20px;
        right: 20px;
        background: #ff6b6b;
        color: white;
        padding: 15px;
        border-radius: 4px;
        z-index: 9999;
        max-width: 300px;
      ">
        <strong>Error:</strong> ${errorInfo.message}
        <button onclick="this.parentElement.parentElement.remove()" style="
          background: none;
          border: none;
          color: white;
          float: right;
          cursor: pointer;
        ">×</button>
      </div>
    `;
    document.body.appendChild(toast);

    // Auto-remove after 5 seconds
    setTimeout(() => {
      if (toast.parentElement) {
        toast.remove();
      }
    }, 5000);
  }

  handleNetworkStatusChange(status) {
    const message =
      status === 'online' ? 'Connection restored' : 'Connection lost';
    this.showErrorToast({
      message,
      type: 'Network Status',
      severity: 'info',
    });
  }

  reportError(errorInfo) {
    // Send error to external service
    if (window.gtag) {
      window.gtag('event', 'exception', {
        description: errorInfo.message,
        fatal: errorInfo.severity === 'critical',
      });
    }

    // Send to custom error reporting service
    fetch('/api/errors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(errorInfo),
    }).catch(error => {
      // console.error('Failed to report error:', error);
    });
  }

  // Public methods
  getErrorLog() {
    return this.errorLog;
  }

  clearErrorLog() {
    this.errorLog = [];
  }

  setReportingEnabled(enabled) {
    this.reportingEnabled = enabled;
  }

  addRecoveryStrategy(errorType, strategy) {
    this.recoveryStrategies.set(errorType, strategy);
  }
}

// Initialize error handler
const errorHandler = new AdvancedErrorHandler();

// Export for use in other modules
export default errorHandler;

// Global error handler instance
window.errorHandler = errorHandler;
