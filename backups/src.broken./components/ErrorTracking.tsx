import React, { useEffect } from 'react';

interface ErrorTrackingProps {
  enabled?: boolean;
  projectId?: string;
  apiKey?: string;
}

export const ErrorTracking: React.FC<ErrorTrackingProps> = ({ 
  enabled = true,
  projectId = 'your-project-id',
  apiKey = 'your-api-key'
}) => {
  useEffect(() => {
    if (!enabled) return;

    // Track JavaScript errors
    const handleError = (event: ErrorEvent) => {
      // // console.error('JavaScript Error:', event.error);
      
      // Send to analytics
      if (window.gtag) {
        window.gtag('event', 'exception', {
          description: event.error?.message || event.message,
          fatal: false,
          error_type: 'javascript_error',
          error_file: event.filename,
          error_line: event.lineno,
          error_column: event.colno,
        });
      }
    };

    // Track unhandled promise rejections
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      // // console.error('Unhandled Promise Rejection:', event.reason);
      
      if (window.gtag) {
        window.gtag('event', 'exception', {
          description: event.reason?.message || String(event.reason),
          fatal: false,
          error_type: 'unhandled_promise_rejection',
        });
      }
    };

    // Track React errors (if using Error Boundary)
    const handleReactError = (error: Error, errorInfo: unknown) => {
      // // console.error('React Error:', error, errorInfo);
      
      if (window.gtag) {
        window.gtag('event', 'exception', {
          description: error.message,
          fatal: true,
          error_type: 'react_error',
          component_stack: errorInfo.componentStack,
        });
      }
    };

    // Track network errors
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      try {
        const response = await originalFetch(...args);
        
        // Track failed requests
        if (!response.ok) {
          if (window.gtag) {
            window.gtag('event', 'exception', {
              description: `HTTP ${response.status}: ${response.statusText}`,
              fatal: false,
              error_type: 'network_error',
              url: args[0] as string,
            });
          }
        }
        
        return response;
      } catch (error) {
        if (window.gtag) {
          window.gtag('event', 'exception', {
            description: error instanceof Error ? error.message : String(error),
            fatal: false,
            error_type: 'network_error',
            url: args[0] as string,
          });
        }
        throw error;
      }
    };

    // Add event listeners
    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    // Expose React error handler globally
    (window as any).trackReactError = handleReactError;

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      window.fetch = originalFetch;
      delete (window as any).trackReactError;
    };
  }, [enabled, projectId, apiKey]);

  return null;
};

// Utility function to track custom errors
export const trackError = (error: Error, context?: string) => {
  // // console.error('Custom Error:', error, context);
  
  if (window.gtag) {
    window.gtag('event', 'exception', {
      description: error.message,
      fatal: false,
      error_type: 'custom_error',
      context: context,
      stack_trace: error.stack,
    });
  }
};

// Utility function to track user actions that might cause errors
export const trackUserAction = (action: string, details?: Record<string, unknown>) => {
  if (window.gtag) {
    window.gtag('event', 'user_action', {
      action: action,
      ...details,
    });
  }
};