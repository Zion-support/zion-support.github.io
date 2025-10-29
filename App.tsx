import React, { useEffect, useState, useCallback, Suspense, lazy } from "react";
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
import EnhancedErrorBoundary from "./app/components/EnhancedErrorBoundary";
import Breadcrumb from "./app/components/Breadcrumb";
import PerformanceOptimizer from "./app/components/PerformanceOptimizer";
import EnhancedAnalytics from "./app/components/EnhancedAnalytics";
import LoadingSpinner from "./app/components/LoadingSpinner";

// Pages
import AboutPage from './app/about/page';
import ServicesPage from './app/services/page';
import ContactPage from './app/contact/page';
import PrivacyPage from './app/privacy/page';
import TermsPage from './app/terms/page';
import BlogPage from './app/blog/page';
import CareersPage from './app/careers/page';

// Service Pages - Lazy loaded for better performance
const AiAnalyticsDashboardProPage = lazy(() => import('./app/ai-analytics-dashboard-pro/page'));
const AiContentGenerationProPage = lazy(() => import('./app/ai-content-generation-pro/page'));
const AiAutomationSuitePage = lazy(() => import('./app/ai-automation-suite/page'));
const AiBusinessIntelligenceProPage = lazy(() => import('./app/ai-business-intelligence-pro/page'));
const AiCodeAssistantProPage = lazy(() => import('./app/ai-code-assistant-pro/page'));
const AiChatbotEnterprisePage = lazy(() => import('./app/ai-chatbot-enterprise/page'));
const AiCloudInfrastructurePage = lazy(() => import('./app/ai-cloud-infrastructure/page'));
const AiApiManagementPage = lazy(() => import('./app/ai-api-management/page'));
const DatabaseSolutionsPage = lazy(() => import('./app/database-solutions/page'));
const AdvancedSecuritySuitePage = lazy(() => import('./app/advanced-security-suite/page'));
const PerformanceMonitoringPage = lazy(() => import('./app/performance-monitoring/page'));
const DevOpsSolutionsPage = lazy(() => import('./app/devops-solutions/page'));
const FiveGImplementationPage = lazy(() => import('./app/5g-implementation/page'));
const FiveGNetworkInfrastructurePage = lazy(() => import('./app/5g-network-infrastructure/page'));
const FiveGIotSolutionsPage = lazy(() => import('./app/5g-iot-solutions/page'));
const FiveGSmartCitySolutionsPage = lazy(() => import('./app/5g-smart-city-solutions/page'));
const FiveGEdgeComputingPage = lazy(() => import('./app/5g-edge-computing/page'));
const FiveGPrivateNetworksPage = lazy(() => import('./app/5g-private-networks/page'));
const AiAccountingAssistantPage = lazy(() => import('./app/ai-accounting-assistant/page'));
const AiContentModerationProPage = lazy(() => import('./app/ai-content-moderation-pro/page'));
const AiClimateSolutionsProPage = lazy(() => import('./app/ai-climate-solutions-pro/page'));
const AiAgriculturalIntelligenceProPage = lazy(() => import('./app/ai-agricultural-intelligence-pro/page'));
const Ai3DGenerationPage = lazy(() => import('./app/ai-3d-generation/page'));
const AiBlockchainSolutionsPage = lazy(() => import('./app/ai-blockchain-solutions/page'));
const AiCustomerInsightsProPage = lazy(() => import('./app/ai-customer-insights-pro/page'));
const AiProjectManagementProPage = lazy(() => import('./app/ai-project-management-pro/page'));
const AiSocialMediaManagerProPage = lazy(() => import('./app/ai-social-media-manager-pro/page'));
const AiEmailMarketingProPage = lazy(() => import('./app/ai-email-marketing-pro/page'));
const AiInventoryManagementProPage = lazy(() => import('./app/ai-inventory-management-pro/page'));
const AiHrAssistantProPage = lazy(() => import('./app/ai-hr-assistant-pro/page'));
const AiSalesOptimizerProPage = lazy(() => import('./app/ai-sales-optimizer-pro/page'));
const MicroSaasPage = lazy(() => import('./app/micro-saas/page'));

// IT Services Pages
const ITServicesPage = lazy(() => import('./app/it-services/page'));
const CloudInfrastructurePage = lazy(() => import('./app/cloud-infrastructure/page'));
const DigitalTransformationPage = lazy(() => import('./app/digital-transformation/page'));

