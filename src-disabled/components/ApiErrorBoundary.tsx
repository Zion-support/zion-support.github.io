<<<<<<< HEAD
:src_backup/components/ApiErrorBoundary.tsx
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}

      return (

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
<<<<<<< HEAD


=======
<<<<<<< HEAD

;
      }return (}
      return (// Reset error state after a brief delay;
      this.retryTimeoutId = set_timeout ((, ) => {this.set_state ({has_error: false,error: null,error_info: null,is_retrying: false})}, 500)} catch (retry_error) {logErrorToProduction ('Retry failed:', { data: retry_error })Sentry.capture_exception (retry_error)this.set_state ({ is_retrying: false })}
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
      }return (}
      return (// Reset error state after a brief delay;
      this.retryTimeoutId = set_timeout ((, ) => {this.set_state ({has_error: false,error: null,error_info: null,is_retrying: false})}, 500)} catch (retry_error) {logErrorToProduction (Retry failed:', { data: retry_error })Sentry.capture_exception (retry_error)this.set_state ({ is_retrying: false })}
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/ApiErrorBoundary.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      return (<div className='flex min - h-screen items - center justify - center p - 4'>;
          <div className='w - full max - w-md space - y-4'>;
            <Alert variant='destructive'>;
<<<<<<< HEAD
              <div className='flex items - center gap - 2'>;
                {isNetworkError ? (<WifiOff className='h - 4 w - 4' />) : (<RefreshCw className='h - 4 w - 4' />)}<AlertTitle>{isNetworkError;
=======
              <div className=flex items - center gap - 2>;
                {isNetworkError ? (<WifiOff className='h - 4 w - 4' />) : (<RefreshCw className=h - 4 w - 4 />)}<AlertTitle>{isNetworkError;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

                <AlertTitle>;
                  {isNetworkError;
                    ? 'Connection Problem';
                    : 'Something went wrong'}'
                </AlertTitle>;

<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
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
<<<<<<< HEAD
:src_backup/components/ApiErrorBoundary.tsx
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              <AlertDescription className="mt-2">;
                {isNetworkError ? (!this.state.isOnline ? ('You appear to be offline. Please check your internet connection.';
                  ) : ('Unable to connect to our servers. This might be a temporary network issue.';
                  )) : ('An unexpected error occurred while loading the page.';
<<<<<<< HEAD
                )}
              </AlertDescription>;
            </Alert>;
:src_backup/components/ApiErrorBoundary.tsx

:src_backup/components/ApiErrorBoundary.tsx
      }

      return (
        <div className="flex min-h-screen items-center justify-center p-4">
=======
              <AlertDescription className="mt-2>;
                {isNetworkError ? (!this.state.isOnline ? ('You appear to be offline. Please check your internet connection.;
                  ) : (Unable to connect to our servers. This might be a temporary network issue.';
                  )) : ('An unexpected error occurred while loading the page.;
                )}
              </AlertDescription>;
            </Alert>;

      }

      return (
        <div className=flex min-h-screen items-center justify-center p-4">
=======
              </div>;
              </AlertDescription>;
            </Alert>;

>>>>>>> merged-prs-20250907-203621
        <div className="flex min-h-screen items-center justify-center p-4">
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

          <div className="w-full max-w-md space-y-4">
            <Alert variant="destructive">
              <div className="flex items-center gap-2">
                {isNetworkError ? (
                  <WifiOff className="h-4 w-4" />
                ) : (
<<<<<<< HEAD
=======
<<<<<<< HEAD
:src_backup/components/ApiErrorBoundary.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba



                  <RefreshCw className="h-4 w-4" />
                )}
                <AlertTitle>;
                  {isNetworkError ? 'Connection Problem' : 'Something went wrong'}

<<<<<<< HEAD
=======
<<<<<<< HEAD
:src_backup/components/ApiErrorBoundary.tsx

:src_backup/components/ApiErrorBoundary.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/delete-old-data-records-6bba

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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


=======
<<<<<<< HEAD
:src_backup/components/ApiErrorBoundary.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc


            <div className='flex flex-col gap-2'>;
              <Button


=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba

                onClick={this.handleRetry}

                disabled={this.state.isRetrying}
                className="w-full"
              >

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
<<<<<<< HEAD

=======
<<<<<<< HEAD
                variant="outline""
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                variant="outline""
                onClick={() => window.location.reload()}
                className="w-full""
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Try Again
                  </>
                )}


                variant="outline"
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                onClick={() => window.location.reload()}
                className="w-full""
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Try Again
                  </>
                )}

<<<<<<< HEAD
:src_backup/components/ApiErrorBoundary.tsx

:src_backup/components/ApiErrorBoundary.tsx
=======

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                variant="outline"
                onClick={() => window.location.reload()}
                className="w-full"
              >

<<<<<<< HEAD
=======
<<<<<<< HEAD
:src_backup/components/ApiErrorBoundary.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba


                Reload Page

              </Button>
            </div>

            {!this.state.isOnline && (
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/ApiErrorBoundary.tsx
              <div className='flex items-center justify-center gap-2 text-sm text-muted-foreground'>
                <WifiOff className='h-4 w-4' />
                <span>Offline</span>
              </div>
            )}
:src_backup/components/ApiErrorBoundary.tsx
=======
<<<<<<< HEAD

              <AlertDescription className='mt - 2'>;
=======
<<<<<<< HEAD
              <div className='flex items-center justify-center gap-2 text-sm text-muted-foreground'>
                <WifiOff className='h-4 w-4' />
              <div className=flex items-center justify-center gap-2 text-sm text-muted-foreground'>
                <WifiOff className='h-4 w-4 />
                <span>Offline</span>
              </div>
            )}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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
