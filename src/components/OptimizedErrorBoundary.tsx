'use client';
import React, { Component, ErrorInfo, ReactNode } from 'react';
interface ErrorBoundaryState {
  hasError: boolean;,
  error: Error | null;
  errorInfo: ErrorInfo | null;
}
interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
interface OptimizedErrorBoundaryProps {<string | number>;
interface State {<
<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error };
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ error, errorInfo });
  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Something went wrong<h1>
            <p className="text-gray-300">Please refresh the page and try again.<p>
        <div>
    this.state = {<State> {<string, unknown>
          ) => void;
      ).gtag;
      gtag('event', 'exception', {<div>Coming Soon<div>
  )
          <ErrorFallback
          error={this.state.error}
          errorInfo={this.state.errorInfo}
          errorId={this.state.errorId}
          onRetry={this.handleRetry}
<ErrorFallbackProps>()
  ({ error, errorInfo, errorId, onRetry }) => ()
          <div className='min-h-screen flex items-center justify-center bg-gray-50 px-4'>
      <div className='max-w-md w-full bg-white rounded-lg shadow-lg p-6 text-center'>
        <div className='mb-4'>
          <div className='mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center'>
            <svg
className='w-6 h-6 text-red-600'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
<path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z'
<svg>
        <h1 className='text-xl font-semibold text-gray-900 mb-2'>
<h1>
        <p className='text-gray-600 mb-4'>
          We&apos;re sorry, but something unexpected happened. Please try again.
        <p>
        {process.env['NODE_ENV'] === 'development' && error && ()}
          <details className='mb-4 text-left'>
            <summary className='cursor-pointer text-sm text-gray-500 hover:text-gray-700'>
<summary>
            <div className='mt-2 p-3 bg-gray-100 rounded text-xs font-mono text-gray-800 overflow-auto'>
              <div className='mb-2'>
                <strong>Error:</strong> {error.message}
                <strong>Stack:<strong>
                <pre className='whitespace-pre-wrap'>{error.stack}<pre>
              {errorInfo && ()}
                  <strong>Component Stack:<strong>
                  <pre className='whitespace-pre-wrap'>
                    {errorInfo.componentStack}
                  <pre>
              )}
          <details>
        <div className='flex flex-col sm:flex-row gap-2 justify-center'>
          <button
            onClick={onRetry}
            className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors'
<button>
            onClick={() => window.location.reload()}
            className='px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors'
        {errorId && ()}
          <p className='mt-4 text-xs text-gray-400'>Error ID: {errorId}<p>

}}}}