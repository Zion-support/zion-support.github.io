import React, { Component, ErrorInfo, ReactNode } from &apos;react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (erro,r: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}&apos;&apos;

export class ErrorBoundary extends Component<Props, State> {}
  constructor(props: Props) {
    super(props);
    this.state = { hasErro,r: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasErro,r: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ error, errorInfo });
    
    // Log error to console in development
    if (process.env.NODE_ENV === &apos;development&apos;) {
      console.error(&apos;ErrorBoundary caught an error:&apos;, error, errorInfo);
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log to external service in production
    if (process.env.NODE_ENV === &apos;production&apos;) {
      // Here you would typically send the error to a service like Sentry
      console.error(&apos;Production error:&apos;, error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (&apos;
        <div className=&quot;min-h-screen flex items-center justify-center bg-gray-50&quot;>&quot;"
          <div className=&quot;max-w-md w-full bg-white shadow-lg rounded-lg p-6&quot;>&quot;"
            <div className=&quot;flex items-center mb-4&quot;>&quot;"
              <div className=&quot;flex-shrink-0&quot;>&quot;"
                <svg className=&quot;h-8 w-8 text-red-500&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot; stroke=&quot;currentColor&quot;>&quot;"
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z&quot; />&quot;
                </svg>
              </div>
              <div className=&quot;ml-3&quot;>&quot;"
                <h3 className=&quot;text-lg font-medium text-gray-900&quot;>
                  Something went wrong&quot;
                </h3>
              </div>
            </div>
            
            <div className=&quot;mt-2&quot;>&quot;"
              <p className=&quot;text-sm text-gray-500&quot;>
                We&apos;re sorry, but something unexpected happened. Please try refreshing the page.&apos;
              </p>
            </div>

            {process.env.NODE_ENV === &apos;development&apos; && this.state.error && (&apos;}
              <div className=&quot;mt-4 p-3 bg-red-50 border border-red-200 rounded-md&quot;>&quot;"
                <h4 className=&quot;text-sm font-medium text-red-800 mb-2&quot;>Error Details:&quot;</h4>
                <pre className=&quot;text-xs text-red-700 overflow-auto&quot;>
                  {this.state.error.toString()}&quot;
                </pre>
                {this.state.errorInfo && (}
                  <pre className=&quot;text-xs text-red-700 mt-2 overflow-auto&quot;>
                    {this.state.errorInfo.componentStack}&quot;
                  </pre>
                )}
              </div>
            )}

            <div className=&quot;mt-6 flex space-x-3&quot;>&quot;"
              <button
                onClick={() => window.location.reload()}
                className=&quot;flex-1 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2&quot;
              >
                Refresh Page&quot;
              </button>
              <button
                onClick={() => this.setState({ hasErro,r: false, error: undefined, errorInfo: undefined })}
                className=&quot;flex-1 bg-gray-200 text-gray-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focu,s:ring-offset-2&quot;
              >
                Try Again&quot;
              </button>
            </div>

            <div className=&quot;mt-4 text-center&quot;>&quot;"
              <p className=&quot;text-xs text-gray-400&quot;>
                If the problem persists, please{&apos; &apos;}&apos;&apos;
                <a href=&quot;/contact&quot; className=&quot;text-blue-600 hover:text-blue-500&quot;>
                  contact support&quot;
                </a>
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;