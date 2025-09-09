import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertCircle, RefreshCw, Home, Bug } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  resetOnPropsChange?: boolean;
  resetKeys?: Array<string | number>;
}

// Global error handler
export const setupGlobalErrorHandling = () => {
  // Handle unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
    // You can send this to an error reporting service
    reportError(event.reason, 'unhandledrejection');
  });

  // Handle global JavaScript errors
  window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
    reportError(event.error, 'global');
  });
};

// Error reporting function
export const reportError = (error: Error, source: string) => {
  const errorReport = {
    message: error.message,
    stack: error.stack,
    source,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
    url: window.location.href,
  };

  // In production, send to error reporting service
  if (process.env.NODE_ENV === 'production') {
    // Example: Send to Sentry, LogRocket, or custom endpoint
    console.log('Error report:', errorReport);
  } else {
    console.error('Error report:', errorReport);
  }
};

// Error boundary component
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  private resetTimeoutId: number | null = null;

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: '',
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return {
      hasError: true,
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });

    // Report error
    reportError(error, 'errorboundary');

    // Call custom error handler
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  componentDidUpdate(prevProps: ErrorBoundaryProps) {
    const { resetKeys, resetOnPropsChange } = this.props;
    const { hasError } = this.state;

    if (hasError && prevProps.resetKeys !== resetKeys) {
      if (resetOnPropsChange) {
        this.resetErrorBoundary();
      }
    }
  }

  componentWillUnmount() {
    if (this.resetTimeoutId) {
      clearTimeout(this.resetTimeoutId);
    }
  }

  resetErrorBoundary = () => {
    if (this.resetTimeoutId) {
      clearTimeout(this.resetTimeoutId);
    }

    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: '',
    });
  };

  handleRetry = () => {
    this.resetErrorBoundary();
  };

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <ErrorFallback
          error={this.state.error}
          errorInfo={this.state.errorInfo}
          errorId={this.state.errorId}
          onRetry={this.handleRetry}
          onReload={this.handleReload}
          onGoHome={this.handleGoHome}
        />
      );
    }

    return this.props.children;
  }
}

// Error fallback component
interface ErrorFallbackProps {
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string;
  onRetry: () => void;
  onReload: () => void;
  onGoHome: () => void;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  error,
  errorInfo,
  errorId,
  onRetry,
  onReload,
  onGoHome,
}) => {
  const [showDetails, setShowDetails] = React.useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
            <AlertCircle className="w-8 h-8 text-red-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            Oops! Something went wrong
          </CardTitle>
          <p className="text-gray-600 mt-2">
            We're sorry, but something unexpected happened. Our team has been notified.
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Error ID: {errorId}
          </p>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button onClick={onRetry} variant="primary" className="flex items-center gap-2">
              <RefreshCw className="w-4 h-4" />
              Try Again
            </Button>
            <Button onClick={onReload} variant="outline" className="flex items-center gap-2">
              <RefreshCw className="w-4 h-4" />
              Reload Page
            </Button>
            <Button onClick={onGoHome} variant="outline" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              Go Home
            </Button>
          </div>

          {process.env.NODE_ENV === 'development' && (
            <div className="mt-6">
              <Button
                onClick={() => setShowDetails(!showDetails)}
                variant="ghost"
                size="sm"
                className="flex items-center gap-2"
              >
                <Bug className="w-4 h-4" />
                {showDetails ? 'Hide' : 'Show'} Error Details
              </Button>
              
              {showDetails && (
                <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Error Details:</h4>
                  <pre className="text-xs text-gray-700 overflow-auto max-h-40">
                    {error?.toString()}
                  </pre>
                  
                  {errorInfo && (
                    <>
                      <h4 className="font-semibold text-gray-900 mb-2 mt-4">Component Stack:</h4>
                      <pre className="text-xs text-gray-700 overflow-auto max-h-40">
                        {errorInfo.componentStack}
                      </pre>
                    </>
                  )}
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

// Hook for error handling
export const useErrorHandler = () => {
  const [error, setError] = React.useState<Error | null>(null);

  const resetError = React.useCallback(() => {
    setError(null);
  }, []);

  const handleError = React.useCallback((error: Error) => {
    setError(error);
    reportError(error, 'hook');
  }, []);

  React.useEffect(() => {
    if (error) {
      throw error;
    }
  }, [error]);

  return { handleError, resetError };
};

// Async error boundary for async operations
export const AsyncErrorBoundary: React.FC<{
  children: ReactNode;
  fallback?: ReactNode;
}> = ({ children, fallback }) => {
  const [error, setError] = React.useState<Error | null>(null);

  const handleAsyncError = React.useCallback((error: Error) => {
    setError(error);
    reportError(error, 'async');
  }, []);

  React.useEffect(() => {
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      handleAsyncError(event.reason);
    };

    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    return () => {
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, [handleAsyncError]);

  if (error) {
    return fallback || <ErrorFallback
      error={error}
      errorInfo={null}
      errorId={`async_${Date.now()}`}
      onRetry={() => setError(null)}
      onReload={() => window.location.reload()}
      onGoHome={() => window.location.href = '/'}
    />;
  }

  return <>{children}</>;
};

export default ErrorBoundary;