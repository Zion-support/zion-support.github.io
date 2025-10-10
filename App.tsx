
import React, { Suspense, memo, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './src/styles/futuristic.css';
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import { PageLoader } from './src/components/EnhancedLoadingStates';
import EnhancedErrorBoundary from './src/components/EnhancedErrorBoundary';
import SEOHead from './src/components/EnhancedSEOHead';
import SkipLink from './src/components/SkipLink';
import UnifiedContentPromotion from './src/components/UnifiedContentPromotion';
import InteractiveAIROICalculator from './src/components/InteractiveAIROICalculator';
import ContentShowcase from './src/components/ContentShowcase';
import InteractiveContentShowcase2026 from './src/components/InteractiveContentShowcase2026';
import PerformanceOptimizer from './src/components/PerformanceOptimizer';
import AccessibilityEnhancer from './src/components/AccessibilityEnhancer';
import { usePerformanceMonitor } from './src/hooks/usePerformanceMonitor';
import { AnalyticsProvider } from './src/components/Analytics';

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
  "industry": "Information Technology",
  "services": [
    "AI Solutions",
    "Machine Learning",
    "Quantum Computing",
    "Digital Transformation",
    "IT Services",
    "Cybersecurity",
    "Cloud Computing",
    "Automation"
  ]
};

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import('./app/about/page'));
const ContactPage = React.lazy(() => import('./app/contact/page'));
const PricingPage = React.lazy(() => import('./app/pricing/page'));
const AIServicesPage = React.lazy(() => import('./app/ai-services/page'));
const ITServicesPage = React.lazy(() => import('./app/it-services/page'));
const MicroSaasPage = React.lazy(() => import('./app/micro-saas/page'));
const BlogPage = React.lazy(() => import('./app/blog/page'));
const CaseStudiesPage = React.lazy(() => import('./app/case-studies/page'));
const TeamPage = React.lazy(() => import('./app/team/page'));
const CareersPage = React.lazy(() => import('./app/careers/page'));
const PrivacyPage = React.lazy(() => import('./app/privacy/page'));
const TermsPage = React.lazy(() => import('./app/terms/page'));
const CookiesPage = React.lazy(() => import('./app/cookies/page'));
const DocsPage = React.lazy(() => import('./app/docs/page'));
const ApiDocsPage = React.lazy(() => import('./app/api-docs/page'));
const SupportPage = React.lazy(() => import('./app/support/page'));
const StatusPage = React.lazy(() => import('./app/status/page'));
const DemoPage = React.lazy(() => import('./app/demo/page'));
const ConsultationPage = React.lazy(() => import('./app/consultation/page'));
const ServicesPage = React.lazy(() => import('./app/services/page'));

// Performance monitoring hook
const AppWithPerformanceMonitoring: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { preloadCriticalResources } = usePerformanceMonitor();
  
  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered successfully:', registration);
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error);
        });
    }
    
    // Preload critical resources
    preloadCriticalResources();
  }, [preloadCriticalResources]);
  
  return <>{children}</>;
};

const App: React.FC = memo(() => {
  return (
    <EnhancedErrorBoundary>
      <HelmetProvider>
        <AnalyticsProvider>
          <PerformanceOptimizer>
            <AccessibilityEnhancer>
              <AppWithPerformanceMonitoring>
                <SEOHead />
                <Router>
                <div className="min-h-screen bg-white overflow-x-hidden">
                  <SkipLink to="#main-content">Skip to main content</SkipLink>
                  <Navigation />
                  <main id="main-content" className="w-full">
                    <Suspense fallback={<PageLoader message="Loading Zion Tech Group..." />}>
                    <Routes>
                      <Route path="/" element={
                        <div className="w-full">
                          <UnifiedContentPromotion />
                          <InteractiveAIROICalculator />
                          <ContentShowcase />
                          <InteractiveContentShowcase2026 />
                        </div>
                      } />
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="/contact" element={<ContactPage />} />
                      <Route path="/pricing" element={<PricingPage />} />
                      <Route path="/ai-services" element={<AIServicesPage />} />
                      <Route path="/it-services" element={<ITServicesPage />} />
                      <Route path="/micro-saas" element={<MicroSaasPage />} />
                      <Route path="/blog" element={<BlogPage />} />
                      <Route path="/case-studies" element={<CaseStudiesPage />} />
                      <Route path="/team" element={<TeamPage />} />
                      <Route path="/careers" element={<CareersPage />} />
                      <Route path="/privacy" element={<PrivacyPage />} />
                      <Route path="/terms" element={<TermsPage />} />
                      <Route path="/cookies" element={<CookiesPage />} />
                      <Route path="/docs" element={<DocsPage />} />
                      <Route path="/api-docs" element={<ApiDocsPage />} />
                      <Route path="/support" element={<SupportPage />} />
                      <Route path="/status" element={<StatusPage />} />
                      <Route path="/demo" element={<DemoPage />} />
                      <Route path="/consultation" element={<ConsultationPage />} />
                      <Route path="/services" element={<ServicesPage />} />
                    </Routes>
                  </Suspense>
                  </main>
                  <Footer />
                </div>
                </Router>
              </AppWithPerformanceMonitoring>
            </AccessibilityEnhancer>
          </PerformanceOptimizer>
        </AnalyticsProvider>
      </HelmetProvider>
    </EnhancedErrorBoundary>
  );
}