export default EnhancedErrorBoundary
  children: ReactNode
  fallback?: ReactNode
 void
  enableErrorReporting?: boolean
  maxRetries?: number
  hasError: boolean
  error?: Error
  errorInfo?: ErrorInfo
  errorId?: string
  retryCount: number
  private maxRetries: number
    super(props)
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      this.maxRetries = props.maxRetries || 3
      retryCount: 0
      errorInfo
      console.error