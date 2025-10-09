'use client';

import React, { Suspense, lazy, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Routes, Route, Navigate } from 'react-router-dom';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'));
const AboutPage = lazy(() => import('./about/page'));
const ContactPage = lazy(() => import('./contact/page'));
const CaseStudiesPage = lazy(() => import('./case-studies/page'));
const BlogPage = lazy(() => import('./blog/page'));

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
const AiCustomerSupportPage = lazy(() => import('./ai-customer-support/page'));
const AiSalesAutomationPage = lazy(() => import('./ai-sales-automation/page'));
const AiDataVisualizationPage = lazy(() => import('./ai-data-visualization/page'));

// IT Services
const ItServicesPage = lazy(() => import('./it-services/page'));
const ItInfrastructurePage = lazy(() => import('./it-infrastructure/page'));
const CybersecurityPage = lazy(() => import('./cybersecurity/page'));
const CloudMigrationPage = lazy(() => import('./cloud-migration/page'));
const DatabaseManagementPage = lazy(() => import('./database-management/page'));
const ItConsultingPage = lazy(() => import('./it-consulting/page'));
const ItSupportPage = lazy(() => import('./it-support/page'));

// Specialized Solutions
const QuantumComputingPage = lazy(() => import('./quantum-computing/page'));
const AutonomousSystemsPage = lazy(() => import('./autonomous-systems/page'));
const BlockchainWeb3Page = lazy(() => import('./blockchain-web3/page'));
const BusinessIntelligencePage = lazy(() => import('./business-intelligence/page'));
const IotEdgeComputingPage = lazy(() => import('./iot-edge-computing/page'));
const RoboticsPage = lazy(() => import('./robotics/page'));
const ArVrSolutionsPage = lazy(() => import('./ar-vr-solutions/page'));

// Micro SAAS
const MicroSaasPage = lazy(() => import('./micro-saas/page'));

// Additional pages
const PrivacyPage = lazy(() => import('./privacy/page'));
const TermsPage = lazy(() => import('./terms/page'));
const CookiesPage = lazy(() => import('./cookies/page'));
const GdprPage = lazy(() => import('./gdpr/page'));
const CompliancePage = lazy(() => import('./compliance/page'));
const DocsPage = lazy(() => import('./docs/page'));
const ApiDocsPage = lazy(() => import('./api-docs/page'));
const ConsultationPage = lazy(() => import('./consultation/page'));
const NotFoundPage = lazy(() => import('./not-found'));

// Utils
import { performanceOptimizer, performanceMonitor, seoOptimizer, accessibilityEnhancer, collectPerformanceMetrics } from './utils/performanceUtils';

// Styles
import './globals.css';

// Mock components for now - these will be implemented
const PerformanceOptimizer = () => null;
const SEOOptimizer = () => null;
const AccessibilityEnhancer = () => null;
const UserExperienceEnhancer = () => null;
const SecurityEnhancer = () => null;

const App: React.FC = () => {
  useEffect(() => {
    // Initialize performance monitoring
    if (typeof window !== 'undefined') {
      try {
        performanceOptimizer();
        performanceMonitor();
        seoOptimizer();
        accessibilityEnhancer();
        collectPerformanceMetrics();
      } catch (error) {
        console.warn('Performance monitoring initialization failed:', error);
      }
    }
  }, []);

  return (
    <HelmetProvider>
      <div className="App">
        {/* Enhanced Components */}
        <PerformanceOptimizer />
        <SEOOptimizer />
        <AccessibilityEnhancer />
        <UserExperienceEnhancer />
        <SecurityEnhancer />
        
        {/* Main App Content with Routing */}
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400"></div>
        </div>}>
          <Routes>
            {/* Main Pages */}
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
            <Route path="/ai-customer-support" element={<AiCustomerSupportPage />} />
            <Route path="/ai-sales-automation" element={<AiSalesAutomationPage />} />
            <Route path="/ai-data-visualization" element={<AiDataVisualizationPage />} />
            
            {/* IT Services */}
            <Route path="/it-services" element={<ItServicesPage />} />
            <Route path="/it-infrastructure" element={<ItInfrastructurePage />} />
            <Route path="/cybersecurity" element={<CybersecurityPage />} />
            <Route path="/cloud-migration" element={<CloudMigrationPage />} />
            <Route path="/database-management" element={<DatabaseManagementPage />} />
            <Route path="/it-consulting" element={<ItConsultingPage />} />
            <Route path="/it-support" element={<ItSupportPage />} />
            
            {/* Specialized Solutions */}
            <Route path="/quantum-computing" element={<QuantumComputingPage />} />
            <Route path="/autonomous-systems" element={<AutonomousSystemsPage />} />
            <Route path="/blockchain-web3" element={<BlockchainWeb3Page />} />
            <Route path="/business-intelligence" element={<BusinessIntelligencePage />} />
            <Route path="/iot-edge-computing" element={<IotEdgeComputingPage />} />
            <Route path="/robotics" element={<RoboticsPage />} />
            <Route path="/ar-vr-solutions" element={<ArVrSolutionsPage />} />
            
            {/* Micro SAAS */}
            <Route path="/micro-saas" element={<MicroSaasPage />} />
            
            {/* Legal & Support Pages */}
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/cookies" element={<CookiesPage />} />
            <Route path="/gdpr" element={<GdprPage />} />
            <Route path="/compliance" element={<CompliancePage />} />
            <Route path="/docs" element={<DocsPage />} />
            <Route path="/api-docs" element={<ApiDocsPage />} />
            <Route path="/consultation" element={<ConsultationPage />} />
            
            {/* Catch all route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    </HelmetProvider>
  );
};

export default App;
