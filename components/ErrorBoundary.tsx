<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
main
pr-12243
=======

main

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======



main
pr-12243
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {

interface Props {;
  children: ReactNode;
  level?: string;
  fallback?: ReactNode;
<<<<<<< HEAD
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
=======
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
=======
"use client";
"
import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  children: ReactNode;
  fallback?: ReactNode;
<<<<<<< HEAD
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  onError?: (error: Error;, errorInfo: ErrorInfo) => void;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> db9cf4227efbedeeb7625bb65c8a05924d3d2398
}

interface State {}
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from 'react';
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  } catch (error) {
    console.error("Error: ";, error);
    return res.status(500).json({ error: "Internal server error" ;});
    } catch (error) {
    console.error("Error: ";, error);
    return res.status(500).json({ error: "Internal server error" ;});
  }
}
  } catch (error) {
    console.error("Error: ";, error);
    return res.status(500).json({ error: "Internal server error" ;});
  }
}
interface State {
  hasError: boolean;
  error?: Error;

interface State {
  hasError: boolean;
  error?: Error;
interface Props {
  children: ReactNode;,
  level?: string;
  fallback?: ReactNode;
  onError?: (error: Error;, errorInfo: ErrorInfo) => void;import { AlertTriangle, RefreshCw } from 'lucide-react';
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  } catch (error) {
    console.error("Error: ";, error);
    return res.status(500).json({ error: "Internal server error" ;});
    } catch (error) {
    console.error("Error: ";, error);
    return res.status(500).json({ error: "Internal server error" ;});
  }
}
  } catch (error) {
    console.error("Error: ";, error);
    return res.status(500).json({ error: "Internal server error" ;});
  }
}
}
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    return { hasError: true;, error };
    return { hasError: true;, error }
  }
  componentDidCatch(error: Error;, errorInfo: ErrorInfo) {
    return { hasError: true;, error };
    return { hasError: true;, error }
  }
<<<<<<< HEAD

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    this.setState({
=======
  componentDidCatch(error: Error;, errorInfo: ErrorInfo) {
origin/automation-improvements-final
    return { hasError: true;, error };
    return { hasError: true;, error }
  }
  componentDidCatch(error: Error;, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary: ';, error, errorInfo);    this.setState({
ursor/integrate-build-improve-and-re-verify-8f7d
    // Log the error to console or error reporting service
    console.error('ErrorBoundary caught an error: ';, error, errorInfo);
    
    this.setState({
origin/automation-improvements-final
>>>>>>> db9cf4227efbedeeb7625bb65c8a05924d3d2398
      error,
      error_info;
    });

<<<<<<< HEAD
    // Log error to external service (e.g., Sentry)
    if (typeof window !== 'undefined' && (window as any).Sentry) {
      (window as any).Sentry.captureException(error, { extra: errorInfo });
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
=======
    // Log error for debugging in development
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.error('ErrorBoundary caught an error: ';, error, errorInfo);
>>>>>>> db9cf4227efbedeeb7625bb65c8a05924d3d2398
    }
      error
}

<<<<<<< HEAD
    // Log to external service in production
    if (process.env.NODE_ENV === 'production') {
      // Here you would typically send to an error reporting service
      // eslint-disable-next-line no-console
      console.error('Production error:', error, errorInfo);
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

=======
<<<<<<< HEAD
class ErrorBoundary extends Component<Props, State> {}
  constructor(props: Props) {}
    super(props);
    this.state = { hasError: false ;};
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false;,
  };
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

<<<<<<< HEAD
  static getDerivedStateFromError(error: Error): State {}
    return { hasError: true, error };
    hasError: false
=======
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true;, error };
    hasError: false;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  }
  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true;, error }
origin/cursor/automate-test-fix-improve-and-merge-code-a7a7
  }

