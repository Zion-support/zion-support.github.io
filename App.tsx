import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./app/styles/futuristic.css";
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

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import("./app/about/page"));
const ContactPage = React.lazy(() => import("./app/contact/page"));
const ServicesPage = React.lazy(() => import("./app/services/page"));
const BlogPage = React.lazy(() => import("./app/blog/page"));
const PrivacyPage = React.lazy(() => import("./app/privacy/page"));
const TermsPage = React.lazy(() => import("./app/terms/page"));
const WebinarsPage = React.lazy(() => import("./app/webinars/page"));
const WhitepapersPage = React.lazy(() => import("./app/whitepapers/page"));

// Additional Main Pages
const TeamPage = React.lazy(() => import("./app/team/page"));
const CareersPage = React.lazy(() => import("./app/careers/page"));
const CaseStudiesPage = React.lazy(() => import("./app/case-studies/page"));
const NewsPage = React.lazy(() => import("./app/news/page"));
const PressPage = React.lazy(() => import("./app/press/page"));
const PartnersPage = React.lazy(() => import("./app/partners/page"));
const PricingPage = React.lazy(() => import("./app/pricing/page"));
const DemoPage = React.lazy(() => import("./app/demo/page"));
const SupportPage = React.lazy(() => import("./app/support/page"));
const ConsultationPage = React.lazy(() => import("./app/consultation/page"));
const DocsPage = React.lazy(() => import("./app/docs/page"));
const ApiPage = React.lazy(() => import("./app/api/page"));
const TutorialsPage = React.lazy(() => import("./app/tutorials/page"));
const CookiesPage = React.lazy(() => import("./app/cookies/page"));
const SitemapPage = React.lazy(() => import("./app/sitemap/page"));
const AccessibilityPage = React.lazy(() => import("./app/accessibility/page"));
const SecurityPage = React.lazy(() => import("./app/security/page"));

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

// Additional AI Services Pages (only existing ones)
const AIAnalyticsDashboardProPage = React.lazy(() => import("./app/ai-analytics-dashboard-pro/page"));
const AICybersecuritySuiteProPage = React.lazy(() => import("./app/ai-cybersecurity-suite-pro/page"));
const AIContentGenerationProPage = React.lazy(() => import("./app/ai-content-generation-pro/page"));
const AICustomerSupportChatbotPage = React.lazy(() => import("./app/ai-customer-support-chatbot/page"));
const AICodeAssistantProPage = React.lazy(() => import("./app/ai-code-assistant-pro/page"));
const AIBusinessIntelligenceProPage = React.lazy(() => import("./app/ai-business-intelligence-pro/page"));
const AISupplyChainOptimizerPage = React.lazy(() => import("./app/ai-supply-chain-optimizer/page"));
const AIPredictiveMaintenancePage = React.lazy(() => import("./app/ai-predictive-maintenance/page"));
const AIRecommendationEnginePage = React.lazy(() => import("./app/ai-recommendation-engine/page"));
const AIChatbotEnterprisePage = React.lazy(() => import("./app/ai-chatbot-enterprise/page"));
const AIVideoAnalysisPage = React.lazy(() => import("./app/ai-video-analysis/page"));
const AIServicesPage = React.lazy(() => import("./app/ai-services/page"));

// IT Services Pages
const CloudMigrationPage = React.lazy(() => import("./app/cloud-migration/page"));
const DevOpsServicesPage = React.lazy(() => import("./app/devops/page"));
const ITConsultingPage = React.lazy(() => import("./app/it-consulting/page"));
const NetworkSecurityPage = React.lazy(() => import("./app/network-security/page"));
const SoftwareDevelopmentPage = React.lazy(() => import("./app/custom-software/page"));
const SystemIntegrationPage = React.lazy(() => import("./app/system-integration/page"));
const WebDevelopmentPage = React.lazy(() => import("./app/web-development/page"));

