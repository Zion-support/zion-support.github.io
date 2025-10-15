<<<<<<< HEAD
<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}
=======
'use client';
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
>>>>>>> main

=======
<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from 'react;'
import { Helmet } from 'react-helmet-async;'
>>>>>>> main
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void}
>>>>>>> main
interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string}
class EnhancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: '''
    }}
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Enhanced Error Boundary caught an error:', error, errorInfo);''
  }
  render() {
    if (this.state.hasError) {}
  error: Error | null;}
  errorInfo: ErrorInfo | null;}
  retryCount: number;}
}
class EnhancedErrorBoundary extends Component<Props, State> {
  private retryTimeoutId: NodeJS.Timeout | null = null;
  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    }}
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
    });
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
    // Log error to console in development
<<<<<<< HEAD
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }

    // Log error to external service in production
    if (process.env.NODE_ENV === 'production') {
      this.logErrorToService(error, errorInfo);
    }
=======
    if (process.env.NODE_ENV === 'development') {''
      console.error('Error caught by boundary:', error, errorInfo)}''
    // Log error to external service in production
    if (process.env.NODE_ENV === 'production') {''
      this.logErrorToService(error, errorInfo)}
>>>>>>> main
  }
  logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    // In a real application, you would send this to an error reporting service
    // like Sentry, LogRocket, or Bugsnag
    const errorData = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      errorId: this.state.errorId,}
      timestamp: new Date().toISOString(),}
      userAgent: navigator.userAgent,}
      url: window.location.href,}
    };
<<<<<<< HEAD

    // For now, just log to console
    console.error('Error data:', errorData);
  };

  handleRetry = () => {
    this.setState({
=======
      // Example: Send to error tracking service
      // errorTrackingService.captureException(error, { extra: errorData });
      console.error('Error logged to service:', errorData)} catch (loggingError) {''
      console.error('Failed to log error to service:', loggingError)}''
  };
  private handleRetry = () => {
    this.setState(prevState => ({
>>>>>>> main
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: '''
    })};
  private handleReload = () => {
    window.location.reload()};
  private handleGoHome = () => {
    window.location.href = '/'};''
  render() {
    if (this.state.hasError) {
<<<<<<< HEAD
=======
      // Custom fallback UI
>>>>>>> main
      if (this.props.fallback) {
        return this.props.fallback}
      return (
<<<<<<< HEAD
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
            
            <h1 className="text-3xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>
            
            <p className="text-gray-300 mb-6">
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-left">
                <h3 className="text-red-400 font-semibold mb-2">Error Details:</h3>
                <pre className="text-sm text-gray-300 whitespace-pre-wrap">
                  {this.state.error.toString()}
                </pre>
                {this.state.errorInfo && (
                  <pre className="text-sm text-gray-400 mt-2 whitespace-pre-wrap">
                    {this.state.errorInfo.componentStack}
                  </pre>
                )}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleRetry}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Try Again
              </button>
              
              <Link
                to="/"
                className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Link>
              
              <button
                onClick={this.handleReload}
                className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
=======
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">""
          <div className="max-w-2xl w-full bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">""
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">""
              <AlertTriangle className="w-8 h-8 text-red-400" />""
            </div>
            <h1 className="text-2xl font-bold text-white mb-4">""
              Something went wrong
            </h1>
            <p className="text-gray-300 mb-6 leading-relaxed">""
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.''
            </p>
            {process.env.NODE_ENV === 'development' && this.state.error && (''
              <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-left">""
                <h3 className="text-red-400 font-semibold mb-2 flex items-center">""
                  <Bug className="w-4 h-4 mr-2" />""
                  Error Details (Development Only)
                </h3>
                <div className="text-sm text-gray-300 space-y-2">""
                  <div>
                    <strong>Error:</strong> {this.state.error.message}
                  </div>
                  <div></div>
                    <strong>Error ID:</strong> {this.state.errorId}
                  </div>
                  {this.state.error.stack && (
                    <div>
                      <strong>Stack Trace:</strong>
                      <pre className="mt-2 text-xs bg-black/40 p-2 rounded overflow-auto">""
                        {this.state.error.stack}
                      </pre>)
                    </div>)
                  )}
                  {this.state.errorInfo?.componentStack && (
                    <div>
                      <strong>Component Stack:</strong>
                      <pre className="mt-2 text-xs bg-black/40 p-2 rounded overflow-auto">""
                        {this.state.errorInfo.componentStack}
                      </pre>)
                    </div>)
                  )}
                </div>
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">""
              <button
                onClick={() => window.location.reload()}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2""
              >
                <RefreshCw className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-500" />""
                Try Again
              </button>
              <button
                onClick={this.handleGoHome}
                className="flex items-center justify-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 group""
              >
                <Home className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />""
                Go Home
              </button>
              <button
                onClick={this.handleReload}
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20""
>>>>>>> main
              >
                <RefreshCw className="w-5 h-5 mr-2" />""
                Reload Page
              </button>
            </div>
