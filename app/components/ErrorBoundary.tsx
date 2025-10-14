import React, { Component, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowPathIcon, HomeIcon } from '@heroicons/react/24/outline;
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: any;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null
    };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    this.setState({
      error,
      errorInfo
    });

    // Log error to console in development;
    if (process.env.NODE_ENV === 'development') {'
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    // Log error to external service in production;
    if (process.env.NODE_ENV === 'production') {
      // Here you would typically send the error to a service like Sentry;
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
  }

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    });
  };

  render() {
    if (this.state.hasError) {
      return (
    
        <div>
    <div />
            <div>
    <svg />
                <path />
              </svg>
            </div>
            
            <h1>Something went wrong
            </h1></h1>
            
            <p />'
              We're sorry, but something unexpected happened. Please try again or contact support if the problem persists.
            </p>
            '
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details />
                <summary />
                  Show Error Details
                </summary>
                <div>
    <div />
                    <strong>Error:</strong> {this.state.error.message}
                  </div>
                  {this.state.errorInfo && (
                    <div />
                      <strong>Stack Trace:</strong>
                      <pre />
                        {this.state.errorInfo.componentStack}
                      </pre>
                    )
                  </div>
                )
                <div />"
                  <button;
                    onClick={() => window.location.reload()"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">"
                    <RefreshCw className="w-4 h-4 mr-2">"
                    Refresh Page;
                  </button>
                  <Link"
                    to="/"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">"
                    <Home className="w-4 h-4 mr-2">"
                    Go Home}
                  </Link>
                </div>
              </details>
            )}

            <div>
    <button
                onClick={() => window.location.reload()}
                className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
                <ArrowPathIcon />
                Try Again
              </button>
              
              <Link />
                <HomeIcon />
                Go Home
              </Link>
            </div>

            <div>
    <p />'
                If this problem persists, please{' '}
                <Link />
                  contact our support team
                </Link>
              </p>
            </div>
        </div>
      </div>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;