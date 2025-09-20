import { useCallback  } from "react";
import React, { Component, ErrorInfo, ReactNode } from "react"
interface Props {
  childr,
  e: n: ReactNode;
}
}
}

interface State {
  hasErr,
  o: r: boolean;
  erro,
  r: Error | null;
}
}
}

class ErrorBoundary extends Component<Props, State> {
  constructor(pro,
  p: s: Props) {
    super(props)
    this.state = { hasErro,
  r: false, err,
  o: r: null }
  }

  static getDerivedStateFromError(err,
  o: r: Error): State {
  return { hasErro,
}
}
  r: true, error }
  }

  componentDidCatch(err,
  o: r: Error, errorIn,
  f: o: ErrorInfo) {
    console.error('Error caught by boundar,
  y:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="text-6xl mb-4">⚠️</div>
              <h1 className="text-3xl font-bold mb-4">Something went wrong</h1>
              <p className="text-gray-300 mb-6">
                We're sorry, but something unexpected happened.
              </p>
            </div>
            <button;
              onClick={() => window.location.reload()}
              className="bg-blue-600,
  hove: r:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Reload Page;
            </button>
          </div>
        </div>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;