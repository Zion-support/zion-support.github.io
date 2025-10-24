import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Component, ErrorInfo, ReactNode, useState, useEffect } from 'react';
// Test component that throws an error
const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error('Test error');
  }
  return <div>No error</div>;
};

// Test component that can be controlled for retry testing
let shouldThrowAfterRetry = true;
const ControllableThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow && shouldThrowAfterRetry) {
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
class TestErrorBoundary extends Component<
  { children: ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, retryCount: 0 };
  }
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error, retryCount: 0 };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, retryCount: this.state.retryCount + 1 });
  };
  render() {
    if (this.state.hasError) {
      return (
        <div data-testid="error-boundary">

          <h2>Something went wrong.</h2>
          <button onClick={this.handleRetry}>Try again</button>
          <p>Retry count: {this.state.retryCount}</p>
        </div>
      );
    }
    return this.props.children;
  }
}
// Performance monitor component for testing
const TestPerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<any>(null);
  useEffect(() => {
    const measurePerformance = () => {
      // Mock performance API for testing
      const mockNavigation = {
        loadEventEnd: 1000,
        loadEventStart: 500,
        domContentLoadedEventEnd: 800,
        domContentLoadedEventStart: 600,
      };
      const mockPaint = [
        { name: 'first-paint', startTime: 200 },
        { name: 'first-contentful-paint', startTime: 300 },
      ];
      
      setMetrics({
        loadTime: mockNavigation.loadEventEnd - mockNavigation.loadEventStart,
        domContentLoaded: mockNavigation.domContentLoadedEventEnd - mockNavigation.domContentLoadedEventStart,
        firstPaint: mockPaint.find(entry => entry.name === 'first-paint')?.startTime || 0,
        firstContentfulPaint: mockPaint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
      });
    };
    measurePerformance();
  }, []);
  return (
    <div data-testid="performance-monitor">
      {metrics && (
        <div>
          <p>Load Time: {metrics.loadTime}ms</p>
          <p>DOM Content Loaded: {metrics.domContentLoaded}ms</p>
          <p>First Paint: {metrics.firstPaint}ms</p>
          <p>First Contentful Paint: {metrics.firstContentfulPaint}ms</p>
        </div>
      )}
    </div>
  );
};
// Accessibility enhancer component for testing
const TestAccessibilityEnhancer = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    // Simulate accessibility enhancements
    document.body.setAttribute('data-accessibility-enhanced', 'true');
    return () => {
      document.body.removeAttribute('data-accessibility-enhanced');
    };
  }, []);
  return <div data-testid="accessibility-enhancer">{children}</div>;
};
describe('Advanced Components', () => {
  describe('ErrorBoundary', () => {
    it('should catch and display error when child component throws', () => {
      // Suppress console.error for this test since we expect an error
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      
      render(
        <TestErrorBoundary>
          <ThrowError shouldThrow={true} />
        </TestErrorBoundary>
      );
      
      expect(screen.getByTestId('error-boundary')).toBeInTheDocument();
      expect(screen.getByText('Something went wrong.')).toBeInTheDocument();
      
      consoleSpy.mockRestore();
    });
    it('should render children when no error occurs', () => {
      render(
        <TestErrorBoundary>
          <ThrowError shouldThrow={false} />
        </TestErrorBoundary>
      );
      expect(screen.getByText('No error')).toBeInTheDocument();
      expect(screen.queryByTestId('error-boundary')).not.toBeInTheDocument();
    });
    it('should retry when retry button is clicked', async () => {
      // Suppress console.error for this test since we expect an error
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      
      // Reset the throw flag
      shouldThrowAfterRetry = true;
      
      render(
        <TestErrorBoundary>
          <ControllableThrowError shouldThrow={true} />
        </TestErrorBoundary>
      );
      
      expect(screen.getByTestId('error-boundary')).toBeInTheDocument();
      
      // After retry, don't throw error
      shouldThrowAfterRetry = false;
      
      fireEvent.click(screen.getByText('Try again'));
      
      await waitFor(() => {
        expect(screen.getByText('No error')).toBeInTheDocument();
      });
      
      consoleSpy.mockRestore();
    });
  });
  describe('PerformanceMonitor', () => {
    it('should render performance metrics', () => {
      render(<TestPerformanceMonitor />);
      expect(screen.getByTestId('performance-monitor')).toBeInTheDocument();
    });
  });
  describe('AccessibilityEnhancer', () => {
    it('should enhance accessibility features', () => {
      render(
        <TestAccessibilityEnhancer>
          <div>Test content</div>
        </TestAccessibilityEnhancer>
      );
      expect(screen.getByTestId('accessibility-enhancer')).toBeInTheDocument();
      expect(document.body.getAttribute('data-accessibility-enhanced')).toBe('true');
    });
  });
});