// 5G Solutions Pages
const FiveGSolutionsPage = lazy(() => import('./app/5g-solutions/page'));

// Additional AI Services
const AIChatbotBuilderPage = lazy(() => import('./app/ai-chatbot-builder/page'));
const AIDocumentProcessorPage = lazy(() => import('./app/ai-document-processor/page'));
const AIFormBuilderPage = lazy(() => import('./app/ai-form-builder/page'));
const AIVoiceAssistantPage = lazy(() => import('./app/ai-voice-assistant/page'));
const AIFraudDetectionPage = lazy(() => import('./app/ai-fraud-detection/page'));
const AIImageRecognitionPage = lazy(() => import('./app/ai-image-recognition/page'));
const AILeadScoringPage = lazy(() => import('./app/ai-lead-scoring/page'));
const AIPredictiveMaintenancePage = lazy(() => import('./app/ai-predictive-maintenance/page'));
const AIPriceOptimizerPage = lazy(() => import('./app/ai-price-optimizer/page'));
const AISchedulingAssistantPage = lazy(() => import('./app/ai-scheduling-assistant/page'));
const AICRMOptimizerPage = lazy(() => import('./app/ai-crm-optimizer/page'));
const AIDataVisualizerPage = lazy(() => import('./app/ai-data-visualizer/page'));
const AIEmailOptimizerPage = lazy(() => import('./app/ai-email-optimizer/page'));
const SocialMediaSchedulerPage = lazy(() => import('./app/social-media-scheduler/page'));
const ExpenseTrackerProPage = lazy(() => import('./app/expense-tracker-pro/page'));
const BlockchainSolutionsPage = lazy(() => import('./app/blockchain-solutions/page'));
const IOTSolutionsPage = lazy(() => import('./app/iot-solutions/page'));
const DevOpsAutomationPage = lazy(() => import('./app/devops-automation/page'));
const DataEngineeringPage = lazy(() => import('./app/data-engineering/page'));
const APIDevelopmentPage = lazy(() => import('./app/api-development/page'));
const SecurityAuditPage = lazy(() => import('./app/security-audit/page'));
const MicroSAASSolutionsPage = lazy(() => import('./app/micro-saas-solutions/page'));
const AIContentGeneratorPage = lazy(() => import('./app/ai-content-generator/page'));
const DataAnalyticsPage = lazy(() => import('./app/data-analytics/page'));
const WebDevelopmentPage = lazy(() => import('./app/web-development/page'));
const MobileDevelopmentPage = lazy(() => import('./app/mobile-development/page'));
const DatabaseManagementPage = lazy(() => import('./app/database-management/page'));
const NetworkInfrastructurePage = lazy(() => import('./app/network-infrastructure/page'));
const HelpPage = lazy(() => import('./app/help/page'));
const AccessibilityPage = lazy(() => import('./app/accessibility/page'));
const APIDocsPage = lazy(() => import('./app/api-docs/page'));
const PartnershipsPage = lazy(() => import('./app/partnerships/page'));
const TutorialsPage = lazy(() => import('./app/tutorials/page'));
const DocsPage = lazy(() => import('./app/docs/page'));
const SupportPage = lazy(() => import('./app/support/page'));
const DemoPage = lazy(() => import('./app/demo/page'));
const CybersecurityPage = lazy(() => import('./app/cybersecurity/page'));
const CloudSolutionsPage = lazy(() => import('./app/cloud-solutions/page'));

// Micro SaaS pages
const TaskManagerProPage = lazy(() => import('./app/task-manager-pro/page'));
const AnalyticsDashboardPage = lazy(() => import('./app/analytics-dashboard/page'));
const CustomerSupportHubPage = lazy(() => import('./app/customer-support-hub/page'));
const InventoryManagerPage = lazy(() => import('./app/inventory-manager/page'));

// Missing pages
const ITSolutionsPage = lazy(() => import('./app/it-solutions/page'));
const AISolutionsPage = lazy(() => import('./app/ai-solutions/page'));
const MicroSaaSSolutionsPage = lazy(() => import('./app/micro-saas-solutions/page'));
const AIServicesPage = lazy(() => import('./app/ai-services/page'));
const CaseStudiesPage = lazy(() => import('./app/case-studies/page'));
const PricingPage = lazy(() => import('./app/pricing/page'));
const SolutionsPage = lazy(() => import('./app/solutions/page'));

