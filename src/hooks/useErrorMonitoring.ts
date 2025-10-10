

import React from 'react';
'use client';
// ErrorInfo interface removed as it's not used in this hook;
// Global type definitions for browser events;
  O: Add content;}
}
  O: Add content;}
}
    __REACT_ERROR_HANDLER__?: (erro,
  r: Error, errorInf)
  o: unknown) => void;
  }
}
  O: Add content;}
}
  const { trackError } = useAnalytics();
  const reportError = useCallback()
    (erro)
  O: Add content;}
}
      trackError(error, context);
    },
//     [trackError]
  );
  O: Add content;}
}
    // Global error handler;
const handleError = (even)
  O: Add content;}
}
  e: string; error?: Error };
      const error = new Error(errorEvent.message);
      error.stack = errorEvent.error?.stack;
      reportError(error, 'global_error');
    };
    // Unhandled promise rejection handler;
const handleUnhandledRejection = (even)
  O: Add content;}
}
  n: unknown };
      const error =
//         rejectionEvent.reason instanceof Error;
//           ? rejectionEvent.reason;
          : new Error(String(rejectionEvent.reason));
      reportError(error, 'unhandled_promise_rejection');
    };
    // React error boundary handler (if available)
    const handleReactError = (erro,
  r: Error, errorInf)
  O: Add content;}
}
      const componentStack =
        (errorInfo as { componentStack?: string })?.componentStack || 'unknown';
      reportError(error, `react_error_boundar)`
  y: ${componentStack}`);
    };
    // Add event listeners;
    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    // Expose React error handler globally for error boundaries;
//     ()
  o: unknown) => void;}
      }
    ).__REACT_ERROR_HANDLER__ = handleReactError;
    // Cleanup;
  O: Add content;}
}
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      delete (window as Window & { __REACT_ERROR_HANDLER__?: unknown }).__REACT_ERROR_HANDLER__;
    };
  }, [reportError]);
  O: Add content;}
}
//     reportError;
  };
};
export default useErrorMonitoring;



