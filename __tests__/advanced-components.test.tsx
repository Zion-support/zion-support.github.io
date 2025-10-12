import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';

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
  describe('Error Boundary', () => {
    it('should render children when no error occurs', () => {
      render(
        <MockErrorBoundary>
          <ThrowError shouldThrow={false} />
        </MockErrorBoundary>
      );
      expect(screen.getByText('Test content')).toBeInTheDocument();
    });

    it('should catch and display error when child throws', () => {
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

  describe('SEO Optimizer', () => {
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

    it('should render with provided SEO data', () => {
      render(
        <HelmetProvider>
          <MockSEOOptimizer title={mockSEOData.title} description={mockSEOData.description} />
        </HelmetProvider>
      );
      expect(screen.getByText('Test content')).toBeInTheDocument();
    });

    it('should update document title', async () => {
      render(
        <HelmetProvider>
          <MockSEOOptimizer title={mockSEOData.title} description={mockSEOData.description} />
        </HelmetProvider>
      );
      
      // Wait for helmet to update the document title
      await new Promise(resolve => setTimeout(resolve, 100));
      expect(document.title).toBe('Test Title');
    });
  });

  describe('Performance Monitor', () => {
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
      callback: PerformanceObserverCallback;
      constructor(callback: PerformanceObserverCallback) {
        this.callback = callback;
      }
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

    it('should not render in production', () => {
      const originalEnv = process.env.NODE_ENV;
      Object.defineProperty(process.env, 'NODE_ENV', { value: 'production', writable: true });
      
      const { container } = render(<MockPerformanceMonitor />);
      expect(container.firstChild).toBeNull();
      
      Object.defineProperty(process.env, 'NODE_ENV', { value: originalEnv, writable: true });
    });

    it('should render in development', () => {
      const originalEnv = process.env.NODE_ENV;
      Object.defineProperty(process.env, 'NODE_ENV', { value: 'development', writable: true });
      
      render(<MockPerformanceMonitor />);
      expect(screen.getByText('Performance Monitor')).toBeInTheDocument();
      
      Object.defineProperty(process.env, 'NODE_ENV', { value: originalEnv, writable: true });
    });
  });
});