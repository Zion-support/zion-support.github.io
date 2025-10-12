'use client';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './app/styles/futuristic.css';
import './app/styles/futuristic-enhanced.css';
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import HomePage from './app/page';
import { PageLoader } from './app/components/LoadingStates';
import ErrorBoundary from './app/components/ErrorBoundary';
import SEOHead from './app/components/EnhancedSEOHead';
import Breadcrumb from './app/components/Breadcrumb';
import PerformanceOptimizer from './app/components/EnhancedPerformanceOptimizer';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import EnhancedAccessibility from './app/components/EnhancedAccessibility';
import { usePerformanceMonitor } from './hooks/usePerformanceMonitor';
import { AnalyticsProvider } from './app/components/EnhancedAnalytics';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import FuturisticBackground from './app/components/FuturisticBackground';

// Lazy load pages for better performance
 import('./app/about/page'));
 import('./app/contact/page'));
 import('./app/services/page'));
 import('./app/pricing/page'));
 import('./app/blog/page'));
 import('./app/case-studies/page'));
 import('./app/careers/page'));
 import('./app/ai-services/page'));
 import('./app/it-services/page'));
 import('./app/micro-saas/page'));
 import('./app/tutorials/page'));
 import('./app/consultation/page'));
 import('./app/demo/page'));
 import('./app/support/page'));
 import('./app/privacy/page'));
 import('./app/terms/page'));
 import('./app/cookies/page'));
 import('./app/sitemap/page'));

// AI Service Pages
 import('./app/ai-analytics/page'));
 import('./app/ai-automation/page'));
 import('./app/ai-chatbot-builder/page'));
 import('./app/ai-cybersecurity/page'));
 import('./app/ai-crm/page'));
 import('./app/ai-data-analytics/page'));
 import('./app/ai-healthcare/page'));
 import('./app/ai-financial-services/page'));
 import('./app/ai-computer-vision/page'));
 import('./app/ai-voice-solutions/page'));
 import('./app/ai-ecommerce-solutions/page'));
 import('./app/ai-hr-solutions/page'));
 import('./app/ai-content-generation/page'));
 import('./app/ai-workflow-automation/page'));
 import('./app/ai-document-processing/page'));
 import('./app/ai-predictive-analytics/page'));
 import('./app/ai-edge-computing/page'));
 import('./app/ai-video-analysis/page'));
 import('./app/ai-speech-synthesis/page'));
 import('./app/ai-recommendation-engine/page'));
 import('./app/ai-sentiment-analysis/page'));
 import('./app/ai-chatbot-enterprise/page'));
 import('./app/ai-content-moderation/page'));
 import('./app/ai-predictive-modeling/page'));
 import('./app/ai-document-intelligence/page'));
 import('./app/ai-conversation-analytics/page'));
 import('./app/ai-supply-chain-ai/page'));
 import('./app/ai-healthcare-diagnostics/page'));
 import('./app/ai-financial-forecasting/page'));
 import('./app/ai-iot-analytics/page'));
 import('./app/ai-conversational-ai/page'));
 import('./app/ai-automated-testing/page'));
 import('./app/ai-knowledge-management/page'));
 import('./app/ai-customer-churn/page'));
 import('./app/ai-automated-reporting/page'));
 import('./app/ai-voice-assistant/page'));
 import('./app/ai-content-generation-pro/page'));
 import('./app/ai-accounting-assistant/page'));
 import('./app/ai-cybersecurity-monitor-pro/page'));

// IT Service Pages
 import('./app/cloud-infrastructure/page'));
 import('./app/cybersecurity-solutions/page'));
 import('./app/web-development/page'));
 import('./app/mobile-development/page'));
 import('./app/api-development/page'));
 import('./app/database-management/page'));
 import('./app/devops-cicd/page'));
 import('./app/it-support/page'));
 import('./app/data-analytics-bi/page'));
 import('./app/custom-software/page'));
 import('./app/network-infrastructure/page'));
 import('./app/it-asset-management/page'));
 import('./app/it-security-services/page'));
 import('./app/it-project-management/page'));
 import('./app/cloud-native-development/page'));
 import('./app/ai-integration-services/page'));
 import('./app/blockchain-development/page'));
 import('./app/iot-development/page'));
 import('./app/e-commerce-development/page'));
 import('./app/api-development-advanced/page'));
 import('./app/data-engineering/page'));
 import('./app/cybersecurity-advanced/page'));
 import('./app/cloud-migration-advanced/page'));
 import('./app/devops-advanced/page'));
 import('./app/machine-learning-ops/page'));
 import('./app/enterprise-integration/page'));
 import('./app/performance-optimization/page'));
 import('./app/disaster-recovery-advanced/page'));
 import('./app/compliance-automation/page'));
 import('./app/cloud-cost-optimization/page'));
 import('./app/security-automation/page'));
 import('./app/data-visualization/page'));
 import('./app/workflow-automation/page'));
 import('./app/cloud-native-security/page'));

