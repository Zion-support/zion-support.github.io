'use client';
import { useEffect, useCallback } from 'react';
// import { useAnalytics } from '../components/AnalyticsProvider';
// ErrorInfo interface removed as it's not used in this hook
// Global type definitions for browser events
declare global {
  interface Window {
    __REACT_ERROR_HANDLER__?: (error: Error, errorInfo: unknown) => void;
  }
}
export const useErrorMonitoring = () => {
  // const { trackError } = useAnalytics();
  const reportError = useCallback(
    (error: Error, context?: string) => {
      console.error('Error reported:', error, context);
      // trackError(error, context);
    },
    []
  );
  useEffect(() => {
    // Global error handler
    const handleError = (event: unknown) => {
      const _errorEvent = event as { message: string; error?: Error };
      const _error = new Error(_errorEvent.message);
      _error.stack = _errorEvent.error?.stack;
      reportError(_error, 'global_error');
    };
    // Unhandled promise rejection handler
    const handleUnhandledRejection = (event: unknown) => {
      const _rejectionEvent = event as { reason: unknown };
      const _error =
        _rejectionEvent.reason instanceof Error
          ? _rejectionEvent.reason
          : new Error(String(_rejectionEvent.reason));
      reportError(_error, 'unhandled_promise_rejection');
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
    reportError
  };
};
export default useErrorMonitoring;
