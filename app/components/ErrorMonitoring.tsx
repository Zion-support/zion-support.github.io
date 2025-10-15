import React, { useEffect } from 'react';
import { handleError, logError } from '../utils/errorHandler';

interface ErrorMonitoringProps {
  children: React.ReactNode;
}

const ErrorMonitoring: React.FC<ErrorMonitoringProps> = ({ children }) => {
  useEffect(() => {
    // Global error handler
    const handleGlobalError = (event: ErrorEvent) => {
      const error = {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        stack: event.error?.stack,
      };
      
      logError(handleError(error), 'Global Error');
    };

    // Unhandled promise rejection handler
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const error = {
        message: event.reason?.message || 'Unhandled Promise Rejection',
        stack: event.reason?.stack,
        reason: event.reason,
      };
      
      logError(handleError(error), 'Unhandled Promise Rejection');
    };

    // Resource loading error handler
    const handleResourceError = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target && (target.tagName === 'IMG' || target.tagName === 'SCRIPT' || target.tagName === 'LINK')) {
        const error = {
          message: `Failed to load resource: ${target.tagName}`,
          src: (target as any).src || (target as any).href,
        };
        
        logError(handleError(error), 'Resource Loading Error');
      }
    };

    // Add event listeners
    window.addEventListener('error', handleGlobalError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    window.addEventListener('error', handleResourceError, true);

    // Cleanup
    return () => {
      window.removeEventListener('error', handleGlobalError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      window.removeEventListener('error', handleResourceError, true);
    };
  }, []);

  return <>{children}</>;
};

export default ErrorMonitoring;