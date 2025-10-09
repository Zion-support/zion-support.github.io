'use client';

import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'));
const AboutPage = lazy(() => import('./about/page'));
const ContactPage = lazy(() => import('./contact/page'));
const CaseStudiesPage = lazy(() => import('./case-studies/page'));

// AI Services
const AiServicesPage = lazy(() => import('./ai-services/page'));
const AiMarketingPage = lazy(() => import('./ai-marketing/page'));
const AiAutomationPage = lazy(() => import('./ai-automation/page'));
const AiHealthcarePage = lazy(() => import('./ai-healthcare/page'));
const AiFintechPage = lazy(() => import('./ai-fintech/page'));
const AiContentGenerationPage = lazy(() => import('./ai-content-generation/page'));
const AiDataAnalyticsPage = lazy(() => import('./ai-data-analytics/page'));
const AiCybersecurityPage = lazy(() => import('./ai-cybersecurity/page'));
const AiWorkflowAutomationPage = lazy(() => import('./ai-workflow-automation/page'));

// IT Services
const ItServicesPage = lazy(() => import('./it-services/page'));
const ItInfrastructurePage = lazy(() => import('./it-infrastructure/page'));
const CybersecurityPage = lazy(() => import('./cybersecurity/page'));
const CloudMigrationPage = lazy(() => import('./cloud-migration/page'));
const DatabaseManagementPage = lazy(() => import('./database-management/page'));

// Specialized Solutions
const MicroSaasPage = lazy(() => import('./micro-saas/page'));
const QuantumComputingPage = lazy(() => import('./quantum-computing/page'));
const AutonomousSystemsPage = lazy(() => import('./autonomous-systems/page'));
const BlockchainWeb3Page = lazy(() => import('./blockchain-web3/page'));
const BusinessIntelligencePage = lazy(() => import('./business-intelligence/page'));
const IotEdgeComputingPage = lazy(() => import('./iot-edge-computing/page'));
const RoboticsPage = lazy(() => import('./robotics/page'));
const ArVrSolutionsPage = lazy(() => import('./ar-vr-solutions/page'));

// Additional pages
const BlogPage = lazy(() => import('./blog/page'));
const NotFoundPage = lazy(() => import('./not-found'));

import './globals.css';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize performance monitoring
    if (typeof window !== 'undefined') {
      // Add performance monitoring here
    }
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400"></div>
          </div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/blog" element={<BlogPage />} />
              
              {/* AI Services */}
              <Route path="/ai-services" element={<AiServicesPage />} />
              <Route path="/ai-marketing" element={<AiMarketingPage />} />
              <Route path="/ai-automation" element={<AiAutomationPage />} />
              <Route path="/ai-healthcare" element={<AiHealthcarePage />} />
              <Route path="/ai-fintech" element={<AiFintechPage />} />
              <Route path="/ai-content-generation" element={<AiContentGenerationPage />} />
              <Route path="/ai-data-analytics" element={<AiDataAnalyticsPage />} />
              <Route path="/ai-cybersecurity" element={<AiCybersecurityPage />} />
              <Route path="/ai-workflow-automation" element={<AiWorkflowAutomationPage />} />
              
              {/* IT Services */}
              <Route path="/it-services" element={<ItServicesPage />} />
              <Route path="/it-infrastructure" element={<ItInfrastructurePage />} />
              <Route path="/cybersecurity" element={<CybersecurityPage />} />
              <Route path="/cloud-migration" element={<CloudMigrationPage />} />
              <Route path="/database-management" element={<DatabaseManagementPage />} />
              
              {/* Specialized Solutions */}
              <Route path="/micro-saas" element={<MicroSaasPage />} />
              <Route path="/quantum-computing" element={<QuantumComputingPage />} />
              <Route path="/autonomous-systems" element={<AutonomousSystemsPage />} />
              <Route path="/blockchain-web3" element={<BlockchainWeb3Page />} />
              <Route path="/business-intelligence" element={<BusinessIntelligencePage />} />
              <Route path="/iot-edge-computing" element={<IotEdgeComputingPage />} />
              <Route path="/robotics" element={<RoboticsPage />} />
              <Route path="/ar-vr-solutions" element={<ArVrSolutionsPage />} />
              
              {/* Catch all route */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
