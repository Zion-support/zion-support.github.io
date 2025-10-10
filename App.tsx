'use client';

import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './app/styles/futuristic.css';
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import HomePage from './app/page';
import { PageLoader } from './app/components/LoadingStates';
import ErrorBoundary from './app/components/ErrorBoundary';
import SEOHead from './app/components/EnhancedSEOHead';
import SkipLink from './app/components/SkipLink';
import Breadcrumb from './app/components/Breadcrumb';
import PerformanceOptimizer from './app/components/PerformanceOptimizer';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import EnhancedAccessibility from './app/components/EnhancedAccessibility';
import { usePerformanceMonitor } from './app/hooks/usePerformanceMonitor';
import { AnalyticsProvider } from './app/components/AnalyticsProvider';
import PerformanceMonitor from './app/components/PerformanceMonitor';

// Structured data for SEO - moved to SEOHead component

// Lazy load pages for better performance
// Lazy load pages for better performance
const AiMarketingPage = React.lazy(() => import('./app/ai-marketing/page'));
const AiCustomerSupportPage = React.lazy(() => import('./app/ai-customer-support/page'));
const AiDataAnalyticsPage = React.lazy(() => import('./app/ai-data-analytics/page'));
const AiContentGenerationPage = React.lazy(() => import('./app/ai-content-generation/page'));
const AiHealthcarePage = React.lazy(() => import('./app/ai-healthcare/page'));
const AiFintechPage = React.lazy(() => import('./app/ai-fintech/page'));
const AiEcommerceSolutionsPage = React.lazy(() => import('./app/ai-ecommerce-solutions/page'));
const AiCybersecurityPage = React.lazy(() => import('./app/ai-cybersecurity/page'));
const AiMobileAppDevelopmentPage = React.lazy(() => import('./app/ai-mobile-app-development/page'));
const AiSalesAutomationPage = React.lazy(() => import('./app/ai-sales-automation/page'));
const AiWorkflowAutomationPage = React.lazy(() => import('./app/ai-workflow-automation/page'));
const AiDataVisualizationPage = React.lazy(() => import('./app/ai-data-visualization/page'));
const AiLeadGenerationPage = React.lazy(() => import('./app/ai-lead-generation/page'));
const AiDocumentProcessingPage = React.lazy(() => import('./app/ai-document-processing/page'));
const AiAutomationPage = React.lazy(() => import('./app/ai-automation/page'));
const AiVoiceAssistantPage = React.lazy(() => import('./app/ai-voice-assistant/page'));
const AiPredictiveMaintenancePage = React.lazy(() => import('./app/ai-predictive-maintenance/page'));
const AiSupplyChainPage = React.lazy(() => import('./app/ai-supply-chain/page'));
const AiQualityControlPage = React.lazy(() => import('./app/ai-quality-control/page'));
const AiEnergyManagementPage = React.lazy(() => import('./app/ai-energy-management/page'));
const AiLegalAnalysisPage = React.lazy(() => import('./app/ai-legal-analysis/page'));
const AiRealEstatePage = React.lazy(() => import('./app/ai-real-estate/page'));
const AiHrAssistantPage = React.lazy(() => import('./app/ai-hr-assistant/page'));
const AiInsurancePage = React.lazy(() => import('./app/ai-insurance/page'));
const AiEducationPage = React.lazy(() => import('./app/ai-education/page'));
const AiTransportationPage = React.lazy(() => import('./app/ai-transportation/page'));
const AiEnvironmentalPage = React.lazy(() => import('./app/ai-environmental/page'));
const AiRetailPage = React.lazy(() => import('./app/ai-retail/page'));
const AiSportsPage = React.lazy(() => import('./app/ai-sports/page'));
const AiMentalHealthPage = React.lazy(() => import('./app/ai-mental-health/page'));
const CloudServicesPage = React.lazy(() => import('./app/cloud-services/page'));
const CloudMigrationPage = React.lazy(() => import('./app/cloud-migration/page'));
const DevopsPage = React.lazy(() => import('./app/devops/page'));
const DatabasePage = React.lazy(() => import('./app/database/page'));
const CybersecurityPage = React.lazy(() => import('./app/cybersecurity/page'));
const SecurityMonitoringPage = React.lazy(() => import('./app/security-monitoring/page'));
const PenetrationTestingPage = React.lazy(() => import('./app/penetration-testing/page'));
const ItInfrastructurePage = React.lazy(() => import('./app/it-infrastructure/page'));
const ManagedItPage = React.lazy(() => import('./app/managed-it/page'));
const ItConsultingPage = React.lazy(() => import('./app/it-consulting/page'));
const DataAnalyticsPage = React.lazy(() => import('./app/data-analytics/page'));
const MobileDevelopmentPage = React.lazy(() => import('./app/mobile-development/page'));
const WebDevelopmentPage = React.lazy(() => import('./app/web-development/page'));
const ProcessAutomationPage = React.lazy(() => import('./app/process-automation/page'));
const CloudInfrastructurePage = React.lazy(() => import('./app/cloud-infrastructure/page'));
const NetworkSecurityPage = React.lazy(() => import('./app/network-security/page'));
const DataBackupPage = React.lazy(() => import('./app/data-backup/page'));
const ItAssetManagementPage = React.lazy(() => import('./app/it-asset-management/page'));
const WebsiteHostingPage = React.lazy(() => import('./app/website-hosting/page'));
const MobileDeviceManagementPage = React.lazy(() => import('./app/mobile-device-management/page'));
const ComplianceServicesPage = React.lazy(() => import('./app/compliance-services/page'));
const ItPerformanceMonitoringPage = React.lazy(() => import('./app/it-performance-monitoring/page'));
const ItTrainingPage = React.lazy(() => import('./app/it-training/page'));
const ItProjectManagementPage = React.lazy(() => import('./app/it-project-management/page'));
const VulnerabilityAssessmentPage = React.lazy(() => import('./app/vulnerability-assessment/page'));
const HybridCloudPage = React.lazy(() => import('./app/hybrid-cloud/page'));
const DataMigrationPage = React.lazy(() => import('./app/data-migration/page'));
const ApiDevelopmentPage = React.lazy(() => import('./app/api-development/page'));
const ItGovernancePage = React.lazy(() => import('./app/it-governance/page'));
const AiAnalyticsDashboardPage = React.lazy(() => import('./app/ai-analytics-dashboard/page'));
const AiCrmPage = React.lazy(() => import('./app/ai-crm/page'));
const AiContentStudioPage = React.lazy(() => import('./app/ai-content-studio/page'));
const AiChatbotBuilderPage = React.lazy(() => import('./app/ai-chatbot-builder/page'));
const AiEmailMarketingPage = React.lazy(() => import('./app/ai-email-marketing/page'));
const AiMobileAppBuilderPage = React.lazy(() => import('./app/ai-mobile-app-builder/page'));
const AiSeoOptimizerPage = React.lazy(() => import('./app/ai-seo-optimizer/page'));
const AiInvoiceGeneratorPage = React.lazy(() => import('./app/ai-invoice-generator/page'));
const AiWritingAssistantPage = React.lazy(() => import('./app/ai-writing-assistant/page'));
const SmartAnalyticsPage = React.lazy(() => import('./app/smart-analytics/page'));
const AiSchedulerPage = React.lazy(() => import('./app/ai-scheduler/page'));
const ExpenseTrackerPage = React.lazy(() => import('./app/expense-tracker/page'));
const TaskManagerProPage = React.lazy(() => import('./app/task-manager-pro/page'));
const CrmLitePage = React.lazy(() => import('./app/crm-lite/page'));
const EmailOptimizerPage = React.lazy(() => import('./app/email-optimizer/page'));
const SocialMediaManagerPage = React.lazy(() => import('./app/social-media-manager/page'));
const AiDesignStudioPage = React.lazy(() => import('./app/ai-design-studio/page'));
const LandingPageBuilderPage = React.lazy(() => import('./app/landing-page-builder/page'));
const SeoOptimizerPage = React.lazy(() => import('./app/seo-optimizer/page'));
const AdCampaignManagerPage = React.lazy(() => import('./app/ad-campaign-manager/page'));
const CodeAssistantPage = React.lazy(() => import('./app/code-assistant/page'));
const ApiBuilderPage = React.lazy(() => import('./app/api-builder/page'));
const BugTrackerProPage = React.lazy(() => import('./app/bug-tracker-pro/page'));
const DocGeneratorPage = React.lazy(() => import('./app/doc-generator/page'));
const AiRecruitmentAssistantPage = React.lazy(() => import('./app/ai-recruitment-assistant/page'));
const MedicalRecordsManagerPage = React.lazy(() => import('./app/medical-records-manager/page'));
const AiAccountingAssistantPage = React.lazy(() => import('./app/ai-accounting-assistant/page'));
const PropertyManagementAiPage = React.lazy(() => import('./app/property-management-ai/page'));
const LegalDocumentManagerPage = React.lazy(() => import('./app/legal-document-manager/page'));
const OnlineLearningPlatformPage = React.lazy(() => import('./app/online-learning-platform/page'));
const SupplyChainOptimizerPage = React.lazy(() => import('./app/supply-chain-optimizer/page'));
const QuantumComputingPage = React.lazy(() => import('./app/quantum-computing/page'));
const RoboticsPage = React.lazy(() => import('./app/robotics/page'));
const IotEdgeComputingPage = React.lazy(() => import('./app/iot-edge-computing/page'));
const BlockchainWeb3Page = React.lazy(() => import('./app/blockchain-web3/page'));
const BusinessIntelligencePage = React.lazy(() => import('./app/business-intelligence/page'));
const AutonomousSystemsPage = React.lazy(() => import('./app/autonomous-systems/page'));
const FiveGImplementationPage = React.lazy(() => import('./app/5g-implementation/page'));
const Ai3dGenerationPage = React.lazy(() => import('./app/ai-3d-generation/page'));
const AiHolographicWorkspacePage = React.lazy(() => import('./app/ai-holographic-workspace/page'));
const AboutPage = React.lazy(() => import('./app/about/page'));
const ContactPage = React.lazy(() => import('./app/contact/page'));
const ServicesPage = React.lazy(() => import('./app/services/page'));
const PricingPage = React.lazy(() => import('./app/pricing/page'));
const BlogPage = React.lazy(() => import('./app/blog/page'));
const CaseStudiesPage = React.lazy(() => import('./app/case-studies/page'));
const CareersPage = React.lazy(() => import('./app/careers/page'));
const PartnersPage = React.lazy(() => import('./app/partners/page'));
const SupportPage = React.lazy(() => import('./app/support/page'));
const FAQPage = React.lazy(() => import('./app/faq/page'));
const DemoPage = React.lazy(() => import('./app/demo/page'));
const ConsultationPage = React.lazy(() => import('./app/consultation/page'));
const MicroSaasPage = React.lazy(() => import('./app/micro-saas/page'));
const AiServicesPage = React.lazy(() => import('./app/ai-services/page'));
const ItServicesPage = React.lazy(() => import('./app/it-services/page'));

