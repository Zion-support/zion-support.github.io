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
/**
 * Improved Error Boundary;
 * Enhanced error handling with recovery mechanisms and user-friendly fallbacks;
 */
interface Props {<string | number>;
interface State {<Props, State> {<ErrorBoundaryProps, ErrorBoundaryState> {
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
    this.state = {<State> {<string, unknown>) => void } }).Sentry.captureException(error, {<div>Coming Soon<div>
  )
          <div className="error-boundary-container" style={styles.container}>
          <div style={styles.content}>
            <div style={styles.icon}><div>
            <h1 style={styles.title}>Oops! Something went wrong<h1>
            <p style={styles.message}>
              We're sorry for the inconvenience. The application encountered an unexpected error.
            <p>
            {process.env['NODE_ENV'] === 'development' && this.state.error && ()}
          <details style={styles.details}>
                <summary style={styles.summary}>Error Details (Development Only)<summary>
                <div style={styles.errorDetails}>
                  <p style={styles.errorMessage}>
                    <strong>Error:</strong> {this.state.error.message}
                  {this.state.error.stack && ()}
          <pre style={styles.stack}>
                      {this.state.error.stack}
                    <pre>
                  )}
                  {this.state.errorInfo?.componentStack && ()}
                      <strong>Component Stack:<strong>
                      {this.state.errorInfo.componentStack}
                <div>
            <div style={styles.actions}>
              <button
                onClick={this.resetErrorBoundary}
                style={styles.button}
                aria-label="Try Again"
<button>
                onClick={this.handleReload}
                style={{...styles.button, ...styles.secondaryButton}}
                aria-label="Reload Page"
                onClick={this.handleGoHome}
                aria-label="Go to Homepage"
            {this.state.errorCount > 1 && ()}
          <p style={styles.errorCount}>
                This error has occurred {this.state.errorCount} times;
      );
    return this.props.children;
export default ImprovedErrorBoundary;
const styles = {