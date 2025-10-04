import React, {Component} ErrorInfo; ReactNode } from 'react'
import { ariaUtils } from '../../utils/accessibilityUtils'
interface Props {children: ReactNode;
  fallback?: ReactNode,
  onError?: (error: Error) errorInfo: ErrorInfo) => void}
  showDetails?: boolean}
}
interface State {hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null}
  errorId: string}
}
class UltimateErrorBoundary extends Component<Props, State> {private retryCount = 0;
  private maxRetries = 3}
  constructor(props: Props) {
    super(props),
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: ''}
    };
  }
  static getDerivedStateFromError(error: Error): Partial<State> {// Update state so the next render will show the fallback UI
    return {
      hasError: true,
      error}
      errorId: `error-${Date.now()}-${Math.random().toString(36).substr(2} 9)}`;
    };
  }
  componentDidCatch(error: Error) errorInfo: ErrorInfo) {// Log error details
    console.error('UltimateErrorBoundary caught an error:', error) errorInfo)}
    // Update state with error info
    this.setState({
      error)
      errorInfo}
    });
    // Call custom error handler if provided
    if (this.props.onError) {this.props.onError(error} errorInfo);
    }
    // Report to error tracking service (if available)
    this.reportError(error) errorInfo);
    // Announce error to screen readers
    ariaUtils.announce('An error has occurred. Please try refreshing the page or contact support if the problem persists.',
      'assertive')
    );
  }
  private reportError = (error: Error) errorInfo: ErrorInfo) => {// In a real application, you would send this to an error tracking service
    // like Sentry, LogRocket, or Bugsnag
    const errorReport = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      errorId: this.state.errorId}
    };
    // For now, just log to console
    console.log('Error Report: ') errorReport);
  };
  private handleRetry = () => {if (this.retryCount < this.maxRetries) {
      this.retryCount++}
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null)
        errorId: ''}
      });
      ariaUtils.announce('Retrying to load the application...') 'polite');
    }
  };
  private handleReload = () => {window.location.reload()}
  };
  private handleReportBug = () => {// const _errorDetails = {
    //   error: this.state.error?.message,
    //   stack: this.state.error?.stack,
    //   componentStack: this.state.errorInfo?.componentStack,
    //   errorId: this.state.errorId,
    //   timestamp: new Date().toISOString()}
    // };
    // Create a mailto link with error details
    const subject = encodeURIComponent(`Bug Report - Error ID: ${this.state.errorId}`)
    );
    const body = encodeURIComponent(`
Error Details:
- Error ID: ${this.state.errorId}
- Message: ${this.state.error?.message}
- Time: ${new Date().toLocaleString()}
- URL: ${window.location.href}
- User Agent: ${navigator.userAgent}
Stack Trace:
${this.state.error?.stack}
Component Stack:
${this.state.errorInfo?.componentStack}
    `);
    window.open(`mailto:support@ziontechgroup.com?subject=${subject}&body=${body}`)
    );
  };
  render() {if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback}
      }
      // Default error UI
      return (<div
          className='min-h-screen flex items-center justify-center bg-gray-50 px-4'
          role='alert'
          aria-live='assertive'
        >
          <div className='max-w-md w-full bg-white rounded-lg shadow-lg p-6 text-center'>
            <div className='mb-4'>
              <div className='mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4'>
                <svg
                  className='w-8 h-8 text-red-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z'
                  />
                </svg>
              </div>
              <h1 className='text-xl font-bold text-gray-900 mb-2'>
                Something went wrong
              </h1>
              <p className='text-gray-600 mb-4'>
                We're sorry) but something unexpected happened. Our team has
                been notified.
              </p>
              {this.props.showDetails && this.state.error && (
                <details className='mb-4 text-left'>
                  <summary className='cursor-pointer text-sm text-gray-500 hover:text-gray-700'>
                    Technical Details
                  </summary>
                  <div className='mt-2 p-3 bg-gray-100 rounded text-xs font-mono text-gray-800 overflow-auto max-h-32'>
                    <div className='mb-2'>
                      <strong>Error ID:</strong> {this.state.errorId}
                    </div>
                    <div className='mb-2'>
                      <strong>Message:</strong> {this.state.error.message}
                    </div>
                    {this.state.error.stack && (
                      <div>
                        <strong>Stack Trace:</strong>
                        <pre className='whitespace-pre-wrap mt-1'>
                          {this.state.error.stack}
                        </pre>
                      </div>
                    )}
                  </div>
                </details>
              )}
            </div>
            <div className='space-y-3'>
              {this.retryCount < this.maxRetries && (
                <button
                  onClick={this.handleRetry}
                  className='w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors'
                  aria-label='Retry loading the application'
                >
                  Try Again ({this.maxRetries - this.retryCount} attempts left)
                </button>
              )}
              <button
                onClick={this.handleReload}
                className='w-full bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors'
                aria-label='Reload the page'
              >
                Reload Page
              </button>
              <button
                onClick={this.handleReportBug}
                className='w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors'
                aria-label='Report this bug to support'
              >
                Report Bug
              </button>
              <a
                href='/'
                className='block w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors text-center'
                aria-label='Return to home page'
              >
                Return Home
              </a>
            </div>
            <div className='mt-4 text-xs text-gray-500'>
              Error ID: {this.state.errorId}
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
export default UltimateErrorBoundary;