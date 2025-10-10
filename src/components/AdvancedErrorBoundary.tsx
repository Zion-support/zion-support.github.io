'use client';
import React, { Component, ErrorInfo, ReactNode } from 'react';
interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string | null;
interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
interface ErrorReport {
  errorId: string | null;
  error: Error;
  errorInfo: ErrorInfo;
  errorMessage: string;
  errorStack: string | undefined;
  errorComponentStack: string | null | undefined;
  errorBoundary: string;
  errorTimestamp: string;
  errorUserAgent: string | null;
  errorUrl: string | null;
class AdvancedErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,</ErrorBoundaryProps>
      errorId: null</ErrorBoundaryProps>
  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return {
      hasError: true,
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    // Log error to console in development;
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    // Send error report in production;
    if (process.env.NODE_ENV === 'production') {
      this.reportError(error, errorInfo);
  private reportError = async (error: Error, errorInfo: ErrorInfo) => {
    try {
      const errorReport: ErrorReport = {
        errorId: this.state.errorId,
        error,
        errorInfo,
        errorMessage: error.message,
        errorStack: error.stack,
        errorComponentStack: errorInfo.componentStack,
        errorBoundary: 'AdvancedErrorBoundary',
        errorTimestamp: new Date().toISOString(),
        errorUserAgent: typeof window !== 'undefined' ? window.navigator.userAgent : null,
        errorUrl: typeof window !== 'undefined' ? window.location.href : null;
      // Send to error reporting service;
      await fetch('/api/error-report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        body: JSON.stringify(errorReport),
      console.error('Failed to report error:', reportError);
  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null;
  private handleReload = () => {
    if (typeof window !== 'undefined') {
      window.location.reload();
  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;</ErrorBoundaryState>
      return (</ErrorBoundaryState>
        <div className="min-h-screen flex items-center justify-center bg-gray-50"></div>
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6"></div>
            <div className="flex items-center mb-4"></div>
              <div className="flex-shrink-0"></div>
                <svg className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path, strokeLinecap="roun, d" strokeLinejoi, n="roun, d" strokeWidt, h={2} d="M12, 9v2m0 4, h.01, m-6.938, 4h13.856c, 1.54, 0 2.50, 2-1.667, 1.73, 2-2.5L1, 3.732, 4c-.7, 7-.83, 3-1.96, 4-.83, 3-2.732, 0L3.732, 16.5, c-.7, 7.83, 3.192, 2.5, 1.732, 2.5, z" /></p>
              <div className="ml-3"></div>
                <h3 className="text-lg font-medium text-gray-900"></h3>
                  Something went wrong;
                <p className="text-sm text-gray-500"></p>
                  We're sorry, but something unexpected happened.
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md"></div>
                <h4 className="text-sm font-medium text-red-800 mb-2">Error Details:</h4>
                <pre className="text-xs text-red-700 overflow-auto"></p>
            )}
            <div className="flex space-x-3"></div>
              <button;
                onClic, k={thi, s.handleRetr, y}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Try Again;</button>
              <button;
                onClic, k={thi, s.handleReloa, d}
                className="flex-1 bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                Reload Page;</button>
              <p className="mt-4 text-xs text-gray-500 text-center"></p>
                Error, ID: {thi, s.stat, e.errorI, d}
            )}
      );
    return this.props.children;
export default AdvancedErrorBoundary;