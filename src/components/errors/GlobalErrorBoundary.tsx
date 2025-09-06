import {
  AlertTriangle
  RefreshCw
  Home
  Bug
  Send
  Clipboard


  Clipboard,;

} from 'lucide-react';
import { Button } from '@/components / ui / button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components / ui / card';
import { Badge } from '@/components / ui / badge';
import * as Sentry from '@sentry / nextjs';
import { logErrorToProduction } from '@/utils / production_logger';

      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null,
      retryCount: 0,
      userFeedback: '',

      showDetails: false
    }
  }
  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return {

      hasError: true,

      error
    }
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const errorId = this.generateErrorId()
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const errorId = this.generateErrorId()
    // Enhanced error logging
    const enhancedError = {

      ...error;
      componentStack: errorInfo.componentStack,
      errorBoundary: this.props.context || 'GlobalErrorBoundary',
      timestamp: new Date().toISOString(),
      userAgent: typeof window !== 'undefined' ? navigator.userAgent : 'SSR',
      url: typeof window !== 'undefined' ? window.location.href : 'SSR',
      userId: this.getUserId(),

      buildInfo: this.getBuildInfo()
export class GlobalErrorBoundary extends Component<;
  ErrorBoundaryProps,
  ErrorBoundaryState;
> {
  private retry_timeouts: NodeJS.Timeout[] = [];
  constructor (props: ErrorBoundaryProps) {
    super (props);
export class GlobalErrorBoundary extends Component < ErrorBoundaryProps, ErrorBoundaryState> {
  private retry_timeouts: NodeJS.Timeout[] = [];
  constructor (props: ErrorBoundaryProps) {
    super (props);
    this.state = {
      has_error: false,
      error: null,
      error_info: null,
      error_id: null,
      retry_count: 0,
      user_feedback: '',
      show_details: false,
    } }    , }
      show_details: false;
      }
    } catch (err) {
      logErrorToProduction('Failed to report error:', { data: err })
    }    }
  }
;
export class GlobalErrorBoundary extends Component<ErrorBoundaryProps ErrorBoundaryState> {;
  private retryTimeouts: NodeJS.Timeout[] = [];
  constructor(props: ErrorBoundaryProps) {;
    super(props);
    this.state = {;
      hasError: false,;
      error: null,;
      errorInfo: null,;
      errorId: null,;
      retryCount: 0,;
      userFeedback: '',;
      showDetails: false;
    }
  }
;
  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {;
    return {;
      hasError: true,;
      error;
    }
  }
;
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {;
    const errorId = this.generateErrorId();
    // Enhanced error logging;
    const enhancedError = {;
      ...error,;
      componentStack: errorInfo.componentStack,;
      errorBoundary: this.props.context || 'GlobalErrorBoundary',;
      timestamp: new Date().toISOString(),;
      userAgent: typeof window !== 'undefined' ? navigator.userAgent : 'SSR',;
      url: typeof window !== 'undefined' ? window.location.href : 'SSR',;
      userId: this.getUserId(),;
      buildInfo: this.getBuildInfo();
    }
;
    // Log to console in development;
    if (process.env.NODE_ENV === 'development') {;
      console.group('🚨 Error Boundary Caught Error');
      logErrorToProduction('Error:', { data: error });
      logErrorToProduction('Error Info:', { data: errorInfo });
      logErrorToProduction('Enhanced Error:', { data: enhancedError });
      console.groupEnd();
    }
;
    // Report to Sentry;
    Sentry.withScope((scope) => {;
      scope.setTag('errorBoundary', this.props.context || 'GlobalErrorBoundary');
      scope.setLevel('error');
      scope.setContext('errorInfo', {;
        componentStack: errorInfo.componentStack,;
        retryCount: this.state.retryCount;
      });
      Sentry.captureException(error);
    });
    // Custom error handler;
    if (this.props.onError) {;
      this.props.onError(error, errorInfo);
    this.setState({
      errorInfo,
      errorId,






        return this.props.fallback;


  private getBuildInfo() {;
    return {;
      version: process && process.env.NEXT_PUBLIC_APP_VERSION || 'unknown',;
      environment: process && process.env.NODE_ENV,;
      buildTime: process && process.env.NEXT_PUBLIC_BUILD_TIME || 'unknown',;
    };
  }




            transition={{ duration: 0.3 }}
          >


            <Card className="w-full max-w-2xl border-red-200 bg-white dark:bg-gray-900">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
                  <AlertTriangle className="h-8 w-8 text-red-600 dark:text-red-400" />



                    </p>
                  )}
                <div className='flex flex-col sm:flex-row gap-3 justify-center'>
                  <Button onClick={this.goHome} variant="outline" className="flex items-center gap-2">
                    <Home className="h-4 w-4" />
                    Go Home
                  </Button>
                  <Button
                    onClick={() => this.setState({ showDetails: !this.state.showDetails })}
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-2"
                  >

                        <div className='flex gap-2'>;



                            Copy Details
                          </Button>
                          {this.props.showReportButton !== false && (


                          )}



// Higher - order component for adding error boundaries;
  WrappedComponent.display_name = `withErrorBoundary (${Component.display_name || Component.name})`;
  return WrappedComponent;
}
export default GlobalErrorBoundary;

  }
// Hook for programmatic error boundary
export const useErrorBoundary = () => {
