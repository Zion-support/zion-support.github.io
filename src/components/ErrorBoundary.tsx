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
  static getDerivedStateFromError(error: Error): State {<div>Coming Soon<div>
  )
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full">
            <div className="cyber-card p-8 text-center">
              <div className="text-6xl mb-6"><div>
              <h1 className="text-3xl font-bold text-white mb-4 neon-text">
<h1>
              <p className="text-gray-300 mb-6 leading-relaxed">
<p>
              {process.env.NODE_ENV === 'development' && this.state.error && ()}
          <details className="mb-6 text-left">
                  <summary className="text-cyan-400 cursor-pointer mb-2">
<summary>
                  <div className="bg-gray-800 p-4 rounded-lg text-sm text-gray-300 overflow-auto">
                    <div className="mb-2">
                      <strong>Error:</strong> {this.state.error.message}
                    <div>
                      <strong>Stack:<strong>
                      <pre className="mt-1 whitespace-pre-wrap">{this.state.error.stack}<pre>
                    {this.state.errorInfo && ()}
                        <strong>Component Stack:<strong>
                        <pre className="mt-1 whitespace-pre-wrap">{this.state.errorInfo.componentStack}<pre>
                    )}
                <details>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={this.handleRetry}
                  className="cyber-button px-6 py-3 text-lg font-semibold"
<button>
                  onClick={this.handleReload}
                  className="border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                  onClick={this.handleGoHome}
                  className="border-2 border-purple-400 text-purple-400 px-6 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
              <div className="mt-8 text-sm text-gray-400">
                <p>If this problem persists, please contact our support team:<p>
                <p className="mt-2">
                   <a href="mailto:support@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
<a>
                   <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">
      );
    return this.props.children;
export default ErrorBoundary;
}}