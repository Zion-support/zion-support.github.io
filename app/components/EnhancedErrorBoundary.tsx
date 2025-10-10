'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;,
    error: Error | null;
  errorInfo: ErrorInfo | null;
}

class EnhancedErrorBoundary extends Component<Props, State>{</Props></<<<Prop>constructor</Prop></Prop>(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });

    // Log error to console in development)
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }

    // Log error to external service in production
    if (process.env.NODE_ENV === 'production') {
      // Here you would typically send the error to a service like Sentry
      console.error('Error caught by boundary:', error);
    }
  }

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,)
    errorInfo: null
    });
  };

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
</<<<Props>return</Props></Props> (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4"></div>
          <div className="max-w-md w-full bg-slate-800/50 backdrop-blur-sm border border-red-400/20 rounded-xl p-8 text-center"></div>
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6"></div>
              <AlertTriangle className="w-8 h-8 text-red-400" /></AlertTriangl>
            <h1 className="text-2 xl font-bold text-white mb-4"></h1></<<<h1>Oops</h1></h1>! Something went wrong<p className="text-gray-300 mb-6">We're sorry, but something unexpected happened. Our team has been notified and is working to fix the issue.</p>
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 text-left"></detail>
                <summary className="text-red-400 cursor-pointer font-medium mb-2">Error Details (Development)</summar>
                </summary>
                <div className="bg-slate-900/50 rounded-lg p-4 text-sm"></div>
                  <pre className="text-red-300 whitespace-pre-wrap"></pre>{this.state.error.toString()}</pre>
                  </pre>
                  {this.state.errorInfo && (
                    <pre className="text-gray-400 whitespace-pre-wrap mt-2"></pre>{this.state.errorInfo.componentStack}</pre>
                    </pre>
                  )}
                </div>
              </details>
            )}

            <div className="space-y-3"></div>
              <button
                onClick={this.handleRetry}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              ></butto>
                <RefreshCw className="w-4 h-4 mr-2" >Try Again</RefreshC>
              </RefreshCw>
              
              <button
                onClick={this.handleReload}
                className="w-full bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
              ></butto>
                <RefreshCw className="w-4 h-4 mr-2" >Reload Page</RefreshC>
              </RefreshCw>
              
              <button
                onClick={this.handleGoHome}
                className="w-full bg-slate-600 hover:bg-slate-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
              ></butto>
                <Home className="w-4 h-4 mr-2" >Go Home</Hom>
              </Home>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-700"></div>
              <p className="text-sm text-gray-400 mb-2">If this problem persists, please contact our support team:</p>
              </p>
              <div className="flex flex-col sm:flex-row gap-2 text-sm"></div>
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >support@ziontechgroup.com</a><span className="hidden sm:inline text-gray-500"></spa>•<a
                  href="tel:+13024640950"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >+1 (302) 464-0950</a>
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
