import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Helmet  } from "react-helmet-async";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string}

class EnhancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: "",
    }}

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Enhanced Error Boundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
  error: Error | null;
  errorInfo: ErrorInfo | null;
  retryCount: number;
}

class EnhancedErrorBoundary extends Component<Props, State> {
  private retryTimeoutId: NodeJS.Timeout | null = null;

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    }}

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
    });

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo)}

    // Log error to external service in production
    if (process.env.NODE_ENV === 'production') {
      this.logErrorToService(error, errorInfo)}
  }

  logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    // In a real application, you would send this to an error reporting service
    // like Sentry, LogRocket, or Bugsnag
    const errorData = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      errorId: this.state.errorId,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
    };

      // Example: Send to error tracking service
      // errorTrackingService.captureException(error, { extra: errorData });
      
      console.error('Error logged to service:', errorData)} catch (loggingError) {
      console.error('Failed to log error to service:', loggingError)}
  };

  private handleRetry = () => {
    this.setState(prevState => ({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: "",
    })};

  private handleReload = () => {
    window.location.reload()};

  private handleGoHome = () => {
    window.location.href = '/'};

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback}

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-2 xl w-full bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </>
            <h1 >
              Something went wrong
            </>
            <p >
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
            </>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-left">
                <h3 className="text-red-400 font-semibold mb-2 flex items-center">
                  <Bug className="w-4 h-4 mr-2" />
                  Error Details (Development Only)
                </>
                <div className="text-sm text-gray-300 space-y-2">
                  <div >
                    <strong>Error:</strong> {this.state.error.message}
                  </>
                  <div >
                    <strong>Error ID:</strong> {this.state.errorId}
                  </>
                  {this.state.error.stack && (
                    <div >
                      <strong>Stack Trace:</>
                      <p >
                        {this.state.error.stack}
                      </>
                    </>
                  )}
                  {this.state.errorInfo?.componentStack && (
                    <div >
                      <strong>Component Stack:</>
                      <p >
                        {this.state.errorInfo.componentStack}
                      </>
                    </>
                  )}
                </>
              </>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <button
                onClick={() => window.location.reload()}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-500" />
                Try Again
              </>
              <button onClick={this.handleGoHome}
                className="flex items-center justify-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 group"
              >
                <Home className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Go Home
              </>
              <button onClick={this.handleReload}
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Reload Page
              </>
            </>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/"
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </>
              <a href="mailto:support@ziontechgroup.com"
                className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Support
              </>
            </>
            <div className="mt-6 text-sm text-gray-400">
              <p>Error ID: {this.state.errorId}</>
              <p>If this problem persists, please contact our support team with this error ID.</>
            </>
          </>
        </>
      )}

    return this.props.children}
}

export default EnhancedErrorBoundary;

            <div className="mt-6 text-sm text-gray-400">
              <p>If this problem persists, please contact our support team.</>
              <p >
                Error ID: {Date.now().toString(36)}-{Math.random().toString(36).substr(2, 9)}
              </>
            </>