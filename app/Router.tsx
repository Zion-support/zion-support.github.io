'use client';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'));
const AboutPage = lazy(() => import('./about/page'));
const ContactPage = lazy(() => import('./contact/page'));
const BlogPage = lazy(() => import('./blog/page'));
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
const AiCustomerSupportPage = lazy(() => import('./ai-customer-support/page'));
const AiSalesAutomationPage = lazy(() => import('./ai-sales-automation/page'));
const AiDataVisualizationPage = lazy(() => import('./ai-data-visualization/page'));
const AiProjectManagerPage = lazy(() => import('./ai-project-manager/page'));
const AiSocialMediaManagerPage = lazy(() => import('./ai-social-media-manager/page'));
const AiAnalyticsDashboardPage = lazy(() => import('./ai-analytics-dashboard/page'));
const AiEmailMarketingPage = lazy(() => import('./ai-email-marketing/page'));
const AiEmailMarketingAutomationPage = lazy(() => import('./ai-email-marketing-automation/page'));
const AiExpenseTrackerPage = lazy(() => import('./ai-expense-tracker/page'));
const AiSocialMediaSchedulerPage = lazy(() => import('./ai-social-media-scheduler/page'));
const AiCustomerSupportBotPage = lazy(() => import('./ai-customer-support-bot/page'));
const AiCodeGenerationPage = lazy(() => import('./ai-code-generation/page'));
const AiCrmPage = lazy(() => import('./ai-crm/page'));
const AiCrmAdvancedPage = lazy(() => import('./ai-crm-advanced/page'));
const AiContentStudioPage = lazy(() => import('./ai-content-studio/page'));
const AiChatbotBuilderPage = lazy(() => import('./ai-chatbot-builder/page'));
const AiSeoOptimizerPage = lazy(() => import('./ai-seo-optimizer/page'));
const AiInvoiceGeneratorPage = lazy(() => import('./ai-invoice-generator/page'));
const AiHrAssistantPage = lazy(() => import('./ai-hr-assistant/page'));
const AiInventoryManagementPage = lazy(() => import('./ai-inventory-management/page'));
const AiDocumentProcessorPage = lazy(() => import('./ai-document-processor/page'));
const AiMobileAppBuilderPage = lazy(() => import('./ai-mobile-app-builder/page'));
const AiPredictiveAnalyticsPage = lazy(() => import('./ai-predictive-analytics/page'));
const AiRecommendationEnginePage = lazy(() => import('./ai-recommendation-engine/page'));
const AiSchedulerPage = lazy(() => import('./ai-scheduler/page'));
const AiTimeTrackerPage = lazy(() => import('./ai-time-tracker/page'));
const AiVideoGenerationPage = lazy(() => import('./ai-video-generation/page'));
const AiVoiceCloningPage = lazy(() => import('./ai-voice-cloning/page'));
const AiVoiceProcessingPage = lazy(() => import('./ai-voice-processing/page'));
const AiWritingAssistantPage = lazy(() => import('./ai-writing-assistant/page'));
const Ai3DGenerationPage = lazy(() => import('./ai-3d-generation/page'));
const AiBusinessIntelligencePage = lazy(() => import('./ai-business-intelligence/page'));
const AiCloudInfrastructurePage = lazy(() => import('./ai-cloud-infrastructure/page'));
const AiDesignStudioPage = lazy(() => import('./ai-design-studio/page'));
const AiEnterpriseSolutionsPage = lazy(() => import('./ai-enterprise-solutions/page'));
const AiExpenseTrackerPage = lazy(() => import('./ai-expense-tracker/page'));
const AiFashionDesignPage = lazy(() => import('./ai-fashion-design/page'));
const AiFinancialAdvisorPage = lazy(() => import('./ai-financial-advisor/page'));
const AiFitnessCoachPage = lazy(() => import('./ai-fitness-coach/page'));
const AiHealthcareSolutionsPage = lazy(() => import('./ai-healthcare-solutions/page'));
const AiImageRecognitionPage = lazy(() => import('./ai-image-recognition/page'));
const AiMusicCompositionPage = lazy(() => import('./ai-music-composition/page'));
const AiProjectManagementPage = lazy(() => import('./ai-project-management/page'));

