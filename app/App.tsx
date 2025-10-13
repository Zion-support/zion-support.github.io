"use client";

import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "./components/ErrorBoundary";
import PerformanceMonitor from "./components/PerformanceMonitor";
import AccessibilityEnhancer from "./components/AccessibilityEnhancer";
import LoadingSpinner from "./components/LoadingSpinner";
import CriticalResourcePreloader from "./components/CriticalResourcePreloader";
import CacheManager from "./components/CacheManager";
import AdvancedPerformanceMonitor from "./components/AdvancedPerformanceMonitor";

// Lazy load pages for better performance
const 404Page = lazy(() => import("./404/page"));
const 5gDataAnalyticsPage = lazy(() => import("./5g-data-analytics/page"));
const 5gEdgeComputingPage = lazy(() => import("./5g-edge-computing/page"));
const 5gImplementationPage = lazy(() => import("./5g-implementation/page"));
const 5gIotSolutionsPage = lazy(() => import("./5g-iot-solutions/page"));
const 5gMobileApplicationsPage = lazy(() => import("./5g-mobile-applications/page"));
const 5gNetworkInfrastructurePage = lazy(() => import("./5g-network-infrastructure/page"));
const 5gPrivateNetworksPage = lazy(() => import("./5g-private-networks/page"));
const 5gSmartCitySolutionsPage = lazy(() => import("./5g-smart-city-solutions/page"));
const 5gSolutionsPage = lazy(() => import("./5g-solutions/page"));
const AboutPage = lazy(() => import("./about/page"));
const AccessibilityPage = lazy(() => import("./accessibility/page"));
const AccessibilityPagePage = lazy(() => import("./accessibility-page/page"));
const AdvancedSecuritySuitePage = lazy(() => import("./advanced-security-suite/page"));
const Ai3dGenerationPage = lazy(() => import("./ai-3d-generation/page"));
const AiAccountingAssistantPage = lazy(() => import("./ai-accounting-assistant/page"));
const AiAgriculturalIntelligenceProPage = lazy(() => import("./ai-agricultural-intelligence-pro/page"));
const AiAnalyticsPage = lazy(() => import("./ai-analytics/page"));
const AiAnalyticsDashboardPage = lazy(() => import("./ai-analytics-dashboard/page"));
const AiAnalyticsDashboardProPage = lazy(() => import("./ai-analytics-dashboard-pro/page"));
const AiApiManagementPage = lazy(() => import("./ai-api-management/page"));
const AiApiManagerPage = lazy(() => import("./ai-api-manager/page"));
const AiAutomatedReportingPage = lazy(() => import("./ai-automated-reporting/page"));
const AiAutomatedTestingPage = lazy(() => import("./ai-automated-testing/page"));
const AiAutomationPage = lazy(() => import("./ai-automation/page"));
const AiAutomationPlatformPage = lazy(() => import("./ai-automation-platform/page"));
const AiAutonomousSystemsPage = lazy(() => import("./ai-autonomous-systems/page"));
const AiBlockchainAnalyticsPage = lazy(() => import("./ai-blockchain-analytics/page"));
const AiBlockchainSolutionsPage = lazy(() => import("./ai-blockchain-solutions/page"));
const AiBusinessIntelligencePage = lazy(() => import("./ai-business-intelligence/page"));
const AiBusinessIntelligenceProPage = lazy(() => import("./ai-business-intelligence-pro/page"));
const AiChatbotBuilderPage = lazy(() => import("./ai-chatbot-builder/page"));
const AiChatbotEnterprisePage = lazy(() => import("./ai-chatbot-enterprise/page"));
const AiClimatePredictionEnginePage = lazy(() => import("./ai-climate-prediction-engine/page"));
const AiClimateSolutionsProPage = lazy(() => import("./ai-climate-solutions-pro/page"));
const AiCloudInfrastructurePage = lazy(() => import("./ai-cloud-infrastructure/page"));
const AiCodeAssistantPage = lazy(() => import("./ai-code-assistant/page"));
const AiCodeAssistantProPage = lazy(() => import("./ai-code-assistant-pro/page"));
const AiCodeGenerationPage = lazy(() => import("./ai-code-generation/page"));
const AiCodeSecurityAuditorPage = lazy(() => import("./ai-code-security-auditor/page"));
const AiComputerVisionPage = lazy(() => import("./ai-computer-vision/page"));
const AiContentDeliveryNetworkPage = lazy(() => import("./ai-content-delivery-network/page"));
const AiContentGenerationPage = lazy(() => import("./ai-content-generation/page"));
const AiContentGenerationProPage = lazy(() => import("./ai-content-generation-pro/page"));
const AiContentGeneratorPage = lazy(() => import("./ai-content-generator/page"));
const AiContentManagementPage = lazy(() => import("./ai-content-management/page"));
const AiContentModerationPage = lazy(() => import("./ai-content-moderation/page"));
const AiContentModerationProPage = lazy(() => import("./ai-content-moderation-pro/page"));
const AiContentStudioPage = lazy(() => import("./ai-content-studio/page"));
const AiContentWriterPage = lazy(() => import("./ai-content-writer/page"));
const AiConversationAnalyticsPage = lazy(() => import("./ai-conversation-analytics/page"));
const AiConversationalAiPage = lazy(() => import("./ai-conversational-ai/page"));
const AiCrmPage = lazy(() => import("./ai-crm/page"));
const AiCrmAssistantPage = lazy(() => import("./ai-crm-assistant/page"));
const AiCustomerChurnPage = lazy(() => import("./ai-customer-churn/page"));
const AiCustomerInsightsPage = lazy(() => import("./ai-customer-insights/page"));
const AiCustomerSentimentTrackerPage = lazy(() => import("./ai-customer-sentiment-tracker/page"));
const AiCustomerServicePage = lazy(() => import("./ai-customer-service/page"));
const AiCustomerSupportPage = lazy(() => import("./ai-customer-support/page"));
const AiCustomerSupportBotPage = lazy(() => import("./ai-customer-support-bot/page"));
const AiCustomerSupportChatbotPage = lazy(() => import("./ai-customer-support-chatbot/page"));
const AiCyberDefenseMatrixPage = lazy(() => import("./ai-cyber-defense-matrix/page"));
const AiCybersecurityPage = lazy(() => import("./ai-cybersecurity/page"));
const AiCybersecurityMonitorPage = lazy(() => import("./ai-cybersecurity-monitor/page"));
const AiCybersecurityMonitorProPage = lazy(() => import("./ai-cybersecurity-monitor-pro/page"));
const AiCybersecuritySuitePage = lazy(() => import("./ai-cybersecurity-suite/page"));
const AiCybersecuritySuiteProPage = lazy(() => import("./ai-cybersecurity-suite-pro/page"));
const AiDataAnalyticsPage = lazy(() => import("./ai-data-analytics/page"));
const AiDataAnalyticsProPage = lazy(() => import("./ai-data-analytics-pro/page"));
const AiDataVisualizationPage = lazy(() => import("./ai-data-visualization/page"));
const AiDesignStudioPage = lazy(() => import("./ai-design-studio/page"));
const AiDevopsAutomationPage = lazy(() => import("./ai-devops-automation/page"));
const AiDocumentIntelligencePage = lazy(() => import("./ai-document-intelligence/page"));
const AiDocumentProcessingPage = lazy(() => import("./ai-document-processing/page"));
const AiDocumentProcessorPage = lazy(() => import("./ai-document-processor/page"));
const AiDocumentScannerPage = lazy(() => import("./ai-document-scanner/page"));
const AiDrugDiscoveryProPage = lazy(() => import("./ai-drug-discovery-pro/page"));
const AiEcommerceAssistantPage = lazy(() => import("./ai-ecommerce-assistant/page"));
const AiEcommerceOptimizerPage = lazy(() => import("./ai-ecommerce-optimizer/page"));
const AiEcommerceOptimizerProPage = lazy(() => import("./ai-ecommerce-optimizer-pro/page"));
const AiEcommerceSolutionsPage = lazy(() => import("./ai-ecommerce-solutions/page"));
const AiEdgeComputingPage = lazy(() => import("./ai-edge-computing/page"));
const AiEducationPage = lazy(() => import("./ai-education/page"));
const AiEmailAssistantPage = lazy(() => import("./ai-email-assistant/page"));
const AiEmailAutomationPage = lazy(() => import("./ai-email-automation/page"));
const AiEmailMarketingPage = lazy(() => import("./ai-email-marketing/page"));
const AiEmailMarketingAutomationPage = lazy(() => import("./ai-email-marketing-automation/page"));
const AiEnergyPage = lazy(() => import("./ai-energy/page"));
const AiEnergyGridManagementProPage = lazy(() => import("./ai-energy-grid-management-pro/page"));
const AiEnterpriseSolutionsPage = lazy(() => import("./ai-enterprise-solutions/page"));
const AiExpenseTrackerPage = lazy(() => import("./ai-expense-tracker/page"));
const AiExpenseTrackerProPage = lazy(() => import("./ai-expense-tracker-pro/page"));
const AiFashionDesignPage = lazy(() => import("./ai-fashion-design/page"));
const AiFinancialAdvisorPage = lazy(() => import("./ai-financial-advisor/page"));
const AiFinancialAnalysisPage = lazy(() => import("./ai-financial-analysis/page"));
const AiFinancialAnalyticsProPage = lazy(() => import("./ai-financial-analytics-pro/page"));
const AiFinancialAnalyzerPage = lazy(() => import("./ai-financial-analyzer/page"));
const AiFinancialCrimeDetectionProPage = lazy(() => import("./ai-financial-crime-detection-pro/page"));
const AiFinancialForecastingPage = lazy(() => import("./ai-financial-forecasting/page"));
const AiFinancialPlannerPage = lazy(() => import("./ai-financial-planner/page"));
const AiFinancialServicesPage = lazy(() => import("./ai-financial-services/page"));
const AiFintechPage = lazy(() => import("./ai-fintech/page"));
const AiFitnessCoachPage = lazy(() => import("./ai-fitness-coach/page"));
const AiFraudDetectionPage = lazy(() => import("./ai-fraud-detection/page"));
const AiHealthTrackerPage = lazy(() => import("./ai-health-tracker/page"));
const AiHealthcarePage = lazy(() => import("./ai-healthcare/page"));
const AiHealthcareDiagnosticsPage = lazy(() => import("./ai-healthcare-diagnostics/page"));
const AiHealthcareSolutionsPage = lazy(() => import("./ai-healthcare-solutions/page"));
const AiHolographicWorkspacePage = lazy(() => import("./ai-holographic-workspace/page"));
const AiHrPage = lazy(() => import("./ai-hr/page"));
const AiHrAssistantPage = lazy(() => import("./ai-hr-assistant/page"));
const AiHrRecruitmentProPage = lazy(() => import("./ai-hr-recruitment-pro/page"));
const AiHrSolutionsPage = lazy(() => import("./ai-hr-solutions/page"));
const AiImageRecognitionPage = lazy(() => import("./ai-image-recognition/page"));
const AiInfrastructureMonitoringPage = lazy(() => import("./ai-infrastructure-monitoring/page"));
const AiInsurancePage = lazy(() => import("./ai-insurance/page"));
const AiIntegrationServicesPage = lazy(() => import("./ai-integration-services/page"));
const AiInventoryManagementPage = lazy(() => import("./ai-inventory-management/page"));
const AiInventoryManagerPage = lazy(() => import("./ai-inventory-manager/page"));
const AiInvestmentOptimizerPage = lazy(() => import("./ai-investment-optimizer/page"));
const AiInvoiceGeneratorPage = lazy(() => import("./ai-invoice-generator/page"));
const AiIotAnalyticsPage = lazy(() => import("./ai-iot-analytics/page"));
const AiKnowledgeManagementPage = lazy(() => import("./ai-knowledge-management/page"));
const AiLeadGenerationPage = lazy(() => import("./ai-lead-generation/page"));
const AiLeadScoringPage = lazy(() => import("./ai-lead-scoring/page"));
const AiLearningPlatformPage = lazy(() => import("./ai-learning-platform/page"));
const AiLegalPage = lazy(() => import("./ai-legal/page"));
const AiLegalAssistantPage = lazy(() => import("./ai-legal-assistant/page"));
const AiLegalResearchProPage = lazy(() => import("./ai-legal-research-pro/page"));
const AiLoadTestingPage = lazy(() => import("./ai-load-testing/page"));
const AiLogoDesignerPage = lazy(() => import("./ai-logo-designer/page"));
const AiManufacturingPage = lazy(() => import("./ai-manufacturing/page"));
const AiMarketingPage = lazy(() => import("./ai-marketing/page"));
const AiMarketingAutomationPage = lazy(() => import("./ai-marketing-automation/page"));
const AiMeetingAssistantPage = lazy(() => import("./ai-meeting-assistant/page"));
const AiMeetingTranscriberPage = lazy(() => import("./ai-meeting-transcriber/page"));
const AiMentalHealthCompanionPage = lazy(() => import("./ai-mental-health-companion/page"));
const AiMlPage = lazy(() => import("./ai-ml/page"));
const AiMlPlatformPage = lazy(() => import("./ai-ml-platform/page"));
const AiMobileAppBuilderPage = lazy(() => import("./ai-mobile-app-builder/page"));
const AiMobileAppDevelopmentPage = lazy(() => import("./ai-mobile-app-development/page"));
const AiMobileBuilderPage = lazy(() => import("./ai-mobile-builder/page"));
const AiMusicCompositionPage = lazy(() => import("./ai-music-composition/page"));
const AiNeuralInterfacePage = lazy(() => import("./ai-neural-interface/page"));
const AiNeuralMemoryAssistantPage = lazy(() => import("./ai-neural-memory-assistant/page"));
const AiNlpPage = lazy(() => import("./ai-nlp/page"));
const AiOpsPage = lazy(() => import("./ai-ops/page"));
const AiPasswordManagerPage = lazy(() => import("./ai-password-manager/page"));
const AiPoweredDevopsPage = lazy(() => import("./ai-powered-devops/page"));
const AiPoweredEmailAnalyzerPage = lazy(() => import("./ai-powered-email-analyzer/page"));
const AiPredictiveAnalyticsPage = lazy(() => import("./ai-predictive-analytics/page"));
const AiPredictiveMaintenancePage = lazy(() => import("./ai-predictive-maintenance/page"));
const AiPredictiveModelingPage = lazy(() => import("./ai-predictive-modeling/page"));
const AiProjectManagementPage = lazy(() => import("./ai-project-management/page"));
const AiProjectManagementProPage = lazy(() => import("./ai-project-management-pro/page"));
const AiProjectManagerPage = lazy(() => import("./ai-project-manager/page"));
const AiQualityAssurancePage = lazy(() => import("./ai-quality-assurance/page"));
const AiQuantumComputingPage = lazy(() => import("./ai-quantum-computing/page"));
const AiQuantumComputingSimulatorPage = lazy(() => import("./ai-quantum-computing-simulator/page"));
const AiQuantumFinancialOraclePage = lazy(() => import("./ai-quantum-financial-oracle/page"));
const AiQuantumOptimizationPage = lazy(() => import("./ai-quantum-optimization/page"));
const AiQuantumTaskOptimizerPage = lazy(() => import("./ai-quantum-task-optimizer/page"));
const AiRealEstatePage = lazy(() => import("./ai-real-estate/page"));
const AiRecommendationEnginePage = lazy(() => import("./ai-recommendation-engine/page"));
const AiRecruitmentAssistantPage = lazy(() => import("./ai-recruitment-assistant/page"));
const AiRoboticsPage = lazy(() => import("./ai-robotics/page"));
const AiSalesAutomationPage = lazy(() => import("./ai-sales-automation/page"));
const AiSchedulerPage = lazy(() => import("./ai-scheduler/page"));
const AiSecurityMonitorPage = lazy(() => import("./ai-security-monitor/page"));
const AiSentimentAnalysisPage = lazy(() => import("./ai-sentiment-analysis/page"));
const AiSentimentAnalyzerPage = lazy(() => import("./ai-sentiment-analyzer/page"));
const AiSeoOptimizerPage = lazy(() => import("./ai-seo-optimizer/page"));
const AiServicesPage = lazy(() => import("./ai-services/page"));
const AiServicesBusinessIntelligencePage = lazy(() => import("./ai-services/business-intelligence/page"));
const AiServicesContentGenerationPage = lazy(() => import("./ai-services/content-generation/page"));
const AiServicesCustomerExperiencePage = lazy(() => import("./ai-services/customer-experience/page"));
const AiServicesDocumentProcessingPage = lazy(() => import("./ai-services/document-processing/page"));
const AiServicesEnergyManagementPage = lazy(() => import("./ai-services/energy-management/page"));
const AiServicesFraudDetectionPage = lazy(() => import("./ai-services/fraud-detection/page"));
const AiServicesHrAnalyticsPage = lazy(() => import("./ai-services/hr-analytics/page"));
const AiServicesMarketingAutomationPage = lazy(() => import("./ai-services/marketing-automation/page"));
const AiServicesPredictiveMaintenancePage = lazy(() => import("./ai-services/predictive-maintenance/page"));
const AiServicesProcessAutomationPage = lazy(() => import("./ai-services/process-automation/page"));
const AiServicesQualityAssurancePage = lazy(() => import("./ai-services/quality-assurance/page"));
const AiServicesSupplyChainPage = lazy(() => import("./ai-services/supply-chain/page"));
const AiSmartCalendarPage = lazy(() => import("./ai-smart-calendar/page"));
const AiSmartCitySolutionsPage = lazy(() => import("./ai-smart-city-solutions/page"));
const AiSmartContractAuditorPage = lazy(() => import("./ai-smart-contract-auditor/page"));
const AiSmartHomeControllerPage = lazy(() => import("./ai-smart-home-controller/page"));
const AiSmartInvoicePage = lazy(() => import("./ai-smart-invoice/page"));
const AiSmartSchedulerPage = lazy(() => import("./ai-smart-scheduler/page"));
const AiSocialMediaManagerPage = lazy(() => import("./ai-social-media-manager/page"));
const AiSocialMediaSchedulerPage = lazy(() => import("./ai-social-media-scheduler/page"));
const AiSocialSchedulerPage = lazy(() => import("./ai-social-scheduler/page"));
const AiSolutionsPage = lazy(() => import("./ai-solutions/page"));
const AiSpaceMissionOptimizerPage = lazy(() => import("./ai-space-mission-optimizer/page"));
const AiSpaceTechnologyPage = lazy(() => import("./ai-space-technology/page"));
const AiSpaceTechnologyProPage = lazy(() => import("./ai-space-technology-pro/page"));
const AiSpeechSynthesisPage = lazy(() => import("./ai-speech-synthesis/page"));
const AiStockPortfolioManagerPage = lazy(() => import("./ai-stock-portfolio-manager/page"));
const AiSupplyChainPage = lazy(() => import("./ai-supply-chain/page"));
const AiSupplyChainAiPage = lazy(() => import("./ai-supply-chain-ai/page"));
const AiSupplyChainOptimizationProPage = lazy(() => import("./ai-supply-chain-optimization-pro/page"));
const AiSupplyChainOptimizerPage = lazy(() => import("./ai-supply-chain-optimizer/page"));
const AiTaskManagerPage = lazy(() => import("./ai-task-manager/page"));
const AiTelepathicInterfacePage = lazy(() => import("./ai-telepathic-interface/page"));
const AiTimeTrackerPage = lazy(() => import("./ai-time-tracker/page"));
const AiTranslationServicePage = lazy(() => import("./ai-translation-service/page"));
const AiTranslationServicesPage = lazy(() => import("./ai-translation-services/page"));
const AiTransportationPage = lazy(() => import("./ai-transportation/page"));
const AiVideoAnalysisPage = lazy(() => import("./ai-video-analysis/page"));
const AiVideoEditorPage = lazy(() => import("./ai-video-editor/page"));
const AiVideoGenerationPage = lazy(() => import("./ai-video-generation/page"));
const AiVideoGeneratorPage = lazy(() => import("./ai-video-generator/page"));
const AiVisionPage = lazy(() => import("./ai-vision/page"));
const AiVoiceAssistantPage = lazy(() => import("./ai-voice-assistant/page"));
const AiVoiceAssistantProPage = lazy(() => import("./ai-voice-assistant-pro/page"));
const AiVoiceCloningPage = lazy(() => import("./ai-voice-cloning/page"));
const AiVoiceCloningStudioPage = lazy(() => import("./ai-voice-cloning-studio/page"));
const AiVoiceProcessingPage = lazy(() => import("./ai-voice-processing/page"));
const AiVoiceSolutionsPage = lazy(() => import("./ai-voice-solutions/page"));
const AiVoiceSynthesisPage = lazy(() => import("./ai-voice-synthesis/page"));
const AiWebsiteBuilderPage = lazy(() => import("./ai-website-builder/page"));
const AiWorkflowAutomationPage = lazy(() => import("./ai-workflow-automation/page"));
const AiWritingAssistantPage = lazy(() => import("./ai-writing-assistant/page"));
const AnalyticsPage = lazy(() => import("./analytics/page"));
const AnalyticsToolsPage = lazy(() => import("./analytics-tools/page"));
const ApiPage = lazy(() => import("./api/page"));
const ApiDevelopmentPage = lazy(() => import("./api-development/page"));
const ApiDevelopmentAdvancedPage = lazy(() => import("./api-development-advanced/page"));
const ApiDocsPage = lazy(() => import("./api-docs/page"));
const ArVrDevelopmentPage = lazy(() => import("./ar-vr-development/page"));
const ArVrPlatformPage = lazy(() => import("./ar-vr-platform/page"));
const ArVrSolutionsPage = lazy(() => import("./ar-vr-solutions/page"));
const AssetManagementPage = lazy(() => import("./asset-management/page"));
const AutomationPage = lazy(() => import("./automation/page"));
const AutonomousSystemsPage = lazy(() => import("./autonomous-systems/page"));
const BackupRecoveryPage = lazy(() => import("./backup-recovery/page"));
const BlockchainPage = lazy(() => import("./blockchain/page"));
const BlockchainDevelopmentPage = lazy(() => import("./blockchain-development/page"));
const BlockchainIntegrationServicesPage = lazy(() => import("./blockchain-integration-services/page"));
const BlockchainWeb3Page = lazy(() => import("./blockchain-web3/page"));
const BlogPage = lazy(() => import("./blog/page"));
const BusinessAppsPage = lazy(() => import("./business-apps/page"));
const BusinessIntelligencePage = lazy(() => import("./business-intelligence/page"));
const CareersPage = lazy(() => import("./careers/page"));
const CaseStudiesPage = lazy(() => import("./case-studies/page"));
const CloudConsultingPage = lazy(() => import("./cloud-consulting/page"));
const CloudCostOptimizationPage = lazy(() => import("./cloud-cost-optimization/page"));
const CloudInfrastructurePage = lazy(() => import("./cloud-infrastructure/page"));
const CloudInfrastructureManagementPage = lazy(() => import("./cloud-infrastructure-management/page"));
const CloudInfrastructureManagerPage = lazy(() => import("./cloud-infrastructure-manager/page"));
const CloudMigrationPage = lazy(() => import("./cloud-migration/page"));
const CloudMigrationAdvancedPage = lazy(() => import("./cloud-migration-advanced/page"));
const CloudMigrationProPage = lazy(() => import("./cloud-migration-pro/page"));
const CloudMigrationServicesPage = lazy(() => import("./cloud-migration-services/page"));
const CloudNativeDevelopmentPage = lazy(() => import("./cloud-native-development/page"));
const CloudNativeSecurityPage = lazy(() => import("./cloud-native-security/page"));
const CloudSecurityPage = lazy(() => import("./cloud-security/page"));
const CloudServicesPage = lazy(() => import("./cloud-services/page"));
const CommunityPage = lazy(() => import("./community/page"));
const CompliancePage = lazy(() => import("./compliance/page"));
const ComplianceAutomationPage = lazy(() => import("./compliance-automation/page"));
const ComputerVisionPage = lazy(() => import("./computer-vision/page"));
const ConsultationPage = lazy(() => import("./consultation/page"));
const ContactPage = lazy(() => import("./contact/page"));
const CookiePolicyPage = lazy(() => import("./cookie-policy/page"));
const CookiesPage = lazy(() => import("./cookies/page"));
const CrmLitePage = lazy(() => import("./crm-lite/page"));
const CustomDevelopmentPage = lazy(() => import("./custom-development/page"));
const CustomSoftwarePage = lazy(() => import("./custom-software/page"));
const CustomerRelationshipManagerPage = lazy(() => import("./customer-relationship-manager/page"));
const CybersecurityPage = lazy(() => import("./cybersecurity/page"));
const CybersecurityAdvancedPage = lazy(() => import("./cybersecurity-advanced/page"));
const CybersecurityAuditPage = lazy(() => import("./cybersecurity-audit/page"));
const CybersecurityConsultingPage = lazy(() => import("./cybersecurity-consulting/page"));
const CybersecuritySolutionsPage = lazy(() => import("./cybersecurity-solutions/page"));
const CybersecuritySuitePage = lazy(() => import("./cybersecurity-suite/page"));
const DataAnalyticsPage = lazy(() => import("./data-analytics/page"));
const DataAnalyticsBiPage = lazy(() => import("./data-analytics-bi/page"));
const DataCenterPage = lazy(() => import("./data-center/page"));
const DataCenterServicesPage = lazy(() => import("./data-center-services/page"));
const DataCenterSolutionsPage = lazy(() => import("./data-center-solutions/page"));
const DataEngineeringPage = lazy(() => import("./data-engineering/page"));
const DataProtectionPage = lazy(() => import("./data-protection/page"));
const DataVisualizationPage = lazy(() => import("./data-visualization/page"));
const DatabasePage = lazy(() => import("./database/page"));
const DatabaseManagementPage = lazy(() => import("./database-management/page"));
const DatabaseServicesPage = lazy(() => import("./database-services/page"));
const DemoPage = lazy(() => import("./demo/page"));
const DeveloperToolsPage = lazy(() => import("./developer-tools/page"));
const DevopsPage = lazy(() => import("./devops/page"));
const DevopsAdvancedPage = lazy(() => import("./devops-advanced/page"));
const DevopsCicdPage = lazy(() => import("./devops-cicd/page"));
const DevopsServicesPage = lazy(() => import("./devops-services/page"));
const DevopsSolutionsPage = lazy(() => import("./devops-solutions/page"));
const DigitalTransformationPage = lazy(() => import("./digital-transformation/page"));
const DigitalTwinPlatformPage = lazy(() => import("./digital-twin-platform/page"));
const DisasterRecoveryPage = lazy(() => import("./disaster-recovery/page"));
const DisasterRecoveryAdvancedPage = lazy(() => import("./disaster-recovery-advanced/page"));
const DocsPage = lazy(() => import("./docs/page"));
const ECommerceDevelopmentPage = lazy(() => import("./e-commerce-development/page"));
const EdgeComputingPage = lazy(() => import("./edge-computing/page"));
const EmailMarketingAutomationPage = lazy(() => import("./email-marketing-automation/page"));
const EmailMarketingPlatformPage = lazy(() => import("./email-marketing-platform/page"));
const EmailOptimizerPage = lazy(() => import("./email-optimizer/page"));
const EmployeeTimeTrackerPage = lazy(() => import("./employee-time-tracker/page"));
const EnterprisePage = lazy(() => import("./enterprise/page"));
const EnterpriseIntegrationPage = lazy(() => import("./enterprise-integration/page"));
const EnterpriseSecurityPage = lazy(() => import("./enterprise-security/page"));
const EnterpriseSolutionsPage = lazy(() => import("./enterprise-solutions/page"));
const ExpenseTrackerPage = lazy(() => import("./expense-tracker/page"));
const FaqPage = lazy(() => import("./faq/page"));
const FinancialItPage = lazy(() => import("./financial-it/page"));
const FinancialReportingToolPage = lazy(() => import("./financial-reporting-tool/page"));
const GdprPage = lazy(() => import("./gdpr/page"));
const GdprCompliancePage = lazy(() => import("./gdpr-compliance/page"));
const HealthPage = lazy(() => import("./health/page"));
const HealthcareItPage = lazy(() => import("./healthcare-it/page"));
const HelpPage = lazy(() => import("./help/page"));
const InfrastructureManagementPage = lazy(() => import("./infrastructure-management/page"));
const InnovationLabsPage = lazy(() => import("./innovation-labs/page"));
const IntelligentDatabaseMigrationPage = lazy(() => import("./intelligent-database-migration/page"));
const IntelligentEmailInfrastructurePage = lazy(() => import("./intelligent-email-infrastructure/page"));
const InventoryManagementSystemPage = lazy(() => import("./inventory-management-system/page"));
const InvestorsPage = lazy(() => import("./investors/page"));
const IotPage = lazy(() => import("./iot/page"));
const IotDevelopmentPage = lazy(() => import("./iot-development/page"));
const IotEdgePage = lazy(() => import("./iot-edge/page"));
const IotEdgeComputingPage = lazy(() => import("./iot-edge-computing/page"));
const IotIntegrationPage = lazy(() => import("./iot-integration/page"));
const IotPlatformPage = lazy(() => import("./iot-platform/page"));
const IotSolutionsPage = lazy(() => import("./iot-solutions/page"));
const ItAssetManagementPage = lazy(() => import("./it-asset-management/page"));
const ItConsultingPage = lazy(() => import("./it-consulting/page"));
const ItInfrastructurePage = lazy(() => import("./it-infrastructure/page"));
const ItInfrastructureDesignPage = lazy(() => import("./it-infrastructure-design/page"));
const ItInfrastructureSolutionsPage = lazy(() => import("./it-infrastructure-solutions/page"));
const ItPerformancePage = lazy(() => import("./it-performance/page"));
const ItProjectManagementPage = lazy(() => import("./it-project-management/page"));
const ItSecurityServicesPage = lazy(() => import("./it-security-services/page"));
const ItServicesPage = lazy(() => import("./it-services/page"));
const ItServicesCloudMigrationPage = lazy(() => import("./it-services/cloud-migration/page"));
const ItServicesCybersecurityAuditPage = lazy(() => import("./it-services/cybersecurity-audit/page"));
const ItSupportPage = lazy(() => import("./it-support/page"));
const ItTrainingPage = lazy(() => import("./it-training/page"));
const LandingPageBuilderPage = lazy(() => import("./landing-page-builder/page"));
const MachineLearningPage = lazy(() => import("./machine-learning/page"));
const MachineLearningOpsPage = lazy(() => import("./machine-learning-ops/page"));
const ManagedItPage = lazy(() => import("./managed-it/page"));
const ManagedServicesPage = lazy(() => import("./managed-services/page"));
const MarketingToolsPage = lazy(() => import("./marketing-tools/page"));
const MicroSaasPage = lazy(() => import("./micro-saas/page"));
const MicroSaasServicesPage = lazy(() => import("./micro-saas-services/page"));
const MicroSaasServicesAiAnalyticsDashboardPage = lazy(() => import("./micro-saas-services/ai-analytics-dashboard/page"));
const MicroSaasServicesAiChatbotBuilderPage = lazy(() => import("./micro-saas-services/ai-chatbot-builder/page"));
const MicroSaasServicesAiContentGeneratorPage = lazy(() => import("./micro-saas-services/ai-content-generator/page"));
const MicroSaasServicesAiEmailAssistantPage = lazy(() => import("./micro-saas-services/ai-email-assistant/page"));
const MicroSaasServicesAiLeadGenerationPage = lazy(() => import("./micro-saas-services/ai-lead-generation/page"));
const MicroSaasAiContentWriterPage = lazy(() => import("./micro-saas/ai-content-writer/page"));
const MicroSaasAiContentWriterProPage = lazy(() => import("./micro-saas/ai-content-writer-pro/page"));
const MicroSaasAiCustomerSupportChatbotPage = lazy(() => import("./micro-saas/ai-customer-support-chatbot/page"));
const MicroSaasAiEmailMarketingAutomationPage = lazy(() => import("./micro-saas/ai-email-marketing-automation/page"));
const MicroSaasAiExpenseTrackerPage = lazy(() => import("./micro-saas/ai-expense-tracker/page"));
const MicroSaasAiInventoryManagerPage = lazy(() => import("./micro-saas/ai-inventory-manager/page"));
const MicroSaasAiProjectManagerPage = lazy(() => import("./micro-saas/ai-project-manager/page"));
const MicroSaasAiSocialMediaSchedulerPage = lazy(() => import("./micro-saas/ai-social-media-scheduler/page"));
const MicroSaasAnalyticsDashboardPage = lazy(() => import("./micro-saas/analytics-dashboard/page"));
const MicroSaasAppointmentSchedulerPage = lazy(() => import("./micro-saas/appointment-scheduler/page"));
const MicroSaasChatAnalyticsPage = lazy(() => import("./micro-saas/chat-analytics/page"));
const MicroSaasContentGeneratorPage = lazy(() => import("./micro-saas/content-generator/page"));
const MicroSaasContractManagerPage = lazy(() => import("./micro-saas/contract-manager/page"));
const MicroSaasDocumentProcessorPage = lazy(() => import("./micro-saas/document-processor/page"));
const MicroSaasEmailMarketingPage = lazy(() => import("./micro-saas/email-marketing/page"));
const MicroSaasEmailSignaturePage = lazy(() => import("./micro-saas/email-signature/page"));
const MicroSaasEmployeeDirectoryPage = lazy(() => import("./micro-saas/employee-directory/page"));
const MicroSaasExpenseTrackerPage = lazy(() => import("./micro-saas/expense-tracker/page"));
const MicroSaasInventoryManagementPage = lazy(() => import("./micro-saas/inventory-management/page"));
const MicroSaasLeadScoringPage = lazy(() => import("./micro-saas/lead-scoring/page"));
const MicroSaasSeoOptimizerPage = lazy(() => import("./micro-saas/seo-optimizer/page"));
const MicroSaasSocialManagerPage = lazy(() => import("./micro-saas/social-manager/page"));
const MicroSaasSupportBotPage = lazy(() => import("./micro-saas/support-bot/page"));
const MobileAppDevelopmentPage = lazy(() => import("./mobile-app-development/page"));
const MobileDevelopmentPage = lazy(() => import("./mobile-development/page"));
const NetworkDesignPage = lazy(() => import("./network-design/page"));
const NetworkInfrastructurePage = lazy(() => import("./network-infrastructure/page"));
const NetworkSecurityPage = lazy(() => import("./network-security/page"));
const NetworkSolutionsPage = lazy(() => import("./network-solutions/page"));
const NewsPage = lazy(() => import("./news/page"));
const NlpPage = lazy(() => import("./nlp/page"));
const NotFoundPage = lazy(() => import("./not-found/page"));
const OfflinePage = lazy(() => import("./offline/page"));
const Page.tsxPage = lazy(() => import("./page.tsx/page"));
const PartnersPage = lazy(() => import("./partners/page"));
const PenetrationTestingPage = lazy(() => import("./penetration-testing/page"));
const PerformanceOptimizationPage = lazy(() => import("./performance-optimization/page"));
const PressPage = lazy(() => import("./press/page"));
const PricingPage = lazy(() => import("./pricing/page"));
const PrivacyPage = lazy(() => import("./privacy/page"));
const PrivacyPolicyPage = lazy(() => import("./privacy-policy/page"));
const ProcessAutomationPage = lazy(() => import("./process-automation/page"));
const ProductivityPage = lazy(() => import("./productivity/page"));
const ProjectManagementProPage = lazy(() => import("./project-management-pro/page"));
const ProjectManagementToolPage = lazy(() => import("./project-management-tool/page"));
const QuantumAiPage = lazy(() => import("./quantum-ai/page"));
const QuantumComputingPage = lazy(() => import("./quantum-computing/page"));
const QuantumComputingSolutionsPage = lazy(() => import("./quantum-computing-solutions/page"));
const ResourcesPage = lazy(() => import("./resources/page"));
const RoboticsPage = lazy(() => import("./robotics/page"));
const RoboticsIntegrationPage = lazy(() => import("./robotics-integration/page"));
const SearchPage = lazy(() => import("./search/page"));
const SecurityPage = lazy(() => import("./security/page"));
const SecurityAuditPage = lazy(() => import("./security-audit/page"));
const SecurityAutomationPage = lazy(() => import("./security-automation/page"));
const SecurityMonitoringPage = lazy(() => import("./security-monitoring/page"));
const SecurityMonitoringSuitePage = lazy(() => import("./security-monitoring-suite/page"));
const SeoOptimizerPage = lazy(() => import("./seo-optimizer/page"));
const ServerManagementPage = lazy(() => import("./server-management/page"));
const ServicesPage = lazy(() => import("./services/page"));
const ServicesAdvertisingPage = lazy(() => import("./services-advertising/page"));
const SitemapPage = lazy(() => import("./sitemap/page"));
const Sitemap.xmlPage = lazy(() => import("./sitemap.xml/page"));
const SlaPage = lazy(() => import("./sla/page"));
const SmartAnalyticsPage = lazy(() => import("./smart-analytics/page"));
const SmartCitiesPage = lazy(() => import("./smart-cities/page"));
const SmartCityInfrastructurePage = lazy(() => import("./smart-city-infrastructure/page"));
const SmartContractSecurityAuditPage = lazy(() => import("./smart-contract-security-audit/page"));
const SmartExpenseCategorizerPage = lazy(() => import("./smart-expense-categorizer/page"));
const SmartInventoryOptimizerPage = lazy(() => import("./smart-inventory-optimizer/page"));
const SocialMediaSchedulerPage = lazy(() => import("./social-media-scheduler/page"));
const SoftwareDevelopmentPage = lazy(() => import("./software-development/page"));
const SpecializedServicesPage = lazy(() => import("./specialized-services/page"));
const StatusPage = lazy(() => import("./status/page"));
const SupportPage = lazy(() => import("./support/page"));
const SystemAdminPage = lazy(() => import("./system-admin/page"));
const SystemAdministrationPage = lazy(() => import("./system-administration/page"));
const SystemIntegrationPage = lazy(() => import("./system-integration/page"));
const SystemStatusPage = lazy(() => import("./system-status/page"));
const TaskAutomationWorkflowPage = lazy(() => import("./task-automation-workflow/page"));
const TaskManagerProPage = lazy(() => import("./task-manager-pro/page"));
const TeamPage = lazy(() => import("./team/page"));
const TechnologyConsultingPage = lazy(() => import("./technology-consulting/page"));
const TermsPage = lazy(() => import("./terms/page"));
const TermsOfServicePage = lazy(() => import("./terms-of-service/page"));
const TestSimplePage = lazy(() => import("./test-simple/page"));
const TrainingPage = lazy(() => import("./training/page"));
const TutorialsPage = lazy(() => import("./tutorials/page"));
const WebDevelopmentPage = lazy(() => import("./web-development/page"));
const WebinarsPage = lazy(() => import("./webinars/page"));
const WebsiteAnalyticsToolPage = lazy(() => import("./website-analytics-tool/page"));
const WhitepapersPage = lazy(() => import("./whitepapers/page"));
const WorkflowAutomationPage = lazy(() => import("./workflow-automation/page"));
const ZionAiAccountingAssistantPage = lazy(() => import("./zion-ai-accounting-assistant/page"));
const ZionAiAccountingSuitePage = lazy(() => import("./zion-ai-accounting-suite/page"));
const ZionAiAnalyticsProPage = lazy(() => import("./zion-ai-analytics-pro/page"));
const ZionAiBusinessIntelligenceProPage = lazy(() => import("./zion-ai-business-intelligence-pro/page"));
const ZionAiCodeReviewerPage = lazy(() => import("./zion-ai-code-reviewer/page"));
const ZionAiContentModerationPage = lazy(() => import("./zion-ai-content-moderation/page"));
const ZionAiContentModeratorPage = lazy(() => import("./zion-ai-content-moderator/page"));
const ZionAiContentStudioProPage = lazy(() => import("./zion-ai-content-studio-pro/page"));
const ZionAiContractAnalyzerPage = lazy(() => import("./zion-ai-contract-analyzer/page"));
const ZionAiCrmProPage = lazy(() => import("./zion-ai-crm-pro/page"));
const ZionAiCustomerChurnPredictorPage = lazy(() => import("./zion-ai-customer-churn-predictor/page"));
const ZionAiCustomerInsightsPage = lazy(() => import("./zion-ai-customer-insights/page"));
const ZionAiCustomerSentimentTrackerPage = lazy(() => import("./zion-ai-customer-sentiment-tracker/page"));
const ZionAiCustomerSentimentTrackerProPage = lazy(() => import("./zion-ai-customer-sentiment-tracker-pro/page"));
const ZionAiCustomerServiceProPage = lazy(() => import("./zion-ai-customer-service-pro/page"));
const ZionAiCustomerSupportProPage = lazy(() => import("./zion-ai-customer-support-pro/page"));
const ZionAiCybersecuritySuiteProPage = lazy(() => import("./zion-ai-cybersecurity-suite-pro/page"));
const ZionAiDataCleanerPage = lazy(() => import("./zion-ai-data-cleaner/page"));
const ZionAiDevopsAutomationProPage = lazy(() => import("./zion-ai-devops-automation-pro/page"));
const ZionAiDocumentAiPage = lazy(() => import("./zion-ai-document-ai/page"));
const ZionAiEmailAnalyzerPage = lazy(() => import("./zion-ai-email-analyzer/page"));
const ZionAiEmailAnalyzerProPage = lazy(() => import("./zion-ai-email-analyzer-pro/page"));
const ZionAiEmailAssistantPage = lazy(() => import("./zion-ai-email-assistant/page"));
const ZionAiEnergyManagerPage = lazy(() => import("./zion-ai-energy-manager/page"));
const ZionAiFinancialForecasterPage = lazy(() => import("./zion-ai-financial-forecaster/page"));
const ZionAiFraudDetectorPage = lazy(() => import("./zion-ai-fraud-detector/page"));
const ZionAiInventoryManagerPage = lazy(() => import("./zion-ai-inventory-manager/page"));
const ZionAiInvoiceGeneratorPage = lazy(() => import("./zion-ai-invoice-generator/page"));
const ZionAiMarketingAutomationPage = lazy(() => import("./zion-ai-marketing-automation/page"));
const ZionAiMarketingAutomationProPage = lazy(() => import("./zion-ai-marketing-automation-pro/page"));
const ZionAiMeetingAssistantPage = lazy(() => import("./zion-ai-meeting-assistant/page"));
const ZionAiPerformanceOptimizerPage = lazy(() => import("./zion-ai-performance-optimizer/page"));
const ZionAiPredictiveMaintenancePage = lazy(() => import("./zion-ai-predictive-maintenance/page"));
const ZionAiProjectManagerProPage = lazy(() => import("./zion-ai-project-manager-pro/page"));
const ZionAiRecruitmentProPage = lazy(() => import("./zion-ai-recruitment-pro/page"));
const ZionAiSeoOptimizerPage = lazy(() => import("./zion-ai-seo-optimizer/page"));
const ZionAiSocialMediaManagerPage = lazy(() => import("./zion-ai-social-media-manager/page"));
const ZionAiSupplyChainOptimizerPage = lazy(() => import("./zion-ai-supply-chain-optimizer/page"));
const ZionAiSurveyBuilderPage = lazy(() => import("./zion-ai-survey-builder/page"));
const ZionAiTaskSchedulerPage = lazy(() => import("./zion-ai-task-scheduler/page"));
const ZionAiTranslatorProPage = lazy(() => import("./zion-ai-translator-pro/page"));
const ZionAiVideoEditorPage = lazy(() => import("./zion-ai-video-editor/page"));
const ZionAiVideoGeneratorPage = lazy(() => import("./zion-ai-video-generator/page"));
const ZionAiVoiceAssistantProPage = lazy(() => import("./zion-ai-voice-assistant-pro/page"));
const ZionAnalyticsProPage = lazy(() => import("./zion-analytics-pro/page"));
const ZionChatAiPage = lazy(() => import("./zion-chat-ai/page"));
const ZionCloudVaultPage = lazy(() => import("./zion-cloud-vault/page"));
const ZionCloudVaultProPage = lazy(() => import("./zion-cloud-vault-pro/page"));
const ZionComplianceManagerPage = lazy(() => import("./zion-compliance-manager/page"));
const ZionContentStudioPage = lazy(() => import("./zion-content-studio/page"));
const ZionCrmIntelligencePage = lazy(() => import("./zion-crm-intelligence/page"));
const ZionCustomerInsightsPage = lazy(() => import("./zion-customer-insights/page"));
const ZionDataSyncPage = lazy(() => import("./zion-data-sync/page"));
const ZionEmailAutomationPage = lazy(() => import("./zion-email-automation/page"));
const ZionHrAssistantProPage = lazy(() => import("./zion-hr-assistant-pro/page"));
const ZionInventorySmartPage = lazy(() => import("./zion-inventory-smart/page"));
const ZionInvoiceGeniusPage = lazy(() => import("./zion-invoice-genius/page"));
const ZionLeadMagnetPage = lazy(() => import("./zion-lead-magnet/page"));
const ZionPerformanceMonitorPage = lazy(() => import("./zion-performance-monitor/page"));
const ZionProjectMasterPage = lazy(() => import("./zion-project-master/page"));
const ZionSecurityShieldPage = lazy(() => import("./zion-security-shield/page"));
const ZionSecurityShieldProPage = lazy(() => import("./zion-security-shield-pro/page"));
const ZionSmartExpenseCategorizerPage = lazy(() => import("./zion-smart-expense-categorizer/page"));
const ZionSmartExpenseCategorizerProPage = lazy(() => import("./zion-smart-expense-categorizer-pro/page"));
const ZionSmartInventoryOptimizerPage = lazy(() => import("./zion-smart-inventory-optimizer/page"));
const ZionSmartInventoryOptimizerProPage = lazy(() => import("./zion-smart-inventory-optimizer-pro/page"));
const ZionSocialSchedulerPage = lazy(() => import("./zion-social-scheduler/page"));
const ZionWorkflowAutomationPage = lazy(() => import("./zion-workflow-automation/page"));

