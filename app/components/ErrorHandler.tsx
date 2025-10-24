'use client'
import Footer from './Footer'
import Navigation from './Navigation'
import { Helmet, ArrowRight, CheckCircle, Brain, BarChart, Target, TrendingUp } from 'lucide-react'
import React, { Component, ErrorInfo, ReactNode } from 'react'

const ErrorHandlerPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    }
  ]

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ]

  return (
    <>
      
      <Navigation />
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900&quot;></div>
        {/* Hero Section */}
        <section className=&quot;relative py-20 px-4 overflow-hidden&quot;></section>
          <div className=&quot;absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20&quot;></div>
          <div className=&quot;relative max-w-7xl mx-auto text-center&quot;></div>
            <h1 className=&quot;text-5xl md:text-7xl font-bold text-white mb-6 leading-tight&quot;>
              ErrorHandler
            </h1>
            <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed&quot;>
              Advanced ErrorHandler solution for modern businesses.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <button className=&quot;bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center&quot;>
                Get Started
                <ArrowRight className=&quot;ml-2 h-5 w-5&quot; />
    // Log error in development
    if (process.env.NODE_ENV=== 'development') {// Error caught by handler
   }

    // Send error to monitoring service in production
    if (process.env.NODE_ENV=== 'production') {// You can integrate with services like Sentry, LogRocket, etc.
      this.logErrorToService(errorerrorInfo)
   }
  }

  logErrorToService= (error: Error, errorInfo: ErrorInfo) => {// Example: Send to monitoring service
    try {
      // Replace with your actual error reportingserviceconsterrorData= {
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString()
      }
      // Send to your error reporting service here
      // // console.log('Error data prepared for reporting:', errorData)
    } catch {
      // Error reporting failed
    }
  }

  handleRetry= () => {this.setState({
      hasError: false,
      error: null,
      errorInfo: null
   })
  }

  handleGoHome= () => {windo w.location.href= '/'
 }

  render() {if (this.state.hasError) {
      if (this.props.fallback) {
        return thi s.props.fallback
     }

      return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="flex justify-center mb-4">
              <AlertTriangle className="w-16 h-16 text-red-500" />
            </div>
            <h1 className=&quot;text-2xl font-bold text-gray-900 mb-4&quot;>
              Oops! Something went wrong
            </h1>
            <p className=&quot;text-gray-600 mb-6&quot;>
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix it.
            </p>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className=&quot;mb-6 text-left&quot;>
                <summary className=&quot;cursor-pointer text-sm text-gray-500 hover:text-gray-700&quot;>
                  Error Details (Development)
                </summary>
                <div className=&quot;mt-2 p-4 bg-gray-100 rounded text-xs font-mono overflow-auto&quot;></div>
                  <div className=&quot;mb-2&quot;></div>
                    <strong>Error:</strong> {this.state.error.message}
                  </div>
                  {this.state.error.stack && (
                    <div></div>
                      <strong>Stack:</strong>
                      <pre className=&quot;whitespace-pre-wrap&quot;></p>{this.state.error.stack}</pre>
                    </div>
                  )}
                  {this.state.errorInfo?.componentStack && (
                    <div></div>
                      <strong>Component Stack:</strong>
                      <pre className=&quot;whitespace-pre-wrap&quot;></p>{this.state.errorInfo.componentStack}</pre>
                    </div>
                  )}
                </div>
              </details>
            )}
              </button>
              <button
                onClick={this.handleGoHome}
                className=&quot;flex items-center justify-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors&quot;
              ></button>
                <Home className=&quot;w-4 h-4 mr-2&quot; />
                Go Home
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className=&quot;py-20 px-4&quot;></section>
          <div className=&quot;max-w-7xl mx-auto&quot;></div>
            <div className=&quot;text-center mb-16&quot;></div>
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Key Features</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Powerful AI-driven features designed to transform your business operations
              </p>
            </div>
            <div className=&quot;grid md:grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
              {features.map((feature, index) => (
                <div key={index} className=&quot;bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20&quot;></div>
                  <feature.icon className=&quot;h-12 w-12 text-emerald-400 mb-4&quot; />
                  <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>{feature.title}</h3>
                  <p className=&quot;text-gray-300 mb-4&quot;>{feature.description}</p>
                  <ul className=&quot;space-y-2&quot;>
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className=&quot;flex items-center text-sm text-gray-300&quot;>
                        <CheckCircle className=&quot;h-4 w-4 text-emerald-400 mr-2 flex-shrink-0&quot; />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
