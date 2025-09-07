
this.setState ({
  error
errorInfo 
})
//Call the onError prop if provided if (this.props.onError) {
  this.props.onError (error, errorInfo)
}//Log error to external service (e.g., Sentry) if (typeof window !== 'undefined && (window as any) .Sentry) {
  (window as any) .Sentry.captureException (error, {
  extra: errorInfo 
})
}
=======
use client';
import React, { Component, ErrorInfo, ReactNode } from 'react;
interface Props {
  children: ReactNode
  level?: string
  fallback?: ReactNode
interface Props {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}interface State  {hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}interface Props  {children: ReactNode;
  fallback?: ReactNode;
  } catch (error) {console.error("Error:, error)return res.status(500).json({ error: Internal server error" })} catch (error) {console.error("Error:, error)return res.status(500).json({ error: Internal server error" })}
}
  } catch (error) {console.error("Error:, error)return res.status(500).json({ error: Internal server error" })}
}
interface State  {hasError: boolean;
  error?: Error;interface State  {hasError: boolean;
  error?: Error;
interface Props  {children: ReactNode,level?: string;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;import { AlertTriangle, RefreshCw  } from lucide-react';
interface Props  {children: ReactNode;
  fallback?: ReactNode;
interface Props  {children: ReactNode;
  fallback?: ReactNode;
  } catch (error) {console.error("Error:, error)return res.status(500).json({ error: Internal server error" })} catch (error) {console.error("Error:, error)return res.status(500).json({ error: Internal server error" })}
}
  } catch (error) {console.error("Error:, error)return res.status(500).json({ error: Internal server error" })}
}
}
class ErrorBoundary extends Component<Props, State> {constructor(props: Props) {super(props)return { hasError: true, error }return { hasError: true, error }
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {return { hasError: true, error }return { hasError: true, error }
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {origin/automation-improvements-final;
    return { hasError: true, error }return { hasError: true, error }
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {console.error('Error caught by boundary:, error, errorInfo)this.setState({ursor/integrate-build-improve-and-re-verify-8f7d;
    // Log the error to console or error reporting service;
    console.error(ErrorBoundary caught an error:', error, errorInfo)this.setState({origin/automation-improvements-final;
      error,error_info;
    })// Log error for debugging in development;
    if (process.env.NODE_ENV === 'development) {// eslint-disable-next-line no-console;
      console.error(ErrorBoundary caught an error:', error, errorInfo)}
      error;
}class ErrorBoundary extends Component<Props, State> {constructor(props: Props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error: Error): State {return { hasError: true, error }}export class ErrorBoundary extends Component<Props, State> {public state: State = {hasError: false;
  }static getDerivedStateFromError(error: Error): State {return { hasError: true, error }hasError: false;
  }
  public static getDerivedStateFromError(error: Error): State {return { hasError: true, error }}componentDidCatch(error: Error, errorInfo: ErrorInfo) {console.error('ErrorBoundary caught an error:, error, errorInfo)this.setState({error,errorInfo;
    })// Call custom error handler if provided;
    if (this.props.onError) {this.props.onError(error, errorInfo)}
// Log to external service in production;
    if (process.env.NODE_ENV === production') {// Here you would typically send to an error reporting service;
      console.error('Production error:, error, errorInfo)componentDidCatch(error: Error, errorInfo: ErrorInfo) {console && console.error(Error caught by boundary:', error, errorInfo)this && this.setState({error,errorInfo;
    })// Call custom error handler if provided;
    if (this && this.props.onError) {this && this.props.onError(error, errorInfo)}
    // You can also log the error to an error reporting service here;
    // Example: logErrorToService(error, errorInfo)// Log error for debugging in development;
    if (process.env.NODE_ENV === 'development) {// eslint-disable-next-line no-console;
    // Log error for debugging in development;
    if (process.env.NODE_ENV === development') {console.error('ErrorBoundary caught an error:, error, errorInfo)}
  }
      // Fallback UI;
      return (<div className="min-h-screen flex items-center justify-center bg-gray-50>;
          <div className=max-w-md w-full bg-white shadow-lg rounded-lg p-6">;
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4>;
              <svg className=w-6 h-6 text-red-600" fill="none stroke=currentColor" viewBox="0 0 24 24>;
                <path strokeLinecap=round" strokeLinejoin="round strokeWidth={2} d=M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />;
              </svg>;
            </div>;
            <h2 className="text-xl font-semibold text-gray-900 text-center mb-2>;
              Something went wrong;
            </h2>;
            <p className=text-gray-600 text-center mb-6">;
              Were sorry, but something unexpected happened. Please try refreshing the page.;
            </p>;
            {process.env.NODE_ENV === 'development' && this.state.error && (<details className="text-left bg-white/5 rounded-xl p-6 mb-8 border border-white/10>;
                <summary className=text-white/80 font-medium cursor-pointer mb-4">;
                  Error Details (Development)</summary>;
                <div className="space-y-3 text-sm>;
                  <div>;
                    <strong className=text-red-400">Error:</strong>;
                    <pre className="mt-2 p-3 bg-red-500/10 rounded-lg overflow-x-auto text-red-300>;
                      {this.state.error.toString()}
                    </pre>;
                  </div>;
                  {this.state.errorInfo && (<div>;
                      <strong className=text-red-400">Stack Trace:</strong>;
                      <pre className="mt-2 p-3 bg-red-500/10 rounded-lg overflow-x-auto text-red-300 text-xs>;
                        {this.state.errorInfo.componentStack}
                      </pre>;
                    </div>;
                  )}                </div>;
              </details>;
            )}
            <div className=flex flex-col sm:flex-row gap-4 justify-center">;
  } catch (error) {console.error("Error:, error)return res.status(500).json({ error: Internal server error" })} catch (error) {console.error("Error:, error)return res.status(500).json({ error: Internal server error" })}
}
  } catch (error) {console.error("Error:, error)return res.status(500).json({ error: Internal server error" })}
}
    if (this.props.onError) {this.props.onError(error, errorInfo)}// Log to external service in production;
    if (process.env.NODE_ENV === production) {// Here you would typically send to an error reporting service;
      console.error('Production error:', error, errorInfo)// Log error for debugging in development;
    if (process.env.NODE_ENV === development) {console.error('Error details:', error)console.error(Error info:, errorInfo)}
  }render() {if (this.state.hasError) {// Fallback UI;
      return (<div className="min-h-screen flex items-center justify-center bg-gray-50>;
          <div className=max-w-md w-full bg-white shadow-lg rounded-lg p-6">;
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4>;
              <svg className=w-6 h-6 text-red-600" fill="none stroke=currentColor" viewBox="0 0 24 24>;
                <path strokeLinecap=round" strokeLinejoin="round strokeWidth={2} d=M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />;
              </svg>;
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {console.error('ErrorBoundary caught an error: ', error, errorInfo)// Log error to monitoring service;
    if (typeof window !== undefined && window.gtag) {window.gtag('event', exception, {description: error.message,fatal: false;
      })}
  }public render() {if (this.state.hasError) {return (this.props.fallback || (<div className="min-h-screen flex items-center justify-center bg-gray-50>;
            <div className=max-w-md w-full bg-white shadow-lg rounded-lg p-6">;
              <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full>;
                <svg;
                  className=w-6 h-6 text-red-600";
                  fill="none;
                  stroke=currentColor";
                  viewBox="0 0 24 24;
                >;
                  <path;
                    strokeLinecap=round";
                    strokeLinejoin="round;
                    strokeWidth={2}
                    d=M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z";
                  />;
                </svg>;
              </div>;
              <div className="mt-4 text-center>;
                <h3 className=text-lg font-medium text-gray-900">;
                  Something went wrong;
                </h3>;
                <p className="mt-2 text-sm text-gray-500>;
                  We&apos;re sorry, but something unexpected happened. Please;
                  try refreshing the page.'';
                </p>;
                <div className=mt-6">;
                  <button;
                    onClick={() => window.location.reload()}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover: bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500;
                  >;
                    Refresh Page;
                  </button>;
                </div>;
              </div>;
            </div>;
            <h2 className=text-xl font-semibold text-gray-900 text-center mb-2">;
              Something went wrong;
            </h2>;
            <p className="text-gray-600 text-center mb-6>;
              Were sorry, but something unexpected happened. Please try refreshing the page.;
            </p>;
            {process.env.NODE_ENV === development' && this.state.error && (<details className=text-left bg-white/5 rounded-xl p-6 mb-8 border border-white/10">;
                <summary className="text-white/80 font-medium cursor-pointer mb-4>;
                  Error Details (Development)</summary>;
                <div className=space-y-3 text-sm">;
                  <div>;
                    <strong className="text-red-400>Error:</strong>;
                    <pre className=mt-2 p-3 bg-red-500/10 rounded-lg overflow-x-auto text-red-300">;
                      {this.state.error.toString()}
                    </pre>;
                  </div>;
                  {this.state.errorInfo && (<div>;
                      <strong className="text-red-400>Stack Trace:</strong>;
                      <pre className=mt-2 p-3 bg-red-500/10 rounded-lg overflow-x-auto text-red-300 text-xs">;
                        {this.state.errorInfo.componentStack}
                      </pre>;
                    </div>;
                  )}                </div>;
              </details>;
            )}<div className="flex flex-col sm:flex-row gap-4 justify-center>;
}
  } catch (error) {console.error(Error:", error)return res.status(500).json({ error: "Internal server error })}
}
export default class ErrorBoundary extends Component<Props, State> {public state: State = {hasError: false;
  }public static getDerivedStateFromError(_: Error): State {return { hasError: true }} catch (error) {console.error(Error:", error)return res.status(500).json({ error: "Internal server error })} catch (error) {console.error(Error:", error)return res.status(500).json({ error: "Internal server error })}
}
  } catch (error) {console.error(Error:", error)return res.status(500).json({ error: "Internal server error })}
}
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {console.error('Uncaught error:, error, errorInfo)} catch (error) {console.error(Error:", error)return res.status(500).json({ error: "Internal server error })} catch (error) {console.error(Error:", error)return res.status(500).json({ error: "Internal server error })}
}
  } catch (error) {console.error(Error:", error)return res.status(500).json({ error: "Internal server error })}
}
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {// Only log to console in development;
    if (process.env.NODE_ENV === development') {// eslint-disable-next-line no-console;
      console.error('ErrorBoundary caught an error:, error, errorInfo)} catch (error) {console.error(Error:", error)return res.status(500).json({ error: "Internal server error })} catch (error) {console.error(Error:", error)return res.status(500).json({ error: "Internal server error })}<button;
                onClick={() => window && window.location.reload()}
                className=flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors";
              >;
                Refresh Page;
              </button>;
              <button;
      return this.props.fallback || (<div className="min-h-screen bg-slate-950 flex items-center justify-center>;
          <div className=text-center text-white max-w-md mx-auto p-6">;
            <div className="mb-6>;
              <div className=w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">;
                <span className="text-2xl>⚠️</span>;
              </div>;
              <h1 className=text-2xl font-bold mb-2">Something went wrong</h1>;
              <p className="text-slate-300 mb-6>;
                We&apos;re sorry, but something unexpected happened. Please try refreshing the page.;
              </p>;
            </div>;
            <div className=space-y-3">;
              <button;
                onClick={() => typeof window !== undefined' && window.location.reload()}className="w-full px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors font-semibold;
              >;
                Reload Page;
              </button>;
              <button;
                onClick={() => this.setState({ hasError: false })}onClick={() => this.setState({ hasError: false })  } catch (error) {console.error(Error:", error)return res.status(500).json({ error: "Internal server error })} catch (error) {console.error(Error:", error)return res.status(500).json({ error: "Internal server error })}
}
  } catch (error) {console.error(Error:", error)return res.status(500).json({ error: "Internal server error })}
}
              <button;
                onClick={() => this.setState({ hasError: false })}className=w-full px-6 py-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors font-semibold";
              >;
                Try Again;
              </button>;
            </div>;
            {process.env.NODE_ENV === 'development && this.state.error && (<details className="mt-4 p-4 bg-gray-100 rounded-md>;
                <summary className=cursor-pointer font-medium text-gray-700">;
                  Error Details (Development)</summary>;
                <pre className="mt-2 text-xs text-gray-600 overflow-auto>;
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
              <details className=mt-6 text-left">;
                <summary className="cursor-pointer text-sm text-slate-400 hover:text-slate-300>;
                  Error Details (Development)</summary>;
                <pre className=mt-2 p-4 bg-slate-800 rounded text-xs overflow-auto">;
                  {this.state.error.stack}
                </pre>;
              </details>;
            )}<details className="mt-6 text-left>;
                <summary className=cursor-pointer text-sm text-slate-400 hover:text-slate-300">;
                  Error Details (Development)</summary>;
                <pre className="mt-2 p-4 bg-slate-800 rounded text-xs overflow-auto>;
                  {this.state.error.stack  } catch (error) {console.error(Error:", error)return res.status(500).json({ error: "Internal server error })} catch (error) {console.error(Error:", error)return res.status(500).json({ error: "Internal server error })}
}
  } catch (error) {console.error(Error:", error)return res.status(500).json({ error: "Internal server error })}
}
                </pre>;
              </details>;
            )}
          </div>;
    // Log the error to an error reporting service;
    console && console.error(ErrorBoundary caught an error:', error, errorInfo)this && this.setState({ error, errorInfo })}
}
  } catch (error) {console.error(Error:", error)return res.status(500).json({ error: "Internal server error })}
}
  public render() {if (this.state.hasError) {return (<div className=min-h-screen bg-slate-950 flex items-center justify-center">;
          <div className="text-center text-white>;
            <h1 className=text-2xl font-bold mb-4">Something went wrong</h1>;
            <button;
              onClick={() => window.location.reload()  } catch (error) {console.error("Error:, error)return res.status(500).json({ error: Internal server error" })} catch (error) {console.error("Error:, error)return res.status(500).json({ error: Internal server error" })}
}
  } catch (error) {console.error("Error:, error)return res.status(500).json({ error: Internal server error" })}
}
              className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700;
            >;
              Reload Page;
            </button>;
