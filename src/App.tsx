import React, { useEffect, useState, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'));
const AboutPage = lazy(() => import('./about/page'));
const ContactPage = lazy(() => import('./contact/page'));
const ServicesPage = lazy(() => import('./services/page'));
const TeamPage = lazy(() => import('./team/page'));
const PrivacyPage = lazy(() => import('./privacy/page'));
const TermsPage = lazy(() => import('./terms/page'));
const EnterprisePage = lazy(() => import('./enterprise/page'));
const CaseStudiesPage = lazy(() => import('./case-studies/page'));
const BlogPage = lazy(() => import('./blog-index'));
const SitemapPage = lazy(() => import('./sitemap/page'));
const NotFoundPage = lazy(() => import('./not-found'));

// AI Services Pages
const AiServicesPage = lazy(() => import('./ai-services/page'));
const AiMarketingPage = lazy(() => import('./ai-marketing/page'));
const AiAutomationPage = lazy(() => import('./ai-automation/page'));
const AiHealthcarePage = lazy(() => import('./ai-healthcare/page'));
const AiFintechPage = lazy(() => import('./ai-fintech/page'));
const AiContentGenerationPage = lazy(() => import('./ai-content-generation/page'));
const AiCustomerSupportPage = lazy(() => import('./ai-customer-support/page'));
const AiDataAnalyticsPage = lazy(() => import('./ai-data-analytics/page'));
const AiProjectManagerPage = lazy(() => import('./ai-project-manager/page'));
const AiSalesAutomationPage = lazy(() => import('./ai-sales-automation/page'));
const AiWorkflowAutomationPage = lazy(() => import('./ai-workflow-automation/page'));

// IT Services Pages
const ItServicesPage = lazy(() => import('./it-services/page'));
const ItInfrastructurePage = lazy(() => import('./it-infrastructure/page'));
const CloudServicesPage = lazy(() => import('./cloud-services/page'));
const CybersecurityPage = lazy(() => import('./cybersecurity/page'));
const DatabaseManagementPage = lazy(() => import('./database-management/page'));
const DevopsPage = lazy(() => import('./devops/page'));

// Specialized Services
const MicroSaasPage = lazy(() => import('./micro-saas/page'));
const QuantumComputingPage = lazy(() => import('./quantum-computing/page'));
const AutonomousSystemsPage = lazy(() => import('./autonomous-systems/page'));
const BlockchainPage = lazy(() => import('./blockchain/page'));
const BusinessIntelligencePage = lazy(() => import('./business-intelligence/page'));
const IotEdgePage = lazy(() => import('./iot-edge/page'));
const RoboticsPage = lazy(() => import('./robotics/page'));

// Additional Pages
const ConsultationPage = lazy(() => import('./consultation/page'));
const CareersPage = lazy(() => import('./careers/page'));
const CompliancePage = lazy(() => import('./compliance/page'));
const CookiesPage = lazy(() => import('./cookies/page'));
const GdprPage = lazy(() => import('./gdpr/page'));

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
    <div className="App">
      <Navigation />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/enterprise" element={<EnterprisePage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          
          {/* AI Services */}
          <Route path="/ai-services" element={<AiServicesPage />} />
          <Route path="/ai-marketing" element={<AiMarketingPage />} />
          <Route path="/ai-automation" element={<AiAutomationPage />} />
          <Route path="/ai-healthcare" element={<AiHealthcarePage />} />
          <Route path="/ai-fintech" element={<AiFintechPage />} />
          <Route path="/ai-content-generation" element={<AiContentGenerationPage />} />
          <Route path="/ai-customer-support" element={<AiCustomerSupportPage />} />
          <Route path="/ai-data-analytics" element={<AiDataAnalyticsPage />} />
          <Route path="/ai-project-manager" element={<AiProjectManagerPage />} />
          <Route path="/ai-sales-automation" element={<AiSalesAutomationPage />} />
          <Route path="/ai-workflow-automation" element={<AiWorkflowAutomationPage />} />
          
          {/* IT Services */}
          <Route path="/it-services" element={<ItServicesPage />} />
          <Route path="/it-infrastructure" element={<ItInfrastructurePage />} />
          <Route path="/cloud-services" element={<CloudServicesPage />} />
          <Route path="/cybersecurity" element={<CybersecurityPage />} />
          <Route path="/database-management" element={<DatabaseManagementPage />} />
          <Route path="/devops" element={<DevopsPage />} />
          
          {/* Specialized Services */}
          <Route path="/micro-saas" element={<MicroSaasPage />} />
          <Route path="/quantum-computing" element={<QuantumComputingPage />} />
          <Route path="/autonomous-systems" element={<AutonomousSystemsPage />} />
          <Route path="/blockchain" element={<BlockchainPage />} />
          <Route path="/business-intelligence" element={<BusinessIntelligencePage />} />
          <Route path="/iot-edge" element={<IotEdgePage />} />
          <Route path="/robotics" element={<RoboticsPage />} />
          
          {/* Additional Pages */}
          <Route path="/consultation" element={<ConsultationPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/compliance" element={<CompliancePage />} />
          <Route path="/cookies" element={<CookiesPage />} />
          <Route path="/gdpr" element={<GdprPage />} />
          
          {/* 404 Page */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;