// Additional missing pages
const AccessibilityPagePage = lazy(() => import('./app/accessibility-page/page'));
const AIFraudDetectionProPage = lazy(() => import('./app/ai-fraud-detection-pro/page'));
const AIImageRecognitionProPage = lazy(() => import('./app/ai-image-recognition-pro/page'));
const AILeadScoringProPage = lazy(() => import('./app/ai-lead-scoring-pro/page'));
const AIPredictiveMaintenanceProPage = lazy(() => import('./app/ai-predictive-maintenance-pro/page'));
const AIPriceOptimizerProPage = lazy(() => import('./app/ai-price-optimizer-pro/page'));
const AISocialMediaManagerPage = lazy(() => import('./app/ai-social-media-manager/page'));
const AIVoiceAssistantProPage = lazy(() => import('./app/ai-voice-assistant-pro/page'));
const AIWebsiteAnalyzerPage = lazy(() => import('./app/ai-website-analyzer/page'));
const BlockchainSolutionsProPage = lazy(() => import('./app/blockchain-solutions-pro/page'));
const DevOpsAutomationProPage = lazy(() => import('./app/devops-automation-pro/page'));
const IOTSolutionsProPage = lazy(() => import('./app/iot-solutions-pro/page'));

// Zion AI Services
const ZionAIChatbotBuilderPage = lazy(() => import('./app/zion-ai-chatbot-builder/page'));
const ZionAICodeAssistantPage = lazy(() => import('./app/zion-ai-code-assistant/page'));
const ZionAIContentModeratorPage = lazy(() => import('./app/zion-ai-content-moderator/page'));
const ZionAICRMOptimizerPage = lazy(() => import('./app/zion-ai-crm-optimizer/page'));
const ZionAICustomerChurnPredictorPage = lazy(() => import('./app/zion-ai-customer-churn-predictor/page'));
const ZionAICustomerChurnPredictorProPage = lazy(() => import('./app/zion-ai-customer-churn-predictor-pro/page'));
const ZionAICustomerSentimentTrackerPage = lazy(() => import('./app/zion-ai-customer-sentiment-tracker/page'));
const ZionAICustomerSupportProPage = lazy(() => import('./app/zion-ai-customer-support-pro/page'));
const ZionAIDataVisualizerPage = lazy(() => import('./app/zion-ai-data-visualizer/page'));
const ZionAIDocumentAnalyzerPage = lazy(() => import('./app/zion-ai-document-analyzer/page'));
const ZionAIDocumentProcessorPage = lazy(() => import('./app/zion-ai-document-processor/page'));
const ZionAIEmailMarketingProPage = lazy(() => import('./app/zion-ai-email-marketing-pro/page'));
const ZionAIEmailOptimizerPage = lazy(() => import('./app/zion-ai-email-optimizer/page'));
const ZionAIFinancialForecasterPage = lazy(() => import('./app/zion-ai-financial-forecaster/page'));
const ZionAIFormBuilderPage = lazy(() => import('./app/zion-ai-form-builder/page'));
const ZionAIFraudDetectionPage = lazy(() => import('./app/zion-ai-fraud-detection/page'));
const ZionAIImageGeneratorPage = lazy(() => import('./app/zion-ai-image-generator/page'));
const ZionAIImageRecognitionPage = lazy(() => import('./app/zion-ai-image-recognition/page'));
const ZionAIInventoryOptimizerProPage = lazy(() => import('./app/zion-ai-inventory-optimizer-pro/page'));
const ZionAILeadScoringPage = lazy(() => import('./app/zion-ai-lead-scoring/page'));
const ZionAIMeetingTranscriberPage = lazy(() => import('./app/zion-ai-meeting-transcriber/page'));
const ZionAIPredictiveAnalyticsPage = lazy(() => import('./app/zion-ai-predictive-analytics/page'));
const ZionAIPredictiveMaintenancePage = lazy(() => import('./app/zion-ai-predictive-maintenance/page'));
const ZionAIPriceOptimizerPage = lazy(() => import('./app/zion-ai-price-optimizer/page'));
const ZionAISalesPredictorPage = lazy(() => import('./app/zion-ai-sales-predictor/page'));
const ZionAISchedulingAssistantPage = lazy(() => import('./app/zion-ai-scheduling-assistant/page'));
const ZionAISocialMediaManagerPage = lazy(() => import('./app/zion-ai-social-media-manager/page'));
const ZionAISocialSchedulerProPage = lazy(() => import('./app/zion-ai-social-scheduler-pro/page'));
const ZionAITaskSchedulerPage = lazy(() => import('./app/zion-ai-task-scheduler/page'));
const ZionAITranslationServicePage = lazy(() => import('./app/zion-ai-translation-service/page'));
const ZionAIVideoGeneratorPage = lazy(() => import('./app/zion-ai-video-generator/page'));
const ZionAIVoiceAssistantPage = lazy(() => import('./app/zion-ai-voice-assistant/page'));
const ZionAIVoiceSynthesisPage = lazy(() => import('./app/zion-ai-voice-synthesis/page'));
const ZionAIWebsiteAnalyzerPage = lazy(() => import('./app/zion-ai-website-analyzer/page'));
const ZionAIWorkflowAutomatorPage = lazy(() => import('./app/zion-ai-workflow-automator/page'));
const ZionAIWorkflowAutomatorProPage = lazy(() => import('./app/zion-ai-workflow-automator-pro/page'));
const ZionAPIDevelopmentPage = lazy(() => import('./app/zion-api-development/page'));
const ZionBlockchainSolutionsPage = lazy(() => import('./app/zion-blockchain-solutions/page'));
const ZionCustomerSatisfactionMonitorPage = lazy(() => import('./app/zion-customer-satisfaction-monitor/page'));
const ZionCybersecurityAuditPage = lazy(() => import('./app/zion-cybersecurity-audit/page'));
const ZionDevOpsAutomationPage = lazy(() => import('./app/zion-devops-automation/page'));
const ZionIOTSolutionsPage = lazy(() => import('./app/zion-iot-solutions/page'));
const ZionSmartAnalyticsDashboardPage = lazy(() => import('./app/zion-smart-analytics-dashboard/page'));
const ZionSmartCRMAutomationPage = lazy(() => import('./app/zion-smart-crm-automation/page'));
const ZionSmartExpenseTrackerPage = lazy(() => import('./app/zion-smart-expense-tracker/page'));
const ZionSmartInventoryManagerPage = lazy(() => import('./app/zion-smart-inventory-manager/page'));

