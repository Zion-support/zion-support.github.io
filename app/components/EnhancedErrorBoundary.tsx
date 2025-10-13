import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class EnhancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by EnhancedErrorBoundary:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={this.handleReset}
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                Try Again
              </button>
              <button
                onClick={() => window.location.href = '/'}
                className="flex items-center justify-center gap-2 border border-gray-600 text-gray-300 hover:text-white hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors"
              >
                <Home className="w-4 h-4" />
                Go Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
=======
'use client'';
import React, { Component, ErrorInfo, ReactNode } from 'react';'

  children: ReactNode;
}

interface State {
  // TODO: Add properties
}
  // TODO: Add properties
}
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  // TODO: Add properties
}
  // TODO: Add properties
}
  constructor(props: Props) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
  // TODO: Add properties
}
  // TODO: Add properties
}
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error('Error caught by boundary:', error, errorInfo);'
    }

    // Log error to external service in production
    if (process.env.NODE_ENV === 'production') {'
      // You can integrate with error reporting services like Sentry here
      console.error('ErrorBoundary caught an error:', error, errorInfo)'
    }
>>>>>>> origin/main
  }

export default EnhancedErrorBoundary;
