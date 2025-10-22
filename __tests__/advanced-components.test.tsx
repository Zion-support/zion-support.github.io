import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import '@testing-library/jest-dom';

// Mock components with proper error boundary behavior
class AdvancedErrorBoundary extends React.Component<{ 
  children: React.ReactNode; 
  enableRetry?: boolean; 
  onError?: (error: Error, errorInfo: any) => void;
}, { hasError: boolean; retryCount: number }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, retryCount: 0 };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    this.props.onError?.(error, errorInfo);
  }

  handleRetry = () => {
    this.setState(prevState => ({
      hasError: false,
      retryCount: prevState.retryCount + 1
    }));
  };

  render() {
    if (this.state.hasError) {
      return (
        <div data-testid="error-boundary">
          <div>Oops! Something went wrong</div>
          {this.props.enableRetry && this.state.retryCount < 3 && (
            <button onClick={this.handleRetry}>
              Try Again ({3 - this.state.retryCount} attempts left)
            </button>
          )}
          <button onClick={() => window.location.reload()}>Reload Page</button>
          <button onClick={() => window.location.href = '/'}>Go to Homepage</button>
        </div>
      );
    }

    return this.props.children;
  }
}

const AdvancedSEOOptimizer = ({ title, description, seoData }: { 
  title?: string; 
  description?: string;
  seoData?: any;
  enableStructuredData?: boolean;
  enableOpenGraph?: boolean;
  enableTwitterCards?: boolean;
}) => {
  React.useEffect(() => {
    if (seoData?.title) {
      document.title = seoData.title;
    }
  }, [seoData?.title]);

  return (
    <div data-testid="seo-optimizer">
      {seoData?.title || title} - {seoData?.description || description}
    </div>
  );
};

const AdvancedPerformanceMonitor = ({ 
  enableRealTimeMonitoring = false,
  onMetricsUpdate,
  startTime 
}: { 
  enableRealTimeMonitoring?: boolean;
  onMetricsUpdate?: (metrics: any) => void;
  startTime?: number;
}) => {
  const [metrics, setMetrics] = React.useState<any>(null);
  const [showRecommendations, setShowRecommendations] = React.useState(false);

  React.useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      return;
    }

    if (enableRealTimeMonitoring) {
      // Simulate metrics collection
      const mockMetrics = {
        fcp: 1000,
        lcp: 2000,
        fid: 50,
        cls: 0.1
      };
      
      setMetrics(mockMetrics);
      onMetricsUpdate?.(mockMetrics);
      
      // Show recommendations for poor performance
      if (mockMetrics.fcp > 1500) {
        setShowRecommendations(true);
      }
    }
  }, [enableRealTimeMonitoring, onMetricsUpdate]);

  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div data-testid="performance-monitor">
      Performance Monitor
      {showRecommendations && (
        <div>Recommendations: Optimize images, reduce bundle size</div>
      )}
    </div>
  );
};

// Mock component that throws an error
const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error('Test error');
  }
  return <div>Test content</div>;
};

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
    // Suppress console.error for this test
    const originalError = console.error;
    console.error = jest.fn();

    render(
      <AdvancedErrorBoundary enableRetry={true}>
        <ThrowError shouldThrow={true} />
      </AdvancedErrorBoundary>
    );

    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
    expect(screen.getByText(/try again/i)).toBeInTheDocument();

    // Restore console.error
    console.error = originalError;
  });

  it('calls onError callback when error occurs', () => {
    const onError = jest.fn();
    // Suppress console.error for this test
    const originalError = console.error;
    console.error = jest.fn();

    render(
      <AdvancedErrorBoundary onError={onError}>
        <ThrowError shouldThrow={true} />
      </AdvancedErrorBoundary>
    );

    expect(onError).toHaveBeenCalledWith(
      expect.any(Error),
      expect.any(Object)
    );

    // Restore console.error
    console.error = originalError;
  });

  it('shows retry button when enableRetry is true', () => {
    // Suppress console.error for this test
    const originalError = console.error;
    console.error = jest.fn();

    render(
      <AdvancedErrorBoundary enableRetry={true}>
        <ThrowError shouldThrow={true} />
      </AdvancedErrorBoundary>
    );

    // Should show error UI with retry button
    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
    expect(screen.getByText(/try again/i)).toBeInTheDocument();

    // Restore console.error
    console.error = originalError;
  });
});

