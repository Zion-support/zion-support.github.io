<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Phone } from 'lucide-react';
=======
'use client';
import React, { Component, ErrorInfo, ReactNode } from 'react';
>>>>>>> cursor/delete-records-acd8

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
<<<<<<< HEAD
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
=======
>>>>>>> cursor/delete-records-acd8
}

interface State {
  hasError: boolean;
  error?: Error;
<<<<<<< HEAD
  errorInfo?: ErrorInfo;
=======
>>>>>>> cursor/delete-records-acd8
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
<<<<<<< HEAD
    // Log error for monitoring in production
    if (process.env.NODE_ENV === 'production') {
      // In production, you would send this to an error reporting service
<<<<<<< HEAD
      // Example: errorReportingService.captureException(error, { extra: errorInfo })
    }
    
    this.setState({ error, errorInfo });
    
    // Call the onError callback if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
=======
      // Example: errorReportingService.captureException(error, { extra: errorInfo });
    }
    this.setState({ error, errorInfo });
>>>>>>> cursor/fix-errors-and-merge-to-main-6d59
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };
=======
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }
>>>>>>> cursor/delete-records-acd8

<<<<<<< HEAD
<<<<<<< HEAD
  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-ac10
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6d59
  render() {
    if (this.state.hasError) {
<<<<<<< HEAD
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
            
>>>>>>> cursor/fix-errors-and-merge-to-main-d028
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-ac10
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6d59
            <h1 className="text-2xl font-bold text-white mb-4">Oops! Something went wrong</h1>
            <p className="text-gray-300 mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page or go back to the home page.
            </p>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-d028
=======
            
>>>>>>> cursor/fix-errors-and-merge-to-main-ac10
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6d59
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="text-sm text-gray-400 cursor-pointer mb-2">
                  Error Details (Development)
                </summary>
                <pre className="text-xs text-red-400 bg-slate-900/50 p-3 rounded overflow-auto">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-d028
=======
            
>>>>>>> cursor/fix-errors-and-merge-to-main-ac10
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6d59
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleReload}
                className="flex items-center justify-center space-x-2 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Reload Page</span>
              </button>
              <button
                onClick={this.handleGoHome}
                className="flex items-center justify-center space-x-2 border border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                <Home className="w-4 h-4" />
                <span>Go Home</span>
              </button>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-d028
=======
            
>>>>>>> cursor/fix-errors-and-merge-to-main-ac10
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6d59
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-sm text-gray-400 mb-3">Still having trouble? Contact our support team:</p>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                kleber@ziontechgroup.com
              </a>
            </div>
=======
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-400 mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-4">We're sorry, but something unexpected happened.</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Reload Page
            </button>
>>>>>>> cursor/delete-records-acd8
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

<<<<<<< HEAD
export default ErrorBoundary;
<<<<<<< HEAD
=======
export default ErrorBoundary;
>>>>>>> cursor/fix-errors-and-merge-to-main-6d59
=======
>>>>>>> cursor/delete-records-acd8
