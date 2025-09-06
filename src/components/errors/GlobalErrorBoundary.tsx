<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  AlertTriangle,
  RefreshCw,
  Home,
  Bug,
  Send,
  Clipboard,;
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import * as Sentry from '@sentry/nextjs';
import { logErrorToProduction } from '@/utils/productionLogger';
<<<<<<< HEAD
=======
=======
'use client'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string | null;
  retryCount: number;
  userFeedback: string;
  showDetails: boolean;

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  enableRetry?: boolean;
  maxRetries?: number;
  showReportButton?: boolean;
  context?: string;

export class GlobalErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  private retryTimeouts: NodeJS.Timeout[] = [];

  constructor(props: ErrorBoundaryProps) {
<<<<<<< HEAD
    super(props);
=======
<<<<<<< HEAD
    super(props);
=======
'use client'

import React, { Component, ErrorInfo, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AlertTriangle, RefreshCw, Home, Bug, Send, Clipboard } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import * as Sentry from '@sentry/nextjs'
import {logErrorToProduction} from '@/utils/productionLogger';
interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
  errorInfo: ErrorInfo | null
  errorId: string | null
  retryCount: number
  userFeedback: string
  showDetails: boolean
}

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
  onError?: (error: Error, errorInfo: ErrorInfo) => void
  enableRetry?: boolean
  maxRetries?: number
  showReportButton?: boolean
  context?: string
}

export class GlobalErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  private retryTimeouts: NodeJS.Timeout[] = []

  constructor(props: ErrorBoundaryProps) {
    super(props)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    super(props)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null,
      retryCount: 0,
      userFeedback: '',
<<<<<<< HEAD
      showDetails: false,
    };  }
=======
<<<<<<< HEAD
<<<<<<< HEAD
      showDetails: false,
    };
=======
      showDetails: false
    }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      showDetails: false
    }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return {
      hasError: true,
<<<<<<< HEAD
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const errorId = this.generateErrorId();
=======
<<<<<<< HEAD
<<<<<<< HEAD
      error,
    };
=======
      error
    }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const errorId = this.generateErrorId()
    
    // Enhanced error logging
    const enhancedError = {
<<<<<<< HEAD
      ...error,
=======
      error
    }
  }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

    // Enhanced error logging
    const enhancedError = {
<<<<<<< HEAD
      ...error,      componentStack: errorInfo.componentStack,
=======
      ...error;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      ...error;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      componentStack: errorInfo.componentStack,
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      errorBoundary: this.props.context || 'GlobalErrorBoundary',
      timestamp: new Date().toISOString(),
      userAgent: typeof window !== 'undefined' ? navigator.userAgent : 'SSR',
      url: typeof window !== 'undefined' ? window.location.href : 'SSR',
      userId: this.getUserId(),
<<<<<<< HEAD
      buildInfo: this.getBuildInfo(),
    };
=======
<<<<<<< HEAD
<<<<<<< HEAD
      buildInfo: this.getBuildInfo(),
    };
=======
      buildInfo: this.getBuildInfo()
    }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.group('🚨 Error Boundary Caught Error');
      logErrorToProduction('Error:', { data: error });
      logErrorToProduction('Error Info:', { data: errorInfo });
      logErrorToProduction('Enhanced Error:', { data: enhancedError });
      console.groupEnd();
    }

    // Report to Sentry
    Sentry.withScope(scope => {
      scope.setTag(
        'errorBoundary',
        this.props.context || 'GlobalErrorBoundary'
      );
      scope.setLevel('error');
      scope.setContext('errorInfo', {
        componentStack: errorInfo.componentStack,
        retryCount: this.state.retryCount,
      });

      Sentry.captureException(error);
    });

    // Custom error handler
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    this.setState({
<<<<<<< HEAD
      errorInfo,
      errorId,
    });  }

  componentWillUnmount() {
    // Clear any pending retry timeouts
=======
<<<<<<< HEAD
      errorInfo,
      errorId,
    });
