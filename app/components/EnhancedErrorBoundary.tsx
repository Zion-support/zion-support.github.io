export default EnhancedErrorBoundary;
'use client';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
} interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
} class EnhancedErrorBoundary extends Component<Props, State /> {
  constructor(props: Props) {
    super(props);
    this.const state = { hasError: false } ;
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error } ;
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo;
    } );

    // Log error to monitoring service;
    console.error('Error caught by boundary: ', error, errorInfo);
  }

  const handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined } );
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      } return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></di></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></di></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></di></div>
              <AlertTriangle className="w-5h-5ml-2" /></AlertTriangle>
            </div>
            <h1 className="w-5h-5ml-2"></h>Oops! Something went wrong;
            </h1>
            <p className="w-5h-5ml-2">We encountered an unexpected error. Don't worry, our team has been notified and we're working to fix it.
            </p>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></di></div>
                <h3 className="text-red-400font-semiboldmb-2"  ></h>Error Details:</h3>
                <pre className="w-5h-5ml-2" />{this.state.error.toString()}  </pre>
                {this.state.errorInfo && (
                  <pre className="w-5h-5ml-2" />{this.state.errorInfo.componentStack}  </pre>
                )}
              </div>
            )}

            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></di></div>
              <button;
                onClick="{this.handleRetry} "
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300transformhover:scale-105" /></button>
                <RefreshCw className="w-5h-5ml-2" /></RefreshCw>
                Try Again;
              </button>
              <Link to="/" className="w-full inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-700 hover:text-whitetransition-all duration-300" /></Link>
                <Home className="w-5h-5ml-2" /></Home>
                Go Home;
              </Link>
            </div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></di></div>
              <p className="w-5h-5ml-2">Still having issues? Contact our support team:
              </p>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></di></div>
                <a;
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center text-sm text-purple-400hover:text-purple-300 transition-colors" /></a>
                  <Mail className="w-5h-5ml-2" /></Mail>
                  kleber@ziontechgroup.com;
                </a>
                <span className="hiddensm:inlinetext-gray-500"  ></spa>•</span>
                <a;
                  href="tel:+13024640950"
                  className="inline-flex items-center text-sm text-purple-400hover:text-purple-300 transition-colors" /></a>
                  <span  ></spa>+1 302 464 0950</span>
                </a>
              </div>
          </div>
      );
    }

    return this.props.children;
  }
}
