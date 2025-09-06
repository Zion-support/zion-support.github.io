
    }
  }
;
  componentDidCatch(error:Error, errorInfo:ErrorInfo) {;
    const errorId = this.generateErrorId();
    ;
    // Enhanced error logging;
    const enhancedError = {;
      ...error,;
      componentStack:errorInfo.componentStack,;
      errorBoundary:this.props.context || 'GlobalErrorBoundary',;
      timestamp:new Date().toISOString(),;
      userAgent:typeof window !== 'undefined' ? navigator.userAgent :'SSR',;
      url:typeof window !== 'undefined' ? window.location.href :'SSR',;
      userId:this.getUserId(),;
      buildInfo:this.getBuildInfo();
    }
;
    // Log to console in development;
    if (process.env.NODE_ENV === 'development') {;
      console.group('🚨 Error Boundary Caught Error');
      logErrorToProduction('Error:', { data:error });
      logErrorToProduction('Error Info:', { data:errorInfo });
      logErrorToProduction('Enhanced Error:', { data:enhancedError });
      console.groupEnd();
    }
;
    // Report to Sentry;
    Sentry.withScope((scope) => {;
      scope.setTag('errorBoundary', this.props.context || 'GlobalErrorBoundary');
      scope.setLevel('error');
      scope.setContext('errorInfo', {;
        componentStack:errorInfo.componentStack,;
        retryCount:this.state.retryCount;
      });
      ;
      Sentry.captureException(error);
    });
;
    // Custom error handler;
    if (this.props.onError) {;
      this.props.onError(error, errorInfo);
    }
;
    this.setState({;
      errorInfo,;
      errorId;
    });
  }

  }
;
  private generateErrorId():string {;
    return `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
;
  private getUserId():string | null {;
    // Try to get user ID from various sources;
    if (typeof window !== 'undefined') {;
      try {;
        // Check localStorage, sessionStorage, or cookies;
        return localStorage.getItem('userId') || ;
               sessionStorage.getItem('userId') || ;
               null;
      } catch {;
        return null;
      }    }
    return null;
  }

      }
    } catch (err) {;
      logErrorToProduction('Failed to report error:', { data:err });
    }

                    variant="ghost" ;
                    size="sm";
                    className="flex items-center gap-2";
                  >;
                    <Bug className="h-4 w-4" />;

                </AnimatePresence>;
              </CardContent>;
            </Card>;
          </motion.div>;

}
;
// Higher-order component for adding error boundaries;
export const withErrorBoundary = <P extends object>(;
  Component:React.ComponentType<P>,;
  errorBoundaryProps?:Omit<ErrorBoundaryProps 'children'>;
) => {;
  const WrappedComponent = (props:P) => (;
    <GlobalErrorBoundary {...errorBoundaryProps}>;
      <Component {...props} />;
    </GlobalErrorBoundary>;
  );
;
  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;
  ;
  return WrappedComponent;}
;
export default GlobalErrorBoundary
'use client' import { ;
  {;
  React, {;
  Component,  ErrorInfo, ReactNode ';
 } from "react";
import * as Sentry from '@sentry/nextjs' error: Error | null errorInfo: ErrorInfo | null errorId: string | null retryCount: number userFeedback: string showDetails: boolean ;
}interface ErrorBoundaryProps {;
  children: ReactNode fallback?: ReactNode onError?: (error: Error, errorInfo: ErrorInfo) => void enableRetry?: boolean maxRetries?: number showReportButton?: boolean context?: string ;
}constructor (props: ErrorBoundaryProps) {;
  super (props) this.state = {';
  hasError: false, error: null, errorInfo: null, errorId: null, retryCount: 0,  userFeedback: '', showDetails: false ;
}

