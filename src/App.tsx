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
    </EnhancedErrorBoundary>
  );
}