import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Component, ErrorInfo, ReactNode, useState, useEffect } from 'react';

// Mock components for testing
const TestComponent = () => <div>Test content</div>;
const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error('Test error');
  }
  return <div>No error</div>;
};

// Error Boundary Component
interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  retryCount: number;
}

class ErrorBoundary extends Component<
  { children: ReactNode; onError?: (error: Error) => void },
  ErrorBoundaryState
> {
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
    if (this.state.retryCount < 3) {
      this.setState({ hasError: false, retryCount: this.state.retryCount + 1 });
    }
  };

  render() {
    if (this.state.hasError) {
      return (
        <div data-testid="error-boundary">
          <h2>Something went wrong.</h2>
          <button onClick={this.handleRetry}>Retry</button>
        </div>
      );
    }
    return this.props.children;
  }
}

// Performance Monitor Component
const PerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({
    renderTime: 0,
    memoryUsage: 0,
    errorCount: 0
  });

  useEffect(() => {
    const startTime = performance.now();
    const measurePerformance = () => {
      const endTime = performance.now();
      setMetrics(prev => ({
        ...prev,
        renderTime: endTime - startTime
      }));
    };
    measurePerformance();
  }, []);

  return (
    <div data-testid="performance-monitor">
      <div>Render Time: {metrics.renderTime.toFixed(2)}ms</div>
      <div>Memory Usage: {metrics.memoryUsage}MB</div>
      <div>Error Count: {metrics.errorCount}</div>
    </div>
  );
};

// Accessibility Enhancer Component
const AccessibilityEnhancer = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    // Add accessibility enhancements
    document.body.setAttribute('data-enhanced', 'true');
    
    return () => {
      document.body.removeAttribute('data-enhanced');
    };
  }, []);

  return <div data-testid="accessibility-enhancer">{children}</div>;
};

// SEO Optimizer Component
const SEOOptimizer = ({ title, description }: { title: string; description: string }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
};

// Tests
describe('Advanced Components', () => {
  describe('ErrorBoundary', () => {
    it('should catch errors and display error UI', () => {
      const onError = jest.fn();
      render(
        <ErrorBoundary onError={onError}>
          <ThrowError shouldThrow={true} />
        </ErrorBoundary>
      );

      expect(screen.getByTestId('error-boundary')).toBeInTheDocument();
      expect(screen.getByText('Something went wrong.')).toBeInTheDocument();
      expect(onError).toHaveBeenCalledWith(expect.any(Error));
    });

    it('should render children when no error occurs', () => {
      render(
        <ErrorBoundary>
          <TestComponent />
        </ErrorBoundary>
      );

      expect(screen.getByText('Test content')).toBeInTheDocument();
      expect(screen.queryByTestId('error-boundary')).not.toBeInTheDocument();
    });

    it('should retry on button click', () => {
      render(
        <ErrorBoundary>
          <ThrowError shouldThrow={true} />
        </ErrorBoundary>
      );

      expect(screen.getByTestId('error-boundary')).toBeInTheDocument();
      fireEvent.click(screen.getByText('Retry'));

      // After retry, the error boundary should reset
      expect(screen.queryByTestId('error-boundary')).not.toBeInTheDocument();
    });
  });

  describe('PerformanceMonitor', () => {
    it('should render performance metrics', () => {
      render(<PerformanceMonitor />);
      
      expect(screen.getByTestId('performance-monitor')).toBeInTheDocument();
      expect(screen.getByText(/Render Time:/)).toBeInTheDocument();
      expect(screen.getByText(/Memory Usage:/)).toBeInTheDocument();
      expect(screen.getByText(/Error Count:/)).toBeInTheDocument();
    });
  });

  describe('AccessibilityEnhancer', () => {
    it('should enhance accessibility', () => {
      render(
        <AccessibilityEnhancer>
          <div>Test content</div>
        </AccessibilityEnhancer>
      );

      expect(screen.getByTestId('accessibility-enhancer')).toBeInTheDocument();
      expect(document.body.getAttribute('data-enhanced')).toBe('true');
    });

    it('should clean up on unmount', () => {
      const { unmount } = render(
        <AccessibilityEnhancer>
          <div>Test content</div>
        </AccessibilityEnhancer>
      );

      expect(document.body.getAttribute('data-enhanced')).toBe('true');
      
      unmount();
      expect(document.body.getAttribute('data-enhanced')).toBeNull();
    });
  });

  describe('SEOOptimizer', () => {
    it('should set meta tags', () => {
      render(
        <HelmetProvider>
          <SEOOptimizer 
            title="Test Title" 
            description="Test Description"
          />
        </HelmetProvider>
      );

      expect(document.title).toBe('Test Title');
      
      const metaDescription = document.querySelector('meta[name="description"]');
      expect(metaDescription).toHaveAttribute('content', 'Test Description');
    });
  });

  describe('Integration Tests', () => {
    it('should work with all components together', () => {
      const onError = jest.fn();
      render(
        <HelmetProvider>
          <MemoryRouter>
            <ErrorBoundary onError={onError}>
              <AccessibilityEnhancer>
                <PerformanceMonitor />
                <SEOOptimizer 
                  title="Integration Test" 
                  description="Testing all components together"
                />
                <TestComponent />
              </AccessibilityEnhancer>
            </ErrorBoundary>
          </MemoryRouter>
        </HelmetProvider>
      );

      expect(screen.getByText('Test content')).toBeInTheDocument();
      expect(screen.getByTestId('performance-monitor')).toBeInTheDocument();
      expect(screen.getByTestId('accessibility-enhancer')).toBeInTheDocument();
      expect(document.title).toBe('Integration Test');
    });
  });
});