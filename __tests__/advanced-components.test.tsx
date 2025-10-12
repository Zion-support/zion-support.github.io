import { describe, test, expect, beforeEach, jest } from '@jest/globals';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';

// Mock components
const MockErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  return <div data-testid="error-boundary">{children}</div>;
};

const MockSEOOptimizer = ({ title, description }: { title: string; description: string }) => {
  return <div data-testid="seo-optimizer">{title} - {description}</div>;
};

const MockPerformanceMonitor = () => {
  return <div data-testid="performance-monitor">Performance Monitor</div>;
};

// Mock component that throws an error
const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error('Test error');
  }
  return <div>Test content</div>;
};

describe('Advanced Components', () => {
  describe('ErrorBoundary', () => {
    test('renders children when no error occurs', () => {
      render(
        <MockErrorBoundary>
          <ThrowError shouldThrow={false} />
        </MockErrorBoundary>
      );
      expect(screen.getByText('Test content')).toBeInTheDocument();
    });

    test('renders error UI when error occurs', () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      
      render(
        <MockErrorBoundary>
          <ThrowError shouldThrow={true} />
        </MockErrorBoundary>
      );
      
      expect(screen.getByText('Oops! Something went wrong')).toBeInTheDocument();
      expect(screen.getByText(/Try Again/)).toBeInTheDocument();
      expect(screen.getByText('Reload Page')).toBeInTheDocument();
      expect(screen.getByText('Go to Homepage')).toBeInTheDocument();
      
      consoleSpy.mockRestore();
    });
  });

  describe('SEOOptimizer', () => {
    const mockSEOData = {
      title: 'Test Title',
      description: 'Test Description',
      keywords: ['test', 'keywords'],
      canonicalUrl: 'https://example.com',
      ogImage: 'https://example.com/image.jpg',
      structuredData: {
        '@type': 'Organization',
        name: 'Test Organization',
      },
    };

    test('renders without crashing', () => {
      render(
        <HelmetProvider>
          <MockSEOOptimizer title={mockSEOData.title} description={mockSEOData.description} />
        </HelmetProvider>
      );
      expect(screen.getByText('Test content')).toBeInTheDocument();
    });
  });

  describe('PerformanceMonitor', () => {
    // Mock performance API
    const mockPerformance = {
      getEntriesByName: jest.fn(() => []),
      getEntriesByType: jest.fn(() => []),
      now: jest.fn(() => Date.now()),
      measurePageLoad: jest.fn(),
      reportWebVitals: jest.fn(),
    };

    // Mock PerformanceObserver
    class MockPerformanceObserver {
      constructor(callback: PerformanceObserverCallback) {
        this.callback = callback;
      }
      callback: PerformanceObserverCallback;
      observe() {}
      disconnect() {}
      takeRecords() { return []; }
    }

    beforeEach(() => {
      // Mock performance API
      Object.defineProperty(window, 'performance', {
        value: mockPerformance,
        writable: true,
        configurable: true,
      });

      // Mock PerformanceObserver
      global.PerformanceObserver = MockPerformanceObserver as unknown as typeof PerformanceObserver;
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    test('does not render in production', () => {
      const originalEnv = process.env.NODE_ENV;
      Object.defineProperty(process.env, 'NODE_ENV', { value: 'production', writable: true });
      
      const { container } = render(<MockPerformanceMonitor />);
      expect(container.firstChild).toBeNull();
      
      Object.defineProperty(process.env, 'NODE_ENV', { value: originalEnv, writable: true });
    });

    test('renders in development', () => {
      const originalEnv = process.env.NODE_ENV;
      Object.defineProperty(process.env, 'NODE_ENV', { value: 'development', writable: true });
      
      render(<MockPerformanceMonitor />);
      expect(screen.getByText('Performance Monitor')).toBeInTheDocument();
      
      Object.defineProperty(process.env, 'NODE_ENV', { value: originalEnv, writable: true });
    });
  });
});