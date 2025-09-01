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

// Core pages with optimized imports
const Home = createLazyComponent(() => import('./pages/Home'));
const Home2026 = createLazyComponent(() => import('./pages/Home2026'));
const About = createLazyComponent(() => import('./pages/About'));
const Contact = createLazyComponent(() => import('./pages/Contact'));
const Careers = createLazyComponent(() => import('./pages/Careers'));
const News = createLazyComponent(() => import('./pages/News'));
const Press = createLazyComponent(() => import('./pages/Press'));
const CaseStudies = createLazyComponent(() => import('./pages/CaseStudies'));
const WhitePapers = createLazyComponent(() => import('./pages/WhitePapers'));
const Privacy = createLazyComponent(() => import('./pages/Privacy'));
const Terms = createLazyComponent(() => import('./pages/Terms'));

function App() {
  return (
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
  );
}

export default App;
