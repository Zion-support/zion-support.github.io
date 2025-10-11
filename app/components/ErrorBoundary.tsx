import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) 
    super(props);
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) 
      if (this.props.fallback) 
        return this.props.fallback;
      }

    {this.state.errorInfo?.componentStack}
                </p></p></pre>
              </details>
            )}

              </button>
              
              <a
                href="/"
                className="flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-white rounded-lg font-medium hover:bg-white/10 transition-all duration-300"
              >
                <Home className="w-4 h-4" />
                Go Home
              </a>
              
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Website Error Report"
                className="flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-white rounded-lg font-medium hover:bg-white/10 transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                Report Issue
              </a>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-sm text-gray-400">
                If this problem persists, please contact us at{' '}
                <a 
                  href="tel:+13024640950" 
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  (302) 464-0950
                </a>
              </p>
              </a>
>>>>>>> cursor/analyze-improve-and-deploy-application-89d8
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;