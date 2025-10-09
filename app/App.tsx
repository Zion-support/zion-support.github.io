'use client';

import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'));
const AboutPage = lazy(() => import('./about/page'));
const ServicesPage = lazy(() => import('./services/page'));
const ContactPage = lazy(() => import('./contact/page'));
const TeamPage = lazy(() => import('./team/page'));
const PrivacyPage = lazy(() => import('./privacy/page'));
const TermsPage = lazy(() => import('./terms/page'));
const EnterprisePage = lazy(() => import('./enterprise/page'));
const ServicesAdvertisingPage = lazy(() => import('./services-advertising/page'));
const CaseStudiesPage = lazy(() => import('./case-studies/page'));

// Additional service pages
const AiServicesPage = lazy(() => import('./ai-services/page'));
const AiMarketingPage = lazy(() => import('./ai-marketing/page'));
const AiAutomationPage = lazy(() => import('./ai-automation/page'));
const AiHealthcarePage = lazy(() => import('./ai-healthcare/page'));
const AiFintechPage = lazy(() => import('./ai-fintech/page'));
const ItServicesPage = lazy(() => import('./it-services/page'));
const MicroSaasPage = lazy(() => import('./micro-saas/page'));
const QuantumComputingPage = lazy(() => import('./quantum-computing/page'));
const AutonomousSystemsPage = lazy(() => import('./autonomous-systems/page'));
const BlockchainWeb3Page = lazy(() => import('./blockchain-web3/page'));
const BlockchainPage = lazy(() => import('./blockchain/page'));
const CybersecurityPage = lazy(() => import('./cybersecurity/page'));
const BusinessIntelligencePage = lazy(() => import('./business-intelligence/page'));
const IotEdgeComputingPage = lazy(() => import('./iot-edge-computing/page'));
const IotEdgePage = lazy(() => import('./iot-edge/page'));
const RoboticsPage = lazy(() => import('./robotics/page'));

// Additional pages
const BlogPage = lazy(() => import('./blog-index'));
const GuidesPage = lazy(() => import('./guides/page'));
const SitemapPage = lazy(() => import('./sitemap/page'));
const NotFoundPage = lazy(() => import('./not-found'));
const OfflinePage = lazy(() => import('./offline/page'));

// Utils
import { logger } from './utils/logger';
import { lazyLoadImages, preloadCriticalResources } from './utils/performanceUtils';
import { performanceOptimizer, performanceMonitor } from './utils/performanceUtils';
import { seoOptimizer } from './utils/seoUtils';
import { accessibilityEnhancer } from './utils/accessibilityUtils';
import { collectPerformanceMetrics } from './utils/performanceUtils';

// Styles
import './globals.css';

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
    initializeApp();
  }, []);

  const initializeApp = async () => {
    try {
      // Initialize performance optimizations
      if (typeof window !== 'undefined') {
        await preloadCriticalResources();
        await lazyLoadImages();
        await performanceOptimizer();
        await seoOptimizer();
        await accessibilityEnhancer();
        await collectPerformanceMetrics();
      }
      setIsInitialized(true);
    } catch (error) {
      console.error('App initialization error:', error);
      setIsInitialized(true);
    }
  };

  if (!isInitialized) {
    return <LoadingSpinner />;
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <main>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/enterprise" element={<EnterprisePage />} />
                <Route path="/services-advertising" element={<ServicesAdvertisingPage />} />
                <Route path="/case-studies" element={<CaseStudiesPage />} />
                
                {/* AI Services */}
                <Route path="/ai-services" element={<AiServicesPage />} />
                <Route path="/ai-marketing" element={<AiMarketingPage />} />
                <Route path="/ai-automation" element={<AiAutomationPage />} />
                <Route path="/ai-healthcare" element={<AiHealthcarePage />} />
                <Route path="/ai-fintech" element={<AiFintechPage />} />
                
                {/* IT Services */}
                <Route path="/it-services" element={<ItServicesPage />} />
                <Route path="/it-infrastructure" element={<ItServicesPage />} />
                <Route path="/cybersecurity" element={<CybersecurityPage />} />
                <Route path="/cloud-migration" element={<ItServicesPage />} />
                <Route path="/database-management" element={<ItServicesPage />} />
                <Route path="/network-solutions" element={<ItServicesPage />} />
                <Route path="/it-consulting" element={<ItServicesPage />} />
                <Route path="/it-support" element={<ItServicesPage />} />
                
                {/* Micro SAAS */}
                <Route path="/micro-saas" element={<MicroSaasPage />} />
                
                {/* Emerging Technologies */}
                <Route path="/quantum-computing" element={<QuantumComputingPage />} />
                <Route path="/autonomous-systems" element={<AutonomousSystemsPage />} />
                <Route path="/blockchain-web3" element={<BlockchainWeb3Page />} />
                <Route path="/blockchain" element={<BlockchainPage />} />
                <Route path="/business-intelligence" element={<BusinessIntelligencePage />} />
                <Route path="/iot-edge-computing" element={<IotEdgeComputingPage />} />
                <Route path="/iot-edge" element={<IotEdgePage />} />
                <Route path="/robotics" element={<RoboticsPage />} />
                
                {/* Additional Pages */}
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/guides" element={<GuidesPage />} />
                <Route path="/sitemap" element={<SitemapPage />} />
                <Route path="/offline" element={<OfflinePage />} />
                
                {/* Catch all route */}
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;