<<<<<<< HEAD
<<<<<<< HEAD
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

export default ErrorBoundary;
=======
import React from 'react';
export default function ErrorBoundaryFallback ({;

;
  error,;
  resetError,;
  retryCount = 0,;
}) {;
  const maxRetries = 3;
  const handleRetry = () => {;
    if (retryCount < maxRetries) {;
      resetError () ;
    };
  };
  return (;
    <div className="max - w-xl mx - auto p - 6 text - white">";
      <h2 className="text - 2xl font - bold mb - 2">Something went wrong</h2>;
      {error && (";
        <pre className="text - red - 300 whitespace - pre - wrap text - sm mb - 4">;
          {String (error) };
        </pre>;) }";
      <button onClick={handleRetry} className="px - 4 py - 2 bg - blue - 600 rounded">;
        Retry;
      </button>;
    </div>;) ;
};
";
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-99d1
=======
function ErrorFallback({ error, resetError, retryCount = 0 }) { const navigate = useNavigate(); const maxRetries = 3; const handleRetry = () => { if(retryCount < maxRetries) { resetError(); } else {
>>>>>>> origin/cursor/website-audit-content-update-and-deployment-23ff
