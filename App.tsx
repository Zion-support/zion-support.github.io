import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./app/styles/futuristic.css";
import "./app/styles/futuristic-enhanced.css";
import Navigation from "./app/components/Navigation";
import Footer from "./app/components/Footer";
import Sidebar from "./app/components/Sidebar";
import HomePage from "./app/page";
import { LoadingPage } from "./app/components/LoadingStates";
import { GlobalErrorBoundary } from "./app/components/EnhancedErrorFeedback";
import EnhancedErrorBoundary from "./app/components/EnhancedErrorBoundary";
import Breadcrumb from "./app/components/Breadcrumb";
import FuturisticBackground from "./app/components/FuturisticBackground";

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import("./app/about/page"));
const ContactPage = React.lazy(() => import("./app/contact/page"));
const ServicesPage = React.lazy(() => import("./app/services/page"));
const PricingPage = React.lazy(() => import("./app/pricing/page"));
const BlogPage = React.lazy(() => import("./app/blog/page"));
const AIServicesPage = React.lazy(() => import("./app/ai-services/page"));
const TutorialsPage = React.lazy(() => import("./app/tutorials/page"));
const DemoPage = React.lazy(() => import("./app/demo/page"));
const SupportPage = React.lazy(() => import("./app/support/page"));
const PrivacyPage = React.lazy(() => import("./app/privacy/page"));
const TermsPage = React.lazy(() => import("./app/terms/page"));
const CookiesPage = React.lazy(() => import("./app/cookies/page"));
const SitemapPage = React.lazy(() => import("./app/sitemap/page"));

// AI Service Pages
const AiAnalyticsPage = React.lazy(() => import("./app/ai-analytics/page"));
const AiAutomationPage = React.lazy(() => import("./app/ai-automation/page"));
const AiBusinessIntelligencePage = React.lazy(() => import("./app/ai-business-intelligence/page"));
const AiContentGenerationPage = React.lazy(() => import("./app/ai-content-generation/page"));
const AiCustomerServicePage = React.lazy(() => import("./app/ai-customer-service/page"));
const AiDataAnalyticsPage = React.lazy(() => import("./app/ai-data-analytics/page"));
const AiEmailAutomationPage = React.lazy(() => import("./app/ai-email-automation/page"));
const AiFraudDetectionPage = React.lazy(() => import("./app/ai-fraud-detection/page"));
const AiHealthcarePage = React.lazy(() => import("./app/ai-healthcare/page"));
const AiMarketingPage = React.lazy(() => import("./app/ai-marketing/page"));
const AiPredictiveAnalyticsPage = React.lazy(() => import("./app/ai-predictive-analytics/page"));
const AiProjectManagementPage = React.lazy(() => import("./app/ai-project-management/page"));
const AiRecommendationEnginePage = React.lazy(() => import("./app/ai-recommendation-engine/page"));
const AiSalesAutomationPage = React.lazy(() => import("./app/ai-sales-automation/page"));
const AiWorkflowAutomationPage = React.lazy(() => import("./app/ai-workflow-automation/page"));

// IT Service Pages
const CloudInfrastructurePage = React.lazy(
  () => import("./app/cloud-infrastructure/page"),
);
const CybersecuritySolutionsPage = React.lazy(
  () => import("./app/cybersecurity-solutions/page"),
);
const WebDevelopmentPage = React.lazy(
  () => import("./app/web-development/page"),
);
const MobileDevelopmentPage = React.lazy(
  () => import("./app/mobile-development/page"),
);
const DatabaseManagementPage = React.lazy(
  () => import("./app/database-management/page"),
);
const CustomSoftwarePage = React.lazy(
  () => import("./app/custom-software/page"),
);
const NetworkInfrastructurePage = React.lazy(
  () => import("./app/network-infrastructure/page"),
);
const CloudNativeDevelopmentPage = React.lazy(
  () => import("./app/cloud-native-development/page"),
);
const BlockchainDevelopmentPage = React.lazy(
  () => import("./app/blockchain-development/page"),
);
const ECommerceDevelopmentPage = React.lazy(
  () => import("./app/e-commerce-development/page"),
);
const DataEngineeringPage = React.lazy(
  () => import("./app/data-engineering/page"),
);
const CybersecurityAdvancedPage = React.lazy(
  () => import("./app/cybersecurity-advanced/page"),
);
const CloudMigrationAdvancedPage = React.lazy(
  () => import("./app/cloud-migration-advanced/page"),
);
const MachineLearningOpsPage = React.lazy(
  () => import("./app/machine-learning-ops/page"),
);
const EnterpriseIntegrationPage = React.lazy(
  () => import("./app/enterprise-integration/page"),
);
const PerformanceOptimizationPage = React.lazy(
  () => import("./app/performance-optimization/page"),
);
const DisasterRecoveryAdvancedPage = React.lazy(
  () => import("./app/disaster-recovery-advanced/page"),
);
const ComplianceAutomationPage = React.lazy(
  () => import("./app/compliance-automation/page"),
);
const CloudCostOptimizationPage = React.lazy(
  () => import("./app/cloud-cost-optimization/page"),
);
const SecurityAutomationPage = React.lazy(
  () => import("./app/security-automation/page"),
);
const DataVisualizationPage = React.lazy(
  () => import("./app/data-visualization/page"),
);
const WorkflowAutomationPage = React.lazy(
  () => import("./app/workflow-automation/page"),
);
const CloudNativeSecurityPage = React.lazy(
  () => import("./app/cloud-native-security/page"),
);
const DataAnalyticsPage = React.lazy(() => import("./app/data-analytics/page"));
const IotSolutionsPage = React.lazy(() => import("./app/iot-solutions/page"));
const DevopsSolutionsPage = React.lazy(() => import("./app/devops-solutions/page"));
const MachineLearningPage = React.lazy(() => import("./app/machine-learning/page"));
const QuantumComputingPage = React.lazy(() => import("./app/quantum-computing/page"));
const RoboticsPage = React.lazy(() => import("./app/robotics/page"));

