'use client';

import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components

// Lazy load components for better performance
// const ContentShowcase = lazy(() => import('./components/ContentShowcase'));
// const InteractiveContentShowcase2026 = lazy(
//   () => import('./components/InteractiveContentShowcase2026')
// );
// const InteractiveAIROICalculator = lazy(
//   () => import('./components/InteractiveAIROICalculator')
// );

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
const AiProjectManagerPage = lazy(() => import('./ai-project-manager/page'));
const ItServicesPage = lazy(() => import('./it-services/page'));
const CloudInfrastructurePage = lazy(() => import('./cloud-infrastructure/page'));
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

const App: React.FC = () => {
  useEffect(() => {
    // Performance optimization
    if (typeof window !== 'undefined') {
      // Preload critical resources
      preloadCriticalResources();
      
      // Initialize performance monitoring
      performanceMonitor();
      
      // Initialize SEO optimization
      seoOptimizer();
      
      // Initialize accessibility enhancements
      accessibilityEnhancer();
    }
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Suspense fallback={<div className="min-h-screen bg-slate-900 flex items-center justify-center">
            <div className="text-white text-xl">Loading...</div>
          </div>}>
            <Routes>
              {/* Main Pages */}
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
              <Route path="/ai-project-manager" element={<AiProjectManagerPage />} />

              {/* IT Services */}
              <Route path="/it-services" element={<ItServicesPage />} />
              <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />

              {/* Micro SAAS */}
              <Route path="/micro-saas" element={<MicroSaasPage />} />

              {/* Emerging Tech */}
              <Route path="/quantum-computing" element={<QuantumComputingPage />} />
              <Route path="/autonomous-systems" element={<AutonomousSystemsPage />} />
              <Route path="/blockchain-web3" element={<BlockchainWeb3Page />} />
              <Route path="/blockchain" element={<BlockchainPage />} />
              <Route path="/cybersecurity" element={<CybersecurityPage />} />
              <Route path="/business-intelligence" element={<BusinessIntelligencePage />} />
              <Route path="/iot-edge-computing" element={<IotEdgeComputingPage />} />
              <Route path="/iot-edge" element={<IotEdgePage />} />
              <Route path="/robotics" element={<RoboticsPage />} />

              {/* Additional Pages */}
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/guides" element={<GuidesPage />} />
              <Route path="/sitemap" element={<SitemapPage />} />
              <Route path="/offline" element={<OfflinePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;