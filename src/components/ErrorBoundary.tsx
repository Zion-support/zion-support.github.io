<<<<<<< HEAD
<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, Mail, Bug } from 'lucide-react';
=======
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';
>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
<<<<<<< HEAD
=======
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle, RefreshCw, Home, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
function ErrorFallback({ error, resetError }) {
    const navigate = useNavigate();
    return (<div className="min-h-screen bg-zion-blue-dark flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-6">
          <div className="w-20 h-20 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-10 h-10 text-zion-purple"/>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Oops! Something went wrong</h1>
          <p className="text-zion-slate-light">
            We encountered an unexpected error. Don't worry, our team has been notified.
          </p>
        </div>
        {error && process.env.NODE_ENV === 'development' && (<details className="mb-6 text-left">
            <summary className="cursor-pointer text-zion-cyan hover:text-zion-cyan-light mb-2">
              Error Details (Development)
            </summary>
            <div className="bg-zion-slate-dark p-3 rounded text-xs text-zion-slate-light overflow-auto">
              <pre>{error.stack}</pre>
            </div>
          </details>)}
        <div className="space-y-3">
          <Button onClick={resetError} className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white">
            <RefreshCw className="w-4 h-4 mr-2"/>
            Try Again
          </Button>
          
          <Button variant="outline" onClick={() => navigate(-1)} className="w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark">
            <ArrowLeft className="w-4 h-4 mr-2"/>
            Go Back
          </Button>
          
          <Link to="/" className="block w-full px-4 py-2 text-center border border-zion-purple text-zion-purple rounded-md hover:bg-zion-purple hover:text-white transition-colors">
            <Home className="w-4 h-4 inline mr-2"/>
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
    </div>);
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
=======
>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
}