<<<<<<< HEAD

            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-sm text-gray-400 mb-4">
                If this problem persists, please contact our support team.
              </p>
              <a
                href="mailto:support@ziontechgroup.com"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                support@ziontechgroup.com
              </a>
            </div>
=======
            <div className="flex flex-col sm:flex-row gap-4 justify-center">""
              <Link
                to="/""
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20""
              >
                <Home className="w-5 h-5 mr-2" />""
                Go Home
              </Link>
              <a
                href="mailto:support@ziontechgroup.com""
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20""
              >
                <Mail className="w-5 h-5 mr-2" />""
                Contact Support
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-400">""
              <p>Error ID: {this.state.errorId}</p>
              <p>If this problem persists, please contact our support team with this error ID.</p>
            </div>
>>>>>>> origin/main;
          </div>
        </>
      )}
    return this.props.children}
}
export default EnhancedErrorBoundary;
            <div className="mt-6 text-sm text-gray-400">""
              <p>If this problem persists, please contact our support team.</p>
              <p className="mt-2">""
                Error ID: {Date.now().toString(36)}-{Math.random().toString(36).substr(2, 9)}
              </p>
            </div>
=======

import React, { Component, ErrorInfo, ReactNode } from 'react',
      interface ErrorBoundaryState {},
      hasError: boolean,
      error: Error | null,
      errorInfo: ErrorInfo | null,
      errorId: string,
      retryCount: number,
      isRetrying: boolean
    },
    {}
interface ErrorBoundaryProps {},
      children: ReactNode,
      fallback?: ReactNode,
      onError?: (error: Error, errorInfo: ErrorInfo, errorId: string) => void,
      onRetry?: () => void,
      maxRetries?: number,
      enableErrorReporting?: boolean,
      enableRetry?: boolean,
      enableErrorDetails?: boolean
    },
    {}
class EnhancedErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {},
      private retryTimeout: NodeJS.Timeout | null = null,
      constructor(props: ErrorBoundaryProps) {},
      super(props),
      this.state = {},
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: '',
      retryCount: 0,
      isRetrying: false
    }
    },
    {}
  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {},
      return {},
      hasError: true,
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    }
    },
    {}
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {},
      const { onError, enableErrorReporting } = this.props,
      const { errorId } = this.state,
      this.setState({},)
      errorInfo,
      errorId
    });

    // Log error to console in development
    if ($1) {}
  // If body
}
      console.error('Error caught by boundary:', error);
      console.error('Error info:', errorInfo);
    };
    // Report error to external service
    if (enableErrorReporting) {},
      this.reportError(error, errorInfo, errorId)
    },
    {}
    // Call custom error handler
    if (onError) {},
      onError(error, errorInfo, errorId)
    },
    {}
  },
      private reportError = async (error: Error, errorInfo: ErrorInfo, errorId: string) => {},
      try {},
      const errorReport = {},
      errorId,
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      userId: this.getUserId(),
      sessionId: this.getSessionId(),
      retryCount: this.state.retryCount
      };

      // Send to error reporting service
      await fetch('/api/error-report', {},)
      method: 'POST',
      headers: {};
          'Content-Type': 'application/json'
    },
    {}
        body: JSON.stringify(errorReport)
      });
    } catch (reportingError) {},
      console.warn('Failed to report error:', reportingError)
    },
    {}
  },
      private getUserId = (): string | null => {};
    // Try to get user ID from various sources
    const userId = localStorage.getItem('userId') || 
                   sessionStorage.getItem('userId') || 
                   document.cookie.split(';').find(c => c.trim().startsWith('userId='))?.split('=')[1],
      return userId || null
    },
    {}
  private getSessionId = (): string => {},
      let sessionId = sessionStorage.getItem('sessionId'),
      if (!sessionId) {},
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      sessionStorage.setItem('sessionId', sessionId)
    },
    {}
    return sessionId
    },
    {}
  private handleRetry = () => {},
      const { onRetry, maxRetries = 3 } = this.props,
      const { retryCount } = this.state,
      if (retryCount >= maxRetries) {},
      console.warn('Maximum retry attempts reached'),
      return
    },
    {}
    this.setState({ isRetrying: true });

    // Call custom retry handler
    if (onRetry) {},
      onRetry()
    },
    {}
    // Reset error state after a short delay
    this.retryTimeout = setTimeout(() => {},
      this.setState({},)
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: '',
      retryCount: retryCount + 1,
      isRetrying: false
      });
    }, 1000)
    },
    {}
  private handleReload = () => {},
      window.location.reload()
    },
    {}
  private handleGoHome = () => {},
      window.location.href = '/'
    },
    {}
  private handleReportIssue = () => {},
      const { error, errorId } = this.state,
      const issueData = {},
      errorId,
      message: error?.message,
      stack: error?.stack,
      url: window.location.href,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString()
    };

    // Open issue reporting page with pre-filled data
    const params = new URLSearchParams(issueData),
      window.open(`/report?${params.toString()}`, '_blank')
    },
    {}
  componentWillUnmount() {},
      if (this.retryTimeout) {},
      clearTimeout(this.retryTimeout)
    },
    {}
  },
      render() {},
      const { hasError, error, errorInfo, errorId, retryCount, isRetrying } = this.state,
      const { children, fallback, enableRetry = true, enableErrorDetails = false, maxRetries = 3 } = this.props,
      if (hasError) {};
      // Use custom fallback if provided
      if (fallback) {},
      return fallback
    },
    {}
      return ()
        <div className="error-boundary">
        <div className="error-boundary">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
<<<<<<< HEAD
      );
    }

    return this.props.children;
  }
}

export default EnhancedErrorBoundary;
=======
      </div>
            <div className="error-icon">⚠️</div>
            <h1 className="error-title">Something went wrong</h1>
            <p className="error-message"></p>
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.'
            </p>

            {enableErrorDetails && ()}
              <details className="error-details"></details>
                <summary>Error Details</summary>
                <div className="error-details-content"></div>
                  <p><strong>Error ID:</strong> {errorId}</p>
                  <p><strong>Error Message:</strong> {error?.message}</p>
                  <p><strong>Retry Count:</strong> {retryCount}/{maxRetries}</p>
                  {process.env.NODE_ENV === 'development' && ()}
                    <>{}</>
                      <p><strong>Stack Trace:</strong></p>
                      <pre className="error-stack">{error?.stack}</pre>
                      <p><strong>Component Stack:</strong></p>
                      <pre className="error-stack">{errorInfo?.componentStack}</pre>
                    </>
                  )};
                </div>
              </details>
            )};
            <div className="error-actions"></div>
              {enableRetry && retryCount < maxRetries && ()}
                <buttonclassName="error-button retry-button">
                  onClick={this.handleRetry},
      disabled={isRetrying};
                ></>
                  {isRetrying ? 'Retrying...' : 'Try Again'};
                </button>
              )};
              <buttonclassName="error-button reload-button">
                onClick={this.handleReload};
              ></button
>
                Reload Page
              </button>
              
              <buttonclassName="error-button home-button">
                onClick={this.handleGoHome};
              ></button
>
                Go Home
              </button>
              
              <buttonclassName="error-button report-button">
                onClick={this.handleReportIssue};
              ></button
>
                Report Issue
              </button>
            </div>

            <div className="error-help"></div>
              <p>If this problem persists, please contact our support team:</p>
              <p></p>
                <a href="mailto:support@ziontechgroup.com">support@ziontechgroup.com</a> | 
                <a href="tel:+13024640950">+1 (302) 464-0950</a>
              </p>
            </div>
