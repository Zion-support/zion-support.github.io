<<<<<<< HEAD
import React, { Component, ReactNode } from 'react',
import { QueryClient } from '@tanstack/react-query',
import * as Sentry from '@sentry/nextjs',
import { Button } from '@/components/ui/button',
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert',
import { RefreshCw, WifiOff } from 'lucide-react'
import {logErrorToProduction} from '@/utils/productionLogger',
interface ApiErrorBoundaryProps {
  children: ReactNode,
  queryClient?: QueryClient,
  fallback?: ReactNode
}

interface ApiErrorBoundaryState {
  hasError: boolean,
  error: Error | null,
  errorInfo: any,
  isRetrying: boolean,
  isOnline: boolean
}

export class ApiErrorBoundary extends Component<ApiErrorBoundaryProps ApiErrorBoundaryState> {
  private retryTimeoutId: NodeJS.Timeout | null = null,
=======
import React, {_Component, _ReactNode} from 'react';
import * as Sentry from '@sentry/nextjs';


interface ApiErrorBoundaryProps {_children: ReactNode;
  queryClient?: QueryClient;
  fallback?: ReactNode;}

interface ApiErrorBoundaryState {_hasError: boolean;
  error: Error | null;
  errorInfo: unknown;
  isRetrying: boolean;
  isOnline: boolean;}

export class ApiErrorBoundary extends Component<ApiErrorBoundaryProps, ApiErrorBoundaryState> {_private retryTimeoutId: NodeJS.Timeout | null = null;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  constructor(props: ApiErrorBoundaryProps) {
    super(props),
    this.state = {
<<<<<<< HEAD
      hasError: false,
      error: null,
      errorInfo: null,
      isRetrying: false,
      isOnline: typeof navigator !== 'undefined' ? navigator.onLine : true}
  }

  static getDerivedStateFromError(error: Error): Partial<ApiErrorBoundaryState> {
    return {
      hasError: true,
      error}
  }

  componentDidCatch(error: Error, errorInfo: any) {
    // Log to Sentry
    Sentry.withScope((scope) => {
      scope.setTag('errorBoundaryApiErrorBoundary'),
      scope.setContext('errorInfo', errorInfo),
      scope.setLevel('error'),
      Sentry.captureException(error)
    }),

    this.setState({
      error,
      errorInfo}),
=======
      hasError: false, _error: null, _errorInfo: null, _isRetrying: false, _isOnline: typeof navigator !== 'undefined' ? navigator.onLine : true};
  }

  static getDerivedStateFromError(error: Error): Partial<ApiErrorBoundaryState> {_return {
      hasError: true, _error};
  }

  componentDidCatch(error: Error, errorInfo: unknown) {_// Log to Sentry
    Sentry.withScope(_(scope) => {
      scope.setTag('errorBoundary', _'ApiErrorBoundary');
      scope.setContext('errorInfo', _errorInfo);
      scope.setLevel('error');
      Sentry.captureException(error);});

    this.setState({_error, _errorInfo});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    logErrorToProduction('ApiErrorBoundary caught an error:', error, errorInfo)
  }

