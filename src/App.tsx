import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './src/components/Header.tsx';
import { Footer } from './src/components/Footer.tsx';
import { Sidebar } from './src/components/Sidebar.tsx';
import { ErrorBoundary } from 'react-error-boundary';
import { LoadingSpinner } from './src/components/ui/loading-spinner.tsx';

// Enhanced Components
import PerformanceOptimizer from './src/components/PerformanceOptimizer.tsx';
import EnhancedAccessibilityEnhancer from './src/components/EnhancedAccessibilityEnhancer.tsx';
import { MobileExperienceEnhancer } from './src/components/MobileExperienceEnhancer.tsx';
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
const HomePage = lazy(() => import('./pages/HomePage').then(module => ({ default: module.HomePage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(module => ({ default: module.default })));
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
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Layout>
          <HomePage />
        </Layout>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;