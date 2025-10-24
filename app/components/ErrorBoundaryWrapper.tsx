'use client';
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode
}

interface State {
  hasErro
  r: boolean
  error?: Error,
;
class ErrorBoundaryWrapper extends Component<Props, State> {
  constructor(props: Props) {
    super(props)}
    this.state = { hasError: false};
  static getDerivedStateFromError(error: Error): State {
    return { hasErro
  r: true, error}
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error for debugging in development
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.log('Error caught by boundar)
  y:', error, errorInfo)}
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        <div className="text-center p-8">
            <h1 className="text-4xl font-bold text-white mb-6">Something went wrong</h1>
            <p className="text-lg text-gray-300 mb-8">We're sorry, but something unexpected happened.</p>
            <button
              onClick = {
() => window.location.reload();
};
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semiboldtransition-colorsduration-200"
            >
              Try Again
            
          
      );
    }

    return this.props.children
  }
}

export default ErrorBoundaryWrapper
}

}
}