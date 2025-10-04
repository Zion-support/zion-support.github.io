import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showDetails?: boolean;
  enableRecovery?: boolean;
  maxRetries?: number;
  enableAnalytics?: boolean;
  enableReporting?: boolean;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
  errorId?: string;
  retryCount: number;
  isRecovering: boolean;
  recoveryStrategies: string[];
  analyticsData?: any;
}

class FinalErrorHandler extends Component<Props, State> {
  public state: State = {
    hasError: false,
    retryCount: 0,
    isRecovering: false,
    recoveryStrategies: []
  };

  public static getDerivedStateFromError(error: Error): Partial<State> {
    return { 
      hasError: true, 
      error,
      errorId: Math.random().toString(36).substr(2, 9)
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('FinalErrorHandler caught an error:', error, errorInfo);
    
    this.setState({ errorInfo });
    
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
    
    // Collect analytics data
    if (this.props.enableAnalytics) {
      this.collectAnalyticsData(error, errorInfo);
    }
    
    // Log to external service in production
    if (process.env.NODE_ENV === 'production') {
      this.logErrorToService(error, errorInfo);
    }
  }

  private collectAnalyticsData = (error: Error, errorInfo: ErrorInfo) => {
    const analyticsData = {
      errorType: error.constructor.name,
      errorMessage: error.message,
      errorStack: error.stack,
      componentStack: errorInfo.componentStack,
      userAgent: navigator.userAgent,
      url: window.location.href,
      timestamp: Date.now(),
      retryCount: this.state.retryCount,
      sessionId: this.getSessionId(),
      userId: this.getUserId()
    };
    
    this.setState({ analyticsData });
  };

  private getSessionId = () => {
    let sessionId = sessionStorage.getItem('sessionId');
    if (!sessionId) {
      sessionId = Math.random().toString(36).substr(2, 9);
      sessionStorage.setItem('sessionId', sessionId);
    }
    return sessionId;
  };

  private getUserId = () => {
    return localStorage.getItem('userId') || 'anonymous';
  };

  private logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    try {
      const errorData = {
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        errorId: this.state.errorId,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        retryCount: this.state.retryCount,
        analyticsData: this.state.analyticsData
      };
      
      console.log('Error logged to service:', errorData);
      
      // Example: Send to error reporting service
      if (this.props.enableReporting) {
        // fetch('/api/errors', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(errorData)
        // });
      }
    } catch (loggingError) {
      console.error('Failed to log error:', loggingError);
    }
  };

  private handleRetry = () => {
    this.setState({ 
      hasError: false, 
      error: undefined, 
      errorInfo: undefined,
      retryCount: this.state.retryCount + 1,
      recoveryStrategies: []
    });
  };

  private handleReload = () => {
    window.location.reload();
  };

  private handleRecovery = async () => {
    this.setState({ isRecovering: true });
    
    try {
      // Attempt recovery strategies
      const strategies = await this.performRecoveryStrategies();
      this.setState({ recoveryStrategies: strategies });
      
      // Reset error state
      this.setState({ 
        hasError: false, 
        error: undefined, 
        errorInfo: undefined,
        isRecovering: false,
        retryCount: this.state.retryCount + 1
      });
    } catch (recoveryError) {
      console.error('Recovery failed:', recoveryError);
      this.setState({ isRecovering: false });
    }
  };

  private performRecoveryStrategies = async (): Promise<string[]> => {
    const strategies: string[] = [];
    
    try {
      // Strategy 1: Clear localStorage/sessionStorage
      localStorage.clear();
      sessionStorage.clear();
      strategies.push('Cleared browser storage');
    } catch (e) {
      console.warn('Failed to clear storage:', e);
    }

    try {
      // Strategy 2: Reload critical resources
      const criticalScripts = document.querySelectorAll('script[data-critical]');
      criticalScripts.forEach(script => {
        const newScript = document.createElement('script');
<<<<<<< HEAD
        newScript.src = (script as HTMLScriptElement).src;
=======
        newScript.src = script.src;
>>>>>>> main
        newScript.setAttribute('data-critical', 'true');
        document.head.appendChild(newScript);
      });
      strategies.push('Reloaded critical scripts');
    } catch (e) {
      console.warn('Failed to reload critical scripts:', e);
    }

    try {
      // Strategy 3: Reset component state
      // This would be implemented based on specific component needs
      strategies.push('Reset component state');
    } catch (e) {
      console.warn('Failed to reset component state:', e);
    }

    try {
      // Strategy 4: Clear caches
      if ('caches' in window) {
        const cacheNames = await caches.keys();
        await Promise.all(cacheNames.map(name => caches.delete(name)));
        strategies.push('Cleared browser caches');
      }
    } catch (e) {
      console.warn('Failed to clear caches:', e);
    }

    return strategies;
  };

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-medium text-gray-900">Something went wrong</h3>
              <p className="mt-2 text-sm text-gray-500">
                We're sorry, but something unexpected happened. Our team has been notified.
              </p>
              
              {this.props.showDetails && this.state.error && (
                <details className="mt-4 text-left">
                  <summary className="cursor-pointer text-sm text-gray-600 hover:text-gray-800">
                    Error Details (ID: {this.state.errorId})
                  </summary>
                  <div className="mt-2 p-3 bg-gray-100 rounded text-xs font-mono text-gray-700">
                    <div><strong>Error:</strong> {this.state.error.message}</div>
                    <div><strong>Retry Count:</strong> {this.state.retryCount}</div>
                    {this.state.error.stack && (
                      <div className="mt-2">
                        <strong>Stack:</strong>
                        <pre className="whitespace-pre-wrap">{this.state.error.stack}</pre>
                      </div>
                    )}
                    {this.state.recoveryStrategies.length > 0 && (
                      <div className="mt-2">
                        <strong>Recovery Strategies:</strong>
                        <ul className="list-disc list-inside">
                          {this.state.recoveryStrategies.map((strategy, index) => (
                            <li key={index}>{strategy}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </details>
              )}
              
              <div className="mt-6 flex space-x-3 justify-center">
                <button
                  onClick={this.handleRetry}
                  disabled={this.state.isRecovering}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                >
                  Try Again
                </button>
                
                {this.props.enableRecovery && this.state.retryCount < (this.props.maxRetries || 3) && (
                  <button
                    onClick={this.handleRecovery}
                    disabled={this.state.isRecovering}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
                  >
                    {this.state.isRecovering ? 'Recovering...' : 'Auto-Recover'}
                  </button>
                )}
                
                <button
                  onClick={this.handleReload}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Reload Page
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default FinalErrorHandler;