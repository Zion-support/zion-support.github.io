<<<<<<< HEAD
<<<<<<< HEAD
import React, { Component, ReactNode } from 'react';
import { QueryClient  } from '@tanstack/react-query';
import * as Sentry from '@sentry/nextjs';
<<<<<<< HEAD
import { Button  } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle  } from '@/components/ui/alert';
import { RefreshCw, WifiOff } from 'lucide-react'
import {logErrorToProduction} from '@/utils/productionLogger';
interface ApiErrorBoundaryProps {
  children: ReactNode;
  queryClient?: QueryClient;
  fallback?: ReactNode
=======
import React, { Component, ReactNode } from 'react';
import { QueryClient } from '@tanstack / react - query';
import * as Sentry from '@sentry / nextjs';
import { Button } from '@/components / ui / button';
import { Alert, AlertDescription, AlertTitle } from '@/components / ui / alert';
import { RefreshCw, WifiOff } from 'lucide-react';
import { logErrorToProduction } from '@/utils / production_logger';
interface ApiErrorBoundaryProps {
  children: ReactNode;
  query_client?: QueryClient;
  fallback?: ReactNode;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}

render () {
<<<<<<< HEAD
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
=======
  // Check condition
if ( {') {
  $2
}
  //Check if it's a network - related error const isNetworkError = this.state.error?.message?.includes ('fetch') || this.state.error?.message?.includes ('network') || this.state.error?.message?.includes ('timeout') || !this.state.is_online;
//Use custom fallback if provided // Check condition
if ( {) {
  $2
}
  ) : (<RefreshCw className="h - 4 w - 4" />);
}<AlertTitle> {';
  isNetworkError ? 'Connection Problem': 'Something went wrong' ';
}</AlertTitle> </div> !this.state.is_online ? ('You appear to be offline. Please check your internet connection.') : ('Unable to connect to our servers. This might be a temporary network issue.') ) : ('An unexpected error occurred while loading the page.') ";
}</AlertDescription> </Alert> <div className="flex flex - col gap - 2" > <Button > {";
  this.state.is_retrying ? (<> <RefreshCw className="mr - 2 h - 4 w - 4 animate - spin" /> Retrying... </>) : (<> <RefreshCw className="mr - 2 h - 4 w - 4" /> Try Again </>);
}</Button> <Button > Reload Page </Button> </div> <span > Offline</span> </div>) ";
}Debug Info (Development Only) </summary> <pre className="mt - 2 whitespace - pre - wrap break - all" > {
  this.state.error.to_string ();
}{
  this.state.error_info?.component_stack;
}</pre> </details>);
}</div> </div>);
}return this.props.children;
export class ApiErrorBoundary extends Component<;
  ApiErrorBoundaryProps,
  ApiErrorBoundaryState;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
