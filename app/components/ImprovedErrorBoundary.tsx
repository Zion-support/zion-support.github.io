import React from 'react';
import { Link } from 'react-router-dom';
interface Props 
}

interface State 
}

class ImprovedErrorBoundary extends Component<Props, State /> 
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State 
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) 
    this.setState({ error, errorInfo });
    
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') 
    }
    
    // Call custom error handler if provided
    if (this.props.onError) 
    }
    
    // In production, you might want to send this to an error reporting service
    // Example: errorReportingService.captureException(error, { extra: errorInfo });
  }

  handleRetry = () => 
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() 
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center" /></div>
          <div className="max-w-md mx-auto px-6 text-center" /></div>
            <div className="mb-8" /></div>
              <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4" /></div>
                <AlertTriangle className="w-10 h-10 text-red-400" / />
              </div>
              <h1 className="text-3xl font-bold text-white mb-4" /></h1>
                Oops! Something went wrong
              </h1>
              <p className="text-gray-300 mb-6" />
                We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
              </p>
            </div>

            <div className="space-y-4" /></div>
              <button
                onClick={this.handleRetry}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
               /></button>
                <RefreshCw className="w-5 h-5" / />
                Try Again
              </button>
              
              <Link
                to="/"
                className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
               /></Link>
                <Home className="w-5 h-5" / />
                Go Home
              </Link>
            </div>

            {/* Development Error Details */}
            
                    {this.state.error.toString()}
                    {this.state.errorInfo?.componentStack}
                  </pre>
                </div>
              </details>
            )}

            {/* Contact Support */}
            <div className="mt-8 pt-6 border-t border-white/10" /></div>
              <p className="text-gray-400 text-sm mb-4" />
                Still having issues? Contact our support team
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
               /></Link>
                <Mail className="w-4 h-4" / />
                Get Support
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Higher-order component for easier usage
export const withErrorBoundary = <P extends object />(
  Component: React.ComponentType<P />,
  errorBoundaryProps?: Omit<Props, 'children' /></Props>
) => 
    <ImprovedErrorBoundary {...errorBoundaryProps} /></ImprovedErrorBoundary>
      <Component {...props} / />
    </ImprovedErrorBoundary>
  );
  
  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;
  
  return WrappedComponent;
};

// Hook for functional components to handle errors
export const _useErrorHandler = () => 
    // Example: errorReportingService.captureException(error, { extra: errorInfo });
  };
};

export default ImprovedErrorBoundary;
