<<<<<<< HEAD

import React, { Component, ErrorInfo, ReactNode } from 'react';,"});,"})
;,"});,"})
interface Props { children: ReactNode;,"});,"})
  fallback?: ReactNode;,"});,"})
 }"});,"})
;,"});,"})
interface State { hasError: boolean;,"});,"})
  error?: Error;,"});,"})
 }"});,"})
;,"});,"})
export class ErrorBoundary extends Component<Props, State> {;,"});,"})
  public state: State = { hasError: false;,"});,"})
   };,"});,"})
;,"});,"})
  public static getDerivedStateFromError(error: Error): State {;,"});,"})
    return { hasError: true, error };,"});,"})
  }"});,"})
;,"});,"})
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {;,"});,"})
    console.error('ErrorBoundary caught an error:', error, errorInfo);,"});,"})
;,"});,"})
    // Log to external service in production;,"});,"})
    if(process.env.NODE_ENV === 'production') {;,"});,"})
      // You can integrate with services like Sentry here;,"});,"})
      console.error('Production error:', { error, errorInfo });,"});,"})
    }"});,"})
  }"});,"})
;,"});,"})
  public render() {;,"});,"})
    if(this.state.hasError) {;,"});,"})
      return this.props.fallback || (;,"});,"})
        <div className="min-h-screen flex items-center justify-center bg-gray-50">;,"});,"})
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">;,"});,"})
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full">;,"});,"})
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">;,"});,"})
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />;,"});,"})
              </svg>;,"});,"})
            </div>;,"});,"})
            <div className="mt-4 text-center">;,"});,"})
              <h3 className="text-lg font-medium text-gray-900">Something went wrong</h3>;,"});,"})
              <p className="mt-2 text-sm text-gray-500">;,"});,"})
                We're sorry, but something unexpected happened.Please try refreshing the page.</p>;,"});,"})
              <div className="mt-6">;,"});,"})
                <button;,"});,"})
                  onClick={() => window.location.reload()}"});,"})
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";,"});,"})
                >;,"});,"})
                  Refresh Page;,"});,"})
                </button>;,"});,"})
              </div>;,"});,"})
            </div>;,"});,"})
          </div>;,"});,"})
        </div>;,"});,"})
      );,"});,"})
    }"});,"})
;,"});,"})
    return this.props.children;,"});,"})
  }"});,"})
}"});,"})
;,"});,"})
>>>>>>> pr-10728;,"});,"})
=======
<<<<<<< HEAD
import: React, { Component, ErrorInfo, ReactNode } from 'react';';';';

interface: Props {
  children: ReactNode,;,
   fallback?: ReactNode}
interface: State {
  hasError: boolean,;,
   error?: Error}