// Micro SAAS Pages
 import('./app/zion-analytics-pro/page'));
 import('./app/zion-chat-ai/page'));
 import('./app/zion-security-shield/page'));
 import('./app/zion-cloud-vault/page'));
 import('./app/zion-content-studio/page'));
 import('./app/zion-crm-intelligence/page'));
 import('./app/zion-data-sync/page'));
 import('./app/zion-lead-magnet/page'));
 import('./app/zion-project-master/page'));
 import('./app/zion-email-automation/page'));
 import('./app/zion-social-scheduler/page'));
 import('./app/zion-workflow-automation/page'));
 import('./app/zion-ai-content-moderation/page'));
 import('./app/zion-ai-predictive-maintenance/page'));
 import('./app/zion-ai-fraud-detector/page'));
 import('./app/zion-ai-supply-chain-optimizer/page'));
 import('./app/zion-ai-document-ai/page'));
 import('./app/zion-ai-customer-service-pro/page'));
 import('./app/zion-ai-contract-analyzer/page'));
 import('./app/zion-ai-translator-pro/page'));
 import('./app/zion-invoice-genius/page'));
 import('./app/zion-inventory-smart/page'));
 import('./app/zion-compliance-manager/page'));
 import('./app/zion-performance-monitor/page'));
 import('./app/zion-ai-code-reviewer/page'));
 import('./app/zion-ai-survey-builder/page'));
 import('./app/zion-ai-marketing-automation/page'));
 import('./app/zion-ai-accounting-assistant/page'));
 import('./app/zion-ai-seo-optimizer/page'));
 import('./app/zion-ai-data-cleaner/page'));
 import('./app/zion-customer-insights/page'));

// 5G Solutions Pages
 import('./app/5g-data-analytics/page'));
 import('./app/5g-edge-computing/page'));
 import('./app/5g-implementation/page'));
 import('./app/5g-iot-solutions/page'));
 import('./app/5g-mobile-applications/page'));
 import('./app/5g-network-infrastructure/page'));
 import('./app/5g-private-networks/page'));
 import('./app/5g-smart-city-solutions/page'));
 import('./app/5g-solutions/page'));

