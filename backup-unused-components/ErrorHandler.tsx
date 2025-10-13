import React, { Component, ErrorInfo, ReactNode } from 'react'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'

class ErrorHandler extends Component<Props, State> 
  constructor(props: Props) 
    super(props)
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') 

    // Send error to monitoring service in production
    if (process.env.NODE_ENV === 'production') 
      // You can integrate with services like Sentry, LogRocket, etc.
      this.logErrorToService(error, errorInfo)


  logErrorToService = (error: Error, errorInfo: ErrorInfo) => 
    // Example: Send to monitoring service
    try 
      // Replace with your actual error reporting service
        timestamp: new Date().toISOString()
;
      // Send to your error reporting service here
 catch (reportingError) 



  handleGoHome = () => 
    window.location.href = '/'

  render() 
    if (this.state.hasError) 
      if (this.props.fallback) 
        return this.props.fallback

      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50"></div>
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center"></div>
            <div className="flex justify-center mb-4"></div>
              <AlertTriangle className="w-16 h-16 text-red-500" />
                onClick={this.handleRetry}
                className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//               >
                <RefreshCw className="w-4 h-4 mr-2" />
                onClick={this.handleGoHome}
                className="flex items-center justify-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
//               >
                <Home className="w-4 h-4 mr-2" />

    return this.props.children


export default ErrorHandler