  AlertTriangle,
  RefreshCw,
  Home,
  ArrowLeft,
  Bug,
  Send} from 'lucide-react';
interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string | null;
  isReporting: boolean;
  reportSent: boolean;
export class EnhancedErrorBoundary extends Component<Props, State> {

  constructor(props: Props) {

    super(props);
    this.state = {

      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null,
      isReporting: false,
      reportSent: false}}
  static getDerivedStateFromError(error: Error): Partial<State> {

    return {

      hasError: true,
      error,
      errorId: `error-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`}}
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {

    this.setState({ errorInfo });
'
    // Log error to console''
    // console.error('Error caught by boundary:', error, errorInfo);

    // Call custom error handler if provided
    if(this.props.onError) {

      this.props.onError(error, errorInfo)}

    // Send error to error reporting service
    this.reportError(error, errorInfo) }
  private async reportError(error: Error, errorInfo: ErrorInfo) {

    try {
      // You can integrate with services like Sentry, LogRocket, etc.
      '
      // Send to your error reporting endpoint'      await fetch('/api/error-report', {
'
''
        method: 'POST',''
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(errorReport)})} catch (reportError) {
'
      // console.error('Failed to report error:', reportError)}  }

  private handleRetry = () => {
    this.setState({

      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null,
      reportSent: false})};

  private handleGoHome = () => {
'
    window.location.href = '/'};

  private handleGoBack = () => {
    window.history.back () };
  private handleReportError = async () => {
    this.setState({ isReporting: true });

    try {
      await this.reportError(this.state.error!, this.state.errorInfo!);
      this.setState({ reportSent: true });

      // Reset report status after 3 seconds
      setTimeout ( () => {
        this.setState ({ reportSent: false }) }, 3000) } catch (error) {
'
      // console.error('Failed to report error:', error)} finally {

      this.setState({ isReporting: false })}  };

  private handleRetry = () => {
    this.setState({

      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null,
      showDetails: false,
      isRecovering: true});

    // Force a re - render of children
    this.forceUpdate () };

  private handleGoHome = () => {
'
    window.location.href = '/'};
  private handleCopyError = async : unknown {

    if (this.state.error) {
`
`
      
      try {
        await navigator.clipboard.writeText(errorText) ;
        // You could show a toast notification here
      } catch (err) {
'
        // console.error('Failed to copy error details:', err)}    }
  };

  private toggleDetails = () => {
    this.setState (prev => ({ showDetails: !prev.showDetails }) ) };
  render() {
    if (this.state.hasError) {

      // Custom fallback UI
      if(this.props.fallback) {

        return this.props.fallback}
      return ()
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4""
        >""
          <div className="max-w-2xl w-full bg-white/5 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 text-center">
            {/* Error Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}'"
              transition={{ delay: 0.2, type: 'spring' }}""
              className="mx-auto w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mb-6""
            >""
              <AlertTriangle className="w-10 h-10 text-red-400"  />            </motion.div>

            {/* Error Message */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}"
              transition={{ delay: 0.3 }}""
              className="text-3xl font-bold text-white mb-4"
            >
              Oops ! Something went wrong
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}"
              transition={{ delay: 0.4 }}""
              className="text-gray-300 mb-6 text-lg"
            >'
              We're sorry, but something unexpected happened. Our team has been
              notified and is working to fix this issue.
            </motion.p>

            {/* Error Details(Collapsible) */}
            <motion.details
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}"
              transition={{ delay: 0.5 }}""
              className="mb-6 text-left""
            >""
              <summary className="cursor-pointer text-cyan-400 hover:text-cyan-300 mb-2">
                Error Details"
              </summary>""
              <div className="bg-black/20 rounded-lg p-4 text-sm text-gray-300 font-mono">""
                <div className="mb-2">'
                  <strong>Error:</strong> {this.state.error?.name}:{' '}
                  {this.state.error?.message}
                </div>"
                {this.state.errorId && (""
                  <div className="mb-2">
                    <strong>Error ID:</strong> {this.state.errorId}
                  </div>"
                )}""
                <div className="text-xs opacity-75">"
                  <strong>Component Stack:</strong>""
                  <pre className="mt-1 overflow-x-auto">
                    {this.state.errorInfo?.componentStack}
                  </pre>
                </div>
              </div>
            </motion.details>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}"
              transition={{ delay: 0.6 }}""
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button"
                onClick={this.handleRetry}""
                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center space-x-2""
              >""
                <RefreshCw className="w-5 h-5"  />                <span>Try Again</span>
              </button>

              <button"
                onClick={this.handleGoBack}""
                className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center space-x-2""
              >""
                <ArrowLeft className="w-5 h-5"  />                <span>Go Back</span>
              </button>

              <button"
                onClick={this.handleGoHome}""
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center space-x-2""
              >""
                <Home className="w-5 h-5"  />                <span>Go Home</span>
              </button>
            </motion.div>

            {/* Error Reporting */}
            {this.props.showReportButton && (<motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}"
                transition={{ delay: 0.7 }}""
                className="mt-6 pt-6 border-t border-gray-600""
              >""
                <p className="text-gray-400 mb-4">
                  Help us improve by reporting this error
                </p>

                {!this.state.reportSent ? (
                  <button
                    onClick={this.handleReportError}"
                    disabled={this.state.isReporting}""
                    className="px-6 py-3 bg-green-600 hover:bg-green-700 disabled:bg-green-800 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center space-x-2 mx-auto disabled:opacity-50"
                  >
                    {this.state.isReporting ? ("
                      <>""
                        <RefreshCw className="w-5 h-5 animate-spin"  />
                        <span>Reporting...</span>
                      </>
                    ) : ("
                      <>""
                        <Bug className="w-5 h-5"  />                        <span>Report Error</span>
                      </>
                    )}
                  </button>"
                ) : (""
                  <div className="flex items-center justify-center space-x-2 text-green-400">""
                    <Send className="w-5 h-5"  />                    <span>Error reported successfully!</span>
                  </div>
                )}
              </motion.div>
            )}

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}"
              transition={{ delay: 0.8 }}""
              className="mt-6 pt-6 border-t border-gray-600""
            >""
              <p className="text-gray-400 text-sm">'
                If this problem persists, please contact our support team at{' '}"
                <a""
                  href="mailto:support@ziontechgroup.com""
                  className="text-cyan-400 hover:text-cyan-300 underline"
                >
                  support@ziontechgroup.com
                </a>
              </p>
            </motion.div>
          </div>
        </motion.div>) }
    return this.props.children}
}'"`
'"`'"`