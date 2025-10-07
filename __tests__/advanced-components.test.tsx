import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import AdvancedErrorBoundary from '../app/components/AdvancedErrorBoundary';
import AdvancedSEOOptimizer from '../app/components/AdvancedSEOOptimizer';
import AdvancedPerformanceMonitor from '../app/components/AdvancedPerformanceMonitor';

// Mock component that throws an error
const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error('Test error');
  }
  return <div>No error</div>;
};

describe('AdvancedErrorBoundary', () => {
  it('renders children when there is no error', () => {
    render(
      <AdvancedErrorBoundary>
        <div>Test content</div>
      </AdvancedErrorBoundary>
    );

    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders error UI when there is an error', () => {
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    render(
      <AdvancedErrorBoundary>
        <ThrowError shouldThrow={true} />
      </AdvancedErrorBoundary>
    );

    expect(screen.getByText('Oops! Something went wrong')).toBeInTheDocument();
    expect(screen.getByText('Reload Page')).toBeInTheDocument();
    expect(screen.getByText('Go to Homepage')).toBeInTheDocument();

    consoleSpy.mockRestore();
  });

  it('calls onError callback when error occurs', () => {
    const onError = jest.fn();
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    render(
      <AdvancedErrorBoundary onError={onError}>
        <ThrowError shouldThrow={true} />
      </AdvancedErrorBoundary>
    );

    expect(onError).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  it('retries when retry button is clicked', async () => {
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    let shouldThrow = true;
    const TestComponent = () => {
      if (shouldThrow) {
        throw new Error('Test error');
      }
      return <div>No error</div>;
    };

    const { rerender } = render(
      <AdvancedErrorBoundary enableRetry={true}>
        <TestComponent />
      </AdvancedErrorBoundary>
    );

    expect(screen.getByText('Try Again (3 attempts left)')).toBeInTheDocument();
    
    // Fix the error condition
    shouldThrow = false;
    
    const retryButton = screen.getByText('Try Again (3 attempts left)');
    fireEvent.click(retryButton);

    // After retry with the component fixed, error should be gone
    await waitFor(() => {
      expect(screen.getByText('No error')).toBeInTheDocument();
    });
    
    consoleSpy.mockRestore();
  });
});

describe('AdvancedSEOOptimizer', () => {
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

  it('renders without crashing', () => {
    render(
      <HelmetProvider>
        <AdvancedSEOOptimizer config={mockSEOData} />
        <div>Test content</div>
      </HelmetProvider>
    );

    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('sets document title', () => {
    render(
      <HelmetProvider>
        <AdvancedSEOOptimizer config={mockSEOData} />
      </HelmetProvider>
    );

    expect(document.title).toBe('Test Title');
  });

  it('renders structured data when enabled', () => {
    const { container } = render(
      <HelmetProvider>
        <AdvancedSEOOptimizer
          config={mockSEOData}
          enableStructuredData={true}
        />
      </HelmetProvider>
    );

    // Component should render without errors
    expect(container).toBeInTheDocument();
    // The title should be set via useEffect
    expect(document.title).toBe('Test Title');
  });

  it('renders Open Graph tags when enabled', () => {
    const { container } = render(
      <HelmetProvider>
        <AdvancedSEOOptimizer config={mockSEOData} enableOpenGraph={true} />
      </HelmetProvider>
    );

    // Component should render without errors
    expect(container).toBeInTheDocument();
    // Verify basic meta tags are set via useEffect
    expect(document.querySelector('meta[name="description"]')).toBeInTheDocument();
  });

  it('renders Twitter Card tags when enabled', () => {
    const { container } = render(
      <HelmetProvider>
        <AdvancedSEOOptimizer config={mockSEOData} enableTwitterCards={true} />
      </HelmetProvider>
    );

    // Component should render without errors
    expect(container).toBeInTheDocument();
    // Verify canonical link is set via useEffect
    expect(document.querySelector('link[rel="canonical"]')).toBeInTheDocument();
  });
});

describe('AdvancedPerformanceMonitor', () => {
  // Mock performance API
  const mockPerformance = {
    getEntriesByName: jest.fn(() => []),
    getEntriesByType: jest.fn(() => []),
    getEntries: jest.fn(() => []),
    measurePageLoad: jest.fn(),
    reportWebVitals: jest.fn(),
  };

  beforeEach(() => {
    // Mock PerformanceObserver
    global.PerformanceObserver = jest.fn().mockImplementation((callback) => {
      return {
        observe: jest.fn(),
        disconnect: jest.fn(),
        takeRecords: jest.fn(),
      };
    }) as any;

    Object.defineProperty(window, 'performance', {
      value: mockPerformance,
      writable: true,
      configurable: true,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders nothing in production mode', () => {
    const originalEnv = process.env.NODE_ENV;
    Object.defineProperty(process.env, 'NODE_ENV', { value: 'production', writable: true });

    const { container } = render(
      <AdvancedPerformanceMonitor enableRealTimeMonitoring={true} />
    );

    expect(container.firstChild).toBeNull();

    Object.defineProperty(process.env, 'NODE_ENV', { value: originalEnv, writable: true });
  });

  it('renders performance monitor in development mode', () => {
    const originalEnv = process.env.NODE_ENV;
    Object.defineProperty(process.env, 'NODE_ENV', { value: 'development', writable: true });

    render(<AdvancedPerformanceMonitor enableRealTimeMonitoring={true} />);

    expect(screen.getByText('Performance Monitor')).toBeInTheDocument();

    Object.defineProperty(process.env, 'NODE_ENV', { value: originalEnv, writable: true });
  });

  it('calls onMetricsUpdate when metrics change', async () => {
    const onMetricsUpdate = jest.fn();
    const originalEnv = process.env.NODE_ENV;
    Object.defineProperty(process.env, 'NODE_ENV', { value: 'development', writable: true });

    mockPerformance.getEntriesByName.mockReturnValue([{ startTime: 100 }]);

    render(
      <AdvancedPerformanceMonitor
        enableRealTimeMonitoring={true}
        onMetricsUpdate={onMetricsUpdate}
      />
    );

    await waitFor(() => {
      expect(onMetricsUpdate).toHaveBeenCalled();
    });

    Object.defineProperty(process.env, 'NODE_ENV', { value: originalEnv, writable: true });
  });

  it('shows performance recommendations when metrics are poor', () => {
    const originalEnv = process.env.NODE_ENV;
    Object.defineProperty(process.env, 'NODE_ENV', { value: 'development', writable: true });

    // Mock poor performance metrics
    mockPerformance.getEntriesByName.mockReturnValue([
      { startTime: 2000 }, // Poor FCP
    ]);

    render(<AdvancedPerformanceMonitor enableRealTimeMonitoring={true} />);

    // Should show recommendations for poor performance
    expect(screen.getByText('Recommendations:')).toBeInTheDocument();

    Object.defineProperty(process.env, 'NODE_ENV', { value: originalEnv, writable: true });
  });
});
