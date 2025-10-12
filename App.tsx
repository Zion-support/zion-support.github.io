import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Header from './app/components/Header'
import Footer from './app/components/Footer'
import ErrorBoundary from './app/components/ErrorBoundary'

// Lazy load pages for better performance
const HomePage = React.lazy(() => import('./app/page'))
const AboutPage = React.lazy(() => import('./app/about/page'))
const ContactPage = React.lazy(() => import('./app/contact/page'))
const PricingPage = React.lazy(() => import('./app/pricing/page'))
const DemoPage = React.lazy(() => import('./app/demo/page'))
const BlogPage = React.lazy(() => import('./app/blog/page'))
const CareersPage = React.lazy(() => import('./app/careers/page'))
const NewsPage = React.lazy(() => import('./app/news/page'))
const PressPage = React.lazy(() => import('./app/press/page'))
const PartnersPage = React.lazy(() => import('./app/partners/page'))
const InvestorsPage = React.lazy(() => import('./app/investors/page'))
const CommunityPage = React.lazy(() => import('./app/community/page'))
const CaseStudiesPage = React.lazy(() => import('./app/case-studies/page'))

// Core Services Pages
const AIServicesPage = React.lazy(() => import('./app/ai-services/page'))
const ITServicesPage = React.lazy(() => import('./app/it-services/page'))
const CloudServicesPage = React.lazy(() => import('./app/cloud-services/page'))
const CybersecurityPage = React.lazy(() => import('./app/cybersecurity/page'))
const DataAnalyticsPage = React.lazy(() => import('./app/data-analytics/page'))
const WebDevelopmentPage = React.lazy(() => import('./app/web-development/page'))
const MobileDevelopmentPage = React.lazy(() => import('./app/mobile-development/page'))
const DevOpsPage = React.lazy(() => import('./app/devops/page'))

// 5G Services Pages
const FiveGImplementationPage = React.lazy(() => import('./app/5g-implementation/page'))
const FiveGNetworkInfrastructurePage = React.lazy(() => import('./app/5g-network-infrastructure/page'))
const FiveGIoTSolutionsPage = React.lazy(() => import('./app/5g-iot-solutions/page'))
const FiveGEdgeComputingPage = React.lazy(() => import('./app/5g-edge-computing/page'))
const FiveGPrivateNetworksPage = React.lazy(() => import('./app/5g-private-networks/page'))
const FiveGMobileApplicationsPage = React.lazy(() => import('./app/5g-mobile-applications/page'))
const FiveGDataAnalyticsPage = React.lazy(() => import('./app/5g-data-analytics/page'))

// AI Services Pages
const AIContentGeneratorPage = React.lazy(() => import('./app/ai-content-generator/page'))
const AIChatbotBuilderPage = React.lazy(() => import('./app/ai-chatbot-builder/page'))
const AIAnalyticsDashboardPage = React.lazy(() => import('./app/ai-analytics-dashboard/page'))
const AIEmailAssistantPage = React.lazy(() => import('./app/ai-email-assistant/page'))
const AIVoiceAssistantPage = React.lazy(() => import('./app/ai-voice-assistant/page'))
const AIAutomationPage = React.lazy(() => import('./app/ai-automation/page'))
const AI3DGenerationPage = React.lazy(() => import('./app/ai-3d-generation/page'))
const AIDrugDiscoveryProPage = React.lazy(() => import('./app/ai-drug-discovery-pro/page'))
const AITaskManagerPage = React.lazy(() => import('./app/ai-task-manager/page'))
const AIExpenseTrackerPage = React.lazy(() => import('./app/ai-expense-tracker/page'))
const AIPasswordManagerPage = React.lazy(() => import('./app/ai-password-manager/page'))
const AIInvoiceGeneratorPage = React.lazy(() => import('./app/ai-invoice-generator/page'))
const AIHealthTrackerPage = React.lazy(() => import('./app/ai-health-tracker/page'))
const AISmartCalendarPage = React.lazy(() => import('./app/ai-smart-calendar/page'))
const AIClimateSolutionsProPage = React.lazy(() => import('./app/ai-climate-solutions-pro/page'))
const AIMeetingAssistantPage = React.lazy(() => import('./app/ai-meeting-assistant/page'))
const AIProjectManagerPage = React.lazy(() => import('./app/ai-project-manager/page'))