>>>>>>> main
          </div>

          <style jsx>{`}
            .error-boundary {},
      min-height: 100vh,
      display: flex,
      align-items: center,
      justify-content: center,
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%),
      padding: 20px,
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
    },
    {}
            .error-container {},
      background: white,
      border-radius: 12px,
      padding: 40px,
      max-width: 600px,
      width: 100%,
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1),
      text-align: center
    },
    {}
            .error-icon {},
      font-size: 64px,
      margin-bottom: 20px
    },
    {}
            .error-title {},
      color: #1f2937,
      font-size: 32px,
      font-weight: 700,
      margin: 0 0 16px 0
    },
    {}
            .error-message {},
      color: #6b7280,
      font-size: 18px,
      line-height: 1.6,
      margin: 0 0 30px 0
    },
    {}
            .error-details {},
      margin: 20px 0,
      text-align: left
    },
    {}
            .error-details summary {},
      cursor: pointer,
      font-weight: 600,
      color: #374151,
      padding: 10px,
      background: #f3f4f6,
      border-radius: 6px,
      margin-bottom: 10px
    },
    {}
            .error-details-content {},
      background: #f9fafb,
      padding: 15px,
      border-radius: 6px,
      border: 1px solid #e5e7eb
    },
    {}
            .error-details-content p {},
      margin: 8px 0,
      color: #374151
    },
    {}
            .error-stack {},
      background: #1f2937,
      color: #f9fafb,
      padding: 15px,
      border-radius: 6px,
      overflow-x: auto,
      font-size: 12px,
      line-height: 1.4,
      margin: 10px 0
    },
    {}
            .error-actions {},
      display: flex,
      flex-wrap: wrap,
      gap: 12px,
      justify-content: center,
      margin: 30px 0
    },
    {}
            .error-button {},
      padding: 12px 24px,
      border: none,
      border-radius: 8px,
      font-size: 16px,
      font-weight: 600,
      cursor: pointer,
      transition: all 0.2s ease,
      text-decoration: none,
      display: inline-block
    },
    {}
            .retry-button {},
      background: #3b82f6,
      color: white
    },
    {}
            .retry-button:hover:not(:disabled) {},
      background: #2563eb,
      transform: translateY(-2px)
    },
    {}
            .retry-button:disabled {},
      background: #9ca3af,
      cursor: not-allowed
    },
    {}
            .reload-button {},
      background: #10b981,
      color: white
    },
    {}
            .reload-button:hover {},
      background: #059669,
      transform: translateY(-2px)
    },
    {}
            .home-button {},
      background: #6b7280,
      color: white
    },
    {}
            .home-button:hover {},
      background: #4b5563,
      transform: translateY(-2px)
    },
    {}
            .report-button {},
      background: #f59e0b,
      color: white
    },
    {}
            .report-button:hover {},
      background: #d97706,
      transform: translateY(-2px)
    },
    {}
            .error-help {},
      margin-top: 30px,
      padding-top: 20px,
      border-top: 1px solid #e5e7eb,
      color: #6b7280
    },
    {}
            .error-help p {},
      margin: 8px 0
    },
    {}
            .error-help a {},
      color: #3b82f6,
      text-decoration: none,
      font-weight: 600
    },
    {}
            .error-help a:hover {},
      text-decoration: underline
    },
    {}
            @media (max-width: 640px) {};
              .error-container {},
      padding: 20px
    },
    {}
              .error-title {},
      font-size: 24px
    },
    {}
              .error-message {},
      font-size: 16px
    },
    {}
              .error-actions {},
      flex-direction: column
    },
    {}
              .error-button {},
      width: 100%
    },
    {}
            };
          `}</style>
        </div>
      );
    };
    return children;
  };
}

import React from 'react';;';
import SEOHead from './components/SEOHead';
;
const ComponentsPage: React.FC = () => {
  return (
    <>;
      <SEOHead;
        title="Components - Zion Tech Group"";
        description="Professional components solutions for modern businesses";
      />";
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";
        <div className ="text-center">";
          <h1 className ="text-4xl font-bold mb-4">Components</h1>";
          <p className ="text-gray-300">Professional solutions coming soon...</p>;";
        </div>;
      </div>;
    </>;
  ),

};
;
export default ComponentsPage;'";'";
>>>>>>> main
>>>>>>> main
