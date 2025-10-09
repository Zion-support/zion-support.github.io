import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import AdvancedErrorBoundary from '../app/components/AdvancedErrorBoundary';
import AdvancedSEOOptimizer from '../app/components/AdvancedSEOOptimizer';

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
      <AdvancedErrorBoundary>
        <div>Test content</div>
      </AdvancedErrorBoundary>
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