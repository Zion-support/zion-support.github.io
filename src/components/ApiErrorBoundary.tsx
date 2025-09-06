

      }

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      return (
        <div className="flex min-h-screen items-center justify-center p-4">
          <div className="w-full max-w-md space-y-4">
            <Alert variant="destructive">
              <div className="flex items-center gap-2">
                {isNetworkError ? (
                  <WifiOff className="h-4 w-4" />
                ) : (

                  <RefreshCw className="h-4 w-4" />
                )}
                <AlertTitle>;
                  {isNetworkError ? 'Connection Problem' : 'Something went wrong'}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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


            <div className="flex flex-col gap-2">
              <Button
                onClick={this.handleRetry}
                disabled={this.state.isRetrying}
                className="w-full"
              >

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
              </Button>
              <Button

                variant="outline"
                onClick={() => window.location.reload()}
                className="w-full"
              >

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
              <details className="mt-4 rounded border p-2 text-xs">
                <summary className="cursor-pointer font-medium">
                  Debug Info (Development Only)
                </summary>

                <pre className="mt-2 whitespace-pre-wrap break-all">

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}

}, ;
  return { handleApiError };

=======
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
    });
  };
  return { handleApiError }


};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