=======
      buildInfo: this.getBuildInfo()
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.group('🚨 Error Boundary Caught Error')
      logErrorToProduction('Error:', { data: error })
      logErrorToProduction('Error Info:', { data: errorInfo })
      logErrorToProduction('Enhanced Error:', { data: enhancedError })
      console.groupEnd()
    }

    // Report to Sentry
    Sentry.withScope((scope) => {
      scope.setTag('errorBoundary', this.props.context || 'GlobalErrorBoundary')
      scope.setLevel('error')
      scope.setContext('errorInfo', {
        componentStack: errorInfo.componentStack,
        retryCount: this.state.retryCount
      })
      
      Sentry.captureException(error)
    })

    // Custom error handler
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }

    this.setState({
      errorInfo;
      errorId
    })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      errorInfo;
      errorId
    })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }

  componentWillUnmount() {
    // Clear any pending retry timeouts
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    this.retryTimeouts.forEach(timeout => clearTimeout(timeout));
  }

  private generateErrorId(): string {
<<<<<<< HEAD
    return `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;  }
=======
    return `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
=======
    this.retryTimeouts.forEach(timeout => clearTimeout(timeout))
  }

  private generateErrorId(): string {
    return `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    this.retryTimeouts.forEach(timeout => clearTimeout(timeout))
  }

  private generateErrorId(): string {
    return `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  private getUserId(): string | null {
    // Try to get user ID from various sources
    if (typeof window !== 'undefined') {
      try {
        // Check localStorage, sessionStorage, or cookies
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        return (
          localStorage.getItem('userId') ||
          sessionStorage.getItem('userId') ||
          null
        );
<<<<<<< HEAD
=======
=======
        return localStorage.getItem('userId') || 
               sessionStorage.getItem('userId') || 
               null
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      } catch {
        return null;
      }
    }
<<<<<<< HEAD
    return null;  }
=======
<<<<<<< HEAD
    return null;
=======
        return localStorage.getItem('userId') || 
               sessionStorage.getItem('userId') || 
               null
      } catch {
        return null
      }
    }
    return null
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return null
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  private getBuildInfo() {
    return {
      version: process.env.NEXT_PUBLIC_APP_VERSION || 'unknown',
      environment: process.env.NODE_ENV,
<<<<<<< HEAD
      buildTime: process.env.NEXT_PUBLIC_BUILD_TIME || 'unknown',
    };
=======
<<<<<<< HEAD
<<<<<<< HEAD
      buildTime: process.env.NEXT_PUBLIC_BUILD_TIME || 'unknown',
    };
=======
      buildTime: process.env.NEXT_PUBLIC_BUILD_TIME || 'unknown'
    }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  }

  private getErrorSeverity(
    error: Error
  ): 'low' | 'medium' | 'high' | 'critical' {
    const message = error.message.toLowerCase();
    const stack = error.stack?.toLowerCase() || '';

    // Critical errors
    if (message.includes('network') || message.includes('fetch')) {
      return 'medium';
    }

    if (message.includes('chunk') || message.includes('loading')) {
      return 'medium';
    }

    if (stack.includes('auth') || stack.includes('payment')) {
      return 'critical';
    }

    if (stack.includes('database') || stack.includes('api')) {
      return 'high';
    }

    return 'low';
  }

  private getErrorSuggestion(error: Error): string {
    const message = error.message.toLowerCase();

    if (message.includes('network') || message.includes('fetch')) {
      return 'Please check your internet connection and try again.';
    }

    if (message.includes('chunk')) {
      return 'The application was updated. Please refresh the page.';
    }

    if (message.includes('permission') || message.includes('unauthorized')) {
      return 'You may need to log in again or check your permissions.';
    }

<<<<<<< HEAD
    return 'This appears to be a temporary issue. Please try again.';  }

  private retry = () => {
    if (this.state.retryCount >= (this.props.maxRetries || 3)) {
=======
<<<<<<< HEAD
    return 'This appears to be a temporary issue. Please try again.';
=======
      buildTime: process.env.NEXT_PUBLIC_BUILD_TIME || 'unknown'
    }
  }

  private getErrorSeverity(error: Error): 'low' | 'medium' | 'high' | 'critical' {
    const message = error.message.toLowerCase()
    const stack = error.stack?.toLowerCase() || ''

    // Critical errors
    if (message.includes('network') || message.includes('fetch')) {
      return 'medium'
    }
    
    if (message.includes('chunk') || message.includes('loading')) {
      return 'medium'
    }

    if (stack.includes('auth') || stack.includes('payment')) {
      return 'critical'
    }

    if (stack.includes('database') || stack.includes('api')) {
      return 'high'
    }

    return 'low'
  }

  private getErrorSuggestion(error: Error): string {
    const message = error.message.toLowerCase()

    if (message.includes('network') || message.includes('fetch')) {
      return 'Please check your internet connection and try again.'
    }
    
    if (message.includes('chunk')) {
      return 'The application was updated. Please refresh the page.'
    }

    if (message.includes('permission') || message.includes('unauthorized')) {
      return 'You may need to log in again or check your permissions.'
    }

    return 'This appears to be a temporary issue. Please try again.'
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return 'This appears to be a temporary issue. Please try again.'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }

  private retry = () => {
    if (this.state.retryCount >= (this.props.maxRetries || 3)) {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      return;
    }

    const retryDelay = Math.pow(2, this.state.retryCount) * 1000; // Exponential backoff
<<<<<<< HEAD
=======
=======
      return
    }

    const retryDelay = Math.pow(2, this.state.retryCount) * 1000 // Exponential backoff
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      return
    }

    const retryDelay = Math.pow(2, this.state.retryCount) * 1000 // Exponential backoff
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    const timeout = setTimeout(() => {
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null,
        errorId: null,
        retryCount: this.state.retryCount + 1,
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        showDetails: false,
      });
    }, retryDelay);

    this.retryTimeouts.push(timeout);
  };
