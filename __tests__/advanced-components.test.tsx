import React from 'react';
import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';

// Mock components for testing
const TestComponent = () => <div>Test content</div>;

// Error Boundary Component
interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  retryCount: number;
}

class ErrorBoundary extends React.Component<
  { children: React.ReactNode; onError?: (error: Error) => void },
  ErrorBoundaryState
> {
  constructor(props: { children: React.ReactNode; onError?: (error: Error) => void }) {
    super(props);
    this.state = { hasError: false, retryCount: 0 };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error, retryCount: 0 };
  }

  componentDidCatch(error: Error, _errorInfo: React.ErrorInfo) {
    this.props.onError?.(error);
  }

  handleRetry = () => {
    if (this.state.retryCount < 3) {
      this.setState({ hasError: false, retryCount: this.state.retryCount + 1 });
    }
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Something went wrong.</h2>
          <button onClick={this.handleRetry}>Try again</button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Test wrapper component
const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <HelmetProvider>
    <MemoryRouter>
      {children}
    </MemoryRouter>
  </HelmetProvider>
);

describe('Advanced Components', () => {
  test('renders test component', () => {
    render(
      <TestWrapper>
        <TestComponent />
      </TestWrapper>
    );
    
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  test('error boundary catches errors', () => {
    const ThrowError = () => {
      throw new Error('Test error');
    };

    render(
      <TestWrapper>
        <ErrorBoundary>
          <ThrowError />
        </ErrorBoundary>
      </TestWrapper>
    );

    expect(screen.getByText('Something went wrong.')).toBeInTheDocument();
  });

  test('error boundary retry functionality', () => {
    const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
      if (shouldThrow) {
        throw new Error('Test error');
      }
      return <div>No error</div>;
    };

    const { rerender } = render(
      <TestWrapper>
        <ErrorBoundary>
          <ThrowError shouldThrow={true} />
        </ErrorBoundary>
      </TestWrapper>
    );

    expect(screen.getByText('Something went wrong.')).toBeInTheDocument();

    // Test retry button
    const retryButton = screen.getByText('Try again');
    retryButton.click();

    // Rerender with no error
    rerender(
      <TestWrapper>
        <ErrorBoundary>
          <ThrowError shouldThrow={false} />
        </ErrorBoundary>
      </TestWrapper>
    );

    expect(screen.getByText('No error')).toBeInTheDocument();
  });
});