// Additional AI Services Pages
const AIContentGenerationPage = React.lazy(() => import('./app/ai-content-generation/page'))
const AIContentManagementPage = React.lazy(() => import('./app/ai-content-management/page'))
const AIContentModerationPage = React.lazy(() => import('./app/ai-content-moderation/page'))
const AIContentStudioPage = React.lazy(() => import('./app/ai-content-studio/page'))
const AIContentWriterPage = React.lazy(() => import('./app/ai-content-writer/page'))
const AIConversationalAIPage = React.lazy(() => import('./app/ai-conversational-ai/page'))
const AIConversationAnalyticsPage = React.lazy(() => import('./app/ai-conversation-analytics/page'))
const AICRMPage = React.lazy(() => import('./app/ai-crm/page'))
const AICRMAssistantPage = React.lazy(() => import('./app/ai-crm-assistant/page'))
const AICustomerChurnPage = React.lazy(() => import('./app/ai-customer-churn/page'))
const AICustomerServicePage = React.lazy(() => import('./app/ai-customer-service/page'))
const AICustomerSupportPage = React.lazy(() => import('./app/ai-customer-support/page'))
const AICustomerSupportBotPage = React.lazy(() => import('./app/ai-customer-support-bot/page'))
const AICustomerSupportChatbotPage = React.lazy(() => import('./app/ai-customer-support-chatbot/page'))
const AICyberDefenseMatrixPage = React.lazy(() => import('./app/ai-cyber-defense-matrix/page'))
const AICybersecurityPage = React.lazy(() => import('./app/ai-cybersecurity/page'))
const AICybersecurityMonitorPage = React.lazy(() => import('./app/ai-cybersecurity-monitor/page'))
const AICybersecuritySuitePage = React.lazy(() => import('./app/ai-cybersecurity-suite/page'))
const AIDataAnalyticsPage = React.lazy(() => import('./app/ai-data-analytics/page'))
const AIDataVisualizationPage = React.lazy(() => import('./app/ai-data-visualization/page'))
const AIDesignStudioPage = React.lazy(() => import('./app/ai-design-studio/page'))
const AIDocumentIntelligencePage = React.lazy(() => import('./app/ai-document-intelligence/page'))
const AIDocumentProcessingPage = React.lazy(() => import('./app/ai-document-processing/page'))
const AIDocumentProcessorPage = React.lazy(() => import('./app/ai-document-processor/page'))
const AIDocumentScannerPage = React.lazy(() => import('./app/ai-document-scanner/page'))
const AIEcommerceAssistantPage = React.lazy(() => import('./app/ai-ecommerce-assistant/page'))
const AIEcommerceOptimizerPage = React.lazy(() => import('./app/ai-ecommerce-optimizer/page'))
const AIEcommerceSolutionsPage = React.lazy(() => import('./app/ai-ecommerce-solutions/page'))
const AIEdgeComputingPage = React.lazy(() => import('./app/ai-edge-computing/page'))
const AIEducationPage = React.lazy(() => import('./app/ai-education/page'))
const AIEmailMarketingPage = React.lazy(() => import('./app/ai-email-marketing/page'))
const AIEmailMarketingAutomationPage = React.lazy(() => import('./app/ai-email-marketing-automation/page'))
const AIEnergyPage = React.lazy(() => import('./app/ai-energy/page'))
const AIEnergyGridManagementProPage = React.lazy(() => import('./app/ai-energy-grid-management-pro/page'))
const AIEnterpriseSolutionsPage = React.lazy(() => import('./app/ai-enterprise-solutions/page'))
const AIFashionDesignPage = React.lazy(() => import('./app/ai-fashion-design/page'))
const AIFinancialAdvisorPage = React.lazy(() => import('./app/ai-financial-advisor/page'))
const AIFinancialAnalyzerPage = React.lazy(() => import('./app/ai-financial-analyzer/page'))
const AIFinancialCrimeDetectionProPage = React.lazy(() => import('./app/ai-financial-crime-detection-pro/page'))
const AIFinancialForecastingPage = React.lazy(() => import('./app/ai-financial-forecasting/page'))
const AIFinancialPlannerPage = React.lazy(() => import('./app/ai-financial-planner/page'))
const AIFinancialServicesPage = React.lazy(() => import('./app/ai-financial-services/page'))
const AIFintechPage = React.lazy(() => import('./app/ai-fintech/page'))
const AIFitnessCoachPage = React.lazy(() => import('./app/ai-fitness-coach/page'))
const AIFraudDetectionPage = React.lazy(() => import('./app/ai-fraud-detection/page'))
const AIHealthcarePage = React.lazy(() => import('./app/ai-healthcare/page'))
const AIHealthcareDiagnosticsPage = React.lazy(() => import('./app/ai-healthcare-diagnostics/page'))
const AIHealthcareSolutionsPage = React.lazy(() => import('./app/ai-healthcare-solutions/page'))
const AIHolographicWorkspacePage = React.lazy(() => import('./app/ai-holographic-workspace/page'))
const AIHRPage = React.lazy(() => import('./app/ai-hr/page'))
const AIHRAssistantPage = React.lazy(() => import('./app/ai-hr-assistant/page'))
const AIHRSolutionsPage = React.lazy(() => import('./app/ai-hr-solutions/page'))
const AIImageRecognitionPage = React.lazy(() => import('./app/ai-image-recognition/page'))
const AIInfrastructureMonitoringPage = React.lazy(() => import('./app/ai-infrastructure-monitoring/page'))
const AIInsurancePage = React.lazy(() => import('./app/ai-insurance/page'))
const AIIntegrationServicesPage = React.lazy(() => import('./app/ai-integration-services/page'))
const AIInventoryManagementPage = React.lazy(() => import('./app/ai-inventory-management/page'))
const AIInventoryManagerPage = React.lazy(() => import('./app/ai-inventory-manager/page'))
const AIInvestmentOptimizerPage = React.lazy(() => import('./app/ai-investment-optimizer/page'))
const AIIoTAnalyticsPage = React.lazy(() => import('./app/ai-iot-analytics/page'))
const AIKnowledgeManagementPage = React.lazy(() => import('./app/ai-knowledge-management/page'))
const AILeadGenerationPage = React.lazy(() => import('./app/ai-lead-generation/page'))
const AILeadScoringPage = React.lazy(() => import('./app/ai-lead-scoring/page'))
const AILearningPlatformPage = React.lazy(() => import('./app/ai-learning-platform/page'))
const AILegalPage = React.lazy(() => import('./app/ai-legal/page'))
const AILegalAssistantPage = React.lazy(() => import('./app/ai-legal-assistant/page'))
const AILegalResearchProPage = React.lazy(() => import('./app/ai-legal-research-pro/page'))
const AILoadTestingPage = React.lazy(() => import('./app/ai-load-testing/page'))
const AILogoDesignerPage = React.lazy(() => import('./app/ai-logo-designer/page'))
const AIManufacturingPage = React.lazy(() => import('./app/ai-manufacturing/page'))
const AIMarketingPage = React.lazy(() => import('./app/ai-marketing/page'))
const AIMeetingTranscriberPage = React.lazy(() => import('./app/ai-meeting-transcriber/page'))
const AIMentalHealthCompanionPage = React.lazy(() => import('./app/ai-mental-health-companion/page'))
const AIMLPage = React.lazy(() => import('./app/ai-ml/page'))
const AIMLPlatformPage = React.lazy(() => import('./app/ai-ml-platform/page'))
const AIMobileAppBuilderPage = React.lazy(() => import('./app/ai-mobile-app-builder/page'))
const AIMobileAppDevelopmentPage = React.lazy(() => import('./app/ai-mobile-app-development/page'))
const AIMobileBuilderPage = React.lazy(() => import('./app/ai-mobile-builder/page'))
const AIMusicCompositionPage = React.lazy(() => import('./app/ai-music-composition/page'))
const AINeuralInterfacePage = React.lazy(() => import('./app/ai-neural-interface/page'))
const AINeuralMemoryAssistantPage = React.lazy(() => import('./app/ai-neural-memory-assistant/page'))
const AINLPPage = React.lazy(() => import('./app/ai-nlp/page'))
const AIOpsPage = React.lazy(() => import('./app/ai-ops/page'))
const AIPredictiveAnalyticsPage = React.lazy(() => import('./app/ai-predictive-analytics/page'))
const AIPredictiveMaintenancePage = React.lazy(() => import('./app/ai-predictive-maintenance/page'))
const AIPredictiveModelingPage = React.lazy(() => import('./app/ai-predictive-modeling/page'))
const AIProjectManagementPage = React.lazy(() => import('./app/ai-project-management/page'))
const AIQualityAssurancePage = React.lazy(() => import('./app/ai-quality-assurance/page'))
const AIQuantumComputingPage = React.lazy(() => import('./app/ai-quantum-computing/page'))
const AIQuantumComputingSimulatorPage = React.lazy(() => import('./app/ai-quantum-computing-simulator/page'))
const AIQuantumFinancialOraclePage = React.lazy(() => import('./app/ai-quantum-financial-oracle/page'))
const AIQuantumOptimizationPage = React.lazy(() => import('./app/ai-quantum-optimization/page'))
const AIQuantumTaskOptimizerPage = React.lazy(() => import('./app/ai-quantum-task-optimizer/page'))
const AIRealEstatePage = React.lazy(() => import('./app/ai-real-estate/page'))
const AIRecommendationEnginePage = React.lazy(() => import('./app/ai-recommendation-engine/page'))
const AIRecruitmentAssistantPage = React.lazy(() => import('./app/ai-recruitment-assistant/page'))
const AIRoboticsPage = React.lazy(() => import('./app/ai-robotics/page'))
const AISalesAutomationPage = React.lazy(() => import('./app/ai-sales-automation/page'))
const AISchedulerPage = React.lazy(() => import('./app/ai-scheduler/page'))
const AISecurityMonitorPage = React.lazy(() => import('./app/ai-security-monitor/page'))
const AISentimentAnalysisPage = React.lazy(() => import('./app/ai-sentiment-analysis/page'))
const AISentimentAnalyzerPage = React.lazy(() => import('./app/ai-sentiment-analyzer/page'))
const AISEOOptimizerPage = React.lazy(() => import('./app/ai-seo-optimizer/page'))
const AISmartContractAuditorPage = React.lazy(() => import('./app/ai-smart-contract-auditor/page'))
const AISmartHomeControllerPage = React.lazy(() => import('./app/ai-smart-home-controller/page'))
const AISocialMediaManagerPage = React.lazy(() => import('./app/ai-social-media-manager/page'))
const AISocialMediaSchedulerPage = React.lazy(() => import('./app/ai-social-media-scheduler/page'))
const AISolutionsPage = React.lazy(() => import('./app/ai-solutions/page'))
const AISpaceMissionOptimizerPage = React.lazy(() => import('./app/ai-space-mission-optimizer/page'))
const AISpaceTechnologyPage = React.lazy(() => import('./app/ai-space-technology/page'))
const AISpaceTechnologyProPage = React.lazy(() => import('./app/ai-space-technology-pro/page'))
const AISpeechSynthesisPage = React.lazy(() => import('./app/ai-speech-synthesis/page'))
const AIStockPortfolioManagerPage = React.lazy(() => import('./app/ai-stock-portfolio-manager/page'))
const AISupplyChainPage = React.lazy(() => import('./app/ai-supply-chain/page'))
const AISupplyChainAIPage = React.lazy(() => import('./app/ai-supply-chain-ai/page'))
const AISupplyChainOptimizationProPage = React.lazy(() => import('./app/ai-supply-chain-optimization-pro/page'))
const AITelepathicInterfacePage = React.lazy(() => import('./app/ai-telepathic-interface/page'))
const AITimeTrackerPage = React.lazy(() => import('./app/ai-time-tracker/page'))
const AITransportationPage = React.lazy(() => import('./app/ai-transportation/page'))
const AIVideoAnalysisPage = React.lazy(() => import('./app/ai-video-analysis/page'))
const AIVideoEditorPage = React.lazy(() => import('./app/ai-video-editor/page'))
const AIVideoGenerationPage = React.lazy(() => import('./app/ai-video-generation/page'))
const AIVideoGeneratorPage = React.lazy(() => import('./app/ai-video-generator/page'))
const AIVisionPage = React.lazy(() => import('./app/ai-vision/page'))
const AIVoiceCloningPage = React.lazy(() => import('./app/ai-voice-cloning/page'))
const AIVoiceCloningStudioPage = React.lazy(() => import('./app/ai-voice-cloning-studio/page'))
const AIVoiceProcessingPage = React.lazy(() => import('./app/ai-voice-processing/page'))
const AIVoiceSolutionsPage = React.lazy(() => import('./app/ai-voice-solutions/page'))
const AIVoiceSynthesisPage = React.lazy(() => import('./app/ai-voice-synthesis/page'))
const AIWebsiteBuilderPage = React.lazy(() => import('./app/ai-website-builder/page'))
const AIWorkflowAutomationPage = React.lazy(() => import('./app/ai-workflow-automation/page'))
const AIWritingAssistantPage = React.lazy(() => import('./app/ai-writing-assistant/page'))