// Micro SAAS Pages
const ZionAnalyticsProPage = React.lazy(
  () => import("./app/zion-analytics-pro/page"),
);
const ZionSecurityShieldPage = React.lazy(
  () => import("./app/zion-security-shield/page"),
);
const ZionCloudVaultPage = React.lazy(
  () => import("./app/zion-cloud-vault/page"),
);
const ZionContentStudioPage = React.lazy(
  () => import("./app/zion-content-studio/page"),
);
const ZionDataSyncPage = React.lazy(() => import("./app/zion-data-sync/page"));
const ZionLeadMagnetPage = React.lazy(
  () => import("./app/zion-lead-magnet/page"),
);
const ZionProjectMasterPage = React.lazy(
  () => import("./app/zion-project-master/page"),
);
const ZionEmailAutomationPage = React.lazy(
  () => import("./app/zion-email-automation/page"),
);
const ZionSocialSchedulerPage = React.lazy(
  () => import("./app/zion-social-scheduler/page"),
);
const ZionWorkflowAutomationPage = React.lazy(
  () => import("./app/zion-workflow-automation/page"),
);
const ZionInvoiceGeniusPage = React.lazy(
  () => import("./app/zion-invoice-genius/page"),
);
const ZionInventorySmartPage = React.lazy(
  () => import("./app/zion-inventory-smart/page"),
);
const ZionComplianceManagerPage = React.lazy(
  () => import("./app/zion-compliance-manager/page"),
);
const ZionPerformanceMonitorPage = React.lazy(
  () => import("./app/zion-performance-monitor/page"),
);

