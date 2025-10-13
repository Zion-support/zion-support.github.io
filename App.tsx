import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./app/styles/futuristic.css";
import "./app/styles/futuristic-enhanced.css";
import "./app/styles/accessibility-enhanced.css";
import Navigation from "./app/components/Navigation";
import Footer from "./app/components/Footer";
import Sidebar from "./app/components/Sidebar";
import HomePage from "./app/page";
import { LoadingPage } from "./app/components/LoadingStates";
import { GlobalErrorBoundary } from "./app/components/EnhancedErrorFeedback";
import EnhancedErrorBoundary from "./app/components/EnhancedErrorBoundary";
import Breadcrumb from "./app/components/Breadcrumb";
import PerformanceEnhancer from "./app/components/PerformanceEnhancer";
import SEOOptimizer from "./app/components/SEOOptimizer";
import EnhancedSEO from "./app/components/EnhancedSEO";
import AnalyticsProvider from "./app/components/AnalyticsProvider";
import WebVitalsTracker from "./app/components/WebVitalsTracker";
import CoreWebVitals from "./app/components/CoreWebVitals";
import AccessibilityManager from "./app/components/AccessibilityManager";
import ImageOptimizer from "./app/components/ImageOptimizer";
import { performanceOptimizer } from "./utils/performanceUtils";
import { accessibilityManager } from "./utils/accessibilityUtils";

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import("./app/about/page"));
const ContactPage = React.lazy(() => import("./app/contact/page"));
const ServicesPage = React.lazy(() => import("./app/services/page"));
const PricingPage = React.lazy(() => import("./app/pricing/page"));
const BlogPage = React.lazy(() => import("./app/blog/page"));
const AIServicesPage = React.lazy(() => import("./app/ai-services/page"));
const MicroSaasPage = React.lazy(() => import("./app/micro-saas/page"));
const FiveGSolutionsPage = React.lazy(() => import("./app/5g-solutions/page"));
const AIHealthcareDiagnosticsPage = React.lazy(() => import("./app/ai-healthcare-diagnostics/page"));
const AISupplyChainOptimizerPage = React.lazy(() => import("./app/ai-supply-chain-optimizer/page"));
const TutorialsPage = React.lazy(() => import("./app/tutorials/page"));
const DemoPage = React.lazy(() => import("./app/demo/page"));
const SupportPage = React.lazy(() => import("./app/support/page"));
const PrivacyPage = React.lazy(() => import("./app/privacy/page"));
const TermsPage = React.lazy(() => import("./app/terms/page"));
const CookiesPage = React.lazy(() => import("./app/cookies/page"));
const SitemapPage = React.lazy(() => import("./app/sitemap/page"));

// AI Service Pages
const AIAnalyticsPage = React.lazy(() => import("./app/ai-analytics/page"));
const AIContentGenerationPage = React.lazy(() => import("./app/ai-content-generation/page"));
const AICustomerServicePage = React.lazy(() => import("./app/ai-customer-service/page"));
const AICybersecurityPage = React.lazy(() => import("./app/ai-cybersecurity/page"));
const AIDataAnalyticsPage = React.lazy(() => import("./app/ai-data-analytics/page"));
const AIDocumentProcessingPage = React.lazy(() => import("./app/ai-document-processing/page"));
const AIImageRecognitionPage = React.lazy(() => import("./app/ai-image-recognition/page"));
const AILanguageProcessingPage = React.lazy(() => import("./app/ai-language-processing/page"));
const AIMachineLearningPage = React.lazy(() => import("./app/ai-machine-learning/page"));
const AIPredictiveAnalyticsPage = React.lazy(() => import("./app/ai-predictive-analytics/page"));
const AIProcessAutomationPage = React.lazy(() => import("./app/ai-process-automation/page"));
const AIRoboticsPage = React.lazy(() => import("./app/ai-robotics/page"));
const AIVoiceRecognitionPage = React.lazy(() => import("./app/ai-voice-recognition/page"));
const AIWorkflowAutomationPage = React.lazy(() => import("./app/ai-workflow-automation/page"));
const AIChatbotPage = React.lazy(() => import("./app/ai-chatbot/page"));
const AIVirtualAssistantPage = React.lazy(() => import("./app/ai-virtual-assistant/page"));
const AIPersonalizationPage = React.lazy(() => import("./app/ai-personalization/page"));
const AISearchEnginePage = React.lazy(() => import("./app/ai-search-engine/page"));
const AITranslationPage = React.lazy(() => import("./app/ai-translation/page"));
const AIVideoAnalysisPage = React.lazy(() => import("./app/ai-video-analysis/page"));
const AISmartRecruitmentPage = React.lazy(() => import("./app/ai-smart-recruitment/page"));
const AISmartInventoryPage = React.lazy(() => import("./app/ai-smart-inventory/page"));
const AISmartCustomerInsightsPage = React.lazy(() => import("./app/ai-smart-customer-insights/page"));
const AISmartFarmingPage = React.lazy(() => import("./app/ai-smart-farming/page"));
const AISmartEnergyPage = React.lazy(() => import("./app/ai-smart-energy/page"));

