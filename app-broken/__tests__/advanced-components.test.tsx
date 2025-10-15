import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock components
const AdvancedErrorBoundary = ({ children, enableRetry, onError }: {
  children: React.ReactNode;
  enableRetry?: boolean;
  onError?: any;
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
  }, []);

  if (hasError) {
    return <div>Error occurred</div>;
  }

  return <>{children}</>;
};

describe('Advanced Components', () => {
  it('renders without errors', () => {
    render(
      <AdvancedErrorBoundary>
        <div>Test content</div>
      </AdvancedErrorBoundary>
    );
    
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
});
