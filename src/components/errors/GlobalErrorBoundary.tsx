

      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null,
      retryCount: 0,
      userFeedback: '',


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
  }
  componentDidCatch (error: Error, error_info: ErrorInfo) {
    const error_id = this.generateErrorId ();
  }
  componentDidCatch (error: Error, error_info: ErrorInfo) {
    const error_id = this.generateErrorId ();
    // Enhanced error logging;
    const enhanced_error = {
      ...error,
    // Enhanced error logging;
    const enhanced_error = {
      ...error,      component_stack: error_info.component_stack,      ...error;
      component_stack: error_info.component_stack,
      error_boundary: this.props.context || 'GlobalErrorBoundary',
      timestamp: new Date ().toISOString (),
      user_agent: typeof window !== 'undefined' ? navigator.user_agent : 'SSR',
      url: typeof window !== 'undefined' ? window.location.href : 'SSR',
      user_id: this.getUserId (),
      build_info: this.getBuildInfo (),
    }
    // Log to console in development;
    // Check condition
if ( {) {
  $2
}
      console.group ('🚨 Error Boundary Caught Error');
      logErrorToProduction ('Error:', { data: error });
      logErrorToProduction ('Error Info:', { data: error_info });
      logErrorToProduction ('Enhanced Error:', { data: enhanced_error });
      console.group_end ();
    }
    })
;
  componentWillUnmount() {;
    // Clear any pending retry timeouts;
    this.retryTimeouts.forEach(timeout => clearTimeout(timeout));
  }
;
  private generateErrorId():string {;
    return `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
;
  private getUserId():string | null {;
    // Try to get user ID from various sources;
    if (typeof window !== 'undefined') {;
      try {;
        // Check localStorage, sessionStorage, or cookies;
        return localStorage.getItem('userId') || ;
               sessionStorage.getItem('userId') || ;
               null;
      } catch {;
        return null;
      }    }
    return null;
  }
  }
    }
    this.setState({
      errorInfo
      errorId
    }) }
  componentWillUnmount() {
    // Clear any pending retry timeouts
      errorInfo
      errorId
    })
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.group('🚨 Error Boundary Caught Error')
      logErrorToProduction('Error:', { data: error })
      logErrorToProduction('Error Info:', { data: errorInfo })
      logErrorToProduction('Enhanced Error:', { data: enhancedError })
      console.groupEnd()
    }
    // Report to Sentry
    Sentry.withScope((scope) => {
      scope.setTag('errorBoundary', this.props.context |'GlobalErrorBoundary')
      scope.setLevel('error')
      scope.setContext('errorInfo', {
        componentStack: errorInfo.componentStack
        retryCount: this.state.retryCount
      })
      Sentry.captureException(error)
    })
    // Custom error handler
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }
    this.setState({
      errorInfo
      errorId
    })
  }
  componentWillUnmount() {
    // Clear any pending retry timeouts

  private goHome = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/'
    }
  }


  render() {
    if (this.state.hasError && this.state.error) {
      // Use custom fallback if provided
      if (this.props.fallback) {


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

            transition={{ duration: 0.3 }}
          >


            <Card className="w-full max-w-2xl border-red-200 bg-white dark:bg-gray-900">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
                  <AlertTriangle className="h-8 w-8 text-red-600 dark:text-red-400" />



                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  Oops! Something went wrong
                </CardTitle>

                      ID: {this.state.errorId.slice(-8)}
                    </Badge>
                  )}
                </div>
              </CardHeader>


              <CardContent className="space-y-6">
                <div className="text-center">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {suggestion}
                  </p>


                  
                  {this.state.retryCount > 0 && (
                    <p className="text-sm text-orange-600 dark:text-orange-400">
                      Retry attempt: {this.state.retryCount}/{this.props.maxRetries || 3}

                    </p>;
                  )}
                </div>
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  )}
                </div>
                {/* Action Buttons */}
                <div className='flex flex-col sm:flex-row gap-3 justify-center'>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">

                  {canRetry && (
                    <Button onClick={this.retry} className="flex items-center gap-2">
                      <RefreshCw className="h-4 w-4" />
                      Try Again
                    </Button>
                  )}


                      Retry attempt: {this.state.retryCount}/{this.props.maxRetries || 3}
                    </p>;
                </div>
                {/* Action Buttons */}

                <div className="flex flex-col sm:flex-row gap-3 justify-center">

                  {canRetry && (
                      <RefreshCw className="h-4 w-4" />
                      Try Again
                    </Button>
                  )}

                    <Bug className="h-4 w-4" />
                    {this.state.showDetails ? 'Hide' : 'Show'} Details
                  </Button>
                </div>


                          <h4 className="font-semibold text-sm mb-2">Error Message:</h4>
                          <code className="block p-3 bg-red-50 dark:bg-red-900/10 rounded text-sm text-red-800 dark:text-red-200 overflow-auto">
                            {this.state.error.message}
                          </code>
                        </div>

                        {process.env.NODE_ENV === 'development' &&
                          this.state.error.stack && (
                            <div>
                              <h4 className='font-semibold text-sm mb-2'>
                                Stack Trace:
                              </h4>
                              <pre className='p-3 bg-gray-50 dark:bg-gray-800 rounded text-xs overflow-auto max-h-32'>
                                {this.state.error.stack}
                              </pre>
                            </div>
                          )}

                        <div className='flex gap-2'>
                          <Button
                            onClick={this.copyErrorDetails}
                            variant='outline'
                            size='sm'
                          >
                            <Clipboard className='h-4 w-4 mr-2' />
                        <div className='flex gap-2'>;
                          <Button
                            onClick={this && this.copyErrorDetails}
                            variant='outline'
                            size='sm'>;
                            <Clipboard className='h-4 w-4 mr-2' />;
                            Copy Details;
                          </Button>;
                          {this && this.props.showReportButton !== false && (;
                            <Button
                              onClick={this && this.reportError}
                              variant='outline'


                        {process.env.NODE_ENV === 'development' && this.state.error.stack && (
                          <div>
                            <h4 className="font-semibold text-sm mb-2">Stack Trace:</h4>
                            <pre className="p-3 bg-gray-50 dark:bg-gray-800 rounded text-xs overflow-auto max-h-32">
                              {this.state.error.stack}


                            <Button onClick={this.reportError} variant="outline" size="sm">
                              <Send className="h-4 w-4 mr-2" />
                              Report Issue
                            </Button>


