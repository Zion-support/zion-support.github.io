// Enhanced error handler utility

import React, { Component, ErrorInfo, ReactNode } from 'react';

export interface EnhancedErrorHandlerProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  onRetry?: () => void;
  resetOnPropsChange?: boolean;
  resetKeys?: Array<string | number>;
  enableErrorReporting?: boolean;
  enableErrorRecovery?: boolean;
  maxRetries?: number;
  retryDelay?: number;
}

export interface EnhancedErrorHandlerState {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
  retryCount: number;
  isRetrying: boolean;
}

export class EnhancedErrorHandler extends Component<EnhancedErrorHandlerProps, EnhancedErrorHandlerState> {
  private resetTimeoutId?: NodeJS.Timeout;
  private retryTimeoutId?: NodeJS.Timeout;

  constructor(props: EnhancedErrorHandlerProps) {
    super(props);
    this.state = { 
      hasError: false, 
      retryCount: 0, 
      isRetrying: false 
    };
  }

  static getDerivedStateFromError(error: Error): Partial<EnhancedErrorHandlerState> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ error, errorInfo });

    // Call custom error handler
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Report error if enabled
    if (this.props.enableErrorReporting) {
      this.reportError(error, errorInfo);
    }

    // Log error
    console.error('EnhancedErrorHandler caught an error:', error, errorInfo);
  }

  componentDidUpdate(prevProps: EnhancedErrorHandlerProps) {
    const { resetKeys, resetOnPropsChange } = this.props;
    const { hasError } = this.state;

    if (hasError && prevProps.resetKeys !== resetKeys) {
      if (resetOnPropsChange && resetKeys) {
        this.resetError();
      }
    }
  }

  componentWillUnmount() {
    if (this.resetTimeoutId) {
      clearTimeout(this.resetTimeoutId);
    }
    if (this.retryTimeoutId) {
      clearTimeout(this.retryTimeoutId);
    }
  }

  resetError = () => {
    if (this.resetTimeoutId) {
      clearTimeout(this.resetTimeoutId);
    }

    this.setState({ 
      hasError: false, 
      error: undefined, 
      errorInfo: undefined,
      retryCount: 0,
      isRetrying: false
    });
  };

  retry = () => {
    const { maxRetries = 3, retryDelay = 1000, onRetry } = this.props;
    const { retryCount } = this.state;

    if (retryCount >= maxRetries) {
      console.warn('Maximum retry attempts reached');
      return;
    }

    this.setState({ isRetrying: true });

    if (onRetry) {
      onRetry();
    }

    this.retryTimeoutId = setTimeout(() => {
      this.setState(prevState => ({
        retryCount: prevState.retryCount + 1,
        isRetrying: false
      }));
      
      this.resetError();
    }, retryDelay * (retryCount + 1));
  };

  reportError = (error: Error, errorInfo: ErrorInfo) => {
    const errorReport = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      retryCount: this.state.retryCount
    };

    // Send to error reporting service
    fetch('/api/errors/report', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(errorReport)
    }).catch(reportError => {
      console.error('Failed to report error:', reportError);
    });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      const { retryCount, isRetrying } = this.state;
      const { maxRetries = 3, enableErrorRecovery = true } = this.props;

      return (
        <div className="enhanced-error-boundary">
          <div className="enhanced-error-boundary-content">
            <h2>Something went wrong</h2>
            <p>We're sorry, but something unexpected happened.</p>
            
            {enableErrorRecovery && retryCount < maxRetries && (
              <div className="error-boundary-actions">
                <button 
                  onClick={this.retry} 
                  disabled={isRetrying}
                  className="error-boundary-button error-boundary-retry"
                >
                  {isRetrying ? 'Retrying...' : `Try again (${retryCount + 1}/${maxRetries})`}
                </button>
                <button 
                  onClick={this.resetError} 
                  className="error-boundary-button error-boundary-reset"
                >
                  Reset
                </button>
              </div>
            )}

            {retryCount >= maxRetries && (
              <div className="error-boundary-max-retries">
                <p>Maximum retry attempts reached. Please refresh the page.</p>
                <button 
                  onClick={() => window.location.reload()} 
                  className="error-boundary-button error-boundary-refresh"
                >
                  Refresh Page
                </button>
              </div>
            )}

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="error-boundary-details">
                <summary>Error details</summary>
                <pre>{this.state.error.toString()}</pre>
                {this.state.errorInfo && (
                  <pre>{this.state.errorInfo.componentStack}</pre>
                )}
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default EnhancedErrorHandler;