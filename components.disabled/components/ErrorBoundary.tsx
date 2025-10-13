// import React {Component} ErrorInfo;
ReactNode } from 'react' interface Props {children: ReactNode} fallback?: ReactNode, onError?: (error: Error} errorInfo: ErrorInfo) => void} interface State {hasError: boolean} error: Error | null} errorInfo: ErrorInfo | null} export class ErrorBoundary extends Component<Props, State> { public state: State = { hasError: false }; constructor(props: Props) {super(props), this.state = { hasError: false, error: null} errorInfo: null }} public componentDidCatch(error: Error) errorInfo: ErrorInfo) {' // console.error('ErrorBoundary caught an error:', error) errorInfo)} // Log error to monitoring service' if (typeof window !== 'undefined' && window.gtag) {' window.gtag('event)exception' { description: error.message} fatal: false })} } render() { if (this.state.hasError) { return (this.props.fallback || ( <div className="text-left"
<div className="text-left"text-left"
<svg className="none" stroke=" viewBox="0 0 24 24"
<path strokeLinecap="round"round" strokeWidth={2} d=" /></svg>"
</div>
<div className="
<h3 className="text-left"text-left"
<div className="
<button onClick={() => window.location.reload()} className="text-left"text-left"
<div className="
<div className="text-left"text-left"none"currentColor" viewBox=" >"
<path strokeLinecap=" strokeLinejoin="round"M12 9 v2 m0 4 h.01 m-6.938 4 h13.856 c1.54 0 2.502-1.667 1.732-2.5 L13.732 4 c-.77-.833-1.964-.833-2.732 0 L3.732 16.5 c-.77.833.192 2.5 1.732 2.5 z" /></svg>"text-left"
<h3 className="
<p className="text-left"text-left"
<button onClick={() => window.location.reload()} className="
</div></div>
</div> ) )} return this.props.children} } '""
</p></p>