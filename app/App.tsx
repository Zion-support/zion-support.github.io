'use client';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from './components/ErrorBoundary';
import PerformanceMonitor from './components/PerformanceMonitor';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
// import LoadingSpinner from './components/LoadingSpinner';

// Lazy load pages for better performance
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

// Additional AI Services
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

// IT Services
const ItServicesPage = lazy(() => import('./it-services/page'));
const ItInfrastructurePage = lazy(() => import('./it-infrastructure/page'));
const ItSupportPage = lazy(() => import('./it-support/page'));
const CloudInfrastructurePage = lazy(() => import('./cloud-infrastructure/page'));
const CybersecurityPage = lazy(() => import('./cybersecurity/page'));

// Additional IT Services
const ApiDevelopmentPage = lazy(() => import('./api/page'));
const DatabaseManagementPage = lazy(() => import('./database-management/page'));
const DataAnalyticsPage = lazy(() => import('./data-analytics/page'));
const CloudMigrationPage = lazy(() => import('./cloud-migration/page'));
const NetworkSecurityPage = lazy(() => import('./network-security/page'));
const ItConsultingPage = lazy(() => import('./it-consulting/page'));
const ItTrainingPage = lazy(() => import('./it-training/page'));
const ItAssetManagementPage = lazy(() => import('./it-asset-management/page'));
const ItPerformancePage = lazy(() => import('./it-performance/page'));
const ItInfrastructureSolutionsPage = lazy(() => import('./it-infrastructure-solutions/page'));
const NetworkDesignPage = lazy(() => import('./network-design/page'));
const NetworkInfrastructurePage = lazy(() => import('./network-infrastructure/page'));
const NetworkSolutionsPage = lazy(() => import('./network-solutions/page'));
const PenetrationTestingPage = lazy(() => import('./penetration-testing/page'));
const SecurityMonitoringPage = lazy(() => import('./security-monitoring/page'));
const SecurityMonitoringSuitePage = lazy(() => import('./security-monitoring-suite/page'));
const EnterpriseSecurityPage = lazy(() => import('./enterprise-security/page'));
const CybersecuritySolutionsPage = lazy(() => import('./cybersecurity-solutions/page'));
const CybersecuritySuitePage = lazy(() => import('./cybersecurity-suite/page'));
const DataProtectionPage = lazy(() => import('./data-protection/page'));
const BackupRecoveryPage = lazy(() => import('./backup-recovery/page'));
const CloudSecurityPage = lazy(() => import('./cloud-security/page'));
const CloudServicesPage = lazy(() => import('./cloud-services/page'));
const CloudInfrastructureManagerPage = lazy(() => import('./cloud-infrastructure-manager/page'));
const EdgeComputingPage = lazy(() => import('./edge-computing/page'));
const IotPage = lazy(() => import('./iot/page'));
const IotPlatformPage = lazy(() => import('./iot-platform/page'));
const IotEdgePage = lazy(() => import('./iot-edge/page'));
const SmartCitiesPage = lazy(() => import('./smart-cities/page'));
const SmartCityInfrastructurePage = lazy(() => import('./smart-city-infrastructure/page'));
const BlockchainPage = lazy(() => import('./blockchain/page'));
const BlockchainIntegrationServicesPage = lazy(() => import('./blockchain-integration-services/page'));
const SmartContractSecurityAuditPage = lazy(() => import('./smart-contract-security-audit/page'));
const DigitalTwinPlatformPage = lazy(() => import('./digital-twin-platform/page'));
const QuantumComputingPage = lazy(() => import('./quantum-computing/page'));
const QuantumAiPage = lazy(() => import('./quantum-ai/page'));
const RoboticsIntegrationPage = lazy(() => import('./robotics-integration/page'));
const ArVrSolutionsPage = lazy(() => import('./ar-vr-solutions/page'));
const ArVrPlatformPage = lazy(() => import('./ar-vr-platform/page'));
const ProcessAutomationPage = lazy(() => import('./process-automation/page'));
const BusinessAppsPage = lazy(() => import('./business-apps/page'));
const CustomSoftwarePage = lazy(() => import('./custom-software/page'));
const CustomDevelopmentPage = lazy(() => import('./custom-development/page'));
const WebDevelopmentPage = lazy(() => import('./web-development/page'));
const MobileDevelopmentPage = lazy(() => import('./mobile-development/page'));
const EcommerceAnalyticsProPage = lazy(() => import('./ecommerce-analytics-pro/page'));
const ProjectManagementProPage = lazy(() => import('./project-management-pro/page'));
const TaskManagerProPage = lazy(() => import('./task-manager-pro/page'));
const ExpenseTrackerPage = lazy(() => import('./expense-tracker/page'));
const CrmLitePage = lazy(() => import('./crm-lite/page'));
const EmailMarketingAutomationPage = lazy(() => import('./email-marketing-automation/page'));
const EmailOptimizerPage = lazy(() => import('./email-optimizer/page'));
const SeoOptimizerPage = lazy(() => import('./seo-optimizer/page'));
const LandingPageBuilderPage = lazy(() => import('./landing-page-builder/page'));
const MarketingToolsPage = lazy(() => import('./marketing-tools/page'));
const AnalyticsToolsPage = lazy(() => import('./analytics-tools/page'));
const DeveloperToolsPage = lazy(() => import('./developer-tools/page'));
const DevopsCicdPage = lazy(() => import('./devops-cicd/page'));
const DataCenterPage = lazy(() => import('./data-center/page'));
const DatabaseServicesPage = lazy(() => import('./database-services/page'));
const DataAnalyticsBiPage = lazy(() => import('./data-analytics-bi/page'));
const SmartAnalyticsPage = lazy(() => import('./smart-analytics/page'));
const SupplyChainOptimizerPage = lazy(() => import('./supply-chain-optimizer/page'));
const PropertyManagementAiPage = lazy(() => import('./property-management-ai/page'));
const LegalDocumentManagerPage = lazy(() => import('./legal-document-manager/page'));
const MedicalRecordsManagerPage = lazy(() => import('./medical-records-manager/page'));
const OnlineLearningPlatformPage = lazy(() => import('./online-learning-platform/page'));
const FinancialItPage = lazy(() => import('./financial-it/page'));
const HealthcareItPage = lazy(() => import('./healthcare-it/page'));
const SpecializedServicesPage = lazy(() => import('./specialized-services/page'));
const InnovationLabsPage = lazy(() => import('./innovation-labs/page'));
const DigitalTransformationPage = lazy(() => import('./digital-transformation/page'));

