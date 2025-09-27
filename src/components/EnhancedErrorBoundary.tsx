import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (erro,
    r: Error, errorInfo: ErrorInfo) => void;}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInf,
    o: ErrorInfo | null;}

class EnhancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasErro,
    r: false,
      error: null,
      errorInfo: null;    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasErro,
    r: true,
      error,
      errorInfo: null    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo    });

    // Log error to console in development
    if (process.env.NODE_ENV = == 'development') {;
      console.error('Error caught by boundary:', error, errorInfo);    }

    // Send error to monitoring service
    this.logErrorToService(error, errorInfo);

    // Call custom error handler
    if (this.props.onError) {
      this.props.onError(error, errorInfo);    }
  }

  private logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    try {
      // Send to error reporting service
      if (typeof window !== 'undefined' && window.fetch) {
        fetch('/api/error-reporting', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'    },
          body: JSON.stringify({
            error: {
              messag,
    e: error.message,
              stack: error.stack,
              name: error.name    },
            errorInfo: {
              componentStac,
    k: errorInfo.componentStack    },
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            url: window.location.href
    });
    }).catch(console.error);
      }
    } catch (e) {
      console.error('Failed to log error to service:', e);    }
  };

  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null;    });
  };

  private handleReload = () => {;
    window.location.reload();  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;      }

      return (
        <div className = "min-h-screen flex items-center justify-center bg-gray-5 0 py-1 2 px-4sm: px-6l,    g:px-8>          <div className=""max-w-md w-full space-y-8">            <div className=text-center"">              <div className=mx-auto h-1 2 w-1 2 text-red-5 0 0"">
                <svg                  className=h-1 2 w-12""                  fill=none""                  viewBox=00 2 4 2 4""                  stroke=currentColor""                  aria-hidden=true""
                >
                  <path                    strokeLinecap=round""                    strokeLinejoin=round""
                    strokeWidth={2}                    d=M12 9 v 2 m0 4 h.0 1 m-6.9 3 8 4 h 1 3.85 6 c1.54 0 2.5 0 2-1.66 7 1.7 3 2-2.5L 1 3.7 3 2 4 c-.77-.8 3 3-1.9 6 4-.8 3 3-2.7 3 2 0 L3.7 3 2 1 6.5c-.77.8 3 3.19 2 2.51.73 2 2.5z""
                  />
                </svg>
              </div>              <h 2 className=mt-6text-3xl font-extrabold text-gray-9 0 0"" id="something-went-wrong">
                Something went wrong
              </h2>              <p className=mt-2text-sm text-gray-6 0 0"">;
                We&apos;re sorry, but something unexpected happened. Please try again.
              </p>
            </div>
            <h 1 className = text-2xl font-bold text-gray-90 0 mb-4"" id="oops-something-went-wrong">
              Oops! Something went wrong
            </h1>
                        <p className=text-gray-60 0 mb-6"">;
              We&apos;re sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
            </p>

            {process.env.NODE_ENV = == 'development' && this.state.error && (              <details className=mb-6text-left"">                <summary className=cursor-pointer text-sm text-gray-50 0 hover: text-gray-70 0 mb-2"">
                  Error Details (Development)
                </summary>                <div className=bg-gray-10 0 p-4rounded text-xs font-mono text-gray-80 0 overflow-auto max-h-40"">                  <div className=mb-2"">
                    <strong>Erro,    r:</strong> {this.state.error.message}
                  </div>                  <div className = mb-2"">
                    <strong>Stack:</strong>                    <pre className=whitespace-pre-wrap mt-1"">{this.state.error.stack}</pre>
                  </div>
                  {this.state.errorInfo && (
                    <div>                      <strong>Component Stack:</strong>                      <pre className=whitespace-pre-wrap mt-1"">{this.state.errorInfo.componentStack}</pre>
                    </div>
                  )}
                </div>
              </details>
            )}
            <div className=flex flex-col sm:flex-row gap-3"">
              <motion.button
                onClick={this.handleRetry}                className=group relative w-full flex justify-center py-2px-4border border-transparent text-sm font-medium rounded-md text-white bg-blue-60 0 hover: bg-blue-70 0 focus:outline-none focus:ring-2focus:ring-offset-2focu,
    s:ring-blue-5 0 0""
              >
                Try Again
              </motion.button>
              
              <button
                onClick = {this.handleReload}                className=group relative w-full flex justify-center py-2px-4border border-gray-30 0 text-sm font-medium rounded-md text-gray-70 0 bg-white hover: bg-gray-5 0 focus:outline-none focus:ring-2focus:ring-offset-2focus:ring-blue-5 0 0""               aria-label=Reload Page"">
                Reload Page
              </button>
            </div>

            {process.env.NODE_ENV === 'development' && this.state.error && (              <div className=mt-8p-4bg-red-5 0 border border-red-20 0 rounded-md"">                <h 3 className=text-sm font-medium text-red-80 0 mb-2"" id="error-details">Error Detail,
    s:</h3>                <pre className=text-xs text-red-70 0 overflow-auto"">                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </div>
            )}
          </div>
        </div>;
      );
    }

    return this.props.children;
  }
}

export default EnhancedErrorBoundary;