// Main App Component
function App() {
  const { performanceData } = usePerformanceMonitor();

  return (
            <Suspense fallback={<PageLoader />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/case-studies" element={<CaseStudiesPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/ai-services" element={<AIServicesPage />} />
                <Route path="/it-services" element={<ITServicesPage />} />
                <Route path="/micro-saas" element={<MicroSAASPage />} />
                <Route path="/tutorials" element={<TutorialsPage />} />
                <Route path="/consultation" element={<ConsultationPage />} />
                <Route path="/demo" element={<DemoPage />} />
                <Route path="/support" element={<SupportPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/cookies" element={<CookiesPage />} />
                <Route path="/sitemap" element={<SitemapPage />} />
                
                {/* AI Service Routes */}
                <Route path="/ai-analytics" element={<AIAnalyticsPage />} />
                <Route path="/ai-automation" element={<AIAutomationPage />} />
                <Route path="/ai-chatbot-builder" element={<AIChatbotBuilderPage />} />
                <Route path="/ai-cybersecurity" element={<AICybersecurityPage />} />
                <Route path="/ai-crm" element={<AICRMPage />} />
                <Route path="/ai-data-analytics" element={<AIDataAnalyticsPage />} />
                <Route path="/ai-healthcare" element={<AIHealthcarePage />} />
                <Route path="/ai-financial-services" element={<AIFinancialServicesPage />} />
                <Route path="/ai-computer-vision" element={<AIComputerVisionPage />} />
                <Route path="/ai-voice-solutions" element={<AIVoiceSolutionsPage />} />
                <Route path="/ai-ecommerce-solutions" element={<AIEcommerceSolutionsPage />} />
                <Route path="/ai-hr-solutions" element={<AIHRSolutionsPage />} />
                <Route path="/ai-content-generation" element={<AIContentGenerationPage />} />
                <Route path="/ai-workflow-automation" element={<AIWorkflowAutomationPage />} />
                <Route path="/ai-document-processing" element={<AIDocumentProcessingPage />} />
                <Route path="/ai-predictive-analytics" element={<AIPredictiveAnalyticsPage />} />
                <Route path="/ai-edge-computing" element={<AIEdgeComputingPage />} />
                <Route path="/ai-video-analysis" element={<AIVideoAnalysisPage />} />
                <Route path="/ai-speech-synthesis" element={<AISpeechSynthesisPage />} />
                <Route path="/ai-recommendation-engine" element={<AIRecommendationEnginePage />} />
                <Route path="/ai-sentiment-analysis" element={<AISentimentAnalysisPage />} />
                <Route path="/ai-chatbot-enterprise" element={<AIChatbotEnterprisePage />} />
                <Route path="/ai-content-moderation" element={<AIContentModerationPage />} />
                <Route path="/ai-predictive-modeling" element={<AIPredictiveModelingPage />} />
                <Route path="/ai-document-intelligence" element={<AIDocumentIntelligencePage />} />
                <Route path="/ai-conversation-analytics" element={<AIConversationAnalyticsPage />} />
                <Route path="/ai-supply-chain-ai" element={<AISupplyChainAIPage />} />
                <Route path="/ai-healthcare-diagnostics" element={<AIHealthcareDiagnosticsPage />} />
                <Route path="/ai-financial-forecasting" element={<AIFinancialForecastingPage />} />
                <Route path="/ai-iot-analytics" element={<AIIoTAnalyticsPage />} />
                <Route path="/ai-conversational-ai" element={<AIConversationalAIPage />} />
                <Route path="/ai-automated-testing" element={<AIAutomatedTestingPage />} />
                <Route path="/ai-knowledge-management" element={<AIKnowledgeManagementPage />} />
                <Route path="/ai-customer-churn" element={<AICustomerChurnPage />} />
                <Route path="/ai-automated-reporting" element={<AIAutomatedReportingPage />} />
                <Route path="/ai-voice-assistant" element={<AIVoiceAssistantPage />} />
                <Route path="/ai-content-generation-pro" element={<AIContentGenerationProPage />} />
                <Route path="/ai-accounting-assistant" element={<AIAccountingAssistantPage />} />
                <Route path="/ai-cybersecurity-monitor-pro" element={<AICybersecurityMonitorProPage />} />
                
                {/* IT Service Routes */}
                <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                <Route path="/cybersecurity-solutions" element={<CybersecuritySolutionsPage />} />
                <Route path="/web-development" element={<WebDevelopmentPage />} />
                <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                <Route path="/api-development" element={<APIDevelopmentPage />} />
                <Route path="/database-management" element={<DatabaseManagementPage />} />
                <Route path="/devops-cicd" element={<DevOpsCICDPage />} />
                <Route path="/it-support" element={<ITSupportPage />} />
                <Route path="/data-analytics-bi" element={<DataAnalyticsBIPage />} />
                <Route path="/custom-software" element={<CustomSoftwarePage />} />
                <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} />
                <Route path="/it-asset-management" element={<ITAssetManagementPage />} />
                <Route path="/it-security-services" element={<ITSecurityServicesPage />} />
                <Route path="/it-project-management" element={<ITProjectManagementPage />} />
                <Route path="/cloud-native-development" element={<CloudNativeDevelopmentPage />} />
                <Route path="/ai-integration-services" element={<AIIntegrationServicesPage />} />
                <Route path="/blockchain-development" element={<BlockchainDevelopmentPage />} />
                <Route path="/iot-development" element={<IoTDevelopmentPage />} />
                <Route path="/e-commerce-development" element={<ECommerceDevelopmentPage />} />
                <Route path="/api-development-advanced" element={<APIDevelopmentAdvancedPage />} />
                <Route path="/data-engineering" element={<DataEngineeringPage />} />
                <Route path="/cybersecurity-advanced" element={<CybersecurityAdvancedPage />} />
                <Route path="/cloud-migration-advanced" element={<CloudMigrationAdvancedPage />} />
                <Route path="/devops-advanced" element={<DevOpsAdvancedPage />} />
                <Route path="/machine-learning-ops" element={<MachineLearningOpsPage />} />
                <Route path="/enterprise-integration" element={<EnterpriseIntegrationPage />} />
                <Route path="/performance-optimization" element={<PerformanceOptimizationPage />} />
                <Route path="/disaster-recovery-advanced" element={<DisasterRecoveryAdvancedPage />} />
                <Route path="/compliance-automation" element={<ComplianceAutomationPage />} />
                <Route path="/cloud-cost-optimization" element={<CloudCostOptimizationPage />} />
                <Route path="/security-automation" element={<SecurityAutomationPage />} />
                <Route path="/data-visualization" element={<DataVisualizationPage />} />
                <Route path="/workflow-automation" element={<WorkflowAutomationPage />} />
                <Route path="/cloud-native-security" element={<CloudNativeSecurityPage />} />
                
                {/* Micro SAAS Routes */}
                <Route path="/zion-analytics-pro" element={<ZionAnalyticsProPage />} />
                <Route path="/zion-chat-ai" element={<ZionChatAIPage />} />
                <Route path="/zion-security-shield" element={<ZionSecurityShieldPage />} />
                <Route path="/zion-cloud-vault" element={<ZionCloudVaultPage />} />
                <Route path="/zion-content-studio" element={<ZionContentStudioPage />} />
                <Route path="/zion-crm-intelligence" element={<ZionCRMIntelligencePage />} />
                <Route path="/zion-data-sync" element={<ZionDataSyncPage />} />
                <Route path="/zion-lead-magnet" element={<ZionLeadMagnetPage />} />
                <Route path="/zion-project-master" element={<ZionProjectMasterPage />} />
                <Route path="/zion-email-automation" element={<ZionEmailAutomationPage />} />
                <Route path="/zion-social-scheduler" element={<ZionSocialSchedulerPage />} />
                <Route path="/zion-workflow-automation" element={<ZionWorkflowAutomationPage />} />
                <Route path="/zion-ai-content-moderation" element={<ZionAIContentModerationPage />} />
                <Route path="/zion-ai-predictive-maintenance" element={<ZionAIPredictiveMaintenancePage />} />
                <Route path="/zion-ai-fraud-detector" element={<ZionAIFraudDetectorPage />} />
                <Route path="/zion-ai-supply-chain-optimizer" element={<ZionAISupplyChainOptimizerPage />} />
                <Route path="/zion-ai-document-ai" element={<ZionAIDocumentAIPage />} />
                <Route path="/zion-ai-customer-service-pro" element={<ZionAICustomerServiceProPage />} />
                <Route path="/zion-ai-contract-analyzer" element={<ZionAIContractAnalyzerPage />} />
                <Route path="/zion-ai-translator-pro" element={<ZionAITranslatorProPage />} />
                <Route path="/zion-invoice-genius" element={<ZionInvoiceGeniusPage />} />
                <Route path="/zion-inventory-smart" element={<ZionInventorySmartPage />} />
                <Route path="/zion-compliance-manager" element={<ZionComplianceManagerPage />} />
                <Route path="/zion-performance-monitor" element={<ZionPerformanceMonitorPage />} />
                <Route path="/zion-ai-code-reviewer" element={<ZionAICodeReviewerPage />} />
                <Route path="/zion-ai-survey-builder" element={<ZionAISurveyBuilderPage />} />
                <Route path="/zion-ai-marketing-automation" element={<ZionAIMarketingAutomationPage />} />
                <Route path="/zion-ai-accounting-assistant" element={<ZionAIAccountingAssistantPage />} />
                <Route path="/zion-ai-seo-optimizer" element={<ZionAISEOOptimizerPage />} />
                <Route path="/zion-ai-data-cleaner" element={<ZionAIDataCleanerPage />} />
                <Route path="/zion-customer-insights" element={<ZionAICustomerInsightsPage />} />
                
                {/* 5G Solutions Routes */}
                <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
                <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                <Route path="/5g-iot-solutions" element={<FiveGIoTSolutionsPage />} />
                <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
                <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
                <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
                <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
                <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
  );

export default App;