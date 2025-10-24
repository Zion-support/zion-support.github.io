'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Brain, BarChart, Target, TrendingUp } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check } from 'lucide-react'


import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  enableErrorReporting?: boolean;
  enableRetry?: boolean;
  showErrorDetails?: boolean;
  className?: string;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
  errorId?: string;
  retryCount: number;
}

class EnhancedErrorBoundary extends Component<Props, State> {
  private maxRetries = 3;

  constructor(props: Props) {
    super(props);
    this.state = { 
      hasError: false, 
      retryCount: 0 
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
    this.setState({ errorInfo });
    
    // Call custom error handler
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Enhanced error reporting
    if (this.props.enableErrorReporting) {
      this.reportError(error, errorInfo);
    }


const EnhancedErrorBoundary: React.FC<EnhancedErrorBoundaryProps> = ({ className = '' }) => {
  return (
    <>
      <Helmet>
        <title>EnhancedErrorBoundary | Zion Tech Group</title>
        <meta name="description" content="Professional EnhancedErrorBoundary services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="AI, artificial intelligence, EnhancedErrorBoundary, AI solutions, intelligent automation" />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900"></div>
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden"></section>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center"></div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              EnhancedErrorBoundary
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional EnhancedErrorBoundary services by Zion Tech Group. Advanced AI and IT solutions for your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{benefits.map((benefit, index) => (</div>
              <div key={index} className="flex items-start space-x-3"></div>
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>

              {/* Error Details (if enabled) */}
              {this.props.showErrorDetails && error && (
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Error Details
                  </h3>
                  <div className="text-xs text-gray-600 font-mono">
                    <div className="mb-1">
                      <strong>Message:</strong> {error.message}
                    </div>
                    {error.stack && (
                      <div className="mb-1">
                        <strong>Stack:</strong>
                        <pre className="whitespace-pre-wrap mt-1 text-xs">
                          {error.stack.split('\n').slice(0, 5).join('\n')}
                        </pre>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="space-y-3">
                {canRetry ? (
                  <button
                    onClick={this.handleRetry}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Try Again ({this.maxRetries - retryCount} attempts left)
                  </button>
                ) : (
                  <button
                    onClick={this.handleReload}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Reload Page
                  </button>
                )}

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={this.handleGoHome}
                    className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                  >
                    <Home className="w-4 h-4 mr-2" />
                    Go Home
                  </button>

                  {this.props.showErrorDetails && (
                    <button
                      id="copy-error-details"
                      onClick={this.copyErrorDetails}
                      className="border-2 border-gray-300 text-gray-600 hover:bg-gray-50 font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                    >
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      Copy Details
                    </button>
                  )}
                </div>
              </div>

              {/* Retry Count */}
              {retryCount > 0 && (
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-500">
                    Retry attempts: {retryCount}/{this.maxRetries}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-4xl mx-auto text-center"></div>
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-purple-100 mb-8">Contact our experts to discuss your enhancederrorboundary needs and get a customized solution.</p>p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button>
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              <button className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button>
                <Mail className="mr-2 h-5 w-5" />
                Email Us
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI-driven features designed to transform your business operations
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"></div>
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
        <section className="py-20 px-4 bg-white/5"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of cutting-edge AI technology
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4"></div>
                  <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
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

export default EnhancedErrorBoundaryPage;
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
    // // console.error('Error caught by boundary:', error, errorInfo)
  }
  handleReload= () => {windo w.location.reload()
 }
  render() {if (this.state.hasError) {
      if (this.props.fallback) {
        return thi s.props.fallback
     }
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4"></div>
          <div className="max-w-md w-full bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center"></div>
            <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mb-6 mx-auto"></div>
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-4">Oops! Something went wrong</h1>
            <p className="text-gray-300 mb-6">We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.</p>p>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="text-sm text-gray-400 cursor-pointer mb-2">
                  Error Details (Development)
                </summary>
                <pre className="text-xs text-red-300 bg-black/20 p-3 rounded overflow-auto"></p>
                  {this.state.error.toString()}
