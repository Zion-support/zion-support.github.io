import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';
interface Props 
  children: ReactNode;
  fallback?: ReactNode;

interface State 
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
  errorId?: string;

class ProductionErrorBoundary extends Component<Props, State> 
  constructor(props: Props) 
    super(props);
    this.state = { hasError: false };

  static getDerivedStateFromError(error: Error): State 
    // Update state so the next render will show the fallback UI
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
;

  componentDidCatch(error: Error, errorInfo: ErrorInfo) 
    // Log error details
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
);
    // Log to console in development
    if (process.env.NODE_ENV === 'development') 

    // In production, you would typically send this to an error reporting service
    if (process.env.NODE_ENV === 'production') 
      this.logErrorToService(error, errorInfo);

        timestamp: new Date().toISOString(),
//         userAgent: navigator.userAgent,
//         url: window.location.href,
//         userId: 'anonymous', // You would get this from your auth context
        sessionId: this.getSessionId(),
;
      // Send to your error reporting service
      // Example: Sentry, LogRocket, Bugsnag, etc.
        body: JSON.stringify(errorData),
);
 catch (reportingError) 
      // Fallback: log to console if reporting fails

;
  private getSessionId = (): string => 
    // Generate or retrieve session ID
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
      timestamp: new Date().toISOString(),
;
    // Create mailto link with error details
    const subject = `Error Report - ${this.state.errorId}`;
    const body = `Error Details:\n\n${JSON.stringify(errorDetails, null, 2)}`;
    const mailtoLink = `mailto:support@ziontechgroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
;
  render() 
    if (this.state.hasError) 
      // Custom fallback UI
      if (this.props.fallback) 
        return this.props.fallback;

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4"></div>
          <div className="max-w-md w-full bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center"></div>
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6"></div>
              <AlertTriangle className="w-8 h-8 text-red-400" />
                onClick={this.handleRetry}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
//               >
                <RefreshCw className="w-5 h-5" />
                onClick={this.handleReload}
                className="w-full bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
//               >
                <RefreshCw className="w-5 h-5" />
                onClick={this.handleGoHome}
                className="w-full bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
//               >
                <Home className="w-5 h-5" />
                onClick={this.handleReportError}
                className="w-full bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
//               >
                <Mail className="w-5 h-5" />
      );

    return this.props.children;


export default ProductionErrorBoundary;