import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
=======
import { Button } from '@/components/ui/button';
import { AlertTriangle, RefreshCw, Home, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-23aa

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
<<<<<<< HEAD
}

interface ErrorState {
  hasError: boolean;
  error: Error | null;
  errorInfo: any;
  errorId: string;
}

// Extend the Window interface to include gtag
declare global {
  interface Window {
    gtag?: (command: string, action: string, params: any) => void;
  }
}

export function ErrorBoundary({ children, fallback }: ErrorBoundaryProps) {
  const [errorState, setErrorState] = useState<ErrorState>({
    hasError: false,
    error: null,
    errorInfo: null,
    errorId: '',
  });

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      const errorId = `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      setErrorState({
        hasError: true,
        error: event.error || new Error(event.message),
        errorInfo: { componentStack: event.filename },
        errorId,
      });

      // Log error to console
      console.error('Error caught by boundary:', event.error, event);

      // Log to analytics if available
      if (window.gtag) {
        window.gtag('event', 'exception', {
          description: event.message,
          fatal: true,
          error_id: errorId,
        });
=======
  onError?: (error: Error, errorInfo: any) => void;
}

interface ErrorFallbackProps {
  error?: Error;
  resetError: () => void;
}

function ErrorFallback({ error, resetError }: ErrorFallbackProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-zion-blue-dark flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-6">
          <div className="w-20 h-20 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-10 h-10 text-zion-purple" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Oops! Something went wrong</h1>
          <p className="text-zion-slate-light">
            We encountered an unexpected error. Don't worry, our team has been notified.
          </p>
        </div>

        {error && process.env.NODE_ENV === 'development' && (
          <details className="mb-6 text-left">
            <summary className="cursor-pointer text-zion-cyan hover:text-zion-cyan-light mb-2">
              Error Details (Development)
            </summary>
            <div className="bg-zion-slate-dark p-3 rounded text-xs text-zion-slate-light overflow-auto">
              <pre>{error.stack}</pre>
            </div>
          </details>
        )}

        <div className="space-y-3">
          <Button
            onClick={resetError}
            className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
          
          <Button
            variant="outline"
            onClick={() => navigate(-1)}
            className="w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
          
          <Link
            to="/"
            className="block w-full px-4 py-2 text-center border border-zion-purple text-zion-purple rounded-md hover:bg-zion-purple hover:text-white transition-colors"
          >
            <Home className="w-4 h-4 inline mr-2" />
            Go Home
          </Link>
        </div>

        <div className="mt-6 text-xs text-zion-slate-light">
          <p>If this problem persists, please contact our support team.</p>
          <p className="mt-1">
            Error ID: {error?.name || 'Unknown'} - {new Date().toISOString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export function ErrorBoundary({ children, fallback, onError }: ErrorBoundaryProps) {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      setHasError(true);
      setError(event.error);
      
      if (onError) {
        onError(event.error, { componentStack: event.error?.stack });
      }
      
      // Log error to console in development
      if (process.env.NODE_ENV === 'development') {
        console.error('ErrorBoundary caught an error:', event.error);
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-23aa
      }
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
<<<<<<< HEAD
      const errorId = `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      setErrorState({
        hasError: true,
        error: event.reason instanceof Error ? event.reason : new Error(String(event.reason)),
        errorInfo: { componentStack: 'Unhandled Promise Rejection' },
        errorId,
      });
=======
      setHasError(true);
      setError(new Error(event.reason));
      
      if (onError) {
        onError(new Error(event.reason), { componentStack: event.reason?.stack });
      }
      
      // Log error to console in development
      if (process.env.NODE_ENV === 'development') {
        console.error('ErrorBoundary caught an unhandled rejection:', event.reason);
      }
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-23aa
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
<<<<<<< HEAD
  }, []);

  const handleRetry = () => {
    setErrorState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: '',
    });
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

  const handleReportBug = () => {
    const errorDetails = {
      message: errorState.error?.message,
      stack: errorState.error?.stack,
      componentStack: errorState.errorInfo?.componentStack,
      errorId: errorState.errorId,
      url: window.location.href,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
    };

    // Copy error details to clipboard
    navigator.clipboard.writeText(JSON.stringify(errorDetails, null, 2))
      .then(() => {
        alert('Error details copied to clipboard. Please report this to support.');
      })
      .catch(() => {
        // Fallback: open email with error details
        const subject = encodeURIComponent(`Bug Report - Error ID: ${errorState.errorId}`);
        const body = encodeURIComponent(JSON.stringify(errorDetails, null, 2));
        window.open(`mailto:support@ziontechgroup.com?subject=${subject}&body=${body}`);
      });
  };

  if (errorState.hasError) {
    if (fallback) {
      return <>{fallback}</>;
    }

    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md border-red-500/20 bg-background/95 backdrop-blur-sm">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-4">
              <span className="text-red-500 text-2xl">⚠️</span>
            </div>
            <CardTitle className="text-xl text-red-500">Something went wrong</CardTitle>
            <CardDescription className="text-muted-foreground">
              We've encountered an unexpected error. Our team has been notified.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="bg-muted/50 rounded-lg p-3">
              <p className="text-sm text-muted-foreground font-mono break-all">
                Error ID: {errorState.errorId}
              </p>
              {errorState.error && (
                <p className="text-sm text-muted-foreground mt-2">
                  {errorState.error.message}
                </p>
              )}
            </div>
            
            <div className="flex flex-col gap-2">
              <Button onClick={handleRetry} className="w-full">
                <span className="mr-2">🔄</span>
                Try Again
              </Button>
              
              <Button variant="outline" onClick={handleGoHome} className="w-full">
                <span className="mr-2">🏠</span>
                Go Home
              </Button>
              
              <Button variant="outline" onClick={handleReportBug} className="w-full">
                <span className="mr-2">🐛</span>
                Report Bug
              </Button>
            </div>
            
            <div className="text-center">
              <p className="text-xs text-muted-foreground">
                If this problem persists, please contact support
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
=======
  }, [onError]);

  const resetError = () => {
    setHasError(false);
    setError(null);
  };

  if (hasError) {
    if (fallback) {
      return fallback;
    }
    
    return (
      <ErrorFallback
        error={error || undefined}
        resetError={resetError}
      />
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-23aa
    );
  }

  return <>{children}</>;
}

// Hook for functional components to handle errors
export function useErrorHandler() {
  const [error, setError] = useState<Error | null>(null);

  const handleError = React.useCallback((error: Error) => {
    setError(error);
<<<<<<< HEAD
    console.error('Error caught by hook:', error);
=======
    console.error('Error caught by useErrorHandler:', error);
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-23aa
  }, []);

  const clearError = React.useCallback(() => {
    setError(null);
  }, []);

  return { error, handleError, clearError };
<<<<<<< HEAD
=======
}

// Higher-order component for wrapping components with error handling
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Omit<ErrorBoundaryProps, 'children'>
) {
  return function WithErrorBoundary(props: P) {
    return (
      <ErrorBoundary {...errorBoundaryProps}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-23aa
}