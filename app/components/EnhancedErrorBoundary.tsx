import { Component, ErrorInfo, ReactNode} from 'react';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}
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
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }
  }
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo;
    });
    // Log error to monitoring service
    console.error('Error caught by boundary: ', error, errorInfo);
    // Log error to monitoring service;
    console.error('Error caught by boundary: ', error, errorInfo);
  }
  const handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };
  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      return (
        <div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div></div></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
              <div><AlertTriangle className="w-5h-5ml-2"></AlertTriangle></div>
            </div></div>
            <h1 className="w-5h-5ml-2">Oops! Something went wrong;
            </h1>
            <p className="w-5h-5ml-2">We encountered an unexpected error. Don't worry, our team has been notified and we're working to fix it.
            </p>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div>
                <h3 className="text-red-400font-semiboldmb-2"  ></div>Error Details:</h3>
                <pre className="w-5h-5ml-2" />{this.state.error.toString()}
                </pre>
                {this.state.errorInfo && (
                  <pre className="text-xs text-gray-400mt-2overflow-auto">{this.state.errorInfo.componentStack}
                  <pre className="w-5h-5ml-2" />{this.state.errorInfo.componentStack}
                  </pre>
                )}
              </div>
            )}
                Try Again
                Go Home
                Still having issues? Contact our support team:
                  kleber@ziontechgroup.com
                <span className="hiddensm:inlinetext-gray-500">•</span>
                  <span>+1 302 464 0950</span>
      );
    return this.props.children;
export default EnhancedErrorBoundary;
            <div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div>
              <button;
                onClick="{this.handleRetry}"
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300transformhover:scale-105"></div><div></button></div>
                <RefreshCw className="w-5h-5ml-2"></RefreshCw></div></div>
                Try Again;
              <div></button>
              <Link to="/" className="w-full inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-700 hover:text-whitetransition-all duration-300"></Link></div></div>
                <Home className="w-5h-5ml-2"></Home>
                Go Home;
              <div></Link>
            </div></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
              <p className="w-5h-5ml-2">Still having issues? Contact our support team:
              <div></p>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
                <div><a;
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center text-sm text-purple-400hover:text-purple-300 transition-colors"></a></div>
                  <Mail className="w-5h-5ml-2"></div></Mail></div>
                  kleber@ziontechgroup.com;
                </a>
                <span className="hiddensm:inlinetext-gray-500"  >•<div></span>
                <a;
                  href="tel:+13024640950"
                  className="inline-flex items-center text-sm text-purple-400hover:text-purple-300 transition-colors"></a></div></div>
                  <span  >+1 302 464 0950<div></span>
                </a></div>
              </div></div>
          </div></div>
      );
    }
    return this.props.children;
  }
}