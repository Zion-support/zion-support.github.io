import React from 'react';
import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import SEOOptimizer from '../../app/components/SEOOptimizer';

const renderWithHelmet = (component: React.ReactElement) => {
  return render(
    <HelmetProvider>
      {component}
    </HelmetProvider>
  );
};

describe('SEOOptimizer Component', () => {
  test('renders without crashing', () => {
    renderWithHelmet(<SEOOptimizer title="Test Title" description="Test Description" keywords={['test', 'keywords']} />);
    expect(document.title).toBe('Test Title');
  });

  test('sets document title correctly', () => {
    renderWithHelmet(<SEOOptimizer title="Custom Title" description="Test Description" keywords={['test']} />);
    expect(document.title).toBe('Custom Title');
  });

  test('sets meta description', () => {
    renderWithHelmet(<SEOOptimizer title="Test" description="Custom Description" keywords={['test']} />);
    const metaDescription = document.querySelector('meta[name="description"]');
    expect(metaDescription).toHaveAttribute('content', 'Custom Description');
  });

  test('sets meta keywords', () => {
    renderWithHelmet(<SEOOptimizer title="Test" description="Test" keywords={['keyword1', 'keyword2', 'keyword3']} />);
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    expect(metaKeywords).toHaveAttribute('content', 'keyword1, keyword2, keyword3');
  });

  test('sets Open Graph tags', () => {
    renderWithHelmet(<SEOOptimizer title="Test" description="Test" keywords={['test']} />);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    expect(ogTitle).toHaveAttribute('content', 'Test');
    expect(ogDescription).toHaveAttribute('content', 'Test');
  });

  test('sets Twitter Card tags', () => {
    renderWithHelmet(<SEOOptimizer title="Test" description="Test" keywords={['test']} />);
    const twitterCard = document.querySelector('meta[name="twitter:card"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    expect(twitterCard).toHaveAttribute('content', 'summary_large_image');
    expect(twitterTitle).toHaveAttribute('content', 'Test');
  });

  test('handles empty keywords array', () => {
    renderWithHelmet(<SEOOptimizer title="Test" description="Test" keywords={[]} />);
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    expect(metaKeywords).toHaveAttribute('content', '');
  });

  test('handles undefined keywords', () => {
    renderWithHelmet(<SEOOptimizer title="Test" description="Test" keywords={undefined as any} />);
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    expect(metaKeywords).toHaveAttribute('content', '');
  });
});