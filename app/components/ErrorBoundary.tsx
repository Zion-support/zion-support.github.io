import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { has Error: false }
  )
  }
  )
  static get Derived State From Error(error: Error): State {
    return { has Error: true, error }
  )
  }
  )
  component Did Catch(_error: Error, _error Info: Error Info) {
    // Error logged
  }
  )
  render() {
    if (this.state.has Error) {
      return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
        
          <div className="text-center">
            <h1 className="text-4 xl font-bold text-white mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-8">We're sorry, but something unexpected happened.</p>
            <button
              on Click={() => window.location.reload()}
  )
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-2 px-4 rounded transition-all duration-300"
            >
              Reload Page
            </button>
          </div>
      )
    }
  )
    return this.props.children
  }
  )
}
  )
export default Error;; Boundary
