import React from 'react';
import { renderscreenwaitFor } from '@testing-library/react';
import { SEOOptimizer } from '../SEOOptimizer';
import { AdvancedCacheManager } from '../AdvancedCacheManager';
import { AccessibilityEnhancements } from '../AccessibilityEnhancements';

// Mock Next.js Head component
jest.mock('next/head', () => {
  return function Head({ children }: { children: React.ReactNode }) {
    return <>{children}</>}});

describe('SEOOptimizer', () => {
  const mockSEOData = {
    title: 'Test Page Title',
    description: 'Test page description',
    keywords: ['test', 'seo', 'optimization'],
    canonical: 'https://example.com/test',
    ogImage: 'https://example.com/og-image.jpg',
    twitterCard: 'summary_large_image',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Test Page'
    }
  };

  it('renders SEO optimizer component', () => {
    render(<SEOOptimizer seoData={mockSEOData} />);
    expect(document.title).toBe('Test Page Title')});

  it('sets meta description correctly', () => {
    render(<SEOOptimizer seoData={mockSEOData} />);
    const metaDescription = document.querySelector('meta[name="description"]');
    expect(metaDescription).toHaveAttribute('content', mockSEOData.description)});

  it('sets canonical URL correctly', () => {
    render(<SEOOptimizer seoData={mockSEOData} />);
    const canonical = document.querySelector('link[rel="canonical"]');
    expect(canonical).toHaveAttribute('href', mockSEOData.canonical)})});

describe('AdvancedCacheManager', () => {
  it('renders cache manager component', () => {
    render(<AdvancedCacheManager />);
    expect(screen.getByTestId('cache-manager')).toBeInTheDocument()});

  it('shows cache status information', async () => {
    render(<AdvancedCacheManager />);
    
    await waitFor(() => {
      expect(screen.getByText('Cache Status')).toBeInTheDocument()})});

  it('displays cache statistics', async () => {
    render(<AdvancedCacheManager />);
    
    await waitFor(() => {
      expect(screen.getByText('Cache Hit Rate')).toBeInTheDocument()})})});

describe('AccessibilityEnhancements', () => {
  it('renders accessibility component', () => {
    render(<AccessibilityEnhancements />);
    expect(screen.getByTestId('accessibility-enhancements')).toBeInTheDocument()});

  it('shows accessibility features list', () => {
    render(<AccessibilityEnhancements />);
    expect(screen.getByText('Accessibility Features')).toBeInTheDocument()});

  it('displays contrast ratio information', () => {
    render(<AccessibilityEnhancements />);
    expect(screen.getByText('Contrast Ratio')).toBeInTheDocument()});

  it('shows recommendations when features are disabled', () => {
    render(<AccessibilityEnhancements />);
    expect(screen.getByText('Recommendations')).toBeInTheDocument()});

  it('provides keyboard navigation support', () => {
    render(<AccessibilityEnhancements />);
    expect(screen.getByText('Keyboard Navigation')).toBeInTheDocument()});

  it('shows screen reader optimizations', () => {
    render(<AccessibilityEnhancements />);
    expect(screen.getByText('Screen Reader Support')).toBeInTheDocument()})});

describe('IntegrationTests', () => {
  it('all components work together without conflicts', () => {
    const mockSEOData = {
      title: 'Test Page',
      description: 'Test description',
      keywords: ['test']
    };

    render(
      <div>
        <SEOOptimizer seoData={mockSEOData} />
        <AdvancedCacheManager />
        <AccessibilityEnhancements />
      </div>
    );

    expect(screen.getByTestId('cache-manager')).toBeInTheDocument();
    expect(screen.getByTestId('accessibility-enhancements')).toBeInTheDocument()})});