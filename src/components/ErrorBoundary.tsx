import React, { Component, ReactNode, ErrorInfo } from 'react';
import { AlertTriangle } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
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
        <div className="text-left">
          <div className="text-left">
            <div className="text-left">
              <div className="text-left">
                <AlertTriangle className="text-left" />
              </div>
              <h1 className="text-left">
                Oops! Something went wrong
              </h1>
              <p className="text-left">
                We're sorry for the inconvenience. Please try refreshing the page.
              </p>
              <div className="text-left">
                <button
                  onClick={() => window.location.reload()}
                  className="text-left"
                >
                  Refresh Page
                </button>
                <a
                  href="/"
                  className="text-left"
                >
                  Go to Homepage
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;