// Micro SAAS Pages
const ProjectManagementPage = React.lazy(() => import("./app/project-management/page"));
const TimeTrackingPage = React.lazy(() => import("./app/time-tracking/page"));
const InvoiceManagementPage = React.lazy(() => import("./app/invoice-management/page"));
const CustomerRelationshipPage = React.lazy(() => import("./app/customer-relationship/page"));
const InventoryManagementPage = React.lazy(() => import("./app/inventory-management/page"));
const HumanResourcesPage = React.lazy(() => import("./app/human-resources/page"));
const FinancialManagementPage = React.lazy(() => import("./app/financial-management/page"));
const MarketingAutomationPage = React.lazy(() => import("./app/marketing-automation/page"));
const SalesManagementPage = React.lazy(() => import("./app/sales-management/page"));
const DocumentManagementPage = React.lazy(() => import("./app/document-management/page"));
const TaskManagementPage = React.lazy(() => import("./app/task-management/page"));
const TeamCollaborationPage = React.lazy(() => import("./app/team-collaboration/page"));
const WorkflowAutomationPage = React.lazy(() => import("./app/workflow-automation/page"));
const DataVisualizationPage = React.lazy(() => import("./app/data-visualization/page"));
const ReportingAnalyticsPage = React.lazy(() => import("./app/reporting-analytics/page"));
const EmailMarketingPage = React.lazy(() => import("./app/email-marketing/page"));
const SocialMediaManagementPage = React.lazy(() => import("./app/social-media-management/page"));
const ContentManagementPage = React.lazy(() => import("./app/content-management/page"));
const EcommerceManagementPage = React.lazy(() => import("./app/ecommerce-management/page"));
const SubscriptionManagementPage = React.lazy(() => import("./app/subscription-management/page"));

// IT Services Pages
const WebDevelopmentPage = React.lazy(() => import("./app/web-development/page"));
const MobileDevelopmentPage = React.lazy(() => import("./app/mobile-development/page"));
const CloudComputingPage = React.lazy(() => import("./app/cloud-computing/page"));
const DatabaseServicesPage = React.lazy(() => import("./app/database-services/page"));
const CybersecurityPage = React.lazy(() => import("./app/cybersecurity/page"));
const NetworkInfrastructurePage = React.lazy(() => import("./app/network-infrastructure/page"));
const ITConsultingPage = React.lazy(() => import("./app/it-consulting/page"));
const SystemIntegrationPage = React.lazy(() => import("./app/system-integration/page"));
const DataAnalyticsPage = React.lazy(() => import("./app/data-analytics/page"));
const SoftwareTestingPage = React.lazy(() => import("./app/software-testing/page"));
const MaintenanceSupportPage = React.lazy(() => import("./app/maintenance-support/page"));
const ITTrainingPage = React.lazy(() => import("./app/it-training/page"));
const DigitalTransformationPage = React.lazy(() => import("./app/digital-transformation/page"));
const DevOpsPage = React.lazy(() => import("./app/devops/page"));
const QualityAssurancePage = React.lazy(() => import("./app/quality-assurance/page"));
const TechnicalSupportPage = React.lazy(() => import("./app/technical-support/page"));
const InfrastructureManagementPage = React.lazy(() => import("./app/infrastructure-management/page"));
const SecurityAuditPage = React.lazy(() => import("./app/security-audit/page"));
const CompliancePage = React.lazy(() => import("./app/compliance/page"));
const DisasterRecoveryPage = React.lazy(() => import("./app/disaster-recovery/page"));
const BlockchainDevelopmentPage = React.lazy(() => import("./app/blockchain-development/page"));
const IoTDevelopmentPage = React.lazy(() => import("./app/iot-development/page"));

