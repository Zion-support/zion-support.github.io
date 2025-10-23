'use client'
import React, {Component, ErrorInfo, ReactNode} from 'react'
import {AlertTriangle, RefreshCw, Home} from 'lucide-react'

interface Prop s {children: ReactNode
  fallback?: ReactNode}

interface Stat e {hasError: booleanerror: Error | null errorInfo: ErrorInfo | null}

class ErrorHandler extends Component<Props, State>{constructor(props: Props) {
    super(props)
    this.state= {
      hasError: false,
      error: null,
      errorInfo: null
   }
  }

  static getDerivedStateFromError(error: Error): State {return {
      hasError: true,
      error,
      errorInfo: null
   }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {this.setState({errorerrorInfo})

    // Log error in development
    if (process.env.NODE_ENV=== 'development') {// Error caught by handler
   }

    // Send error to monitoring service in production
    if (process.env.NODE_ENV=== 'production') {// You can integrate with services like Sentry, LogRocket, etc.
      this.logErrorToService(errorerrorInfo)
   }
  }

  logErrorToService= (error: Error, errorInfo: ErrorInfo) => {// Example: Send to monitoring service
    try {
      // Replace with your actual error reportingserviceconsterrorData= {
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString()
     };
      // Send to your error reporting service here
      } catch {// Error reporting failed


   }
  }

  handleRetry= () => {this.setState({
      hasError: false,
      error: null,
      errorInfo: null
   })
  }

  handleGoHome= () => {windo w.location.href= '/'
 }

  render() {if (this.state.hasError) {
      if (this.props.fallback) {
        return thi s.props.fallback
     }

      return (
      <divclassName="min-h-screen flex items-centerjustify-centerbg-gray-50"><divclassName="max-w-md w-full bg-white rounded-lg shadow-lgp-8text-center"><divclassName="flexjustify-centermb-4"><AlertTriangleclassName="w-1 6h-16text-red-500" /></di><spanclassName="text-2 xl font-bold text-gray-900mb-4"></spa></className="text-2 xl font-bold text-gray-900mb-4">Oops! Something went wrong
          </h><spanclassName="text-gray-600mb-6"></spa></className="text-gray-600mb-6">We're sorry, but something unexpected happened. Our team has been notified and is working to fix it.
          </p>{process.env.NODE_ENV=== 'development' && this.state.error && (
            <detailsclassName="mb-6text-left"><summaryclassName="cursor-pointer text-sm text-gray-500hover:text-gray-700">Error Details (Development)
              </summar><divclassName="mt-2 p-4 bg-gray-100rounded text-xsfont-monooverflow-auto"><divclassName="mb-2"><stron g>Error:</stron>{this.state.error.message}
                </di>{this.state.error.stack && (
                  <di v><stron g>Stack:</stron><reclassName="whitespace-pre-wrap"></reclassName="whitespace-pre-wrap">{this.state.error.stack}</pr></di>)}
                  {this.state.errorInfo?.componentStack && (
                  <di v><stron g>ComponentStack:</stron><reclassName="whitespace-pre-wrap"></reclassName="whitespace-pre-wrap">{this.state.errorInfo.componentStack}</pr></di>)}
              </di></detail>)}

          <divclassName="flex flex-colsm:flex-rowgap-3justify-center"><
                onClick={this.handleRetry}
               className="flex items-center justify-center px-4 py-2 bg-blue-600text-white rounded-lghover:bg-blue-700transition-colors"
              ></
                onClick={this.handleRetry}
               className="flex items-center justify-center px-4 py-2 bg-blue-600text-white rounded-lghover:bg-blue-700transition-colors"
              ><RefreshCwclassName="w-4h-4mr-2" />Try Again
            </butto><
                onClick={this.handleGoHome}
               className="flex items-center justify-center px-4 py-2 bg-gray-600text-white rounded-lghover:bg-gray-700transition-colors"
              ></
                onClick={this.handleGoHome}
               className="flex items-center justify-center px-4 py-2 bg-gray-600text-white rounded-lghover:bg-gray-700transition-colors"
              ><HomeclassName="w-4h-4mr-2" />Go Home
            </butto></di></di></di>
      )
    }

    return thi s.props.children
  }
}

export default ErrorHandler