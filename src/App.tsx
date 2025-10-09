import React, { useEffect, useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Lazy load components for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const AiServicesPage = lazy(() => import('./pages/AiServicesPage'));
const AiMarketingPage = lazy(() => import('./pages/AiMarketingPage'));
const AiAutomationPage = lazy(() => import('./pages/AiAutomationPage'));
const AiHealthcarePage = lazy(() => import('./pages/AiHealthcarePage'));
const AiFintechPage = lazy(() => import('./pages/AiFintechPage'));
const ItServicesPage = lazy(() => import('./pages/ItServicesPage'));
const MicroSaasPage = lazy(() => import('./pages/MicroSaasPage'));
const QuantumComputingPage = lazy(() => import('./pages/QuantumComputingPage'));
const CybersecurityPage = lazy(() => import('./pages/CybersecurityPage'));
const CloudServicesPage = lazy(() => import('./pages/CloudServicesPage'));
const DigitalTransformationPage = lazy(() => import('./pages/DigitalTransformationPage'));
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Loading component
const LoadingSpinner: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4"></div>
      <p className="text-cyan-400 text-lg">Loading Zion Tech Group...</p>
    </div>
  </div>
);

const App: React.FC = () => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Initialize app
    setIsInitialized(true);
  }, []);

  if (!isInitialized) {
    return <LoadingSpinner />;
  }

  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Navigation />
          <main>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/ai-services" element={<AiServicesPage />} />
                <Route path="/ai-marketing" element={<AiMarketingPage />} />
                <Route path="/ai-automation" element={<AiAutomationPage />} />
                <Route path="/ai-healthcare" element={<AiHealthcarePage />} />
                <Route path="/ai-fintech" element={<AiFintechPage />} />
                <Route path="/it-services" element={<ItServicesPage />} />
                <Route path="/micro-saas" element={<MicroSaasPage />} />
                <Route path="/quantum-computing" element={<QuantumComputingPage />} />
                <Route path="/cybersecurity" element={<CybersecurityPage />} />
                <Route path="/cloud-services" element={<CloudServicesPage />} />
                <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
                <Route path="/case-studies" element={<CaseStudiesPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
