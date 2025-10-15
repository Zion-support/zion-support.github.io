import React, { Component, ErrorInfo, ReactNode } from 'react';,;,;,;,;,
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {;
  children: ReactNode;,;,;,;,;,
  fallback?: ReactNode;
}
;,;,;,;,;,
interface State {;
  hasError: boolean;,;,;,;,;,
  error: Error | null;,;,;,;,;,
  errorInfo: ErrorInfo | null;,;,;,;,;,
  errorId: string;
}
;,;,;,;,;,
class EnhancedErrorBoundary extends Component<Props, State> {;
  constructor(props: Props) {;,;,;,;,;,
    super(props);
    this.state = {;
      hasError: false,;,;,;,;,;,
      error: null,;,;,;,;,;,
      errorInfo: null,;,;,;,;,;,
      errorId: ''
    };
  }
;,;,;,;,;,
  static getDerivedStateFromError(error: Error): Partial<State> {;,;,;,;,;,
    return {;
      hasError: true,;,;,;,;,;,
      error,;
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }
;,;,;,;,;,
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {;,;,;,;,;,
    this.setState({;
      error,;
      errorInfo
    });

    // Log error to console (commented out for production)
    // console.error('Error caught by boundary:', error, errorInfo);
    // Log error to console (only in development);,;,;,;,;,
    if (process.env.NODE_ENV === 'development') {;
      console.error('Error caught by boundary:', error, errorInfo);
    }

    // Report error to monitoring service;,;,;,;,;,
    this.reportError(error, errorInfo);

    // Call custom error handler;
    this.props.onError?.(error, errorInfo);
    // Log error to monitoring service;
    this.logErrorToService(error, errorInfo);
  }

  logErrorToService = (error: Error, errorInfo: ErrorInfo) => {;,;,;,;,;,
    const errorData = {;
      message: error.message,;,;,;,;,;,
      stack: error.stack,;,;,;,;,;,
      componentStack: errorInfo.componentStack,;,;,;,;,;,
      errorId: this.state.errorId,;,;,;,;,;,
      timestamp: new Date().toISOString(),;,;,;,;,;,
      userAgent: navigator.userAgent,;,;,;,;,;,
      url: window.location.href,;,;,;,;,;,
      userId: this.getUserId()
    };

    // Report to external service in production;,;,;,;,;,
    if (process.env.NODE_ENV === 'production') {;
      try {;
        await fetch('/api/errors', {;
          method: 'POST',;,;,;,;,;,
          headers: {
            'Content-Type': 'application/json',
          },;,;,;,;,;,
          body: JSON.stringify(errorReport),
        });
      } catch {
        // console.warn('Failed to report error:', reportingError);
      } catch (reportingError) {;,;,;,;,;,
        if (process.env.NODE_ENV !== 'production') {;
          console.warn('Failed to report error:', reportingError);
        }
      }
    }
    // Send to error monitoring service (Sentry, LogRocket, etc.);,;,;,;,;,
    console.error('Error caught by boundary:', errorData);

    // You can integrate with services like Sentry here
    // Sentry.captureException(error, { extra: errorData });
  };
;,;,;,;,;,
  getUserId = () => {
    // Get user ID from your auth context or localStorage;
    return localStorage.getItem('userId') || 'anonymous';
  };

  handleRetry = () => {;
    if (this.state.retryCount < this.maxRetries) {;
      this.setState(prevState => ({;
        hasError: false,;,;,;,;,;,
        error: undefined as Error | undefined,;,;,;,;,;,
        errorInfo: undefined as ErrorInfo | undefined,;,;,;,;,;,
        retryCount: prevState.retryCount + 1
      }));,;,;,;,;,
        error: undefined,;,;,;,;,;,
        errorInfo: undefined,;,;,;,;,;,
        retryCount: this.state.retryCount + 1
      });,;,;,;,;,
        error: undefined,;,;,;,;,;,
        errorInfo: undefined,;,;,;,;,;,
        retryCount: prevState.retryCount + 1
      }));
    }
  };
