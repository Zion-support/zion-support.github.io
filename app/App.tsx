'use client';

import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load pages for better performance;
const HomePage = lazy(() => import('./page'));
const AboutPage = lazy(() => import('./about/page'));
const ContactPage = lazy(() => import('./contact/page'));
const ServicesPage = lazy(() => import('./services/page'));
const PricingPage = lazy(() => import('./pricing/page'));
const CaseStudiesPage = lazy(() => import('./case-studies/page'));
const BlogPage = lazy(() => import('./blog/page'));
const TeamPage = lazy(() => import('./team/page'));
const CareersPage = lazy(() => import('./careers/page'));
const PrivacyPage = lazy(() => import('./privacy/page'));
const TermsPage = lazy(() => import('./terms/page'));
const CookiesPage = lazy(() => import('./cookies/page'));

// Lazy load pages for better performance
const HomePage = lazy(() => import("./page"));
const AboutPage = lazy(() => import("./about/page"));
const ContactPage = lazy(() => import("./contact/page"));
const ServicesPage = lazy(() => import("./services/page"));
const PricingPage = lazy(() => import("./pricing/page"));
const CaseStudiesPage = lazy(() => import("./case-studies/page"));
const BlogPage = lazy(() => import("./blog/page"));
const TeamPage = lazy(() => import("./team/page"));
const CareersPage = lazy(() => import("./careers/page"));
const PrivacyPage = lazy(() => import("./privacy/page"));
const TermsPage = lazy(() => import("./terms/page"));
const CookiesPage = lazy(() => import("./cookies/page"));
const DemoPage = lazy(() => import("./demo/page"));
const SupportPage = lazy(() => import("./support/page"));
const ConsultationPage = lazy(() => import("./consultation/page"));
const NewsPage = lazy(() => import("./news/page"));
const PressPage = lazy(() => import("./press/page"));
const PartnersPage = lazy(() => import("./partners/page"));
const DocsPage = lazy(() => import("./docs/page"));
const ApiPage = lazy(() => import("./api/page"));
const TutorialsPage = lazy(() => import("./tutorials/page"));
const WebinarsPage = lazy(() => import("./webinars/page"));
const WhitepapersPage = lazy(() => import("./whitepapers/page"));
const AccessibilityPage = lazy(() => import("./accessibility/page"));
const SecurityPage = lazy(() => import("./security/page"));
const SitemapPage = lazy(() => import("./sitemap/page"));

// AI Services Pages
const AIServicesPage = lazy(() => import("./ai-services/page"));
const AIAnalyticsDashboardProPage = lazy(() => import("./ai-analytics-dashboard-pro/page"));
const AICybersecuritySuiteProPage = lazy(() => import("./ai-cybersecurity-suite-pro/page"));
const AIContentGenerationProPage = lazy(() => import("./ai-content-generation-pro/page"));
const AICustomerSupportChatbotPage = lazy(() => import("./ai-customer-support-chatbot/page"));
const AICodeAssistantProPage = lazy(() => import("./ai-code-assistant-pro/page"));
const AIBusinessIntelligenceProPage = lazy(() => import("./ai-business-intelligence-pro/page"));
const AIAutomationPlatformPage = lazy(() => import("./ai-automation-platform/page"));
const AIDataAnalyticsProPage = lazy(() => import("./ai-data-analytics-pro/page"));
const AIMarketingAutomationPage = lazy(() => import("./ai-marketing-automation/page"));
const AIHRRecruitmentProPage = lazy(() => import("./ai-hr-recruitment-pro/page"));
const AIFinancialAnalysisPage = lazy(() => import("./ai-financial-analysis/page"));
const AISupplyChainOptimizerPage = lazy(() => import("./ai-supply-chain-optimizer/page"));
const AIVoiceAssistantProPage = lazy(() => import("./ai-voice-assistant-pro/page"));
const AIImageRecognitionProPage = lazy(() => import("./ai-image-recognition-pro/page"));
const AIPredictiveMaintenancePage = lazy(() => import("./ai-predictive-maintenance/page"));
const AISentimentAnalysisProPage = lazy(() => import("./ai-sentiment-analysis-pro/page"));
const AIRecommendationEnginePage = lazy(() => import("./ai-recommendation-engine/page"));
const AIFraudDetectionProPage = lazy(() => import("./ai-fraud-detection-pro/page"));
const AILanguageTranslationPage = lazy(() => import("./ai-language-translation/page"));
const AIChatbotEnterprisePage = lazy(() => import("./ai-chatbot-enterprise/page"));
const AIDataMiningProPage = lazy(() => import("./ai-data-mining-pro/page"));
const AIVideoAnalysisPage = lazy(() => import("./ai-video-analysis/page"));
const AITimeSeriesForecastingPage = lazy(() => import("./ai-time-series-forecasting/page"));
const AINLPTextAnalysisPage = lazy(() => import("./ai-nlp-text-analysis/page"));

