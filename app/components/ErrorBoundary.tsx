'use client'
import React, { Component, ErrorInfo, ReactNode } from 'react'
import { AlertTriangle, RefreshCw, Home, Phone } from 'lucide-react'
interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
  errorInfo?: ErrorInfo
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error for monitoring in production
    if (process.env.NODE_ENV === 'production') {
      // In production, you would send this to an error reporting service
      // Example: errorReportingService.captureException(error, { extra: errorInfo })
    }
    this.setState({ error, errorInfo })
  }

  handleReload = () => {
    window.location.reload()
  }
  handleGoHome = () => {
    window.location.href = '/'
  }
  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div> </div><div> </div><div> </div><AlertTriangle> </AlertTriangle></div>
            
            <h1>Oops! Something went wrong
            </h1></h1>
            
            <p>We're sorry, but something unexpected happened. Please try refreshing the page or go back to the home page.
            </p></p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details> </details><summary>Error Details (Development)
                </summary></summary>
                <pre>{this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre></pre>
              </details>
            )}

            <div> </div><button> </button><RefreshCw> </RefreshCw><span>Reload Page</span>
              </button>
              
              <button> </button><Home> </Home><span>Go Home</span>
              </button>
            </div>

            <div> </div><p>Still having trouble? Contact our support team:
              </p></p>
              <a> </a><Phone>kleber@ziontechgroup.com
              </Phone></a>
            </div>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary