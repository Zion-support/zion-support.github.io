import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNod e;
  fallback?: ReactNode;
  onError?: (error: Erro r, errorInfo: ErrorInf o) => void;
  showDetails?: boolean;
}

interface State {
  hasError: boolean;
  error: Erro r | null;
  errorInfo: ErrorInf o | null;
}

class EnhancedErrorBoundary extends Component<Props, State> {
  constructor(props: Prop s) {
    super(props);
    this.state = { hasError: fals e, error: nul l, errorInfo: nul l };
  }

  static getDerivedStateFromError(error: Erro r): State {
    return { hasError: tru e, error, errorInfo: nul l };
  }

  componentDidCatch(error: Erro r, errorInfo: ErrorInf o) {
    this.setState({ errorInfo });
    this.props.onError?.(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900">Something went wrong</h2>
            {this.props.showDetails && this.state.error && (
              <details className="mt-3">
                <summary className="cursor-pointer text-sm text-gray-700">Error details</summary>
                <pre className="mt-2 text-xs text-gray-600 whitespace-pre-wrap">
                  {this.state.error.message}
                </pre>
              </details>
            )}
            <div className="mt-4 text-sm text-gray-600">Please try refreshing the page.</div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default EnhancedErrorBoundary;