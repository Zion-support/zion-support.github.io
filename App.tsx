import React, { memo, useMemo, Suspense, lazy } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WebVitals from './app/components/WebVitals';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import AnalyticsProvider from './app/components/AnalyticsProvider';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import PWAInstaller from './app/components/PWAInstaller';
import { GlobalErrorBoundary } from './app/components/GlobalErrorBoundary';
import LoadingSpinner from './app/components/LoadingSpinner';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./app/page'));
const AboutPage = lazy(() => import('./app/about/page'));
const ServicesPage = lazy(() => import('./app/services/page'));
const AIServicesPage = lazy(() => import('./app/ai-services/page'));
const ITServicesPage = lazy(() => import('./app/it-services/page'));
const MicroSAASPage = lazy(() => import('./app/micro-saas/page'));
const AdvertisingPage = lazy(() => import('./app/services-advertising/page'));
const CaseStudiesPage = lazy(() => import('./app/case-studies/page'));
const EnterprisePage = lazy(() => import('./app/enterprise/page'));
const TeamPage = lazy(() => import('./app/team/page'));
const ContactPage = lazy(() => import('./app/contact/page'));
const BlogPage = lazy(() => import('./app/blog/page'));
const PrivacyPage = lazy(() => import('./app/privacy/page'));
const TermsPage = lazy(() => import('./app/terms/page'));

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
    <GlobalErrorBoundary>
      <HelmetProvider>
        <Helmet>
          <title>Zion Tech Group - AI & IT Solutions</title>
          <meta
            name="description"
            content="Leading provider of AI-powered enterprise solutions and digital transformation services. Achieve 300% ROI with our cutting-edge AI technology."
          />
          <meta
            name="keywords"
            content="AI, artificial intelligence, enterprise solutions, digital transformation, IT services"
          />
          <meta property="og:title" content="Zion Tech Group - AI & IT Solutions" />
          <meta
            property="og:description"
            content="Transform your enterprise with AI-powered solutions achieving 300% ROI, 70% cost reduction, and 90% efficiency gains"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://ziontechgroup.com" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Zion Tech Group - AI & IT Solutions" />
          <meta
            name="twitter:description"
            content="Transform your enterprise with AI-powered solutions achieving 300% ROI, 70% cost reduction, and 90% efficiency gains"
          />
          <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        </Helmet>
        
        <Router>
          <AnalyticsProvider>
            <AccessibilityEnhancer>
              <PerformanceMonitor enableConsoleLogging={process.env.NODE_ENV === 'development'} />
              <WebVitals />
              <PWAInstaller />
              
              <div className="min-h-screen bg-white">
                <Suspense fallback={<LoadingSpinner fullScreen text="Loading..." />}>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/ai-services" element={<AIServicesPage />} />
                    <Route path="/it-services" element={<ITServicesPage />} />
                    <Route path="/micro-saas" element={<MicroSAASPage />} />
                    <Route path="/services-advertising" element={<AdvertisingPage />} />
                    <Route path="/case-studies" element={<CaseStudiesPage />} />
                    <Route path="/enterprise" element={<EnterprisePage />} />
                    <Route path="/team" element={<TeamPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/privacy" element={<PrivacyPage />} />
                    <Route path="/terms" element={<TermsPage />} />
                  </Routes>
                </Suspense>
              </div>
            </AccessibilityEnhancer>
          </AnalyticsProvider>
        </Router>
      </HelmetProvider>
    </GlobalErrorBoundary>
  );
}