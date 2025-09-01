import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import LoadingSpinner from './components/ui/loading-spinner';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const ServicesPage = lazy(() => import('./pages/SimpleServicesPage'));
const SolutionsPage = lazy(() => import('./pages/Solutions'));
const AboutPage = lazy(() => import('./pages/About'));
const ContactPage = lazy(() => import('./pages/Contact'));

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
              {/* Main Pages */}
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/solutions" element={<SolutionsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              
              {/* Service Detail Pages */}
              <Route path="/services/ai-machine-learning" element={<ServicesPage />} />
              <Route path="/services/cloud-devops" element={<ServicesPage />} />
              <Route path="/services/cybersecurity" element={<ServicesPage />} />
              <Route path="/services/digital-transformation" element={<ServicesPage />} />
              <Route path="/services/financial-solutions" element={<ServicesPage />} />
              <Route path="/services/manufacturing-solutions" element={<ServicesPage />} />
              <Route path="/services/industry-solutions" element={<ServicesPage />} />
              
              {/* Solution Detail Pages */}
              <Route path="/solutions/enterprise" element={<SolutionsPage />} />
              <Route path="/solutions/startup" element={<SolutionsPage />} />
              <Route path="/solutions/space-tech" element={<SolutionsPage />} />
              <Route path="/solutions/supply-chain" element={<SolutionsPage />} />
              <Route path="/solutions/industry" element={<SolutionsPage />} />
              <Route path="/solutions/healthcare" element={<SolutionsPage />} />
              <Route path="/solutions/financial" element={<SolutionsPage />} />
              <Route path="/solutions/manufacturing" element={<SolutionsPage />} />
              <Route path="/solutions/retail" element={<SolutionsPage />} />
              <Route path="/solutions/education" element={<SolutionsPage />} />
              <Route path="/solutions/government" element={<SolutionsPage />} />
              
              {/* About Detail Pages */}
              <Route path="/about/story" element={<AboutPage />} />
              <Route path="/about/team" element={<AboutPage />} />
              <Route path="/careers" element={<AboutPage />} />
              <Route path="/partners" element={<AboutPage />} />
              
              {/* Resource Pages */}
              <Route path="/blog" element={<ServicesPage />} />
              <Route path="/case-studies" element={<ServicesPage />} />
              <Route path="/white-papers" element={<ServicesPage />} />
              <Route path="/webinars" element={<ServicesPage />} />
              <Route path="/training" element={<ServicesPage />} />
              <Route path="/docs" element={<ServicesPage />} />
              
              {/* Support Pages */}
              <Route path="/help" element={<ServicesPage />} />
              <Route path="/faq" element={<ServicesPage />} />
              <Route path="/support" element={<ServicesPage />} />
              <Route path="/system-status" element={<ServicesPage />} />
              <Route path="/request-quote" element={<ContactPage />} />
              
              {/* Legal Pages */}
              <Route path="/privacy-policy" element={<AboutPage />} />
              <Route path="/terms-of-service" element={<AboutPage />} />
              <Route path="/cookie-policy" element={<AboutPage />} />
              <Route path="/accessibility" element={<AboutPage />} />
              
              {/* Catch-all route */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;

