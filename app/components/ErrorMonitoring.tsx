'use client';
import React, { useEffect } from 'react';

interface ErrorInfo {
  message: string;
  stack?: string;
  componentStack?: string;
  timestamp: number;
  userAgent: string;
  url: string;
}

const ErrorMonitoring: React.FC = () => {
  useEffect(() => {
    // Error reporting function
    const reportError = (errorInfo: ErrorInfo) => {
      // In production, send to error reporting service
      if (process.env.NODE_ENV === 'production') {
        // Example: Send to Sentry, LogRocket, or custom endpoint
        console.error('Error reported:', errorInfo);
        
        // You can integrate with services like:
        // - Sentry: Sentry.captureException(error)
        // - LogRocket: LogRocket.captureException(error)
        // - Custom endpoint: fetch('/api/errors', { method: 'POST', body: JSON.stringify(errorInfo) })
      } else {
        console.error('Development error:', errorInfo);
      }
    };

    // Global error handler
    const handleError = (event: ErrorEvent) => {
      const errorInfo: ErrorInfo = {
        message: event.message,
        stack: event.error?.stack,
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href,
      };
      
      reportError(errorInfo);
    };

    // Unhandled promise rejection handler
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const errorInfo: ErrorInfo = {
        message: event.reason?.toString() || 'Unhandled Promise Rejection',
        stack: event.reason?.stack,
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href,
      };
      
      reportError(errorInfo);
    };

    // React Error Boundary integration
    const handleReactError = (error: Error, errorInfo: any) => {
      const errorData: ErrorInfo = {
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href,
      };
      
      reportError(errorData);
    };

    // Network error monitoring
    const monitorNetworkErrors = () => {
      const originalFetch = window.fetch;
      window.fetch = async (...args) => {
        try {
          const response = await originalFetch(...args);
          if (!response.ok) {
            const errorInfo: ErrorInfo = {
              message: `Network error: ${response.status} ${response.statusText}`,
              timestamp: Date.now(),
              userAgent: navigator.userAgent,
              url: args[0] as string,
            };
            reportError(errorInfo);
          }
          return response;
        } catch (error) {
          const errorInfo: ErrorInfo = {
            message: `Fetch error: ${error}`,
            timestamp: Date.now(),
            userAgent: navigator.userAgent,
            url: args[0] as string,
          };
          reportError(errorInfo);
          throw error;
        }
      };
    };

    // Performance monitoring
    const monitorPerformance = () => {
      if ('performance' in window) {
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.entryType === 'resource' && entry.duration > 5000) {
              const errorInfo: ErrorInfo = {
                message: `Slow resource: ${entry.name} took ${entry.duration}ms`,
                timestamp: Date.now(),
                userAgent: navigator.userAgent,
                url: entry.name,
              };
              reportError(errorInfo);
            }
          });
        });
        
        observer.observe({ entryTypes: ['resource'] });
      }
    };

    // Memory monitoring
    const monitorMemory = () => {
      if ('memory' in performance) {
        const checkMemory = () => {
          const memory = (performance as any).memory;
          const usedMB = memory.usedJSHeapSize / 1024 / 1024;
          const totalMB = memory.totalJSHeapSize / 1024 / 1024;
          
          if (usedMB > 100) { // Alert if using more than 100MB
            const errorInfo: ErrorInfo = {
              message: `High memory usage: ${usedMB.toFixed(2)}MB / ${totalMB.toFixed(2)}MB`,
              timestamp: Date.now(),
              userAgent: navigator.userAgent,
              url: window.location.href,
            };
            reportError(errorInfo);
          }
        };
        
        setInterval(checkMemory, 30000); // Check every 30 seconds
      }
    };

    // Set up error handlers
    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    
    // Monitor network and performance
    monitorNetworkErrors();
    monitorPerformance();
    monitorMemory();

    // Cleanup
    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  return null;
};

export default ErrorMonitoring;