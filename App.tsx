import React, { Suspense, useEffect, useState } from "react";
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
import EnhancedAccessibility from "./app/components/EnhancedAccessibility";
import AnalyticsProvider from "./app/components/AnalyticsProvider";
import PerformanceMonitor from "./app/components/PerformanceMonitor";
import WebVitalsTracker from "./app/components/WebVitalsTracker";
import AccessibilityEnhancer from "./app/components/AccessibilityEnhancer";
import CoreWebVitals from "./app/components/CoreWebVitals";
import FuturisticBackground from "./app/components/FuturisticBackground";
import EnhancedErrorBoundary from "./app/components/EnhancedErrorBoundary";
import Breadcrumb from "./app/components/Breadcrumb";
import EnhancedSEO from "./app/components/EnhancedSEO";

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import("./app/about/page"));
const ContactPage = React.lazy(() => import("./app/contact/page"));
const ServicesPage = React.lazy(() => import("./app/services/page"));
const BlogPage = React.lazy(() => import("./app/blog/page"));
const PrivacyPage = React.lazy(() => import("./app/privacy/page"));
const TermsPage = React.lazy(() => import("./app/terms/page"));

// AI Services Pages
const AIAnalyticsPage = React.lazy(() => import("./app/ai-analytics/page"));
const AIContentGenerationPage = React.lazy(() => import("./app/ai-content-generation/page"));
const AICustomerSupportPage = React.lazy(() => import("./app/ai-customer-support/page"));
const AICybersecurityPage = React.lazy(() => import("./app/ai-cybersecurity/page"));
const AIDataAnalyticsPage = React.lazy(() => import("./app/ai-data-analytics/page"));
const AIDocumentProcessingPage = React.lazy(() => import("./app/ai-document-processing/page"));
const AIMarketingAutomationPage = React.lazy(() => import("./app/ai-marketing-automation/page"));
const AIPredictiveAnalyticsPage = React.lazy(() => import("./app/ai-predictive-analytics/page"));
const AIVoiceAssistantPage = React.lazy(() => import("./app/ai-voice-assistant/page"));
const AIWorkflowAutomationPage = React.lazy(() => import("./app/ai-workflow-automation/page"));
const AIChatbotBuilderPage = React.lazy(() => import("./app/ai-chatbot-builder/page"));
const AICodeAssistantPage = React.lazy(() => import("./app/ai-code-assistant/page"));
const AIDesignStudioPage = React.lazy(() => import("./app/ai-design-studio/page"));
const AIBusinessIntelligencePage = React.lazy(() => import("./app/ai-business-intelligence/page"));
const AIAutomationPage = React.lazy(() => import("./app/ai-automation/page"));
const AIComputerVisionPage = React.lazy(() => import("./app/ai-computer-vision/page"));
const AIConversationalAIPage = React.lazy(() => import("./app/ai-conversational-ai/page"));
const AICRMPage = React.lazy(() => import("./app/ai-crm/page"));
const AICustomerInsightsPage = React.lazy(() => import("./app/ai-customer-insights/page"));
const AIDataVisualizationPage = React.lazy(() => import("./app/ai-data-visualization/page"));
const AIDevOpsAutomationPage = React.lazy(() => import("./app/ai-devops-automation/page"));
const AIDocumentIntelligencePage = React.lazy(() => import("./app/ai-document-intelligence/page"));
const AIContentModerationPage = React.lazy(() => import("./app/ai-content-moderation/page"));
const AIClimateSolutionsPage = React.lazy(() => import("./app/ai-climate-solutions-pro/page"));
const AIBlockchainSolutionsPage = React.lazy(() => import("./app/ai-blockchain-solutions/page"));
const AICloudInfrastructurePage = React.lazy(() => import("./app/ai-cloud-infrastructure/page"));
const AICodeGenerationPage = React.lazy(() => import("./app/ai-code-generation/page"));
const AICodeSecurityAuditorPage = React.lazy(() => import("./app/ai-code-security-auditor/page"));
const AIContentDeliveryNetworkPage = React.lazy(() => import("./app/ai-content-delivery-network/page"));
const AIContentManagementPage = React.lazy(() => import("./app/ai-content-management/page"));
const AIContentStudioPage = React.lazy(() => import("./app/ai-content-studio/page"));
const AIContentWriterPage = React.lazy(() => import("./app/ai-content-writer/page"));
const AIConversationAnalyticsPage = React.lazy(() => import("./app/ai-conversation-analytics/page"));
const AICustomerChurnPage = React.lazy(() => import("./app/ai-customer-churn/page"));
const AICustomerSentimentTrackerPage = React.lazy(() => import("./app/ai-customer-sentiment-tracker/page"));
const AICustomerSupportBotPage = React.lazy(() => import("./app/ai-customer-support-bot/page"));
const AICustomerSupportChatbotPage = React.lazy(() => import("./app/ai-customer-support-chatbot/page"));
const AICyberDefenseMatrixPage = React.lazy(() => import("./app/ai-cyber-defense-matrix/page"));
const AICybersecurityMonitorPage = React.lazy(() => import("./app/ai-cybersecurity-monitor/page"));
const AICybersecuritySuitePage = React.lazy(() => import("./app/ai-cybersecurity-suite/page"));
const AIFraudDetectionPage = React.lazy(() => import("./app/ai-fraud-detection/page"));
const AIHealthcarePage = React.lazy(() => import("./app/ai-healthcare/page"));
const AIMarketingPage = React.lazy(() => import("./app/ai-marketing/page"));
const AIProjectManagementPage = React.lazy(() => import("./app/ai-project-management/page"));
const AIRecommendationEnginePage = React.lazy(() => import("./app/ai-recommendation-engine/page"));
const AISalesAutomationPage = React.lazy(() => import("./app/ai-sales-automation/page"));
const AIAccountingAssistantPage = React.lazy(() => import("./app/ai-accounting-assistant/page"));
const AIAgriculturalIntelligencePage = React.lazy(() => import("./app/ai-agricultural-intelligence-pro/page"));
const AI3DGenerationPage = React.lazy(() => import("./app/ai-3d-generation/page"));
const AIAPIManagementPage = React.lazy(() => import("./app/ai-api-management/page"));
const AIAPIManagerPage = React.lazy(() => import("./app/ai-api-manager/page"));
const AIAutomatedReportingPage = React.lazy(() => import("./app/ai-automated-reporting/page"));
const AIAutomatedTestingPage = React.lazy(() => import("./app/ai-automated-testing/page"));
const AIAutonomousSystemsPage = React.lazy(() => import("./app/ai-autonomous-systems/page"));
const AIBlockchainAnalyticsPage = React.lazy(() => import("./app/ai-blockchain-analytics/page"));
const AIClimatePredictionEnginePage = React.lazy(() => import("./app/ai-climate-prediction-engine/page"));
const AIContentModerationProPage = React.lazy(() => import("./app/ai-content-moderation-pro/page"));
const AICybersecurityMonitorProPage = React.lazy(() => import("./app/ai-cybersecurity-monitor-pro/page"));
const AICybersecuritySuiteProPage = React.lazy(() => import("./app/ai-cybersecurity-suite-pro/page"));

