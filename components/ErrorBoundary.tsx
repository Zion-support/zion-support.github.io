<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
'use client';

;
import React, { Component, ErrorInfo, ReactNode } from 'react';
;

interface Props {
<<<<<<< HEAD

<<<<<<< HEAD
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
'use client';
import React, { Component, ErrorInfo, ReactNode } from 'react';
interface Props {
  children: ReactNode;
  level?: string;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;import { AlertTriangle, RefreshCw } from 'lucide-react';
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
=======
interface Props {;
  children: ReactNode;
  level?: string;
  fallback?: ReactNode;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


}


import React, { Component, ErrorInfo, ReactNode } from 'react';
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}


interface State {

interface State {;
  hasError: boolean;
  error?: Error;



<<<<<<< HEAD
}

}

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======

interface Props {;
  children: ReactNode;
  level?: string;
  fallback?: ReactNode;


}


=======
import React, { Component, ErrorInfo, ReactNode } from 'react';
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
interface State {
=======

interface State {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { Component, ErrorInfo, ReactNode } from 'react';
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
interface State {
  hasError: boolean;
  error?: Error;
<<<<<<< HEAD
  errorInfo?: ErrorInfo;
import React, { Component, ErrorInfo, ReactNode } from 'react';
interface Props {
  children: ReactNode,
  fallback?: ReactNode;
}

<<<<<<< HEAD
interface State {
  hasError: boolean,
  error?: Error;
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
=======





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this && this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: Error): State {
<<<<<<< HEAD
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
class ErrorBoundary extends Component<Props, State> {;
  constructor(props: Props) {;
    super(props);
    this && this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {;
    // Update state so the next render will show the fallback UI;
<<<<<<< HEAD
    // Update state so the next render will show the fallback UI
    // Update state so the next render will show the fallback UI
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return { hasError: true, error };


    return { hasError: true, error };

    return { hasError: true, error }
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    return { hasError: true, error }
origin/main
=======
  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    // Update state so the next render will show the fallback UI
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
    return { hasError: true, error };
    return { hasError: true, error }
>>>>>>> origin/main
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
=======
>>>>>>> origin/automation-improvements-final
    return { hasError: true, error };
    return { hasError: true, error }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
origin/automation-improvements-final
    return { hasError: true, error };
    return { hasError: true, error }
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);    this.setState({
ursor/integrate-build-improve-and-re-verify-8f7d
    // Log the error to console or error reporting service
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    this.setState({
<<<<<<< HEAD
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36




<<<<<<< HEAD


origin/automation-improvements-final
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      error,
      error_info;
    });

<<<<<<< HEAD

=======
origin/automation-improvements-final
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      error,
      error_info;
    });

    // You can also log the error to an error reporting service here
    // Example: logErrorToService(error, errorInfo);
<<<<<<< HEAD
=======
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Log error for debugging in development
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
<<<<<<< HEAD
<<<<<<< HEAD
    console.error('Error caught by boundary:', error, errorInfo);    this.setState({
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


      error
      errorInfo
    });

    console.error('Error caught by boundary:', error, errorInfo);    this.setState({
      error
      errorInfo
    });
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
    console.error('Error caught by boundary:', error, errorInfo);    this.setState({
<<<<<<< HEAD
=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
    console.error('Error caught by boundary:', error, errorInfo);    this.setState({
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      error
      errorInfo
    });
    // Log error to external service (e.g., Sentry)
    if (typeof window !== 'undefined' && (window as any).Sentry) {
      (window as any).Sentry.captureException(error, { extra: errorInfo });    }
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
// Log to external service in production
    if (process.env.NODE_ENV === 'production') {
      // Here you would typically send to an error reporting service
      console.error('Production error:', error, errorInfo);
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {;
    console && console.error('Error caught by boundary:', error, errorInfo);    this && this.setState({;
      error,;
      errorInfo;
    });
    // Log error to external service (e && e.g., Sentry);
    if (typeof window !== 'undefined' && (window as any).Sentry) {;
      (window as any).Sentry && Sentry.captureException(error, { extra: errorInfo });    }
    // Call custom error handler if provided;
    if (this && this.props.onError) {;
      this && this.props.onError(error, errorInfo);
    }
<<<<<<< HEAD
<<<<<<< HEAD
    }

    }
origin/main
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Log to external service in production;
    if (process && process.env.NODE_ENV === 'production') {;
      // Here you would typically send to an error reporting service;
      console && console.error('Production error:', error, errorInfo);

    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // You can also log the error to an error reporting service here
    // Example: logErrorToService(error, errorInfo);
    // Log error for debugging in development
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
<<<<<<< HEAD
<<<<<<< HEAD
origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final
  }
  handleReload = () => {
    window.location.reload();
  }
  handleGoHome = () => {
    window.location.href = '/';  }
  render() {
    if (this.state.hasError) {
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
=======

>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
  }


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> origin/automation-improvements-final
  }
  handleReload = () => {
    window.location.reload();
  }
  handleGoHome = () => {
    window.location.href = '/';  }
  render() {
    if (this.state.hasError) {
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Fallback UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 text-center mb-2">
              Something went wrong
            </h2>
            <p className="text-gray-600 text-center mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page.
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
<<<<<<< HEAD

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

<<<<<<< HEAD
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

<<<<<<< HEAD
  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);    this.setState({
      error,
      errorInfo
    });

    // Log error to external service (e.g., Sentry)
    if (typeof window !== 'undefined' && (window as any).Sentry) {
      (window as any).Sentry.captureException(error, { extra: errorInfo });    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

// Log to external service in production
    if (process.env.NODE_ENV === 'production') {
      // Here you would typically send to an error reporting service
      console.error('Production error:', error, errorInfo);
    }
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';  };

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 text-center mb-2">
              Something went wrong
            </h2>
            <p className="text-gray-600 text-center mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page.
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

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };
  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Only log to console in development
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.error('ErrorBoundary caught an error:', error, errorInfo);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
=======
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center">
          <div className="text-center text-white max-w-md mx-auto p-6">
            <div className="mb-6">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚠️</span>
              </div>
              <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
              <p className="text-slate-300 mb-6">
                We're sorry, but something unexpected happened. Please try refreshing the page.
              </p>
            </div>
            <div className="space-y-3">
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <button
                onClick={() => typeof window !== 'undefined' && window.location.reload()  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="w-full px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Reload Page
              </button>
              <button
                onClick={() => this.setState({ hasError: false, error: undefined, errorInfo: undefined })}
                className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
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
              <button 
                onClick={() => this.setState({ hasError: false })} 
                className="w-full px-6 py-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors font-semibold"
<<<<<<< HEAD
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
=======





=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                onClick={() => this.setState({ hasError: false })  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="w-full px-6 py-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors font-semibold"
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              >
                Try Again
              </button>
            </div>
            {process.env.NODE_ENV === 'development' && this.state.error && (
<<<<<<< HEAD
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <details className="mt-4 p-4 bg-gray-100 rounded-md">
                <summary className="cursor-pointer font-medium text-gray-700">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 text-xs text-gray-600 overflow-auto">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
<<<<<<< HEAD
=======

=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm text-slate-400 hover:text-slate-300">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 p-4 bg-slate-800 rounded text-xs overflow-auto">
                  {this.state.error.stack}
<<<<<<< HEAD
=======





=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm text-slate-400 hover:text-slate-300">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 p-4 bg-slate-800 rounded text-xs overflow-auto">
                  {this.state.error.stack  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm text-slate-400 hover:text-slate-300">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 p-4 bg-slate-800 rounded text-xs overflow-auto">
                  {this.state.error.stack  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                </pre>
              </details>
                onClick={() => this && this.setState({ hasError: false, error: undefined, errorInfo: undefined })}
                className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors";
              >;
                Try Again;
              </button>;
            </div>;
            {process && process.env.NODE_ENV === 'development' && this && this.state.error && (;
              <details className="mt-4 p-4 bg-gray-100 rounded-md">;
                <summary className="cursor-pointer font-medium text-gray-700">;
                  Error Details (Development);
                </summary>;
                <pre className="mt-2 text-xs text-gray-600 overflow-auto">;
                  {this && this.state.error && error.toString()}
                  {this && this.state.errorInfo?.componentStack}
                </pre>;
              </details>;
            )}
          </div>;
    // Log the error to an error reporting service;
    console && console.error('ErrorBoundary caught an error:', error, errorInfo);
    this && this.setState({ error, errorInfo });
  }

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
    // Log error to external service (e.g., Sentry);
    // Check condition
if (.Sentry) {) {
  $2
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </pre>
              </details>
            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
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
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Reload Page
            </button>
          </div>
    // Log the error to an error reporting service
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ error, errorInfo });
  }
  handle_reload = () => {
    window.location.reload ();
  }
;
  handleGoHome = () => {
    window.location.href = '/';  }
;
  render () {
    // Check condition
if ( {) {
  $2
}
      // Fallback UI;
      return (
        <div className="min - h-screen flex items - center justify - center bg - gray - 50">;
          <div className="max - w-md w - full bg - white shadow - lg rounded - lg p - 6">;
            <div className="flex items - center justify - center w - 12 h - 12 mx - auto bg - red - 100 rounded - full mb - 4">;
              <svg className="w - 6 h - 6 text - red - 600" fill="none" stroke="current_color" view_box="0 0 24 24">;
                <path stroke_linecap="round" stroke_linejoin="round" stroke_width={2} d="M12 9v2m0 4h.01m - 6.938 4h13.856c1.54 0 2.502 - 1.667 1.732 - 2.5L13.732 4c-.77-.833 - 1.964-.833 - 2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />;
              </svg>;
            </div>;
            <h2 className="text - xl font - semibold text - gray - 900 text - center mb - 2">;
              Something went wrong;
            </h2>;
            <p className="text - gray - 600 text - center mb - 6">;
              We're sorry, but something unexpected happened. Please try refreshing the page.;
            </p>;
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="text - left bg - white / 5 rounded - xl p - 6 mb - 8 border border - white / 10">;
                <summary className="text - white / 80 font - medium cursor - pointer mb - 4">;
                  Error Details (Development);
                </summary>;
                <div className="space - y-3 text - sm">;
                  <div>;
                    <strong className="text - red - 400">Error:</strong>;
                    <pre className="mt - 2 p - 3 bg - red - 500 / 10 rounded - lg overflow - x-auto text - red - 300">;
                      {this.state.error.to_string ()}
                    </pre>;
                  </div>;
                  {this.state.error_info && (
                    <div>;
                      <strong className="text - red - 400">Stack Trace:</strong>;
                      <pre className="mt - 2 p - 3 bg - red - 500 / 10 rounded - lg overflow - x-auto text - red - 300 text - xs">;
                        {this.state.error_info.component_stack}
                      </pre>;
                    </div>)}                </div>;
              </details>)}
            <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
              <button;
                on_click={() => window.location.reload ()}
                className="flex - 1 bg - blue - 600 text - white px - 4 py - 2 rounded - md hover:bg - blue - 700 transition - colors";
              >;
                Refresh Page;
              </button>;
              <button;
                on_click={() => this.set_state ({ has_error: false, error: undefined, error_info: undefined })}
                className="flex - 1 bg - gray - 200 text - gray - 800 px - 4 py - 2 rounded - md hover:bg - gray - 300 transition - colors";
              >;
                Try Again;
              </button>;
            </div>;
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt - 4 p - 4 bg - gray - 100 rounded - md">;
                <summary className="cursor - pointer font - medium text - gray - 700">;
                  Error Details (Development);
                </summary>;
                <pre className="mt - 2 text - xs text - gray - 600 overflow - auto">;
                  {this.state.error.to_string ()}
                  {this.state.error_info?.component_stack}
                </pre>;
              </details>)}
          </div>;
    // Log the error to an error reporting service;
    console.error ('ErrorBoundary caught an error:', error, error_info);
    this.set_state ({ error, error_info });
  }
  render () {
    // Check condition
if ( {) {
  $2
}
      // You can render any custom fallback UI;
      return this.props.fallback || (
        <div style={{
          padding: '20px',
          text_align: 'center',
          border: '1px solid #ff6b6b',
          border_radius: '8px',
          background_color: '#ffe0e0',
          margin: '20px';
        }}>;
          <h2 > Something went wrong.</h2>;
          <p > We're sorry, but something unexpected happened.</p>;
          <button;
            on_click={() => window.location.reload ()}
            style={{
              padding: '10px 20px',
              background_color: '#ff6b6b',
              color: 'white',
              border: 'none',
              border_radius: '4px',
              cursor: 'pointer';
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            }}
          >;
            Reload Page;
          </button>;
          {process.env.NODE_ENV === 'development' && this.state.error && (
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  render() {;
    if (this && this.state.hasError) {;
      // You can render any custom fallback UI;
      return this && this.props.fallback || (;
        <divstyle={{ 
          padding: '20px', 
          textAlign: 'center',
          border: '1px solid #ff6b6b',
          borderRadius: '8px',
          backgroundColor: '#ffe0e0',
          margin: '20px'
        }}>;
          <h2>Something went wrong.</h2>;
          <p>We're sorry, but something unexpected happened.</p>;
          <button
            onClick={() => window && window.location.reload()}
            style={{;
              padding: '10px 20px',;
              backgroundColor: '#ff6b6b',;
              color: 'white',;
              border: 'none',;
              borderRadius: '4px',;
              cursor: 'pointer';
            }}
          >;
            Reload Page;
          </button>;
          {process && process.env.NODE_ENV === 'development' && this && this.state.error && (;
            <details style={{ marginTop: '20px', textAlign: 'left' }}>;
              <summary>Error Details (Development)</summary>;
              <prestyle={{ 
                backgroundColor: '#f5f5f5', 
                padding: '10px', 
                borderRadius: '4px',
                overflow: 'auto',
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                fontSize: '12px'
              }}>;
                {this && this.state.error && error.toString()}
                {this && this.state.errorInfo?.componentStack}
              </pre>;
            </details>;
          )}
<<<<<<< HEAD
=======
<<<<<<< HEAD
        </div>;
=======
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
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
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Reload Page
            </button>
          </div>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        </div>
      );
    }


<<<<<<< HEAD
        </div>
      );
    }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return this && this.props.children;
  }
}
class ErrorBoundary extends Component<Props, State> {constructor(props: Props) {;

class ErrorBoundary extends Component<Props, State> {;
  constructor(props: Props) {;
    super(props);
    this && this.state = { hasError: false };

}
  static getDerivedStateFromError(error: Error): State {return { hasError: true, error }
}


<<<<<<< HEAD
    super(props);
    this && this.state = { hasError: false };
}
  static getDerivedStateFromError(error: Error): State {return { hasError: true, error }
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {;
    console && console.error('ErrorBoundary caught an error:', error, errorInfo);
    this && this.setState({ error, errorInfo });
}
  handleRetry = () => {;
    this && this.setState({ hasError: false, error: undefined, errorInfo: undefined });
};
  render() {;
    if (this && this.state.hasError) {;
      if (this && this.props.fallback) {;
        return this && this.props.fallback;
}
      return (
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">;
          <div className="max-w-md w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">;
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">;
              <AlertTriangle className="w-8 h-8 text-red-400" />;
            <details style={{ margin_top: '20px', text_align: 'left' }}>;
              <summary > Error Details (Development)</summary>;
              <pre style={{
                background_color: '#f5f5f5',
                padding: '10px',
                border_radius: '4px',
                overflow: 'auto',
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
    this.state = { has_error: false }
}
  static getDerivedStateFromError (error: Error): State {
    return { has_error: true, error }
}
  componentDidCatch (error: Error, error_info: ErrorInfo) {
    console.error ('ErrorBoundary caught an error:', error, error_info);
    this.set_state ({ error, error_info });
}
  handle_retry = () => {
    this.set_state ({ has_error: false, error: undefined, error_info: undefined });
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

      // Default fallback UI
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
<<<<<<< HEAD
            {process && process.env.NODE_ENV === 'development' && this && this.state.error && (;
=======


            {process && process.env.NODE_ENV === 'development' && this && this.state.error && (;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <button
                onClick={() => typeof window !== 'undefined' && window.location.reload()  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="w-full px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Reload Page
              </button>
              <button

=======
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
              <button 
                onClick={() => this.setState({ hasError: false })} 
                className="w-full px-6 py-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors font-semibold"
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
                onClick={() => this.setState({ hasError: false })  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="w-full px-6 py-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors font-semibold"
              >
                Try Again
              </button>
            </div>
            {process.env.NODE_ENV === 'development' && this.state.error && (
<<<<<<< HEAD
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
<<<<<<< HEAD
    return this && this.props.children;
=======


    return this && this.props.children;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return this.props.children;
}
}
export default ErrorBoundary;
<<<<<<< HEAD
=======
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
              <details className="mt-4 p-4 bg-gray-100 rounded-md">
                <summary className="cursor-pointer font-medium text-gray-700">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 text-xs text-gray-600 overflow-auto">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}

=======
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm text-slate-400 hover:text-slate-300">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 p-4 bg-slate-800 rounded text-xs overflow-auto">
                  {this.state.error.stack}
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm text-slate-400 hover:text-slate-300">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 p-4 bg-slate-800 rounded text-xs overflow-auto">
                  {this.state.error.stack  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </pre>
              </details>
                onClick={() => this && this.setState({ hasError: false, error: undefined, errorInfo: undefined })}
                className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors";
              >;
                Try Again;
              </button>;
            </div>;
            {process && process.env.NODE_ENV === 'development' && this && this.state.error && (;
              <details className="mt-4 p-4 bg-gray-100 rounded-md">;
                <summary className="cursor-pointer font-medium text-gray-700">;
                  Error Details (Development);
                </summary>;
                <pre className="mt-2 text-xs text-gray-600 overflow-auto">;
                  {this && this.state.error && error.toString()}
                  {this && this.state.errorInfo?.componentStack}
                </pre>;
              </details>;
            )}
          </div>;
    // Log the error to an error reporting service;
    console && console.error('ErrorBoundary caught an error:', error, errorInfo);
    this && this.setState({ error, errorInfo });
  }

;
    // Log error to external service (e.g., Sentry);
    // Check condition
if (.Sentry) {) {
  $2
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </pre>
              </details>
            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
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
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Reload Page
            </button>
          </div>
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
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
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Reload Page
            </button>
          </div>

=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </div>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      );
    }


    return this && this.props.children;
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD

=======
=======
class ErrorBoundary extends Component<Props, State> {;
  constructor(props: Props) {;
    super(props);
    this && this.state = { hasError: false };

}
  static getDerivedStateFromError(error: Error): State {return { hasError: true, error }
}


  componentDidCatch(error: Error, errorInfo: ErrorInfo) {;
    console && console.error('ErrorBoundary caught an error:', error, errorInfo);
    this && this.setState({ error, errorInfo });
}
  handleRetry = () => {;
    this && this.setState({ hasError: false, error: undefined, errorInfo: undefined });
};
  render() {;
    if (this && this.state.hasError) {;
      if (this && this.props.fallback) {;
        return this && this.props.fallback;
}
      return (

        <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">;
          <div className="max-w-md w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">;
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">;
              <AlertTriangle className="w-8 h-8 text-red-400" />;
            <details style={{ margin_top: '20px', text_align: 'left' }}>;
              <summary > Error Details (Development)</summary>;
              <pre style={{
                background_color: '#f5f5f5',
                padding: '10px',
                border_radius: '4px',
                overflow: 'auto',
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
    this.state = { has_error: false }
}
  static getDerivedStateFromError (error: Error): State {
    return { has_error: true, error }
}
  componentDidCatch (error: Error, error_info: ErrorInfo) {
    console.error ('ErrorBoundary caught an error:', error, error_info);
    this.set_state ({ error, error_info });
}
  handle_retry = () => {
    this.set_state ({ has_error: false, error: undefined, error_info: undefined });
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


            {process && process.env.NODE_ENV === 'development' && this && this.state.error && (;

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


    return this && this.props.children;

=======
    return this.props.children;
}
}
export default ErrorBoundary;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