// Additional Important Pages
const FaqPage = lazy(() => import('./faq/page'));
const DemoPage = lazy(() => import('./demo/page'));
const PartnersPage = lazy(() => import('./partners/page'));
const CommunityPage = lazy(() => import('./community/page'));
const TutorialsPage = lazy(() => import('./tutorials/page'));
const CompliancePage = lazy(() => import('./compliance/page'));
const BusinessIntelligencePage = lazy(() => import('./business-intelligence/page'));
const EnterprisePage = lazy(() => import('./enterprise/page'));

// Loading component
const AppLoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <div className="App">
            <PerformanceMonitor />
            <AccessibilityEnhancer />
            <Suspense fallback={<AppLoadingSpinner />}>
              <Routes>
                {/* Main Pages */}
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/case-studies" element={<CaseStudiesPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
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
                <Route path="/ai-analytics" element={<AiAnalyticsPage />} />
                <Route path="/ai-chatbot-builder" element={<AiChatbotBuilderPage />} />
                <Route path="/ai-crm" element={<AiCrmPage />} />
                <Route path="/ai-computer-vision" element={<AiComputerVisionPage />} />
                <Route path="/ai-document-processing" element={<AiDocumentProcessingPage />} />
                <Route path="/ai-predictive-analytics" element={<AiPredictiveAnalyticsPage />} />
                <Route path="/ai-edge-computing" element={<AiEdgeComputingPage />} />
                <Route path="/ai-voice-assistant" element={<AiVoiceAssistantPage />} />
                <Route path="/ai-recommendation-engine" element={<AiRecommendationEnginePage />} />
                <Route path="/ai-hr" element={<AiHrPage />} />
                <Route path="/ai-ecommerce-solutions" element={<AiEcommerceSolutionsPage />} />
                <Route path="/ai-financial-services" element={<AiFinancialServicesPage />} />
                <Route path="/ai-voice-solutions" element={<AiVoiceSolutionsPage />} />
                <Route path="/ai-hr-solutions" element={<AiHrSolutionsPage />} />

                {/* IT Services */}
                <Route path="/it-services" element={<ItServicesPage />} />
                <Route path="/it-infrastructure" element={<ItInfrastructurePage />} />
                <Route path="/it-support" element={<ItSupportPage />} />
                <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                <Route path="/cybersecurity" element={<CybersecurityPage />} />
                <Route path="/api" element={<ApiDevelopmentPage />} />
                <Route path="/database-management" element={<DatabaseManagementPage />} />
                <Route path="/data-analytics" element={<DataAnalyticsPage />} />
                <Route path="/cloud-migration" element={<CloudMigrationPage />} />
                <Route path="/network-security" element={<NetworkSecurityPage />} />
                <Route path="/it-consulting" element={<ItConsultingPage />} />
                <Route path="/it-training" element={<ItTrainingPage />} />
                <Route path="/it-asset-management" element={<ItAssetManagementPage />} />
                <Route path="/it-performance" element={<ItPerformancePage />} />
                <Route path="/it-infrastructure-solutions" element={<ItInfrastructureSolutionsPage />} />
                <Route path="/network-design" element={<NetworkDesignPage />} />
                <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} />
                <Route path="/network-solutions" element={<NetworkSolutionsPage />} />
                <Route path="/penetration-testing" element={<PenetrationTestingPage />} />
                <Route path="/security-monitoring" element={<SecurityMonitoringPage />} />
                <Route path="/security-monitoring-suite" element={<SecurityMonitoringSuitePage />} />
                <Route path="/enterprise-security" element={<EnterpriseSecurityPage />} />
                <Route path="/cybersecurity-solutions" element={<CybersecuritySolutionsPage />} />
                <Route path="/cybersecurity-suite" element={<CybersecuritySuitePage />} />
                <Route path="/data-protection" element={<DataProtectionPage />} />
                <Route path="/backup-recovery" element={<BackupRecoveryPage />} />
                <Route path="/cloud-security" element={<CloudSecurityPage />} />
                <Route path="/cloud-services" element={<CloudServicesPage />} />
                <Route path="/cloud-infrastructure-manager" element={<CloudInfrastructureManagerPage />} />
                <Route path="/edge-computing" element={<EdgeComputingPage />} />
                <Route path="/iot" element={<IotPage />} />
                <Route path="/iot-platform" element={<IotPlatformPage />} />
                <Route path="/iot-edge" element={<IotEdgePage />} />
                <Route path="/smart-cities" element={<SmartCitiesPage />} />
                <Route path="/smart-city-infrastructure" element={<SmartCityInfrastructurePage />} />
                <Route path="/blockchain" element={<BlockchainPage />} />
                <Route path="/blockchain-integration-services" element={<BlockchainIntegrationServicesPage />} />
                <Route path="/smart-contract-security-audit" element={<SmartContractSecurityAuditPage />} />
                <Route path="/digital-twin-platform" element={<DigitalTwinPlatformPage />} />
                <Route path="/quantum-computing" element={<QuantumComputingPage />} />
                <Route path="/quantum-ai" element={<QuantumAiPage />} />
                <Route path="/robotics-integration" element={<RoboticsIntegrationPage />} />
                <Route path="/ar-vr-solutions" element={<ArVrSolutionsPage />} />
                <Route path="/ar-vr-platform" element={<ArVrPlatformPage />} />
                <Route path="/process-automation" element={<ProcessAutomationPage />} />
                <Route path="/business-apps" element={<BusinessAppsPage />} />
                <Route path="/custom-software" element={<CustomSoftwarePage />} />
                <Route path="/custom-development" element={<CustomDevelopmentPage />} />
                <Route path="/web-development" element={<WebDevelopmentPage />} />
                <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                <Route path="/ecommerce-analytics-pro" element={<EcommerceAnalyticsProPage />} />
                <Route path="/project-management-pro" element={<ProjectManagementProPage />} />
                <Route path="/task-manager-pro" element={<TaskManagerProPage />} />
                <Route path="/expense-tracker" element={<ExpenseTrackerPage />} />
                <Route path="/crm-lite" element={<CrmLitePage />} />
                <Route path="/email-marketing-automation" element={<EmailMarketingAutomationPage />} />
                <Route path="/email-optimizer" element={<EmailOptimizerPage />} />
                <Route path="/seo-optimizer" element={<SeoOptimizerPage />} />
                <Route path="/landing-page-builder" element={<LandingPageBuilderPage />} />
                <Route path="/marketing-tools" element={<MarketingToolsPage />} />
                <Route path="/analytics-tools" element={<AnalyticsToolsPage />} />
                <Route path="/developer-tools" element={<DeveloperToolsPage />} />
                <Route path="/devops-cicd" element={<DevopsCicdPage />} />
                <Route path="/data-center" element={<DataCenterPage />} />
                <Route path="/database-services" element={<DatabaseServicesPage />} />
                <Route path="/data-analytics-bi" element={<DataAnalyticsBiPage />} />
                <Route path="/smart-analytics" element={<SmartAnalyticsPage />} />
                <Route path="/supply-chain-optimizer" element={<SupplyChainOptimizerPage />} />
                <Route path="/property-management-ai" element={<PropertyManagementAiPage />} />
                <Route path="/legal-document-manager" element={<LegalDocumentManagerPage />} />
                <Route path="/medical-records-manager" element={<MedicalRecordsManagerPage />} />
                <Route path="/online-learning-platform" element={<OnlineLearningPlatformPage />} />
                <Route path="/financial-it" element={<FinancialItPage />} />
                <Route path="/healthcare-it" element={<HealthcareItPage />} />
                <Route path="/specialized-services" element={<SpecializedServicesPage />} />
                <Route path="/innovation-labs" element={<InnovationLabsPage />} />
                <Route path="/digital-transformation" element={<DigitalTransformationPage />} />

                {/* Additional Important Pages */}
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/demo" element={<DemoPage />} />
                <Route path="/partners" element={<PartnersPage />} />
                <Route path="/community" element={<CommunityPage />} />
                <Route path="/tutorials" element={<TutorialsPage />} />
                <Route path="/compliance" element={<CompliancePage />} />
                <Route path="/business-intelligence" element={<BusinessIntelligencePage />} />
                <Route path="/enterprise" element={<EnterprisePage />} />
              </Routes>
            </Suspense>
          </div>
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;