<<<<<<< HEAD
=======
=======
        showDetails: false
      })
    }, retryDelay)

    this.retryTimeouts.push(timeout)
  }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        showDetails: false
      })
    }, retryDelay)

    this.retryTimeouts.push(timeout)
  }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  private copyErrorDetails = async () => {
    const errorDetails = {
      errorId: this.state.errorId,
      message: this.state.error?.message,
      stack: this.state.error?.stack,
      componentStack: this.state.errorInfo?.componentStack,
      timestamp: new Date().toISOString(),
      url: typeof window !== 'undefined' ? window.location.href : 'unknown',
<<<<<<< HEAD
      userAgent:
        typeof window !== 'undefined' ? navigator.userAgent : 'unknown',
    };
=======
<<<<<<< HEAD
<<<<<<< HEAD
      userAgent:
        typeof window !== 'undefined' ? navigator.userAgent : 'unknown',
    };
=======
      userAgent: typeof window !== 'undefined' ? navigator.userAgent : 'unknown'
    }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

    try {
      await navigator.clipboard.writeText(
        JSON.stringify(errorDetails, null, 2)
      );
      // Could show a toast notification here
    } catch (err) {
      logErrorToProduction('Failed to copy error details:', { data: err });
    }
  };

  private reportError = async () => {
<<<<<<< HEAD
    if (!this.state.error || !this.state.errorId) return;
=======
<<<<<<< HEAD
    if (!this.state.error || !this.state.errorId) return;
=======
      userAgent: typeof window !== 'undefined' ? navigator.userAgent : 'unknown'
    }

    try {
      await navigator.clipboard.writeText(JSON.stringify(errorDetails, null, 2))
      // Could show a toast notification here
    } catch (err) {
      logErrorToProduction('Failed to copy error details:', { data: err })
    }
  }

  private reportError = async () => {
    if (!this.state.error || !this.state.errorId) return
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    if (!this.state.error || !this.state.errorId) return
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    try {
      // Report to your error reporting service
      const response = await fetch('/api/error-report', {
        method: 'POST',
        headers: {
<<<<<<< HEAD
          'Content-Type': 'application/json',
        },
=======
<<<<<<< HEAD
<<<<<<< HEAD
          'Content-Type': 'application/json',
        },
=======
          'Content-Type': 'application/json'
        };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        body: JSON.stringify({
          errorId: this.state.errorId,
          error: {
            message: this.state.error.message,
            stack: this.state.error.stack,
            name: this.state.error.name,
          },
          errorInfo: this.state.errorInfo,
          userFeedback: this.state.userFeedback,
          context: this.props.context,
<<<<<<< HEAD
          timestamp: new Date().toISOString(),
        }),
      });
=======
<<<<<<< HEAD
          timestamp: new Date().toISOString(),
        }),
      });
