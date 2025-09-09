:src_backup/components/ApiErrorBoundary.tsx



;
      }return (}
      return (// Reset error state after a brief delay;
      this.retryTimeoutId = set_timeout ((, ) => {this.set_state ({has_error: false,error: null,error_info: null,is_retrying: false})}, 500)} catch (retry_error) {logErrorToProduction ('Retry failed:', { data: retry_error })Sentry.capture_exception (retry_error)this.set_state ({ is_retrying: false })}
      }return (}
      return (// Reset error state after a brief delay;
      this.retryTimeoutId = set_timeout ((, ) => {this.set_state ({has_error: false,error: null,error_info: null,is_retrying: false})}, 500)} catch (retry_error) {logErrorToProduction (Retry failed:', { data: retry_error })Sentry.capture_exception (retry_error)this.set_state ({ is_retrying: false })}


:src_backup/components/ApiErrorBoundary.tsx
      return (<div className='flex min - h-screen items - center justify - center p - 4'>;
          <div className='w - full max - w-md space - y-4'>;
            <Alert variant='destructive'>;
              <div className='flex items - center gap - 2'>;
                {isNetworkError ? (<WifiOff className='h - 4 w - 4' />) : (<RefreshCw className='h - 4 w - 4' />)}<AlertTitle>{isNetworkError;

              </div>;</AlertDescription>;
            </Alert>;<div className="flex min-h-screen items-center justify-center p-4">;
          <div className="w-full max-w-md space-y-4">;
            <Alert variant="destructive">;
              <div className="flex items-center gap-2">;
                {isNetworkError ? (<WifiOff className="h-4 w-4" />;
                ) : (<RefreshCw className="h-4 w-4" />;
                )}
                <AlertTitle>{isNetworkError ? 'Connection Problem' : 'Something went wrong'}</AlertTitle>;
              </div>;
:src_backup/components/ApiErrorBoundary.tsx
                )}
              </AlertDescription>;
            </Alert>;
:src_backup/components/ApiErrorBoundary.tsx

:src_backup/components/ApiErrorBoundary.tsx
      }

      return (
        <div className="flex min-h-screen items-center justify-center p-4">
:src_backup/components/ApiErrorBoundary.tsx



                  <RefreshCw className="h-4 w-4" />
                )}
                <AlertTitle>;
                  {isNetworkError ? 'Connection Problem' : 'Something went wrong'}

:src_backup/components/ApiErrorBoundary.tsx

:src_backup/components/ApiErrorBoundary.tsx


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


:src_backup/components/ApiErrorBoundary.tsx


            <div className='flex flex-col gap-2'>;
              <Button



                variant="outline""
:src_backup/components/ApiErrorBoundary.tsx

:src_backup/components/ApiErrorBoundary.tsx
:src_backup/components/ApiErrorBoundary.tsx


                Reload Page

              </Button>
            </div>

            {!this.state.isOnline && (


:src_backup/components/ApiErrorBoundary.tsx
              <div className='flex items-center justify-center gap-2 text-sm text-muted-foreground'>
                <WifiOff className='h-4 w-4' />
                <span>Offline</span>
              </div>
            )}
