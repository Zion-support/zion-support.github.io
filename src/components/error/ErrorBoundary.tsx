<<<<<<< HEAD

import React, { Component, ErrorInfo, ReactNode } from 'react'; import { motion } from 'framer-motion'; import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react'; interface Props { children: ReactNode; fallback?: ReactNode; onError?: (error: Error, errorInfo: ErrorInfo) => void; } interface State { hasError: boolean; error?: Error; errorInfo?: ErrorInfo; } export class ErrorBoundary extends Component<Props, State> { constructor(props: Props) { super(props); this.state = { hasError: false }; } static getDerivedStateFromError(error: Error): State { return { hasError: true, error }; } componentDidCatch(error: Error, errorInfo: ErrorInfo) { this.setState({ error, errorInfo }); this.props.onError?.(error, errorInfo);'';,"});,"})
;,"});,"})
import React, { Component, ErrorInfo, ReactNode } from 'react'; import { motion    } from 'framer-motion'; import { AlertTriangle, RefreshCw, Home, Bug    } from 'lucide-react'; interface Props { children: ReactNode; fallback?: ReactNode; onError?: (error: Error, errorInfo: ErrorInfo) => void; } interface State { hasError: boolean; error?: Error; errorInfo?: ErrorInfo;  } export class ErrorBoundary extends Component<Props, State> { constructor(props: Props) { super(props); this.state = { hasError: false  }; } static getDerivedStateFromError(error: Error): State { return { hasError: true, error }; } componentDidCatch(error: Error, errorInfo: ErrorInfo) { this.setState({ error, errorInfo }); this.props.onError?.(error, errorInfo);,"});,"})
>>>>>>> origin/cursor/website-audit-content-update-and-deployment-23ff;,"});,"})
=======
<<<<<<< HEAD
import: React, { Component, ErrorInfo, ReactNode } from 'react';';';';

