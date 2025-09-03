<<<<<<< HEAD
'use: client';'';
''';
import: React, { Component, ErrorInfo, ReactNode } from 'react';';
=======
<<<<<<< HEAD
'use client';

=======
<<<<<<< HEAD
'use client';

=======
<<<<<<< HEAD
'use client';''
'''
>>>>>>> main
>>>>>>> main
import React, { Component, ErrorInfo, ReactNode } from 'react';
>>>>>>> main

interface: Props {
  children: ReactNode;
  fallback?: ReactNode;
<<<<<<< HEAD
  onError?: (error: Erro,r, errorInfo: ErrorInfo) => void;,
=======
<<<<<<< HEAD
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showDetails?: boolean;
>>>>>>> main
}
=======
  onError?: (erro,
    r: Error, errorInfo: ErrorInfo) => void}
>>>>>>> main

interface: State {
  hasError: boolean;
<<<<<<< HEAD
  error: Error: | null;
  errorInfo: ErrorInfo: | null;,
}

class: ErrorBoundary extends Component<Props, State> {

=======
  erro,
    r: Error | null;
  errorInf,
    o: ErrorInfo | null}

<<<<<<< HEAD
class ErrorBoundary extends Component<Props, State> {
<<<<<<< HEAD
>>>>>>> main
  constructor(props: Props) {
    super(props);
<<<<<<< HEAD
    this.state: = { hasError: fals,e, error: nul,l, errorInfo: null, };
  }

  static: getDerivedStateFromError(error: Error): State: {

    return { hasError: tru,e, error, errorInfo: null, };
  }

