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
const AboutPage = React.lazy(() => import('./app/about/page'));
const ContactPage = React.lazy(() => import('./app/contact/page'));
const ServicesPage = React.lazy(() => import('./app/services/page'));
const PricingPage = React.lazy(() => import('./app/pricing/page'));
const BlogPage = React.lazy(() => import('./app/blog/page'));
const CaseStudiesPage = React.lazy(() => import('./app/case-studies/page'));
const CareersPage = React.lazy(() => import('./app/careers/page'));
const AiServicesPage = React.lazy(() => import('./app/ai-services/page'));
const ItServicesPage = React.lazy(() => import('./app/it-services/page'));
const MicroSaasPage = React.lazy(() => import('./app/micro-saas/page'));
const TutorialsPage = React.lazy(() => import('./app/tutorials/page'));
const ConsultationPage = React.lazy(() => import('./app/consultation/page'));
const DemoPage = React.lazy(() => import('./app/demo/page'));
const SupportPage = React.lazy(() => import('./app/support/page'));
const PrivacyPage = React.lazy(() => import('./app/privacy/page'));
const TermsPage = React.lazy(() => import('./app/terms/page'));
const CookiesPage = React.lazy(() => import('./app/cookies/page'));
const SitemapPage = React.lazy(() => import('./app/sitemap/page'));

