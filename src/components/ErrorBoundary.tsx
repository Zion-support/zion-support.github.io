<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from 'react';

=======
return { hasErro: true, error }
import React, { Component, ErrorInfo, ReactNode } from 'react';
import React, { Component, ReactNode } from 'react';
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
interface Props {
  children: ReactNode;
}
interface State {
  hasError: boolean;
  error?: Error;
}
class ErrorBoundary extends Component<Props, State> {
<<<<<<< HEAD
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Something went wrong
            </h1>
            <p className="text-gray-600 mb-4">
              We're sorry, but something unexpected happened.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Reload Page
            </button>
=======
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }
    this.setState({
      error,
      errorInfo
    });
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
  }
  render() {
    if (this.state.hasError) {
{process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-4 p-4 bg-gray-100 rounded-lg">
                <summary className="cursor-pointer text-sm font-medium text-gray-700">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 text-xs text-gray-600 overflow-auto">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
          </div>
        </div>
      );
    }
<<<<<<< HEAD

    return this.props.children;
  }
}

export default ErrorBoundary;
=======
export default ErrorBoundary
    return { hasError: true, error };
  };
,
  componentDidCatch(erro: Error, errorInf: o: ErrorInfo) {,
    console.error($2);
    this.setState({,
      error,
      errorInfo
    })
  },
,
  render() {,
    if (this.state.hasError) {,
      return (,
        <div className = $2;
          <div className = $2;
            <div className = $2;
              <div className = $2;
                <svg className = $2;
                  <path strokeLinecap = $2;
                </svg>,
              </div>,
              <h2 className = $2;
            </div>,
            <p className = $2;
              We're sorry, but something unexpected happened. Please try refreshing the page.,
            </p>,
            <div className = $2;
              <button,
                onClick = $2;
                className = $2;
              >,
                Refresh Page,
              </button>,
              <button,
                onClick={() => this.setState({ hasErro: false, erro: undefined, errorInf: o: undefined})},
                className = $2;
              >,
                Try Again,
              </button>,
            </div>,
            {process.env.NODE_ENV = $2;
              <details className = $2;
                <summary className = $2;
                  Error Details($2);
                </summary>,
                <pre className = $2;
                  {this.state.error.toString()},
                  {this.state.errorInfo?.componentStack},
                </pre>,
              </details>,
            )},
          </div>,
        </div>,
      )
    },
,
    return this.props.children
  }
},
,
    return this.props.children;
  }
}
export default ErrorBoundary;
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