// IT Services Pages
const CloudInfrastructurePage = lazy(() => import("./cloud-infrastructure/page"));
const BlockchainDevelopmentPage = lazy(() => import("./blockchain-development/page"));
const IoTSolutionsPage = lazy(() => import("./iot-solutions/page"));
const ARVRDevelopmentPage = lazy(() => import("./ar-vr-development/page"));
const DevOpsSolutionsPage = lazy(() => import("./devops-solutions/page"));
const MobileDevelopmentPage = lazy(() => import("./mobile-development/page"));
const WebDevelopmentPage = lazy(() => import("./web-development/page"));
const ITSupportPage = lazy(() => import("./it-support/page"));
const NetworkInfrastructurePage = lazy(() => import("./network-infrastructure/page"));
const ITConsultingPage = lazy(() => import("./it-consulting/page"));
const CybersecurityAuditPage = lazy(() => import("./cybersecurity-audit/page"));
const DataCenterServicesPage = lazy(() => import("./data-center-services/page"));
const AssetManagementPage = lazy(() => import("./asset-management/page"));

// Micro SAAS Pages
const MicroSAASPage = lazy(() => import("./micro-saas/page"));
const ZionAnalyticsProPage = lazy(() => import("./zion-analytics-pro/page"));
const ZionSecurityShieldPage = lazy(() => import("./zion-security-shield/page"));
const ZionCloudVaultPage = lazy(() => import("./zion-cloud-vault/page"));
const ZionAIInventoryManagerPage = lazy(() => import("./zion-ai-inventory-manager/page"));
const ZionHRAssistantProPage = lazy(() => import("./zion-hr-assistant-pro/page"));
const ZionAIAccountingSuitePage = lazy(() => import("./zion-ai-accounting-suite/page"));
const ZionEcommerceOptimizerPage = lazy(() => import("./zion-ecommerce-optimizer/page"));
const ZionAICustomerInsightsPage = lazy(() => import("./zion-ai-customer-insights/page"));
const ZionAILeadScoringPage = lazy(() => import("./zion-ai-lead-scoring/page"));
const ZionAIDocumentProcessorPage = lazy(() => import("./zion-ai-document-processor/page"));
const ZionAISocialListenerPage = lazy(() => import("./zion-ai-social-listener/page"));
const ZionAIEmailOptimizerPage = lazy(() => import("./zion-ai-email-optimizer/page"));
const ZionAIMeetingAssistantPage = lazy(() => import("./zion-ai-meeting-assistant/page"));
const ZionAIExpenseTrackerPage = lazy(() => import("./zion-ai-expense-tracker/page"));
const ZionAISurveyBuilderPage = lazy(() => import("./zion-ai-survey-builder/page"));
const ZionAIChatbotBuilderPage = lazy(() => import("./zion-ai-chatbot-builder/page"));
const ZionAIWorkflowAutomationPage = lazy(() => import("./zion-ai-workflow-automation/page"));
const ZionAISEOOptimizerPage = lazy(() => import("./zion-ai-seo-optimizer/page"));
const ZionAIDataWarehousePage = lazy(() => import("./zion-ai-data-warehouse/page"));
const ZionAIMobileAppBuilderPage = lazy(() => import("./zion-ai-mobile-app-builder/page"));
const ZionAIAPIManagerPage = lazy(() => import("./zion-ai-api-manager/page"));
const ZionAIBackupManagerPage = lazy(() => import("./zion-ai-backup-manager/page"));
const ZionAITestingAutomationPage = lazy(() => import("./zion-ai-testing-automation/page"));