// 5G Solutions Pages
const FiveGDataAnalyticsPage = React.lazy(
  () => import("./app/5g-data-analytics/page"),
);
const FiveGEdgeComputingPage = React.lazy(
  () => import("./app/5g-edge-computing/page"),
);
const FiveGImplementationPage = React.lazy(
  () => import("./app/5g-implementation/page"),
);
const FiveGMobileApplicationsPage = React.lazy(
  () => import("./app/5g-mobile-applications/page"),
);
const FiveGNetworkInfrastructurePage = React.lazy(
  () => import("./app/5g-network-infrastructure/page"),
);
const FiveGPrivateNetworksPage = React.lazy(
  () => import("./app/5g-private-networks/page"),
);
const FiveGSmartCitySolutionsPage = React.lazy(
  () => import("./app/5g-smart-city-solutions/page"),
);
const FiveGSolutionsPage = React.lazy(() => import("./app/5g-solutions/page"));
const FiveG5gIotSolutionsPage = React.lazy(() => import("./app/5g-iot-solutions/page"));
const AccessibilityPage = React.lazy(() => import("./app/accessibility/page"));
const AccessibilityPagePage = React.lazy(() => import("./app/accessibility-page/page"));
const AdvancedSecuritySuitePage = React.lazy(() => import("./app/advanced-security-suite/page"));
const Ai3dGenerationPage = React.lazy(() => import("./app/ai-3d-generation/page"));
const AiAccountingAssistantPage = React.lazy(() => import("./app/ai-accounting-assistant/page"));
const AiAgriculturalIntelligenceProPage = React.lazy(() => import("./app/ai-agricultural-intelligence-pro/page"));
const AiAnalyticsDashboardPage = React.lazy(() => import("./app/ai-analytics-dashboard/page"));
const AiAnalyticsDashboardProPage = React.lazy(() => import("./app/ai-analytics-dashboard-pro/page"));
const AiApiManagementPage = React.lazy(() => import("./app/ai-api-management/page"));
const AiApiManagerPage = React.lazy(() => import("./app/ai-api-manager/page"));
const AiAutomatedReportingPage = React.lazy(() => import("./app/ai-automated-reporting/page"));
const AiAutomatedTestingPage = React.lazy(() => import("./app/ai-automated-testing/page"));
const AiAutonomousSystemsPage = React.lazy(() => import("./app/ai-autonomous-systems/page"));
const AiBlockchainAnalyticsPage = React.lazy(() => import("./app/ai-blockchain-analytics/page"));
const AiBlockchainSolutionsPage = React.lazy(() => import("./app/ai-blockchain-solutions/page"));
const AiBusinessIntelligenceProPage = React.lazy(() => import("./app/ai-business-intelligence-pro/page"));
const AiChatbotBuilderPage = React.lazy(() => import("./app/ai-chatbot-builder/page"));
const AiChatbotEnterprisePage = React.lazy(() => import("./app/ai-chatbot-enterprise/page"));
const AiClimatePredictionEnginePage = React.lazy(() => import("./app/ai-climate-prediction-engine/page"));
const AiClimateSolutionsProPage = React.lazy(() => import("./app/ai-climate-solutions-pro/page"));
const AiCloudInfrastructurePage = React.lazy(() => import("./app/ai-cloud-infrastructure/page"));
const AiCodeAssistantPage = React.lazy(() => import("./app/ai-code-assistant/page"));
const AiCodeAssistantProPage = React.lazy(() => import("./app/ai-code-assistant-pro/page"));
const AiCodeGenerationPage = React.lazy(() => import("./app/ai-code-generation/page"));
const AiCodeSecurityAuditorPage = React.lazy(() => import("./app/ai-code-security-auditor/page"));
const AiComputerVisionPage = React.lazy(() => import("./app/ai-computer-vision/page"));
const AiContentDeliveryNetworkPage = React.lazy(() => import("./app/ai-content-delivery-network/page"));
const AiContentGenerationProPage = React.lazy(() => import("./app/ai-content-generation-pro/page"));
const AiContentGeneratorPage = React.lazy(() => import("./app/ai-content-generator/page"));
const AiContentManagementPage = React.lazy(() => import("./app/ai-content-management/page"));
const AiContentModerationPage = React.lazy(() => import("./app/ai-content-moderation/page"));
const AiContentModerationProPage = React.lazy(() => import("./app/ai-content-moderation-pro/page"));
const AiContentStudioPage = React.lazy(() => import("./app/ai-content-studio/page"));
const AiContentWriterPage = React.lazy(() => import("./app/ai-content-writer/page"));
const AiConversationAnalyticsPage = React.lazy(() => import("./app/ai-conversation-analytics/page"));
const AiConversationalAiPage = React.lazy(() => import("./app/ai-conversational-ai/page"));
const AiCrmPage = React.lazy(() => import("./app/ai-crm/page"));
const AiCrmAssistantPage = React.lazy(() => import("./app/ai-crm-assistant/page"));
const AiCustomerChurnPage = React.lazy(() => import("./app/ai-customer-churn/page"));
const AiCustomerInsightsPage = React.lazy(() => import("./app/ai-customer-insights/page"));
const AiCustomerSupportPage = React.lazy(() => import("./app/ai-customer-support/page"));
const AiCustomerSupportBotPage = React.lazy(() => import("./app/ai-customer-support-bot/page"));
const AiCustomerSupportChatbotPage = React.lazy(() => import("./app/ai-customer-support-chatbot/page"));
const AiCyberDefenseMatrixPage = React.lazy(() => import("./app/ai-cyber-defense-matrix/page"));
const AiCybersecurityPage = React.lazy(() => import("./app/ai-cybersecurity/page"));
const AiCybersecurityMonitorPage = React.lazy(() => import("./app/ai-cybersecurity-monitor/page"));
const AiCybersecurityMonitorProPage = React.lazy(() => import("./app/ai-cybersecurity-monitor-pro/page"));
const AiCybersecuritySuitePage = React.lazy(() => import("./app/ai-cybersecurity-suite/page"));
const AiCybersecuritySuiteProPage = React.lazy(() => import("./app/ai-cybersecurity-suite-pro/page"));
const AiDataVisualizationPage = React.lazy(() => import("./app/ai-data-visualization/page"));
const AiDesignStudioPage = React.lazy(() => import("./app/ai-design-studio/page"));
const AiDevopsAutomationPage = React.lazy(() => import("./app/ai-devops-automation/page"));
const AiDocumentIntelligencePage = React.lazy(() => import("./app/ai-document-intelligence/page"));
const AiDocumentProcessingPage = React.lazy(() => import("./app/ai-document-processing/page"));
const AiDocumentProcessorPage = React.lazy(() => import("./app/ai-document-processor/page"));
const AiDocumentScannerPage = React.lazy(() => import("./app/ai-document-scanner/page"));
const AiDrugDiscoveryProPage = React.lazy(() => import("./app/ai-drug-discovery-pro/page"));
const AiEcommerceAssistantPage = React.lazy(() => import("./app/ai-ecommerce-assistant/page"));
const AiEcommerceOptimizerPage = React.lazy(() => import("./app/ai-ecommerce-optimizer/page"));
const AiEcommerceOptimizerProPage = React.lazy(() => import("./app/ai-ecommerce-optimizer-pro/page"));
const AiEcommerceSolutionsPage = React.lazy(() => import("./app/ai-ecommerce-solutions/page"));
const AiEdgeComputingPage = React.lazy(() => import("./app/ai-edge-computing/page"));
const AiEducationPage = React.lazy(() => import("./app/ai-education/page"));
const AiEmailAssistantPage = React.lazy(() => import("./app/ai-email-assistant/page"));
const AiEmailMarketingPage = React.lazy(() => import("./app/ai-email-marketing/page"));
const AiEmailMarketingAutomationPage = React.lazy(() => import("./app/ai-email-marketing-automation/page"));
const AiEnergyPage = React.lazy(() => import("./app/ai-energy/page"));
const AiEnergyGridManagementProPage = React.lazy(() => import("./app/ai-energy-grid-management-pro/page"));
const AiEnterpriseSolutionsPage = React.lazy(() => import("./app/ai-enterprise-solutions/page"));
const AiExpenseTrackerPage = React.lazy(() => import("./app/ai-expense-tracker/page"));
const AiExpenseTrackerProPage = React.lazy(() => import("./app/ai-expense-tracker-pro/page"));
const AiFashionDesignPage = React.lazy(() => import("./app/ai-fashion-design/page"));
const AiFinancialAdvisorPage = React.lazy(() => import("./app/ai-financial-advisor/page"));
const AiFinancialAnalyticsProPage = React.lazy(() => import("./app/ai-financial-analytics-pro/page"));
const AiFinancialAnalyzerPage = React.lazy(() => import("./app/ai-financial-analyzer/page"));
const AiFinancialCrimeDetectionProPage = React.lazy(() => import("./app/ai-financial-crime-detection-pro/page"));
const AiFinancialForecastingPage = React.lazy(() => import("./app/ai-financial-forecasting/page"));
const AiFinancialPlannerPage = React.lazy(() => import("./app/ai-financial-planner/page"));
const AiFinancialServicesPage = React.lazy(() => import("./app/ai-financial-services/page"));
const AiFintechPage = React.lazy(() => import("./app/ai-fintech/page"));
const AiFitnessCoachPage = React.lazy(() => import("./app/ai-fitness-coach/page"));
const AiHealthTrackerPage = React.lazy(() => import("./app/ai-health-tracker/page"));
const AiHealthcareDiagnosticsPage = React.lazy(() => import("./app/ai-healthcare-diagnostics/page"));
const AiHealthcareSolutionsPage = React.lazy(() => import("./app/ai-healthcare-solutions/page"));
const AiHolographicWorkspacePage = React.lazy(() => import("./app/ai-holographic-workspace/page"));
const AiHrPage = React.lazy(() => import("./app/ai-hr/page"));
const AiHrAssistantPage = React.lazy(() => import("./app/ai-hr-assistant/page"));
const AiHrSolutionsPage = React.lazy(() => import("./app/ai-hr-solutions/page"));
const AiImageRecognitionPage = React.lazy(() => import("./app/ai-image-recognition/page"));
const AiInfrastructureMonitoringPage = React.lazy(() => import("./app/ai-infrastructure-monitoring/page"));
const AiInsurancePage = React.lazy(() => import("./app/ai-insurance/page"));
const AiIntegrationServicesPage = React.lazy(() => import("./app/ai-integration-services/page"));
const AiInventoryManagementPage = React.lazy(() => import("./app/ai-inventory-management/page"));
const AiInventoryManagerPage = React.lazy(() => import("./app/ai-inventory-manager/page"));
const AiInvestmentOptimizerPage = React.lazy(() => import("./app/ai-investment-optimizer/page"));
const AiInvoiceGeneratorPage = React.lazy(() => import("./app/ai-invoice-generator/page"));
const AiIotAnalyticsPage = React.lazy(() => import("./app/ai-iot-analytics/page"));
const AiKnowledgeManagementPage = React.lazy(() => import("./app/ai-knowledge-management/page"));
const AiLeadGenerationPage = React.lazy(() => import("./app/ai-lead-generation/page"));
const AiLeadScoringPage = React.lazy(() => import("./app/ai-lead-scoring/page"));
const AiLearningPlatformPage = React.lazy(() => import("./app/ai-learning-platform/page"));
const AiLegalPage = React.lazy(() => import("./app/ai-legal/page"));
const AiLegalAssistantPage = React.lazy(() => import("./app/ai-legal-assistant/page"));
const AiLegalResearchProPage = React.lazy(() => import("./app/ai-legal-research-pro/page"));
const AiLoadTestingPage = React.lazy(() => import("./app/ai-load-testing/page"));
const AiLogoDesignerPage = React.lazy(() => import("./app/ai-logo-designer/page"));
const AiManufacturingPage = React.lazy(() => import("./app/ai-manufacturing/page"));
const AiMeetingAssistantPage = React.lazy(() => import("./app/ai-meeting-assistant/page"));
const AiMeetingTranscriberPage = React.lazy(() => import("./app/ai-meeting-transcriber/page"));
const AiMentalHealthCompanionPage = React.lazy(() => import("./app/ai-mental-health-companion/page"));
const AiMlPage = React.lazy(() => import("./app/ai-ml/page"));
const AiMlPlatformPage = React.lazy(() => import("./app/ai-ml-platform/page"));
const AiMobileAppBuilderPage = React.lazy(() => import("./app/ai-mobile-app-builder/page"));
const AiMobileAppDevelopmentPage = React.lazy(() => import("./app/ai-mobile-app-development/page"));
const AiMobileBuilderPage = React.lazy(() => import("./app/ai-mobile-builder/page"));
const AiMusicCompositionPage = React.lazy(() => import("./app/ai-music-composition/page"));
const AiNeuralInterfacePage = React.lazy(() => import("./app/ai-neural-interface/page"));
const AiNeuralMemoryAssistantPage = React.lazy(() => import("./app/ai-neural-memory-assistant/page"));
const AiNlpPage = React.lazy(() => import("./app/ai-nlp/page"));
const AiOpsPage = React.lazy(() => import("./app/ai-ops/page"));
const AiPasswordManagerPage = React.lazy(() => import("./app/ai-password-manager/page"));
const AiPredictiveMaintenancePage = React.lazy(() => import("./app/ai-predictive-maintenance/page"));
const AiPredictiveModelingPage = React.lazy(() => import("./app/ai-predictive-modeling/page"));
const AiProjectManagementProPage = React.lazy(() => import("./app/ai-project-management-pro/page"));
const AiProjectManagerPage = React.lazy(() => import("./app/ai-project-manager/page"));
const AiQualityAssurancePage = React.lazy(() => import("./app/ai-quality-assurance/page"));
const AiQuantumComputingPage = React.lazy(() => import("./app/ai-quantum-computing/page"));
const AiQuantumComputingSimulatorPage = React.lazy(() => import("./app/ai-quantum-computing-simulator/page"));
const AiQuantumFinancialOraclePage = React.lazy(() => import("./app/ai-quantum-financial-oracle/page"));
const AiQuantumOptimizationPage = React.lazy(() => import("./app/ai-quantum-optimization/page"));
const AiQuantumTaskOptimizerPage = React.lazy(() => import("./app/ai-quantum-task-optimizer/page"));
const AiRealEstatePage = React.lazy(() => import("./app/ai-real-estate/page"));
const AiRecruitmentAssistantPage = React.lazy(() => import("./app/ai-recruitment-assistant/page"));
const AiRoboticsPage = React.lazy(() => import("./app/ai-robotics/page"));
const AiSchedulerPage = React.lazy(() => import("./app/ai-scheduler/page"));
const AiSecurityMonitorPage = React.lazy(() => import("./app/ai-security-monitor/page"));
const AiSentimentAnalysisPage = React.lazy(() => import("./app/ai-sentiment-analysis/page"));
const AiSentimentAnalyzerPage = React.lazy(() => import("./app/ai-sentiment-analyzer/page"));
const AiSeoOptimizerPage = React.lazy(() => import("./app/ai-seo-optimizer/page"));
const AiServicesBusinessIntelligencePage = React.lazy(() => import("./app/ai-services/business-intelligence/page"));
const AiServicesContentGenerationPage = React.lazy(() => import("./app/ai-services/content-generation/page"));
const AiServicesCustomerExperiencePage = React.lazy(() => import("./app/ai-services/customer-experience/page"));
const AiServicesDocumentProcessingPage = React.lazy(() => import("./app/ai-services/document-processing/page"));
const AiServicesEnergyManagementPage = React.lazy(() => import("./app/ai-services/energy-management/page"));
const AiServicesFraudDetectionPage = React.lazy(() => import("./app/ai-services/fraud-detection/page"));
const AiServicesHrAnalyticsPage = React.lazy(() => import("./app/ai-services/hr-analytics/page"));
const AiServicesMarketingAutomationPage = React.lazy(() => import("./app/ai-services/marketing-automation/page"));
const AiServicesPredictiveMaintenancePage = React.lazy(() => import("./app/ai-services/predictive-maintenance/page"));
const AiServicesProcessAutomationPage = React.lazy(() => import("./app/ai-services/process-automation/page"));
const AiServicesQualityAssurancePage = React.lazy(() => import("./app/ai-services/quality-assurance/page"));
const AiServicesSupplyChainPage = React.lazy(() => import("./app/ai-services/supply-chain/page"));
const AiSmartCalendarPage = React.lazy(() => import("./app/ai-smart-calendar/page"));
const AiSmartCitySolutionsPage = React.lazy(() => import("./app/ai-smart-city-solutions/page"));
const AiSmartContractAuditorPage = React.lazy(() => import("./app/ai-smart-contract-auditor/page"));
const AiSmartHomeControllerPage = React.lazy(() => import("./app/ai-smart-home-controller/page"));
const AiSmartInvoicePage = React.lazy(() => import("./app/ai-smart-invoice/page"));
const AiSmartSchedulerPage = React.lazy(() => import("./app/ai-smart-scheduler/page"));
const AiSocialMediaManagerPage = React.lazy(() => import("./app/ai-social-media-manager/page"));
const AiSocialMediaSchedulerPage = React.lazy(() => import("./app/ai-social-media-scheduler/page"));
const AiSocialSchedulerPage = React.lazy(() => import("./app/ai-social-scheduler/page"));
const AiSolutionsPage = React.lazy(() => import("./app/ai-solutions/page"));
const AiSpaceMissionOptimizerPage = React.lazy(() => import("./app/ai-space-mission-optimizer/page"));
const AiSpaceTechnologyPage = React.lazy(() => import("./app/ai-space-technology/page"));
const AiSpaceTechnologyProPage = React.lazy(() => import("./app/ai-space-technology-pro/page"));
const AiSpeechSynthesisPage = React.lazy(() => import("./app/ai-speech-synthesis/page"));
const AiStockPortfolioManagerPage = React.lazy(() => import("./app/ai-stock-portfolio-manager/page"));
const AiSupplyChainPage = React.lazy(() => import("./app/ai-supply-chain/page"));
const AiSupplyChainAiPage = React.lazy(() => import("./app/ai-supply-chain-ai/page"));
const AiSupplyChainOptimizationProPage = React.lazy(() => import("./app/ai-supply-chain-optimization-pro/page"));
const AiSupplyChainOptimizerPage = React.lazy(() => import("./app/ai-supply-chain-optimizer/page"));
const AiTaskManagerPage = React.lazy(() => import("./app/ai-task-manager/page"));
const AiTelepathicInterfacePage = React.lazy(() => import("./app/ai-telepathic-interface/page"));
const AiTimeTrackerPage = React.lazy(() => import("./app/ai-time-tracker/page"));
const AiTranslationServicePage = React.lazy(() => import("./app/ai-translation-service/page"));
const AiTranslationServicesPage = React.lazy(() => import("./app/ai-translation-services/page"));
const AiTransportationPage = React.lazy(() => import("./app/ai-transportation/page"));
const AiVideoAnalysisPage = React.lazy(() => import("./app/ai-video-analysis/page"));
const AiVideoEditorPage = React.lazy(() => import("./app/ai-video-editor/page"));
const AiVideoGenerationPage = React.lazy(() => import("./app/ai-video-generation/page"));
const AiVideoGeneratorPage = React.lazy(() => import("./app/ai-video-generator/page"));
const AiVisionPage = React.lazy(() => import("./app/ai-vision/page"));
const AiVoiceAssistantPage = React.lazy(() => import("./app/ai-voice-assistant/page"));
const AiVoiceCloningPage = React.lazy(() => import("./app/ai-voice-cloning/page"));
const AiVoiceCloningStudioPage = React.lazy(() => import("./app/ai-voice-cloning-studio/page"));
const AiVoiceProcessingPage = React.lazy(() => import("./app/ai-voice-processing/page"));
const AiVoiceSolutionsPage = React.lazy(() => import("./app/ai-voice-solutions/page"));
const AiVoiceSynthesisPage = React.lazy(() => import("./app/ai-voice-synthesis/page"));
const AiWebsiteBuilderPage = React.lazy(() => import("./app/ai-website-builder/page"));
const AiWritingAssistantPage = React.lazy(() => import("./app/ai-writing-assistant/page"));
const AnalyticsPage = React.lazy(() => import("./app/analytics/page"));
const AnalyticsToolsPage = React.lazy(() => import("./app/analytics-tools/page"));
const ApiPage = React.lazy(() => import("./app/api/page"));
const ApiDevelopmentPage = React.lazy(() => import("./app/api-development/page"));
const ApiDevelopmentAdvancedPage = React.lazy(() => import("./app/api-development-advanced/page"));
const ApiDocsPage = React.lazy(() => import("./app/api-docs/page"));
const ArVrPlatformPage = React.lazy(() => import("./app/ar-vr-platform/page"));
const ArVrSolutionsPage = React.lazy(() => import("./app/ar-vr-solutions/page"));
const AutomationPage = React.lazy(() => import("./app/automation/page"));
const AutonomousSystemsPage = React.lazy(() => import("./app/autonomous-systems/page"));
const BackupRecoveryPage = React.lazy(() => import("./app/backup-recovery/page"));
const BlockchainPage = React.lazy(() => import("./app/blockchain/page"));
const BlockchainIntegrationServicesPage = React.lazy(() => import("./app/blockchain-integration-services/page"));
const BlockchainWeb3Page = React.lazy(() => import("./app/blockchain-web3/page"));
const BusinessAppsPage = React.lazy(() => import("./app/business-apps/page"));
const BusinessIntelligencePage = React.lazy(() => import("./app/business-intelligence/page"));
const CloudInfrastructureManagementPage = React.lazy(() => import("./app/cloud-infrastructure-management/page"));
const CloudInfrastructureManagerPage = React.lazy(() => import("./app/cloud-infrastructure-manager/page"));
const CloudMigrationPage = React.lazy(() => import("./app/cloud-migration/page"));
const CloudMigrationProPage = React.lazy(() => import("./app/cloud-migration-pro/page"));
const CloudMigrationServicesPage = React.lazy(() => import("./app/cloud-migration-services/page"));
const CloudSecurityPage = React.lazy(() => import("./app/cloud-security/page"));
const CommunityPage = React.lazy(() => import("./app/community/page"));
const CompliancePage = React.lazy(() => import("./app/compliance/page"));
const ComputerVisionPage = React.lazy(() => import("./app/computer-vision/page"));
const CookiePolicyPage = React.lazy(() => import("./app/cookie-policy/page"));
const CrmLitePage = React.lazy(() => import("./app/crm-lite/page"));
const CybersecurityConsultingPage = React.lazy(() => import("./app/cybersecurity-consulting/page"));
const CybersecuritySuitePage = React.lazy(() => import("./app/cybersecurity-suite/page"));
const DataAnalyticsBiPage = React.lazy(() => import("./app/data-analytics-bi/page"));
const DataCenterPage = React.lazy(() => import("./app/data-center/page"));
const DataProtectionPage = React.lazy(() => import("./app/data-protection/page"));
const DatabasePage = React.lazy(() => import("./app/database/page"));
const DatabaseServicesPage = React.lazy(() => import("./app/database-services/page"));
const DeveloperToolsPage = React.lazy(() => import("./app/developer-tools/page"));
const DevopsPage = React.lazy(() => import("./app/devops/page"));
const DevopsAdvancedPage = React.lazy(() => import("./app/devops-advanced/page"));
const DevopsCicdPage = React.lazy(() => import("./app/devops-cicd/page"));
const DigitalTransformationPage = React.lazy(() => import("./app/digital-transformation/page"));
const DigitalTwinPlatformPage = React.lazy(() => import("./app/digital-twin-platform/page"));
const DocsPage = React.lazy(() => import("./app/docs/page"));
const EdgeComputingPage = React.lazy(() => import("./app/edge-computing/page"));
const EmailMarketingAutomationPage = React.lazy(() => import("./app/email-marketing-automation/page"));
const EmailOptimizerPage = React.lazy(() => import("./app/email-optimizer/page"));
const EnterprisePage = React.lazy(() => import("./app/enterprise/page"));
const EnterpriseSecurityPage = React.lazy(() => import("./app/enterprise-security/page"));
const EnterpriseSolutionsPage = React.lazy(() => import("./app/enterprise-solutions/page"));
const ExpenseTrackerPage = React.lazy(() => import("./app/expense-tracker/page"));
const FaqPage = React.lazy(() => import("./app/faq/page"));
const FinancialItPage = React.lazy(() => import("./app/financial-it/page"));
const GdprPage = React.lazy(() => import("./app/gdpr/page"));
const GdprCompliancePage = React.lazy(() => import("./app/gdpr-compliance/page"));
const HealthPage = React.lazy(() => import("./app/health/page"));
const HealthcareItPage = React.lazy(() => import("./app/healthcare-it/page"));
const HelpPage = React.lazy(() => import("./app/help/page"));
const InfrastructureManagementPage = React.lazy(() => import("./app/infrastructure-management/page"));
const InnovationLabsPage = React.lazy(() => import("./app/innovation-labs/page"));
const IntelligentDatabaseMigrationPage = React.lazy(() => import("./app/intelligent-database-migration/page"));
const IntelligentEmailInfrastructurePage = React.lazy(() => import("./app/intelligent-email-infrastructure/page"));
const InvestorsPage = React.lazy(() => import("./app/investors/page"));
const IotPage = React.lazy(() => import("./app/iot/page"));
const IotDevelopmentPage = React.lazy(() => import("./app/iot-development/page"));
const IotEdgePage = React.lazy(() => import("./app/iot-edge/page"));
const IotEdgeComputingPage = React.lazy(() => import("./app/iot-edge-computing/page"));
const IotIntegrationPage = React.lazy(() => import("./app/iot-integration/page"));
const IotPlatformPage = React.lazy(() => import("./app/iot-platform/page"));
const ItAssetManagementPage = React.lazy(() => import("./app/it-asset-management/page"));
const ItConsultingPage = React.lazy(() => import("./app/it-consulting/page"));
const ItInfrastructurePage = React.lazy(() => import("./app/it-infrastructure/page"));
const ItInfrastructureDesignPage = React.lazy(() => import("./app/it-infrastructure-design/page"));
const ItInfrastructureSolutionsPage = React.lazy(() => import("./app/it-infrastructure-solutions/page"));
const ItPerformancePage = React.lazy(() => import("./app/it-performance/page"));
const ItProjectManagementPage = React.lazy(() => import("./app/it-project-management/page"));
const ItSecurityServicesPage = React.lazy(() => import("./app/it-security-services/page"));
const ItServicesCloudMigrationPage = React.lazy(() => import("./app/it-services/cloud-migration/page"));
const ItServicesCybersecurityAuditPage = React.lazy(() => import("./app/it-services/cybersecurity-audit/page"));
const ItSupportPage = React.lazy(() => import("./app/it-support/page"));
const ItTrainingPage = React.lazy(() => import("./app/it-training/page"));
const LandingPageBuilderPage = React.lazy(() => import("./app/landing-page-builder/page"));
const ManagedItPage = React.lazy(() => import("./app/managed-it/page"));
const MarketingToolsPage = React.lazy(() => import("./app/marketing-tools/page"));
const MicroSaasAiContentWriterPage = React.lazy(() => import("./app/micro-saas/ai-content-writer/page"));
const MicroSaasAiContentWriterProPage = React.lazy(() => import("./app/micro-saas/ai-content-writer-pro/page"));
const MicroSaasAiCustomerSupportChatbotPage = React.lazy(() => import("./app/micro-saas/ai-customer-support-chatbot/page"));
const MicroSaasAiEmailMarketingAutomationPage = React.lazy(() => import("./app/micro-saas/ai-email-marketing-automation/page"));
const MicroSaasAiExpenseTrackerPage = React.lazy(() => import("./app/micro-saas/ai-expense-tracker/page"));
const MicroSaasAiInventoryManagerPage = React.lazy(() => import("./app/micro-saas/ai-inventory-manager/page"));
const MicroSaasAiProjectManagerPage = React.lazy(() => import("./app/micro-saas/ai-project-manager/page"));
const MicroSaasAiSocialMediaSchedulerPage = React.lazy(() => import("./app/micro-saas/ai-social-media-scheduler/page"));
const MicroSaasAnalyticsDashboardPage = React.lazy(() => import("./app/micro-saas/analytics-dashboard/page"));
const MicroSaasAppointmentSchedulerPage = React.lazy(() => import("./app/micro-saas/appointment-scheduler/page"));
const MicroSaasChatAnalyticsPage = React.lazy(() => import("./app/micro-saas/chat-analytics/page"));
const MicroSaasContentGeneratorPage = React.lazy(() => import("./app/micro-saas/content-generator/page"));
const MicroSaasContractManagerPage = React.lazy(() => import("./app/micro-saas/contract-manager/page"));
const MicroSaasDocumentProcessorPage = React.lazy(() => import("./app/micro-saas/document-processor/page"));
const MicroSaasEmailMarketingPage = React.lazy(() => import("./app/micro-saas/email-marketing/page"));
const MicroSaasEmailSignaturePage = React.lazy(() => import("./app/micro-saas/email-signature/page"));
const MicroSaasEmployeeDirectoryPage = React.lazy(() => import("./app/micro-saas/employee-directory/page"));
const MicroSaasExpenseTrackerPage = React.lazy(() => import("./app/micro-saas/expense-tracker/page"));
const MicroSaasInventoryManagementPage = React.lazy(() => import("./app/micro-saas/inventory-management/page"));
const MicroSaasLeadScoringPage = React.lazy(() => import("./app/micro-saas/lead-scoring/page"));
const MicroSaasSeoOptimizerPage = React.lazy(() => import("./app/micro-saas/seo-optimizer/page"));
const MicroSaasSocialManagerPage = React.lazy(() => import("./app/micro-saas/social-manager/page"));
const MicroSaasSupportBotPage = React.lazy(() => import("./app/micro-saas/support-bot/page"));
const MicroSaasServicesAiAnalyticsDashboardPage = React.lazy(() => import("./app/micro-saas-services/ai-analytics-dashboard/page"));
const MicroSaasServicesAiChatbotBuilderPage = React.lazy(() => import("./app/micro-saas-services/ai-chatbot-builder/page"));
const MicroSaasServicesAiContentGeneratorPage = React.lazy(() => import("./app/micro-saas-services/ai-content-generator/page"));
const MicroSaasServicesAiEmailAssistantPage = React.lazy(() => import("./app/micro-saas-services/ai-email-assistant/page"));
const MicroSaasServicesAiLeadGenerationPage = React.lazy(() => import("./app/micro-saas-services/ai-lead-generation/page"));
const MicroSaasServicesPage = React.lazy(() => import("./app/micro-saas-services/page"));
const MobileAppDevelopmentPage = React.lazy(() => import("./app/mobile-app-development/page"));
const NetworkDesignPage = React.lazy(() => import("./app/network-design/page"));
const NetworkSecurityPage = React.lazy(() => import("./app/network-security/page"));
const NetworkSolutionsPage = React.lazy(() => import("./app/network-solutions/page"));
const NewsPage = React.lazy(() => import("./app/news/page"));
const NlpPage = React.lazy(() => import("./app/nlp/page"));
const NotFoundPage = React.lazy(() => import("./app/not-found/page"));
const OfflinePage = React.lazy(() => import("./app/offline/page"));
const PartnersPage = React.lazy(() => import("./app/partners/page"));
const PenetrationTestingPage = React.lazy(() => import("./app/penetration-testing/page"));
const PressPage = React.lazy(() => import("./app/press/page"));
const PrivacyPolicyPage = React.lazy(() => import("./app/privacy-policy/page"));
const ProcessAutomationPage = React.lazy(() => import("./app/process-automation/page"));
const ProductivityPage = React.lazy(() => import("./app/productivity/page"));
const ProjectManagementProPage = React.lazy(() => import("./app/project-management-pro/page"));
const QuantumAiPage = React.lazy(() => import("./app/quantum-ai/page"));
const QuantumComputingSolutionsPage = React.lazy(() => import("./app/quantum-computing-solutions/page"));
const ResourcesPage = React.lazy(() => import("./app/resources/page"));
const RoboticsIntegrationPage = React.lazy(() => import("./app/robotics-integration/page"));
const SearchPage = React.lazy(() => import("./app/search/page"));
const SecurityPage = React.lazy(() => import("./app/security/page"));
const SecurityMonitoringPage = React.lazy(() => import("./app/security-monitoring/page"));
const SecurityMonitoringSuitePage = React.lazy(() => import("./app/security-monitoring-suite/page"));
const SeoOptimizerPage = React.lazy(() => import("./app/seo-optimizer/page"));
const ServerManagementPage = React.lazy(() => import("./app/server-management/page"));
const ServicesAdvertisingPage = React.lazy(() => import("./app/services-advertising/page"));
const SitemapxmlPage = React.lazy(() => import("./app/sitemap.xml/page"));
const SlaPage = React.lazy(() => import("./app/sla/page"));
const SmartAnalyticsPage = React.lazy(() => import("./app/smart-analytics/page"));
const SmartCitiesPage = React.lazy(() => import("./app/smart-cities/page"));
const SmartCityInfrastructurePage = React.lazy(() => import("./app/smart-city-infrastructure/page"));
const SmartContractSecurityAuditPage = React.lazy(() => import("./app/smart-contract-security-audit/page"));
const SpecializedServicesPage = React.lazy(() => import("./app/specialized-services/page"));
const StatusPage = React.lazy(() => import("./app/status/page"));
const SystemAdminPage = React.lazy(() => import("./app/system-admin/page"));
const SystemAdministrationPage = React.lazy(() => import("./app/system-administration/page"));
const SystemIntegrationPage = React.lazy(() => import("./app/system-integration/page"));
const SystemStatusPage = React.lazy(() => import("./app/system-status/page"));
const TaskManagerProPage = React.lazy(() => import("./app/task-manager-pro/page"));
const TeamPage = React.lazy(() => import("./app/team/page"));
const TermsOfServicePage = React.lazy(() => import("./app/terms-of-service/page"));
const TestSimplePage = React.lazy(() => import("./app/test-simple/page"));
const TrainingPage = React.lazy(() => import("./app/training/page"));
const ZionAiAccountingAssistantPage = React.lazy(() => import("./app/zion-ai-accounting-assistant/page"));
const ZionAiCodeReviewerPage = React.lazy(() => import("./app/zion-ai-code-reviewer/page"));
const ZionAiContentModerationPage = React.lazy(() => import("./app/zion-ai-content-moderation/page"));
const ZionAiContractAnalyzerPage = React.lazy(() => import("./app/zion-ai-contract-analyzer/page"));
const ZionAiCustomerServiceProPage = React.lazy(() => import("./app/zion-ai-customer-service-pro/page"));
const ZionAiDataCleanerPage = React.lazy(() => import("./app/zion-ai-data-cleaner/page"));
const ZionAiDocumentAiPage = React.lazy(() => import("./app/zion-ai-document-ai/page"));
const ZionAiEmailAssistantPage = React.lazy(() => import("./app/zion-ai-email-assistant/page"));
const ZionAiEnergyManagerPage = React.lazy(() => import("./app/zion-ai-energy-manager/page"));
const ZionAiFraudDetectorPage = React.lazy(() => import("./app/zion-ai-fraud-detector/page"));
const ZionAiMarketingAutomationPage = React.lazy(() => import("./app/zion-ai-marketing-automation/page"));
const ZionAiMeetingAssistantPage = React.lazy(() => import("./app/zion-ai-meeting-assistant/page"));
const ZionAiPredictiveMaintenancePage = React.lazy(() => import("./app/zion-ai-predictive-maintenance/page"));
const ZionAiRecruitmentProPage = React.lazy(() => import("./app/zion-ai-recruitment-pro/page"));
const ZionAiSeoOptimizerPage = React.lazy(() => import("./app/zion-ai-seo-optimizer/page"));
const ZionAiSupplyChainOptimizerPage = React.lazy(() => import("./app/zion-ai-supply-chain-optimizer/page"));
const ZionAiSurveyBuilderPage = React.lazy(() => import("./app/zion-ai-survey-builder/page"));
const ZionAiTranslatorProPage = React.lazy(() => import("./app/zion-ai-translator-pro/page"));
const ZionAiVideoEditorPage = React.lazy(() => import("./app/zion-ai-video-editor/page"));
const ZionChatAiPage = React.lazy(() => import("./app/zion-chat-ai/page"));
const ZionCrmIntelligencePage = React.lazy(() => import("./app/zion-crm-intelligence/page"));
const ZionCustomerInsightsPage = React.lazy(() => import("./app/zion-customer-insights/page"));