// Additional IT Services Pages
const BlockchainPage = React.lazy(() => import('./app/blockchain/page'))
const BlockchainDevelopmentPage = React.lazy(() => import('./app/blockchain-development/page'))
const BlockchainIntegrationServicesPage = React.lazy(() => import('./app/blockchain-integration-services/page'))
const BlockchainWeb3Page = React.lazy(() => import('./app/blockchain-web3/page'))
const QuantumComputingSolutionsPage = React.lazy(() => import('./app/quantum-computing-solutions/page'))
const QuantumComputingPage = React.lazy(() => import('./app/quantum-computing/page'))
const QuantumAIPage = React.lazy(() => import('./app/quantum-ai/page'))
const RoboticsPage = React.lazy(() => import('./app/robotics/page'))
const RoboticsIntegrationPage = React.lazy(() => import('./app/robotics-integration/page'))
const ARVRSolutionsPage = React.lazy(() => import('./app/ar-vr-solutions/page'))
const ARVRPlatformPage = React.lazy(() => import('./app/ar-vr-platform/page'))
const AutonomousSystemsPage = React.lazy(() => import('./app/autonomous-systems/page'))
const EdgeComputingPage = React.lazy(() => import('./app/edge-computing/page'))
const IoTPage = React.lazy(() => import('./app/iot/page'))
const IoTDevelopmentPage = React.lazy(() => import('./app/iot-development/page'))
const IoTEdgePage = React.lazy(() => import('./app/iot-edge/page'))
const IoTEdgeComputingPage = React.lazy(() => import('./app/iot-edge-computing/page'))
const IoTIntegrationPage = React.lazy(() => import('./app/iot-integration/page'))
const IoTPlatformPage = React.lazy(() => import('./app/iot-platform/page'))
const MachineLearningPage = React.lazy(() => import('./app/machine-learning/page'))
const MachineLearningOpsPage = React.lazy(() => import('./app/machine-learning-ops/page'))
const ComputerVisionPage = React.lazy(() => import('./app/computer-vision/page'))
const NLPPage = React.lazy(() => import('./app/nlp/page'))
const DataEngineeringPage = React.lazy(() => import('./app/data-engineering/page'))
const DataVisualizationPage = React.lazy(() => import('./app/data-visualization/page'))
const BusinessIntelligencePage = React.lazy(() => import('./app/business-intelligence/page'))
const AnalyticsPage = React.lazy(() => import('./app/analytics/page'))
const AnalyticsToolsPage = React.lazy(() => import('./app/analytics-tools/page'))
const SmartAnalyticsPage = React.lazy(() => import('./app/smart-analytics/page'))
const DatabasePage = React.lazy(() => import('./app/database/page'))
const DatabaseManagementPage = React.lazy(() => import('./app/database-management/page'))
const DatabaseServicesPage = React.lazy(() => import('./app/database-services/page'))
const DataCenterPage = React.lazy(() => import('./app/data-center/page'))
const DataProtectionPage = React.lazy(() => import('./app/data-protection/page'))
const GDPRPage = React.lazy(() => import('./app/gdpr/page'))
const GDPRCompliancePage = React.lazy(() => import('./app/gdpr-compliance/page'))
const CompliancePage = React.lazy(() => import('./app/compliance/page'))
const ComplianceAutomationPage = React.lazy(() => import('./app/compliance-automation/page'))
const SecurityPage = React.lazy(() => import('./app/security/page'))
const SecurityAutomationPage = React.lazy(() => import('./app/security-automation/page'))
const SecurityMonitoringPage = React.lazy(() => import('./app/security-monitoring/page'))
const SecurityMonitoringSuitePage = React.lazy(() => import('./app/security-monitoring-suite/page'))
const PenetrationTestingPage = React.lazy(() => import('./app/penetration-testing/page'))
const CybersecurityAdvancedPage = React.lazy(() => import('./app/cybersecurity-advanced/page'))
const CybersecuritySolutionsPage = React.lazy(() => import('./app/cybersecurity-solutions/page'))
const CybersecuritySuitePage = React.lazy(() => import('./app/cybersecurity-suite/page'))
const EnterpriseSecurityPage = React.lazy(() => import('./app/enterprise-security/page'))
const CloudSecurityPage = React.lazy(() => import('./app/cloud-security/page'))
const CloudNativeSecurityPage = React.lazy(() => import('./app/cloud-native-security/page'))
const SmartContractSecurityAuditPage = React.lazy(() => import('./app/smart-contract-security-audit/page'))
const CloudMigrationPage = React.lazy(() => import('./app/cloud-migration/page'))
const CloudMigrationAdvancedPage = React.lazy(() => import('./app/cloud-migration-advanced/page'))
const CloudMigrationServicesPage = React.lazy(() => import('./app/cloud-migration-services/page'))
const CloudInfrastructurePage = React.lazy(() => import('./app/cloud-infrastructure/page'))
const CloudInfrastructureManagerPage = React.lazy(() => import('./app/cloud-infrastructure-manager/page'))
const CloudNativeDevelopmentPage = React.lazy(() => import('./app/cloud-native-development/page'))
const CloudCostOptimizationPage = React.lazy(() => import('./app/cloud-cost-optimization/page'))
const DevOpsAdvancedPage = React.lazy(() => import('./app/devops-advanced/page'))
const DevOpsCICDPage = React.lazy(() => import('./app/devops-cicd/page'))
const DevOpsSolutionsPage = React.lazy(() => import('./app/devops-solutions/page'))
const SystemIntegrationPage = React.lazy(() => import('./app/system-integration/page'))
const SystemAdministrationPage = React.lazy(() => import('./app/system-administration/page'))
const SystemAdminPage = React.lazy(() => import('./app/system-admin/page'))
const ITConsultingPage = React.lazy(() => import('./app/it-consulting/page'))
const ITInfrastructurePage = React.lazy(() => import('./app/it-infrastructure/page'))
const ITInfrastructureDesignPage = React.lazy(() => import('./app/it-infrastructure-design/page'))
const ITInfrastructureSolutionsPage = React.lazy(() => import('./app/it-infrastructure-solutions/page'))
const ITPerformancePage = React.lazy(() => import('./app/it-performance/page'))
const ITProjectManagementPage = React.lazy(() => import('./app/it-project-management/page'))
const ITSecurityServicesPage = React.lazy(() => import('./app/it-security-services/page'))
const ITSupportPage = React.lazy(() => import('./app/it-support/page'))
const ITTrainingPage = React.lazy(() => import('./app/it-training/page'))
const ITAssetManagementPage = React.lazy(() => import('./app/it-asset-management/page'))
const ManagedITPage = React.lazy(() => import('./app/managed-it/page'))
const NetworkInfrastructurePage = React.lazy(() => import('./app/network-infrastructure/page'))
const NetworkDesignPage = React.lazy(() => import('./app/network-design/page'))
const NetworkSecurityPage = React.lazy(() => import('./app/network-security/page'))
const NetworkSolutionsPage = React.lazy(() => import('./app/network-solutions/page'))
const BackupRecoveryPage = React.lazy(() => import('./app/backup-recovery/page'))
const DisasterRecoveryAdvancedPage = React.lazy(() => import('./app/disaster-recovery-advanced/page'))
const PerformanceOptimizationPage = React.lazy(() => import('./app/performance-optimization/page'))
const ECommerceDevelopmentPage = React.lazy(() => import('./app/e-commerce-development/page'))
const CustomDevelopmentPage = React.lazy(() => import('./app/custom-development/page'))
const MobileAppDevelopmentPage = React.lazy(() => import('./app/mobile-app-development/page'))
const EnterprisePage = React.lazy(() => import('./app/enterprise/page'))
const EnterpriseSolutionsPage = React.lazy(() => import('./app/enterprise-solutions/page'))
const EnterpriseIntegrationPage = React.lazy(() => import('./app/enterprise-integration/page'))
const DigitalTransformationPage = React.lazy(() => import('./app/digital-transformation/page'))
const ProcessAutomationPage = React.lazy(() => import('./app/process-automation/page'))
const WorkflowAutomationPage = React.lazy(() => import('./app/workflow-automation/page'))
const AutomationPage = React.lazy(() => import('./app/automation/page'))
const BusinessAppsPage = React.lazy(() => import('./app/business-apps/page'))
const ProductivityPage = React.lazy(() => import('./app/productivity/page'))
const ProjectManagementProPage = React.lazy(() => import('./app/project-management-pro/page'))
const TaskManagerProPage = React.lazy(() => import('./app/task-manager-pro/page'))
const MarketingToolsPage = React.lazy(() => import('./app/marketing-tools/page'))
const SEOOptimizerPage = React.lazy(() => import('./app/seo-optimizer/page'))
const LandingPageBuilderPage = React.lazy(() => import('./app/landing-page-builder/page'))
const EmailMarketingAutomationPage = React.lazy(() => import('./app/email-marketing-automation/page'))
const EmailOptimizerPage = React.lazy(() => import('./app/email-optimizer/page'))
const DeveloperToolsPage = React.lazy(() => import('./app/developer-tools/page'))
const APIPage = React.lazy(() => import('./app/api/page'))
const APIDevelopmentPage = React.lazy(() => import('./app/api-development/page'))
const APIDevelopmentAdvancedPage = React.lazy(() => import('./app/api-development-advanced/page'))
const APIDocsPage = React.lazy(() => import('./app/api-docs/page'))
const ConsultationPage = React.lazy(() => import('./app/consultation/page'))
const InnovationLabsPage = React.lazy(() => import('./app/innovation-labs/page'))
const SpecializedServicesPage = React.lazy(() => import('./app/specialized-services/page'))
const ServicesPage = React.lazy(() => import('./app/services/page'))
const ServicesAdvertisingPage = React.lazy(() => import('./app/services-advertising/page'))
const HealthcareITPage = React.lazy(() => import('./app/healthcare-it/page'))
const FinancialITPage = React.lazy(() => import('./app/financial-it/page'))
const HealthPage = React.lazy(() => import('./app/health/page'))
const ExpenseTrackerPage = React.lazy(() => import('./app/expense-tracker/page'))
const CRMLitePage = React.lazy(() => import('./app/crm-lite/page'))
const IntelligentEmailInfrastructurePage = React.lazy(() => import('./app/intelligent-email-infrastructure/page'))
const IntelligentDatabaseMigrationPage = React.lazy(() => import('./app/intelligent-database-migration/page'))
const DigitalTwinPlatformPage = React.lazy(() => import('./app/digital-twin-platform/page'))
const SmartCitiesPage = React.lazy(() => import('./app/smart-cities/page'))
const SmartCityInfrastructurePage = React.lazy(() => import('./app/smart-city-infrastructure/page'))