// AI Service Pages
const AiAnalyticsPage = React.lazy(() => import('./app/ai-analytics/page'));
const AiAutomationPage = React.lazy(() => import('./app/ai-automation/page'));
const AiChatbotBuilderPage = React.lazy(() => import('./app/ai-chatbot-builder/page'));
const AiCybersecurityPage = React.lazy(() => import('./app/ai-cybersecurity/page'));
const AiCrmPage = React.lazy(() => import('./app/ai-crm/page'));
const AiDataAnalyticsPage = React.lazy(() => import('./app/ai-data-analytics/page'));
const AiHealthcarePage = React.lazy(() => import('./app/ai-healthcare/page'));
const AiFinancialServicesPage = React.lazy(() => import('./app/ai-financial-services/page'));
const AiMarketingPage = React.lazy(() => import('./app/ai-marketing/page'));
const AiProjectManagementPage = React.lazy(() => import('./app/ai-project-management/page'));
const AiCustomerServicePage = React.lazy(() => import('./app/ai-customer-service/page'));
const AiContentGenerationPage = React.lazy(() => import('./app/ai-content-generation/page'));
const AiBusinessIntelligencePage = React.lazy(() => import('./app/ai-business-intelligence/page'));
const AiPredictiveAnalyticsPage = React.lazy(() => import('./app/ai-predictive-analytics/page'));
const AiFraudDetectionPage = React.lazy(() => import('./app/ai-fraud-detection/page'));
const AiRecommendationEnginePage = React.lazy(() => import('./app/ai-recommendation-engine/page'));
const AiSentimentAnalysisPage = React.lazy(() => import('./app/ai-sentiment-analysis/page'));
const AiComputerVisionPage = React.lazy(() => import('./app/ai-computer-vision/page'));
const AiNlpPage = React.lazy(() => import('./app/ai-nlp/page'));
const AiMlPage = React.lazy(() => import('./app/ai-ml/page'));
const AiRoboticsPage = React.lazy(() => import('./app/ai-robotics/page'));
const AiQuantumComputingPage = React.lazy(() => import('./app/ai-quantum-computing/page'));
const AiEdgeComputingPage = React.lazy(() => import('./app/ai-edge-computing/page'));
const AiBlockchainSolutionsPage = React.lazy(() => import('./app/ai-blockchain-solutions/page'));
const AiSmartCitySolutionsPage = React.lazy(() => import('./app/ai-smart-city-solutions/page'));
const AiEnergyPage = React.lazy(() => import('./app/ai-energy/page'));
const AiManufacturingPage = React.lazy(() => import('./app/ai-manufacturing/page'));
const AiEducationPage = React.lazy(() => import('./app/ai-education/page'));
const AiLegalPage = React.lazy(() => import('./app/ai-legal/page'));
const AiInsurancePage = React.lazy(() => import('./app/ai-insurance/page'));
const AiRealEstatePage = React.lazy(() => import('./app/ai-real-estate/page'));
const AiFitnessCoachPage = React.lazy(() => import('./app/ai-fitness-coach/page'));
const AiHealthTrackerPage = React.lazy(() => import('./app/ai-health-tracker/page'));
const AiMentalHealthCompanionPage = React.lazy(() => import('./app/ai-mental-health-companion/page'));
const AiHrPage = React.lazy(() => import('./app/ai-hr/page'));
const AiHrSolutionsPage = React.lazy(() => import('./app/ai-hr-solutions/page'));
const AiHrAssistantPage = React.lazy(() => import('./app/ai-hr-assistant/page'));
const AiRecruitmentAssistantPage = React.lazy(() => import('./app/ai-recruitment-assistant/page'));
const AiExpenseTrackerPage = React.lazy(() => import('./app/ai-expense-tracker/page'));
const AiExpenseTrackerProPage = React.lazy(() => import('./app/ai-expense-tracker-pro/page'));
const AiInvoiceGeneratorPage = React.lazy(() => import('./app/ai-invoice-generator/page'));
const AiPasswordManagerPage = React.lazy(() => import('./app/ai-password-manager/page'));
const AiSchedulerPage = React.lazy(() => import('./app/ai-scheduler/page'));
const AiSmartCalendarPage = React.lazy(() => import('./app/ai-smart-calendar/page'));
const AiTimeTrackerPage = React.lazy(() => import('./app/ai-time-tracker/page'));
const AiTaskManagerPage = React.lazy(() => import('./app/ai-task-manager/page'));
const AiProjectManagerPage = React.lazy(() => import('./app/ai-project-manager/page'));
const AiProjectManagementProPage = React.lazy(() => import('./app/ai-project-management-pro/page'));
const AiMeetingAssistantPage = React.lazy(() => import('./app/ai-meeting-assistant/page'));
const AiMeetingTranscriberPage = React.lazy(() => import('./app/ai-meeting-transcriber/page'));
const AiEmailAssistantPage = React.lazy(() => import('./app/ai-email-assistant/page'));
const AiEmailAutomationPage = React.lazy(() => import('./app/ai-email-automation/page'));
const AiEmailMarketingPage = React.lazy(() => import('./app/ai-email-marketing/page'));
const AiEmailMarketingAutomationPage = React.lazy(() => import('./app/ai-email-marketing-automation/page'));
const AiSocialMediaSchedulerPage = React.lazy(() => import('./app/ai-social-media-scheduler/page'));
const AiSocialSchedulerPage = React.lazy(() => import('./app/ai-social-scheduler/page'));
const AiSocialMediaManagerPage = React.lazy(() => import('./app/ai-social-media-manager/page'));
const AiContentWriterPage = React.lazy(() => import('./app/ai-content-writer/page'));
const AiContentGeneratorPage = React.lazy(() => import('./app/ai-content-generator/page'));
const AiContentGenerationProPage = React.lazy(() => import('./app/ai-content-generation-pro/page'));
const AiContentStudioPage = React.lazy(() => import('./app/ai-content-studio/page'));
const AiContentManagementPage = React.lazy(() => import('./app/ai-content-management/page'));
const AiContentModerationPage = React.lazy(() => import('./app/ai-content-moderation/page'));
const AiContentModerationProPage = React.lazy(() => import('./app/ai-content-moderation-pro/page'));
const AiSeoOptimizerPage = React.lazy(() => import('./app/ai-seo-optimizer/page'));
const AiLogoDesignerPage = React.lazy(() => import('./app/ai-logo-designer/page'));
const AiDesignStudioPage = React.lazy(() => import('./app/ai-design-studio/page'));
const AiFashionDesignPage = React.lazy(() => import('./app/ai-fashion-design/page'));
const AiVideoEditorPage = React.lazy(() => import('./app/ai-video-editor/page'));
const AiVideoGeneratorPage = React.lazy(() => import('./app/ai-video-generator/page'));
const AiVideoGenerationPage = React.lazy(() => import('./app/ai-video-generation/page'));
const AiVideoAnalysisPage = React.lazy(() => import('./app/ai-video-analysis/page'));
const AiMusicCompositionPage = React.lazy(() => import('./app/ai-music-composition/page'));
const AiVoiceAssistantPage = React.lazy(() => import('./app/ai-voice-assistant/page'));
const AiVoiceCloningStudioPage = React.lazy(() => import('./app/ai-voice-cloning-studio/page'));
const AiSpeechSynthesisPage = React.lazy(() => import('./app/ai-speech-synthesis/page'));
const AiVoiceSolutionsPage = React.lazy(() => import('./app/ai-voice-solutions/page'));
const AiConversationalAiPage = React.lazy(() => import('./app/ai-conversational-ai/page'));
const AiConversationAnalyticsPage = React.lazy(() => import('./app/ai-conversation-analytics/page'));
const AiCustomerSupportPage = React.lazy(() => import('./app/ai-customer-support/page'));
const AiCustomerSupportBotPage = React.lazy(() => import('./app/ai-customer-support-bot/page'));
const AiCustomerSupportChatbotPage = React.lazy(() => import('./app/ai-customer-support-chatbot/page'));
const AiCustomerChurnPage = React.lazy(() => import('./app/ai-customer-churn/page'));
const AiCustomerInsightsPage = React.lazy(() => import('./app/ai-customer-insights/page'));
const AiLeadGenerationPage = React.lazy(() => import('./app/ai-lead-generation/page'));
const AiLeadScoringPage = React.lazy(() => import('./app/ai-lead-scoring/page'));
const AiSalesAutomationPage = React.lazy(() => import('./app/ai-sales-automation/page'));
const AiCrmAssistantPage = React.lazy(() => import('./app/ai-crm-assistant/page'));
const AiFinancialAdvisorPage = React.lazy(() => import('./app/ai-financial-advisor/page'));
const AiFinancialAnalyzerPage = React.lazy(() => import('./app/ai-financial-analyzer/page'));
const AiFinancialAnalyticsProPage = React.lazy(() => import('./app/ai-financial-analytics-pro/page'));
const AiFinancialCrimeDetectionProPage = React.lazy(() => import('./app/ai-financial-crime-detection-pro/page'));
const AiFinancialForecastingPage = React.lazy(() => import('./app/ai-financial-forecasting/page'));
const AiFinancialPlannerPage = React.lazy(() => import('./app/ai-financial-planner/page'));
const AiInvestmentOptimizerPage = React.lazy(() => import('./app/ai-investment-optimizer/page'));
const AiStockPortfolioManagerPage = React.lazy(() => import('./app/ai-stock-portfolio-manager/page'));
const AiQuantumFinancialOraclePage = React.lazy(() => import('./app/ai-quantum-financial-oracle/page'));
const AiFintechPage = React.lazy(() => import('./app/ai-fintech/page'));
const AiAccountingAssistantPage = React.lazy(() => import('./app/ai-accounting-assistant/page'));
const AiExpenseTrackerPage2 = React.lazy(() => import('./app/expense-tracker/page'));
const AiEcommerceAssistantPage = React.lazy(() => import('./app/ai-ecommerce-assistant/page'));
const AiEcommerceOptimizerPage = React.lazy(() => import('./app/ai-ecommerce-optimizer/page'));
const AiEcommerceOptimizerProPage = React.lazy(() => import('./app/ai-ecommerce-optimizer-pro/page'));
const AiEcommerceSolutionsPage = React.lazy(() => import('./app/ai-ecommerce-solutions/page'));
const AiInventoryManagerPage = React.lazy(() => import('./app/ai-inventory-manager/page'));
const AiInventoryManagementPage = React.lazy(() => import('./app/ai-inventory-management/page'));
const AiSupplyChainPage = React.lazy(() => import('./app/ai-supply-chain/page'));
const AiSupplyChainAiPage = React.lazy(() => import('./app/ai-supply-chain-ai/page'));
const AiSupplyChainOptimizerPage = React.lazy(() => import('./app/ai-supply-chain-optimizer/page'));
const AiSupplyChainOptimizationProPage = React.lazy(() => import('./app/ai-supply-chain-optimization-pro/page'));
const AiPredictiveMaintenancePage = React.lazy(() => import('./app/ai-predictive-maintenance/page'));
const AiPredictiveModelingPage = React.lazy(() => import('./app/ai-predictive-modeling/page'));
const AiQualityAssurancePage = React.lazy(() => import('./app/ai-quality-assurance/page'));
const AiAutomatedTestingPage = React.lazy(() => import('./app/ai-automated-testing/page'));
const AiLoadTestingPage = React.lazy(() => import('./app/ai-load-testing/page'));
const AiDevopsAutomationPage = React.lazy(() => import('./app/ai-devops-automation/page'));
const AiOpsPage = React.lazy(() => import('./app/ai-ops/page'));
const AiInfrastructureMonitoringPage = React.lazy(() => import('./app/ai-infrastructure-monitoring/page'));
const AiSecurityMonitorPage = React.lazy(() => import('./app/ai-security-monitor/page'));
const AiCybersecurityMonitorPage = React.lazy(() => import('./app/ai-cybersecurity-monitor/page'));
const AiCybersecurityMonitorProPage = React.lazy(() => import('./app/ai-cybersecurity-monitor-pro/page'));
const AiCybersecuritySuitePage = React.lazy(() => import('./app/ai-cybersecurity-suite/page'));
const AiCybersecuritySuiteProPage = React.lazy(() => import('./app/ai-cybersecurity-suite-pro/page'));
const AiCyberDefenseMatrixPage = React.lazy(() => import('./app/ai-cyber-defense-matrix/page'));
const AiBlockchainAnalyticsPage = React.lazy(() => import('./app/ai-blockchain-analytics/page'));
const AiSmartContractAuditorPage = React.lazy(() => import('./app/ai-smart-contract-auditor/page'));
const AiDocumentProcessingPage = React.lazy(() => import('./app/ai-document-processing/page'));
const AiDocumentIntelligencePage = React.lazy(() => import('./app/ai-document-intelligence/page'));
const AiDocumentProcessorPage = React.lazy(() => import('./app/ai-document-processor/page'));
const AiDocumentScannerPage = React.lazy(() => import('./app/ai-document-scanner/page'));
const AiKnowledgeManagementPage = React.lazy(() => import('./app/ai-knowledge-management/page'));
const AiLearningPlatformPage = React.lazy(() => import('./app/ai-learning-platform/page'));
const AiLegalAssistantPage = React.lazy(() => import('./app/ai-legal-assistant/page'));
const AiLegalResearchProPage = React.lazy(() => import('./app/ai-legal-research-pro/page'));
const AiTranslationServicePage = React.lazy(() => import('./app/ai-translation-service/page'));
const AiTranslationServicesPage = React.lazy(() => import('./app/ai-translation-services/page'));
const AiHolographicWorkspacePage = React.lazy(() => import('./app/ai-holographic-workspace/page'));
const AiNeuralInterfacePage = React.lazy(() => import('./app/ai-neural-interface/page'));
const AiNeuralMemoryAssistantPage = React.lazy(() => import('./app/ai-neural-memory-assistant/page'));
const AiTelepathicInterfacePage = React.lazy(() => import('./app/ai-telepathic-interface/page'));
const AiSpaceTechnologyPage = React.lazy(() => import('./app/ai-space-technology/page'));
const AiSpaceTechnologyProPage = React.lazy(() => import('./app/ai-space-technology-pro/page'));
const AiSpaceMissionOptimizerPage = React.lazy(() => import('./app/ai-space-mission-optimizer/page'));
const AiQuantumComputingSimulatorPage = React.lazy(() => import('./app/ai-quantum-computing-simulator/page'));
const AiQuantumTaskOptimizerPage = React.lazy(() => import('./app/ai-quantum-task-optimizer/page'));
const AiQuantumOptimizationPage = React.lazy(() => import('./app/ai-quantum-optimization/page'));
const AiDrugDiscoveryProPage = React.lazy(() => import('./app/ai-drug-discovery-pro/page'));
const AiHealthcareSolutionsPage = React.lazy(() => import('./app/ai-healthcare-solutions/page'));
const AiHealthcareDiagnosticsPage = React.lazy(() => import('./app/ai-healthcare-diagnostics/page'));
const AiClimateSolutionsProPage = React.lazy(() => import('./app/ai-climate-solutions-pro/page'));
const AiClimatePredictionEnginePage = React.lazy(() => import('./app/ai-climate-prediction-engine/page'));
const AiEnergyGridManagementProPage = React.lazy(() => import('./app/ai-energy-grid-management-pro/page'));
const AiAgriculturalIntelligenceProPage = React.lazy(() => import('./app/ai-agricultural-intelligence-pro/page'));
const AiContentDeliveryNetworkPage = React.lazy(() => import('./app/ai-content-delivery-network/page'));
const AiCloudInfrastructurePage = React.lazy(() => import('./app/ai-cloud-infrastructure/page'));
const AiIntegrationServicesPage = React.lazy(() => import('./app/ai-integration-services/page'));
const AiMobileAppBuilderPage = React.lazy(() => import('./app/ai-mobile-app-builder/page'));
const AiMobileAppDevelopmentPage = React.lazy(() => import('./app/ai-mobile-app-development/page'));
const AiMobileBuilderPage = React.lazy(() => import('./app/ai-mobile-builder/page'));
const AiWebsiteBuilderPage = React.lazy(() => import('./app/ai-website-builder/page'));
const AiSmartHomeControllerPage = React.lazy(() => import('./app/ai-smart-home-controller/page'));
const AiSmartInvoicePage = React.lazy(() => import('./app/ai-smart-invoice/page'));
const AiSmartSchedulerPage = React.lazy(() => import('./app/ai-smart-scheduler/page'));
const AiVisionPage = React.lazy(() => import('./app/ai-vision/page'));
const AiImageRecognitionPage = React.lazy(() => import('./app/ai-image-recognition/page'));
const Ai3dGenerationPage = React.lazy(() => import('./app/ai-3d-generation/page'));
const AiHrAssistantPage2 = React.lazy(() => import('./app/ai-hr-assistant/page'));
const AiHrSolutionsPage2 = React.lazy(() => import('./app/ai-hr-solutions/page'));
const AiHrPage2 = React.lazy(() => import('./app/ai-hr/page'));
const AiRecruitmentAssistantPage2 = React.lazy(() => import('./app/ai-recruitment-assistant/page'));
const AiExpenseTrackerPage3 = React.lazy(() => import('./app/ai-expense-tracker/page'));
const AiExpenseTrackerProPage2 = React.lazy(() => import('./app/ai-expense-tracker-pro/page'));
const AiInvoiceGeneratorPage2 = React.lazy(() => import('./app/ai-invoice-generator/page'));
const AiPasswordManagerPage2 = React.lazy(() => import('./app/ai-password-manager/page'));
const AiSchedulerPage2 = React.lazy(() => import('./app/ai-scheduler/page'));
const AiSmartCalendarPage2 = React.lazy(() => import('./app/ai-smart-calendar/page'));
const AiTimeTrackerPage2 = React.lazy(() => import('./app/ai-time-tracker/page'));
const AiTaskManagerPage2 = React.lazy(() => import('./app/ai-task-manager/page'));
const AiProjectManagerPage2 = React.lazy(() => import('./app/ai-project-manager/page'));
const AiProjectManagementProPage2 = React.lazy(() => import('./app/ai-project-management-pro/page'));
const AiMeetingAssistantPage2 = React.lazy(() => import('./app/ai-meeting-assistant/page'));
const AiMeetingTranscriberPage2 = React.lazy(() => import('./app/ai-meeting-transcriber/page'));
const AiEmailAssistantPage2 = React.lazy(() => import('./app/ai-email-assistant/page'));
const AiEmailAutomationPage2 = React.lazy(() => import('./app/ai-email-automation/page'));
const AiEmailMarketingPage2 = React.lazy(() => import('./app/ai-email-marketing/page'));
const AiEmailMarketingAutomationPage2 = React.lazy(() => import('./app/ai-email-marketing-automation/page'));
const AiSocialMediaSchedulerPage2 = React.lazy(() => import('./app/ai-social-media-scheduler/page'));
const AiSocialSchedulerPage2 = React.lazy(() => import('./app/ai-social-scheduler/page'));
const AiSocialMediaManagerPage2 = React.lazy(() => import('./app/ai-social-media-manager/page'));
const AiContentWriterPage2 = React.lazy(() => import('./app/ai-content-writer/page'));
const AiContentGeneratorPage2 = React.lazy(() => import('./app/ai-content-generator/page'));
const AiContentGenerationProPage2 = React.lazy(() => import('./app/ai-content-generation-pro/page'));
const AiContentStudioPage2 = React.lazy(() => import('./app/ai-content-studio/page'));
const AiContentManagementPage2 = React.lazy(() => import('./app/ai-content-management/page'));
const AiContentModerationPage2 = React.lazy(() => import('./app/ai-content-moderation/page'));
const AiContentModerationProPage2 = React.lazy(() => import('./app/ai-content-moderation-pro/page'));
const AiSeoOptimizerPage2 = React.lazy(() => import('./app/ai-seo-optimizer/page'));
const AiLogoDesignerPage2 = React.lazy(() => import('./app/ai-logo-designer/page'));
const AiDesignStudioPage2 = React.lazy(() => import('./app/ai-design-studio/page'));
const AiFashionDesignPage2 = React.lazy(() => import('./app/ai-fashion-design/page'));
const AiVideoEditorPage2 = React.lazy(() => import('./app/ai-video-editor/page'));
const AiVideoGeneratorPage2 = React.lazy(() => import('./app/ai-video-generator/page'));
const AiVideoGenerationPage2 = React.lazy(() => import('./app/ai-video-generation/page'));
const AiVideoAnalysisPage2 = React.lazy(() => import('./app/ai-video-analysis/page'));
const AiMusicCompositionPage2 = React.lazy(() => import('./app/ai-music-composition/page'));
const AiVoiceAssistantPage2 = React.lazy(() => import('./app/ai-voice-assistant/page'));
const AiVoiceCloningStudioPage2 = React.lazy(() => import('./app/ai-voice-cloning-studio/page'));
const AiSpeechSynthesisPage2 = React.lazy(() => import('./app/ai-speech-synthesis/page'));
const AiVoiceSolutionsPage2 = React.lazy(() => import('./app/ai-voice-solutions/page'));
const AiConversationalAiPage2 = React.lazy(() => import('./app/ai-conversational-ai/page'));
const AiConversationAnalyticsPage2 = React.lazy(() => import('./app/ai-conversation-analytics/page'));
const AiCustomerSupportPage2 = React.lazy(() => import('./app/ai-customer-support/page'));
const AiCustomerSupportBotPage2 = React.lazy(() => import('./app/ai-customer-support-bot/page'));
const AiCustomerSupportChatbotPage2 = React.lazy(() => import('./app/ai-customer-support-chatbot/page'));
const AiCustomerChurnPage2 = React.lazy(() => import('./app/ai-customer-churn/page'));
const AiCustomerInsightsPage2 = React.lazy(() => import('./app/ai-customer-insights/page'));
const AiLeadGenerationPage2 = React.lazy(() => import('./app/ai-lead-generation/page'));
const AiLeadScoringPage2 = React.lazy(() => import('./app/ai-lead-scoring/page'));
const AiSalesAutomationPage2 = React.lazy(() => import('./app/ai-sales-automation/page'));
const AiCrmAssistantPage2 = React.lazy(() => import('./app/ai-crm-assistant/page'));
const AiFinancialAdvisorPage2 = React.lazy(() => import('./app/ai-financial-advisor/page'));
const AiFinancialAnalyzerPage2 = React.lazy(() => import('./app/ai-financial-analyzer/page'));
const AiFinancialAnalyticsProPage2 = React.lazy(() => import('./app/ai-financial-analytics-pro/page'));
const AiFinancialCrimeDetectionProPage2 = React.lazy(() => import('./app/ai-financial-crime-detection-pro/page'));
const AiFinancialForecastingPage2 = React.lazy(() => import('./app/ai-financial-forecasting/page'));
const AiFinancialPlannerPage2 = React.lazy(() => import('./app/ai-financial-planner/page'));
const AiInvestmentOptimizerPage2 = React.lazy(() => import('./app/ai-investment-optimizer/page'));
const AiStockPortfolioManagerPage2 = React.lazy(() => import('./app/ai-stock-portfolio-manager/page'));
const AiQuantumFinancialOraclePage2 = React.lazy(() => import('./app/ai-quantum-financial-oracle/page'));
const AiFintechPage2 = React.lazy(() => import('./app/ai-fintech/page'));
const AiAccountingAssistantPage2 = React.lazy(() => import('./app/ai-accounting-assistant/page'));
const AiExpenseTrackerPage4 = React.lazy(() => import('./app/ai-expense-tracker/page'));
const AiEcommerceAssistantPage2 = React.lazy(() => import('./app/ai-ecommerce-assistant/page'));
const AiEcommerceOptimizerPage2 = React.lazy(() => import('./app/ai-ecommerce-optimizer/page'));
const AiEcommerceOptimizerProPage2 = React.lazy(() => import('./app/ai-ecommerce-optimizer-pro/page'));
const AiEcommerceSolutionsPage2 = React.lazy(() => import('./app/ai-ecommerce-solutions/page'));
const AiInventoryManagerPage2 = React.lazy(() => import('./app/ai-inventory-manager/page'));
const AiInventoryManagementPage2 = React.lazy(() => import('./app/ai-inventory-management/page'));
const AiSupplyChainPage2 = React.lazy(() => import('./app/ai-supply-chain/page'));
const AiSupplyChainAiPage2 = React.lazy(() => import('./app/ai-supply-chain-ai/page'));
const AiSupplyChainOptimizerPage2 = React.lazy(() => import('./app/ai-supply-chain-optimizer/page'));
const AiSupplyChainOptimizationProPage2 = React.lazy(() => import('./app/ai-supply-chain-optimization-pro/page'));
const AiPredictiveMaintenancePage2 = React.lazy(() => import('./app/ai-predictive-maintenance/page'));
const AiPredictiveModelingPage2 = React.lazy(() => import('./app/ai-predictive-modeling/page'));
const AiQualityAssurancePage2 = React.lazy(() => import('./app/ai-quality-assurance/page'));
const AiAutomatedTestingPage2 = React.lazy(() => import('./app/ai-automated-testing/page'));
const AiLoadTestingPage2 = React.lazy(() => import('./app/ai-load-testing/page'));
const AiDevopsAutomationPage2 = React.lazy(() => import('./app/ai-devops-automation/page'));
const AiOpsPage2 = React.lazy(() => import('./app/ai-ops/page'));
const AiInfrastructureMonitoringPage2 = React.lazy(() => import('./app/ai-infrastructure-monitoring/page'));
const AiSecurityMonitorPage2 = React.lazy(() => import('./app/ai-security-monitor/page'));
const AiCybersecurityMonitorPage2 = React.lazy(() => import('./app/ai-cybersecurity-monitor/page'));
const AiCybersecurityMonitorProPage2 = React.lazy(() => import('./app/ai-cybersecurity-monitor-pro/page'));
const AiCybersecuritySuitePage2 = React.lazy(() => import('./app/ai-cybersecurity-suite/page'));
const AiCybersecuritySuiteProPage2 = React.lazy(() => import('./app/ai-cybersecurity-suite-pro/page'));
const AiCyberDefenseMatrixPage2 = React.lazy(() => import('./app/ai-cyber-defense-matrix/page'));
const AiBlockchainAnalyticsPage2 = React.lazy(() => import('./app/ai-blockchain-analytics/page'));
const AiSmartContractAuditorPage2 = React.lazy(() => import('./app/ai-smart-contract-auditor/page'));
const AiDocumentProcessingPage2 = React.lazy(() => import('./app/ai-document-processing/page'));
const AiDocumentIntelligencePage2 = React.lazy(() => import('./app/ai-document-intelligence/page'));
const AiDocumentProcessorPage2 = React.lazy(() => import('./app/ai-document-processor/page'));
const AiDocumentScannerPage2 = React.lazy(() => import('./app/ai-document-scanner/page'));
const AiKnowledgeManagementPage2 = React.lazy(() => import('./app/ai-knowledge-management/page'));
const AiLearningPlatformPage2 = React.lazy(() => import('./app/ai-learning-platform/page'));
const AiLegalAssistantPage2 = React.lazy(() => import('./app/ai-legal-assistant/page'));
const AiLegalResearchProPage2 = React.lazy(() => import('./app/ai-legal-research-pro/page'));
const AiTranslationServicePage2 = React.lazy(() => import('./app/ai-translation-service/page'));
const AiTranslationServicesPage2 = React.lazy(() => import('./app/ai-translation-services/page'));
const AiHolographicWorkspacePage2 = React.lazy(() => import('./app/ai-holographic-workspace/page'));
const AiNeuralInterfacePage2 = React.lazy(() => import('./app/ai-neural-interface/page'));
const AiNeuralMemoryAssistantPage2 = React.lazy(() => import('./app/ai-neural-memory-assistant/page'));
const AiTelepathicInterfacePage2 = React.lazy(() => import('./app/ai-telepathic-interface/page'));
const AiSpaceTechnologyPage2 = React.lazy(() => import('./app/ai-space-technology/page'));
const AiSpaceTechnologyProPage2 = React.lazy(() => import('./app/ai-space-technology-pro/page'));
const AiSpaceMissionOptimizerPage2 = React.lazy(() => import('./app/ai-space-mission-optimizer/page'));
const AiQuantumComputingSimulatorPage2 = React.lazy(() => import('./app/ai-quantum-computing-simulator/page'));
const AiQuantumTaskOptimizerPage2 = React.lazy(() => import('./app/ai-quantum-task-optimizer/page'));
const AiQuantumOptimizationPage2 = React.lazy(() => import('./app/ai-quantum-optimization/page'));
const AiDrugDiscoveryProPage2 = React.lazy(() => import('./app/ai-drug-discovery-pro/page'));
const AiHealthcareSolutionsPage2 = React.lazy(() => import('./app/ai-healthcare-solutions/page'));
const AiHealthcareDiagnosticsPage2 = React.lazy(() => import('./app/ai-healthcare-diagnostics/page'));
const AiClimateSolutionsProPage2 = React.lazy(() => import('./app/ai-climate-solutions-pro/page'));
const AiClimatePredictionEnginePage2 = React.lazy(() => import('./app/ai-climate-prediction-engine/page'));
const AiEnergyGridManagementProPage2 = React.lazy(() => import('./app/ai-energy-grid-management-pro/page'));
const AiAgriculturalIntelligenceProPage2 = React.lazy(() => import('./app/ai-agricultural-intelligence-pro/page'));
const AiContentDeliveryNetworkPage2 = React.lazy(() => import('./app/ai-content-delivery-network/page'));
const AiCloudInfrastructurePage2 = React.lazy(() => import('./app/ai-cloud-infrastructure/page'));
const AiIntegrationServicesPage2 = React.lazy(() => import('./app/ai-integration-services/page'));
const AiMobileAppBuilderPage2 = React.lazy(() => import('./app/ai-mobile-app-builder/page'));
const AiMobileAppDevelopmentPage2 = React.lazy(() => import('./app/ai-mobile-app-development/page'));
const AiMobileBuilderPage2 = React.lazy(() => import('./app/ai-mobile-builder/page'));
const AiWebsiteBuilderPage2 = React.lazy(() => import('./app/ai-website-builder/page'));
const AiSmartHomeControllerPage2 = React.lazy(() => import('./app/ai-smart-home-controller/page'));
const AiSmartInvoicePage2 = React.lazy(() => import('./app/ai-smart-invoice/page'));
const AiSmartSchedulerPage2 = React.lazy(() => import('./app/ai-smart-scheduler/page'));
const AiVisionPage2 = React.lazy(() => import('./app/ai-vision/page'));
const AiImageRecognitionPage2 = React.lazy(() => import('./app/ai-image-recognition/page'));
const Ai3dGenerationPage2 = React.lazy(() => import('./app/ai-3d-generation/page'));

