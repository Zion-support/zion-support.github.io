import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import FuturisticNavigation from './app/components/FuturisticNavigation'
import FuturisticFooter from './app/components/FuturisticFooter'
import ErrorBoundary from './app/components/ErrorBoundary'
import OptimizedLoading from './app/components/OptimizedLoading'
import HomePage from './app/page'
import AboutPage from './app/about/page'
import ContactPage from './app/contact/page'
import AIServicesPage from './app/ai-services/page'
import PricingPage from './app/pricing/page'
import BlogPage from './app/blog/page'
import NewsPage from './app/news/page'
import SupportPage from './app/support/page'
import CareersPage from './app/careers/page'
import InvestorsPage from './app/investors/page'
import StatusPage from './app/status/page'
import SystemStatusPage from './app/system-status/page'
import NotFoundPage from './app/not-found'
import MicroSaasPage from './app/micro-saas/page'
import MicroSaasAnalyticsDashboardPage from './app/micro-saas/analytics-dashboard/page'
import MicroSaasAppointmentSchedulerPage from './app/micro-saas/appointment-scheduler/page'
import MicroSaasChatAnalyticsPage from './app/micro-saas/chat-analytics/page'
import MicroSaasContentGeneratorPage from './app/micro-saas/content-generator/page'
import MicroSaasDocumentProcessorPage from './app/micro-saas/document-processor/page'
import MicroSaasEmailMarketingPage from './app/micro-saas/email-marketing/page'
import MicroSaasExpenseTrackerPage from './app/micro-saas/expense-tracker/page'
import MicroSaasInventoryManagementPage from './app/micro-saas/inventory-management/page'
import MicroSaasLeadScoringPage from './app/micro-saas/lead-scoring/page'
import MicroSaasSeoOptimizerPage from './app/micro-saas/seo-optimizer/page'
import MicroSaasSocialManagerPage from './app/micro-saas/social-manager/page'
import MicroSaasSupportBotPage from './app/micro-saas/support-bot/page'
import MicroSaasAiCustomerInsightsPage from './app/micro-saas/ai-customer-insights/page'
import MicroSaasAiWorkflowAutomationPage from './app/micro-saas/ai-workflow-automation/page'
import MicroSaasAiFinancialForecastingPage from './app/micro-saas/ai-financial-forecasting/page'
import AIAutomatedReportingPage from './app/ai-automated-reporting/page'
import AIChatbotBuilderPage from './app/ai-chatbot-builder/page'
import AIExpenseTrackerPage from './app/ai-expense-tracker/page'
import AIPasswordManagerPage from './app/ai-password-manager/page'
import AITaskManagerPage from './app/ai-task-manager/page'
import AiPredictiveMaintenancePage from './app/ai-services/ai-predictive-maintenance/page'
import AiFraudDetectionPage from './app/ai-services/ai-fraud-detection/page'
import BusinessIntelligencePage from './app/business-intelligence/page'
import ITConsultingPage from './app/it-consulting/page'
import ITServicesPage from './app/it-services/page'
import CybersecurityPage from './app/cybersecurity/page'
import DataCenterPage from './app/data-center/page'
import DatabaseServicesPage from './app/database-services/page'
import DatabasePage from './app/database/page'
import DevOpsPage from './app/devops/page'
import EnterprisePage from './app/enterprise/page'
import EnterpriseSecurityPage from './app/enterprise-security/page'
import GDPRPage from './app/gdpr/page'
import IOTEdgeComputingPage from './app/iot-edge-computing/page'
import RoboticsPage from './app/robotics/page'
import SmartCityInfrastructurePage from './app/smart-city-infrastructure/page'
import TaskManagerProPage from './app/task-manager-pro/page'
import TrainingPage from './app/training/page'
import ServicesAdvertisingPage from './app/services-advertising/page'
import FiveGImplementationPage from './app/5g-implementation/page'
import DevOpsSolutionsPage from './app/devops-solutions/page'
import SystemIntegrationPage from './app/system-integration/page'
import AIContentManagementPage from './app/ai-content-management/page'
import PressPage from './app/press/page'
import CookiePolicyPage from './app/cookie-policy/page'
import GDPRCompliancePage from './app/gdpr-compliance/page'