// Micro SAAS Services Pages
const MicroSaasPage = React.lazy(() => import('./app/micro-saas/page'))
const MicroSaasServicesPage = React.lazy(() => import('./app/micro-saas-services/page'))
const MicroSaasAIContentWriterPage = React.lazy(() => import('./app/micro-saas/ai-content-writer/page'))
const MicroSaasAIContentWriterProPage = React.lazy(() => import('./app/micro-saas/ai-content-writer-pro/page'))
const MicroSaasAnalyticsDashboardPage = React.lazy(() => import('./app/micro-saas/analytics-dashboard/page'))
const MicroSaasAppointmentSchedulerPage = React.lazy(() => import('./app/micro-saas/appointment-scheduler/page'))
const MicroSaasChatAnalyticsPage = React.lazy(() => import('./app/micro-saas/chat-analytics/page'))
const MicroSaasContentGeneratorPage = React.lazy(() => import('./app/micro-saas/content-generator/page'))
const MicroSaasDocumentProcessorPage = React.lazy(() => import('./app/micro-saas/document-processor/page'))
const MicroSaasEmailMarketingPage = React.lazy(() => import('./app/micro-saas/email-marketing/page'))
const MicroSaasExpenseTrackerPage = React.lazy(() => import('./app/micro-saas/expense-tracker/page'))
const MicroSaasInventoryManagementPage = React.lazy(() => import('./app/micro-saas/inventory-management/page'))
const MicroSaasLeadScoringPage = React.lazy(() => import('./app/micro-saas/lead-scoring/page'))
const MicroSaasSEOOptimizerPage = React.lazy(() => import('./app/micro-saas/seo-optimizer/page'))
const MicroSaasSocialManagerPage = React.lazy(() => import('./app/micro-saas/social-manager/page'))
const MicroSaasSupportBotPage = React.lazy(() => import('./app/micro-saas/support-bot/page'))
const MicroSaasServicesAIAnalyticsDashboardPage = React.lazy(() => import('./app/micro-saas-services/ai-analytics-dashboard/page'))
const MicroSaasServicesAIChatbotBuilderPage = React.lazy(() => import('./app/micro-saas-services/ai-chatbot-builder/page'))
const MicroSaasServicesAIContentGeneratorPage = React.lazy(() => import('./app/micro-saas-services/ai-content-generator/page'))
const MicroSaasServicesAIEmailAssistantPage = React.lazy(() => import('./app/micro-saas-services/ai-email-assistant/page'))
const MicroSaasServicesAILeadGenerationPage = React.lazy(() => import('./app/micro-saas-services/ai-lead-generation/page'))

