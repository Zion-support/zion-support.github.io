<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
    }
  }
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
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
import { QueryClient  } from '@tanstack/react-query';
import * as Sentry from '@sentry/nextjs';
import { Button  } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle  } from '@/components/ui/alert';
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      const isNetworkError =
        this.state.error?.message?.includes('fetch') |
        this.state.error?.message?.includes('network') |
        this.state.error?.message?.includes('timeout') |
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      const isNetworkError = null;
        this.state.error?.message?.includes('fetch') ||
        this.state.error?.message?.includes('network') ||
        this.state.error?.message?.includes('timeout') ||
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        !this.state.isOnline
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
      }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      }
import React, { Component, ReactNode } from 'react';
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

      }

      return (
=======
>>>>>>>       }

>>>>>>>       return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      }

      return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
                <AlertTitle>;
                  {isNetworkError;
                    ? 'Connection Problem';
                    : 'Something went wrong'}
                </AlertTitle>;
              </div>;

              </AlertDescription>;
            </Alert>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        <div className="flex min-h-screen items-center justify-center p-4">
          <div className="w-full max-w-md space-y-4">
            <Alert variant="destructive">
              <div className="flex items-center gap-2">
                {isNetworkError ? (
                  <WifiOff className="h-4 w-4" />
                ) : (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

                </AlertTitle>
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  <RefreshCw className='h-4 w-4' />
                )}
                <AlertTitle>
                  {isNetworkError
                    ? 'Connection Problem'
                    : 'Something went wrong'}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>                 </AlertTitle>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  <RefreshCw className="h-4 w-4" />
                )}
                <AlertTitle>;
                  {isNetworkError ? 'Connection Problem' : 'Something went wrong'}
                </AlertTitle>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            <div className='flex flex-col gap-2'>
              <Button
                onClick={this.handleRetry}
                disabled={this.state.isRetrying}
                className='w-full'              >
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>                 {this.state.isRetrying ? (
ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

            <div className='flex flex-col gap-2'>;
              <Button

=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

            <div className="flex flex-col gap-2">
              <Button
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                onClick={this.handleRetry}
                disabled={this.state.isRetrying}
                className="w-full"
              >
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                {this.state.isRetrying ? (
>>>>>>>                   <>
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                {this.state.isRetrying ? (
                  <>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Retrying...
                  </>
                ) : (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Try Again
                  </>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                )}
=======
                )}


                variant="outline"
                onClick={() => window.location.reload()}
                className="w-full"
              >


                Reload Page
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
              </Button>
              <Button
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
                variant='outline'
                onClick={() => window.location.reload()}
                className='w-full'              >
>>>>>>>                 Reload Page
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                Reload Page
>>>>>>>               </Button>
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
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
              <details className="mt-4 rounded border p-2 text-xs">
                <summary className="cursor-pointer font-medium">
                  Debug Info (Development Only)
                </summary>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

                  {this.state.error.toString()}
=======
                <pre className='mt-2 whitespace-pre-wrap break-all'>
>>>>>>>                   {this.state.error.toString()}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                <pre className='mt-2 whitespace-pre-wrap break-all'>
                <pre className="mt-2 whitespace-pre-wrap break-all">
                  {this.state.error.toString()}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
}, ;
  return { handleApiError };

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          </div>;
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
  return { handleApiError }
}

<<<<<<< HEAD
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>           </div>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        </div>;
      );
    }

    return this && this.props.children;
  }

// Hook for accessing query client in function components;
export const useApiErrorHandler = () => {;
  const handleApiError = (error: Error) => {;
    Sentry && Sentry.withScope(scope => {;
      scope && scope.setTag('source', 'useApiErrorHandler');
      scope && scope.setLevel('error');
      Sentry && Sentry.captureException(error);
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}, ;
  return { handleApiError };
          </div>;
        </div>;
      );
    }
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    });
  };
  return { handleApiError }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

};

=======
};
};
>>>>>>> 

};
>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
};
};
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======




},
  return { handleApiError }
},


};
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
