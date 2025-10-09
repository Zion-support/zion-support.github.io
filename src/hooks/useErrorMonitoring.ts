'use client';
// ErrorInfo interface removed as it's not used in this hook;
// Global type definitions for browser events;
declare global {
  interface Window {
    __REACT_ERROR_HANDLER__?: (error: Error, errorInfo: unknown) => void;
  }
}
export       },
    [trackError]
  );
  useEffect(() => {
    // Global error handler;
    const _handleError = (event: unknown) => {
      const _errorEvent = event as { message: string; error?: Error }
            error.stack = errorEvent.error?.stack;
      reportError(error, 'global_error');
    }
    // Unhandled promise rejection handler;
          const error =
        rejectionEvent.reason instanceof Error;
          ? rejectionEvent.reason;
          : new Error(String(rejectionEvent.reason));
      reportError(error, 'unhandled_promise_rejection');
    }
    // React error boundary handler (if available)
          reportError(error, `react_error_boundary: ${componentStack}`);
    }
    // Add event listeners;
    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    // Expose React error handler globally for error boundaries;
    (
      window as Window & {
        __REACT_ERROR_HANDLER__?: (error: Error, errorInfo: unknown) => void;
      }
    ).__REACT_ERROR_HANDLER__ = handleReactError;
    // Cleanup;
    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      delete (window as Window & { __REACT_ERROR_HANDLER__?: unknown }).__REACT_ERROR_HANDLER__;
    }
  }, [reportError]);
  return {
    reportError;
  }
}
export default useErrorMonitoring;
