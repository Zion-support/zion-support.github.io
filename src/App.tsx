import React, { Suspense, lazy, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { LoadingSpinner } from './components/ui/loading-spinner';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

// Enhanced lazy loading with preloading hints
const createLazyComponent = (
  importFn: () => Promise<{ default: React.ComponentType<any> }>,
  fallback?: React.ReactNode
) => {
  const LazyComponent = lazy(importFn);
  return (props: any) => (
    <Suspense fallback={fallback || <LoadingSpinner />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage').then(module => ({ default: module.HomePage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const SolutionsPage = lazy(() => import('./pages/SolutionsPage').then(module => ({ default: module.SolutionsPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(module => ({ default: module.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(module => ({ default: module.ContactPage })));
const BlogPage = lazy(() => import('./pages/BlogPage').then(module => ({ default: module.BlogPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(module => ({ default: module.NotFoundPage })));
const ComprehensiveServicesPage = lazy(() => import('./pages/ComprehensiveServicesPage'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
const ComprehensiveSitemap = lazy(() => import('./pages/ComprehensiveSitemap'));
const Support = lazy(() => import('./pages/Support'));
const Training = lazy(() => import('./pages/Training'));
const Helpdesk = lazy(() => import('./pages/Helpdesk'));
const RevolutionaryServicesPage = lazy(() => import('./pages/RevolutionaryServicesPage').then(module => ({ default: module.RevolutionaryServicesPage })));
const PricingPage = lazy(() => import('./pages/PricingPage'));

// Service Pages
const AIThreatIntelligence = lazy(() => import('../backup-pages/src-pages/services/ai-threat-intelligence-platform').then(module => ({ default: module.AIThreatIntelligencePlatform })));
const BlockchainSupplyChain = lazy(() => import('../backup-pages/src-pages/services/blockchain-supply-chain-platform').then(module => ({ default: module.BlockchainSupplyChainPlatform })));
const AdvancedServicesShowcase = lazy(() => import('../backup-pages/src-pages/AdvancedServicesShowcase2028').then(module => ({ default: module.AdvancedServicesShowcase2028 })));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-900">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-500 mx-auto mb-4"></div>
      <p className="text-gray-400">Loading...</p>
    </div>
  </div>
);

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <ErrorBoundary fallback={<div>Something went wrong. Please refresh the page.</div>}>
      <div className="App">
        <Header />
        <div className="flex pt-16">
          <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
          <main className="flex-1 ml-64 min-h-screen">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services/*" element={<ServicesPage />} />
                <Route path="/services/ai-threat-intelligence" element={<AIThreatIntelligence />} />
                <Route path="/services/blockchain-supply-chain" element={<BlockchainSupplyChain />} />
                <Route path="/advanced-services-2028" element={<AdvancedServicesShowcase />} />
                <Route path="/comprehensive-services" element={<ComprehensiveServicesPage />} />
                <Route path="/revolutionary-services" element={<RevolutionaryServicesPage />} />
                <Route path="/pricing" element={<PricingPage />} />
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
                <Route path="/sitemap" element={<Sitemap />} />
                <Route path="/comprehensive-sitemap" element={<ComprehensiveSitemap />} />
                <Route path="/support" element={<Support />} />
                <Route path="/training" element={<Training />} />
                <Route path="/helpdesk" element={<Helpdesk />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </main>
        </div>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;

