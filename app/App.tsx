import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './page';
import './globals.css';

// Lazy load pages for better performance
const AboutPage = lazy(() => import('./about/page'));
const AIServicesPage = lazy(() => import('./ai-services/page'));
const AIMarketingPage = lazy(() => import('./ai-marketing/page'));
const AIAutomationPage = lazy(() => import('./ai-automation/page'));
const AIHealthcarePage = lazy(() => import('./ai-healthcare/page'));
const AIFintechPage = lazy(() => import('./ai-fintech/page'));
const AIContentGenerationPage = lazy(() => import('./ai-content-generation/page'));
const AIDataAnalyticsPage = lazy(() => import('./ai-data-analytics/page'));
const AICybersecurityPage = lazy(() => import('./ai-cybersecurity/page'));
const AIWorkflowAutomationPage = lazy(() => import('./ai-workflow-automation/page'));
const AICloudInfrastructurePage = lazy(() => import('./ai-cloud-infrastructure/page'));
const AICustomerSupportPage = lazy(() => import('./ai-customer-support/page'));
const AIDataVisualizationPage = lazy(() => import('./ai-data-visualization/page'));
const AIEcommerceSolutionsPage = lazy(() => import('./ai-ecommerce-solutions/page'));
const AIMobileAppDevelopmentPage = lazy(() => import('./ai-mobile-app-development/page'));
const AISalesAutomationPage = lazy(() => import('./ai-sales-automation/page'));
const ITServicesPage = lazy(() => import('./it-services/page'));
const ITInfrastructurePage = lazy(() => import('./it-infrastructure/page'));
const MicroSaasPage = lazy(() => import('./micro-saas/page'));
const CybersecurityPage = lazy(() => import('./cybersecurity/page'));
const QuantumComputingPage = lazy(() => import('./quantum-computing/page'));
const AutonomousSystemsPage = lazy(() => import('./autonomous-systems/page'));
const BlockchainWeb3Page = lazy(() => import('./blockchain-web3/page'));
const IoTEdgeComputingPage = lazy(() => import('./iot-edge-computing/page'));
const BusinessIntelligencePage = lazy(() => import('./business-intelligence/page'));
const ContactPage = lazy(() => import('./contact/page'));
const BlogPage = lazy(() => import('./blog/page'));
const CaseStudiesPage = lazy(() => import('./case-studies/page'));
const TeamPage = lazy(() => import('./team/page'));
const CareersPage = lazy(() => import('./careers/page'));
const NewsPage = lazy(() => import('./news/page'));
const DocsPage = lazy(() => import('./docs/page'));
const SupportPage = lazy(() => import('./support/page'));
const PrivacyPage = lazy(() => import('./privacy/page'));
const TermsPage = lazy(() => import('./terms/page'));
const CookiesPage = lazy(() => import('./cookies/page'));
const GDPRPage = lazy(() => import('./gdpr/page'));
const SecurityPage = lazy(() => import('./security/page'));
const StatusPage = lazy(() => import('./status/page'));
const SystemStatusPage = lazy(() => import('./system-status/page'));
const APIDocsPage = lazy(() => import('./api-docs/page'));
const EnterprisePage = lazy(() => import('./enterprise/page'));
const RoboticsPage = lazy(() => import('./robotics/page'));
const BusinessAppsPage = lazy(() => import('./business-apps/page'));
const CloudServicesPage = lazy(() => import('./cloud-services/page'));
const CompliancePage = lazy(() => import('./compliance/page'));
const DatabasePage = lazy(() => import('./database/page'));
const DeveloperToolsPage = lazy(() => import('./developer-tools/page'));
const DevOpsPage = lazy(() => import('./devops/page'));
const MarketingToolsPage = lazy(() => import('./marketing-tools/page'));
const NetworkingPage = lazy(() => import('./networking/page'));
const ProductivityPage = lazy(() => import('./productivity/page'));
const ServicesPage = lazy(() => import('./services/page'));
const ServicesAdvertisingPage = lazy(() => import('./services-advertising/page'));
const SitemapPage = lazy(() => import('./sitemap/page'));
const OfflinePage = lazy(() => import('./offline/page'));
const NotFoundPage = lazy(() => import('./not-found'));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
      <p className="text-white text-lg">Loading...</p>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main id="main-content">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/ai-services" element={<AIServicesPage />} />
              <Route path="/ai-marketing" element={<AIMarketingPage />} />
              <Route path="/ai-automation" element={<AIAutomationPage />} />
              <Route path="/ai-healthcare" element={<AIHealthcarePage />} />
              <Route path="/ai-fintech" element={<AIFintechPage />} />
              <Route path="/ai-content-generation" element={<AIContentGenerationPage />} />
              <Route path="/ai-data-analytics" element={<AIDataAnalyticsPage />} />
              <Route path="/ai-cybersecurity" element={<AICybersecurityPage />} />
              <Route path="/ai-workflow-automation" element={<AIWorkflowAutomationPage />} />
              <Route path="/ai-cloud-infrastructure" element={<AICloudInfrastructurePage />} />
              <Route path="/ai-customer-support" element={<AICustomerSupportPage />} />
              <Route path="/ai-data-visualization" element={<AIDataVisualizationPage />} />
              <Route path="/ai-ecommerce-solutions" element={<AIEcommerceSolutionsPage />} />
              <Route path="/ai-mobile-app-development" element={<AIMobileAppDevelopmentPage />} />
              <Route path="/ai-sales-automation" element={<AISalesAutomationPage />} />
              <Route path="/it-services" element={<ITServicesPage />} />
              <Route path="/it-infrastructure" element={<ITInfrastructurePage />} />
              <Route path="/micro-saas" element={<MicroSaasPage />} />
              <Route path="/cybersecurity" element={<CybersecurityPage />} />
              <Route path="/quantum-computing" element={<QuantumComputingPage />} />
              <Route path="/autonomous-systems" element={<AutonomousSystemsPage />} />
              <Route path="/blockchain-web3" element={<BlockchainWeb3Page />} />
              <Route path="/blockchain" element={<BlockchainWeb3Page />} />
              <Route path="/iot-edge-computing" element={<IoTEdgeComputingPage />} />
              <Route path="/business-intelligence" element={<BusinessIntelligencePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/docs" element={<DocsPage />} />
              <Route path="/support" element={<SupportPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/cookies" element={<CookiesPage />} />
              <Route path="/gdpr" element={<GDPRPage />} />
              <Route path="/security" element={<SecurityPage />} />
              <Route path="/status" element={<StatusPage />} />
              <Route path="/system-status" element={<SystemStatusPage />} />
              <Route path="/api-docs" element={<APIDocsPage />} />
              <Route path="/enterprise" element={<EnterprisePage />} />
              <Route path="/robotics" element={<RoboticsPage />} />
              <Route path="/business-apps" element={<BusinessAppsPage />} />
              <Route path="/cloud-services" element={<CloudServicesPage />} />
              <Route path="/compliance" element={<CompliancePage />} />
              <Route path="/database" element={<DatabasePage />} />
              <Route path="/developer-tools" element={<DeveloperToolsPage />} />
              <Route path="/devops" element={<DevOpsPage />} />
              <Route path="/marketing-tools" element={<MarketingToolsPage />} />
              <Route path="/networking" element={<NetworkingPage />} />
              <Route path="/productivity" element={<ProductivityPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services-advertising" element={<ServicesAdvertisingPage />} />
              <Route path="/sitemap" element={<SitemapPage />} />
              <Route path="/offline" element={<OfflinePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
