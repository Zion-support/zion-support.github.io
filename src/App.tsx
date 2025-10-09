import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './page';
import AboutPage from './about/page';
import ContactPage from './contact/page';
import ServicesPage from './services/page';
import BlogPage from './blog/page';
import CaseStudiesPage from './case-studies/page';
import NotFoundPage from './not-found';

// Lazy load pages for better performance
const PricingPage = lazy(() => import('./pricing/page'));
const TeamPage = lazy(() => import('./team/page'));
const CareersPage = lazy(() => import('./careers/page'));
const NewsPage = lazy(() => import('./news/page'));
const PrivacyPage = lazy(() => import('./privacy/page'));
const TermsPage = lazy(() => import('./terms/page'));
const CookiesPage = lazy(() => import('./cookies/page'));
const DemoPage = lazy(() => import('./demo/page'));
const ConsultationPage = lazy(() => import('./consultation/page'));
const SupportPage = lazy(() => import('./support/page'));
const StatusPage = lazy(() => import('./status/page'));
const DocsPage = lazy(() => import('./docs/page'));
const ApiDocsPage = lazy(() => import('./api-docs/page'));

// AI Services Pages
const AiServicesPage = lazy(() => import('./ai-services/page'));
const AiMarketingPage = lazy(() => import('./ai-marketing/page'));
const AiAutomationPage = lazy(() => import('./ai-automation/page'));
const AiHealthcarePage = lazy(() => import('./ai-healthcare/page'));
const AiFintechPage = lazy(() => import('./ai-fintech/page'));
const AiContentGenerationPage = lazy(() => import('./ai-content-generation/page'));
const AiDataAnalyticsPage = lazy(() => import('./ai-data-analytics/page'));
const AiCybersecurityPage = lazy(() => import('./ai-cybersecurity/page'));
const AiWorkflowAutomationPage = lazy(() => import('./ai-workflow-automation/page'));
const AiMobileAppDevelopmentPage = lazy(() => import('./ai-mobile-app-development/page'));
const AiEcommerceSolutionsPage = lazy(() => import('./ai-ecommerce-solutions/page'));
const AiCustomerSupportPage = lazy(() => import('./ai-customer-support/page'));
const AiSalesAutomationPage = lazy(() => import('./ai-sales-automation/page'));
const AiDataVisualizationPage = lazy(() => import('./ai-data-visualization/page'));
const AiLeadGenerationPage = lazy(() => import('./ai-lead-generation/page'));
const AiDocumentProcessingPage = lazy(() => import('./ai-document-processing/page'));
const AiCrmPage = lazy(() => import('./ai-crm/page'));
const AiChatbotBuilderPage = lazy(() => import('./ai-chatbot-builder/page'));
const AiEmailAssistantPage = lazy(() => import('./ai-email-assistant/page'));
const AiSchedulerPage = lazy(() => import('./ai-scheduler/page'));
const AiWritingAssistantPage = lazy(() => import('./ai-writing-assistant/page'));

// Micro SAAS Pages
const MicroSaasPage = lazy(() => import('./micro-saas/page'));
const AiProjectManagerPage = lazy(() => import('./ai-project-manager/page'));
const AiSocialMediaManagerPage = lazy(() => import('./ai-social-media-manager/page'));
const AiAnalyticsDashboardPage = lazy(() => import('./ai-analytics-dashboard/page'));
const AiEmailMarketingPage = lazy(() => import('./ai-email-marketing/page'));
const AiCustomerSupportBotPage = lazy(() => import('./ai-customer-support-bot/page'));
const AiCodeGenerationPage = lazy(() => import('./ai-code-generation/page'));

// IT Services Pages
const ItInfrastructurePage = lazy(() => import('./it-infrastructure/page'));
const CybersecurityPage = lazy(() => import('./cybersecurity/page'));
const CloudMigrationPage = lazy(() => import('./cloud-migration/page'));
const DevopsPage = lazy(() => import('./devops/page'));
const DatabasePage = lazy(() => import('./database/page'));
const NetworkingPage = lazy(() => import('./networking/page'));
const CloudServicesPage = lazy(() => import('./cloud-services/page'));

// Specialized Solutions Pages
const QuantumComputingPage = lazy(() => import('./quantum-computing/page'));
const AutonomousSystemsPage = lazy(() => import('./autonomous-systems/page'));
const BlockchainWeb3Page = lazy(() => import('./blockchain-web3/page'));
const IotEdgeComputingPage = lazy(() => import('./iot-edge-computing/page'));
const BusinessIntelligencePage = lazy(() => import('./business-intelligence/page'));
const RoboticsPage = lazy(() => import('./robotics/page'));
const SecurityPage = lazy(() => import('./security/page'));
const EnterprisePage = lazy(() => import('./enterprise/page'));
const CompliancePage = lazy(() => import('./compliance/page'));
const GdprPage = lazy(() => import('./gdpr/page'));

