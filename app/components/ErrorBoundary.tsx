import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) 
    super(props);
<<<<<<< HEAD
    this.state =  hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return  hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error for monitoring in production;
    if (process.env.NODE_ENV === 'production') 
      // In production, you would send this to an error reporting service;
      // Example: errorReportingService.captureException(error,  extra: errorInfo })
=======
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ error, errorInfo });
    
    // Log error to monitoring service
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: false
      });
>>>>>>> cursor/analyze-improve-and-deploy-application-89d8
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) 
      if (this.props.fallback) 
        return this.props.fallback;
      }

<<<<<<< HEAD
<<<<<<< HEAD
      return ()
                  Error Details (Development)
                </summary>
                <pre className="text-xs text-red-400 bg-slate-900/50 p-3 rounded overflow-auto" /></pre>
                  {this.state.error.toString()},
=======
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
          </div></div><div className="max-w-md w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center">
            </div></div><div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              </div></div><AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
            
            <h1 className="text-2xl font-bold text-white mb-4">
              Oops! Something went wrong;
            </h1></h1></h1>
            
            <p className="text-gray-300 mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page or go back to the home page.
            </p></p></p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 text-left">)
                <summary className="text-sm text-gray-400 cursor-pointer mb-2">)
                  Error Details (Development)
                </summary>
                <pre className="text-xs text-red-400 bg-slate-900/50 p-3 rounded overflow-auto">
                  this.state.error.toString()},
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
    {this.state.errorInfo?.componentStack}
                </p></p></pre>
              </details>
            )}

<<<<<<< HEAD
            <div className="flex flex-col sm:flex-row gap-4 justify-center" /></div>
              <button onClick={this.handleReload}
                className="flex items-center justify-center space-x-2 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200" /></button>
                <RefreshCw className="w-4 h-4" / /></RefreshCw>
                <span>Reload Page</span>
=======
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
            
            <h1 className="text-2xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>
            
            <p className="text-gray-300 mb-6">
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="text-sm text-gray-400 cursor-pointer mb-2">
                  Error Details (Development)
                </summary>
                <pre className="text-xs text-red-400 bg-red-900/20 p-3 rounded overflow-auto">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={this.handleRetry}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
              >
                <RefreshCw className="w-4 h-4" />
                Try Again
>>>>>>> cursor/analyze-improve-and-deploy-application-89d8
              </button>
              
              <a
                href="/"
                className="flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-white rounded-lg font-medium hover:bg-white/10 transition-all duration-300"
              >
                <Home className="w-4 h-4" />
                Go Home
              </a>
              
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Website Error Report"
                className="flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-white rounded-lg font-medium hover:bg-white/10 transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                Report Issue
              </a>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-sm text-gray-400">
                If this problem persists, please contact us at{' '}
                <a 
                  href="tel:+13024640950" 
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  (302) 464-0950
                </a>
              </p>
<<<<<<< HEAD
              <a href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors" /></a>
                <Phone className="w-4 h-4 mr-2" / /></Phone>
                kleber@ziontechgroup.com
=======
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              </div></div><button;
                onClick={this.handleReload}
                className="flex items-center justify-center space-x-2 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                </button></button><RefreshCw className="w-4 h-4" />
                <span>Reload Page</span></span></span>
              </button>
              
              <button;
                onClick={this.handleGoHome}
                className="flex items-center justify-center space-x-2 border border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                </button></button><Home className="w-4 h-4" />
                <span>Go Home</span></span></span>
              </button>
            </div>

            <div className="mt-6 pt-6 border-t border-white/20">
              </div></div><p className="text-sm text-gray-400 mb-3">
                Still having trouble? Contact our support team:
              </p></p></p>
              <a;
                href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                kleber@ziontechgroup.com;
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
              </a>
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-89d8
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;