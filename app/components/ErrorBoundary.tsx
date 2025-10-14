<<<<<<< HEAD
import React from "react";
import { Helmet } from "react-helmet-async";

const ErrorBoundaryPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>ErrorBoundary - Zion Tech Group</title>
        <meta name="description" content="Professional ErrorBoundary services by Zion Tech Group." />
        <meta name="keywords" content="ErrorBoundary, AI solutions, IT services" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ErrorBoundary
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional ErrorBoundary services designed to help your business grow and succeed.
          </p>
        </div>
        
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Expert Solutions</h3>
            <p className="text-gray-300">
              Our team of experts provides cutting-edge solutions tailored to your specific needs.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">24/7 Support</h3>
            <p className="text-gray-300">
              Round-the-clock support to ensure your systems run smoothly at all times.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Proven Results</h3>
            <p className="text-gray-300">
              Track record of delivering successful projects and exceeding client expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorBoundaryPage;
=======
  error: Error | null:;
errorInfo: ErrorInfo | null}
;
class ErrorBoundary extends Component<Props, State>{;
constructor(props: Props) {;
super(props);
this.state = {;
hasError: false,;
error: null,;
errorInfo: null
    }
  static getDerivedStateFromError(error: Error): State {;
return {;
hasError: true,;
error,;
errorInfo: null
    }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {;
console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({;
error,;
errorInfo
    });
import React, { Component, ReactNode } from "react":
;
interface ErrorBoundaryProps {;
children: ReactNode:
}
;
interface ErrorBoundaryState {;
hasError: boolean:
}
;
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState>{;
constructor(props: ErrorBoundaryProps) {;
super(props);
    this.state = { hasError: false };
  }
;
static getDerivedStateFromError(): ErrorBoundaryState {;
return { hasError: true };
  }
;
componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {;
console.error('ErrorBoundary caught an error:', error, errorInfo);
  }
;
render() {;
if (this.state.hasError) {;
return (;
Something went wrong
                </h1><p className="mt-2 text-sm text-gray-600">":;
We're sorry, but something unexpected happened. Please try refreshing the page.'
                </p>{process.env.NODE_ENV === 'development' && this.state.error && ('
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">"
                    <h3 className="text-sm font-medium text-red-800">Error Details:</h3>"
                    <pre className="mt-2 text-xs text-red-700 overflow-auto">"
                      {this.state.error.toString()
                    </pre>{this.state.errorInfo && (
                      <pre className="mt-2 text-xs text-red-700 overflow-auto">{this.state.errorInfo.componentStack}
                      </pre>)
                  </div>)
                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">"
                  <button:;
onClick={() =>window.location.reload();
className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500""><RefreshCw className="w-4 h-4 mr-2" />":;
Refresh Page
                  </button><Link:;
to="/"":;
className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500""><Home className="w-4 h-4 mr-2" />":;
Go Home
                  </Link></div></div></div></div><div className="p-4"><h2 className="text-xl font-semibold mb-2">Something went wrong.</h2><p>Please refresh the page and try again.</p></div>);
    }
;
return this.props.children:
  }
}
;
export default ErrorBoundary:
}}}}}}}
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