// Business Apps Pages
const BusinessAppsPage = lazy(() => import('./business-apps/page'));
const TaskManagerProPage = lazy(() => import('./task-manager-pro/page'));
const ExpenseTrackerPage = lazy(() => import('./expense-tracker/page'));
const ProductivityPage = lazy(() => import('./productivity/page'));
const SmartAnalyticsPage = lazy(() => import('./smart-analytics/page'));

// Other Pages
const ApiPage = lazy(() => import('./api/page'));
const SitemapPage = lazy(() => import('./sitemap-page'));
const OfflinePage = lazy(() => import('./offline/page'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4"></div>
      <p className="text-white text-lg">Loading...</p>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          
          {/* Company Pages */}
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/consultation" element={<ConsultationPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/status" element={<StatusPage />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/api-docs" element={<ApiDocsPage />} />
          
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
          <Route path="/ai-mobile-app-development" element={<AiMobileAppDevelopmentPage />} />
          <Route path="/ai-ecommerce-solutions" element={<AiEcommerceSolutionsPage />} />
          <Route path="/ai-customer-support" element={<AiCustomerSupportPage />} />
          <Route path="/ai-sales-automation" element={<AiSalesAutomationPage />} />
          <Route path="/ai-data-visualization" element={<AiDataVisualizationPage />} />
          <Route path="/ai-lead-generation" element={<AiLeadGenerationPage />} />
          <Route path="/ai-document-processing" element={<AiDocumentProcessingPage />} />
          <Route path="/ai-crm" element={<AiCrmPage />} />
          <Route path="/ai-chatbot-builder" element={<AiChatbotBuilderPage />} />
          <Route path="/ai-email-assistant" element={<AiEmailAssistantPage />} />
          <Route path="/ai-scheduler" element={<AiSchedulerPage />} />
          <Route path="/ai-writing-assistant" element={<AiWritingAssistantPage />} />
          
          {/* Micro SAAS */}
          <Route path="/micro-saas" element={<MicroSaasPage />} />
          <Route path="/ai-project-manager" element={<AiProjectManagerPage />} />
          <Route path="/ai-social-media-manager" element={<AiSocialMediaManagerPage />} />
          <Route path="/ai-analytics-dashboard" element={<AiAnalyticsDashboardPage />} />
          <Route path="/ai-email-marketing" element={<AiEmailMarketingPage />} />
          <Route path="/ai-customer-support-bot" element={<AiCustomerSupportBotPage />} />
          <Route path="/ai-code-generation" element={<AiCodeGenerationPage />} />
          
          {/* IT Services */}
          <Route path="/it-infrastructure" element={<ItInfrastructurePage />} />
          <Route path="/cybersecurity" element={<CybersecurityPage />} />
          <Route path="/cloud-migration" element={<CloudMigrationPage />} />
          <Route path="/devops" element={<DevopsPage />} />
          <Route path="/database" element={<DatabasePage />} />
          <Route path="/networking" element={<NetworkingPage />} />
          <Route path="/cloud-services" element={<CloudServicesPage />} />
          
          {/* Specialized Solutions */}
          <Route path="/quantum-computing" element={<QuantumComputingPage />} />
          <Route path="/autonomous-systems" element={<AutonomousSystemsPage />} />
          <Route path="/blockchain-web3" element={<BlockchainWeb3Page />} />
          <Route path="/iot-edge-computing" element={<IotEdgeComputingPage />} />
          <Route path="/business-intelligence" element={<BusinessIntelligencePage />} />
          <Route path="/robotics" element={<RoboticsPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/enterprise" element={<EnterprisePage />} />
          <Route path="/compliance" element={<CompliancePage />} />
          <Route path="/gdpr" element={<GdprPage />} />
          
          {/* Business Apps */}
          <Route path="/business-apps" element={<BusinessAppsPage />} />
          <Route path="/task-manager-pro" element={<TaskManagerProPage />} />
          <Route path="/expense-tracker" element={<ExpenseTrackerPage />} />
          <Route path="/productivity" element={<ProductivityPage />} />
          <Route path="/smart-analytics" element={<SmartAnalyticsPage />} />
          
          {/* Other Pages */}
          <Route path="/api" element={<ApiPage />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          <Route path="/offline" element={<OfflinePage />} />
          
          {/* 404 Page */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;