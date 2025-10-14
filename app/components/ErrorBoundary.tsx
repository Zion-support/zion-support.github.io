import React, { Component, Error Info, React Node, Suspense } from 'react';
import React, { Suspense } from 'react';
interface Props {
  children: React Node
  }

interface State {
  has Error: boolean;
  error?: Error
  }

class Error Boundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { has Error: false }
  }
  
  static get Derived State From Error(error: Error): State {
    return { has Error: true, error }
  }
  
  component Did Catch(_error: Error, _error Info: Error Info) {
    // Error logged
  }
  
  render() {
    if (this.state.has Error) {
      return (
        <div className="min-h-screenflexitems-centerjustify-center bg-slate-900">
          <div className="text-center">
            <h1 className="text-4 xlfont-boldtext-white mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-8">We're sorry, but something unexpected happened.</p>
            <but tonon Click={() => window.location.reload()}
              className="bg-gradient-to-rfrom-purple-600 to-cyan-600hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-2 px-4 rounded transition-all duration-300"
            >
              Reload Page
            </butn>
          </div>
        </div>
      )
  }
    return this.props.children
  }
}

export default ErrorBoundary;