import AccessibilityPage from './app/accessibility/page'
import AccessibilityPagePage from './app/accessibility-page/page'
import AiAccountingAssistantPage from './app/ai-accounting-assistant/page'
import AiAgriculturalIntelligenceProPage from './app/ai-agricultural-intelligence-pro/page'
import AiAnalyticsPage from './app/ai-analytics/page'
import AiApiManagementPage from './app/ai-api-management/page'
import AiApiManagerPage from './app/ai-api-manager/page'
import AiAutomationPage from './app/ai-automation/page'
import AiAutonomousSystemsPage from './app/ai-autonomous-systems/page'
import AiBlockchainAnalyticsPage from './app/ai-blockchain-analytics/page'
import AiBlockchainSolutionsPage from './app/ai-blockchain-solutions/page'
import AiBusinessIntelligencePage from './app/ai-business-intelligence/page'
import AiClimatePredictionEnginePage from './app/ai-climate-prediction-engine/page'
import AiClimateSolutionsProPage from './app/ai-climate-solutions-pro/page'
import AiCloudInfrastructurePage from './app/ai-cloud-infrastructure/page'
import AiCodeAssistantPage from './app/ai-code-assistant/page'
import AiCodeGenerationPage from './app/ai-code-generation/page'
import AiCodeSecurityAuditorPage from './app/ai-code-security-auditor/page'
import AiComputerVisionPage from './app/ai-computer-vision/page'
import AiContentDeliveryNetworkPage from './app/ai-content-delivery-network/page'
import AiContentGenerationPage from './app/ai-content-generation/page'
import AiContentGenerationProPage from './app/ai-content-generation-pro/page'
import AiContentModerationPage from './app/ai-content-moderation/page'
import AiContentStudioPage from './app/ai-content-studio/page'
import AiContentWriterPage from './app/ai-content-writer/page'
import AiConversationalAiPage from './app/ai-conversational-ai/page'
import AiConversationAnalyticsPage from './app/ai-conversation-analytics/page'
import AiCustomerChurnPage from './app/ai-customer-churn/page'
import AiCustomerServicePage from './app/ai-customer-service/page'
import AiCustomerSupportBotPage from './app/ai-customer-support-bot/page'
import AiCustomerSupportChatbotPage from './app/ai-customer-support-chatbot/page'
import AiCyberDefenseMatrixPage from './app/ai-cyber-defense-matrix/page'
import AiCybersecurityPage from './app/ai-cybersecurity/page'
import AiCybersecurityMonitorPage from './app/ai-cybersecurity-monitor/page'
import AiDataAnalyticsPage from './app/ai-data-analytics/page'
import AiDataVisualizationPage from './app/ai-data-visualization/page'
import AiDesignStudioPage from './app/ai-design-studio/page'
import AiDocumentIntelligencePage from './app/ai-document-intelligence/page'
import AiDocumentProcessorPage from './app/ai-document-processor/page'
import AiDocumentScannerPage from './app/ai-document-scanner/page'
import AiEcommerceAssistantPage from './app/ai-ecommerce-assistant/page'
import AiEcommerceOptimizerPage from './app/ai-ecommerce-optimizer/page'
import AiEcommerceSolutionsPage from './app/ai-ecommerce-solutions/page'
import AiEdgeComputingPage from './app/ai-edge-computing/page'
import AiEducationPage from './app/ai-education/page'
import AiEmailAssistantPage from './app/ai-email-assistant/page'
import AiEmailMarketingAutomationPage from './app/ai-email-marketing-automation/page'
import AiEnergyPage from './app/ai-energy/page'
import AiEnergyGridManagementProPage from './app/ai-energy-grid-management-pro/page'
import AiEnterpriseSolutionsPage from './app/ai-enterprise-solutions/page'
import AiFashionDesignPage from './app/ai-fashion-design/page'
import AiFinancialAdvisorPage from './app/ai-financial-advisor/page'
import AiFinancialAnalyzerPage from './app/ai-financial-analyzer/page'
import AiFinancialCrimeDetectionProPage from './app/ai-financial-crime-detection-pro/page'
import AiFinancialForecastingPage from './app/ai-financial-forecasting/page'
import AiFinancialPlannerPage from './app/ai-financial-planner/page'
import AiFinancialServicesPage from './app/ai-financial-services/page'
import AiFintechPage from './app/ai-fintech/page'
import AiFitnessCoachPage from './app/ai-fitness-coach/page'
import AiFraudDetectionPage from './app/ai-fraud-detection/page'
import AiHealthcarePage from './app/ai-healthcare/page'
import AiHealthcareDiagnosticsPage from './app/ai-healthcare-diagnostics/page'
import AiHealthcareSolutionsPage from './app/ai-healthcare-solutions/page'
import AiHealthTrackerPage from './app/ai-health-tracker/page'
import AiHolographicWorkspacePage from './app/ai-holographic-workspace/page'
import AiHrPage from './app/ai-hr/page'
import AiHrAssistantPage from './app/ai-hr-assistant/page'
import AiHrSolutionsPage from './app/ai-hr-solutions/page'
import AiImageRecognitionPage from './app/ai-image-recognition/page'
import AiInfrastructureMonitoringPage from './app/ai-infrastructure-monitoring/page'
import AiInsurancePage from './app/ai-insurance/page'
import AiIntegrationServicesPage from './app/ai-integration-services/page'
import AiInventoryManagementPage from './app/ai-inventory-management/page'
import AiInventoryManagerPage from './app/ai-inventory-manager/page'
import AiInvestmentOptimizerPage from './app/ai-investment-optimizer/page'
import AiIotAnalyticsPage from './app/ai-iot-analytics/page'
import AiKnowledgeManagementPage from './app/ai-knowledge-management/page'
import AiLeadGenerationPage from './app/ai-lead-generation/page'
import AiLeadScoringPage from './app/ai-lead-scoring/page'
import AiLearningPlatformPage from './app/ai-learning-platform/page'
import AiLegalPage from './app/ai-legal/page'
import AiLegalAssistantPage from './app/ai-legal-assistant/page'
import AiLegalResearchProPage from './app/ai-legal-research-pro/page'
import AiLoadTestingPage from './app/ai-load-testing/page'
import AiLogoDesignerPage from './app/ai-logo-designer/page'
import AiManufacturingPage from './app/ai-manufacturing/page'
import AiMarketingPage from './app/ai-marketing/page'
import AiMeetingAssistantPage from './app/ai-meeting-assistant/page'
import AiMentalHealthCompanionPage from './app/ai-mental-health-companion/page'
import AiMlPage from './app/ai-ml/page'
import AiMlPlatformPage from './app/ai-ml-platform/page'
import AiMobileAppBuilderPage from './app/ai-mobile-app-builder/page'
import AiMobileAppDevelopmentPage from './app/ai-mobile-app-development/page'
import AiMobileBuilderPage from './app/ai-mobile-builder/page'
import AiMusicCompositionPage from './app/ai-music-composition/page'
import AiNeuralInterfacePage from './app/ai-neural-interface/page'
import AiNeuralMemoryAssistantPage from './app/ai-neural-memory-assistant/page'
import AiNlpPage from './app/ai-nlp/page'
import AiOpsPage from './app/ai-ops/page'
import AiPredictiveAnalyticsPage from './app/ai-predictive-analytics/page'
import AiPredictiveMaintenancePage from './app/ai-predictive-maintenance/page'
import AiPredictiveModelingPage from './app/ai-predictive-modeling/page'
import AiProjectManagerPage from './app/ai-project-manager/page'
import AiQualityAssurancePage from './app/ai-quality-assurance/page'
import AiQuantumComputingPage from './app/ai-quantum-computing/page'
import AiQuantumComputingSimulatorPage from './app/ai-quantum-computing-simulator/page'
import AiQuantumFinancialOraclePage from './app/ai-quantum-financial-oracle/page'
import AiQuantumOptimizationPage from './app/ai-quantum-optimization/page'
import AiQuantumTaskOptimizerPage from './app/ai-quantum-task-optimizer/page'
import AiRealEstatePage from './app/ai-real-estate/page'
import AiRecommendationEnginePage from './app/ai-recommendation-engine/page'
import AiRecruitmentAssistantPage from './app/ai-recruitment-assistant/page'
import AiRoboticsPage from './app/ai-robotics/page'
import AiSalesAutomationPage from './app/ai-sales-automation/page'
import AiSchedulerPage from './app/ai-scheduler/page'
import AiSecurityMonitorPage from './app/ai-security-monitor/page'
import AiSentimentAnalysisPage from './app/ai-sentiment-analysis/page'
import AiSentimentAnalyzerPage from './app/ai-sentiment-analyzer/page'
import AiSeoOptimizerPage from './app/ai-seo-optimizer/page'
import AiServicesBusinessIntelligencePage from './app/ai-services/business-intelligence/page'
import AiServicesContentGenerationPage from './app/ai-services/content-generation/page'
import AiServicesCustomerExperiencePage from './app/ai-services/customer-experience/page'
import AiServicesDocumentProcessingPage from './app/ai-services/document-processing/page'
import AiServicesEnergyManagementPage from './app/ai-services/energy-management/page'
import AiServicesFraudDetectionPage from './app/ai-services/fraud-detection/page'
import AiServicesHrAnalyticsPage from './app/ai-services/hr-analytics/page'
import AiServicesMarketingAutomationPage from './app/ai-services/marketing-automation/page'
import AiServicesPredictiveMaintenancePage from './app/ai-services/predictive-maintenance/page'
import AiServicesProcessAutomationPage from './app/ai-services/process-automation/page'
import AiServicesQualityAssurancePage from './app/ai-services/quality-assurance/page'
import AiServicesSupplyChainPage from './app/ai-services/supply-chain/page'
import AiSmartCalendarPage from './app/ai-smart-calendar/page'
import AiSmartContractAuditorPage from './app/ai-smart-contract-auditor/page'
import AiSmartHomeControllerPage from './app/ai-smart-home-controller/page'
import AiSocialMediaSchedulerPage from './app/ai-social-media-scheduler/page'
import AiSolutionsPage from './app/ai-solutions/page'
import AiSpaceMissionOptimizerPage from './app/ai-space-mission-optimizer/page'
import AiSpaceTechnologyPage from './app/ai-space-technology/page'
import AiSpaceTechnologyProPage from './app/ai-space-technology-pro/page'
import AiSpeechSynthesisPage from './app/ai-speech-synthesis/page'
import AiStockPortfolioManagerPage from './app/ai-stock-portfolio-manager/page'
import AiSupplyChainPage from './app/ai-supply-chain/page'
import AiSupplyChainAiPage from './app/ai-supply-chain-ai/page'
import AiSupplyChainOptimizationProPage from './app/ai-supply-chain-optimization-pro/page'
import AiTelepathicInterfacePage from './app/ai-telepathic-interface/page'
import AiTimeTrackerPage from './app/ai-time-tracker/page'
import AiTransportationPage from './app/ai-transportation/page'
import AiVideoAnalysisPage from './app/ai-video-analysis/page'
import AiVideoEditorPage from './app/ai-video-editor/page'
import AiVideoGenerationPage from './app/ai-video-generation/page'
import AiVideoGeneratorPage from './app/ai-video-generator/page'
import AiVisionPage from './app/ai-vision/page'
import AiVoiceCloningPage from './app/ai-voice-cloning/page'
import AiVoiceCloningStudioPage from './app/ai-voice-cloning-studio/page'
import AiVoiceProcessingPage from './app/ai-voice-processing/page'
import AiVoiceSolutionsPage from './app/ai-voice-solutions/page'
import AiVoiceSynthesisPage from './app/ai-voice-synthesis/page'
import AiWebsiteBuilderPage from './app/ai-website-builder/page'
import AiWorkflowAutomationPage from './app/ai-workflow-automation/page'
import AiWritingAssistantPage from './app/ai-writing-assistant/page'
import AnalyticsPage from './app/analytics/page'
import AnalyticsToolsPage from './app/analytics-tools/page'
import ApiPage from './app/api/page'
import ApiDevelopmentAdvancedPage from './app/api-development-advanced/page'
import ArVrPlatformPage from './app/ar-vr-platform/page'
import ArVrSolutionsPage from './app/ar-vr-solutions/page'
import AutomationPage from './app/automation/page'
import AutonomousSystemsPage from './app/autonomous-systems/page'
import BackupRecoveryPage from './app/backup-recovery/page'
import BlockchainPage from './app/blockchain/page'
import BlockchainDevelopmentPage from './app/blockchain-development/page'
import BlockchainIntegrationServicesPage from './app/blockchain-integration-services/page'
import BlockchainWeb3Page from './app/blockchain-web3/page'
import BusinessAppsPage from './app/business-apps/page'
import CloudCostOptimizationPage from './app/cloud-cost-optimization/page'
import CloudInfrastructurePage from './app/cloud-infrastructure/page'
import CloudInfrastructureManagerPage from './app/cloud-infrastructure-manager/page'
import CloudMigrationAdvancedPage from './app/cloud-migration-advanced/page'
import CloudMigrationServicesPage from './app/cloud-migration-services/page'
import CloudNativeDevelopmentPage from './app/cloud-native-development/page'
import CloudNativeSecurityPage from './app/cloud-native-security/page'
import CloudSecurityPage from './app/cloud-security/page'
import CloudServicesPage from './app/cloud-services/page'
import CompliancePage from './app/compliance/page'
import ComplianceAutomationPage from './app/compliance-automation/page'
import ComputerVisionPage from './app/computer-vision/page'
import ConsultationPage from './app/consultation/page'
import CookiesPage from './app/cookies/page'
import CrmLitePage from './app/crm-lite/page'
import CustomDevelopmentPage from './app/custom-development/page'
import CybersecurityAdvancedPage from './app/cybersecurity-advanced/page'
import CybersecuritySolutionsPage from './app/cybersecurity-solutions/page'
import CybersecuritySuitePage from './app/cybersecurity-suite/page'
import DataAnalyticsPage from './app/data-analytics/page'
import DataEngineeringPage from './app/data-engineering/page'
import DataProtectionPage from './app/data-protection/page'
import DataVisualizationPage from './app/data-visualization/page'
import DemoPage from './app/demo/page'
import DeveloperToolsPage from './app/developer-tools/page'
import DevopsAdvancedPage from './app/devops-advanced/page'
import DevopsCicdPage from './app/devops-cicd/page'
import DigitalTransformationPage from './app/digital-transformation/page'
import DigitalTwinPlatformPage from './app/digital-twin-platform/page'
import DisasterRecoveryAdvancedPage from './app/disaster-recovery-advanced/page'
import ECommerceDevelopmentPage from './app/e-commerce-development/page'
import EdgeComputingPage from './app/edge-computing/page'
import EmailMarketingAutomationPage from './app/email-marketing-automation/page'
import EmailOptimizerPage from './app/email-optimizer/page'
import EnterpriseIntegrationPage from './app/enterprise-integration/page'
import EnterpriseSolutionsPage from './app/enterprise-solutions/page'
import ExpenseTrackerPage from './app/expense-tracker/page'
import FinancialItPage from './app/financial-it/page'
import HealthPage from './app/health/page'
import HealthcareItPage from './app/healthcare-it/page'
import InnovationLabsPage from './app/innovation-labs/page'
import IntelligentDatabaseMigrationPage from './app/intelligent-database-migration/page'
import IntelligentEmailInfrastructurePage from './app/intelligent-email-infrastructure/page'
import IotPage from './app/iot/page'
import IotDevelopmentPage from './app/iot-development/page'
import IotEdgePage from './app/iot-edge/page'
import IotIntegrationPage from './app/iot-integration/page'
import IotPlatformPage from './app/iot-platform/page'
import ItAssetManagementPage from './app/it-asset-management/page'
import ItInfrastructurePage from './app/it-infrastructure/page'
import ItInfrastructureDesignPage from './app/it-infrastructure-design/page'
import ItInfrastructureSolutionsPage from './app/it-infrastructure-solutions/page'
import ItPerformancePage from './app/it-performance/page'
import ItProjectManagementPage from './app/it-project-management/page'
import ItSecurityServicesPage from './app/it-security-services/page'
import ItServicesCloudMigrationPage from './app/it-services/cloud-migration/page'
import ItServicesCybersecurityAuditPage from './app/it-services/cybersecurity-audit/page'
import ItSupportPage from './app/it-support/page'
import ItTrainingPage from './app/it-training/page'
import LandingPageBuilderPage from './app/landing-page-builder/page'
import MachineLearningPage from './app/machine-learning/page'
import MachineLearningOpsPage from './app/machine-learning-ops/page'
import ManagedItPage from './app/managed-it/page'
import MarketingToolsPage from './app/marketing-tools/page'
import MicroSaasAiContentWriterPage from './app/micro-saas/ai-content-writer/page'
import MicroSaasAiContentWriterProPage from './app/micro-saas/ai-content-writer-pro/page'
import MicroSaasServicesAiAnalyticsDashboardPage from './app/micro-saas-services/ai-analytics-dashboard/page'
import MicroSaasServicesAiChatbotBuilderPage from './app/micro-saas-services/ai-chatbot-builder/page'
import MicroSaasServicesAiContentGeneratorPage from './app/micro-saas-services/ai-content-generator/page'
import MicroSaasServicesAiEmailAssistantPage from './app/micro-saas-services/ai-email-assistant/page'
import MicroSaasServicesAiLeadGenerationPage from './app/micro-saas-services/ai-lead-generation/page'
import MobileAppDevelopmentPage from './app/mobile-app-development/page'
import NetworkDesignPage from './app/network-design/page'
import NetworkSecurityPage from './app/network-security/page'
import NetworkSolutionsPage from './app/network-solutions/page'
import NlpPage from './app/nlp/page'
import OfflinePage from './app/offline/page'
import PartnersPage from './app/partners/page'
import PenetrationTestingPage from './app/penetration-testing/page'
import PerformanceOptimizationPage from './app/performance-optimization/page'
import PrivacyPage from './app/privacy/page'
import ProcessAutomationPage from './app/process-automation/page'
import ProductivityPage from './app/productivity/page'
import ProjectManagementProPage from './app/project-management-pro/page'
import QuantumAiPage from './app/quantum-ai/page'
import QuantumComputingPage from './app/quantum-computing/page'
import QuantumComputingSolutionsPage from './app/quantum-computing-solutions/page'
import RoboticsIntegrationPage from './app/robotics-integration/page'
import SearchPage from './app/search/page'
import SecurityPage from './app/security/page'
import SecurityAutomationPage from './app/security-automation/page'
import SecurityMonitoringPage from './app/security-monitoring/page'
import SecurityMonitoringSuitePage from './app/security-monitoring-suite/page'
import SeoOptimizerPage from './app/seo-optimizer/page'
import ServicesPage from './app/services/page'
import SitemapPage from './app/sitemap/page'
import SitemapXmlPage from './app/sitemap.xml/page'
import SlaPage from './app/sla/page'
import SmartCitiesPage from './app/smart-cities/page'
import SmartContractSecurityAuditPage from './app/smart-contract-security-audit/page'
import SpecializedServicesPage from './app/specialized-services/page'
import SystemAdminPage from './app/system-admin/page'
import SystemAdministrationPage from './app/system-administration/page'
import TermsPage from './app/terms/page'
import TestSimplePage from './app/test-simple/page'
import WebDevelopmentPage from './app/web-development/page'
import WorkflowAutomationPage from './app/workflow-automation/page'
import ZionAiAccountingAssistantPage from './app/zion-ai-accounting-assistant/page'
import ZionAiCodeReviewerPage from './app/zion-ai-code-reviewer/page'
import ZionAiContentModerationPage from './app/zion-ai-content-moderation/page'
import ZionAiContractAnalyzerPage from './app/zion-ai-contract-analyzer/page'
import ZionAiCustomerServiceProPage from './app/zion-ai-customer-service-pro/page'
import ZionAiDataCleanerPage from './app/zion-ai-data-cleaner/page'
import ZionAiDocumentAiPage from './app/zion-ai-document-ai/page'
import ZionAiEmailAssistantPage from './app/zion-ai-email-assistant/page'
import ZionAiEnergyManagerPage from './app/zion-ai-energy-manager/page'
import ZionAiFraudDetectorPage from './app/zion-ai-fraud-detector/page'
import ZionAiMarketingAutomationPage from './app/zion-ai-marketing-automation/page'
import ZionAiMeetingAssistantPage from './app/zion-ai-meeting-assistant/page'
import ZionAiPredictiveMaintenancePage from './app/zion-ai-predictive-maintenance/page'
import ZionAiRecruitmentProPage from './app/zion-ai-recruitment-pro/page'
import ZionAiSeoOptimizerPage from './app/zion-ai-seo-optimizer/page'
import ZionAiSupplyChainOptimizerPage from './app/zion-ai-supply-chain-optimizer/page'
import ZionAiSurveyBuilderPage from './app/zion-ai-survey-builder/page'
import ZionAiTranslatorProPage from './app/zion-ai-translator-pro/page'
import ZionAiVideoEditorPage from './app/zion-ai-video-editor/page'
import ZionAnalyticsProPage from './app/zion-analytics-pro/page'
import ZionChatAiPage from './app/zion-chat-ai/page'
import ZionCloudVaultPage from './app/zion-cloud-vault/page'
import ZionComplianceManagerPage from './app/zion-compliance-manager/page'
import ZionContentStudioPage from './app/zion-content-studio/page'
import ZionCrmIntelligencePage from './app/zion-crm-intelligence/page'
import ZionCustomerInsightsPage from './app/zion-customer-insights/page'
import ZionDataSyncPage from './app/zion-data-sync/page'
import ZionEmailAutomationPage from './app/zion-email-automation/page'
import ZionInventorySmartPage from './app/zion-inventory-smart/page'
import ZionInvoiceGeniusPage from './app/zion-invoice-genius/page'
import ZionLeadMagnetPage from './app/zion-lead-magnet/page'
import ZionPerformanceMonitorPage from './app/zion-performance-monitor/page'
import ZionProjectMasterPage from './app/zion-project-master/page'
import ZionSecurityShieldPage from './app/zion-security-shield/page'
import ZionSocialSchedulerPage from './app/zion-social-scheduler/page'
import ZionWorkflowAutomationPage from './app/zion-workflow-automation/page'

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <FuturisticNavigation />
            <main className="min-h-screen">
              <Suspense fallback={<OptimizedLoading />}>
                <Routes>
                  {/* Main Pages */}
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/ai-services" element={<AIServicesPage />} />
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/news" element={<NewsPage />} />
                  <Route path="/support" element={<SupportPage />} />
                  <Route path="/careers" element={<CareersPage />} />
                  <Route path="/investors" element={<InvestorsPage />} />
                  <Route path="/status" element={<StatusPage />} />
                  <Route path="/system-status" element={<SystemStatusPage />} />
                  
                  {/* Micro SaaS Services */}
                  <Route path="/micro-saas" element={<MicroSaasPage />} />
                  <Route path="/micro-saas/analytics-dashboard" element={<MicroSaasAnalyticsDashboardPage />} />
                  <Route path="/micro-saas/appointment-scheduler" element={<MicroSaasAppointmentSchedulerPage />} />
                  <Route path="/micro-saas/chat-analytics" element={<MicroSaasChatAnalyticsPage />} />
                  <Route path="/micro-saas/content-generator" element={<MicroSaasContentGeneratorPage />} />
                  <Route path="/micro-saas/document-processor" element={<MicroSaasDocumentProcessorPage />} />
                  <Route path="/micro-saas/email-marketing" element={<MicroSaasEmailMarketingPage />} />
                  <Route path="/micro-saas/expense-tracker" element={<MicroSaasExpenseTrackerPage />} />
                  <Route path="/micro-saas/inventory-management" element={<MicroSaasInventoryManagementPage />} />
                  <Route path="/micro-saas/lead-scoring" element={<MicroSaasLeadScoringPage />} />
                  <Route path="/micro-saas/seo-optimizer" element={<MicroSaasSeoOptimizerPage />} />
                  <Route path="/micro-saas/social-manager" element={<MicroSaasSocialManagerPage />} />
                  <Route path="/micro-saas/support-bot" element={<MicroSaasSupportBotPage />} />
                  <Route path="/micro-saas/ai-customer-insights" element={<MicroSaasAiCustomerInsightsPage />} />
                  <Route path="/micro-saas/ai-workflow-automation" element={<MicroSaasAiWorkflowAutomationPage />} />
                  <Route path="/micro-saas/ai-financial-forecasting" element={<MicroSaasAiFinancialForecastingPage />} />
                  
                  {/* AI Services */}
                  <Route path="/ai-automated-reporting" element={<AIAutomatedReportingPage />} />
                  <Route path="/ai-chatbot-builder" element={<AIChatbotBuilderPage />} />
                  <Route path="/ai-expense-tracker" element={<AIExpenseTrackerPage />} />
                  <Route path="/ai-password-manager" element={<AIPasswordManagerPage />} />
                  <Route path="/ai-task-manager" element={<AITaskManagerPage />} />
                  <Route path="/ai-services/ai-predictive-maintenance" element={<AiPredictiveMaintenancePage />} />
                  <Route path="/ai-services/ai-fraud-detection" element={<AiFraudDetectionPage />} />
                  <Route path="/business-intelligence" element={<BusinessIntelligencePage />} />
                  
                  {/* IT Services */}
                  <Route path="/it-consulting" element={<ITConsultingPage />} />
                  <Route path="/it-services" element={<ITServicesPage />} />
                  <Route path="/cybersecurity" element={<CybersecurityPage />} />
                  <Route path="/data-center" element={<DataCenterPage />} />
                  <Route path="/database-services" element={<DatabaseServicesPage />} />
                  <Route path="/database" element={<DatabasePage />} />
                  <Route path="/devops" element={<DevOpsPage />} />
                  <Route path="/enterprise" element={<EnterprisePage />} />
                  <Route path="/enterprise-security" element={<EnterpriseSecurityPage />} />
                  <Route path="/gdpr" element={<GDPRPage />} />
                  <Route path="/iot-edge-computing" element={<IOTEdgeComputingPage />} />
                  <Route path="/robotics" element={<RoboticsPage />} />
                  <Route path="/smart-city-infrastructure" element={<SmartCityInfrastructurePage />} />
                  <Route path="/task-manager-pro" element={<TaskManagerProPage />} />
                  <Route path="/training" element={<TrainingPage />} />
                  <Route path="/services-advertising" element={<ServicesAdvertisingPage />} />
                  
                  {/* 5G Services */}
                  <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                  
                  {/* Additional Services */}
                  <Route path="/devops-solutions" element={<DevOpsSolutionsPage />} />
                  <Route path="/system-integration" element={<SystemIntegrationPage />} />
                  <Route path="/ai-content-management" element={<AIContentManagementPage />} />
                  
                  {/* Company Pages */}
                  <Route path="/press" element={<PressPage />} />
                  
                  {/* Legal Pages */}
                  <Route path="/cookie-policy" element={<CookiePolicyPage />} />
                  <Route path="/gdpr-compliance" element={<GDPRCompliancePage />} />
                  
                  {/* Additional AI Services */}
                  <Route path="/ai-voice-assistant" element={<AiVoiceAssistantPage />} />
                  <Route path="/ai-cybersecurity" element={<AiCybersecurityPage />} />
                  <Route path="/ai-data-analytics" element={<AiDataAnalyticsPage />} />
                  <Route path="/ai-computer-vision" element={<AiComputerVisionPage />} />
                  <Route path="/ai-content-writer" element={<AiContentWriterPage />} />
                  <Route path="/ai-conversational-ai" element={<AiConversationalAiPage />} />
                  <Route path="/ai-customer-service" element={<AiCustomerServicePage />} />
                  <Route path="/ai-document-processor" element={<AiDocumentProcessorPage />} />
                  <Route path="/ai-ecommerce-solutions" element={<AiEcommerceSolutionsPage />} />
                  <Route path="/ai-education" element={<AiEducationPage />} />
                  <Route path="/ai-financial-services" element={<AiFinancialServicesPage />} />
                  <Route path="/ai-healthcare" element={<AiHealthcarePage />} />
                  <Route path="/ai-hr" element={<AiHrPage />} />
                  <Route path="/ai-marketing" element={<AiMarketingPage />} />
                  <Route path="/ai-ml" element={<AiMlPage />} />
                  <Route path="/ai-nlp" element={<AiNlpPage />} />
                  <Route path="/ai-predictive-analytics" element={<AiPredictiveAnalyticsPage />} />
                  <Route path="/ai-project-management" element={<AiProjectManagementPage />} />
                  <Route path="/ai-quantum-computing" element={<AiQuantumComputingPage />} />
                  <Route path="/ai-robotics" element={<AiRoboticsPage />} />
                  <Route path="/ai-sales-automation" element={<AiSalesAutomationPage />} />
                  <Route path="/ai-supply-chain" element={<AiSupplyChainPage />} />
                  <Route path="/ai-video-editor" element={<AiVideoEditorPage />} />
                  <Route path="/ai-website-builder" element={<AiWebsiteBuilderPage />} />
                  
                  {/* Additional IT Services */}
                  <Route path="/cloud-migration" element={<CloudMigrationPage />} />
                  <Route path="/api-development" element={<ApiDevelopmentPage />} />
                  <Route path="/database-management" element={<DatabaseManagementPage />} />
                  <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} />
                  <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                  <Route path="/web-development" element={<WebDevelopmentPage />} />
                  <Route path="/blockchain" element={<BlockchainPage />} />
                  <Route path="/quantum-computing" element={<QuantumComputingPage />} />
                  <Route path="/iot" element={<IotPage />} />
                  <Route path="/machine-learning" element={<MachineLearningPage />} />
                  <Route path="/data-analytics" element={<DataAnalyticsPage />} />
                  <Route path="/cloud-services" element={<CloudServicesPage />} />
                  <Route path="/security" element={<SecurityPage />} />
                  <Route path="/compliance" element={<CompliancePage />} />
                  <Route path="/automation" element={<AutomationPage />} />
                  <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
                  
                  {/* Company Pages */}
                  <Route path="/team" element={<TeamPage />} />
                  <Route path="/case-studies" element={<CaseStudiesPage />} />
                  <Route path="/partners" element={<PartnersPage />} />
                  <Route path="/help" element={<HelpPage />} />
                  <Route path="/docs" element={<DocsPage />} />
                  <Route path="/api-docs" element={<ApiDocsPage />} />
                  <Route path="/community" element={<CommunityPage />} />
                  
                  {/* Legal Pages */}
                  <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                  <Route path="/terms-of-service" element={<TermsOfServicePage />} />
                  
                  {/* 404 Page */}
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </Suspense>
            </main>
            <FuturisticFooter />
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  )
}

export default App