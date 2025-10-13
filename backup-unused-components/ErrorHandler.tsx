<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';

interface ErrorHandlerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ErrorHandler({ className = '', children }: ErrorHandlerProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
=======
'use client'
import React, { Component, ErrorInfo, ReactNode } from 'react'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'
<<<<<<< HEAD
interface Props;
  children: ReactNode;
  fallback?: ReactNode;
interface State;
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
=======
import React, { Component, ErrorInfo, ReactNode } from 'react'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'
<<<<<<< HEAD
interface Props 
  children: ReactNode
  fallback?: ReactNode

interface State 
  hasError: boolean
  error: Error | null
  errorInfo: ErrorInfo | null
=======
// 'use client'
=======
interface Props ,
    children: ReactNode
  fallback?: ReactNode

interface State ,
    hasError: boolean,
    error: Error | null,
    errorInfo: ErrorInfo | null
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c

interface Props {
//   children: ReactNode
//   fallback?: ReactNode
}

interface State {
//   hasError: boolean
//   error: Error | null
//   errorInfo: ErrorInfo | null
}
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
class ErrorHandler extends Component<Props, State> 
  constructor(props: Props) 
    super(props)
<<<<<<< HEAD
<<<<<<< HEAD
    this.state = 
      hasError: false,
      error: null,
      errorInfo: null;
  static getDerivedStateFromError(error: Error): State;
    return;
      hasError: true,
      error,
      errorInfo: null;
=======
    this.state = ,
    hasError: false,
        error: null,
        errorInfo: null

  static getDerivedStateFromError(error: Error): State 
    return ,
    hasError: true,
      error,
        errorInfo: null

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
  componentDidCatch(error: Error, errorInfo: ErrorInfo) 
    this.setState(
      error,
      errorInfo;
)
<<<<<<< HEAD
    // Log error to console in development;
=======
=======
    this.state = {
//       hasError: false,
//       error: null,
//       errorInfo: null
    }
  }

  static getDerivedStateFromError(error: Error): State {
    return {
//       hasError: true,
//       error,
//       errorInfo: null
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
//       error,
//       errorInfo
    })

>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
    // Log error to console in development
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
    if (process.env.NODE_ENV === 'development') 

    // Send error to monitoring service in production;
    if (process.env.NODE_ENV === 'production') 
      // You can integrate with services like Sentry, LogRocket, etc.
      this.logErrorToService(error, errorInfo)

  logErrorToService = (error: Error, errorInfo: ErrorInfo) => 
<<<<<<< HEAD
    // Example: Send to monitoring service;
    try;
      // Replace with your actual error reporting service;
=======
    // Example: Send to monitoring service
    try 
      // Replace with your actual error reporting service
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
      const errorData = 
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
=======
      const errorData = {
//         message: error.message,
//         stack: error.stack,
//         componentStack: errorInfo.componentStack,
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
        timestamp: new Date().toISOString()
=======
      const errorData = ,
    message: error.message,
          stack: error.stack,
          componentStack: errorInfo.componentStack,
          timestamp: new Date().toISOString()
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
;
      // Send to your error reporting service here;
 catch (reportingError) 

<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
  handleRetry = () => 
    this.setState(
      hasError: false,
      error: null,
      errorInfo: null;
=======
  handleRetry = () => 
    this.setState(,
    hasError: false,
        error: null,
        errorInfo: null
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
)
=======
  handleRetry = () => {
    this.setState({
//       hasError: false,
//       error: null,
//       errorInfo: null
    })
  }
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f

  handleGoHome = () => 
    window.location.href = '/'

  render() 
    if (this.state.hasError) 
      if (this.props.fallback) 
        return this.props.fallback;
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50"></div>
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center"></div>
            <div className="flex justify-center mb-4"></div>
              <AlertTriangle className="w-16 h-16 text-red-500" />
<<<<<<< HEAD
  </div>
=======
<<<<<<< HEAD
            </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
            <h1 className="text-2xl font-bold text-gray-900 mb-4"></h1>
              Oops! Something went wrong;
            </h1>
            <p className="text-gray-600 mb-6"></p>
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix it.
            </p>
            
              <details className="mb-6 text-left"></details>
                <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700"></summary>
                  Error Details (Development)
                </summary>
                <div className="mt-2 p-4 bg-gray-100 rounded text-xs font-mono overflow-auto"></div>
                  <div className="mb-2"></div>
                    <strong>Error:</strong> {this.state.error.message}
  </div>
                    <div></div>
                      <strong>Stack:</strong>
                      <pre className="whitespace-pre-wrap">{this.state.error.stack}</pre>
<<<<<<< HEAD
  </div>
=======
                    </div>

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
                    <div></div>
                      <strong>Component Stack:</strong>
                      <pre className="whitespace-pre-wrap">{this.state.errorInfo.componentStack}</pre>
  </div>  </div>
              </details>

            <div className="flex flex-col sm:flex-row gap-3 justify-center"></div>
<<<<<<< HEAD
<<<<<<< HEAD
              <button;
=======
              <button
=======
</div>
            
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
//               Oops! Something went wrong
</h1>
            
            <p className="text-gray-600 mb-6">
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix it.
</p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
                  Error Details (Development)
//                 </summary>
                <div className="mt-2 p-4 bg-gray-100 rounded text-xs font-mono overflow-auto">
                  <div className="mb-2">
                    <strong>Error:</strong> {this.state.error.message}
</div>
                  {this.state.error.stack && (
//                     <div>
//                       <strong>Stack:</strong>
                      <pre className="whitespace-pre-wrap">{this.state.error.stack}</pre>
</div>
                  )}
                  {this.state.errorInfo?.componentStack && (
//                     <div>
//                       <strong>Component Stack:</strong>
                      <pre className="whitespace-pre-wrap">{this.state.errorInfo.componentStack}</pre>
</div>
                  )}
</div>
//               </details>
            )}

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
//               <button
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
                onClick={this.handleRetry}
                className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//               >
=======
              <button>
  onClick={this.handleRetry}>
  className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
                <RefreshCw className="w-4 h-4 mr-2" />
<<<<<<< HEAD
                Try Again;
              </button>
              <button;
=======
<<<<<<< HEAD
                Try Again
              </button>
<<<<<<< HEAD
              <button
=======
//                 Try Again
</button>
              
//               <button
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
                onClick={this.handleGoHome}
                className="flex items-center justify-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
//               >
=======
              <button>
  onClick={this.handleGoHome}>
  className="flex items-center justify-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
                <Home className="w-4 h-4 mr-2" />
<<<<<<< HEAD
                Go Home;
=======
<<<<<<< HEAD
                Go Home
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
              </button>
  </div>
  </div>
  </div>
      )
=======
//                 Go Home
</button>
</div>
</div>
</div>
//       )
    }
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f

<<<<<<< HEAD
    return this.props.children;
export default ErrorHandler;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
    return this.props.children

export default ErrorHandler
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
