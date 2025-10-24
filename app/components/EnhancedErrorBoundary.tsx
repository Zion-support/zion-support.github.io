<<<<<<< HEAD
<<<<<<< HEAD
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Brain, BarChart, Target, TrendingUp } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check } from 'lucide-react'
const EnhancedErrorBoundaryPage: React.FC = () => {
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
  "Increase efficiency by up to 50%",
      "Reduce costs by 30% with automation",
      "Improve decision-making with AI insights",
      "Scale operations without proportional staff increases",
    'Gain competitive advantage with advanced technology'
  ]
const EnhancedErrorBoundary: React.FC<EnhancedErrorBoundaryProps> = ({ className = '' }) => {
  return (
    <>
      <Helmet>
        <title>EnhancedErrorBoundary | Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Professional EnhancedErrorBoundary services by Zion Tech Group. Advanced AI and IT solutions for your business.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;AI, artificial intelligence, EnhancedErrorBoundary, AI solutions, intelligent automation&quot; />
      </Helmet>
      <Navigation />
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900&quot;></div>
        {/* Hero Section */}
        <section className=&quot;relative py-20 px-4 overflow-hidden&quot;></section>
          <div className=&quot;absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20&quot;></div>
          <div className=&quot;relative max-w-7xl mx-auto text-center&quot;></div>
            <h1 className=&quot;text-5xl md: text-7xl font-bold text-white mb-6 leading-tight&quot;>
              EnhancedErrorBoundary
            </h1>
            <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed&quot;>
              Professional EnhancedErrorBoundary services by Zion Tech Group. Advanced AI and IT solutions for your business.
            </p>
          </div>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;>{benefits.map((benefit, index) => (</div>
              <div key={index} className=&quot;flex items-start space-x-3&quot;></div>
                <CheckCircle className=&quot;h-6 w-6 text-purple-400 mt-1 flex-shrink-0&quot; />
                <p className=&quot;text-gray-300 text-lg&quot;>{benefit}</p>
              </div>
            ))}
=======
import React, { Component, ErrorInfo, ReactNode } from 'react';
=======
'use client';
>>>>>>> 1c3bcb5bf864

<<<<<<< HEAD
import React, { Component, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Phone } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (_error: Error, _errorInfo: React.ErrorInfo) => void;
=======
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  resetOnPropsChange?: boolean;
  resetKeys?: Array<string | number>;
>>>>>>> cursor/fix-errors-and-merge-to-main-e66e
}

interface State {
  hasError: boolean;
  error: Error | null;
<<<<<<< HEAD
}

class EnhancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

=======
  errorInfo: ErrorInfo | null;
  errorId: string;
}

class EnhancedErrorBoundary extends Component<Props, State> {
  private resetTimeoutId: NodeJS.Timeout | null = null;

  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: ''
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('EnhancedErrorBoundary caught an error:', error, errorInfo);
    }

    // Send error to monitoring service in production
    if (process.env.NODE_ENV === 'production') {
      this.reportError(error, errorInfo);
    }
  }

  componentDidUpdate(prevProps: Props) {
    const { resetKeys, resetOnPropsChange } = this.props;
    const { hasError } = this.state;

    if (hasError && prevProps.resetKeys !== resetKeys) {
      if (resetOnPropsChange && resetKeys) {
        this.resetErrorBoundary();
      }
    }
  }

  componentWillUnmount() {
    if (this.resetTimeoutId) {
      clearTimeout(this.resetTimeoutId);
    }
  }

  private reportError = (error: Error, errorInfo: ErrorInfo): void => {
    // Example: Send to error reporting service
    // errorReportingService.captureException(error, {
    //   extra: errorInfo,
    //   tags: {
    //     component: 'ErrorBoundary',
    //     errorId: this.state.errorId
    //   }
    // });
    
    // For now, we'll just log it
    console.error('Error reported:', {
      error: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      errorId: this.state.errorId
    });
  };

  private resetErrorBoundary = (): void => {
    if (this.resetTimeoutId) {
      clearTimeout(this.resetTimeoutId);
    }

    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: ''
    });
  };

  private handleRetry = (): void => {
    this.resetErrorBoundary();
  };

  private handleReload = (): void => {
    window.location.reload();
  };

>>>>>>> cursor/fix-errors-and-merge-to-main-e66e
  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
<<<<<<< HEAD
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            
            <div className="text-center">
              <h1 className="text-xl font-semibold text-gray-900 mb-2">
                Something went wrong
              </h1>
              <p className="text-gray-600 mb-6">
                We're sorry, but something unexpected happened. Please try again.
              </p>
              
              <div className="space-y-3">
                <button
                  onClick={() => window.location.reload()}
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Try Again
                </button>
                
                <button
                  onClick={() => window.location.href = '/'}
                  className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Go Home
                </button>
                
                <button
                  onClick={() => window.location.href = '/contact'}
                  className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Support
                </button>
              </div>
