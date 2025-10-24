'use client';
import React from "react";
import React, { Component, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Home, RefreshCw } from 'lucide-react';

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>GlobalErrorBoundary | Zion Tech Group</title>
        <meta name="description" content="Professional GlobalErrorBoundary services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="GlobalErrorBoundary, AI solutions, IT services, Zion Tech Group, globalerrorboundary" />
      </Helmet>


                Go Home


class GlobalErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ error, errorInfo });

    // Log error to console in development;
    if (process.env.NODE_ENV === 'development') {
      }

    // Call onError callback if provided;
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // In production, you might want to send this to an error reporting service;
    if (process.env.NODE_ENV === 'production') {
      // Example: Send to error reporting service;
      // errorReportingService.captureException(error, { extra: errorInfo });
    }
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI;
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI;
      return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4"></div>
          <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20"></div>
            <div className="text-6xl mb-4">⚠️<h1 className="text-2xl font-bold text-white mb-4">Something went wrong<p className="text-gray-300 mb-6">We're sorry, but something unexpected happened. Please try refreshing the page.</p>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4"></div>
          <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20"></div>
            <div className="text-6xl mb-4">⚠️</div><h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1><p className="text-gray-300 mb-6">We're sorry, but something unexpected happened. Please try refreshing the page.</p>
            </p>
          </div></div></div>

            {process.env.NODE_ENV === 'development' && this.state.error && ()
              <details className="text-left bg-black/20 rounded-lg p-4 mb-6">)
                <summary className="cursor-pointer text-cyan-400 font-medium mb-2">)
                  Error Details (Development Only)
                </summary>
                <pre className="text-xs text-red-400 overflow-auto"></pre>
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}

            <div className="space-y-3"></div>
              <button
                onClick={() =>window.location.reload()}</button></<<<butto>className</butto></butto>="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
              ></<<<button>Refresh</button></<<button>Page</button><button
                onClick={() =>this.setState({ hasError: false, error: undefined, errorInfo: undefined })}</button></<<<butto>className</butto></butto>="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
              ></<<<button>Try</button></<<button>Again</button><a
                href="/"
                className="block w-full bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
              >Go Home</a>
              <button;
                onClick={() => window.location.reload()}
                className="w-full bg-cyan-600 hover: bg-cyan-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Refresh Page;
              </button>,
,
              <button;
                onClick={() => this.setState({ hasError: false, error: undefined, errorInfo: undefined })}
                className="w-full bg-purple-600 hover: bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Try Again;
'use client'
import React, { Component, ErrorInfo, ReactNode } from 'react'
import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
  onError?: (error: Error, errorInfo: ErrorInfo) => void
  enableRetry?: boolean
  enableReporting?: boolean
}

interface State {
  hasError: boolean
  error: Error | null
  errorInfo: ErrorInfo | null
  retryCount: number
}

class GlobalErrorBoundary extends Component<Props, State> {
  private maxRetries = 3

  constructor(props: Props) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: 0
    }
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
      retryCount: 0
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    })

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('GlobalErrorBoundary caught an error:', error, errorInfo)
    }

    // Call onError callback if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }

    // Report error to monitoring service
    if (this.props.enableReporting) {
      this.reportError(error, errorInfo)
    }
  }

  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    // In a real app, you would send this to your error reporting service
    console.log('Reporting error:', {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString()
    })
  }

  private handleRetry = () => {
    if (this.state.retryCount < this.maxRetries) {
      this.setState(prevState => ({
        hasError: false,
        error: null,
        errorInfo: null,
        retryCount: prevState.retryCount + 1
      }))
    }
  }

  private handleReload = () => {
    window.location.reload()
  }

  private handleGoHome = () => {
    window.location.href = '/'
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xll p-8 border border-white/20">
              <h1 className="text-4xl font-bold text-white mb-4">
                Oops! Something went wrong
              </h1>
              <p className="text-gray-300 mb-6">
                We're sorry, but something unexpected happened. Please try refreshing the page.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={this.handleRetry}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Try Again ({this.maxRetries - this.state.retryCount} attempts left)
                </button>
              <a;
                href="/"
                className="block w-full bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
              ></a>
                Go Home;
              </a>
            </div>
          </div>,
        </div>);
                
                <Link
                  to="/"
                  className="border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Go Home
                </Link>
              </div>
            </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export { GlobalErrorBoundary };
            </div>

            {this.props.enableReporting && (
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-xs text-gray-400 mb-2">
                  This error has been automatically reported to our team.
                </p>
                <button className="text-xs text-blue-400 hover:text-blue-300 flex items-center justify-center">
                  <Bug className="w-3 h-3 mr-1" />
                  Report Bug
                </button>
              </div>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default GlobalErrorBoundary
import React from 'react';

const GlobalErrorBoundary: React.FC<GlobalErrorBoundaryProps> = () => {
  return (
    <div className="globalerrorboundary">
      <h2>GlobalErrorBoundary</h2>
      <p>Component content coming soon.</p>
    </div>
  );
};

export default GlobalErrorBoundary;
