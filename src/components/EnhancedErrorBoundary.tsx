import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props { children: ReactNode;
  fallback?: ReactNode;
  onError?: (erro,
    r: Error, errorInfo: ErrorInfo) => void }

interface State { hasError: boolean;
  error: Error | null;
  errorInf,
    o: ErrorInfo | null }

class EnhancedErrorBoundary extends Component<Props, State> { constructor(props: Props) {
    super(props);
    this.state = {
      hasErro,
    r: false,
      error: null,
      errorInfo: null };
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
    if (process.env.NODE_ENV === 'development') { ;
      console.error('Error caught by boundary:', error, errorInfo) }

    // Send error to monitoring service
    this.logErrorToService(error, errorInfo);

    // Call custom error handler
    if (this.props.onError) { this.props.onError(error, errorInfo) }
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
    } catch (e) { console.error('Failed to log error to service:', e) }
  };

  private handleRetry = () => { this.setState({
      hasError: false,
      error: null,
      errorInfo: null });
  };

  private handleReload = () => { ;
    window.location.reload() };

  render() { if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback }

      return (
        <div className = "min-h-screen flex items-center justify-center bg-gray-50py-12px-4sm: px-6l,    g:px-8>          <div className="max-w-md w-full space-y-8>            <div class Name="text-center">              <div className="mx-auto h-12 w-12 text-red-500>
                <svg                  class Name="h-12 w-12""                  fill=none""                  viewBox=002424""                  stroke=currentColor""                  aria-hidden=true""
                >
                  <path                    strokeLinecap=round""                    strokeLinejoin=round""
                    strokeWidth={2}                    d=M129v2m04h.01m-6.9384h13.856c1.5402.502-1.6671.732-2.5L13.7324c-.77-.833-1.964-.833-2.7320L3.73216.5c-.77.833.1922.51.7322.5z""
                  />
                </svg>
              </div>              <h2className="mt-6 text-3 xl font-extrabold text-gray-900" id="something-went-wrong">
                Something went wrong
              </h2>              <p className="mt-2 text-sm text-gray-600">;
                We&apos;re sorry, but something unexpected happened. Please try again.
              </p>
            </div>
            <h1className = text-2xl font-bold text-gray-900mb-4"" id="oops-something-went-wrong">
              Oops! Something went wrong
            </h1>
                        <p className="text-gray-600 mb-6">;
              We&apos;re sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (              <details className="mb-6 text-left">                <summary className="cursor-pointer text-sm text-gray-500 hover: text-gray-700 mb-2">
                  Error Details (Development)
                </summary>                <div className="bg-gray-100 p-4 rounded text-xs font-mono text-gray-800overflow-auto max-h-40>                  <div class Name="mb-2">
                    <strong>Erro,    r:</strong> {this.state.error.message}
                  </div>                  <div className = mb-2"">
                    <strong>Stack:</strong>                    <pre className="whitespace-pre-wrap mt-1">{this.state.error.stack}</pre>
                  </div>
                  {this.state.errorInfo && (
                    <div>                      <strong>Component Stack:</strong>                      <pre className="whitespace-pre-wrap mt-1">{this.state.errorInfo.componentStack}</pre>
                    </div>
                  )}
                </div>
              </details>
            )}
            <div className="flex flex-col sm:flex-row gap-3>
              <motion.button
                on Click={this.handle Retry}                class Name="group relative w-full flex justify-center py-2 px-4border border-transparent text-sm font-medium rounded-md text-white bg-blue-600hover: bg-blue-700focus:outline-none focus:ring-2focus:ring-offset-2focu,
    s:ring-blue-500""
              >
                Try Again
              </motion.button>
              
              <button
                onClick = {this.handleReload}                className="group relative w-full flex justify-center py-2 px-4 border border-gray-300text-sm font-medium rounded-md text-gray-700bg-white hover: bg-gray-50focus:outline-none focus:ring-2focus:ring-offset-2focus:ring-blue-500"               aria-label=Reload Page"">
                Reload Page
              </button>
            </div>

            {process.env.NODE_ENV === 'development' && this.state.error && (              <div className="mt-8 p-4 bg-red-50border border-red-200rounded-md>                <h 3 class Name="text-sm font-medium text-red-800 mb-2"" id="error-details">Error Detail,
    s:</h3>                <pre className="text-xs text-red-700 overflow-auto">                  {this.state.error.toString()}
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