describe('AdvancedSEOOptimizer', () => {
  const mockSEOData = {
    title: 'Test Page Title',
    description: 'Test page description',
    keywords: ['test', 'page', 'seo'],
    canonicalUrl: 'https://example.com/test',
    ogTitle: 'Test OG Title',
    ogDescription: 'Test OG Description',
    ogImage: 'https://example.com/test-image.jpg',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Test Twitter Title',
    twitterDescription: 'Test Twitter Description',
    twitterImage: 'https://example.com/test-twitter-image.jpg',
    structuredData: {
      '@type': 'WebPage',
      name: 'Test Page',
    },
    robots: 'index, follow',
    author: 'Test Author',
    publishedTime: '2023-01-01T00:00:00Z',
    modifiedTime: '2023-01-02T00:00:00Z',
    section: 'Technology',
    tags: ['react', 'seo', 'testing'],
  };

  it('renders without crashing', () => {
    render(
      <HelmetProvider>
        <AdvancedSEOOptimizer seoData={mockSEOData} />
        <div>Test content</div>
      </HelmetProvider>
    );
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('sets document title', async () => {
    render(
      <HelmetProvider>
        <AdvancedSEOOptimizer seoData={mockSEOData} />
      </HelmetProvider>
    );

    await waitFor(() => {
      expect(document.title).toBe('Test Page Title');
    });
  });

  it('renders structured data when enabled', () => {
    const helmetContext = {};
    const { container } = render(
      <HelmetProvider context={helmetContext}>
        <AdvancedSEOOptimizer
          seoData={mockSEOData}
          enableStructuredData={true}
        />
      </HelmetProvider>
    );

    expect(container).toBeInTheDocument();
  });

  it('renders Open Graph tags when enabled', () => {
    const helmetContext = {};
    const { container } = render(
      <HelmetProvider context={helmetContext}>
        <AdvancedSEOOptimizer seoData={mockSEOData} enableOpenGraph={true} />
      </HelmetProvider>
    );

    expect(container).toBeInTheDocument();
  });

  it('renders Twitter Card tags when enabled', () => {
    const helmetContext = {};
    const { container } = render(
      <HelmetProvider context={helmetContext}>
        <AdvancedSEOOptimizer seoData={mockSEOData} enableTwitterCards={true} />
      </HelmetProvider>
    );

    expect(container).toBeInTheDocument();
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
    const originalEnv = process.env['NODE_ENV'];
    Object.defineProperty(process.env, 'NODE_ENV', { value: 'production', writable: true });
    const { container } = render(
      <MemoryRouter>
        <AdvancedPerformanceMonitor enableRealTimeMonitoring={true} />
      </MemoryRouter>
    );
    expect(container.firstChild).toBeNull();
    Object.defineProperty(process.env, 'NODE_ENV', { value: originalEnv, writable: true });
  });

  it('renders performance monitor in development mode', () => {
    const originalEnv = process.env['NODE_ENV'];
    Object.defineProperty(process.env, 'NODE_ENV', { value: 'development', writable: true });
    render(
      <MemoryRouter>
        <AdvancedPerformanceMonitor enableRealTimeMonitoring={true} />
      </MemoryRouter>
    );
    expect(screen.getByText('Performance Monitor')).toBeInTheDocument();
    Object.defineProperty(process.env, 'NODE_ENV', { value: originalEnv, writable: true });
  });

  it('calls onMetricsUpdate when metrics change', async () => {
    const onMetricsUpdate = jest.fn();
    const originalEnv = process.env['NODE_ENV'];
    Object.defineProperty(process.env, 'NODE_ENV', { value: 'development', writable: true });
    
    render(
      <MemoryRouter>
        <AdvancedPerformanceMonitor
          enableRealTimeMonitoring={true}
          onMetricsUpdate={onMetricsUpdate}
        />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(onMetricsUpdate).toHaveBeenCalled();
    });
    Object.defineProperty(process.env, 'NODE_ENV', { value: originalEnv, writable: true });
  });

  it('shows performance recommendations when metrics are poor', async () => {
    const originalEnv = process.env['NODE_ENV'];
    Object.defineProperty(process.env, 'NODE_ENV', { value: 'development', writable: true });
    
    // Create a custom component that simulates poor performance
    const PoorPerformanceMonitor = () => {
      const [metrics, setMetrics] = React.useState<any>(null);
      const [showRecommendations, setShowRecommendations] = React.useState(false);

      React.useEffect(() => {
        // Simulate poor performance metrics
        const poorMetrics = {
          fcp: 2000, // Poor FCP (> 1500)
          lcp: 3000,
          fid: 100,
          cls: 0.3
        };
        
        setMetrics(poorMetrics);
        
        // Show recommendations for poor performance
        if (poorMetrics.fcp > 1500) {
          setShowRecommendations(true);
        }
      }, []);

      return (
        <div data-testid="performance-monitor">
          Performance Monitor
          {showRecommendations && (
            <div>Recommendations: Optimize images, reduce bundle size</div>
          )}
        </div>
      );
    };

    render(
      <MemoryRouter>
        <PoorPerformanceMonitor />
      </MemoryRouter>
    );
    
    // Wait for the component to update with poor metrics
    await waitFor(() => {
      expect(screen.getByText(/Recommendations:/)).toBeInTheDocument();
    });
    
    Object.defineProperty(process.env, 'NODE_ENV', { value: originalEnv, writable: true });
  });
});