// Additional AI Services;
const AiAnalyticsPage = lazy(() => import('./ai-analytics/page'));
const AiChatbotBuilderPage = lazy(() => import('./ai-chatbot-builder/page'));
const AiCrmPage = lazy(() => import('./ai-crm/page'));
const AiComputerVisionPage = lazy(() => import('./ai-computer-vision/page'));
const AiDocumentProcessingPage = lazy(() => import('./ai-document-processing/page'));
const AiPredictiveAnalyticsPage = lazy(() => import('./ai-predictive-analytics/page'));
const AiEdgeComputingPage = lazy(() => import('./ai-edge-computing/page'));
const AiVoiceAssistantPage = lazy(() => import('./ai-voice-assistant/page'));
const AiRecommendationEnginePage = lazy(() => import('./ai-recommendation-engine/page'));
const AiHrPage = lazy(() => import('./ai-hr/page'));
const AiEcommerceSolutionsPage = lazy(() => import('./ai-ecommerce-solutions/page'));
const AiFinancialServicesPage = lazy(() => import('./ai-financial-services/page'));
const AiVoiceSolutionsPage = lazy(() => import('./ai-voice-solutions/page'));
const AiHrSolutionsPage = lazy(() => import('./ai-hr-solutions/page'));

// IT Services;
const ItServicesPage = lazy(() => import('./it-services/page'));
const ItInfrastructurePage = lazy(() => import('./it-infrastructure/page'));
const ItSupportPage = lazy(() => import('./it-support/page'));
const CloudInfrastructurePage = lazy(() => import('./cloud-infrastructure/page'));
const CybersecurityPage = lazy(() => import('./cybersecurity/page'));

// Additional IT Services;
const ApiDevelopmentPage = lazy(() => import('./api/page'));
const DatabaseManagementPage = lazy(() => import('./database-management/page'));
const MobileDevelopmentPage = lazy(() => import('./mobile-development/page'));
const WebDevelopmentPage = lazy(() => import('./web-development/page'));
const DevOpsCicdPage = lazy(() => import('./devops-cicd/page'));
const DataAnalyticsPage = lazy(() => import('./data-analytics/page'));
const CustomSoftwarePage = lazy(() => import('./custom-development/page'));
const NetworkInfrastructurePage = lazy(() => import('./network-infrastructure/page'));
const ItAssetManagementPage = lazy(() => import('./it-asset-management/page'));
const PerformanceOptimizationPage = lazy(() => import('./performance-optimization/page'));
const ApiDevelopmentPage2 = lazy(() => import('./api-development/page'));
const CybersecuritySolutionsPage = lazy(() => import('./cybersecurity-solutions/page'));
const DataAnalyticsBiPage = lazy(() => import('./data-analytics-bi/page'));
const CustomSoftwarePage2 = lazy(() => import('./custom-software/page'));

// Emerging Technologies;
const BlockchainPage = lazy(() => import('./blockchain/page'));
const QuantumComputingPage = lazy(() => import('./quantum-computing/page'));
const IoTEdgeComputingPage = lazy(() => import('./iot-edge-computing/page'));
const ARVRSolutionsPage = lazy(() => import('./ar-vr-solutions/page'));
const AutonomousSystemsPage = lazy(() => import('./autonomous-systems/page'));

// Additional Emerging Technologies;
const FiveGImplementationPage = lazy(() => import('./5g-implementation/page'));
const Ai3DGenerationPage = lazy(() => import('./ai-3d-generation/page'));
const AiHolographicWorkspacePage = lazy(() => import('./ai-holographic-workspace/page'));
const AiBlockchainSolutionsPage = lazy(() => import('./ai-blockchain-solutions/page'));
const MachineLearningPage = lazy(() => import('./machine-learning/page'));
const IotPage = lazy(() => import('./iot/page'));
// Micro SaaS;
const MicroSaasPage = lazy(() => import('./micro-saas/page'));

// Support Pages;
const DocsPage = lazy(() => import('./docs/page'));
const ApiDocsPage = lazy(() => import('./api-docs/page'));
const SupportPage = lazy(() => import('./support/page'));
const StatusPage = lazy(() => import('./status/page'));
const ConsultationPage = lazy(() => import('./consultation/page'));

// Additional Important Pages;
const FaqPage = lazy(() => import('./faq/page'));
const DemoPage = lazy(() => import('./demo/page'));
const PartnersPage = lazy(() => import('./partners/page'));
const CommunityPage = lazy(() => import('./community/page'));
const TutorialsPage = lazy(() => import('./tutorials/page'));
const CompliancePage = lazy(() => import('./compliance/page'));
const BusinessIntelligencePage = lazy(() => import('./business-intelligence/page'));
const EnterprisePage = lazy(() => import('./enterprise/page'));
const DigitalTransformationPage = lazy(() => import('./digital-transformation/page'));
const EdgeComputingPage = lazy(() => import('./edge-computing/page'));
// Loading component;
const AppLoadingSpinner = () => (
  <LoadingSpinner />
);

// Main App Component
function App() {
  return (
  );
}






                {/* Micro SaaS */}
                <Route path="/micro-saas" element={<MicroSaasPage />} />