  componentDidMount() {_// Listen for online/offline events
    if (typeof window !== 'undefined') {
<<<<<<< HEAD
      window.addEventListener('online', this.handleOnline),
      window.addEventListener('offline', this.handleOffline)
    }
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('online', this.handleOnline),
      window.removeEventListener('offline', this.handleOffline)
    }
    if (this.retryTimeoutId) {
      clearTimeout(this.retryTimeoutId)
    }
  }

  handleOnline = () => {
    this.setState({ isOnline: true }),
    // Auto-retry when coming back online
    if (this.state.hasError) {
      this.handleRetry()
    }
  },

  handleOffline = () => {
    this.setState({ isOnline: false })
  },

  handleRetry = async () => {
    this.setState({ isRetrying: true }),
=======
      window.addEventListener('online', _this.handleOnline);
      window.addEventListener('offline', _this.handleOffline);}
  }

  componentWillUnmount() {_if (typeof window !== 'undefined') {
      window.removeEventListener('online', _this.handleOnline);
      window.removeEventListener('offline', _this.handleOffline);}
    if (this.retryTimeoutId) {_clearTimeout(this.retryTimeoutId);}
  }

  handleOnline = () => {_this.setState({ isOnline: true});
    // Auto-retry when coming back online
    if (this.state.hasError) {_this.handleRetry();}
  };

  handleOffline = () => {_this.setState({ isOnline: false});
  };

  handleRetry = async () => {_this.setState({ isRetrying: true});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    try {_// Invalidate all queries to force refetch
      if (this.props.queryClient) {
<<<<<<< HEAD
        await this.props.queryClient.invalidateQueries(),
        await this.props.queryClient.refetchQueries()
      }

      // Reset error state after a brief delay
      this.retryTimeoutId = setTimeout(() => {
        this.setState({
          hasError: false,
          error: null,
          errorInfo: null,
          isRetrying: false})
      }, 500)
    } catch (retryError) {
      logErrorToProduction('Retry failed:', { data: retryError }),
      Sentry.captureException(retryError),
      this.setState({ isRetrying: false })
=======
        await this.props.queryClient.invalidateQueries();
        await this.props.queryClient.refetchQueries();}

      // Reset error state after a brief delay
      this.retryTimeoutId = setTimeout__(() => {_this.setState({
          hasError: false, _error: null, _errorInfo: null, _isRetrying: false});
      }, 500);
    } catch (retryError) {_logErrorToProduction('Retry failed:', _{ data: retryError});
      Sentry.captureException(retryError);
      this.setState({_isRetrying: false});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

  render() {_if (this.state.hasError) {
      // Check if it's a network-related error
      const _isNetworkError = this.state.error?.message?.includes('fetch') ||
                           this.state.error?.message?.includes('network') ||
                           this.state.error?.message?.includes('timeout') ||
                           !this.state.isOnline,

      // Use custom fallback if provided
      if (this.props.fallback) {
<<<<<<< HEAD
        return this.props.fallback
      }

      return (
        <div className=&quot;flex min-h-screen items-center justify-center p-4&quot;>
          <div className=&quot;w-full max-w-md space-y-4&quot;>
            <Alert variant=&quot;destructive&quot;>
              <div className=&quot;flex items-center gap-2&quot;>
                {isNetworkError ? (
                  <WifiOff className=&quot;h-4 w-4&quot; />
=======
        return this.props.fallback;}

      return (
        <div className="flex min-h-screen items-center justify-center p-4">
          <div className="w-full max-w-md space-y-4">
            <Alert variant="destructive">
              <div className="flex items-center gap-2">
                {_isNetworkError ? (
                  <WifiOff className="h-4 w-4" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                ) : (
                  <RefreshCw className=&quot;h-4 w-4&quot; />
                )}
                <AlertTitle>
                  {_isNetworkError ? 'Connection Problem' : 'Something went wrong'}
                </AlertTitle>
              </div>
<<<<<<< HEAD
              <AlertDescription className=&quot;mt-2&quot;>
                {isNetworkError ? (
=======
              <AlertDescription className="mt-2">
                {_isNetworkError ? (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  !this.state.isOnline ? (
                    'You appear to be offline. Please check your internet connection.'
                  ) : (
                    'Unable to connect to our servers. This might be a temporary network issue.'
                  )
                ) : (
                  'An unexpected error occurred while loading the page.'
                )}
              </AlertDescription>
            </Alert>

            <div className=&quot;flex flex-col gap-2&quot;>
              <Button
<<<<<<< HEAD
                onClick={this.handleRetry}
                disabled={this.state.isRetrying}
                className=&quot;w-full&quot;
=======
                onClick={_this.handleRetry}
                disabled={_this.state.isRetrying}
                className="w-full"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                {_this.state.isRetrying ? (
                  <>
                    <RefreshCw className=&quot;mr-2 h-4 w-4 animate-spin&quot; />
                    Retrying...
                  </>
                ) : (
                  <>
                    <RefreshCw className=&quot;mr-2 h-4 w-4&quot; />
                    Try Again
                  </>
                )}
              </Button>

              <Button
<<<<<<< HEAD
                variant=&quot;outline&quot;
                onClick={() => window.location.reload()}
                className=&quot;w-full&quot;
=======
                variant="outline"
                onClick={_() => window.location.reload()}
                className="w-full"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                Reload Page
              </Button>
            </div>

<<<<<<< HEAD
            {!this.state.isOnline && (
              <div className=&quot;flex items-center justify-center gap-2 text-sm text-muted-foreground&quot;>
                <WifiOff className=&quot;h-4 w-4&quot; />
=======
            {_!this.state.isOnline && (
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <WifiOff className="h-4 w-4" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <span>Offline</span>
              </div>
            )}

<<<<<<< HEAD
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className=&quot;mt-4 rounded border p-2 text-xs&quot;>
                <summary className=&quot;cursor-pointer font-medium&quot;>
=======
            {_process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-4 rounded border p-2 text-xs">
                <summary className="cursor-pointer font-medium">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  Debug Info (Development Only)
                </summary>
                <pre className=&quot;mt-2 whitespace-pre-wrap break-all&quot;>
                  {this.state.error.toString()}
                  {_this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

// Hook for accessing query client in function components
<<<<<<< HEAD
export const useApiErrorHandler = () => {
  const handleApiError = (error: Error) => {
    Sentry.withScope((scope) => {
      scope.setTag('sourceuseApiErrorHandler'),
      scope.setLevel('error'),
      Sentry.captureException(error)
    })
  },

  return { handleApiError }
}, 
=======
export const _useApiErrorHandler = () => {_const _handleApiError = (_error: Error) => {
    Sentry.withScope(_(scope) => {
      scope.setTag('source', _'useApiErrorHandler');
      scope.setLevel('error');
      Sentry.captureException(error);});
  };

  return {_handleApiError};
}; 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
