import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

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
import { LoadingSpinner } from './components/ui/loading-spinner';
import { EnhancedHeader } from './components/EnhancedHeader';
import { HelmetProvider } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';

// Enhanced lazy loading with preloading hints
const createLazyComponent = (importFn: () => Promise<any>, fallback?: React.ReactNode) => {
  const LazyComponent = lazy(importFn);
  return (props: any) => (
    <Suspense fallback={fallback || <LoadingSpinner /> }>
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

// AI Service pages
const AIFinancialTrading = createLazyComponent(() => import('./pages/services/AIFinancialTrading'));
const AIIoTEdgeComputing = createLazyComponent(() => import('./pages/services/AIIoTEdgeComputing'));
const API = createLazyComponent(() => import('./pages/API'));
const DeveloperPortal = createLazyComponent(() => import('./pages/DeveloperPortal'));
const AIBusinessIntelligence = createLazyComponent(() => import('./pages/services/AIBusinessIntelligence'));
const DigitalTransformation = createLazyComponent(() => import('./pages/services/DigitalTransformation'));
const AIESGCompliancePlatform = createLazyComponent(() => import('./pages/services/AIESGCompliancePlatform'));
const AIDigitalTwinPlatform = createLazyComponent(() => import('./pages/services/AIDigitalTwinPlatform'));
const AIEdgeComputingPlatform = createLazyComponent(() => import('./pages/services/AIEdgeComputingPlatform'));
const ITInfrastructure = createLazyComponent(() => import('./pages/services/ITInfrastructure'));
const MicroCRM = createLazyComponent(() => import('./pages/services/MicroCRM'));
const AIAutonomousResearchAssistant = createLazyComponent(() => import('./pages/services/AIAutonomousResearchAssistant'));

// Showcase pages
const ComprehensiveServicesShowcase2025Page = createLazyComponent(() => import('./pages/ComprehensiveServicesShowcase2025'));
const ComprehensiveServicesLanding2025 = createLazyComponent(() => import('./pages/ComprehensiveServicesLanding2025'));
const UltimateServicesShowcase2026 = createLazyComponent(() => import('./pages/UltimateServicesShowcase2026'));
const InnovativeServicesShowcase2025 = createLazyComponent(() => import('./pages/InnovativeServicesShowcase2025'));

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <div className="App min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
          <SEO
            title="Zion Tech Group - Leading AI & Technology Solutions"
            description="Transform your business with Zion Tech Group's cutting-edge AI solutions, quantum computing, and innovative micro SAAS services."
            keywords="AI solutions, quantum computing, micro SAAS, technology consulting, digital transformation"
            ogImage="/og-image.jpg"
            canonicalUrl="https://ziontechgroup.com"
          />

          <PerformanceOptimizer enabled={true} />
          <EnhancedHeader />

          <main className="flex-1">
            <Suspense fallback={<LoadingSpinner /> }>
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/help" element={<HelpCenter />} />
                  <Route path="/cookies" element={<div />} />
                  <Route path="/sitemap" element={<Sitemap />} />
                  <Route path="/marketplace" element={<div />} />
                  <Route path="/login" element={<div />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/services2027" element={<Services2027 />} />

                  <Route path="/ai-services" element={<AIServices />} />
                  <Route path="/ai-solutions" element={<AISolutions />} />
                  <Route path="/it-services" element={<ITServices />} />
                  <Route path="/micro-saas" element={<MicroSaaS />} />
                  <Route path="/services/micro-saas-solutions" element={<MicroSAASSolutions />} />
                  <Route path="/comprehensive-services" element={<ComprehensiveServices />} />
                  <Route path="/search" element={<div />} />
                  <Route path="/case-studies" element={<CaseStudies />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/white-papers" element={<WhitePapers />} />
                  <Route path="/webinars" element={<Webinars />} />
                  <Route path="/training" element={<Training />} />
                  <Route path="/support" element={<Support />} />
                  <Route path="/documentation" element={<Documentation />} />

                  <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                  <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                  <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
                  <Route path="/services/micro-crm" element={<MicroCRM />} />
                  <Route path="/services/ai-autonomous-research-assistant" element={<AIAutonomousResearchAssistant />} />
                  <Route path="/services/ai-financial-trading" element={<AIFinancialTrading />} />
                  <Route path="/services/ai-iot-edge-computing" element={<AIIoTEdgeComputing />} />

                  <Route path="/comprehensive-services-showcase-2025" element={<ComprehensiveServicesShowcase2025Page />} />
                  <Route path="/ultimate-services-showcase-2026" element={<UltimateServicesShowcase2026 />} />
                  <Route path="/comprehensive-services-landing-2025" element={<ComprehensiveServicesLanding2025 />} />

                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </AnimatePresence>
            </Suspense>
          </main>

          <FloatingActionButton enabled={true} />
          <PerformanceOptimizer enabled={true} />
          <EnhancedAccessibilityEnhancer enabled={true} />
          <SmartNotificationSystem enabled={true} />
          <AdvancedAnalyticsDashboard enabled={true} />
          <AIContentOptimizer enabled={true} />
          <SecurityMonitoringSystem enabled={true} />
          <UserExperienceOptimizer enabled={true} />
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;