// IT Services Pages
const CloudMigrationPage = React.lazy(() => import("./app/cloud-migration/page"));
const DevOpsServicesPage = React.lazy(() => import("./app/devops-services/page"));
const ITConsultingPage = React.lazy(() => import("./app/it-consulting/page"));
const NetworkSecurityPage = React.lazy(() => import("./app/network-security/page"));
const SoftwareDevelopmentPage = React.lazy(() => import("./app/software-development/page"));
const SystemIntegrationPage = React.lazy(() => import("./app/system-integration/page"));
const WebDevelopmentPage = React.lazy(() => import("./app/web-development/page"));
const CloudInfrastructurePage = React.lazy(() => import("./app/cloud-infrastructure/page"));
const CybersecuritySolutionsPage = React.lazy(() => import("./app/cybersecurity-solutions/page"));
const MobileDevelopmentPage = React.lazy(() => import("./app/mobile-development/page"));
const DatabaseManagementPage = React.lazy(() => import("./app/database-management/page"));
const CustomSoftwarePage = React.lazy(() => import("./app/custom-software/page"));
const NetworkInfrastructurePage = React.lazy(() => import("./app/network-infrastructure/page"));
const CloudConsultingPage = React.lazy(() => import("./app/cloud-consulting/page"));
const DataCenterSolutionsPage = React.lazy(() => import("./app/data-center-solutions/page"));
const DisasterRecoveryPage = React.lazy(() => import("./app/disaster-recovery/page"));
const ITSupportPage = React.lazy(() => import("./app/it-support/page"));
const ManagedServicesPage = React.lazy(() => import("./app/managed-services/page"));
const SecurityAuditPage = React.lazy(() => import("./app/security-audit/page"));
const TechnologyConsultingPage = React.lazy(() => import("./app/technology-consulting/page"));
const AdvancedSecuritySuitePage = React.lazy(() => import("./app/advanced-security-suite/page"));

