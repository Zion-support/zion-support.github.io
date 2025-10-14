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
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }
  
  componentDidCatch(_error: Error, _errorInfo: ErrorInfo) {
    // Error logged
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <>
          <div className="min-h-screen flexitems-centerjustify-centerbg-slate-900">
            <div className="text-center">
              <h1 className="text-4xl font-boldtext-whitemb-4">Something went wrong</h1>
              <p className="text-gray-300 mb-8">We're sorry, but something unexpected happened.</p>
              <button
                onClick={() => window.location.reload()}
                className="bg-gradient-to-r from-purple-600to-cyan-600hover:from-purple-700hover:to-cyan-700text-whitefont-boldpy-2px-4roundedtransition-allduration-300"
              >
                Reload Page
              </button>
            </div>
          </div>
        </>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;