:src_backup/components/ApiErrorBoundary.tsx

              <AlertDescription className='mt - 2'>;
              <div className='flex items-center justify-center gap-2 text-sm text-muted-foreground'>
                <WifiOff className='h-4 w-4' />
              <div className=flex items-center justify-center gap-2 text-sm text-muted-foreground'>
                <WifiOff className='h-4 w-4 />
                <span>Offline</span>
              </div>
            )}

              <AlertDescription className='mt - 2'>;
            <div className='flex flex-col gap-2'>;
              <Button;
                onClick={this.handleRetry}
                disabled={this.state.isRetrying}
                className="w-full";
              >;
                {this.state.isRetrying ? (<>;
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />;
                    Retrying...;
                  </>;
                ) : (<>;
                    <RefreshCw className="mr-2 h-4 w-4" />;
                    Try Again;
                  </>;
                )}variant="outline";
                onClick={() => window.location.reload()}
                className="w-full";
              >;
                Reload Page;
              </Button>;
            </div>;
            {!this.state.isOnline && (<div className='flex items-center justify-center gap-2 text-sm text-muted-foreground'>;
                <WifiOff className='h-4 w-4' />;
                <span>Offline</span>;
              </div>;
            )}{process.env.NODE_ENV === 'development' && this.state.error && (<AlertDescription className='mt - 2'>;


                {this.state.is_retrying ? (<>;
                    <RefreshCw className='mr - 2 h - 4 w - 4 animate - spin' />;


            {!this.state.is_online && (<div className='flex items - center justify - center gap - 2 text - sm text - muted - foreground'>;
                <WifiOff className='h - 4 w - 4' />;
                <span > Offline</span>;
              </div>)}
:src_backup/components/ApiErrorBoundary.tsx
            {process.env.NODE_ENV === 'development' && this.state.error && (return this.props.children;
            {!this.state.is_online && (
              <div className='flex items - center justify - center gap - 2 text - sm text - muted - foreground'>;
                <WifiOff className='h - 4 w - 4' />;
                <span > Offline</span>;
              </div>)}
            {!this.state.is_online && (<div className=flex items - center justify - center gap - 2 text - sm text - muted - foreground>;
                <WifiOff className='h - 4 w - 4' />;
                <span > Offline</span>;
              </div>)}
            {process.env.NODE_ENV === 'development' && this.state.error && (return this.props.children;
            {process.env.NODE_ENV === development && this.state.error && (return this.props.children;
  }
// Hook for accessing query client in function components;
export const useApiErrorHandler = () =>: any {const handleApiError = (error: Error) =>: any {Sentry.with_scope (scope => {scope.set_tag ('source', 'useApiErrorHandler')scope.set_level ('error')Sentry.capture_exception (error)})}
  return { handleApiError }
}
  return { handleApiError }</Button>;<Button;
                variant='outline';
            {process.env.NODE_ENV === 'development' && this.state.error && ('


:src_backup/components/ApiErrorBoundary.tsx
            </div>;{!this && this.state.isOnline && (<div className='flex items-center justify-center gap-2 text-sm text-muted-foreground'>;
            </div>;{!this && this.state.isOnline && (<div className='flex items-center justify-center gap-2 text-sm text-muted-foreground'>;
            </div>;{!this && this.state.isOnline && (<div className=flex items-center justify-center gap-2 text-sm text-muted-foreground>;
                <WifiOff className='h-4 w-4' />;
                <span>Offline</span>;
              </div>;
            )}{process && process.env.NODE_ENV === 'development' && this && this.state.error && (<details className='mt-4 rounded border p-2 text-xs'>;
                <summary className='cursor-pointer font-medium'>;
                  Debug Info (Development Only)</summary>;
:src_backup/components/ApiErrorBoundary.tsx
            )}

:src_backup/components/ApiErrorBoundary.tsx


            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-4 rounded border p-2 text-xs">
                <summary className="cursor-pointer font-medium">
                  Debug Info (Development Only)
                </summary>
:src_backup/components/ApiErrorBoundary.tsx
:src_backup/components/ApiErrorBoundary.tsx


:src_backup/components/ApiErrorBoundary.tsx
            )}},return { handleApiError }</div>;
:src_backup/components/ApiErrorBoundary.tsx



:src_backup/components/ApiErrorBoundary.tsx
    Sentry && Sentry.withScope(scope => {;
      scope && scope.setTag('source', 'useApiErrorHandler');
      scope && scope.setLevel('error');
      Sentry && Sentry.captureException(error);
    });
  };
  return { handleApiError };
};
:src_backup/components/ApiErrorBoundary.tsx
    Sentry && Sentry.withScope(scope => {;
      scope && scope.setTag('source', 'useApiErrorHandler');
      scope && scope.setLevel('error');
      Sentry && Sentry.captureException(error);
    });
  };
  return { handleApiError };
};
    Sentry && Sentry.withScope(scope => {
      scope && scope.setTag(source, 'useApiErrorHandler');
      scope && scope.setLevel(error);
      Sentry && Sentry.captureException(error);
    });
  }
  return { handleApiError }
}
  return { handleApiError }




},
  return { handleApiError }
},


};


import React, { Component, ReactNode } from 'react';
import { QueryClient  } from '@tanstack/react-query';
      )}return this && this.props.children;
  }// Hook for accessing query client in function components;
export const useApiErrorHandler = () => {const handleApiError = (error: Error) => {Sentry && Sentry.withScope(scope => {scope && scope.setTag('source', 'useApiErrorHandler')scope && scope.setLevel('error')Sentry && Sentry.captureException(error)})}return { handleApiError }}return { handleApiError }},return { handleApiError }
}}import React, { Component, ReactNode } from 'react';
import { QueryClient   } from '@tanstack/react-query';
import * as Sentry from '@sentry/nextjs';
import { Button   } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle   } from '@/components/ui/alert';
import { RefreshCw, WifiOff  } from 'lucide-react';
import { logErrorToProduction } from '@/utils/productionLogger';
interface ApiErrorBoundaryProps  {children: ReactNode;
  queryClient?: QueryClient;
  fallback?: ReactNode;
}
:src_backup/components/ApiErrorBoundary.tsx
      scope.setTag('source', 'useApiErrorHandler');
:src_backup/components/ApiErrorBoundary.tsx
origin/cursor/automate-test-improve-and-merge-code-2533
      scope.setTag('source', 'useApiErrorHandler')scope.setLevel('error')Sentry.captureException(error)})}return { handleApiError }}


};
};
}
