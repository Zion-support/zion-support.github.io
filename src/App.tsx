import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

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

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-900">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-500 mx-auto mb-4"></div>
      <p className="text-gray-400">Loading...</p>
    </div>
  </div>
);

// Simple loading spinner component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
  </div>
);

// Lazy load pages - using correct paths
const Home = createLazyComponent(() => import('../pages/index').then(module => ({ default: module.default })));
const About = createLazyComponent(() => import('../pages/about').then(module => ({ default: module.default })));
const Contact = createLazyComponent(() => import('../pages/contact').then(module => ({ default: module.default })));
const Services = createLazyComponent(() => import('../pages/services').then(module => ({ default: module.default })));
const Solutions = createLazyComponent(() => import('../pages/solutions').then(module => ({ default: module.default })));
const Pricing = createLazyComponent(() => import('../pages/pricing').then(module => ({ default: module.default })));
const Blog = createLazyComponent(() => import('../pages/blog').then(module => ({ default: module.default })));
const News = createLazyComponent(() => import('../pages/news').then(module => ({ default: module.default })));
const Careers = createLazyComponent(() => import('../pages/careers').then(module => ({ default: module.default })));
const Partners = createLazyComponent(() => import('../pages/partners').then(module => ({ default: module.default })));
const Privacy = createLazyComponent(() => import('../pages/privacy').then(module => ({ default: module.default })));
const Terms = createLazyComponent(() => import('../pages/terms').then(module => ({ default: module.default })));
const Login = createLazyComponent(() => import('../pages/login').then(module => ({ default: module.default })));
const Signup = createLazyComponent(() => import('../pages/signup').then(module => ({ default: module.default })));
const CaseStudies = createLazyComponent(() => import('../pages/case-studies').then(module => ({ default: module.default })));
const Events = createLazyComponent(() => import('../pages/events').then(module => ({ default: module.default })));
const ResearchDevelopment = createLazyComponent(() => import('../pages/research-development').then(module => ({ default: module.default })));
const AdvancedCybersecurity = createLazyComponent(() => import('../pages/advanced-cybersecurity').then(module => ({ default: module.default })));
const EmergingTechServices = createLazyComponent(() => import('../pages/emerging-tech-services').then(module => ({ default: module.default })));

function App() {
  return (
    <ErrorBoundary fallback={<div>Something went wrong. Please refresh the page.</div>}>
      <div className="App">
        <PerformanceOptimizer />
        <EnhancedAccessibilityEnhancer />
        <MobileExperienceEnhancer />
        <ChatAssistant />
        
        <main className="min-h-screen">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/*" element={<Services />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/solutions/*" element={<Solutions />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/news" element={<News />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/events" element={<Events />} />
              <Route path="/research-development" element={<ResearchDevelopment />} />
              <Route path="/advanced-cybersecurity" element={<AdvancedCybersecurity />} />
              <Route path="/emerging-tech-services" element={<EmergingTechServices />} />
              
              {/* Catch all route */}
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </ErrorBoundary>
  );
}

export default App;