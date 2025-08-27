import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, ArrowLeft, Bug, Shield, Zap } from 'lucide-react';

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
      errorInfo
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }

    // In production, you could send this to an error reporting service
    // Example: Sentry.captureException(error, { extra: errorInfo });
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  handleGoBack = () => {
    window.history.back();
  };

  generateErrorReport = () => {
    const { error, errorInfo, errorId } = this.state;
    if (!error) return;

    const report = {
      errorId,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      error: {
        name: error.name,
        message: error.message,
        stack: error.stack
      },
      errorInfo: errorInfo ? {
        componentStack: errorInfo.componentStack
      } : null
    };

    // Copy to clipboard
    navigator.clipboard.writeText(JSON.stringify(report, null, 2))
      .then(() => {
        alert('Error report copied to clipboard. Please send this to support.');
      })
      .catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = JSON.stringify(report, null, 2);
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Error report copied to clipboard. Please send this to support.');
      });
  };

  render() {
    if (this.state.hasError) {
      const { error, errorId } = this.state;

      return (
        <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl w-full bg-zion-slate-dark/80 backdrop-blur-sm rounded-2xl p-8 border border-zion-slate/20"
          >
            {/* Error Icon */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-500/20 rounded-full mb-4">
                <AlertTriangle className="h-10 w-10 text-red-400" />
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">Oops! Something went wrong</h1>
              <p className="text-zion-slate-light">
                We've encountered an unexpected error. Our team has been notified.
              </p>
            </div>

            {/* Error Details */}
            <div className="bg-zion-slate/20 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-zion-slate-light">Error ID:</span>
                <code className="text-xs bg-zion-slate/30 text-zion-cyan px-2 py-1 rounded">
                  {errorId}
                </code>
              </div>
              {error && (
                <div className="text-sm">
                  <div className="text-red-400 font-medium mb-1">{error.name}</div>
                  <div className="text-zion-slate-light">{error.message}</div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              <button
                onClick={this.handleReload}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-zion-cyan hover:bg-zion-cyan-light text-white rounded-lg transition-colors"
              >
                <RefreshCw className="h-4 w-4" />
                Reload Page
              </button>
              <button
                onClick={this.handleGoHome}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-zion-slate/30 hover:bg-zion-slate/50 text-white rounded-lg transition-colors"
              >
                <Home className="h-4 w-4" />
                Go Home
              </button>
              <button
                onClick={this.handleGoBack}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-zion-slate/30 hover:bg-zion-slate/50 text-white rounded-lg transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Go Back
              </button>
            </div>

            {/* Additional Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={this.generateErrorReport}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple rounded-lg transition-colors text-sm"
              >
                <Bug className="h-4 w-4" />
                Copy Error Report
              </button>
              <a
                href="/contact"
                className="flex items-center justify-center gap-2 px-4 py-2 bg-zion-slate/20 hover:bg-zion-slate/30 text-zion-slate-light rounded-lg transition-colors text-sm"
              >
                <Shield className="h-4 w-4" />
                Contact Support
              </a>
            </div>

            {/* Helpful Tips */}
            <div className="mt-6 p-4 bg-zion-cyan/10 rounded-lg border border-zion-cyan/20">
              <div className="flex items-start gap-3">
                <Zap className="h-5 w-5 text-zion-cyan mt-0.5 flex-shrink-0" />
                <div className="text-sm text-zion-slate-light">
                  <div className="font-medium text-zion-cyan mb-1">Troubleshooting Tips:</div>
                  <ul className="space-y-1 text-xs">
                    <li>• Try refreshing the page</li>
                    <li>• Clear your browser cache</li>
                    <li>• Check your internet connection</li>
                    <li>• Try a different browser</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}
