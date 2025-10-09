'use client';

import React, { Suspense, lazy, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceDashboard from './components/PerformanceDashboard';
import AdvancedPerformanceMonitor from './components/AdvancedPerformanceMonitor';
import AdvancedErrorBoundary from './components/AdvancedErrorBoundary';
import SEOEnhancer from './components/SEOEnhancer';
import LoadingSpinner from './components/LoadingSpinner';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Analytics from './components/Analytics';

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

// AI Services Pages
const AIServicesPage = lazy(() => import('./ai-services/page'));
const AIMarketingPage = lazy(() => import('./ai-marketing/page'));
const AIAutomationPage = lazy(() => import('./ai-automation/page'));
const AIHealthcarePage = lazy(() => import('./ai-healthcare/page'));
const AIFintechPage = lazy(() => import('./ai-fintech/page'));
const AIDataAnalyticsPage = lazy(() => import('./ai-data-analytics/page'));
const AICybersecurityPage = lazy(() => import('./ai-cybersecurity/page'));
const AIWorkflowAutomationPage = lazy(() => import('./ai-workflow-automation/page'));
const AICloudInfrastructurePage = lazy(() => import('./ai-cloud-infrastructure/page'));
const AIEcommerceSolutionsPage = lazy(() => import('./ai-ecommerce-solutions/page'));
const AIMobileAppDevelopmentPage = lazy(() => import('./ai-mobile-app-development/page'));
const AIContentGenerationPage = lazy(() => import('./ai-content-generation/page'));

// IT Services Pages
const ITServicesPage = lazy(() => import('./it-services/page'));
const MicroSAASPage = lazy(() => import('./micro-saas/page'));
const CybersecurityPage = lazy(() => import('./cybersecurity/page'));
const ITInfrastructurePage = lazy(() => import('./it-infrastructure/page'));

// Specialized Technology Pages
const QuantumComputingPage = lazy(() => import('./quantum-computing/page'));
const AutonomousSystemsPage = lazy(() => import('./autonomous-systems/page'));
const BusinessIntelligencePage = lazy(() => import('./business-intelligence/page'));
const BlockchainWeb3Page = lazy(() => import('./blockchain-web3/page'));
const IoTEdgeComputingPage = lazy(() => import('./iot-edge-computing/page'));

// Additional Pages
const BlogPage = lazy(() => import('./blog-index'));
const GuidesPage = lazy(() => import('./guides/page'));
const SitemapPage = lazy(() => import('./sitemap/page'));
const DocsPage = lazy(() => import('./docs/page'));
const APIPage = lazy(() => import('./api/page'));
const SupportPage = lazy(() => import('./support/page'));

// Utils
import { logger } from './utils/logger';

// Styles
import './globals.css';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize global error handling
    logger.info('initialized', { component: 'App' });
    
    logger.info('🚀 Zion Tech Group App initialized', { component: 'App' });
  }, []);

  return (
    <HelmetProvider>
      <AdvancedErrorBoundary
        enableErrorReporting={true}
        enableRetry={true}
        onError={(error, errorInfo) => {
          logger.error(error.message, { error, errorInfo });
        }}
      >
        <AccessibilityEnhancer>
          <SEOEnhancer
            title="Zion Tech Group - Advanced AI and IT Solutions"
            description="Leading provider of enterprise AI solutions, quantum computing, and autonomous systems. Transform your business with our cutting-edge technology."
          >
              <Router>
                <div className="App">
                  <Analytics trackingId="G-XXXXXXXXXX" />
                  <Navigation />
                  <main id="main-content">
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
                        
                        {/* AI Services Routes */}
                        <Route path="/ai-services" element={<AIServicesPage />} />
                        <Route path="/ai-marketing" element={<AIMarketingPage />} />
                        <Route path="/ai-automation" element={<AIAutomationPage />} />
                        <Route path="/ai-healthcare" element={<AIHealthcarePage />} />
                        <Route path="/ai-fintech" element={<AIFintechPage />} />
                        <Route path="/ai-data-analytics" element={<AIDataAnalyticsPage />} />
                        <Route path="/ai-cybersecurity" element={<AICybersecurityPage />} />
                        <Route path="/ai-workflow-automation" element={<AIWorkflowAutomationPage />} />
                        <Route path="/ai-cloud-infrastructure" element={<AICloudInfrastructurePage />} />
                        <Route path="/ai-ecommerce-solutions" element={<AIEcommerceSolutionsPage />} />
                        <Route path="/ai-mobile-app-development" element={<AIMobileAppDevelopmentPage />} />
                        <Route path="/ai-content-generation" element={<AIContentGenerationPage />} />
                        
                        {/* IT Services Routes */}
                        <Route path="/it-services" element={<ITServicesPage />} />
                        <Route path="/it-infrastructure" element={<ITInfrastructurePage />} />
                        <Route path="/micro-saas" element={<MicroSAASPage />} />
                        <Route path="/cybersecurity" element={<CybersecurityPage />} />
                        
                        {/* Specialized Technology Routes */}
                        <Route path="/quantum-computing" element={<QuantumComputingPage />} />
                        <Route path="/autonomous-systems" element={<AutonomousSystemsPage />} />
                        <Route path="/business-intelligence" element={<BusinessIntelligencePage />} />
                        <Route path="/blockchain-web3" element={<BlockchainWeb3Page />} />
                        <Route path="/iot-edge-computing" element={<IoTEdgeComputingPage />} />
                        
                        {/* Additional Routes */}
                        <Route path="/blog" element={<BlogPage />} />
                        <Route path="/guides" element={<GuidesPage />} />
                        <Route path="/sitemap" element={<SitemapPage />} />
                        <Route path="/docs" element={<DocsPage />} />
                        <Route path="/api" element={<APIPage />} />
                        <Route path="/support" element={<SupportPage />} />
                      </Routes>
                    </Suspense>
                  </main>
                  <Footer />

                  {/* Performance Dashboard */}
                  <PerformanceDashboard />
                  
                  {/* Advanced Performance Monitor */}
                  <AdvancedPerformanceMonitor
                    enableRealTimeMonitoring={process.env['NODE_ENV'] === 'development'}
                    onMetricsUpdate={(metrics) => {
                      if (process.env['NODE_ENV'] === 'development') {
                        logger.info('Performance Metrics', { component: 'PerformanceMonitor', metrics });
                      }
                    }}
                  />
                </div>
              </Router>
          </SEOEnhancer>
        </AccessibilityEnhancer>
      </AdvancedErrorBoundary>
    </HelmetProvider>
  );
};

export default App;