> {
  private retryTimeoutId: NodeJS.Timeout | null = null;
  constructor (props: ApiErrorBoundaryProps) {
    super (props);
    this.state = {
<<<<<<< HEAD
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
=======
      has_error: false,
      error: null,
      error_info: null,
      is_retrying: false,
      is_online: typeof navigator !== 'undefined' ? navigator.on_line : true,
    } }
  static getDerivedStateFromError (
    error: Error): Partial < ApiErrorBoundaryState> {
    return {
      has_error: true,
      error,
    }
  }
  componentDidCatch (error: Error, error_info: any) {
    // Log to Sentry;
    Sentry.with_scope (scope => {
      scope.set_tag ('error_boundary', 'ApiErrorBoundary');
      scope.set_context ('error_info', error_info);
      scope.set_level ('error');
      Sentry.capture_exception (error);
    });
    this.set_state ({
      error,
      error_info,
    });
    logErrorToProduction ('ApiErrorBoundary caught an error:', error, error_info);
  }
  componentDidMount () {
    // Listen for online / offline events;
    // Check condition
if ( {) {
  $2
}
      window.addEventListener ('online', this.handle_online);
      window.addEventListener ('offline', this.handle_offline);
    }
  }
  componentWillUnmount () {
    // Check condition
if ( {) {
  $2
}
      window.removeEventListener ('online', this.handle_online);
      window.removeEventListener ('offline', this.handle_offline);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    }
    // Check condition
if ( {) {
  $2
}
      clear_timeout (this.retryTimeoutId);
    }
  }
<<<<<<< HEAD
  handleOnline = () => {
    this.setState({ isOnline: true })
    // Auto-retry when coming back online
    if (this.state.hasError) {
      this.handleRetry()
=======
  handle_online = () => {
    this.set_state ({ is_online: true });
    // Auto - retry when coming back online;
    // Check condition
if ( {) {
  $2
}
      this.handle_retry ();
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    }
  }
  handle_offline = () => {
    this.set_state ({ is_online: false });
  }
  handle_retry = async () => {
    this.set_state ({ is_retrying: true });
    try {
      // Invalidate all queries to force refetch;
      // Check condition
if ( {) {
  $2
}
        await this.props.query_client.invalidate_queries ();
        await this.props.query_client.refetch_queries ();
      }
<<<<<<< HEAD
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
      const isNetworkError =
        this.state.error?.message?.includes('fetch') |
        this.state.error?.message?.includes('network') |
        this.state.error?.message?.includes('timeout') |
        !this.state.isOnline
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback
=======
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { RefreshCw, WifiOff } from 'lucide-react';
import { logErrorToProduction } from '@/utils/productionLogger';
interface ApiErrorBoundaryProps {;
  children: ReactNode;
  queryClient?: QueryClient;
  fallback?: ReactNode;

};
render () {;
  if (this && this.state.hasError) {';
  //Check if it's a network-related error const isNetworkError = this && this.state.error?.message?.includes ('fetch') || this && this.state.error?.message?.includes ('network') || this && this.state.error?.message?.includes ('timeout') || !this && this.state.isOnline;
//Use custom fallback if provided if (this && this.props.fallback) {;
  ) : (<RefreshCw className="h-4 w-4" />) ;
}<AlertTitle> {';
  isNetworkError ? 'Connection Problem': 'Something went wrong' ';
}</AlertTitle> </div> !this && this.state.isOnline ? ('You appear to be offline. Please check your internet connection.') : ('Unable to connect to our servers. This might be a temporary network issue.') ) : ('An unexpected error occurred while loading the page.') ";
}</AlertDescription> </Alert> <div className="flex flex-col gap-2" > <Button > {";
  this && this.state.isRetrying ? (<> <RefreshCw className="mr-2 h-4 w-4 animate-spin" /> Retrying... </>) : (<> <RefreshCw className="mr-2 h-4 w-4" /> Try Again </>) ;
}</Button> <Button > Reload Page </Button> </div> <span>Offline</span> </div>) ";
}Debug Info (Development Only) </summary> <pre className="mt-2 whitespace-pre-wrap break-all" > {;
  this && this.state.error && error.toString () ;
}{;
  this && this.state.errorInfo?.componentStack ;
}</pre> </details>) ;
}</div> </div>) ;
}return this && this.props.children ;

export class ApiErrorBoundary extends Component<;
  ApiErrorBoundaryProps,;
  ApiErrorBoundaryState;
