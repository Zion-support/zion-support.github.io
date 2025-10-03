import React, { Component, ReactNode, ErrorInfo } from 'react';
import { AlertTriangle } from 'lucide-react';

interface Props {/* content */}
  children: ReactNode;
}

interface State {/* content */}
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {/* content */}
  public state: State = {/* content */}
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {/* content */}
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {/* content */}
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {/* content */}
    if (this.state.hasError) {/* content */}
      return (
  <div></div>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50"></div>
          <div className="max-w-md w-full mx-4"></div>
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center"></div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4"></div>
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Oops! Something went wrong
              </h1>
              <p className="text-gray-600 mb-6"></p>
                We're sorry for the inconvenience. Please try refreshing the page.
              </p>
              <div className="space-y-3"></div>
                <button
                  onClick={() => window.location.reload()}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  Refresh Page
                </button>
                <a
                  href="/"
                  className="block w-full border-2 border-red-600 text-red-600 hover:bg-red-50 font-semibold py-3 px-6 rounded-lg transition-colors"></a>
                  Go to Homepage
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;