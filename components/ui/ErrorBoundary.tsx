<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from 'react';



}

interface State {


=======

import {AlertTriangle, RefreshCw} from 'lucide-react';
;
interface Props {
  children: ReactNode,  fallback?: ReactNode;
}

interface State {
  hasError: boolean,
  error?: Error;
}

interface State {
  hasError: boolean,
  error?: Error;
}


            </div>;
            <h2 className="text-xl font-semibold text-gray-900 mb-2">;
              Something went wrong;
            </h2>;"
            <p className=\"text-gray-600 mb-6\"    />;
>>>>>>> origin/cursor/delete-old-data-records-6bba
              We&apos, re sorry, but something unexpected happened. Please try refreshing the page.;
            </p>;
            <button;
              onClick={this && this.handleRetry}"
<<<<<<< HEAD

              className=\"inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover: bg-blue-700 transition-colors\"    />;"
              <RefreshCw className=\"w-4 h-4 mr-2\"    />;

=======
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover: bg-blue-700 transition-colors">;"
              <RefreshCw className="w-4 h-4 mr-2" />;
>>>>>>> origin/cursor/delete-old-data-records-6bba
              Try Again;
            </button>;"
            {process && process.env.NODE_ENV === 'development' && this && this.state.error && (<details className=\"mt-4 text-left\"    />;"
                <summary className=\"cursor-pointer text-sm text-gray-500\"    />;
                  Error Details;
<<<<<<< HEAD

                </summary>;}"
                <pre className=\"mt-2 text-xs text-red-600 bg-red-50 p-2 rounded overflow-auto\"    />;}

=======
                </summary>;"
                <pre className="mt-2 text-xs text-red-600 bg-red-50 p-2 rounded overflow-auto">;
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  {this && this.state.error && error.stack}
                </pre>;
              </details>;
            )}

<<<<<<< HEAD

}

class ErrorBoundary extends Component < Props, State> {public state: State = {has_error: false;}
  },public static getDerivedStateFromError (error: Error): State {return { has_error: true, error }

=======
  has_error: boolean,error?: Error;
          </div>;
        </div>;
      ),;
    }
    return this && this.props.children;
  has_error: boolean,
  error?: Error;
}
class ErrorBoundary extends Component < Props, State> {}
  public state: State = {}
    has_error: false;
  },
  public static getDerivedStateFromError (error: Error): State {}
    return { has_error: true, error }
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
  public componentDidCatch (error: Error, error_info: ErrorInfo) {// eslint - disable - next - line no - console;}
    console.error ('ErrorBoundary caught an error:', error, error_info)}
  private handle_retry = () => {this.set_state ({ has_error: false, error: undefined}
})}public render () {// Check condition;}
if ( {) {$2;}
}
      // Check condition;
if ( {) {$2;}
}
<<<<<<< HEAD

        return this.props.fallback;

      return (
        <div className="min - h-screen flex items - center justify - center bg-gray-50">;
          <div className="max - w-md w - full bg - white shadow - lg rounded - lg p-6 text-center">;
            <div className="flex justify-center mb-4">;
              <AlertTriangle className="w - 12 h - 12 text-red-500" />;
            </div>;
            <h2 className="text - xl font - semibold text - gray-900 mb-2">;
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined }),
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

=======
        return this.props.fallback;
      }
>>>>>>> origin/cursor/delete-old-data-records-6bba

      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <AlertTriangle className="w-12 h-12 text-red-500" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Something went wrong
            </h2>
            <p className="text-gray-600 mb-6">
              We&apos;re sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            <button
              onClick={this.handleRetry}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </button>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-4 text-left">
                <summary className="cursor-pointer text-sm text-gray-500">
                  Error Details
                </summary>
                <pre className="mt-2 text-xs text-red-600 bg-red-50 p-2 rounded overflow-auto">
<<<<<<< HEAD


=======
              Something went wrong;
            </h2>;"
            <p className=\"text - gray-600 mb-6\"    />;
              We & apos, re sorry, but something unexpected happened. Please try refreshing the page.;
            </p>;
            <button;
              on_click={this.handle_retry}"
              className=\"inline - flex items - center px - 4 py - 2 bg - blue - 600 text - white rounded - lg hover: bg - blue-700 transition-colors\"    />
"
              <RefreshCw className=\"w - 4 h-4 mr-2\"    />;
              Try Again;
            </button>;"
            {process.env.NODE_ENV === 'development' && this.state.error && (<details className=\"mt-4 text-left\"    />;"
                <summary className=\"cursor - pointer text - sm text-gray-500\"    />;
                  Error Details;
                </summary>;
                <pre className="mt - 2 text - xs text - red - 600 bg - red - 50 p-2 rounded overflow-auto">;
                </summary>;}"
                <pre className=\"mt - 2 text - xs text - red - 600 bg - red - 50 p-2 rounded overflow-auto\" />;}
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  {this.state.error.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
<<<<<<< HEAD
}


export default ErrorBoundary;"

=======
export default ErrorBoundary;"
>>>>>>> origin/cursor/delete-old-data-records-6bba