// IT Services
const ItServicesPage = lazy(() => import('./it-services/page'));
const ItInfrastructurePage = lazy(() => import('./it-infrastructure/page'));
const ItInfrastructureManagementPage = lazy(() => import('./it-infrastructure-management/page'));
const CybersecurityPage = lazy(() => import('./cybersecurity/page'));
const CloudMigrationPage = lazy(() => import('./cloud-migration/page'));
const DatabaseManagementPage = lazy(() => import('./database-management/page'));
const ItConsultingPage = lazy(() => import('./it-consulting/page'));
const ItSupportPage = lazy(() => import('./it-support/page'));
const ManagedItPage = lazy(() => import('./managed-it/page'));
const CloudInfrastructurePage = lazy(() => import('./cloud-infrastructure/page'));
const CybersecuritySuitePage = lazy(() => import('./cybersecurity-suite/page'));
const ItInfrastructureSolutionsPage = lazy(() => import('./it-infrastructure-solutions/page'));

// Micro SAAS
const MicroSaasPage = lazy(() => import('./micro-saas/page'));

// Emerging Technologies
const QuantumComputingPage = lazy(() => import('./quantum-computing/page'));
const AutonomousSystemsPage = lazy(() => import('./autonomous-systems/page'));
const BlockchainWeb3Page = lazy(() => import('./blockchain-web3/page'));
const BusinessIntelligencePage = lazy(() => import('./business-intelligence/page'));
const IotEdgeComputingPage = lazy(() => import('./iot-edge-computing/page'));
const RoboticsPage = lazy(() => import('./robotics/page'));
const ArVrSolutionsPage = lazy(() => import('./ar-vr-solutions/page'));

