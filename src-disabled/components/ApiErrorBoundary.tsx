<<<<<<< HEAD:src_backup/components/ApiErrorBoundary.tsx
<<<<<<< HEAD:src/components/ApiErrorBoundary.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { Component, ReactNode } from 'react',;
import { QueryClient } from '@tanstack/react-query',;
import * as Sentry from '@sentry/nextjs',;
import { Button } from '@/components/ui/button',;
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert',;
import { RefreshCw, WifiOff } from 'lucide-react';
import {logErrorToProduction} from '@/utils/productionLogger',;
interface ApiErrorBoundaryProps {;
  children: ReactNode,;
  queryClient?: QueryClient,;
  fallback?: ReactNode;
}
;
interface ApiErrorBoundaryState {;
  hasError: boolean,;
  error: Error | null,;
  errorInfo: any,;
  isRetrying: boolean,;
  isOnline: boolean;
}
;
export class ApiErrorBoundary extends Component<ApiErrorBoundaryProps ApiErrorBoundaryState> {;
  private retryTimeoutId: NodeJS.Timeout | null = null,;
  constructor(props: ApiErrorBoundaryProps) {;
    super(props),;
    this.state = {;
      hasError: false,;
      error: null,;
      errorInfo: null,;
      isRetrying: false,;
      isOnline: typeof navigator !== 'undefined' ? navigator.onLine : true}
  }
;
  static getDerivedStateFromError(error: Error): Partial<ApiErrorBoundaryState> {;
    return {;
      hasError: true,;
      error}
  }
;
  componentDidCatch(error: Error, errorInfo: any) {;
    // Log to Sentry;
    Sentry.withScope((scope) => {;
      scope.setTag('errorBoundaryApiErrorBoundary'),;
      scope.setContext('errorInfo', errorInfo),;
      scope.setLevel('error'),;
      Sentry.captureException(error);
    }),;
    this.setState({;
      error,;
      errorInfo}),;
    logErrorToProduction('ApiErrorBoundary caught an error:', error, errorInfo);
  }
;
  componentDidMount() {;
    // Listen for online/offline events;
    if (typeof window !== 'undefined') {;
      window.addEventListener('online', this.handleOnline),;
      window.addEventListener('offline', this.handleOffline);
    }
  }
;
  componentWillUnmount() {;
    if (typeof window !== 'undefined') {;
      window.removeEventListener('online', this.handleOnline),;
      window.removeEventListener('offline', this.handleOffline);
    }
    if (this.retryTimeoutId) {;
      clearTimeout(this.retryTimeoutId);
    }
  }
;
  handleOnline = () => {;
    this.setState({ isOnline: true }),;
    // Auto-retry when coming back online;
    if (this.state.hasError) {;
      this.handleRetry();
    }
  },;
  handleOffline = () => {;
    this.setState({ isOnline: false });
  },;
  handleRetry = async () => {;
    this.setState({ isRetrying: true }),;
    try {;
      // Invalidate all queries to force refetch;
      if (this.props.queryClient) {;
        await this.props.queryClient.invalidateQueries(),;
        await this.props.queryClient.refetchQueries();
      }
;
      // Reset error state after a brief delay;
      this.retryTimeoutId = setTimeout(() => {;
        this.setState({;
          hasError: false,;
          error: null,;
          errorInfo: null,;
          isRetrying: false});
      }, 500);
    } catch (retryError) {;
      logErrorToProduction('Retry failed:', { data: retryError }),;
      Sentry.captureException(retryError),;
      this.setState({ isRetrying: false });
    }
  },;
  render() {;
    if (this.state.hasError) {;
      // Check if it's a network-related error;
      const isNetworkError = this.state.error?.message?.includes('fetch') ||;
                           this.state.error?.message?.includes('network') ||;
                           this.state.error?.message?.includes('timeout') ||;
                           !this.state.isOnline,;
      // Use custom fallback if provided;
      if (this.props.fallback) {;
        return this.props.fallback;
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      }

      return (
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ApiErrorBoundary.tsx
=======
      }

      return (
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ApiErrorBoundary.tsx
}
      return (
      // Reset error state after a brief delay;
      this.retryTimeoutId = set_timeout ((, ) => {
        this.set_state ({
          has_error: false,
          error: null,
          error_info: null,
          is_retrying: false,
        });
      }, 500);
    } catch (retry_error) {
      logErrorToProduction ('Retry failed:', { data: retry_error });
      Sentry.capture_exception (retry_error);
      this.set_state ({ is_retrying: false });
    }
  }
  render () {
    // Check condition
if ( {) {
  $2
}
      // Check if it's a network - related error;
      const isNetworkError =;
        this.state.error?.message?.includes ('fetch') ||;
        this.state.error?.message?.includes ('network') ||;
        this.state.error?.message?.includes ('timeout') ||;
        !this.state.is_online;
      // Use custom fallback if provided;
      // Check condition
if ( {) {
  $2
}
        return this.props.fallback;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      }
<<<<<<< HEAD:src_backup/components/ApiErrorBoundary.tsx

<<<<<<< HEAD
=======
      return (
        <div className='flex min - h-screen items - center justify - center p - 4'>;
          <div className='w - full max - w-md space - y-4'>;
            <Alert variant='destructive'>;
              <div className='flex items - center gap - 2'>;
                {isNetworkError ? (
                  <WifiOff className='h - 4 w - 4' />) : ('
                  <RefreshCw className='h - 4 w - 4' />)}'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ApiErrorBoundary.tsx
                <AlertTitle>;
                  {isNetworkError;
                    ? 'Connection Problem';
                    : 'Something went wrong'}'
                </AlertTitle>;
              </div>;
              </AlertDescription>;
            </Alert>;
<<<<<<< HEAD:src_backup/components/ApiErrorBoundary.tsx
<<<<<<< HEAD:src/components/ApiErrorBoundary.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ApiErrorBoundary.tsx
=======
        <div className="flex min-h-screen items-center justify-center p-4">"
          <div className="w-full max-w-md space-y-4">"
            <Alert variant="destructive">"
              <div className="flex items-center gap-2">"
                {isNetworkError ? (
                  <WifiOff className="h-4 w-4" />"
                ) : (
                  <RefreshCw className="h-4 w-4" />"
                )}
                <AlertTitle>;
                  {isNetworkError ? 'Connection Problem' : 'Something went wrong'}'
                </AlertTitle>
              </div>
              <AlertDescription className="mt-2">"
                {isNetworkError ? (
                  !this.state.isOnline ? (
                    'You appear to be offline. Please check your internet connection.''
                  ) : (
                    'Unable to connect to our servers. This might be a temporary network issue.''
                  )
                ) : (
                  'An unexpected error occurred while loading the page.''
                )}
              </AlertDescription>
            </Alert>
            <div className='flex flex-col gap-2'>;
              <Button
                onClick={this.handleRetry}
                disabled={this.state.isRetrying}
                className="w-full""
              >
                {this.state.isRetrying ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />"
import React, { Component, ReactNode } from 'react',;
import { QueryClient } from '@tanstack/react-query',;
import * as Sentry from '@sentry/nextjs',;
import { Button } from '@/components/ui/button',;
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert',;
import { RefreshCw, WifiOff } from 'lucide-react';
import {logErrorToProduction} from '@/utils/productionLogger',;
interface ApiErrorBoundaryProps {;
  children: ReactNode,;
  queryClient?: QueryClient,;
  fallback?: ReactNode;
}
;
interface ApiErrorBoundaryState {;
  hasError: boolean,;
  error: Error | null,;
  errorInfo: any,;
  isRetrying: boolean,;
  isOnline: boolean;
}
;
export class ApiErrorBoundary extends Component<ApiErrorBoundaryProps ApiErrorBoundaryState> {;
  private retryTimeoutId: NodeJS.Timeout | null = null,;
  constructor(props: ApiErrorBoundaryProps) {;
    super(props),;
    this.state = {;
      hasError: false,;
      error: null,;
      errorInfo: null,;
      isRetrying: false,;
      isOnline: typeof navigator !== 'undefined' ? navigator.onLine : true}
  }
;
  static getDerivedStateFromError(error: Error): Partial<ApiErrorBoundaryState> {;
    return {;
      hasError: true,;
      error}
  }
;
  componentDidCatch(error: Error, errorInfo: any) {;
    // Log to Sentry;
    Sentry.withScope((scope) => {;
      scope.setTag('errorBoundaryApiErrorBoundary'),;
      scope.setContext('errorInfo', errorInfo),;
      scope.setLevel('error'),;
      Sentry.captureException(error);
    }),;
    this.setState({;
      error,;
      errorInfo}),;
    logErrorToProduction('ApiErrorBoundary caught an error:', error, errorInfo);
  }
;
  componentDidMount() {;
    // Listen for online/offline events;
    if (typeof window !== 'undefined') {;
      window.addEventListener('online', this.handleOnline),;
      window.addEventListener('offline', this.handleOffline);
    }
  }
;
  componentWillUnmount() {;
    if (typeof window !== 'undefined') {;
      window.removeEventListener('online', this.handleOnline),;
      window.removeEventListener('offline', this.handleOffline);
    }
    if (this.retryTimeoutId) {;
      clearTimeout(this.retryTimeoutId);
    }
  }
;
  handleOnline = () => {;
    this.setState({ isOnline: true }),;
    // Auto-retry when coming back online;
    if (this.state.hasError) {;
      this.handleRetry();
    }
  },;
  handleOffline = () => {;
    this.setState({ isOnline: false });
  },;
  handleRetry = async () => {;
    this.setState({ isRetrying: true }),;
    try {;
      // Invalidate all queries to force refetch;
      if (this.props.queryClient) {;
        await this.props.queryClient.invalidateQueries(),;
        await this.props.queryClient.refetchQueries();
      }
;
      // Reset error state after a brief delay;
      this.retryTimeoutId = setTimeout(() => {;
        this.setState({;
          hasError: false,;
          error: null,;
          errorInfo: null,;
          isRetrying: false});
      }, 500);
    } catch (retryError) {;
      logErrorToProduction('Retry failed:', { data: retryError }),;
      Sentry.captureException(retryError),;
      this.setState({ isRetrying: false });
    }
  },;
  render() {;
    if (this.state.hasError) {;
      // Check if it's a network-related error;
      const isNetworkError = this.state.error?.message?.includes('fetch') ||;
                           this.state.error?.message?.includes('network') ||;
                           this.state.error?.message?.includes('timeout') ||;
                           !this.state.isOnline,;
      // Use custom fallback if provided;
      if (this.props.fallback) {;
        return this.props.fallback;
      }

      return (
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ApiErrorBoundary.tsx
        <div className="flex min-h-screen items-center justify-center p-4">
=======
      return (        <div className="flex min-h-screen items-center justify-center p-4">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          <div className="w-full max-w-md space-y-4">
            <Alert variant="destructive">
              <div className="flex items-center gap-2">
                {isNetworkError ? (
                  <WifiOff className="h-4 w-4" />
                ) : (
<<<<<<< HEAD:src_backup/components/ApiErrorBoundary.tsx

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ApiErrorBoundary.tsx
                  <RefreshCw className="h-4 w-4" />
                )}
                <AlertTitle>;
                  {isNetworkError ? 'Connection Problem' : 'Something went wrong'}
<<<<<<< HEAD:src_backup/components/ApiErrorBoundary.tsx

<<<<<<< HEAD:src/components/ApiErrorBoundary.tsx
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ApiErrorBoundary.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ApiErrorBoundary.tsx
                </AlertTitle>
              </div>
              <AlertDescription className="mt-2">
                {isNetworkError ? (
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
<<<<<<< HEAD:src/components/ApiErrorBoundary.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ApiErrorBoundary.tsx

<<<<<<< HEAD:src_backup/components/ApiErrorBoundary.tsx
<<<<<<< HEAD
            <div className="flex flex-col gap-2">
              <Button
=======

            <div className='flex flex-col gap-2'>;
              <Button

<<<<<<< HEAD:src/components/ApiErrorBoundary.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ApiErrorBoundary.tsx
=======
            <div className="flex flex-col gap-2">
              <Button
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ApiErrorBoundary.tsx
                onClick={this.handleRetry}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                disabled={this.state.isRetrying}
                className="w-full"
              >
<<<<<<< HEAD:src_backup/components/ApiErrorBoundary.tsx

<<<<<<< HEAD:src/components/ApiErrorBoundary.tsx
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ApiErrorBoundary.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ApiErrorBoundary.tsx
                {this.state.isRetrying ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Retrying...
                  </>
                ) : (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4" />"
                    Try Again
                  </>
                )}
                variant="outline""
                onClick={() => window.location.reload()}
                className="w-full""
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Try Again
                  </>
                )}
<<<<<<< HEAD:src_backup/components/ApiErrorBoundary.tsx
<<<<<<< HEAD
              </Button>

<<<<<<< HEAD:src/components/ApiErrorBoundary.tsx
<<<<<<< HEAD
              <Button
=======

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ApiErrorBoundary.tsx
=======
              </Button>

              <Button
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ApiErrorBoundary.tsx
                variant="outline"
                onClick={() => window.location.reload()}
                className="w-full"
              >
<<<<<<< HEAD:src_backup/components/ApiErrorBoundary.tsx
<<<<<<< HEAD:src/components/ApiErrorBoundary.tsx
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======



>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ApiErrorBoundary.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ApiErrorBoundary.tsx
                Reload Page
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              </Button>
            </div>

            {!this.state.isOnline && (
<<<<<<< HEAD:src_backup/components/ApiErrorBoundary.tsx
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <WifiOff className="h-4 w-4" />
                <span>Offline</span>
              </div>
            )}
<<<<<<< HEAD:src/components/ApiErrorBoundary.tsx
<<<<<<< HEAD
<<<<<<< HEAD

            {process.env.NODE_ENV === 'development' && this.state.error && (
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
=======
              <div className='flex items-center justify-center gap-2 text-sm text-muted-foreground'>'
                <WifiOff className='h-4 w-4' />'
                <span>Offline</span>
              </div>
            )}
            {process.env.NODE_ENV === 'development' && this.state.error && (
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ApiErrorBoundary.tsx
              <AlertDescription className='mt - 2'>;
                {isNetworkError;
                  ? !this.state.is_online;
                    ? 'You appear to be offline. Please check your internet connection.';
                    : 'Unable to connect to our servers. This might be a temporary network issue.';
                  : 'An unexpected error occurred while loading the page.'}'
              </AlertDescription>;
            </Alert>;
            <div className='flex flex - col gap - 2'>;
              <Button;
                on_click={this.handle_retry}
                disabled={this.state.is_retrying}
                className='w - full'              >;
                {this.state.is_retrying ? (
                  <>;
                    <RefreshCw className='mr - 2 h - 4 w - 4 animate - spin' />;
                    Retrying...;
                  </>) : (
                  <>;
                    <RefreshCw className='mr - 2 h - 4 w - 4' />;
                    Try Again;
                  </>)}
              </Button>;
              <Button;
                variant='outline';
                on_click={() => window.location.reload ()}
                className='w - full'              >;
                Reload Page;
              </Button>;
            </div>;
            {!this.state.is_online && (
              <div className='flex items - center justify - center gap - 2 text - sm text - muted - foreground'>;
                <WifiOff className='h - 4 w - 4' />;
                <span > Offline</span>;
              </div>)}
            {process.env.NODE_ENV === 'development' && this.state.error && ('
    return this.props.children;
  }
// Hook for accessing query client in function components;
export const useApiErrorHandler = () =>: any {
  const handleApiError = (error:,  Error) =>: any {,
    Sentry.with_scope (scope => {
      scope.set_tag ('source', 'useApiErrorHandler');
      scope.set_level ('error');
      Sentry.capture_exception (error);
    });
  }
  return { handleApiError }
}
  return { handleApiError }
              </Button>;
              <Button
                variant='outline''
                onClick={() => window && window.location.reload()}
                className='w-full'              >;
                Reload Page;
              </Button>;
            </div>;
            {!this && this.state.isOnline && (;
              <div className='flex items-center justify-center gap-2 text-sm text-muted-foreground'>;
                <WifiOff className='h-4 w-4' />;
                <span>Offline</span>;
              </div>;
            )}
            {process && process.env.NODE_ENV === 'development' && this && this.state.error && (;
              <details className='mt-4 rounded border p-2 text-xs'>;
                <summary className='cursor-pointer font-medium'>;
                  Debug Info (Development,  Only);
                </summary>;
                <pre className='mt-2 whitespace-pre-wrap break-all'>;
                  {this && this.state.error && error.toString()}
                  {this && this.state.errorInfo?.componentStack}
                </pre>;
              </details>;
            )}
<<<<<<< HEAD:src_backup/components/ApiErrorBoundary.tsx

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ApiErrorBoundary.tsx
              <details className="mt-4 rounded border p-2 text-xs">
=======
            {process.env.NODE_ENV === 'development' && this.state.error && (              <details className="mt-4 rounded border p-2 text-xs">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                <summary className="cursor-pointer font-medium">
                  Debug Info (Development Only)
                </summary>

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                <pre className="mt-2 whitespace-pre-wrap break-all">

<<<<<<< HEAD:src/components/ApiErrorBoundary.tsx
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ApiErrorBoundary.tsx
=======
              <details className="mt-4 rounded border p-2 text-xs">"
                <summary className="cursor-pointer font-medium">"
                  Debug Info (Development,  Only)
                </summary>
                <pre className="mt-2 whitespace-pre-wrap break-all">"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ApiErrorBoundary.tsx
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>;
              </details>;
            )}
<<<<<<< HEAD:src_backup/components/ApiErrorBoundary.tsx
<<<<<<< HEAD
=======

}, ;
  return { handleApiError };

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}, ;
  return { handleApiError };

            {!this.state.isOnline && (
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <WifiOff className="h-4 w-4" />
                <span>Offline</span>
              </div>
            )}

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-4 rounded border p-2 text-xs">
                <summary className="cursor-pointer font-medium">
                  Debug Info (Development Only)
                </summary>
                <pre className="mt-2 whitespace-pre-wrap break-all">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>;
              </details>;
            )}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ApiErrorBoundary.tsx
          </div>;
        </div>;
      );
    }
<<<<<<< HEAD:src_backup/components/ApiErrorBoundary.tsx
<<<<<<< HEAD
;
    return this.props.children;
  }
}
;
=======

    return this && this.props.children;
  }

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
// Hook for accessing query client in function components;
export const useApiErrorHandler = () => {;
  const handleApiError = (error: Error) => {;
<<<<<<< HEAD
    Sentry.withScope((scope) => {;
      scope.setTag('sourceuseApiErrorHandler'),;
      scope.setLevel('error'),;
      Sentry.captureException(error);
=======
    return this && this.props.children;
  }
// Hook for accessing query client in function components;
export const useApiErrorHandler = () => {;
  const handleApiError = (error:,  Error) => {;,
    Sentry && Sentry.withScope(scope => {;
      scope && scope.setTag('source', 'useApiErrorHandler');
      scope && scope.setLevel('error');
      Sentry && Sentry.captureException(error);
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ApiErrorBoundary.tsx
    });
  };
<<<<<<< HEAD
  return { handleApiError }
=======
  return { handleApiError };
};
  return { handleApiError }
},
  return { handleApiError }
},
};)
;
    return this.props.children;
  }
}
;
// Hook for accessing query client in function components;
export const useApiErrorHandler = () => {;
  const handleApiError = (error: Error) => {;
    Sentry.withScope((scope) => {;
      scope.setTag('sourceuseApiErrorHandler'),;
      scope.setLevel('error'),;
      Sentry.captureException(error);
    });
  };
  return { handleApiError }
};


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
};
=======
    Sentry && Sentry.withScope(scope => {;
      scope && scope.setTag('source', 'useApiErrorHandler');
      scope && scope.setLevel('error');
      Sentry && Sentry.captureException(error);
    })
};
  return { handleApiError }
};
<<<<<<< HEAD:src/components/ApiErrorBoundary.tsx
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
  return { handleApiError }
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ApiErrorBoundary.tsx

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======



},
  return { handleApiError }
},


};
import React, { Component, ReactNode } from 'react';

import { QueryClient  } from '@tanstack/react-query';
import * as Sentry from '@sentry/nextjs';
import { Button  } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle  } from '@/components/ui/alert';
import { RefreshCw, WifiOff } from 'lucide-react'
import {logErrorToProduction} from '@/utils/productionLogger';
interface ApiErrorBoundaryProps {
  children: ReactNode;
  queryClient?: QueryClient;
  fallback?: ReactNode
}

<<<<<<< HEAD:src_backup/components/ApiErrorBoundary.tsx
  return { handleApiError };
};
<<<<<<< HEAD:src/components/ApiErrorBoundary.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ApiErrorBoundary.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/components/ApiErrorBoundary.tsx