<<<<<<< HEAD
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {"
    console.error("ErrorBoundary caught an error:", error, errorInfo);

    this.setState({}
=======
  componentDidCatch(error: Error;, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error: ';, error, errorInfo);
    
    this.setState({
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      error,
      errorInfo,
    });

    // Call custom error handler if provided;
    if (this.props.onError) {}
      this.props.onError(error, errorInfo);
    }
// Log to external service in production
    if (process.env.NODE_ENV === 'production') {
      // Here you would typically send to an error reporting service
      console.error('Production error: ';, error, errorInfo);
  componentDidCatch(error: Error;, errorInfo: ErrorInfo) {;
    console && console.error('Error caught by boundary: ';, error, errorInfo);    this && this.setState({;
      error,;
      errorInfo;
    });
    // Call custom error handler if provided;
    if (this && this.props.onError) {;
      this && this.props.onError(error, errorInfo);
    }
    // You can also log the error to an error reporting service here
    // Example: logErrorToService(error;, errorInfo);
    // Log error for debugging in development
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
    // Log error for debugging in development
    if (process.env.NODE_ENV === 'development') {
       
origin/cursor/automate-test-improve-and-merge-code-2533
      console.error('ErrorBoundary caught an error: ';, error, errorInfo);
    }
  }
      // Fallback UI
>>>>>>> db9cf4227efbedeeb7625bb65c8a05924d3d2398
      return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-4">
              Something went wrong
            </h1>
            <p className="text-gray-300 mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page or contact support if the problem persists.
            </p>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="text-left bg-white/5 rounded-xl p-6 mb-8 border border-white/10">
                <summary className="text-white/80 font-medium cursor-pointer mb-4">
                  Error Details (Development)
                </summary>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong className="text-red-400">Error:</strong>
                    <pre className="mt-2 p-3 bg-red-500/10 rounded-lg overflow-x-auto text-red-300">
                      {this.state.error.toString()}
                    </pre>
                  </div>
                  {this.state.errorInfo && (
                    <div>
                      <strong className="text-red-400">Stack Trace:</strong>
                      <pre className="mt-2 p-3 bg-red-500/10 rounded-lg overflow-x-auto text-red-300 text-xs">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}                </div>
              </details>
            )}
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
  } catch (error) {
    console.error("Error: ";, error);
    return res.status(500).json({ error: "Internal server error" ;});
    } catch (error) {
    console.error("Error: ";, error);
    return res.status(500).json({ error: "Internal server error" ;});
  }
}
  } catch (error) {
    console.error("Error: ";, error);
    return res.status(500).json({ error: "Internal server error" ;});
  }
}
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false ;};
  } catch (error) {
    console.error("Error: ";, error);
    return res.status(500).json({ error: "Internal server error" ;});
    } catch (error) {
    console.error("Error: ";, error);
    return res.status(500).json({ error: "Internal server error" ;});
  }




    // Log error to external service (e.g., Sentry)
    if (typeof window !== 'undefined' && (window as any).Sentry) {
<<<<<<< HEAD
      (window as any).Sentry.captureException(error, { extra: errorInfo });    }
=======
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    this.setState({
      error,
      errorInfo
    });
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
      (window as any).Sentry.captureException(error, { extra: errorInfo ;});    }
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
<<<<<<< HEAD

// Log to external service in production
    if (process.env.NODE_ENV === 'production') {
      // Here you would typically send to an error reporting service
<<<<<<< HEAD
      console.error('Production error:', error, errorInfo);
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
      console.error('Production error: ';, error, errorInfo);
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

<<<<<<< HEAD
    // Log error for debugging in development"
    if (process.env.NODE_ENV === "development") {"
      console.error("Error details:", error);"
      console.error("Error info:", errorInfo);
=======
    // Log error for debugging in development
    if (process.env.NODE_ENV === 'development') {
<<<<<<< HEAD
      console.error('Error details:', error);
      console.error('Error info:', errorInfo);
<<<<<<< HEAD

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
      console.error('Error details: ';, error);
      console.error('Error info: ';, errorInfo);
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    }
  }

<<<<<<< HEAD
  render() {
    if (this.state.hasError) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      // Fallback UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error: ', error, errorInfo);
=======
  public componentDidCatch(error: Error;, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error: ';, error, errorInfo);
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

    // Log error to monitoring service
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message;,
        fatal: false;,
      });
    }
  }

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
                  try refreshing the page.''
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
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
            </div>
            <h2 className="text-xl font-semibold text-gray-900 text-center mb-2">
              Something went wrong
            </h2>
            <p className="text-gray-600 text-center mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="text-left mb-6">
                <summary className="text-gray-400 cursor-pointer mb-2">
                  Error Details (Development)
                </summary>
<<<<<<< HEAD
                <pre className="text-xs text-red-400 bg-black/20 p-3 rounded overflow-auto">
