import { Suspense, useEffect, lazy } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Lazy load pages for better performance
const HomePage = lazy(() => import('./app/page'));
const AboutPage = lazy(() => import('./app/about/page'));
const ServicesPage = lazy(() => import('./app/services/page'));
const ContactPage = lazy(() => import('./app/contact/page'));
const AIServicesPage = lazy(() => import('./app/ai-services/page'));
const ITServicesPage = lazy(() => import('./app/it-services/page'));
const CloudInfrastructurePage = lazy(() => import('./app/cloud-infrastructure/page'));
const FiveGSolutionsPage = lazy(() => import('./app/5g-solutions/page'));
const TeamPage = lazy(() => import('./app/team/page'));
const CareersPage = lazy(() => import('./app/careers/page'));
const HelpPage = lazy(() => import('./app/help/page'));
const PrivacyPage = lazy(() => import('./app/privacy/page'));
const TermsPage = lazy(() => import('./app/terms/page'));
const PricingPage = lazy(() => import('./app/pricing/page'));
const BlogPage = lazy(() => import('./app/blog/page'));
const CaseStudiesPage = lazy(() => import('./app/case-studies/page'));
const PartnershipsPage = lazy(() => import('./app/partnerships/page'));
const APIDocsPage = lazy(() => import('./app/api-docs/page'));
const AccessibilityPage = lazy(() => import('./app/accessibility/page'));
const AISolutionsPage = lazy(() => import('./app/ai-solutions/page'));
const DigitalTransformationPage = lazy(() => import('./app/digital-transformation/page'));
const MicroSAASSolutionsPage = lazy(() => import('./app/micro-saas-solutions/page'));
const AIContentGeneratorPage = lazy(() => import('./app/ai-content-generator/page'));
const AIVideoGeneratorPage = lazy(() => import('./app/ai-video-generator/page'));
const AICodeReviewerPage = lazy(() => import('./app/ai-code-reviewer/page'));
const AIConsultingServicesPage = lazy(() => import('./app/ai-consulting-services/page'));
const AIMLPlatformPage = lazy(() => import('./app/ai-ml-platform/page'));
const AICybersecurityMonitorPage = lazy(() => import('./app/ai-cybersecurity-monitor/page'));
const AIHRAssistantPage = lazy(() => import('./app/ai-hr-assistant/page'));
const AISupplyChainOptimizerPage = lazy(() => import('./app/ai-supply-chain-optimizer/page'));
const AIEnergyMonitorPage = lazy(() => import('./app/ai-energy-monitor/page'));
const AIQualityAssurancePage = lazy(() => import('./app/ai-quality-assurance/page'));
const AIProjectManagerPage = lazy(() => import('./app/ai-project-manager/page'));
const DataAnalyticsPage = lazy(() => import('./app/data-analytics/page'));
const DataEngineeringPage = lazy(() => import('./app/data-engineering/page'));
const MicroservicesArchitecturePage = lazy(() => import('./app/microservices-architecture/page'));
const EnterpriseIntegrationPage = lazy(() => import('./app/enterprise-integration/page'));
const PerformanceOptimizationPage = lazy(() => import('./app/performance-optimization/page'));
const DisasterRecoveryPage = lazy(() => import('./app/disaster-recovery/page'));
const WebDevelopmentPage = lazy(() => import('./app/web-development/page'));
const MobileDevelopmentPage = lazy(() => import('./app/mobile-development/page'));
const DatabaseManagementPage = lazy(() => import('./app/database-management/page'));
const NetworkInfrastructurePage = lazy(() => import('./app/network-infrastructure/page'));
const CookiesPage = lazy(() => import('./app/cookies/page'));

