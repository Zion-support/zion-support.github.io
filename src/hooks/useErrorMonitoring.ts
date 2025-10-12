export default useErrorMonitoring;
// // ErrorInfo interface removed as it's not used in this hook;
// Global type definitions for browser events;
 void;
  // const { trackError } = useAnalytics();
  
      console.error('Error reported:', error, context);
      // trackError(error, context);
    []
  );
    // Global error handler;
      const errorEvent = event as { message: string; error?: Error };
      
      error.stack = errorEvent.error?.stack;
      reportError(error, 'global_error');
    };
    // Unhandled promise rejection handler;
      
          : new Error(String(rejectionEvent.reason));
      reportError(error, 'unhandled_promise_rejection');
    };
    // React error boundary handler (if available)
    
        (errorInfo as { componentStack?: string })?.componentStack || 'unknown';
      reportError(error, `react_error_boundary: ${componentStack}`);
    };
    // Add event listeners;
    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    // Expose React error handler globally for error boundaries;
 void;
    ).__REACT_ERROR_HANDLER__ = handleReactError;
    // Cleanup;
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      delete (window as Window & { __REACT_ERROR_HANDLER__?: unknown }).__REACT_ERROR_HANDLER__;
    };
  }, [reportError]);
    reportError;
  };
};