=======
                <div className="space-y-3 text-sm">
                  <div>
                    <strong className="text-red-400">Error:</strong>
                    <pre className="mt-2 p-3 bg-red-500/10 rounded-lg overflow-x-auto text-red-300">
                      {this.state.error.toString()}
                    </pre>
                  </div>
                  {this.state.errorInfo && (
                    <div>
                      <strong className="text-red-400">Stack Trace:</strong>
                      <pre className="mt-2 p-3 bg-red-500/10 rounded-lg overflow-x-auto text-red-300 text-xs">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}                </div>
              </details>
            )}

            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
}
  } catch (error) {
    console.error("Error: ";, error);
    return res.status(500).json({ error: "Internal server error" ;});
  }
}
export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false;
  };
  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true ;};
    } catch (error) {
    console.error("Error: ";, error);
    return res.status(500).json({ error: "Internal server error" ;});
    } catch (error) {
    console.error("Error: ";, error);
    return res.status(500).json({ error: "Internal server error" ;});
  }
}
  } catch (error) {
    console.error("Error: ";, error);
    return res.status(500).json({ error: "Internal server error" ;});
  }
}
  public componentDidCatch(error: Error;, errorInfo: ErrorInfo) {
    console.error('Uncaught error: ';, error, errorInfo);
    } catch (error) {
    console.error("Error: ";, error);
    return res.status(500).json({ error: "Internal server error" ;});
    } catch (error) {
    console.error("Error: ";, error);
    return res.status(500).json({ error: "Internal server error" ;});
  }
}
  } catch (error) {
    console.error("Error: ";, error);
    return res.status(500).json({ error: "Internal server error" ;});
  }
}
  componentDidCatch(error: Error;, errorInfo: ErrorInfo) {
    // Only log to console in development
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.error('ErrorBoundary caught an error: ';, error, errorInfo);
      } catch (error) {
    console.error("Error: ";, error);
    return res.status(500).json({ error: "Internal server error" ;});
    } catch (error) {
    console.error("Error: ";, error);
    return res.status(500).json({ error: "Internal server error" ;});
  }



              <button
                onClick={() => window && window.location.reload()}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors";
              >;
                Refresh Page;
              </button>;
              <button
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      return this.props.fallback || (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center">
          <div className="text-center text-white max-w-md mx-auto p-6">
            <div className="mb-6">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚠️</span>
              </div>
              <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
              <p className="text-slate-300 mb-6">
                We&apos;re sorry, but something unexpected happened. Please try refreshing the page.
              </p>
            </div>
            <div className="space-y-3">
              <button 
                onClick={() => typeof window !== 'undefined' && window.location.reload()} 
                className="w-full px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Reload Page
              </button>
<<<<<<< HEAD
                onClick={() => this.setState({ hasError: false })  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
=======
                onClick={() => this.setState({ hasError: false ;})  } catch (error) {
    console.error("Error: ";, error);
    return res.status(500).json({ error: "Internal server error" ;});
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    } catch (error) {
    console.error("Error: ";, error);
    return res.status(500).json({ error: "Internal server error" ;});
  }
}
  } catch (error) {
    console.error("Error: ";, error);
    return res.status(500).json({ error: "Internal server error" ;});
  }
}
              <button 
<<<<<<< HEAD
                onClick={() => this.setState({ hasError: false })} 
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
                onClick={() => this.setState({ hasError: false ;})} 
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                className="w-full px-6 py-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors font-semibold"
              >
                Try Again
              </button>
            </div>
            {process.env.NODE_ENV === 'development' && this.state.error && (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              <details className="mt-4 p-4 bg-gray-100 rounded-md">
                <summary className="cursor-pointer font-medium text-gray-700">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 text-xs text-gray-600 overflow-auto">
>>>>>>> db9cf4227efbedeeb7625bb65c8a05924d3d2398
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm text-slate-400 hover:text-slate-300">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 p-4 bg-slate-800 rounded text-xs overflow-auto">
                  {this.state.error.stack}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm text-slate-400 hover:text-slate-300">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 p-4 bg-slate-800 rounded text-xs overflow-auto">
                  {this.state.error.stack  } catch (error) {
    console.error("Error: ";, error);
    return res.status(500).json({ error: "Internal server error" ;});
    } catch (error) {
    console.error("Error: ";, error);
    return res.status(500).json({ error: "Internal server error" ;});
  }
}
  } catch (error) {
    console.error("Error: ";, error);
    return res.status(500).json({ error: "Internal server error" ;});
  }
}
<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                </pre>
              </details>
            )}

