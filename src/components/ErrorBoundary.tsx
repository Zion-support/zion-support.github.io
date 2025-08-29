import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, MessageCircle, Bug } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  enableErrorReporting?: boolean;
  showErrorDetails?: boolean;
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
      errorId: this.generateErrorId()
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
      errorId: this.generateErrorId()
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

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Report error to external service if enabled
    if (this.props.enableErrorReporting) {
      this.reportError(error, errorInfo);
    }
  }

  private generateErrorId(): string {
    return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private reportError = async (error: Error, errorInfo: ErrorInfo) => {
    try {
      const errorReport = {
        errorId: this.state.errorId,
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        environment: process.env.NODE_ENV
      };

      // Send to error reporting service (e.g., Sentry, LogRocket, etc.)
      if (typeof window !== 'undefined' && (window as any).Sentry) {
        (window as any).Sentry.captureException(error, {
          contexts: {
            errorBoundary: errorReport
          }
        });
      }

      // Log to console for debugging
      console.group('Error Boundary Report');
      console.log('Error ID:', this.state.errorId);
      console.log('Error:', error);
      console.log('Error Info:', errorInfo);
      console.log('Error Report:', errorReport);
      console.groupEnd();
    } catch (reportingError) {
      console.error('Failed to report error:', reportingError);
    }
  };

  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: this.generateErrorId()
    });
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleReportIssue = () => {
    const errorDetails = this.state.error ? `
Error ID: ${this.state.errorId}
Error: ${this.state.error.message}
Stack: ${this.state.error.stack}
URL: ${window.location.href}
User Agent: ${navigator.userAgent}
    ` : '';

    const mailtoLink = `mailto:support@ziontechgroup.com?subject=Error Report - ${this.state.errorId}&body=${encodeURIComponent(errorDetails)}`;
    window.open(mailtoLink);
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-futuristic flex items-center justify-center p-4">
          <div className="max-w-2xl mx-auto text-center">
            <SEO 
              title="Error - Zion Tech Group"
              description="An error occurred while loading the page."
              keywords="error, technical issue, Zion Tech Group"
              ogType="website"
            />
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              {/* Error Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-10 h-10 text-red-400" />
                </div>
              </div>

              {/* Error Message */}
              <h1 className="text-3xl font-bold text-white mb-4">
                Oops! Something went wrong
              </h1>
              
              <p className="text-gray-300 mb-6 text-lg">
                We encountered an unexpected error while loading this page. 
                Our team has been notified and is working to fix it.
              </p>

              {/* Error ID */}
              <div className="bg-slate-700/50 rounded-lg p-3 mb-6">
                <p className="text-sm text-gray-400">
                  Error ID: <span className="font-mono text-cyan-400">{this.state.errorId}</span>
                </p>
              </div>

              {/* Error Details (Development Only) */}
              {this.props.showErrorDetails && this.state.error && (
                <details className="text-left mb-6 bg-slate-700/30 rounded-lg p-4">
                  <summary className="cursor-pointer text-cyan-400 font-medium mb-2">
                    Technical Details
                  </summary>
                  <div className="text-sm text-gray-300 font-mono">
                    <p><strong>Message:</strong> {this.state.error.message}</p>
                    <p><strong>Stack:</strong></p>
                    <pre className="whitespace-pre-wrap text-xs bg-slate-800 p-2 rounded">
                      {this.state.error.stack}
                    </pre>
                  </div>
                </details>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={this.handleRetry}
                  className="btn-futuristic flex items-center justify-center gap-2 px-6 py-3"
                >
                  <RefreshCw className="w-4 h-4" />
                  Try Again
                </button>
                
                <button
                  onClick={this.handleGoHome}
                  className="btn-secondary flex items-center justify-center gap-2 px-6 py-3"
                >
                  <Home className="w-4 h-4" />
                  Go Home
                </button>
                
                <button
                  onClick={this.handleReportIssue}
                  className="btn-outline flex items-center justify-center gap-2 px-6 py-3"
                >
                  <MessageCircle className="w-4 h-4" />
                  Report Issue
                </button>
              </div>

              {/* Additional Help */}
              <div className="mt-8 pt-6 border-t border-slate-600/50">
                <p className="text-sm text-gray-400 mb-3">
                  Still having issues? Try these steps:
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Refresh the page</li>
                  <li>• Clear your browser cache</li>
                  <li>• Check your internet connection</li>
                  <li>• Contact our support team</li>
                </ul>
              </div>

              {/* Support Contact */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-400">
                  Need immediate help? Contact us at{' '}
                  <a 
                    href="mailto:support@ziontechgroup.com" 
                    className="text-cyan-400 hover:text-cyan-300 underline"
                  >
                    support@ziontechgroup.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// CSS classes for buttons
const buttonClasses = {
  'btn-futuristic': 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg',
  'btn-secondary': 'bg-slate-600 hover:bg-slate-700 text-white font-semibold rounded-lg transition-all duration-300',
  'btn-outline': 'border border-slate-500 text-slate-300 hover:bg-slate-700 hover:text-white font-semibold rounded-lg transition-all duration-300'
};

// Add button styles to global CSS
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    .btn-futuristic { ${buttonClasses['btn-futuristic']} }
    .btn-secondary { ${buttonClasses['btn-secondary']} }
    .btn-outline { ${buttonClasses['btn-outline']} }
  `;
  document.head.appendChild(style);
}
