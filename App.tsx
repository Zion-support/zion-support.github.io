import React, { memo, useMemo, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from './src/components/ErrorBoundary';
import SEOHead from './src/components/SEOHead';
import LoadingSpinner from './src/components/LoadingSpinner';
import PerformanceMonitor from './src/components/PerformanceMonitor';
import AccessibilityEnhancer from './src/components/AccessibilityEnhancer';

// Memoized components for better performance
const UnifiedContentPromotion = memo(() => (
  <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Latest AI Innovations</h2>
      <p className="text-xl">Discover cutting-edge AI solutions for your business</p>
    </div>
  </div>
));

const InteractiveAIROICalculator = memo(() => (
  <div className="bg-gray-50 py-16">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">AI ROI Calculator</h2>
      <p className="text-xl text-gray-600">Calculate your potential AI investment returns</p>
    </div>
  </div>
));

const ContentShowcase = memo(() => (
  <div className="py-16">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Featured Content</h2>
      <p className="text-xl text-gray-600">Explore our latest insights and case studies</p>
    </div>
  </div>
));

const InteractiveContentShowcase2026 = memo(() => (
  <div className="bg-blue-50 py-16">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">2026 Content Showcase</h2>
      <p className="text-xl text-gray-600">Latest trends and innovations for 2026</p>
    </div>
  </div>
));

// Loading component - now using the improved LoadingSpinner

// Error Boundary Component - now using the improved ErrorBoundary

export default function App() {
  const structuredData = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      description:
        'Leading provider of AI-powered enterprise solutions and digital transformation services',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/logo.png',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-302-464-0950',
        contactType: 'customer service',
        email: 'kleber@ziontechgroup.com',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '364 E Main St STE 1008',
        addressLocality: 'Middletown',
        addressRegion: 'DE',
        postalCode: '19709',
        addressCountry: 'US',
      },
      sameAs: ['https://linkedin.com/company/zion-tech-group', 'https://twitter.com/ziontechgroup'],
      offers: {
        '@type': 'Offer',
        name: 'AI Enterprise Transformation Services',
        description:
          'Transform your enterprise with AI-powered solutions achieving 300% ROI, 70% cost reduction, and 90% efficiency gains',
        price: '50000',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
    }),
    []
  );

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <SEOHead
          title="Zion Tech Group - Advanced AI and IT Solutions"
          description="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology."
          keywords={['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI', 'machine learning', 'automation', 'cloud services', 'cybersecurity', 'business intelligence']}
          canonicalUrl="https://ziontechgroup.com"
          structuredData={structuredData}
        />
        
        <PerformanceMonitor />
        <AccessibilityEnhancer
          enableKeyboardNavigation={true}
          enableScreenReader={true}
          enableHighContrast={true}
          enableFocusManagement={true}
          enableReducedMotion={true}
        />
        
        <div className="min-h-screen bg-white">
          <Suspense fallback={<LoadingSpinner size="lg" text="Loading content..." />}>
            <UnifiedContentPromotion />
          </Suspense>
          <Suspense fallback={<LoadingSpinner size="md" text="Loading AI calculator..." />}>
            <InteractiveAIROICalculator />
          </Suspense>
          <Suspense fallback={<LoadingSpinner size="md" text="Loading showcase..." />}>
            <ContentShowcase />
          </Suspense>
          <Suspense fallback={<LoadingSpinner size="md" text="Loading 2026 content..." />}>
            <InteractiveContentShowcase2026 />
          </Suspense>
        </div>
      </HelmetProvider>
    </ErrorBoundary>
  );
}
