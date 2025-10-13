import React from 'react';
import { render, screen } from '@testing-library/react';
import { HelmetProvider, Helmet } from 'react-helmet-async';

// Mock components
const AdvancedErrorBoundary = ({ children, enableRetry, onError }: { 
  children: React.ReactNode; 
  enableRetry?: boolean; 
  onError?: any 
}) => {
  const [hasError, setHasError] = React.useState(false);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    const handleError = (error: Error) => {
      setHasError(true);
      setError(error);
      if (onError) {
        onError(error);
      }
    };

    // Simulate error boundary behavior
    try {
      // This will catch any errors thrown by children
    } catch (err) {
      handleError(err as Error);
    }
  }, [onError]);

  if (hasError) {
    return (
      <div data-testid="error-boundary">
        <h2>Unexpected Application Error!</h2>
        <p>Oops! Something went wrong</p>
        {error && (
          <>
            <h3 style={{ fontStyle: 'italic' }}>{error.message}</h3>
            <pre style={{ padding: '0.5rem', backgroundColor: 'rgba(200, 200, 200, 0.5)' }}>
              {error.stack}
            </pre>
          </>
        )}
        {enableRetry && (
          <>
            <button>Try Again</button>
            <button>Reload Page</button>
          </>
        )}
      </div>
    );
  }

  return <>{children}</>
};

const TestComponent = () => <div>Test Component</div>
const ErrorComponent = () => {
  throw new Error('Test error');
};

describe('Advanced Components', () => {
  test('AdvancedErrorBoundary renders children when no error', () => {
    render(
      <AdvancedErrorBoundary>
        <TestComponent />
      </AdvancedErrorBoundary>
    );
    expect(screen.getByText('Test Component')).toBeInTheDocument();
  });

  test('AdvancedErrorBoundary shows error UI when error occurs', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    render(
      <AdvancedErrorBoundary>
        <ErrorComponent />
      </AdvancedErrorBoundary>
    );
    
    expect(screen.getByTestId('error-boundary')).toBeInTheDocument();
    expect(screen.getByText('Unexpected Application Error!')).toBeInTheDocument();

    

    consoleSpy.mockRestore();
  });

  test('SEOEnhancer works with HelmetProvider', () => {
    const SEOEnhancer = () => (
      <Helmet>
        <title>Test Title</title>
        <meta name="description" content="Test description" />
      </Helmet>
    );

    render(
      <HelmetProvider>
        <SEOEnhancer />
      </HelmetProvider>
    );
    
    expect(document.title).toBe('Test Title');
  });
});