<<<<<<< HEAD
import React from 'react';

interface AdvancedErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}

export default function AdvancedErrorBoundary({ className = '', children }: AdvancedErrorBoundaryProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
=======
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';
<<<<<<< HEAD
interface Props;
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;

interface State;
  hasError: boolean;
=======
interface Props ,
    children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;

interface State ,
    hasError: boolean;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
  error?: Error;
  errorInfo?: ErrorInfo;
  errorId?: string;

class AdvancedErrorBoundary extends Component<Props, State> 
  constructor(props: Props) 
    super(props);
    this.state = { hasError: false };

<<<<<<< HEAD
  static getDerivedStateFromError(error: Error): State;
    return;
=======
<<<<<<< HEAD
  static getDerivedStateFromError(error: Error): State 
<<<<<<< HEAD
    return 
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
      hasError: true, 
      error,
=======
  static getDerivedStateFromError(error: Error): State {
    return { 
//       hasError: true, 
//       error,
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
=======
    return ,
    hasError: true, 
      error,
        errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
;

<<<<<<< HEAD
  componentDidCatch(error: Error, errorInfo: ErrorInfo) 
    this.setState(
      error,
      errorInfo,
);
<<<<<<< HEAD
    // Call custom error handler if provided;
=======
=======
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
//       error,
//       errorInfo,
    });

>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
    // Call custom error handler if provided
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
    if (this.props.onError) 
      this.props.onError(error, errorInfo);

    // Log error to console in development;
    if (process.env.NODE_ENV === 'development') 

    // Log error to external service in production;
    if (process.env.NODE_ENV === 'production') 
      this.logErrorToService(error, errorInfo);

  logErrorToService = (error: Error, errorInfo: ErrorInfo) => 
    // You can integrate with services like Sentry, LogRocket, etc.
<<<<<<< HEAD
<<<<<<< HEAD
    const errorData = 
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      errorId: this.state.errorId,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
=======
    const errorData = ,
    message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        errorId: this.state.errorId,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
;
<<<<<<< HEAD
    // Log the error data for debugging;
    // Example: Send to your error reporting service;
=======
=======
    const errorData = {
//       message: error.message,
//       stack: error.stack,
//       componentStack: errorInfo.componentStack,
//       errorId: this.state.errorId,
      timestamp: new Date().toISOString(),
//       userAgent: navigator.userAgent,
//       url: window.location.href,
    };

>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
    // Log the error data for debugging
    // Example: Send to your error reporting service
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
    // You could send this to your backend:
    // fetch('/api/error-report', 
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(errorData)
);
<<<<<<< HEAD
    // For now, just log to console;
    // Error data logged;
=======
    // For now, just log to console
    // Error data logged
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
;
  handleReset = () => 
