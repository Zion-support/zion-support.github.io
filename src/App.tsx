import React, { Suspense, lazy } from 'react';

import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Sidebar } from './components/Sidebar';
import { ErrorBoundary } from 'react-error-boundary';
import { LoadingSpinner } from './components/ui/loading-spinner';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage').then(module => ({ default: module.HomePage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(module => ({ default: module.ServicesPage })));
const SolutionsPage = lazy(() => import('./pages/SolutionsPage').then(module => ({ default: module.SolutionsPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(module => ({ default: module.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(module => ({ default: module.ContactPage })));
const BlogPage = lazy(() => import('./pages/BlogPage').then(module => ({ default: module.BlogPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(module => ({ default: module.NotFoundPage })));
const ComprehensiveServicesPage = lazy(() => import('./pages/ComprehensiveServicesPage').then(module => ({ default: module.ComprehensiveServicesPage })));
const ServicesShowcasePage = lazy(() => import('./pages/ServicesShowcasePage').then(module => ({ default: module.ServicesShowcasePage })));
const PricingPage = lazy(() => import('./pages/PricingPage').then(module => ({ default: module.PricingPage })));
const Sitemap = lazy(() => import('./pages/Sitemap').then(module => ({ default: module.default })));
const Support = lazy(() => import('./pages/Support').then(module => ({ default: module.default })));
const Training = lazy(() => import('./pages/Training').then(module => ({ default: module.default })));
const Helpdesk = lazy(() => import('./pages/Helpdesk').then(module => ({ default: module.default })));
const RevolutionaryServicesPage = lazy(() => import('./pages/RevolutionaryServicesPage').then(module => ({ default: module.RevolutionaryServicesPage })));
const NewServicesShowcase2025 = lazy(() => import('./pages/NewServicesShowcase2025').then(module => ({ default: module.NewServicesShowcase2025 })));
const ComprehensiveServicesShowcase2025 = lazy(() => import('./pages/ComprehensiveServicesShowcase2025').then(module => ({ default: module.ComprehensiveServicesShowcase2025 })));
const PricingPage = lazy(() => import('./pages/PricingPage').then(module => ({ default: module.PricingPage })));

// Enhanced Layout Components
import { EnhancedHeader } from './components/EnhancedHeader';
import { EnhancedFooter } from './components/EnhancedFooter';

// Enhanced Components
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import EnhancedAccessibilityEnhancer from './components/EnhancedAccessibilityEnhancer';
import { MobileExperienceEnhancer } from './components/MobileExperienceEnhancer';
import { SEO } from './components/SEO';
import { FloatingActionButton } from './components/FloatingActionButton';
import { AdvancedAnalytics } from './components/AdvancedAnalytics';
import { SmartNotificationSystem } from './components/SmartNotificationSystem';
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


// New AI Services 2025
const AISupplyChainOptimization = createLazyComponent(() => import('./pages/services/AI-Supply-Chain-Optimization'));
const AICybersecurity = createLazyComponent(() => import('./pages/services/AI-Cybersecurity-Platform'));
const AIHealthcare = createLazyComponent(() => import('./pages/services/AI-Healthcare-Platform'));
const AIQuantumHybridPlatform = createLazyComponent(() => import('./pages/services/AI-Quantum-Hybrid-Platform'));

// Showcase pages
const ComprehensiveServicesShowcase2025 = createLazyComponent(() => import('./pages/ComprehensiveServicesShowcase2025'));

// 2031 Cutting-Edge Services
const ZionCuttingEdgeServices2031 = createLazyComponent(() => import('./pages/ZionCuttingEdgeServices2031'));

// Comprehensive Pricing Guide 2031
const ComprehensivePricingGuide2031 = createLazyComponent(() => import('./pages/ComprehensivePricingGuide2031'));

// Additional pages that actually exist
const Solutions = createLazyComponent(() => import('./pages/solutions'));
const CaseStudies = createLazyComponent(() => import('./pages/case-studies'));
const WhitePapers = createLazyComponent(() => import('./pages/WhitePapers'));
const Webinars = createLazyComponent(() => import('./pages/Webinars'));
const RequestQuote = createLazyComponent(() => import('./pages/RequestQuote'));
const Dashboard = createLazyComponent(() => import('./pages/Dashboard'));
const Login = createLazyComponent(() => import('./pages/Login'));
const FAQ = createLazyComponent(() => import('./pages/FAQ'));
const Help = createLazyComponent(() => import('./pages/Help'));
const Privacy = createLazyComponent(() => import('./pages/Privacy'));
const Terms = createLazyComponent(() => import('./pages/Terms'));


function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        <div className="flex pt-16">
          <Sidebar />
          <main className="flex-1 ml-64 min-h-screen">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services/*" element={<ServicesPage />} />
                <Route path="/comprehensive-services" element={<ComprehensiveServicesPage />} />
                <Route path="/services-showcase" element={<ServicesShowcasePage />} />
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
      </div>
    </ErrorBoundary>
=======
    <div className="App">
      <ErrorBoundary>
        <PerformanceOptimizer>
          <EnhancedAccessibilityEnhancer>
            <MobileExperienceEnhancer>
              <SEO />
              <Header />
              <Sidebar />
              <main className="main-content">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/solutions" element={<SolutionsPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/press" element={<Press />} />
                  <Route path="/case-studies" element={<CaseStudies />} />
                  <Route path="/white-papers" element={<WhitePapers />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/comprehensive-services" element={<ComprehensiveServicesPage />} />
                  <Route path="/revolutionary-services" element={<RevolutionaryServicesPage />} />
                  <Route path="/new-services-2025" element={<NewServicesShowcase2025 />} />
                  <Route path="/comprehensive-services-2025" element={<ComprehensiveServicesShowcase2025 />} />
                  <Route path="/sitemap" element={<Sitemap />} />
                  <Route path="/support" element={<Support />} />
                  <Route path="/training" element={<Training />} />
                  <Route path="/helpdesk" element={<Helpdesk />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </main>
              <Footer />
              <FloatingActionButton />
              <ChatAssistant />
              <AdvancedAnalytics />
              <SmartNotificationSystem />
            </MobileExperienceEnhancer>
          </EnhancedAccessibilityEnhancer>
        </PerformanceOptimizer>
      </ErrorBoundary>
    </div>

>>>>>>> af3952a87beab0a7961fe3a2e1e9482265ebc0e2
  );
}

export default App;