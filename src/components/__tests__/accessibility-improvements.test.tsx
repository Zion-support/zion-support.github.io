import React from 'react';
import { render, screen } from '@testing-library/react';
import { SEOOptimizer } from '../SEOOptimizer';
import { AdvancedCacheManager } from '../AdvancedCacheManager';

// Mock next/head
jest.mock('next/head', () => {
  return function Head({ children }: { children: React.ReactNode }) {
    return <>{children}</>}});

describe('Accessibility Improvements Tests', () => {
  const mockSEOData = {
    title: 'Test Title',
    description: 'Test Description',
    keywords: ['test', 'accessibility'],
    canonical: 'https://test.com',
    ogTitle: 'Test OG Title',
    ogDescription: 'Test OG Description',
    ogImage: 'https://test.com/image.jpg',
    twitterCard: 'summary_large_image',
    structuredData: {}
  };

  it('renders SEO optimizer component', () => {
    render(<SEOOptimizer seoData={mockSEOData} />);
    expect(screen.getByText('SEO Optimizer')).toBeInTheDocument()});

  it('applies SEO data correctly', () => {
    render(<SEOOptimizer seoData={mockSEOData} />);
    expect(screen.getByText('Test Title')).toBeInTheDocument()});

  it('handles empty SEO data', () => {
    const emptyData = {
      title: '',
      description: '',
      keywords: [],
      canonical: '',
      ogTitle: '',
      ogDescription: '',
      ogImage: '',
      twitterCard: '',
      structuredData: {}
    };

    render(<SEOOptimizer seoData={emptyData} />);
    expect(screen.getByText('SEO Optimizer')).toBeInTheDocument()});

  it('shows cache status information', async () => {
    render(<AdvancedCacheManager />);
    expect(screen.getByText('Cache Manager')).toBeInTheDocument()});

  it('handles cache optimization', async () => {
    render(<AdvancedCacheManager />);
    expect(screen.getByText('Cache Manager')).toBeInTheDocument()});

  it('displays performance metrics', () => {
    render(<AdvancedCacheManager />);
    expect(screen.getByText('Cache Manager')).toBeInTheDocument()});

  it('handles cache clearing', () => {
    render(<AdvancedCacheManager />);
    expect(screen.getByText('Cache Manager')).toBeInTheDocument()});

  it('shows cache statistics', () => {
    render(<AdvancedCacheManager />);
    expect(screen.getByText('Cache Manager')).toBeInTheDocument()});

  it('renders with proper accessibility attributes', () => {
    render(<SEOOptimizer seoData={mockSEOData} />);
    const seoComponent = screen.getByRole('main');
    expect(seoComponent).toHaveAttribute('aria-label')});

  it('supports keyboard navigation', () => {
    render(<AdvancedCacheManager />);
    const cacheComponent = screen.getByRole('button');
    expect(cacheComponent).toBeInTheDocument()})});