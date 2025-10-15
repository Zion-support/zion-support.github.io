import { useEffect, useCallback, useRef } from 'react';

interface ErrorInfo {
  message: string;
  stack?: string;
  filename?: string;
  lineno?: number;
  colno?: number;
  timestamp: number;
  url: string;
  userAgent: string;
  userId?: string;
  sessionId?: string;
  componentStack?: string;
  errorBoundary?: string;
}

interface ErrorMonitoringConfig {
  enableConsoleErrors: boolean;
  enableUnhandledRejections: boolean;
  enableResourceErrors: boolean;
  enableNetworkErrors: boolean;
  enablePerformanceErrors: boolean;
  sampleRate: number;
  maxErrorsPerSession: number;
  enableOfflineStorage: boolean;
}

const defaultConfig: ErrorMonitoringConfig = {
  enableConsoleErrors: true,
  enableUnhandledRejections: true,
  enableResourceErrors: true,
  enableNetworkErrors: true,
  enablePerformanceErrors: true,
  sampleRate: 1.0,
  maxErrorsPerSession: 50,
  enableOfflineStorage: true,
};

export const useErrorMonitoring = (config: Partial<ErrorMonitoringConfig> = {}) => {
  const configRef = useRef({ ...defaultConfig, ...config });
  const errorCountRef = useRef(0);
  const sessionIdRef = useRef(generateSessionId());

  // Generate unique session ID
  function generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  // Generate unique user ID (stored in localStorage)
  function getUserId(): string {
    if (typeof window === 'undefined') return 'unknown';
    
    let userId = localStorage.getItem('error_monitoring_user_id');
    if (!userId) {
      userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('error_monitoring_user_id', userId);
    }
    return userId;
  }

  // Send error to monitoring service
  const sendError = useCallback(async (errorInfo: ErrorInfo) => {
    if (errorCountRef.current >= configRef.current.maxErrorsPerSession) {
      return;
    }

    errorCountRef.current++;

    // Add user and session info
    const enrichedError = {
      ...errorInfo,
      userId: getUserId(),
      sessionId: sessionIdRef.current,
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent,
    };

    // Store offline if enabled
    if (configRef.current.enableOfflineStorage) {
      try {
        const storedErrors = JSON.parse(localStorage.getItem('error_logs') || '[]');
        storedErrors.push(enrichedError);
        // Keep only last 100 errors
        const trimmedErrors = storedErrors.slice(-100);
        localStorage.setItem('error_logs', JSON.stringify(trimmedErrors));
      } catch (e) {
        // Ignore localStorage errors
      }
    }

    // Send to analytics
    if (window.gtag) {
      window.gtag('event', 'exception', {
        description: errorInfo.message,
        fatal: false,
        custom_map: {
          error_type: 'javascript_error',
          filename: errorInfo.filename,
          line_number: errorInfo.lineno,
          column_number: errorInfo.colno,
        },
      });
    }

    // Send to monitoring service
    if (process.env.NODE_ENV === 'production') {
      try {
        await fetch('/api/errors/report', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(enrichedError),
        });
      } catch (e) {
        // Silently fail - error is already stored offline
      }
    }

    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.error('[Error Monitoring]', enrichedError);
    }
  }, []);

  // Handle JavaScript errors
  const handleError = useCallback((event: ErrorEvent) => {
    if (!configRef.current.enableConsoleErrors) return;

    const errorInfo: ErrorInfo = {
      message: event.message,
      filename: event.filename,
      lineno: event.lineno,
      colno: event.colno,
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent,
    };

    sendError(errorInfo);
  }, [sendError]);

  // Handle unhandled promise rejections
  const handleUnhandledRejection = useCallback((event: PromiseRejectionEvent) => {
    if (!configRef.current.enableUnhandledRejections) return;

    const errorInfo: ErrorInfo = {
      message: event.reason?.message || String(event.reason),
      stack: event.reason?.stack,
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent,
    };

    sendError(errorInfo);
  }, [sendError]);

  // Handle resource loading errors
  const handleResourceError = useCallback((event: Event) => {
    if (!configRef.current.enableResourceErrors) return;

    const target = event.target as HTMLElement;
    const errorInfo: ErrorInfo = {
      message: `Resource loading failed: ${target.tagName}`,
      filename: (target as any).src || (target as any).href,
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent,
    };

    sendError(errorInfo);
  }, [sendError]);

  // Monitor network errors
  const monitorNetworkErrors = useCallback(() => {
    if (!configRef.current.enableNetworkErrors) return;

    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      try {
        const response = await originalFetch(...args);
        
        // Check for HTTP error status codes
        if (!response.ok) {
          const errorInfo: ErrorInfo = {
            message: `Network request failed: ${response.status} ${response.statusText}`,
            filename: args[0] as string,
            timestamp: Date.now(),
            url: window.location.href,
            userAgent: navigator.userAgent,
          };
          sendError(errorInfo);
        }
        
        return response;
      } catch (error) {
        const errorInfo: ErrorInfo = {
          message: `Network request error: ${error.message}`,
          filename: args[0] as string,
          timestamp: Date.now(),
          url: window.location.href,
          userAgent: navigator.userAgent,
        };
        sendError(errorInfo);
        throw error;
      }
    };
  }, [sendError]);

  // Monitor performance errors
  const monitorPerformanceErrors = useCallback(() => {
    if (!configRef.current.enablePerformanceErrors) return;

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          
          // Check for slow page loads
          const loadTime = navEntry.loadEventEnd - navEntry.loadEventStart;
          if (loadTime > 5000) { // 5 seconds
            const errorInfo: ErrorInfo = {
              message: `Slow page load detected: ${loadTime}ms`,
              timestamp: Date.now(),
              url: window.location.href,
              userAgent: navigator.userAgent,
            };
            sendError(errorInfo);
          }
        }
      }
    });

    observer.observe({ entryTypes: ['navigation', 'resource'] });
  }, [sendError]);

  // Initialize error monitoring
  useEffect(() => {
    // Random sampling
    if (Math.random() > configRef.current.sampleRate) return;

    // Add event listeners
    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    window.addEventListener('error', handleResourceError, true);

    // Monitor network and performance
    monitorNetworkErrors();
    monitorPerformanceErrors();

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      window.removeEventListener('error', handleResourceError, true);
    };
  }, [handleError, handleUnhandledRejection, handleResourceError, monitorNetworkErrors, monitorPerformanceErrors]);

  // Manual error reporting
  const reportError = useCallback((error: Error, context?: Record<string, any>) => {
    const errorInfo: ErrorInfo = {
      message: error.message,
      stack: error.stack,
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      ...context,
    };

    sendError(errorInfo);
  }, [sendError]);

  // Get stored errors
  const getStoredErrors = useCallback(() => {
    if (typeof window === 'undefined') return [];
    
    try {
      return JSON.parse(localStorage.getItem('error_logs') || '[]');
    } catch {
      return [];
    }
  }, []);

  // Clear stored errors
  const clearStoredErrors = useCallback(() => {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.removeItem('error_logs');
      errorCountRef.current = 0;
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  return {
    reportError,
    getStoredErrors,
    clearStoredErrors,
    sessionId: sessionIdRef.current,
    errorCount: errorCountRef.current,
  };
};