// Other Pages
const CareersPage = lazy(() => import('./careers/page'));
const ConsultationPage = lazy(() => import('./consultation/page'));
const DocsPage = lazy(() => import('./docs/page'));
const ApiDocsPage = lazy(() => import('./api-docs/page'));
const CompliancePage = lazy(() => import('./compliance/page'));
const GdprPage = lazy(() => import('./gdpr/page'));
const CookiesPage = lazy(() => import('./cookies/page'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <div className="text-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4"></div>
      <p className="text-cyan-400 text-lg">Loading...</p>
    </div>
  </div>
);

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/consultation" element={<ConsultationPage />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/api-docs" element={<ApiDocsPage />} />
          <Route path="/compliance" element={<CompliancePage />} />
          <Route path="/gdpr" element={<GdprPage />} />
          <Route path="/cookies" element={<CookiesPage />} />

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
          <Route path="/ai-project-manager" element={<AiProjectManagerPage />} />
          <Route path="/ai-social-media-manager" element={<AiSocialMediaManagerPage />} />
          <Route path="/ai-analytics-dashboard" element={<AiAnalyticsDashboardPage />} />
          <Route path="/ai-email-marketing" element={<AiEmailMarketingPage />} />
          <Route path="/ai-email-marketing-automation" element={<AiEmailMarketingAutomationPage />} />
          <Route path="/ai-expense-tracker" element={<AiExpenseTrackerPage />} />
          <Route path="/ai-social-media-scheduler" element={<AiSocialMediaSchedulerPage />} />
          <Route path="/ai-customer-support-bot" element={<AiCustomerSupportBotPage />} />
          <Route path="/ai-code-generation" element={<AiCodeGenerationPage />} />
          <Route path="/ai-crm" element={<AiCrmPage />} />
          <Route path="/ai-crm-advanced" element={<AiCrmAdvancedPage />} />
          <Route path="/ai-content-studio" element={<AiContentStudioPage />} />
          <Route path="/ai-chatbot-builder" element={<AiChatbotBuilderPage />} />
          <Route path="/ai-seo-optimizer" element={<AiSeoOptimizerPage />} />
          <Route path="/ai-invoice-generator" element={<AiInvoiceGeneratorPage />} />
          <Route path="/ai-hr-assistant" element={<AiHrAssistantPage />} />
          <Route path="/ai-inventory-management" element={<AiInventoryManagementPage />} />
          <Route path="/ai-document-processor" element={<AiDocumentProcessorPage />} />
          <Route path="/ai-mobile-app-builder" element={<AiMobileAppBuilderPage />} />
          <Route path="/ai-predictive-analytics" element={<AiPredictiveAnalyticsPage />} />
          <Route path="/ai-recommendation-engine" element={<AiRecommendationEnginePage />} />
          <Route path="/ai-scheduler" element={<AiSchedulerPage />} />
          <Route path="/ai-time-tracker" element={<AiTimeTrackerPage />} />
          <Route path="/ai-video-generation" element={<AiVideoGenerationPage />} />
          <Route path="/ai-voice-cloning" element={<AiVoiceCloningPage />} />
          <Route path="/ai-voice-processing" element={<AiVoiceProcessingPage />} />
          <Route path="/ai-writing-assistant" element={<AiWritingAssistantPage />} />
          <Route path="/ai-3d-generation" element={<Ai3DGenerationPage />} />
          <Route path="/ai-business-intelligence" element={<AiBusinessIntelligencePage />} />
          <Route path="/ai-cloud-infrastructure" element={<AiCloudInfrastructurePage />} />
          <Route path="/ai-design-studio" element={<AiDesignStudioPage />} />
          <Route path="/ai-enterprise-solutions" element={<AiEnterpriseSolutionsPage />} />
          <Route path="/ai-expense-tracker" element={<AiExpenseTrackerPage />} />
          <Route path="/ai-fashion-design" element={<AiFashionDesignPage />} />
          <Route path="/ai-financial-advisor" element={<AiFinancialAdvisorPage />} />
          <Route path="/ai-fitness-coach" element={<AiFitnessCoachPage />} />
          <Route path="/ai-healthcare-solutions" element={<AiHealthcareSolutionsPage />} />
          <Route path="/ai-image-recognition" element={<AiImageRecognitionPage />} />
          <Route path="/ai-music-composition" element={<AiMusicCompositionPage />} />
          <Route path="/ai-project-management" element={<AiProjectManagementPage />} />

          {/* IT Services */}
          <Route path="/it-services" element={<ItServicesPage />} />
          <Route path="/it-infrastructure" element={<ItInfrastructurePage />} />
          <Route path="/it-infrastructure-management" element={<ItInfrastructureManagementPage />} />
          <Route path="/cybersecurity" element={<CybersecurityPage />} />
          <Route path="/cloud-migration" element={<CloudMigrationPage />} />
          <Route path="/database-management" element={<DatabaseManagementPage />} />
          <Route path="/it-consulting" element={<ItConsultingPage />} />
          <Route path="/it-support" element={<ItSupportPage />} />
          <Route path="/managed-it" element={<ManagedItPage />} />
          <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
          <Route path="/cybersecurity-suite" element={<CybersecuritySuitePage />} />
          <Route path="/it-infrastructure-solutions" element={<ItInfrastructureSolutionsPage />} />

          {/* Micro SAAS */}
          <Route path="/micro-saas" element={<MicroSaasPage />} />

          {/* Emerging Technologies */}
          <Route path="/quantum-computing" element={<QuantumComputingPage />} />
          <Route path="/autonomous-systems" element={<AutonomousSystemsPage />} />
          <Route path="/blockchain-web3" element={<BlockchainWeb3Page />} />
          <Route path="/business-intelligence" element={<BusinessIntelligencePage />} />
          <Route path="/iot-edge-computing" element={<IotEdgeComputingPage />} />
          <Route path="/robotics" element={<RoboticsPage />} />
          <Route path="/ar-vr-solutions" element={<ArVrSolutionsPage />} />

          {/* Catch all route */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;