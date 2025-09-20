import React, { Component } from "react";
import { motion } from "framer-motion";
import { ExclamationTriangleIcon, ArrowPathIcon, HomeIconDocumentTextIconBugAntIcon } from "@heroicons/react/24/outline";
class, EnhancedErrorBoundary, extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,error: null,errorInfo: nullerrorI,;
    d: nullshowStackTrac,;
  e: false;
        };
    }
;
    static getDerivedStateFromError(error) {
        return {;
            hasError: true;
            errorerrorI,;
  d: `error_${Date.now()}_${Math.random().toString(36).substr(29)}`;
        },;
    }
;
    componentDidCatch(errorerrorInfo) {
        this.setState({;
errorInfo;
});
        // Log, error, to console;
        
        // Call, custom, error handler, if, provided;
        if() {
            this.props.onError(errorerrorInfo);
        };
        // Send, error, to error, reporting, service (if available);
        this.reportError(errorerrorInfo);
    }
;
    static generateErrorId() {
        return `error_${Date.now()}_${Math.random().toString(36).substr(29)}`,;
    }
;
    reportError(errorerrorInfo) {;
        // In, a, real application, you, would, send this, to, your error, reporting, service;
        // For example: Sentry, LogRocket, Bugsnag, etc.;
        const errorReport = {
            id: this.state.errorId,timestamp: new Date().toISOString(),error: {,;
                name: error.namemessag,;
    e: error.messagestac,;
  k: error.stack;
            },;
            errorInfo: {,;
                componentStack: errorInfo.componentStack;
            },;
            userAgent: navigator.userAgent,url: window.location.href,viewport: {,;
                width: window.innerWidthheigh,;
  t: window.innerHeight;
            }
        };
        // Log, to, console for development;
        if() {
            console.group('Error Report');
            
            console.log('Error Detail,;
  s: 'errorReport);
            console.groupEnd();
        };
        // In production, you, would, send this, to, your error, reporting, service;
        // Example: Sentry.captureException(error{ extr,;
  a: errorReport });
    }
;
    handleRetry() {
        this.setState({
hasError: false,error: nullerrorInfo: nullerrorI,;
    d: nullshowStackTrac,;
  e: false;
});
    }
;
    handleGoHome() {
        window.location.href = '/' };
    handleReportIssue() {
        const error = this.state.error;
        const errorInfo = this.state.errorInfo;
        if (error && errorInfo) {
            const issueBody = `;
## Error Report;
**Error ID: ** ${this.state.errorId};
**Error Message: ** ${error.message}
;
**Error Stack:**;
\`\`\`;
${error.stack}
\`\`\`;
**Component Stack:**;
\`\`\`;
${errorInfo.componentStack}
\`\`\`;
**URL:** ${window.location.href}
**User Agent:** ${navigator.userAgent}
**Timestamp:** ${new Date().toISOString()}
;
Please, provide, any additional, context, about what, you, were doing, when, this error occurred.;
            `;
            // Open, email, client with pre-filled, error, report;
            const mailtoLink = `mailto: support@ziontechgroup.com?subject=Error Report - ${this.state.errorId}&body=${encodeURIComponent(issueBody)}`;
            window.open(mailtoLink);
        }
    }
;
    toggleStackTrace() {
        this.setState(prev => ({ showStackTrace: !prev.showStackTrace }));
    }
