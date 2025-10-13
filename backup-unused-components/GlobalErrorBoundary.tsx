import React from 'react';

interface GlobalErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}

export default function GlobalErrorBoundary({ className = '', children }: GlobalErrorBoundaryProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
import React, { Component, ErrorInfo, ReactNode } from 'react';
interface Props;
  children: ReactNode;

interface State;
import logger from '../../utils/logger';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
interface Props ,
    children: ReactNode;

interface State ,
    hasError: boolean;
  error?: Error;
}

class GlobalErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State;
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo)
    // Log error to console in development;
    if (process.env.NODE_ENV === 'development')

    // Log error to external service in production;
    if (process.env.NODE_ENV === 'production')
      // Here you would typically send the error to a logging service;
      // Here you would typically send the error to a logging service

  render()
    if (this.state.hasError)
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error using logger (handles dev/prod automatically)
    logger.error('GlobalErrorBoundary caught an error:', error, errorInfo);

    // In production, you could also send to external logging service
    if (process.env.NODE_ENV === 'production') {
      // Here you would typically send the error to a logging service
      // Example: sendToLoggingService(error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center border border-white/20">
            <div className="w-16 h-16 mx-auto mb-6 bg-red-500/20 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
  </div>
            <h1 className="text-2xl font-bold text-white mb-4"></h1>
              Something went wrong;
            </div>

            <h1 className="text-2xl font-bold text-white mb-4">
              Something went wrong
            </h1>

            <p className="text-gray-300 mb-6">
              We're experiencing technical difficulties. Please try again later.
            </p>
            <button;
              onClick="{()" => window.location.reload()}

            <button
              onClick={() => window.location.reload()}
            <button>
  onClick="{()" => window.location.reload()}
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Try Again;
            </button>
  </div>
  </div>
      );
    }

    return this.props.children;

export default GlobalErrorBoundary;
  }
}

export default GlobalErrorBoundary;
export default GlobalErrorBoundary;
export default GlobalErrorBoundary;
