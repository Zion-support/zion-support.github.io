import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Bug, Home, ArrowLeft } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: ''
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
      errorId: `error-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ errorInfo });
    console.error("Uncaught error:", error, errorInfo);
    // You can also log the error to an error reporting service here
    this.logErrorToService(error, errorInfo, this.state.errorId);
  }

  logErrorToService = (error: Error, errorInfo: ErrorInfo, errorId: string) => {
    // Example: Send error to a logging service
    console.log(`Error ID: ${errorId}`);
    console.log('Logging error to service:', { error, errorInfo });
    // fetch('/api/log-error', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ error: error.message, stack: errorInfo.componentStack, errorId })
    // });
  };

  handleRetry = () => {
    this.setState({ hasError: false, error: null, errorInfo: null, errorId: '' });
    // Optionally, navigate to home or reload part of the app
    window.location.reload();
  };

  handleReportError = () => {
    const subject = encodeURIComponent(`Error Report (ID: ${this.state.errorId})`);
    const body = encodeURIComponent(
      `Error ID: ${this.state.errorId}\n\n` +
      `Error Message: ${this.state.error?.message}\n\n` +
      `Component Stack: ${this.state.errorInfo?.componentStack}\n\n` +
      `User Agent: ${navigator.userAgent}\n` +
      `URL: ${window.location.href}\n\n` +
      `Please describe what you were doing when this error occurred:`
    );
    window.open(`mailto:support@ziontechgroup.com?subject=${subject}&body=${body}`, '_blank');
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light text-white p-4 text-center"
        >
          <AlertTriangle className="h-24 w-24 text-red-500 mb-6 animate-pulse" />
          <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
            Oops! Something went wrong.
          </h1>
          <p className="text-xl text-gray-300 mb-6 max-w-2xl">
            We're sorry, but an unexpected error occurred. Our team has been notified.
          </p>
          <p className="text-sm text-gray-400 mb-8">
            Error ID: <span className="font-mono text-cyan-400">{this.state.errorId}</span>
          </p>
          
          {/* Error Details (for developers, can be toggled) */}
          {/* <details className="mb-8 text-left bg-zion-slate-dark p-4 rounded-lg border border-zion-slate-light/20 max-w-3xl w-full">
            <summary className="text-lg font-semibold text-cyan-400 cursor-pointer">Error Details</summary>
            <pre className="mt-4 text-sm text-gray-500 whitespace-pre-wrap break-words">
              {this.state.error?.toString()}
              {this.state.errorInfo?.componentStack}
            </pre>
          </details> */}

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={this.handleRetry}
              className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              <RefreshCw className="h-5 w-5 mr-2" /> Try Again
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={this.handleReportError}
              className="flex items-center px-6 py-3 border border-gray-600 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-800 transition-all duration-300"
            >
              <Bug className="h-5 w-5 mr-2" /> Report Error
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/'}
              className="flex items-center px-6 py-3 border border-gray-600 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-800 transition-all duration-300"
            >
              <Home className="h-5 w-5 mr-2" /> Go to Homepage
            </motion.button>
          </div>
        </motion.div>
      );
    }
    return this.props.children;
  }
}

// Optional: A hook to manually trigger an error boundary from a functional component
export function useErrorHandler() {
  const [error, setError] = React.useState<Error | null>(null);
  React.useEffect(() => {
    if (error) {
      throw error;
    }
  }, [error]);
  return setError;
}

// Optional: A Higher-Order Component (HOC) for convenience
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  fallback?: ReactNode
): React.ComponentType<P> {
  return function WithErrorBoundary(props: P) {
    return (
      <ErrorBoundary fallback={fallback}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
}