<<<<<<< HEAD
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={this.handleRetry}
                className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Try Again</span>
              </button>
              <button
                onClick={() => window.location.reload()}
                className="bg-transparent border border-white/20 text-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Refresh Page
              </button>
            </div>
          </div>
        </div>
=======



          </div>;
    // Log the error to an error reporting service;
    console && console.error('ErrorBoundary caught an error: ';, error, errorInfo);
    this && this.setState({ error, errorInfo });
  }
}
  } catch (error) {
    console.error("Error: ";, error);
    return res.status(500).json({ error: "Internal server error" ;});
  }
}
  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
            <button
              onClick={() => window.location.reload()  } catch (error) {
    console.error("Error: ";, error);
    return res.status(500).json({ error: "Internal server error" ;});
    } catch (error) {
    console.error("Error: ";, error);
    return res.status(500).json({ error: "Internal server error" ;});
  }
}
  } catch (error) {
    console.error("Error: ";, error);
    return res.status(500).json({ error: "Internal server error" ;});
  }
}
              className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Reload Page
            </button>
main
main
<<<<<<< HEAD
pr-12243
<<<<<<< HEAD
=======
  render() {}
    if (this.state.hasError) {}
      return (
        this.props.fallback || ("
          <div className="min-h-screen bg-slate-950 flex items-center justify-center">"
            <div className="text-center text-white max-w-md mx-auto p-6">"
              <div className="mb-6">"
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">"
                  <span className="text-2xl">⚠️</span>
                </div>"
                <h1 className="text-2xl font-bold mb-2">
                  Something went wrong;
                </h1>"
                <p className="text-slate-300 mb-6">
                  We&apos;re sorry, but something unexpected happened. Please;
                  try refreshing the page.
                </p>
              </div>"
              <div className="space-y-3">
                <button;
                  onClick={() =>"
                    typeof window !== "undefined" && window.location.reload()
                  }"
                  className="w-full px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Reload Page;
                </button>
                <button;
                  onClick={() => this.setState({ hasError: false })}"
                  className="w-full px-6 py-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors font-semibold"
                >
                  Try Again;
                </button>
              </div>"
              {process.env.NODE_ENV === "development" && this.state.error && ("
                <details className="mt-6 text-left">"
                  <summary className="cursor-pointer text-sm text-slate-400 hover:text-slate-300">
                    Error Details (Development)
                  </summary>"
                  <pre className="mt-2 p-4 bg-slate-800 rounded text-xs overflow-auto">
                    {this.state.error.stack}
                  </pre>
                </details>
              )}
            </div>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

=======
                </pre>
              </details>
            )}
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          </div>
        )
>>>>>>> db9cf4227efbedeeb7625bb65c8a05924d3d2398
      );
    }

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    return this.props.children;
  }
}
=======
<<<<<<< HEAD
=======
    return this.props.children;
  }
}
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

<<<<<<< HEAD
export default ErrorBoundary;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
pr-12243

    return this && this.props.children;
  }
}

