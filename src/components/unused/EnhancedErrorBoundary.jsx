<<<<<<< HEAD
import React, { Component } from 'react';
=======
import React from 'react';
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
import { motion } from 'framer-motion';
import { ExclamationTriangleIcon, ArrowPathIcon, HomeIcon, DocumentTextIcon, BugAntIcon } from '@heroicons/react/24/outline';
class EnhancedErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
  hasError: false,
            error: null,
            errorInfo: null,
            errorId: null,
<<<<<<< HEAD
            showStackTrace: false
        };

=======
  showStackTrace: false
        

}}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error,
            errorId: this.generateErrorId()
<<<<<<< HEAD
        };

=======
        }}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    componentDidCatch(error, errorInfo) {
        this.setState({ errorInfo });
        // Log error to console
<<<<<<< HEAD
        // // // console.error('Error caught by boundary:', error, errorInfo);
=======
        // // // // // // // console.error('Error caught by boundary:', error, errorInfo);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
        // Call custom error handler if provided
        if (this.props.onError) {
<<<<<<< HEAD
            this.props.onError(error, errorInfo);

        // Send error to error reporting service (if available)
        this.reportError(error, errorInfo);

    static generateErrorId() {
        return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

=======
            this.props.onError(error, errorInfo)}
        // Send error to error reporting service (if available)
        this.reportError(error, errorInfo)}
    static generateErrorId() {
        return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    reportError(error, errorInfo) {
        // In a real application, you would send this to your error reporting service
        // For example: Sentry, LogRocket, Bugsnag, etc.
        const errorReport = {
  id: this.state.errorId,
            timestamp: new Date().toISOString(),
            error: {
                name: error.name,
                message: error.message,
  stack: error.stack
            

},
            errorInfo: {
                componentStack: errorInfo.componentStack
            },
            userAgent: navigator.userAgent,
            url: window.location.href,
            viewport: {
                width: window.innerWidth,
                height: window.innerHeight

        };
        // Log to console for development
        if (process.env.NODE_ENV === 'development') {
            console.group('Error Report');
<<<<<<< HEAD
<<<<<<< HEAD
            // // // console.log('Error ID:', errorReport.id);
            // // // console.log('Error Details:', errorReport);
=======
            // // // // // // // console.log('Error ID:', errorReport.id);
            // // // // // // // console.log('Error Details:', errorReport);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
            console.groupEnd();

        // In production, you would send this to your error reporting service
        // Example: Sentry.captureException(error, { extra: errorReport });

=======
            console.log('Error ID:', errorReport.id);
            console.log('Error Details:', errorReport);
            console.groupEnd()}
        // In production, you would send this to your error reporting service
        // Example: Sentry.captureException(error, { extra: errorReport })}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    handleRetry = () => {
        this.setState({
            hasError: false,
            error: null,
            errorInfo: null,
            errorId: null,
            showStackTrace: false
        })};
    handleGoHome = () => {
        window.location.href = '/'};
    handleReportIssue = () => {
        const errorInfo = this.state.errorInfo;
        if (error && errorInfo) {
<<<<<<< HEAD
            const issueBody = `
## Error Report

**Error ID:** ${this.state.errorId}

**Error Message:** ${error.message}

**Error Stack:**
\`\`\`
${error.stack}
\`\`\`

**Component Stack:**
\`\`\`
${errorInfo.componentStack}
\`\`\`

**URL:** ${window.location.href}
**User Agent:** ${navigator.userAgent}
**Timestamp:** ${new Date().toISOString()}

## Steps to Reproduce
1.
2.
3.

## Expected Behavior

## Actual Behavior

## Additional Context

      `.trim();
            const issueUrl = `https://github.com/ziontechgroup/zion-website/issues/new?title=Error: ${encodeURIComponent(error.message)}&body=${encodeURIComponent(issueBody)}`;
            window.open(issueUrl, '_blank');

=======
            const issueUrl = `https://github.com/ziontechgroup/zion-website/issues/new?title=Error: ${encodeURIComponent(error.message)}&body=${encodeURIComponent(issueBody)}`;
            window.open(issueUrl, '_blank')}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    };
<<<<<<< HEAD
    toggleStackTrace = () => {
        this.setState(prev => ({ showStackTrace: !prev.showStackTrace }))};
    render() {
        if (this.state.hasError) {
            // Custom fallback UI
            if (this.props.fallback) {
<<<<<<< HEAD
                return this.props.fallback;

=======
                return this.props.fallback}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            // Default error UI
            return (<div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4">
          <motion.div initial = {
  { opacity: 0,
  scale: 0.9 

}} animate = {
  { opacity: 1,
  scale: 1 

}} className="max-w-2xl w-full bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-red-500 to-pink-500 p-6 text-white">
              <div className="flex items-center space-x-3">
                <ExclamationTriangleIcon className="w-8 h-8"/>
                <div>
                  <h1 className="text-2xl font-bold">Something went wrong</h1>
                  <p className="text-red-100">We've encountered an unexpected error</p>
=======

    // Add global error handler
    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', (event) => {
      handleError(event.reason, { componentStack: 'Promise rejection' });
    });

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleError);
    };
  }, []);

  if (hasError) {
    const defaultFallback = (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100">
        <motion.div
          initial = {
  { opacity: 0,
  y: 20 






}}
          animate = {
  { opacity: 1,
  y: 0 






}}
          className="max-w-md mx-auto text-center p-8 bg-white rounded-xl shadow-lg"
        >
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h1>
          <p className="text-gray-600 mb-6">
            We're sorry, but something unexpected happened. Please try refreshing the page.
          </p>
          
          <div className="space-y-3">
            <button
              onClick={() => window.location.reload()}
              className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
            >
              Refresh Page
            </button>
            
            <button
              onClick={() => window.history.back()}
              className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Go Back
            </button>
          </div>
          
          {process.env.NODE_ENV === 'development' && error && (
            <details className="mt-6 text-left">
              <summary className="cursor-pointer text-sm text-gray-600 hover:text-gray-800">
                Error Details (Development)
              </summary>
              <div className="mt-2 p-3 bg-gray-100 rounded text-xs font-mono text-gray-800 overflow-auto">
                <div className="mb-2">
                  <strong>Error:</strong> {error.toString()}
<<<<<<< HEAD
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Error Message */}
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <BugAntIcon className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0"/>
                  <div className="flex-1">
                    <h3 className="font-medium text-red-800 dark:text-red-200">
                      {this.state.error?.name || 'Application Error'}
                    </h3>
                    <p className="text-sm text-red-700 dark:text-red-300 mt-1">
                      {this.state.error?.message || 'An unexpected error occurred'}
                    </p>
                    {this.state.errorId && (<p className="text-xs text-red-600 dark:text-red-400 mt-2 font-mono">
                        Error ID: {this.state.errorId}
                      </p>)}
                  </div>
                </div>
              </div>

              {/* Stack Trace (Collapsible) */}
              {this.state.error?.stack && (<div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                  <button onClick={this.toggleStackTrace} className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors flex items-center justify-between text-left">
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      Technical Details
                    </span>
                    <DocumentTextIcon className={`w-5 h-5 text-slate-500 transition-transform ${this.state.showStackTrace ? 'rotate-180' : ''}`}/>
                  </button>

                  {this.state.showStackTrace && (<div className="p-4 bg-slate-900 text-slate-100 font-mono text-sm overflow-x-auto">
                      <pre className="whitespace-pre-wrap break-words">
                        {this.state.error.stack}
                      </pre>
                    </div>)}
                </div>)}

              {/* Component Stack (if available) */}
              {this.state.errorInfo?.componentStack && (<div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                  <div className="px-4 py-3 bg-slate-50 dark:bg-slate-700 border-b border-slate-200 dark:border-slate-700">
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      Component Stack
                    </span>
                  </div>
                  <div className="p-4 bg-slate-900 text-slate-100 font-mono text-sm overflow-x-auto">
                    <pre className="whitespace-pre-wrap break-words">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  </div>
                </div>)}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button onClick={this.handleRetry} className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                  <ArrowPathIcon className="w-5 h-5"/>
                  <span>Try Again</span>
                </button>

                <button onClick={this.handleGoHome} className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-slate-600 hover:bg-slate-700 text-white font-medium rounded-lg transition-colors">
                  <HomeIcon className="w-5 h-5"/>
                  <span>Go Home</span>
                </button>
              </div>

              {/* Report Issue */}
              <div className="text-center">
                <button onClick={this.handleReportIssue} className="inline-flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors">
                  <BugAntIcon className="w-4 h-4"/>
                  <span>Report this issue</span>
                </button>
              </div>

              {/* Help Text */}
              <div className="text-center text-sm text-slate-500 dark:text-slate-400">
                <p>If this problem persists, please contact our support team.</p>
                <p className="mt-1">
                  Email: <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">kleber@ziontechgroup.com</a>
                </p>
              </div>
            </div>
          </motion.div>
<<<<<<< HEAD
        </div>);

        return this.props.children;


=======
        </div>)}
        return this.props.children}
}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
=======
                </div>
                {errorInfo && errorInfo.componentStack && (
                  <div>
                    <strong>Component Stack:</strong>
                    <pre className="whitespace-pre-wrap mt-1">{errorInfo.componentStack}</pre>
                  </div>
                )}
              </div>
            </details>
          )}
        </motion.div>
      </div>
    );

    return fallback || defaultFallback;
  }

  return children;
};

>>>>>>> 0db51c83ec2639597974243032be26f90b238361
export default EnhancedErrorBoundary;
}}}}}}}}}}}}}