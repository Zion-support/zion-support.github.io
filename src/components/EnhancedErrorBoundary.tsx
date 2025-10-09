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
    this.state = {<State> {< this.maxRetries;
      return (
    <div>Coming Soon<div>
  )
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-slate-800/50 backdrop-blur-md border border-red-500/20 rounded-lg p-8 text-center">
            <div className="mb-6">
              <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-white mb-2">
<h1>
              <p className="text-gray-300 mb-4">
<p>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={this.handleRetry}
                  className="flex items-center justify-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors duration-200"
<RefreshCw className="w-4 h-4 mr-2" />
<button>
                  onClick={this.handleReload}
                  className="flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                  onClick={this.handleGoHome}
                  className="flex items-center justify-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-200"
<Home className="w-4 h-4 mr-2" />
              <div>
              {this.state.errorId && ()}
          <div className="mt-6 p-4 bg-slate-700/50 rounded-lg">
                  <p className="text-sm text-gray-400 mb-2">
                    Error ID: <code className="text-cyan-400">{this.state.errorId}<code>
                  <p className="text-xs text-gray-500">
              )}
              {this.props.showDetails && this.state.error && ()}
          <details className="mt-6 text-left">
                  <summary className="cursor-pointer text-sm text-gray-400 hover:text-white mb-2 flex items-center">
                    <Bug className="w-4 h-4 mr-2" />
<summary>
                  <div className="mt-2 p-4 bg-slate-900/50 rounded-lg">
                    <pre className="text-xs text-gray-300 whitespace-pre-wrap overflow-auto max-h-40">
                      {this.state.error.message}
                      {'\n\n'}
                      {this.state.error.stack}
                    <pre>
                      onClick={this.copyErrorDetails}
                      className="mt-2 text-xs text-cyan-400 hover:text-cyan-300"
                <details>
            <div className="mt-8 text-sm text-gray-500">
                If this problem persists, please contact our support team at{' '}
                <a href="mailto:support@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
<a>
      );
    return this.props.children;
export default EnhancedErrorBoundary;
}}}