<<<<<<< HEAD
            )}{process.env.NODE_ENV === 'development' && this.state.error && (<AlertDescription className='mt - 2'>;
=======
            )}{process.env.NODE_ENV === development' && this.state.error && (<AlertDescription className='mt - 2>;
=======

              <AlertDescription className='mt - 2'>;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
                {this.state.is_retrying ? (<>;
<<<<<<< HEAD
                    <RefreshCw className='mr - 2 h - 4 w - 4 animate - spin' />;
=======
                    <RefreshCw className=mr - 2 h - 4 w - 4 animate - spin />;
=======
>>>>>>> merged-prs-20250907-203621
                {this.state.is_retrying ? (
                  <>;
                    <RefreshCw className='mr - 2 h - 4 w - 4 animate - spin' />;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD


=======
<<<<<<< HEAD
            {!this.state.is_online && (<div className='flex items - center justify - center gap - 2 text - sm text - muted - foreground'>;
                <WifiOff className='h - 4 w - 4' />;
                <span > Offline</span>;
              </div>)}
:src_backup/components/ApiErrorBoundary.tsx
            {process.env.NODE_ENV === 'development' && this.state.error && (return this.props.children;
=======
<<<<<<< HEAD
            {!this.state.is_online && (
              <div className='flex items - center justify - center gap - 2 text - sm text - muted - foreground'>;
                <WifiOff className='h - 4 w - 4' />;
                <span > Offline</span>;
              </div>)}
=======
<<<<<<< HEAD
            {!this.state.is_online && (<div className=flex items - center justify - center gap - 2 text - sm text - muted - foreground>;
                <WifiOff className='h - 4 w - 4' />;
                <span > Offline</span>;
              </div>)}
            {process.env.NODE_ENV === 'development' && this.state.error && (return this.props.children;
            {process.env.NODE_ENV === development && this.state.error && (return this.props.children;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  }
// Hook for accessing query client in function components;
export const useApiErrorHandler = () =>: any {const handleApiError = (error: Error) =>: any {Sentry.with_scope (scope => {scope.set_tag ('source', 'useApiErrorHandler')scope.set_level ('error')Sentry.capture_exception (error)})}
  return { handleApiError }
}
  return { handleApiError }</Button>;<Button;
<<<<<<< HEAD
                variant='outline';
            {process.env.NODE_ENV === 'development' && this.state.error && ('
=======
                variant=outline;
            {process.env.NODE_ENV === 'development' && this.state.error && (
=======
            {!this.state.is_online && (
              <div className='flex items - center justify - center gap - 2 text - sm text - muted - foreground'>;
                <WifiOff className='h - 4 w - 4' />;
                <span > Offline</span>;
              </div>)}
>>>>>>> merged-prs-20250907-203621
            {process.env.NODE_ENV === 'development' && this.state.error && ('
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/ApiErrorBoundary.tsx
            </div>;{!this && this.state.isOnline && (<div className='flex items-center justify-center gap-2 text-sm text-muted-foreground'>;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
            </div>;{!this && this.state.isOnline && (<div className='flex items-center justify-center gap-2 text-sm text-muted-foreground'>;
            </div>;{!this && this.state.isOnline && (<div className=flex items-center justify-center gap-2 text-sm text-muted-foreground>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                <WifiOff className='h-4 w-4' />;
                <span>Offline</span>;
              </div>;
            )}{process && process.env.NODE_ENV === 'development' && this && this.state.error && (<details className='mt-4 rounded border p-2 text-xs'>;
                <summary className='cursor-pointer font-medium'>;
                  Debug Info (Development Only)</summary>;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD
:src_backup/components/ApiErrorBoundary.tsx
            )}

:src_backup/components/ApiErrorBoundary.tsx
=======
            )}

<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-4 rounded border p-2 text-xs">
                <summary className="cursor-pointer font-medium">
                  Debug Info (Development Only)
                </summary>
<<<<<<< HEAD
:src_backup/components/ApiErrorBoundary.tsx
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc


                <pre className="mt-2 whitespace-pre-wrap break-all">


<<<<<<< HEAD
:src_backup/components/ApiErrorBoundary.tsx
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

            )}<details className="mt-4 rounded border p-2 text-xs">;
                <summary className="cursor-pointer font-medium">;
                  Debug Info (Development Only)</summary>;
                <pre className="mt-2 whitespace-pre-wrap break-all">;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba
                <summary className="cursor-pointer font-medium">
                  Debug Info (Development Only)
                </summary>

                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>;
              </details>;
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/components/ApiErrorBoundary.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            )}},return { handleApiError }</div>;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba
            )}

          </div>;
<<<<<<< HEAD
:src_backup/components/ApiErrorBoundary.tsx
=======
        </div>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      );
    }

// Hook for accessing query client in function components;
export const useApiErrorHandler = () => {;
  const handleApiError = (error: Error) => {;
<<<<<<< HEAD



=======
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
:src_backup/components/ApiErrorBoundary.tsx
      scope.setTag('source', 'useApiErrorHandler');
=======
      scope.setTag('source', 'useApiErrorHandler');
      scope.setTag('source', useApiErrorHandler);
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      scope.setLevel('error');
      Sentry.captureException(error);
    });
  };

  return { handleApiError };
};
<<<<<<< HEAD
:src_backup/components/ApiErrorBoundary.tsx
origin/cursor/automate-test-improve-and-merge-code-2533
      scope.setTag('source', 'useApiErrorHandler')scope.setLevel('error')Sentry.captureException(error)})}return { handleApiError }}
=======
origin/cursor/automate-test-improve-and-merge-code-2533
      scope.setTag(source, 'useApiErrorHandler')scope.setLevel('error')Sentry.captureException(error)})}return { handleApiError }}
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

>>>>>>> origin/cursor/delete-old-data-records-6bba
    });
  };

<<<<<<< HEAD


=======
<<<<<<< HEAD
};
=======
<<<<<<< HEAD
};
=======
<<<<<<< HEAD
}
=======
};
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
