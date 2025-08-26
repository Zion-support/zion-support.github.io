import React, { Component } from 'react';
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
            showStackTrace: false
        };
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error,
            errorId: this.generateErrorId()
        };
    }
    componentDidCatch(error, errorInfo) {
        this.setState({ errorInfo });
        // Log error to console
        console.error('Error caught by boundary:', error, errorInfo);
        // Call custom error handler if provided
        if (this.props.onError) {
            this.props.onError(error, errorInfo);
        }
        // Send error to error reporting service (if available)
        this.reportError(error, errorInfo);
    }
    static generateErrorId() {
        return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }
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
            }
        };
        // Log to console for development
        if (process.env.NODE_ENV === 'development') {
            console.group('Error Report');
            console.log('Error ID:', errorReport.id);
            console.log('Error Details:', errorReport);
            console.groupEnd();
        }
        // In production, you would send this to your error reporting service
        // Example: Sentry.captureException(error, { extra: errorReport });
    }
    handleRetry = () => {
        this.setState({
            hasError: false,
            error: null,
            errorInfo: null,
            errorId: null,
            showStackTrace: false
        });
    };
    handleGoHome = () => {
        window.location.href = '/';
    };
    handleReportIssue = () => {
        const error = this.state.error;
        const errorInfo = this.state.errorInfo;
        if (error && errorInfo) {
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
        }
    };
    toggleStackTrace = () => {
        this.setState(prev => ({ showStackTrace: !prev.showStackTrace }));
    };
    render() {
        if (this.state.hasError) {
            // Custom fallback UI
            if (this.props.fallback) {
                return this.props.fallback;
            }
            // Default error UI
            return (<div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-2xl w-full bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-red-500 to-pink-500 p-6 text-white">
              <div className="flex items-center space-x-3">
                <ExclamationTriangleIcon className="w-8 h-8"/>
                <div>
                  <h1 className="text-2xl font-bold">Something went wrong</h1>
                  <p className="text-red-100">We've encountered an unexpected error</p>
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
        </div>);
        }
        return this.props.children;
    }
}
export default EnhancedErrorBoundary;
