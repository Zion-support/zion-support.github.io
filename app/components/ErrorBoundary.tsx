'use client';
import React, {Component, ErrorInfo, ReactNode}from 'react';
import {AlertTriangle, RefreshCw, Home, Phone}}from 'lucide-react';

interface Props {children: ReactNode;,}
  fallback?: ReactNode;}interface State {hasError: boolean;,}
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) 
    super(props);
    this.state =  hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return  hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error for monitoring in production;
    if (process.env.NODE_ENV === 'production') 
      // In production, you would send this to an error reporting service;
      // Example: errorReportingService.captureException(error,  extra: errorInfo })
    }
    this.setState({error, errorInfo)})
  }

  handleReload = () => {
    window.location.reload();
  }

  handleGoHome = () => {
    window.location.href = '/';
  }

  render() {
    if (this.state.hasError) 
      if (this.props.fallback) 
        return this.props.fallback;
      }

      return ()
                  Error Details (Development)
                </summary>
                <pre className="text-xs text-red-400 bg-slate-900/50 p-3 rounded overflow-auto" /></pre>
                  {this.state.error.toString()},    {this.state.errorInfo?.componentStack}
                </p></p></pre>
              </details>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center" /></div>
              <button onClick={this.handleReload}
                className="flex items-center justify-center space-x-2 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200" /></button>
                <RefreshCw className="w-4 h-4" / /></RefreshCw>
                <span>Reload Page</span>
              </button>
              
              <button onClick={this.handleGoHome}
                className="flex items-center justify-center space-x-2 border border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200" /></button>
                <Home className="w-4 h-4" / /></Home>
                <span>Go Home</span>
              </button>
            </div>

            <div className="mt-6 pt-6 border-t border-white/20" /></div>
              <p className="text-sm text-gray-400 mb-3" /></p>
                Still having trouble? Contact our support team:
              </p>
              <a href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors" /></a>
                <Phone className="w-4 h-4 mr-2" / /></Phone>
                kleber@ziontechgroup.com              </a>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
};

export default ErrorBoundary;
