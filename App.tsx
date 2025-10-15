import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import Header from './app/components/Header';
import Footer from './app/components/Footer';
import Navigation from './app/components/Navigation';
import PerformanceOptimizer from './app/components/PerformanceOptimizer';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import ErrorBoundary from './app/components/ErrorBoundary';

// Pages
import HomePage from './app/page';
import AboutPage from './app/pages/AboutPage';
import ServicesPage from './app/pages/ServicesPage';
import ContactPage from './app/pages/ContactPage';
import AIServicesPage from './app/pages/AIServicesPage';
import FiveGSolutionsPage from './app/pages/FiveGSolutionsPage';
import MicroSaaSPage from './app/pages/MicroSaaSPage';
import CareersPage from './app/pages/CareersPage';
import CaseStudiesPage from './app/pages/CaseStudiesPage';
import BlogPage from './app/pages/BlogPage';
import SupportPage from './app/pages/SupportPage';
import PrivacyPage from './app/pages/PrivacyPage';
import TermsPage from './app/pages/TermsPage';
import CloudInfrastructurePage from './app/pages/CloudInfrastructurePage';
import ITServicesPage from './app/pages/ITServicesPage';
import DigitalTransformationPage from './app/pages/DigitalTransformationPage';
import TeamPage from './app/pages/TeamPage';
import PricingPage from './app/pages/PricingPage';
import DemoPage from './app/pages/DemoPage';
import DocumentationPage from './app/pages/DocumentationPage';
import TutorialsPage from './app/pages/TutorialsPage';
import SitemapPage from './app/pages/SitemapPage';
import CookiesPage from './app/pages/CookiesPage';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500 mx-auto"></div>
          <p className="text-white mt-4 text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <PerformanceOptimizer>
          <AccessibilityEnhancer>
            <Router>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                <Navigation />
                <main className="relative z-10" id="main-content" role="main">
                  <Suspense fallback={<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
                    <div className="text-white text-xl">Loading...</div>
                  </div>}>
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="/services" element={<ServicesPage />} />
                      <Route path="/contact" element={<ContactPage />} />
                      <Route path="/ai-services" element={<AIServicesPage />} />
                      <Route path="/ai-solutions" element={<AIServicesPage />} />
                      <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                      <Route path="/micro-saas" element={<MicroSaaSPage />} />
                      <Route path="/careers" element={<CareersPage />} />
                      <Route path="/case-studies" element={<CaseStudiesPage />} />
                      <Route path="/blog" element={<BlogPage />} />
                      <Route path="/support" element={<SupportPage />} />
                      <Route path="/privacy" element={<PrivacyPage />} />
                      <Route path="/terms" element={<TermsPage />} />
                      <Route path="/cloud-services" element={<CloudInfrastructurePage />} />
                      <Route path="/cybersecurity" element={<ITServicesPage />} />
                      <Route path="/devops" element={<ITServicesPage />} />
                      <Route path="/team" element={<TeamPage />} />
                      <Route path="/pricing" element={<PricingPage />} />
                      <Route path="/demo" element={<DemoPage />} />
                      <Route path="/documentation" element={<DocumentationPage />} />
                      <Route path="/tutorials" element={<TutorialsPage />} />
                      <Route path="/sitemap" element={<SitemapPage />} />
                      <Route path="/cookies" element={<CookiesPage />} />
                      
                      {/* AI Solutions Routes */}
                      <Route path="/ai-analytics-dashboard-pro" element={<AIServicesPage />} />
                      <Route path="/ai-code-assistant-pro" element={<AIServicesPage />} />
                      <Route path="/ai-voice-assistant-enterprise" element={<AIServicesPage />} />
                      <Route path="/ai-cybersecurity-platform" element={<AIServicesPage />} />
                      <Route path="/ai-ecommerce-platform" element={<AIServicesPage />} />
                      <Route path="/ai-healthcare-platform" element={<AIServicesPage />} />
                      <Route path="/ai-financial-platform" element={<AIServicesPage />} />
                      <Route path="/ai-education-platform" element={<AIServicesPage />} />
                      <Route path="/ai-content-generation-pro" element={<AIServicesPage />} />
                      <Route path="/ai-automation-suite" element={<AIServicesPage />} />
                      <Route path="/ai-chatbot-enterprise" element={<AIServicesPage />} />
                      <Route path="/ai-business-intelligence-pro" element={<AIServicesPage />} />
                      
                      {/* 5G Solutions Routes */}
                      <Route path="/5g-implementation" element={<FiveGSolutionsPage />} />
                      <Route path="/5g-network-infrastructure" element={<FiveGSolutionsPage />} />
                      <Route path="/5g-iot-solutions" element={<FiveGSolutionsPage />} />
                      <Route path="/5g-smart-city-solutions" element={<FiveGSolutionsPage />} />
                      <Route path="/5g-edge-computing" element={<FiveGSolutionsPage />} />
                      <Route path="/5g-private-networks" element={<FiveGSolutionsPage />} />
                      
                      {/* Micro SAAS Routes */}
                      <Route path="/ai-accounting-assistant" element={<MicroSaaSPage />} />
                      <Route path="/ai-content-moderation-pro" element={<MicroSaaSPage />} />
                      <Route path="/ai-climate-solutions-pro" element={<MicroSaaSPage />} />
                      <Route path="/ai-agricultural-intelligence-pro" element={<MicroSaaSPage />} />
                      <Route path="/ai-3d-generation" element={<MicroSaaSPage />} />
                      <Route path="/ai-blockchain-solutions" element={<MicroSaaSPage />} />
                    </Routes>
                  </Suspense>
                </main>
                <Footer />
              </div>
            </Router>
          </AccessibilityEnhancer>
        </PerformanceOptimizer>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;