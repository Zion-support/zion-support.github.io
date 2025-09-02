import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import {
  AlertTriangle,
  RefreshCw,
  Home,
  Bug,
  X,
  Copy,
  CheckCircle,
  ExternalLink,
  Settings,
  Activity
} from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showDetails?: boolean;
  enableReporting?: boolean;
  customErrorPage?: boolean;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string;
  isReporting: boolean;
  reported: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  private retryCount = 0;
  private maxRetries = 3;

  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: '',
      isReporting: false,
      reported: false
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
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
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Auto-report critical errors
    if (this.shouldAutoReport(error)) {
      this.reportError(error, errorInfo);
    }
  }

  private shouldAutoReport(error: Error): boolean {
    // Don't auto-report if disabled or already reported
    if (!this.props.enableReporting || this.state.reported) return false;
    
    // Don't auto-report network errors or user-related errors
    const nonReportableErrors = [
      'NetworkError',
      'ChunkLoadError',
      'Loading chunk',
      'Loading CSS chunk'
    ];
    
    return !nonReportableErrors.some(type => error.message.includes(type));
  }

  private reportError = async (error: Error, errorInfo: ErrorInfo) => {
    if (this.state.isReporting) return;

    this.setState({ isReporting: true });

    try {
      const errorReport = {
        errorId: this.state.errorId,
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        retryCount: this.retryCount
      };

      // In a real application, you would send this to your error reporting service
      console.log('Error Report:', errorReport);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      this.setState({ reported: true, isReporting: false });
    } catch (reportingError) {
      console.error('Failed to report error:', reportingError);
      this.setState({ isReporting: false });
    }
  };

  private handleRetry = () => {
    if (this.retryCount < this.maxRetries) {
      this.retryCount++;
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null,
        errorId: '',
        reported: false
      });
    }
  };

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private copyErrorDetails = () => {
    const errorDetails = {
      errorId: this.state.errorId,
      message: this.state.error?.message,
      stack: this.state.error?.stack,
      componentStack: this.state.errorInfo?.componentStack,
      timestamp: new Date().toISOString(),
      url: window.location.href
    };

    navigator.clipboard.writeText(JSON.stringify(errorDetails, null, 2));
  };

  private getErrorType = (error: Error): string => {
    if (error.message.includes('ChunkLoadError') || error.message.includes('Loading chunk')) {
      return 'Chunk Load Error';
    }
    if (error.message.includes('NetworkError')) {
      return 'Network Error';
    }
    if (error.message.includes('TypeError')) {
      return 'Type Error';
    }
    if (error.message.includes('ReferenceError')) {
      return 'Reference Error';
    }
    return 'Application Error';
  };

  private getErrorSeverity = (error: Error): 'low' | 'medium' | 'high' | 'critical' => {
    if (error.message.includes('ChunkLoadError')) return 'medium';
    if (error.message.includes('NetworkError')) return 'low';
    if (error.message.includes('TypeError') || error.message.includes('ReferenceError')) return 'high';
    return 'critical';
  };

  render() {
    if (this.state.hasError && this.state.error) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Use custom error page if enabled
      if (this.props.customErrorPage) {
        return this.renderCustomErrorPage();
      }

      // Default error UI
      return this.renderDefaultErrorUI();
    }

    return this.props.children;
  }

  private renderCustomErrorPage() {
    const { error, errorId, isReporting, reported } = this.state;
    const errorType = this.getErrorType(error!);
    const severity = this.getErrorSeverity(error!);

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-red-500 to-orange-500 p-6 text-white">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="w-8 h-8" />
              <div>
                <h1 className="text-2xl font-bold">Something went wrong</h1>
                <p className="text-red-100">We're sorry for the inconvenience</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Error Info */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900 dark:text-white">Error Details</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  severity === 'critical' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                  severity === 'high' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' :
                  severity === 'medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                  'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                }`}>
                  {severity.toUpperCase()}
                </span>
              </div>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-medium text-gray-600 dark:text-gray-400">Type:</span>
                  <span className="ml-2 text-gray-900 dark:text-white">{errorType}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-600 dark:text-gray-400">ID:</span>
                  <span className="ml-2 font-mono text-gray-900 dark:text-white">{errorId}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-600 dark:text-gray-400">Message:</span>
                  <span className="ml-2 text-gray-900 dark:text-white">{error!.message}</span>
                </div>
              </div>
            </div>

            {/* Error Details (if enabled) */}
            {this.props.showDetails && (
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Technical Details</h3>
                <pre className="text-xs text-gray-600 dark:text-gray-400 overflow-auto max-h-40">
                  {error!.stack}
                </pre>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={this.handleRetry}
                disabled={this.retryCount >= this.maxRetries}
                className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg font-medium transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                <span>
                  {this.retryCount >= this.maxRetries ? 'Max Retries Reached' : `Retry (${this.retryCount}/${this.maxRetries})`}
                </span>
              </button>

              <button
                onClick={this.handleReload}
                className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Reload Page</span>
              </button>

              <button
                onClick={this.handleGoHome}
                className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
              >
                <Home className="w-4 h-4" />
                <span>Go Home</span>
              </button>
            </div>

            {/* Additional Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200 dark:border-gray-600">
              <button
                onClick={this.copyErrorDetails}
                className="flex items-center justify-center space-x-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border border-gray-300 dark:border-gray-600 rounded-lg transition-colors"
              >
                <Copy className="w-4 h-4" />
                <span>Copy Error Details</span>
              </button>

              {this.props.enableReporting && (
                <button
                  onClick={() => this.reportError(error!, this.state.errorInfo!)}
                  disabled={isReporting || reported}
                  className="flex items-center justify-center space-x-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border border-gray-300 dark:border-gray-600 rounded-lg transition-colors disabled:opacity-50"
                >
                  {isReporting ? (
                    <Activity className="w-4 h-4 animate-spin" />
                  ) : reported ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : (
                    <Bug className="w-4 h-4" />
                  )}
                  <span>
                    {isReporting ? 'Reporting...' : reported ? 'Reported' : 'Report Error'}
                  </span>
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  private renderDefaultErrorUI() {
    const { error, errorId } = this.state;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="min-h-[400px] flex items-center justify-center p-8"
      >
        <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6 text-center">
          <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Something went wrong
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            We encountered an unexpected error. Please try refreshing the page.
          </p>
          <div className="space-y-3">
            <button
              onClick={this.handleRetry}
              disabled={this.retryCount >= this.maxRetries}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg font-medium transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Try Again</span>
            </button>
            <button
              onClick={this.handleReload}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Reload Page</span>
            </button>
          </div>
          {process.env.NODE_ENV === 'development' && (
            <details className="mt-4 text-left">
              <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                Error Details
              </summary>
              <pre className="mt-2 text-xs text-gray-600 dark:text-gray-400 overflow-auto">
                {error?.message}
                {error?.stack}
              </pre>
            </details>
          )}
        </div>
      </motion.div>
    );
  }
}

export default ErrorBoundary;
