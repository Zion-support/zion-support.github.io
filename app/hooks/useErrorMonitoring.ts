'use client';
import { useEffect, useCallback } from 'react';
<<<<<<< HEAD

=======
import { useAnalytics } from '../components/AnalyticsProvider';
>>>>>>> origin/main
// ErrorInfo interface removed as it's not used in this hook
// Global type definitions for browser events
declare global {
  interface Window {
    __REACT_ERROR_HANDLER__?: (error: Error, errorInfo: unknown) => void;
  }
}
export const useErrorMonitoring = () => {
<<<<<<< HEAD
  const trackError = useCallback((error: Error, context?: string) => {
    // Track errors without analytics provider
    if (typeof window !== 'undefined' && (window as { gtag: unknown }).gtag) {
      (window as { gtag: (...args: unknown[]) => void }).gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        custom_map: {
          error_context: context || 'unknown',
          error_stack: error.stack || ''
        }
      });
    }
  }, []);

=======
  const { trackError } = useAnalytics();
>>>>>>> origin/main
  const reportError = useCallback(
    (error: Error, context?: string) => {
      trackError(error, context);
    },
    [trackError]
  );
  useEffect(() => {
    // Global error handler
    const handleError = (event: unknown) => {
      const _errorEvent = event as { message: string; error?: Error };
      const _error = new Error(errorEvent.message);
      error.stack = errorEvent.error?.stack;
      reportError(error, 'global_error');
    };
    // Unhandled promise rejection handler
    const handleUnhandledRejection = (event: unknown) => {
      const _rejectionEvent = event as { reason: unknown };
      const error =
        rejectionEvent.reason instanceof Error
          ? rejectionEvent.reason
          : new Error(String(rejectionEvent.reason));
      reportError(error, 'unhandled_promise_rejection');
    };
    // React error boundary handler (if available)
    const handleReactError = (error: Error, errorInfo: unknown) => {
      const componentStack =
        (errorInfo as { componentStack?: string })?.componentStack || 'unknown';
      reportError(error, `react_error_boundary: ${componentStack}`);
    };
    // Add event listeners
    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    // Expose React error handler globally for error boundaries
    (
      window as Window & {
        __REACT_ERROR_HANDLER__?: (error: Error, errorInfo: unknown) => void;
      }
    ).__REACT_ERROR_HANDLER__ = handleReactError;
    // Cleanup
    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      delete (window as Window & { __REACT_ERROR_HANDLER__?: unknown }).__REACT_ERROR_HANDLER__;
    };
  }, [reportError]);
  return {
    reportError,
  };
};
export default useErrorMonitoring;
