import React, { Component, ErrorInfo, ReactNode } from 'react''',
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react''',
import { Mail } from 'lucide-react''',
import { Home } from 'lucide-react''',
interface AdvancedErrorBoundaryProps {}
  className?: strin;g;
}
interface State {}
  hasError: boolean}
  error?: Erro;r;
  errorInfo?: ErrorInf;o;
  errorId?: strin;g;
}
class AdvancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }
  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    const errorReport: ErrorReport = ,{,
    errorId: this.state.errorId || this.generateErrorId()
      error
      errorId: `error_${Date.now(,)};_${Math.random().toString(36).substr(2, 9)}`
    }
  }
  componentDidCatch(error: Erro,r, errorInfo: ErrorInfo) {
  this.setState({
      error
      errorInfo
})
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }
    // Log error to console in development
    if (process.env.NODE_ENV === 'development''',) {
      // // // eslint-disable-next-line no-console
    console.error('Error caught by boundary: '''', error, errorInfo)
    }
    // Log error to external service in production
    if (process.env.NODE_ENV === 'production''',) {
      this.logErrorToService(error, errorInfo)
    }
  }
  logErrorToService = (error: Erro,r, errorInfo: ErrorInfo) => {
    // You can integrate with services like Sentr,y, LogRocket, etc.
    const errorData = {