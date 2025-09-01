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
const HomePage = lazy(() => import('./pages/UltimateHomepage2025').then(module => ({ default: module.default })));
const ServicesPage = lazy(() => import('./pages/UltimateServicesShowcase2025').then(module => ({ default: module.default })));
const SolutionsPage = lazy(() => import('./pages/SolutionsPage').then(module => ({ default: module.default })));
const AboutPage = lazy(() => import('./pages/Team').then(module => ({ default: module.default })));
const ContactPage = lazy(() => import('./pages/ScheduleDemo').then(module => ({ default: module.default })));
const BlogPage = lazy(() => import('./pages/research-development').then(module => ({ default: module.default })));
const NotFoundPage = lazy(() => import('./pages/Unauthorized').then(module => ({ default: module.default })));
const ComprehensiveServicesPage = lazy(() => import('./pages/UltimateServicesShowcase2025').then(module => ({ default: module.default })));
const Sitemap = lazy(() => import('./pages/Sitemap').then(module => ({ default: module.default })));
const ComprehensiveSitemap = lazy(() => import('./pages/ServicesSitemap').then(module => ({ default: module.default })));
const Support = lazy(() => import('./pages/Support').then(module => ({ default: module.default })));
const Training = lazy(() => import('./pages/Training').then(module => ({ default: module.default })));
const Helpdesk = lazy(() => import('./pages/Support').then(module => ({ default: module.default })));
const RevolutionaryServicesPage = lazy(() => import('./pages/RevolutionaryServicesShowcase2030').then(module => ({ default: module.default })));
const NewServicesShowcase2025 = lazy(() => import('./pages/UltimateServicesShowcase2025').then(module => ({ default: module.default })));
const EnhancedNewServices2025 = lazy(() => import('./pages/UltimateServicesShowcase2026').then(module => ({ default: module.default })));
const PricingPage = lazy(() => import('./pages/UltimatePricing2025').then(module => ({ default: module.default })));

// Service Pages
const AISolutions = lazy(() => import('./pages/services/ai-business-intelligence').then(module => ({ default: module.default })));
const QuantumComputing = lazy(() => import('./pages/services/quantum-computing-solutions').then(module => ({ default: module.default })));
const Cybersecurity = lazy(() => import('./pages/services/cybersecurity').then(module => ({ default: module.default })));

// New AI Services
const AIAutonomousFinancialAdvisor = lazy(() => import('./pages/services/ai-autonomous-financial-advisor').then(module => ({ default: module.default })));
const AIHealthcareAnalyticsPlatform = lazy(() => import('./pages/services/ai-healthcare-analytics-platform').then(module => ({ default: module.default })));
const AIContentCreationPlatform = lazy(() => import('./pages/services/ai-content-creation-platform').then(module => ({ default: module.default })));

// New IT Services
const EnterpriseCybersecurityPlatform = lazy(() => import('./pages/services/enterprise-cybersecurity-platform').then(module => ({ default: module.default })));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-900">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-500 mx-auto mb-4"></div>
      <p className="text-gray-400">Loading...</p>
    </div>
  </div>
);

// Lazy load pages - only import existing ones
const Home = createLazyComponent(() => import('./pages/Home'));
const About = createLazyComponent(() => import('./pages/About'));
const Contact = createLazyComponent(() => import('./pages/Contact'));
const Services = createLazyComponent(() => import('./pages/Services'));
const Solutions = createLazyComponent(() => import('./pages/Solutions'));
const RequestQuote = createLazyComponent(() => import('./pages/RequestQuote'));
const Dashboard = createLazyComponent(() => import('./pages/Dashboard'));
const Login = createLazyComponent(() => import('./pages/Login'));
const FAQ = createLazyComponent(() => import('./pages/FAQ'));
const Privacy = createLazyComponent(() => import('./pages/Privacy'));
const Terms = createLazyComponent(() => import('./pages/Terms'));
const Cookies = createLazyComponent(() => import('./pages/Cookies'));
const Pricing = createLazyComponent(() => import('./pages/Pricing'));
const Help = createLazyComponent(() => import('./pages/Help'));
const News = createLazyComponent(() => import('./pages/News'));
const Careers = createLazyComponent(() => import('./pages/Careers'));
const Support = createLazyComponent(() => import('./pages/Support'));
const WhitePapers = createLazyComponent(() => import('./pages/WhitePapers'));
const ComprehensivePricing = createLazyComponent(() => import('./pages/ComprehensivePricing'));

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
                <Route path="/services/ai-solutions" element={<AISolutions />} />
                <Route path="/services/quantum-computing" element={<QuantumComputing />} />
                <Route path="/services/cybersecurity" element={<Cybersecurity />} />
                
                {/* New AI Services */}
                <Route path="/services/ai-autonomous-financial-advisor" element={<AIAutonomousFinancialAdvisor />} />
                <Route path="/services/ai-healthcare-analytics-platform" element={<AIHealthcareAnalyticsPlatform />} />
                <Route path="/services/ai-content-creation-platform" element={<AIContentCreationPlatform />} />
                
                {/* New IT Services */}
                <Route path="/services/enterprise-cybersecurity-platform" element={<EnterpriseCybersecurityPlatform />} />
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