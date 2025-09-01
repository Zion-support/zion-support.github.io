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
const createLazyComponent = (importFn: () => Promise<any></an></any>, fallback?: React.ReactNode) => {
  const LazyComponent = lazy(importFn);
  return (props: any) => (
    <Suspense fallback={fallback || <LoadingSpinner /></Suspens></Suspense>}>
      <LazyComponent {...props} /></LazyComponen></LazyComponent>
    </Suspense>
  );
};

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
const ComprehensiveSitemap = lazy(() => import('./pages/ComprehensiveSitemap').then(module => ({ default: module.ComprehensiveSitemap })));
const Support = lazy(() => import('./pages/Support').then(module => ({ default: module.default })));
const Training = lazy(() => import('./pages/Training').then(module => ({ default: module.default })));
const Helpdesk = lazy(() => import('./pages/Helpdesk').then(module => ({ default: module.default })));
const RevolutionaryServicesPage = lazy(() => import('./pages/RevolutionaryServicesPage').then(module => ({ default: module.RevolutionaryServicesPage })));
const NewServicesShowcase2025 = lazy(() => import('./pages/NewServicesShowcase2025').then(module => ({ default: module.NewServicesShowcase2025 })));
const EnhancedNewServices2025 = lazy(() => import('./pages/EnhancedNewServices2025').then(module => ({ default: module.EnhancedNewServices2025 })));
const PricingPage = lazy(() => import('./pages/PricingPage').then(module => ({ default: module.PricingPage })));

// Service Pages
const AISolutions = lazy(() => import('./pages/services/AISolutions').then(module => ({ default: module.AISolutions })));
const QuantumComputing = lazy(() => import('./pages/services/QuantumComputing').then(module => ({ default: module.QuantumComputing })));
const Cybersecurity = lazy(() => import('./pages/services/Cybersecurity').then(module => ({ default: module.Cybersecurity })));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-900"></di></div>
    <div className="text-center"></di></div>
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-500 mx-auto mb-4"></d></di></div>
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
    <ErrorBoundary fallback={<div></ErrorBoundar></ErrorBoundary>Something went wrong. Please refresh the page.</div>}>
      <div className="App"></di></div>
        <Header /></Heade></Header>
        <div className="flex pt-16"></di></div>
          <Sidebar /></Sideba></Sidebar>
          <main className="flex-1 ml-64 min-h-screen"></mai></main>
            <Suspense fallback={<PageLoader /></Suspens></Suspense>}>
              <Routes></Route></Routes>
                <Route path="/" element={<HomePage /></Rout></Route>} />
                <Route path="/services" element={<ServicesPage /></Rout></Route>} />
                <Route path="/services/*" element={<ServicesPage /></Rout></Route>} />
                <Route path="/services/ai-solutions" element={<AISolutions /></Rout></Route>} />
                <Route path="/services/quantum-computing" element={<QuantumComputing /></Rout></Route>} />
                <Route path="/services/cybersecurity" element={<Cybersecurity /></Rout></Route>} />
                <Route path="/comprehensive-services" element={<ComprehensiveServicesPage /></Rout></Route>} />
                <Route path="/revolutionary-services" element={<RevolutionaryServicesPage /></Rout></Route>} />
                <Route path="/new-services-2025" element={<NewServicesShowcase2025 /></Rout></Route>} />
                <Route path="/enhanced-new-services-2025" element={<EnhancedNewServices2025 /></Rout></Route>} />
                <Route path="/pricing" element={<PricingPage /></Rout></Route>} />
                <Route path="/solutions" element={<SolutionsPage /></Rout></Route>} />
                <Route path="/solutions/*" element={<SolutionsPage /></Rout></Route>} />
                <Route path="/about" element={<AboutPage /></Rout></Route>} />
                <Route path="/about/*" element={<AboutPage /></Rout></Route>} />
                <Route path="/contact" element={<ContactPage /></Rout></Route>} />
                <Route path="/blog" element={<BlogPage /></Rout></Route>} />
                <Route path="/blog/*" element={<BlogPage /></Rout></Route>} />
                <Route path="/careers" element={<AboutPage /></Rout></Route>} />
                <Route path="/partners" element={<AboutPage /></Rout></Route>} />
                <Route path="/press" element={<AboutPage /></Rout></Route>} />
                <Route path="/case-studies" element={<BlogPage /></Rout></Route>} />
                <Route path="/research-development" element={<BlogPage /></Rout></Route>} />
                <Route path="/docs" element={<BlogPage /></Rout></Route>} />
                <Route path="/api" element={<BlogPage /></Rout></Route>} />
                <Route path="/developer" element={<BlogPage /></Rout></Route>} />
                <Route path="/help" element={<Helpdesk /></Rout></Route>} />
                <Route path="/training" element={<Training /></Rout></Route>} />
                <Route path="/community" element={<BlogPage /></Rout></Route>} />
                <Route path="/support" element={<Support /></Rout></Route>} />
                <Route path="/sitemap" element={<Sitemap /></Rout></Route>} />
                <Route path="/comprehensive-sitemap" element={<ComprehensiveSitemap /></Rout></Route>} />
                <Route path="/privacy-policy" element={<BlogPage /></Rout></Route>} />
                <Route path="/terms-of-service" element={<BlogPage /></Rout></Route>} />
                <Route path="/cookie-policy" element={<BlogPage /></Rout></Route>} />
                <Route path="/request-quote" element={<ContactPage /></Rout></Route>} />
                <Route path="*" element={<NotFoundPage /></Rout></Route>} />
              </Routes>
            </Suspense>
          </main>
        </div>
        <Footer /></Foote></Footer>
        
        {/* Enhanced Components */}
        <PerformanceOptimizer /></PerformanceOptimize></PerformanceOptimizer>
        <EnhancedAccessibilityEnhancer /></EnhancedAccessibilityEnhance></EnhancedAccessibilityEnhancer>
        <MobileExperienceEnhancer /></MobileExperienceEnhance></MobileExperienceEnhancer>
        <ChatAssistant /></ChatAssistan></ChatAssistant>
      </div>
    </ErrorBoundary>
  );
}

export default App;