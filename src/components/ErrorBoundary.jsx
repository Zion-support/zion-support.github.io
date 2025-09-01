import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
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

export function withErrorBoundary(Component, fallback = null) {
  return function Wrapped(props) {
    return (
      <ErrorBoundary fallback={fallback}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
}

export function useErrorHandler() {
  const [error, setError] = React.useState(null);
  const handleError = React.useCallback((e) => setError(e), []);
  const clearError = React.useCallback(() => setError(null), []);
  return { error, handleError, clearError };
}
