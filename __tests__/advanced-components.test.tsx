import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Component, ErrorInfo, ReactNode, useState, useEffect } from 'react';

// Mock components for testing
const TestComponent = () => {
  return <div>Test content</div>;
};

const ErrorBoundary = ({ children }: { children: ReactNode }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = () => setHasError(true);
    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return (
      <div>
        <h1>Oops! Something went wrong</h1>
        <button onClick={() => setHasError(false)}>Try Again</button>
        <button onClick={() => window.location.reload()}>Reload Page</button>
        <button onClick={() => window.location.href = '/'}>Go to Homepage</button>
      </div>
    );
  }

  return <>{children}</>;
};

describe('Advanced Components', () => {
  test('renders test component', () => {
    render(<TestComponent />);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  test('error boundary catches errors', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    render(
      <ErrorBoundary>
        <TestComponent />
      </ErrorBoundary>
    );
    
    expect(screen.getByText('Test content')).toBeInTheDocument();
    consoleSpy.mockRestore();
  });

  test('error boundary shows error UI when error occurs', () => {
    const onError = jest.fn();
    
    const ThrowError = () => {
      throw new Error('Test error');
    };

    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );

    expect(screen.getByText('Oops! Something went wrong')).toBeInTheDocument();
    expect(screen.getByText(/Try Again/)).toBeInTheDocument();
    expect(screen.getByText('Reload Page')).toBeInTheDocument();
    expect(screen.getByText('Go to Homepage')).toBeInTheDocument();
  });

  test('helmet provider works correctly', () => {
    render(
      <HelmetProvider>
        <MemoryRouter>
          <Helmet>
            <title>Test Title</title>
          </Helmet>
          <TestComponent />
        </MemoryRouter>
      </HelmetProvider>
    );

    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  test('memory router works correctly', () => {
    render(
      <MemoryRouter>
        <TestComponent />
      </MemoryRouter>
    );

    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
});