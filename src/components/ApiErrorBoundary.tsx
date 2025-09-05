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

  constructor(props: ApiErrorBoundaryProps) {
    super(props);
    this.state = {
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

    logErrorToProduction('ApiErrorBoundary caught an error:', error, errorInfo);
  }

  componentDidMount() {_// Listen for online/offline events
    if (typeof window !== 'undefined') {
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

    try {_// Invalidate all queries to force refetch
      if (this.props.queryClient) {
        await this.props.queryClient.invalidateQueries();
        await this.props.queryClient.refetchQueries();}

      // Reset error state after a brief delay
      this.retryTimeoutId = setTimeout__(() => {_this.setState({
          hasError: false, _error: null, _errorInfo: null, _isRetrying: false});
      }, 500);
    } catch (retryError) {_logErrorToProduction('Retry failed:', _{ data: retryError});
      Sentry.captureException(retryError);
      this.setState({_isRetrying: false});
    }
  };

  render() {_if (this.state.hasError) {
      // Check if it's a network-related error
      const _isNetworkError = this.state.error?.message?.includes('fetch') ||
                           this.state.error?.message?.includes('network') ||
                           this.state.error?.message?.includes('timeout') ||
                           !this.state.isOnline;

      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback;}

      return (
        <div className="flex min-h-screen items-center justify-center p-4">
          <div className="w-full max-w-md space-y-4">
            <Alert variant="destructive">
              <div className="flex items-center gap-2">
                {_isNetworkError ? (
                  <WifiOff className="h-4 w-4" />
                ) : (
                  <RefreshCw className="h-4 w-4" />
                )}
                <AlertTitle>
                  {_isNetworkError ? 'Connection Problem' : 'Something went wrong'}
                </AlertTitle>
              </div>
              <AlertDescription className="mt-2">
                {_isNetworkError ? (
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
                onClick={_this.handleRetry}
                disabled={_this.state.isRetrying}
                className="w-full"
              >
                {_this.state.isRetrying ? (
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
                onClick={_() => window.location.reload()}
                className="w-full"
              >
                Reload Page
              </Button>
            </div>

            {_!this.state.isOnline && (
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <WifiOff className="h-4 w-4" />
                <span>Offline</span>
              </div>
            )}

            {_process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-4 rounded border p-2 text-xs">
                <summary className="cursor-pointer font-medium">
                  Debug Info (Development Only)
                </summary>
                <pre className="mt-2 whitespace-pre-wrap break-all">
                  {this.state.error.toString()}
                  {_this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Hook for accessing query client in function components
export const _useApiErrorHandler = () => {_const _handleApiError = (_error: Error) => {
    Sentry.withScope(_(scope) => {
      scope.setTag('source', _'useApiErrorHandler');
      scope.setLevel('error');
      Sentry.captureException(error);});
  };

  return {_handleApiError};
}; 