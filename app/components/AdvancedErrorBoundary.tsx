

      interface Props {},
      children: ReactNode,
      fallback?: ReactNode,
      onError?: (error: Error, errorInfo: ErrorInfo) => void
interface State {},
      hasError: boolean,
      error?: Error,
      errorInfo?: ErrorInfo,
      errorId?: string
class AdvancedErrorBoundary extends Component<Props, State> {},
      constructor(props: Props) {},
      super(props),
      this.state = { hasError: false }
  static getDerivedStateFromError(error: Error): State {},
      return {},
      hasError: true,
      error,
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {},
      this.setState({},)
      error,
    // Call the onError callback if provided
if ($1) {}
  // If body
interface Props {
  children: ReactNode
  fallback?: ReactNode,
  onError?: (error: Error, errorInfo: ErrorInfo) => void,
interface State {
  hasError: boolean
error?: Error
errorInfo?: ErrorInfo,
class AdvancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {,
    super(props),

  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }


  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (this.props.onError) {
      this.props.onError(error, errorInfo)

    // Log error to console in development
    // In production, you might want to send this to an error reporting service
    // Example: errorReportingService.captureException(error, {
    extra: errorInfo 
  
  })
  handleRetry = () => {},
      this.setState({
    hasError: false, error: undefined, errorInfo: undefined 
  
  })
  handleReload = () => {},
      window.location.reload()
    },"
    {}"
  handleGoHome = () => {},"
      window.location.href = '
            {process.env.NODE_ENV === 'development'