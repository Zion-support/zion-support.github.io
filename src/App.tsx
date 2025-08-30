import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { LoadingSpinner } from './components/ui/loading-spinner';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage').then(module => ({ default: module.HomePage })));
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
const ComprehensiveServicesShowcase2025 = lazy(() => import('./pages/ComprehensiveServicesShowcase2025').then(module => ({ default: module.ComprehensiveServicesShowcase2025 })));
const PricingPage = lazy(() => import('./pages/PricingPage').then(module => ({ default: module.PricingPage })));

// Enhanced Layout Components
import { EnhancedHeader } from './components/EnhancedHeader';

// Enhanced Components
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { EnhancedAccessibilityEnhancer } from './components/EnhancedAccessibilityEnhancer';
import { SEO } from './components/SEO';
import FloatingActionButton from './components/FloatingActionButton';
import { AdvancedAnalytics } from './components/AdvancedAnalytics';
import { SmartNotificationSystem } from './components/SmartNotificationSystem';
import { AdvancedAnalyticsDashboard } from './components/AdvancedAnalyticsDashboard';
import { AIContentOptimizer } from './components/AIContentOptimizer';
import { SecurityMonitoringSystem } from './components/SecurityMonitoringSystem';
import { UserExperienceOptimizer } from './components/UserExperienceOptimizer';
import { ErrorBoundary } from './components/ErrorBoundary';

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
const About = createLazyComponent(() => import('./pages/About'));
const Contact = createLazyComponent(() => import('./pages/Contact'));
const Careers = createLazyComponent(() => import('./pages/Careers'));
const News = createLazyComponent(() => import('./pages/News'));
const CaseStudies = createLazyComponent(() => import('./pages/CaseStudies'));
const WhitePapers = createLazyComponent(() => import('./pages/WhitePapers'));
const Privacy = createLazyComponent(() => import('./pages/Privacy'));
const Terms = createLazyComponent(() => import('./pages/Terms'));

// Service pages
const Services = createLazyComponent(() => import('./pages/Services'));
const Services2027 = createLazyComponent(() => import('./pages/InnovativeServices2027'));
const AIServices = createLazyComponent(() => import('./pages/AIServices'));
const AISolutions = createLazyComponent(() => import('./pages/AISolutions'));
const ITServices = createLazyComponent(() => import('./pages/ITServices'));
const MicroSaaS = createLazyComponent(() => import('./pages/MicroSaaS'));
const MicroSAASSolutions = createLazyComponent(() => import('./pages/services/MicroSAASSolutions'));
const ComprehensiveServices = createLazyComponent(() => import('./pages/ComprehensiveServices'));

// Additional pages
const Partners = createLazyComponent(() => import('./pages/Partners'));
const HelpCenter = createLazyComponent(() => import('./pages/HelpCenter'));
const Documentation = createLazyComponent(() => import('./pages/Documentation'));
const Webinars = createLazyComponent(() => import('./pages/Webinars'));

// 2031 Cutting-Edge Services
const ZionCuttingEdgeServices2031 = lazy(() => import('./pages/ZionCuttingEdgeServices2031'));

// Comprehensive Pricing Guide 2031
const ComprehensivePricingGuide2031 = lazy(() => import('./pages/ComprehensivePricingGuide2031'));

// Enhanced Loading Spinner
const EnhancedLoadingSpinner = () => (
  <div className="min-h-screen bg-gray-900 flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-400">Loading Zion Tech Group...</p>
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary
      FallbackComponent={({ error, resetErrorBoundary }) => (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Something went wrong</h1>
            <p className="text-gray-400 mb-6">We're sorry, but something unexpected happened. Please try again.</p>
            <div className="space-y-3">
              <button
                onClick={resetErrorBoundary}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Try again
              </button>
              <button
                onClick={() => window.location.href = '/'}
                className="w-full bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Go home
              </button>
            </div>
          </div>
        </div>
      )}
    >
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Skip Link for Accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        
        <main id="main-content" className="flex-1">
          <Suspense fallback={<EnhancedLoadingSpinner />}>
            <Routes>
              {/* Core Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/help" element={<HelpCenter />} />
              <Route path="/cookies" element={<Privacy />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services2027" element={<Services2027 />} />
              
              {/* Service Routes */}
              <Route path="/ai-services" element={<AIServices />} />
              <Route path="/ai-solutions" element={<AISolutions />} />
              <Route path="/it-services" element={<ITServices />} />
              <Route path="/micro-saas" element={<MicroSaaS />} />
              <Route path="/services/micro-saas-solutions" element={<MicroSAASSolutions />} />
              <Route path="/comprehensive-services" element={<ComprehensiveServices />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/white-papers" element={<WhitePapers />} />
              <Route path="/webinars" element={<Webinars />} />
              <Route path="/training" element={<Training />} />
              <Route path="/support" element={<Support />} />
              <Route path="/documentation" element={<Documentation />} />
              
              {/* 2031 Cutting-Edge Services */}
              <Route path="/zion-cutting-edge-services-2031" element={<ZionCuttingEdgeServices2031 />} />
              <Route path="/cutting-edge-services-2031" element={<ZionCuttingEdgeServices2031 />} />
              
              {/* Comprehensive Pricing Guide 2031 */}
              <Route path="/comprehensive-pricing-2031" element={<ComprehensivePricingGuide2031 />} />
              
              {/* Catch-all route */}
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>

        {/* Performance Optimizer */}
        <PerformanceOptimizer enabled={true} />

        {/* Enhanced Accessibility */}
        <EnhancedAccessibilityEnhancer enabled={true} />

        {/* Advanced Analytics */}
        <AdvancedAnalytics enabled={true} showMetrics={true} />

        {/* Header */}
        <EnhancedHeader />

        {/* Floating Action Button */}
        <FloatingActionButton />

        {/* SEO */}
        <SEO />

        {/* AIContentOptimizer */}
        <AIContentOptimizer enabled={true} />

        {/* SecurityMonitoringSystem */}
        <SecurityMonitoringSystem enabled={true} />

        {/* UserExperienceOptimizer */}
        <UserExperienceOptimizer enabled={true} />

        {/* SmartNotificationSystem */}
        <SmartNotificationSystem enabled={true} />

        {/* AdvancedAnalyticsDashboard */}
        <AdvancedAnalyticsDashboard enabled={true} />
      </div>
    </ErrorBoundary>
  );
}

export default App;