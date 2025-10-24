import React from 'react';
'use client';
import React from "react";


      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our EnhancedErrorBoundary?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our enhancederrorboundary solutions deliver unmatched performance, security, and scalability.
            </p>
          </div></div></div>

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
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';

  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {}
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class EnhancedErrorBoundary extends Component<Props, State> {}
  constructor(props: Props) {}
    super(props);
    this.state = {}
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error: Error): State {}
    return {}
      hasError: true,
      error,
      errorInfo: null;
    };
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

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {}
    this.setState({)}
'use client';
import { Component, ErrorInfo, ReactNode} from 'react';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  maxRetries?: number;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
  retryCount: number;
}

class EnhancedErrorBoundary extends Component<Props, State> {
  private maxRetries: number;

  constructor(props: Props) {
    super(props);
    this.state = { 
      hasError: false,
      retryCount: 0
    };
    this.maxRetries = props.maxRetries || 3;
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      retryCount: 0
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });

    this.setState({)
      error)
      errorInfo;
    // Log error to console in development;
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }

    // Log error to external service in production;
    if (process.env.NODE_ENV === 'production') {
      // Here you would typically send the error to a service like Sentry;
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {}
      console.error('Error caught by boundary:', error, errorInfo);
    }

    // Log error to external service in production
    if (process.env.NODE_ENV === 'production') {}
      // Here you would typically send the error to a service like Sentry
      console.error('Error caught by boundary:', error);
    }
  }

  handleRetry = () => {}
    this.setState({)}
      hasError: false,
      error: null)
    errorInfo: null
    this.setState({)
      hasError: false),
      error: null),
      errorInfo: null;
    });
  };

  handleReload = () => {}
    window.location.reload();
  };

  handleGoHome = () => {}
    window.location.href = '/';
  };

  render() {}
    if (this.state.hasError) {}
      if (this.props.fallback) {}
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by EnhancedErrorBoundary:', error, errorInfo);
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log error to monitoring service in production
    if (process.env.NODE_ENV === 'production') {
      // Here you would typically send the error to a monitoring service
      // like Sentry, LogRocket, Bugsnag, etc.
    }
  }

  handleRetry = () => {
    if (this.state.retryCount < this.maxRetries) {
      this.setState(prevState => ({
        hasError: false,
        error: undefined,
        errorInfo: undefined,
        retryCount: prevState.retryCount + 1
      }));
    }
  };

  handleReset = () => {
    this.setState({
      hasError: false,
      error: undefined,
      errorInfo: undefined,
      retryCount: 0
    });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

import {Component, ErrorInfo, ReactNode} from 'react';
import {Home} from 'lucide-react';
import {Link} from 'react-router-dom';

interface Props {children: ReactNode;
  fallback?: ReactNode;}

interface State {hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;

class EnhancedErrorBoundary extends Component<Props, State   /> {
  constructor(props: Props) {
    super(props);
    this.const state = { hasError: false};

  static getDerivedStateFromError(error: Error): State {return { hasError: true, error};
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {this.setState({
      error,
      errorInfo;});
    // Log error to monitoring service
    console.error('Error caught by boundary: ', error, errorInfo);

    this.setState({hasError: false, error: undefined, errorInfo: undefined});
  };
  render() {if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;

      return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <AlertTriangle className="w-5h-5ml-2"   /></AlertTriangle>
            </div>
            
            <h1 className="text-2xl font-bold text-white mb-4"></h1>
              Oops! Something went wrong;
            </h1>
            
            <p className="text-gray-300 mb-6"></p>
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix the issue.
            </p>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                <h3 className="text-red-400font-semiboldmb-2"  >Error Details:</h3>
                <pre className="w-5h-5ml-2"   />{this.state.error.toString()}
                </pre>
                {this.state.errorInfo && (

                  <pre className="text-xs text-gray-400mt-2overflow-auto">{this.state.errorInfo.componentStack}

                )}
              </div>
  )}

                Try Again

                Go Home

                Still having issues? Contact our support team:

                  kleber@ziontechgroup.com

                <span className="hiddensm:inlinetext-gray-500">•</span>
                  <span>+1 302 464 0950</span>
  );

    return this.props.children;

export default EnhancedErrorBoundary;

import React from 'react';

const EnhancedErrorBoundary: React.FC<EnhancedErrorBoundaryProps> = () => {
  return (
    <div className="enhancederrorboundary">
      <h2>EnhancedErrorBoundary</h2>
      <p>Component content coming soon.</p>
    </div>
  );
};

export default EnhancedErrorBoundary;
      return (

              <button
                onClick={this.handleRetry}
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300transformhover:scale-105" />
                <RefreshCw className="h-4w-4mr-2" />
                Try Again
              </button>
              
              <Link to="/" className="w-full inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-700 hover:text-whitetransition-allduration-300" >
           
          <Home className="h-4w-4mr-2" /  />
        </Link>
                Go Home
              </Link>
            </div>

            <div className="mt-8 pt-6border-tborder-gray-700">
              <p className="text-smtext-gray-400mb-4">
              Still having issues? Contact our support team:
              </p>
              <div className="flex flex-col sm:flex-rowgap-2justify-center">
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center text-sm text-purple-400hover:text-purple-300transition-colors" />
                  <Mail className="h-4w-4mr-1" />
                  kleber@ziontechgroup.com
                </a>
                <span className="hiddensm:inlinetext-gray-500">•</span>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center text-sm text-purple-400hover:text-purple-300transition-colors" />
                  <span>+1 302 464 0950</span>
                </a>
              </div>
    </div>
  );
    }

    return this.props.children;
  }
}

export default EnhancedErrorBoundary;
