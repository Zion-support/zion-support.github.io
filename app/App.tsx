<<<<<<< HEAD
'use client'
import React from 'react'
import { useRouter    } from 'next/navigation'
;
import, React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from from 'react-router-dom'
import { HelmetProvider } from from 'react-helmet-async'
import ErrorBoundary from './components/ErrorBoundary'
import PerformanceMonitor from './components/PerformanceMonitor'
import AccessibilityEnhancer from './components/AccessibilityEnhancer'
import LoadingSpinner from './components/LoadingSpinner'
;
// Lazy load pages for better performance;
;
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
;
// AI Services;
;
const AIServicesPage = lazy(() => import('./ai-services/page'));
const AIMarketingPage = lazy(() => import('./ai-marketing/page'));
const AIAutomationPage = lazy(() => import('./ai-automation/page'));
const AIHealthcarePage = lazy(() => import('./ai-healthcare/page'));
const AIFintechPage = lazy(() => import('./ai-fintech/page'));
const AIContentGenerationPage = lazy(() => import('./ai-content-generation/page'));
const AIDataAnalyticsPage = lazy(() => import('./ai-data-analytics/page'));
const AICybersecurityPage = lazy(() => import('./ai-cybersecurity/page'));
const AICRMPage = lazy(() => import('./ai-crm/page'));
const AIVoiceSolutionsPage = lazy(() => import('./ai-voice-solutions/page'));
const AIEcommerceSolutionsPage = lazy(() => import('./ai-ecommerce-solutions/page'));
const AIHRSolutionsPage = lazy(() => import('./ai-hr-solutions/page'));
const AIWorkflowAutomationPage = lazy(() => import('./ai-workflow-automation/page'));
const AIDocumentProcessingPage = lazy(() => import('./ai-document-processing/page'));
const AIPredictiveAnalyticsPage = lazy(() => import('./ai-predictive-analytics/page'));
const AIEdgeComputingPage = lazy(() => import('./ai-edge-computing/page'));
const AIVideoAnalysisPage = lazy(() => import('./ai-video-analysis/page'));
const AISpeechSynthesisPage = lazy(() => import('./ai-speech-synthesis/page'));
const AIRecommendationEnginePage = lazy(() => import('./ai-recommendation-engine/page'));
const AISentimentAnalysisPage = lazy(() => import('./ai-sentiment-analysis/page'));
const AIChatbotEnterprisePage = lazy(() => import('./ai-chatbot-enterprise/page'));
const AIContentModerationPage = lazy(() => import('./ai-content-moderation/page'));
const AIPredictiveModelingPage = lazy(() => import('./ai-predictive-modeling/page'));
const AIDocumentIntelligencePage = lazy(() => import('./ai-document-intelligence/page'));
const AIConversationAnalyticsPage = lazy(() => import('./ai-conversation-analytics/page'));
const AISupplyChainAIPage = lazy(() => import('./ai-supply-chain-ai/page'));
const AIHealthcareDiagnosticsPage = lazy(() => import('./ai-healthcare-diagnostics/page'));
const AIFinancialForecastingPage = lazy(() => import('./ai-financial-forecasting/page'));
const AIIoTAnalyticsPage = lazy(() => import('./ai-iot-analytics/page'));
const AIConversationalAIPage = lazy(() => import('./ai-conversational-ai/page'));
const AIAutomatedTestingPage = lazy(() => import('./ai-automated-testing/page'));
const AIKnowledgeManagementPage = lazy(() => import('./ai-knowledge-management/page'));
const AICustomerChurnPage = lazy(() => import('./ai-customer-churn/page'));
const AIAutomatedReportingPage = lazy(() => import('./ai-automated-reporting/page'));
const AIVoiceAssistantPage = lazy(() => import('./ai-voice-assistant/page'));
const AIContentGenerationProPage = lazy(() => import('./ai-content-generation-pro/page'));
const AIAccountingAssistantPage = lazy(() => import('./ai-accounting-assistant/page'));
const AICybersecurityMonitorProPage = lazy(() => import('./ai-cybersecurity-monitor-pro/page'));
;
// IT Services;
;
const CloudInfrastructurePage = lazy(() => import('./cloud-infrastructure/page'));
const CybersecuritySolutionsPage = lazy(() => import('./cybersecurity-solutions/page'));
const WebDevelopmentPage = lazy(() => import('./web-development/page'));
const MobileDevelopmentPage = lazy(() => import('./mobile-development/page'));
const APIDevelopmentPage = lazy(() => import('./api-development/page'));
const DatabaseManagementPage = lazy(() => import('./database-management/page'));
const DevOpsCICDPage = lazy(() => import('./devops-cicd/page'));
const ITSupportPage = lazy(() => import('./it-support/page'));
const DataAnalyticsBIPage = lazy(() => import('./data-analytics-bi/page'));
const CustomSoftwarePage = lazy(() => import('./custom-software/page'));
const NetworkInfrastructurePage = lazy(() => import('./network-infrastructure/page'));
const ITAssetManagementPage = lazy(() => import('./it-asset-management/page'));
const ITSecurityServicesPage = lazy(() => import('./it-security-services/page'));
const ITProjectManagementPage = lazy(() => import('./it-project-management/page'));
const CloudNativeDevelopmentPage = lazy(() => import('./cloud-native-development/page'));
const AIIntegrationServicesPage = lazy(() => import('./ai-integration-services/page'));
const BlockchainDevelopmentPage = lazy(() => import('./blockchain-development/page'));
const IoTDevelopmentPage = lazy(() => import('./iot-development/page'));
const ECommerceDevelopmentPage = lazy(() => import('./e-commerce-development/page'));
const APIDevelopmentAdvancedPage = lazy(() => import('./api-development-advanced/page'));
const DataEngineeringPage = lazy(() => import('./data-engineering/page'));
const CybersecurityAdvancedPage = lazy(() => import('./cybersecurity-advanced/page'));
const CloudMigrationAdvancedPage = lazy(() => import('./cloud-migration-advanced/page'));
const DevOpsAdvancedPage = lazy(() => import('./devops-advanced/page'));
const MachineLearningOpsPage = lazy(() => import('./machine-learning-ops/page'));
const EnterpriseIntegrationPage = lazy(() => import('./enterprise-integration/page'));
const PerformanceOptimizationPage = lazy(() => import('./performance-optimization/page'));
const DisasterRecoveryAdvancedPage = lazy(() => import('./disaster-recovery-advanced/page'));
const ComplianceAutomationPage = lazy(() => import('./compliance-automation/page'));
const CloudCostOptimizationPage = lazy(() => import('./cloud-cost-optimization/page'));
const SecurityAutomationPage = lazy(() => import('./security-automation/page'));
const DataVisualizationPage = lazy(() => import('./data-visualization/page'));
const WorkflowAutomationPage = lazy(() => import('./workflow-automation/page'));
const CloudNativeSecurityPage = lazy(() => import('./cloud-native-security/page'));
;
// Micro SAAS Pages;
;
const ZionAnalyticsProPage = lazy(() => import('./zion-analytics-pro/page'));
const ZionChatAIPage = lazy(() => import('./zion-chat-ai/page'));
const ZionSecurityShieldPage = lazy(() => import('./zion-security-shield/page'));
const ZionCloudVaultPage = lazy(() => import('./zion-cloud-vault/page'));
const ZionContentStudioPage = lazy(() => import('./zion-content-studio/page'));
const ZionCRMIntelligencePage = lazy(() => import('./zion-crm-intelligence/page'));
const ZionDataSyncPage = lazy(() => import('./zion-data-sync/page'));
const ZionLeadMagnetPage = lazy(() => import('./zion-lead-magnet/page'));
const ZionProjectMasterPage = lazy(() => import('./zion-project-master/page'));
const ZionEmailAutomationPage = lazy(() => import('./zion-email-automation/page'));
const ZionSocialSchedulerPage = lazy(() => import('./zion-social-scheduler/page'));
const ZionWorkflowAutomationPage = lazy(() => import('./zion-workflow-automation/page'));
const ZionAIContentModerationPage = lazy(() => import('./zion-ai-content-moderation/page'));
const ZionAIPredictiveMaintenancePage = lazy(() => import('./zion-ai-predictive-maintenance/page'));
const ZionAIFraudDetectorPage = lazy(() => import('./zion-ai-fraud-detector/page'));
const ZionAISupplyChainOptimizerPage = lazy(() => import('./zion-ai-supply-chain-optimizer/page'));
const ZionAIDocumentAIPage = lazy(() => import('./zion-ai-document-ai/page'));
const ZionAICustomerServiceProPage = lazy(() => import('./zion-ai-customer-service-pro/page'));
const ZionAIContractAnalyzerPage = lazy(() => import('./zion-ai-contract-analyzer/page'));
const ZionAITranslatorProPage = lazy(() => import('./zion-ai-translator-pro/page'));
const ZionInvoiceGeniusPage = lazy(() => import('./zion-invoice-genius/page'));
const ZionInventorySmartPage = lazy(() => import('./zion-inventory-smart/page'));
const ZionComplianceManagerPage = lazy(() => import('./zion-compliance-manager/page'));
const ZionPerformanceMonitorPage = lazy(() => import('./zion-performance-monitor/page'));
const ZionAICodeReviewerPage = lazy(() => import('./zion-ai-code-reviewer/page'));
const ZionAISurveyBuilderPage = lazy(() => import('./zion-ai-survey-builder/page'));
const ZionAIMarketingAutomationPage = lazy(() => import('./zion-ai-marketing-automation/page'));
const ZionAIAccountingAssistantPage = lazy(() => import('./zion-ai-accounting-assistant/page'));
const ZionAISEOOptimizerPage = lazy(() => import('./zion-ai-seo-optimizer/page'));
const ZionAIDataCleanerPage = lazy(() => import('./zion-ai-data-cleaner/page'));
const ZionCustomerInsightsPage = lazy(() => import('./zion-customer-insights/page'));
;
// 5G Solutions Pages;
;
const FiveGDataAnalyticsPage = lazy(() => import('./5g-data-analytics/page'));
const FiveGEdgeComputingPage = lazy(() => import('./5g-edge-computing/page'));
const FiveGImplementationPage = lazy(() => import('./5g-implementation/page'));
const FiveGIoTSolutionsPage = lazy(() => import('./5g-iot-solutions/page'));
const FiveGMobileApplicationsPage = lazy(() => import('./5g-mobile-applications/page'));
const FiveGNetworkInfrastructurePage = lazy(() => import('./5g-network-infrastructure/page'));
const FiveGPrivateNetworksPage = lazy(() => import('./5g-private-networks/page'));
const FiveGSmartCitySolutionsPage = lazy(() => import('./5g-smart-city-solutions/page'));
const FiveGSolutionsPage = lazy(() => import('./5g-solutions/page'));
;
// Test Page - removed as it doesn't exist;
// Main App Component;
;
function App() {
  return(<HelmetProvider>;
      <ErrorBoundary>;
        <BrowserRouter>;
          <Suspense fallback = {<LoadingSpinner  />;
}>;
            <Routes>;
              {/* Main Pages */}
              <Route path = "/" element={<HomePage />} />;"
              {/* AI Services */}"
              <Route path = "/ai-services" element={<AIServicesPage />} />"
              <Route path = "/ai-marketing" element={<AIMarketingPage />} />"
              <Route path = "/ai-automation" element={<AIAutomationPage />} />"
              <Route path = "/ai-healthcare" element={<AIHealthcarePage />} />"
              <Route path = "/ai-fintech" element={<AIFintechPage />} />"
              <Route path = "/ai-content-generation" element={<AIContentGenerationPage />} />"
              <Route path = "/ai-data-analytics" element={<AIDataAnalyticsPage />} />"
              <Route path = "/ai-cybersecurity" element={<AICybersecurityPage />} />"
              <Route path = "/ai-crm" element={<AICRMPage />} />"
              <Route path = "/ai-voice-solutions" element={<AIVoiceSolutionsPage />} />"
              <Route path = "/ai-ecommerce-solutions" element={<AIEcommerceSolutionsPage />} />"
              <Route path = "/ai-hr-solutions" element={<AIHRSolutionsPage />} />"
              <Route path = "/ai-workflow-automation" element={<AIWorkflowAutomationPage />} />"
              <Route path = "/ai-document-processing" element={<AIDocumentProcessingPage />} />"
              <Route path = "/ai-predictive-analytics" element={<AIPredictiveAnalyticsPage />} />"
              <Route path = "/ai-edge-computing" element={<AIEdgeComputingPage />} />"
              <Route path = "/ai-video-analysis" element={<AIVideoAnalysisPage />} />"
              <Route path = "/ai-speech-synthesis" element={<AISpeechSynthesisPage />} />"
              <Route path = "/ai-recommendation-engine" element={<AIRecommendationEnginePage />} />"
              <Route path = "/ai-sentiment-analysis" element={<AISentimentAnalysisPage />} />"
              <Route path = "/ai-chatbot-enterprise" element={<AIChatbotEnterprisePage />} />"
              <Route path = "/ai-content-moderation" element={<AIContentModerationPage />} />"
              <Route path = "/ai-predictive-modeling" element={<AIPredictiveModelingPage />} />"
              <Route path = "/ai-document-intelligence" element={<AIDocumentIntelligencePage />} />"
              <Route path = "/ai-conversation-analytics" element={<AIConversationAnalyticsPage />} />"
              <Route path = "/ai-supply-chain-ai" element={<AISupplyChainAIPage />} />"
              <Route path = "/ai-healthcare-diagnostics" element={<AIHealthcareDiagnosticsPage />} />"
              <Route path = "/ai-financial-forecasting" element={<AIFinancialForecastingPage />} />"
              <Route path = "/ai-iot-analytics" element={<AIIoTAnalyticsPage />} />"
              <Route path = "/ai-conversational-ai" element={<AIConversationalAIPage />} />"
              <Route path = "/ai-automated-testing" element={<AIAutomatedTestingPage />} />"
              <Route path = "/ai-knowledge-management" element={<AIKnowledgeManagementPage />} />"
              <Route path = "/ai-customer-churn" element={<AICustomerChurnPage />} />"
              <Route path = "/ai-automated-reporting" element={<AIAutomatedReportingPage />} />"
              <Route path = "/ai-voice-assistant" element={<AIVoiceAssistantPage />} />"
              <Route path = "/ai-content-generation-pro" element={<AIContentGenerationProPage />} />"
              <Route path = "/ai-accounting-assistant" element={<AIAccountingAssistantPage />} />"
              <Route path = "/ai-cybersecurity-monitor-pro" element={<AICybersecurityMonitorProPage />} />;"
              {/* IT Services */}"
              <Route path = "/cloud-infrastructure" element={<CloudInfrastructurePage />} />"
              <Route path = "/cybersecurity-solutions" element={<CybersecuritySolutionsPage />} />"
              <Route path = "/web-development" element={<WebDevelopmentPage />} />"
              <Route path = "/mobile-development" element={<MobileDevelopmentPage />} />"
              <Route path = "/api-development" element={<APIDevelopmentPage />} />"
              <Route path = "/database-management" element={<DatabaseManagementPage />} />"
              <Route path = "/devops-cicd" element={<DevOpsCICDPage />} />"
              <Route path = "/it-support" element={<ITSupportPage />} />"
              <Route path = "/data-analytics-bi" element={<DataAnalyticsBIPage />} />"
              <Route path = "/custom-software" element={<CustomSoftwarePage />} />"
              <Route path = "/network-infrastructure" element={<NetworkInfrastructurePage />} />"
              <Route path = "/it-asset-management" element={<ITAssetManagementPage />} />"
              <Route path = "/it-security-services" element={<ITSecurityServicesPage />} />"
              <Route path = "/it-project-management" element={<ITProjectManagementPage />} />"
              <Route path = "/cloud-native-development" element={<CloudNativeDevelopmentPage />} />"
              <Route path = "/ai-integration-services" element={<AIIntegrationServicesPage />} />"
              <Route path = "/blockchain-development" element={<BlockchainDevelopmentPage />} />"
              <Route path = "/iot-development" element={<IoTDevelopmentPage />} />"
              <Route path = "/e-commerce-development" element={<ECommerceDevelopmentPage />} />"
              <Route path = "/api-development-advanced" element={<APIDevelopmentAdvancedPage />} />"
              <Route path = "/data-engineering" element={<DataEngineeringPage />} />"
              <Route path = "/cybersecurity-advanced" element={<CybersecurityAdvancedPage />} />"
              <Route path = "/cloud-migration-advanced" element={<CloudMigrationAdvancedPage />} />"
              <Route path = "/devops-advanced" element={<DevOpsAdvancedPage />} />"
              <Route path = "/machine-learning-ops" element={<MachineLearningOpsPage />} />"
              <Route path = "/enterprise-integration" element={<EnterpriseIntegrationPage />} />"
              <Route path = "/performance-optimization" element={<PerformanceOptimizationPage />} />"
              <Route path = "/disaster-recovery-advanced" element={<DisasterRecoveryAdvancedPage />} />"
              <Route path = "/compliance-automation" element={<ComplianceAutomationPage />} />"
              <Route path = "/cloud-cost-optimization" element={<CloudCostOptimizationPage />} />"
              <Route path = "/security-automation" element={<SecurityAutomationPage />} />"
              <Route path = "/data-visualization" element={<DataVisualizationPage />} />"
              <Route path = "/workflow-automation" element={<WorkflowAutomationPage />} />"
              <Route path = "/cloud-native-security" element={<CloudNativeSecurityPage />} />;"
              {/* Micro SAAS Pages */}"
              <Route path = "/zion-analytics-pro" element={<ZionAnalyticsProPage />} />"
              <Route path = "/zion-chat-ai" element={<ZionChatAIPage />} />"
              <Route path = "/zion-security-shield" element={<ZionSecurityShieldPage />} />"
              <Route path = "/zion-cloud-vault" element={<ZionCloudVaultPage />} />"
              <Route path = "/zion-content-studio" element={<ZionContentStudioPage />} />"
              <Route path = "/zion-crm-intelligence" element={<ZionCRMIntelligencePage />} />"
              <Route path = "/zion-data-sync" element={<ZionDataSyncPage />} />"
              <Route path = "/zion-lead-magnet" element={<ZionLeadMagnetPage />} />"
              <Route path = "/zion-project-master" element={<ZionProjectMasterPage />} />"
              <Route path = "/zion-email-automation" element={<ZionEmailAutomationPage />} />"
              <Route path = "/zion-social-scheduler" element={<ZionSocialSchedulerPage />} />"
              <Route path = "/zion-workflow-automation" element={<ZionWorkflowAutomationPage />} />"
              <Route path = "/zion-ai-content-moderation" element={<ZionAIContentModerationPage />} />"
              <Route path = "/zion-ai-predictive-maintenance" element={<ZionAIPredictiveMaintenancePage />} />"
              <Route path = "/zion-ai-fraud-detector" element={<ZionAIFraudDetectorPage />} />"
              <Route path = "/zion-ai-supply-chain-optimizer" element={<ZionAISupplyChainOptimizerPage />} />"
              <Route path = "/zion-ai-document-ai" element={<ZionAIDocumentAIPage />} />"
              <Route path = "/zion-ai-customer-service-pro" element={<ZionAICustomerServiceProPage />} />"
              <Route path = "/zion-ai-contract-analyzer" element={<ZionAIContractAnalyzerPage />} />"
              <Route path = "/zion-ai-translator-pro" element={<ZionAITranslatorProPage />} />"
              <Route path = "/zion-invoice-genius" element={<ZionInvoiceGeniusPage />} />"
              <Route path = "/zion-inventory-smart" element={<ZionInventorySmartPage />} />"
              <Route path = "/zion-compliance-manager" element={<ZionComplianceManagerPage />} />"
              <Route path = "/zion-performance-monitor" element={<ZionPerformanceMonitorPage />} />"
              <Route path = "/zion-ai-code-reviewer" element={<ZionAICodeReviewerPage />} />"
              <Route path = "/zion-ai-survey-builder" element={<ZionAISurveyBuilderPage />} />"
              <Route path = "/zion-ai-marketing-automation" element={<ZionAIMarketingAutomationPage />} />"
              <Route path = "/zion-ai-accounting-assistant" element={<ZionAIAccountingAssistantPage />} />"
              <Route path = "/zion-ai-seo-optimizer" element={<ZionAISEOOptimizerPage />} />"
              <Route path = "/zion-ai-data-cleaner" element={<ZionAIDataCleanerPage />} />"
              <Route path = "/zion-customer-insights" element={<ZionCustomerInsightsPage />} />;"
              {/* 5G Solutions Pages */}"
              <Route path = "/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />"
              <Route path = "/5g-edge-computing" element={<FiveGEdgeComputingPage />} />"
              <Route path = "/5g-implementation" element={<FiveGImplementationPage />} />"
              <Route path = "/5g-iot-solutions" element={<FiveGIoTSolutionsPage />} />"
              <Route path = "/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />"
              <Route path = "/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />"
              <Route path = "/5g-private-networks" element={<FiveGPrivateNetworksPage />} />"
              <Route path = "/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />"
              <Route path = "/5g-solutions" element={<FiveGSolutionsPage />} />;
            </Routes>;
          </Suspense>;
        </BrowserRouter>;
      </>);
    </HelmetProvider>);"
  )}";'"
