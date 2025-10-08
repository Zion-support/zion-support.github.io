import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';

// Import core components
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import Analytics from './components/Analytics';
import AdvancedPerformanceMonitor from './components/AdvancedPerformanceMonitor';
import AdvancedErrorBoundary from './components/AdvancedErrorBoundary';
import SEOEnhancer from './components/SEOEnhancer';
import AdvancedSEOOptimizer from './components/AdvancedSEOOptimizer';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load components for better performance
const ContentShowcase = lazy(() => import('./components/ContentShowcase'));
const InteractiveContentShowcase2026 = lazy(
  () => import('./components/InteractiveContentShowcase2026')
);
const InteractiveAIROICalculator = lazy(
  () => import('./components/InteractiveAIROICalculator')
);

// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'));
const AboutPage = lazy(() => import('./about/page'));
const ServicesPage = lazy(() => import('./services/page'));
const ContactPage = lazy(() => import('./contact/page'));
const TeamPage = lazy(() => import('./team/page'));
const EnterprisePage = lazy(() => import('./enterprise/page'));
const CaseStudiesPage = lazy(() => import('./case-studies/page'));

// AI Services Pages
const AIServicesPage = lazy(() => import('./ai-services/page'));
const AIMarketingPage = lazy(() => import('./ai-marketing/page'));
const AIAutomationPage = lazy(() => import('./ai-automation/page'));
const AIHealthcarePage = lazy(() => import('./ai-healthcare/page'));
const AIFintechPage = lazy(() => import('./ai-fintech/page'));

// Specialized Services Pages
const QuantumComputingPage = lazy(() => import('./quantum-computing/page'));
const AutonomousSystemsPage = lazy(() => import('./autonomous-systems/page'));
const BusinessIntelligencePage = lazy(() => import('./business-intelligence/page'));
const BlockchainWeb3Page = lazy(() => import('./blockchain-web3/page'));
const IoTEdgeComputingPage = lazy(() => import('./iot-edge-computing/page'));
const CybersecurityPage = lazy(() => import('./cybersecurity/page'));
const ITServicesPage = lazy(() => import('./it-services/page'));
const MicroSAASPage = lazy(() => import('./micro-saas/page'));
const ServicesAdvertisingPage = lazy(() => import('./services-advertising/page'));

// Blog Pages
const BlogIndexPage = lazy(() => import('./blog-index'));
const BlogPage = lazy(() => import('./blog/page'));

// Utility Pages
const PrivacyPage = lazy(() => import('./privacy/page'));
const TermsPage = lazy(() => import('./terms/page'));
const NotFoundPage = lazy(() => import('./not-found'));

// Error fallback component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 text-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h2>
      <p className="text-gray-600 mb-6">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Try again
      </button>
    </div>
  </div>
);

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <HelmetProvider>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <SEOEnhancer />
            <AdvancedSEOOptimizer />
            <AdvancedPerformanceMonitor />
            <PerformanceOptimizer />
            <Analytics />
            
            <Navigation />
            
            <main className="flex-1">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/team" element={<TeamPage />} />
                  <Route path="/enterprise" element={<EnterprisePage />} />
                  <Route path="/case-studies" element={<CaseStudiesPage />} />
                  
                  {/* AI Services */}
                  <Route path="/ai-services" element={<AIServicesPage />} />
                  <Route path="/ai-marketing" element={<AIMarketingPage />} />
                  <Route path="/ai-automation" element={<AIAutomationPage />} />
                  <Route path="/ai-healthcare" element={<AIHealthcarePage />} />
                  <Route path="/ai-fintech" element={<AIFintechPage />} />
                  
                  {/* Specialized Services */}
                  <Route path="/quantum-computing" element={<QuantumComputingPage />} />
                  <Route path="/autonomous-systems" element={<AutonomousSystemsPage />} />
                  <Route path="/business-intelligence" element={<BusinessIntelligencePage />} />
                  <Route path="/blockchain-web3" element={<BlockchainWeb3Page />} />
                  <Route path="/iot-edge-computing" element={<IoTEdgeComputingPage />} />
                  <Route path="/cybersecurity" element={<CybersecurityPage />} />
                  <Route path="/it-services" element={<ITServicesPage />} />
                  <Route path="/micro-saas" element={<MicroSAASPage />} />
                  <Route path="/services-advertising" element={<ServicesAdvertisingPage />} />
                  
                  {/* Blog */}
                  <Route path="/blog" element={<BlogIndexPage />} />
                  <Route path="/blog/*" element={<BlogPage />} />
                  
                  {/* Utility Pages */}
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                  
                  {/* 404 */}
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </Suspense>
            </main>
            
            <Footer />
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
};

export default App;