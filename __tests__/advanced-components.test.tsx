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
        <div>
          <h2>Something went wrong.</h2>
          <button onClick={this.handleRetry}>Retry</button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Performance Monitor Component
const PerformanceMonitor = ({ onPerformanceData }: { onPerformanceData: (data: any) => void }) => {
  useEffect(() => {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      onPerformanceData(entries);
    });
    
    observer.observe({ entryTypes: ['measure', 'navigation'] });
    
    return () => observer.disconnect();
  }, [onPerformanceData]);

  return null;
};

// Accessibility Enhancer Component
const AccessibilityEnhancer = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    // Add accessibility enhancements
    const focusableElements = document.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    focusableElements.forEach((element) => {
      element.setAttribute('tabindex', '0');
    });
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
      expect(screen.getByText('Retry')).toBeInTheDocument();
      
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

    it('retries when retry button is clicked', () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      
      render(
        <TestWrapper>
          <ErrorBoundary>
            <ThrowError shouldThrow={true} />
          </ErrorBoundary>
        </TestWrapper>
      );
      
      expect(screen.getByText('Something went wrong.')).toBeInTheDocument();
      
      fireEvent.click(screen.getByText('Retry'));
      
      expect(screen.getByText('No error')).toBeInTheDocument();
      
      consoleSpy.mockRestore();
    });
  });

  describe('PerformanceMonitor', () => {
    it('calls onPerformanceData with performance entries', async () => {
      const onPerformanceData = jest.fn();
      
      render(
        <TestWrapper>
          <PerformanceMonitor onPerformanceData={onPerformanceData} />
        </TestWrapper>
      );
      
      // Simulate performance entry
      performance.mark('test-mark');
      performance.measure('test-measure', 'test-mark');
      
      await waitFor(() => {
        expect(onPerformanceData).toHaveBeenCalled();
      });
    });
  });

  describe('AccessibilityEnhancer', () => {
    it('renders children without modification', () => {
      render(
        <TestWrapper>
          <AccessibilityEnhancer>
            <TestComponent />
          </AccessibilityEnhancer>
        </TestWrapper>
      );
      
      expect(screen.getByText('Test content')).toBeInTheDocument();
    });

    it('enhances focusable elements', () => {
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
      
      const button = screen.getByText('Test Button');
      const link = screen.getByText('Test Link');
      
      expect(button.getAttribute('tabindex')).toBe('0');
      expect(link.getAttribute('tabindex')).toBe('0');
    });
  });

  describe('Helmet Integration', () => {
    it('renders with HelmetProvider', () => {
      render(
        <TestWrapper>
          <Helmet>
            <title>Test Title</title>
            <meta name="description" content="Test description" />
          </Helmet>
          <TestComponent />
        </TestWrapper>
      );
      
      expect(screen.getByText('Test content')).toBeInTheDocument();
    });
  });
});