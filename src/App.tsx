import React, { Suspense, lazy } from 'react';
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
const ItServicesPage = lazy(() => import('./it-services/page'));
const ItInfrastructurePage = lazy(() => import('./it-infrastructure/page'));
const CybersecurityPage = lazy(() => import('./cybersecurity/page'));
const CloudMigrationPage = lazy(() => import('./cloud-migration/page'));
const DevopsPage = lazy(() => import('./devops/page'));
const DatabasePage = lazy(() => import('./database/page'));
const NetworkingPage = lazy(() => import('./networking/page'));
const CloudServicesPage = lazy(() => import('./cloud-services/page'));

// Advanced Technology Pages
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

// API and Utility Pages
const ApiPage = lazy(() => import('./api/page'));
const SitemapPage = lazy(() => import('./sitemap-page'));
const OfflinePage = lazy(() => import('./offline/page'));

// Loading Spinner Component
const LoadingSpinner: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4"></div>
      <p className="text-white text-lg">Loading...</p>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div>
        {/* Main Pages */}
        <HomePage />
        <AboutPage />
        <ContactPage />
        <ServicesPage />
        <BlogPage />
        <CaseStudiesPage />
        
        {/* Company Pages */}
        <PricingPage />
        <TeamPage />
        <CareersPage />
        <NewsPage />
        <PrivacyPage />
        <TermsPage />
        <CookiesPage />
        <DemoPage />
        <ConsultationPage />
        <SupportPage />
        <StatusPage />
        <DocsPage />
        <ApiDocsPage />
        
        {/* AI Services Pages */}
        <AiServicesPage />
        <AiMarketingPage />
        <AiAutomationPage />
        <AiHealthcarePage />
        <AiFintechPage />
        <AiContentGenerationPage />
        <AiDataAnalyticsPage />
        <AiCybersecurityPage />
        <AiWorkflowAutomationPage />
        <AiMobileAppDevelopmentPage />
        <AiEcommerceSolutionsPage />
        <AiCustomerSupportPage />
        <AiSalesAutomationPage />
        <AiDataVisualizationPage />
        <AiLeadGenerationPage />
        <AiDocumentProcessingPage />
        <AiCrmPage />
        <AiChatbotBuilderPage />
        <AiEmailAssistantPage />
        <AiSchedulerPage />
        <AiWritingAssistantPage />
        
        {/* Micro SAAS Pages */}
        <MicroSaasPage />
        <AiProjectManagerPage />
        <AiSocialMediaManagerPage />
        <AiAnalyticsDashboardPage />
        <AiEmailMarketingPage />
        <AiCustomerSupportBotPage />
        <AiCodeGenerationPage />
        
        {/* IT Services Pages */}
        <ItServicesPage />
        <ItInfrastructurePage />
        <CybersecurityPage />
        <CloudMigrationPage />
        <DevopsPage />
        <DatabasePage />
        <NetworkingPage />
        <CloudServicesPage />
        
        {/* Advanced Technology Pages */}
        <QuantumComputingPage />
        <AutonomousSystemsPage />
        <BlockchainWeb3Page />
        <IotEdgeComputingPage />
        <BusinessIntelligencePage />
        <RoboticsPage />
        <SecurityPage />
        <EnterprisePage />
        <CompliancePage />
        <GdprPage />
        
        {/* Business Apps Pages */}
        <BusinessAppsPage />
        <TaskManagerProPage />
        <ExpenseTrackerPage />
        <ProductivityPage />
        <SmartAnalyticsPage />
        
        {/* API and Utility Pages */}
        <ApiPage />
        <SitemapPage />
        <OfflinePage />
        
        {/* 404 Page */}
        <NotFoundPage />
      </div>
    </Suspense>
  );
};

export default App;