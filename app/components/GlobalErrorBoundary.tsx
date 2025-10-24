<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';

<<<<<<< HEAD
const GlobalErrorBoundary: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="globalerrorboundary">
      <h2>GlobalErrorBoundary</h2>
      <p>GlobalErrorBoundary component.</p>
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>GlobalErrorBoundary | Zion Tech Group</title>
        <meta name="description" content="Professional GlobalErrorBoundary services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="GlobalErrorBoundary, AI solutions, IT services, Zion Tech Group, globalerrorboundary" />
      </Helmet>
=======


                Go Home
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f


<<<<<<< HEAD
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our GlobalErrorBoundary?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our globalerrorboundary solutions deliver unmatched performance, security, and scalability.
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
            </p>
          </div></div></div>

<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div></div></div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our globalerrorboundary solutions for your business.
            </p>
          </div></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div></div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your globalerrorboundary needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
=======
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
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h2>
            
            <p className="text-gray-300 mb-6">
              We're sorry, but something unexpected happened. Please try again or contact support if the problem persists.
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="text-sm text-gray-400 cursor-pointer mb-2">
                  Error Details (Development)
                </summary>
                <div className="bg-black/20 rounded-lg p-4 text-xs text-gray-300 font-mono">
                  <div className="mb-2">
                    <strong>Error:</strong> {this.state.error.message}
                  </div>
                  {this.state.error.stack && (
                    <div>
                      <strong>Stack:</strong>
                      <pre className="mt-1 whitespace-pre-wrap">{this.state.error.stack}</pre>
                    </div>
                  )}
                </div>
              </details>
            )}

            <div className="space-y-3">
              {this.props.enableRetry && this.state.retryCount < this.maxRetries && (
                <button
                  onClick={this.handleRetry}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Try Again ({this.maxRetries - this.state.retryCount} attempts left)
                </button>
              )}
              
              <button
                onClick={this.handleReload}
                className="w-full bg-white/20 text-white py-3 px-6 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 flex items-center justify-center"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Reload Page
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-05cb
              </button>
              
              <button
                onClick={this.handleGoHome}
                className="w-full border border-white/30 text-white py-3 px-6 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                <Home className="w-4 h-4 mr-2" />
                Go to Homepage
              </button>
<<<<<<< HEAD
            </div></div></div>
          </div>
        </div>
      </section>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
    </div>
  );
};

<<<<<<< HEAD
export default GlobalErrorBoundary;
=======
              <a;
                href="/"
                className="block w-full bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
              ></a>
                Go Home;
              </a>
            </div>
          </div>,
        </div>);
    }

    return this.props.children;
  }
}

export { GlobalErrorBoundary };
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-05cb
