import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { State } from 'lucide-react';
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  maxRetries?: number;
  showDetails?: boolean;
}
interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  retryCount: number;
  isRetrying: boolean;
}
class UnifiedErrorBoundary extends Component<Props, State> {
  private maxRetries: number;
  private retryTimeoutId: number | null = null;

constructor(props: Props) {
    super(props);
    this.maxRetries = props.maxRetries || 3;
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: 0,
      isRetrying: false,
    };
  }
  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
    };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    logger.error('Error caught by UnifiedErrorBoundary:', error, errorInfo);
    this.setState({
      error,
      errorInfo,
    });
    if (this.props.onError) {
      this.props.onError( errorInfo);
    }
    // Send error to analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        custom_map: {
          error_stack: error.stack,
          component_stack: errorInfo.componentStack,
        },
      });
    }
  }
  handleRetry = () => {
    if (this.state.retryCount >= this.maxRetries) {
      logger.warn('Maximum retry attempts reached');
  return;
    }
    this.setState({ isRetrying: true });
    // Clear any existing timeout
    if (this.retryTimeoutId) {
      clearTimeout(this.retryTimeoutId);
    }
    // Retry after a short delay
    this.retryTimeoutId = window.setTimeout(() => {
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null,
        retryCount: this.state.retryCount + 1,
        isRetrying: false,
      });
    }, 1000);
  };
  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: 0,
      isRetrying: false,
    });
  };
  get canRetry(): boolean {
    return this.state.retryCount < this.maxRetries;
  }
  componentWillUnmount() {
    if (this.retryTimeoutId) {
      clearTimeout(this.retryTimeoutId);
    }
  }
  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      const { error, retryCount, isRetrying } = this.state;

const { showDetails = process.env.NODE_ENV === 'development' } = this.props;
  return (
    <>
          <Helmet>
            <title>Application Error - Zion Tech Group</title>
            <meta name="description" content="An error occurred in the application" />
            <meta name="robots" content="noindex, nofollow" />
          </Helmet>
          
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
            
        <div className="max-w-2xl w-full">
              
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
                {/* Error Icon */}
                
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-500/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                {/* Error Message */}
                
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Oops! Something went wrong
                </h1>
                
          <p className="text-gray-300 mb-6 leading-relaxed">
                  We're sorry, but something unexpected happened. Our team has been notified and we're working to fix it.
                </p>
                {/* Error Details (Development only) */}
                {showDetails && error && (
                  
        <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-6 text-left">
                    <h3 className="text-red-400 font-semibold mb-2">Error Details:</h3>
                    
          <p className="text-red-300 text-sm font-mono break-all">{error.message}</p>
                    {error.stack && (
                      <details className="mt-2">
                        <summary className="text-red-400 text-sm cursor-pointer">Stack Trace</summary>
                        <pre className="text-red-300 text-xs mt-2 overflow-auto max-h-32 font-mono">
                          {error.stack}
                        </pre>
                      </details>
                    )}
                  </div>
                )}
                {/* Retry Count */}
                {retryCount > 0 && (
                  
          <p className="text-yellow-400 text-sm mb-4">
                    Retry attempt {retryCount} of {this.maxRetries}
                  </p>
                )}
                {/* Action Buttons */}
                
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {this.canRetry && (
                    <button
                      onClick={this.handleRetry}
                      disabled={isRetrying}
                      className="bg-cyan-500 hover:bg-cyan-600 disabled:bg-cyan-500/50 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      {isRetrying ? (
                        <>
                          
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                          Retrying...
                        </>
                      ) : (
                        'Try Again'
                      )}
                    </button>
                  )}
                  <button
                    onClick={this.handleReset}
                    className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                  >
                    Reset
                  </button>
                  <button
                    onClick={() => window.location.href = '/'}
                    className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                  >
                    Go Home
                  </button>
                </div>
                {/* Contact Information */}
                
        <div className="mt-8 pt-6 border-t border-white/10">
                  
          <p className="text-gray-400 text-sm mb-2">
                    If this problem persists, please contact our support team:
                  </p>
                  
        <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                    <a
                      href="mailto:kleber@ziontechgroup.com"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      kleber@ziontechgroup.com
                    </a>
                    <a
                      href="tel:+13024640950"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      +1 (302) 464-0950
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
    return this.props.children;
  }
}
export default UnifiedErrorBoundary;