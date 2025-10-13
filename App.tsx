import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./app/styles/futuristic.css";
import "./app/styles/futuristic-enhanced.css";
import Navigation from "./app/components/Navigation";
import Footer from "./app/components/Footer";
import Sidebar from "./app/components/Sidebar";
import HomePage from "./app/page";
import { LoadingPage } from "./app/components/LoadingStates";
import { GlobalErrorBoundary } from "./app/components/EnhancedErrorFeedback";
import EnhancedErrorBoundary from "./app/components/EnhancedErrorBoundary";
import Breadcrumb from "./app/components/Breadcrumb";
import FuturisticBackground from "./app/components/FuturisticBackground";
import AccessibilityEnhancer from "./app/components/AccessibilityEnhancer";
import PerformanceMonitor from "./app/components/PerformanceMonitor";
import EnhancedSEO from "./app/components/EnhancedSEO";
import AnalyticsProvider from "./app/components/AnalyticsProvider";
import WebVitalsTracker from "./app/components/WebVitalsTracker";
import PerformanceEnhancer from "./app/components/PerformanceEnhancer";
import SEOOptimizer from "./app/components/SEOOptimizer";
import EnhancedSEOOptimizer from "./app/components/EnhancedSEOOptimizer";
import EnhancedAccessibility from "./app/components/EnhancedAccessibility";

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import("./app/about/page"));
const ContactPage = React.lazy(() => import("./app/contact/page"));
const ServicesPage = React.lazy(() => import("./app/services/page"));
const PricingPage = React.lazy(() => import("./app/pricing/page"));
const BlogPage = React.lazy(() => import("./app/blog/page"));
const AIServicesPage = React.lazy(() => import("./app/ai-services/page"));
const TutorialsPage = React.lazy(() => import("./app/tutorials/page"));
const DemoPage = React.lazy(() => import("./app/demo/page"));
const SupportPage = React.lazy(() => import("./app/support/page"));
const PrivacyPage = React.lazy(() => import("./app/privacy/page"));
const TermsPage = React.lazy(() => import("./app/terms/page"));
const CookiesPage = React.lazy(() => import("./app/cookies/page"));
const SitemapPage = React.lazy(() => import("./app/sitemap/page"));
const CaseStudiesPage = React.lazy(() => import("./app/case-studies/page"));
const CareersPage = React.lazy(() => import("./app/careers/page"));
const ConsultationPage = React.lazy(() => import("./app/consultation/page"));

// AI Service Pages
const AiAnalyticsPage = React.lazy(() => import("./app/ai-analytics/page"));
const AiAutomationPage = React.lazy(() => import("./app/ai-automation/page"));
const AiBusinessIntelligencePage = React.lazy(() => import("./app/ai-business-intelligence/page"));
const AiContentGenerationPage = React.lazy(() => import("./app/ai-content-generation/page"));
const AiCustomerServicePage = React.lazy(() => import("./app/ai-customer-service/page"));
const AiDataAnalyticsPage = React.lazy(() => import("./app/ai-data-analytics/page"));
const AiEmailAutomationPage = React.lazy(() => import("./app/ai-email-automation/page"));
const AiFraudDetectionPage = React.lazy(() => import("./app/ai-fraud-detection/page"));
const AiHealthcarePage = React.lazy(() => import("./app/ai-healthcare/page"));
const AiMarketingPage = React.lazy(() => import("./app/ai-marketing/page"));
const AiPredictiveAnalyticsPage = React.lazy(() => import("./app/ai-predictive-analytics/page"));
const AiProjectManagementPage = React.lazy(() => import("./app/ai-project-management/page"));
const AiRecommendationEnginePage = React.lazy(() => import("./app/ai-recommendation-engine/page"));
const AiSalesAutomationPage = React.lazy(() => import("./app/ai-sales-automation/page"));
const AiWorkflowAutomationPage = React.lazy(() => import("./app/ai-workflow-automation/page"));

