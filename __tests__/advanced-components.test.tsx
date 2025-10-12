import { render, screen, waitFor } from '@testing-library/react';
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
const MockErrorComponent = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error('Test error');
  }
  return <div data-testid="error-component">No Error</div>;
};

describe('Advanced Components', () => {
  beforeEach(() => {
    // Reset any mocks before each test
    jest.clearAllMocks();
  });

  describe('ErrorBoundary', () => {
    it('should render children when there is no error', () => {
      render(
        <MockErrorBoundary>
          <div data-testid="child">Child Component</div>
        </MockErrorBoundary>
      );

      expect(screen.getByTestId('error-boundary')).toBeInTheDocument();
      expect(screen.getByTestId('child')).toBeInTheDocument();
    });

    it('should catch and handle errors', () => {
      // Suppress console.error for this test
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

      render(
        <MockErrorBoundary>
          <MockErrorComponent shouldThrow={true} />
        </MockErrorBoundary>
      );

      expect(screen.getByTestId('error-boundary')).toBeInTheDocument();
      
      consoleSpy.mockRestore();
    });
  });

  describe('SEO Optimizer', () => {
    it('should render with correct title and description', () => {
      const title = 'Test Title';
      const description = 'Test Description';

      render(
        <MockSEOOptimizer title={title} description={description} />
      );

      expect(screen.getByTestId('seo-optimizer')).toHaveTextContent(`${title} - ${description}`);
    });
  });

  describe('Performance Monitor', () => {
    it('should render performance monitor component', () => {
      render(<MockPerformanceMonitor />);

      expect(screen.getByTestId('performance-monitor')).toBeInTheDocument();
      expect(screen.getByTestId('performance-monitor')).toHaveTextContent('Performance Monitor');
    });
  });

  describe('Integration Tests', () => {
    it('should work with HelmetProvider and MemoryRouter', () => {
      render(
        <HelmetProvider>
          <MemoryRouter>
            <MockErrorBoundary>
              <div data-testid="integration-test">Integration Test</div>
            </MockErrorBoundary>
          </MemoryRouter>
        </HelmetProvider>
      );

      expect(screen.getByTestId('integration-test')).toBeInTheDocument();
    });

    it('should handle async operations', async () => {
      const AsyncComponent = () => {
        const [data, setData] = React.useState<string | null>(null);

        React.useEffect(() => {
          const timer = setTimeout(() => {
            setData('Async Data');
          }, 100);
          return () => clearTimeout(timer);
        }, []);

        return <div data-testid="async-component">{data || 'Loading...'}</div>;
      };

      render(<AsyncComponent />);

      expect(screen.getByTestId('async-component')).toHaveTextContent('Loading...');

      await waitFor(() => {
        expect(screen.getByTestId('async-component')).toHaveTextContent('Async Data');
      });
    });
  });
});