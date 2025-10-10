'use client';
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { logger } from '../utils/productionLogger';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  resetOnPropsChange?: boolean;
  resetKeys?: Array<string | number>;
  level?: 'page' | 'component' | 'critical';
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string;
  retryCount: number;
}

class OptimizedErrorBoundary extends Component<Props, State> {
  private retryTimeoutId: number | null = null;
  private maxRetries = 3;
  private retryDelay = 1000;

  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: '',
      retryCount: 0
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    const errorId = `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    return {
      hasError: true,
      error,
      errorId
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const { onError, level = 'component' } = this.props;
    const { errorId, retryCount } = this.state;

    // Log error details
    logger.error('Error boundary caught error', {
      errorId,
      error: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      level,
      retryCount,
      url: window.location.href,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString()
    });

    // Update state with error info
    this.setState({
      errorInfo,
      error
    });

    // Call custom error handler
    if (onError) {
      onError(error, errorInfo);
    }

    // Report to error tracking service
    this.reportError(error, errorInfo, errorId);

    // Auto-retry for non-critical errors
    if (level !== 'critical' && retryCount < this.maxRetries) {
      this.scheduleRetry();
    }
  }

  componentDidUpdate(prevProps: Props) {
    const { resetOnPropsChange, resetKeys } = this.props;
    const { hasError } = this.state;

    if (hasError && resetOnPropsChange) {
      const hasResetKeyChanged = resetKeys?.some((key, index) => 
        key !== prevProps.resetKeys?.[index]
      );

      if (hasResetKeyChanged) {
        this.resetErrorBoundary();
      }
    }
  }

  componentWillUnmount() {
    if (this.retryTimeoutId) {
      clearTimeout(this.retryTimeoutId);
    }
  }

  private reportError = (error: Error, errorInfo: ErrorInfo, errorId: string) => {
    // Report to Google Analytics if available
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as unknown).gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        custom_map: {
          error_id: errorId,
          component_stack: errorInfo.componentStack
        }
      });
    }

    // Report to custom error tracking service
    if (typeof window !== 'undefined' && 'fetch' in window) {
      fetch('/api/error-reporting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          errorId,
          message: error.message,
          stack: error.stack,
          componentStack: errorInfo.componentStack,
          url: window.location.href,
          userAgent: navigator.userAgent,
          timestamp: new Date().toISOString(),
          level: this.props.level || 'component'
        })
      }).catch(err => {
        logger.warn('Failed to report error to tracking service', { error: err.message });
      });
    }
  };

  private scheduleRetry = () => {
    const { retryCount } = this.state;
    const delay = this.retryDelay * Math.pow(2, retryCount); // Exponential backoff

    this.retryTimeoutId = window.setTimeout(() => {
      this.setState(prevState => ({
        hasError: false,
        error: null,
        errorInfo: null,
        retryCount: prevState.retryCount + 1
      }));
    }, delay);

    logger.info('Scheduled error boundary retry', { 
      retryCount: retryCount + 1, 
      delay 
    });
  };

  private resetErrorBoundary = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: '',
      retryCount: 0
    });

    if (this.retryTimeoutId) {
      clearTimeout(this.retryTimeoutId);
      this.retryTimeoutId = null;
    }

    logger.info('Error boundary reset');
  };

  private handleRetry = () => {
    this.resetErrorBoundary();
  };

  private handleReload = () => {
    window.location.reload();
  };

  render() {
    const { hasError, error, errorId, retryCount } = this.state;
    const { children, fallback, level = 'component' } = this.props;

    if (hasError) {
      // Use custom fallback if provided
      if (fallback) {
        return fallback;
      }

      // Default error UI based on level
      return (
        <div className="error-boundary" style={{
          padding: '20px',
          margin: '20px',
          border: '1px solid #ef4444',
          borderRadius: '8px',
          backgroundColor: '#fef2f2',
          color: '#dc2626'
        }}>
          <div className="error-header">
            <h2 style={{ margin: '0 0 10px 0', fontSize: '18px' }}>
              {level === 'critical' ? 'Critical Error' : 'Something went wrong'}
            </h2>
            <p style={{ margin: '0 0 15px 0', fontSize: '14px' }}>
              {level === 'critical' 
                ? 'A critical error occurred. Please reload the page.'
                : 'An error occurred while loading this section.'
              }
            </p>
          </div>

          {process.env.NODE_ENV === 'development' && error && (
            <details style={{ marginBottom: '15px' }}>
              <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>
                Error Details (Development Only)
              </summary>
              <pre style={{ 
                marginTop: '10px', 
                padding: '10px', 
                backgroundColor: '#f3f4f6', 
                borderRadius: '4px',
                overflow: 'auto',
                fontSize: '12px'
              }}>
                {error.message}
                {'\n\n'}
                {error.stack}
              </pre>
            </details>
          )}

          <div className="error-actions" style={{ display: 'flex', gap: '10px' }}>
            {level !== 'critical' && retryCount < this.maxRetries && (
              <button
                onClick={this.handleRetry}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                Try Again ({this.maxRetries - retryCount} attempts left)
              </button>
            )}
            
            <button
              onClick={this.handleReload}
              style={{
                padding: '8px 16px',
                backgroundColor: '#6b7280',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              Reload Page
            </button>
          </div>

          <div className="error-id" style={{ 
            marginTop: '15px', 
            fontSize: '12px', 
            color: '#6b7280' 
          }}>
            Error ID: {errorId}
          </div>
        </div>
      );
    }

    return children;
  }
}

export default OptimizedErrorBoundary;