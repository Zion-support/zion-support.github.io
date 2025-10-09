import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showDetails?: boolean;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string;
}

class EnhancedErrorBoundary extends Component<Props, State> {
  private retryCount = 0;
  private maxRetries = 3;

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
    // Generate unique error ID for tracking
    const errorId = `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    return {
      hasError: true,
      error,
      errorId
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error details
    console.error('Error Boundary caught an error:', error, errorInfo);
    
    // Update state with error info
    this.setState({
      error,
      errorInfo
    });

    // Call custom error handler
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Report error to analytics/monitoring service
    this.reportError(error, errorInfo);
  }

  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    const errorReport = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      errorId: this.state.errorId,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      retryCount: this.retryCount
    };

    // Send to analytics
    if ('gtag' in window) {
      (window as any).gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        custom_map: {
          error_id: this.state.errorId,
          component_stack: errorInfo.componentStack
        }
      });
    }

    // Send to error reporting service (if available)
    if (typeof window !== 'undefined' && 'fetch' in window) {
      fetch('/api/errors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorReport)
      }).catch(err => {
        console.warn('Failed to report error:', err);
      });
    }

    // Store error in localStorage for debugging
    try {
      const errors = JSON.parse(localStorage.getItem('error_logs') || '[]');
      errors.push(errorReport);
      // Keep only last 10 errors
      if (errors.length > 10) {
        errors.splice(0, errors.length - 10);
      }
      localStorage.setItem('error_logs', JSON.stringify(errors));
    } catch (e) {
      console.warn('Failed to store error in localStorage:', e);
    }
  };

  private handleRetry = () => {
    if (this.retryCount < this.maxRetries) {
      this.retryCount++;
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null,
        errorId: ''
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
      error: this.state.error?.message,
      stack: this.state.error?.stack,
      componentStack: this.state.errorInfo?.componentStack,
      errorId: this.state.errorId,
      timestamp: new Date().toISOString(),
      url: window.location.href
    };

    navigator.clipboard.writeText(JSON.stringify(errorDetails, null, 2))
      .then(() => {
        alert('Error details copied to clipboard');
      })
      .catch(() => {
        alert('Failed to copy error details');
      });
  };

  render() {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full">
            <div className="cyber-card hologram-card p-8 text-center">
              {/* Error Icon */}
              <div className="text-6xl mb-6">⚠️</div>
              
              {/* Error Title */}
              <h1 className="text-3xl font-bold text-white mb-4 neon-text">
                Oops! Something went wrong
              </h1>
              
              {/* Error Message */}
              <p className="text-gray-300 mb-6 text-lg">
                We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
              </p>

              {/* Error ID for support */}
              <div className="bg-slate-800 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-400 mb-2">Error ID (for support):</p>
                <code className="text-cyan-400 font-mono text-sm break-all">
                  {this.state.errorId}
                </code>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                {this.retryCount < this.maxRetries && (
                  <button
                    onClick={this.handleRetry}
                    className="cyber-button px-6 py-3"
                    aria-label="Try again"
                  >
                    Try Again ({this.maxRetries - this.retryCount} attempts left)
                  </button>
                )}
                
                <button
                  onClick={this.handleReload}
                  className="cyber-button px-6 py-3"
                  style={{ background: 'linear-gradient(45deg, #8b5cf6, #ec4899)' }}
                  aria-label="Reload page"
                >
                  Reload Page
                </button>
                
                <button
                  onClick={this.handleGoHome}
                  className="cyber-button px-6 py-3"
                  style={{ background: 'linear-gradient(45deg, #10b981, #3b82f6)' }}
                  aria-label="Go to home page"
                >
                  Go Home
                </button>
              </div>

              {/* Error Details (for debugging) */}
              {this.props.showDetails && this.state.error && (
                <details className="text-left bg-slate-800 rounded-lg p-4 mb-6">
                  <summary className="text-cyan-400 cursor-pointer font-medium mb-2">
                    Technical Details (Click to expand)
                  </summary>
                  <div className="space-y-2">
                    <div>
                      <strong className="text-red-400">Error:</strong>
                      <pre className="text-xs text-gray-300 mt-1 overflow-auto">
                        {this.state.error.message}
                      </pre>
                    </div>
                    {this.state.error.stack && (
                      <div>
                        <strong className="text-red-400">Stack Trace:</strong>
                        <pre className="text-xs text-gray-300 mt-1 overflow-auto max-h-32">
                          {this.state.error.stack}
                        </pre>
                      </div>
                    )}
                    {this.state.errorInfo?.componentStack && (
                      <div>
                        <strong className="text-red-400">Component Stack:</strong>
                        <pre className="text-xs text-gray-300 mt-1 overflow-auto max-h-32">
                          {this.state.errorInfo.componentStack}
                        </pre>
                      </div>
                    )}
                    <button
                      onClick={this.copyErrorDetails}
                      className="text-xs bg-slate-700 hover:bg-slate-600 px-3 py-1 rounded transition-colors"
                    >
                      Copy Error Details
                    </button>
                  </div>
                </details>
              )}

              {/* Contact Information */}
              <div className="text-sm text-gray-400">
                <p className="mb-2">
                  If this problem persists, please contact our support team:
                </p>
                <div className="space-y-1">
                  <p>📞 Phone: <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">(302) 464-0950</a></p>
                  <p>📧 Email: <a href="mailto:support@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">support@ziontechgroup.com</a></p>
                </div>
              </div>

              {/* Retry Progress */}
              {this.retryCount > 0 && (
                <div className="mt-6">
                  <div className="text-sm text-gray-400 mb-2">
                    Retry attempts: {this.retryCount}/{this.maxRetries}
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div 
                      className="bg-cyan-400 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(this.retryCount / this.maxRetries) * 100}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default EnhancedErrorBoundary;