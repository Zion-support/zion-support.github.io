import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import Footer from './components/Footer';
import { Sidebar } from './components/Sidebar';
import { ErrorBoundary } from 'react-error-boundary';
import { LoadingSpinner } from './components/ui/loading-spinner';

// Enhanced Components
import PerformanceOptimizer from './components/PerformanceOptimizer';
import EnhancedAccessibilityEnhancer from './components/EnhancedAccessibilityEnhancer';
import { MobileExperienceEnhancer } from './components/MobileExperienceEnhancer';

// Enhanced lazy loading with preloading hints
const createLazyComponent = (importFn: () => Promise<any>, fallback?: React.ReactNode) => {
  const LazyComponent = lazy(importFn);
  return (props: any) => (
    <Suspense fallback={fallback || <LoadingSpinner />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

// Lazy load pages for better performance - only import existing pages
const SolutionsPage = lazy(() => import('./pages/Solutions').then(module => ({ default: module.default })));

// Service Pages
const AISolutions = lazy(() => import('./pages/AIServices').then(module => ({ default: module.default })));
const ITServices = lazy(() => import('./pages/ITServices').then(module => ({ default: module.default })));

// Create placeholder components for missing pages
const HomePage = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">Zion Tech Group - Home</h1></div>;
const ServicesPage = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">Services</h1></div>;
const AboutPage = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">About Us</h1></div>;
const ContactPage = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">Contact Us</h1></div>;
const BlogPage = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">Blog</h1></div>;
const NotFoundPage = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">404 - Page Not Found</h1></div>;
const ComprehensiveServicesPage = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">Comprehensive Services</h1></div>;
const Sitemap = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">Sitemap</h1></div>;
const ComprehensiveSitemap = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">Comprehensive Sitemap</h1></div>;
const Support = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">Support</h1></div>;
const Training = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">Training</h1></div>;
const Helpdesk = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">Helpdesk</h1></div>;
const RevolutionaryServicesPage = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">Revolutionary Services</h1></div>;
const NewServicesShowcase2025 = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">New Services 2025</h1></div>;
const EnhancedNewServices2025 = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">Enhanced Services 2025</h1></div>;
const PricingPage = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">Pricing</h1></div>;
const ComprehensiveServicesShowcase = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">Comprehensive Services Showcase</h1></div>;
const QuantumComputing = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">Quantum Computing</h1></div>;
const Cybersecurity = () => <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white"><h1 className="text-4xl">Cybersecurity</h1></div>;

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-900">
    <div className="text-center">
      <LoadingSpinner />
      <p className="mt-4 text-white">Loading...</p>
    </div>
  </div>
);

// Error fallback component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
      <p className="text-gray-400 mb-4">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Try again
      </button>
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Router>
        <div className="min-h-screen bg-gray-900 text-white">
          <PerformanceOptimizer />
          <EnhancedAccessibilityEnhancer />
          <MobileExperienceEnhancer />
          
          <Header />
          
          <main className="flex">
            <Sidebar />
            <div className="flex-1">
              <Routes>
                {/* Main Routes */}
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/solutions" element={<SolutionsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/blog" element={<BlogPage />} />
                
                {/* Service Routes */}
                <Route path="/ai-services" element={<AISolutions />} />
                <Route path="/it-services" element={<ITServices />} />
                <Route path="/micro-saas" element={<ServicesPage />} />
                
                {/* Additional Routes */}
                <Route path="/comprehensive-services" element={<ComprehensiveServicesPage />} />
                <Route path="/sitemap" element={<Sitemap />} />
                <Route path="/comprehensive-sitemap" element={<ComprehensiveSitemap />} />
                <Route path="/support" element={<Support />} />
                <Route path="/training" element={<Training />} />
                <Route path="/helpdesk" element={<Helpdesk />} />
                <Route path="/revolutionary-services" element={<RevolutionaryServicesPage />} />
                <Route path="/new-services-2025" element={<NewServicesShowcase2025 />} />
                <Route path="/enhanced-services-2025" element={<EnhancedNewServices2025 />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/comprehensive-services-showcase" element={<ComprehensiveServicesShowcase />} />
                <Route path="/quantum-computing" element={<QuantumComputing />} />
                <Route path="/cybersecurity" element={<Cybersecurity />} />
                
                {/* 404 Route */}
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </div>
          </main>
          
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;