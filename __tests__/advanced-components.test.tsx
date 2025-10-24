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

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    if (this.props.onError) {
      this.props.onError(error);
    }
  }

  handleRetry = () => {
    this.setState(prevState => ({
      hasError: false,
      error: undefined,
      retryCount: prevState.retryCount + 1
    }));
  };

  render() {
    if (this.state.hasError) {
      return (
        <div data-testid="error-boundary">
          <h2>Something went wrong.</h2>
          <button onClick={this.handleRetry}>Try again</button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Performance monitoring component for testing
const PerformanceMonitor = ({ onMetric }: { onMetric: (metric: string, value: number) => void }) => {
  useEffect(() => {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        onMetric(entry.name, entry.duration);
      });
    });
    observer.observe({ entryTypes: ['measure', 'navigation'] });
    return () => observer.disconnect();
  }, [onMetric]);

  return <div data-testid="performance-monitor">Monitoring</div>;
};

// Accessibility component for testing
const AccessibilityEnhancer = ({ children }: { children: ReactNode }) => {
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
    it('renders children when there is no error', () => {
      render(
        <ErrorBoundary>
          <div data-testid="child">Child component</div>
        </ErrorBoundary>
      );
      
      expect(screen.getByTestId('child')).toBeInTheDocument();
      expect(screen.queryByTestId('error-boundary')).not.toBeInTheDocument();
    });

    it('renders error UI when child throws error', () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      
      render(
        <ErrorBoundary>
          <ThrowError shouldThrow={true} />
        </ErrorBoundary>
      );
      
      expect(screen.getByTestId('error-boundary')).toBeInTheDocument();
      expect(screen.getByText('Something went wrong.')).toBeInTheDocument();
      
      consoleSpy.mockRestore();
    });

    it('calls onError callback when error occurs', () => {
      const onError = jest.fn();
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      
      render(
        <ErrorBoundary onError={onError}>
          <ThrowError shouldThrow={true} />
        </ErrorBoundary>
      );
      
      expect(onError).toHaveBeenCalledWith(expect.any(Error));
      
      consoleSpy.mockRestore();
    });

    it('retries when retry button is clicked', () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      
      render(
        <ErrorBoundary>
          <ThrowError shouldThrow={true} />
        </ErrorBoundary>
      );
      
      expect(screen.getByTestId('error-boundary')).toBeInTheDocument();
      
      fireEvent.click(screen.getByText('Try again'));
      
      // The error boundary should still be visible since the component still throws
      expect(screen.getByTestId('error-boundary')).toBeInTheDocument();
      
      consoleSpy.mockRestore();
    });
  });

  describe('PerformanceMonitor', () => {
    it('renders performance monitor', () => {
      const onMetric = jest.fn();
      render(<PerformanceMonitor onMetric={onMetric} />);
      
      expect(screen.getByTestId('performance-monitor')).toBeInTheDocument();
    });
  });

  describe('AccessibilityEnhancer', () => {
    it('enhances accessibility on mount', () => {
      render(
        <AccessibilityEnhancer>
          <div>Test content</div>
        </AccessibilityEnhancer>
      );
      
      expect(screen.getByTestId('accessibility-enhancer')).toBeInTheDocument();
      expect(document.body.getAttribute('data-accessibility-enhanced')).toBe('true');
    });

    it('removes accessibility enhancements on unmount', () => {
      const { unmount } = render(
        <AccessibilityEnhancer>
          <div>Test content</div>
        </AccessibilityEnhancer>
      );
      
      expect(document.body.getAttribute('data-accessibility-enhanced')).toBe('true');
      
      unmount();
      
      expect(document.body.getAttribute('data-accessibility-enhanced')).toBeNull();
    });
  });
});