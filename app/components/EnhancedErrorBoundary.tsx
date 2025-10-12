import { Component, ErrorInfo, ReactNode} from 'react';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';
'use client';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class EnhancedErrorBoundary extends Component<Props, State /> {
  constructor(props: Props) {
    super(props);
    this.const state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });

    // Log error to monitoring service
    console.error('Error caught by boundary: ', error, errorInfo);
  }

  const handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <AlertTriangle className="w-5 h-5 ml-2" />
            </div>
            
            <h1 className="w-5 h-5 ml-2">Oops! Something went wrong
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">We encountered an unexpected error. Don't worry, our team has been notified and we're working to fix it.
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                <h3 className="text-red-400font-semiboldmb-2"  >Error Details:</h3>
                <pre className="w-5 h-5 ml-2" />{this.state.error.toString()}
                </pre>
                {this.state.errorInfo && (
                  <pre className="w-5 h-5 ml-2" />{this.state.errorInfo.componentStack}
                  </pre>
                )}
              </div>
            )}

            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <button
                onClick="{this.handleRetry}"
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300transformhover:scale-105" />
                <RefreshCw className="w-5 h-5 ml-2" />
                Try Again
              </button>
              
              <Link to="/" className="w-full inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-700 hover:text-whitetransition-all duration-300" />
                <Home className="w-5 h-5 ml-2" />
                Go Home
              </Link>
            </div>

            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Still having issues? Contact our support team:
              </p>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center text-sm text-purple-400hover:text-purple-300 transition-colors" />
                  <Mail className="w-5 h-5 ml-2" />
                  kleber@ziontechgroup.com
                </a>
                <span className="hiddensm:inlinetext-gray-500"  >•</span>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center text-sm text-purple-400hover:text-purple-300 transition-colors" />
                  <span  >+1 302 464 0950</span>
                </a>
              </div>
          </div>
      );
    }

    return this.props.children;
  }
}

export default EnhancedErrorBoundary;