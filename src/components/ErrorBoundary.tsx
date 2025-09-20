import React, { Component, ErrorInfo, ReactNode } from "react"
interface Props {
  childr,
  e: n: ReactNode
  fallback?: ReactNode
}

interface State {
  hasErr,
  o: r: boolean
  error?: Error
}

class ErrorBoundary extends Component<Props, State> {
  constructor(pro,
  p: s: Props) {
    super(props)
    this.state = { hasErro,
  r: false },
  }

  static getDerivedStateFromError(err,
  o: r: Error): State {
    return { hasErro,
  r: true, error },
  }

  componentDidCatch(err,
  o: r: Error, errorIn,
  f: o: ErrorInfo) {
    console.error('ErrorBoundary caught an erro,
  r:', error, errorInfo)
}

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-red-400 mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-8">We're sorry, but something unexpected happened.</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-purple-600,
  hove: r: bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"
            >
              Reload Page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
},
  }

export default ErrorBoundary