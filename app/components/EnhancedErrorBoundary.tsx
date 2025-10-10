'use client';
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class EnhancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });

    // Log error to analytics or monitoring service
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <ErrorFallback error={this.state.error} />;
    }

    return this.props.children;
  }
}

const ErrorFallback: React.FC<{ error?: Error }> = ({ error }) => {
  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
      <Helmet>
        <title>Error - Zion Tech Group</title>
        <meta name="description" content="An error occurred. Please try again or contact our support team." />
      </Helmet>
      
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
          <div className="mb-8">
            <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-red-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're sorry, but something unexpected happened. Our team has been notified and we're working to fix it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Brain className="w-6 h-6 mr-2 text-purple-400" />
                What happened?
              </h3>
              <p className="text-gray-300 text-sm">
                An unexpected error occurred while loading this page. This could be due to a temporary issue with our servers or a problem with your internet connection.
              </p>
            </div>
            
            <div className="bg-white/5 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Zap className="w-6 h-6 mr-2 text-yellow-400" />
                What can you do?
              </h3>
              <p className="text-gray-300 text-sm">
                Try refreshing the page, checking your internet connection, or contact our support team if the problem persists.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => window.location.reload()}
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Try Again
            </button>
            <button
              onClick={() => window.history.back()}
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Go Back
            </button>
          </div>

          <div className="bg-white/5 rounded-2xl p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Need Help?</h3>
            <p className="text-purple-100 mb-6">
              Our expert team is here to help you get back on track. Contact us for immediate assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Support
              </a>
            </div>
            <div className="mt-6 text-center">
              <p className="text-purple-100 text-sm">
                📍 364 E Main St STE 1008, Middletown, DE 19709
              </p>
            </div>
          </div>

          {error && process.env.NODE_ENV === 'development' && (
            <details className="mt-8 bg-red-900/20 border border-red-500/30 rounded-lg p-4">
              <summary className="text-red-400 font-semibold cursor-pointer">
                Error Details (Development Only)
              </summary>
              <pre className="mt-4 text-red-300 text-xs overflow-auto">
                {error.toString()}
              </pre>
            </details>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnhancedErrorBoundary;