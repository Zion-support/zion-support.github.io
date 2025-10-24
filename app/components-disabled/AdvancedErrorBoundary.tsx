import { Component, ReactNode, ErrorInfo} from 'react'
import { AlertTriangle, Home, RefreshCw} from 'lucide-react'

interface AdvancedErrorBoundaryProps {

  children: ReactNode
  className?: string
  onError?: (_error: Error, _errorInfo: ErrorInfo) => void;
}
interface State {

  hasError: boolean
  error?: Error
  errorInfo?: ErrorInfo
  errorId?: string}
class AdvancedErrorBoundary extends Component<AdvancedErrorBoundaryProps, State> {
  constructor(props: AdvancedErrorBoundaryProps) {
    super(props)
    this.state = {
  hasError: false}
  }

  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error Boundary caught an error:', error, errorInfo)
    }
  }

  componentDidCatch(_error: Error, _errorInfo: ErrorInfo) {
    this.setState({
      hasError: true,
      error: _error,
      errorInfo: _errorInfo})
    
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(_error, _errorInfo)
    }
    
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', _error, _errorInfo)
    }
    
    // Log error to external service in production
    if (process.env.NODE_ENV === 'production') {
      this.logErrorToService(_error, _errorInfo)
    }
  }

  logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    // You can integrate with services like Sentry, LogRocket, etc.
    const errorData = {
      errorId: this.state.errorId,
      error: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString()
    };
    
    // Send to external service (implement as needed)
    console.error('Error logged to service:', errorData)
  }

  generateErrorId = (): string => {
    return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined})
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={`min-h-screen flex items-center justify-center bg-gray-50 ${this.props.className || ''}`}>
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 text-center">
            <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h1>
            <p className="text-gray-600 mb-6">
              We&apos;re sorry, but something unexpected happened. Please try again.
            </p>
            <div className="space-y-3">
              <button
                onClick={this.handleRetry}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 flex items-center justify-center"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Try Again
              </button>
              <button 
                onClick={() => window.location.href = "/"}
                className="w-full bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 flex items-center justify-center"
              >
                <Home className="h-4 w-4 mr-2" />
                Go Home
              </button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children;
  }
}

export default AdvancedErrorBoundary;