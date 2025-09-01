import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import LoadingSpinner from './components/ui/loading-spinner';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage').then(module => ({ default: module.HomePage })));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const SolutionsPage = lazy(() => import('./pages/SolutionsPage'));
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage'));
const ComprehensivePricing = lazy(() => import('./pages/ComprehensivePricing2025').then(module => ({ default: module.default })));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-900">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-500 mx-auto mb-4"></div>
      <p className="text-gray-400">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary fallback={<div>Something went wrong. Please refresh the page.</div>}>
      <div className="App">
        <div className="min-h-screen">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* Main Routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/*" element={<ServicesPage />} />
              <Route path="/solutions" element={<SolutionsPage />} />
              <Route path="/solutions/*" element={<SolutionsPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/case-studies/*" element={<CaseStudiesPage />} />
              <Route path="/pricing" element={<ComprehensivePricing />} />
              
              {/* Additional Routes */}
              <Route path="/blog" element={<div>Blog Page - Coming Soon</div>} />
              <Route path="/blog/*" element={<div>Blog Page - Coming Soon</div>} />
              <Route path="/careers" element={<div>Careers Page - Coming Soon</div>} />
              <Route path="/partners" element={<div>Partners Page - Coming Soon</div>} />
              <Route path="/press" element={<div>Press Page - Coming Soon</div>} />
              <Route path="/research-development" element={<div>Research & Development Page - Coming Soon</div>} />
              <Route path="/docs" element={<div>Documentation Page - Coming Soon</div>} />
              <Route path="/api" element={<div>API Page - Coming Soon</div>} />
              <Route path="/developer" element={<div>Developer Page - Coming Soon</div>} />
              <Route path="/help" element={<div>Help Page - Coming Soon</div>} />
              <Route path="/training" element={<div>Training Page - Coming Soon</div>} />
              <Route path="/community" element={<div>Community Page - Coming Soon</div>} />
              <Route path="/support" element={<div>Support Page - Coming Soon</div>} />
              <Route path="/sitemap" element={<div>Sitemap Page - Coming Soon</div>} />
              <Route path="/comprehensive-sitemap" element={<div>Comprehensive Sitemap Page - Coming Soon</div>} />
              <Route path="/privacy-policy" element={<div>Privacy Policy Page - Coming Soon</div>} />
              <Route path="/terms-of-service" element={<div>Terms of Service Page - Coming Soon</div>} />
              <Route path="/cookie-policy" element={<div>Cookie Policy Page - Coming Soon</div>} />
              <Route path="/request-quote" element={<div>Request Quote Page - Coming Soon</div>} />
              
              {/* Catch-all route */}
              <Route path="*" element={<div>Page Not Found - Coming Soon</div>} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;
