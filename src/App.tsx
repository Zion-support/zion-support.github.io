import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from './components/error/ErrorBoundary';
import { Header } from './components/header/Header';
import { Footer } from './components/layout/Footer';
import { SEOHead } from './components/seo/SEOHead';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { PerformanceMonitor } from './components/performance/PerformanceMonitor';

// Service Worker Registration
const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('Service Worker registered successfully:', registration);
    } catch (error) {
      console.error('Service Worker registration failed:', error);
    }
  }
};

// Enhanced lazy loading with preloading hints
const createLazyComponent = (importFn: () => Promise<any>, fallback?: React.ReactNode) => {
  const LazyComponent = lazy(importFn);
  return (props: any) => (
    <Suspense fallback={fallback || <div>Loading...</div>}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage').then(module => ({ default: module.HomePage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(module => ({ default: module.default })));
const SolutionsPage = lazy(() => import('./pages/SolutionsPage').then(module => ({ default: module.SolutionsPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(module => ({ default: module.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(module => ({ default: module.ContactPage })));
const BlogPage = lazy(() => import('./pages/BlogPage').then(module => ({ default: module.BlogPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(module => ({ default: module.NotFoundPage })));
const ComprehensiveServicesPage = lazy(() => import('./pages/ComprehensiveServicesPage').then(module => ({ default: module.ComprehensiveServicesPage })));
const ComprehensiveServicesShowcase2026 = lazy(() => import('./pages/ComprehensiveServicesShowcase2026').then(module => ({ default: module.default })));
const ComprehensiveMarketingPage2026 = lazy(() => import('./pages/ComprehensiveMarketingPage2026').then(module => ({ default: module.default })));
const Sitemap = lazy(() => import('./pages/Sitemap').then(module => ({ default: module.default })));
const ComprehensiveSitemap = lazy(() => import('./pages/ComprehensiveSitemap').then(module => ({ default: module.ComprehensiveSitemap })));
const Support = lazy(() => import('./pages/Support').then(module => ({ default: module.default })));
const Training = lazy(() => import('./pages/Training').then(module => ({ default: module.default })));
const Helpdesk = lazy(() => import('./pages/Helpdesk').then(module => ({ default: module.default })));
const PricingPage = lazy(() => import('./pages/PricingPage').then(module => ({ default: module.PricingPage })));
const ComprehensivePricing = lazy(() => import('./pages/ComprehensivePricing2025').then(module => ({ default: module.default })));
const SimplePage = lazy(() => import('./pages/SimplePage').then(module => ({ default: module.default })));

// Service Pages - Updated to use backup-pages location
const AIThreatIntelligence = lazy(() => import('./backup-pages/src-pages/services/ai-threat-intelligence-platform').then(module => ({ default: module.AIThreatIntelligencePlatform })));
const BlockchainSupplyChain = lazy(() => import('./backup-pages/src-pages/services/blockchain-supply-chain-platform').then(module => ({ default: module.BlockchainSupplyChainPlatform })));
const AdvancedServicesShowcase = lazy(() => import('./backup-pages/src-pages/AdvancedServicesShowcase2028').then(module => ({ default: module.AdvancedServicesShowcase2028 })));

// Enhanced loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-900">
    <LoadingSpinner size="xl" color="primary" text="Loading page..." />
  </div>
);

function App() {
  useEffect(() => {
    registerServiceWorker();
  }, []);

  return (
    <ErrorBoundary>
      <div className="App min-h-screen flex flex-col">
        <SEOHead />
        <Header />
        <main className="flex-1">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/*" element={<ServicesPage />} />
              <Route path="/services/ai-threat-intelligence" element={<AIThreatIntelligence />} />
              <Route path="/services/blockchain-supply-chain" element={<BlockchainSupplyChain />} />
              <Route path="/advanced-services-2028" element={<AdvancedServicesShowcase />} />
              <Route path="/comprehensive-services" element={<ComprehensiveServicesPage />} />
              <Route path="/comprehensive-services-2026" element={<ComprehensiveServicesShowcase2026 />} />
              <Route path="/comprehensive-marketing-2026" element={<ComprehensiveMarketingPage2026 />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/comprehensive-pricing" element={<ComprehensivePricing />} />
              <Route path="/solutions" element={<SolutionsPage />} />
              <Route path="/solutions/*" element={<SolutionsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/about/*" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/*" element={<BlogPage />} />
              <Route path="/careers" element={<AboutPage />} />
              <Route path="/partners" element={<AboutPage />} />
              <Route path="/press" element={<AboutPage />} />
              <Route path="/case-studies" element={<BlogPage />} />
              <Route path="/research-development" element={<BlogPage />} />
              <Route path="/docs" element={<BlogPage />} />
              <Route path="/api" element={<BlogPage />} />
              <Route path="/developer" element={<BlogPage />} />
              <Route path="/help" element={<Helpdesk />} />
              <Route path="/training" element={<Training />} />
              <Route path="/community" element={<BlogPage />} />
              <Route path="/support" element={<Support />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/comprehensive-sitemap" element={<ComprehensiveSitemap />} />
              <Route path="/privacy-policy" element={<BlogPage />} />
              <Route path="/terms-of-service" element={<BlogPage />} />
              <Route path="/cookie-policy" element={<BlogPage />} />
              <Route path="/request-quote" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <PerformanceMonitor />
      </div>
    </ErrorBoundary>
  );
}

export default App;