ursor/automate-test-improve-and-merge-code-646c;
          </div>;
        </div>;
      )}ursor/automate-test-improve-and-merge-code-646c;
    return this.props.children;
  }
}export default ErrorBoundary;</div>;
        ))}return this.props.children;

'use client;

import React, { Component, ErrorInfo, ReactNode } from react';

interface Props {}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;

  constructor(props: Props) {
    super(props);
    this.state = { hasError: false }
  }

  constructor(props: Props) {
    super(props);
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:, error, errorInfo);
    
    this.setState({
      error,
      errorInfo
    });

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    }
  }

  render() {
    if (this.state.hasError) {

      return this.props.fallback || (
        <div className=min-h-screen bg-slate-950 flex items-center justify-center">
          <div className="text-center text-white max-w-md mx-auto p-6>
            <div className=mb-6">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4>
                <span className=text-2xl">⚠️</span>
              </div>
              <h1 className="text-2xl font-bold mb-2>Something went wrong</h1>
              <p className=text-slate-300 mb-6">
                We&apos;re sorry, but something unexpected happened. Please try refreshing the page.
              </p>
            </div>
            <div className="space-y-3>
              <button 
                onClick={() => typeof window !== undefined' && window.location.reload()} 
                className=w-full px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                <RefreshCw className="w-4 h-4 mr-2 />
                Refresh Page
              </button>

                className=w-full px-6 py-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors font-semibold"
              >
                <Home className="w-4 h-4 mr-2 />
                Go Home
              </button>
            </div>
            {process.env.NODE_ENV === 'development && this.state.error && (

              <details className=mt-6 text-left">
                <summary className="cursor-pointer text-sm text-slate-400 hover:text-slate-300>
                  Error Details (Development)
                </summary>
                <pre className=mt-2 p-4 bg-slate-800 rounded text-xs overflow-auto">
                  {this.state.error.stack}

                </pre>
              </details>
            )}
          </div>;
    // Log the error to an error reporting service;
    console && console.error(ErrorBoundary caught an error:', error, errorInfo);
    this && this.setState({ error, errorInfo });
  }
}
  } catch (error) {
    console.error("Error:, error);
    return res.status(500).json({ error: Internal server error" });
  }
}
  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center>
          <div className=text-center text-white">
            <h1 className="text-2xl font-bold mb-4>Something went wrong</h1>
            <button
              onClick={() => window.location.reload()  } catch (error) {
    console.error(Error:", error);
    return res.status(500).json({ error: "Internal server error });
    } catch (error) {
    console.error(Error:", error);
    return res.status(500).json({ error: "Internal server error });
  }
}
  } catch (error) {
    console.error(Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
