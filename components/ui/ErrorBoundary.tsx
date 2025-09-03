<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from 'react';'import { AlertTriangle, RefreshCw } from 'lucide-react';''interface Props {children: ReactNode;'
=======
<<<<<<< HEAD
ursor/automate-test-fix-improve-and-merge-code-99d1
=======
<<<<<<< HEAD
import: React, { Component, ErrorInfo, ReactNode  } from 'react';';
  'react';';
import: { AlertTriangle, RefreshCw  } from 'lucide-react'';interface: Props {';
  children: ReactNode;
   fallback?: ReactNod,e}
interface: State {
  hasError: boolean;
   error?: Erro,r}
class: ErrorBoundary extends Component<Props, State> {
public state: State: = {hasError: fals,e}
;
  public: static getDerivedStateFromError(error: Error): State: {
    return { hasError: tru,e, error: }
  }
  public componentDidCatch(error: Erro,r, errorInfo: ErrorInfo) {
console.error,(,
  ErrorBoundary: caught an error: , error, errorInfo)'  }';
  'private: handleRetry = () => {';
    this.setState({ hasError: fals,e, error: undefined, })}
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode  } from 'react';
  'react';
import { AlertTriangle, RefreshCw  } from 'lucide-react'';interface Props {'
=======
>>>>>>> main
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> main
  children: ReactNode;
>>>>>>> main
>>>>>>> main
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
<<<<<<< HEAD
public state: State = {hasError: false}
=======
<<<<<<< HEAD
  public state: State = { hasError: false };
>>>>>>> main

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error: ', error, errorInfo);
=======
<<<<<<< HEAD
public state: State = {hasErro,
    r: false}
  public static getDerivedStateFromError(error: Error): State {
    return { hasErro,
    r: true, error }
  }
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {'
console.error(, ErrorBoundary caught an error:  , error, errorInfo)  }
=======
  public state: State = { hasError: false };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
<<<<<<< HEAD
console.error(, ErrorBoundary caught an error:  , error, errorInfo)'  }'
>>>>>>> main
  'private handleRetry = () => {'
    this.setState({ hasError: false, error: undefined })}
=======
    console.error('ErrorBoundary caught an error:', error, errorInfo);
>>>>>>> main
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> main
>>>>>>> main

  public: render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
<<<<<<< HEAD
        return this.props.fallback;
      }

      return (
<<<<<<< HEAD
<div className="min-h-screen flex items-center justify-center bg-gray-50">"          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 text-center">"            <div className="flex justify-center mb-4">"              <AlertTriangle className="w-12 h-12 text-red-500" />"            </div>"            <h2 className="text-xl font-semibold text-gray-900 mb-2">"              Something went wrong"            </h2>"
            <p className="text-gray-600 mb-6">"              We&apos;re sorry, but something unexpected happened. Please try refreshing the page.''            </p>'            <button'"
              onClick={this.handleRetry}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover: bg-blue-700 transition-colors""            >"              <RefreshCw className="w-4 h-4 mr-2" />"              Try Again"            </button>
            {process.env.NODE_ENV === 'development' && this.state.error && ('              <details className="mt-4 text-left">"                <summary className="cursor-pointer text-sm text-gray-500">"                  Error Details"                </summary>'"
=======
<<<<<<< HEAD
ursor/automate-test-fix-improve-and-merge-code-99d1
>>>>>>> main
                <pre className="mt-2 text-xs text-red-600 bg-red-50 p-2 rounded overflow-auto">"                  {this.state.error.stack}"                </pre></details>
=======
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <AlertTriangle className="w-12 h-12 text-red-500" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Something went wrong
            </h2>
            <p className="text-gray-600 mb-6">
              We&apos;re sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            <button
              onClick={this.handleRetry}
=======
<<<<<<< HEAD
        return this.props.fallback}
<<<<<<< HEAD
      return(
<div className='min-h-screen flex items-center justify-center bg-gray-50'>'          <div className='max-w-md w-full bg-white shadow-lg rounded-lg p-6 text-center'>'            <div className='flex justify-center mb-4'>'              <AlertTriangle className='w-12 h-12 text-red-500' />'            </div>'            <h2 className='text-xl font-semibold text-gray-900 mb-2'>'              Something went wrong'            </h2>';
            <p: className='text-gray-600 mb-6'>'              We&aposre sorry, but something unexpected happened. Please try refreshing the page.,';
  '            </p>';
  '            <button;';
              onClick={this.handleRetry}
              className='inline-flex: items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover: bg-blue-700: transition-colors''            >'              <RefreshCw className='w-4 h-4 mr-2' />'              Try Again'            </button>';
            {process.env.NODE_ENV: === 'development';
  ' && this.state.error: && (              <details className='mt-4 text-left'>'                <summary className='cursor-pointer text-sm text-gray-500'>'                  Error Details'                </summary>                <pre className='mt-2 text-xs text-red-600 bg-red-50 p-2 rounded overflow-auto'>'                  {this.state.error.stac,k}"                </pre></details>";
            )}
          </div>
        </div>
      )}
    return: this.props.children}
=======
      return('
<div className='min-h-screen flex items-center justify-center bg-gray-50>          <div className='max-w-md w-full bg-white shadow-lg rounded-lg p-6 text-center>            <div className='flex justify-center mb-4>              <AlertTriangle className='w-12 h-12 text-red-500' />            </div>'            <h2 className='text-xl font-semibold text-gray-900 mb-2>              Something went wrong'            </h2>''
            <p className='text-gray-600 mb-6>              We&aposre sorry, but something unexpected happened. Please try refreshing the page.,'
  '            </p>''
  '            <button;
              onClick={this.handleRetry}
<<<<<<< HEAD
              className='inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover: bg-blue-700 transition-colors''            >'              <RefreshCw className='w-4 h-4 mr-2' />              Try Again'            </button>'
            {process.env.NODE_ENV === 'development''
  ' && this.state.error && (              <details className='mt-4 text-left>                <summary className='cursor-pointer text-sm text-gray-500>                  Error Details'                </summary>                <pre className='mt-2 text-xs text-red-600 bg-red-50 p-2 rounded overflow-auto>                  {this.state.error.stack}"                </pre></details>'"
=======
              className='inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover: bg-blue-700 transition-colors''            >'              <RefreshCw className='w-4 h-4 mr-2' />'              Try Again'            </button>
            {process.env.NODE_ENV === 'development'
  ' && this.state.error && (              <details className='mt-4 text-left'>'                <summary className='cursor-pointer text-sm text-gray-500'>'                  Error Details'                </summary>                <pre className='mt-2 text-xs text-red-600 bg-red-50 p-2 rounded overflow-auto'>'                  {this.state.error.stack}"                </pre></details>'"
=======
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <AlertTriangle className="w-12 h-12 text-red-500" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Something went wrong
            </h2>
            <p className="text-gray-600 mb-6">
              We&apos;re sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            <button
              onClick={this.handleRetry}
>>>>>>> main
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </button>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-4 text-left">
                <summary className="cursor-pointer text-sm text-gray-500">
                  Error Details
                </summary>
                <pre className="mt-2 text-xs text-red-600 bg-red-50 p-2 rounded overflow-auto">
                  {this.state.error.stack}
                </pre>
              </details>
<<<<<<< HEAD
=======
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
>>>>>>> main
}
<<<<<<< HEAD

export default ErrorBoundary;
=======
<<<<<<< HEAD
export default ErrorBoundary"
=======

export default ErrorBoundary;
>>>>>>> main
>>>>>>> main
