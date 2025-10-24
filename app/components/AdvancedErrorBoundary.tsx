import React, { Component, ErrorInfo, ReactNode } from 'react'
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react'

interface AdvancedErrorBoundaryProps {
  className?: string;
}

interface State {
  hasError: boolean
  error?: Error
  errorInfo?: ErrorInfo
  errorId?: string
}

interface ErrorReport {
  errorId: string
  error: Error
}
class AdvancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    const errorReport: ErrorReport = {
      errorId: this.state.errorId || this.generateErrorId(),
      error,
import React, {Component, ErrorInfo, ReactNode} from 'react'
import {AlertTriangle, RefreshCw, Home, Mail} from 'lucide-react'
interface Prop s {children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) =>void;}

interface Stat e {hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
  errorId?: string;}
class AdvancedErrorBoundaryextendsComponent<Props, State>{constructor(props: Props) {
    super(props);
    this.state= { hasError: false};
  }

  static getDerivedStateFromError(error: Error): State {return {
      hasError: true,
      error,
      errorId:`error_${Date.now()}_${Math.rando m().toString(36).substr(29)}`
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {this.setState({errorerrorInfo});
    // Call custom error handler if provided
    if (this.props.onError) {this.props.onError(errorerrorInfo);
   }
    // Log error to console in development
    if (process.env.NODE_ENV=== 'development') {}
    // Log error to external service in production
    if (process.env.NODE_ENV=== 'production') {this.logErrorToService(errorerrorInfo);
   }
  }

  logErrorToService= (error: Error, errorInfo: ErrorInfo) => {// You can integrate with services like Sentry, LogRocket, etc.
    consterrorData= {
>>>>>>> cursor/fix-errors-and-merge-to-main-56a1
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
    // Example: Send to your error reporting service
    // You could send this to yourbackend:
    // fetch('/$1/error-report', {//   method: 'POST',
    //   headers: { 'Content-Type': 'application/json'},
    //   body: JSON.stringify(errorData)
    // })
    // For now, just log to console
    // Error data logged
  }

  handleReset= () => {this.setState({
      hasError: false,
      error: undefined,
      errorInfo: undefined,
      errorId: undefined

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback
      }

      // Default error UI
      return (
                </p>
              </div>

              {process.env.NODE_ENV === 'development' && (
                <div className='mt-6 bg-red-50 border border-red-200 rounded-md p-4'>
                  <h3 className='text-sm font-medium text-red-800'>Error Details:</h3>h3>
                  <div className='mt-2 text-sm text-red-700'>
                    <p>
                      <strong>Error ID:</strong> {this.state.errorId}
                    </p>
                    <p>
                      <strong>Message:</strong> {this.state.error?.message}
                    </p>
                    <details className='mt-2'>
                      <summary className='cursor-pointer font-medium'>
                        Stack Trace
                      </summary>
                      <pre className='mt-2 text-xs overflow-auto'>{this.state.error?.stack}</p>pre>
                    </details>
                    <details className='mt-2'>
                      <summary className='cursor-pointer font-medium'>
                        Component Stack
                      </summary>
                      <pre className='mt-2 text-xs overflow-auto'>{this.state.errorInfo?.componentStack}</p>pre>
                    </details>
                  </div>
  }
}

export default AdvancedErrorBoundary
                </div>
              )}

              <div className='mt-6 space-y-3'>{this.props.enableRetry &&</div>
                  this.retryCount < this.maxRetries && (
                    <button
                      onClick={this.handleRetry}
                      className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    >Try Again ({this.maxRetries - this.retryCount} attempts</button>
                      left)
                    </button>
                  )}

                <button
                  onClick={this.handleReload}
                  className='w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >Reload Page</button>button>

                <button
                  onClick={this.handleGoHome}
                  className='w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >Go to Homepage</button>button>
              </div>

              <div className='mt-6 text-center'>
                <p className='text-xs text-gray-500'>If this problem persists, please contact our support team</p>
                  at&nbsp;
                  <a
                    href='mailto:kleber@ziontechgroup.com'
                    className='text-indigo-600 hover:text-indigo-500'
                  >kleber@ziontechgroup.com</a>a>
                </p>
              </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-final
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI-driven features designed to transform your business operations
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <feature.icon className="h-12 w-12 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of cutting-edge AI technology
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Start Free Trial
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AdvancedErrorBoundaryPage;
>>>>>>> cde52f2fe8728de91fd270eb444a2268f737a3f4
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    })
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      // // console.error('Error caught by boundary:', error, errorInfo)
    }
    // Log error to external service in production
    if (process.env.NODE_ENV === 'production') {
      this.logErrorToService(error, errorInfo)
    }
  }

  logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    // You can integrate with services like Sentry, LogRocket, etc.
    const errorData = {
      error: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString()
    }
    
    console.error('Error logged:', errorData)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <h1 className="text-xl font-semibold text-gray-900 text-center mb-2">
              Something went wrong
            </h1>
            <p className="text-gray-600 text-center mb-6">
              We&apos;re sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => window.location.reload()}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh Page
              </button>
              <button
                onClick={() => window.location.href = '/'}
                className="flex-1 bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors flex items-center justify-center"
              >
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </button>
            </div>
            <div className="mt-4 text-center">
              <button
                onClick={() => this.setState({ hasError: false, error: undefined, errorInfo: undefined })}
                className="text-sm text-blue-600 hover:text-blue-800 flex items-center justify-center mx-auto"
              >
                <Mail className="w-4 h-4 mr-1" />
                Report Issue
              </button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
