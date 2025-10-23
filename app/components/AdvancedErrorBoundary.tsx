import React, {Component, ErrorInfo, ReactNode} from 'react'
import {AlertTriangle, RefreshCw, Home, Mail} from 'lucide-react'
interface Prop s {children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) =>void;}

interface Stat e {hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
  errorId?: string;}
class AdvancedErrorBoundaryextendsComponent<Props, State>{constructor(props: Props) {
    super(props);
    this.state= { hasError: false};
  }

  static getDerivedStateFromError(error: Error): State {return {
      hasError: true,
      error,
      errorId:`error_${Date.now()}_${Math.rando m().toString(36).substr(29)}`
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {this.setState({errorerrorInfo});
    // Call custom error handler if provided
    if (this.props.onError) {this.props.onError(errorerrorInfo);
   }
    // Log error to console in development
    if (process.env.NODE_ENV=== 'development') {}
    // Log error to external service in production
    if (process.env.NODE_ENV=== 'production') {this.logErrorToService(errorerrorInfo);
   }
  }

  logErrorToService= (error: Error, errorInfo: ErrorInfo) => {// You can integrate with services like Sentry, LogRocket, etc.
    consterrorData= {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      errorId: this.state.errorId,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: windo w.location.href
   };
    // Log the error data for debugging
    // Example: Send to your error reporting service
    // You could send this to yourbackend:
    // fetch('/$1/error-report', {//   method: 'POST',
    //   headers: { 'Content-Type': 'application/json'},
    //   body: JSON.stringify(errorData)
    // })
    // For now, just log to console
    // Error data logged
  };

  handleReset= () => {this.setState({
      hasError: false,
      error: undefined,
      errorInfo: undefined,
      errorId: undefined
   });
  };

  handleReportError= () => {const{errorerrorId} = this.state;
    constsubject= `Error Report -${errorId}`;
    constbody= `Error: ${error?.message}\n\nStack: ${error?.stack}\n\nPlease describe what you were do ing when thiserroroccurred:`;
    constmailtoLink= `mailto:support@ziontechgroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    windo w.open(mailtoLink);
  };

  render() {if (this.state.hasError) {
      if (this.props.fallback) {
        return thi s.props.fallback;
     }
      return (
      <divclassName="min-h-screen bg-gray-50flex flex-colitems-centerjustify-centerpx-4"><divclassName="max-w-2 xl w-full bg-white rounded-lg shadow-lgp-8text-center"><divclassName="flexjustify-centermb-6"><AlertTriangleclassName="h-2 0w-20text-red-500" /></di><spanclassName="text-3 xl font-bold text-gray-900mb-4"></spa></className="text-3 xl font-bold text-gray-900mb-4">Oops! Something went wrong
          </h><spanclassName="text-gray-600mb-6text-lg"></spa></className="text-gray-600mb-6text-lg">We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
          </p>{this.state.errorId && (
            <divclassName="bg-gray-100p-4rounded-lgmb-6"><spanclassName="text-smtext-gray-600"></spa></className="text-smtext-gray-600"><stron g>ErrorID:</stron>{this.state.errorId}
              </p><spanclassName="text-xs text-gray-500mt-1"></spa></className="text-xs text-gray-500mt-1">Please include this ID when contacting support
              </p></di>)}
            {process.env.NODE_ENV=== 'development' && this.state.error && (
            <detailsclassName="mb-6text-left"><summaryclassName="cursor-pointer text-sm font-medium text-gray-700mb-2">Error Details (Development)
              </summar><divclassName="bg-gray-100p-3 rounded text-xs font-mono text-gray-800overflow-automax-h-40"><divclassName="mb-2"><stron g>Error:</stron>{this.state.error.message}
                </di>{this.state.errorInfo && (
                  <di v><stron g>Stack:</stron><reclassName="whitespace-pre-wrapmt-1"></reclassName="whitespace-pre-wrapmt-1">{this.state.errorInfo.componentStack}
                    </pr></di>)}
              </di></detail>)}
          <divclassName="flex flex-colsm:flex-rowgap-3justify-center"><
                onClick={this.handleReset}
               className="flex items-center justify-center px-6 py-3 bg-blue-600text-white rounded-mdhover:bg-blue-700transition-colors"
              ></
                onClick={this.handleReset}
               className="flex items-center justify-center px-6 py-3 bg-blue-600text-white rounded-mdhover:bg-blue-700transition-colors"
              ><RefreshCwclassName="h-4w-4mr-2" />Try Again
            </butto><
                onClick={() =></
                onClick={() =>windo w.location.href='/'}
               className="flex items-center justify-center px-6 py-3 bg-gray-600text-white rounded-mdhover:bg-gray-700transition-colors"
              >
              <HomeclassName="h-4w-4mr-2" />Go Home
            </butto><
                onClick={this.handleReportError}
               className="flex items-center justify-center px-6 py-3 bg-green-600text-white rounded-mdhover:bg-green-700transition-colors"
              ></
                onClick={this.handleReportError}
               className="flex items-center justify-center px-6 py-3 bg-green-600text-white rounded-mdhover:bg-green-700transition-colors"
              ><MailclassName="h-4w-4mr-2" />Report Issue
            </butto></di><divclassName="mt-8 pt-6 border-tborder-gray-200"><spanclassName="text-smtext-gray-500"></spa></className="text-smtext-gray-500">If this problem persists, please contact our support team at{''}
              <ahref="mailto:support@ziontechgroup.com"
                 className="text-blue-600hover:text-blue-800"
                >support@ziontechgroup.com
              </a></p></di></di></di>
      );
    }
    return thi s.props.children;
  }
}

export default AdvancedErrorBoundary;