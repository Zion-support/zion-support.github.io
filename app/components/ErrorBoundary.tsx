'use client';
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  enableErrorReporting?: boolean;
  enableErrorRecovery?: boolean;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string | null;
  retryCount: number;
}

class ErrorBoundary extends Component<Props, State> {
  private maxRetries = 3;
  private retryTimeout: NodeJS.Timeout | null = null;

  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null,
      retryCount: 0
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    // Update state so the next render will show the fallback UI
    return {
      hasError: true,
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error details
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // Update state with error info
    this.setState({
      error,
      errorInfo
    });

    // Report error if enabled
    if (this.props.enableErrorReporting) {
      this.reportError(error, errorInfo);
    }

    // Call custom error handler
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    try {
      // Create error report
      const errorReport = {
        errorId: this.state.errorId,
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        retryCount: this.state.retryCount
      };

      // Send to error reporting service (e.g., Sentry, LogRocket, etc.)
      if (typeof window !== 'undefined' && 'fetch' in window) {
        fetch('/api/error-reporting', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(errorReport)
        }).catch(console.error);
      }

      // Also log to console for development
      console.error('Error Report:', errorReport);
    } catch (reportingError) {
      console.error('Failed to report error:', reportingError);
    }
  };

  private handleRetry = () => {
    if (this.state.retryCount < this.maxRetries) {
      this.setState(prevState => ({
        hasError: false,
        error: null,
        errorInfo: null,
        errorId: null,
        retryCount: prevState.retryCount + 1
      }));
    }
  };

  private handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null,
      retryCount: 0
    });
  };

  private handleReload = () => {
    window.location.reload();
  };

  componentWillUnmount() {
    if (this.retryTimeout) {
      clearTimeout(this.retryTimeout);
    }
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="error-boundary">
          <div className="error-container">
            <div className="error-icon">
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
            </div>
            
            <h1 className="error-title">Something went wrong</h1>
            
            <p className="error-message">
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
            </p>

            {this.state.error && (
              <details className="error-details">
                <summary>Error Details</summary>
                <div className="error-stack">
                  <strong>Error:</strong> {this.state.error.message}
                  <br />
                  <strong>Error ID:</strong> {this.state.errorId}
                  <br />
                  <strong>Retry Count:</strong> {this.state.retryCount}
                  {process.env.NODE_ENV === 'development' && this.state.error.stack && (
                    <>
                      <br />
                      <strong>Stack Trace:</strong>
                      <pre className="error-stack-trace">
                        {this.state.error.stack}
                      </pre>
                    </>
                  )}
                </div>
              </details>
            )}

            <div className="error-actions">
              {this.props.enableErrorRecovery && this.state.retryCount < this.maxRetries && (
                <button
                  onClick={this.handleRetry}
                  className="retry-button"
                  disabled={this.state.retryCount >= this.maxRetries}
                >
                  Try Again ({this.maxRetries - this.state.retryCount} attempts left)
                </button>
              )}
              
              <button onClick={this.handleReset} className="reset-button">
                Reset Application
              </button>
              
              <button onClick={this.handleReload} className="reload-button">
                Reload Page
              </button>
            </div>

            <div className="error-help">
              <p>
                If this problem persists, please contact our support team at{' '}
                <a href="mailto:support@ziontechgroup.com" className="support-link">
                  support@ziontechgroup.com
                </a>
                {' '}or call us at{' '}
                <a href="tel:+13024640950" className="support-link">
                  (302) 464-0950
                </a>
              </p>
            </div>
          </div>

          <style jsx>{`
            .error-boundary {
              min-height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              padding: 20px;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            }

            .error-container {
              background: white;
              border-radius: 12px;
              padding: 40px;
              max-width: 600px;
              width: 100%;
              text-align: center;
              box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            }

            .error-icon {
              color: #ef4444;
              margin-bottom: 24px;
            }

            .error-title {
              font-size: 32px;
              font-weight: 700;
              color: #1f2937;
              margin-bottom: 16px;
            }

            .error-message {
              font-size: 18px;
              color: #6b7280;
              margin-bottom: 32px;
              line-height: 1.6;
            }

            .error-details {
              margin-bottom: 32px;
              text-align: left;
            }

            .error-details summary {
              cursor: pointer;
              font-weight: 600;
              color: #374151;
              margin-bottom: 12px;
            }

            .error-stack {
              background: #f9fafb;
              border: 1px solid #e5e7eb;
              border-radius: 8px;
              padding: 16px;
              font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
              font-size: 14px;
              color: #374151;
            }

            .error-stack-trace {
              white-space: pre-wrap;
              word-break: break-all;
              margin-top: 8px;
            }

            .error-actions {
              display: flex;
              gap: 12px;
              justify-content: center;
              flex-wrap: wrap;
              margin-bottom: 32px;
            }

            .retry-button,
            .reset-button,
            .reload-button {
              padding: 12px 24px;
              border: none;
              border-radius: 8px;
              font-weight: 600;
              cursor: pointer;
              transition: all 0.2s ease;
              font-size: 16px;
            }

            .retry-button {
              background: #3b82f6;
              color: white;
            }

            .retry-button:hover:not(:disabled) {
              background: #2563eb;
              transform: translateY(-2px);
            }

            .retry-button:disabled {
              background: #9ca3af;
              cursor: not-allowed;
            }

            .reset-button {
              background: #10b981;
              color: white;
            }

            .reset-button:hover {
              background: #059669;
              transform: translateY(-2px);
            }

            .reload-button {
              background: #f59e0b;
              color: white;
            }

            .reload-button:hover {
              background: #d97706;
              transform: translateY(-2px);
            }

            .error-help {
              border-top: 1px solid #e5e7eb;
              padding-top: 24px;
            }

            .error-help p {
              color: #6b7280;
              margin: 0;
            }

            .support-link {
              color: #3b82f6;
              text-decoration: none;
              font-weight: 600;
            }

            .support-link:hover {
              text-decoration: underline;
            }

            @media (max-width: 640px) {
              .error-container {
                padding: 24px;
              }

              .error-title {
                font-size: 24px;
              }

              .error-message {
                font-size: 16px;
              }

              .error-actions {
                flex-direction: column;
              }

              .retry-button,
              .reset-button,
              .reload-button {
                width: 100%;
              }
            }
          `}</style>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;