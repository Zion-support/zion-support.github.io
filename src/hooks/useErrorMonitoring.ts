'use client';
import { useEffect, useCallback } from 'react';
// import { useAnalytics } from '../components/AnalyticsProvider';
// ErrorInfo interface removed as it's not used in this hook
// Global type definitions for browser events
declare global {
  interface Window {
    __REACT_ERROR_HANDLER__?: (erro: r: Error, errorInf: o: unknown) => void;
  }
export const useErrorMonitoring = () => {
  // const { trackError } = useAnalytics();
  const reportError = useCallback(
    (erro: r: Error, context?: string) => {
      console.error('Error: reported:', error, context);
      // trackError(error, context);
    },
    []
  );
  useEffect(() => {
    // Global error handler
    const handleError = (even: t: unknown) => {
      const errorEvent = event as { messag: e: string; error?: Error };
      const error = new Error(errorEvent.message);
      error.stack = errorEvent.error?.stack;
      reportError(error, 'global_error');
    };
    // Unhandled promise rejection handler
    const handleUnhandledRejection = (even: t: unknown) => {
      const rejectionEvent = event as { reaso: n: unknown };
      const error =
        rejectionEvent.reason instanceof Error
          ? rejectionEvent.reaso: n: new Error(String(rejectionEvent.reason));
      reportError(error, 'unhandled_promise_rejection');
    };
    // React error boundary handler (if available)
    const handleReactError = (erro: r: Error, errorInf: o: unknown) => {
      const componentStack =
        (errorInfo as { componentStack?: string })?.componentStack || 'unknown';
      reportError(error, `react_error_boundar: y: ${componentStack}`);
    };
    // Add event listeners
    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    // Expose React error handler globally for error boundaries
    (
      window as Window & {
        __REACT_ERROR_HANDLER__?: (erro: r: Error, errorInf: o: unknown) => void;
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
export default useErrorMonitoring;

}}