// 5G Services Pages
const FiveGSolutionsPage = React.lazy(() => import("./app/5g-solutions/page"));
const FiveGNetworkInfrastructurePage = React.lazy(() => import("./app/5g-network-infrastructure/page"));
const FiveGEdgeComputingPage = React.lazy(() => import("./app/5g-edge-computing/page"));
const FiveGIoTSolutionsPage = React.lazy(() => import("./app/5g-iot-solutions/page"));
const FiveGSmartCitySolutionsPage = React.lazy(() => import("./app/5g-smart-city-solutions/page"));
const FiveGPrivateNetworksPage = React.lazy(() => import("./app/5g-private-networks/page"));
const FiveGMobileApplicationsPage = React.lazy(() => import("./app/5g-mobile-applications/page"));
const FiveGDataAnalyticsPage = React.lazy(() => import("./app/5g-data-analytics/page"));
const FiveGImplementationPage = React.lazy(() => import("./app/5g-implementation/page"));

// Micro SAAS Services Pages
const MicroSaaSServicesPage = React.lazy(() => import("./app/micro-saas-services/page"));
const ProjectManagementToolPage = React.lazy(() => import("./app/project-management-tool/page"));
const CustomerRelationshipManagerPage = React.lazy(() => import("./app/customer-relationship-manager/page"));
const InventoryManagementSystemPage = React.lazy(() => import("./app/inventory-management-system/page"));
const FinancialReportingToolPage = React.lazy(() => import("./app/financial-reporting-tool/page"));
const EmployeeTimeTrackerPage = React.lazy(() => import("./app/employee-time-tracker/page"));
const SocialMediaSchedulerPage = React.lazy(() => import("./app/social-media-scheduler/page"));
const EmailMarketingPlatformPage = React.lazy(() => import("./app/email-marketing-platform/page"));
const WebsiteAnalyticsToolPage = React.lazy(() => import("./app/website-analytics-tool/page"));
const TaskAutomationWorkflowPage = React.lazy(() => import("./app/task-automation-workflow/page"));
const AIPoweredEmailAnalyzerPage = React.lazy(() => import("./app/ai-powered-email-analyzer/page"));
const SmartInventoryOptimizerPage = React.lazy(() => import("./app/smart-inventory-optimizer/page"));
const AICustomerSentimentTrackerPage = React.lazy(() => import("./app/ai-customer-sentiment-tracker/page"));
const SmartExpenseCategorizerPage = React.lazy(() => import("./app/smart-expense-categorizer/page"));
const ZionAnalyticsProPage = React.lazy(() => import("./app/zion-analytics-pro/page"));
const ZionSecurityShieldPage = React.lazy(() => import("./app/zion-security-shield/page"));
const ZionCloudVaultPage = React.lazy(() => import("./app/zion-cloud-vault/page"));
const ZionContentStudioPage = React.lazy(() => import("./app/zion-content-studio/page"));

