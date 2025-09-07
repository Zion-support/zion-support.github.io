<<<<<<< HEAD
import React, { Component, ReactNode, ErrorInfo } from 'react';''
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';'
=======
<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from 'react';
=======
import React, { Component, ReactNode, ErrorInfo } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-f9ca

>>>>>>> a2c6a2cc86d6e83a9083c45bfcf5a35f741b3208
interface Props {
  // TODO: Implement
}
  children: ReactNode;
}

interface State {
  // TODO: Implement
}
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
<<<<<<< HEAD
</Props>'
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">"
</div>"
          <div className="max-w-md w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">"
</div>"
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 dark:bg-red-900 rounded-full mb-4">"
</div>"
              <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />"
</AlertTriangle>
=======
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

<<<<<<< HEAD
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
=======
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-f9ca
  }

  public render() {
    if (this.state.hasError) {
      return (
<<<<<<< HEAD
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="max-w-md w-full text-center">
            <div className="bg-card p-8 rounded-lg border">
              <h1 className="text-2xl font-bold text-foreground mb-4">
                Oops! Something went wrong
              </h1>
              <p className="text-foreground/70 mb-6">
                We're sorry, but something unexpected happened. Please try refreshing the page.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Refresh Page
              </button>
=======
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
          <div className="max-w-md w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 dark:bg-red-900 rounded-full mb-4">
              <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
>>>>>>> a2c6a2cc86d6e83a9083c45bfcf5a35f741b3208
            </div>
"
            <div className="text-center">"
</div>"
              <h1 className="text-lg font-medium text-gray-900 dark:text-white mb-2">"
</h1>
              </h1>"
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">"
</p>
              </p>
"
              <div className="space-y-3">"
</div>
                <button;
                  onClick={() => window.location.reload()}
</button>"
                  <RefreshCw className="w-4 h-4 mr-2" />"
</RefreshCw>
                </button>

                <button;"
                  onClick={() => window.location.href = '/'}'
</button>'
                  <Home className="w-4 h-4 mr-2" />"
</Home>
                </button>
              </div>"
                <details className="mt-6 text-left">"
</details>"
                  <summary className="text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer">"
</summary>
                  </summary>"
                  <div className="mt-2 p-3 bg-gray-100 dark:bg-gray-700 rounded-md">"
</div>"
                    <pre className="text-xs text-red-600 dark:text-red-400 whitespace-pre-wrap">"
</pre>
                    </pre>
                  </div>
                </details>
<<<<<<< HEAD
=======
              )}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-f9ca
>>>>>>> a2c6a2cc86d6e83a9083c45bfcf5a35f741b3208
            </div>
          </div>
        </div>"