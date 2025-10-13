import React from 'react';
import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react';

interface Props 
}

interface State 
}

export class GlobalErrorBoundary extends Component<Props, State> 
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): Partial<State> 
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) 
    });
  }

  handleRetry = () => 
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  handleGoHome = () => 
  };

  render() 
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center" />
              <button
                onClick={this.handleRetry}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
               />
                <RefreshCw className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform duration-300" />
                Try Again
              </button>
              
              <button
                onClick={this.handleGoHome}
                className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
               />
                <Home className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Go Home
              </button>
            </div>

            <div className="mt-8 text-sm text-gray-400" />
              <p>If this problem persists, please contact our support team.</p>
              <p className="mt-2" />
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                 />
                  kleber@ziontechgroup.com
                </a>
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default GlobalErrorBoundary;
