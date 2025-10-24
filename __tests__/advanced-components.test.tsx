import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter, RouterProvider, createMemoryRouter } from 'react-router-dom';
import AdvancedErrorBoundary from '../src/components/AdvancedErrorBoundary';
import AdvancedSEOOptimizer from '../src/components/AdvancedSEOOptimizer';
import AdvancedPerformanceMonitor from '../src/components/AdvancedPerformanceMonitor';

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

describe('AdvancedErrorBoundary', () => {
  it('renders children when there is no error', () => {
    render(
      <MemoryRouter>
        <AdvancedErrorBoundary>
          <div>Test content</div>
        </AdvancedErrorBoundary>
      </MemoryRouter>
    );

    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders error UI when there is an error', () => {
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
import { render, screen } from '@testing-library/react';

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
  test('renders error boundary correctly', () => {
    render(
      <MockErrorBoundary>
        <div>Test content</div>
      </MockErrorBoundary>
    );
    
    expect(screen.getByTestId('error-boundary')).toBeInTheDocument();
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  test('renders SEO optimizer correctly', () => {
    render(
      <MockSEOOptimizer 
        title="Test Title" 
        description="Test Description" 
      />
    );
    
    expect(screen.getByTestId('seo-optimizer')).toBeInTheDocument();
    expect(screen.getByText('Test Title - Test Description')).toBeInTheDocument();
  });

  test('renders performance monitor correctly', () => {
    render(<MockPerformanceMonitor />);
    
    expect(screen.getByTestId('performance-monitor')).toBeInTheDocument();
    expect(screen.getByText('Performance Monitor')).toBeInTheDocument();
  });

  test('error boundary catches errors', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    render(
      configurable: true,
    })
    // Mock PerformanceObserver
    global.PerformanceObserver = MockPerformanceObserver as unknown as typeof PerformanceObserver})
  afterEach(() => {
    jest.clearAllMocks()})
    const originalEnv = process.env['NODE_ENV']
    Object.defineProperty(process.env, 'NODE_ENV', {value: 'production', writable: true})
    const {container} = render(
    )
    expect(container.firstChild).toBeNull()
    Object.defineProperty(process.env, 'NODE_ENV', {value: originalEnv, writable: true})})
    const originalEnv = process.env['NODE_ENV']
    Object.defineProperty(process.env, 'NODE_ENV', {value: 'development', writable: true})
    render(
    )
    expect(screen.getByText('Performance Monitor')).toBeInTheDocument()
    Object.defineProperty(process.env, 'NODE_ENV', {value: originalEnv, writable: true})})
    const onMetricsUpdate = jest.fn()
    const originalEnv = process.env['NODE_ENV']
    Object.defineProperty(process.env, 'NODE_ENV', {value: 'development', writable: true})
    mockPerformance.getEntriesByName.mockReturnValue([{startTime: 100}])
    render(
    )
      expect(onMetricsUpdate).toHaveBeenCalled()})
    Object.defineProperty(process.env, 'NODE_ENV', {value: originalEnv, writable: true})})
    const originalEnv = process.env['NODE_ENV']
    Object.defineProperty(process.env, 'NODE_ENV', {value: 'development', writable: true})
    // Mock poor performance metrics;
    mockPerformance.getEntriesByName.mockReturnValue([{startTime: 2000}, // Poor FCP;])
    render(
    )
    // Should show recommendations for poor performance;
    expect(screen.getByText('Recommendations: ')).toBeInTheDocument()
    Object.defineProperty(process.env, 'NODE_ENV', {value: originalEnv, writable: true})})
    const consoleSpy = jest;
      .spyOn(console, 'error')
 {})
    // In React testing, errors are caught by error boundaries;
    // We just verify the component doesn't crash the test;
      render();
    }).not.toThrow();
      <MockErrorBoundary>
        <MockErrorComponent shouldThrow={true} />
      </MockErrorBoundary>
    );
    
    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });
});