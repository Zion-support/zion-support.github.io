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
    expect(screen.getByText('Try Again')).toBeInTheDocument();
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

  it('retries when retry button is clicked', () => {
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    render(
      <AdvancedErrorBoundary enableRetry={true}>
        <ThrowError shouldThrow={true} />
      </AdvancedErrorBoundary>
    );

    const retryButton = screen.getByText('Try Again (3 attempts left)');
    fireEvent.click(retryButton);

    // After retry, the error boundary should reset
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

  it('renders without crashing', () => {
    render(
      <HelmetProvider>
        <AdvancedSEOOptimizer seoData={mockSEOData} />
        <div>Test content</div>
      </HelmetProvider>
    );

    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('sets document title', () => {
    render(
      <HelmetProvider>
        <AdvancedSEOOptimizer seoData={mockSEOData} />
      </HelmetProvider>
    );

    expect(document.title).toBe('Test Title');
  });

  it('renders structured data when enabled', () => {
    render(
      <HelmetProvider>
        <AdvancedSEOOptimizer
          seoData={mockSEOData}
          enableStructuredData={true}
        />
      </HelmetProvider>
    );

    const structuredDataScript = document.querySelector(
      'script[type="application/ld+json"]'
    );
    expect(structuredDataScript).toBeInTheDocument();
  });

  it('renders Open Graph tags when enabled', () => {
    render(
      <HelmetProvider>
        <AdvancedSEOOptimizer seoData={mockSEOData} enableOpenGraph={true} />
      </HelmetProvider>
    );

    expect(
      document.querySelector('meta[property="og:title"]')
    ).toBeInTheDocument();
    expect(
      document.querySelector('meta[property="og:description"]')
    ).toBeInTheDocument();
  });

  it('renders Twitter Card tags when enabled', () => {
    render(
      <HelmetProvider>
        <AdvancedSEOOptimizer seoData={mockSEOData} enableTwitterCards={true} />
      </HelmetProvider>
    );

    expect(
      document.querySelector('meta[name="twitter:card"]')
    ).toBeInTheDocument();
    expect(
      document.querySelector('meta[name="twitter:title"]')
    ).toBeInTheDocument();
  });
});

describe('AdvancedPerformanceMonitor', () => {
  // Mock performance API
  const mockPerformance = {
    getEntriesByName: jest.fn(),
    getEntriesByType: jest.fn(),
    getEntries: jest.fn(),
    measurePageLoad: jest.fn(),
    reportWebVitals: jest.fn(),
  };

  beforeEach(() => {
    Object.defineProperty(window, 'performance', {
      value: mockPerformance,
      writable: true,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders nothing in production mode', () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'production';

    const { container } = render(
      <AdvancedPerformanceMonitor enableRealTimeMonitoring={true} />
    );

    expect(container.firstChild).toBeNull();

    process.env.NODE_ENV = originalEnv;
  });

  it('renders performance monitor in development mode', () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'development';

    render(<AdvancedPerformanceMonitor enableRealTimeMonitoring={true} />);

    expect(screen.getByText('Performance Monitor')).toBeInTheDocument();

    process.env.NODE_ENV = originalEnv;
  });

  it('calls onMetricsUpdate when metrics change', async () => {
    const onMetricsUpdate = jest.fn();
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'development';

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

    process.env.NODE_ENV = originalEnv;
  });

  it('shows performance recommendations when metrics are poor', () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'development';

    // Mock poor performance metrics
    mockPerformance.getEntriesByName.mockReturnValue([
      { startTime: 2000 }, // Poor FCP
    ]);

    render(<AdvancedPerformanceMonitor enableRealTimeMonitoring={true} />);

    // Should show recommendations for poor performance
    expect(screen.getByText('Recommendations:')).toBeInTheDocument();

    process.env.NODE_ENV = originalEnv;
  });
});
