import React, { useState, useEffect, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navigation from "./app/components/Navigation";
import Sidebar from "./app/components/Sidebar";
import Footer from "./app/components/Footer";
import LoadingPage from "./app/components/Loading";
import HomePage from "./app/page";
import AnalyticsProvider from "./app/components/AnalyticsProvider";
import PerformanceMonitor from "./app/components/PerformanceMonitor";
import WebVitalsTracker from "./app/components/WebVitalsTracker";
import AccessibilityEnhancer from "./app/components/AccessibilityEnhancer";
import CoreWebVitals from "./app/components/CoreWebVitals";
import FuturisticBackground from "./app/components/FuturisticBackground";
import ErrorBoundary from "./app/components/ErrorBoundary";
import Breadcrumb from "./app/components/Breadcrumb";
import EnhancedSEO from "./app/components/EnhancedSEO";
import PerformanceOptimizer from "./app/components/PerformanceOptimizer";

// Page Components
import AboutPage from './app/pages/AboutPage';
import ContactPage from './app/pages/ContactPage';
import ServicesPage from './app/pages/ServicesPage';
import BlogPage from './app/pages/BlogPage';
import TutorialsPage from './app/pages/TutorialsPage';
import DemoPage from './app/pages/DemoPage';
import SupportPage from './app/pages/SupportPage';
import PrivacyPage from './app/pages/PrivacyPage';
import TermsPage from './app/pages/TermsPage';
import PricingPage from './app/pages/PricingPage';
import SolutionsPage from './app/pages/SolutionsPage';
import MicroSaaSSolutionsPage from './app/micro-saas-solutions/page';
import AISolutionsPage from './app/ai-solutions/page';
import ITSolutionsPage from './app/it-solutions/page';

// Service Pages
import AIServicesPage from './app/pages/AIServicesPage';
import ITServicesPage from './app/pages/ITServicesPage';
import CloudInfrastructurePage from './app/pages/CloudInfrastructurePage';
import DigitalTransformationPage from './app/pages/DigitalTransformationPage';
import CaseStudiesPage from './app/pages/CaseStudiesPage';
import CareersPage from './app/pages/CareersPage';

// Additional Pages
import MicroSaaSPage from './app/pages/MicroSaaSPage';
import FiveGSolutionsPage from './app/pages/5GSolutionsPage';
import TeamPage from './app/pages/TeamPage';
import DocumentationPage from './app/pages/DocumentationPage';

// Lazy loaded pages
const ZionAIVideoGeneratorPage = React.lazy(() => import("./app/zion-ai-video-generator/page"));
const ZionAIInvoiceGeneratorPage = React.lazy(() => import("./app/zion-ai-invoice-generator/page"));
const ZionAICustomerInsightsPage = React.lazy(() => import("./app/zion-ai-customer-insights/page"));
const ZionAIEmailAnalyzerPage = React.lazy(() => import("./app/zion-ai-email-analyzer/page"));
const ZionSmartInventoryOptimizerPage = React.lazy(() => import("./app/zion-smart-inventory-optimizer/page"));
const ZionSmartExpenseCategorizerPage = React.lazy(() => import("./app/zion-smart-expense-categorizer/page"));
const ZionAIVoiceAssistantProPage = React.lazy(() => import("./app/zion-ai-voice-assistant-pro/page"));
const ZionAICodeReviewerPage = React.lazy(() => import("./app/zion-ai-code-reviewer/page"));
const ZionAISocialMediaManagerPage = React.lazy(() => import("./app/zion-ai-social-media-manager/page"));
const ZionAIContractAnalyzerPage = React.lazy(() => import("./app/zion-ai-contract-analyzer/page"));
const ZionAIPerformanceOptimizerPage = React.lazy(() => import("./app/zion-ai-performance-optimizer/page"));
const ZionAISupplyChainOptimizerPage = React.lazy(() => import("./app/zion-ai-supply-chain-optimizer/page"));
const ZionAIContentModeratorPage = React.lazy(() => import("./app/zion-ai-content-moderator/page"));
const ZionAITranslatorProPage = React.lazy(() => import("./app/zion-ai-translator-pro/page"));
const ZionAIDataCleanerPage = React.lazy(() => import("./app/zion-ai-data-cleaner/page"));
const ZionAICustomerSupportProPage = React.lazy(() => import("./app/zion-ai-customer-support-pro/page"));

// 5G Solutions Pages
const FiveGSolutionsPageLazy = React.lazy(() => import("./app/5g-solutions/page"));
const FiveGDataAnalyticsPage = React.lazy(() => import("./app/5g-data-analytics/page"));
const FiveGEdgeComputingPage = React.lazy(() => import("./app/5g-edge-computing/page"));
const FiveGImplementationPage = React.lazy(() => import("./app/5g-implementation/page"));
const FiveGMobileApplicationsPage = React.lazy(() => import("./app/5g-mobile-applications/page"));
const FiveGNetworkInfrastructurePage = React.lazy(() => import("./app/5g-network-infrastructure/page"));
const FiveGPrivateNetworksPage = React.lazy(() => import("./app/5g-private-networks/page"));
const FiveGSmartCitySolutionsPage = React.lazy(() => import("./app/5g-smart-city-solutions/page"));
const FiveGIotSolutionsPage = React.lazy(() => import("./app/5g-iot-solutions/page"));

// Additional AI Services Pages
const AIChatbotBuilderPage = React.lazy(() => import("./app/ai-chatbot-builder/page"));
const AICodeAssistantPage = React.lazy(() => import("./app/ai-code-assistant/page"));
const AIContentGeneratorPage = React.lazy(() => import("./app/ai-content-generation/page"));
const AICustomerServicePage = React.lazy(() => import("./app/ai-customer-support/page"));
const AIDataAnalyticsPage = React.lazy(() => import("./app/ai-data-analytics/page"));
const AIVoiceAssistantPage = React.lazy(() => import("./app/ai-voice-assistant/page"));
const AIMarketingPage = React.lazy(() => import("./app/ai-marketing/page"));
const AIProjectManagementPage = React.lazy(() => import("./app/ai-project-management/page"));
const AIRecommendationEnginePage = React.lazy(() => import("./app/ai-recommendation-engine/page"));
const AISalesAutomationPage = React.lazy(() => import("./app/ai-sales-automation/page"));
const AIWorkflowAutomationPage = React.lazy(() => import("./app/ai-workflow-automation/page"));
const AIPredictiveAnalyticsPage = React.lazy(() => import("./app/ai-predictive-analytics/page"));
const AICybersecurityPage = React.lazy(() => import("./app/ai-cybersecurity/page"));
const AIHealthcarePage = React.lazy(() => import("./app/ai-healthcare/page"));
const AIEcommerceSolutionsPage = React.lazy(() => import("./app/ai-ecommerce-solutions/page"));
const AIEducationPlatformPage = React.lazy(() => import("./app/ai-education-platform/page"));
const AIFintechPage = React.lazy(() => import("./app/ai-fintech/page"));
const AIMobileAppBuilderPage = React.lazy(() => import("./app/ai-mobile-app-builder/page"));
const AIContentCreationPage = React.lazy(() => import("./app/ai-content-creation/page"));
const AIContentWriterPage = React.lazy(() => import("./app/ai-content-writer/page"));
const AICustomerSupportChatbotPage = React.lazy(() => import("./app/ai-customer-support-chatbot/page"));
const AIDataVisualizationPage = React.lazy(() => import("./app/ai-data-visualization/page"));
const AITimeSeriesForecastingPage = React.lazy(() => import("./app/ai-time-series-forecasting/page"));
const AIFraudDetectionProPage = React.lazy(() => import("./app/ai-fraud-detection-pro/page"));
const AILanguageTranslationPage = React.lazy(() => import("./app/ai-language-translation/page"));
const AIMobileAppDevelopmentPage = React.lazy(() => import("./app/ai-mobile-app-development/page"));
const AINlpTextAnalysisPage = React.lazy(() => import("./app/ai-nlp-text-analysis/page"));
const AIDataMiningProPage = React.lazy(() => import("./app/ai-data-mining-pro/page"));

// IT Services Pages
const ITInfrastructurePage = React.lazy(() => import("./app/it-infrastructure/page"));
const CloudServicesPage = React.lazy(() => import("./app/cloud-services/page"));
const CybersecurityPage = React.lazy(() => import("./app/cybersecurity/page"));
const DatabaseManagementPage = React.lazy(() => import("./app/database-management/page"));
const DevOpsPage = React.lazy(() => import("./app/devops/page"));
const ITSupportPage = React.lazy(() => import("./app/it-support/page"));
const NetworkSolutionsPage = React.lazy(() => import("./app/network-solutions/page"));
const SoftwareDevelopmentPage = React.lazy(() => import("./app/software-development/page"));
const SystemIntegrationPage = React.lazy(() => import("./app/system-integration/page"));
const ITConsultingPage = React.lazy(() => import("./app/it-consulting/page"));
const ITTrainingPage = React.lazy(() => import("./app/it-training/page"));
const ITProjectManagementPage = React.lazy(() => import("./app/it-project-management/page"));
const ITPerformancePage = React.lazy(() => import("./app/it-performance/page"));
const ITAssetManagementPage = React.lazy(() => import("./app/it-asset-management/page"));
const ITMicroSaasPage = React.lazy(() => import("./app/it-micro-saas/page"));
const ITInfrastructureSolutionsPage = React.lazy(() => import("./app/it-infrastructure-solutions/page"));
const ITInfrastructureDesignPage = React.lazy(() => import("./app/it-infrastructure-design/page"));
const ITSecurityServicesPage = React.lazy(() => import("./app/it-security-services/page"));

// Cloud Solutions Pages
const CloudInfrastructurePageLazy = React.lazy(() => import("./app/cloud-infrastructure/page"));
const CloudMigrationPage = React.lazy(() => import("./app/cloud-migration/page"));
const CloudSecurityPage = React.lazy(() => import("./app/cloud-security/page"));
const CloudCostOptimizationPage = React.lazy(() => import("./app/cloud-cost-optimization/page"));
const CloudConsultingPage = React.lazy(() => import("./app/cloud-consulting/page"));
const CloudNativeDevelopmentPage = React.lazy(() => import("./app/cloud-native-development/page"));
const CloudNativeSecurityPage = React.lazy(() => import("./app/cloud-native-security/page"));
const CloudMigrationServicesPage = React.lazy(() => import("./app/cloud-migration-services/page"));
const CloudMigrationProPage = React.lazy(() => import("./app/cloud-migration-pro/page"));
const CloudMigrationAdvancedPage = React.lazy(() => import("./app/cloud-migration-advanced/page"));
const CloudInfrastructureManagerPage = React.lazy(() => import("./app/cloud-infrastructure-manager/page"));
const CloudInfrastructureManagementPage = React.lazy(() => import("./app/cloud-infrastructure-management/page"));

// Blockchain Pages
const BlockchainPage = React.lazy(() => import("./app/blockchain/page"));
const BlockchainWeb3Page = React.lazy(() => import("./app/blockchain-web3/page"));
const BlockchainDevelopmentPage = React.lazy(() => import("./app/blockchain-development/page"));
const BlockchainIntegrationServicesPage = React.lazy(() => import("./app/blockchain-integration-services/page"));

// IoT Pages
const IoTPage = React.lazy(() => import("./app/iot/page"));
const IoTSolutionsPage = React.lazy(() => import("./app/iot-solutions/page"));
const IoTPlatformPage = React.lazy(() => import("./app/iot-platform/page"));
const IoTIntegrationPage = React.lazy(() => import("./app/iot-integration/page"));
const IoTEdgeComputingPage = React.lazy(() => import("./app/iot-edge-computing/page"));
const IoTEdgePage = React.lazy(() => import("./app/iot-edge/page"));
const IoTDevelopmentPage = React.lazy(() => import("./app/iot-development/page"));

// Additional Pages
const AboutPageLazy = React.lazy(() => import("./app/about/page"));
const ContactPageLazy = React.lazy(() => import("./app/contact/page"));
const ServicesPageLazy = React.lazy(() => import("./app/services/page"));
const BlogPageLazy = React.lazy(() => import("./app/blog/page"));
const PricingPageLazy = React.lazy(() => import("./app/pricing/page"));
const CareersPageLazy = React.lazy(() => import("./app/careers/page"));
const EnterprisePage = React.lazy(() => import("./app/enterprise/page"));
const CustomSoftwarePage = React.lazy(() => import("./app/custom-software/page"));
const CybersecuritySolutionsPage = React.lazy(() => import("./app/cybersecurity-solutions/page"));
const CybersecurityAdvancedPage = React.lazy(() => import("./app/cybersecurity-advanced/page"));
const CybersecurityConsultingPage = React.lazy(() => import("./app/cybersecurity-consulting/page"));
const CybersecuritySuitePage = React.lazy(() => import("./app/cybersecurity-suite/page"));
const DataAnalyticsPage = React.lazy(() => import("./app/data-analytics/page"));
const DataAnalyticsBIPage = React.lazy(() => import("./app/data-analytics-bi/page"));
const DataCenterPage = React.lazy(() => import("./app/data-center/page"));
const DataCenterSolutionsPage = React.lazy(() => import("./app/data-center-solutions/page"));
const DataEngineeringPage = React.lazy(() => import("./app/data-engineering/page"));
const DataProtectionPage = React.lazy(() => import("./app/data-protection/page"));
const DataVisualizationPage = React.lazy(() => import("./app/data-visualization/page"));
const DatabasePage = React.lazy(() => import("./app/database/page"));
const DatabaseServicesPage = React.lazy(() => import("./app/database-services/page"));
const DemoPageLazy = React.lazy(() => import("./app/demo/page"));
const DeveloperToolsPage = React.lazy(() => import("./app/developer-tools/page"));
const DigitalTransformationPageLazy = React.lazy(() => import("./app/digital-transformation/page"));
const DigitalTwinPlatformPage = React.lazy(() => import("./app/digital-twin-platform/page"));
const DisasterRecoveryPage = React.lazy(() => import("./app/disaster-recovery/page"));
const DisasterRecoveryAdvancedPage = React.lazy(() => import("./app/disaster-recovery-advanced/page"));
const DocsPage = React.lazy(() => import("./app/docs/page"));
const EdgeComputingPage = React.lazy(() => import("./app/edge-computing/page"));
const EcommerceDevelopmentPage = React.lazy(() => import("./app/e-commerce-development/page"));
const EmailMarketingAutomationPage = React.lazy(() => import("./app/email-marketing-automation/page"));
const EmailMarketingPlatformPage = React.lazy(() => import("./app/email-marketing-platform/page"));
const EmailMarketingSaasPage = React.lazy(() => import("./app/email-marketing-saas/page"));
const EmailOptimizerPage = React.lazy(() => import("./app/email-optimizer/page"));
const EmployeeManagementSaasPage = React.lazy(() => import("./app/employee-management-saas/page"));
const EmployeeTimeTrackerPage = React.lazy(() => import("./app/employee-time-tracker/page"));
const EnterpriseIntegrationPage = React.lazy(() => import("./app/enterprise-integration/page"));
const EnterpriseSecurityPage = React.lazy(() => import("./app/enterprise-security/page"));
const EnterpriseSolutionsPage = React.lazy(() => import("./app/enterprise-solutions/page"));
const ExpenseTrackerPage = React.lazy(() => import("./app/expense-tracker/page"));
const FaqPage = React.lazy(() => import("./app/faq/page"));
const FinancialItPage = React.lazy(() => import("./app/financial-it/page"));
const FinancialManagementSaasPage = React.lazy(() => import("./app/financial-management-saas/page"));
const FinancialReportingToolPage = React.lazy(() => import("./app/financial-reporting-tool/page"));
const GdprPage = React.lazy(() => import("./app/gdpr/page"));
const GdprCompliancePage = React.lazy(() => import("./app/gdpr-compliance/page"));
const GuidesPage = React.lazy(() => import("./app/guides/page"));
const HealthPage = React.lazy(() => import("./app/health/page"));
const HealthcareItPage = React.lazy(() => import("./app/healthcare-it/page"));
const HelpPage = React.lazy(() => import("./app/help/page"));
const InnovationLabsPage = React.lazy(() => import("./app/innovation-labs/page"));
const InfrastructureManagementPage = React.lazy(() => import("./app/infrastructure-management/page"));
const IntelligentDatabaseMigrationPage = React.lazy(() => import("./app/intelligent-database-migration/page"));
const IntelligentEmailInfrastructurePage = React.lazy(() => import("./app/intelligent-email-infrastructure/page"));
const InventoryManagementSaasPage = React.lazy(() => import("./app/inventory-management-saas/page"));
const InventoryManagementSystemPage = React.lazy(() => import("./app/inventory-management-system/page"));
const InvestorsPage = React.lazy(() => import("./app/investors/page"));
const ItMicroSaasPage = React.lazy(() => import("./app/it-micro-saas/page"));
const ItSolutionsPage = React.lazy(() => import("./app/it-solutions/page"));
const ItServicesPage = React.lazy(() => import("./app/it-services/page"));
const LandingPageBuilderPage = React.lazy(() => import("./app/landing-page-builder/page"));
const LegalDocumentManagerPage = React.lazy(() => import("./app/legal-document-manager/page"));
const MachineLearningPage = React.lazy(() => import("./app/machine-learning/page"));
const MachineLearningOpsPage = React.lazy(() => import("./app/machine-learning-ops/page"));
const ManagedItPage = React.lazy(() => import("./app/managed-it/page"));
const ManagedServicesPage = React.lazy(() => import("./app/managed-services/page"));
const MarketingToolsPage = React.lazy(() => import("./app/marketing-tools/page"));
const MicroSaasPage = React.lazy(() => import("./app/micro-saas/page"));
const MobileAppDevelopmentPage = React.lazy(() => import("./app/mobile-app-development/page"));
const MobileDevelopmentPage = React.lazy(() => import("./app/mobile-development/page"));
const NetworkDesignPage = React.lazy(() => import("./app/network-design/page"));
const NetworkInfrastructurePage = React.lazy(() => import("./app/network-infrastructure/page"));
const NetworkSecurityPage = React.lazy(() => import("./app/network-security/page"));
const NewsPage = React.lazy(() => import("./app/news/page"));
const NlpPage = React.lazy(() => import("./app/nlp/page"));
const NotFoundPage = React.lazy(() => import("./app/not-found/page"));
const OfflinePage = React.lazy(() => import("./app/offline/page"));
const OnlineLearningPlatformPage = React.lazy(() => import("./app/online-learning-platform/page"));
const PartnersPage = React.lazy(() => import("./app/partners/page"));
const PenetrationTestingPage = React.lazy(() => import("./app/penetration-testing/page"));
const PerformanceOptimizationPage = React.lazy(() => import("./app/performance-optimization/page"));
const PressPage = React.lazy(() => import("./app/press/page"));
const PrivacyPageLazy = React.lazy(() => import("./app/privacy/page"));
const PrivacyPolicyPage = React.lazy(() => import("./app/privacy-policy/page"));
const ProcessAutomationPage = React.lazy(() => import("./app/process-automation/page"));
const ProductivityPage = React.lazy(() => import("./app/productivity/page"));
const ProjectManagementProPage = React.lazy(() => import("./app/project-management-pro/page"));
const ProjectManagementSaasPage = React.lazy(() => import("./app/project-management-saas/page"));
const ProjectManagementToolPage = React.lazy(() => import("./app/project-management-tool/page"));
const PropertyManagementAiPage = React.lazy(() => import("./app/property-management-ai/page"));
const QuantumAiPage = React.lazy(() => import("./app/quantum-ai/page"));
const QuantumComputingPage = React.lazy(() => import("./app/quantum-computing/page"));
const QuantumComputingSolutionsPage = React.lazy(() => import("./app/quantum-computing-solutions/page"));
const ResourcesPage = React.lazy(() => import("./app/resources/page"));
const RoboticsPage = React.lazy(() => import("./app/robotics/page"));
const RoboticsIntegrationPage = React.lazy(() => import("./app/robotics-integration/page"));
const SearchPage = React.lazy(() => import("./app/search/page"));
const SecurityPage = React.lazy(() => import("./app/security/page"));
const SecurityAuditPage = React.lazy(() => import("./app/security-audit/page"));
const SecurityAutomationPage = React.lazy(() => import("./app/security-automation/page"));
const SecurityMonitoringPage = React.lazy(() => import("./app/security-monitoring/page"));
const SecurityMonitoringSuitePage = React.lazy(() => import("./app/security-monitoring-suite/page"));
const ServerManagementPage = React.lazy(() => import("./app/server-management/page"));
const SeoOptimizerPage = React.lazy(() => import("./app/seo-optimizer/page"));
const ServicesAdvertisingPage = React.lazy(() => import("./app/services-advertising/page"));
const SitemapPage = React.lazy(() => import("./app/sitemap/page"));
const SitemapXmlPage = React.lazy(() => import("./app/sitemap.xml/page"));
const SlaPage = React.lazy(() => import("./app/sla/page"));
const SmartAnalyticsPage = React.lazy(() => import("./app/smart-analytics/page"));
const SmartCitiesPage = React.lazy(() => import("./app/smart-cities/page"));
const SmartCityInfrastructurePage = React.lazy(() => import("./app/smart-city-infrastructure/page"));
const SmartContractSecurityAuditPage = React.lazy(() => import("./app/smart-contract-security-audit/page"));
const SmartExpenseCategorizerPage = React.lazy(() => import("./app/smart-expense-categorizer/page"));
const SmartHomeSaasPage = React.lazy(() => import("./app/smart-home-saas/page"));
const SmartInventoryOptimizerPage = React.lazy(() => import("./app/smart-inventory-optimizer/page"));
const SocialMediaManagementSaasPage = React.lazy(() => import("./app/social-media-management-saas/page"));
const SocialMediaSchedulerPage = React.lazy(() => import("./app/social-media-scheduler/page"));
const SoftwareDevelopmentPageLazy = React.lazy(() => import("./app/software-development/page"));
const SolutionsPageLazy = React.lazy(() => import("./app/solutions/page"));
const SpecializedServicesPage = React.lazy(() => import("./app/specialized-services/page"));
const StatusPage = React.lazy(() => import("./app/status/page"));
const SupportPageLazy = React.lazy(() => import("./app/support/page"));
const SupplyChainOptimizerPage = React.lazy(() => import("./app/supply-chain-optimizer/page"));
const SystemAdminPage = React.lazy(() => import("./app/system-admin/page"));
const SystemAdministrationPage = React.lazy(() => import("./app/system-administration/page"));
const SystemIntegrationPageLazy = React.lazy(() => import("./app/system-integration/page"));
const SystemStatusPage = React.lazy(() => import("./app/system-status/page"));
const TaskAutomationWorkflowPage = React.lazy(() => import("./app/task-automation-workflow/page"));
const TaskManagerProPage = React.lazy(() => import("./app/task-manager-pro/page"));
const TaskManagementSaasPage = React.lazy(() => import("./app/task-management-saas/page"));
const TeamPageLazy = React.lazy(() => import("./app/team/page"));
const TechnologyConsultingPage = React.lazy(() => import("./app/technology-consulting/page"));
const TermsPageLazy = React.lazy(() => import("./app/terms/page"));
const TermsOfServicePage = React.lazy(() => import("./app/terms-of-service/page"));
const TestSimplePage = React.lazy(() => import("./app/test-simple/page"));
const TutorialsPageLazy = React.lazy(() => import("./app/tutorials/page"));
const TrainingPage = React.lazy(() => import("./app/training/page"));
const WebsiteAnalyticsToolPage = React.lazy(() => import("./app/website-analytics-tool/page"));
const WebsiteBuilderSaasPage = React.lazy(() => import("./app/website-builder-saas/page"));
const WhitepapersPage = React.lazy(() => import("./app/whitepapers/page"));
const WorkflowAutomationPage = React.lazy(() => import("./app/workflow-automation/page"));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <HelmetProvider>
      <Router>
        <ErrorBoundary>
          <AnalyticsProvider>
            <PerformanceMonitor>
              <WebVitalsTracker>
                <AccessibilityEnhancer>
                  <CoreWebVitals>
                    <FuturisticBackground>
                      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                        <Navigation sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
                        <Breadcrumb />
                        <EnhancedSEO />
                        <PerformanceOptimizer />
                        
                        <main className="relative z-10">
                          <Suspense fallback={<LoadingPage />}>
                            <Routes>
                              <Route path="/" element={<HomePage />} />
                              <Route path="/about" element={<AboutPage />} />
                              <Route path="/contact" element={<ContactPage />} />
                              <Route path="/services" element={<ServicesPage />} />
                              <Route path="/blog" element={<BlogPage />} />
                              <Route path="/tutorials" element={<TutorialsPage />} />
                              <Route path="/demo" element={<DemoPage />} />
                              <Route path="/support" element={<SupportPage />} />
                              <Route path="/privacy" element={<PrivacyPage />} />
                              <Route path="/terms" element={<TermsPage />} />
                              <Route path="/pricing" element={<PricingPage />} />
                              <Route path="/solutions" element={<SolutionsPage />} />
                              <Route path="/micro-saas" element={<MicroSaaSPage />} />
                              <Route path="/ai-solutions" element={<AISolutionsPage />} />
                              <Route path="/it-solutions" element={<ITSolutionsPage />} />
                              <Route path="/ai-services" element={<AIServicesPage />} />
                              <Route path="/it-services" element={<ITServicesPage />} />
                              <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                              <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
                              <Route path="/case-studies" element={<CaseStudiesPage />} />
                              <Route path="/careers" element={<CareersPage />} />
                              <Route path="/team" element={<TeamPage />} />
                              <Route path="/documentation" element={<DocumentationPage />} />
                              <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                              <Route path="/micro-saas-solutions" element={<MicroSaaSSolutionsPage />} />
                              
                              {/* 5G Solutions Routes */}
                              <Route path="/5g-solutions" element={<FiveGSolutionsPageLazy />} />
                              <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
                              <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                              <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                              <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
                              <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
                              <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
                              <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
                              <Route path="/5g-iot-solutions" element={<FiveGIotSolutionsPage />} />
                              
                              {/* AI Services Routes */}
                              <Route path="/ai-chatbot-builder" element={<AIChatbotBuilderPage />} />
                              <Route path="/ai-code-assistant" element={<AICodeAssistantPage />} />
                              <Route path="/ai-content-generation" element={<AIContentGeneratorPage />} />
                              <Route path="/ai-customer-support" element={<AICustomerServicePage />} />
                              <Route path="/ai-data-analytics" element={<AIDataAnalyticsPage />} />
                              <Route path="/ai-voice-assistant" element={<AIVoiceAssistantPage />} />
                              <Route path="/ai-marketing" element={<AIMarketingPage />} />
                              <Route path="/ai-project-management" element={<AIProjectManagementPage />} />
                              <Route path="/ai-recommendation-engine" element={<AIRecommendationEnginePage />} />
                              <Route path="/ai-sales-automation" element={<AISalesAutomationPage />} />
                              <Route path="/ai-workflow-automation" element={<AIWorkflowAutomationPage />} />
                              <Route path="/ai-predictive-analytics" element={<AIPredictiveAnalyticsPage />} />
                              <Route path="/ai-cybersecurity" element={<AICybersecurityPage />} />
                              <Route path="/ai-healthcare" element={<AIHealthcarePage />} />
                              <Route path="/ai-ecommerce-solutions" element={<AIEcommerceSolutionsPage />} />
                              <Route path="/ai-education-platform" element={<AIEducationPlatformPage />} />
                              <Route path="/ai-fintech" element={<AIFintechPage />} />
                              <Route path="/ai-mobile-app-builder" element={<AIMobileAppBuilderPage />} />
                              <Route path="/ai-content-creation" element={<AIContentCreationPage />} />
                              <Route path="/ai-content-writer" element={<AIContentWriterPage />} />
                              <Route path="/ai-customer-support-chatbot" element={<AICustomerSupportChatbotPage />} />
                              <Route path="/ai-data-visualization" element={<AIDataVisualizationPage />} />
                              <Route path="/ai-time-series-forecasting" element={<AITimeSeriesForecastingPage />} />
                              <Route path="/ai-fraud-detection-pro" element={<AIFraudDetectionProPage />} />
                              <Route path="/ai-language-translation" element={<AILanguageTranslationPage />} />
                              <Route path="/ai-mobile-app-development" element={<AIMobileAppDevelopmentPage />} />
                              <Route path="/ai-nlp-text-analysis" element={<AINlpTextAnalysisPage />} />
                              <Route path="/ai-data-mining-pro" element={<AIDataMiningProPage />} />
                              
                              {/* IT Services Routes */}
                              <Route path="/it-infrastructure" element={<ITInfrastructurePage />} />
                              <Route path="/cloud-services" element={<CloudServicesPage />} />
                              <Route path="/cybersecurity" element={<CybersecurityPage />} />
                              <Route path="/database-management" element={<DatabaseManagementPage />} />
                              <Route path="/devops" element={<DevOpsPage />} />
                              <Route path="/it-support" element={<ITSupportPage />} />
                              <Route path="/network-solutions" element={<NetworkSolutionsPage />} />
                              <Route path="/software-development" element={<SoftwareDevelopmentPage />} />
                              <Route path="/system-integration" element={<SystemIntegrationPage />} />
                              <Route path="/it-consulting" element={<ITConsultingPage />} />
                              <Route path="/it-training" element={<ITTrainingPage />} />
                              <Route path="/it-project-management" element={<ITProjectManagementPage />} />
                              <Route path="/it-performance" element={<ITPerformancePage />} />
                              <Route path="/it-asset-management" element={<ITAssetManagementPage />} />
                              <Route path="/it-micro-saas" element={<ITMicroSaasPage />} />
                              <Route path="/it-infrastructure-solutions" element={<ITInfrastructureSolutionsPage />} />
                              <Route path="/it-infrastructure-design" element={<ITInfrastructureDesignPage />} />
                              <Route path="/it-security-services" element={<ITSecurityServicesPage />} />
                              
                              {/* Cloud Solutions Routes */}
                              <Route path="/cloud-infrastructure" element={<CloudInfrastructurePageLazy />} />
                              <Route path="/cloud-migration" element={<CloudMigrationPage />} />
                              <Route path="/cloud-security" element={<CloudSecurityPage />} />
                              <Route path="/cloud-cost-optimization" element={<CloudCostOptimizationPage />} />
                              <Route path="/cloud-consulting" element={<CloudConsultingPage />} />
                              <Route path="/cloud-native-development" element={<CloudNativeDevelopmentPage />} />
                              <Route path="/cloud-native-security" element={<CloudNativeSecurityPage />} />
                              <Route path="/cloud-migration-services" element={<CloudMigrationServicesPage />} />
                              <Route path="/cloud-migration-pro" element={<CloudMigrationProPage />} />
                              <Route path="/cloud-migration-advanced" element={<CloudMigrationAdvancedPage />} />
                              <Route path="/cloud-infrastructure-manager" element={<CloudInfrastructureManagerPage />} />
                              <Route path="/cloud-infrastructure-management" element={<CloudInfrastructureManagementPage />} />
                              
                              {/* Blockchain Routes */}
                              <Route path="/blockchain" element={<BlockchainPage />} />
                              <Route path="/blockchain-web3" element={<BlockchainWeb3Page />} />
                              <Route path="/blockchain-development" element={<BlockchainDevelopmentPage />} />
                              <Route path="/blockchain-integration-services" element={<BlockchainIntegrationServicesPage />} />
                              
                              {/* IoT Routes */}
                              <Route path="/iot" element={<IoTPage />} />
                              <Route path="/iot-solutions" element={<IoTSolutionsPage />} />
                              <Route path="/iot-platform" element={<IoTPlatformPage />} />
                              <Route path="/iot-integration" element={<IoTIntegrationPage />} />
                              <Route path="/iot-edge-computing" element={<IoTEdgeComputingPage />} />
                              <Route path="/iot-edge" element={<IoTEdgePage />} />
                              <Route path="/iot-development" element={<IoTDevelopmentPage />} />
                              
                              {/* Additional Routes */}
                              <Route path="/about" element={<AboutPageLazy />} />
                              <Route path="/contact" element={<ContactPageLazy />} />
                              <Route path="/services" element={<ServicesPageLazy />} />
                              <Route path="/blog" element={<BlogPageLazy />} />
                              <Route path="/pricing" element={<PricingPageLazy />} />
                              <Route path="/careers" element={<CareersPageLazy />} />
                              <Route path="/enterprise" element={<EnterprisePage />} />
                              <Route path="/custom-software" element={<CustomSoftwarePage />} />
                              <Route path="/cybersecurity-solutions" element={<CybersecuritySolutionsPage />} />
                              <Route path="/cybersecurity-advanced" element={<CybersecurityAdvancedPage />} />
                              <Route path="/cybersecurity-consulting" element={<CybersecurityConsultingPage />} />
                              <Route path="/cybersecurity-suite" element={<CybersecuritySuitePage />} />
                              <Route path="/data-analytics" element={<DataAnalyticsPage />} />
                              <Route path="/data-analytics-bi" element={<DataAnalyticsBIPage />} />
                              <Route path="/data-center" element={<DataCenterPage />} />
                              <Route path="/data-center-solutions" element={<DataCenterSolutionsPage />} />
                              <Route path="/data-engineering" element={<DataEngineeringPage />} />
                              <Route path="/data-protection" element={<DataProtectionPage />} />
                              <Route path="/data-visualization" element={<DataVisualizationPage />} />
                              <Route path="/database" element={<DatabasePage />} />
                              <Route path="/database-services" element={<DatabaseServicesPage />} />
                              <Route path="/demo" element={<DemoPageLazy />} />
                              <Route path="/developer-tools" element={<DeveloperToolsPage />} />
                              <Route path="/digital-transformation" element={<DigitalTransformationPageLazy />} />
                              <Route path="/digital-twin-platform" element={<DigitalTwinPlatformPage />} />
                              <Route path="/disaster-recovery" element={<DisasterRecoveryPage />} />
                              <Route path="/disaster-recovery-advanced" element={<DisasterRecoveryAdvancedPage />} />
                              <Route path="/docs" element={<DocsPage />} />
                              <Route path="/edge-computing" element={<EdgeComputingPage />} />
                              <Route path="/e-commerce-development" element={<EcommerceDevelopmentPage />} />
                              <Route path="/email-marketing-automation" element={<EmailMarketingAutomationPage />} />
                              <Route path="/email-marketing-platform" element={<EmailMarketingPlatformPage />} />
                              <Route path="/email-marketing-saas" element={<EmailMarketingSaasPage />} />
                              <Route path="/email-optimizer" element={<EmailOptimizerPage />} />
                              <Route path="/employee-management-saas" element={<EmployeeManagementSaasPage />} />
                              <Route path="/employee-time-tracker" element={<EmployeeTimeTrackerPage />} />
                              <Route path="/enterprise-integration" element={<EnterpriseIntegrationPage />} />
                              <Route path="/enterprise-security" element={<EnterpriseSecurityPage />} />
                              <Route path="/enterprise-solutions" element={<EnterpriseSolutionsPage />} />
                              <Route path="/expense-tracker" element={<ExpenseTrackerPage />} />
                              <Route path="/faq" element={<FaqPage />} />
                              <Route path="/financial-it" element={<FinancialItPage />} />
                              <Route path="/financial-management-saas" element={<FinancialManagementSaasPage />} />
                              <Route path="/financial-reporting-tool" element={<FinancialReportingToolPage />} />
                              <Route path="/gdpr" element={<GdprPage />} />
                              <Route path="/gdpr-compliance" element={<GdprCompliancePage />} />
                              <Route path="/guides" element={<GuidesPage />} />
                              <Route path="/health" element={<HealthPage />} />
                              <Route path="/healthcare-it" element={<HealthcareItPage />} />
                              <Route path="/help" element={<HelpPage />} />
                              <Route path="/innovation-labs" element={<InnovationLabsPage />} />
                              <Route path="/infrastructure-management" element={<InfrastructureManagementPage />} />
                              <Route path="/intelligent-database-migration" element={<IntelligentDatabaseMigrationPage />} />
                              <Route path="/intelligent-email-infrastructure" element={<IntelligentEmailInfrastructurePage />} />
                              <Route path="/inventory-management-saas" element={<InventoryManagementSaasPage />} />
                              <Route path="/inventory-management-system" element={<InventoryManagementSystemPage />} />
                              <Route path="/investors" element={<InvestorsPage />} />
                              <Route path="/it-micro-saas" element={<ItMicroSaasPage />} />
                              <Route path="/it-solutions" element={<ItSolutionsPage />} />
                              <Route path="/it-services" element={<ItServicesPage />} />
                              <Route path="/landing-page-builder" element={<LandingPageBuilderPage />} />
                              <Route path="/legal-document-manager" element={<LegalDocumentManagerPage />} />
                              <Route path="/machine-learning" element={<MachineLearningPage />} />
                              <Route path="/machine-learning-ops" element={<MachineLearningOpsPage />} />
                              <Route path="/managed-it" element={<ManagedItPage />} />
                              <Route path="/managed-services" element={<ManagedServicesPage />} />
                              <Route path="/marketing-tools" element={<MarketingToolsPage />} />
                              <Route path="/micro-saas" element={<MicroSaasPage />} />
                              <Route path="/mobile-app-development" element={<MobileAppDevelopmentPage />} />
                              <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                              <Route path="/network-design" element={<NetworkDesignPage />} />
                              <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} />
                              <Route path="/network-security" element={<NetworkSecurityPage />} />
                              <Route path="/news" element={<NewsPage />} />
                              <Route path="/nlp" element={<NlpPage />} />
                              <Route path="/not-found" element={<NotFoundPage />} />
                              <Route path="/offline" element={<OfflinePage />} />
                              <Route path="/online-learning-platform" element={<OnlineLearningPlatformPage />} />
                              <Route path="/partners" element={<PartnersPage />} />
                              <Route path="/penetration-testing" element={<PenetrationTestingPage />} />
                              <Route path="/performance-optimization" element={<PerformanceOptimizationPage />} />
                              <Route path="/press" element={<PressPage />} />
                              <Route path="/privacy" element={<PrivacyPageLazy />} />
                              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                              <Route path="/process-automation" element={<ProcessAutomationPage />} />
                              <Route path="/productivity" element={<ProductivityPage />} />
                              <Route path="/project-management-pro" element={<ProjectManagementProPage />} />
                              <Route path="/project-management-saas" element={<ProjectManagementSaasPage />} />
                              <Route path="/project-management-tool" element={<ProjectManagementToolPage />} />
                              <Route path="/property-management-ai" element={<PropertyManagementAiPage />} />
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
                              <Route path="/server-management" element={<ServerManagementPage />} />
                              <Route path="/seo-optimizer" element={<SeoOptimizerPage />} />
                              <Route path="/services-advertising" element={<ServicesAdvertisingPage />} />
                              <Route path="/sitemap" element={<SitemapPage />} />
                              <Route path="/sitemap.xml" element={<SitemapXmlPage />} />
                              <Route path="/sla" element={<SlaPage />} />
                              <Route path="/smart-analytics" element={<SmartAnalyticsPage />} />
                              <Route path="/smart-cities" element={<SmartCitiesPage />} />
                              <Route path="/smart-city-infrastructure" element={<SmartCityInfrastructurePage />} />
                              <Route path="/smart-contract-security-audit" element={<SmartContractSecurityAuditPage />} />
                              <Route path="/smart-expense-categorizer" element={<SmartExpenseCategorizerPage />} />
                              <Route path="/smart-home-saas" element={<SmartHomeSaasPage />} />
                              <Route path="/smart-inventory-optimizer" element={<SmartInventoryOptimizerPage />} />
                              <Route path="/social-media-management-saas" element={<SocialMediaManagementSaasPage />} />
                              <Route path="/social-media-scheduler" element={<SocialMediaSchedulerPage />} />
                              <Route path="/software-development" element={<SoftwareDevelopmentPageLazy />} />
                              <Route path="/solutions" element={<SolutionsPageLazy />} />
                              <Route path="/specialized-services" element={<SpecializedServicesPage />} />
                              <Route path="/status" element={<StatusPage />} />
                              <Route path="/support" element={<SupportPageLazy />} />
                              <Route path="/supply-chain-optimizer" element={<SupplyChainOptimizerPage />} />
                              <Route path="/system-admin" element={<SystemAdminPage />} />
                              <Route path="/system-administration" element={<SystemAdministrationPage />} />
                              <Route path="/system-integration" element={<SystemIntegrationPageLazy />} />
                              <Route path="/system-status" element={<SystemStatusPage />} />
                              <Route path="/task-automation-workflow" element={<TaskAutomationWorkflowPage />} />
                              <Route path="/task-manager-pro" element={<TaskManagerProPage />} />
                              <Route path="/task-management-saas" element={<TaskManagementSaasPage />} />
                              <Route path="/team" element={<TeamPageLazy />} />
                              <Route path="/technology-consulting" element={<TechnologyConsultingPage />} />
                              <Route path="/terms" element={<TermsPageLazy />} />
                              <Route path="/terms-of-service" element={<TermsOfServicePage />} />
                              <Route path="/test-simple" element={<TestSimplePage />} />
                              <Route path="/tutorials" element={<TutorialsPageLazy />} />
                              <Route path="/training" element={<TrainingPage />} />
                              <Route path="/website-analytics-tool" element={<WebsiteAnalyticsToolPage />} />
                              <Route path="/website-builder-saas" element={<WebsiteBuilderSaasPage />} />
                              <Route path="/whitepapers" element={<WhitepapersPage />} />
                              <Route path="/workflow-automation" element={<WorkflowAutomationPage />} />
                              
                              {/* Zion AI Services Routes */}
                              <Route path="/zion-ai-video-generator" element={<ZionAIVideoGeneratorPage />} />
                              <Route path="/zion-ai-invoice-generator" element={<ZionAIInvoiceGeneratorPage />} />
                              <Route path="/zion-ai-customer-insights" element={<ZionAICustomerInsightsPage />} />
                              <Route path="/zion-ai-email-analyzer" element={<ZionAIEmailAnalyzerPage />} />
                              <Route path="/zion-smart-inventory-optimizer" element={<ZionSmartInventoryOptimizerPage />} />
                              <Route path="/zion-smart-expense-categorizer" element={<ZionSmartExpenseCategorizerPage />} />
                              <Route path="/zion-ai-voice-assistant-pro" element={<ZionAIVoiceAssistantProPage />} />
                              <Route path="/zion-ai-code-reviewer" element={<ZionAICodeReviewerPage />} />
                              <Route path="/zion-ai-social-media-manager" element={<ZionAISocialMediaManagerPage />} />
                              <Route path="/zion-ai-contract-analyzer" element={<ZionAIContractAnalyzerPage />} />
                              <Route path="/zion-ai-performance-optimizer" element={<ZionAIPerformanceOptimizerPage />} />
                              <Route path="/zion-ai-supply-chain-optimizer" element={<ZionAISupplyChainOptimizerPage />} />
                              <Route path="/zion-ai-content-moderator" element={<ZionAIContentModeratorPage />} />
                              <Route path="/zion-ai-translator-pro" element={<ZionAITranslatorProPage />} />
                              <Route path="/zion-ai-data-cleaner" element={<ZionAIDataCleanerPage />} />
                              <Route path="/zion-ai-customer-support-pro" element={<ZionAICustomerSupportProPage />} />
                              
                              {/* 404 Route */}
                              <Route path="*" element={<NotFoundPage />} />
                            </Routes>
                          </Suspense>
                        </main>
                        
                        <Footer />
                      </div>
                    </FuturisticBackground>
                  </CoreWebVitals>
                </AccessibilityEnhancer>
              </WebVitalsTracker>
            </PerformanceMonitor>
          </AnalyticsProvider>
        </ErrorBoundary>
      </Router>
    </HelmetProvider>
  );
}

export default App;