class ErrorBoundary extends Component<Props, State> {;
  constructor(props: Props) {;
    super(props);
    this && this.state = { hasError: false ;};

}
  handleRetry = () => {this.setState({ hasError: false;, error: undefined;, errorInfo: undefined ;});
}
        <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">;
          <div className="max-w-md w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">;
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">;
              <AlertTriangle className="w-8 h-8 text-red-400" />;
            <details style={{ margin_top: '20px';, text_align: 'left' ;}}>;
              <summary > Error Details (Development)</summary>;
              <pre style={{
                background_color: '#f5f5f5';,
                padding: '10px';,
                border_radius: '4px';,
                overflow: 'auto';,
                font_size: '12px';
              }}>;
                {this.state.error.to_string ()}
                {this.state.error_info?.component_stack}
              </pre>;
            </details>)}
        </div>);
    }
    return this.props.children;
  }
}
class ErrorBoundary extends Component < Props, State> {
  constructor (props: Props) {
    super (props);
    this.state = { has_error: false ;}
}
  static getDerivedStateFromError (error: Error): State {
    return { has_error: true;, error }
}
  componentDidCatch (error: Error;, error_info: ErrorInfo) {
    console.error ('ErrorBoundary caught an error: ';, error, error_info);
    this.set_state ({ error, error_info });
}
  handle_retry = () => {
    this.set_state ({ has_error: false;, error: undefined;, error_info: undefined ;});
}
  render () {
    // Check condition
if ( {) {
  $2
}
      // Check condition
if ( {) {
  $2
}
        return this.props.fallback;
}
      return (
        <div className="min - h-screen bg - gray - 900 flex items - center justify - center px - 4">;
          <div className="max - w-md w - full bg - white / 5 backdrop - blur - sm border border - white / 10 rounded - 2xl p - 8 text - center">;
            <div className="w - 16 h - 16 bg - red - 500 / 20 rounded - full flex items - center justify - center mx - auto mb - 6">;
              <AlertTriangle className="w - 8 h - 8 text - red - 400" />;
            </div>;
            <h1 className="text - 2xl font - bold text - white mb - 4">;
              Something went wrong;
            </h1>;
            <p className="text - gray - 300 mb - 6">;
              We're sorry, but something unexpected happened. Please try refreshing the page or contact support if the problem persists.;
            </p>;
              <details className="text-left mb-6">;
                <summary className="text-gray-400 cursor-pointer mb-2">;
                  Error Details (Development);
                </summary>;
                <pre className="text-xs text-red-400 bg-black/20 p-3 rounded overflow-auto">;
                  {this && this.state.error && error.toString()}
                  {this && this.state.errorInfo?.componentStack}
                </pre>;
              </details>;
            )}
            <div className="flex flex-col sm:flex-row gap-4">;
              <button
                onClick={this && this.handleRetry}
                className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">;
                <RefreshCw className="w-4 h-4" />;
                <span>Try Again</span>;
              </button>;
              <button
                onClick={() => window && window.location.reload()}
                className="bg-transparent border border-white/20 text-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold transition-colors duration-200">;
;
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="text - left mb - 6">;
                <summary className="text - gray - 400 cursor - pointer mb - 2">;
                  Error Details (Development);
                </summary>;
                <pre className="text - xs text - red - 400 bg - black / 20 p - 3 rounded overflow - auto">;
                  {this.state.error.to_string ()}
                  {this.state.error_info?.component_stack}
                </pre>;
              </details>)}
            <div className="flex flex - col sm:flex - row gap - 4">;
              <button;
                on_click={this.handle_retry}
                className="flex items - center justify - center space - x-2 bg - blue - 600 hover:bg - blue - 700 text - white px - 6 py - 3 rounded - lg font - semibold transition - colors duration - 200">;
                <RefreshCw className="w - 4 h - 4" />;
                <span > Try Again</span>;
              </button>;
              <button;
                on_click={() => window.location.reload ()}
                className="bg - transparent border border - white / 20 text - white hover:bg - white / 10 px - 6 py - 3 rounded - lg font - semibold transition - colors duration - 200">;
                Refresh Page;
              </button>;
            </div>;
          </div>;
        </div>);
}
        </div>
      );
      } catch (error) {
    console.error("Error: ";, error);
    return res.status(500).json({ error: "Internal server error" ;});
    } catch (error) {
    console.error("Error: ";, error);
    return res.status(500).json({ error: "Internal server error" ;});
  }
}
}
}
  } catch (error) {
    console.error("Error: ";, error);
    return res.status(500).json({ error: "Internal server error" ;});
  }
}
    return this.props.children;
    } catch (error) {
    console.error("Error: ";, error);
    return res.status(500).json({ error: "Internal server error" ;});
    } catch (error) {
    console.error("Error: ";, error);
    return res.status(500).json({ error: "Internal server error" ;});
  }
}
  } catch (error) {
    console.error("Error: ";, error);
    return res.status(500).json({ error: "Internal server error" ;});
  }
}
  } catch (error) {
    console.error("Error: ";, error);
    return res.status(500).json({ error: "Internal server error" ;});
    } catch (error) {
    console.error("Error: ";, error);
    return res.status(500).json({ error: "Internal server error" ;});
  }
}
  } catch (error) {
    console.error("Error: ";, error);
    return res.status(500).json({ error: "Internal server error" ;});
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
main
<<<<<<< HEAD
pr-12243
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======


main
pr-12243
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    return this.props.children;
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export default ErrorBoundary;
=======
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
main
main
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
<<<<<<< HEAD
pr-12243
<<<<<<< HEAD
=======
export default ErrorBoundary;
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
export default ErrorBoundary;
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> db9cf4227efbedeeb7625bb65c8a05924d3d2398
