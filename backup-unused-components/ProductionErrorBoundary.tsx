import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';
interface Props;
  children: ReactNode;
  fallback?: ReactNode;
interface State;
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
  errorId?: string;
class ProductionErrorBoundary extends Component<Props, State /></Props>
  constructor(props: Props) 
    super(props);
    this.state = { hasError: false };
  static getDerivedStateFromError(error: Error): State;
    // Update state so the next render will show the fallback UI;
      hasError: true;
      error;
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
;
  componentDidCatch(error: Error, errorInfo: ErrorInfo) 
    // Log error details;
    this.setState()
      error;
      errorInfo,)
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
);
    // Log to console in development;
    if (process.env.NODE_ENV === 'development') 

    // In production, you would typically send this to an error reporting service;
    if (process.env.NODE_ENV === 'production') 
      this.logErrorToService(error, errorInfo);
  private logErrorToService = async (error: Error, errorInfo: ErrorInfo) => 

      const errorData = 
        message: error.message;
        stack: error.stack;
        componentStack: errorInfo.componentStack;
        errorId: this.state.errorId;
        timestamp: new Date().toISOString()
        userAgent: navigator.userAgent;
        url: window.location.href;
        userId: 'anonymous', // You would get this from your auth context;
        sessionId: this.getSessionId();
      // Send to your error reporting service;
      // Example: Sentry, LogRocket, Bugsnag, etc.
      await fetch('/api/errors'
        method: 'POST'
        headers: 
          'Content-Type': 'application/json'
,)
        body: JSON.stringify(errorData)
);
 catch (reportingError) 
      // Fallback: log to console if reporting fails;
;
  private getSessionId = (): string => 
    // Generate or retrieve session ID;
    let sessionId = sessionStorage.getItem('sessionId');
    if (!sessionId) 
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem('sessionId', sessionId);
    return sessionId;
;
  private handleRetry = () => 
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
;
  private handleReload = () => 
    window.location.reload();
;
  private handleGoHome = () => 
    window.location.href = '/';
;
  private handleReportError = () => 
    const errorDetails = 
      errorId: this.state.errorId;
      message: this.state.error?.message;
      stack: this.state.error?.stack;
      url: window.location.href;
      timestamp: new Date().toISOString();
    // Create mailto link with error details;
    const subject = `Error Report - ${this.state.errorId}`;
    const body = `Error Details:\n\n${JSON.stringify(errorDetails, null, 2)}`;
    const mailtoLink = `mailto:support@ziontechgroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
;
  render() 
    if (this.state.hasError) 
      // Custom fallback UI;
      if (this.props.fallback) 
        return this.props.fallback;
      return()
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4" /></div>
          <div className="max-w-md w-full bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center" /></div>
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6" /></div>
              <AlertTriangle className="w-8 h-8 text-red-400" / /></AlertTriangle>
            </div>
            <h1 className="text-2xl font-bold text-white mb-4" /></h1>
              Oops! Something went wrong;
            </h1>
            <p className="text-gray-300 mb-6" /></p>
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
            </p>
            
              <details className="mb-6 text-left" /></details>
                <summary className="text-cyan-400 cursor-pointer mb-2" />)
                  Error Details (Development)
                </summary>
                <div className="bg-black/20 p-4 rounded-lg text-sm font-mono text-gray-300 overflow-auto max-h-40" /></div>
                  <div className="mb-2" /></div>
                    <strong>Error:</strong> {this.state.error.message}
                  </div>
                  <div /></div>
                    <strong>Stack:</strong>
                    <pre className="whitespace-pre-wrap mt-1" /></pre>
                      {this.state.error.stack}
                    </pre>
                  </div>
                </div>
              </details>

            <div className="space-y-3" /></div>
              <button;
                onClick={this.handleRetry}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
               /></button>
                <RefreshCw className="w-5 h-5" / /></RefreshCw>
                <span>Try Again</span>
              </button>
              <button;
                onClick={this.handleReload}
                className="w-full bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
               /></button>
                <RefreshCw className="w-5 h-5" / /></RefreshCw>
                <span>Reload Page</span>
              </button>
              <button;
                onClick={this.handleGoHome}
                className="w-full bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
               /></button>
                <Home className="w-5 h-5" / /></Home>
                <span>Go Home</span>
              </button>
              <button;
                onClick={this.handleReportError}
                className="w-full bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
               /></button>
                <Mail className="w-5 h-5" / /></Mail>
                <span>Report Error</span>
              </button>
            </div>
            
              <p className="text-xs text-gray-400 mt-4" /></p>
                Error ID: {this.state.errorId}
              </p>

          </div>
        </div>
      );
    return this.props.children;
export default ProductionErrorBoundary;