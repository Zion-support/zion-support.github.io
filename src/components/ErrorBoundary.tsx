import React, { Component, ErrorInfo, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, info: ErrorInfo) => void;
};

type State = {
  hasError: boolean;
};

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    if (this.props.onError) {
      try { this.props.onError(error, info); } catch {}
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div style={{ padding: 24, color: '#fff', background: '#0b1220' }}>
          <h2>Something went wrong.</h2>
          <a href="/" style={{ color: '#67e8f9' }}>Go home</a>
        </div>
      );
    }
    return this.props.children;
  }
}

export function withErrorBoundary<P>(Component: React.ComponentType<P>, fallback: ReactNode = null) {
  return function Wrapped(props: P) {
    return (
      <ErrorBoundary fallback={fallback}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
}

export function useErrorHandler() {
  const [error, setError] = React.useState<Error | null>(null);
  const handleError = React.useCallback((e: Error) => setError(e), []);
  const clearError = React.useCallback(() => setError(null), []);
  return { error, handleError, clearError };
}
