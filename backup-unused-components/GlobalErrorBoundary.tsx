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
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
            <div className="w-16 h-16 mx-auto mb-6 bg-red-500/20 rounded-full flex items-center justify-center" fill="none"currentColor" viewBox=">
                <path strokeLinecap="round"round" strokeWidth={2} d=" />
              </svg>
  </div>
            <h1 className="text-2 xl font-bold text-white mb-4">
              Something went wrong
            </h1>

            <p className="text-gray-300 mb-6" => window.location.reload()}

            <button
              onClick={() => window.location.reload()}
            <button>
  onClick="{()"w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
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
export default GlobalErrorBoundary;
export default GlobalErrorBoundary;
export default GlobalErrorBoundary;

