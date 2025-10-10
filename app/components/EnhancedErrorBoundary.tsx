'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class EnhancedErrorBoundary extends React.Component<
  React.PropsWithChildren<{}>,
  ErrorBoundaryState
> {
  constructor(props: React.PropsWithChildren<{}>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
          <Helmet>
            <title>Error | Zion Tech Group</title>
            <meta name="description" content="An error occurred. Please try again or contact support." />
          </Helmet>
          <div className="max-w-2xl mx-auto text-center px-4">
            <div className="mb-8">
              <div className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Oops! Something went wrong
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                We're sorry, but something unexpected happened. Our team has been notified and we're working to fix it.
              </p>
            </div>
            
            <div className="space-y-4 mb-8">
              <button
                onClick={() => window.location.reload()}
                className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <ArrowRight className="mr-2 h-5 w-5" />
                Try Again
              </button>
              
              <button
                onClick={() => window.history.back()}
                className="w-full border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Go Back
              </button>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Need Help?</h3>
              <p className="text-gray-300 mb-4">
                If the problem persists, please contact our support team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Support
                </a>
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="flex items-center justify-center border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Email Support
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default EnhancedErrorBoundary;