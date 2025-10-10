'use client';
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';

interface Props {children: ReactNode;}
  fallback?: ReactNode;
}

interface State {hasError: boolean;}
  error?: Error;
  errorInfo?: ErrorInfo;
}

class EnhancedErrorBoundary extends Component<Props, State> {constructor(props: Props) {}
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {}
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {this.setState({}
      error,
      errorInfo
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {console.error('Error caught by boundary:', error, errorInfo);}
    }

    // Log error to external service in production
    if (process.env.NODE_ENV === 'production') {// Here you would typically send the error to a logging service}
      console.error('Error caught by boundary:', error, errorInfo);
    }
  }

  handleRetry = () => {}
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  handleGoHome = () => {window.location.href = '/';}
  };

  handleReportError = () => {}
    const { error, errorInfo } = this.state;
    const errorReport = {message: error?.message,}
      stack: error?.stack,
      componentStack: errorInfo?.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    };

    // Send error report to your error tracking service
    console.log('Error report:', errorReport);
    
    // You can implement actual error reporting here
    // e.g., send to Sentry, LogRocket, etc.
  };

  render() {if (this.state.hasError) {}
      if (this.props.fallback) {return this.props.fallback;}
      }

      return ()
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-slate-800 rounded-lg shadow-xl p-8 text-center">
            <div className="mb-6">
              <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-white mb-2">
                Oops! Something went wrong
              </h1>
              <p className="text-gray-300 mb-6">
                We're sorry, but something unexpected happened. Our team has been notified and is working to fix it.
              </p>
            </div>

            <div className="space-y-4">
              <button
                onClick={this.handleRetry}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Try Again
              </button>

              <button
                onClick={this.handleGoHome}
                className="w-full bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </button>

              <button
                onClick={this.handleReportError}
                className="w-full border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Report Issue
              </button>
            </div>

            {process.env.NODE_ENV === 'development' && this.state.error && (}
              <details className="mt-6 text-left">
                <summary className="text-sm text-gray-400 cursor-pointer hover:text-gray-300">
                  Error Details (Development)
                </summary>
                <div className="mt-2 p-4 bg-slate-900 rounded text-xs text-red-400 overflow-auto">
                  <pre>{this.state.error.stack}</pre>
                  {this.state.errorInfo && (}
                    <pre className="mt-2 text-yellow-400">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  )}
                </div>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default EnhancedErrorBoundary