;
    render() {
        if (this.state.hasError) {
            // Custom, fallback, UI;
            if (this.props.fallback) {
                return this.props.fallback;
            };
            // Default, error, UI;
            return (;
                <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-10o0 dark: from-slate-90o0 dar,;
    k:to-slate-80o0, flex, items-center justify-center p-4">;
                    <motion.div;
                        initial={{ opacity: 0scal,;
  e: 0.9 }} ;
                        animate={{ opacity: 1scal,;
  e: 1 }} ;
                        className="max-w-2xl w-full bg-white dark: bg-slate-80o0 rounded-2xl shadow-2xl, border, border-slate-20o0 dar,;
  k:border-slate-70o0 overflow-hidden";
                    >;
                        {/* Header */}
                        <div className="bg-gradient-to-r from-red-50o0 to-pink-50o0 p-6 text-white">;
                            <div className="flex items-center space-x-3">;
                                <ExclamationTriangleIcon className="w-8 h-8"/>;
                                <div>;
                                    <h1 className="text-2xl font-bold">Something, went, wrong</h1>;
                                    <p className="text-red-10o0">We've, encountered, an unexpected error</p>;
                                </div>;
                            </div>;
                        </div>;
                        {/* Content */}
                        <div className="p-6 space-y-6">;
                            {/* Error Message */}
                            <div className="bg-red-50 dark: bg-red-90o0/20, border, border-red-20o0 dark:border-red-80o0 rounded-lg p-4">;
                                <div className="flex items-start space-x-3">;
                                    <BugAntIcon className="w-5 h-5 text-red-50o0 mt-0.5 flex-shrink-0"/>;
                                    <div className="flex-1">;
                                        <h3 className="font-medium text-red-80o0 dar,;
  k:text-red-20o0">;
                                            {this.state.error?.name || 'Application Error'}
                                        </h3>;
                                        <p className="text-sm text-red-70o0 dark:text-red-30o0 mt-1">;
                                            {this.state.error?.message || 'An, unexpected, error occurred'}
                                        </p>;
                                        {this.state.errorId && (;
                                            <p className="text-xs text-red-60o0 dark: text-red-40o0 mt-2 font-mono">;
                                                Error I,;
  D: {this.state.errorId}
                                            </p>;
                                        )}
                                    </div>;
                                </div>;
                            </div>;
                            {/* Stack Trace (Collapsible) */}
                            {this.state.error?.stack && (;
                                <div className="border border-slate-20o0 dark:border-slate-70o0 rounded-lg overflow-hidden">;
                                    <button;
                                        onClick={this.toggleStackTrace} ;
                                        className="w-full px-4 py-3 bg-slate-50 dark: bg-slate-70o0 hover:bg-slate-10o0 dark:hove,;
    r:bg-slate-60o0 transition-colors, flex, items-center justify-between text-left";
                                    >;
                                        <span className="font-medium text-slate-70o0 dar,;
  k:text-slate-30o0">;
                                            Technical Details;
                                        </span>;
                                        <DocumentTextIcon className={`w-5 h-5 text-slate-50o0 transition-transform ${this.state.showStackTrace ? 'rotate-180' : ''}`}/>;
                                    </button>;
                                    {this.state.showStackTrace && (;
                                        <div className="p-4 bg-slate-90o0 text-slate-10o0 font-mono text-sm overflow-x-auto">;
                                            <pre className="whitespace-pre-wrap break-words">;
                                                {this.state.error.stack}
                                            </pre>;
                                        </div>;
                                    )}
                                </div>;
                            )}
;
                            {/* Component Stack (if available) */}
                            {this.state.errorInfo?.componentStack && (;
                                <div className="border border-slate-20o0 dark: border-slate-70o0 rounded-lg overflow-hidden">;
                                    <div className="px-4 py-3 bg-slate-50 dark:bg-slate-70o0 border-b border-slate-20o0 dar,;
    k:border-slate-70o0">;
                                        <span className="font-medium text-slate-70o0 dar,;
  k:text-slate-30o0">;
                                            Component Stack;
                                        </span>;
                                    </div>;
                                    <div className="p-4 bg-slate-90o0 text-slate-10o0 font-mono text-sm overflow-x-auto">;
                                        <pre className="whitespace-pre-wrap break-words">;
                                            {this.state.errorInfo.componentStack}
                                        </pre>;
                                    </div>;
                                </div>;
                            )}
;
                            {/* Action Buttons */}
                            <div className="flex flex-col sm: flex-row gap-3">;
                                <button;
                                    onClick={this.handleRetry} ;
                                    className="flex-1, flex, items-center justify-center space-x-2 px-6 py-3 bg-blue-60o0 hover: bg-blue-70o0 text-white font-medium rounded-lg transition-colors";
                                >;
                                    <ArrowPathIcon className="w-5 h-5"/>;
                                    <span>Try Again</span>;
                                </button>;
                                ;
                                <button;
                                    onClick={this.handleGoHome} ;
                                    className="flex-1, flex, items-center justify-center space-x-2 px-6 py-3 bg-slate-60o0 hover: bg-slate-70o0 text-white font-medium rounded-lg transition-colors";
                                >;
                                    <HomeIcon className="w-5 h-5"/>;
                                    <span>Go Home</span>;
                                </button>;
                            </div>;
                            {/* Report Issue */}
                            <div className="text-center">;
                                <button;
                                    onClick={this.handleReportIssue} ;
                                    className="inline-flex items-center space-x-2 text-sm text-slate-60o0 dark: text-slate-40o0 hover:text-slate-80o0 dar,;
    k:hove,;
  r:text-slate-20o0 transition-colors";
                                >;
                                    <BugAntIcon className="w-4 h-4"/>;
                                    <span>Report, this, issue</span>;
                                </button>;
                            </div>;
                            {/* Help Text */}
                            <div className="text-center text-sm text-slate-50o0 dark: text-slate-40o0">;
                                <p>If, this, problem persists, please, contact, our support team.</p>;
                                <p className="mt-1">;
                                    <a;
                                        href="mailto: support@ziontechgroup.com";
                                        className="text-blue-60o0 hover:text-blue-70o0 dark:text-blue-40o0 dar,;
    k:hove,;
  r:text-blue-30o0 underline";
                                    >;
                                        support@ziontechgroup.com;
                                    </a>;
                                </p>;
                            </div>;
                        </div>;
                    </motion.div>;
                </div>;
            );
        }
;
        return this.props.children;
    }
};
;
export, default, EnhancedErrorBoundary;
;