// IT Service Pages
const CloudInfrastructurePage = React.lazy(() => import("./app/cloud-infrastructure/page"));
const CybersecuritySolutionsPage = React.lazy(() => import("./app/cybersecurity-solutions/page"));
const WebDevelopmentPage = React.lazy(() => import("./app/web-development/page"));
const MobileDevelopmentPage = React.lazy(() => import("./app/mobile-development/page"));
const DatabaseManagementPage = React.lazy(() => import("./app/database-management/page"));
const CustomSoftwarePage = React.lazy(() => import("./app/custom-software/page"));
const NetworkInfrastructurePage = React.lazy(() => import("./app/network-infrastructure/page"));
const DevOpsServicesPage = React.lazy(() => import("./app/devops-services/page"));
const DataAnalyticsPage = React.lazy(() => import("./app/data-analytics/page"));
const ITConsultingPage = React.lazy(() => import("./app/it-consulting/page"));
const SystemIntegrationPage = React.lazy(() => import("./app/system-integration/page"));
const ITSupportPage = React.lazy(() => import("./app/it-support/page"));

// 5G Service Pages
const FiveGSolutionsPage = React.lazy(() => import("./app/5g-solutions/page"));
const FiveGNetworkInfrastructurePage = React.lazy(() => import("./app/5g-network-infrastructure/page"));
const FiveGEdgeComputingPage = React.lazy(() => import("./app/5g-edge-computing/page"));
const FiveGDataAnalyticsPage = React.lazy(() => import("./app/5g-data-analytics/page"));
const FiveGIotSolutionsPage = React.lazy(() => import("./app/5g-iot-solutions/page"));
const FiveGMobileApplicationsPage = React.lazy(() => import("./app/5g-mobile-applications/page"));
const FiveGPrivateNetworksPage = React.lazy(() => import("./app/5g-private-networks/page"));
const FiveGSmartCitySolutionsPage = React.lazy(() => import("./app/5g-smart-city-solutions/page"));
const FiveGImplementationPage = React.lazy(() => import("./app/5g-implementation/page"));