// Legal and Support Pages
const PrivacyPage = React.lazy(() => import('./app/privacy/page'))
const PrivacyPolicyPage = React.lazy(() => import('./app/privacy-policy/page'))
const TermsPage = React.lazy(() => import('./app/terms/page'))
const TermsOfServicePage = React.lazy(() => import('./app/terms-of-service/page'))
const CookiesPage = React.lazy(() => import('./app/cookies/page'))
const CookiePolicyPage = React.lazy(() => import('./app/cookie-policy/page'))
const HelpPage = React.lazy(() => import('./app/help/page'))
const DocsPage = React.lazy(() => import('./app/docs/page'))
const SupportPage = React.lazy(() => import('./app/support/page'))
const StatusPage = React.lazy(() => import('./app/status/page'))
const SystemStatusPage = React.lazy(() => import('./app/system-status/page'))
const SLAPage = React.lazy(() => import('./app/sla/page'))
const AccessibilityPage = React.lazy(() => import('./app/accessibility/page'))
const AccessibilityPagePage = React.lazy(() => import('./app/accessibility-page/page'))
const SitemapPage = React.lazy(() => import('./app/sitemap/page'))
const SitemapXMLPage = React.lazy(() => import('./app/sitemap.xml/page'))
const SearchPage = React.lazy(() => import('./app/search/page'))
const OfflinePage = React.lazy(() => import('./app/offline/page'))
const NotFoundPage = React.lazy(() => import('./app/not-found/page'))
const TestSimplePage = React.lazy(() => import('./app/test-simple/page'))
const TrainingPage = React.lazy(() => import('./app/training/page'))

