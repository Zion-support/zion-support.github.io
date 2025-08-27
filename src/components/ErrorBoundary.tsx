import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, Bug, X, Copy, CheckCircle } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showDetails?: boolean;
  enableRecovery?: boolean;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  showStack: boolean;
  copied: boolean;
  recoveryAttempts: number;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      showStack: false,
      copied: false,
      recoveryAttempts: 0
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      errorInfo
    });

    // Log error to console
    console.error('Error caught by boundary:', error, errorInfo);

    // Call custom error handler if provided
    this.props.onError?.(error, errorInfo);

    // Send error to error reporting service (replace with your service)
    this.reportError(error, errorInfo);
  }

  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    try {
      // Example: Send to error reporting service
      const errorReport = {
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent,
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight
        }
      };

      // In production, send this to your error reporting service
      console.log('Error Report:', errorReport);
      
      // Example: Send to Sentry, LogRocket, etc.
      // Sentry.captureException(error, { extra: errorInfo });
      
    } catch (reportingError) {
      console.warn('Failed to report error:', reportingError);
    }
  };

  private handleRetry = () => {
    this.setState(prevState => ({
      hasError: false,
      error: null,
      errorInfo: null,
      showStack: false,
      recoveryAttempts: prevState.recoveryAttempts + 1
    }));
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleReload = () => {
    window.location.reload();
  };

  private handleCopyError = async () => {
    if (this.state.error && this.state.errorInfo) {
      const errorText = `
Error: ${this.state.error.message}
Stack: ${this.state.error.stack}
Component Stack: ${this.state.errorInfo.componentStack}
URL: ${window.location.href}
Timestamp: ${new Date().toISOString()}
      `.trim();

      try {
        await navigator.clipboard.writeText(errorText);
        this.setState({ copied: true });
        setTimeout(() => this.setState({ copied: false }), 2000);
      } catch (err) {
        console.warn('Failed to copy error:', err);
      }
    }
  };

  private handleToggleStack = () => {
    this.setState(prevState => ({
      showStack: !prevState.showStack
    }));
  };

  private getErrorMessage = (error: Error): string => {
    // Provide user-friendly error messages based on error type
    if (error.name === 'TypeError') {
      return 'Something went wrong with the data. Please try refreshing the page.';
    }
    if (error.name === 'NetworkError') {
      return 'Network connection issue. Please check your internet connection.';
    }
    if (error.name === 'QuotaExceededError') {
      return 'Storage limit reached. Please clear some space and try again.';
    }
    if (error.message.includes('fetch')) {
      return 'Failed to load data. Please check your connection and try again.';
    }
    if (error.message.includes('JSON')) {
      return 'Data format error. Please refresh the page.';
    }
    
    return 'Something unexpected happened. Our team has been notified.';
  };

  private getRecoverySuggestion = (error: Error): string => {
    if (this.state.recoveryAttempts > 2) {
      return 'Multiple recovery attempts failed. Please refresh the page or contact support.';
    }
    
    if (error.name === 'NetworkError') {
      return 'Try checking your internet connection and refreshing the page.';
    }
    if (error.message.includes('fetch')) {
      return 'Try refreshing the page or checking your network connection.';
    }
    
    return 'Try refreshing the page or going back to the home page.';
  };

  render() {
    if (this.state.hasError) {
      const { error, errorInfo, showStack, copied, recoveryAttempts } = this.state;
      const { showDetails = true, enableRecovery = true } = this.props;

      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <motion.div
          className="error-boundary"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="error-container">
            {/* Error Header */}
            <div className="error-header">
              <div className="error-icon">
                <AlertTriangle size={48} />
              </div>
              <h1 className="error-title">Oops! Something went wrong</h1>
              <p className="error-message">
                {error ? this.getErrorMessage(error) : 'An unexpected error occurred'}
              </p>
            </div>

            {/* Recovery Options */}
            {enableRecovery && (
              <div className="recovery-options">
                <h3>What would you like to do?</h3>
                <div className="recovery-buttons">
                  <button
                    onClick={this.handleRetry}
                    className="recovery-btn primary"
                    disabled={recoveryAttempts > 2}
                  >
                    <RefreshCw size={20} />
                    Try Again
                    {recoveryAttempts > 0 && (
                      <span className="attempt-count">({recoveryAttempts}/3)</span>
                    )}
                  </button>
                  
                  <button
                    onClick={this.handleGoHome}
                    className="recovery-btn secondary"
                  >
                    <Home size={20} />
                    Go Home
                  </button>
                  
                  <button
                    onClick={this.handleReload}
                    className="recovery-btn secondary"
                  >
                    <RefreshCw size={20} />
                    Refresh Page
                  </button>
                </div>
                
                {recoveryAttempts > 0 && (
                  <p className="recovery-suggestion">
                    {error ? this.getRecoverySuggestion(error) : 'Try refreshing the page'}
                  </p>
                )}
              </div>
            )}

            {/* Error Details (for developers) */}
            {showDetails && error && errorInfo && (
              <div className="error-details">
                <div className="details-header">
                  <button
                    onClick={this.handleToggleStack}
                    className="toggle-details-btn"
                  >
                    <Bug size={16} />
                    {showStack ? 'Hide' : 'Show'} Technical Details
                  </button>
                  
                  <button
                    onClick={this.handleCopyError}
                    className="copy-error-btn"
                    title="Copy error details"
                  >
                    {copied ? <CheckCircle size={16} /> : <Copy size={16} />}
                  </button>
                </div>

                {showStack && (
                  <motion.div
                    className="error-stack"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="stack-section">
                      <h4>Error Message</h4>
                      <pre className="error-message-stack">{error.message}</pre>
                    </div>
                    
                    <div className="stack-section">
                      <h4>Error Stack</h4>
                      <pre className="error-stack-trace">{error.stack}</pre>
                    </div>
                    
                    <div className="stack-section">
                      <h4>Component Stack</h4>
                      <pre className="component-stack">{errorInfo.componentStack}</pre>
                    </div>
                  </motion.div>
                )}
              </div>
            )}

            {/* Support Information */}
            <div className="support-info">
              <p>
                If this problem persists, please contact our support team with the error details above.
              </p>
              <div className="support-links">
                <a href="/contact" className="support-link">Contact Support</a>
                <a href="/help" className="support-link">Help Center</a>
              </div>
            </div>
          </div>

          {/* Styles */}
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
              border-radius: 16px;
              box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
              padding: 40px;
              max-width: 600px;
              width: 100%;
              text-align: center;
            }

            .error-header {
              margin-bottom: 32px;
            }

            .error-icon {
              color: #f59e0b;
              margin-bottom: 16px;
            }

            .error-title {
              font-size: 28px;
              font-weight: 700;
              color: #1f2937;
              margin: 0 0 12px 0;
            }

            .error-message {
              font-size: 16px;
              color: #6b7280;
              margin: 0;
              line-height: 1.5;
            }

            .recovery-options {
              margin-bottom: 32px;
              padding: 24px;
              background: #f8fafc;
              border-radius: 12px;
            }

            .recovery-options h3 {
              font-size: 18px;
              font-weight: 600;
              color: #374151;
              margin: 0 0 16px 0;
            }

            .recovery-buttons {
              display: flex;
              gap: 12px;
              justify-content: center;
              flex-wrap: wrap;
              margin-bottom: 16px;
            }

            .recovery-btn {
              display: flex;
              align-items: center;
              gap: 8px;
              padding: 12px 20px;
              border: none;
              border-radius: 8px;
              font-size: 14px;
              font-weight: 500;
              cursor: pointer;
              transition: all 0.2s;
              text-decoration: none;
            }

            .recovery-btn.primary {
              background: #06b6d4;
              color: white;
            }

            .recovery-btn.primary:hover:not(:disabled) {
              background: #0891b2;
              transform: translateY(-1px);
            }

            .recovery-btn.primary:disabled {
              background: #9ca3af;
              cursor: not-allowed;
              transform: none;
            }

            .recovery-btn.secondary {
              background: #f3f4f6;
              color: #374151;
            }

            .recovery-btn.secondary:hover {
              background: #e5e7eb;
              transform: translateY(-1px);
            }

            .attempt-count {
              font-size: 12px;
              opacity: 0.8;
            }

            .recovery-suggestion {
              font-size: 14px;
              color: #6b7280;
              margin: 0;
              font-style: italic;
            }

            .error-details {
              margin-bottom: 24px;
              border: 1px solid #e5e7eb;
              border-radius: 8px;
              overflow: hidden;
            }

            .details-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 16px 20px;
              background: #f9fafb;
              border-bottom: 1px solid #e5e7eb;
            }

            .toggle-details-btn {
              display: flex;
              align-items: center;
              gap: 8px;
              background: none;
              border: none;
              color: #6b7280;
              cursor: pointer;
              font-size: 14px;
              padding: 8px 12px;
              border-radius: 6px;
              transition: all 0.2s;
            }

            .toggle-details-btn:hover {
              background: #f3f4f6;
              color: #374151;
            }

            .copy-error-btn {
              background: none;
              border: none;
              color: #6b7280;
              cursor: pointer;
              padding: 8px;
              border-radius: 6px;
              transition: all 0.2s;
            }

            .copy-error-btn:hover {
              background: #f3f4f6;
              color: #374151;
            }

            .error-stack {
              padding: 20px;
              background: #1f2937;
              color: #f9fafb;
              text-align: left;
            }

            .stack-section {
              margin-bottom: 20px;
            }

            .stack-section:last-child {
              margin-bottom: 0;
            }

            .stack-section h4 {
              font-size: 14px;
              font-weight: 600;
              color: #d1d5db;
              margin: 0 0 8px 0;
              text-transform: uppercase;
              letter-spacing: 0.05em;
            }

            .error-message-stack,
            .error-stack-trace,
            .component-stack {
              background: #111827;
              padding: 12px;
              border-radius: 6px;
              font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
              font-size: 12px;
              line-height: 1.4;
              overflow-x: auto;
              white-space: pre-wrap;
              word-break: break-word;
            }

            .support-info {
              padding: 20px;
              background: #f0f9ff;
              border-radius: 8px;
              border: 1px solid #bae6fd;
            }

            .support-info p {
              margin: 0 0 16px 0;
              color: #0369a1;
              font-size: 14px;
            }

            .support-links {
              display: flex;
              gap: 16px;
              justify-content: center;
            }

            .support-link {
              color: #0284c7;
              text-decoration: none;
              font-weight: 500;
              padding: 8px 16px;
              border-radius: 6px;
              transition: all 0.2s;
            }

            .support-link:hover {
              background: #e0f2fe;
              color: #0369a1;
            }

            @media (max-width: 640px) {
              .error-container {
                padding: 24px 20px;
              }

              .recovery-buttons {
                flex-direction: column;
              }

              .recovery-btn {
                width: 100%;
                justify-content: center;
              }

              .support-links {
                flex-direction: column;
                align-items: center;
              }
            }
          `}</style>
        </motion.div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
