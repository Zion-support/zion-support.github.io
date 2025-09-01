import React from 'react';

type ErrorBoundaryProps = {

  children: React.ReactNode;
  fallback?: React.ReactNode;
};

type ErrorBoundaryState = {

  hasError: boolean;
};

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {

  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {

    return { hasError: true };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  componentDidCatch(_error: unknown, _errorInfo: unknown) {

    // optional: report to monitoring
  }

  render() {

    if (this.state.hasError) {

      return this.props.fallback ?? <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}

export { ErrorBoundary };

import React, { Component, ErrorInfo, ReactNode } from 'react';
export default ErrorBoundary;
import {

  AlertTriangle,
  RefreshCw,
  Home,
  Mail,
  Bug,
  Shield,
  ArrowLeft} from 'lucide - react';

interface Props {

  children: ReactNode;
  fallback?: ReactNode;
}

interface State {

  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;

  errorId: string;
  showDetails: boolean;
}

class ErrorBoundary extends Component < Props, State> {

  constructor (props: Props) {

    super (props) ;
    this.state = {

      hasError: false,
      error: null,
      errorInfo: null,

      errorId: '',
      showDetails: false};
  }

  static getDerivedStateFromError (error: Error) : Partial < State> {

    return {

      hasError: true,
      error,

      errorId: `error_${Date.now () }_${Math.random () .toString (36) .substr (2, 9) }`};
  }

  componentDidCatch (error: Error, errorInfo: ErrorInfo) {

    this.setState ({

      errorInfo}) ;

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {

      console.error ('Error caught by boundary:', error, errorInfo) ;
    }

    // In production, you would send this to your error reporting service
    // Example: Sentry.captureException (error, { extra: errorInfo }) ;
  }

  handleRetry = () => {

    this.setState ({

      hasError: false,
      error: null,
      errorInfo: null,

      errorId: '',
      showDetails: false}) ;
  };

  handleGoHome = () => {

    window.location.href = '/';
  };

  handleReportError = () => {

    const { error, errorInfo, errorId } = this.state;
    const errorReport = {

      errorId,
      message: error?.message,
      stack: error?.stack,
      componentStack: errorInfo?.componentStack,
      url: window.location.href,
      userAgent: navigator.userAgent,
      timestamp: new Date () .toISOString () };

    // In production, send to your error reporting service
    console.log ('Error Report:', errorReport) ;

    // For now, just copy to clipboard
    navigator.clipboard.writeText (JSON.stringify (errorReport, null, 2) ) ;
    alert ('Error report copied to clipboard. Please send this to support.') ;
  };

  toggleDetails = () => {

    this.setState (prev => ({ showDetails: !prev.showDetails }) ) ;
  };

  render () {

    if (this.state.hasError) {

      const { error, errorInfo, errorId, showDetails } = this.state;

      return (<div
          role="button"
          className="min - h-screen bg - gradient - to - br from - slate - 900 via - blue - 900 to - slate - 900 flex items - center justify - center p - 4"
        >
          <div role="button" className="max - w-2xl w - full">
            <div
              role="button"
              className="bg - white / 10 backdrop - blur - lg rounded - xl p - 8 border border - white / 20"
            >
              {/* Error Icon */}
              <div role="button" className="text - center mb - 6">
                <div
                  role="button"
                  className="inline - flex items - center justify - center w - 16 h - 16 bg - red - 500 / 20 rounded - full mb - 4"
                >
                  <AlertTriangle className="w - 8 h - 8 text - red - 400" />
                </div>
                <h1 className="text - 2xl font - bold text - white mb - 2">
                  Oops ! Something went wrong
                </h1>
                <p className="text - gray - 300">
                  We've encountered an unexpected error. Our team has been
                  notified.
                </p>
              </div>

              {/* Error Details */}
              <div
                role="button"
                className="bg - white / 5 rounded - lg p - 4 mb - 6"
              >
                <div
                  role="button"
                  className="flex items - center justify - between mb - 3"
                >
                  <span className="text - sm font - medium text - gray - 300">
                    Error ID
                  </span>
                  <code className="text - xs text - zion - cyan bg - zion - cyan / 10 px - 2 py - 1 rounded">
                    {errorId}
                  </code>
                </div>
                <div role="button" className="text - sm text - gray - 400">
                  <p>
                    <strong > Message:</strong>{' '}
                    {error?.message || 'Unknown error'}
                  </p>
                  <p>
                    <strong > Time:</strong> {new Date () .toLocaleString () }
                  </p>
                </div>
              </div>

              {/* Action Buttons */}

              <div
                role="button"
                className="grid grid - cols - 1 md:grid - cols - 3 gap - 3 mb - 6"
              >
                <button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button"
                  onClick={this.handleRetry}
                  className="flex items - center justify - center gap - 2 px - 4 py - 3 bg - zion - cyan hover:bg - zion - cyan - dark text - white rounded - lg font - medium transition - colors"
                >
                  <RefreshCw className="w - 4 h - 4" />
                  Try Again
                </button>

                <button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button"
                  onClick={this.handleGoHome}
                  className="flex items - center justify - center gap - 2 px - 4 py - 3 bg - white / 10 hover:bg - white / 20 text - white rounded - lg font - medium transition - colors"
                >
                  <Home className="w - 4 h - 4" />
                  Go Home
                </button>

                <button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button"
                  onClick={this.handleReportError}
                  className="flex items - center justify - center gap - 2 px - 4 py - 3 bg - white / 10 hover:bg - white / 20 text - white rounded - lg font - medium transition - colors"
                >
                  <Mail className="w - 4 h - 4" />
                  Report Error
                </button>
              </div>

              {/* Technical Details Toggle */}
              <div
                role="button"
                className="border - t border - white / 10 pt - 4"
              >
                <button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button"
                  onClick={this.toggleDetails}
                  className="flex items - center gap - 2 text - sm text - gray - 400 hover:text - white transition - colors"
                >
                  <Bug className="w - 4 h - 4" />
                  {showDetails ? 'Hide' : 'Show'} Technical Details
                </button>
              </div>

              {/* Technical Details */}
              {showDetails && (<div
                  role="button"
                  className="mt - 4 bg - black / 20 rounded - lg p - 4"
                >
                  <div role="button" className="space - y-4">
                    {error?.stack && (<div>
                        <h4 className="text - sm font - medium text - white mb - 2">
                          Stack Trace
                        </h4>
                        <pre className="text - xs text - gray - 300 bg - black / 30 p - 3 rounded overflow - x-auto">
                          {error.stack}
                        </pre>
                      </div>) }
                    {errorInfo?.componentStack && (<div>
                        <h4 className="text - sm font - medium text - white mb - 2">
                          Component Stack
                        </h4>
                        <pre className="text - xs text - gray - 300 bg - black / 30 p - 3 rounded overflow - x-auto">
                          {errorInfo.componentStack}
                        </pre>
                      </div>) }
                  </div>
                </div>) }

              {/* Help Section */}
              <div
                role="button"
                className="mt - 6 p - 4 bg - blue - 500 / 10 border border - blue - 500 / 20 rounded - lg"
              >
                <div role="button" className="flex items - start gap - 3">
                  <Shield className="w - 5 h - 5 text - blue - 400 mt - 0.5" />
                  <div>
                    <h4 className="text - sm font - medium text - blue - 300 mb - 1">
                      Need Help?
                    </h4>
                    <p className="text - xs text - blue - 200 / 80">
                      If this error persists, please contact our support team
                      with the Error ID above. We're here to help you get back
                      on track.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>) ;
    }

    return this.props.children;
  }
}
