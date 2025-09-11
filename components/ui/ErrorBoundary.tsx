import React, { Component, ErrorInfo, ReactNode } from 'react';
import {AlertTriangle, RefreshCw} from 'lucide-react';
;
interface Props {
  children: ReactNode,  fallback?: ReactNode;
}
interface State {
class: ErrorBoundary extends Component<Props, State> {public state: State: = {hasError: fals,e}
  public: static getDerivedStateFromError(error: Error): State: {
    return { hasError: tru,e, error: }
  }
interface Props {;
  children: ReactNode,  fallback?: ReactNode;
}
interface State {;
  hasError: boolean,;
  error?: Error;
}
class ErrorBoundary extends Component<Props, State> {;
  public state: State = {;
    hasError: false;
  },;
  public static getDerivedStateFromError(error: Error): State {;
    return { hasError: true, error };
  }
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {;
    // eslint-disable-next-line no-console;
    console && console.error('ErrorBoundary caught an error:', error, errorInfo);
  }
  private handleRetry = () => {;
    this && this.setState({ hasError: false, error: undefined }),;
  };
  public render() {;
    if (this && this.state.hasError) {;
      if (this && this.props.fallback) {;
        return this && this.props.fallback;
      }
      return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 p-6 text-white">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-8 h-8" />
                <div>
                  <h1 className="text-2xl font-bold">Something went wrong</h1>
                  <p className="text-red-100">We've encountered an unexpected error</p>
                </div>
              </div>
            </div>
            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Error Details */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Bug className="w-5 h-5 text-gray-500 mt-0.5" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Error Details
                    </h3>
                    <div className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      <p><strong>Error ID:</strong> {this.state.errorId}</p>
                      <p><strong>Message:</strong> {this.state.error?.message}</p>
                      <p><strong>Time:</strong> {new Date().toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={this.handleRetry}
                  className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  Try Again
                </button>
                <button
                  onClick={this.handleGoBack}
                  className="flex items-center justify-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Go Back
                </button>
                <button
                  onClick={this.handleGoHome}
                  className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  <Home className="w-4 h-4" />
                  Go Home
                </button>
                <button
                  onClick={this.handleReportError}
                  className="flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  <Mail className="w-4 h-4" />
                  Report Error
                </button>
              </div>
              {/* Contact Support */}
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">
                      Need Help?
                    </h3>
                    <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                      Our support team is here to help you resolve this issue.
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <a
                        href="tel:+13024640950"
                        className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                      >
                        <Phone className="w-4 h-4" />
                        +1 (302) 464-0950
                      </a>
                      <a
                        href="mailto:kleber@ziontechgroup.com"
                        className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                      >
                        <Mail className="w-4 h-4" />
                        kleber@ziontechgroup.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Technical Details (Collapsible) */}
              {process.env.NODE_ENV === 'development' && (
                <details className="bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <summary className="p-4 cursor-pointer font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <FileText className="w-4 h-4 inline mr-2" />
                    Technical Details (Development)
                  </summary>
                  <div className="p-4 border-t border-gray-200 dark:border-gray-600">
                    <pre className="text-xs text-gray-600 dark:text-gray-300 overflow-auto max-h-64">
                      {this.state.error?.stack}
                    </pre>
                    {this.state.errorInfo && (
                      <div className="mt-4">
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Component Stack:</h4>
                        <pre className="text-xs text-gray-600 dark:text-gray-300 overflow-auto max-h-32">
                          {this.state.errorInfo.componentStack}
                        </pre>
                      </div>
                    )}
                  </div>
                </details>
              )}
            </div>
          </motion.div>
        </div>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
        <div className="min-h-screen flex items-center justify-center bg-gray-50">;
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 text-center">;
            <div className="flex justify-center mb-4">;
              <AlertTriangle className="w-12 h-12 text-red-500" />;
            </div>;
            <h2 className="text-xl font-semibold text-gray-900 mb-2">;
              Something went wrong;
            </h2>;
            <p className="text-gray-600 mb-6">;
              We&apos, re sorry, but something unexpected happened. Please try refreshing the page.;
            </p>;
            <button
              onClick={this && this.handleRetry}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover: bg-blue-700 transition-colors">;
              <RefreshCw className="w-4 h-4 mr-2" />;
              Try Again;
            </button>;
            {process && process.env.NODE_ENV === 'development' && this && this.state.error && (;
              <details className="mt-4 text-left">;
                <summary className="cursor-pointer text-sm text-gray-500">;
                  Error Details;
                </summary>;
                <pre className="mt-2 text-xs text-red-600 bg-red-50 p-2 rounded overflow-auto">;
                  {this && this.state.error && error.stack}
                </pre>;
              </details>;
            )}