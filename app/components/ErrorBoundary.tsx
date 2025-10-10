'use client';
import React, { Component, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Phone } from 'lucide-react';

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: any;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null;
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
      errorInfo: null;
    };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    this.setState({
      error,
      errorInfo;
    });

    // Log error to console in development;
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    // You can also log the error to an error reporting service here;
    // Example: logErrorToService(error, errorInfo);
  }

  handleRefresh = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4"></div>
          <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 text-center"></div>
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6"></div>
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
            
            <h1 className="text-3xl font-bold text-white mb-4"></h1>
              Oops! Something went wrong;
            </h1>
            
            <p className="text-gray-300 mb-6"></p>
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mb-6 p-4 bg-red-900/20 rounded-lg text-left"></div>
                <h3 className="text-red-400 font-semibold mb-2">Error Details:</h3>
                <pre className="text-xs text-red-300 whitespace-pre-wrap"></pre>
                  {this.state.error.toString()}
                </pre>
                {this.state.errorInfo && (
                  <pre className="text-xs text-red-300 whitespace-pre-wrap mt-2"></pre>
                    {this.state.errorInfo.componentStack}
                  </pre>
                )}
              </div>
            )}
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center"></div>
              <button;
                onClick={this.handleRefresh}
                className="flex items-center justify-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors"
              ></button>
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again;
              </button>
              
              <button;
                onClick={this.handleGoHome}
                className="flex items-center justify-center px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors"
              ></button>
                <Home className="w-4 h-4 mr-2" />
                Go Home;
              </button>
            </div>
            
            <div className="mt-6 pt-6 border-t border-white/20"></div>
              <p className="text-sm text-gray-400 mb-3"></p>
                Still having trouble? Contact our support team:
              </p>
              <a;
                href="mailto:support@ziontechgroup.com"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
              ></a>
                <Phone className="w-4 h-4 mr-2" />
                support@ziontechgroup.com;
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;