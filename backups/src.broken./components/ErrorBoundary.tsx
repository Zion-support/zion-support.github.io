import React, { useState, useEffect } from 'react';
interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
interface ErrorFallbackProps {
  error?: Error;
  resetError: () => void;
    );
  }

  return <>{children}</>;
}

// Hook for functional components to handle errors
export function useErrorHandler() {
  const [error, setError] = useState<Error | null>(null);

  const handleError = React.useCallback((error: Error) => {
    setError(error);
  const clearError = React.useCallback(() => {
    setError(null);
  }, []);

  return { error, handleError, clearError };
// Higher-order component for wrapping components with error handling
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Omit<ErrorBoundaryProps, 'children'>
) {
  return function WithErrorBoundary(props: P) {
    return (
      <ErrorBoundary {...errorBoundaryProps}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
}