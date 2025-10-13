import React, { Component, ReactNode } from 'react';

interface Props {}
  children: ReactNode;
}

interface State {}
  hasError: boolean;
  error?: Error;
}

export class GlobalErrorBoundary extends Component<Props, State> {}
  constructor(props: Props) {}
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {}
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {}
    console.error('Global Error Boundary caught an error:', error, errorInfo);
  }

  render() {}
    if (this.state.hasError) {}
      return ()
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="text-center p-8">
            <h1 className="text-4xl font-bold text-white mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-8">We're sorry, but something unexpected happened.</p>
            <button)
              onClick={() => window.location.reload()}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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