=======
        <div 
          className="min-h-screen flex items-center justify-center bg-gray-50" 
          role="alert" 
          aria-live="polite"
          aria-labelledby="error-title"
        >
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full" aria-hidden="true">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
<<<<<<< HEAD
            <div className="mt-4 text-center">
              <h1 id="error-title" className="text-lg font-medium text-gray-900">
                Something went wrong
              </h1>
              <p className="mt-2 text-sm text-gray-500">
                {this.state.error?.message || 'An unexpected error occurred'}
              </p>
              
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="mt-4 text-left">
                  <summary className="cursor-pointer text-sm text-gray-600 hover:text-gray-800">
                    Error Details
                  </summary>
                  <pre className="mt-2 text-xs text-gray-500 bg-gray-100 p-2 rounded overflow-auto max-h-32">
                    {this.state.error.stack}
                  </pre>
                </details>
              )}
              
              <div className="mt-6 space-y-3">
                <button
                  onClick={this.handleRetry}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                  aria-label="Try to continue without reloading"
                >
                  Try Again
                </button>
                <button
                  onClick={this.handleReload}
                  className="w-full px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
                  aria-label="Reload the page to try again"
                >
                  Reload Page
                </button>
                <button
                  onClick={() => window.history.back()}
                  className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
                  aria-label="Go back to the previous page"
                >
                  Go Back
                </button>
              </div>
              
              <div className="mt-4 text-xs text-gray-400">
                Error ID: {this.state.errorId}
              </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-e66e
            </div>
>>>>>>> main
=======
=======
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Brain, BarChart, Target, TrendingUp } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check } from 'lucide-react'
const EnhancedErrorBoundaryPage: React.FC = () => {
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
  "Increase efficiency by up to 50%",
      "Reduce costs by 30% with automation",
      "Improve decision-making with AI insights",
      "Scale operations without proportional staff increases",
    'Gain competitive advantage with advanced technology'
  ]
