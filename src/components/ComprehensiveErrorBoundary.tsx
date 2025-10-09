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
import ModernLoadingSpinner from './ModernLoadingSpinner';
interface Props {<Props, State> {<ErrorBoundaryProps, ErrorBoundaryState> {
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
    this.state = {<State> {< this.maxRetries) {<div>Coming Soon<div>
  )
          <ModernLoadingSpinner
            size="lg"
            text="Retrying..."
            fullScreen={true}
<div>Coming Soon<div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="cyber-card hologram-card max-w-2xl w-full p-8 text-center">
            <div className="text-6xl mb-6"><div>
            <h1 className="text-3xl font-bold text-white mb-4">
<h1>
            <p className="text-gray-300 mb-6">
<p>
            <div className="bg-gray-800 rounded-lg p-4 mb-6 text-left">
              <h3 className="text-white font-semibold mb-2">Error Details:<h3>
              <p className="text-sm text-gray-300 mb-2">
                <strong>Error ID:</strong> {this.state.errorId}
                <strong>Message:</strong> {this.state.error?.message || 'Unknown error'}
              <p className="text-sm text-gray-300">
                <strong>Retry Attempts:</strong> {this.state.retryCount} / {this.maxRetries}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {this.state.retryCount < this.maxRetries && ()}
          <button
                  onClick={this.handleRetry}
                  className="cyber-button"
                  aria-label={`Retry loading content. ${this.maxRetries - this.state.retryCount} attempts remaining.`}
<button>
              )}
                onClick={this.handleReload}
                aria-label="Reload the entire page"
              <a
                href="/contact"
                aria-label="Contact support for help with this error"
<a>
            <div>
            {process.env.NODE_ENV === 'development' && this.state.error?.stack && ()}
          <details className="mt-6 text-left">
                <summary className="text-white cursor-pointer hover:text-cyan-400">
<summary>
                <pre className="mt-2 p-4 bg-gray-900 rounded text-xs text-gray-300 overflow-auto">
                  {this.state.error.stack}
                <pre>
              <details>
      );
    return this.props.children;
export default ComprehensiveErrorBoundary;
}}}}