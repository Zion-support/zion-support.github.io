import React, { Component, ErrorInfo, ReactNode } from 'react';
import { ErrorBoundaryProps, ErrorBoundaryState } from '../types/global';

/**
 * Advanced Error Boundary with comprehensive error handling
 * Features:
 * - Error logging and reporting
 * - Fallback UI with recovery options
 * - Error context preservation
 * - Performance monitoring integration
 */
class AdvancedErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  private retryCount = 0;
  private maxRetries = 3;
  private errorHistory: Error[] = [];

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      retryAttempts: 0,
      lastErrorTime: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return {
      hasError: true,
      error,
      lastErrorTime: new Date(),
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      errorInfo,
    });

    // Log error for monitoring
    this.logError(error, errorInfo);

    // Track error patterns
    this.trackErrorPattern(error);

    // Report to external services
    this.reportError(error, errorInfo);
  }

  private logError = (error: Error, errorInfo: ErrorInfo) => {
    const errorData = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      retryAttempts: this.retryCount,
    };

    console.error('Error Boundary caught an error:', errorData);

    // Store in localStorage for debugging
    try {
      const existingErrors = JSON.parse(localStorage.getItem('errorHistory') || '[]');
      existingErrors.push(errorData);
      localStorage.setItem('errorHistory', JSON.stringify(existingErrors.slice(-10))); // Keep last 10 errors
    } catch (e) {
      console.warn('Could not store error in localStorage:', e);
    }
  };

  private trackErrorPattern = (error: Error) => {
    this.errorHistory.push(error);
    
    // Check for error patterns
    const recentErrors = this.errorHistory.slice(-5);
    const similarErrors = recentErrors.filter(e => 
      e.message === error.message || e.name === error.name
    );

    if (similarErrors.length >= 3) {
      console.warn('Detected error pattern:', {
        errorType: error.name,
        message: error.message,
        count: similarErrors.length,
      });
    }
  };

  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    // Report to analytics or error tracking service
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        custom_map: {
          component_stack: errorInfo.componentStack,
          retry_attempts: this.retryCount,
        },
      });
    }

    // Report to custom analytics
    if (typeof window !== 'undefined' && (window as any).analytics) {
      (window as any).analytics.track('Error Boundary Triggered', {
        error_message: error.message,
        error_name: error.name,
        component_stack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
      });
    }
  };

  private handleRetry = () => {
    if (this.retryCount < this.maxRetries) {
      this.retryCount++;
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null,
        retryAttempts: this.retryCount,
      });
    }
  };

  private handleReload = () => {
    window.location.reload();
  };

  private handleReportBug = () => {
    const errorData = {
      message: this.state.error?.message,
      stack: this.state.error?.stack,
      componentStack: this.state.errorInfo?.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
    };

    // Create a mailto link with error details
    const subject = encodeURIComponent('Bug Report - Error Boundary');
    const body = encodeURIComponent(`
Error Details:
${JSON.stringify(errorData, null, 2)}

Please describe what you were doing when this error occurred:
    `);

    window.open(`mailto:support@ziontechgroup.com?subject=${subject}&body=${body}`);
  };

  render(): ReactNode {
    if (this.state.hasError) {
      const canRetry = this.retryCount < this.maxRetries;
      // const timeSinceError = this.state.lastErrorTime 
      //   ? Date.now() - this.state.lastErrorTime.getTime()
      //   : 0;

      return (
        <div className="error-boundary">
          <div className="error-boundary-content">
            <div className="error-icon">⚠️</div>
            <h2 className="error-title">Something went wrong</h2>
            <p className="error-description">
              We&apos;re sorry, but something unexpected happened. Our team has been notified.
            </p>
            
            {process.env.NODE_ENV === 'development' && (
              <details className="error-details">
                <summary>Error Details (Development)</summary>
                <pre className="error-stack">
                  {this.state.error?.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}

            <div className="error-actions">
              {canRetry && (
                <button
                  onClick={this.handleRetry}
                  className="error-button error-button-primary"
                >
                  Try Again ({this.maxRetries - this.retryCount} attempts left)
                </button>
              )}
              
              <button
                onClick={this.handleReload}
                className="error-button error-button-secondary"
              >
                Reload Page
              </button>
              
              <button
                onClick={this.handleReportBug}
                className="error-button error-button-secondary"
              >
                Report Bug
              </button>
            </div>

            <div className="error-help">
              <p>If this problem persists, please:</p>
              <ul>
                <li>Check your internet connection</li>
                <li>Clear your browser cache</li>
                <li>Try using a different browser</li>
                <li>Contact support if the issue continues</li>
              </ul>
            </div>
          </div>

          <style>{`
            .error-boundary {
              min-height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 2rem;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            }

            .error-boundary-content {
              max-width: 600px;
              background: white;
              border-radius: 12px;
              padding: 2rem;
              box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
              text-align: center;
            }

            .error-icon {
              font-size: 4rem;
              margin-bottom: 1rem;
            }

            .error-title {
              color: #2d3748;
              font-size: 1.5rem;
              font-weight: 600;
              margin-bottom: 1rem;
            }

            .error-description {
              color: #4a5568;
              font-size: 1rem;
              line-height: 1.6;
              margin-bottom: 2rem;
            }

            .error-details {
              margin: 1rem 0;
              text-align: left;
              background: #f7fafc;
              border-radius: 8px;
              padding: 1rem;
            }

            .error-details summary {
              cursor: pointer;
              font-weight: 600;
              color: #2d3748;
              margin-bottom: 0.5rem;
            }

            .error-stack {
              font-family: 'Monaco', 'Menlo', monospace;
              font-size: 0.8rem;
              color: #e53e3e;
              background: #fed7d7;
              padding: 1rem;
              border-radius: 4px;
              overflow-x: auto;
              white-space: pre-wrap;
            }

            .error-actions {
              display: flex;
              gap: 1rem;
              justify-content: center;
              flex-wrap: wrap;
              margin-bottom: 2rem;
            }

            .error-button {
              padding: 0.75rem 1.5rem;
              border: none;
              border-radius: 8px;
              font-size: 0.9rem;
              font-weight: 600;
              cursor: pointer;
              transition: all 0.2s ease;
              text-decoration: none;
              display: inline-block;
            }

            .error-button-primary {
              background: #3182ce;
              color: white;
            }

            .error-button-primary:hover {
              background: #2c5aa0;
              transform: translateY(-1px);
            }

            .error-button-secondary {
              background: #e2e8f0;
              color: #4a5568;
            }

            .error-button-secondary:hover {
              background: #cbd5e0;
              transform: translateY(-1px);
            }

            .error-help {
              text-align: left;
              background: #f7fafc;
              border-radius: 8px;
              padding: 1rem;
              border-left: 4px solid #3182ce;
            }

            .error-help p {
              margin: 0 0 0.5rem 0;
              font-weight: 600;
              color: #2d3748;
            }

            .error-help ul {
              margin: 0;
              padding-left: 1.5rem;
              color: #4a5568;
            }

            .error-help li {
              margin-bottom: 0.25rem;
            }

            @media (max-width: 640px) {
              .error-boundary {
                padding: 1rem;
              }

              .error-boundary-content {
                padding: 1.5rem;
              }

              .error-actions {
                flex-direction: column;
              }

              .error-button {
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

export default AdvancedErrorBoundary;