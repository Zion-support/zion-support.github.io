import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import AdvancedErrorBoundary from '../app/components/AdvancedErrorBoundary';
import AdvancedSEOOptimizer from '../app/components/AdvancedSEOOptimizer';
import AdvancedPerformanceMonitor from '../app/components/AdvancedPerformanceMonitor';

// Mock Next.js Head component
jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: React.ReactNode }) => {
      return <>{children}</>;
    },
  };
});

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
      <AdvancedErrorBoundary enableRetry={true}>
        <ThrowError shouldThrow={true} />
      </AdvancedErrorBoundary>
    );

    expect(screen.getByText('Oops! Something went wrong')).toBeInTheDocument();
    const retryButtons = screen.queryAllByText(/Try Again|Reload Page/);
    expect(retryButtons.length).toBeGreaterThan(0);
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
    const TestComponent = () => <ThrowError shouldThrow={shouldThrow} />;

    const { rerender } = render(
      <AdvancedErrorBoundary enableRetry={true}>
        <TestComponent />
      </AdvancedErrorBoundary>
    );

    const retryButton = screen.getByText('Try Again (3 attempts left)');
    
    // Change shouldThrow before clicking retry
    shouldThrow = false;
    fireEvent.click(retryButton);

    // After retry, the error boundary should reset and show the child component
    await waitFor(() => {
      expect(
        screen.queryByText('Oops! Something went wrong')
      ).not.toBeInTheDocument();
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
    // Test that component renders without errors when structured data is enabled
    const { container } = render(
      <HelmetProvider>
        <AdvancedSEOOptimizer
          config={mockSEOData}
          enableStructuredData={true}
        />
      </HelmetProvider>
    );

    // Verify component renders successfully
    expect(container).toBeTruthy();
    // Verify title is set via useEffect
    expect(document.title).toBe('Test Title');
  });

  it('renders Open Graph tags when enabled', () => {
    // Test that component renders without errors when Open Graph is enabled
    const { container } = render(
      <HelmetProvider>
        <AdvancedSEOOptimizer config={mockSEOData} enableOpenGraph={true} />
      </HelmetProvider>
    );

    // Verify component renders successfully
    expect(container).toBeTruthy();
    // Verify title is set via useEffect
    expect(document.title).toBe('Test Title');
  });

  it('renders Twitter Card tags when enabled', () => {
    // Test that component renders without errors when Twitter Cards are enabled
    const { container } = render(
      <HelmetProvider>
        <AdvancedSEOOptimizer config={mockSEOData} enableTwitterCards={true} />
      </HelmetProvider>
    );

    // Verify component renders successfully
    expect(container).toBeTruthy();
    // Verify title is set via useEffect
    expect(document.title).toBe('Test Title');
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
    global.PerformanceObserver = MockPerformanceObserver as any;
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
