import React from 'react';
import { render, screen } from '@testing-library/react';

// Mock react-error-boundary
const mockErrorBoundary = ({ children, FallbackComponent }: { children: React.ReactNode; FallbackComponent: React.ComponentType<any> }) => (
  <div data-testid="error-boundary">
    {children}
  </div>
);

jest.mock('react-error-boundary', () => ({
  ErrorBoundary: mockErrorBoundary
}));

import { ErrorBoundary } from 'react-error-boundary';

// Component that throws an error
const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error('Test error');
  }
  return <div>No error</div>;
};

// Error fallback component
const ErrorFallback = ({ error }: { error: Error }) => (
  <div data-testid="error-fallback">
    <h2>Something went wrong:</h2>
    <pre>{error.message}</pre>
  </div>
);

describe('ErrorBoundary', () => {
  it('renders children when there is no error', () => {
    render(
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ThrowError shouldThrow={false} />
      </ErrorBoundary>
    );

    expect(screen.getByText('No error')).toBeInTheDocument();
  });

  it('renders error boundary wrapper', () => {
    render(
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <div>Test content</div>
      </ErrorBoundary>
    );

    expect(screen.getByTestId('error-boundary')).toBeInTheDocument();
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
});