// Performance monitoring hook
const AppWithPerformanceMonitoring: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  usePerformanceMonitor();
  return <React.Fragment>{children}</React.Fragment>;
};

// Main App Component
const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <SEOHead />
        <Router>
          <AppWithPerformanceMonitoring>
            <AnalyticsProvider>
              <PerformanceOptimizer>
                <EnhancedAccessibility>
                  <AccessibilityEnhancer>
                    <PerformanceMonitor />
                    <FuturisticBackground>
                      <div className="min-h-screen bg-slate-900 text-white">
                        <Navigation />
                        <Breadcrumb />
                        <Suspense fallback={<PageLoader />}>
                          <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                            <Route path="/services" element={<ServicesPage />} />
                            <Route path="/pricing" element={<PricingPage />} />
                            <Route path="/blog" element={<BlogPage />} />
                            <Route path="/case-studies" element={<CaseStudiesPage />} />
                            <Route path="/careers" element={<CareersPage />} />
                            <Route path="/ai-services" element={<AiServicesPage />} />
                            <Route path="/it-services" element={<ItServicesPage />} />
                            <Route path="/micro-saas" element={<MicroSaasPage />} />
                            <Route path="/tutorials" element={<TutorialsPage />} />
                            <Route path="/consultation" element={<ConsultationPage />} />
                            <Route path="/demo" element={<DemoPage />} />
                            <Route path="/support" element={<SupportPage />} />
                            <Route path="/privacy" element={<PrivacyPage />} />
                            <Route path="/terms" element={<TermsPage />} />
                            <Route path="/cookies" element={<CookiesPage />} />
                            <Route path="/sitemap" element={<SitemapPage />} />
                            
                            {/* AI Service Routes */}
                            <Route path="/ai-analytics" element={<AiAnalyticsPage />} />
                            <Route path="/ai-automation" element={<AiAutomationPage />} />
                            <Route path="/ai-chatbot-builder" element={<AiChatbotBuilderPage />} />
                            <Route path="/ai-cybersecurity" element={<AiCybersecurityPage />} />
                            <Route path="/ai-crm" element={<AiCrmPage />} />
                            <Route path="/ai-data-analytics" element={<AiDataAnalyticsPage />} />
                            <Route path="/ai-healthcare" element={<AiHealthcarePage />} />
                            <Route path="/ai-financial-services" element={<AiFinancialServicesPage />} />
                            <Route path="/ai-marketing" element={<AiMarketingPage />} />
                            <Route path="/ai-project-management" element={<AiProjectManagementPage />} />
                            <Route path="/ai-customer-service" element={<AiCustomerServicePage />} />
                            <Route path="/ai-content-generation" element={<AiContentGenerationPage />} />
                            <Route path="/ai-business-intelligence" element={<AiBusinessIntelligencePage />} />
                            <Route path="/ai-predictive-analytics" element={<AiPredictiveAnalyticsPage />} />
                            <Route path="/ai-fraud-detection" element={<AiFraudDetectionPage />} />
                            <Route path="/ai-recommendation-engine" element={<AiRecommendationEnginePage />} />
                            <Route path="/ai-sentiment-analysis" element={<AiSentimentAnalysisPage />} />
                            <Route path="/ai-computer-vision" element={<AiComputerVisionPage />} />
                            <Route path="/ai-nlp" element={<AiNlpPage />} />
                            <Route path="/ai-ml" element={<AiMlPage />} />
                            <Route path="/ai-robotics" element={<AiRoboticsPage />} />
                            <Route path="/ai-quantum-computing" element={<AiQuantumComputingPage />} />
                            <Route path="/ai-edge-computing" element={<AiEdgeComputingPage />} />
                            <Route path="/ai-blockchain-solutions" element={<AiBlockchainSolutionsPage />} />
                            <Route path="/ai-smart-city-solutions" element={<AiSmartCitySolutionsPage />} />
                            <Route path="/ai-energy" element={<AiEnergyPage />} />
                            <Route path="/ai-manufacturing" element={<AiManufacturingPage />} />
                            <Route path="/ai-education" element={<AiEducationPage />} />
                            <Route path="/ai-legal" element={<AiLegalPage />} />
                            <Route path="/ai-insurance" element={<AiInsurancePage />} />
                            <Route path="/ai-real-estate" element={<AiRealEstatePage />} />
                            <Route path="/ai-fitness-coach" element={<AiFitnessCoachPage />} />
                            <Route path="/ai-health-tracker" element={<AiHealthTrackerPage />} />
                            <Route path="/ai-mental-health-companion" element={<AiMentalHealthCompanionPage />} />
                            <Route path="/ai-hr" element={<AiHrPage />} />
                            <Route path="/ai-hr-solutions" element={<AiHrSolutionsPage />} />
                            <Route path="/ai-hr-assistant" element={<AiHrAssistantPage />} />
                            <Route path="/ai-recruitment-assistant" element={<AiRecruitmentAssistantPage />} />
                            <Route path="/ai-expense-tracker" element={<AiExpenseTrackerPage />} />
                            <Route path="/ai-expense-tracker-pro" element={<AiExpenseTrackerProPage />} />
                            <Route path="/ai-invoice-generator" element={<AiInvoiceGeneratorPage />} />
                            <Route path="/ai-password-manager" element={<AiPasswordManagerPage />} />
                            <Route path="/ai-scheduler" element={<AiSchedulerPage />} />
                            <Route path="/ai-smart-calendar" element={<AiSmartCalendarPage />} />
                            <Route path="/ai-time-tracker" element={<AiTimeTrackerPage />} />
                            <Route path="/ai-task-manager" element={<AiTaskManagerPage />} />
                            <Route path="/ai-project-manager" element={<AiProjectManagerPage />} />
                            <Route path="/ai-project-management-pro" element={<AiProjectManagementProPage />} />
                            <Route path="/ai-meeting-assistant" element={<AiMeetingAssistantPage />} />
                            <Route path="/ai-meeting-transcriber" element={<AiMeetingTranscriberPage />} />
                            <Route path="/ai-email-assistant" element={<AiEmailAssistantPage />} />
                            <Route path="/ai-email-automation" element={<AiEmailAutomationPage />} />
                            <Route path="/ai-email-marketing" element={<AiEmailMarketingPage />} />
                            <Route path="/ai-email-marketing-automation" element={<AiEmailMarketingAutomationPage />} />
                            <Route path="/ai-social-media-scheduler" element={<AiSocialMediaSchedulerPage />} />
                            <Route path="/ai-social-scheduler" element={<AiSocialSchedulerPage />} />
                            <Route path="/ai-social-media-manager" element={<AiSocialMediaManagerPage />} />
                            <Route path="/ai-content-writer" element={<AiContentWriterPage />} />
                            <Route path="/ai-content-generator" element={<AiContentGeneratorPage />} />
                            <Route path="/ai-content-generation-pro" element={<AiContentGenerationProPage />} />
                            <Route path="/ai-content-studio" element={<AiContentStudioPage />} />
                            <Route path="/ai-content-management" element={<AiContentManagementPage />} />
                            <Route path="/ai-content-moderation" element={<AiContentModerationPage />} />
                            <Route path="/ai-content-moderation-pro" element={<AiContentModerationProPage />} />
                            <Route path="/ai-seo-optimizer" element={<AiSeoOptimizerPage />} />
                            <Route path="/ai-logo-designer" element={<AiLogoDesignerPage />} />
                            <Route path="/ai-design-studio" element={<AiDesignStudioPage />} />
                            <Route path="/ai-fashion-design" element={<AiFashionDesignPage />} />
                            <Route path="/ai-video-editor" element={<AiVideoEditorPage />} />
                            <Route path="/ai-video-generator" element={<AiVideoGeneratorPage />} />
                            <Route path="/ai-video-generation" element={<AiVideoGenerationPage />} />
                            <Route path="/ai-video-analysis" element={<AiVideoAnalysisPage />} />
                            <Route path="/ai-music-composition" element={<AiMusicCompositionPage />} />
                            <Route path="/ai-voice-assistant" element={<AiVoiceAssistantPage />} />
                            <Route path="/ai-voice-cloning-studio" element={<AiVoiceCloningStudioPage />} />
                            <Route path="/ai-speech-synthesis" element={<AiSpeechSynthesisPage />} />
                            <Route path="/ai-voice-solutions" element={<AiVoiceSolutionsPage />} />
                            <Route path="/ai-conversational-ai" element={<AiConversationalAiPage />} />
                            <Route path="/ai-conversation-analytics" element={<AiConversationAnalyticsPage />} />
                            <Route path="/ai-customer-support" element={<AiCustomerSupportPage />} />
                            <Route path="/ai-customer-support-bot" element={<AiCustomerSupportBotPage />} />
                            <Route path="/ai-customer-support-chatbot" element={<AiCustomerSupportChatbotPage />} />
                            <Route path="/ai-customer-churn" element={<AiCustomerChurnPage />} />
                            <Route path="/ai-customer-insights" element={<AiCustomerInsightsPage />} />
                            <Route path="/ai-lead-generation" element={<AiLeadGenerationPage />} />
                            <Route path="/ai-lead-scoring" element={<AiLeadScoringPage />} />
                            <Route path="/ai-sales-automation" element={<AiSalesAutomationPage />} />
                            <Route path="/ai-crm-assistant" element={<AiCrmAssistantPage />} />
                            <Route path="/ai-financial-advisor" element={<AiFinancialAdvisorPage />} />
                            <Route path="/ai-financial-analyzer" element={<AiFinancialAnalyzerPage />} />
                            <Route path="/ai-financial-analytics-pro" element={<AiFinancialAnalyticsProPage />} />
                            <Route path="/ai-financial-crime-detection-pro" element={<AiFinancialCrimeDetectionProPage />} />
                            <Route path="/ai-financial-forecasting" element={<AiFinancialForecastingPage />} />
                            <Route path="/ai-financial-planner" element={<AiFinancialPlannerPage />} />
                            <Route path="/ai-investment-optimizer" element={<AiInvestmentOptimizerPage />} />
                            <Route path="/ai-stock-portfolio-manager" element={<AiStockPortfolioManagerPage />} />
                            <Route path="/ai-quantum-financial-oracle" element={<AiQuantumFinancialOraclePage />} />
                            <Route path="/ai-fintech" element={<AiFintechPage />} />
                            <Route path="/ai-accounting-assistant" element={<AiAccountingAssistantPage />} />
                            <Route path="/expense-tracker" element={<AiExpenseTrackerPage2 />} />
                            <Route path="/ai-ecommerce-assistant" element={<AiEcommerceAssistantPage />} />
                            <Route path="/ai-ecommerce-optimizer" element={<AiEcommerceOptimizerPage />} />
                            <Route path="/ai-ecommerce-optimizer-pro" element={<AiEcommerceOptimizerProPage />} />
                            <Route path="/ai-ecommerce-solutions" element={<AiEcommerceSolutionsPage />} />
                            <Route path="/ai-inventory-manager" element={<AiInventoryManagerPage />} />
                            <Route path="/ai-inventory-management" element={<AiInventoryManagementPage />} />
                            <Route path="/ai-supply-chain" element={<AiSupplyChainPage />} />
                            <Route path="/ai-supply-chain-ai" element={<AiSupplyChainAiPage />} />
                            <Route path="/ai-supply-chain-optimizer" element={<AiSupplyChainOptimizerPage />} />
                            <Route path="/ai-supply-chain-optimization-pro" element={<AiSupplyChainOptimizationProPage />} />
                            <Route path="/ai-predictive-maintenance" element={<AiPredictiveMaintenancePage />} />
                            <Route path="/ai-predictive-modeling" element={<AiPredictiveModelingPage />} />
                            <Route path="/ai-quality-assurance" element={<AiQualityAssurancePage />} />
                            <Route path="/ai-automated-testing" element={<AiAutomatedTestingPage />} />
                            <Route path="/ai-load-testing" element={<AiLoadTestingPage />} />
                            <Route path="/ai-devops-automation" element={<AiDevopsAutomationPage />} />
                            <Route path="/ai-ops" element={<AiOpsPage />} />
                            <Route path="/ai-infrastructure-monitoring" element={<AiInfrastructureMonitoringPage />} />
                            <Route path="/ai-security-monitor" element={<AiSecurityMonitorPage />} />
                            <Route path="/ai-cybersecurity-monitor" element={<AiCybersecurityMonitorPage />} />
                            <Route path="/ai-cybersecurity-monitor-pro" element={<AiCybersecurityMonitorProPage />} />
                            <Route path="/ai-cybersecurity-suite" element={<AiCybersecuritySuitePage />} />
                            <Route path="/ai-cybersecurity-suite-pro" element={<AiCybersecuritySuiteProPage />} />
                            <Route path="/ai-cyber-defense-matrix" element={<AiCyberDefenseMatrixPage />} />
                            <Route path="/ai-blockchain-analytics" element={<AiBlockchainAnalyticsPage />} />
                            <Route path="/ai-smart-contract-auditor" element={<AiSmartContractAuditorPage />} />
                            <Route path="/ai-document-processing" element={<AiDocumentProcessingPage />} />
                            <Route path="/ai-document-intelligence" element={<AiDocumentIntelligencePage />} />
                            <Route path="/ai-document-processor" element={<AiDocumentProcessorPage />} />
                            <Route path="/ai-document-scanner" element={<AiDocumentScannerPage />} />
                            <Route path="/ai-knowledge-management" element={<AiKnowledgeManagementPage />} />
                            <Route path="/ai-learning-platform" element={<AiLearningPlatformPage />} />
                            <Route path="/ai-legal-assistant" element={<AiLegalAssistantPage />} />
                            <Route path="/ai-legal-research-pro" element={<AiLegalResearchProPage />} />
                            <Route path="/ai-translation-service" element={<AiTranslationServicePage />} />
                            <Route path="/ai-translation-services" element={<AiTranslationServicesPage />} />
                            <Route path="/ai-holographic-workspace" element={<AiHolographicWorkspacePage />} />
                            <Route path="/ai-neural-interface" element={<AiNeuralInterfacePage />} />
                            <Route path="/ai-neural-memory-assistant" element={<AiNeuralMemoryAssistantPage />} />
                            <Route path="/ai-telepathic-interface" element={<AiTelepathicInterfacePage />} />
                            <Route path="/ai-space-technology" element={<AiSpaceTechnologyPage />} />
                            <Route path="/ai-space-technology-pro" element={<AiSpaceTechnologyProPage />} />
                            <Route path="/ai-space-mission-optimizer" element={<AiSpaceMissionOptimizerPage />} />
                            <Route path="/ai-quantum-computing-simulator" element={<AiQuantumComputingSimulatorPage />} />
                            <Route path="/ai-quantum-task-optimizer" element={<AiQuantumTaskOptimizerPage />} />
                            <Route path="/ai-quantum-optimization" element={<AiQuantumOptimizationPage />} />
                            <Route path="/ai-drug-discovery-pro" element={<AiDrugDiscoveryProPage />} />
                            <Route path="/ai-healthcare-solutions" element={<AiHealthcareSolutionsPage />} />
                            <Route path="/ai-healthcare-diagnostics" element={<AiHealthcareDiagnosticsPage />} />
                            <Route path="/ai-climate-solutions-pro" element={<AiClimateSolutionsProPage />} />
                            <Route path="/ai-climate-prediction-engine" element={<AiClimatePredictionEnginePage />} />
                            <Route path="/ai-energy-grid-management-pro" element={<AiEnergyGridManagementProPage />} />
                            <Route path="/ai-agricultural-intelligence-pro" element={<AiAgriculturalIntelligenceProPage />} />
                            <Route path="/ai-content-delivery-network" element={<AiContentDeliveryNetworkPage />} />
                            <Route path="/ai-cloud-infrastructure" element={<AiCloudInfrastructurePage />} />
                            <Route path="/ai-integration-services" element={<AiIntegrationServicesPage />} />
                            <Route path="/ai-mobile-app-builder" element={<AiMobileAppBuilderPage />} />
                            <Route path="/ai-mobile-app-development" element={<AiMobileAppDevelopmentPage />} />
                            <Route path="/ai-mobile-builder" element={<AiMobileBuilderPage />} />
                            <Route path="/ai-website-builder" element={<AiWebsiteBuilderPage />} />
                            <Route path="/ai-smart-home-controller" element={<AiSmartHomeControllerPage />} />
                            <Route path="/ai-smart-invoice" element={<AiSmartInvoicePage />} />
                            <Route path="/ai-smart-scheduler" element={<AiSmartSchedulerPage />} />
                            <Route path="/ai-vision" element={<AiVisionPage />} />
                            <Route path="/ai-image-recognition" element={<AiImageRecognitionPage />} />
                            <Route path="/ai-3d-generation" element={<Ai3dGenerationPage />} />
                          </Routes>
                        </Suspense>
                        <Footer />
                      </div>
                    </FuturisticBackground>
                  </AccessibilityEnhancer>
                </EnhancedAccessibility>
              </PerformanceOptimizer>
            </AnalyticsProvider>
          </AppWithPerformanceMonitoring>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;