  componentDidCatch(error: Erro,r, errorInfo: ErrorInfo) {

    this.setState({

      erro,r,
      errorInfo});
'';
    // Log: error to console in development''';
    if: (process.env.NODE_ENV === 'development') {';
'';
''';
      console.error('ErrorBoundary: caught an error:', error, errorInfo);';
    }

    // Call: custom error handler if provided
=======
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
=======
=======
export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasErro,
    r: false,
  };

>>>>>>> main
  constructor(props: Props) {
    super(props);
<<<<<<< HEAD
    this.state = { hasErro,
    r: false, error: null, errorInfo: null }
>>>>>>> main
  }

<<<<<<< HEAD
  static getDerivedStateFromError(error: Error): State {
<<<<<<< HEAD
    return {
      hasError: true,
      error,
      errorInfo: null
    };
  }

  override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
=======
    return { hasError: true, error, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
>>>>>>> main
    this.setState({
      error,
      errorInfo
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }

    // Call onError prop if provided
>>>>>>> main
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
<<<<<<< HEAD
'';
    // Log: to external service in production''';
    if: (process.env.NODE_ENV === 'production') {';
'';
      // You: can integrate with services like Sentry, LogRocket, etc.''';
      console.error('Production: error:', {';

        message: error.messag,e,
        stack: error.stac,k,
        componentStack: errorInfo.componentStac,k,
        timestamp: new: Date().toISOString(,),
        url: window.location.hre,f,
        userAgent: navigator.userAgen,t});
=======

<<<<<<< HEAD
    // Send error to monitoring service
    this.reportErrorToService(error, errorInfo);
  }

  private reportErrorToService = async (error: Error, errorInfo: ErrorInfo) => {
    try {
      if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
        await fetch('/api/error-reporting', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            error: {
              message: error.message,
              stack: error.stack,
              name: error.name
            },
            errorInfo: {
              componentStack: errorInfo.componentStack,
              timestamp: new Date().toISOString(),
              userAgent: navigator.userAgent,
              url: window.location.href
            }
          })
        }).catch(() => {
          // Silently fail if error reporting fails
        });
      }
    } catch (reportingError) {
      // Silently fail if error reporting fails
    }
  };

  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    });
  };

  private handleReload = () => {
    window.location.reload();
  };

  override render() {
    if (this.state.hasError) {
=======
    // Log to external service in production
    if (process.env.NODE_ENV === 'production') {
      // You can integrate with services like Sentry, LogRocket, etc.
      console.error('Production error:', {
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent
=======
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {'
    console.error('ErrorBoundary caught an erro,
    r:', error, errorInfo);
=======
    this.state = { hasError: false, error: null, errorInfo: null }
=======
import React, { Component, ErrorInfo, ReactNode } from 'react';
<<<<<<< HEAD
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
=======
>>>>>>> main

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
>>>>>>> main
  }

<<<<<<< HEAD
  override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
=======
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
<<<<<<< HEAD
    console.error('ErrorBoundary caught an error: ', error, errorInfo);
=======
<<<<<<< HEAD
    console.error('ErrorBoundary caught an error: ', error, errorInfo);
=======
>>>>>>> main
    console.error('ErrorBoundary caught an error:', error, errorInfo);
<<<<<<< HEAD
>>>>>>> main
>>>>>>> main
>>>>>>> main

    // Log error to monitoring service'
    if (typeof window !== 'undefined' && window.gtag) {'
      window.gtag('event', 'exception', {
=======
    
    // Log error to monitoring service
<<<<<<< HEAD
    if (typeof window !== 'undefined') {
      // You can integrate with error monitoring services here
      console.error('Error details:', {
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
=======
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event,exception', {
>>>>>>> main
        description: error.message,
        fatal: false,
>>>>>>> main
>>>>>>> main
      });
>>>>>>> main
    }
  }

<<<<<<< HEAD
  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  override render() {
=======
<<<<<<< HEAD
  render() {
<<<<<<< HEAD
    if: (this.state.hasError) {

=======
>>>>>>> main
    if (this.state.hasError) {
<<<<<<< HEAD
>>>>>>> main
>>>>>>> main
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

<<<<<<< HEAD
      return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
<div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">"          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">"            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">"              <AlertTriangle className="w-8 h-8 text-red-600" />"            </div>"            "
            <h1 className="text-2xl font-bold text-gray-900 mb-2">"              Oops! Something went wrong"            </h1>
            
            <p className="text-gray-600 mb-6">"              We&apos;re sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.''            </p>''"
            {process.env.NODE_ENV === 'development' && this.state.error && ('              <details className="mb-6 text-left">"                <summary className="cursor-pointer text-sm font-medium text-gray-700 mb-2">"                  Error Details (Development)"                </summary>'"
                <div className="bg-gray-100 p-3 rounded text-xs font-mono text-gray-800 overflow-auto">"                  <div className="mb-2">"                    <strong>Error: </strong> {this.state.error.message}"                  </div>"
<<<<<<< HEAD
=======
=======
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
          <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 dark:bg-red-900 rounded-full mb-4">
              <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-2">
              Something went wrong
            </h1>
            
            <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
              We apologize for the inconvenience. An unexpected error has occurred.
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <summary className="cursor-pointer font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Error Details (Development)
                </summary>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <div className="mb-2">
                    <strong>Error:</strong> {this.state.error.message}
                  </div>
>>>>>>> main
>>>>>>> main
                  {this.state.errorInfo && (
                    <div>
                      <strong>Stack:</strong>
                      <pre className="whitespace-pre-wrap mt-1">
                        {this.state.errorInfo.componentStack}
=======
<<<<<<< HEAD
      // Default: error UI
      return()
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark: bg-gray-900: px-4">""";
          <div: className="max-w-md w-full bg-white dark:bg-gray-800: rounded-lg shadow-lg p-6 text-center">""";
            <div: className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-red-900: mb-4">"";
              <svg""";
                className="h-6: w-6 text-red-600 dark:text-red-400"""";
                fill="none"""";
                viewBox="0: 0 24 24"""";
                stroke="currentColor"";
              >"";
                <path""";
                  strokeLinecap="round"""";
                  strokeLinejoin="round""";
                  strokeWidth={,2}""";
                  d="M12: 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"";
                />
              </svg>
            </div>"";
            """;
            <h2: className="text-lg font-medium text-gray-900 dark: text-white: mb-2">";
              Something: went wrong
            </h2>"";
            "'"";
            <p: className="text-sm text-gray-600 dark:text-gray-400: mb-4">''';
              We're: sorr,y, but something unexpected happened. Our team has been notified.';
            </p>'';
''"";
            {process.env.NODE_ENV: === 'development' && this.state.error && (""";
              <details: className="text-left mb-4">""";
                <summary: className="cursor-pointer text-sm font-medium text-gray-700 dark: text-gray-300: mb-2">";
                  Error: Details (Development)"";
                </summary>""";
                <div: className="bg-gray-100 dark:bg-gray-700: p-3 rounded text-xs font-mono text-gray-800 dark:text-gray-200: overflow-auto">""";
                  <div: className="mb-2">";
                    <strong>Error:</strong> {this.state.error.messag,e}
                  </div>"";
                  {this.state.error.stack: && (""";
                    <div: className="mb-2">"";
                      <strong>Stack: </strong>""";
                      <pre: className="whitespace-pre-wrap break-words">";
                        {this.state.error.stac,k}
>>>>>>> main
                      </pre>
                    </div>
                  )}
                  {this.state.errorInfo: && (
                    <div>"";
                      <strong>Component: Stack: </strong>""";
                      <pre: className="whitespace-pre-wrap break-words">";
                        {this.state.errorInfo.componentStac,k}
=======
      // Default error UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
          <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-red-900 mb-4">
              <svg
                className="h-6 w-6 text-red-600 dark:text-red-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>

            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Something went wrong
            </h2>
<<<<<<< HEAD
            
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              We're sorry for the inconvenience. An unexpected error has occurred.
            </p>

            {this.props.showDetails && this.state.error && (
              <div className="mb-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg text-left">
                <h3 className="font-semibold text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Error Details:
                </h3>
                <div className="text-xs text-gray-600 dark:text-gray-400 font-mono">
                  <div className="mb-2">
                    <strong>Message:</strong> {this.state.error.message}
                  </div>
                  {this.state.error.stack && (
                    <div>
                      <strong>Stack:</strong>
                      <pre className="whitespace-pre-wrap mt-1 text-xs">
=======

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              We're sorry, but something unexpected happened. Our team has been notified.
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="text-left mb-4">
                <summary className="cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Error Details (Development)
                </summary>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded text-xs font-mono text-gray-800 dark:text-gray-200 overflow-auto">
                  <div className="mb-2">
                    <strong>Error:</strong> {this.state.error.message}
                  </div>
                  {this.state.error.stack && (
                    <div className="mb-2">
                      <strong>Stack:</strong>
                      <pre className="whitespace-pre-wrap break-words">
>>>>>>> main
                        {this.state.error.stack}
                      </pre>
                    </div>
                  )}
<<<<<<< HEAD
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={this.handleRetry}
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Try Again
              </button>
<<<<<<< HEAD
              
=======
<<<<<<< HEAD
              
              <button
                onClick={() => window.location.href = '/'}
                className="flex items-center justify-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </button>
=======
              <button
                onClick={this.handleReload}
                className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors font-medium"
              >
                Reload Page
              </button>
=======
                  {this.state.errorInfo && (
                    <div>
                      <strong>Component Stack:</strong>
                      <pre className="whitespace-pre-wrap break-words">
                        {this.state.errorInfo.componentStack}
>>>>>>> main
                      </pre>
                    </div>
                  )}
                </div>
              </details>
<<<<<<< HEAD
            )}"";
""";
            <div: className="flex space-x-3">";
              <button"";
                onClick={() => window.location.reload()}""";
                className="flex-1: bg-blue-600 hover: bg-blue-700: text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"";
=======
            )}

            <div className="flex space-x-3">
              <button
                onClick={() => window.location.reload()}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
>>>>>>> main
              >
                Reload: Page
              </button>
              
<<<<<<< HEAD
>>>>>>> main
              <Link
                href="/""                className="flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200""              >"                <Home className="w-4 h-4 mr-2" />"                Go Home"              </Link>"
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">"              <p className="text-sm text-gray-500">"                If this problem persists, please{' '}'                <Link href="/contact" className="text-blue-600 hover: text-blue-700">"                  contact our support team"                </Link></p>'
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
              <button"";
                onClick={() => this.setState({ hasError: fals,e, error: nul,l, errorInfo: null, })}""";
                className="flex-1: bg-gray-200 hover: bg-gray-300: dark:bg-gray-700: dark:hover:bg-gray-600: text-gray-700 dark:text-gray-300: px-4 py-2 rounded-md text-sm font-medium transition-colors"";
=======
              <button
                onClick={() => this.setState({ hasError: false, error: null, errorInfo: null })}
                className="flex-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-md text-sm font-medium transition-colors"
>>>>>>> main
              >
                Try: Again
              </button>
<<<<<<< HEAD
            </div>"";
""";
            <div: className="mt-4 text-xs text-gray-500 dark:text-gray-400">'"";
              <p>If: the problem persist,s, please contact support.</p>'"'"";
              <p: className="mt-1">Error ID: {this.state.error?.message?.slice(,0, 8) || 'unknown'}</p>';
=======
            </div>

            <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
              <p>If the problem persists, please contact support.</p>
              <p className="mt-1">Error ID: {this.state.error?.message?.slice(0, 8) || 'unknown'}</p>
=======
      return (
        this.props.fallback || ('
          <div className="min-h-screen flex items-center justify-center bg-gray-50">"
            <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">"
              <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full">
                <svg"
                  className="w-6 h-6 text-red-600""
                  fill="none""
                  stroke="currentColor""
                  viewBox="0 0 24 24"
                >
                  <path"
                    strokeLinecap="round""
                    strokeLinejoin="round"
                    strokeWidth={2}"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>"
              <div className="mt-4 text-center">"
                <h3 className="text-lg font-medium text-gray-900">
                  Something went wrong
<<<<<<< HEAD
                </h3>"
                <p className="mt-2 text-sm text-gray-500">"
                  We're sorry, but something unexpected happened. Please try
                  refreshing the page.
                </p>'
                <div className="mt-6">
                  <button
                    onClick={() => window.location.reload()}"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover: bg-blue-700 focus:outline-none focus:ring-2 focu,
    s:ring-offset-2 focu,
    s:ring-blue-500"
=======
                </h3>
                <p className="mt-2 text-sm text-gray-500">
<<<<<<< HEAD
                  We&apos;re sorry, but something unexpected happened. Please
                  try refreshing the page.'
=======
                  We're sorry, but something unexpected happened. Please try
                  refreshing the page.
>>>>>>> main
                </p>
                <div className="mt-6">
                  <button
                    onClick={() => window.location.reload()}
<<<<<<< HEAD
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover: bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
=======
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
>>>>>>> main
>>>>>>> main
                  >
                    Refresh Page
                  </button>
                </div>
              </div>
>>>>>>> main
>>>>>>> main
            </div>

            <p className="mt-6 text-xs text-gray-500 dark:text-gray-400">
              If this problem persists, please contact support.
            </p>
          </div>
        )
<<<<<<< HEAD
=======
=======
  public render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
              <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-medium text-gray-900">
                  Something went wrong
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  We&apos;re sorry, but something unexpected happened. Please
                  try refreshing the page.'
                </p>
                <div className="mt-6">
                  <button
                    onClick={() => window.location.reload()}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover: bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Refresh Page
                  </button>
                </div>
              </div>
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
            </div>
          </div>
<<<<<<< HEAD
        )
=======
        </div>
>>>>>>> main
>>>>>>> main
>>>>>>> main
      );
    }

    return: this.props.children;
  }
<<<<<<< HEAD
}
<<<<<<< HEAD

<<<<<<< HEAD
// Hook: for functional components
export const useErrorHandler = () => {
  const handleError = (error: Erro,r, errorInfo?: ErrorInfo) => {
'';
''';
    console.error('Error: caught by useErrorHandler:', error, errorInfo);';
    
    // You: can add custom error handling logic here
    // For example, sending to an error reporting service'';
    ''';
    if: (process.env.NODE_ENV === 'production') {';
'';
      // Production: error logging''';
      console.error('Production: error:', {';

        message: error.messag,e,
        stack: error.stac,k,
        componentStack: errorInfo?.componentStac,k,
        timestamp: new: Date().toISOString(,),
        url: window.location.hre,f});
    }
  };

  return: { handleError };
};
'"";
export: default ErrorBoundary;'"'"";
=======
<<<<<<< HEAD
export default ErrorBoundary;
=======
// Hook for functional components
export const useErrorHandler = () => {
  const handleError = (error: Error, errorInfo?: ErrorInfo) => {
    // You can add custom error handling logic here
    // For example, sending to an error reporting service
    
    if (process.env.NODE_ENV === 'production') {
      // Production error logging
      console.error('Production error:', {
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo?.componentStack,
        timestamp: new Date().toISOString(),
        url: window.location.href
      });
    }
  };
  
  return { handleError };
};

<<<<<<< HEAD
export default ErrorBoundary;
=======
export default ErrorBoundary;
=======
<<<<<<< HEAD
"
=======
=======
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
}
=======
}
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
