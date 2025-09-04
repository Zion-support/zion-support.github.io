<<<<<<< HEAD
import React, { Suspense, lazy } from 'react';';';
import { Routes, Route } from 'react-router-dom';';';
import { Header } from './src/components/Header.tsx';';';
import { Footer } from './src/components/Footer.tsx';';';
import { Sidebar } from './src/components/Sidebar.tsx';';';
import { ErrorBoundary } from 'react-error-boundary';';';
import { LoadingSpinner } from './src/components/ui/loading-spinner.tsx';
';
// Enhanced Components';';
import PerformanceOptimizer from './src/components/PerformanceOptimizer.tsx';';';
import EnhancedAccessibilityEnhancer from './src/components/EnhancedAccessibilityEnhancer.tsx';';';
import { MobileExperienceEnhancer } from './src/components/MobileExperienceEnhancer.tsx';';';
import { ChatAssistant } from './components/ChatAssistant';
=======
import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import Footer from './components/Footer';
import { Sidebar } from './components/Sidebar';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import { LoadingSpinner } from './components/ui/loading-spinner';
import { AccessibilityControls } from './components/AccessibilityEnhancer';
import { preloadCriticalResources, enableLazyLoading } from './utils/performance';
import './styles/accessibility.css';

// Enhanced Components - temporarily disabled due to build issues
// import PerformanceOptimizer from './components/PerformanceOptimizer';
// import EnhancedAccessibilityEnhancer from './components/EnhancedAccessibilityEnhancer';
// import { MobileExperienceEnhancer } from './components/MobileExperienceEnhancer';
// import { ChatAssistant } from './components/ChatAssistant';
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b

// Enhanced lazy loading with preloading hints
const createLazyComponent = (importFn: () => Promise<any>, fallback?: React.ReactNode) => {
  const LazyComponent = lazy(importFn);
  return (props: any) => (
    <Suspense fallback={fallback || <LoadingSpinner />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};
<<<<<<< HEAD
';
// Lazy load pages for better performance';';
const HomePage = lazy(() => import('./pages/HomePage').then(module => ({ default: module.HomePage })));';';
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(module => ({ default: module.default })));';';
const SolutionsPage = lazy(() => import('./pages/SolutionsPage').then(module => ({ default: module.SolutionsPage })));';';
const AboutPage = lazy(() => import('./pages/AboutPage').then(module => ({ default: module.AboutPage })));';';
const ContactPage = lazy(() => import('./pages/ContactPage').then(module => ({ default: module.ContactPage })));';';
const BlogPage = lazy(() => import('./pages/BlogPage').then(module => ({ default: module.BlogPage })));';';
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(module => ({ default: module.NotFoundPage })));';';
const ComprehensiveServicesPage = lazy(() => import('./pages/ComprehensiveServicesPage').then(module => ({ default: module.ComprehensiveServicesPage })));';';
const Sitemap = lazy(() => import('./pages/Sitemap').then(module => ({ default: module.default })));';';
const ComprehensiveSitemap = lazy(() => import('./pages/ComprehensiveSitemap').then(module => ({ default: module.ComprehensiveSitemap })));';';
const Support = lazy(() => import('./pages/Support').then(module => ({ default: module.default })));';';
const Training = lazy(() => import('./pages/Training').then(module => ({ default: module.default })));';';
const Helpdesk = lazy(() => import('./pages/Helpdesk').then(module => ({ default: module.default })));';';
const RevolutionaryServicesPage = lazy(() => import('./pages/RevolutionaryServicesPage').then(module => ({ default: module.RevolutionaryServicesPage })));';';
const NewServicesShowcase2025 = lazy(() => import('./pages/NewServicesShowcase2025').then(module => ({ default: module.NewServicesShowcase2025 })));';';
const EnhancedNewServices2025 = lazy(() => import('./pages/EnhancedNewServices2025').then(module => ({ default: module.EnhancedNewServices2025 })));';';
const PricingPage = lazy(() => import('./pages/PricingPage').then(module => ({ default: module.PricingPage })));';';
const ComprehensiveServicesShowcase = lazy(() => import('./pages/ComprehensiveServicesShowcase').then(module => ({ default: module.default })));
';
// Service Pages';';
const AISolutions = lazy(() => import('./pages/services/AISolutions').then(module => ({ default: module.AISolutions })));';';
const QuantumComputing = lazy(() => import('./pages/services/QuantumComputing').then(module => ({ default: module.QuantumComputing })));';';
const Cybersecurity = lazy(() => import('./pages/services/Cybersecurity').then(module => ({ default: module.Cybersecurity })));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-900">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-500 mx-auto mb-4"></div>
      <p className="text-gray-400">Loading...</p>
    </div>
  </div>
);
';
// Lazy load pages - only import existing ones';';
const Home = createLazyComponent(() => import('./pages/Home'));';';
const About = createLazyComponent(() => import('./pages/About'));';';
const Contact = createLazyComponent(() => import('./pages/Contact'));';';
const Services = createLazyComponent(() => import('./pages/Services'));';';
const Solutions = createLazyComponent(() => import('./pages/Solutions'));';';
const RequestQuote = createLazyComponent(() => import('./pages/RequestQuote'));';';
const Dashboard = createLazyComponent(() => import('./pages/Dashboard'));';';
const Login = createLazyComponent(() => import('./pages/Login'));';';
const FAQ = createLazyComponent(() => import('./pages/FAQ'));';';
const Privacy = createLazyComponent(() => import('./pages/Privacy'));';';
const Terms = createLazyComponent(() => import('./pages/Terms'));';';
const Cookies = createLazyComponent(() => import('./pages/Cookies'));';';
const Pricing = createLazyComponent(() => import('./pages/Pricing'));';';
const Help = createLazyComponent(() => import('./pages/Help'));';';
const News = createLazyComponent(() => import('./pages/News'));';';
const Careers = createLazyComponent(() => import('./pages/Careers'));';';
const Support = createLazyComponent(() => import('./pages/Support'));';';
const WhitePapers = createLazyComponent(() => import('./pages/WhitePapers'));';';
const ComprehensivePricing = createLazyComponent(() => import('./pages/ComprehensivePricing'));

