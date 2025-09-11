<<<<<<< HEAD
<<<<<<< HEAD
import React, { Component, ReactNode } from 'react';
import { QueryClient  } from '@tanstack/react-query';
import * as Sentry from '@sentry/nextjs';
import { Button  } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle  } from '@/components/ui/alert';
import React, { Component, ReactNode } from 'react'
import { QueryClient } from '@tanstack/react-query'
import * as Sentry from '@sentry/nextjs'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { RefreshCw, WifiOff } from 'lucide-react'
import {logErrorToProduction} from '@/utils/productionLogger';
interface ApiErrorBoundaryProps {
  children: ReactNode;
  queryClient?: QueryClient;
  fallback?: ReactNode
}

render () {
  if (this.state.hasError) {'
  //Check if it's a network-related error const isNetworkError = this.state.error?.message?.includes ('fetch') |this.state.error?.message?.includes ('network') |this.state.error?.message?.includes ('timeout') |!this.state.isOnline
//Use custom fallback if provided if (this.props.fallback) {
  ) : (<RefreshCw className="h-4 w-4" />)
}<AlertTitle> {'
  isNetworkError ? 'Connection Problem': 'Something went wrong' '
}</AlertTitle> </div> !this.state.isOnline ? ('You appear to be offline. Please check your internet connection.') : ('Unable to connect to our servers. This might be a temporary network issue.') ) : ('An unexpected error occurred while loading the page.') "
}</AlertDescription> </Alert> <div className="flex flex-col gap-2" > <Button > {"
  this.state.isRetrying ? (<> <RefreshCw className="mr-2 h-4 w-4 animate-spin" /> Retrying... </>) : (<> <RefreshCw className="mr-2 h-4 w-4" /> Try Again </>)
}</Button> <Button > Reload Page </Button> </div> <span>Offline</span> </div>) "
}Debug Info (Development Only) </summary> <pre className="mt-2 whitespace-pre-wrap break-all" > {
  this.state.error.toString ()
}{
  this.state.errorInfo?.componentStack
}</pre> </details>)
}</div> </div>)
}return this.props.children
export class ApiErrorBoundary extends Component<
  ApiErrorBoundaryProps
  ApiErrorBoundaryState
> {
  private retryTimeoutId: NodeJS.Timeout | null = null
  constructor(props: ApiErrorBoundaryProps) {
    super(props)
    this.state = {
      hasError: false
      error: null
      errorInfo: null
      isRetrying: false
      isOnline: typeof navigator !== 'undefined' ? navigator.onLine : true
    } }
  static getDerivedStateFromError(
    error: Error
  ): Partial<ApiErrorBoundaryState> {
    return {
      hasError: true
      error
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
  componentDidCatch(error: Error, errorInfo: any) {
    // Log to Sentry
    Sentry.withScope(scope => {
      scope.setTag('errorBoundary', 'ApiErrorBoundary')
      scope.setContext('errorInfo', errorInfo)
      scope.setLevel('error')
      Sentry.captureException(error)
    })
    this.setState({
      error
      errorInfo
    })
    logErrorToProduction('ApiErrorBoundary caught an error:', error, errorInfo)
  }
  componentDidMount() {
    // Listen for online/offline events
    if (typeof window !== 'undefined') {
      window.addEventListener('online', this.handleOnline)
      window.addEventListener('offline', this.handleOffline)
    }
  }
  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('online', this.handleOnline)
      window.removeEventListener('offline', this.handleOffline)
    }
    if (this.retryTimeoutId) {
      clearTimeout(this.retryTimeoutId)
    }
  }
  handleOnline = () => {
    this.setState({ isOnline: true })
    // Auto-retry when coming back online
    if (this.state.hasError) {
      this.handleRetry()
    }
  }
  handleOffline = () => {
    this.setState({ isOnline: false })
  }
  handleRetry = async () => {
    this.setState({ isRetrying: true })
    try {
      // Invalidate all queries to force refetch
      if (this.props.queryClient) {
        await this.props.queryClient.invalidateQueries()
        await this.props.queryClient.refetchQueries()
      }
      // Reset error state after a brief delay
      this.retryTimeoutId = setTimeout((,) => {
        this.setState({
          hasError: false
          error: null
          errorInfo: null
          isRetrying: false
        })
      }, 500)
    } catch (retryError) {
      logErrorToProduction('Retry failed:', { data: retryError })
      Sentry.captureException(retryError)
      this.setState({ isRetrying: false })
    }
  }
  render() {
    if (this.state.hasError) {
      // Check if it's a network-related error
import { QueryClient  } from '@tanstack/react-query';
import * as Sentry from '@sentry/nextjs';
import { Button  } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle  } from '@/components/ui/alert';
      const isNetworkError =
        this.state.error?.message?.includes('fetch') |
        this.state.error?.message?.includes('network') |
        this.state.error?.message?.includes('timeout') |
      const isNetworkError = null;
        this.state.error?.message?.includes('fetch') ||
        this.state.error?.message?.includes('network') ||
        this.state.error?.message?.includes('timeout') ||
        !this.state.isOnline
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback
      }
      }