// Error fallback component
export const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
      <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full">
        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-lg font-medium text-gray-900">Something went wrong</h3>
        <p className="mt-2 text-sm text-gray-500">{error.message}</p>
        <button
          onClick={resetErrorBoundary}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Try again
        </button>
      </div>
    </div>
  </div>
);
// Loading component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <LoadingSpinner />
  </div>
);

function App() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="text-white text-xl">Loading application...</div>
      </div>
    );
  }
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <div className="min-h-screen bg-slate-900">
            <Navigation />
            <main className="relative z-10" id="main-content" role="main">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                {/* Main Pages */}
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/micro-saas-solutions" element={<MicroSaaSSolutionsPage />} />
                <Route path="/ai-solutions" element={<AISolutionsPage />} />
                <Route path="/it-solutions" element={<ITSolutionsPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/tutorials" element={<TutorialsPage />} />
                <Route path="/demo" element={<DemoPage />} />
                <Route path="/support" element={<SupportPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/solutions" element={<SolutionsPage />} />
                
                {/* Service Pages */}
                <Route path="/ai-services" element={<AIServicesPage />} />
                <Route path="/it-services" element={<ITServicesPage />} />
                <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
                <Route path="/case-studies" element={<CaseStudiesPage />} />
                <Route path="/careers" element={<CareersPage />} />
                
                {/* Catch all route */}
                <Route path="*" element={
                  <div className="min-h-screen flex items-center justify-center bg-slate-900">
                    <div className="text-center">
                      <h1 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h1>
                      <p className="text-gray-300 mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
                      <a href="/" className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-2 px-4 rounded transition-all duration-300">
                        Go Home
                      </a>
                    </div>
                  </div>
                } />
                </Routes>
              </Suspense>
            </main>
            <Footer />
            <PerformanceMonitor />
            <AccessibilityEnhancer />
          </div>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App