// Additional IT Services Pages
const CloudInfrastructurePage = React.lazy(() => import("./app/cloud-infrastructure/page"));
const BlockchainDevelopmentPage = React.lazy(() => import("./app/blockchain-development/page"));
const IoTSolutionsPage = React.lazy(() => import("./app/iot-solutions/page"));
const DevOpsSolutionsPage = React.lazy(() => import("./app/devops-solutions/page"));
const MobileDevelopmentPage = React.lazy(() => import("./app/mobile-development/page"));
const ITSupportPage = React.lazy(() => import("./app/it-support/page"));
const NetworkInfrastructurePage = React.lazy(() => import("./app/network-infrastructure/page"));

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
const MicroSaaSServicesPage = React.lazy(() => import("./app/zion-content-studio/page"));
const ProjectManagementToolPage = React.lazy(() => import("./app/project-management-pro/page"));
const CustomerRelationshipManagerPage = React.lazy(() => import("./app/zion-ai-crm-pro/page"));
const InventoryManagementSystemPage = React.lazy(() => import("./app/zion-inventory-smart/page"));
const FinancialReportingToolPage = React.lazy(() => import("./app/ai-financial-analytics-pro/page"));
const EmployeeTimeTrackerPage = React.lazy(() => import("./app/zion-performance-monitor/page"));
const SocialMediaSchedulerPage = React.lazy(() => import("./app/zion-ai-marketing-automation/page"));
const EmailMarketingPlatformPage = React.lazy(() => import("./app/zion-email-automation/page"));
const WebsiteAnalyticsToolPage = React.lazy(() => import("./app/data-analytics/page"));
const TaskAutomationWorkflowPage = React.lazy(() => import("./app/ai-workflow-automation/page"));

// New Innovative Micro SAAS Services
const AIPoweredEmailAnalyzerPage = React.lazy(() => import("./app/zion-ai-email-assistant/page"));
const SmartInventoryOptimizerPage = React.lazy(() => import("./app/zion-inventory-smart/page"));
const AICustomerSentimentTrackerPage = React.lazy(() => import("./app/ai-customer-sentiment-tracker/page"));
const SmartExpenseCategorizerPage = React.lazy(() => import("./app/ai-financial-crime-detection-pro/page"));