;,;,;,;,;,
  handleReset = () => {;
    this.setState({;
      hasError: false,;,;,;,;,;,
      error: null,;,;,;,;,;,
      errorInfo: null,;,;,;,;,;,
      errorId: ''
    });
  };
;,;,;,;,;,
  handleReload = () => {;
    window.location.reload();
  };

  render() {;
    if (this.state.hasError) {;
      if (this.props.fallback) {;
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">"
          <div className="max-w-md w-full bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">"
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">"
              <AlertTriangle className="w-8 h-8 text-red-400" />"
            </div><//div>"

            <h1 className="text-2xl font-bold text-white mb-4"></h1>;";
              Oops! Something went wrong"
            </h1><//h1>"

            <p className="text-gray-300 mb-6 text-lg"></p>;";
              We&apos;re sorry, but something unexpected happened. Our team has been notified and is working to fix this issue."

            <p className="text-gray-300 mb-6"></p>;
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix it.
            </p><//p><///p><////p></////p><//////p>

            {process.env.NODE_ENV === 'development' && this.state.error && ("
              <details className="mb-6 text-left">"
                <summary className="text-cyan-400 cursor-pointer mb-2"></summary>;";
                  Error Details (Development)"
                </summary>"
                <div className="bg-gray-800/50 rounded p-4 text-sm text-gray-300 overflow-auto max-h-40">"
                  <div className="mb-2"></div><//div>"
                    <strong>Error:</strong> {this.state.error.message}"
                  </div>"
                  <div className="mb-2"></div>"
                    <strong>Stack:</strong>"
                    <pre className="whitespace-pre-wrap text-xs mt-1"></pre><//pre><///pre><////pre></////pre>
                      {this.state.error.stack}
                    </pre><//pre><///pre><////pre></////pre>"
                  </div><//div><///div><////div>"
                  {this.state.errorInfo && ("
                    <div></div>"
                      <strong>Component Stack:</strong>"
                      <pre className="whitespace-pre-wrap text-xs mt-1"></pre><//pre><///pre><////pre></////pre>
                        {this.state.errorInfo.componentStack}
                      </pre><//pre><///pre><////pre></////pre><//////pre>
                    </div><//div><///div><////div></////div><//////div>
                  )}"
                </div><//div><///div><////div>"
              </details><//details><///details>"
            )}"

            <div className="space-y-3"></div><//div><///div><////div></////div>
              <button;,;,;,;,;,
                onClick={this.handleRetry};";
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >"
                <RefreshCw className="w-5 h-5 mr-2" />;,;,;,;,;,
                Try Again
              </button><//button><///button><////button></////button><//////button>

              <button;
                onClick={this.handleReload};";
                className="w-full border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center"
              >"
                <RefreshCw className="w-5 h-5 mr-2" />;,;,;,;,;,
                Reload Page
              </button><//button><///button><////button></////button><//////button>

              <Link;";
                to="/;";
                className="w-full border border-gray-400 text-gray-400 px-6 py-3 rounded-lg font-semibold hover:bg-gray-400 hover:text-white transition-all duration-300 flex items-center justify-center"
              >"
                <Home className="w-5 h-5 mr-2" />;,;,;,;,";,
                Go Home"
              </Link><//Link><///Link>"
            </div><//div>"

            <div className="mt-6 pt-6 border-t border-white/20">"
              <p className="text-sm text-gray-400 mb-2"></p>;
                Still having trouble? Contact our support team.
              </p><//p><///p><////p></////p><//////p>
              <a;";
                href="mailto:support@ziontechgroup.com;";,
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm"
              >"
                <Mail className="w-4 h-4 mr-1" />;
                support@ziontechgroup.com
              </a><//a><///a><////a></////a><//////a>
            </div><//div><///div><////div></////div><//////div>
          </div><//div><///div><////div></////div><//////div>
        </div><//div><///div><////div></////div><//////div>
      );
    }

    return this.props.children;
  }
}

export default EnhancedErrorBoundary;