// Lazy load Zion AI Tools
const ZionAIContentModeratorPage = lazy(() => import('./app/zion-ai-content-moderator/page'));
const ZionAICustomerChurnPredictorPage = lazy(() => import('./app/zion-ai-customer-churn-predictor/page'));
const ZionAICustomerChurnPredictorProPage = lazy(() => import('./app/zion-ai-customer-churn-predictor-pro/page'));
const ZionAICustomerSentimentTrackerPage = lazy(() => import('./app/zion-ai-customer-sentiment-tracker/page'));
const ZionAICustomerSupportProPage = lazy(() => import('./app/zion-ai-customer-support-pro/page'));
const ZionAIDocumentAnalyzerPage = lazy(() => import('./app/zion-ai-document-analyzer/page'));
const ZionAIEmailMarketingProPage = lazy(() => import('./app/zion-ai-email-marketing-pro/page'));
const ZionAIFinancialForecasterPage = lazy(() => import('./app/zion-ai-financial-forecaster/page'));
const ZionAIInventoryOptimizerProPage = lazy(() => import('./app/zion-ai-inventory-optimizer-pro/page'));
const ZionAIMeetingTranscriberPage = lazy(() => import('./app/zion-ai-meeting-transcriber/page'));
const ZionAISalesPredictorPage = lazy(() => import('./app/zion-ai-sales-predictor/page'));
const ZionAISocialSchedulerProPage = lazy(() => import('./app/zion-ai-social-scheduler-pro/page'));
const ZionAITaskSchedulerPage = lazy(() => import('./app/zion-ai-task-scheduler/page'));
const ZionAIWorkflowAutomatorPage = lazy(() => import('./app/zion-ai-workflow-automator/page'));
const ZionAIWorkflowAutomatorProPage = lazy(() => import('./app/zion-ai-workflow-automator-pro/page'));
const ZionCustomerSatisfactionMonitorPage = lazy(() => import('./app/zion-customer-satisfaction-monitor/page'));
const ZionSmartExpenseTrackerPage = lazy(() => import('./app/zion-smart-expense-tracker/page'));

// Import components
import Navigation from './app/components/Navigation';
import Sidebar from './app/components/Sidebar';
import Footer from './app/components/Footer';
import GlobalErrorBoundary from './app/components/GlobalErrorBoundary';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';

// Enhanced loading component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
      <p className="text-gray-600 animate-pulse">Loading...</p>
    </div>
  </div>
)