import React, { Component, ReactNode } from 'react';
import { QueryClient } from '@tanstack/react-query';
import * as Sentry from '@sentry/nextjs';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      }
      return (
        <div className='flex min - h-screen items - center justify - center p - 4'>;
          <div className='w - full max - w-md space - y-4'>;
            <Alert variant='destructive'>;
              <div className='flex items - center gap - 2'>;
                {isNetworkError ? (
                  <WifiOff className='h - 4 w - 4' />) : (
                  <RefreshCw className='h - 4 w - 4' />)}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <AlertTitle>;
                  {isNetworkError;
                    ? 'Connection Problem';
                    : 'Something went wrong'}
                </AlertTitle>;
              </div>;

              </AlertDescription>;
            </Alert>;
        <div className="flex min-h-screen items-center justify-center p-4">
          <div className="w-full max-w-md space-y-4">
            <Alert variant="destructive">
              <div className="flex items-center gap-2">
                {isNetworkError ? (
                  <WifiOff className="h-4 w-4" />
                ) : (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <RefreshCw className='h-4 w-4' />
                )}
                <AlertTitle>
                  {isNetworkError
                    ? 'Connection Problem'
                    : 'Something went wrong'}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <RefreshCw className="h-4 w-4" />
                )}
                <AlertTitle>;
                  {isNetworkError ? 'Connection Problem' : 'Something went wrong'}
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div className='flex flex-col gap-2'>
              <Button
                onClick={this.handleRetry}
                disabled={this.state.isRetrying}
                className='w-full'              >
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            <div className='flex flex-col gap-2'>;
              <Button

<<<<<<< HEAD
<<<<<<< HEAD

            <div className="flex flex-col gap-2">
              <Button
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                onClick={this.handleRetry}
                disabled={this.state.isRetrying}
                className="w-full"
              >
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {this.state.isRetrying ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Retrying...
                  </>
                ) : (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Try Again
                  </>
                )}
<<<<<<< HEAD
<<<<<<< HEAD
                )}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


=======
              </Button>
              <Button
                variant='outline'
                onClick={() => window.location.reload()}
                className='w-full'              >
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                variant="outline"
                onClick={() => window.location.reload()}
                className="w-full"
              >


                Reload Page
              </Button>
<<<<<<< HEAD
              <Button
                variant='outline'
                onClick={() => window.location.reload()}
                className='w-full'              >
ursor/fix-website-loading-errors-and-merge-6662
                Reload Page
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </div>
            {!this.state.isOnline && (
              <div className='flex items-center justify-center gap-2 text-sm text-muted-foreground'>
                <WifiOff className='h-4 w-4' />
                <span>Offline</span>
              </div>
            )}
              <AlertDescription className='mt - 2'>;
                {isNetworkError;
                  ? !this.state.is_online;
                    ? 'You appear to be offline. Please check your internet connection.';
                    : 'Unable to connect to our servers. This might be a temporary network issue.';
                  : 'An unexpected error occurred while loading the page.'}
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
            {process.env.NODE_ENV === 'development' && this.state.error && (

    return this.props.children;
  }
// Hook for accessing query client in function components;
export const useApiErrorHandler = () =>: any {
  const handleApiError = (error: Error) =>: any {
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
                variant='outline'
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
                  Debug Info (Development Only);
                </summary>;
                <pre className='mt-2 whitespace-pre-wrap break-all'>;
                  {this && this.state.error && error.toString()}
                  {this && this.state.errorInfo?.componentStack}
                </pre>;
              </details>;
            )}
<<<<<<< HEAD
<<<<<<< HEAD
                variant='outline'
                onClick={() => window.location.reload()}
                className='w-full'              >
                variant="outline"
                onClick={() => window.location.reload()}
                className="w-full"
              >
                Reload Page
              </Button>
            </div>
            {!this.state.isOnline && (
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <WifiOff className="h-4 w-4" />
                <span>Offline</span>
              </div>
            )}
            {process.env.NODE_ENV === 'development' && this.state.error && (
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <details className="mt-4 rounded border p-2 text-xs">
                <summary className="cursor-pointer font-medium">
                  Debug Info (Development Only)
                </summary>
<<<<<<< HEAD
<<<<<<< HEAD
                <pre className='mt-2 whitespace-pre-wrap break-all'>
                <pre className='mt-2 whitespace-pre-wrap break-all'>
                <pre className="mt-2 whitespace-pre-wrap break-all">
=======

                <pre className="mt-2 whitespace-pre-wrap break-all">


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                <pre className='mt-2 whitespace-pre-wrap break-all'>
                <pre className="mt-2 whitespace-pre-wrap break-all">


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
<<<<<<< HEAD
<<<<<<< HEAD
}, ;
  return { handleApiError };

          </div>;
          </div>
        </div>
      )
    }
    return this.props.children
  }
// Hook for accessing query client in function components
export const useApiErrorHandler = () => {
  const handleApiError = (error: Error) => {
    Sentry.withScope(scope => {
      scope.setTag('source', 'useApiErrorHandler')
      scope.setLevel('error')
      Sentry.captureException(error)
    })
  }
  return { handleApiError }
}
  return { handleApiError }
}
  return { handleApiError }
}

}, ;
  return { handleApiError };
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

}, ;
  return { handleApiError };

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </div>;
        </div>;
      );
    }
<<<<<<< HEAD
<<<<<<< HEAD
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
};
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

};
};
};
=======

    return this && this.props.children;
  }

// Hook for accessing query client in function components;
export const useApiErrorHandler = () => {;
  const handleApiError = (error: Error) => {;
    Sentry && Sentry.withScope(scope => {;
      scope && scope.setTag('source', 'useApiErrorHandler');
      scope && scope.setLevel('error');
      Sentry && Sentry.captureException(error);
    });
  };
  return { handleApiError }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




},
  return { handleApiError }
},


<<<<<<< HEAD
<<<<<<< HEAD
};
=======
};
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
};
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
