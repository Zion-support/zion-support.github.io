import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, Mail, Phone, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    });

    // Log error to console for debugging
    console.error('Error caught by ErrorBoundary:', error);
    console.error('Error info:', errorInfo);

    // Send error to monitoring service (e.g., Sentry, LogRocket)
    this.reportError(error, errorInfo);

    // Store error in localStorage for offline access
    this.storeError(error, errorInfo);
  }

  reportError = (error: Error, errorInfo: ErrorInfo) => {
    try {
      // Send to analytics or monitoring service
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'exception', {
          description: error.message,
          fatal: false,
          custom_map: {
            error_id: this.state.errorId
          }
        });
      }

      // Send to error reporting service
      const errorReport = {
        errorId: this.state.errorId,
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        userAgent: navigator.userAgent,
        url: window.location.href,
        timestamp: new Date().toISOString(),
        userId: this.getUserId()
      };

      // Example: Send to your error reporting endpoint
      fetch('/api/errors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorReport)
      }).catch(() => {
        // Silently fail if error reporting fails
        console.warn('Failed to send error report');
      });
    } catch (reportingError) {
      console.warn('Error reporting failed:', reportingError);
    }
  };

  storeError = (error: Error, errorInfo: ErrorInfo) => {
    try {
      const storedErrors = JSON.parse(localStorage.getItem('zion-errors') || '[]');
      const errorData = {
        id: this.state.errorId,
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        url: window.location.href
      };

      storedErrors.push(errorData);
      
      // Keep only last 10 errors
      if (storedErrors.length > 10) {
        storedErrors.splice(0, storedErrors.length - 10);
      }

      localStorage.setItem('zion-errors', JSON.stringify(storedErrors));
    } catch (storageError) {
      console.warn('Failed to store error:', storageError);
    }
  };

  getUserId = (): string | null => {
    try {
      // Get user ID from your auth system
      return localStorage.getItem('zion-user-id');
    } catch {
      return null;
    }
  };

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null
    });
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  handleContactSupport = () => {
    const subject = encodeURIComponent(`Error Report - ${this.state.errorId}`);
    const body = encodeURIComponent(
      `Error ID: ${this.state.errorId}\n` +
      `Error Message: ${this.state.error?.message}\n` +
      `URL: ${window.location.href}\n` +
      `User Agent: ${navigator.userAgent}\n\n` +
      `Please provide any additional context about what you were doing when this error occurred.`
    );
    
    window.location.href = `mailto:support@ziontechgroup.com?subject=${subject}&body=${body}`;
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md w-full"
          >
            {/* Error Icon */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-10 h-10 text-red-500" />
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">Oops! Something went wrong</h1>
              <p className="text-slate-400">
                We've encountered an unexpected error. Our team has been notified.
              </p>
            </div>

            {/* Error Details (Development Only) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="bg-slate-800 rounded-lg p-4 mb-6">
                <h3 className="text-sm font-semibold text-white mb-2">Error Details (Development)</h3>
                <div className="text-xs text-slate-400 space-y-1">
                  <div><strong>Message:</strong> {this.state.error.message}</div>
                  <div><strong>Error ID:</strong> {this.state.errorId}</div>
                  {this.state.errorInfo && (
                    <details className="mt-2">
                      <summary className="cursor-pointer text-slate-300">Component Stack</summary>
                      <pre className="mt-2 text-xs text-slate-400 whitespace-pre-wrap">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </details>
                  )}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={this.handleRetry}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-zion-purple text-white rounded-lg hover:bg-zion-purple/80 transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                Try Again
              </motion.button>

              <Link
                to="/"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors"
              >
                <Home className="w-4 h-4" />
                Go Home
              </Link>

              <button
                onClick={() => window.history.back()}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </button>

              <button
                onClick={this.handleContactSupport}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-zion-cyan/20 text-zion-cyan rounded-lg hover:bg-zion-cyan/30 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Contact Support
              </button>
            </div>

            {/* Support Information */}
            <div className="mt-8 p-4 bg-slate-800/50 rounded-lg">
              <h3 className="text-sm font-semibold text-white mb-3">Need Help?</h3>
              <div className="space-y-2 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>support@ziontechgroup.com</span>
                </div>
              </div>
              
              {this.state.errorId && (
                <div className="mt-3 p-2 bg-slate-700 rounded text-xs text-slate-300">
                  <strong>Error ID:</strong> {this.state.errorId}
                </div>
              )}
            </div>

            {/* Additional Help Links */}
            <div className="mt-6 text-center">
              <div className="flex justify-center gap-4 text-sm">
                <Link to="/help" className="text-zion-cyan hover:text-zion-cyan/80 transition-colors">
                  Help Center
                </Link>
                <Link to="/contact" className="text-zion-cyan hover:text-zion-cyan/80 transition-colors">
                  Contact Us
                </Link>
                <Link to="/status" className="text-zion-cyan hover:text-zion-cyan/80 transition-colors">
                  System Status
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Higher-order component for wrapping components with error boundary
export const withErrorBoundary = <P extends object>(
  Component: React.ComponentType<P>,
  fallback?: ReactNode
) => {
  return (props: P) => (
    <ErrorBoundary fallback={fallback}>
      <Component {...props} />
    </ErrorBoundary>
  );
};
