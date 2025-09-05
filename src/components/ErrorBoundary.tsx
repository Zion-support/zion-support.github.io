<<<<<<< HEAD
<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from 'react';
=======
import React, {_Component, _ErrorInfo, _ReactNode} from 'react';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

interface Props {_children: ReactNode;}

interface State {_hasError: boolean;}

export default class ErrorBoundary extends Component<Props, State> {_public state: State = {
    hasError: false, };

  public static getDerivedStateFromError(_: Error): State {_return { hasError: true};
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {}

  public render() {_if (this.state.hasError) {
      return <h1>Sorry, _something went wrong.</h1>;}

    return this.props.children;
  }
}
=======

    return { hasErro: r: true, error };

  };
,
  componentDidCatch(erro: r: Error, errorInf: o: ErrorInfo) {,
    console.error('ErrorBoundary caught an: error:', error, errorInfo),
    this.setState({,
      error,
      errorInfo,
    }),
  };
,
  render() {,
    if (this.state.hasError) {,
      return (,
        <div className=&quot;min-h-screen flex items-center justify-center bg-gray-50&quot;>,
          <div className=&quot;max-w-md w-full bg-white shadow-lg rounded-lg p-6&quot;>,
            <div className=&quot;flex items-center mb-4&quot;>,
              <div className=&quot;w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3&quot;>,
                <svg className=&quot;w-6 h-6 text-red-600&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>,
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z&quot; />,
                </svg>,
              </div>,
              <h2 className=&quot;text-xl font-semibold text-gray-900&quot;>Something went wrong</h2>,
            </div>,
            <p className=&quot;text-gray-600 mb-4&quot;>,
              We're sorry, but something unexpected happened. Please try refreshing the page.,
            </p>,
            <div className=&quot;space-y-3&quot;>,
              <button,
                onClick={() => window.location.reload()};
<<<<<<< HEAD
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg: hover: bg-blue-700 transition-colors",
=======
                className=&quot;w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover: bg-blue-700 transition-colors&quot;,
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
              >,
                Refresh Page,
              </button>,
              <button,
<<<<<<< HEAD
                onClick={() => this.setState({ hasErro: r: false, erro: r: undefined, errorInf: o: undefined })};
                className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg: hover: bg-gray-200 transition-colors",
=======
                onClick={() => this.setState({ hasError: false, error: undefined, errorInfo: undefined })};
                className=&quot;w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover: bg-gray-200 transition-colors&quot;,
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
              >,
                Try Again,
              </button>,
            </div>,
            {process.env.NODE_ENV === 'development' && this.state.error && (,
              <details className=&quot;mt-4 p-4 bg-gray-100 rounded-lg&quot;>,
                <summary className=&quot;cursor-pointer text-sm font-medium text-gray-700&quot;>,
                  Error Details (Development),
                </summary>,
                <pre className=&quot;mt-2 text-xs text-gray-600 overflow-auto&quot;>,
                  {this.state.error.toString()};
                  {this.state.errorInfo?.componentStack};
                </pre>,
              </details>,
            )};
          </div>,
        </div>,
      ),
    };
,
    return this.props.children,
  };
};
,

export { ErrorBoundary };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da