// Main App Component
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    // Initialize performance monitoring
    if (typeof window !== 'undefined') {
      console.log('Zion Tech Group App initialized');
    }
  }, []);

  return (
    <HelmetProvider>
      <GlobalErrorBoundary>
        <AnalyticsProvider>
          <PerformanceMonitor>
            <WebVitalsTracker>
              <EnhancedAccessibility>
                <AccessibilityEnhancer>
                  <CoreWebVitals>
                    <Router>
                      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                        <FuturisticBackground>
                          <Navigation onSidebarToggle={toggleSidebar} />
                          <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
                          <Breadcrumb />
                          
                          <main className="relative z-10" id="main-content" role="main">
                            <Suspense fallback={<LoadingPage />}>
                              <Routes>
                                {/* Main Pages */}
                                <Route path="/" element={<HomePage />} />
                                <Route path="/about" element={<AboutPage />} />
                                <Route path="/contact" element={<ContactPage />} />
                                <Route path="/services" element={<ServicesPage />} />
                                <Route path="/blog" element={<BlogPage />} />
                                <Route path="/privacy" element={<PrivacyPage />} />
                                <Route path="/terms" element={<TermsPage />} />

                                {/* AI Services */}
                                <Route path="/ai-analytics" element={<AIAnalyticsPage />} />
                                <Route path="/ai-automation" element={<AIAutomationPage />} />
                                <Route path="/ai-business-intelligence" element={<AIBusinessIntelligencePage />} />
                                <Route path="/ai-content-generation" element={<AIContentGenerationPage />} />
                                <Route path="/ai-customer-service" element={<AICustomerSupportPage />} />
                                <Route path="/ai-data-analytics" element={<AIDataAnalyticsPage />} />
                                <Route path="/ai-fraud-detection" element={<AIFraudDetectionPage />} />
                                <Route path="/ai-healthcare" element={<AIHealthcarePage />} />
                                <Route path="/ai-marketing" element={<AIMarketingPage />} />
                                <Route path="/ai-predictive-analytics" element={<AIPredictiveAnalyticsPage />} />
                                <Route path="/ai-project-management" element={<AIProjectManagementPage />} />
                                <Route path="/ai-recommendation-engine" element={<AIRecommendationEnginePage />} />
                                <Route path="/ai-sales-automation" element={<AISalesAutomationPage />} />
                                <Route path="/ai-workflow-automation" element={<AIWorkflowAutomationPage />} />
                                <Route path="/ai-chatbot-builder" element={<AIChatbotBuilderPage />} />
                                <Route path="/ai-code-assistant" element={<AICodeAssistantPage />} />
                                <Route path="/ai-design-studio" element={<AIDesignStudioPage />} />
                                <Route path="/ai-computer-vision" element={<AIComputerVisionPage />} />
                                <Route path="/ai-conversational-ai" element={<AIConversationalAIPage />} />
                                <Route path="/ai-crm" element={<AICRMPage />} />
                                <Route path="/ai-customer-insights" element={<AICustomerInsightsPage />} />
                                <Route path="/ai-data-visualization" element={<AIDataVisualizationPage />} />
                                <Route path="/ai-devops-automation" element={<AIDevOpsAutomationPage />} />
                                <Route path="/ai-document-intelligence" element={<AIDocumentIntelligencePage />} />
                                <Route path="/ai-content-moderation" element={<AIContentModerationPage />} />
                                <Route path="/ai-climate-solutions-pro" element={<AIClimateSolutionsPage />} />
                                <Route path="/ai-blockchain-solutions" element={<AIBlockchainSolutionsPage />} />
                                <Route path="/ai-cloud-infrastructure" element={<AICloudInfrastructurePage />} />
                                <Route path="/ai-code-generation" element={<AICodeGenerationPage />} />
                                <Route path="/ai-code-security-auditor" element={<AICodeSecurityAuditorPage />} />
                                <Route path="/ai-content-delivery-network" element={<AIContentDeliveryNetworkPage />} />
                                <Route path="/ai-content-management" element={<AIContentManagementPage />} />
                                <Route path="/ai-content-studio" element={<AIContentStudioPage />} />
                                <Route path="/ai-content-writer" element={<AIContentWriterPage />} />
                                <Route path="/ai-conversation-analytics" element={<AIConversationAnalyticsPage />} />
                                <Route path="/ai-customer-churn" element={<AICustomerChurnPage />} />
                                <Route path="/ai-customer-sentiment-tracker" element={<AICustomerSentimentTrackerPage />} />
                                <Route path="/ai-customer-support-bot" element={<AICustomerSupportBotPage />} />
                                <Route path="/ai-customer-support-chatbot" element={<AICustomerSupportChatbotPage />} />
                                <Route path="/ai-cyber-defense-matrix" element={<AICyberDefenseMatrixPage />} />
                                <Route path="/ai-cybersecurity-monitor" element={<AICybersecurityMonitorPage />} />
                                <Route path="/ai-cybersecurity-suite" element={<AICybersecuritySuitePage />} />
                                <Route path="/ai-cybersecurity" element={<AICybersecurityPage />} />
                                <Route path="/ai-document-processing" element={<AIDocumentProcessingPage />} />
                                <Route path="/ai-marketing-automation" element={<AIMarketingAutomationPage />} />
                                <Route path="/ai-voice-assistant" element={<AIVoiceAssistantPage />} />
                                <Route path="/ai-accounting-assistant" element={<AIAccountingAssistantPage />} />
                                <Route path="/ai-agricultural-intelligence-pro" element={<AIAgriculturalIntelligencePage />} />
                                <Route path="/ai-3d-generation" element={<AI3DGenerationPage />} />
                                <Route path="/ai-api-management" element={<AIAPIManagementPage />} />
                                <Route path="/ai-api-manager" element={<AIAPIManagerPage />} />
                                <Route path="/ai-automated-reporting" element={<AIAutomatedReportingPage />} />
                                <Route path="/ai-automated-testing" element={<AIAutomatedTestingPage />} />
                                <Route path="/ai-autonomous-systems" element={<AIAutonomousSystemsPage />} />
                                <Route path="/ai-blockchain-analytics" element={<AIBlockchainAnalyticsPage />} />
                                <Route path="/ai-climate-prediction-engine" element={<AIClimatePredictionEnginePage />} />
                                <Route path="/ai-content-moderation-pro" element={<AIContentModerationProPage />} />
                                <Route path="/ai-cybersecurity-monitor-pro" element={<AICybersecurityMonitorProPage />} />
                                <Route path="/ai-cybersecurity-suite-pro" element={<AICybersecuritySuiteProPage />} />

                                {/* IT Services */}
                                <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                                <Route path="/cybersecurity-solutions" element={<CybersecuritySolutionsPage />} />
                                <Route path="/web-development" element={<WebDevelopmentPage />} />
                                <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                                <Route path="/database-management" element={<DatabaseManagementPage />} />
                                <Route path="/custom-software" element={<CustomSoftwarePage />} />
                                <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} />
                                <Route path="/cloud-migration" element={<CloudMigrationPage />} />
                                <Route path="/devops-services" element={<DevOpsServicesPage />} />
                                <Route path="/it-consulting" element={<ITConsultingPage />} />
                                <Route path="/network-security" element={<NetworkSecurityPage />} />
                                <Route path="/software-development" element={<SoftwareDevelopmentPage />} />
                                <Route path="/system-integration" element={<SystemIntegrationPage />} />
                                <Route path="/cloud-consulting" element={<CloudConsultingPage />} />
                                <Route path="/data-center-solutions" element={<DataCenterSolutionsPage />} />
                                <Route path="/disaster-recovery" element={<DisasterRecoveryPage />} />
                                <Route path="/it-support" element={<ITSupportPage />} />
                                <Route path="/managed-services" element={<ManagedServicesPage />} />
                                <Route path="/security-audit" element={<SecurityAuditPage />} />
                                <Route path="/technology-consulting" element={<TechnologyConsultingPage />} />
                                <Route path="/advanced-security-suite" element={<AdvancedSecuritySuitePage />} />

                                {/* Micro SAAS Services */}
                                <Route path="/micro-saas-services" element={<MicroSaaSServicesPage />} />
                                <Route path="/project-management-tool" element={<ProjectManagementToolPage />} />
                                <Route path="/customer-relationship-manager" element={<CustomerRelationshipManagerPage />} />
                                <Route path="/inventory-management-system" element={<InventoryManagementSystemPage />} />
                                <Route path="/financial-reporting-tool" element={<FinancialReportingToolPage />} />
                                <Route path="/employee-time-tracker" element={<EmployeeTimeTrackerPage />} />
                                <Route path="/social-media-scheduler" element={<SocialMediaSchedulerPage />} />
                                <Route path="/email-marketing-platform" element={<EmailMarketingPlatformPage />} />
                                <Route path="/website-analytics-tool" element={<WebsiteAnalyticsToolPage />} />
                                <Route path="/task-automation-workflow" element={<TaskAutomationWorkflowPage />} />
                                <Route path="/ai-powered-email-analyzer" element={<AIPoweredEmailAnalyzerPage />} />
                                <Route path="/smart-inventory-optimizer" element={<SmartInventoryOptimizerPage />} />
                                <Route path="/ai-customer-sentiment-tracker" element={<AICustomerSentimentTrackerPage />} />
                                <Route path="/smart-expense-categorizer" element={<SmartExpenseCategorizerPage />} />
                                <Route path="/zion-analytics-pro" element={<ZionAnalyticsProPage />} />
                                <Route path="/zion-security-shield" element={<ZionSecurityShieldPage />} />
                                <Route path="/zion-cloud-vault" element={<ZionCloudVaultPage />} />
                                <Route path="/zion-content-studio" element={<ZionContentStudioPage />} />

                                {/* 5G Services */}
                                <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                                <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
                                <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                                <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                                <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
                                <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
                                <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
                                <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
                                <Route path="/5g-iot-solutions" element={<FiveGIoTSolutionsPage />} />

                                {/* Catch all route */}
                                <Route path="*" element={<div className="min-h-screen flex items-center justify-center">
                                  <div className="text-center">
                                    <h1 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h1>
                                    <p className="text-gray-300 mb-8">The page you're looking for doesn't exist.</p>
                                    <a href="/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                      Go Home
                                    </a>
                                  </div>
                                </div>} />
                              </Routes>
                            </Suspense>
                          </main>
                          
                          <Footer />
                        </FuturisticBackground>
                      </div>
                    </Router>
                  </CoreWebVitals>
                </AccessibilityEnhancer>
              </EnhancedAccessibility>
            </WebVitalsTracker>
          </PerformanceMonitor>
        </AnalyticsProvider>
      </GlobalErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