export default function App() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical fonts
      const fontPreload = document.createElement('link')
      fontPreload.rel = 'preload'
      fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
      fontPreload.as = 'style'
      document.head.appendChild(fontPreload)
    }

    preloadCriticalResources()
  }, [])

  return (
    <GlobalErrorBoundary>
      <HelmetProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Navigation />
            <Sidebar />
            
            <main className="flex-1">
              <PerformanceMonitor />
              <AccessibilityEnhancer />
              
              <Suspense fallback={<LoadingFallback />}>
                <Routes>
                  {/* Main Pages */}
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  
                  {/* Service Pages */}
                  <Route path="/ai-services" element={<AIServicesPage />} />
                  <Route path="/it-services" element={<ITServicesPage />} />
                  <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                  <Route path="/ai-solutions" element={<AISolutionsPage />} />
                  <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
                  <Route path="/data-analytics" element={<DataAnalyticsPage />} />
                  <Route path="/database-management" element={<DatabaseManagementPage />} />
                  <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                  <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} />
                  <Route path="/web-development" element={<WebDevelopmentPage />} />
                  <Route path="/micro-saas-solutions" element={<MicroSAASSolutionsPage />} />
                  <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                  
                  {/* Company Pages */}
                  <Route path="/team" element={<TeamPage />} />
                  <Route path="/careers" element={<CareersPage />} />
                  <Route path="/partnerships" element={<PartnershipsPage />} />
                  
                  {/* Content Pages */}
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/case-studies" element={<CaseStudiesPage />} />
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/api-docs" element={<APIDocsPage />} />
                  
                  {/* Support Pages */}
                  <Route path="/help" element={<HelpPage />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                  <Route path="/cookies" element={<CookiesPage />} />
                  <Route path="/accessibility" element={<AccessibilityPage />} />
                  
                  {/* AI Tools Pages */}
                  <Route path="/ai-content-generator" element={<AIContentGeneratorPage />} />
                  <Route path="/ai-video-generator" element={<AIVideoGeneratorPage />} />
                  <Route path="/ai-code-reviewer" element={<AICodeReviewerPage />} />
                  <Route path="/ai-consulting-services" element={<AIConsultingServicesPage />} />
                  <Route path="/ai-ml-platform" element={<AIMLPlatformPage />} />
                  <Route path="/ai-cybersecurity-monitor" element={<AICybersecurityMonitorPage />} />
                  <Route path="/ai-hr-assistant" element={<AIHRAssistantPage />} />
                  <Route path="/ai-supply-chain-optimizer" element={<AISupplyChainOptimizerPage />} />
                  <Route path="/ai-energy-monitor" element={<AIEnergyMonitorPage />} />
                  <Route path="/ai-quality-assurance" element={<AIQualityAssurancePage />} />
                  <Route path="/ai-project-manager" element={<AIProjectManagerPage />} />
                  
                  {/* IT Solutions Pages */}
                  <Route path="/data-engineering" element={<DataEngineeringPage />} />
                  <Route path="/microservices-architecture" element={<MicroservicesArchitecturePage />} />
                  <Route path="/enterprise-integration" element={<EnterpriseIntegrationPage />} />
                  <Route path="/performance-optimization" element={<PerformanceOptimizationPage />} />
                  <Route path="/disaster-recovery" element={<DisasterRecoveryPage />} />
                  
                  {/* Zion AI Tools */}
                  <Route path="/zion-ai-content-moderator" element={<ZionAIContentModeratorPage />} />
                  <Route path="/zion-ai-customer-churn-predictor" element={<ZionAICustomerChurnPredictorPage />} />
                  <Route path="/zion-ai-customer-churn-predictor-pro" element={<ZionAICustomerChurnPredictorProPage />} />
                  <Route path="/zion-ai-customer-sentiment-tracker" element={<ZionAICustomerSentimentTrackerPage />} />
                  <Route path="/zion-ai-customer-support-pro" element={<ZionAICustomerSupportProPage />} />
                  <Route path="/zion-ai-document-analyzer" element={<ZionAIDocumentAnalyzerPage />} />
                  <Route path="/zion-ai-email-marketing-pro" element={<ZionAIEmailMarketingProPage />} />
                  <Route path="/zion-ai-financial-forecaster" element={<ZionAIFinancialForecasterPage />} />
                  <Route path="/zion-ai-inventory-optimizer-pro" element={<ZionAIInventoryOptimizerProPage />} />
                  <Route path="/zion-ai-meeting-transcriber" element={<ZionAIMeetingTranscriberPage />} />
                  <Route path="/zion-ai-sales-predictor" element={<ZionAISalesPredictorPage />} />
                  <Route path="/zion-ai-social-scheduler-pro" element={<ZionAISocialSchedulerProPage />} />
                  <Route path="/zion-ai-task-scheduler" element={<ZionAITaskSchedulerPage />} />
                  <Route path="/zion-ai-workflow-automator" element={<ZionAIWorkflowAutomatorPage />} />
                  <Route path="/zion-ai-workflow-automator-pro" element={<ZionAIWorkflowAutomatorProPage />} />
                  <Route path="/zion-customer-satisfaction-monitor" element={<ZionCustomerSatisfactionMonitorPage />} />
                  <Route path="/zion-smart-expense-tracker" element={<ZionSmartExpenseTrackerPage />} />
                  
                  {/* Catch all route */}
                  <Route path="*" element={
                    <div className="min-h-screen flex items-center justify-center bg-gray-50">
                      <div className="text-center max-w-md mx-auto px-4">
                        <div className="mb-8">
                          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
                          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
                          <p className="text-gray-600 mb-8">
                            Sorry, we couldn't find the page you're looking for. 
                            It might have been moved, deleted, or doesn't exist.
                          </p>
                        </div>
                        <div className="space-y-4">
                          <a 
                            href="/" 
                            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            Go Back Home
                          </a>
                          <div className="text-sm text-gray-500">
                            <a href="/contact" className="text-blue-600 hover:text-blue-800">
                              Contact Support
                            </a>
                            {' • '}
                            <a href="/services" className="text-blue-600 hover:text-blue-800">
                              Browse Services
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  } />
                </Routes>
              </Suspense>
            </main>
            
            <Footer />
          </div>
        </Router>
      </HelmetProvider>
    </GlobalErrorBoundary>
  )
}