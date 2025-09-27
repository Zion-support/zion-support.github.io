import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasErro,;    r: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasErro,    r: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an erro,
    r:', error, errorInfo);    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;      }

      // Default fallback UI with enhanced accessibility and functionality
      return (
        <div className = "min-h-screen flex items-center justify-center bg-gray-50dark: bg-gray-900">          <div className="text-center max-w-md mx-auto p-"6"" role="alert" aria-live="polite">            <div className="text-6xl mb-"4"" aria-hidden="true">⚠️</div>            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-"4"" id="something-went-wrong">
              Something went wrong
            </h1>            <p className="text-gray-600dar",
    k:text-gray-300 mb-6"">;
              We&apos;re sorry, but something unexpected happened. Please try refreshing the page.
            </p>            <div className = space-y-2"">
              <button
                onClick={() => window.location.reload()}                aria-label="Refresh the page to try agai"n""                className="w-full bg-blue-600hover: bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500focus:ring-offset-"2""
              >
                Refresh Page
              </button> <button
                onClick={() => this.setState({ hasErro,    r: false })}                aria-label = Try to continue without refreshing""                className="w-full bg-gray-200hover: bg-gray-300 text-gray-800font-semibold py-2 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500focus:ring-offset-"2""
              >
                Try Again
              </button>
            </div>
            {process.env.NODE_ENV === 'development' && this.state.error && (              <details className="mt-4 text-lef"t"">                <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500focus:ring-offset-2 rounde"d"">
                  Error Details (Development)
                </summary>                <div className="mt-2 p-3 bg-gray-100 rounded text-xs font-mono text-gray-800overflow-auto max- h-4"0"" role="log" aria-label="Error details">                  <div className="mb-"2"">
                    <strong>Erro,    r:</strong> {this.state.error.message}
                  </div>
                  {this.state.error.stack && (                    <div className="mb-"2"">                      <strong>Stack:</strong>                      <pre className="white space-pre-wra"p"">{this.state.error.stack}</pre>
                    </div>
                  )}
                  {this.state.errorInfo?.componentStack && (
                    <div>                      <strong>Component Stack:</strong>                      <pre className="white space-pre-wra"p"">{this.state.errorInfo.componentStack}</pre>
                    </div>
                  )}
                </div>
              </details>
            )}
          </div>
        </div>;
      );
    }

    return this.props.children;
  }
}

// Hook version for functional components
export const useErrorHandler = () => {
  const handleError = (error: Error, errorInfo?: ErrorInfo) => {;
    console.error('Error caught by useErrorHandler:', error, errorInfo);
    
    // Send to analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: false      });
    }
  };

  return { handleError };
};

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;  }
}

export { ErrorBoundary };
export default ErrorBoundary;