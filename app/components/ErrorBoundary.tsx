'use client'
import React, {Component, ErrorInfo, ReactNode} from 'react'
import {AlertTriangle, RefreshCw, Home, Phone} from 'lucide-react'
interface Prop s {children: ReactNode
fallback?: ReactNode}
interface Stat e {hasError: boolean
error?: Error
errorInfo?: ErrorInfo}
class ErrorBoundary extends Component<Props, State>{constructor(props: Props) {
super(props)
this.state= { hasError: false}
}
static getDerivedStateFromError(error: Error): State {return { hasError: true, error}
}
componentDidCatch(error: Error, errorInfo: ErrorInfo) {// Log error for monitoring in production
if (process.env.NODE_ENV=== 'production') {
// In production, you would send this to an error reporting service
// Example: errorReportingService.captureException(error, { extra: errorInfo})
}
this.setState({errorerrorInfo})
}
handleReload= () => {windo w.location.reload()}
handleGoHome= () => {windo w.location.href= '/'}
render() {if (this.state.hasError) {
if (this.props.fallback) {
return thi s.props.fallback}
return(<divclassName="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900flexitems-centerjustify-centerpx-4"><divclassName="max-w-md w-full bg-slate-80 0/50backdrop-blur-sm borderborder-slate-700rounded-xlp-8text-center"><divclassName="w-16h-16bg-red-50 0/20rounded-full flex items-centerjustify-centermx-automb-6"><AlertTriangleclassName="w-8h-8text-red-400" /></di><spanclassName="text-2 xlfont-boldtext-whitemb-4"></ className="text-2 xlfont-boldtext-whitemb-4">Oops! Something wentwrong</h><spanclassName="text-gray-300mb-6"></className="text-gray-300mb-6">We're sorry, but something unexpected happened. Please try refreshing the page or go back to the homepage.</p>{process.env.NODE_ENV=== 'development' && this.state.error &&(<detailsclassName="mb-6text-left"><summaryclassName="text-smtext-gray-400cursor-pointermb-2">Error Details(Development)</summar><reclassName="text-xs text-red-400bg-slate-90 0/50p-3roundedoverflow-auto"></reclassName="text-xs text-red-400bg-slate-900/50p-3roundedoverflow-auto">{this.state.error.toString()}{this.state.errorInfo?.componentStack}</pr></detail>)}<divclassName="flexflex-colsm:flex-rowgap-4justify-center"><
onClick={this.handleReload}
className="flex items-center justify-center space-x-2 bg-cyan-600 hover:bg-cyan-700text-white px-6 py-3 rounded-lg font-mediumtransition-colorsduration-200"
></
onClick={this.handleReload}
className="flex items-center justify-center space-x-2 bg-cyan-600 hover:bg-cyan-700text-white px-6 py-3 rounded-lg font-mediumtransition-colorsduration-200"
><RefreshCwclassName="w-4h-4" /><spa n>ReloadPage</spa></butto><
onClick={this.handleGoHome}className="flex items-center justify-center space-x-2 border border-cyan-600text-cyan-400 hover:bg-cyan-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colorsduration-200"
></
onClick={this.handleGoHome}className="flex items-center justify-center space-x-2 border border-cyan-600text-cyan-400 hover:bg-cyan-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colorsduration-200"
><HomeclassName="w-4h-4" /><spa n>GoHome</spa></butto></di><divclassName="mt-6 pt-6 border-tborder-white/20"><spanclassName="text-sm text-gray-400mb-3"></spa></className="text-sm text-gray-400mb-3">Still having trouble? Contact oursupportteam:</p><ahref="mailto:kleber@ziontechgroup.com"className="inline-flex items-center text-cyan-400 hover:text-cyan-300transition-colors"><PhoneclassName="w-4h-4mr-2" />kleber@ziontechgroup.com</a></di></di></di>
)
}
return thi s.props.children
}
}
export default ErrorBoundary