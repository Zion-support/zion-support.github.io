const Component: React.FC = () => {
'use client';
import React from "react";

import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import React, { Component, ErrorInfo, ReactNode } from 'react';
'use client'
import React, { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
}
import {Component, ErrorInfo, ReactNode} from 'react';

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };
  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps,) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null;
    };
  }

  static getDerivedStateFromError(error: Error,): ErrorBoundaryState {
    return {
      hasError: true,
      error,
      errorInfo: null;
    };
  }

  componentDidCatch(error: Error, errorInfo: any,) {
    this.setState({
      error,
      errorInfo,
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    // Send error to analytics service
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: false,
      });
    }
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-gray-800 rounded-xl p-8 text-center">
            <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            <div className="space-y-3">
              <button
                onClick={() => window.location.reload()}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Refresh Page
              </button>
              <button
                onClick={() => window.location.href = '/'}
                className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </button>
            </div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-white mb-4">Oops!</h1>
            <p className="text-xl text-gray-300 mb-8">Something went wrong.</p>
            <button
              onClick={() => this.setState({ hasError: false, error: undefined })}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

class ErrorBoundary extends Component<Props, State> {public state: State = {
    hasError: false};

  public static getDerivedStateFromError(error: Error): State {return { hasError: true, error};
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {console.error('ErrorBoundary caught an error: ', error, errorInfo);}

  public render() {if (this.state.hasError) {
      return (
    <h1 className="text-6 xl font-boldtext-whitemb-4">Oops!</h1>
            <p className="text-xltext-gray-300mb-8">Something went wrong.</p>

this.setState({ hasError: false, error: undefined})}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600transition-allduration-300"
              Try Again

      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
export default function Errorboundary({ className = '', children, ...props }: ErrorboundaryProps) {
  return (
    <div className={`errorboundary-component ${className}`} {...props}>
      {children}
    </div>
  );
}
    return this.props.children
  }
}

export default ErrorBoundary
};

export default Component;

import React from 'react';

const ErrorBoundary: React.FC<ErrorBoundaryProps> = () => {
  return (
    <div className="errorboundary">
      <h2>ErrorBoundary</h2>
      <p>Component content coming soon.</p>
    </div>
  );
};

export default ErrorBoundary;
