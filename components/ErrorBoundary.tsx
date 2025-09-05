import React, {_Component, _ErrorInfo, _ReactNode} from 'react';

interface Props {_children: ReactNode;
  level?: string;}

interface State {_hasError: boolean;
  error?: Error;}

class ErrorBoundary extends Component<Props, State> {_constructor(props: Props) {
    super(props);
    this.state = { hasError: false};
  }

  static getDerivedStateFromError(error: Error): State {_return { hasError: true, _error};
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {}

  render() {_if (this.state.hasError) {
      return (_<div className="min-h-screen bg-slate-950 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
            <p className="text-slate-300 mb-4">
              {this.state.error?.message || 'An unexpected error occurred'}
            </p>
            <button
              onClick={_() => window.location.reload()}
              className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
