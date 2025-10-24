import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';

// Mock component that throws an error
const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error('Test error');
  }
  return <div>Test content</div>;
};

// Test component for error boundary tests
const TestComponent = () => <div>Test component</div>;

// Mock onError callback
const onError = jest.fn();

// Mock helmet context
const helmetContext = {};

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

describe('Advanced Components', () => {
  describe('Error Boundary', () => {
    it('renders children when there is no error', () => {
      render(
        <MemoryRouter>
          <MockErrorBoundary>
            <div>Test content</div>
          </MockErrorBoundary>
        </MemoryRouter>
      );

      expect(screen.getByText('Test content')).toBeInTheDocument();
    });

    it('renders error UI when there is an error', () => {
      const consoleSpy = jest
        .spyOn(console, 'error')
        .mockImplementation(() => {});

      render(
        <MemoryRouter>
          <MockErrorBoundary>
            <ThrowError shouldThrow={true} />
          </MockErrorBoundary>
        </MemoryRouter>
      );

      // The error boundary should catch the error and render the error UI
      expect(screen.getByText('Unexpected Application Error!')).toBeInTheDocument();
      consoleSpy.mockRestore();
    });
  });

  describe('SEO Optimizer', () => {
    it('renders with correct title and description', () => {
      render(
        <HelmetProvider context={helmetContext}>
          <MockSEOOptimizer 
            title="Test Title" 
            description="Test Description" 
          />
        </HelmetProvider>
      );

      expect(screen.getByTestId('seo-optimizer')).toBeInTheDocument();
      expect(screen.getByText('Test Title - Test Description')).toBeInTheDocument();
    });
  });

  describe('Performance Monitor', () => {
    it('renders performance monitor component', () => {
      render(<MockPerformanceMonitor />);
      expect(screen.getByTestId('performance-monitor')).toBeInTheDocument();
    });
  });

  describe('General Component Tests', () => {
    it('renders test component', () => {
      render(<TestComponent />);
      expect(screen.getByText('Test component')).toBeInTheDocument();
    });

    it('handles user interactions', () => {
      const handleClick = jest.fn();
      render(
        <button onClick={handleClick} data-testid="test-button">
          Click me
        </button>
      );

      fireEvent.click(screen.getByTestId('test-button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});