// 5G Solutions Pages
const FiveGDataAnalyticsPage = React.lazy(() => import("./app/5g-data-analytics/page"));
const FiveGEdgeComputingPage = React.lazy(() => import("./app/5g-edge-computing/page"));
const FiveGImplementationPage = React.lazy(() => import("./app/5g-implementation/page"));
const FiveGIoTSolutionsPage = React.lazy(() => import("./app/5g-iot-solutions/page"));
const FiveGMobileApplicationsPage = React.lazy(() => import("./app/5g-mobile-applications/page"));
const FiveGNetworkInfrastructurePage = React.lazy(() => import("./app/5g-network-infrastructure/page"));
const FiveGPrivateNetworksPage = React.lazy(() => import("./app/5g-private-networks/page"));
const FiveGSmartCitySolutionsPage = React.lazy(() => import("./app/5g-smart-city-solutions/page"));

// Specialized Services Pages
const SpecializedServicesPage = React.lazy(() => import("./app/specialized-services/page"));
const HealthPage = React.lazy(() => import("./app/health/page"));
const PressPage = React.lazy(() => import("./app/press/page"));
const AccessibilityPage = React.lazy(() => import("./app/accessibility/page"));
const GDPRPage = React.lazy(() => import("./app/gdpr/page"));
const IoTPage = React.lazy(() => import("./app/iot-development/page"));
const LandingPageBuilderPage = React.lazy(() => import("./app/landing-page-builder/page"));

