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
        <div className="error-boundary">
          <h2>Something went wrong.</h2>
          <button onClick={this.handleRetry}>Try again</button>
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
    componentCount: 0
  });

  useEffect(() => {
    const startTime = performance.now();
    
    const measurePerformance = () => {
      const endTime = performance.now();
      setMetrics(prev => ({
        ...prev,
        renderTime: endTime - startTime,
        memoryUsage: (performance as any).memory?.usedJSHeapSize || 0,
        componentCount: document.querySelectorAll('*').length
      }));
    };

    const timer = setTimeout(measurePerformance, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="performance-monitor">
      <h3>Performance Metrics</h3>
      <p>Render Time: {metrics.renderTime.toFixed(2)}ms</p>
      <p>Memory Usage: {(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB</p>
      <p>Component Count: {metrics.componentCount}</p>
    </div>
  );
};

// Accessibility Enhancer Component
const AccessibilityEnhancer = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    // Add ARIA labels to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');
    interactiveElements.forEach((element, index) => {
      if (!element.getAttribute('aria-label') && !element.textContent?.trim()) {
        element.setAttribute('aria-label', `Interactive element ${index + 1}`);
      }
    });

    // Ensure proper focus management
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements.length > 0) {
      (focusableElements[0] as HTMLElement).focus();
    }
  }, []);

  return <>{children}</>;
};

// Test wrapper component
const TestWrapper = ({ children }: { children: ReactNode }) => (
  <HelmetProvider>
    <MemoryRouter>
      {children}
    </MemoryRouter>
  </HelmetProvider>
);

describe('Advanced Components', () => {
  describe('ErrorBoundary', () => {
    it('renders children when there is no error', () => {
      render(
        <TestWrapper>
          <ErrorBoundary>
            <TestComponent />
          </ErrorBoundary>
        </TestWrapper>
      );
      
      expect(screen.getByText('Test content')).toBeInTheDocument();
    });

    it('renders error UI when child throws error', () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      
      render(
        <TestWrapper>
          <ErrorBoundary>
            <ThrowError shouldThrow={true} />
          </ErrorBoundary>
        </TestWrapper>
      );
      
      expect(screen.getByText('Something went wrong.')).toBeInTheDocument();
      expect(screen.getByText('Try again')).toBeInTheDocument();
      
      consoleSpy.mockRestore();
    });

    it('calls onError callback when error occurs', () => {
      const onError = jest.fn();
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      
      render(
        <TestWrapper>
          <ErrorBoundary onError={onError}>
            <ThrowError shouldThrow={true} />
          </ErrorBoundary>
        </TestWrapper>
      );
      
      expect(onError).toHaveBeenCalledWith(expect.any(Error));
      
      consoleSpy.mockRestore();
    });

    it('retries on button click', () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      
      render(
        <TestWrapper>
          <ErrorBoundary>
            <ThrowError shouldThrow={true} />
          </ErrorBoundary>
        </TestWrapper>
      );
      
      const retryButton = screen.getByText('Try again');
      fireEvent.click(retryButton);
      
      // Should still show error since ThrowError still throws
      expect(screen.getByText('Something went wrong.')).toBeInTheDocument();
      
      consoleSpy.mockRestore();
    });
  });

  describe('PerformanceMonitor', () => {
    it('renders performance metrics', async () => {
      render(
        <TestWrapper>
          <PerformanceMonitor />
        </TestWrapper>
      );
      
      await waitFor(() => {
        expect(screen.getByText('Performance Metrics')).toBeInTheDocument();
        expect(screen.getByText(/Render Time:/)).toBeInTheDocument();
        expect(screen.getByText(/Memory Usage:/)).toBeInTheDocument();
        expect(screen.getByText(/Component Count:/)).toBeInTheDocument();
      });
    });
  });

  describe('AccessibilityEnhancer', () => {
    it('enhances accessibility of child components', () => {
      render(
        <TestWrapper>
          <AccessibilityEnhancer>
            <div>
              <button>Test Button</button>
              <a href="/test">Test Link</a>
            </div>
          </AccessibilityEnhancer>
        </TestWrapper>
      );
      
      const button = screen.getByRole('button');
      const link = screen.getByRole('link');
      
      expect(button).toBeInTheDocument();
      expect(link).toBeInTheDocument();
    });
  });

  describe('Helmet Integration', () => {
    it('updates document title', () => {
      render(
        <TestWrapper>
          <Helmet>
            <title>Test Page Title</title>
            <meta name="description" content="Test page description" />
          </Helmet>
        </TestWrapper>
      );
      
      expect(document.title).toBe('Test Page Title');
    });
  });
});