const EnhancedErrorBoundary: React.FC<EnhancedErrorBoundaryProps> = ({ className = '' }) => {
  return (
    <>
      <Helmet>
        <title>EnhancedErrorBoundary | Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Professional EnhancedErrorBoundary services by Zion Tech Group. Advanced AI and IT solutions for your business.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;AI, artificial intelligence, EnhancedErrorBoundary, AI solutions, intelligent automation&quot; />
      </Helmet>
      <Navigation />
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900&quot;></div>
        {/* Hero Section */}
        <section className=&quot;relative py-20 px-4 overflow-hidden&quot;></section>
          <div className=&quot;absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20&quot;></div>
          <div className=&quot;relative max-w-7xl mx-auto text-center&quot;></div>
            <h1 className=&quot;text-5xl md: text-7xl font-bold text-white mb-6 leading-tight&quot;>
              EnhancedErrorBoundary
            </h1>
            <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed&quot;>
              Professional EnhancedErrorBoundary services by Zion Tech Group. Advanced AI and IT solutions for your business.
            </p>
          </div>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;>{benefits.map((benefit, index) => (</div>
              <div key={index} className=&quot;flex items-start space-x-3&quot;></div>
                <CheckCircle className=&quot;h-6 w-6 text-purple-400 mt-1 flex-shrink-0&quot; />
                <p className=&quot;text-gray-300 text-lg&quot;>{benefit}</p>
              </div>
            ))}
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
>>>>>>> 1c3bcb5bf864
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className=&quot;py-20 px-4 sm: px-6 lg:px-8&quot;></section>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;></div>
          <div className=&quot;bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md: p-12&quot;></div>
            <h2 className=&quot;text-3xl md: text-4xl font-bold text-white mb-4&quot;>Ready to Get Started?</h2>
            <p className=&quot;text-xl text-purple-100 mb-8&quot;>Contact our experts to discuss your enhancederrorboundary needs and get a customized solution.</p>p>
            <div className=&quot;flex flex-col sm: flex-row gap-4 justify-center&quot;></div>
              <button className=&quot;bg-gradient-to-r from-emerald-500 to-blue-600 hover: from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105&quot;></button>
                <Phone className=&quot;mr-2 h-5 w-5&quot; />
                Call Now
              <button className=&quot;bg-gradient-to-r from-emerald-500 to-blue-600 hover: from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105&quot;></button>
                <Mail className=&quot;mr-2 h-5 w-5&quot; />
                Email Us
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
            <div className=&quot;grid md: grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
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
        {/* Benefits Section */}
        <section className=&quot;py-20 px-4 bg-white/5&quot;></section>
          <div className=&quot;max-w-7xl mx-auto&quot;></div>
            <div className=&quot;text-center mb-16&quot;></div>
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Why Choose Our Solution</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Experience the benefits of cutting-edge AI technology
              </p>
            </div>
            <div className=&quot;grid md: grid-cols-2 lg:grid-cols-3 gap-8&quot;></div>
              {benefits.map((benefit, index) => (
                <div key={index} className=&quot;flex items-start space-x-4&quot;></div>
                  <CheckCircle className=&quot;h-6 w-6 text-emerald-400 mt-1 flex-shrink-0&quot; />
                  <p className=&quot;text-gray-300 text-lg&quot;>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className=&quot;py-20 px-4&quot;></section>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;></div>
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Ready to Transform Your Business?</h2>
            <p className=&quot;text-xl text-gray-300 mb-8&quot;>
              Join thousands of businesses already using our AI solutions
            </p>
            <div className=&quot;flex flex-col sm: flex-row gap-4 justify-center&quot;></div>
              <button className=&quot;bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;>
                Start Free Trial
              </button>
              <button className=&quot;border border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;>
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
</>
  )
}
<<<<<<< HEAD
<<<<<<< HEAD
export default EnhancedErrorBoundaryPage
  error?: Error
  errorInfo?: ErrorInfo}
class EnhancedErrorBoundaryextendsComponent<Props, State>{constructor(props: Props) {
    super(props)
    this.state= { hasError: false}
  }
  static getDerivedStateFromError(error: Error): State {return { hasError: true, error}
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {this.setState({errorerrorInfo})
    // Log error to monitoring service
    // // // eslint-disable-next-line no-console
    console.error('Error caught by boundary:', error, errorInfo)
  }
  handleReload= () => {windo w.location.reload()
 }
  render() {
  if (this.state.hasError) {
      if (this.props.fallback) {
        return thi s.props.fallback
}
      return (
        <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4&quot;></div>
          <div className=&quot;max-w-md w-full bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center&quot;></div>
            <div className=&quot;w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mb-6 mx-auto&quot;></div>
              <AlertTriangle className=&quot;w-8 h-8 text-red-400&quot; />
            </div>
            <h1 className=&quot;text-2xl font-bold text-white mb-4&quot;>Oops! Something went wrong</h1>
            <p className=&quot;text-gray-300 mb-6&quot;>We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.</p>p>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className=&quot;mb-6 text-left&quot;>
                <summary className=&quot;text-sm text-gray-400 cursor-pointer mb-2&quot;>
                  Error Details (Development)
                </summary>
                <pre className=&quot;text-xs text-red-300 bg-black/20 p-3 rounded overflow-auto&quot;></p>
                  {this.state.error.toString()}
=======

export default EnhancedErrorBoundary;
>>>>>>> main
=======

export default EnhancedErrorBoundary;
=======
export default EnhancedErrorBoundaryPage
  error?: Error
  errorInfo?: ErrorInfo}
class EnhancedErrorBoundaryextendsComponent<Props, State>{constructor(props: Props) {
    super(props)
    this.state= { hasError: false}
  }
  static getDerivedStateFromError(error: Error): State {return { hasError: true, error}
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {this.setState({errorerrorInfo})
    // Log error to monitoring service
    // // // eslint-disable-next-line no-console
    console.error('Error caught by boundary:', error, errorInfo)
  }
  handleReload= () => {windo w.location.reload()
 }
  render() {
  if (this.state.hasError) {
      if (this.props.fallback) {
        return thi s.props.fallback
}
      return (
        <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4&quot;></div>
          <div className=&quot;max-w-md w-full bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center&quot;></div>
            <div className=&quot;w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mb-6 mx-auto&quot;></div>
              <AlertTriangle className=&quot;w-8 h-8 text-red-400&quot; />
            </div>
            <h1 className=&quot;text-2xl font-bold text-white mb-4&quot;>Oops! Something went wrong</h1>
            <p className=&quot;text-gray-300 mb-6&quot;>We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.</p>p>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className=&quot;mb-6 text-left&quot;>
                <summary className=&quot;text-sm text-gray-400 cursor-pointer mb-2&quot;>
                  Error Details (Development)
                </summary>
                <pre className=&quot;text-xs text-red-300 bg-black/20 p-3 rounded overflow-auto&quot;></p>
                  {this.state.error.toString()}
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
>>>>>>> 1c3bcb5bf864