// Zion Service Pages
const ZionAiAnalyticsPage = React.lazy(() => import("./app/zion-ai-analytics/page"));
const ZionAiAutomationPage = React.lazy(() => import("./app/zion-ai-automation/page"));
const ZionAiBusinessIntelligencePage = React.lazy(() => import("./app/zion-ai-business-intelligence/page"));
const ZionAiContentGenerationPage = React.lazy(() => import("./app/zion-ai-content-generation/page"));
const ZionAiCustomerServicePage = React.lazy(() => import("./app/zion-ai-customer-service/page"));
const ZionAiDataAnalyticsPage = React.lazy(() => import("./app/zion-ai-data-analytics/page"));
const ZionAiEmailAutomationPage = React.lazy(() => import("./app/zion-ai-email-automation/page"));
const ZionAiFraudDetectionPage = React.lazy(() => import("./app/zion-ai-fraud-detection/page"));
const ZionAiHealthcarePage = React.lazy(() => import("./app/zion-ai-healthcare/page"));
const ZionAiMarketingPage = React.lazy(() => import("./app/zion-ai-marketing/page"));
const ZionAiPredictiveAnalyticsPage = React.lazy(() => import("./app/zion-ai-predictive-analytics/page"));
const ZionAiProjectManagementPage = React.lazy(() => import("./app/zion-ai-project-management/page"));
const ZionAiRecommendationEnginePage = React.lazy(() => import("./app/zion-ai-recommendation-engine/page"));
const ZionAiSalesAutomationPage = React.lazy(() => import("./app/zion-ai-sales-automation/page"));
const ZionAiWorkflowAutomationPage = React.lazy(() => import("./app/zion-ai-workflow-automation/page"));
const ZionAiChatbotPage = React.lazy(() => import("./app/zion-ai-chatbot/page"));
const ZionAiCodeAssistantPage = React.lazy(() => import("./app/zion-ai-code-assistant/page"));
const ZionAiContentModerationPage = React.lazy(() => import("./app/zion-ai-content-moderation/page"));
const ZionAiConversationalAiPage = React.lazy(() => import("./app/zion-ai-conversational-ai/page"));
const ZionAiCrmPage = React.lazy(() => import("./app/zion-ai-crm/page"));
const ZionAiCybersecurityPage = React.lazy(() => import("./app/zion-ai-cybersecurity/page"));
const ZionAiDataVisualizationPage = React.lazy(() => import("./app/zion-ai-data-visualization/page"));
const ZionAiDesignStudioPage = React.lazy(() => import("./app/zion-ai-design-studio/page"));
const ZionAiDevopsAutomationPage = React.lazy(() => import("./app/zion-ai-devops-automation/page"));
const ZionAiDocumentIntelligencePage = React.lazy(() => import("./app/zion-ai-document-intelligence/page"));
const ZionAiDocumentProcessingPage = React.lazy(() => import("./app/zion-ai-document-processing/page"));
const ZionAiEmailMarketingPage = React.lazy(() => import("./app/zion-ai-email-marketing/page"));
const ZionAiFinancialAnalysisPage = React.lazy(() => import("./app/zion-ai-financial-analysis/page"));
const ZionAiImageGenerationPage = React.lazy(() => import("./app/zion-ai-image-generation/page"));
const ZionAiLanguageProcessingPage = React.lazy(() => import("./app/zion-ai-language-processing/page"));
const ZionAiMachineLearningPage = React.lazy(() => import("./app/zion-ai-machine-learning/page"));
const ZionAiNaturalLanguageProcessingPage = React.lazy(() => import("./app/zion-ai-natural-language-processing/page"));
const ZionAiPersonalAssistantPage = React.lazy(() => import("./app/zion-ai-personal-assistant/page"));
const ZionAiPredictiveModelingPage = React.lazy(() => import("./app/zion-ai-predictive-modeling/page"));
const ZionAiProcessAutomationPage = React.lazy(() => import("./app/zion-ai-process-automation/page"));
const ZionAiQualityAssurancePage = React.lazy(() => import("./app/zion-ai-quality-assurance/page"));
const ZionAiRecommendationSystemPage = React.lazy(() => import("./app/zion-ai-recommendation-system/page"));
const ZionAiResearchAssistantPage = React.lazy(() => import("./app/zion-ai-research-assistant/page"));
const ZionAiSentimentAnalysisPage = React.lazy(() => import("./app/zion-ai-sentiment-analysis/page"));
const ZionAiSocialMediaManagementPage = React.lazy(() => import("./app/zion-ai-social-media-management/page"));
const ZionAiSurveyBuilderPage = React.lazy(() => import("./app/zion-ai-survey-builder/page"));
const ZionAiTranslatorProPage = React.lazy(() => import("./app/zion-ai-translator-pro/page"));
const ZionAiVideoEditorPage = React.lazy(() => import("./app/zion-ai-video-editor/page"));
const ZionChatAiPage = React.lazy(() => import("./app/zion-chat-ai/page"));
const ZionCrmIntelligencePage = React.lazy(() => import("./app/zion-crm-intelligence/page"));
const ZionCustomerInsightsPage = React.lazy(() => import("./app/zion-customer-insights/page"));

