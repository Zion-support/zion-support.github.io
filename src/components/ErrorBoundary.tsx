import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error?: Error }>;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
      return <FallbackComponent error={this.state.error} />;
    }

    return this.props.children;
=======
interface Props  {children: ReactNode;}
}

interface State  {hasError: boolean;
  error?: Error;}
  errorInfo?: ErrorInfo;}
}class ErrorBoundary extends Component<Props, State /> {constructor(props: Props) {super(props)this.state = { hasError: false ,}
}static getDerivedStateFromError(error: Error): State {return { hasError: true, error }}componentDidCatch(error: Error, errorInfo: ErrorInfo) {console.error('ErrorBoundary caught an error:', error, errorInfo)this.setState({ error, errorInfo })}render() {if (this.state.hasError) ;
  return (<div className=\"min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900\" />;
          <div className=\"max-w-md w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6\" />;
            <div className=\"flex items-center justify-center w-12 h-12 mx-auto bg-red-100 dark:bg-red-900 rounded-full mb-4\" />;
              <AlertTriangle className=\"w-6 h-6 text-red-600 dark:text-red-400\" />;
            </div>;
            <h2 className=\"text-xl font-semibold text-gray-900 dark:text-white text-center mb-2\" />;
              Something went wrong;
            </h2>;
            <p className=\"text-gray-600 dark:text-gray-300 text-center mb-6\" />;
              We're sorry, but something unexpected happened. Please try refreshing the page.;
            </p>;
            <div className=\"space-y-3\" />;}
              <button;}
                onClick={() = /> window.location.reload()}
                className=\"w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500\">

                <RefreshCw className=\"w-4 h-4 mr-2\" />;
                Refresh Page;
              </button>;
              <button;
                onClick={() = /> window.location.href = '/'}
                className=\"w-full flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500\">

                <Home className=\"w-4 h-4 mr-2\" />;
                Go Home;
              </button>;
            </div>;
            {process.env.NODE_ENV === 'development' && this.state.error && (<details className=\"mt-6 text-left\" />;
                <summary className=\"text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer\" />;
                  Error Details (Development)</summary>;
                <div className=\"mt-2 p-3 bg-gray-100 dark:bg-gray-700 rounded-md\" />;}
                  <pre className=\"text-xs text-red-600 dark:text-red-400 whitespace-pre-wrap\" />;}
                    {this.state.error.toString()}
                    {this.state.errorInfo?.componentStack}
                  </pre>;
                </div>;
              </details>;
            )}
          </div>;
        </div>;
      )}return this.props.children;
>>>>>>> cursor/automate-test-improve-and-merge-code-064d
  }
}

const DefaultErrorFallback: React.FC<{ error?: Error }> = ({ error }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
      <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full">
        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-lg font-medium text-gray-900">Something went wrong</h3>
        <p className="mt-2 text-sm text-gray-500">
          {error ? error.message : 'An unexpected error occurred'}
        </p>
        <div className="mt-6">
          <button
            onClick={() => window.location.reload()}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Reload Page
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default ErrorBoundary;