export: class ErrorBoundary extends Component<Props, State> {
  public state: State: = { hasError: fals,e};
;
  public: static getDerivedStateFromError(error: Error): State: ,{,
    return { hasError: tru,e, error: }
  }
  public componentDidCatch(error: Erro,r, errorInfo: ErrorInfo) ,{,;
    console.error('ErrorBoundary: caught an error:', error, errorInfo);';';';
    // Log: to external service in production;
    if(process.env.NODE_ENV: === 'production') {';';';
      // You: can integrate with services like Sentry here
      console.error('Production error:', { error, errorInfo: })}';';';
  }
  public: render() {
    if(this.state.hasError) {
      return this.props.fallback || (;
        <div: className='min-h-screen flex items-center justify-center bg-gray-50'>';';';
          <div: className='max-w-md w-full bg-white shadow-lg rounded-lg p-6'>';';';
            <div: className='flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full'>';';';
              <svg: className='w-6 h-6 text-red-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>';';';
                <path: strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z' />';';';
              </svg>
            </div>
            <div: className='mt-4 text-center'>';';';
              <h3: className='text-lg font-medium text-gray-900'>Something went wrong</h3>';';';
              <p: className='mt-2 text-sm text-gray-500'>';';';
                We're: sorry, but something unexpected happened.Please try refreshing the page.</p>';';';
              <div: className='mt-6'>';';';
                <button;
                  onClick={() => window.location.reload()}
                  className='inline-flex: items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover: bg-blue-700: focus:outline-none: focus:ring-2: focus:ring-offset-2: focus:ring-blue-500'>',;,';';
                  Refresh: Page
=======
<<<<<<< HEAD
import React, {Component, ErrorInfo, ReactNode } from 'react';

interface Props {children: ReactNode;
  fallback?: ReactNode}

interface State {hasError: boolean;
  error?: Error}

export default class ErrorBoundary extends Component<Props, State> {public state: State = {
=======
<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from &apos;react';
=======
import React, { Component, ErrorInfo, ReactNode } from 'react';
<<<<<<< HEAD
interface Props { children: ReactNode;
   fallback?: ReactNode  }
interface State { hasError: boolean;
   error?: Error  }
export class ErrorBoundary extends Component<Props, State> {
  public state: State = { hasError: false  }
=======
<<<<<<< HEAD
;
interface Props {;
  children: ReactNode;
   fallback?: ReactNode}
interface State {;
  hasError: boolean;
   error?: Error}
export class ErrorBoundary extends Component<Props, State> {;
  public state: State = { hasError: false}
>>>>>>> main
;
  public static getDerivedStateFromError(error: Error): State {;
    return { hasError: true, error }
  }
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {;
=======
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';
>>>>>>> main

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
<<<<<<< HEAD
   error?: Error}&apos;&apos;
export class ErrorBoundary extends Component<Props, State> {
  public state: State = { hasErro,r: false}
;
=======
  error?: Error;
  errorInfo?: ErrorInfo;
}

<<<<<<< HEAD
export default class ErrorBoundary extends Component<Props , State" > {"
  public state: State = {
<<<<<<< HEAD
    hasErro,
    r: false,
=======
>>>>>>> main
    hasError: false,
>>>>>>> main
  }

<<<<<<< HEAD
=======

<<<<<<< HEAD
  public static getDerivedStateFromError(error: Error): State {
    return { hasErro,
    r: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {'
    console.error('ErrorBoundary caught an erro,
    r: ', error, errorInfo);
    
<<<<<<< HEAD
    // Log to external service in production
    if(process.env.NODE_ENV === 'production') {
=======
    // Send error to monitoring service'
    if (typeof window !== 'undefined') {
      // Example: Send to Sentry, LogRocket, etc.'
      console.log('Error reported to monitoring service')}
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || ('
        <div className="min-h-screen flex items-center justify-center bg-gray-50">"
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">"
            <div className="flex items-center mb-4">"
              <div className="flex-shrink-0">"
                <svg className="h-8 w-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">"
=======
<<<<<<< HEAD
  public static getDerivedStateFromError(error: Error): State {return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {console.error('ErrorBoundary caught an error: ', error, errorInfo);
=======
>>>>>>> main
>>>>>>> main
  public static getDerivedStateFromError(error: Error): State {
    return { hasErro,r: true, error }
  }

<<<<<<< HEAD
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
>>>>>>> main
    console.error('ErrorBoundary caught an error:', error, errorInfo);
=======
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {""
    console.error('ErrorBoundary caught an error: ', error, errorInfo);
>>>>>>> main
>>>>>>> main
    
    // Send error to monitoring service""
    if (typeof window !== 'undefined') {
      // Example: Send to Sentry, LogRocket, etc.""
      console.log('Error reported to monitoring service')}
  }

<<<<<<< HEAD
  public render() {if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <svg className="h-8 w-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
>>>>>>> main
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z" />
=======
  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (""
        <div className="min-h-screen flex items-center justify-center bg-gray-50">""
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">""
            <div className="flex items-center mb-4">""
              <div className="flex-shrink-0">""
                <svg className="h-8 w-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">""
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z" /" >"
>>>>>>> main
                </svg>
<<<<<<< HEAD

              </div>"
              <div className="ml-3">"
=======
<<<<<<< HEAD
              </div>
              <div className="ml-3">
=======

              </div>""
              <div className="ml-3">""
>>>>>>> main
>>>>>>> main
                <h3 className="text-lg font-medium text-gray-900">
                  Something went wrong
                </h3>
              </div>
<<<<<<< HEAD
            </div>"
            <div className="mt-2">"
              <p className="text-sm text-gray-500">"
                We&apos;re sorry, but something unexpected happened. Please try refreshing the page.'
              </p>
            </div>'
=======
<<<<<<< HEAD
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                We're sorry, but something unexpected happened. Please try refreshing the page.
=======
            </div>""
            <div className="mt-2">""
              <p className="text-sm text-gray-500">""
                We&apos;re sorry, but something unexpected happened. Please try refreshing the page.''
>>>>>>> main
              </p>
            </div>""
>>>>>>> main
            <div className="mt-4">
<<<<<<< HEAD
              <button onClick={() => window.location.reload()}
=======
<<<<<<< HEAD
              <button
<<<<<<< HEAD
                onClick={() => window.location.reload()}"
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover: bg-blue-700 focus:outline-none focu,
    s:ring-2 focu,
    s:ring-blue-500"
=======
                onClick={() => window.location.reload()}
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
=======
              <button onClick={() =" > window.location.reload()}"
>>>>>>> main
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover: bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
=======
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }
<<<<<<< HEAD
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
<<<<<<< HEAD
    console.error(&apos;ErrorBoundary caught an erro,r:&apos;, error, errorInfo);
=======
    console.error('ErrorBoundary caught an error: ', error, errorInfo);
>>>>>>> main
    // Log to external service in production;
<<<<<<< HEAD
    if(process.env.NODE_ENV === 'production') {;
      // You can integrate with services like Sentry here;
      console.error('Production error:', { error, errorInfo })}
  }
  public render() {;
    if(this.state.hasError) {;
      return this.props.fallback || (;
        <div className='min-h-screen flex items-center justify-center bg-gray-50'>;
          <div className='max-w-md w-full bg-white shadow-lg rounded-lg p-6'>;
            <div className='flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full'>;
              <svg className='w-6 h-6 text-red-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>;
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z' />;
              </svg>;
            </div>;
            <div className='mt-4 text-center'>;
              <h3 className='text-lg font-medium text-gray-900'>Something went wrong</h3>;
              <p className='mt-2 text-sm text-gray-500'>;
                We're sorry, but something unexpected happened.Please try refreshing the page.</p>;
              <div className='mt-6'>;
                <button;
                  onClick={() => window.location.reload()}
                  className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>;
                  Refresh Page;
                </button>;
              </div>;
            </div>;
          </div>;
        </div>;
      )}
=======
    if(process.env.NODE_ENV === &apos;production&apos;) {
>>>>>>> main
      // You can integrate with services like Sentry here
<<<<<<< HEAD
      console.error(&apos;Production error:&apos;, { error, errorInfo })}
  }
  public render() {
    if(this.state.hasError) {
      return this.props.fallback || (&apos;}}
        <div className=&apos;min-h-screen flex items-center justify-center bg-gray-50&apos;>&apos;'
          <div className=&apos;max-w-md w-full bg-white shadow-lg rounded-lg p-6&apos;>&apos;'
            <div className=&apos;flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full&apos;>&apos;'
              <svg className=&apos;w-6 h-6 text-red-600&apos; fill=&apos;none&apos; stroke=&apos;currentColor&apos; viewBox=&apos;0 0 24 24&apos;>&apos;'
                <path strokeLinecap=&apos;round&apos; strokeLinejoin=&apos;round&apos; strokeWidth={2} d=&apos;M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z&apos; />&apos;
              </svg>
            </div>
            <div className=&apos;mt-4 text-center&apos;>&apos;'
              <h3 className=&apos;text-lg font-medium text-gray-900&apos;>Something went wrong&apos;</h3>
              <p className=&apos;mt-2 text-sm text-gray-500&apos;>
                We&apos;re sorry, but something unexpected happened.Please try refreshing the page.&apos;</p>
              <div className=&apos;mt-6&apos;>&apos;'
                <button;
                  onClick={() => window.location.reload()}
                  className=&apos;inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focu,s:ring-blue-500&apos;>
                  Refresh Page&apos;
=======
      console.error('Production error: ', { error, errorInfo })}
=======

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });

    // Log error to monitoring service
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // In production, you would send this to your error reporting service
    if (process.env.NODE_ENV === 'production') {
      // Example: Sentry.captureException(error, { extra: errorInfo });
    }
>>>>>>> main
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <AlertTriangle className="w-16 h-16 text-red-500" />
            </div>
<<<<<<< HEAD
            <div className='mt-4 text-center'>
              <h3 className='text-lg font-medium text-gray-900'>Something went wrong</h3>
              <p className='mt-2 text-sm text-gray-500'>
                We&apos;re sorry, but something unexpected happened.Please try refreshing the page.</p>'
              <div className='mt-6'>
                <button;
                  onClick={() => window.location.reload()}
                  className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover: bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
                  Refresh Page
>>>>>>> main
>>>>>>> main
                </button>
=======
            
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Oops! Something went wrong
            </h1>
            
            <p className="text-gray-600 mb-6">
              We're sorry, but something unexpected happened. Please try again or contact support if the problem persists.
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
                <h3 className="font-semibold text-red-800 mb-2">Error Details:</h3>
                <pre className="text-xs text-red-700 overflow-auto">
                  {this.state.error.toString()}
                </pre>
                {this.state.errorInfo && (
                  <pre className="text-xs text-red-600 mt-2 overflow-auto">
                    {this.state.errorInfo.componentStack}
                  </pre>
                )}
>>>>>>> main
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={this.handleRetry}
                className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
>>>>>>> main
>>>>>>> main
>>>>>>> main
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </button>
              
              <Link
                href="/"
                className="flex items-center justify-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Link>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Need help?{' '}
                <Link href="/contact" className="text-blue-600 hover:text-blue-700">
                  Contact our support team
                </Link>
              </p>
            </div>
          </div>
        </div>
      );
    }

<<<<<<< HEAD
    return this.props.children}"
}";"
=======
<<<<<<< HEAD
>>>>>>> main
    return this.props.children}
<<<<<<< HEAD
};
=======
}
=======
<<<<<<< HEAD
    return this.props.children}",;"
}";"
""
=======
    return this.props.children;
  }
}

export default ErrorBoundary;
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
