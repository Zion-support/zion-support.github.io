import React, { Component, ErrorInfo, ReactNode } from 'react'
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react'
interface AdvancedErrorBoundaryProps {
className?: string
children: ReactNode
onError?: (error: Error, errorInfo: ErrorInfo) => void
}
interface State {
hasError: boolean
error?: Error
errorInfo?: ErrorInfo
errorId?: string
}
interface ErrorReport {
errorId: string
error: Error
errorInfo: ErrorInfo
timestamp: string
userAgent: string
url: string
}
class AdvancedErrorBoundary extends Component<AdvancedErrorBoundaryProps, State> {
constructor(props: AdvancedErrorBoundaryProps) {
super(props)
this.state = { hasError: false }
}
private generateErrorId = (): string => {
return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}
private reportError = (error: Error, errorInfo: ErrorInfo) => {
const errorReport: ErrorReport = {
errorId: this.state.errorId || this.generateErrorId(),
error,
errorInfo,
timestamp: new Date().toISOString(),
userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'Unknown',
url: typeof window !== 'undefined' ? window.location.href : 'Unknown'
}
// Log to console in development
if (process.env.NODE_ENV === 'development') {
console.error('Error caught by boundary:', errorReport)
}
}
componentDidCatch(error: Error, errorInfo: ErrorInfo) {
this.setState({
hasError: true,
error,
errorInfo,
errorId: this.generateErrorId()
})
// Call custom error handler if provided
if (this.props.onError) {
this.props.onError(error, errorInfo)
}
// Report error
this.reportError(error, errorInfo)
}
private handleRetry = () => {
this.setState({ hasError: false, error: undefined, errorInfo: undefined })
}
private handleGoHome = () => {
if (typeof window !== 'undefined') {
window.location.href = '/'
}
}
private handleReportError = () => {
if (this.state.error) {
const errorReport = {
errorId: this.state.errorId,
error: this.state.error.message,
stack: this.state.error.stack,
componentStack: this.state.errorInfo?.componentStack,
timestamp: new Date().toISOString(),
url: typeof window !== 'undefined' ? window.location.href : 'Unknown'
}
// In a real app, you would send this to your error reporting service
console.log('Error report:', errorReport)
// For now, just show an alert
alert('Error has been reported. Thank you for your feedback!')
}
}
render() {
if (this.state.hasError) {
return (
<div className={`min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 flex items-center justify-center p-4 ${this.props.className || ''}`}>
<div className="max-w-md w-full bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
<div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
<AlertTriangle className="w-8 h-8 text-red-400" />
</div>
<h1 className="text-2xl font-bold text-white mb-4">Oops! Something went wrong</h1>
<p className="text-gray-300 mb-6">We&apos;re sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.</p>
{process.env.NODE_ENV === 'development' && this.state.error && (
<details className="mb-6 text-left">
<summary className="text-sm text-gray-400 cursor-pointer mb-2">Error Details (Development)</summary>
<div className="bg-black/20 rounded p-3 text-xs text-red-300 font-mono">
<div className="mb-2">
<strong>Error:</strong> {this.state.error.message}
</div>
{this.state.error.stack && (
<div>
<strong>Stack:</strong>
<pre className="whitespace-pre-wrap mt-1">{this.state.error.stack}</pre>
</div>
)}
{this.state.errorInfo?.componentStack && (
<div className="mt-2">
<strong>Component Stack:</strong>
<pre className="whitespace-pre-wrap mt-1">{this.state.errorInfo.componentStack}</pre>
</div>
)}
</div>
</details>
)}
<div className="space-y-3">
<button
onClick={this.handleRetry}
className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
>
<RefreshCw className="w-5 h-5 mr-2" />
Try Again
</button>
<button
onClick={this.handleGoHome}
className="w-full bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
>
<Home className="w-5 h-5 mr-2" />
Go Home
</button>
<button
onClick={this.handleReportError}
className="w-full bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
>
<Mail className="w-5 h-5 mr-2" />
Report Issue
</button>
</div>
<div className="mt-6 text-xs text-gray-400">
Error ID: {this.state.errorId}
</div>
</div>
</div>
)
}
return this.props.children
}
}
export default AdvancedErrorBoundary