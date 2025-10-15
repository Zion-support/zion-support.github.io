import { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Bug, Mail } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showDetails?: boolean;
}

interface State {
  hasError: boolean;
  error: Error | undefined;
  errorInfo: ErrorInfo | undefined;
  errorId?: string;
  retryCount: number;
}

class EnhancedErrorBoundary extends Component<Props, State> {
  private maxRetries = 3;

  constructor(props: Props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: undefined,
      errorInfo: undefined,
      retryCount: 0 
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

    // Log error to console (commented out for production)
    // console.error('Error caught by boundary:', error, errorInfo);

    // Report error to monitoring service
    this.reportError(error, errorInfo);

    // Call custom error handler
    this.props.onError?.(error, errorInfo);
  }

  private reportError = async (error: Error, errorInfo: ErrorInfo) => {
    const errorReport = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      errorId: this.state.errorId,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      retryCount: this.state.retryCount,
    };

    // Report to external service in production
    if (process.env.NODE_ENV === 'production') {
      try {
        await fetch('/api/errors', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(errorReport),
        });
      } catch {
        // console.warn('Failed to report error:', reportingError);
      }
    }

    // Store error locally for debugging
    const errors = JSON.parse(localStorage.getItem('app-errors') || '[]');
    errors.push(errorReport);
    if (errors.length > 10) {
      errors.shift(); // Keep only last 10 errors
    }
    localStorage.setItem('app-errors', JSON.stringify(errors));
  };

  handleRetry = () => {
    if (this.state.retryCount < this.maxRetries) {
      this.setState({
        hasError: false,
        error: undefined,
        errorInfo: undefined,
        retryCount: this.state.retryCount + 1
      });
      }));
>>>>>>> cursor/fix-errors-and-merge-to-main-c51f
    }
  };

  handleReset = () => {
    this.setState({
      hasError: false,
      error: undefined as Error | undefined,
      errorInfo: undefined as ErrorInfo | undefined,
      retryCount: 0
    });
  };

  handleReportBug = () => {
    const errorDetails = {
      error: this.state.error?.toString(),
      stack: this.state.error?.stack,
      componentStack: this.state.errorInfo?.componentStack,
      errorId: this.state.errorId,
      url: window.location.href,
    };

    const subject = `Bug Report - Error ID: ${this.state.errorId}`;
    const body = `Please describe what you were doing when this error occurred:\n\n\n\nError Details:\n${JSON.stringify(errorDetails, null, 2)}`;
    
    const mailtoLink = `mailto:kleber@ziontechgroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
  };

  override render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      const canRetry = this.state.retryCount < this.maxRetries;
      const isDevelopment = process.env.NODE_ENV === 'development';

      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-10 h-10 text-red-400" />
            </div>
            
            <h1 className="text-3xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>
            
            <p className="text-gray-300 mb-6 text-lg">
              We&apos;re sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
            </p>

            {this.state.errorId && (
              <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-400 mb-2">Error ID:</p>
                <code className="text-cyan-400 font-mono text-sm">{this.state.errorId}</code>
              </div>
            )}

            {isDevelopment && this.state.error && (
              <details className="mb-6 text-left bg-slate-800/50 rounded-lg p-4">
                <summary className="cursor-pointer text-sm text-gray-400 mb-4 font-semibold">
                  <Bug className="w-4 h-4 inline mr-2" />
                  Error Details (Development Mode)
                </summary>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-red-400 mb-2">Error Message:</h4>
                    <pre className="bg-slate-900 p-3 rounded text-xs text-red-300 overflow-auto">
                      {this.state.error.toString()}
                    </pre>
                  </div>
                  {this.state.error.stack && (
                    <div>
                      <h4 className="text-sm font-semibold text-red-400 mb-2">Stack Trace:</h4>
                      <pre className="bg-slate-900 p-3 rounded text-xs text-red-300 overflow-auto">
                        {this.state.error.stack}
                      </pre>
                    </div>
                  )}
                  {this.state.errorInfo?.componentStack && (
                    <div>
                      <h4 className="text-sm font-semibold text-red-400 mb-2">Component Stack:</h4>
                      <pre className="bg-slate-900 p-3 rounded text-xs text-red-300 overflow-auto">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}
                </div>
              </details>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {canRetry && (
                <button
                  onClick={this.handleRetry}
                  className="flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-semibold"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Try Again ({this.maxRetries - this.state.retryCount} attempts left)
                </button>
              )}
              
              <button
                onClick={this.handleReset}
                className="flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-semibold"
              >
                <Home className="w-4 h-4 mr-2" />
                Start Fresh
              </button>
              
              <button
                onClick={this.handleReportBug}
                className="flex items-center justify-center px-6 py-3 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white rounded-lg transition-colors font-semibold"
              >
                <Mail className="w-4 h-4 mr-2" />
                Report Bug
              </button>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              <p>If this problem persists, please contact our support team with the Error ID above.</p>
              <p className="mt-2">
                Email: <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a>
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default EnhancedErrorBoundary;