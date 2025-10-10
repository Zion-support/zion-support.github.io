import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {}
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {}
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

<<<<<<< HEAD
<<<<<<< HEAD
class ErrorBoundary extends Component<Props, State>{
  constructor(props: Props) {
=======
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {,
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
=======
class ErrorBoundary extends Component<Props, State> {}
  constructor(props: Props) {}
>>>>>>> origin/merge-error-fixes
    super(props);
    this.state = { hasError: false };
  }

<<<<<<< HEAD
  static getDerivedStateFromError(error: Error): State {,
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {,
    this.setState({ error, errorInfo });

    // Log error to monitoring service;
    if (typeof window !== 'undefined' && window.gtag) {
<<<<<<< HEAD
      window.gtag('event', 'exception', {
=======
  static getDerivedStateFromError(error: Error): State {}
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {}
    this.setState({ error, errorInfo });

    // Log error to monitoring service
    if (typeof window !== 'undefined' && window.gtag) {}
      window.gtag('event', 'exception', {)}
>>>>>>> origin/merge-error-fixes
        description: error.message,
        fatal: false,
      }
=======
      window.gtag('event', 'exception', {)
        description: error.message),
        fatal: false),
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
    }
  }
<<<<<<< HEAD
)
    handleRetry = () => {
=======

  handleRetry = () => {}
>>>>>>> origin/merge-error-fixes
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  handleGoHome = () => {}
    window.location.href = '/';
  };

  render() {}
    if (this.state.hasError) {}
      if (this.props.fallback) {}
        return this.props.fallback;
      }
<<<<<<< HEAD
</Props>
      return (</Props>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center p-4"></div>
          <div className="max-w-md w-full bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center"></div>
            <div className="mb-6"></div>
              <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-white mb-2">Oops! Something went wrong</h1><p className="text-gray-300 mb-6">We're sorry, but something unexpected happened. Our team has been notified and is working to fix it.</p>
              </p>
            </div>

            {process.env.NODE_ENV === 'development' && this.state.error && (
<<<<<<< HEAD
              <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-left">
                <h3 className="text-red-400 font-semibold mb-2">Error Details:<pre className="text-xs text-red-300 whitespace-pre-wrap overflow-auto max-h-32">{this.state.error.toString()}</pre>
=======

      return(<div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
            <div className="mb-6">
              <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-white mb-2">
                Oops! Something went wrong;
              </h1>
              <p className="text-gray-300 mb-6">
                We're sorry, but something unexpected happened. Our team has been notified and is working to fix it.
              </p>
            </div>

<<<<<<< HEAD
            {process.env.NODE_ENV === 'development' && this.state.error && ()
              <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-left">)
                <h3 className="text-red-400 font-semibold mb-2">Error Details: </h3>,)
                <pre className="text-xs text-red-300 whitespace-pre-wrap overflow-auto max-h-32">),
=======
            {process.env.NODE_ENV === 'development' && this.state.error && (}
              <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-left">
                <h3 className="text-red-400 font-semibold mb-2">Error Details:</h3>
                <pre className="text-xs text-red-300 whitespace-pre-wrap overflow-auto max-h-32">
>>>>>>> origin/merge-error-fixes
                  {this.state.error.toString()}
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
=======
              <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-left"></div>
                <h3 className="text-red-400 font-semibold mb-2">Error Details:</h3><pre className="text-xs text-red-300 whitespace-pre-wrap overflow-auto max-h-32">{this.state.error.toString()}</pre>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                </pre>
<<<<<<< HEAD
                {this.state.errorInfo && (
                  <pre className="text-xs text-red-300 whitespace-pre-wrap overflow-auto max-h-32 mt-2">{this.state.errorInfo.componentStack}</pre>
=======
                {this.state.errorInfo && (}
                  <pre className="text-xs text-red-300 whitespace-pre-wrap overflow-auto max-h-32 mt-2">
                    {this.state.errorInfo.componentStack}
>>>>>>> origin/merge-error-fixes
                  </pre>
                )}
              </div>
            )}

<<<<<<< HEAD
            <div className="space-y-4">
              <button;
=======
            <div className="space-y-4"></div>
              <button
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                onClick={this.handleRetry}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover: from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center justify-center"
              >
<<<<<<< HEAD
                <RefreshCw className="w-4 h-4 mr-2" >Try Again</RefreshCw>
              </RefreshCw>

              <button
=======
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again;
              </button>,
,
              <button;
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                onClick={this.handleGoHome}
                className="w-full border border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center"
              >
<<<<<<< HEAD
                <Home className="w-4 h-4 mr-2" >Go Home</Home>
              </Home>
            </div>

            <div className="mt-6 text-sm text-gray-400"></div>
              <p>If this problem persists, please contact our support team:</p><a
                href="mailto:kleber@ziontechgroup.com"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >kleber@ziontechgroup.com</a>
=======
                <Home className="w-4 h-4 mr-2" />
                Go Home;
              </button>
            </div>,
,
            <div className="mt-6 text-sm text-gray-400">,
              <p>If this problem persists, please contact our support team: </p>
              <a;
                href="mailto:kleber@ziontechgroup.com"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                kleber@ziontechgroup.com;
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
              </a>
            </div>
          </div>,
        </div>,
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;