// Loading component for Suspense
const PageLoader = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
    <span className="ml-3 text-white text-lg">Loading page...</span>
  </div>
)

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <Header />
            <Suspense fallback={<PageLoader />}>
              <Routes>
                {/* Main Pages */}
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/demo" element={<DemoPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/press" element={<PressPage />} />
                <Route path="/partners" element={<PartnersPage />} />
                <Route path="/investors" element={<InvestorsPage />} />
                <Route path="/community" element={<CommunityPage />} />
                <Route path="/case-studies" element={<CaseStudiesPage />} />
                
                {/* Core Services */}
                <Route path="/ai-services" element={<AIServicesPage />} />
                <Route path="/it-services" element={<ITServicesPage />} />
                <Route path="/cloud-services" element={<CloudServicesPage />} />
                <Route path="/cybersecurity" element={<CybersecurityPage />} />
                <Route path="/data-analytics" element={<DataAnalyticsPage />} />
                <Route path="/web-development" element={<WebDevelopmentPage />} />
                <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                <Route path="/devops" element={<DevOpsPage />} />
                
                {/* 5G Services */}
                <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
                <Route path="/5g-iot-solutions" element={<FiveGIoTSolutionsPage />} />
                <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
                <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
                <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
                
                {/* AI Services */}
                <Route path="/ai-content-generator" element={<AIContentGeneratorPage />} />
                <Route path="/ai-chatbot-builder" element={<AIChatbotBuilderPage />} />
                <Route path="/ai-analytics-dashboard" element={<AIAnalyticsDashboardPage />} />
                <Route path="/ai-email-assistant" element={<AIEmailAssistantPage />} />
                <Route path="/ai-voice-assistant" element={<AIVoiceAssistantPage />} />
                <Route path="/ai-automation" element={<AIAutomationPage />} />
                <Route path="/ai-3d-generation" element={<AI3DGenerationPage />} />
                <Route path="/ai-drug-discovery-pro" element={<AIDrugDiscoveryProPage />} />
                <Route path="/ai-task-manager" element={<AITaskManagerPage />} />
                <Route path="/ai-expense-tracker" element={<AIExpenseTrackerPage />} />
                <Route path="/ai-password-manager" element={<AIPasswordManagerPage />} />
                <Route path="/ai-invoice-generator" element={<AIInvoiceGeneratorPage />} />
                <Route path="/ai-health-tracker" element={<AIHealthTrackerPage />} />
                <Route path="/ai-smart-calendar" element={<AISmartCalendarPage />} />
                <Route path="/ai-climate-solutions-pro" element={<AIClimateSolutionsProPage />} />
                <Route path="/ai-meeting-assistant" element={<AIMeetingAssistantPage />} />
                <Route path="/ai-project-manager" element={<AIProjectManagerPage />} />
                
                {/* Additional AI Services */}
                <Route path="/ai-content-generation" element={<AIContentGenerationPage />} />
                <Route path="/ai-content-management" element={<AIContentManagementPage />} />
                <Route path="/ai-content-moderation" element={<AIContentModerationPage />} />
                <Route path="/ai-content-studio" element={<AIContentStudioPage />} />
                <Route path="/ai-content-writer" element={<AIContentWriterPage />} />
                <Route path="/ai-conversational-ai" element={<AIConversationalAIPage />} />
                <Route path="/ai-conversation-analytics" element={<AIConversationAnalyticsPage />} />
                <Route path="/ai-crm" element={<AICRMPage />} />
                <Route path="/ai-crm-assistant" element={<AICRMAssistantPage />} />
                <Route path="/ai-customer-churn" element={<AICustomerChurnPage />} />
                <Route path="/ai-customer-service" element={<AICustomerServicePage />} />
                <Route path="/ai-customer-support" element={<AICustomerSupportPage />} />
                <Route path="/ai-customer-support-bot" element={<AICustomerSupportBotPage />} />
                <Route path="/ai-customer-support-chatbot" element={<AICustomerSupportChatbotPage />} />
                <Route path="/ai-cyber-defense-matrix" element={<AICyberDefenseMatrixPage />} />
                <Route path="/ai-cybersecurity" element={<AICybersecurityPage />} />
                <Route path="/ai-cybersecurity-monitor" element={<AICybersecurityMonitorPage />} />
                <Route path="/ai-cybersecurity-suite" element={<AICybersecuritySuitePage />} />
                <Route path="/ai-data-analytics" element={<AIDataAnalyticsPage />} />
                <Route path="/ai-data-visualization" element={<AIDataVisualizationPage />} />
                <Route path="/ai-design-studio" element={<AIDesignStudioPage />} />
                <Route path="/ai-document-intelligence" element={<AIDocumentIntelligencePage />} />
                <Route path="/ai-document-processing" element={<AIDocumentProcessingPage />} />
                <Route path="/ai-document-processor" element={<AIDocumentProcessorPage />} />
                <Route path="/ai-document-scanner" element={<AIDocumentScannerPage />} />
                <Route path="/ai-ecommerce-assistant" element={<AIEcommerceAssistantPage />} />
                <Route path="/ai-ecommerce-optimizer" element={<AIEcommerceOptimizerPage />} />
                <Route path="/ai-ecommerce-solutions" element={<AIEcommerceSolutionsPage />} />
                <Route path="/ai-edge-computing" element={<AIEdgeComputingPage />} />
                <Route path="/ai-education" element={<AIEducationPage />} />
                <Route path="/ai-email-marketing" element={<AIEmailMarketingPage />} />
                <Route path="/ai-email-marketing-automation" element={<AIEmailMarketingAutomationPage />} />
                <Route path="/ai-energy" element={<AIEnergyPage />} />
                <Route path="/ai-energy-grid-management-pro" element={<AIEnergyGridManagementProPage />} />
                <Route path="/ai-enterprise-solutions" element={<AIEnterpriseSolutionsPage />} />
                <Route path="/ai-fashion-design" element={<AIFashionDesignPage />} />
                <Route path="/ai-financial-advisor" element={<AIFinancialAdvisorPage />} />
                <Route path="/ai-financial-analyzer" element={<AIFinancialAnalyzerPage />} />
                <Route path="/ai-financial-crime-detection-pro" element={<AIFinancialCrimeDetectionProPage />} />
                <Route path="/ai-financial-forecasting" element={<AIFinancialForecastingPage />} />
                <Route path="/ai-financial-planner" element={<AIFinancialPlannerPage />} />
                <Route path="/ai-financial-services" element={<AIFinancialServicesPage />} />
                <Route path="/ai-fintech" element={<AIFintechPage />} />
                <Route path="/ai-fitness-coach" element={<AIFitnessCoachPage />} />
                <Route path="/ai-fraud-detection" element={<AIFraudDetectionPage />} />
                <Route path="/ai-healthcare" element={<AIHealthcarePage />} />
                <Route path="/ai-healthcare-diagnostics" element={<AIHealthcareDiagnosticsPage />} />
                <Route path="/ai-healthcare-solutions" element={<AIHealthcareSolutionsPage />} />
                <Route path="/ai-holographic-workspace" element={<AIHolographicWorkspacePage />} />
                <Route path="/ai-hr" element={<AIHRPage />} />
                <Route path="/ai-hr-assistant" element={<AIHRAssistantPage />} />
                <Route path="/ai-hr-solutions" element={<AIHRSolutionsPage />} />
                <Route path="/ai-image-recognition" element={<AIImageRecognitionPage />} />
                <Route path="/ai-infrastructure-monitoring" element={<AIInfrastructureMonitoringPage />} />
                <Route path="/ai-insurance" element={<AIInsurancePage />} />
                <Route path="/ai-integration-services" element={<AIIntegrationServicesPage />} />
                <Route path="/ai-inventory-management" element={<AIInventoryManagementPage />} />
                <Route path="/ai-inventory-manager" element={<AIInventoryManagerPage />} />
                <Route path="/ai-investment-optimizer" element={<AIInvestmentOptimizerPage />} />
                <Route path="/ai-iot-analytics" element={<AIIoTAnalyticsPage />} />
                <Route path="/ai-knowledge-management" element={<AIKnowledgeManagementPage />} />
                <Route path="/ai-lead-generation" element={<AILeadGenerationPage />} />
                <Route path="/ai-lead-scoring" element={<AILeadScoringPage />} />
                <Route path="/ai-learning-platform" element={<AILearningPlatformPage />} />
                <Route path="/ai-legal" element={<AILegalPage />} />
                <Route path="/ai-legal-assistant" element={<AILegalAssistantPage />} />
                <Route path="/ai-legal-research-pro" element={<AILegalResearchProPage />} />
                <Route path="/ai-load-testing" element={<AILoadTestingPage />} />
                <Route path="/ai-logo-designer" element={<AILogoDesignerPage />} />
                <Route path="/ai-manufacturing" element={<AIManufacturingPage />} />
                <Route path="/ai-marketing" element={<AIMarketingPage />} />
                <Route path="/ai-meeting-transcriber" element={<AIMeetingTranscriberPage />} />
                <Route path="/ai-mental-health-companion" element={<AIMentalHealthCompanionPage />} />
                <Route path="/ai-ml" element={<AIMLPage />} />
                <Route path="/ai-ml-platform" element={<AIMLPlatformPage />} />
                <Route path="/ai-mobile-app-builder" element={<AIMobileAppBuilderPage />} />
                <Route path="/ai-mobile-app-development" element={<AIMobileAppDevelopmentPage />} />
                <Route path="/ai-mobile-builder" element={<AIMobileBuilderPage />} />
                <Route path="/ai-music-composition" element={<AIMusicCompositionPage />} />
                <Route path="/ai-neural-interface" element={<AINeuralInterfacePage />} />
                <Route path="/ai-neural-memory-assistant" element={<AINeuralMemoryAssistantPage />} />
                <Route path="/ai-nlp" element={<AINLPPage />} />
                <Route path="/ai-ops" element={<AIOpsPage />} />
                <Route path="/ai-predictive-analytics" element={<AIPredictiveAnalyticsPage />} />
                <Route path="/ai-predictive-maintenance" element={<AIPredictiveMaintenancePage />} />
                <Route path="/ai-predictive-modeling" element={<AIPredictiveModelingPage />} />
                <Route path="/ai-project-management" element={<AIProjectManagementPage />} />
                <Route path="/ai-quality-assurance" element={<AIQualityAssurancePage />} />
                <Route path="/ai-quantum-computing" element={<AIQuantumComputingPage />} />
                <Route path="/ai-quantum-computing-simulator" element={<AIQuantumComputingSimulatorPage />} />
                <Route path="/ai-quantum-financial-oracle" element={<AIQuantumFinancialOraclePage />} />
                <Route path="/ai-quantum-optimization" element={<AIQuantumOptimizationPage />} />
                <Route path="/ai-quantum-task-optimizer" element={<AIQuantumTaskOptimizerPage />} />
                <Route path="/ai-real-estate" element={<AIRealEstatePage />} />
                <Route path="/ai-recommendation-engine" element={<AIRecommendationEnginePage />} />
                <Route path="/ai-recruitment-assistant" element={<AIRecruitmentAssistantPage />} />
                <Route path="/ai-robotics" element={<AIRoboticsPage />} />
                <Route path="/ai-sales-automation" element={<AISalesAutomationPage />} />
                <Route path="/ai-scheduler" element={<AISchedulerPage />} />
                <Route path="/ai-security-monitor" element={<AISecurityMonitorPage />} />
                <Route path="/ai-sentiment-analysis" element={<AISentimentAnalysisPage />} />
                <Route path="/ai-sentiment-analyzer" element={<AISentimentAnalyzerPage />} />
                <Route path="/ai-seo-optimizer" element={<AISEOOptimizerPage />} />
                <Route path="/ai-smart-contract-auditor" element={<AISmartContractAuditorPage />} />
                <Route path="/ai-smart-home-controller" element={<AISmartHomeControllerPage />} />
                <Route path="/ai-social-media-manager" element={<AISocialMediaManagerPage />} />
                <Route path="/ai-social-media-scheduler" element={<AISocialMediaSchedulerPage />} />
                <Route path="/ai-solutions" element={<AISolutionsPage />} />
                <Route path="/ai-space-mission-optimizer" element={<AISpaceMissionOptimizerPage />} />
                <Route path="/ai-space-technology" element={<AISpaceTechnologyPage />} />
                <Route path="/ai-space-technology-pro" element={<AISpaceTechnologyProPage />} />
                <Route path="/ai-speech-synthesis" element={<AISpeechSynthesisPage />} />
                <Route path="/ai-stock-portfolio-manager" element={<AIStockPortfolioManagerPage />} />
                <Route path="/ai-supply-chain" element={<AISupplyChainPage />} />
                <Route path="/ai-supply-chain-ai" element={<AISupplyChainAIPage />} />
                <Route path="/ai-supply-chain-optimization-pro" element={<AISupplyChainOptimizationProPage />} />
                <Route path="/ai-telepathic-interface" element={<AITelepathicInterfacePage />} />
                <Route path="/ai-time-tracker" element={<AITimeTrackerPage />} />
                <Route path="/ai-transportation" element={<AITransportationPage />} />
                <Route path="/ai-video-analysis" element={<AIVideoAnalysisPage />} />
                <Route path="/ai-video-editor" element={<AIVideoEditorPage />} />
                <Route path="/ai-video-generation" element={<AIVideoGenerationPage />} />
                <Route path="/ai-video-generator" element={<AIVideoGeneratorPage />} />
                <Route path="/ai-vision" element={<AIVisionPage />} />
                <Route path="/ai-voice-cloning" element={<AIVoiceCloningPage />} />
                <Route path="/ai-voice-cloning-studio" element={<AIVoiceCloningStudioPage />} />
                <Route path="/ai-voice-processing" element={<AIVoiceProcessingPage />} />
                <Route path="/ai-voice-solutions" element={<AIVoiceSolutionsPage />} />
                <Route path="/ai-voice-synthesis" element={<AIVoiceSynthesisPage />} />
                <Route path="/ai-website-builder" element={<AIWebsiteBuilderPage />} />
                <Route path="/ai-workflow-automation" element={<AIWorkflowAutomationPage />} />
                <Route path="/ai-writing-assistant" element={<AIWritingAssistantPage />} />
                
                {/* Additional IT Services */}
                <Route path="/blockchain" element={<BlockchainPage />} />
                <Route path="/blockchain-development" element={<BlockchainDevelopmentPage />} />
                <Route path="/blockchain-integration-services" element={<BlockchainIntegrationServicesPage />} />
                <Route path="/blockchain-web3" element={<BlockchainWeb3Page />} />
                <Route path="/quantum-computing-solutions" element={<QuantumComputingSolutionsPage />} />
                <Route path="/quantum-computing" element={<QuantumComputingPage />} />
                <Route path="/quantum-ai" element={<QuantumAIPage />} />
                <Route path="/robotics" element={<RoboticsPage />} />
                <Route path="/robotics-integration" element={<RoboticsIntegrationPage />} />
                <Route path="/ar-vr-solutions" element={<ARVRSolutionsPage />} />
                <Route path="/ar-vr-platform" element={<ARVRPlatformPage />} />
                <Route path="/autonomous-systems" element={<AutonomousSystemsPage />} />
                <Route path="/edge-computing" element={<EdgeComputingPage />} />
                <Route path="/iot" element={<IoTPage />} />
                <Route path="/iot-development" element={<IoTDevelopmentPage />} />
                <Route path="/iot-edge" element={<IoTEdgePage />} />
                <Route path="/iot-edge-computing" element={<IoTEdgeComputingPage />} />
                <Route path="/iot-integration" element={<IoTIntegrationPage />} />
                <Route path="/iot-platform" element={<IoTPlatformPage />} />
                <Route path="/machine-learning" element={<MachineLearningPage />} />
                <Route path="/machine-learning-ops" element={<MachineLearningOpsPage />} />
                <Route path="/computer-vision" element={<ComputerVisionPage />} />
                <Route path="/nlp" element={<NLPPage />} />
                <Route path="/data-engineering" element={<DataEngineeringPage />} />
                <Route path="/data-visualization" element={<DataVisualizationPage />} />
                <Route path="/business-intelligence" element={<BusinessIntelligencePage />} />
                <Route path="/analytics" element={<AnalyticsPage />} />
                <Route path="/analytics-tools" element={<AnalyticsToolsPage />} />
                <Route path="/smart-analytics" element={<SmartAnalyticsPage />} />
                <Route path="/database" element={<DatabasePage />} />
                <Route path="/database-management" element={<DatabaseManagementPage />} />
                <Route path="/database-services" element={<DatabaseServicesPage />} />
                <Route path="/data-center" element={<DataCenterPage />} />
                <Route path="/data-protection" element={<DataProtectionPage />} />
                <Route path="/gdpr" element={<GDPRPage />} />
                <Route path="/gdpr-compliance" element={<GDPRCompliancePage />} />
                <Route path="/compliance" element={<CompliancePage />} />
                <Route path="/compliance-automation" element={<ComplianceAutomationPage />} />
                <Route path="/security" element={<SecurityPage />} />
                <Route path="/security-automation" element={<SecurityAutomationPage />} />
                <Route path="/security-monitoring" element={<SecurityMonitoringPage />} />
                <Route path="/security-monitoring-suite" element={<SecurityMonitoringSuitePage />} />
                <Route path="/penetration-testing" element={<PenetrationTestingPage />} />
                <Route path="/cybersecurity-advanced" element={<CybersecurityAdvancedPage />} />
                <Route path="/cybersecurity-solutions" element={<CybersecuritySolutionsPage />} />
                <Route path="/cybersecurity-suite" element={<CybersecuritySuitePage />} />
                <Route path="/enterprise-security" element={<EnterpriseSecurityPage />} />
                <Route path="/cloud-security" element={<CloudSecurityPage />} />
                <Route path="/cloud-native-security" element={<CloudNativeSecurityPage />} />
                <Route path="/smart-contract-security-audit" element={<SmartContractSecurityAuditPage />} />
                <Route path="/cloud-migration" element={<CloudMigrationPage />} />
                <Route path="/cloud-migration-advanced" element={<CloudMigrationAdvancedPage />} />
                <Route path="/cloud-migration-services" element={<CloudMigrationServicesPage />} />
                <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                <Route path="/cloud-infrastructure-manager" element={<CloudInfrastructureManagerPage />} />
                <Route path="/cloud-native-development" element={<CloudNativeDevelopmentPage />} />
                <Route path="/cloud-cost-optimization" element={<CloudCostOptimizationPage />} />
                <Route path="/devops-advanced" element={<DevOpsAdvancedPage />} />
                <Route path="/devops-cicd" element={<DevOpsCICDPage />} />
                <Route path="/devops-solutions" element={<DevOpsSolutionsPage />} />
                <Route path="/system-integration" element={<SystemIntegrationPage />} />
                <Route path="/system-administration" element={<SystemAdministrationPage />} />
                <Route path="/system-admin" element={<SystemAdminPage />} />
                <Route path="/it-consulting" element={<ITConsultingPage />} />
                <Route path="/it-infrastructure" element={<ITInfrastructurePage />} />
                <Route path="/it-infrastructure-design" element={<ITInfrastructureDesignPage />} />
                <Route path="/it-infrastructure-solutions" element={<ITInfrastructureSolutionsPage />} />
                <Route path="/it-performance" element={<ITPerformancePage />} />
                <Route path="/it-project-management" element={<ITProjectManagementPage />} />
                <Route path="/it-security-services" element={<ITSecurityServicesPage />} />
                <Route path="/it-support" element={<ITSupportPage />} />
                <Route path="/it-training" element={<ITTrainingPage />} />
                <Route path="/it-asset-management" element={<ITAssetManagementPage />} />
                <Route path="/managed-it" element={<ManagedITPage />} />
                <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} />
                <Route path="/network-design" element={<NetworkDesignPage />} />
                <Route path="/network-security" element={<NetworkSecurityPage />} />
                <Route path="/network-solutions" element={<NetworkSolutionsPage />} />
                <Route path="/backup-recovery" element={<BackupRecoveryPage />} />
                <Route path="/disaster-recovery-advanced" element={<DisasterRecoveryAdvancedPage />} />
                <Route path="/performance-optimization" element={<PerformanceOptimizationPage />} />
                <Route path="/e-commerce-development" element={<ECommerceDevelopmentPage />} />
                <Route path="/custom-development" element={<CustomDevelopmentPage />} />
                <Route path="/mobile-app-development" element={<MobileAppDevelopmentPage />} />
                <Route path="/enterprise" element={<EnterprisePage />} />
                <Route path="/enterprise-solutions" element={<EnterpriseSolutionsPage />} />
                <Route path="/enterprise-integration" element={<EnterpriseIntegrationPage />} />
                <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
                <Route path="/process-automation" element={<ProcessAutomationPage />} />
                <Route path="/workflow-automation" element={<WorkflowAutomationPage />} />
                <Route path="/automation" element={<AutomationPage />} />
                <Route path="/business-apps" element={<BusinessAppsPage />} />
                <Route path="/productivity" element={<ProductivityPage />} />
                <Route path="/project-management-pro" element={<ProjectManagementProPage />} />
                <Route path="/task-manager-pro" element={<TaskManagerProPage />} />
                <Route path="/marketing-tools" element={<MarketingToolsPage />} />
                <Route path="/seo-optimizer" element={<SEOOptimizerPage />} />
                <Route path="/landing-page-builder" element={<LandingPageBuilderPage />} />
                <Route path="/email-marketing-automation" element={<EmailMarketingAutomationPage />} />
                <Route path="/email-optimizer" element={<EmailOptimizerPage />} />
                <Route path="/developer-tools" element={<DeveloperToolsPage />} />
                <Route path="/api" element={<APIPage />} />
                <Route path="/api-development" element={<APIDevelopmentPage />} />
                <Route path="/api-development-advanced" element={<APIDevelopmentAdvancedPage />} />
                <Route path="/api-docs" element={<APIDocsPage />} />
                <Route path="/consultation" element={<ConsultationPage />} />
                <Route path="/innovation-labs" element={<InnovationLabsPage />} />
                <Route path="/specialized-services" element={<SpecializedServicesPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services-advertising" element={<ServicesAdvertisingPage />} />
                <Route path="/healthcare-it" element={<HealthcareITPage />} />
                <Route path="/financial-it" element={<FinancialITPage />} />
                <Route path="/health" element={<HealthPage />} />
                <Route path="/expense-tracker" element={<ExpenseTrackerPage />} />
                <Route path="/crm-lite" element={<CRMLitePage />} />
                <Route path="/intelligent-email-infrastructure" element={<IntelligentEmailInfrastructurePage />} />
                <Route path="/intelligent-database-migration" element={<IntelligentDatabaseMigrationPage />} />
                <Route path="/digital-twin-platform" element={<DigitalTwinPlatformPage />} />
                <Route path="/smart-cities" element={<SmartCitiesPage />} />
                <Route path="/smart-city-infrastructure" element={<SmartCityInfrastructurePage />} />
                
                {/* Micro SAAS Services */}
                <Route path="/micro-saas" element={<MicroSaasPage />} />
                <Route path="/micro-saas-services" element={<MicroSaasServicesPage />} />
                <Route path="/micro-saas/ai-content-writer" element={<MicroSaasAIContentWriterPage />} />
                <Route path="/micro-saas/ai-content-writer-pro" element={<MicroSaasAIContentWriterProPage />} />
                <Route path="/micro-saas/analytics-dashboard" element={<MicroSaasAnalyticsDashboardPage />} />
                <Route path="/micro-saas/appointment-scheduler" element={<MicroSaasAppointmentSchedulerPage />} />
                <Route path="/micro-saas/chat-analytics" element={<MicroSaasChatAnalyticsPage />} />
                <Route path="/micro-saas/content-generator" element={<MicroSaasContentGeneratorPage />} />
                <Route path="/micro-saas/document-processor" element={<MicroSaasDocumentProcessorPage />} />
                <Route path="/micro-saas/email-marketing" element={<MicroSaasEmailMarketingPage />} />
                <Route path="/micro-saas/expense-tracker" element={<MicroSaasExpenseTrackerPage />} />
                <Route path="/micro-saas/inventory-management" element={<MicroSaasInventoryManagementPage />} />
                <Route path="/micro-saas/lead-scoring" element={<MicroSaasLeadScoringPage />} />
                <Route path="/micro-saas/seo-optimizer" element={<MicroSaasSEOOptimizerPage />} />
                <Route path="/micro-saas/social-manager" element={<MicroSaasSocialManagerPage />} />
                <Route path="/micro-saas/support-bot" element={<MicroSaasSupportBotPage />} />
                <Route path="/micro-saas-services/ai-analytics-dashboard" element={<MicroSaasServicesAIAnalyticsDashboardPage />} />
                <Route path="/micro-saas-services/ai-chatbot-builder" element={<MicroSaasServicesAIChatbotBuilderPage />} />
                <Route path="/micro-saas-services/ai-content-generator" element={<MicroSaasServicesAIContentGeneratorPage />} />
                <Route path="/micro-saas-services/ai-email-assistant" element={<MicroSaasServicesAIEmailAssistantPage />} />
                <Route path="/micro-saas-services/ai-lead-generation" element={<MicroSaasServicesAILeadGenerationPage />} />
                
                {/* Legal and Support */}
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/terms-of-service" element={<TermsOfServicePage />} />
                <Route path="/cookies" element={<CookiesPage />} />
                <Route path="/cookie-policy" element={<CookiePolicyPage />} />
                <Route path="/help" element={<HelpPage />} />
                <Route path="/docs" element={<DocsPage />} />
                <Route path="/support" element={<SupportPage />} />
                <Route path="/status" element={<StatusPage />} />
                <Route path="/system-status" element={<SystemStatusPage />} />
                <Route path="/sla" element={<SLAPage />} />
                <Route path="/accessibility" element={<AccessibilityPage />} />
                <Route path="/accessibility-page" element={<AccessibilityPagePage />} />
                <Route path="/sitemap" element={<SitemapPage />} />
                <Route path="/sitemap.xml" element={<SitemapXMLPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/offline" element={<OfflinePage />} />
                <Route path="/not-found" element={<NotFoundPage />} />
                <Route path="/test-simple" element={<TestSimplePage />} />
                <Route path="/training" element={<TrainingPage />} />
                
                {/* 404 Route */}
                <Route path="*" element={
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="text-6xl font-bold text-white mb-4">404</h1>
                      <p className="text-xl text-gray-300 mb-8">Page not found</p>
                      <a 
                        href="/" 
                        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                      >
                        Go Home
                      </a>
                    </div>
                  </div>
                } />
              </Routes>
            </Suspense>
            <Footer />
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  )
}

export default App