// Main App Component
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const toggleSidebar = React.useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  return (
    <GlobalErrorBoundary>
      <EnhancedErrorBoundary>
        <HelmetProvider>
          <AccessibilityEnhancer>
            <Router>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                <FuturisticBackground>
                  <Navigation onSidebarToggle={toggleSidebar} />
                  <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
                  <Breadcrumb />
                  <main id="main-content" role="main">
                    <Suspense fallback={<LoadingPage />}>
                      <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/pricing" element={<PricingPage />} />
                        <Route path="/blog" element={<BlogPage />} />
                        <Route path="/ai-services" element={<AIServicesPage />} />
                        <Route path="/tutorials" element={<TutorialsPage />} />
                        <Route path="/demo" element={<DemoPage />} />
                        <Route path="/support" element={<SupportPage />} />
                        <Route path="/privacy" element={<PrivacyPage />} />
                        <Route path="/terms" element={<TermsPage />} />
                        <Route path="/cookies" element={<CookiesPage />} />
                        <Route path="/sitemap" element={<SitemapPage />} />
                      </Routes>
                    </Suspense>
                  </main>
                  <Footer />
                  <EnhancedAccessibility>
                    <div></div>
                  </EnhancedAccessibility>
                </FuturisticBackground>
              </div>
              <EnhancedAccessibility>
                <div></div>
              </EnhancedAccessibility>
              <AnalyticsProvider>
                <div>
                  <PerformanceMonitor />
                  <WebVitalsTracker />
                  <PerformanceEnhancer />
                  <SEOOptimizer />
                  <EnhancedSEO />
                  <EnhancedSEOOptimizer />
                </div>
              </AnalyticsProvider>
            </Router>
          </AccessibilityEnhancer>
        </HelmetProvider>
      </EnhancedErrorBoundary>
    </GlobalErrorBoundary>
  );
}

export default App;
