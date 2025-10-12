export default EnhancedErrorBoundary;
  children: ReactNode;
  fallback?: ReactNode;
 void;
  enableErrorReporting?: boolean;
  maxRetries?: number;
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
  errorId?: string;
  retryCount: number;
  private maxRetries: number;
    super(props);
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
    this.maxRetries = props.maxRetries || 3;
      retryCount: 0;
    };
      errorInfo;
    });
    // Log error to console in development;
      console.error('Error caught by boundary:', error, errorInfo);
    // Call custom error handler if provided;
      this.props.onError(error, errorInfo);
    // Enhanced error reporting;
      this.reportError(error, errorInfo);
    // Enhanced error reporting logic;
    };
    // Log to console in development;
      console.group('🚨 Error Boundary Caught Error');
      console.error('Error Report:', errorReport);
      console.groupEnd();
    // Send to error reporting service (implement, as, needed)
      // In a real app, you would send this to your error reporting service;
      // For now, we'll just log it;
      console.log('Error report prepared:', errorReport);
       
      // Example: Send to error reporting service;
      //   body: JSON.stringify(errorReport)
      // });
      console.error('Failed to report error:', reportingError);
  };
    // Get user ID from localStorage, cookies, or context;
    return localStorage.getItem('userId') || null;
  };
    let sessionId = sessionStorage.getItem('sessionId');
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem('sessionId', sessionId);
    return sessionId;
  };
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };
    window.location.reload();
  };
    window.location.href = '/';
  };
    
    };
    navigator.clipboard.writeText(JSON.stringify(errorDetails, null, 2))
        // Show success message;
        const button = document.getElementById('copy-error-details');
          const originalText = button.textContent;
          button.textContent = 'Copied!';
            button.textContent = originalText;
          }, 2000);
      })
        console.error('Failed to copy error details:', error);
      });
  };
      // Custom fallback UI;
        return this.props.fallback;
      const { retryCount, error } = this.state;
      
      );
    return this.props.children;
