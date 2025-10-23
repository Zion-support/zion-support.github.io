'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react'
    }
  ]
  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>EnhancedErrorBoundary | Zion Tech Group</title>
        <meta name="description" content="Professional EnhancedErrorBoundary services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        </Head>
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2>Why Choose Our EnhancedErrorBoundary?
            </h2>
            <p>Our enhancederrorboundary solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature> </feature>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2>Key Benefits
  </h2>
            <p>Experience the power of our enhancederrorboundary solutions for your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2>Ready to Get Started?
            </h2>
            <p>Contact our experts to discuss your enhancederrorboundary needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone>Call Now
  </Phone>h1>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail>Email Us
  </Mail>h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default EnhancedErrorBoundaryPage
  </button>
  </button>
  </h2>
import React, { Component, ErrorInfo, ReactNode } from 'react'
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react'
interface Props {
  children: ReactNode
  fallback?: ReactNode
}
interface State {
  hasError: boolean
  error?: Error
  errorInfo?: ErrorInfo
}
class EnhancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    })
    // Log error to monitoring service
    console.error('Error caught by boundary:', error, errorInfo)
  }
  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined })
  }
  handleReload = () => {
    window.location.reload()
  }
  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <AlertTriangle> </AlertTriangle>div>
            <h1>Oops! Something went wrong
            </h1>
            <p>We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
            </p>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 text-left">
                <summary>Error Details (Development)
                </summary>
                <pre>{this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
            <div className="space-y-3">
              <button
                onClick={this.handleRetry}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                <RefreshCw>Try Again
              </RefreshCw>button>
              <button
                onClick={this.handleReload}
                className="w-full border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                <Home>Reload Page
              </Home>button>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-700">
              <p>Still having issues? Contact our support team:
              </p>
              <a
                href="mailto:support@ziontechgroup.com"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm"
              >
                <Mail>support@ziontechgroup.com
              </Mail>a>
            </div>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
export default EnhancedErrorBoundary