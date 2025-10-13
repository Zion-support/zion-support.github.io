import React, { useEffect, useCallback } from 'react';

interface ErrorInfo {
  message: string;
  stack?: string;
  componentStack?: string;
  timestamp: string;
  url: string;
  userAgent: string;
  userId?: string;
  sessionId?: string;
}

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToFirstByte: number;
}

const ErrorMonitoring: React.FC = () => {
  // Generate session ID
  const sessionId = React.useMemo(() => {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }, []);

  // Error reporting function
  const reportError = useCallback((error: Error, errorInfo?: any) => {
    const errorData: ErrorInfo = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo?.componentStack,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      sessionId,
    };

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error reported:', errorData);
    }

    // Send to monitoring service in production
    if (process.env.NODE_ENV === 'production') {
      // You can integrate with services like Sentry, LogRocket, etc.
      fetch('/api/errors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorData),
      }).catch(console.error);
    }

    // Store in localStorage for debugging
    const errors = JSON.parse(localStorage.getItem('errorLog') || '[]');
    errors.push(errorData);
    if (errors.length > 50) {
      errors.splice(0, errors.length - 50); // Keep only last 50 errors
    }
    localStorage.setItem('errorLog', JSON.stringify(errors));
  }, [sessionId]);

  // Performance monitoring
  const reportPerformance = useCallback((metrics: PerformanceMetrics) => {
    const performanceData = {
      ...metrics,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      sessionId,
    };

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance metrics:', performanceData);
    }

    // Send to monitoring service in production
    if (process.env.NODE_ENV === 'production') {
      fetch('/api/performance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(performanceData),
      }).catch(console.error);
    }

    // Store in localStorage
    const performance = JSON.parse(localStorage.getItem('performanceLog') || '[]');
    performance.push(performanceData);
    if (performance.length > 100) {
      performance.splice(0, performance.length - 100); // Keep only last 100 entries
    }
    localStorage.setItem('performanceLog', JSON.stringify(performance));
  }, [sessionId]);

  // Set up error boundaries and monitoring
  useEffect(() => {
    // Global error handler
    const handleError = (event: ErrorEvent) => {
      const error = new Error(event.message);
      error.stack = event.error?.stack;
      reportError(error);
    };

    // Unhandled promise rejection handler
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const error = new Error(event.reason?.message || 'Unhandled promise rejection');
      error.stack = event.reason?.stack;
      reportError(error);
    };

    // Performance monitoring
    const measurePerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        const metrics: PerformanceMetrics = {
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          firstContentfulPaint: 0,
          largestContentfulPaint: 0,
          cumulativeLayoutShift: 0,
          firstInputDelay: 0,
          timeToFirstByte: navigation.responseStart - navigation.requestStart,
        };

        // Measure Core Web Vitals
        if ('PerformanceObserver' in window) {
          // FCP
          const fcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const fcp = entries[0];
            metrics.firstContentfulPaint = fcp.startTime;
            reportPerformance(metrics);
          });
          fcpObserver.observe({ entryTypes: ['paint'] });

          // LCP
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            metrics.largestContentfulPaint = lastEntry.startTime;
            reportPerformance(metrics);
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

          // CLS
          let clsValue = 0;
          const clsObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
              }
            }
            metrics.cumulativeLayoutShift = clsValue;
            reportPerformance(metrics);
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });

          // FID
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const fid = entries[0];
            metrics.firstInputDelay = fid.processingStart - fid.startTime;
            reportPerformance(metrics);
          });
          fidObserver.observe({ entryTypes: ['first-input'] });
        }
      }
    };

    // Add event listeners
    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Cleanup
    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, [reportError, reportPerformance]);

  // User interaction monitoring
  useEffect(() => {
    const trackInteraction = (event: Event) => {
      const interactionData = {
        type: event.type,
        target: (event.target as Element)?.tagName,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        sessionId,
      };

      // Store interaction data
      const interactions = JSON.parse(localStorage.getItem('interactionLog') || '[]');
      interactions.push(interactionData);
      if (interactions.length > 200) {
        interactions.splice(0, interactions.length - 200);
      }
      localStorage.setItem('interactionLog', JSON.stringify(interactions));
    };

    // Track key interactions
    const events = ['click', 'submit', 'focus', 'blur', 'scroll'];
    events.forEach(eventType => {
      document.addEventListener(eventType, trackInteraction, true);
    });

    return () => {
      events.forEach(eventType => {
        document.removeEventListener(eventType, trackInteraction, true);
      });
    };
  }, [sessionId]);

  // API error monitoring
  useEffect(() => {
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      try {
        const response = await originalFetch(...args);
        
        if (!response.ok) {
          const error = new Error(`API Error: ${response.status} ${response.statusText}`);
          error.stack = new Error().stack;
          reportError(error);
        }
        
        return response;
      } catch (error) {
        reportError(error as Error);
        throw error;
      }
    };
  }, [reportError]);

  return null; // This component doesn't render anything
};

export default ErrorMonitoring;