=======
app/App.tsx'app/App.app/App.tsx;
app/App.tsx'app/App.tsx;

import React from app/App.tsx'app/App.tsx;
import { useRouter   } from app/App.tsx'app/App.tsx;
import, React, { Suspense, lazy } from app/App.tsx'app/App.app/App.tsx;
import { BrowserRouter, Routes, Route  } from app/App.tsx'app/App.tsx;
import { HelmetProvider  } from app/App.tsx'app/App.tsx;
import { { ErrorBoundary  } from app/App.tsx'app/App.tsx;
import PerformanceMonitor  } from app/App.tsx'app/App.tsx;
import AccessibilityEnhancer  } from app/App.tsx'app/App.app/App.tsx;
import LoadingSpinner } from app/App.tsx'app/App.app/App.tsx;
// Lazy load pages for better app/App.tsx;
const HomePage = lazy(() => import(app/App.tsx'app/App.tsx))
const AboutPage = lazy(() => import(app/App.tsx'app/App.tsx))
const ContactPage = lazy(() => import(app/App.tsx'app/App.tsx))
const ServicesPage = lazy(() => import(app/App.tsx'app/App.tsx))
const PricingPage = lazy(() => import(app/App.tsx'app/App.tsx))
const CaseStudiesPage = lazy(() => import(app/App.tsx'app/App.tsx))
const BlogPage = lazy(() => import(app/App.tsx'app/App.tsx))
const TeamPage = lazy(() => import(app/App.tsx'app/App.tsx))
const CareersPage = lazy(() => import(app/App.tsx'app/App.tsx))
const PrivacyPage = lazy(() => import(app/App.tsx'app/App.tsx))
const TermsPage = lazy(() => import(app/App.tsx'app/App.tsx))
const CookiesPage = lazy(() => import(app/App.tsx'app/App.tsx))
// AI app/App.tsx;
const AIServicesPage = lazy(() => import(app/App.tsx'app/App.tsx))
const AIMarketingPage = lazy(() => import(app/App.tsx'app/App.tsx))
const AIAutomationPage = lazy(() => import(app/App.tsx'app/App.tsx))
const AIHealthcarePage = lazy(() => import(app/App.tsx'app/App.tsx))
const AIFintechPage = lazy(() => import(app/App.tsx'app/App.tsx))
const AIContentGenerationPage = lazy(() => import(app/App.tsx'app/App.tsx))
const AIDataAnalyticsPage = lazy(() => import(app/App.tsx'app/App.tsx))
const AICybersecurityPage = lazy(() => import(app/App.tsx'app/App.tsx))
const AICRMPage = lazy(() => import(app/App.tsx'app/App.tsx))
const AIVoiceSolutionsPage = lazy(() => import(app/App.tsx'app/App.tsx))
const AIEcommerceSolutionsPage = lazy(() => import(app/App.tsx'app/App.tsx))
const AIHRSolutionsPage = lazy(() => import(app/App.tsx'app/App.tsx))
const AIWorkflowAutomationPage = lazy(() => import(app/App.tsx'app/App.tsx))
const AIDocumentProcessingPage = lazy(() => import(app/App.tsx'app/App.tsx))
const AIPredictiveAnalyticsPage = lazy(() => import(app/App.tsx'app/App.tsx))
const AIEdgeComputingPage = lazy(() => import(app/App.tsx'app/App.tsx))
const AIVideoAnalysisPage = lazy(() => import(app/App.tsx'app/App.tsx))
const AISpeechSynthesisPage = lazy(() => import(app/App.tsx'app/App.tsx))
const AIRecommendationEnginePage = lazy(() => import(app/App.tsx'app/App.tsx))
const AISentimentAnalysisPage = lazy(() => import(app/App.tsx'app/App.tsx))
const AIChatbotEnterprisePage = lazy(() => import(app/App.tsx'app/App.tsx))
const AIContentModerationPage = lazy(() => import(app/App.tsx'app/App.tsx))
const AIPredictiveModelingPage = lazy(() => import(app/App.tsx'app/App.tsx))
const AIDocumentIntelligencePage = lazy(() => import(app/App.tsx'app/App.tsx))
const AIConversationAnalyticsPage = lazy(() => import(app/App.tsx'app/App.tsx))
const AISupplyChainAIPage = lazy(() => import(app/App.tsx'app/App.tsx))
const AIHealthcareDiagnosticsPage = lazy(() => import(app/App.tsx'app/App.tsx))
const AIFinancialForecastingPage = lazy(() => import(app/App.tsx'app/App.tsx))
const AIIoTAnalyticsPage = lazy(() => import(app/App.tsx'app/App.tsx))
const AIConversationalAIPage = lazy(() => import(app/App.tsx'app/App.tsx))
const AIAutomatedTestingPage = lazy(() => import(app/App.tsx'app/App.tsx))
const AIKnowledgeManagementPage = lazy(() => import(app/App.tsx'app/App.tsx))
const AICustomerChurnPage = lazy(() => import(app/App.tsx'app/App.tsx))
const AIAutomatedReportingPage = lazy(() => import(app/App.tsx'app/App.tsx))
const AIVoiceAssistantPage = lazy(() => import(app/App.tsx'app/App.tsx))
const AIContentGenerationProPage = lazy(() => import(app/App.tsx'app/App.tsx))
const AIAccountingAssistantPage = lazy(() => import(app/App.tsx'app/App.tsx))
const AICybersecurityMonitorProPage = lazy(() => import(app/App.tsx'app/App.tsx))
// IT app/App.tsx;
const CloudInfrastructurePage = lazy(() => import(app/App.tsx'app/App.tsx))
const CybersecuritySolutionsPage = lazy(() => import(app/App.tsx'app/App.tsx))
const WebDevelopmentPage = lazy(() => import(app/App.tsx'app/App.tsx))
const MobileDevelopmentPage = lazy(() => import(app/App.tsx'app/App.tsx))
const APIDevelopmentPage = lazy(() => import(app/App.tsx'app/App.tsx))
const DatabaseManagementPage = lazy(() => import(app/App.tsx'app/App.tsx))
const DevOpsCICDPage = lazy(() => import(app/App.tsx'app/App.tsx))
const ITSupportPage = lazy(() => import(app/App.tsx'app/App.tsx))
const DataAnalyticsBIPage = lazy(() => import(app/App.tsx'app/App.tsx))
const CustomSoftwarePage = lazy(() => import(app/App.tsx'app/App.tsx))
const NetworkInfrastructurePage = lazy(() => import(app/App.tsx'app/App.tsx))
const ITAssetManagementPage = lazy(() => import(app/App.tsx'app/App.tsx))
const ITSecurityServicesPage = lazy(() => import(app/App.tsx'app/App.tsx))
const ITProjectManagementPage = lazy(() => import(app/App.tsx'app/App.tsx))
const CloudNativeDevelopmentPage = lazy(() => import(app/App.tsx'app/App.tsx))
const AIIntegrationServicesPage = lazy(() => import(app/App.tsx'app/App.tsx))
const BlockchainDevelopmentPage = lazy(() => import(app/App.tsx'app/App.tsx))
const IoTDevelopmentPage = lazy(() => import(app/App.tsx'app/App.tsx))
const ECommerceDevelopmentPage = lazy(() => import(app/App.tsx'app/App.tsx))
const APIDevelopmentAdvancedPage = lazy(() => import(app/App.tsx'app/App.tsx))
const DataEngineeringPage = lazy(() => import(app/App.tsx'app/App.tsx))
const CybersecurityAdvancedPage = lazy(() => import(app/App.tsx'app/App.tsx))
const CloudMigrationAdvancedPage = lazy(() => import(app/App.tsx'app/App.tsx))
const DevOpsAdvancedPage = lazy(() => import(app/App.tsx'app/App.tsx))
const MachineLearningOpsPage = lazy(() => import(app/App.tsx'app/App.tsx))
const EnterpriseIntegrationPage = lazy(() => import(app/App.tsx'app/App.tsx))
const PerformanceOptimizationPage = lazy(() => import(app/App.tsx'app/App.tsx))
const DisasterRecoveryAdvancedPage = lazy(() => import(app/App.tsx'app/App.tsx))
const ComplianceAutomationPage = lazy(() => import(app/App.tsx'app/App.tsx))
const CloudCostOptimizationPage = lazy(() => import(app/App.tsx'app/App.tsx))
const SecurityAutomationPage = lazy(() => import(app/App.tsx'app/App.tsx))
const DataVisualizationPage = lazy(() => import(app/App.tsx'app/App.tsx))
const WorkflowAutomationPage = lazy(() => import(app/App.tsx'app/App.tsx))
const CloudNativeSecurityPage = lazy(() => import(app/App.tsx'app/App.tsx))
// Micro SAAS app/App.tsx;
const ZionAnalyticsProPage = lazy(() => import(app/App.tsx'app/App.tsx))
const ZionChatAIPage = lazy(() => import(app/App.tsx'app/App.tsx))
const ZionSecurityShieldPage = lazy(() => import(app/App.tsx'app/App.tsx))
const ZionCloudVaultPage = lazy(() => import(app/App.tsx'app/App.tsx))
const ZionContentStudioPage = lazy(() => import(app/App.tsx'app/App.tsx))
const ZionCRMIntelligencePage = lazy(() => import(app/App.tsx'app/App.tsx))
const ZionDataSyncPage = lazy(() => import(app/App.tsx'app/App.tsx))
const ZionLeadMagnetPage = lazy(() => import(app/App.tsx'app/App.tsx))
const ZionProjectMasterPage = lazy(() => import(app/App.tsx'app/App.tsx))
const ZionEmailAutomationPage = lazy(() => import(app/App.tsx'app/App.tsx))
const ZionSocialSchedulerPage = lazy(() => import(app/App.tsx'app/App.tsx))
const ZionWorkflowAutomationPage = lazy(() => import(app/App.tsx'app/App.tsx))
const ZionAIContentModerationPage = lazy(() => import(app/App.tsx'app/App.tsx))
const ZionAIPredictiveMaintenancePage = lazy(() => import(app/App.tsx'app/App.tsx))
const ZionAIFraudDetectorPage = lazy(() => import(app/App.tsx'app/App.tsx))
const ZionAISupplyChainOptimizerPage = lazy(() => import(app/App.tsx'app/App.tsx))
const ZionAIDocumentAIPage = lazy(() => import(app/App.tsx'app/App.tsx))
const ZionAICustomerServiceProPage = lazy(() => import(app/App.tsx'app/App.tsx))
const ZionAIContractAnalyzerPage = lazy(() => import(app/App.tsx'app/App.tsx))
const ZionAITranslatorProPage = lazy(() => import(app/App.tsx'app/App.tsx))
const ZionInvoiceGeniusPage = lazy(() => import(app/App.tsx'app/App.tsx))
const ZionInventorySmartPage = lazy(() => import(app/App.tsx'app/App.tsx))
const ZionComplianceManagerPage = lazy(() => import(app/App.tsx'app/App.tsx))
const ZionPerformanceMonitorPage = lazy(() => import(app/App.tsx'app/App.tsx))
const ZionAICodeReviewerPage = lazy(() => import(app/App.tsx'app/App.tsx))
const ZionAISurveyBuilderPage = lazy(() => import(app/App.tsx'app/App.tsx))
const ZionAIMarketingAutomationPage = lazy(() => import(app/App.tsx'app/App.tsx))
const ZionAIAccountingAssistantPage = lazy(() => import(app/App.tsx'app/App.tsx))
const ZionAISEOOptimizerPage = lazy(() => import(app/App.tsx'app/App.tsx))
const ZionAIDataCleanerPage = lazy(() => import(app/App.tsx'app/App.tsx))
const ZionCustomerInsightsPage = lazy(() => import(app/App.tsx'app/App.tsx))
// 5G Solutions app/App.tsx;
const FiveGDataAnalyticsPage = lazy(() => import(app/App.tsx'app/App.tsx))
const FiveGEdgeComputingPage = lazy(() => import(app/App.tsx'app/App.tsx))
const FiveGImplementationPage = lazy(() => import(app/App.tsx'app/App.tsx))
const FiveGIoTSolutionsPage = lazy(() => import(app/App.tsx'app/App.tsx))
const FiveGMobileApplicationsPage = lazy(() => import(app/App.tsx'app/App.tsx))
const FiveGNetworkInfrastructurePage = lazy(() => import(app/App.tsx'app/App.tsx));
const FiveGPrivateNetworksPage = lazy(() => import(app/App.tsx'app/App.tsx));
const FiveGSmartCitySolutionsPage = lazy(() => import(app/App.tsx'app/App.tsx));
const FiveGSolutionsPage = lazy(() => import(app/App.tsx'app/App.tsx))
// Test Page - removed as it doesnapp/App.tsx'app/App.tsx/app/App.tsx"app/App.tsx/ai-servicesapp/App.tsx"app/App.tsx/ai-marketingapp/App.tsx"app/App.tsx/ai-automationapp/App.tsx"app/App.tsx/ai-healthcareapp/App.tsx"app/App.tsx/ai-fintechapp/App.tsx"app/App.tsx/ai-content-generationapp/App.tsx"app/App.tsx/ai-data-analyticsapp/App.tsx"app/App.tsx/ai-cybersecurityapp/App.tsx"app/App.tsx/ai-crmapp/App.tsx"app/App.tsx/ai-voice-solutionsapp/App.tsx"app/App.tsx/ai-ecommerce-solutionsapp/App.tsx"app/App.tsx/ai-hr-solutionsapp/App.tsx"app/App.tsx/ai-workflow-automationapp/App.tsx"app/App.tsx/ai-document-processingapp/App.tsx"app/App.tsx/ai-predictive-analyticsapp/App.tsx"app/App.tsx/ai-edge-computingapp/App.tsx"app/App.tsx/ai-video-analysisapp/App.tsx"app/App.tsx/ai-speech-synthesisapp/App.tsx"app/App.tsx/ai-recommendation-engineapp/App.tsx"app/App.tsx/ai-sentiment-analysisapp/App.tsx"app/App.tsx/ai-chatbot-enterpriseapp/App.tsx"app/App.tsx/ai-content-moderationapp/App.tsx"app/App.tsx/ai-predictive-modelingapp/App.tsx"app/App.tsx/ai-document-intelligenceapp/App.tsx"app/App.tsx/ai-conversation-analyticsapp/App.tsx"app/App.tsx/ai-supply-chain-aiapp/App.tsx"app/App.tsx/ai-healthcare-diagnosticsapp/App.tsx"app/App.tsx/ai-financial-forecastingapp/App.tsx"app/App.tsx/ai-iot-analyticsapp/App.tsx"app/App.tsx/ai-conversational-aiapp/App.tsx"app/App.tsx/ai-automated-testingapp/App.tsx"app/App.tsx/ai-knowledge-managementapp/App.tsx"app/App.tsx/ai-customer-churnapp/App.tsx"app/App.tsx/ai-automated-reportingapp/App.tsx"app/App.tsx/ai-voice-assistantapp/App.tsx"app/App.tsx/ai-content-generation-proapp/App.tsx"app/App.tsx/ai-accounting-assistantapp/App.tsx"app/App.tsx/ai-cybersecurity-monitor-proapp/App.tsx"app/App.tsx/cloud-infrastructureapp/App.tsx"app/App.tsx/cybersecurity-solutionsapp/App.tsx"app/App.tsx/web-developmentapp/App.tsx"app/App.tsx/mobile-developmentapp/App.tsx"app/App.tsx/api-developmentapp/App.tsx"app/App.tsx/database-managementapp/App.tsx"app/App.tsx/devops-cicdapp/App.tsx"app/App.tsx/it-supportapp/App.tsx"app/App.tsx/data-analytics-biapp/App.tsx"app/App.tsx/custom-softwareapp/App.tsx"app/App.tsx/network-infrastructureapp/App.tsx"app/App.tsx/it-asset-managementapp/App.tsx"app/App.tsx/it-security-servicesapp/App.tsx"app/App.tsx/it-project-managementapp/App.tsx"app/App.tsx/cloud-native-developmentapp/App.tsx"app/App.tsx/ai-integration-servicesapp/App.tsx"app/App.tsx/blockchain-developmentapp/App.tsx"app/App.tsx/iot-developmentapp/App.tsx"app/App.tsx/e-commerce-developmentapp/App.tsx"app/App.tsx/api-development-advancedapp/App.tsx"app/App.tsx/data-engineeringapp/App.tsx"app/App.tsx/cybersecurity-advancedapp/App.tsx"app/App.tsx/cloud-migration-advancedapp/App.tsx"app/App.tsx/devops-advancedapp/App.tsx"app/App.tsx/machine-learning-opsapp/App.tsx"app/App.tsx/enterprise-integrationapp/App.tsx"app/App.tsx/performance-optimizationapp/App.tsx"app/App.tsx/disaster-recovery-advancedapp/App.tsx"app/App.tsx/compliance-automationapp/App.tsx"app/App.tsx/cloud-cost-optimizationapp/App.tsx"app/App.tsx/security-automationapp/App.tsx"app/App.tsx/data-visualizationapp/App.tsx"app/App.tsx/workflow-automationapp/App.tsx"app/App.tsx/cloud-native-securityapp/App.tsx"app/App.tsx/zion-analytics-proapp/App.tsx"app/App.tsx/zion-chat-aiapp/App.tsx"app/App.tsx/zion-security-shieldapp/App.tsx"app/App.tsx/zion-cloud-vaultapp/App.tsx"app/App.tsx/zion-content-studioapp/App.tsx"app/App.tsx/zion-crm-intelligenceapp/App.tsx"app/App.tsx/zion-data-syncapp/App.tsx"app/App.tsx/zion-lead-magnetapp/App.tsx"app/App.tsx/zion-project-masterapp/App.tsx"app/App.tsx/zion-email-automationapp/App.tsx"app/App.tsx/zion-social-schedulerapp/App.tsx"app/App.tsx/zion-workflow-automationapp/App.tsx"app/App.tsx/zion-ai-content-moderationapp/App.tsx"app/App.tsx/zion-ai-predictive-maintenanceapp/App.tsx"app/App.tsx/zion-ai-fraud-detectorapp/App.tsx"app/App.tsx/zion-ai-supply-chain-optimizerapp/App.tsx"app/App.tsx/zion-ai-document-aiapp/App.tsx"app/App.tsx/zion-ai-customer-service-proapp/App.tsx"app/App.tsx/zion-ai-contract-analyzerapp/App.tsx"app/App.tsx/zion-ai-translator-proapp/App.tsx"app/App.tsx/zion-invoice-geniusapp/App.tsx"app/App.tsx/zion-inventory-smartapp/App.tsx"app/App.tsx/zion-compliance-managerapp/App.tsx"app/App.tsx/zion-performance-monitorapp/App.tsx"app/App.tsx/zion-ai-code-reviewerapp/App.tsx"app/App.tsx/zion-ai-survey-builderapp/App.tsx"app/App.tsx/zion-ai-marketing-automationapp/App.tsx"app/App.tsx/zion-ai-accounting-assistantapp/App.tsx"app/App.tsx/zion-ai-seo-optimizerapp/App.tsx"app/App.tsx/zion-ai-data-cleanerapp/App.tsx"app/App.tsx/zion-customer-insightsapp/App.tsx"app/App.tsx/5g-data-analyticsapp/App.tsx"app/App.tsx/5g-edge-computingapp/App.tsx"app/App.tsx/5g-implementationapp/App.tsx"app/App.tsx/5g-iot-solutionsapp/App.tsx"app/App.tsx/5g-mobile-applicationsapp/App.tsx"app/App.tsx/5g-network-infrastructureapp/App.tsx"app/App.tsx/5g-private-networksapp/App.tsx"app/App.tsx/5g-smart-city-solutionsapp/App.tsx"app/App.tsx/5g-solutions" element={<FiveGSolutionsPage />,;} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ErrorBoundary>
    </HelmetProvider>;)
  )
}
>>>>>>> e4a686ee3f0c7f64fed385c71883376af9923352
