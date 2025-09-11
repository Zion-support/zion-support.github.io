<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  RefreshCw, 
  Home, 
  ArrowLeft, 
  Bug, 
  XCircle,
  Info,
  Shield,
  Zap
} from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string | null;
  retryCount: number;
  isRecovering: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-2xl w-full bg-white dark:bg-zion-slate-dark rounded-2xl shadow-2xl border border-zion-slate-light/20 overflow-hidden"
          >
            {/* Header */}
            <div className={`px-8 py-6 ${
              errorSeverity === 'critical' ? 'bg-red-500' :
              errorSeverity === 'high' ? 'bg-orange-500' :
              errorSeverity === 'medium' ? 'bg-yellow-500' : 'bg-blue-500'
            } text-white`}>
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-full ${
                  errorSeverity === 'critical' ? 'bg-red-600' :
                  errorSeverity === 'high' ? 'bg-orange-600' :
                  errorSeverity === 'medium' ? 'bg-yellow-600' : 'bg-blue-600'
                }`}>
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Something went wrong</h1>
                  <p className="text-white/90">We've encountered an unexpected error</p>
                </div>
              </div>
            </div>
            <h1 className="text-xl font-semibold text-gray-900 mb-2">
              Oops! Something went wrong
            </h1>
            <p className="text-gray-600 mb-4">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Refresh Page
            </button>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-4 text-left">
                <summary className="cursor-pointer text-sm text-gray-500">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 text-xs text-red-600 bg-red-50 p-2 rounded overflow-auto">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
=======
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle, RefreshCw, Home, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
function ErrorFallback({ error, resetError }) {
    const navigate = useNavigate();
    return (<div className="min-h-screen bg-zion-blue-dark flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-6">
          <div className="w-20 h-20 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-10 h-10 text-zion-purple"/>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Oops! Something went wrong</h1>
          <p className="text-zion-slate-light">
            We encountered an unexpected error. Don't worry, our team has been notified.
          </p>
        </div>

        {error && process.env.NODE_ENV === 'development' && (<details className="mb-6 text-left">
            <summary className="cursor-pointer text-zion-cyan hover:text-zion-cyan-light mb-2">
              Error Details (Development)
            </summary>
            <div className="bg-zion-slate-dark p-3 rounded text-xs text-zion-slate-light overflow-auto">
              <pre>{error.stack}</pre>
            </div>
          </details>)}

        <div className="space-y-3">
          <Button onClick={resetError} className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white">
            <RefreshCw className="w-4 h-4 mr-2"/>
            Try Again
          </Button>
          
          <Button variant="outline" onClick={() => router(-1)} className="w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark">
            <ArrowLeft className="w-4 h-4 mr-2"/>
            Go Back
          </Button>
          
          <Link to="/" className="block w-full px-4 py-2 text-center border border-zion-purple text-zion-purple rounded-md hover:bg-zion-purple hover:text-white transition-colors">
            <Home className="w-4 h-4 inline mr-2"/>
            Go Home
          </Link>
        </div>

        <div className="mt-6 text-xs text-zion-slate-light">
          <p>If this problem persists, please contact our support team.</p>
          <p className="mt-1">
            Error ID: {error?.name || 'Unknown'} - {new Date().toISOString()}
          </p>
        </div>
      </div>
    </div>)}
export function ErrorBoundary({ children, fallback, onError }) {
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const handleError = (event) => {
            setHasError(true);
            setError(event.error);
            if (onError) {
                onError(event.error, { componentStack: event.error?.stack })}
            // Log error to console in development
            if (process.env.NODE_ENV === 'development') {
                console.error('ErrorBoundary caught an error:', event.error)}
        };
        const handleUnhandledRejection = (event) => {
            setHasError(true);
            setError(new Error(event.reason));
            if (onError) {
                onError(new Error(event.reason), { componentStack: event.reason?.stack })}
            // Log error to console in development
            if (process.env.NODE_ENV === 'development') {
                console.error('ErrorBoundary caught an unhandled rejection:', event.reason)}
        };
        window.addEventListener('error', handleError);
        window.addEventListener('unhandledrejection', handleUnhandledRejection);
        return () => {
            window.removeEventListener('error', handleError);
            window.removeEventListener('unhandledrejection', handleUnhandledRejection)}}, [onError]);
    const resetError = () => {
        setHasError(false);
        setError(null)};
    if (hasError) {
        if (fallback) {
            return fallback}
        return (<ErrorFallback error={error || null} resetError={resetError}/>)}
    return <>{children}</>}
// Hook for functional components to handle errors
export function useErrorHandler() {
    const [error, setError] = useState(null);
    const handleError = React.useCallback((error) => {
        setError(error);
        console.error('Error caught by useErrorHandler:', error)}, []);
    const clearError = React.useCallback(() => {
        setError(null)}, []);
    return { error, handleError, clearError }}
// Higher-order component for wrapping components with error handling
export function withErrorBoundary(Component, errorBoundaryProps) {
    return function WithErrorBoundary(props) {
        return (<ErrorBoundary {...errorBoundaryProps}>
        <Component {...props}/>
      </ErrorBoundary>)}}
>>>>>>> origin/clean-error-fixing-automation
