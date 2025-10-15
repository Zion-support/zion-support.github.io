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
const DataAnalyticsPage = lazy(() => import('./app/data-analytics/page'));
const WebDevelopmentPage = lazy(() => import('./app/web-development/page'));
const MobileDevelopmentPage = lazy(() => import('./app/mobile-development/page'));
const DatabaseManagementPage = lazy(() => import('./app/database-management/page'));
const NetworkInfrastructurePage = lazy(() => import('./app/network-infrastructure/page'));
const CookiesPage = lazy(() => import('./app/cookies/page'));

// AI Tools Pages
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
  <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
    {/* Futuristic Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20"></div>
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent"></div>
    
    <div className="text-center relative z-10">
      <div className="relative">
        <div className="animate-spin rounded-full h-20 w-20 border-4 border-cyan-500/30 mx-auto mb-6"></div>
        <div className="animate-spin rounded-full h-20 w-20 border-4 border-purple-500/30 mx-auto absolute top-0 left-1/2 transform -translate-x-1/2" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
      </div>
      <p className="text-cyan-400 text-xl font-semibold animate-pulse">Loading...</p>
      <div className="mt-4 flex justify-center space-x-1">
        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
        <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
      </div>
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
          <div className="min-h-screen bg-black relative overflow-hidden">
            {/* Futuristic Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-purple-900/10 to-pink-900/10"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-transparent"></div>
            
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/3 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>
            
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
                  <Route path="/ai-solutions" element={<AISolutionsPage />} />
                  <Route path="/it-services" element={<ITServicesPage />} />
                  <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                  <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                  <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
                  <Route path="/micro-saas-solutions" element={<MicroSAASSolutionsPage />} />
                  <Route path="/ai-content-generator" element={<AIContentGeneratorPage />} />
                  <Route path="/data-analytics" element={<DataAnalyticsPage />} />
                  <Route path="/web-development" element={<WebDevelopmentPage />} />
                  <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                  <Route path="/database-management" element={<DatabaseManagementPage />} />
                  <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} />
                  
                  {/* Company Pages */}
                  <Route path="/team" element={<TeamPage />} />
                  <Route path="/careers" element={<CareersPage />} />
                  
                  {/* Support Pages */}
                  <Route path="/help" element={<HelpPage />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                  <Route path="/cookies" element={<CookiesPage />} />
                  
                  {/* Additional Pages */}
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/case-studies" element={<CaseStudiesPage />} />
                  <Route path="/partnerships" element={<PartnershipsPage />} />
                  <Route path="/api-docs" element={<APIDocsPage />} />
                  <Route path="/accessibility" element={<AccessibilityPage />} />
                  
                  {/* AI Tools Pages */}
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
                    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
                      {/* Futuristic Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20"></div>
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent"></div>
                      
                      <div className="text-center max-w-2xl mx-auto px-4 relative z-10">
                        <div className="mb-12">
                          <h1 className="text-8xl font-bold gradient-text neon-text mb-6">404</h1>
                          <h2 className="text-3xl font-semibold text-cyan-400 mb-6">Page Not Found</h2>
                          <p className="text-gray-300 text-lg mb-12 leading-relaxed">
                            Sorry, we couldn't find the page you're looking for. 
                            It might have been moved, deleted, or doesn't exist.
                          </p>
                        </div>
                        <div className="space-y-6">
                          <a 
                            href="/" 
                            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 font-semibold"
                          >
                            Go Back Home
                          </a>
                          <div className="text-sm text-gray-400 space-x-4">
                            <a href="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                              Contact Support
                            </a>
                            <span className="text-gray-600">•</span>
                            <a href="/services" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
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