> {;
  private retryTimeoutId: NodeJS && NodeJS.Timeout | null = null;

  constructor(props: ApiErrorBoundaryProps) {;
    super(props);
    this && this.state = {;
      hasError: false,;
      error: null,;
      errorInfo: null,;
      isRetrying: false,;
      isOnline: typeof navigator !== 'undefined' ? navigator && navigator.onLine : true,;
    };  }

  static getDerivedStateFromError(;
    error: Error;
  ): Partial<ApiErrorBoundaryState> {;
    return {;
      hasError: true,;
      error,;
    };
  }

  componentDidCatch(error: Error, errorInfo: any) {;
    // Log to Sentry;
    Sentry && Sentry.withScope(scope => {;
      scope && scope.setTag('errorBoundary', 'ApiErrorBoundary');
      scope && scope.setContext('errorInfo', errorInfo);
      scope && scope.setLevel('error');
      Sentry && Sentry.captureException(error);
    });
    this && this.setState({;
      error,;
      errorInfo,;
    });

    logErrorToProduction('ApiErrorBoundary caught an error:', error, errorInfo);
  }

  componentDidMount() {;
    // Listen for online/offline events;
    if (typeof window !== 'undefined') {;
      window && window.addEventListener('online', this && this.handleOnline);
      window && window.addEventListener('offline', this && this.handleOffline);
    }
  }

  componentWillUnmount() {;
    if (typeof window !== 'undefined') {;
      window && window.removeEventListener('online', this && this.handleOnline);
      window && window.removeEventListener('offline', this && this.handleOffline);
    }
    if (this && this.retryTimeoutId) {;
      clearTimeout(this && this.retryTimeoutId);
    }
  }

  handleOnline = () => {;
    this && this.setState({ isOnline: true });
    // Auto-retry when coming back online;
    if (this && this.state.hasError) {;
      this && this.handleRetry();
    }
  };

  handleOffline = () => {;
    this && this.setState({ isOnline: false });
  };

  handleRetry = async () => {;
    this && this.setState({ isRetrying: true });

    try {;
      // Invalidate all queries to force refetch;
      if (this && this.props.queryClient) {;
        await this && this.props.queryClient && queryClient.invalidateQueries();
        await this && this.props.queryClient && queryClient.refetchQueries();
      }

      // Reset error state after a brief delay;
      this && this.retryTimeoutId = setTimeout((,) => {;
        this && this.setState({;
          hasError: false,;
          error: null,;
          errorInfo: null,;
          isRetrying: false,;
        });
      }, 500);
    } catch (retryError) {;
      logErrorToProduction('Retry failed:', { data: retryError });
      Sentry && Sentry.captureException(retryError);
      this && this.setState({ isRetrying: false });
    }
  };

  render() {;
    if (this && this.state.hasError) {;
      // Check if it's a network-related error;
      const isNetworkError =;
        this && this.state.error?.message?.includes('fetch') ||;
        this && this.state.error?.message?.includes('network') ||;
        this && this.state.error?.message?.includes('timeout') ||;
        !this && this.state.isOnline;

      // Use custom fallback if provided;
      if (this && this.props.fallback) {;
        return this && this.props.fallback;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      }
      return (
        <div className='flex min-h-screen items-center justify-center p-4'>;
          <div className='w-full max-w-md space-y-4'>;
            <Alert variant='destructive'>;
              <div className='flex items-center gap-2'>;
                {isNetworkError ? (;
                  <WifiOff className='h-4 w-4' />;
                ) : (;
                  <RefreshCw className='h-4 w-4' />;
                )}
=======
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
      }
      return (
        <div className='flex min - h-screen items - center justify - center p - 4'>;
          <div className='w - full max - w-md space - y-4'>;
            <Alert variant='destructive'>;
              <div className='flex items - center gap - 2'>;
                {isNetworkError ? (
                  <WifiOff className='h - 4 w - 4' />) : (
                  <RefreshCw className='h - 4 w - 4' />)}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                <AlertTitle>;
                  {isNetworkError;
                    ? 'Connection Problem';
                    : 'Something went wrong'}
                </AlertTitle>;
              </div>;
<<<<<<< HEAD
              <AlertDescription className='mt-2'>;
                {isNetworkError;
                  ? !this && this.state.isOnline;
                    ? 'You appear to be offline. Please check your internet connection.';
                    : 'Unable to connect to our servers. This might be a temporary network issue.';
                  : 'An unexpected error occurred while loading the page.'}
<<<<<<< HEAD
              </AlertDescription>
            </Alert>
            <div className='flex flex-col gap-2'>
=======
              </AlertDescription>;
            </Alert>;

            <div className='flex flex-col gap-2'>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              <Button
                onClick={this && this.handleRetry}
                disabled={this && this.state.isRetrying}
                className='w-full'>;
                {this && this.state.isRetrying ? (;
                  <>;
                    <RefreshCw className='mr-2 h-4 w-4 animate-spin' />;
                    Retrying...;
                  </>;
                ) : (;
                  <>;
                    <RefreshCw className='mr-2 h-4 w-4' />;
                    Try Again;
                  </>;
                )}
<<<<<<< HEAD
              </Button>
              <Button
                variant='outline'
                onClick={() => window.location.reload()}
                className='w-full'              >
                Reload Page
              </Button>
            </div>
            {!this.state.isOnline && (
              <div className='flex items-center justify-center gap-2 text-sm text-muted-foreground'>
                <WifiOff className='h-4 w-4' />
                <span>Offline</span>
              </div>
            )}
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className='mt - 4 rounded border p - 2 text - xs'>;
                <summary className='cursor - pointer font - medium'>;
                  Debug Info (Development Only);
                </summary>;
                <pre className='mt - 2 whitespace - pre - wrap break - all'>;
                  {this.state.error.to_string ()}
                  {this.state.error_info?.component_stack}
                </pre>;
              </details>)}
          </div>;
        </div>);
    }
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
  return { handleApiError }
}
  return { handleApiError }
<<<<<<< HEAD
}
  return { handleApiError }
}

=======
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
          </div>;
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
    });
  };
  return { handleApiError };
};
  return { handleApiError }
}, ;
  return { handleApiError }
}, ;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
},
  return { handleApiError }
},
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
