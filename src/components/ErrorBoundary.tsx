<<<<<<< HEAD
return { hasError: true, error }};
; componentDidCatch(error: Error, errorInfo: ErrorInfo) {; console.error('ErrorBoundary caught an error: ', error, errorInfo); this.setState({; error; errorInfo})};
; render() {; if (this.state.hasError) {; return (; <div className = "min-h-screen flex items-center justify-center bg-gray-50">; <div className = "max-w-md w-full bg-white shadow-lg rounded-lg p-6">; <div className = "flex items-center mb-4">; <div className = "w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">; <svg className = "w-6 h-6 text-red-600" fill = "none" stroke = "currentColor" viewBox = "0 0 24 24">; <path strokeLinecap = "round" strokeLinejoin = "round" strokeWidth = {2} d = "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />; </svg>; </div>; <h2 className = "text-xl font-semibold text-gray-900">Something went wrong</h2>; </div>; <p className = "text-gray-600 mb-4">; We're sorry, but something unexpected happened. Please try refreshing the page.; </p>; <div className = "space-y-3">; <button; onClick = {() = > window.location.reload()}; className = "w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover: bg-blue-700 transition-colors">, Refresh Page, </button>; <button; onClick = {() = > this.setState({ hasError: false, error: undefined, errorInfo: undefined })}; className = "w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover: bg-gray-200 transition-colors">, Try Again, </button>; </div>; {process.env.NODE_ENV = = = 'development' && this.state.error && (; <details className = "mt-4 p-4 bg-gray-100 rounded-lg">; <summary className = "cursor-pointer text-sm font-medium text-gray-700">; Error Details (Development); </summary>; <pre className = "mt-2 text-xs text-gray-600 overflow-auto">; {this.state.error.toString()}; {this.state.errorInfo?.componentStack}; </pre>; </details>; )}; </div>; </div>; )};
; return this.props.children}};
;export { ErrorBoundary };
>>>>>>> 03f1818a747ef77bbf37ae59cfaf28d591236f31
export { ErrorBoundary };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
=======
import React, { Component, ErrorInfo, ReactNode } from 'react';
interface Props { children: ReactNode;
  fallback?: ReactNode;
}

interface State { hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {;
  public state: State = { hasError: false;
};
  public static getDerivedStateFromError(error: Error): State {;
    return { hasError: true, error };
}

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {;
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    // Log to external service in production;
    if(process.env.NODE_ENV === 'production') {;
      // You can integrate with services like Sentry here;
      console.error('Production error:', { error, errorInfo });
}
  }

  public render() {;
    if(this.state.hasError) {;
      return this.props.fallback || (;
        <div className="min-h-screen flex items-center justify-center bg-gray-50">;
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">;
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full">;
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">;
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />;
              </svg>;
            </div>;
            <div className="mt-4 text-center">;
              <h3 className="text-lg font-medium text-gray-900">Something went wrong</h3>;
              <p className="mt-2 text-sm text-gray-500">;
                We're sorry, but something unexpected happened.Please try refreshing the page.</p>;
              <div className="mt-6">;
                <button;
                  onClick={() => window.location.reload()}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">;
                  Refresh Page;
                </button>;
              </div>;
            </div>;
          </div>;
        </div>;
      );
}

    return this.props.children;
}
}
>>>>>>> origin/automation-fixes
