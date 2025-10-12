import { use Effect, use Callback } from 'react';
// import { use Analytics } from '../components/AnalyticsProvider';
// Error Info interface removed as it's not used in this hook
// Global type definitions for browser events
    __ RE AC T_ ER RO R_ HA ND LE R__?: (error: Error, error Info: unknown) => void;
  }
}
  // const { track Error } = use Analytics();
  
      console.error('Error reported:', error, context);
      // track Error(error, context);
    []
  );
    // Global error handler
    
      const error Event = event as { message: string; error?: Error };
      const error = new Error(error Event.message);
      error.stack = error Event.error?.stack;
      report Error(error, 'global_error');
    };
    // Unhandled promise rejection handler
    
      const rejection Event = event as { reason: unknown };
      
          : new Error(String(rejection Event.reason));
      report Error(error, 'unhandled_promise_rejection');
    };
    // React error boundary handler (if available)
    
        (error Info as { component Stack?: string })?.component Stack || 'unknown';
      report Error(error, `react_error_boundary: ${component Stack}`);
    };
    // Add event listeners
    window.add Event Listener('error', handle Error);
    window.add Event Listener('unhandledrejection', handle Unhandled Rejection);
    // Expose React error handler globally for error boundaries
        __ RE AC T_ ER RO R_ HA ND LE R__?: (error: Error, error Info: unknown) => void;
      }
    ).__ RE AC T_ ER RO R_ HA ND LE R__ = handle React Error;
    // Cleanup
      window.remove Event Listener('error', handle Error);
      window.remove Event Listener('unhandledrejection', handle Unhandled Rejection);
      delete (window as Window & { __ RE AC T_ ER RO R_ HA ND LE R__?: unknown }).__ RE AC T_ ER RO R_ HA ND LE R__;
    };
  }, [report Error]);
    report Error
  };
};
export default use Error Monitoring;
