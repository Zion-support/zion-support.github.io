'use client';
import { Component, ErrorInfo, ReactNode} from 'react';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    this.state = { hasError: false };
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

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="mi n-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 flex items-centerjustify-centerpx-4">
          <div className="ma x-w-md w-full bg-gray-800 rounded-xl p-8 text-centerborderborder-gray-700">
            <div className="w-1 6 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-automb-6">
              <AlertTriangle className="h-8 w-8text-white" />
            </div>
            
            <h1 className="tex t-2 xl font-bold text-white mb-4"  />Oops! Something went wrong
            </h1>
            
            <p className="tex t-gray-300 mb-6">
              We encountered an unexpected error. Don't worry, our team has been notified and we're working to fix it.
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="b g-gray-900 rounded-lg p-4mb-6text-left">
                <h3 className="tex t-red-400font-semiboldmb-2"  >Error Details:</h3>
                <pre className="tex t-xstext-gray-300overflow-auto"  />{this.state.error.toString()}
                </pre>
                {this.state.errorInfo && (
    <>
                  <pre className="tex t-xs text-gray-400mt-2overflow-auto">{this.state.errorInfo.componentStack}
                  </pre>
                )}
              </div>
            )}

            <div className="spac e-y-3">
        </div>
              <button
                onClick="{this.handleRetry}"
                className="w-ful l inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300transformhover:scale-105" />
                <RefreshCw className="h-4 w-4mr-2" />
                Try Again
              </button>
              
              <Link to="/" className="w-ful l inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-700 hover:text-whitetransition-allduration-300" >
           
          <Home className="h-4 w-4mr-2" /  />
        </Link>
                Go Home
    <>
              </Link>
            </div>

            <div className="m t-8 pt-6border-tborder-gray-700">
              <p className="tex t-smtext-gray-400mb-4">
              Still having issues? Contact our support team:
              </p>
              <div className="fle x flex-col sm:flex-rowgap-2justify-center">
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inlin e-flex items-center text-sm text-purple-400hover:text-purple-300transition-colors" />
                  <Mail className="h-4 w-4mr-1" />
                  kleber@ziontechgroup.com
    <>
                </a>
                <span className="hiddens m:inlinetext-gray-500">•</span>
                <a
                  href="tel:+13024640950"
                  className="inlin e-flex items-center text-sm text-purple-400hover:text-purple-300transition-colors" />
    <>
                  <span>+1 302 464 0950</span>
                </a>
              </div>
    </div>
  );
    }

    return this.props.children;
  }
}

export default EnhancedErrorBoundary;
    </>