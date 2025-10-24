<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Home } from 'lucide-react';
import { AlertTriangle } from 'lucide-react';
interface EnhancederrorboundaryProps {
  className?: string;
  children?: React.ReactNode;
}
export default function Enhancederrorboundary({ className = '', children, ...props }: EnhancederrorboundaryProps) {
  return (
    <div className={`enhancederrorboundary-component ${className}`} {...props}>
      {children}
    </div>
  );
}
=======
import React from 'react';
=======
'use client';
import React from "react";
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0738

<<<<<<< HEAD
const EnhancedErrorBoundary: React.FC = () => {
  return (
    <div className="enhancederrorboundary">
      <h2>EnhancedErrorBoundary</h2>
      <p>EnhancedErrorBoundary component.</p>
=======

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
=======
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

      return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4"></div>
          <div className="max-w-md w-full bg-slate-800/50 backdrop-blur-sm border border-red-400/20 rounded-xl p-8 text-center"></div>
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6"></div>
              <AlertTriangle className="w-8 h-8 text-red-400" />
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
            </div>
            
            <h1 className="text-2xl font-bold text-white mb-4"></h1>
              Oops! Something went wrong;
            </h1>
            
            <p className="text-gray-300 mb-6"></p>
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix the issue.
            </p>
<<<<<<< HEAD

            {process.env.NODE_ENV === 'development' && this.state.error && (}
              <details className="mb-6 text-left"></details>
                <summary className="text-red-400 cursor-pointer font-medium mb-2"></summary>
                  Error Details (Development)
                </summary>
                <div className="bg-slate-900/50 rounded-lg p-4 text-sm"></div>
                  <pre className="text-red-300 whitespace-pre-wrap">{this.state.error.toString()}</pre>
                  </pre>
                  {this.state.errorInfo && (}
                    <pre className="text-gray-400 whitespace-pre-wrap mt-2"></pre>
                      {this.state.errorInfo.componentStack}
                    </pre>
                  )}
                </div>
              </details>
            )}

            <div className="space-y-3"></div>
              <button
                onClick={this.handleRetry}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover: from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              ></button>
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again;
              </button>,
              ,
              <button;
                onClick={this.handleReload}
                className="w-full bg-slate-700 hover: bg-slate-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
              ></button>
                <RefreshCw className="w-4 h-4 mr-2" />
                Reload Page;
              </button>,
              ,
              <button;
                onClick={this.handleGoHome}
                className="w-full bg-slate-600 hover: bg-slate-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
              ></button>
                <Home className="w-4 h-4 mr-2" />
                Go Home;
              </button>
            </div>
,
            <div className="mt-6 pt-4 border-t border-gray-700">,
              <p className="text-sm text-gray-400 mb-2">,
                If this problem persists, please contact our support team: </p>
              <div className="flex flex-col sm:flex-row gap-2 text-sm"></div>
                <a;
                  href="mailto:support@ziontechgroup.com"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
              <div className="flex flex-col sm:flex-row gap-2 text-sm"></div>
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >support@ziontechgroup.com<span className="hidden sm:inline text-gray-500">•</span><a
                  href="tel:+13024640950"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >+1 (302) 464-0950</a>
                >
                  support@ziontechgroup.com;
                </a>
                <span className="hidden sm:inline text-gray-500">•</span>
                <a;
                  href="tel:+13024640950"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                ></a>
                  +1 (302) 464-0950;
                </a>
              </div>
            </div>
          </div>,
        </div>,
    this.setState({ error, errorInfo });
    
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log error to monitoring service in production
    if (process.env.NODE_ENV === 'production') {
      // Send to error tracking service
      // eslint-disable-next-line no-console
      console.error('Error caught by boundary:', error, errorInfo);
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4"></div>
          <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-lg p-8 text-center border border-white/20"></div>
            <div className="mb-6"></div>
              <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-white mb-2">Oops! Something went wrong</h1>
              <p className="text-gray-300 mb-6"></p>
                We're sorry, but something unexpected happened. Our team has been notified and is working to fix it.
              </p>
            </div>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mb-6 p-4 bg-red-900/20 rounded-lg text-left"></div>
                <h3 className="text-red-400 font-semibold mb-2">Error Details:</h3>
                <p className="text-red-300 text-sm mb-2">{this.state.error.message}</p>
                {this.state.errorInfo && (
                  <details className="text-red-300 text-xs"></details>
                    <summary className="cursor-pointer">Stack Trace</summary>
                    <pre className="mt-2 whitespace-pre-wrap">{this.state.errorInfo.componentStack}</pre>
                  </details>
                )}
              </div>
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4"></div>
          <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-lg p-8 text-center border border-white/20"></div>
            <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-6"></p>
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix it.
            </p>
            
            {this.state.retryCount < this.maxRetries && (
              <button
                onClick={this.handleRetry}
                className="bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors mr-4"
              ></button>
                Try Again ({this.maxRetries - this.state.retryCount} attempts left)
              </button>
            )}
            
            <button
              onClick={this.handleReset}
              className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
            ></button>
              Reset
            </button>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left"></details>
                <summary className="text-gray-400 cursor-pointer">Error Details</summary>
                <pre className="mt-2 text-xs text-red-400 bg-black/20 p-2 rounded overflow-auto"></pre>
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}

            <div className="space-y-3"></div>
              <button
                onClick={this.handleRetry}
                className="w-full bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors flex items-center justify-center gap-2"
              ></button>
                <RefreshCw className="w-4 h-4" />
                Try Again
              </button>
              
              <button
                onClick={this.handleReload}
                className="w-full bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
              ></button>
                <RefreshCw className="w-4 h-4" />
                Reload Page
              </button>
              
              <a
                href="/"
                className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
              ></a>
                <Home className="w-4 h-4" />
                Go Home
              </a>
              
              <a
                href="mailto:support@ziontechgroup.com?subject=Error Report"
                className="w-full border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-colors flex items-center justify-center gap-2"
              ></a>
                <Mail className="w-4 h-4" />
                Report Issue
              </a>
            </div>

            <div className="mt-6 text-sm text-gray-400"></div>
              <p>If this problem persists, please contact our support team:</p>
              <p className="mt-1"></p>
                <a href="mailto:support@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300"></a>
                  support@ziontechgroup.com
                </a>
              </p>
              <p className="mt-1"></p>
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300"></a>
                  (302) 464-0950
                </a>
              </p>
            </div>
          </div>
        </div>
      );
    }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our enhancederrorboundary solutions for your business.
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
              Contact our experts to discuss your enhancederrorboundary needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div></div></div>
          </div>
        </div>
      </section>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
    </div>
  );
};

export default EnhancedErrorBoundary;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
=======
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

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