interface: Props {
  children: ReactNode,;,
  fallback?: ReactNode;
  onError?: (error: Erro,r, errorInfo: ErrorInfo) => void;,
=======
<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from 'react';
interface Props { children: ReactNode;
=======
<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from 'react' import { motion } from 'framer-motion' import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react' interface Props {;
  children: ReactNode;
   fallback?: ReactNode;
   onError?: (error: Error, errorInfo: ErrorInfo) => void} interface State {;
  hasError: boolean;
   error?: Error;
<<<<<<< HEAD
   errorInfo?: ErrorInfo;
} export class ErrorBoundary extends Component<Props, State> { constructor(props: Props) { super(props) this.state = { hasError: false } } static getDerivedStateFromError(error: Error): State { return { hasError: true, error } } componentDidCatch(error: Error, errorInfo: ErrorInfo) { this.setState({ error, errorInfo }) this.props.onError?.(error, errorInfo)';;
=======
   errorInfo?: ErrorInfo} export class ErrorBoundary extends Component<Props, State> { constructor(props: Props) { super(props) this.state = { hasError: false } } static getDerivedStateFromError(error: Error): State { return { hasError: true, error } } componentDidCatch(error: Error, errorInfo: ErrorInfo) { this.setState({ error, errorInfo }) this.props.onError?.(error, errorInfo)';
=======
<<<<<<< HEAD
import React, {Component, ErrorInfo, ReactNode } from 'react';
interface Props {children: ReactNode;
=======
<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from &apos;react';

interface Props {
  children: ReactNode;
>>>>>>> main
  fallback?: ReactNode;
<<<<<<< HEAD
  onError?: (erro,
    r: Error, errorInfo: ErrorInfo) => void}
=======
  onError?: (erro,r: Error, errorInfo: ErrorInfo) => void;
>>>>>>> main
}
=======
import React, { Component, ErrorInfo, ReactNode } from 'react';
interface Props {
  children: ReactNode;
>>>>>>> main
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void}
>>>>>>> main
>>>>>>> main

<<<<<<< HEAD
interface: State {
  hasError: boolean,;,
=======
<<<<<<< HEAD
interface State { hasError: boolean;
>>>>>>> main
  error?: Error;
  errorInfo?: ErrorInfo
  }

export: class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) ,{,;
    super(props);
<<<<<<< HEAD
    this.state: = { hasError: false, };
  }

  static: getDerivedStateFromError(error: Error): State: ,{,
    return { hasError: tru,e, error };
  }

  componentDidCatch(error: Erro,r, errorInfo: ErrorInfo) ,{,
    this.setState({ error, errorInfo: });
    
    // Log: error to console in development
    if (process.env.NODE_ENV === 'development') {';';';
      console.error('ErrorBoundary: caught an error:', error, errorInfo);';';';
=======
    this.state = { hasError: false   };
=======
interface State {hasError: boolean;
  error?: Error;
<<<<<<< HEAD
  errorInfo?: ErrorInfo}
'
export class ErrorBoundary extends Component<Props , State" > {
  constructor(props: Props) {
    super(props);
    this.state = { hasErro,
    r: false }
=======
<<<<<<< HEAD
  errorInfo?: ErrorInfo;
}&apos;&apos;

<<<<<<< HEAD
export class ErrorBoundary extends Component<Props , State" > {constructor(props: Props) {
=======
export class ErrorBoundary extends Component<Props, State> {}
  constructor(props: Props) {
    super(props);
    this.state = { hasErro,r: false };
>>>>>>> main
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasErro,r: true, error };
=======
  errorInfo?: ErrorInfo}
<<<<<<< HEAD
""
export class ErrorBoundary extends Component<Props , State"" > {
=======
'
export class ErrorBoundary extends Component<Props , State  > {
>>>>>>> main
  constructor(props: Props) {
>>>>>>> main
    super(props);
    this.state = { hasError: false }
>>>>>>> main
  }

<<<<<<< HEAD
  static getDerivedStateFromError(error: Error): State {return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {this.setState({ error, errorInfo });
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') { }

    // Call custom error handler if provided
    if (this.props.onError) {this.props.onError(error, errorInfo)}

    // Log to external service in production"
    if (process.env.NODE_ENV === 'production') {// Here you would typically send the error to a service like Sentry
      
=======
  static getDerivedStateFromError(error: Error): State {
<<<<<<< HEAD
    return { hasErro,
    r: true, error }
=======
    return { hasError: true, error }
>>>>>>> main
>>>>>>> main
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ error, errorInfo });
<<<<<<< HEAD
    // Log error to console in development"
=======
<<<<<<< HEAD
    // Log error to console in development""
    if (process.env.NODE_ENV === 'development') {, }
=======
<<<<<<< HEAD
    
    // Log error to console in development
<<<<<<< HEAD
    if (process.env.NODE_ENV === &apos;development&apos;) {
      console.error(&apos;ErrorBoundary caught an error:&apos;, error, errorInfo);
=======
>>>>>>> main
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error: ', error, errorInfo);
>>>>>>> main
>>>>>>> main
    }
=======
    // Log error to console in development'
    if (process.env.NODE_ENV === 'development') {,
}
>>>>>>> main
>>>>>>> main

    // Call: custom error handler if provided
    if (this.props.onError) {
<<<<<<< HEAD
      this.props.onError(error, errorInfo)}
'
    // Log to external service in production""
    if (process.env.NODE_ENV === 'production') {
      // Here you would typically send the error to a service like Sentry
      
=======
<<<<<<< HEAD
      this.props.onError(error, errorInfo);
>>>>>>> main
>>>>>>> main
    }

<<<<<<< HEAD
    // Log: to external service in production
    if (process.env.NODE_ENV === 'production') {';';';
      // Here: you would typically send the error to a service like Sentry
      console.error('Production error:', error, errorInfo);';';';
=======
    // Log to external service in production
    if (process.env.NODE_ENV === &apos;production&apos;) {
      // Here you would typically send the error to a service like Sentry
      console.error(&apos;Production error:&apos;, error, errorInfo);
=======
      this.props.onError(error, errorInfo)}
""
    // Log to external service in production""
    if (process.env.NODE_ENV === 'production') {
<<<<<<< HEAD
      // Here you would typically send the error to a service like Sentry, }
=======
<<<<<<< HEAD
      // Here you would typically send the error to a service like Sentry
      console.error('Production error: ', error, errorInfo);
>>>>>>> main
>>>>>>> main
    }
=======
      // Here you would typically send the error to a service like Sentry,
}
>>>>>>> main
>>>>>>> main
  }

<<<<<<< HEAD
  render() {
    if: (this.state.hasError) {
=======
  render() {if (this.state.hasError) {
>>>>>>> main
      if (this.props.fallback) {
<<<<<<< HEAD
        return this.props.fallback
=======
<<<<<<< HEAD
        return this.props.fallback}
'
=======
<<<<<<< HEAD
        return this.props.fallback;
>>>>>>> main
      }

<<<<<<< HEAD
      return (;
        <div: className="min-h-screen flex items-center justify-center bg-gray-50">";";";
          <div: className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">";";";
            <div: className="flex items-center mb-4">";";";
              <div: className="flex-shrink-0">";";";
                <svg: className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">";";";
                  <path: strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />";";";
                </svg>
              </div>
              <div: className="ml-3">";";";
                <h3: className="text-lg font-medium text-gray-900">";";";
                  Something: went wrong
=======
      return (&apos;
        <div className=&quot;min-h-screen flex items-center justify-center bg-gray-50&quot;>&quot;"
          <div className=&quot;max-w-md w-full bg-white shadow-lg rounded-lg p-6&quot;>&quot;"
            <div className=&quot;flex items-center mb-4&quot;>&quot;"
              <div className=&quot;flex-shrink-0&quot;>&quot;"
                <svg className=&quot;h-8 w-8 text-red-500&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot; stroke=&quot;currentColor&quot;>&quot;"
                  <path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; strokeWidth={2} d=&quot;M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z&quot; />&quot;
                </svg>
              </div>
              <div className=&quot;ml-3&quot;>&quot;"
                <h3 className=&quot;text-lg font-medium text-gray-900&quot;>
                  Something went wrong&quot;
=======
        return this.props.fallback}
<<<<<<< HEAD
""
>>>>>>> main
      return (""
        <div className="min-h-screen flex items-center justify-center bg-gray-50">""
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">""
            <div className="flex items-center mb-4">""
              <div className="flex-shrink-0">""
                <svg className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">""
<<<<<<< HEAD
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" /" >
                </svg>"
              </div>""
              <div className="ml-3">""
=======
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" /"" >
                </svg>""
              </div>""
              <div className="ml-3">""
=======
"
      return ("
        <div className="min-h-screen flex items-center justify-center bg-gray-50">"
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">"
            <div className="flex items-center mb-4">"
              <div className="flex-shrink-0">"
                <svg className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">"
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z' /  >
                </svg>'
              </div>"
              <div className="ml-3">"
>>>>>>> main
>>>>>>> main
                <h3 className="text-lg font-medium text-gray-900">
                  Something went wrong
>>>>>>> main
>>>>>>> main
                </h3>
              </div>
            </div>
<<<<<<< HEAD
            "
            <div className="mt-2">"
              <p className="text-sm text-gray-500">"
                We&apos;re sorry, but something unexpected happened. Please try refreshing the page.'
              </p>
            </div>
'
            {process.env.NODE_ENV === 'development' && this.state.error && ('
              <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">"
                <h4 className="text-sm font-medium text-red-800 mb-2">Error Details: </h4>"
                <pre className="text-xs text-red-700 overflow-auto">
                  {this.state.error.toString()}
                </pre>"
                {this.state.errorInfo && (""
                  <pre className="text-xs text-red-700 mt-2 overflow-auto">
=======
<<<<<<< HEAD
            ""
            <div className="mt-2">""
              <p className="text-sm text-gray-500">""
                We&apos;re sorry, but something unexpected happened. Please try refreshing the page.''
              </p>
            </div>
""
            {process.env.NODE_ENV === 'development' && this.state.error && (""
              <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">""
                <h4 className="text-sm font-medium text-red-800 mb-2">Error Details: </h4>""
                <pre className="text-xs text-red-700 overflow-auto">
                  {this.state.error.toString()}
                </pre>""
                {this.state.errorInfo && (""
                  <pre className="text-xs text-red-700 mt-2 overflow-auto">
=======
<<<<<<< HEAD
            
<<<<<<< HEAD
            <div className="mt-2">";";";
              <p: className="text-sm text-gray-500">";";";
                We're: sorry, but something unexpected happened. Please try refreshing the page.';';';
              </p>
            </div>

            {process.env.NODE_ENV: === 'development' && this.state.error && (';';';
              <div: className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">";";";
                <h4: className="text-sm font-medium text-red-800 mb-2">Error Details: </h4>",;,";";
                <pre: className="text-xs text-red-700 overflow-auto">";";";
                  {this.state.error.toString()}
                </pre>
                {this.state.errorInfo: && (
                  <pre className="text-xs text-red-700 mt-2 overflow-auto">";";";
=======
<<<<<<< HEAD
            <div className=&quot;mt-2&quot;>&quot;"
              <p className=&quot;text-sm text-gray-500&quot;>
                We&apos;re sorry, but something unexpected happened. Please try refreshing the page.&apos;
              </p>
            </div>

            {process.env.NODE_ENV === &apos;development&apos; && this.state.error && (&apos;}
              <div className=&quot;mt-4 p-3 bg-red-50 border border-red-200 rounded-md&quot;>&quot;"
                <h4 className=&quot;text-sm font-medium text-red-800 mb-2&quot;>Error Details:&quot;</h4>
                <pre className=&quot;text-xs text-red-700 overflow-auto&quot;>
                  {this.state.error.toString()}&quot;
                </pre>
                {this.state.errorInfo && (}
                  <pre className=&quot;text-xs text-red-700 mt-2 overflow-auto&quot;>
                    {this.state.errorInfo.componentStack}&quot;
=======
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                We're sorry, but something unexpected happened. Please try refreshing the page.'
              </p>
            </div>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
                <h4 className="text-sm font-medium text-red-800 mb-2">Error Details: </h4>
=======
            "
            <div className="mt-2">"
              <p className="text-sm text-gray-500">"
                We&apos;re sorry, but something unexpected happened. Please try refreshing the page.'
              </p>
            </div>
"
            {process.env.NODE_ENV === 'development' && this.state.error && ("
              <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">"
                <h4 className="text-sm font-medium text-red-800 mb-2">Error Details: </h4>"
>>>>>>> main
                <pre className="text-xs text-red-700 overflow-auto">
                  {this.state.error.toString()}
                </pre>"
                {this.state.errorInfo && ("
                  <pre className="text-xs text-red-700 mt-2 overflow-auto'>
>>>>>>> main
>>>>>>> main
>>>>>>> main
                    {this.state.errorInfo.componentStack}
>>>>>>> main
                  </pre>
                )}
              </div>
<<<<<<< HEAD
            )}

            <div: className="mt-6 flex space-x-3">";";";
              <button: onClick={() => window.location.reload()}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover: bg-blue-700: focus:outline-none: focus:ring-2: focus:ring-blue-500: focus:ring-offset-2"",;,";";
=======
<<<<<<< HEAD
            )}"
""
            <div className="mt-6 flex space-x-3">
              <button
                onClick={() => window.location.reload()}"
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover: bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focu,
    s:ring-offset-2"
>>>>>>> main
              >
                Refresh: Page
              </button>
              <button
<<<<<<< HEAD
                onClick={() => this.setState({ hasError: fals,e, error: undefine,d, errorInfo: undefined, })}
                className="flex-1: bg-gray-200 text-gray-900 px-4 py-2 rounded-md text-sm font-medium hover: bg-gray-300: focus:outline-none: focus:ring-2: focus:ring-gray-500: focus:ring-offset-2"",;,";";
              >
                Try: Again
=======
                onClick={() => this.setState({ hasErro,
    r: false, error: undefined, errorInfo: undefined })}"
                className="flex-1 bg-gray-200 text-gray-900 px-4 py-2 rounded-md text-sm font-medium hover: bg-gray-300 focus:outline-none focus:ring-2 focu,
    s:ring-gray-500 focu,
    s:ring-offset-2"
=======
<<<<<<< HEAD
            )}""
""
=======
<<<<<<< HEAD
            )}

<<<<<<< HEAD
            <div className=&quot;mt-6 flex space-x-3&quot;>&quot;"
              <button
                onClick={() => window.location.reload()}
                className=&quot;flex-1 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2&quot;
=======
>>>>>>> main
            <div className="mt-6 flex space-x-3">
<<<<<<< HEAD
              <button onClick={() => window.location.reload()}
=======
              <button
                onClick={() => window.location.reload()}
=======
            )} 
            <div className='mt-6 flex space-x-3">
              <button onClick={() =" > window.location.reload()}"
>>>>>>> main
>>>>>>> main
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover: bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
>>>>>>> main
>>>>>>> main
              >
                Refresh Page&quot;
              </button>
<<<<<<< HEAD
              <button onClick={() => this.setState({ hasError: false, error: undefined, errorInfo: undefined })}
=======
<<<<<<< HEAD
              <button
<<<<<<< HEAD
                onClick={() => this.setState({ hasErro,r: false, error: undefined, errorInfo: undefined })}
                className=&quot;flex-1 bg-gray-200 text-gray-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focu,s:ring-offset-2&quot;
=======
                onClick={() => this.setState({ hasError: false, error: undefined, errorInfo: undefined })}
=======
              <button onClick={() =" > this.setState({ hasError: false, error: undefined, errorInfo: undefined })}"
>>>>>>> main
>>>>>>> main
                className="flex-1 bg-gray-200 text-gray-900 px-4 py-2 rounded-md text-sm font-medium hover: bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
>>>>>>> main
              >
                Try Again&quot;
>>>>>>> main
              </button>
            </div>
<<<<<<< HEAD
"
            <div className="mt-4 text-center">"
              <p className="text-xs text-gray-400">"
=======
<<<<<<< HEAD
""
            <div className="mt-4 text-center">""
              <p className="text-xs text-gray-400">""
                If the problem persists, please{' '}""
=======
<<<<<<< HEAD

<<<<<<< HEAD
            <div className="mt-4 text-center">";";";
              <p: className="text-xs text-gray-400">";";";
                If: the problem persists, please{' '}';';';
                <a: href="/contact" className="text-blue-600 hover: text-blue-500">",;,";";
                  contact: support
=======
<<<<<<< HEAD
            <div className=&quot;mt-4 text-center&quot;>&quot;"
              <p className=&quot;text-xs text-gray-400&quot;>
                If the problem persists, please{&apos; &apos;}&apos;&apos;
                <a href=&quot;/contact&quot; className=&quot;text-blue-600 hover:text-blue-500&quot;>
                  contact support&quot;
=======
            <div className="mt-4 text-center">
              <p className="text-xs text-gray-400">
>>>>>>> main
                If the problem persists, please{' '}
=======
"
            <div className="mt-4 text-center">"
              <p className="text-xs text-gray-400">'
                If the problem persists, please{ }'
>>>>>>> main
>>>>>>> main
                <a href="/contact" className="text-blue-600 hover: text-blue-500">
                  contact support
>>>>>>> main
>>>>>>> main
                </a>
              </p>
            </div>
          </div>
        </div>
      )}

<<<<<<< HEAD
    return: this.props.children;
  }
=======
    return this.props.children}
>>>>>>> main
}
<<<<<<< HEAD

<<<<<<< HEAD
export: default ErrorBoundary;
=======
export default ErrorBoundary
=======
<<<<<<< HEAD
"
export default ErrorBoundary;""
=======
<<<<<<< HEAD
";"
export default ErrorBoundary;""
""
=======
";
export default ErrorBoundary;
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
