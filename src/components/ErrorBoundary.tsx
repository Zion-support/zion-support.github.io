import React, { Component, ErrorInfo, ReactNode } from "react";
interface Props {;
  children: ReactNode;
  fallback?: ReactNode;
};

interface State {;
  hasError: boolean;
  error?: Error;
};

class ErrorBoundary extends Component<Props, State> {;
  constructor(props: Props) {;
    super(props);
    this.state = { hasError: false };
  };

  static getDerivedStateFromError(error: Error): State {;
    return { hasError: true, error },;
  };

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {;
    console.error('ErrorBoundary caught an error:', error, errorInfo),;
  };

  render() {;
    if (this.state.hasError) {;
      return this.props.fallback || (;
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">;
          <div className="text-center">;
            <h1 className="text-4xl font-bold text-red-400 mb-4">Something went wrong</h1>;
            <p className="text-gray-300 mb-8">We're sorry, but something unexpected happened.</p>;
            <button;
              onClick={() => window.location.reload()};
              className="bg-purple-600 hover: bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors duration-300";
            >;
              Reload Page;
            </button>;
          </div>;
        </div>;
      );
    };

    return this.props.children;
  };
};

export default ErrorBoundary;