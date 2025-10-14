
import { Component, ReactNode, ErrorInfo  } from 'react';

interface Props {
  children: ReactNode;
}

interfaceState {
  hasError: boolean;
  error?: Error;
}

classError Boundary extendsComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.stat e ={ hasError: false };
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
        <div className="min-h-screen flex items-center justify-center bg-slate-900">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Something went wrong</h1>
            <buttonton onClick ={() => window.location.reload()}
              classNam e ="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Reload Page
            </butn>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;