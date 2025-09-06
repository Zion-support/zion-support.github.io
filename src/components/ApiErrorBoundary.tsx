import { QueryClient  } from '@tanstack/react-query';
import * as Sentry from '@sentry/nextjs';
import { Button  } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle  } from '@/components/ui/alert';
      const isNetworkError =
        this.state.error?.message?.includes('fetch') |
        this.state.error?.message?.includes('network') |
        this.state.error?.message?.includes('timeout') |
        !this.state.isOnline
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback
      }
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
                <AlertTitle>;
                  {isNetworkError;
                    ? 'Connection Problem';
                    : 'Something went wrong'}
                </AlertTitle>;
              </div>;

              </AlertDescription>;
            </Alert>;
            <div className='flex flex-col gap-2'>
              <Button
                onClick={this.handleRetry}
                disabled={this.state.isRetrying}
                className='w-full'              >
                )}


                variant="outline"
                onClick={() => window.location.reload()}
                className="w-full"
              >


                Reload Page
}, ;
  return { handleApiError };

          </div>;
  return { handleApiError }




},
  return { handleApiError }
},


};
