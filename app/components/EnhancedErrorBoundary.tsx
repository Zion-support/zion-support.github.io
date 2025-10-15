import { Component, ErrorInfo, ReactNode } from 'react';
import { RefreshCw, Home, AlertTriangle } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string | null;
}

class EnhancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }

  override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });

    // Enhanced error reporting
    const errorReport = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      errorId: this.state.errorId,
      userId: this.getUserId(),
      sessionId: this.getSessionId()
    };

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('EnhancedErrorBoundary caught an error:', error, errorInfo);
      console.error('Error Report:', errorReport);
    }

    // Send error to monitoring service in production
    if (process.env.NODE_ENV === 'production') {
      this.reportError(errorReport);
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  private getUserId(): string | null {
    // Try to get user ID from localStorage or other sources
    try {
      return localStorage.getItem('userId') || null;
    } catch {
      return null;
    }
  }

  private getSessionId(): string {
    // Generate or retrieve session ID
    try {
      let sessionId = sessionStorage.getItem('sessionId');
      if (!sessionId) {
        sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        sessionStorage.setItem('sessionId', sessionId);
      }
      return sessionId;
    } catch {
      return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }
  }

  private reportError = (errorReport: any) => {
    // Send to error monitoring service
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
      event_category: 'Error',
      event_label: errorReport.message,
      non_interaction: true
    });
    }

    // Send to custom error endpoint
    fetch('/api/errors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(errorReport)
    }).catch(() => {
      // Silently fail if error reporting fails
    });
  };

  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null
    });
  };

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  override render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white p-4">
          <div className="max-w-2xl w-full bg-slate-800 rounded-lg shadow-2xl border border-red-500/30 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-4">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="w-8 h-8 text-white" />
                <div>
                  <h1 className="text-xl font-bold">Something went wrong</h1>
                  <p className="text-red-100 text-sm">We're sorry for the inconvenience</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2 text-red-400">Error Details</h2>
                <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
                  <p className="text-gray-300 mb-2">
                    <strong>Message:</strong> {this.state.error?.message || 'An unexpected error occurred'}
                  </p>
                  {this.state.errorId && (
                    <p className="text-gray-400 text-sm">
                      <strong>Error ID:</strong> {this.state.errorId}
                    </p>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <button
                  onClick={this.handleRetry}
                  className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors"
                >
                  <RefreshCw className="w-5 h-5" />
                  <span>Try Again</span>
                </button>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={this.handleReload}
                    className="flex items-center justify-center space-x-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Reload Page</span>
                  </button>

                  <button
                    onClick={this.handleGoHome}
                    className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <Home className="w-4 h-4" />
                    <span>Go Home</span>
                  </button>
                </div>
              </div>

              {/* Debug info in development */}
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="mt-6">
                  <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300 mb-2">
                    Debug Information
                  </summary>
                  <div className="bg-slate-900 rounded-lg p-4 border border-slate-700 text-xs font-mono text-gray-300 overflow-auto max-h-40">
                    <pre>{this.state.error.stack}</pre>
                    {this.state.errorInfo && (
                      <pre className="mt-2 text-yellow-400">{this.state.errorInfo.componentStack}</pre>
                    )}
                  </div>
                </details>
              )}

              {/* Support info */}
              <div className="mt-6 p-4 bg-slate-700/50 rounded-lg">
                <p className="text-sm text-gray-300 mb-2">
                  If this problem persists, please contact our support team:
                </p>
                <div className="text-sm text-gray-400">
                  <p>📞 <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 (302) 464-0950</a></p>
                  <p>✉️ <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default EnhancedErrorBoundary;