// Additional Micro SAAS Pages (only existing ones)
const ZionAnalyticsProPage = React.lazy(() => import("./app/zion-analytics-pro/page"));
const ZionSecurityShieldPage = React.lazy(() => import("./app/zion-security-shield/page"));
const ZionCloudVaultPage = React.lazy(() => import("./app/zion-cloud-vault/page"));
const ZionAIInventoryManagerPage = React.lazy(() => import("./app/zion-ai-inventory-manager/page"));
const ZionHRAssistantProPage = React.lazy(() => import("./app/zion-hr-assistant-pro/page"));
const ZionAIAccountingSuitePage = React.lazy(() => import("./app/zion-ai-accounting-suite/page"));
const ZionAICustomerInsightsPage = React.lazy(() => import("./app/zion-ai-customer-insights/page"));
const MicroSaasPage = React.lazy(() => import("./app/micro-saas/page"));
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
      // Add any global initialization logic here
      console.log('Zion Tech Group App initialized');
    }
  }, []);

  return (
    <ImprovedErrorBoundary>
      <GlobalErrorBoundary>
        <EnhancedErrorBoundary>
          <HelmetProvider>
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
                              
                              <main id="main-content" role="main" className="relative z-10">
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
                                    <Route path="/webinars" element={<WebinarsPage />} />
                                    <Route path="/whitepapers" element={<WhitepapersPage />} />
                                    <Route path="/team" element={<TeamPage />} />
                                    <Route path="/careers" element={<CareersPage />} />
                                    <Route path="/case-studies" element={<CaseStudiesPage />} />
                                    <Route path="/news" element={<NewsPage />} />
                                    <Route path="/press" element={<PressPage />} />
                                    <Route path="/partners" element={<PartnersPage />} />
                                    <Route path="/pricing" element={<PricingPage />} />
                                    <Route path="/demo" element={<DemoPage />} />
                                    <Route path="/support" element={<SupportPage />} />
                                    <Route path="/consultation" element={<ConsultationPage />} />
                                    <Route path="/docs" element={<DocsPage />} />
                                    <Route path="/api" element={<ApiPage />} />
                                    <Route path="/tutorials" element={<TutorialsPage />} />
                                    <Route path="/cookies" element={<CookiesPage />} />
                                    <Route path="/sitemap" element={<SitemapPage />} />
                                    <Route path="/accessibility" element={<AccessibilityPage />} />
                                    <Route path="/security" element={<SecurityPage />} />

                                    {/* AI Services */}
                                    <Route path="/ai-analytics" element={<AIAnalyticsPage />} />
                                    <Route path="/ai-content-generation" element={<AIContentGenerationPage />} />
                                    <Route path="/ai-customer-support" element={<AICustomerSupportPage />} />
                                    <Route path="/ai-cybersecurity" element={<AICybersecurityPage />} />
                                    <Route path="/ai-data-analytics" element={<AIDataAnalyticsPage />} />
                                    <Route path="/ai-document-processing" element={<AIDocumentProcessingPage />} />
                                    <Route path="/ai-marketing-automation" element={<AIMarketingAutomationPage />} />
                                    <Route path="/ai-predictive-analytics" element={<AIPredictiveAnalyticsPage />} />
                                    <Route path="/ai-voice-assistant" element={<AIVoiceAssistantPage />} />
                                    <Route path="/ai-workflow-automation" element={<AIWorkflowAutomationPage />} />
                                    <Route path="/ai-analytics-dashboard-pro" element={<AIAnalyticsDashboardProPage />} />
                                    <Route path="/ai-cybersecurity-suite-pro" element={<AICybersecuritySuiteProPage />} />
                                    <Route path="/ai-content-generation-pro" element={<AIContentGenerationProPage />} />
                                    <Route path="/ai-customer-support-chatbot" element={<AICustomerSupportChatbotPage />} />
                                    <Route path="/ai-code-assistant-pro" element={<AICodeAssistantProPage />} />
                                    <Route path="/ai-business-intelligence-pro" element={<AIBusinessIntelligenceProPage />} />
                                    <Route path="/ai-supply-chain-optimizer" element={<AISupplyChainOptimizerPage />} />
                                    <Route path="/ai-predictive-maintenance" element={<AIPredictiveMaintenancePage />} />
                                    <Route path="/ai-recommendation-engine" element={<AIRecommendationEnginePage />} />
                                    <Route path="/ai-chatbot-enterprise" element={<AIChatbotEnterprisePage />} />
                                    <Route path="/ai-video-analysis" element={<AIVideoAnalysisPage />} />
                                    <Route path="/ai-services" element={<AIServicesPage />} />

                                    {/* IT Services */}
                                    <Route path="/cloud-migration" element={<CloudMigrationPage />} />
                                    <Route path="/devops-services" element={<DevOpsServicesPage />} />
                                    <Route path="/it-consulting" element={<ITConsultingPage />} />
                                    <Route path="/network-security" element={<NetworkSecurityPage />} />
                                    <Route path="/software-development" element={<SoftwareDevelopmentPage />} />
                                    <Route path="/system-integration" element={<SystemIntegrationPage />} />
                                    <Route path="/web-development" element={<WebDevelopmentPage />} />
                                    <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                                    <Route path="/blockchain-development" element={<BlockchainDevelopmentPage />} />
                                    <Route path="/iot-solutions" element={<IoTSolutionsPage />} />
                                    <Route path="/devops-solutions" element={<DevOpsSolutionsPage />} />
                                    <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                                    <Route path="/it-support" element={<ITSupportPage />} />
                                    <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} />

                                    {/* 5G Services */}
                                    <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                                    <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
                                    <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                                    <Route path="/5g-iot-solutions" element={<FiveGIoTSolutionsPage />} />
                                    <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
                                    <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
                                    <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
                                    <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
                                    <Route path="/5g-implementation" element={<FiveGImplementationPage />} />

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

                                    {/* New Innovative Micro SAAS Services */}
                                    <Route path="/ai-powered-email-analyzer" element={<AIPoweredEmailAnalyzerPage />} />
                                    <Route path="/smart-inventory-optimizer" element={<SmartInventoryOptimizerPage />} />
                                    <Route path="/ai-customer-sentiment-tracker" element={<AICustomerSentimentTrackerPage />} />
                                    <Route path="/smart-expense-categorizer" element={<SmartExpenseCategorizerPage />} />

                                    {/* Additional Micro SAAS Routes (only existing ones) */}
                                    <Route path="/zion-analytics-pro" element={<ZionAnalyticsProPage />} />
                                    <Route path="/zion-security-shield" element={<ZionSecurityShieldPage />} />
                                    <Route path="/zion-cloud-vault" element={<ZionCloudVaultPage />} />
                                    <Route path="/zion-ai-inventory-manager" element={<ZionAIInventoryManagerPage />} />
                                    <Route path="/zion-hr-assistant-pro" element={<ZionHRAssistantProPage />} />
                                    <Route path="/zion-ai-accounting-suite" element={<ZionAIAccountingSuitePage />} />
                                    <Route path="/zion-ai-customer-insights" element={<ZionAICustomerInsightsPage />} />
                                    <Route path="/micro-saas" element={<MicroSaasPage />} />

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
          </HelmetProvider>
        </EnhancedErrorBoundary>
      </GlobalErrorBoundary>
    </ImprovedErrorBoundary>
  );
}

export default App;