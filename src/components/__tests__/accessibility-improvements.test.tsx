import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import SEOOptimizer from '../SEOOptimizer';
import AdvancedCacheManager from '../AdvancedCacheManager';
import RealTimeAnalytics from '../RealTimeAnalytics';
import AccessibilityEnhancements from '../AccessibilityEnhancements';

// Mock Next.js Head component
jest.mock('next/head', () => {
  return function Head({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
  };
});

describe('SEOOptimizer', () => {
  const mockSEOData = {
    title: 'Test Page Title',
    description: 'Test page description',
    keywords: ['test', 'seo', 'optimization'],
    canonical: 'http, s://example.com/test',
    ogImage: 'http, s://example.com/og-image.jpg',
    twitterCard: 'summary_large_image',
    structuredData: {
      '@context': 'http, s://schema.org',
      '@type': 'WebPage',
      name: 'Test Page'
    }
  };

  it('renders SEO optimizer component', () => {
    render(<SEOOptimizer seoData={mockSEOData} />);
    
    // Check that the component renders without errors
    expect(document.querySelector('title')).toHaveTextContent('Test Page Title');
    expect(document.querySelector('meta[name="description"]')).toHaveAttribute('content', 'Test page description');
  });

  it('applies SEO data correctly', () => {
    render(<SEOOptimizer seoData={mockSEOData} />);
    
    // Check if title is set
    expect(document.title).toBe(mockSEOData.title);
    
    // Check if meta description is set
    const metaDescription = document.querySelector('meta[name="description"]');
    expect(metaDescription).toHaveAttribute('content', mockSEOData.description);
    
    // Check if canonical link is set
    const canonical = document.querySelector('link[rel="canonical"]');
    expect(canonical).toHaveAttribute('href', mockSEOData.canonical);
  });
});

describe('AdvancedCacheManager', () => {
  it('renders cache manager component', () => {
    render(<AdvancedCacheManager />);
    
    expect(screen.getByText('Advanced Cache Manager')).toBeInTheDocument();
    expect(screen.getByText('Clear Cache')).toBeInTheDocument();
    expect(screen.getByText('Optimize')).toBeInTheDocument();
  });

  it('displays cache statistics', () => {
    render(<AdvancedCacheManager />);
    
    expect(screen.getByText('Hit Rate')).toBeInTheDocument();
    expect(screen.getByText('Miss Rate')).toBeInTheDocument();
    expect(screen.getByText('Total Requests')).toBeInTheDocument();
    expect(screen.getByText('Cache Size')).toBeInTheDocument();
    expect(screen.getByText('Memory Usage')).toBeInTheDocument();
  });

  it('handles cache clearing', async () => {
    render(<AdvancedCacheManager />);
    
    const clearButton = screen.getByText('Clear Cache');
    fireEvent.click(clearButton);
    
    // Button should be disabled during operation
    expect(clearButton).toBeDisabled();
    
    // Wait for operation to complete (increased timeout for async operation)
    await waitFor(() => {
      expect(clearButton).not.toBeDisabled();
    }, { timeout: 5000 });
  });

  it('handles cache optimization', async () => {
    render(<AdvancedCacheManager />);
    
    const optimizeButton = screen.getByText('Optimize');
    fireEvent.click(optimizeButton);
    
    // Button should be disabled during operation
    expect(optimizeButton).toBeDisabled();
    
    // Wait for operation to complete and check for strategies
    await waitFor(() => {
      expect(screen.getByText('Optimization Strategies Applied:')).toBeInTheDocument();
    }, { timeout: 5000 });
  });
});

describe('RealTimeAnalytics', () => {
  it('renders analytics component', () => {
    render(<RealTimeAnalytics />);
    
    expect(screen.getByText('Real-Time Analytics')).toBeInTheDocument();
    expect(screen.getByText('Page Views')).toBeInTheDocument();
    expect(screen.getByText('Unique Visitors')).toBeInTheDocument();
    expect(screen.getByText('Bounce Rate')).toBeInTheDocument();
    expect(screen.getByText('Avg. Session')).toBeInTheDocument();
  });

  it('displays live status', () => {
    render(<RealTimeAnalytics />);
    
    expect(screen.getByText('Live')).toBeInTheDocument();
  });

  it('handles pause/resume functionality', () => {
    render(<RealTimeAnalytics />);
    
    const pauseButton = screen.getByText('Pause');
    fireEvent.click(pauseButton);
    
    expect(screen.getByText('Paused')).toBeInTheDocument();
    expect(screen.getByText('Resume')).toBeInTheDocument();
  });

  it('displays top pages and traffic sources', () => {
    render(<RealTimeAnalytics />);
    
    expect(screen.getByText('Top Pages')).toBeInTheDocument();
    expect(screen.getByText('Traffic Sources')).toBeInTheDocument();
  });
});

describe('AccessibilityEnhancements', () => {
  it('renders accessibility component', () => {
    render(<AccessibilityEnhancements />);
    
    expect(screen.getByText('Accessibility Enhancements')).toBeInTheDocument();
    expect(screen.getByText('High Contrast Mode')).toBeInTheDocument();
    expect(screen.getByText('Large Text')).toBeInTheDocument();
    expect(screen.getByText('Reduced Motion')).toBeInTheDocument();
    expect(screen.getByText('Keyboard Navigation')).toBeInTheDocument();
  });

  it('displays accessibility score', () => {
    render(<AccessibilityEnhancements />);
    
    expect(screen.getByText(/% Accessible/)).toBeInTheDocument();
  });

  it('toggles accessibility features', () => {
    render(<AccessibilityEnhancements />);
    
    const highContrastCheckbox = screen.getByLabelText('High Contrast Mode');
    expect(highContrastCheckbox).not.toBeChecked();
    
    fireEvent.click(highContrastCheckbox);
    expect(highContrastCheckbox).toBeChecked();
  });

  it('shows recommendations when features are disabled', () => {
    render(<AccessibilityEnhancements />);
    
    // Initially should show recommendations
    expect(screen.getByText('Recommendations')).toBeInTheDocument();
  });

  it('shows success message when all features are enabled', () => {
    render(<AccessibilityEnhancements />);
    
    // Enable all features
    const checkboxes = screen.getAllByRole('checkbox');
    checkboxes.forEach(checkbox => {
      if (!checkbox.checked) {
        fireEvent.click(checkbox);
      }
    });
    
    // Should show success message
    expect(screen.getByText(/All accessibility features are enabled/)).toBeInTheDocument();
  });

  it('displays accessibility standards', () => {
    render(<AccessibilityEnhancements />);
    
    expect(screen.getByText('Accessibility Standards')).toBeInTheDocument();
    expect(screen.getByText(/WCAG 2.1 AA compliance/)).toBeInTheDocument();
    expect(screen.getByText(/Section 508 compliance/)).toBeInTheDocument();
    expect(screen.getByText(/ARIA labels and roles/)).toBeInTheDocument();
  });
});

describe('Integration Tests', () => {
  it('all components work together without conflicts', () => {
    const mockSEOData = {
      title: 'Test Page',
      description: 'Test description',
      keywords: ['test'],
      canonical: 'http, s://example.com',
      ogImage: 'http, s://example.com/image.jpg',
      twitterCard: 'summary',
      structuredData: {}
    };

    render(
      <div>
        <SEOOptimizer seoData={mockSEOData} />
        <AdvancedCacheManager />
        <RealTimeAnalytics />
        <AccessibilityEnhancements />
      </div>
    );

    // All components should render without errors
    expect(screen.getByText('Advanced Cache Manager')).toBeInTheDocument();
    expect(screen.getByText('Real-Time Analytics')).toBeInTheDocument();
    expect(screen.getByText('Accessibility Enhancements')).toBeInTheDocument();
  });
});