interface State {
  hasError: boolean;
<<<<<<< HEAD
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
      errorId: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Generate unique error ID for tracking
    const errorId = `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    this.setState({
      errorInfo,
      errorId,
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }

    // In production, you could send this to an error reporting service
    // this.logErrorToService(error, errorInfo, errorId);
  }

  private logErrorToService = (error: Error, errorInfo: ErrorInfo, errorId: string) => {
    // Example: Send to error reporting service
    try {
      const errorData = {
        errorId,
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
      };

      // You can implement your error reporting logic here
      // Example: fetch('/api/errors', { method: 'POST', body: JSON.stringify(errorData) });
      
      console.log('Error logged to service:', errorData);
    } catch (logError) {
      console.error('Failed to log error:', logError);
    }
  };

  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null,
    });
  };

  private handleReportError = () => {
    const { error, errorInfo, errorId } = this.state;
    
    if (error && errorInfo) {
      const errorReport = `
Error Report (ID: ${errorId})

Error: ${error.message}
Stack: ${error.stack}

Component Stack:
${errorInfo.componentStack}

URL: ${window.location.href}
User Agent: ${navigator.userAgent}
Timestamp: ${new Date().toISOString()}
      `;

      // Copy to clipboard
      navigator.clipboard.writeText(errorReport).then(() => {
        alert('Error report copied to clipboard. Please send this to support.');
      }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = errorReport;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Error report copied to clipboard. Please send this to support.');
      });
    }
=======
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({
      error,
      errorInfo
    });

    // Log error to analytics service
    if (window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: true
      });
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
    window.location.reload();
>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
  };

  render() {
    if (this.state.hasError) {
<<<<<<< HEAD
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 flex items-center justify-center p-4"
        >
          <div className="max-w-2xl w-full">
            {/* Error Header */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-8"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-500/20 rounded-full mb-6">
                <AlertTriangle className="w-10 h-10 text-red-400" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Oops! Something went wrong
              </h1>
              <p className="text-zinc-400 text-lg">
                We're sorry, but something unexpected happened. Our team has been notified.
              </p>
            </motion.div>

            {/* Error Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-6 mb-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-white">Error Details</h2>
                {this.state.errorId && (
                  <span className="text-sm text-zinc-500 font-mono">
                    ID: {this.state.errorId}
                  </span>
                )}
              </div>
              
              {this.state.error && (
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-zinc-400 block mb-1">
                      Error Message
                    </label>
                    <p className="text-red-400 font-mono text-sm bg-zinc-900/50 p-3 rounded-lg border border-zinc-700/50">
                      {this.state.error.message}
                    </p>
                  </div>
                  
                  {process.env.NODE_ENV === 'development' && this.state.error.stack && (
                    <div>
                      <label className="text-sm font-medium text-zinc-400 block mb-1">
                        Stack Trace
                      </label>
                      <pre className="text-zinc-300 font-mono text-xs bg-zinc-900/50 p-3 rounded-lg border border-zinc-700/50 overflow-x-auto">
                        {this.state.error.stack}
                      </pre>
                    </div>
                  )}
                </div>
              )}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={this.handleRetry}
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 transform hover:scale-105"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </button>
              
              <Link
                to="/"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Link>
              
              <button
                onClick={this.handleReportError}
                className="inline-flex items-center justify-center px-6 py-3 bg-zinc-700/50 border border-zinc-600 text-zinc-300 rounded-lg font-semibold hover:bg-zinc-700 hover:text-white transition-all duration-300"
              >
                <Bug className="w-4 h-4 mr-2" />
                Report Error
              </button>
              
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-zinc-700/50 border border-zinc-600 text-zinc-300 rounded-lg font-semibold hover:bg-zinc-700 hover:text-white transition-all duration-300"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Support
              </Link>
            </motion.div>

            {/* Help Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center text-zinc-500 text-sm mt-6"
            >
              If this problem persists, please contact our support team with the error ID above.
            </motion.p>
          </div>
        </motion.div>
=======
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
          <div className="bg-white/5 backdrop-blur-xl border border-red-500/30 rounded-2xl p-8 max-w-lg w-full text-center shadow-2xl">
            <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Oops! Something went wrong.</h2>
            <p className="text-zion-slate-light text-lg mb-6">
              We're sorry for the inconvenience. Our team has been notified and is working to fix the issue.
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="text-left bg-red-900/30 border border-red-700/50 rounded-lg p-4 mb-6 text-red-300 text-sm overflow-auto max-h-48">
                <h3 className="font-semibold mb-2">Error Details:</h3>
                <p className="font-mono break-all">{this.state.error.toString()}</p>
                {this.state.errorInfo?.componentStack && (
                  <pre className="mt-2 whitespace-pre-wrap">{this.state.errorInfo.componentStack}</pre>
                )}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleRetry}
                className="inline-flex items-center bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-3 rounded-xl hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium text-base shadow-lg hover:shadow-xl"
              >
                <RefreshCw className="h-5 w-5 mr-2" /> Try Again
              </button>
              <Link
                to="/"
                className="inline-flex items-center border border-zion-cyan text-zion-cyan px-6 py-3 rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300 font-medium text-base"
              >
                <Home className="h-5 w-5 mr-2" /> Go to Homepage
              </Link>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 mt-4"
            >
              <Mail className="h-4 w-4 mr-2" /> Contact Support
            </Link>
          </div>
        </div>
>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
      );
    }

    return this.props.children;
  }
<<<<<<< HEAD
}

// Hook for functional components to handle errors
export function useErrorHandler() {
  const [error, setError] = React.useState<Error | null>(null);

  const handleError = React.useCallback((error: Error) => {
    setError(error);
    console.error('Error caught by hook:', error);
  }, []);

  const clearError = React.useCallback(() => {
    setError(null);
  }, []);

  return { error, handleError, clearError };
}

// Higher-order component for error handling
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  fallback?: ReactNode
) {
  return function WithErrorBoundary(props: P) {
    return (
      <ErrorBoundary fallback={fallback}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
=======
>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
}

export default ErrorBoundary;
