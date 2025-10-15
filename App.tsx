import React, { Suspense, lazy, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app/styles/futuristic.css';
// Components
import Navigation from './app/components/Navigation';
import Sidebar from './app/components/Sidebar';
import Footer from './app/components/Footer';
import ErrorBoundary from './app/components/ErrorBoundary';
import GlobalErrorBoundary from './app/components/GlobalErrorBoundary';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import LoadingSpinner from './app/components/LoadingSpinner';
import SEOOptimizer from './app/components/SEOOptimizer';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./app/page'));
const AboutPage = lazy(() => import('./app/about/page'));
const ContactPage = lazy(() => import('./app/contact/page'));
const ServicesPage = lazy(() => import('./app/services/page'));
const PricingPage = lazy(() => import('./app/pricing/page'));
const CaseStudiesPage = lazy(() => import('./app/case-studies/page'));
const BlogPage = lazy(() => import('./app/blog/page'));
const TeamPage = lazy(() => import('./app/team/page'));
const CareersPage = lazy(() => import('./app/careers/page'));
const PrivacyPage = lazy(() => import('./app/privacy/page'));
const TermsPage = lazy(() => import('./app/terms/page'));
const CookiesPage = lazy(() => import('./app/cookies/page'));

// AI Services Pages
const AIServicesPage = lazy(() => import('./app/ai-services/page'));
const AISolutionsPage = lazy(() => import('./app/ai-solutions/page'));

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

  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical CSS
      const criticalCSS = document.createElement('link');
      criticalCSS.rel = 'preload';
      criticalCSS.href = '/app/styles/futuristic.css';
      criticalCSS.as = 'style';
      document.head.appendChild(criticalCSS);

      // Preload critical fonts
      const fontPreload = document.createElement('link');
      fontPreload.rel = 'preload';
      fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
      fontPreload.as = 'style';
      fontPreload.crossOrigin = 'anonymous';
      document.head.appendChild(fontPreload);

      // Preload critical pages
      const criticalPages = ['/about', '/contact', '/services'];
      criticalPages.forEach(page => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = page;
        document.head.appendChild(link);
      });

      // Add performance hints
      const performanceHint = document.createElement('meta');
      performanceHint.name = 'viewport';
      performanceHint.content = 'width=device-width, initial-scale=1.0, viewport-fit=cover';
      document.head.appendChild(performanceHint);
    };

    preloadCriticalResources();

    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          if (process.env.NODE_ENV === 'development') {
            console.log('SW registered: ', registration);
          }
        })
        .catch((registrationError) => {
          if (process.env.NODE_ENV === 'development') {
            console.log('SW registration failed: ', registrationError);
          }
        });
    }

    // Cleanup function
    return () => {
      // Remove any dynamically added elements if needed
    };
  }, []);
  return (
    <GlobalErrorBoundary>
      <HelmetProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Navigation onSidebarToggle={() => setSidebarOpen(!sidebarOpen)} />
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            
            <main className="flex-1">
              <ErrorBoundary>
                <PerformanceMonitor />
                <AccessibilityEnhancer />
                <SEOOptimizer />
                
                <Suspense fallback={<LoadingFallback />}>
                  <ErrorBoundary>
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
                    <Route path="/ai-services" element={<AIServicesPage />} />
                    <Route path="/ai-solutions" element={<AISolutionsPage />} />
                    
                    {/* IT Services */}
                    <Route path="/it-services" element={<ITServicesPage />} />
                    <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                    <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
                    
                    {/* 5G Solutions */}
                    <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                    
                    {/* Additional AI Services */}
                    <Route path="/ai-chatbot-builder" element={<AIChatbotBuilderPage />} />
                    <Route path="/ai-document-processor" element={<AIDocumentProcessorPage />} />
                    <Route path="/ai-form-builder" element={<AIFormBuilderPage />} />
                    <Route path="/ai-voice-assistant" element={<AIVoiceAssistantPage />} />
                    <Route path="/ai-fraud-detection" element={<AIFraudDetectionPage />} />
                    <Route path="/ai-image-recognition" element={<AIImageRecognitionPage />} />
                    <Route path="/ai-lead-scoring" element={<AILeadScoringPage />} />
                    <Route path="/ai-predictive-maintenance" element={<AIPredictiveMaintenancePage />} />
                    <Route path="/ai-price-optimizer" element={<AIPriceOptimizerPage />} />
                    <Route path="/ai-scheduling-assistant" element={<AISchedulingAssistantPage />} />
                    <Route path="/ai-crm-optimizer" element={<AICRMOptimizerPage />} />
                    <Route path="/ai-data-visualizer" element={<AIDataVisualizerPage />} />
                    <Route path="/ai-email-optimizer" element={<AIEmailOptimizerPage />} />
                    <Route path="/social-media-scheduler" element={<SocialMediaSchedulerPage />} />
                    <Route path="/expense-tracker-pro" element={<ExpenseTrackerProPage />} />
                    
                    {/* Advanced Solutions */}
                    <Route path="/blockchain-solutions" element={<BlockchainSolutionsPage />} />
                    <Route path="/iot-solutions" element={<IOTSolutionsPage />} />
                    <Route path="/devops-automation" element={<DevOpsAutomationPage />} />
                    <Route path="/data-engineering" element={<DataEngineeringPage />} />
                    <Route path="/api-development" element={<APIDevelopmentPage />} />
                    <Route path="/security-audit" element={<SecurityAuditPage />} />
                    
                    {/* Additional Services */}
                    <Route path="/micro-saas-solutions" element={<MicroSAASSolutionsPage />} />
                    <Route path="/ai-content-generator" element={<AIContentGeneratorPage />} />
                    <Route path="/data-analytics" element={<DataAnalyticsPage />} />
                    <Route path="/web-development" element={<WebDevelopmentPage />} />
                    <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                    <Route path="/database-management" element={<DatabaseManagementPage />} />
                    <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} />
                    <Route path="/help" element={<HelpPage />} />
                    <Route path="/accessibility" element={<AccessibilityPage />} />
                    <Route path="/api-docs" element={<APIDocsPage />} />
                    <Route path="/partnerships" element={<PartnershipsPage />} />
                    
                    {/* Additional missing pages */}
                    <Route path="/accessibility-page" element={<AccessibilityPagePage />} />
                    <Route path="/ai-fraud-detection-pro" element={<AIFraudDetectionProPage />} />
                    <Route path="/ai-image-recognition-pro" element={<AIImageRecognitionProPage />} />
                    <Route path="/ai-lead-scoring-pro" element={<AILeadScoringProPage />} />
                    <Route path="/ai-predictive-maintenance-pro" element={<AIPredictiveMaintenanceProPage />} />
                    <Route path="/ai-price-optimizer-pro" element={<AIPriceOptimizerProPage />} />
                    <Route path="/ai-social-media-manager" element={<AISocialMediaManagerPage />} />
                    <Route path="/ai-voice-assistant-pro" element={<AIVoiceAssistantProPage />} />
                    <Route path="/ai-website-analyzer" element={<AIWebsiteAnalyzerPage />} />
                    <Route path="/blockchain-solutions-pro" element={<BlockchainSolutionsProPage />} />
                    <Route path="/devops-automation-pro" element={<DevOpsAutomationProPage />} />
                    <Route path="/iot-solutions-pro" element={<IOTSolutionsProPage />} />
                    
                    {/* Zion AI Services */}
                    <Route path="/zion-ai-chatbot-builder" element={<ZionAIChatbotBuilderPage />} />
                    <Route path="/zion-ai-code-assistant" element={<ZionAICodeAssistantPage />} />
                    <Route path="/zion-ai-content-moderator" element={<ZionAIContentModeratorPage />} />
                    <Route path="/zion-ai-crm-optimizer" element={<ZionAICRMOptimizerPage />} />
                    <Route path="/zion-ai-customer-churn-predictor" element={<ZionAICustomerChurnPredictorPage />} />
                    <Route path="/zion-ai-customer-churn-predictor-pro" element={<ZionAICustomerChurnPredictorProPage />} />
                    <Route path="/zion-ai-customer-sentiment-tracker" element={<ZionAICustomerSentimentTrackerPage />} />
                    <Route path="/zion-ai-customer-support-pro" element={<ZionAICustomerSupportProPage />} />
                    <Route path="/zion-ai-data-visualizer" element={<ZionAIDataVisualizerPage />} />
                    <Route path="/zion-ai-document-analyzer" element={<ZionAIDocumentAnalyzerPage />} />
                    <Route path="/zion-ai-document-processor" element={<ZionAIDocumentProcessorPage />} />
                    <Route path="/zion-ai-email-marketing-pro" element={<ZionAIEmailMarketingProPage />} />
                    <Route path="/zion-ai-email-optimizer" element={<ZionAIEmailOptimizerPage />} />
                    <Route path="/zion-ai-financial-forecaster" element={<ZionAIFinancialForecasterPage />} />
                    <Route path="/zion-ai-form-builder" element={<ZionAIFormBuilderPage />} />
                    <Route path="/zion-ai-fraud-detection" element={<ZionAIFraudDetectionPage />} />
                    <Route path="/zion-ai-image-generator" element={<ZionAIImageGeneratorPage />} />
                    <Route path="/zion-ai-image-recognition" element={<ZionAIImageRecognitionPage />} />
                    <Route path="/zion-ai-inventory-optimizer-pro" element={<ZionAIInventoryOptimizerProPage />} />
                    <Route path="/zion-ai-lead-scoring" element={<ZionAILeadScoringPage />} />
                    <Route path="/zion-ai-meeting-transcriber" element={<ZionAIMeetingTranscriberPage />} />
                    <Route path="/zion-ai-predictive-analytics" element={<ZionAIPredictiveAnalyticsPage />} />
                    <Route path="/zion-ai-predictive-maintenance" element={<ZionAIPredictiveMaintenancePage />} />
                    <Route path="/zion-ai-price-optimizer" element={<ZionAIPriceOptimizerPage />} />
                    <Route path="/zion-ai-sales-predictor" element={<ZionAISalesPredictorPage />} />
                    <Route path="/zion-ai-scheduling-assistant" element={<ZionAISchedulingAssistantPage />} />
                    <Route path="/zion-ai-social-media-manager" element={<ZionAISocialMediaManagerPage />} />
                    <Route path="/zion-ai-social-scheduler-pro" element={<ZionAISocialSchedulerProPage />} />
                    <Route path="/zion-ai-task-scheduler" element={<ZionAITaskSchedulerPage />} />
                    <Route path="/zion-ai-translation-service" element={<ZionAITranslationServicePage />} />
                    <Route path="/zion-ai-video-generator" element={<ZionAIVideoGeneratorPage />} />
                    <Route path="/zion-ai-voice-assistant" element={<ZionAIVoiceAssistantPage />} />
                    <Route path="/zion-ai-voice-synthesis" element={<ZionAIVoiceSynthesisPage />} />
                    <Route path="/zion-ai-website-analyzer" element={<ZionAIWebsiteAnalyzerPage />} />
                    <Route path="/zion-ai-workflow-automator" element={<ZionAIWorkflowAutomatorPage />} />
                    <Route path="/zion-ai-workflow-automator-pro" element={<ZionAIWorkflowAutomatorProPage />} />
                    <Route path="/zion-api-development" element={<ZionAPIDevelopmentPage />} />
                    <Route path="/zion-blockchain-solutions" element={<ZionBlockchainSolutionsPage />} />
                    <Route path="/zion-customer-satisfaction-monitor" element={<ZionCustomerSatisfactionMonitorPage />} />
                    <Route path="/zion-cybersecurity-audit" element={<ZionCybersecurityAuditPage />} />
                    <Route path="/zion-devops-automation" element={<ZionDevOpsAutomationPage />} />
                    <Route path="/zion-iot-solutions" element={<ZionIOTSolutionsPage />} />
                    <Route path="/zion-smart-analytics-dashboard" element={<ZionSmartAnalyticsDashboardPage />} />
                    <Route path="/zion-smart-crm-automation" element={<ZionSmartCRMAutomationPage />} />
                    <Route path="/zion-smart-expense-tracker" element={<ZionSmartExpenseTrackerPage />} />
                    <Route path="/zion-smart-inventory-manager" element={<ZionSmartInventoryManagerPage />} />
                    
                    {/* Catch all route */}
                    <Route path="*" element={
                      <div className="min-h-screen flex items-center justify-center bg-slate-900">
                        <div className="text-center">
                          <h1 className="text-4xl font-bold text-white mb-4">404</h1>
                          <p className="text-gray-300 mb-8">Page not found</p>
                          <Link 
                            to="/" 
                            className="text-cyan-400 hover:text-cyan-300 transition-colors"
                            aria-label="Go back to home page"
                          >
                            Go back home
                          </Link>
                        </div>
                      </div>
                    } />
                    </Routes>
                  </ErrorBoundary>
                </Suspense>
              </ErrorBoundary>
            </main>
            
            <Footer />          </div>
        </Router>
      </HelmetProvider>
    </GlobalErrorBoundary>
  );
}

export default App;