<<<<<<< HEAD
    this.setState(
      hasError: false, 
      error: undefined, 
      errorInfo: undefined,
      errorId: undefined;
=======
    this.setState(,
    hasError: false, ,
    error: undefined, ,
    errorInfo: undefined,
        errorId: undefined 
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
);
;
  handleReportError = () => 
=======
  };

  handleReset = () => {
    this.setState({ 
//       hasError: false, 
//       error: undefined, 
//       errorInfo: undefined,
//       errorId: undefined 
    });
  };

  handleReportError = () => {
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
    const { error, errorId } = this.state;
    const subject = `Error Report - ${errorId}`;
    const body = `Error: ${error?.message}\n\nStack: ${error?.stack}\n\nPlease describe what you were doing when this error occurred:`;
    const mailtoLink = `mailto:support@ziontechgroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
;
  render() 
    if (this.state.hasError) 
      if (this.props.fallback) 
        return this.props.fallback;

      return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4"></div>
          <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8 text-center"></div>
            <div className="flex justify-center mb-6"></div>
              <AlertTriangle className="h-20 w-20 text-red-500" />
<<<<<<< HEAD
  </div>
=======
<<<<<<< HEAD
            </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
            <h1 className="text-3xl font-bold text-gray-900 mb-4"></h1>
              Oops! Something went wrong;
            </h1>
            <p className="text-gray-600 mb-6 text-lg"></p>
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
            </p>
            
              <div className="bg-gray-100 p-4 rounded-lg mb-6"></div>
                <p className="text-sm text-gray-600"></p>
                  <strong>Error ID:</strong> {this.state.errorId}
                </p>
                <p className="text-xs text-gray-500 mt-1"></p>
                  Please include this ID when contacting support;
                </p>
<<<<<<< HEAD
  </div>
=======
              </div>
<<<<<<< HEAD
=======
</div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
//               Oops! Something went wrong
</h1>
            
            <p className="text-gray-600 mb-6 text-lg">
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
</p>

            {this.state.errorId && (
              <div className="bg-gray-100 p-4 rounded-lg mb-6">
                <p className="text-sm text-gray-600">
                  <strong>Error ID:</strong> {this.state.errorId}
</p>
                <p className="text-xs text-gray-500 mt-1">
//                   Please include this ID when contacting support
</p>
</div>
            )}
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f

<<<<<<< HEAD
            
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5
              <details className="mb-6 text-left"></details>
                <summary className="cursor-pointer text-sm font-medium text-gray-700 mb-2"></summary>
                  Error Details (Development)
<<<<<<< HEAD
                </summary>
                <div className="bg-gray-100 p-3 rounded text-xs font-mono text-gray-800 overflow-auto max-h-40"></div>
                  <div className="mb-2"></div>
                    <strong>Error:</strong> {this.state.error.message}
  </div>
                    <div></div>
                      <strong>Stack:</strong>
                      <pre className="whitespace-pre-wrap mt-1"></pre>
                        {this.state.errorInfo.componentStack}
                      </pre>
  </div>  </div>
              </details>

            <div className="flex flex-col sm:flex-row gap-3 justify-center"></div>
<<<<<<< HEAD
<<<<<<< HEAD
              <button;
=======
              <button
=======
//                 </summary>
                <div className="bg-gray-100 p-3 rounded text-xs font-mono text-gray-800 overflow-auto max-h-40">
                  <div className="mb-2">
                    <strong>Error:</strong> {this.state.error.message}
</div>
                  {this.state.errorInfo && (
//                     <div>
//                       <strong>Stack:</strong>
                      <pre className="whitespace-pre-wrap mt-1">
                        {this.state.errorInfo.componentStack}
//                       </pre>
</div>
                  )}
</div>
//               </details>
            )}

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
//               <button
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
                onClick={this.handleReset}
                className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
//               >
=======
              <button>
  onClick={this.handleReset}>
  className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
                <RefreshCw className="h-4 w-4 mr-2" />
<<<<<<< HEAD
                Try Again;
=======
<<<<<<< HEAD
                Try Again
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
              </button>
<<<<<<< HEAD
              <button;
                onClick="{()" => window.location.href = '/'}
=======
//                 Try Again
</button>
              
//               <button
                onClick={() => window.location.href = '/'}
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
=======
              <button>
  onClick="{()" => window.location.href = '/'}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
                className="flex items-center justify-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
//               >
                <Home className="h-4 w-4 mr-2" />
<<<<<<< HEAD
                Go Home;
              </button>
              <button;
=======
<<<<<<< HEAD
                Go Home
              </button>
<<<<<<< HEAD
              <button
=======
//                 Go Home
</button>

//               <button
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
                onClick={this.handleReportError}
                className="flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
//               >
=======
              <button>
  onClick={this.handleReportError}>
  className="flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
                <Mail className="h-4 w-4 mr-2" />
<<<<<<< HEAD
                Report Issue;
=======
<<<<<<< HEAD
                Report Issue
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
              </button>
  </div>
            <div className="mt-8 pt-6 border-t border-gray-200"></div>
              <p className="text-sm text-gray-500"></p>
=======
//                 Report Issue
</button>
</div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
                If this problem persists, please contact our support team at{' '}
<<<<<<< HEAD
<<<<<<< HEAD
                <a;
                  href="mailto:support@ziontechgroup.com" 
                  className="text-blue-600 hover:text-blue-800"
=======
                <a >
  href="mailto:support@ziontechgroup.com" >
  className="text-blue-600 hover:text-blue-800"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
                >
                  support@ziontechgroup.com;
                </a>
              </p>
  </div>
  </div>
  </div>
=======
//                 <a 
                  href="mailto:support@ziontechgroup.com" 
                  className="text-blue-600 hover:text-blue-800"
//                 >
//                   support@ziontechgroup.com
</a>
</p>
</div>
</div>
</div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
      );

    return this.props.children;

<<<<<<< HEAD
<<<<<<< HEAD
export default AdvancedErrorBoundary;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
export default AdvancedErrorBoundary;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
=======
export default AdvancedErrorBoundary;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5