export default function App(props: any) {
  return (
    <ErrorBoundary>
<<<<<<< HEAD
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Sidebar />
        
        <main className="flex-1 lg:ml-80">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/search" element={<Services />} />
              <Route path="/services" element={<Services />} />
              <Route path="/comprehensive-services" element={<ComprehensiveServicesShowcase />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/resources" element={<Services />} />
              <Route path="/case-studies" element={<Services />} />
              <Route path="/white-papers" element={<WhitePapers />} />
              <Route path="/webinars" element={<Services />} />
              <Route path="/request-quote" element={<RequestQuote />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/schedule-demo" element={<Contact />} />
              <Route path="/community" element={<Services />} />
              <Route path="/demo" element={<Services />} />
              <Route path="/team" element={<About />} />
              <Route path="/news" element={<News />} />
              <Route path="/help" element={<Help />} />
              
              {/* New pricing guide route */}
              <Route path="/comprehensive-pricing-guide-2025" element={<ComprehensivePricing />} />
              
              {/* Service Routes */}
              <Route path="/ai-services" element={<AISolutions />} />
              <Route path="/it-services" element={<Services />} />
              <Route path="/micro-saas" element={<Services />} />
              
              {/* New sitemap routes */}
              <Route path="/ai-solutions" element={<AISolutions />} />
              <Route path="/solutions/enterprise" element={<Solutions />} />
              <Route path="/solutions/healthcare" element={<Solutions />} />
              
              {/* Service routes */}
              <Route path="/services/cloud-devops" element={<Services />} />
              <Route path="/services/digital-twin" element={<Services />} />
              <Route path="/services/data-analytics" element={<Services />} />
              <Route path="/services/it-infrastructure" element={<Services />} />
              <Route path="/services/ai-business-intelligence" element={<Services />} />
              <Route path="/services/ai-sales-copilot" element={<Services />} />
              <Route path="/services/cloud-finops-optimizer" element={<Services />} />
              <Route path="/services/ai-compliance-assistant" element={<Services />} />
              <Route path="/services/ai-auto-email-responder" element={<Services />} />
              <Route path="/services/mobile-feedback-surveys" element={<Services />} />
              <Route path="/services/ai-compliance-copilot" element={<Services />} />
              <Route path="/services/llm-content-studio" element={<Services />} />
              <Route path="/services/finops-advisor" element={<Services />} />
              <Route path="/services/returns-management" element={<Services />} />
              <Route path="/services/email-sequencer" element={<Services />} />
              <Route path="/services/podcast-transcription" element={<Services />} />
              <Route path="/services/micro-crm" element={<Services />} />
              <Route path="/services/website-analytics" element={<Services />} />
              <Route path="/services/it-helpdesk" element={<Services />} />
              <Route path="/services/affiliate-tracking" element={<Services />} />
              <Route path="/services/mobile-survey" element={<Services />} />
              
              {/* Additional new service routes */}
              <Route path="/services/ai-seo" element={<Services />} />
              <Route path="/services/interview-assessment" element={<Services />} />
              <Route path="/services/helpdesk" element={<Helpdesk />} />
              <Route path="/services/dsr-portal" element={<Services />} />
              <Route path="/services/security-headers-csp" element={<Services />} />
              
              {/* New AI-powered micro SAAS service routes */}
              <Route path="/services/ai-project-management" element={<Services />} />
              <Route path="/services/ai-customer-support-automation" element={<Services />} />
              <Route path="/services/ai-financial-analytics" element={<Services />} />
              <Route path="/services/ai-marketing-automation" element={<Services />} />
              
              {/* Additional innovative AI services */}
              <Route path="/services/ai-quantum-financial-trading" element={<Services />} />
              <Route path="/services/ai-predictive-maintenance" element={<Services />} />
              
              {/* Additional innovative AI services */}
              <Route path="/services/ai-autonomous-supply-chain" element={<Services />} />
              <Route path="/services/ai-cybersecurity-threat-intelligence" element={<Services />} />
              
              {/* Additional innovative AI service routes */}
              <Route path="/services/ai-workflow-orchestrator" element={<Services />} />
              <Route path="/services/ai-data-governance-platform" element={<Services />} />
              <Route path="/services/ai-customer-experience-analytics" element={<Services />} />
              
              {/* Quantum and advanced services */}
              <Route path="/services/quantum-computing" element={<QuantumComputing />} />
              <Route path="/services/cybersecurity" element={<Cybersecurity />} />
              
              {/* Revolutionary services */}
              <Route path="/revolutionary-services" element={<RevolutionaryServicesPage />} />
              <Route path="/new-services-2025" element={<NewServicesShowcase2025 />} />
              <Route path="/enhanced-services-2025" element={<EnhancedNewServices2025 />} />
              
              {/* Sitemap routes */}
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/comprehensive-sitemap" element={<ComprehensiveSitemap />} />
              
              {/* Support routes */}
              <Route path="/support" element={<Support />} />
              <Route path="/training" element={<Training />} />
              <Route path="/helpdesk" element={<Helpdesk />} />
              
              {/* Catch-all route */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>
        
        <Footer />
        
        {/* Enhanced Components */}
        <PerformanceOptimizer />
        <EnhancedAccessibilityEnhancer />
        <MobileExperienceEnhancer />
        <ChatAssistant />
      </div>
=======
=======

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.default })));
const About = lazy(() => import('./pages/About').then(module => ({ default: module.default })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.default })));
const Services = lazy(() => import('./pages/Services').then(module => ({ default: module.default })));
const Solutions = lazy(() => import('./pages/Solutions').then(module => ({ default: module.default })));
const FAQ = lazy(() => import('./pages/FAQ').then(module => ({ default: module.default })));
const Privacy = lazy(() => import('./pages/Privacy').then(module => ({ default: module.default })));
const Terms = lazy(() => import('./pages/Terms').then(module => ({ default: module.default })));
const Cookies = lazy(() => import('./pages/Cookies').then(module => ({ default: module.default })));
const Pricing = lazy(() => import('./pages/Pricing').then(module => ({ default: module.default })));
const Help = lazy(() => import('./pages/Help').then(module => ({ default: module.default })));
const News = lazy(() => import('./pages/News').then(module => ({ default: module.default })));
const Careers = lazy(() => import('./pages/Careers').then(module => ({ default: module.default })));
const WhitePapers = lazy(() => import('./pages/WhitePapers').then(module => ({ default: module.default })));
const RequestQuote = lazy(() => import('./pages/RequestQuote').then(module => ({ default: module.default })));
const Dashboard = lazy(() => import('./pages/Dashboard').then(module => ({ default: module.default })));
const Login = lazy(() => import('./pages/Login').then(module => ({ default: module.default })));
const BlogPage = lazy(() => import('./pages/BlogPage').then(module => ({ default: module.default })));
const ComprehensivePricing = lazy(() => import('./pages/ComprehensivePricing').then(module => ({ default: module.default })));
const UltimateServicesShowcase2025 = lazy(() => import('./pages/UltimateServicesShowcase2025').then(module => ({ default: module.default })));

