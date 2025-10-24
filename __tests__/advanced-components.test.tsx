import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Component, ErrorInfo, ReactNode, useState, useEffect } from 'react';

// Test component that throws an error
const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error('Test error');
  }
  return <div>No error</div>;
};

// Error boundary component for testing
interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  retryCount: number;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  onError?: (error: Error) => void;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: { children: ReactNode; onError?: (error: Error) => void }) {
    super(props);
    this.state = { hasError: false, retryCount: 0 };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error, retryCount: 0 };
  }

  componentDidCatch(error: Error, _errorInfo: ErrorInfo) {
    this.props.onError?.(error);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, retryCount: this.state.retryCount + 1 });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <button onClick={this.handleRetry}>Retry</button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Performance monitoring component for testing
const PerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({
    renderTime: 0,
    memoryUsage: 0,
    componentCount: 0
  });

  useEffect(() => {
    const startTime = performance.now();
    
    // Simulate performance monitoring
    const interval = setInterval(() => {
      setMetrics(prev => ({
        renderTime: performance.now() - startTime,
        memoryUsage: (performance as any).memory?.usedJSHeapSize || 0,
        componentCount: prev.componentCount + 1
      }));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div data-testid="performance-metrics">
      <div>Render Time: {metrics.renderTime.toFixed(2)}ms</div>
      <div>Memory Usage: {(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB</div>
      <div>Component Count: {metrics.componentCount}</div>
    </div>
  );
};

// Accessibility wrapper component for testing
const AccessibilityWrapper = ({ children }: { children: ReactNode }) => {
  const [announcements, setAnnouncements] = useState<string[]>([]);

  const announce = (message: string) => {
    setAnnouncements(prev => [...prev, message]);
  };

  return (
    <div>
      <div role="status" aria-live="polite" aria-atomic="true">
        {announcements.map((announcement, index) => (
          <div key={index}>{announcement}</div>
        ))}
      </div>
      {children}
    </div>
  );
};

describe('Advanced Components', () => {
  test('ErrorBoundary catches and displays errors', async () => {
    const onError = jest.fn();
    
    render(
      <ErrorBoundary onError={onError}>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText('Something went wrong.')).toBeInTheDocument();
    expect(onError).toHaveBeenCalledWith(expect.any(Error));
  });

  test('ErrorBoundary allows retry after error', async () => {
    const onError = jest.fn();
    
    const { rerender } = render(
      <ErrorBoundary onError={onError}>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText('Something went wrong.')).toBeInTheDocument();
    
    fireEvent.click(screen.getByText('Retry'));
    
    rerender(
      <ErrorBoundary onError={onError}>
        <ThrowError shouldThrow={false} />
      </ErrorBoundary>
    );

    expect(screen.getByText('No error')).toBeInTheDocument();
  });

  test('PerformanceMonitor tracks metrics', async () => {
    render(<PerformanceMonitor />);
    
    await waitFor(() => {
      expect(screen.getByTestId('performance-metrics')).toBeInTheDocument();
    });

    expect(screen.getByText(/Render Time:/)).toBeInTheDocument();
    expect(screen.getByText(/Memory Usage:/)).toBeInTheDocument();
    expect(screen.getByText(/Component Count:/)).toBeInTheDocument();
  });

  test('AccessibilityWrapper provides announcements', () => {
    render(
      <AccessibilityWrapper>
        <div>Test content</div>
      </AccessibilityWrapper>
    );

    expect(screen.getByRole('status')).toBeInTheDocument();
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  test('HelmetProvider works correctly', () => {
    render(
      <HelmetProvider>
        <Helmet>
          <title>Test Title</title>
        </Helmet>
        <div>Test content</div>
      </HelmetProvider>
    );

    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  test('MemoryRouter provides routing context', () => {
    render(
      <MemoryRouter initialEntries={['/test']}>
        <div>Test content</div>
      </MemoryRouter>
    );

    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
});