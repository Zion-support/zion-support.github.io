
import { Component, ReactNode, ErrorInfo } from 'react';

interfaceProps {
  children: ReactNode;
}

interfaceState {
  hasError: boolean;
  error?: Error;
}

classError Boundary extendsComponent<Props, State> {
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
        <div className="m in-h-screen flex items-center justify-center bg-slate-900">
          <div className="t ext-center">
            <h1 className="t ext-4xl font-bold text-white mb-4">Something went wrong</h1>
            <button 
              onClick={() => window.location.reload()}
              className="p x-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
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