import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  enableReporting?: boolean;
  enableRecovery?: boolean;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  retryCount: number;
  isRecovering: boolean;
}

export class ImprovedErrorBoundary extends Component<Props, State> {
  private retryTimeoutId: NodeJS.Timeout | null = null;

  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: 0,
      isRecovering: false
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
      error,
      errorInfo
    });

    // Report error to external service
    if (this.props.enableReporting !== false) {
      this.reportError(error, errorInfo);
    }

    // Call custom error handler
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log error for debugging
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    try {
      // Report to external service (e.g., Sentry, LogRocket, etc.)
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'exception', {
          description: error.message,
          fatal: false,
          custom_map: {
            error_boundary: true,
            component_stack: errorInfo.componentStack
          }
        });
      }

      // Report to console in development
      if (process.env.NODE_ENV === 'development') {
        console.group('🚨 Error Boundary Report');
        console.error('Error:', error);
        console.error('Error Info:', errorInfo);
        console.error('Component Stack:', errorInfo.componentStack);
        console.groupEnd();
      }
    } catch (reportingError) {
      console.error('Failed to report error:', reportingError);
    }
  };

  private handleRetry = () => {
    this.setState(prevState => ({
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: prevState.retryCount + 1,
      isRecovering: true
    }));

    // Clear any existing timeout
    if (this.retryTimeoutId) {
      clearTimeout(this.retryTimeoutId);
    }

    // Simulate recovery time
    this.retryTimeoutId = setTimeout(() => {
      this.setState({ isRecovering: false });
    }, 1000);
  };

  private handleReload = () => {
    window.location.reload();
  };

  private handleReportIssue = () => {
    const { error, errorInfo } = this.state;
    if (!error || !errorInfo) return;

    const issueData = {
      error: {
        message: error.message,
        stack: error.stack,
        name: error.name
      },
      errorInfo: {
        componentStack: errorInfo.componentStack
      },
      userAgent: navigator.userAgent,
      url: window.location.href,
      timestamp: new Date().toISOString(),
      retryCount: this.state.retryCount
    };

    // Create a mailto link with the error details
    const subject = encodeURIComponent(`Error Report - ${error.name}`);
    const body = encodeURIComponent(`
Error Details:
${JSON.stringify(issueData, null, 2)}

Please describe what you were doing when this error occurred:
[Your description here]
    `);

    window.open(`mailto:support@ziontechgroup.com?subject=${subject}&body=${body}`);
  };

  componentWillUnmount() {
    if (this.retryTimeoutId) {
      clearTimeout(this.retryTimeoutId);
    }
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      const { error, retryCount, isRecovering } = this.state;

      return (
        <>
          <Helmet>
            <title>Error - Zion Tech Group</title>
            <meta name="robots" content="noindex, nofollow" />
          </Helmet>
          
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-100 p-4">
            <div className="max-w-2xl w-full bg-white rounded-lg shadow-xl p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  Oops! Something went wrong
                </h1>
                <p className="text-gray-600 mb-6">
                  We&apos;re sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
                </p>
              </div>

              {process.env.NODE_ENV === 'development' && error && (
                <div className="mb-6 p-4 bg-gray-100 rounded-lg text-left">
                  <h3 className="font-semibold text-gray-900 mb-2">Error Details (Development):</h3>
                  <pre className="text-sm text-gray-700 whitespace-pre-wrap overflow-auto max-h-32">
                    {error.name}: {error.message}
                    {error.stack && `\n\nStack Trace:\n${error.stack}`}
                  </pre>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={this.handleRetry}
                  disabled={isRecovering || retryCount >= 3}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center"
                >
                  {isRecovering ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Recovering...
                    </>
                  ) : (
                    `Try Again ${retryCount > 0 ? `(${retryCount}/3)` : ''}`
                  )}
                </button>

                <button
                  onClick={this.handleReload}
                  className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Reload Page
                </button>

                <button
                  onClick={this.handleReportIssue}
                  className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Report Issue
                </button>
              </div>

              {retryCount >= 3 && (
                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Maximum retry attempts reached.</strong> Please try reloading the page or contact support if the problem persists.
                  </p>
                </div>
              )}

              <div className="mt-8 text-sm text-gray-500">
                <p>Error ID: {Date.now().toString(36)}</p>
                <p>If this problem continues, please contact our support team.</p>
              </div>
            </div>
          </div>
        </>
      );
    }

    return this.props.children;
  }
}

export default ImprovedErrorBoundary;