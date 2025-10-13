import React from 'react';

interface EnhancedErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}

export default function EnhancedErrorBoundary({ className = '', children }: EnhancedErrorBoundaryProps) {
  return (
<<<<<<< HEAD
    <div className={`${className}`}>
      {children}
    </div>
    <div>
      <h1>Component</h1>
      <p>This component is under construction.</p>
  </div>
  );
}
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  retryCount: number;
}

class EnhancedErrorBoundary extends Component<Props, State> {
  private maxRetries = 3;

  constructor(props: Props) {
    super(props);
    this.state = {
//       hasError: false,
//       error: null,
//       errorInfo: null,
//       retryCount: 0
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
//       hasError: true,
//       error
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
//       error,
//       errorInfo
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }

    // Call custom error handler
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Send error to analytics/monitoring service
    this.logErrorToService(error, errorInfo);
  }

  private logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    try {
      const errorData = {
//         message: error.message,
//         stack: error.stack,
//         componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
//         userAgent: navigator.userAgent,
//         url: window.location.href
      };

      console.error('Error logged:', errorData);
    } catch (loggingError) {
      console.error('Failed to log error:', loggingError);
    }
  };

  private handleRetry = () => {
    if (this.state.retryCount < this.maxRetries) {
      this.setState(prevState => ({
//         hasError: false,
//         error: null,
//         errorInfo: null,
//         retryCount: prevState.retryCount + 1
      }));
    }
  };

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleReportError = () => {
    const errorReport = {
//       error: this.state.error?.message,
//       stack: this.state.error?.stack,
//       componentStack: this.state.errorInfo?.componentStack,
//       userAgent: navigator.userAgent,
//       url: window.location.href,
      timestamp: new Date().toISOString()
    };

    const subject = encodeURIComponent('Error Report - Zion Tech Group Website');
    const body = encodeURIComponent(`
// Error Details:
${JSON.stringify(errorReport, null, 2)}

// Please describe what you were doing when this error occurred:
// [Your description here]
    `);

    window.open(`mailto:kleber@ziontechgroup.com?subject=${subject}&body=${body}`);
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-8 text-center">
            <div className="mb-6">
              <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-white mb-2">
//                 Oops! Something went wrong
</h1>
              <p className="text-gray-300 mb-6">
                We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
</p>
</div>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-left">
                <h3 className="text-red-400 font-semibold mb-2">Error Details:</h3>
                <pre className="text-red-300 text-sm overflow-auto">
                  {this.state.error.message}
                  {this.state.error.stack && `\n\n${this.state.error.stack}`}
//                 </pre>
</div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              {this.state.retryCount < this.maxRetries && (
//                 <button
                  onClick={this.handleRetry}
                  className="flex items-center justify-center px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors"
//                 >
                  <RefreshCw className="w-5 h-5 mr-2" />
                  Try Again ({this.maxRetries - this.state.retryCount} attempts left)
</button>
              )}

//               <button
                onClick={this.handleReload}
                className="flex items-center justify-center px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition-colors"
//               >
                <RefreshCw className="w-5 h-5 mr-2" />
//                 Reload Page
</button>

//               <button
                onClick={this.handleGoHome}
                className="flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors"
//               >
                <Home className="w-5 h-5 mr-2" />
//                 Go Home
</button>
</div>

            <div className="border-t border-white/20 pt-6">
              <p className="text-gray-400 text-sm mb-4">
//                 If this problem persists, please report it to our support team.
</p>
//               <button
                onClick={this.handleReportError}
                className="flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors mx-auto"
//               >
                <Mail className="w-5 h-5 mr-2" />
//                 Report Error
</button>
</div>

            <div className="mt-6 text-xs text-gray-500">
              Error ID: {Date.now().toString(36)}
</div>
</div>
</div>
      );
    }

    return this.props.children;
  }
}

export default EnhancedErrorBoundary;
=======
  );
>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
