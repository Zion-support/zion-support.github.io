'use client';
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react';

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
      console.error('Error Boundary caught an error:', error, errorInfo);
    }

    // Send error to analytics/monitoring service
    this.logError(error, errorInfo);

    // Call custom error handler
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  private logError = (error: Error, errorInfo: ErrorInfo) => {
    const errorData = {
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
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
      gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        custom_map: errorData
      });
    }

    // Store in localStorage for debugging
    try {
      const existingErrors = JSON.parse(localStorage.getItem('error_logs') || '[]');
      existingErrors.push(errorData);
      localStorage.setItem('error_logs', JSON.stringify(existingErrors.slice(-10))); // Keep only last 10 errors
    } catch (e) {
      // Ignore localStorage errors
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
    } else {
      // Reset retry count and reload page
      this.retryCount = 0;
      window.location.reload();
    }
  };

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleReportBug = () => {
    const errorData = {
      errorId: this.state.errorId,
      message: this.state.error?.message,
      stack: this.state.error?.stack,
      url: window.location.href,
      timestamp: new Date().toISOString()
    };

    // Create mailto link with error details
    const subject = `Bug Report - Error ID: ${this.state.errorId}`;
    const body = `Error Details:\n\n${JSON.stringify(errorData, null, 2)}\n\nPlease describe what you were doing when this error occurred:`;
    
    window.open(`mailto:kleber@ziontechgroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  };

  render() {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full">
            <div className="cyber-card-enhanced p-8 text-center">
              <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-10 h-10 text-red-400" />
              </div>
              
              <h1 className="text-3xl font-bold text-white mb-4">
                Oops! Something went wrong
              </h1>
              
              <p className="text-gray-300 mb-6">
                We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
              </p>

              {this.state.errorId && (
                <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-400 mb-2">Error ID:</p>
                  <code className="text-cyan-400 font-mono text-sm">{this.state.errorId}</code>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <button
                  onClick={this.handleRetry}
                  className="cyber-button-enhanced flex items-center justify-center space-x-2"
                  disabled={this.retryCount >= this.maxRetries}
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>
                    {this.retryCount >= this.maxRetries ? 'Max Retries Reached' : `Try Again (${this.retryCount}/${this.maxRetries})`}
                  </span>
                </button>

                <button
                  onClick={this.handleGoHome}
                  className="border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Home className="w-4 h-4" />
                  <span>Go Home</span>
                </button>

                <button
                  onClick={this.handleReload}
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
                >
                  Reload Page
                </button>
              </div>

              <div className="border-t border-gray-700 pt-6">
                <p className="text-sm text-gray-400 mb-4">
                  If this problem persists, please report it to our support team.
                </p>
                
                <button
                  onClick={this.handleReportBug}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center justify-center space-x-2 mx-auto"
                >
                  <Bug className="w-4 h-4" />
                  <span>Report Bug</span>
                </button>
              </div>

              {this.props.showDetails && this.state.error && (
                <details className="mt-8 text-left">
                  <summary className="cursor-pointer text-gray-400 hover:text-white transition-colors mb-4">
                    Technical Details (Click to expand)
                  </summary>
                  <div className="bg-slate-800/50 rounded-lg p-4 overflow-auto">
                    <pre className="text-xs text-gray-300 whitespace-pre-wrap">
                      {this.state.error.stack}
                    </pre>
                    {this.state.errorInfo && (
                      <div className="mt-4">
                        <h4 className="text-sm font-semibold text-gray-400 mb-2">Component Stack:</h4>
                        <pre className="text-xs text-gray-300 whitespace-pre-wrap">
                          {this.state.errorInfo.componentStack}
                        </pre>
                      </div>
                    )}
                  </div>
                </details>
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