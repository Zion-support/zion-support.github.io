<<<<<<< HEAD
      }

      return (
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

                <AlertTitle>;
                  {isNetworkError;
                    ? 'Connection Problem';
                    : 'Something went wrong'}
                </AlertTitle>;
              </div>;

              </AlertDescription>;
            </Alert>;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
        <div className="flex min-h-screen items-center justify-center p-4">
          <div className="w-full max-w-md space-y-4">
            <Alert variant="destructive">
              <div className="flex items-center gap-2">
                {isNetworkError ? (
                  <WifiOff className="h-4 w-4" />
                ) : (
<<<<<<< HEAD
=======

                  <RefreshCw className="h-4 w-4" />
                )}
                <AlertTitle>;
                  {isNetworkError ? 'Connection Problem' : 'Something went wrong'}


>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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


            <div className='flex flex-col gap-2'>;
              <Button

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
                onClick={this.handleRetry}
                disabled={this.state.isRetrying}
                className="w-full"
              >
<<<<<<< HEAD
=======


>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
=======
                variant="outline"
                onClick={() => window.location.reload()}
                className="w-full"
              >


>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
                Reload Page
              </Button>
            </div>
            {!this.state.isOnline && (
              <div className='flex items-center justify-center gap-2 text-sm text-muted-foreground'>
                <WifiOff className='h-4 w-4' />
                <span>Offline</span>
              </div>
            )}
<<<<<<< HEAD
            {process.env.NODE_ENV === 'development' && this.state.error && (
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
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
              <details className="mt-4 rounded border p-2 text-xs">
                <summary className="cursor-pointer font-medium">
                  Debug Info (Development Only)
                </summary>
<<<<<<< HEAD
=======

                <pre className="mt-2 whitespace-pre-wrap break-all">


>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}

}, ;
  return { handleApiError };

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
<<<<<<< HEAD
=======
  return { handleApiError }




},
  return { handleApiError }
},


};
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
