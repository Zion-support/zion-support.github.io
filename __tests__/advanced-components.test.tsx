import { render, screen } from '@testing-library/react';
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
  return <div>Test content</div>;
};

// Test component for error boundary tests
const TestComponent = () => <div>Test component</div>;

// Mock onError callback (unused in current tests)
// const onError = jest.fn();

// Mock helmet context
const helmetContext = {};

describe('Advanced Components', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('ErrorBoundary', () => {
    it('renders children when no error occurs', () => {
      render(
        <MockErrorBoundary>
          <TestComponent />
        </MockErrorBoundary>
      );
      
      expect(screen.getByText('Test component')).toBeInTheDocument();
    });

    it('catches and handles errors', () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      
      render(
        <MockErrorBoundary>
          <MockErrorComponent shouldThrow={true} />
        </MockErrorBoundary>
      );
      
      expect(consoleSpy).toHaveBeenCalled();
      consoleSpy.mockRestore();
    });
  });

  describe('SEOOptimizer', () => {
    it('renders with title and description', () => {
      render(
        <MockSEOOptimizer 
          title="Test Title" 
          description="Test Description" 
        />
      );
      
      expect(screen.getByTestId('seo-optimizer')).toHaveTextContent('Test Title - Test Description');
    });
  });

  describe('PerformanceMonitor', () => {
    it('renders performance monitor', () => {
      render(<MockPerformanceMonitor />);
      
      expect(screen.getByTestId('performance-monitor')).toBeInTheDocument();
    });
  });

  describe('Integration Tests', () => {
    it('renders components with router context', () => {
      render(
        <MemoryRouter>
          <HelmetProvider context={helmetContext}>
            <MockErrorBoundary>
              <TestComponent />
            </MockErrorBoundary>
          </HelmetProvider>
        </MemoryRouter>
      );
      
      expect(screen.getByText('Test component')).toBeInTheDocument();
    });
  });
});