function App() {
  useEffect(() => {
    // Initialize performance monitoring
    if (typeof window !== 'undefined') {
      performanceOptimizer.initialize();
      accessibilityManager.initialize();
    }
  }, []);

  return (
    <HelmetProvider>
      <GlobalErrorBoundary>
        <AnalyticsProvider>
          <Router>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
              <PerformanceEnhancer />
              <SEOOptimizer />
              <EnhancedSEO />
              <WebVitalsTracker />
              <CoreWebVitals />
              <AccessibilityManager />
              <ImageOptimizer />
              
              <Navigation />
              <Sidebar />
              
              <main className="relative">
                <Breadcrumb />
                <Suspense fallback={<LoadingPage />}>
                  <Routes>
                    {/* Main Pages */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/pricing" element={<PricingPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/tutorials" element={<TutorialsPage />} />
                    <Route path="/demo" element={<DemoPage />} />
                    <Route path="/support" element={<SupportPage />} />
                    <Route path="/privacy" element={<PrivacyPage />} />
                    <Route path="/terms" element={<TermsPage />} />
                    <Route path="/cookies" element={<CookiesPage />} />
                    <Route path="/sitemap" element={<SitemapPage />} />
                    
                    {/* Service Categories */}
                    <Route path="/ai-services" element={<AIServicesPage />} />
                    <Route path="/micro-saas" element={<MicroSaasPage />} />
                    <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                    
                    {/* AI Services */}
                    <Route path="/ai-analytics" element={<AIAnalyticsPage />} />
                    <Route path="/ai-content-generation" element={<AIContentGenerationPage />} />
                    <Route path="/ai-customer-service" element={<AICustomerServicePage />} />
                    <Route path="/ai-cybersecurity" element={<AICybersecurityPage />} />
                    <Route path="/ai-data-analytics" element={<AIDataAnalyticsPage />} />
                    <Route path="/ai-document-processing" element={<AIDocumentProcessingPage />} />
                    <Route path="/ai-image-recognition" element={<AIImageRecognitionPage />} />
                    <Route path="/ai-language-processing" element={<AILanguageProcessingPage />} />
                    <Route path="/ai-machine-learning" element={<AIMachineLearningPage />} />
                    <Route path="/ai-predictive-analytics" element={<AIPredictiveAnalyticsPage />} />
                    <Route path="/ai-process-automation" element={<AIProcessAutomationPage />} />
                    <Route path="/ai-robotics" element={<AIRoboticsPage />} />
                    <Route path="/ai-voice-recognition" element={<AIVoiceRecognitionPage />} />
                    <Route path="/ai-workflow-automation" element={<AIWorkflowAutomationPage />} />
                    <Route path="/ai-chatbot" element={<AIChatbotPage />} />
                    <Route path="/ai-virtual-assistant" element={<AIVirtualAssistantPage />} />
                    <Route path="/ai-personalization" element={<AIPersonalizationPage />} />
                    <Route path="/ai-search-engine" element={<AISearchEnginePage />} />
                    <Route path="/ai-translation" element={<AITranslationPage />} />
                    <Route path="/ai-video-analysis" element={<AIVideoAnalysisPage />} />
                    <Route path="/ai-healthcare-diagnostics" element={<AIHealthcareDiagnosticsPage />} />
                    <Route path="/ai-supply-chain-optimizer" element={<AISupplyChainOptimizerPage />} />
                    <Route path="/ai-smart-recruitment" element={<AISmartRecruitmentPage />} />
                    <Route path="/ai-smart-inventory" element={<AISmartInventoryPage />} />
                    <Route path="/ai-smart-customer-insights" element={<AISmartCustomerInsightsPage />} />
                    <Route path="/ai-smart-farming" element={<AISmartFarmingPage />} />
                    <Route path="/ai-smart-energy" element={<AISmartEnergyPage />} />
                    
                    {/* Micro SAAS Services */}
                    <Route path="/project-management" element={<ProjectManagementPage />} />
                    <Route path="/time-tracking" element={<TimeTrackingPage />} />
                    <Route path="/invoice-management" element={<InvoiceManagementPage />} />
                    <Route path="/customer-relationship" element={<CustomerRelationshipPage />} />
                    <Route path="/inventory-management" element={<InventoryManagementPage />} />
                    <Route path="/human-resources" element={<HumanResourcesPage />} />
                    <Route path="/financial-management" element={<FinancialManagementPage />} />
                    <Route path="/marketing-automation" element={<MarketingAutomationPage />} />
                    <Route path="/sales-management" element={<SalesManagementPage />} />
                    <Route path="/document-management" element={<DocumentManagementPage />} />
                    <Route path="/task-management" element={<TaskManagementPage />} />
                    <Route path="/team-collaboration" element={<TeamCollaborationPage />} />
                    <Route path="/workflow-automation" element={<WorkflowAutomationPage />} />
                    <Route path="/data-visualization" element={<DataVisualizationPage />} />
                    <Route path="/reporting-analytics" element={<ReportingAnalyticsPage />} />
                    <Route path="/email-marketing" element={<EmailMarketingPage />} />
                    <Route path="/social-media-management" element={<SocialMediaManagementPage />} />
                    <Route path="/content-management" element={<ContentManagementPage />} />
                    <Route path="/ecommerce-management" element={<EcommerceManagementPage />} />
                    <Route path="/subscription-management" element={<SubscriptionManagementPage />} />
                    
                    {/* IT Services */}
                    <Route path="/web-development" element={<WebDevelopmentPage />} />
                    <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                    <Route path="/cloud-computing" element={<CloudComputingPage />} />
                    <Route path="/database-services" element={<DatabaseServicesPage />} />
                    <Route path="/cybersecurity" element={<CybersecurityPage />} />
                    <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} />
                    <Route path="/it-consulting" element={<ITConsultingPage />} />
                    <Route path="/system-integration" element={<SystemIntegrationPage />} />
                    <Route path="/data-analytics" element={<DataAnalyticsPage />} />
                    <Route path="/software-testing" element={<SoftwareTestingPage />} />
                    <Route path="/maintenance-support" element={<MaintenanceSupportPage />} />
                    <Route path="/it-training" element={<ITTrainingPage />} />
                    <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
                    <Route path="/devops" element={<DevOpsPage />} />
                    <Route path="/quality-assurance" element={<QualityAssurancePage />} />
                    <Route path="/technical-support" element={<TechnicalSupportPage />} />
                    <Route path="/infrastructure-management" element={<InfrastructureManagementPage />} />
                    <Route path="/security-audit" element={<SecurityAuditPage />} />
                    <Route path="/compliance" element={<CompliancePage />} />
                    <Route path="/disaster-recovery" element={<DisasterRecoveryPage />} />
                    <Route path="/blockchain-development" element={<BlockchainDevelopmentPage />} />
                    <Route path="/iot-development" element={<IoTDevelopmentPage />} />
                    
                    {/* 5G Solutions */}
                    <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
                    <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                    <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                    <Route path="/5g-iot-solutions" element={<FiveGIoTSolutionsPage />} />
                    <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
                    <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
                    <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
                    <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
                    
                    {/* Specialized Services */}
                    <Route path="/specialized-services" element={<SpecializedServicesPage />} />
                    <Route path="/health" element={<HealthPage />} />
                    <Route path="/press" element={<PressPage />} />
                    <Route path="/accessibility" element={<AccessibilityPage />} />
                    <Route path="/gdpr" element={<GDPRPage />} />
                    <Route path="/iot-development" element={<IoTPage />} />
                    <Route path="/landing-page-builder" element={<LandingPageBuilderPage />} />
                  </Routes>
                </Suspense>
              </main>
              
              <Footer />
            </div>
          </Router>
        </AnalyticsProvider>
      </GlobalErrorBoundary>
    </HelmetProvider>
  );
}

export default App;