import React, { Component, ErrorInfo, ReactNode } from 'react';

interface FallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

interface State {
  hasError: boolean;
  error?: Error;
}

function GlobalErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  let specificMessage = "Please try again. If the problem continues, please contact support.";
  const errorMessage = error?.message?.toLowerCase() || "";

  if (
    errorMessage.includes("nextrouter was not mounted") ||
    errorMessage.includes("router context") ||
    errorMessage.includes("could not find router")
  ) {
    specificMessage = "It looks like there's an issue with loading this page's content or navigation setup. " + specificMessage;
  }

  const displayErrorId = React.useMemo(() => Date.now().toString(36) + Math.random().toString(36).substring(2), []);

  return (
    <div role="alert" className="p-6 m-4 border border-red-300 rounded-md bg-red-50 text-center space-y-4">
      <h2 className="text-xl font-semibold text-red-700">Oops! Something went wrong.</h2>
      <p className="text-red-600">{specificMessage}</p>
      {error?.message && (
        <details className="p-2 bg-red-100 rounded text-left text-sm">
          <summary className="cursor-pointer text-red-500 font-medium">Error Details</summary>
          <pre className="mt-2 text-red-500 whitespace-pre-wrap break-all">
            {error.message}
          </pre>
        </details>
      )}
      <button
        onClick={resetErrorBoundary}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        Try again
      </button>
      <p className="text-xs text-gray-500">Error ID: {displayErrorId}</p>
    </div>
  );
}

// Simple logging function
const logError = (error: Error, context?: any) => {
  console.error('Error logged:', error, context);
};

// Simple snackbar function
const getEnqueueSnackbar = () => {
  return (message: string, options?: any) => {
    console.log('Snackbar:', message, options);
  };
};

export class GlobalErrorBoundary extends Component<{ children: ReactNode }, State> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('GlobalErrorBoundary caught an error:', error, errorInfo);
    
    const errorId = Date.now().toString(36) + Math.random().toString(36).substring(2);
    
    logError(error, {
      route: typeof window !== 'undefined' ? window.location.pathname : 'Unknown route (SSR/SSG)',
      componentStack: errorInfo.componentStack,
      errorId: errorId
    });

    try {
      const enqueueSnackbar = getEnqueueSnackbar();
      let displayMessage = error.message || "An unexpected error occurred.";
      if (error.message.includes("cannot read properties of null") || error.message.includes("cannot read property")) {
        displayMessage = "A critical component failed to initialize. This might be due to a configuration issue or network problem. Please try refreshing. If the problem persists, contact support.";
      } else if (error.message.includes("network error")) {
        displayMessage = "A network error occurred. Please check your internet connection and try again.";
      }
      enqueueSnackbar(displayMessage, { variant: 'error' });
    } catch (e) {
      console.error("Error in enqueueSnackbar:", e);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <GlobalErrorFallback
          error={this.state.error!}
          resetErrorBoundary={() => this.setState({ hasError: false, error: undefined })}
        />
      );
    }

    return this.props.children;
  }
}