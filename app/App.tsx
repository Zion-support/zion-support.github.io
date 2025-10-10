'use client';

import React, { Suspense, memo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './globals.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './page';
import { PageLoader } from './components/LoadingStates';
import ErrorBoundary from './components/ErrorBoundary';
import SEOHead from './components/EnhancedSEOHead';
import SkipLink from './components/SkipLink';
import Breadcrumb from './components/Breadcrumb';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import EnhancedAccessibility from './components/EnhancedAccessibility';
import { usePerformanceMonitor } from './hooks/usePerformanceMonitor';
import { AnalyticsProvider } from './components/AnalyticsProvider';
import PerformanceMonitor from './components/PerformanceMonitor';

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import('./about/page'));
const ServicesPage = React.lazy(() => import('./services/page'));
const ContactPage = React.lazy(() => import('./contact/page'));
const BlogPage = React.lazy(() => import('./blog/page'));
const CaseStudiesPage = React.lazy(() => import('./case-studies/page'));
const PrivacyPage = React.lazy(() => import('./privacy/page'));
const TermsPage = React.lazy(() => import('./terms/page'));
const SitemapPage = React.lazy(() => import('./sitemap/page'));
const DocsPage = React.lazy(() => import('./docs/page'));
const ApiDocsPage = React.lazy(() => import('./api-docs/page'));
const SupportPage = React.lazy(() => import('./support/page'));
const StatusPage = React.lazy(() => import('./status/page'));
const DemoPage = React.lazy(() => import('./demo/page'));
const ConsultationPage = React.lazy(() => import('./consultation/page'));

// Structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Zion Tech Group",
  "url": "https://ziontechgroup.com",
  "logo": "https://ziontechgroup.com/logo.png",
  "description": "Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services. Transform your business with our advanced AI capabilities.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "364 E Main St STE 1008",
    "addressLocality": "Middletown",
    "addressRegion": "DE",
    "postalCode": "19709",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-302-464-0950",
    "contactType": "customer service",
    "email": "kleber@ziontechgroup.com"
  },
  "sameAs": [
    "https://linkedin.com/company/zion-tech-group",
    "https://twitter.com/ziontechgroup",
    "https://github.com/zion-tech-group"
  ],
  "foundingDate": "2020",
  "numberOfEmployees": "50-100",
  "industry": "Information Technology"
};

// Performance monitoring wrapper
const AppWithPerformanceMonitoring = memo(() => {
  usePerformanceMonitor();
  
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <SkipLink />
        <SEOHead 
          title="Zion Tech Group - AI-Powered Enterprise Solutions"
          description="Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services. Transform your business with our advanced AI capabilities."
          structuredData={structuredData}
        />
        <Navigation />
        <Breadcrumb />
        <main id="main-content" className="relative">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/sitemap" element={<SitemapPage />} />
              <Route path="/docs" element={<DocsPage />} />
              <Route path="/api-docs" element={<ApiDocsPage />} />
              <Route path="/support" element={<SupportPage />} />
              <Route path="/status" element={<StatusPage />} />
              <Route path="/demo" element={<DemoPage />} />
              <Route path="/consultation" element={<ConsultationPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <PerformanceMonitor />
      </div>
    </Router>
  );
});

AppWithPerformanceMonitoring.displayName = 'AppWithPerformanceMonitoring';

// Main App component
const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <AnalyticsProvider>
          <PerformanceOptimizer>
            <AccessibilityEnhancer>
              <EnhancedAccessibility>
                <AppWithPerformanceMonitoring />
              </EnhancedAccessibility>
            </AccessibilityEnhancer>
          </PerformanceOptimizer>
        </AnalyticsProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

App.displayName = 'App';

export default App;