=======
      
          'Content-Type': 'application/json'
        
    },
    body: JSON.stringify({
          errorId: this.state.errorId,
          error: {
      
            message: this.state.error.message,
            stack: this.state.error.stack,
            name: this.state.error.name
          
    },
    errorInfo: this.state.errorInfo,
          userFeedback: this.state.userFeedback,
          context: this.props.context,
          timestamp: new Date().toISOString()
        })
      })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          timestamp: new Date().toISOString()
        })
      })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      if (response.ok) {
        // Show success message
      }
    } catch (err) {
<<<<<<< HEAD
      logErrorToProduction('Failed to report error:', { data: err });
    }
=======
<<<<<<< HEAD
<<<<<<< HEAD
      logErrorToProduction('Failed to report error:', { data: err });
=======
      logErrorToProduction('Failed to report error:', { data: err })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
  }

  private goHome = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/'
    }
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  };

  private goHome = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/';
    }
<<<<<<< HEAD
  };
=======
  }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  render() {
    if (this.state.hasError && this.state.error) {
      // Use custom fallback if provided
      if (this.props.fallback) {
<<<<<<< HEAD
        return this.props.fallback;
=======
<<<<<<< HEAD
<<<<<<< HEAD
        return this.props.fallback;
=======
        return this.props.fallback
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      }

      const severity = this.getErrorSeverity(this.state.error);
      const suggestion = this.getErrorSuggestion(this.state.error);
      const canRetry =
        this.props.enableRetry !== false &&
        this.state.retryCount < (this.props.maxRetries || 3);

      return (
<<<<<<< HEAD
        <div className='min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20'>          <motion.div
=======
<<<<<<< HEAD
        <div className='min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20'>
=======
        return this.props.fallback
      }

      const severity = this.getErrorSeverity(this.state.error)
      const suggestion = this.getErrorSuggestion(this.state.error)
      const canRetry = this.props.enableRetry !== false && 
                       this.state.retryCount < (this.props.maxRetries || 3)

      return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          <motion.div
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            <Card className='w-full max-w-2xl border-red-200 bg-white dark:bg-gray-900'>
              <CardHeader className='text-center'>
                <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20'>
                  <AlertTriangle className='h-8 w-8 text-red-600 dark:text-red-400' />
<<<<<<< HEAD
=======
=======
            <Card className="w-full max-w-2xl border-red-200 bg-white dark:bg-gray-900">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
                  <AlertTriangle className="h-8 w-8 text-red-600 dark:text-red-400" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                </div>
                <CardTitle className='text-2xl font-bold text-gray-900 dark:text-gray-100'>
                  Oops! Something went wrong
                </CardTitle>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                <div className='flex items-center justify-center gap-2 mt-2'>
                  <Badge
                    variant={
                      severity === 'critical'
                        ? 'destructive'
                        : severity === 'high'
                          ? 'destructive'
                          : 'secondary'
<<<<<<< HEAD
                    }                  >
                    {severity.toUpperCase()}
                  </Badge>
                  {this.state.errorId && (
                    <Badge variant='outline' className='text-xs'>                      ID: {this.state.errorId.slice(-8)}
=======
                    }
=======
            <Card className="w-full max-w-2xl border-red-200 bg-white dark:bg-gray-900">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
                  <AlertTriangle className="h-8 w-8 text-red-600 dark:text-red-400" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  Oops! Something went wrong
                </CardTitle>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <Badge 
                    variant={severity === 'critical' ? 'destructive' : severity === 'high' ? 'destructive' : 'secondary'}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <div className="flex items-center justify-center gap-2 mt-2">
                  <Badge 
                    variant={severity === 'critical' ? 'destructive' : severity === 'high' ? 'destructive' : 'secondary'}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  >
                    {severity.toUpperCase()}
                  </Badge>
                  {this.state.errorId && (
<<<<<<< HEAD
<<<<<<< HEAD
                    <Badge variant='outline' className='text-xs'>
=======
                    <Badge variant="outline" className="text-xs">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    <Badge variant="outline" className="text-xs">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      ID: {this.state.errorId.slice(-8)}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    </Badge>
                  )}
                </div>
              </CardHeader>

<<<<<<< HEAD
              <CardContent className='space-y-6'>
                <div className='text-center'>
                  <p className='text-gray-600 dark:text-gray-300 mb-4'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
              <CardContent className='space-y-6'>
                <div className='text-center'>
                  <p className='text-gray-600 dark:text-gray-300 mb-4'>
=======
              <CardContent className="space-y-6">
                <div className="text-center">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    {suggestion}
                  </p>

                  {this.state.retryCount > 0 && (
<<<<<<< HEAD
                    <p className='text-sm text-orange-600 dark:text-orange-400'>
                      Retry attempt: {this.state.retryCount}/
                      {this.props.maxRetries || 3}                    </p>
=======
<<<<<<< HEAD
                    <p className='text-sm text-orange-600 dark:text-orange-400'>
                      Retry attempt: {this.state.retryCount}/
                      {this.props.maxRetries || 3}
=======
              <CardContent className="space-y-6">
                <div className="text-center">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {suggestion}
                  </p>
                  
                  {this.state.retryCount > 0 && (
                    <p className="text-sm text-orange-600 dark:text-orange-400">
                      Retry attempt: {this.state.retryCount}/{this.props.maxRetries || 3}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    <p className="text-sm text-orange-600 dark:text-orange-400">
                      Retry attempt: {this.state.retryCount}/{this.props.maxRetries || 3}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    </p>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  )}
                </div>

                {/* Action Buttons */}
<<<<<<< HEAD
                <div className='flex flex-col sm:flex-row gap-3 justify-center'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
                <div className='flex flex-col sm:flex-row gap-3 justify-center'>
=======
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  {canRetry && (
                    <Button
                      onClick={this.retry}
                      className='flex items-center gap-2'
                    >
                      <RefreshCw className='h-4 w-4' />
                      Try Again
                    </Button>
                  )}

                  <Button
                    onClick={this.goHome}
                    variant='outline'
                    className='flex items-center gap-2'
                  >
                    <Home className='h-4 w-4' />
                    Go Home
                  </Button>

                  <Button
                    onClick={() =>
                      this.setState({ showDetails: !this.state.showDetails })
                    }
                    variant='ghost'
                    size='sm'
                    className='flex items-center gap-2'
                  >
<<<<<<< HEAD
                    <Bug className='h-4 w-4' />                    {this.state.showDetails ? 'Hide' : 'Show'} Details
=======
<<<<<<< HEAD
                    <Bug className='h-4 w-4' />
=======
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  {canRetry && (
                    <Button onClick={this.retry} className="flex items-center gap-2">
                      <RefreshCw className="h-4 w-4" />
                      Try Again
                    </Button>
                  )}
                  
                  <Button onClick={this.goHome} variant="outline" className="flex items-center gap-2">
                    <Home className="h-4 w-4" />
                    Go Home
                  </Button>

                  <Button 
                    onClick={() => this.setState({ showDetails: !this.state.showDetails })}
                    variant="ghost" 
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    <Bug className="h-4 w-4" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    <Bug className="h-4 w-4" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    {this.state.showDetails ? 'Hide' : 'Show'} Details
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  </Button>
                </div>

                {/* Error Details */}
                <AnimatePresence>
                  {this.state.showDetails && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
<<<<<<< HEAD
                      className='border-t pt-4'
=======
<<<<<<< HEAD
<<<<<<< HEAD
                      className='border-t pt-4'
=======
                      className="border-t pt-4"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    >
                      <div className='space-y-4'>
                        <div>
<<<<<<< HEAD
                          <h4 className='font-semibold text-sm mb-2'>
                            Error Message:
                          </h4>
                          <code className='block p-3 bg-red-50 dark:bg-red-900/10 rounded text-sm text-red-800 dark:text-red-200 overflow-auto'>                            {this.state.error.message}
                          </code>
                        </div>

=======
<<<<<<< HEAD
                          <h4 className='font-semibold text-sm mb-2'>
                            Error Message:
                          </h4>
                          <code className='block p-3 bg-red-50 dark:bg-red-900/10 rounded text-sm text-red-800 dark:text-red-200 overflow-auto'>
=======
                      className="border-t pt-4"
                    >
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Error Message:</h4>
                          <code className="block p-3 bg-red-50 dark:bg-red-900/10 rounded text-sm text-red-800 dark:text-red-200 overflow-auto">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                          <h4 className="font-semibold text-sm mb-2">Error Message:</h4>
                          <code className="block p-3 bg-red-50 dark:bg-red-900/10 rounded text-sm text-red-800 dark:text-red-200 overflow-auto">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                            {this.state.error.message}
                          </code>
                        </div>

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                        {process.env.NODE_ENV === 'development' &&
                          this.state.error.stack && (
                            <div>
                              <h4 className='font-semibold text-sm mb-2'>
                                Stack Trace:
                              </h4>
                              <pre className='p-3 bg-gray-50 dark:bg-gray-800 rounded text-xs overflow-auto max-h-32'>
                                {this.state.error.stack}
                              </pre>
                            </div>
                          )}
<<<<<<< HEAD
=======
=======
                        {process.env.NODE_ENV === 'development' && this.state.error.stack && (
                          <div>
                            <h4 className="font-semibold text-sm mb-2">Stack Trace:</h4>
                            <pre className="p-3 bg-gray-50 dark:bg-gray-800 rounded text-xs overflow-auto max-h-32">
                              {this.state.error.stack}
                            </pre>
                          </div>
                        )}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

                        <div className='flex gap-2'>
                          <Button
                            onClick={this.copyErrorDetails}
                            variant='outline'
                            size='sm'
                          >
                            <Clipboard className='h-4 w-4 mr-2' />
                            Copy Details
                          </Button>

                          {this.props.showReportButton !== false && (
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                            <Button
                              onClick={this.reportError}
                              variant='outline'
                              size='sm'
                            >
<<<<<<< HEAD
                              <Send className='h-4 w-4 mr-2' />                              Report Issue
=======
                              <Send className='h-4 w-4 mr-2' />
=======
                        {process.env.NODE_ENV === 'development' && this.state.error.stack && (
                          <div>
                            <h4 className="font-semibold text-sm mb-2">Stack Trace:</h4>
                            <pre className="p-3 bg-gray-50 dark:bg-gray-800 rounded text-xs overflow-auto max-h-32">
                              {this.state.error.stack}
                            </pre>
                          </div>
                        )}

                        <div className="flex gap-2">
                          <Button onClick={this.copyErrorDetails} variant="outline" size="sm">
                            <Clipboard className="h-4 w-4 mr-2" />
                            Copy Details
                          </Button>
                          
                          {this.props.showReportButton !== false && (
                            <Button onClick={this.reportError} variant="outline" size="sm">
                              <Send className="h-4 w-4 mr-2" />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                            <Button onClick={this.reportError} variant="outline" size="sm">
                              <Send className="h-4 w-4 mr-2" />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                              Report Issue
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                            </Button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        </div>
<<<<<<< HEAD
      );
=======
<<<<<<< HEAD
<<<<<<< HEAD
      );
=======
      )
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    }

    return this.props.children;
  }

// Hook for programmatic error boundary
export const useErrorBoundary = () => {
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    if (error) {
      throw error;
    }
  }, [error]);

  const captureError = React.useCallback((error: Error) => {
    setError(error);
  }, []);

  return { captureError };
<<<<<<< HEAD
};
=======
<<<<<<< HEAD
};
=======
      )
    }

    return this.props.children
  }
}

// Hook for programmatic error boundary
export const useErrorBoundary = () => {
  const [ error, setError ] = React.useState<Error | null>(null)

  React.useEffect(() => {
    if (error) {
      throw error
    }
  }, [error])

  const captureError = React.useCallback((error: Error) => {
    setError(error)
  }, [])

  return { captureError };
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
// Higher-order component for adding error boundaries
export const withErrorBoundary = <P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Omit<ErrorBoundaryProps, 'children'>
) => {
  const WrappedComponent = (props: P) => (
    <GlobalErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </GlobalErrorBoundary>
<<<<<<< HEAD
  );

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;
=======
<<<<<<< HEAD
<<<<<<< HEAD
  );

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;
=======
  )
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  return WrappedComponent;
};

<<<<<<< HEAD
export default GlobalErrorBoundary;
=======
<<<<<<< HEAD
export default GlobalErrorBoundary;
=======
  )

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`
  
  return WrappedComponent;
}

export default GlobalErrorBoundary 
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export default GlobalErrorBoundary 
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
