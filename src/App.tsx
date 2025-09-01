import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Sidebar } from './components/Sidebar';
import { ErrorBoundary } from 'react-error-boundary';
import { LoadingSpinner } from './components/ui/loading-spinner';

// Enhanced Components
import PerformanceOptimizer from './components/PerformanceOptimizer';
import EnhancedAccessibilityEnhancer from './components/EnhancedAccessibilityEnhancer';
import { MobileExperienceEnhancer } from './components/MobileExperienceEnhancer';
import { ChatAssistant } from './components/ChatAssistant';

// Enhanced lazy loading with preloading hints
const createLazyComponent = (importFn: () => Promise<any>, fallback?: React.ReactNode) => {
  const LazyComponent = lazy(importFn);
  return (props: any) => (
    <Suspense fallback={fallback || <LoadingSpinner />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

// Lazy load pages for better performance
const HomePage = lazy(() => import('../pages/index').then(module => ({ default: module.default })));
const ServicesPage = lazy(() => import('../pages/services-simple').then(module => ({ default: module.default })));
const SolutionsPage = lazy(() => import('../pages/solutions').then(module => ({ default: module.default })));
const AboutPage = lazy(() => import('../pages/about').then(module => ({ default: module.default })));
const ContactPage = lazy(() => import('../pages/contact').then(module => ({ default: module.default })));
const BlogPage = lazy(() => import('../pages/blog').then(module => ({ default: module.default })));
const NotFoundPage = lazy(() => import('../pages/404').then(module => ({ default: module.default })));
const ComprehensiveServicesPage = lazy(() => import('../pages/comprehensive-services').then(module => ({ default: module.default })));
const Sitemap = lazy(() => import('../pages/sitemap').then(module => ({ default: module.default })));
const ComprehensiveSitemap = lazy(() => import('../pages/comprehensive-sitemap').then(module => ({ default: module.default })));
const Support = lazy(() => import('../pages/support').then(module => ({ default: module.default })));
const Training = lazy(() => import('../pages/training').then(module => ({ default: module.default })));
const Helpdesk = lazy(() => import('../pages/helpdesk').then(module => ({ default: module.default })));
const RevolutionaryServicesPage = lazy(() => import('../pages/revolutionary-services').then(module => ({ default: module.default })));
const NewServicesShowcase2025 = lazy(() => import('../pages/new-services-2025').then(module => ({ default: module.default })));
const EnhancedNewServices2025 = lazy(() => import('../pages/enhanced-new-services-2025').then(module => ({ default: module.default })));
const ComprehensiveServicesShowcase2025 = lazy(() => import('../pages/comprehensive-services-showcase-2025').then(module => ({ default: module.default })));
const PricingPage = lazy(() => import('../pages/pricing').then(module => ({ default: module.default })));

// Service Pages - Commented out as they may not exist
// const AISolutions = lazy(() => import('./pages/services/AISolutions').then(module => ({ default: module.AISolutions })));
// const QuantumComputing = lazy(() => import('./pages/services/QuantumComputing').then(module => ({ default: module.QuantumComputing })));
// const Cybersecurity = lazy(() => import('./pages/services/Cybersecurity').then(module => ({ default: module.Cybersecurity })));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-900">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-500 mx-auto mb-4"></div>
      <p className="text-gray-400">Loading...</p>
    </div>
  </div>
);

// Remove unused lazy load components

function App() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <ErrorBoundary fallback={<div>Something went wrong. Please refresh the page.</div>}>
      <div className="App">
        <Header />
        <div className="flex pt-16">
          <Sidebar />
          <main className="flex-1 ml-64 min-h-screen">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services/*" element={<ServicesPage />} />
                {/* Commented out as components may not exist
                <Route path="/services/ai-solutions" element={<AISolutions />} />
                <Route path="/services/quantum-computing" element={<QuantumComputing />} />
                <Route path="/services/cybersecurity" element={<Cybersecurity />} />
                */}
                <Route path="/comprehensive-services" element={<ComprehensiveServicesPage />} />
                <Route path="/revolutionary-services" element={<RevolutionaryServicesPage />} />
                <Route path="/new-services-2025" element={<NewServicesShowcase2025 />} />
                <Route path="/enhanced-new-services-2025" element={<EnhancedNewServices2025 />} />
                <Route path="/comprehensive-services-showcase-2025" element={<ComprehensiveServicesShowcase2025 />} />
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
        </div>
        <Footer />
        
        {/* Enhanced Components */}
        <PerformanceOptimizer />
        <EnhancedAccessibilityEnhancer />
        <MobileExperienceEnhancer />
        <ChatAssistant />
      </div>
    </ErrorBoundary>
  );
}

export default App;