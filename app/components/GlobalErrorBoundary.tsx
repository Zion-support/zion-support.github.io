<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from 'react';";"
import { RefreshCw, Home, Bug }; from 'lucide-react';";"
import { Link }; from 'react-router-dom';";"
=======
<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from 'react",";";";
      import {RefreshCw, Home, Bug} from 'lucide-react",";";";
      interface Props {"}"
        "
  children: ReactNode,
      fallback?: ReactNode";
    },";";
    {}";";";
,"
      interface State {"}"
        "
  hasError: boolean,
      error?: Error,
      errorInfo?: ErrorInfo,
      errorId?: string";
    },";";
    {}";";";
,"
      class GlobalErrorBoundary extends Component<Props, State> {"}"
        "
  constructor(props: Props) {"}"
        "
    super(props),
      this.state = { hasError: false };";
    },";";
    {}";";";
,"
      static getDerivedStateFromError(error: Error): State {"}"
        "
    return {"}"
        "
      hasError: true,","
        "
      error,","
        "
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`","
        "
    };";
    },";";
    {}";";";
,"
      componentDidCatch(error: Error, errorInfo: ErrorInfo) {"}"
        "
    // Log error to console in development","
        "
    if (process.env.NODE_ENV === 'development') {"}"
";";
      };";";";
;"
    // Log error to external service in production","
        "
    if (process.env.NODE_ENV === 'production') {"}"
        "
      // Here you would typically send the error to a logging service","
        "
      };";
    },";";
    {}";";";
,"
      render() {"}"
        "
    if (this.state.hasError) {";"}"
      return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">";")"
          <div className="max-w-md w-full bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center border border-white/20">";"
            <div className="w-16 h-16 mx-auto mb-6 bg-red-500/20 rounded-full flex items-center justify-center">";"
              <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">";"
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />";"
              </$1>"
            </$1>"
            <h1 className="text-3xl font-bold text-white mb-4">";"
              Oops! Something went wrong";"
            </$1>"
            <p className="text-gray-300 mb-6 text-lg">","
        "
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.","
        "
            </p>","
        "
            {this.state.errorId && (",)}"
        "
              <div className="mb-6 p-4 bg-slate-700 rounded-lg">";"
                <p className="text-sm text-gray-400 mb-2">Error ID:</$1>"
                <code className="text-purple-400 font-mono text-sm">{this.state.errorId}</$1>"
              </$1>"
            )};";";";
;"
            {process.env.NODE_ENV === 'development' && this.state.error && (";")}"
              <div className="mb-6 p-4 bg-slate-700 rounded-lg text-left">";"
                <h3 className="text-sm font-semibold text-red-400 mb-2 flex items-center">";"
                  <Bug className="w-4 h-4 mr-2" />";"
                  Error Details (Development Only):";"
                </$1>"
                <pre className="text-xs text-gray-300 whitespace-pre-wrap overflow-auto max-h-40">";"
                  {this.state.error.toString()};"
                </pre>","
        "
                {this.state.errorInfo && (";")}"
                  <pre className="text-xs text-gray-400 mt-2 whitespace-pre-wrap overflow-auto max-h-40">","
        "
                    {this.state.errorInfo.componentStack};"
                  </$1>"
                )};"
              </$1>"
            )};";";";
;"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">","
        "
              <button",>"
        "
                onClick={this.handleRetry},"
      className="flex items-center justify-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-medium";"
              >";"
                <RefreshCw className="w-5 h-5 mr-2" />","
        "
                Try Again","
        "
              </button>","
        "
              <button",>"
        "
                onClick={this.handleReload},"
      className="flex items-center justify-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors font-medium";"
              >";"
                <RefreshCw className="w-5 h-5 mr-2" />","
        "
                Reload Page","
        "
              </button>","
        "
              <",>"
        "
                to="/","
      className="flex items-center justify-center px-6 py-3 bg-slate-600 hover:bg-slate-500 text-white rounded-lg transition-colors font-medium";"
              >";"
                <Home className="w-5 h-5 mr-2" />","
        "
                Go Home","
        "
              </>","
        "
            </div>","
        "
            <div className="mt-8 pt-6 border-t border-slate-700">";"
              <p className="text-sm text-gray-400">";"
                If this problem persists, please contact our support team at{' '};"
                <a",>"
        "
                  href="mailto:support@ziontechgroup.com" ";"
                  className="text-purple-400 hover:text-purple-300 transition-colors";"
                >";"
                  support@ziontechgroup.com";"
                </$1>"
              </$1>"
            </$1>"
          </$1>"
        </$1>"
      )
    },
    {};
,
      return this.props.children
    },
    {};";
};";";
";";";
import React, { Component, ErrorInfo, ReactNode } from 'react";";";";
import { RefreshCw, Home, Bug } from 'lucide-react";";";";
import { Link } from 'react-router-dom";
interface Props {
  children: ReactNode;
  fallback?: ReactNode,
};
=======
import React, { Component, ErrorInfo, ReactNode } from 'react';";
import { RefreshCw, Home, Bug } from 'lucide-react';";
import { Link } from 'react-router-dom';";
=======
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { RefreshCw, Home, Bug } from 'lucide-react';
import { Link } from 'react-router-dom';
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04

>>>>>>> main
interface Props {
  children: ReactNode
  fallback?: ReactNode
=======
import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
>>>>>>> cursor/fix-errors-and-merge-to-main-b0e1
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class GlobalErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

<<<<<<< HEAD
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console in development
<<<<<<< HEAD
<<<<<<< HEAD
    if (process.env.NODE_ENV === 'development') {";";"
      console.error('Global Error Boundary caught an error:', error, errorInfo);";";"
    }

    // Log error to external service in production
    if (process.env.NODE_ENV === 'production') {";";"
      // Here you would typically send the error to a logging service
      console.error('Production error:', error, errorInfo);";";"
=======
    if (process.env.NODE_ENV === 'development') {";";";";";";";
      console.error('Global Error Boundary caught an error:', error, errorInfo);";";";";";";";
=======
    if (process.env.NODE_ENV === 'development') {""";
      console.error('Global Error Boundary caught an error:', error, errorInfo)"";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
    }

    // Log error to external service in production
    if (process.env.NODE_ENV === 'production') {""";
      // Here you would typically send the error to a logging service
<<<<<<< HEAD
      console.error('Production error:', error, errorInfo);";";";";";";";
>>>>>>> main
=======
      console.error('Production error:', error, errorInfo)"";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
    }

>>>>>>> main
    this.setState({
    error,
      errorInfo,
<<<<<<< HEAD
    })
=======
<<<<<<< HEAD
  });
  };";
  render() {";";
    if (this.state.hasError) {";";";
      return ("
        <div className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">";"
          <div className ="max-w-md w-full bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center border border-white/20">";"
            <div className ="w-16 h-16 mx-auto mb-6 bg-red-500/20 rounded-full flex items-center justify-center">";"
              <Bug className ="w-8 h-8 text-red-400" />";";";";
            </div>"
            <h1 className ="text-2xl font-bold text-white mb-4">";";";
              Oops! Something went wrong";";";
            </h1>"
            <p className ="text-gray-300 mb-6">";"
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix the issue.";";";";
            </p>"
            {process.env.NODE_ENV === 'development' && this.state.error && (";"
              <div className ="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-left">";"
                <h3 className ="text-red-400 font-semibold mb-2">Error Details: </$1>"
                <p className ="text-red-200 text-sm font-mono break-all">",";
                  {this.state.error.message};";";
                </p>";";";
                {this.state.errorId && ("
                  <p className ="text-gray-400 text-xs mt-2">";
                    Error ID: {this.state.errorId};
                  </p>";
                )};";";
              </div>";";";
            )}"
            <div className ="flex flex-col sm: flex-row gap-3">",";";";
              <button onClick ={() => window.location.reload()}"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover: from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"";";";";
              >"
                <RefreshCw className ="w-4 h-4" />";";";
                Try Again";";";
              </button>"
              <Link to ="/"";"
                className="flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 font-semibold py-3 px-6 rounded-lg transition-all duration-300"";";";";
              >"
                <Home className ="w-4 h-4" />";
=======
    });
>>>>>>> main
=======
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('GlobalErrorBoundary caught an error:', error, errorInfo);
>>>>>>> cursor/fix-errors-and-merge-to-main-b0e1
  }

  render() {
    if (this.state.hasError) {
      return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <div  className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">";"
          <div  className ="max-w-md w-full bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center border border-white/20">";"
            <div  className ="w-16 h-16 mx-auto mb-6 bg-red-500/20 rounded-full flex items-center justify-center">";"
              <Bug: className ="w-8 h-8 text-red-400" />";"
            </div>
            
            <h1  className ="text-2xl font-bold text-white mb-4">";"
              Oops! Something went wrong
            </h1>
            
            <p  className ="text-gray-300 mb-6">";"
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix the issue.";";"
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (";";"
              <div  className ="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-left">";"
                <h3  className ="text-red-400 font-semibold mb-2">Error Details:</h3>";"
                <p  className ="text-red-200 text-sm font-mono break-all">";"
                  {this.state.error.message}
                </p>
                {this.state.errorId && (
                  <p  className ="text-gray-400 text-xs mt-2">";"
=======
        <div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">";";";";
          <div: className ="max-w-md w-full bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center border border-white/20">";";";";
            <div: className ="w-16 h-16 mx-auto mb-6 bg-red-500/20 rounded-full flex items-center justify-center">";";";";
              <Bug: className ="w-8 h-8 text-red-400" />";";";";
=======
        <div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">";
          <div: className ="max-w-md w-full bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center border border-white/20">";
            <div: className ="w-16 h-16 mx-auto mb-6 bg-red-500/20 rounded-full flex items-center justify-center">";
              <Bug className="w-8 h-8 text-red-400" />";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
            </div>
            
            <h1: className ="text-2xl font-bold text-white mb-4">";
              Oops! Something went wrong
            </h1>
            
            <p: className ="text-gray-300 mb-6">";
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix the issue.""'"
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (""";
              <div: className ="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-left">";
                <h3: className ="text-red-400 font-semibold mb-2">Error Details:</h3>";
                <p: className ="text-red-200 text-sm font-mono break-all">";
                  {this.state.error.message}
                </p>
                {this.state.errorId && (
<<<<<<< HEAD
                  <p: className ="text-gray-400 text-xs mt-2">";";";";
>>>>>>> main
=======
                  <p: className ="text-gray-400 text-xs mt-2">";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
                    Error ID: {this.state.errorId}
                  </p>
                )}
              </div>
            )}

<<<<<<< HEAD
<<<<<<< HEAD
            <div  className ="flex flex-col sm:flex-row gap-3">";"
              <button  onClick ={() => window.location.reload()}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"";"
=======
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-medium text-gray-900">Application Error</h3>
              <p className="mt-2 text-sm text-gray-500">
                {this.state.error?.message || 'An unexpected error occurred'}
              </p>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
>>>>>>> cursor/fix-errors-and-merge-to-main-b0e1
              >
                Reload Page
              </button>
<<<<<<< HEAD
              
              <Link: to ="/"";"
                className="flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 font-semibold py-3 px-6 rounded-lg transition-all duration-300"";"
              >
                <Home: className ="w-4 h-4" />";"
=======
            <div: className ="flex flex-col sm:flex-row gap-3">";";";";
=======
            <div: className ="flex flex-col sm:flex-row gap-3">";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
              <button: onClick ={() => window.location.reload()}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300";
              >
                <RefreshCw className="w-4 h-4" />";
                Try Again
              </button>
              
              <Link: to ="/";
                className="flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 font-semibold py-3 px-6 rounded-lg transition-all duration-300";
              >
<<<<<<< HEAD
                <Home: className ="w-4 h-4" />";";";";
>>>>>>> main
>>>>>>> main
=======
                <Home className="w-4 h-4" />";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
                Go Home
              </Link>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b0e1
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
