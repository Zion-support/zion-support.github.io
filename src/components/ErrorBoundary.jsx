import React from
  'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
    this.resetErrorBoundary = this.resetErrorBoundary.bind(this);
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    if (typeof window !== 'undefined' && window.console) {
      console.error('ErrorBoundary caught an error', error, errorInfo);
    }
  }

  resetErrorBoundary() {
    this.setState({ hasError: false, error: null });
    if (typeof this.props.onReset === 'function') {
      this.props.onReset();
    }
  }

  render() {
    const { hasError, error } = this.state;
    const { children, fallback } = this.props;

    if (hasError) {
      if (React.isValidElement(fallback)) {
        return React.cloneElement(fallback, {
          error: error || new Error('Unknown error'), resetErrorBoundary: this.resetErrorBoundary,
        });
      }
      return fallback || null;
    }

    return children;
  }
}

export function ErrorFallback({ error, resetErrorBoundary, retryCount = 0 }) {
  const maxRetries = 3;
  const handleRetry = () => {
    if (retryCount < maxRetries && typeof resetErrorBoundary === 'function') {
      resetErrorBoundary();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <div role="alert" style={{ padding: 16 }}>
      <p>Something went wrong:</p>
      <pre style={{ whiteSpace: 'pre-wrap' }}>{String(error?.message || error)}</pre>
      <button onClick={handleRetry}>Try again</button>
    </div>
  );
}

export default ErrorBoundary;function ErrorFallback({ error, resetError, retryCount = 0 }) { const navigate = useNavigate(); const maxRetries = 3; const handleRetry = () => { if(retryCount < maxRetries) { resetError(); } else {