// New innovative services pages

// Additional service components
const AIServices = createLazyComponent(() => import('./pages/AIServices'));
const ITServices = createLazyComponent(() => import('./pages/ITServices'));
const MicroSaaS = createLazyComponent(() => import('./pages/MicroSaaS'));

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <EnhancedErrorBoundary 
      fallback={(error, resetErrorBoundary) => (
        <div className="error-boundary">
          <div className="error-boundary-content">
            <h1>Something went wrong</h1>
            <p>{error?.message}</p>
            <button onClick={resetErrorBoundary}>
              Try again
            </button>
          </div>
        </div>
      )}
      showDetails={process.env.NODE_ENV === 'development'}
      enableReporting={true}
    >
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Sidebar />
          
          <main className="flex-1 lg:ml-80">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/cookies" element={<Cookies />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/help" element={<Help />} />
                <Route path="/news" element={<News />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/white-papers" element={<WhitePapers />} />
                <Route path="/request-quote" element={<RequestQuote />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/comprehensive-pricing" element={<ComprehensivePricing />} />
                
                {/* New innovative services routes */}
                <Route path="/new-services-2025" element={<UltimateServicesShowcase2025 />} />
                
                {/* Service Routes */}
                <Route path="/ai-services" element={<AIServices />} />
                <Route path="/it-services" element={<ITServices />} />
                <Route path="/micro-saas" element={<MicroSaaS />} />
              </Routes>
            </Suspense>
          </main>
          
          <Footer />
          
          {/* Accessibility Controls */}
          <AccessibilityControls />
          
          {/* Enhanced Components - temporarily disabled due to build issues */}
          {/* <PerformanceOptimizer />
          <EnhancedAccessibilityEnhancer />
          <MobileExperienceEnhancer />
          <ChatAssistant /> */}
        </div>
      </Router>
<<<<<<< HEAD
>>>>>>> cursor/test-and-fix-pm2-automations-and-merge-2088
    </ErrorBoundary>
  );';
};';;';
=======
    </EnhancedErrorBoundary>
  );
}
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