// Main App Component
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const toggleSidebar = React.useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  const closeSidebar = React.useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  return (
    <GlobalErrorBoundary>
      <EnhancedErrorBoundary>
        <HelmetProvider>
          <AccessibilityEnhancer>
            <Router>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                <FuturisticBackground>
                  <Navigation onSidebarToggle={toggleSidebar} />
                  <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
                  <Breadcrumb />
                  <main id="main-content" role="main">
                    <Suspense fallback={<LoadingPage />}>
                      <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/pricing" element={<PricingPage />} />
                        <Route path="/blog" element={<BlogPage />} />
                        <Route path="/case-studies" element={<CaseStudiesPage />} />
                        <Route path="/careers" element={<CareersPage />} />
                        <Route path="/ai-services" element={<AIServicesPage />} />
                        <Route path="/it-services" element={<ServicesPage />} />
                        <Route path="/micro-saas" element={<ServicesPage />} />
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
                        <Route path="/ai-business-intelligence" element={<AiBusinessIntelligencePage />} />
                        <Route path="/ai-content-generation" element={<AiContentGenerationPage />} />
                        <Route path="/ai-customer-service" element={<AiCustomerServicePage />} />
                        <Route path="/ai-data-analytics" element={<AiDataAnalyticsPage />} />
                        <Route path="/ai-email-automation" element={<AiEmailAutomationPage />} />
                        <Route path="/ai-fraud-detection" element={<AiFraudDetectionPage />} />
                        <Route path="/ai-healthcare" element={<AiHealthcarePage />} />
                        <Route path="/ai-marketing" element={<AiMarketingPage />} />
                        <Route path="/ai-predictive-analytics" element={<AiPredictiveAnalyticsPage />} />
                        <Route path="/ai-project-management" element={<AiProjectManagementPage />} />
                        <Route path="/ai-recommendation-engine" element={<AiRecommendationEnginePage />} />
                        <Route path="/ai-sales-automation" element={<AiSalesAutomationPage />} />
                        <Route path="/ai-workflow-automation" element={<AiWorkflowAutomationPage />} />

                        {/* IT Service Routes */}
                        <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                        <Route path="/cybersecurity-solutions" element={<CybersecuritySolutionsPage />} />
                        <Route path="/web-development" element={<WebDevelopmentPage />} />
                        <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                        <Route path="/database-management" element={<DatabaseManagementPage />} />
                        <Route path="/custom-software" element={<CustomSoftwarePage />} />
                        <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} />
                        <Route path="/devops-services" element={<DevOpsServicesPage />} />
                        <Route path="/data-analytics" element={<DataAnalyticsPage />} />
                        <Route path="/it-consulting" element={<ITConsultingPage />} />
                        <Route path="/system-integration" element={<SystemIntegrationPage />} />
                        <Route path="/it-support" element={<ITSupportPage />} />

                        {/* 5G Service Routes */}
                        <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                        <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
                        <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                        <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
                        <Route path="/5g-iot-solutions" element={<FiveGIotSolutionsPage />} />
                        <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
                        <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
                        <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
                        <Route path="/5g-implementation" element={<FiveGImplementationPage />} />

                        {/* Zion Service Routes */}
                        <Route path="/zion-ai-analytics" element={<ZionAiAnalyticsPage />} />
                        <Route path="/zion-ai-automation" element={<ZionAiAutomationPage />} />
                        <Route path="/zion-ai-business-intelligence" element={<ZionAiBusinessIntelligencePage />} />
                        <Route path="/zion-ai-content-generation" element={<ZionAiContentGenerationPage />} />
                        <Route path="/zion-ai-customer-service" element={<ZionAiCustomerServicePage />} />
                        <Route path="/zion-ai-data-analytics" element={<ZionAiDataAnalyticsPage />} />
                        <Route path="/zion-ai-email-automation" element={<ZionAiEmailAutomationPage />} />
                        <Route path="/zion-ai-fraud-detection" element={<ZionAiFraudDetectionPage />} />
                        <Route path="/zion-ai-healthcare" element={<ZionAiHealthcarePage />} />
                        <Route path="/zion-ai-marketing" element={<ZionAiMarketingPage />} />
                        <Route path="/zion-ai-predictive-analytics" element={<ZionAiPredictiveAnalyticsPage />} />
                        <Route path="/zion-ai-project-management" element={<ZionAiProjectManagementPage />} />
                        <Route path="/zion-ai-recommendation-engine" element={<ZionAiRecommendationEnginePage />} />
                        <Route path="/zion-ai-sales-automation" element={<ZionAiSalesAutomationPage />} />
                        <Route path="/zion-ai-workflow-automation" element={<ZionAiWorkflowAutomationPage />} />
                        <Route path="/zion-ai-chatbot" element={<ZionAiChatbotPage />} />
                        <Route path="/zion-ai-code-assistant" element={<ZionAiCodeAssistantPage />} />
                        <Route path="/zion-ai-content-moderation" element={<ZionAiContentModerationPage />} />
                        <Route path="/zion-ai-conversational-ai" element={<ZionAiConversationalAiPage />} />
                        <Route path="/zion-ai-crm" element={<ZionAiCrmPage />} />
                        <Route path="/zion-ai-cybersecurity" element={<ZionAiCybersecurityPage />} />
                        <Route path="/zion-ai-data-visualization" element={<ZionAiDataVisualizationPage />} />
                        <Route path="/zion-ai-design-studio" element={<ZionAiDesignStudioPage />} />
                        <Route path="/zion-ai-devops-automation" element={<ZionAiDevopsAutomationPage />} />
                        <Route path="/zion-ai-document-intelligence" element={<ZionAiDocumentIntelligencePage />} />
                        <Route path="/zion-ai-document-processing" element={<ZionAiDocumentProcessingPage />} />
                        <Route path="/zion-ai-email-marketing" element={<ZionAiEmailMarketingPage />} />
                        <Route path="/zion-ai-financial-analysis" element={<ZionAiFinancialAnalysisPage />} />
                        <Route path="/zion-ai-image-generation" element={<ZionAiImageGenerationPage />} />
                        <Route path="/zion-ai-language-processing" element={<ZionAiLanguageProcessingPage />} />
                        <Route path="/zion-ai-machine-learning" element={<ZionAiMachineLearningPage />} />
                        <Route path="/zion-ai-natural-language-processing" element={<ZionAiNaturalLanguageProcessingPage />} />
                        <Route path="/zion-ai-personal-assistant" element={<ZionAiPersonalAssistantPage />} />
                        <Route path="/zion-ai-predictive-modeling" element={<ZionAiPredictiveModelingPage />} />
                        <Route path="/zion-ai-process-automation" element={<ZionAiProcessAutomationPage />} />
                        <Route path="/zion-ai-quality-assurance" element={<ZionAiQualityAssurancePage />} />
                        <Route path="/zion-ai-recommendation-system" element={<ZionAiRecommendationSystemPage />} />
                        <Route path="/zion-ai-research-assistant" element={<ZionAiResearchAssistantPage />} />
                        <Route path="/zion-ai-sentiment-analysis" element={<ZionAiSentimentAnalysisPage />} />
                        <Route path="/zion-ai-social-media-management" element={<ZionAiSocialMediaManagementPage />} />
                        <Route path="/zion-ai-survey-builder" element={<ZionAiSurveyBuilderPage />} />
                        <Route path="/zion-ai-translator-pro" element={<ZionAiTranslatorProPage />} />
                        <Route path="/zion-ai-video-editor" element={<ZionAiVideoEditorPage />} />
                        <Route path="/zion-chat-ai" element={<ZionChatAiPage />} />
                        <Route path="/zion-crm-intelligence" element={<ZionCrmIntelligencePage />} />
                        <Route path="/zion-customer-insights" element={<ZionCustomerInsightsPage />} />
                      </Routes>
                    </Suspense>
                  </main>
                  <Footer />
                </FuturisticBackground>
                <PerformanceMonitor />
                <EnhancedSEO 
                  title="Zion Tech Group - Advanced AI and IT Solutions"
                  description="Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses."
                  keywords="AI solutions, IT services, micro SAAS, digital transformation, business automation, technology consulting, cybersecurity, cloud solutions, 5G technology"
                />
              </div>
              <AnalyticsProvider>
                <WebVitalsTracker />
                <PerformanceEnhancer />
                <SEOOptimizer />
                <EnhancedSEOOptimizer />
                <EnhancedAccessibility>
                  <div></div>
                </EnhancedAccessibility>
              </AnalyticsProvider>
            </Router>
          </AccessibilityEnhancer>
        </HelmetProvider>
      </EnhancedErrorBoundary>
    </GlobalErrorBoundary>
  );
}

export default App;
