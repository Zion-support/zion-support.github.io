'use client';

import { useEffect, useCallback } from 'react';

interface ErrorInfo {
  componentStack?: string;
  errorBoundary?: string;
}

export const useErrorMonitoring = () => {
  const handleError = useCallback((error: ErrorEvent | any, errorInfo?: ErrorInfo) => {
    console.error('Error caught by monitoring:', error);
    
    // Send to error tracking service
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'exception', {
        description: error instanceof ErrorEvent ? error.message : 'Unhandled promise rejection',
        fatal: false,
        custom_map: {
          component_stack: errorInfo?.componentStack || 'Unknown',
          error_boundary: errorInfo?.errorBoundary || 'Unknown',
        },
      });
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('error', handleError);
      window.addEventListener('unhandledrejection', handleError);
      
      return () => {
        window.removeEventListener('error', handleError);
        window.removeEventListener('unhandledrejection', handleError);
      };
    }
  }, [handleError]);

  return { handleError };
};