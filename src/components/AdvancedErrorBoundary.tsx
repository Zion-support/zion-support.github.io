export default AdvancedErrorBoundary
      hasError: boolean
  error: Error | null
  errorInfo: ErrorInfo | null
  errorId: string | null
  children: ReactNode
  fallback?: ReactNode
 void
  enableErrorReporting?: boolean
  enableRetry?: boolean
  errorId: string | null
  error: Error
  errorInfo: ErrorInfo
  message: string
  stack: string | undefined
  componentStack: string | null | undefined
  timestamp: string
  userAgent: string
  url: string
  userId: string | null
  sessionId: string
class AdvancedErrorBoundary extends Component
  private retryCount = 0
  private maxRetries = 3
    super(props)
      errorId: null
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      errorInfo
        errorInfo
      this.props.onError(error, errorInfo)
      this.reportError(error, errorInfo)
      sessionId: this.getSessionId()
    this.sendErrorReport(errorReport)
      return localStorage.getItem