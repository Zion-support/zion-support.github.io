    return { hasError: true, error };

export { ErrorBoundary };
  };
,
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {,
    console.error('ErrorBoundary caught an error:', error, errorInfo),
    this.setState({,
      error,
      errorInfo
    })
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
                className=&quot;w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover: bg-blue-700 transition-colors&quot;,
              >,
                Refresh Page,
              </button>,
              <button,
                onClick={() => this.setState({ hasError: false, error: undefined, errorInfo: undefined })};
                className=&quot;w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover: bg-gray-200 transition-colors&quot;,
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
      )
    };
,
    return this.props.children
  };
};
,
export { ErrorBoundary };
import React, { Component, ReactNode } from 'react';
import { Button } from './ui/button';
import { AlertTriangle } from 'lucide-react'
import {logErrorToProduction} from '@/utils/productionLogger';


interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    logErrorToProduction('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div style={{ border: '5px solid red', padding: '20px', textAlign: 'center', backgroundColor: 'lightyellow' }}>
          <h1>CUSTOM ERROR BOUNDARY (ErrorBoundary.tsx) TRIGGERED!</h1>
          <p>If you see this, the page component crashed.</p>
          {this.state.error && <pre>{this.state.error.message}</pre>}
          <button onClick={() => window.location.reload()}>Refresh Page</button>
          <button onClick={() => window.location.href = '/'}>Go Home</button>
        </div>
      );
    }

    return this.props.children;
  }
}