// Main App Component
function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <PerformanceMonitor />
          <AccessibilityEnhancer>
            <CriticalResourcePreloader />
            <CacheManager />
            <AdvancedPerformanceMonitor />
            <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/404" element={<404Page />} />
              <Route path="/5g-data-analytics" element={<5gDataAnalyticsPage />} />
              <Route path="/5g-edge-computing" element={<5gEdgeComputingPage />} />
              <Route path="/5g-implementation" element={<5gImplementationPage />} />
              <Route path="/5g-iot-solutions" element={<5gIotSolutionsPage />} />
              <Route path="/5g-mobile-applications" element={<5gMobileApplicationsPage />} />
              <Route path="/5g-network-infrastructure" element={<5gNetworkInfrastructurePage />} />
              <Route path="/5g-private-networks" element={<5gPrivateNetworksPage />} />
              <Route path="/5g-smart-city-solutions" element={<5gSmartCitySolutionsPage />} />
              <Route path="/5g-solutions" element={<5gSolutionsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/accessibility" element={<AccessibilityPage />} />
              <Route path="/accessibility-page" element={<AccessibilityPagePage />} />
              <Route path="/advanced-security-suite" element={<AdvancedSecuritySuitePage />} />
              <Route path="/ai-3d-generation" element={<Ai3dGenerationPage />} />
              <Route path="/ai-accounting-assistant" element={<AiAccountingAssistantPage />} />
              <Route path="/ai-agricultural-intelligence-pro" element={<AiAgriculturalIntelligenceProPage />} />
              <Route path="/ai-analytics" element={<AiAnalyticsPage />} />
              <Route path="/ai-analytics-dashboard" element={<AiAnalyticsDashboardPage />} />
              <Route path="/ai-analytics-dashboard-pro" element={<AiAnalyticsDashboardProPage />} />
              <Route path="/ai-api-management" element={<AiApiManagementPage />} />
              <Route path="/ai-api-manager" element={<AiApiManagerPage />} />
              <Route path="/ai-automated-reporting" element={<AiAutomatedReportingPage />} />
              <Route path="/ai-automated-testing" element={<AiAutomatedTestingPage />} />
              <Route path="/ai-automation" element={<AiAutomationPage />} />
              <Route path="/ai-automation-platform" element={<AiAutomationPlatformPage />} />
              <Route path="/ai-autonomous-systems" element={<AiAutonomousSystemsPage />} />
              <Route path="/ai-blockchain-analytics" element={<AiBlockchainAnalyticsPage />} />
              <Route path="/ai-blockchain-solutions" element={<AiBlockchainSolutionsPage />} />
              <Route path="/ai-business-intelligence" element={<AiBusinessIntelligencePage />} />
              <Route path="/ai-business-intelligence-pro" element={<AiBusinessIntelligenceProPage />} />
              <Route path="/ai-chatbot-builder" element={<AiChatbotBuilderPage />} />
              <Route path="/ai-chatbot-enterprise" element={<AiChatbotEnterprisePage />} />
              <Route path="/ai-climate-prediction-engine" element={<AiClimatePredictionEnginePage />} />
              <Route path="/ai-climate-solutions-pro" element={<AiClimateSolutionsProPage />} />
              <Route path="/ai-cloud-infrastructure" element={<AiCloudInfrastructurePage />} />
              <Route path="/ai-code-assistant" element={<AiCodeAssistantPage />} />
              <Route path="/ai-code-assistant-pro" element={<AiCodeAssistantProPage />} />
              <Route path="/ai-code-generation" element={<AiCodeGenerationPage />} />
              <Route path="/ai-code-security-auditor" element={<AiCodeSecurityAuditorPage />} />
              <Route path="/ai-computer-vision" element={<AiComputerVisionPage />} />
              <Route path="/ai-content-delivery-network" element={<AiContentDeliveryNetworkPage />} />
              <Route path="/ai-content-generation" element={<AiContentGenerationPage />} />
              <Route path="/ai-content-generation-pro" element={<AiContentGenerationProPage />} />
              <Route path="/ai-content-generator" element={<AiContentGeneratorPage />} />
              <Route path="/ai-content-management" element={<AiContentManagementPage />} />
              <Route path="/ai-content-moderation" element={<AiContentModerationPage />} />
              <Route path="/ai-content-moderation-pro" element={<AiContentModerationProPage />} />
              <Route path="/ai-content-studio" element={<AiContentStudioPage />} />
              <Route path="/ai-content-writer" element={<AiContentWriterPage />} />
              <Route path="/ai-conversation-analytics" element={<AiConversationAnalyticsPage />} />
              <Route path="/ai-conversational-ai" element={<AiConversationalAiPage />} />
              <Route path="/ai-crm" element={<AiCrmPage />} />
              <Route path="/ai-crm-assistant" element={<AiCrmAssistantPage />} />
              <Route path="/ai-customer-churn" element={<AiCustomerChurnPage />} />
              <Route path="/ai-customer-insights" element={<AiCustomerInsightsPage />} />
              <Route path="/ai-customer-sentiment-tracker" element={<AiCustomerSentimentTrackerPage />} />
              <Route path="/ai-customer-service" element={<AiCustomerServicePage />} />
              <Route path="/ai-customer-support" element={<AiCustomerSupportPage />} />
              <Route path="/ai-customer-support-bot" element={<AiCustomerSupportBotPage />} />
              <Route path="/ai-customer-support-chatbot" element={<AiCustomerSupportChatbotPage />} />
              <Route path="/ai-cyber-defense-matrix" element={<AiCyberDefenseMatrixPage />} />
              <Route path="/ai-cybersecurity" element={<AiCybersecurityPage />} />
              <Route path="/ai-cybersecurity-monitor" element={<AiCybersecurityMonitorPage />} />
              <Route path="/ai-cybersecurity-monitor-pro" element={<AiCybersecurityMonitorProPage />} />
              <Route path="/ai-cybersecurity-suite" element={<AiCybersecuritySuitePage />} />
              <Route path="/ai-cybersecurity-suite-pro" element={<AiCybersecuritySuiteProPage />} />
              <Route path="/ai-data-analytics" element={<AiDataAnalyticsPage />} />
              <Route path="/ai-data-analytics-pro" element={<AiDataAnalyticsProPage />} />
              <Route path="/ai-data-visualization" element={<AiDataVisualizationPage />} />
              <Route path="/ai-design-studio" element={<AiDesignStudioPage />} />
              <Route path="/ai-devops-automation" element={<AiDevopsAutomationPage />} />
              <Route path="/ai-document-intelligence" element={<AiDocumentIntelligencePage />} />
              <Route path="/ai-document-processing" element={<AiDocumentProcessingPage />} />
              <Route path="/ai-document-processor" element={<AiDocumentProcessorPage />} />
              <Route path="/ai-document-scanner" element={<AiDocumentScannerPage />} />
              <Route path="/ai-drug-discovery-pro" element={<AiDrugDiscoveryProPage />} />
              <Route path="/ai-ecommerce-assistant" element={<AiEcommerceAssistantPage />} />
              <Route path="/ai-ecommerce-optimizer" element={<AiEcommerceOptimizerPage />} />
              <Route path="/ai-ecommerce-optimizer-pro" element={<AiEcommerceOptimizerProPage />} />
              <Route path="/ai-ecommerce-solutions" element={<AiEcommerceSolutionsPage />} />
              <Route path="/ai-edge-computing" element={<AiEdgeComputingPage />} />
              <Route path="/ai-education" element={<AiEducationPage />} />
              <Route path="/ai-email-assistant" element={<AiEmailAssistantPage />} />
              <Route path="/ai-email-automation" element={<AiEmailAutomationPage />} />
              <Route path="/ai-email-marketing" element={<AiEmailMarketingPage />} />
              <Route path="/ai-email-marketing-automation" element={<AiEmailMarketingAutomationPage />} />
              <Route path="/ai-energy" element={<AiEnergyPage />} />
              <Route path="/ai-energy-grid-management-pro" element={<AiEnergyGridManagementProPage />} />
              <Route path="/ai-enterprise-solutions" element={<AiEnterpriseSolutionsPage />} />
              <Route path="/ai-expense-tracker" element={<AiExpenseTrackerPage />} />
              <Route path="/ai-expense-tracker-pro" element={<AiExpenseTrackerProPage />} />
              <Route path="/ai-fashion-design" element={<AiFashionDesignPage />} />
              <Route path="/ai-financial-advisor" element={<AiFinancialAdvisorPage />} />
              <Route path="/ai-financial-analysis" element={<AiFinancialAnalysisPage />} />
              <Route path="/ai-financial-analytics-pro" element={<AiFinancialAnalyticsProPage />} />
              <Route path="/ai-financial-analyzer" element={<AiFinancialAnalyzerPage />} />
              <Route path="/ai-financial-crime-detection-pro" element={<AiFinancialCrimeDetectionProPage />} />
              <Route path="/ai-financial-forecasting" element={<AiFinancialForecastingPage />} />
              <Route path="/ai-financial-planner" element={<AiFinancialPlannerPage />} />
              <Route path="/ai-financial-services" element={<AiFinancialServicesPage />} />
              <Route path="/ai-fintech" element={<AiFintechPage />} />
              <Route path="/ai-fitness-coach" element={<AiFitnessCoachPage />} />
              <Route path="/ai-fraud-detection" element={<AiFraudDetectionPage />} />
              <Route path="/ai-health-tracker" element={<AiHealthTrackerPage />} />
              <Route path="/ai-healthcare" element={<AiHealthcarePage />} />
              <Route path="/ai-healthcare-diagnostics" element={<AiHealthcareDiagnosticsPage />} />
              <Route path="/ai-healthcare-solutions" element={<AiHealthcareSolutionsPage />} />
              <Route path="/ai-holographic-workspace" element={<AiHolographicWorkspacePage />} />
              <Route path="/ai-hr" element={<AiHrPage />} />
              <Route path="/ai-hr-assistant" element={<AiHrAssistantPage />} />
              <Route path="/ai-hr-recruitment-pro" element={<AiHrRecruitmentProPage />} />
              <Route path="/ai-hr-solutions" element={<AiHrSolutionsPage />} />
              <Route path="/ai-image-recognition" element={<AiImageRecognitionPage />} />
              <Route path="/ai-infrastructure-monitoring" element={<AiInfrastructureMonitoringPage />} />
              <Route path="/ai-insurance" element={<AiInsurancePage />} />
              <Route path="/ai-integration-services" element={<AiIntegrationServicesPage />} />
              <Route path="/ai-inventory-management" element={<AiInventoryManagementPage />} />
              <Route path="/ai-inventory-manager" element={<AiInventoryManagerPage />} />
              <Route path="/ai-investment-optimizer" element={<AiInvestmentOptimizerPage />} />
              <Route path="/ai-invoice-generator" element={<AiInvoiceGeneratorPage />} />
              <Route path="/ai-iot-analytics" element={<AiIotAnalyticsPage />} />
              <Route path="/ai-knowledge-management" element={<AiKnowledgeManagementPage />} />
              <Route path="/ai-lead-generation" element={<AiLeadGenerationPage />} />
              <Route path="/ai-lead-scoring" element={<AiLeadScoringPage />} />
              <Route path="/ai-learning-platform" element={<AiLearningPlatformPage />} />
              <Route path="/ai-legal" element={<AiLegalPage />} />
              <Route path="/ai-legal-assistant" element={<AiLegalAssistantPage />} />
              <Route path="/ai-legal-research-pro" element={<AiLegalResearchProPage />} />
              <Route path="/ai-load-testing" element={<AiLoadTestingPage />} />
              <Route path="/ai-logo-designer" element={<AiLogoDesignerPage />} />
              <Route path="/ai-manufacturing" element={<AiManufacturingPage />} />
              <Route path="/ai-marketing" element={<AiMarketingPage />} />
              <Route path="/ai-marketing-automation" element={<AiMarketingAutomationPage />} />
              <Route path="/ai-meeting-assistant" element={<AiMeetingAssistantPage />} />
              <Route path="/ai-meeting-transcriber" element={<AiMeetingTranscriberPage />} />
              <Route path="/ai-mental-health-companion" element={<AiMentalHealthCompanionPage />} />
              <Route path="/ai-ml" element={<AiMlPage />} />
              <Route path="/ai-ml-platform" element={<AiMlPlatformPage />} />
              <Route path="/ai-mobile-app-builder" element={<AiMobileAppBuilderPage />} />
              <Route path="/ai-mobile-app-development" element={<AiMobileAppDevelopmentPage />} />
              <Route path="/ai-mobile-builder" element={<AiMobileBuilderPage />} />
              <Route path="/ai-music-composition" element={<AiMusicCompositionPage />} />
              <Route path="/ai-neural-interface" element={<AiNeuralInterfacePage />} />
              <Route path="/ai-neural-memory-assistant" element={<AiNeuralMemoryAssistantPage />} />
              <Route path="/ai-nlp" element={<AiNlpPage />} />
              <Route path="/ai-ops" element={<AiOpsPage />} />
              <Route path="/ai-password-manager" element={<AiPasswordManagerPage />} />
              <Route path="/ai-powered-devops" element={<AiPoweredDevopsPage />} />
              <Route path="/ai-powered-email-analyzer" element={<AiPoweredEmailAnalyzerPage />} />
              <Route path="/ai-predictive-analytics" element={<AiPredictiveAnalyticsPage />} />
              <Route path="/ai-predictive-maintenance" element={<AiPredictiveMaintenancePage />} />
              <Route path="/ai-predictive-modeling" element={<AiPredictiveModelingPage />} />
              <Route path="/ai-project-management" element={<AiProjectManagementPage />} />
              <Route path="/ai-project-management-pro" element={<AiProjectManagementProPage />} />
              <Route path="/ai-project-manager" element={<AiProjectManagerPage />} />
              <Route path="/ai-quality-assurance" element={<AiQualityAssurancePage />} />
              <Route path="/ai-quantum-computing" element={<AiQuantumComputingPage />} />
              <Route path="/ai-quantum-computing-simulator" element={<AiQuantumComputingSimulatorPage />} />
              <Route path="/ai-quantum-financial-oracle" element={<AiQuantumFinancialOraclePage />} />
              <Route path="/ai-quantum-optimization" element={<AiQuantumOptimizationPage />} />
              <Route path="/ai-quantum-task-optimizer" element={<AiQuantumTaskOptimizerPage />} />
              <Route path="/ai-real-estate" element={<AiRealEstatePage />} />
              <Route path="/ai-recommendation-engine" element={<AiRecommendationEnginePage />} />
              <Route path="/ai-recruitment-assistant" element={<AiRecruitmentAssistantPage />} />
              <Route path="/ai-robotics" element={<AiRoboticsPage />} />
              <Route path="/ai-sales-automation" element={<AiSalesAutomationPage />} />
              <Route path="/ai-scheduler" element={<AiSchedulerPage />} />
              <Route path="/ai-security-monitor" element={<AiSecurityMonitorPage />} />
              <Route path="/ai-sentiment-analysis" element={<AiSentimentAnalysisPage />} />
              <Route path="/ai-sentiment-analyzer" element={<AiSentimentAnalyzerPage />} />
              <Route path="/ai-seo-optimizer" element={<AiSeoOptimizerPage />} />
              <Route path="/ai-services" element={<AiServicesPage />} />
              <Route path="/ai-services/business-intelligence" element={<AiServicesBusinessIntelligencePage />} />
              <Route path="/ai-services/content-generation" element={<AiServicesContentGenerationPage />} />
              <Route path="/ai-services/customer-experience" element={<AiServicesCustomerExperiencePage />} />
              <Route path="/ai-services/document-processing" element={<AiServicesDocumentProcessingPage />} />
              <Route path="/ai-services/energy-management" element={<AiServicesEnergyManagementPage />} />
              <Route path="/ai-services/fraud-detection" element={<AiServicesFraudDetectionPage />} />
              <Route path="/ai-services/hr-analytics" element={<AiServicesHrAnalyticsPage />} />
              <Route path="/ai-services/marketing-automation" element={<AiServicesMarketingAutomationPage />} />
              <Route path="/ai-services/predictive-maintenance" element={<AiServicesPredictiveMaintenancePage />} />
              <Route path="/ai-services/process-automation" element={<AiServicesProcessAutomationPage />} />
              <Route path="/ai-services/quality-assurance" element={<AiServicesQualityAssurancePage />} />
              <Route path="/ai-services/supply-chain" element={<AiServicesSupplyChainPage />} />
              <Route path="/ai-smart-calendar" element={<AiSmartCalendarPage />} />
              <Route path="/ai-smart-city-solutions" element={<AiSmartCitySolutionsPage />} />
              <Route path="/ai-smart-contract-auditor" element={<AiSmartContractAuditorPage />} />
              <Route path="/ai-smart-home-controller" element={<AiSmartHomeControllerPage />} />
              <Route path="/ai-smart-invoice" element={<AiSmartInvoicePage />} />
              <Route path="/ai-smart-scheduler" element={<AiSmartSchedulerPage />} />
              <Route path="/ai-social-media-manager" element={<AiSocialMediaManagerPage />} />
              <Route path="/ai-social-media-scheduler" element={<AiSocialMediaSchedulerPage />} />
              <Route path="/ai-social-scheduler" element={<AiSocialSchedulerPage />} />
              <Route path="/ai-solutions" element={<AiSolutionsPage />} />
              <Route path="/ai-space-mission-optimizer" element={<AiSpaceMissionOptimizerPage />} />
              <Route path="/ai-space-technology" element={<AiSpaceTechnologyPage />} />
              <Route path="/ai-space-technology-pro" element={<AiSpaceTechnologyProPage />} />
              <Route path="/ai-speech-synthesis" element={<AiSpeechSynthesisPage />} />
              <Route path="/ai-stock-portfolio-manager" element={<AiStockPortfolioManagerPage />} />
              <Route path="/ai-supply-chain" element={<AiSupplyChainPage />} />
              <Route path="/ai-supply-chain-ai" element={<AiSupplyChainAiPage />} />
              <Route path="/ai-supply-chain-optimization-pro" element={<AiSupplyChainOptimizationProPage />} />
              <Route path="/ai-supply-chain-optimizer" element={<AiSupplyChainOptimizerPage />} />
              <Route path="/ai-task-manager" element={<AiTaskManagerPage />} />
              <Route path="/ai-telepathic-interface" element={<AiTelepathicInterfacePage />} />
              <Route path="/ai-time-tracker" element={<AiTimeTrackerPage />} />
              <Route path="/ai-translation-service" element={<AiTranslationServicePage />} />
              <Route path="/ai-translation-services" element={<AiTranslationServicesPage />} />
              <Route path="/ai-transportation" element={<AiTransportationPage />} />
              <Route path="/ai-video-analysis" element={<AiVideoAnalysisPage />} />
              <Route path="/ai-video-editor" element={<AiVideoEditorPage />} />
              <Route path="/ai-video-generation" element={<AiVideoGenerationPage />} />
              <Route path="/ai-video-generator" element={<AiVideoGeneratorPage />} />
              <Route path="/ai-vision" element={<AiVisionPage />} />
              <Route path="/ai-voice-assistant" element={<AiVoiceAssistantPage />} />
              <Route path="/ai-voice-assistant-pro" element={<AiVoiceAssistantProPage />} />
              <Route path="/ai-voice-cloning" element={<AiVoiceCloningPage />} />
              <Route path="/ai-voice-cloning-studio" element={<AiVoiceCloningStudioPage />} />
              <Route path="/ai-voice-processing" element={<AiVoiceProcessingPage />} />
              <Route path="/ai-voice-solutions" element={<AiVoiceSolutionsPage />} />
              <Route path="/ai-voice-synthesis" element={<AiVoiceSynthesisPage />} />
              <Route path="/ai-website-builder" element={<AiWebsiteBuilderPage />} />
              <Route path="/ai-workflow-automation" element={<AiWorkflowAutomationPage />} />
              <Route path="/ai-writing-assistant" element={<AiWritingAssistantPage />} />
              <Route path="/analytics" element={<AnalyticsPage />} />
              <Route path="/analytics-tools" element={<AnalyticsToolsPage />} />
              <Route path="/api" element={<ApiPage />} />
              <Route path="/api-development" element={<ApiDevelopmentPage />} />
              <Route path="/api-development-advanced" element={<ApiDevelopmentAdvancedPage />} />
              <Route path="/api-docs" element={<ApiDocsPage />} />
              <Route path="/ar-vr-development" element={<ArVrDevelopmentPage />} />
              <Route path="/ar-vr-platform" element={<ArVrPlatformPage />} />
              <Route path="/ar-vr-solutions" element={<ArVrSolutionsPage />} />
              <Route path="/asset-management" element={<AssetManagementPage />} />
              <Route path="/automation" element={<AutomationPage />} />
              <Route path="/autonomous-systems" element={<AutonomousSystemsPage />} />
              <Route path="/backup-recovery" element={<BackupRecoveryPage />} />
              <Route path="/blockchain" element={<BlockchainPage />} />
              <Route path="/blockchain-development" element={<BlockchainDevelopmentPage />} />
              <Route path="/blockchain-integration-services" element={<BlockchainIntegrationServicesPage />} />
              <Route path="/blockchain-web3" element={<BlockchainWeb3Page />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/business-apps" element={<BusinessAppsPage />} />
              <Route path="/business-intelligence" element={<BusinessIntelligencePage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/cloud-consulting" element={<CloudConsultingPage />} />
              <Route path="/cloud-cost-optimization" element={<CloudCostOptimizationPage />} />
              <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
              <Route path="/cloud-infrastructure-management" element={<CloudInfrastructureManagementPage />} />
              <Route path="/cloud-infrastructure-manager" element={<CloudInfrastructureManagerPage />} />
              <Route path="/cloud-migration" element={<CloudMigrationPage />} />
              <Route path="/cloud-migration-advanced" element={<CloudMigrationAdvancedPage />} />
              <Route path="/cloud-migration-pro" element={<CloudMigrationProPage />} />
              <Route path="/cloud-migration-services" element={<CloudMigrationServicesPage />} />
              <Route path="/cloud-native-development" element={<CloudNativeDevelopmentPage />} />
              <Route path="/cloud-native-security" element={<CloudNativeSecurityPage />} />
              <Route path="/cloud-security" element={<CloudSecurityPage />} />
              <Route path="/cloud-services" element={<CloudServicesPage />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/compliance" element={<CompliancePage />} />
              <Route path="/compliance-automation" element={<ComplianceAutomationPage />} />
              <Route path="/computer-vision" element={<ComputerVisionPage />} />
              <Route path="/consultation" element={<ConsultationPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/cookie-policy" element={<CookiePolicyPage />} />
              <Route path="/cookies" element={<CookiesPage />} />
              <Route path="/crm-lite" element={<CrmLitePage />} />
              <Route path="/custom-development" element={<CustomDevelopmentPage />} />
              <Route path="/custom-software" element={<CustomSoftwarePage />} />
              <Route path="/customer-relationship-manager" element={<CustomerRelationshipManagerPage />} />
              <Route path="/cybersecurity" element={<CybersecurityPage />} />
              <Route path="/cybersecurity-advanced" element={<CybersecurityAdvancedPage />} />
              <Route path="/cybersecurity-audit" element={<CybersecurityAuditPage />} />
              <Route path="/cybersecurity-consulting" element={<CybersecurityConsultingPage />} />
              <Route path="/cybersecurity-solutions" element={<CybersecuritySolutionsPage />} />
              <Route path="/cybersecurity-suite" element={<CybersecuritySuitePage />} />
              <Route path="/data-analytics" element={<DataAnalyticsPage />} />
              <Route path="/data-analytics-bi" element={<DataAnalyticsBiPage />} />
              <Route path="/data-center" element={<DataCenterPage />} />
              <Route path="/data-center-services" element={<DataCenterServicesPage />} />
              <Route path="/data-center-solutions" element={<DataCenterSolutionsPage />} />
              <Route path="/data-engineering" element={<DataEngineeringPage />} />
              <Route path="/data-protection" element={<DataProtectionPage />} />
              <Route path="/data-visualization" element={<DataVisualizationPage />} />
              <Route path="/database" element={<DatabasePage />} />
              <Route path="/database-management" element={<DatabaseManagementPage />} />
              <Route path="/database-services" element={<DatabaseServicesPage />} />
              <Route path="/demo" element={<DemoPage />} />
              <Route path="/developer-tools" element={<DeveloperToolsPage />} />
              <Route path="/devops" element={<DevopsPage />} />
              <Route path="/devops-advanced" element={<DevopsAdvancedPage />} />
              <Route path="/devops-cicd" element={<DevopsCicdPage />} />
              <Route path="/devops-services" element={<DevopsServicesPage />} />
              <Route path="/devops-solutions" element={<DevopsSolutionsPage />} />
              <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
              <Route path="/digital-twin-platform" element={<DigitalTwinPlatformPage />} />
              <Route path="/disaster-recovery" element={<DisasterRecoveryPage />} />
              <Route path="/disaster-recovery-advanced" element={<DisasterRecoveryAdvancedPage />} />
              <Route path="/docs" element={<DocsPage />} />
              <Route path="/e-commerce-development" element={<ECommerceDevelopmentPage />} />
              <Route path="/edge-computing" element={<EdgeComputingPage />} />
              <Route path="/email-marketing-automation" element={<EmailMarketingAutomationPage />} />
              <Route path="/email-marketing-platform" element={<EmailMarketingPlatformPage />} />
              <Route path="/email-optimizer" element={<EmailOptimizerPage />} />
              <Route path="/employee-time-tracker" element={<EmployeeTimeTrackerPage />} />
              <Route path="/enterprise" element={<EnterprisePage />} />
              <Route path="/enterprise-integration" element={<EnterpriseIntegrationPage />} />
              <Route path="/enterprise-security" element={<EnterpriseSecurityPage />} />
              <Route path="/enterprise-solutions" element={<EnterpriseSolutionsPage />} />
              <Route path="/expense-tracker" element={<ExpenseTrackerPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/financial-it" element={<FinancialItPage />} />
              <Route path="/financial-reporting-tool" element={<FinancialReportingToolPage />} />
              <Route path="/gdpr" element={<GdprPage />} />
              <Route path="/gdpr-compliance" element={<GdprCompliancePage />} />
              <Route path="/health" element={<HealthPage />} />
              <Route path="/healthcare-it" element={<HealthcareItPage />} />
              <Route path="/help" element={<HelpPage />} />
              <Route path="/infrastructure-management" element={<InfrastructureManagementPage />} />
              <Route path="/innovation-labs" element={<InnovationLabsPage />} />
              <Route path="/intelligent-database-migration" element={<IntelligentDatabaseMigrationPage />} />
              <Route path="/intelligent-email-infrastructure" element={<IntelligentEmailInfrastructurePage />} />
              <Route path="/inventory-management-system" element={<InventoryManagementSystemPage />} />
              <Route path="/investors" element={<InvestorsPage />} />
              <Route path="/iot" element={<IotPage />} />
              <Route path="/iot-development" element={<IotDevelopmentPage />} />
              <Route path="/iot-edge" element={<IotEdgePage />} />
              <Route path="/iot-edge-computing" element={<IotEdgeComputingPage />} />
              <Route path="/iot-integration" element={<IotIntegrationPage />} />
              <Route path="/iot-platform" element={<IotPlatformPage />} />
              <Route path="/iot-solutions" element={<IotSolutionsPage />} />
              <Route path="/it-asset-management" element={<ItAssetManagementPage />} />
              <Route path="/it-consulting" element={<ItConsultingPage />} />
              <Route path="/it-infrastructure" element={<ItInfrastructurePage />} />
              <Route path="/it-infrastructure-design" element={<ItInfrastructureDesignPage />} />
              <Route path="/it-infrastructure-solutions" element={<ItInfrastructureSolutionsPage />} />
              <Route path="/it-performance" element={<ItPerformancePage />} />
              <Route path="/it-project-management" element={<ItProjectManagementPage />} />
              <Route path="/it-security-services" element={<ItSecurityServicesPage />} />
              <Route path="/it-services" element={<ItServicesPage />} />
              <Route path="/it-services/cloud-migration" element={<ItServicesCloudMigrationPage />} />
              <Route path="/it-services/cybersecurity-audit" element={<ItServicesCybersecurityAuditPage />} />
              <Route path="/it-support" element={<ItSupportPage />} />
              <Route path="/it-training" element={<ItTrainingPage />} />
              <Route path="/landing-page-builder" element={<LandingPageBuilderPage />} />
              <Route path="/machine-learning" element={<MachineLearningPage />} />
              <Route path="/machine-learning-ops" element={<MachineLearningOpsPage />} />
              <Route path="/managed-it" element={<ManagedItPage />} />
              <Route path="/managed-services" element={<ManagedServicesPage />} />
              <Route path="/marketing-tools" element={<MarketingToolsPage />} />
              <Route path="/micro-saas" element={<MicroSaasPage />} />
              <Route path="/micro-saas-services" element={<MicroSaasServicesPage />} />
              <Route path="/micro-saas-services/ai-analytics-dashboard" element={<MicroSaasServicesAiAnalyticsDashboardPage />} />
              <Route path="/micro-saas-services/ai-chatbot-builder" element={<MicroSaasServicesAiChatbotBuilderPage />} />
              <Route path="/micro-saas-services/ai-content-generator" element={<MicroSaasServicesAiContentGeneratorPage />} />
              <Route path="/micro-saas-services/ai-email-assistant" element={<MicroSaasServicesAiEmailAssistantPage />} />
              <Route path="/micro-saas-services/ai-lead-generation" element={<MicroSaasServicesAiLeadGenerationPage />} />
              <Route path="/micro-saas/ai-content-writer" element={<MicroSaasAiContentWriterPage />} />
              <Route path="/micro-saas/ai-content-writer-pro" element={<MicroSaasAiContentWriterProPage />} />
              <Route path="/micro-saas/ai-customer-support-chatbot" element={<MicroSaasAiCustomerSupportChatbotPage />} />
              <Route path="/micro-saas/ai-email-marketing-automation" element={<MicroSaasAiEmailMarketingAutomationPage />} />
              <Route path="/micro-saas/ai-expense-tracker" element={<MicroSaasAiExpenseTrackerPage />} />
              <Route path="/micro-saas/ai-inventory-manager" element={<MicroSaasAiInventoryManagerPage />} />
              <Route path="/micro-saas/ai-project-manager" element={<MicroSaasAiProjectManagerPage />} />
              <Route path="/micro-saas/ai-social-media-scheduler" element={<MicroSaasAiSocialMediaSchedulerPage />} />
              <Route path="/micro-saas/analytics-dashboard" element={<MicroSaasAnalyticsDashboardPage />} />
              <Route path="/micro-saas/appointment-scheduler" element={<MicroSaasAppointmentSchedulerPage />} />
              <Route path="/micro-saas/chat-analytics" element={<MicroSaasChatAnalyticsPage />} />
              <Route path="/micro-saas/content-generator" element={<MicroSaasContentGeneratorPage />} />
              <Route path="/micro-saas/contract-manager" element={<MicroSaasContractManagerPage />} />
              <Route path="/micro-saas/document-processor" element={<MicroSaasDocumentProcessorPage />} />
              <Route path="/micro-saas/email-marketing" element={<MicroSaasEmailMarketingPage />} />
              <Route path="/micro-saas/email-signature" element={<MicroSaasEmailSignaturePage />} />
              <Route path="/micro-saas/employee-directory" element={<MicroSaasEmployeeDirectoryPage />} />
              <Route path="/micro-saas/expense-tracker" element={<MicroSaasExpenseTrackerPage />} />
              <Route path="/micro-saas/inventory-management" element={<MicroSaasInventoryManagementPage />} />
              <Route path="/micro-saas/lead-scoring" element={<MicroSaasLeadScoringPage />} />
              <Route path="/micro-saas/seo-optimizer" element={<MicroSaasSeoOptimizerPage />} />
              <Route path="/micro-saas/social-manager" element={<MicroSaasSocialManagerPage />} />
              <Route path="/micro-saas/support-bot" element={<MicroSaasSupportBotPage />} />
              <Route path="/mobile-app-development" element={<MobileAppDevelopmentPage />} />
              <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
              <Route path="/network-design" element={<NetworkDesignPage />} />
              <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} />
              <Route path="/network-security" element={<NetworkSecurityPage />} />
              <Route path="/network-solutions" element={<NetworkSolutionsPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/nlp" element={<NlpPage />} />
              <Route path="/not-found" element={<NotFoundPage />} />
              <Route path="/offline" element={<OfflinePage />} />
              <Route path="/page.tsx" element={<Page.tsxPage />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="/penetration-testing" element={<PenetrationTestingPage />} />
              <Route path="/performance-optimization" element={<PerformanceOptimizationPage />} />
              <Route path="/press" element={<PressPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/process-automation" element={<ProcessAutomationPage />} />
              <Route path="/productivity" element={<ProductivityPage />} />
              <Route path="/project-management-pro" element={<ProjectManagementProPage />} />
              <Route path="/project-management-tool" element={<ProjectManagementToolPage />} />
              <Route path="/quantum-ai" element={<QuantumAiPage />} />
              <Route path="/quantum-computing" element={<QuantumComputingPage />} />
              <Route path="/quantum-computing-solutions" element={<QuantumComputingSolutionsPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/robotics" element={<RoboticsPage />} />
              <Route path="/robotics-integration" element={<RoboticsIntegrationPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/security" element={<SecurityPage />} />
              <Route path="/security-audit" element={<SecurityAuditPage />} />
              <Route path="/security-automation" element={<SecurityAutomationPage />} />
              <Route path="/security-monitoring" element={<SecurityMonitoringPage />} />
              <Route path="/security-monitoring-suite" element={<SecurityMonitoringSuitePage />} />
              <Route path="/seo-optimizer" element={<SeoOptimizerPage />} />
              <Route path="/server-management" element={<ServerManagementPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services-advertising" element={<ServicesAdvertisingPage />} />
              <Route path="/sitemap" element={<SitemapPage />} />
              <Route path="/sitemap.xml" element={<Sitemap.xmlPage />} />
              <Route path="/sla" element={<SlaPage />} />
              <Route path="/smart-analytics" element={<SmartAnalyticsPage />} />
              <Route path="/smart-cities" element={<SmartCitiesPage />} />
              <Route path="/smart-city-infrastructure" element={<SmartCityInfrastructurePage />} />
              <Route path="/smart-contract-security-audit" element={<SmartContractSecurityAuditPage />} />
              <Route path="/smart-expense-categorizer" element={<SmartExpenseCategorizerPage />} />
              <Route path="/smart-inventory-optimizer" element={<SmartInventoryOptimizerPage />} />
              <Route path="/social-media-scheduler" element={<SocialMediaSchedulerPage />} />
              <Route path="/software-development" element={<SoftwareDevelopmentPage />} />
              <Route path="/specialized-services" element={<SpecializedServicesPage />} />
              <Route path="/status" element={<StatusPage />} />
              <Route path="/support" element={<SupportPage />} />
              <Route path="/system-admin" element={<SystemAdminPage />} />
              <Route path="/system-administration" element={<SystemAdministrationPage />} />
              <Route path="/system-integration" element={<SystemIntegrationPage />} />
              <Route path="/system-status" element={<SystemStatusPage />} />
              <Route path="/task-automation-workflow" element={<TaskAutomationWorkflowPage />} />
              <Route path="/task-manager-pro" element={<TaskManagerProPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/technology-consulting" element={<TechnologyConsultingPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/terms-of-service" element={<TermsOfServicePage />} />
              <Route path="/test-simple" element={<TestSimplePage />} />
              <Route path="/training" element={<TrainingPage />} />
              <Route path="/tutorials" element={<TutorialsPage />} />
              <Route path="/web-development" element={<WebDevelopmentPage />} />
              <Route path="/webinars" element={<WebinarsPage />} />
              <Route path="/website-analytics-tool" element={<WebsiteAnalyticsToolPage />} />
              <Route path="/whitepapers" element={<WhitepapersPage />} />
              <Route path="/workflow-automation" element={<WorkflowAutomationPage />} />
              <Route path="/zion-ai-accounting-assistant" element={<ZionAiAccountingAssistantPage />} />
              <Route path="/zion-ai-accounting-suite" element={<ZionAiAccountingSuitePage />} />
              <Route path="/zion-ai-analytics-pro" element={<ZionAiAnalyticsProPage />} />
              <Route path="/zion-ai-business-intelligence-pro" element={<ZionAiBusinessIntelligenceProPage />} />
              <Route path="/zion-ai-code-reviewer" element={<ZionAiCodeReviewerPage />} />
              <Route path="/zion-ai-content-moderation" element={<ZionAiContentModerationPage />} />
              <Route path="/zion-ai-content-moderator" element={<ZionAiContentModeratorPage />} />
              <Route path="/zion-ai-content-studio-pro" element={<ZionAiContentStudioProPage />} />
              <Route path="/zion-ai-contract-analyzer" element={<ZionAiContractAnalyzerPage />} />
              <Route path="/zion-ai-crm-pro" element={<ZionAiCrmProPage />} />
              <Route path="/zion-ai-customer-churn-predictor" element={<ZionAiCustomerChurnPredictorPage />} />
              <Route path="/zion-ai-customer-insights" element={<ZionAiCustomerInsightsPage />} />
              <Route path="/zion-ai-customer-sentiment-tracker" element={<ZionAiCustomerSentimentTrackerPage />} />
              <Route path="/zion-ai-customer-sentiment-tracker-pro" element={<ZionAiCustomerSentimentTrackerProPage />} />
              <Route path="/zion-ai-customer-service-pro" element={<ZionAiCustomerServiceProPage />} />
              <Route path="/zion-ai-customer-support-pro" element={<ZionAiCustomerSupportProPage />} />
              <Route path="/zion-ai-cybersecurity-suite-pro" element={<ZionAiCybersecuritySuiteProPage />} />
              <Route path="/zion-ai-data-cleaner" element={<ZionAiDataCleanerPage />} />
              <Route path="/zion-ai-devops-automation-pro" element={<ZionAiDevopsAutomationProPage />} />
              <Route path="/zion-ai-document-ai" element={<ZionAiDocumentAiPage />} />
              <Route path="/zion-ai-email-analyzer" element={<ZionAiEmailAnalyzerPage />} />
              <Route path="/zion-ai-email-analyzer-pro" element={<ZionAiEmailAnalyzerProPage />} />
              <Route path="/zion-ai-email-assistant" element={<ZionAiEmailAssistantPage />} />
              <Route path="/zion-ai-energy-manager" element={<ZionAiEnergyManagerPage />} />
              <Route path="/zion-ai-financial-forecaster" element={<ZionAiFinancialForecasterPage />} />
              <Route path="/zion-ai-fraud-detector" element={<ZionAiFraudDetectorPage />} />
              <Route path="/zion-ai-inventory-manager" element={<ZionAiInventoryManagerPage />} />
              <Route path="/zion-ai-invoice-generator" element={<ZionAiInvoiceGeneratorPage />} />
              <Route path="/zion-ai-marketing-automation" element={<ZionAiMarketingAutomationPage />} />
              <Route path="/zion-ai-marketing-automation-pro" element={<ZionAiMarketingAutomationProPage />} />
              <Route path="/zion-ai-meeting-assistant" element={<ZionAiMeetingAssistantPage />} />
              <Route path="/zion-ai-performance-optimizer" element={<ZionAiPerformanceOptimizerPage />} />
              <Route path="/zion-ai-predictive-maintenance" element={<ZionAiPredictiveMaintenancePage />} />
              <Route path="/zion-ai-project-manager-pro" element={<ZionAiProjectManagerProPage />} />
              <Route path="/zion-ai-recruitment-pro" element={<ZionAiRecruitmentProPage />} />
              <Route path="/zion-ai-seo-optimizer" element={<ZionAiSeoOptimizerPage />} />
              <Route path="/zion-ai-social-media-manager" element={<ZionAiSocialMediaManagerPage />} />
              <Route path="/zion-ai-supply-chain-optimizer" element={<ZionAiSupplyChainOptimizerPage />} />
              <Route path="/zion-ai-survey-builder" element={<ZionAiSurveyBuilderPage />} />
              <Route path="/zion-ai-task-scheduler" element={<ZionAiTaskSchedulerPage />} />
              <Route path="/zion-ai-translator-pro" element={<ZionAiTranslatorProPage />} />
              <Route path="/zion-ai-video-editor" element={<ZionAiVideoEditorPage />} />
              <Route path="/zion-ai-video-generator" element={<ZionAiVideoGeneratorPage />} />
              <Route path="/zion-ai-voice-assistant-pro" element={<ZionAiVoiceAssistantProPage />} />
              <Route path="/zion-analytics-pro" element={<ZionAnalyticsProPage />} />
              <Route path="/zion-chat-ai" element={<ZionChatAiPage />} />
              <Route path="/zion-cloud-vault" element={<ZionCloudVaultPage />} />
              <Route path="/zion-cloud-vault-pro" element={<ZionCloudVaultProPage />} />
              <Route path="/zion-compliance-manager" element={<ZionComplianceManagerPage />} />
              <Route path="/zion-content-studio" element={<ZionContentStudioPage />} />
              <Route path="/zion-crm-intelligence" element={<ZionCrmIntelligencePage />} />
              <Route path="/zion-customer-insights" element={<ZionCustomerInsightsPage />} />
              <Route path="/zion-data-sync" element={<ZionDataSyncPage />} />
              <Route path="/zion-email-automation" element={<ZionEmailAutomationPage />} />
              <Route path="/zion-hr-assistant-pro" element={<ZionHrAssistantProPage />} />
              <Route path="/zion-inventory-smart" element={<ZionInventorySmartPage />} />
              <Route path="/zion-invoice-genius" element={<ZionInvoiceGeniusPage />} />
              <Route path="/zion-lead-magnet" element={<ZionLeadMagnetPage />} />
              <Route path="/zion-performance-monitor" element={<ZionPerformanceMonitorPage />} />
              <Route path="/zion-project-master" element={<ZionProjectMasterPage />} />
              <Route path="/zion-security-shield" element={<ZionSecurityShieldPage />} />
              <Route path="/zion-security-shield-pro" element={<ZionSecurityShieldProPage />} />
              <Route path="/zion-smart-expense-categorizer" element={<ZionSmartExpenseCategorizerPage />} />
              <Route path="/zion-smart-expense-categorizer-pro" element={<ZionSmartExpenseCategorizerProPage />} />
              <Route path="/zion-smart-inventory-optimizer" element={<ZionSmartInventoryOptimizerPage />} />
              <Route path="/zion-smart-inventory-optimizer-pro" element={<ZionSmartInventoryOptimizerProPage />} />
              <Route path="/zion-social-scheduler" element={<ZionSocialSchedulerPage />} />
              <Route path="/zion-workflow-automation" element={<ZionWorkflowAutomationPage />} />
            </Routes>
            </Suspense>
          </AccessibilityEnhancer>
        </ErrorBoundary>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;