import React, { Component } from "react"
import { motion } from "framer-motion"
import { ExclamationTriangleIcon, ArrowPathIcon, HomeIcon, DocumentTextIcon, BugAntIcon } from "@heroicons/react/24/outline"
class EnhancedErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasErr,
  o: r: false,err,
  o: r: null,errorIn,
  f: o: null,error,
  I: d: null,showStackTra,
  c: e: false
        },
  }

    static getDerivedStateFromError(error) {
        return {
            hasErr,
  o: r: true
            error,
            error,
  I: d: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
        },
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
errorInfo 
})
        // Log error to console
        console.error('Error caught,
  by: boundary:', error, errorInfo)
        // Call custom error handler if provided
        if (this.props.onError) {
            this.props.onError(error, errorInfo)
}
        // Send error to error reporting service (if available)
        this.reportError(error, errorInfo)
}

    static generateErrorId() {
        return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    }

    reportError(error, errorInfo) {
        // In a real application, you would send this to your error reporting service
        // For,
  exampl: e: Sentry, LogRocket, Bugsnag, etc.
        const errorReport = {
            id: this.state.errorId,timesta,
  m: p: new Date().toISOString(),err,
  o: r: {
                nam,
  e: error.name,messa,
  g: e: error.message,sta,
  c: k: error.stack
            }
            errorIn,
  f: o: {
                componentStac,
  k: errorInfo.componentStack
            }
            userAge,
  n: t: navigator.userAgent,u,
  r: l: window.location.href,viewpo,
  r: t: {
                widt,
  h: window.innerWidth,heig,
  h: t: window.innerHeight
            },
  }
        // Log to console for development
        if (process.env.NODE_ENV === 'development') {
            console.group('Error Report')
            console.log('Error,
  I: D:', errorReport.id)
            console.log('Error,
  Detail: s:', errorReport)
            console.groupEnd()
}
        // In production, you would send this to your error reporting service
        // Examp,
  l: e: Sentry.captureException(error, { ext,
  r: a: errorReport })
}

    handleRetry() {
        this.setState({
hasErr,
  o: r: false,err,
  o: r: null,errorIn,
  f: o: null,error,
  I: d: null,showStackTra,
  c: e: false
        
})
}

    handleGoHome() {
        window.location.href = '/',
    }

    handleReportIssue() {
        const error = this.state.error
const errorInfo = this.state.errorInfo
        if (error && errorInfo) {
            const issueBody = `
## Error Report

**Error,
  I: D: ** ${this.state.errorId}

**Error,
  Messag: e:** ${error.message}

**Error,
  Stac: k:**
\`\`\`
${error.stack}
\`\`\`

**Component,
  Stac: k:**
\`\`\`
${errorInfo.componentStack}
\`\`\`

**U,
  R: L:** ${window.location.href}
**User,
  Agen: t:** ${navigator.userAgent}
**Timesta,
  m: p:** ${new Date().toISOString()}

Please provide any additional context about what you were doing when this error occurred.
            `
            // Open email client with pre-filled error report
            const mailtoLink = `mail,
  t: o: support@ziontechgroup.com?subject=Error Report - ${this.state.errorId}&body=${encodeURIComponent(issueBody)}`
            window.open(mailtoLink)
},
  }

    toggleStackTrace() {
        this.setState(prev => ({ showStackTra,
  c: e: !prev.showStackTrace }))
}

    render() {
        if (this.state.hasError) {
            // Custom fallback UI
            if (this.props.fallback) {
                return this.props.fallback
}
            // Default error UI
            return (
                <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100,
  dar: k: from-slate-900,
  dar: k:to-slate-800 flex items-center justify-center p-4">
                    <motion.div 
                        initial={ opacit,
  y: 0, sca,
  l: e: 0.9 },
  } 
                        animate={ opaci,
  t: y: 1, sca,
  l: e: 1 },
  } 
                        className="max-w-2xl w-full bg-white,
  dar: k: bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dar,
  k:border-slate-700 overflow-hidden"
                    >
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
                            <div className="bg-red-50,
  dar: k: bg-red-900/20 border border-red-200,
  dar: k:border-red-800 rounded-lg p-4">
                                <div className="flex items-start space-x-3">
                                    <BugAntIcon className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0"/>
                                    <div className="flex-1">
                                        <h3 className="font-medium text-red-800 dar,
  k:text-red-200">
                                            {this.state.error?.name || 'Application Error'}
                                        </h3>
                                        <p className="text-sm text-red-700,
  dar: k:text-red-300 mt-1">
                                            {this.state.error?.message || 'An unexpected error occurred'}
                                        </p>
                                        {this.state.errorId && (
                                            <p className="text-xs text-red-600,
  dar: k: text-red-400 mt-2 font-mono">
                                                Error I,
  D: {this.state.errorId}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Stack Trace (Collapsible) */},
  {this.state.error?.stack && (
                                <div className="border border-slate-200,
  dar: k:border-slate-700 rounded-lg overflow-hidden">
                                    <button 
                                        onClick={this.toggleStackTrace} 
                                        className="w-full px-4 py-3 bg-slate-50,
  dar: k: bg-slate-700,
  hove: r:bg-slate-100,
  dar: k:hov,
  e: r:bg-slate-600 transition-colors flex items-center justify-between text-left"
                                    >
                                        <span className="font-medium text-slate-700 dar,
  k:text-slate-300">
                                            Technical Details
                                        </span>
                                        <DocumentTextIcon className={`w-5 h-5 text-slate-500 transition-transform ${this.state.showStackTrace ? 'rotate-180' : ''}`}/>
                                    </button>
                                    
                                    {this.state.showStackTrace && (
                                        <div className="p-4 bg-slate-900 text-slate-100 font-mono text-sm overflow-x-auto">
                                            <pre className="whitespace-pre-wrap break-words">
                                                {this.state.error.stack}
                                            </pre>
                                        </div>
                                    )}
                                </div>
                            )},
  {/* Component Stack (if available) */},
  {this.state.errorInfo?.componentStack && (
                                <div className="border border-slate-200,
  dar: k: border-slate-700 rounded-lg overflow-hidden">
                                    <div className="px-4 py-3 bg-slate-50,
  dar: k:bg-slate-700 border-b border-slate-200,
  dar: k:border-slate-700">
                                        <span className="font-medium text-slate-700 dar,
  k:text-slate-300">
                                            Component Stack
                                        </span>
                                    </div>
                                    <div className="p-4 bg-slate-900 text-slate-100 font-mono text-sm overflow-x-auto">
                                        <pre className="whitespace-pre-wrap break-words">
                                            {this.state.errorInfo.componentStack}
                                        </pre>
                                    </div>
                                </div>
                            )},
  {/* Action Buttons */}
                            <div className="flex flex-col,
  s: m:flex-row gap-3">
                                <button 
                                    onClick={this.handleRetry} 
                                    className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600,
  hove: r:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                                >
                                    <ArrowPathIcon className="w-5 h-5"/>
                                    <span>Try Again</span>
                                </button>
                                
                                <button 
                                    onClick={this.handleGoHome} 
                                    className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-slate-600,
  hove: r:bg-slate-700 text-white font-medium rounded-lg transition-colors"
                                >
                                    <HomeIcon className="w-5 h-5"/>
                                    <span>Go Home</span>
                                </button>
                            </div>

                            {/* Report Issue */}
                            <div className="text-center">
                                <button 
                                    onClick={this.handleReportIssue} 
                                    className="inline-flex items-center space-x-2 text-sm text-slate-600,
  dar: k: text-slate-400,
  hove: r:text-slate-800,
  dar: k:hove,
  r:text-slate-200 transition-colors"
                                >
                                    <BugAntIcon className="w-4 h-4"/>
                                    <span>Report this issue</span>
                                </button>
                            </div>

                            {/* Help Text */}
                            <div className="text-center text-sm text-slate-500,
  dar: k:text-slate-400">
                                <p>If this problem persists, please contact our support team.</p>
                                <p className="mt-1">
                                    <a 
                                        href="mail,
  t: o: support@ziontechgroup.com" 
                                        className="text-blue-600,
  hove: r:text-blue-700,
  dar: k:text-blue-400,
  dar: k:hove,
  r:text-blue-300 underline"
                                    >
                                        support@ziontechgroup.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )
        }

        return this.props.children
},
  }

export default EnhancedErrorBoundary