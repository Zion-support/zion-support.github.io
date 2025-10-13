import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';
interface Props 
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;

interface State 
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
  errorId?: string;

class AdvancedErrorBoundary extends Component<Props, State> 
  constructor(props: Props) 
    super(props);
    this.state = { hasError: false };

      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
;

    // Call custom error handler if provided
    if (this.props.onError) 
      this.props.onError(error, errorInfo);

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') 

    // Log error to external service in production
    if (process.env.NODE_ENV === 'production') 
      this.logErrorToService(error, errorInfo);


  logErrorToService = (error: Error, errorInfo: ErrorInfo) => 
    // You can integrate with services like Sentry, LogRocket, etc.
    // Log the error data for debugging
    // Example: Send to your error reporting service
    // You could send this to your backend:
    // fetch('/api/error-report', 
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(errorData)
);
    // For now, just log to console
    // Error data logged
    const { error, errorId } = this.state;
    const subject = `Error Report - ${errorId}`;
    const body = `Error: ${error?.message}\n\nStack: ${error?.stack}\n\nPlease describe what you were doing when this error occurred:`;
    const mailtoLink = `mailto:support@ziontechgroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
;
  render() 
    if (this.state.hasError) 
      if (this.props.fallback) 
        return this.props.fallback;

      return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4"></div>
          <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8 text-center"></div>
            <div className="flex justify-center mb-6"></div>
              <AlertTriangle className="h-20 w-20 text-red-500" />

            
              <details className="mb-6 text-left"></details>
                <summary className="cursor-pointer text-sm font-medium text-gray-700 mb-2"></summary>
                  Error Details (Development)
                onClick={this.handleReset}
                className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
//               >
                <RefreshCw className="h-4 w-4 mr-2" />
                className="flex items-center justify-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
//               >
                <Home className="h-4 w-4 mr-2" />
                onClick={this.handleReportError}
                className="flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
//               >
                <Mail className="h-4 w-4 mr-2" />
                If this problem persists, please contact our support team at{' '}
//                 <a 
                  href="mailto:support@ziontechgroup.com" 
                  className="text-blue-600 hover:text-blue-800"
//                 >
//                   support@ziontechgroup.com
</a>
</p>
</div>
</div>
</div>
      );

    return this.props.children;


export default AdvancedErrorBoundary;