
  maxRetries?: number;

  showReportButton?: boolean;
  context?: string;  enable_retry?: boolean;
  max_retries?: number;
  showReportButton?: boolean;
  context?: string;
}

export class GlobalErrorBoundary extends Component<
  ErrorBoundaryProps
  ErrorBoundaryState
> {
  private retryTimeouts: NodeJS.Timeout[] = []
  constructor(props: ErrorBoundaryProps) {
    super(props)
export class GlobalErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  private retryTimeouts: NodeJS.Timeout[] = []
  constructor(props: ErrorBoundaryProps) {
    super(props)

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
  }
  static getDerivedStateFromError (error: Error): Partial < ErrorBoundaryState> {
    return {
      has_error: true,
      error,
    }
    // Report to Sentry
    Sentry.withScope(scope => {
      scope.setTag(

      scope.setLevel('error');      scope.setContext('errorInfo', {
        componentStack: errorInfo.componentStack
        retryCount: this.state.retryCount
      })
      Sentry.captureException(error)
    })
    // Custom error handler
    if (this.props.onError) {
      this.props.onError(error, errorInfo)

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

    }



=======

        return this.props.fallback;


  private getBuildInfo() {;
    return {;
      version: process && process.env.NEXT_PUBLIC_APP_VERSION || 'unknown',;
      environment: process && process.env.NODE_ENV,;
      buildTime: process && process.env.NEXT_PUBLIC_BUILD_TIME || 'unknown',;
    };
  }




>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      }

      const severity = this.getErrorSeverity(this.state.error)
      const suggestion = this.getErrorSuggestion(this.state.error)

      const canRetry = this.props.enableRetry !== false &&
                       this.state.retryCount < (this.props.maxRetries || 3)

      return (

        <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >

                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  Oops! Something went wrong
                </CardTitle>

                    </p>

                  )}
                </div>
                {/* Action Buttons */}

                  {canRetry && (
                    <Button onClick={this.retry} className="flex items-center gap-2">
                      <RefreshCw className="h-4 w-4" />
                      Try Again
                    </Button>
                  )}

                  <Button
                    onClick={() =>
                      this.setState({ showDetails: !this.state.showDetails })
                    }
                    variant='ghost'
                    size='sm'
                    className='flex items-center gap-2'
                  >
                    <Bug className='h-4 w-4' />                    {this.state.showDetails ? 'Hide' : 'Show'} Details                  {canRetry && (
                    <Button onClick={this.retry} className="flex items-center gap-2">
                      <RefreshCw className="h-4 w-4" />
                      Try Again
                    </Button>
                  )}
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

                    <Bug className="h-4 w-4" />
                    {this.state.showDetails ? 'Hide' : 'Show'} Details
                  </Button>
                </div>

                {/* Error Details */}
                <AnimatePresence>;
                  {this && this.state.showDetails && (;
                    <motion&& motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}

                    >
                      <div className="space-y-4">
                        <div>

                          <h4 className="font-semibold text-sm mb-2">Error Message:</h4>
                          <code className="block p-3 bg-red-50 dark:bg-red-900/10 rounded text-sm text-red-800 dark:text-red-200 overflow-auto">
                            {this.state.error.message}
                          </code>
                        </div>

                        {process.env.NODE_ENV === 'development' &&
  private go_home = () => {
    // Check condition
if ( {) {
  $2
}
      window.location.href = '/';
    }
  }
  private go_home = () => {
    // Check condition
if ( {) {
  $2
}
      window.location.href = '/';
    }
  } }
  render () {
    // Check condition
if ( {) {
  $2
}
      // Use custom fallback if provided;
      // Check condition
if ( {) {
  $2
}
        return this.props.fallback;
      }
      const severity = this.getErrorSeverity (this.state.error);
      const suggestion = this.getErrorSuggestion (this.state.error);
      const can_retry =;
        this.props.enable_retry !== false &&;
        this.state.retry_count < (this.props.max_retries || 3);
      return (
        <div className='min - h-screen flex items - center justify - center p - 4 bg - gradient - to - br from - red - 50 to - orange - 50 dark:from - red - 950 / 20 dark:to - orange - 950 / 20'>          <motion.div      }
      const severity = this.getErrorSeverity (this.state.error);
      const suggestion = this.getErrorSuggestion (this.state.error);
      const can_retry = this.props.enable_retry !== false &&;
                      this.state.retry_count < (this.props.max_retries || 3);
      return (
        <div className="min - h-screen flex items - center justify - center p - 4 bg - gradient - to - br from - red - 50 to - orange - 50 dark:from - red - 950 / 20 dark:to - orange - 950 / 20">;
          <motion.div;
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >;
            <Card className='w - full max - w-2xl border - red - 200 bg - white dark:bg - gray - 900'>;
              <CardHeader className='text - center'>;
                <div className='mx - auto mb - 4 flex h - 16 w - 16 items - center justify - center rounded - full bg - red - 100 dark:bg - red - 900 / 20'>;
                  <AlertTriangle className='h - 8 w - 8 text - red - 600 dark:text - red - 400' />;
                </div>;
                <CardTitle className='text - 2xl font - bold text - gray - 900 dark:text - gray - 100'>;
                  Oops! Something went wrong;
                </CardTitle>;
                <div className='flex items - center justify - center gap - 2 mt - 2'>;
                  <Badge;
                    variant={
                      severity === 'critical';
                        ? 'destructive';
                        : severity === 'high';
                          ? 'destructive';
                          : 'secondary';
                    }                  >;
                    {severity.toUpperCase ()}
                  </Badge>;
                  {this.state.error_id && (
                    <Badge variant='outline' className='text - xs'>                      ID: {this.state.error_id.slice (-8)}                    variant = {severity === 'critical' ? 'destructive' : severity === 'high' ? 'destructive' : 'secondary', }
                </div>;
                <CardTitle className="text - 2xl font - bold text - gray - 900 dark:text - gray - 100">;
                  Oops! Something went wrong;
                </CardTitle>;
                <div className="flex items - center justify - center gap - 2 mt - 2">;
                  <Badge;
                    variant={severity === 'critical' ? 'destructive' : severity === 'high' ? 'destructive' : 'secondary'}
                  >;
                    {severity.toUpperCase ()}
                  </Badge>;
                  {this.state.error_id && (
                    <Badge variant='outline' className='text - xs'>                    <Badge variant="outline" className="text - xs">;
                      ID: {this.state.error_id.slice (-8)}
                    </Badge>)}
                </div>;
              </CardHeader>;
              <CardContent className='space - y-6'>;
                <div className='text - center'>;
                  <p className='text - gray - 600 dark:text - gray - 300 mb - 4'>;
                    {suggestion}
                  </p>;
                  {this.state.retry_count > 0 && (
                    <p className='text - sm text - orange - 600 dark:text - orange - 400'>;
                      Retry attempt: {this.state.retry_count}/;
                      {this.props.max_retries || 3}                    </p>                    {suggestion}
                  </p>;
                  {this.state.retry_count > 0 && (
                    <p className="text - sm text - orange - 600 dark:text - orange - 400">;
                      Retry attempt: {this.state.retry_count}/{this.props.max_retries || 3}
                    </p>)}
                </div>;
                {/* Action Buttons */}
                <div className='flex flex - col sm:flex - row gap - 3 justify - center'>;
                  {can_retry && (
                    <Button;
                      on_click={this.retry}
                      className='flex items - center gap - 2';
                    >;
                      <RefreshCw className='h - 4 w - 4' />;
                      Try Again;
                    </Button>)}
                  <Button;
                    on_click={this.go_home}
                    variant='outline';
                    className='flex items - center gap - 2';
                  >;
                    <Home className='h - 4 w - 4' />;
                    Go Home;
                  </Button>;
                  <Button;
                    on_click={() =>;
                      this.set_state ({ show_details: !this.state.show_details });
                    }
                    variant='ghost';
                    size='sm';
                    className='flex items - center gap - 2';
                  >;
                    <Bug className='h - 4 w - 4' />                    {this.state.show_details ? 'Hide' : 'Show'} Details                  {can_retry && (
                    <Button on_click={this.retry} className="flex items - center gap - 2">;
                      <RefreshCw className="h - 4 w - 4" />;
                      Try Again;
                    </Button>)}
                  <Button on_click={this.go_home} variant="outline" className="flex items - center gap - 2">;
                    <Home className="h - 4 w - 4" />;
                    Go Home;
                  </Button>;
                  <Button;
                    on_click={() => this.set_state ({ show_details: !this.state.show_details })}
                    variant="ghost";
                    size="sm";
                    className="flex items - center gap - 2";
                  >;
                    <Bug className="h - 4 w - 4" />;
                    {this.state.show_details ? 'Hide' : 'Show'} Details;
                  </Button>;
                </div>;
                {/* Error Details */}
                <AnimatePresence>;
                  {this.state.show_details && (
                    <motion.div;
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className='border - t pt - 4';
                    >;
                      <div className='space - y-4'>;
                        <div>;
                          <h4 className='font - semibold text - sm mb - 2'>;
                            Error Message:;
                          </h4>;
                          <code className='block p - 3 bg - red - 50 dark:bg - red - 900 / 10 rounded text - sm text - red - 800 dark:text - red - 200 overflow - auto'>                            {this.state.error.message}
                          </code>;
                        </div>;
                    >;
                      <div className="space - y-4">;
                        <div>;
                          <h4 className="font - semibold text - sm mb - 2">Error Message:</h4>;
                          <code className="block p - 3 bg - red - 50 dark:bg - red - 900 / 10 rounded text - sm text - red - 800 dark:text - red - 200 overflow - auto">;
                            {this.state.error.message}
                          </code>;
                        </div>;
                        {process.env.NODE_ENV === 'development' &&;
                          this.state.error.stack && (
                            <div>;
                              <h4 className='font - semibold text - sm mb - 2'>;
                                Stack Trace:;
                              </h4>;
                              <pre className='p - 3 bg - gray - 50 dark:bg - gray - 800 rounded text - xs overflow - auto max - h-32'>;
                                {this.state.error.stack}


                      className='border-t pt-4'>;
                      <div className='space-y-4'>;
                        <div>;
                          <h4 className='font-semibold text-sm mb-2'>;
                            Error Message:;
                          </h4>;
                          <code className='block p-3 bg-red-50 dark:bg-red-900/10 rounded text-sm text-red-800 dark:text-red-200 overflow-auto'>                            {this && this.state.error && error.message}
                          </code>;
                        </div>;
                    >;
                      <div className="space-y-4">;
                        <div>;
                          <h4 className="font-semibold text-sm mb-2">Error Message:</h4>;
                          <code className="block p-3 bg-red-50 dark:bg-red-900/10 rounded text-sm text-red-800 dark:text-red-200 overflow-auto">;
                            {this && this.state.error && error.message}
                          </code>;
                        </div>;

                        {process && process.env.NODE_ENV === 'development' &&;
                          this && this.state.error && error.stack && (;
                            <div>;
                              <h4 className='font-semibold text-sm mb-2'>;
                                Stack Trace:;
                              </h4>;
                              <pre className='p-3 bg-gray-50 dark:bg-gray-800 rounded text-xs overflow-auto max-h-32'>;
                                {this && this.state.error && error.stack}
                              </pre>;
                            </div>;
                          )}

                        <div className='flex gap-2'>
                          <Button
                            onClick={this && this.copyErrorDetails}
                            variant='outline'
                            size='sm'
                          >
                            <Clipboard className='h-4 w-4 mr-2' />

                            Copy Details
                          </Button>
                          {this.props.showReportButton !== false && (

                            <Button onClick={this.reportError} variant="outline" size="sm">
                              <Send className="h-4 w-4 mr-2" />
                              Report Issue
                            </Button>
                              size='sm'>;
                              <Send className='h-4 w-4 mr-2' />                              Report Issue;
                        <div className="flex gap-2">;
                          <Button onClick={this && this.copyErrorDetails} variant="outline" size="sm">;
                            <Clipboard className="h-4 w-4 mr-2" />;
                            Copy Details;
                          </Button>;

                          {this && this.props.showReportButton !== false && (;
                            <Button onClick={this && this.reportError} variant="outline" size="sm">;
                              <Send className="h-4 w-4 mr-2" />;
                              Report Issue;
                            </Button>;


                          )}
                        </div>;
                      </div>;
                    </motion && motion.div>;
                  )}
<<<<<<< HEAD
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        </div>

  }
// Hook for programmatic error boundary
export const useErrorBoundary = () => {
<<<<<<< HEAD

  const [error, setError] = React.useState<Error | null>(null)
  React.useEffect((,) => {
    if (error) {
      throw error
    }
  }, [error])
  const captureError = React.useCallback((error: Error) => {
    setError(error)
  }, [])
  return { captureError }
}
}
// Higher-order component for adding error boundaries
export const withErrorBoundary = <P extends object>(
  Component: React.ComponentType<P>

  errorBoundaryProps?: Omit<ErrorBoundaryProps, 'children'>
,) => {
  const WrappedComponent = (props: P,) => (
    <GlobalErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </GlobalErrorBoundary>
  )
  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName |Component.name})`
  return WrappedComponent
}
export default GlobalErrorBoundary
  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName |Component.name})`
  return WrappedComponent
}
export default GlobalErrorBoundary
=======
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