// Performance monitoring hook
const AppWithPerformanceMonitoring: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  usePerformanceMonitor();
  return <>{children}</>;
};

// Main App Component
const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <SEOHead />
        <SkipLink />
        <Router>
          <AppWithPerformanceMonitoring>
            <AnalyticsProvider>
              <PerformanceOptimizer>
                <EnhancedAccessibility>
                  <AccessibilityEnhancer>
                    <PerformanceMonitor />
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                      <Navigation />
                      <Breadcrumb />
                      <main id="main-content" className="flex-1">
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
                            <Route path="/partners" element={<PartnersPage />} />
                            <Route path="/support" element={<SupportPage />} />
                            <Route path="/faq" element={<FAQPage />} />
                            <Route path="/demo" element={<DemoPage />} />
                            <Route path="/consultation" element={<ConsultationPage />} />
                            <Route path="/micro-saas" element={<MicroSaasPage />} />
                            <Route path="/ai-services" element={<AiServicesPage />} />
                            <Route path="/it-services" element={<ItServicesPage />} />
                                                      <Route path="/ai-marketing" element={<AiMarketingPage />} />
                            <Route path="/ai-customer-support" element={<AiCustomerSupportPage />} />
                            <Route path="/ai-data-analytics" element={<AiDataAnalyticsPage />} />
                            <Route path="/ai-content-generation" element={<AiContentGenerationPage />} />
                            <Route path="/ai-healthcare" element={<AiHealthcarePage />} />
                            <Route path="/ai-fintech" element={<AiFintechPage />} />
                            <Route path="/ai-ecommerce-solutions" element={<AiEcommerceSolutionsPage />} />
                            <Route path="/ai-cybersecurity" element={<AiCybersecurityPage />} />
                            <Route path="/ai-mobile-app-development" element={<AiMobileAppDevelopmentPage />} />
                            <Route path="/ai-sales-automation" element={<AiSalesAutomationPage />} />
                            <Route path="/ai-workflow-automation" element={<AiWorkflowAutomationPage />} />
                            <Route path="/ai-data-visualization" element={<AiDataVisualizationPage />} />
                            <Route path="/ai-lead-generation" element={<AiLeadGenerationPage />} />
                            <Route path="/ai-document-processing" element={<AiDocumentProcessingPage />} />
                            <Route path="/ai-automation" element={<AiAutomationPage />} />
                            <Route path="/ai-voice-assistant" element={<AiVoiceAssistantPage />} />
                            <Route path="/ai-predictive-maintenance" element={<AiPredictiveMaintenancePage />} />
                            <Route path="/ai-supply-chain" element={<AiSupplyChainPage />} />
                            <Route path="/ai-quality-control" element={<AiQualityControlPage />} />
                            <Route path="/ai-energy-management" element={<AiEnergyManagementPage />} />
                            <Route path="/ai-legal-analysis" element={<AiLegalAnalysisPage />} />
                            <Route path="/ai-real-estate" element={<AiRealEstatePage />} />
                            <Route path="/ai-hr-assistant" element={<AiHrAssistantPage />} />
                            <Route path="/ai-insurance" element={<AiInsurancePage />} />
                            <Route path="/ai-education" element={<AiEducationPage />} />
                            <Route path="/ai-transportation" element={<AiTransportationPage />} />
                            <Route path="/ai-environmental" element={<AiEnvironmentalPage />} />
                            <Route path="/ai-retail" element={<AiRetailPage />} />
                            <Route path="/ai-sports" element={<AiSportsPage />} />
                            <Route path="/ai-mental-health" element={<AiMentalHealthPage />} />
                            <Route path="/cloud-services" element={<CloudServicesPage />} />
                            <Route path="/cloud-migration" element={<CloudMigrationPage />} />
                            <Route path="/devops" element={<DevopsPage />} />
                            <Route path="/database" element={<DatabasePage />} />
                            <Route path="/cybersecurity" element={<CybersecurityPage />} />
                            <Route path="/security-monitoring" element={<SecurityMonitoringPage />} />
                            <Route path="/penetration-testing" element={<PenetrationTestingPage />} />
                            <Route path="/it-infrastructure" element={<ItInfrastructurePage />} />
                            <Route path="/managed-it" element={<ManagedItPage />} />
                            <Route path="/it-consulting" element={<ItConsultingPage />} />
                            <Route path="/data-analytics" element={<DataAnalyticsPage />} />
                            <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                            <Route path="/web-development" element={<WebDevelopmentPage />} />
                            <Route path="/process-automation" element={<ProcessAutomationPage />} />
                            <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                            <Route path="/network-security" element={<NetworkSecurityPage />} />
                            <Route path="/data-backup" element={<DataBackupPage />} />
                            <Route path="/it-asset-management" element={<ItAssetManagementPage />} />
                            <Route path="/website-hosting" element={<WebsiteHostingPage />} />
                            <Route path="/mobile-device-management" element={<MobileDeviceManagementPage />} />
                            <Route path="/compliance-services" element={<ComplianceServicesPage />} />
                            <Route path="/it-performance-monitoring" element={<ItPerformanceMonitoringPage />} />
                            <Route path="/it-training" element={<ItTrainingPage />} />
                            <Route path="/it-project-management" element={<ItProjectManagementPage />} />
                            <Route path="/vulnerability-assessment" element={<VulnerabilityAssessmentPage />} />
                            <Route path="/hybrid-cloud" element={<HybridCloudPage />} />
                            <Route path="/data-migration" element={<DataMigrationPage />} />
                            <Route path="/api-development" element={<ApiDevelopmentPage />} />
                            <Route path="/it-governance" element={<ItGovernancePage />} />
                            <Route path="/ai-analytics-dashboard" element={<AiAnalyticsDashboardPage />} />
                            <Route path="/ai-crm" element={<AiCrmPage />} />
                            <Route path="/ai-content-studio" element={<AiContentStudioPage />} />
                            <Route path="/ai-chatbot-builder" element={<AiChatbotBuilderPage />} />
                            <Route path="/ai-email-marketing" element={<AiEmailMarketingPage />} />
                            <Route path="/ai-mobile-app-builder" element={<AiMobileAppBuilderPage />} />
                            <Route path="/ai-seo-optimizer" element={<AiSeoOptimizerPage />} />
                            <Route path="/ai-invoice-generator" element={<AiInvoiceGeneratorPage />} />
                            <Route path="/ai-writing-assistant" element={<AiWritingAssistantPage />} />
                            <Route path="/smart-analytics" element={<SmartAnalyticsPage />} />
                            <Route path="/ai-scheduler" element={<AiSchedulerPage />} />
                            <Route path="/expense-tracker" element={<ExpenseTrackerPage />} />
                            <Route path="/task-manager-pro" element={<TaskManagerProPage />} />
                            <Route path="/crm-lite" element={<CrmLitePage />} />
                            <Route path="/email-optimizer" element={<EmailOptimizerPage />} />
                            <Route path="/social-media-manager" element={<SocialMediaManagerPage />} />
                            <Route path="/ai-design-studio" element={<AiDesignStudioPage />} />
                            <Route path="/landing-page-builder" element={<LandingPageBuilderPage />} />
                            <Route path="/seo-optimizer" element={<SeoOptimizerPage />} />
                            <Route path="/ad-campaign-manager" element={<AdCampaignManagerPage />} />
                            <Route path="/code-assistant" element={<CodeAssistantPage />} />
                            <Route path="/api-builder" element={<ApiBuilderPage />} />
                            <Route path="/bug-tracker-pro" element={<BugTrackerProPage />} />
                            <Route path="/doc-generator" element={<DocGeneratorPage />} />
                            <Route path="/ai-recruitment-assistant" element={<AiRecruitmentAssistantPage />} />
                            <Route path="/medical-records-manager" element={<MedicalRecordsManagerPage />} />
                            <Route path="/ai-accounting-assistant" element={<AiAccountingAssistantPage />} />
                            <Route path="/property-management-ai" element={<PropertyManagementAiPage />} />
                            <Route path="/legal-document-manager" element={<LegalDocumentManagerPage />} />
                            <Route path="/online-learning-platform" element={<OnlineLearningPlatformPage />} />
                            <Route path="/supply-chain-optimizer" element={<SupplyChainOptimizerPage />} />
                            <Route path="/quantum-computing" element={<QuantumComputingPage />} />
                            <Route path="/robotics" element={<RoboticsPage />} />
                            <Route path="/iot-edge-computing" element={<IotEdgeComputingPage />} />
                            <Route path="/blockchain-web3" element={<BlockchainWeb3Page />} />
                            <Route path="/business-intelligence" element={<BusinessIntelligencePage />} />
                            <Route path="/autonomous-systems" element={<AutonomousSystemsPage />} />
                            <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                            <Route path="/ai-3d-generation" element={<Ai3dGenerationPage />} />
                            <Route path="/ai-holographic-workspace" element={<AiHolographicWorkspacePage />} />
</Routes>
                        </Suspense>
                      </main>
                      <Footer />
                    </div>
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

App.displayName = 'App';

export default App;