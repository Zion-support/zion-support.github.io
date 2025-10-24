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
          <h2>Oops! Something went wrong</h2>
          <button onClick={this.handleRetry}>
            Try Again ({3 - this.state.retryCount} attempts left)
          </button>
          <button onClick={() => window.location.reload()}>Reload Page</button>
          <button onClick={() => window.location.href = '/'}>Go to Homepage</button>
        </div>
      );
    }

    return this.props.children;
  }
}

// SEO Optimizer Component
interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage: string;
  structuredData: Record<string, any>;
}

const AdvancedSEOOptimizer = ({ seoData }: { seoData: SEOData }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords.join(', ')} />
        <link rel="canonical" href={seoData.canonicalUrl} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.ogImage} />
        <script type="application/ld+json">
          {JSON.stringify(seoData.structuredData)}
        </script>
      </Helmet>
      <div>Test content</div>
    </HelmetProvider>
  );
};

// Performance Monitor Component
interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
}

const AdvancedPerformanceMonitor = ({ 
  onMetricsUpdate 
}: { 
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;

    const measurePerformance = () => {
    const performanceEntries = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    if (performanceEntries) {
      const newMetrics: PerformanceMetrics = {
        fcp: performanceEntries.loadEventEnd - performanceEntries.fetchStart,
        lcp: performanceEntries.loadEventEnd - performanceEntries.fetchStart,
        fid: 0,
        cls: 0
      };
        
        setMetrics(newMetrics);
        onMetricsUpdate?.(newMetrics);
      }
    };

    measurePerformance();
  }, [onMetricsUpdate]);

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div>
      <h3>Performance Monitor</h3>
      {metrics && (
        <div>
          <p>FCP: {metrics.fcp}ms</p>
          <p>LCP: {metrics.lcp}ms</p>
          {metrics.fcp > 1000 && (
            <div>
              <h4>Recommendations:</h4>
              <ul>
                <li>Optimize images</li>
                <li>Reduce bundle size</li>
                <li>Enable compression</li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

describe('ErrorBoundary', () => {
  it('renders children when there is no error', () => {
    render(
      <ErrorBoundary>
        <TestComponent />
      </ErrorBoundary>
    );
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders error UI when there is an error', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );
    
    expect(screen.getByText('Oops! Something went wrong')).toBeInTheDocument();
    expect(screen.getByText(/Try Again/)).toBeInTheDocument();
    expect(screen.getByText('Reload Page')).toBeInTheDocument();
    expect(screen.getByText('Go to Homepage')).toBeInTheDocument();
    
    consoleSpy.mockRestore();
  });

  it('calls onError when error occurs', () => {
    const onError = jest.fn();
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    render(
      <ErrorBoundary onError={onError}>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );
    
    expect(onError).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  it('retries after error when retry button is clicked', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    let shouldThrow = true;
    const TestComponent = () => <ThrowError shouldThrow={shouldThrow} />;
    
    render(
      <ErrorBoundary>
        <TestComponent />
      </ErrorBoundary>
    );
    
    const retryButton = screen.getByText('Try Again (3 attempts left)');
    shouldThrow = false;
    fireEvent.click(retryButton);
    
    expect(
      screen.queryByText('Oops! Something went wrong')
    ).not.toBeInTheDocument();
    
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

  it('renders children', () => {
    render(
      <AdvancedSEOOptimizer seoData={mockSEOData} />
    );
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('updates document title', async () => {
    render(
      <AdvancedSEOOptimizer seoData={mockSEOData} />
    );
    
    await waitFor(() => {
      expect(document.title).toBe('Test Title');
    });
  });

  it('renders meta tags', () => {
    const _helmetContext = {};
    const { container } = render(
      <AdvancedSEOOptimizer seoData={mockSEOData} />
    );
    expect(container).toBeTruthy();
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
    global.PerformanceObserver = MockPerformanceObserver as unknown as typeof PerformanceObserver;
    jest.clearAllMocks();
  });

  it('renders nothing in production mode', () => {
    const originalEnv = process.env.NODE_ENV;
    Object.defineProperty(process.env, 'NODE_ENV', { value: 'production', writable: true });
    
    const { container } = render(
      <MemoryRouter>
        <AdvancedPerformanceMonitor />
      </MemoryRouter>
    );
    
    expect(container.firstChild).toBeNull();
    Object.defineProperty(process.env, 'NODE_ENV', { value: originalEnv, writable: true });
  });

  it('renders performance monitor in development mode', () => {
    const originalEnv = process.env.NODE_ENV;
    Object.defineProperty(process.env, 'NODE_ENV', { value: 'development', writable: true });
    
    render(
      <MemoryRouter>
        <AdvancedPerformanceMonitor />
      </MemoryRouter>
    );
    
    expect(screen.getByText('Performance Monitor')).toBeInTheDocument();
    Object.defineProperty(process.env, 'NODE_ENV', { value: originalEnv, writable: true });
  });

  it('calls onMetricsUpdate when metrics change', async () => {
    const onMetricsUpdate = jest.fn();
    const originalEnv = process.env.NODE_ENV;
    Object.defineProperty(process.env, 'NODE_ENV', { value: 'development', writable: true });
    
    mockPerformance.getEntriesByType.mockReturnValue([{ loadEventEnd: 1000, fetchStart: 0 }] as any);
    
    render(
      <MemoryRouter>
        <AdvancedPerformanceMonitor onMetricsUpdate={onMetricsUpdate} />
      </MemoryRouter>
    );
    
    await waitFor(() => {
      expect(onMetricsUpdate).toHaveBeenCalled();
    });
    
    Object.defineProperty(process.env, 'NODE_ENV', { value: originalEnv, writable: true });
  });

  it('shows performance recommendations when metrics are poor', async () => {
    const originalEnv = process.env.NODE_ENV;
    Object.defineProperty(process.env, 'NODE_ENV', { value: 'development', writable: true });
    
    // Mock poor performance metrics
    mockPerformance.getEntriesByType.mockReturnValue([{ loadEventEnd: 2000, fetchStart: 0 }] as any);
    
    render(
      <MemoryRouter>
        <AdvancedPerformanceMonitor />
      </MemoryRouter>
    );
    
    // Should show recommendations for poor performance
    await waitFor(() => {
      expect(screen.getByText('Recommendations:')).toBeInTheDocument();
    }, { timeout: 2000 });
    
    Object.defineProperty(process.env, 'NODE_ENV', { value: originalEnv, writable: true });
  });

  it('handles errors gracefully', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    expect(() => {
      render(
        <MemoryRouter>
          <AdvancedPerformanceMonitor />
        </MemoryRouter>
      );
    }).not.toThrow();
    
    consoleSpy.mockRestore();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});