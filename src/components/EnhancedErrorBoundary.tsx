import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import {
  AlertTriangle,
  RefreshCw,
  Home,
  Bug,
  X,
  Info,
  Copy,
  ExternalLink,
  Shield,
  Zap
} from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showDetails?: boolean;
  className?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string | null;
  showDetails: boolean;
  isRecovering: boolean;
}

export class EnhancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null,
      showDetails: false,
      isRecovering: false
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
    this.setState({
      error,
      errorInfo
    });

    // Log error to console
    console.error('Error caught by boundary:', error, errorInfo);

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log to external service (in production)
    if (process.env.NODE_ENV === 'production') {
      this.logErrorToService(error, errorInfo);
    }
  }

  private logErrorToService = async (error: Error, errorInfo: ErrorInfo) => {
    try {
      // In a real application, you would send this to your error tracking service
      // like Sentry, LogRocket, or a custom API endpoint
      const errorData = {
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        errorId: this.state.errorId
      };

      // Example: Send to error tracking service
      // await fetch('/api/errors', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(errorData)
      // });
    } catch (logError) {
      console.error('Failed to log error to service:', logError);
    }
  };

  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null,
      showDetails: false,
      isRecovering: true
    });

    // Force a re-render of children
    this.forceUpdate();
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleCopyError = async () => {
    if (this.state.error) {
      const errorText = `
Error Details:
Message: ${this.state.error.message}
Stack: ${this.state.error.stack}
Component Stack: ${this.state.errorInfo?.componentStack}
Error ID: ${this.state.errorId}
URL: ${window.location.href}
Timestamp: ${new Date().toISOString()}
      `;

      try {
        await navigator.clipboard.writeText(errorText);
        // You could show a toast notification here
      } catch (err) {
        console.error('Failed to copy error details:', err);
      }
    }
  };

  private toggleDetails = () => {
    this.setState(prev => ({ showDetails: !prev.showDetails }));
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`min-h-screen bg-gradient-to-br from-red-900 via-gray-900 to-red-900 flex items-center justify-center p-4 ${this.props.className || ''}`}
        >
          <div className="max-w-2xl w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-red-500/20">
            <div className="text-center mb-8">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <AlertTriangle className="w-10 h-10 text-red-400" />
              </motion.div>
              
              <h1 className="text-4xl font-bold text-white mb-4">
                Oops! Something went wrong
              </h1>
              
              <p className="text-gray-300 text-lg mb-6">
                We've encountered an unexpected error. Our team has been notified and is working to fix it.
              </p>

              {this.state.errorId && (
                <div className="bg-gray-800/50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-400 mb-2">Error Reference ID:</p>
                  <code className="text-blue-400 font-mono text-sm">{this.state.errorId}</code>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={this.handleRetry}
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <RefreshCw className="w-5 h-5" />
                Try Again
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={this.handleGoHome}
                className="flex items-center justify-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <Home className="w-5 h-5" />
                Go Home
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={this.toggleDetails}
                className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <Bug className="w-5 h-5" />
                {this.state.showDetails ? 'Hide' : 'Show'} Details
              </motion.button>
            </div>

            {/* Error Details */}
            {this.state.showDetails && this.state.error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Error Details</h3>
                  <button
                    onClick={this.handleCopyError}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm"
                  >
                    <Copy className="w-4 h-4" />
                    Copy
                  </button>
                </div>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-gray-400 mb-1">Error Message:</p>
                    <p className="text-red-300 font-mono bg-gray-900/50 p-2 rounded">
                      {this.state.error.message}
                    </p>
                  </div>
                  
                  {this.state.error.stack && (
                    <div>
                      <p className="text-gray-400 mb-1">Stack Trace:</p>
                      <pre className="text-red-300 font-mono bg-gray-900/50 p-2 rounded text-xs overflow-x-auto">
                        {this.state.error.stack}
                      </pre>
                    </div>
                  )}
                  
                  {this.state.errorInfo?.componentStack && (
                    <div>
                      <p className="text-gray-400 mb-1">Component Stack:</p>
                      <pre className="text-yellow-300 font-mono bg-gray-900/50 p-2 rounded text-xs overflow-x-auto">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Help Section */}
            <div className="text-center">
              <p className="text-gray-400 mb-4">
                If this problem persists, please contact our support team.
              </p>
              <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
                <a
                  href="/help"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Info className="w-4 h-4" />
                  Help Center
                </a>
                <a
                  href="/contact"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      );
    }

    return this.props.children;
  }
}
