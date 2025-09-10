<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import React,{ Component,ErrorInfo,ReactNode } from 'react'; import { AlertTriangle,RefreshCw } from 'lucide-react'; interface Props { children: ReactNode; fallback?: ReactNode} interface State { hasError: boolean; error?: Error; errorInfo?: ErrorInfo} class ErrorBoundary extends Component<Props,State> { constructor(props: Props) { super(props); this.state = { hasError: false }} static getDerivedStateFromError(error: Error): State { return { hasError: true,error }} componentDidCatch(error: Error,errorInfo: ErrorInfo) { this.setState({ error,errorInfo }); if (process.env.NODE_ENV === 'production') { console.error('Error caught by boundary:',error,errorInfo)} } handleRetry = () => { this.setState({ hasError: false,error: undefined,errorInfo: undefined })}; render() { if (this.state.hasError) { if (this.props.fallback) { return this.props.fallback} return ( <div className="min-h-screen flex items-center justify-center bg-gray-50"> <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6"> <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4"> <AlertTriangle className="w-6 h-6 text-red-600" /> </div> <div className="text-center"> <h1 className="text-xl font-semibold text-gray-900 mb-2"> Something went wrong </h1> <p className="text-gray-600 mb-6"> We're sorry,but something unexpected happened. Please try refreshing the page. </p> <div className="space-y-3"> <button onClick={this.handleRetry} className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" > <RefreshCw className="w-4 h-4 mr-2" /> Try Again </button> <button onClick={() => window.location.reload()} className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" > Refresh Page </button> </div> </div> {process.env.NODE_ENV === 'development' && this.state.error && ( <details className="mt-6 p-4 bg-gray-100 rounded-md"> <summary className="cursor-pointer text-sm font-medium text-gray-700"> Error Details (Development Only) </summary> <pre className="mt-2 text-xs text-gray-600 overflow-auto"> {this.state.error.toString()} {this.state.errorInfo?.componentStack} </pre> </details> )} </div> </div> )} return this.props.children} } export default ErrorBoundary;
>>>>>>> origin/automation-improvements
=======
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
>>>>>>> origin/automation/changelog
