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

              <button
                onClick={this.handleRetry}
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300transformhover:scale-105" />
                <RefreshCw className="h-4w-4mr-2" />
                Try Again
              </button>
              
              <Link to="/" className="w-full inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-700 hover:text-whitetransition-allduration-300" >
           
          <Home className="h-4w-4mr-2" /  />
        </Link>
                Go Home
              </Link>
            </div>

            <div className="mt-8 pt-6border-tborder-gray-700">
              <p className="text-smtext-gray-400mb-4">
              Still having issues? Contact our support team:
              </p>
              <div className="flex flex-col sm:flex-rowgap-2justify-center">
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center text-sm text-purple-400hover:text-purple-300transition-colors" />
                  <Mail className="h-4w-4mr-1" />
                  kleber@ziontechgroup.com
                </a>
                <span className="hiddensm:inlinetext-gray-500">•</span>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center text-sm text-purple-400hover:text-purple-300transition-colors" />
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
