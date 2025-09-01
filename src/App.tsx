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
const HomePage = lazy(() => import('./pages/Home'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const SolutionsPage = lazy(() => import('./pages/SolutionsPage'));
const AboutPage = lazy(() => import('./pages/About'));
const ContactPage = lazy(() => import('./pages/Contact'));
const BlogPage = lazy(() => import('./pages/Blog'));
const NotFoundPage = lazy(() => import('./pages/NotFound'));
const ComprehensiveServicesPage = lazy(() => import('./pages/ComprehensiveServicesPage'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
const ComprehensiveSitemap = lazy(() => import('./pages/ComprehensiveSitemap'));
const Support = lazy(() => import('./pages/Support'));
const Training = lazy(() => import('./pages/Training'));
const Helpdesk = lazy(() => import('./pages/Helpdesk'));
const RevolutionaryServicesPage = lazy(() => import('./pages/RevolutionaryServicesPage'));
const NewServicesShowcase2025 = lazy(() => import('./pages/NewServicesShowcase2025'));
const EnhancedNewServices2025 = lazy(() => import('./pages/EnhancedNewServices2025'));
const PricingPage = lazy(() => import('./pages/Pricing'));

// Service Pages
const AISolutions = lazy(() => import('./pages/services/AISolutions'));
const QuantumComputing = lazy(() => import('./pages/services/QuantumComputing'));
const Cybersecurity = lazy(() => import('./pages/services/Cybersecurity'));

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
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

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
                <Route path="/services/ai-solutions" element={<AISolutions />} />
                <Route path="/services/quantum-computing" element={<QuantumComputing />} />
                <Route path="/services/cybersecurity" element={<Cybersecurity />} />
                <Route path="/comprehensive-services" element={<ComprehensiveServicesPage />} />
                <Route path="/revolutionary-services" element={<RevolutionaryServicesPage />} />
                <Route path="/new-services-2025" element={<NewServicesShowcase2025 />} />
                <Route path="/enhanced-new-services-2025" element={<EnhancedNewServices2025 />} />
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