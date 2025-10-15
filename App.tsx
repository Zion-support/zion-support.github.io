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

// Additional Micro SAAS Services
const AIDocumentAnalyzerPage = lazy(() => import('./app/zion-ai-document-analyzer/page'));
const AIMeetingTranscriberPage = lazy(() => import('./app/zion-ai-meeting-transcriber/page'));
const AIFinancialForecasterPage = lazy(() => import('./app/zion-ai-financial-forecaster/page'));
const AISalesPredictorPage = lazy(() => import('./app/zion-ai-sales-predictor/page'));
const AICustomerSentimentTrackerPage = lazy(() => import('./app/zion-ai-customer-sentiment-tracker/page'));
const AITaskSchedulerPage = lazy(() => import('./app/zion-ai-task-scheduler/page'));
const AICustomerChurnPredictorPage = lazy(() => import('./app/zion-ai-customer-churn-predictor/page'));
const AIContentModeratorPage = lazy(() => import('./app/zion-ai-content-moderator/page'));
const SmartExpenseTrackerPage = lazy(() => import('./app/zion-smart-expense-tracker/page'));
const AISocialSchedulerProPage = lazy(() => import('./app/zion-ai-social-scheduler-pro/page'));
const AIInventoryOptimizerProPage = lazy(() => import('./app/zion-ai-inventory-optimizer-pro/page'));
const AIWorkflowAutomatorProPage = lazy(() => import('./app/zion-ai-workflow-automator-pro/page'));
const AIEmailMarketingProPage = lazy(() => import('./app/zion-ai-email-marketing-pro/page'));
const AICustomerSupportProPage = lazy(() => import('./app/zion-ai-customer-support-pro/page'));
const CustomerSatisfactionMonitorPage = lazy(() => import('./app/zion-customer-satisfaction-monitor/page'));

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
                  
                  {/* Additional Micro SAAS Services */}
                  <Route path="/zion-ai-document-analyzer" element={<AIDocumentAnalyzerPage />} />
                  <Route path="/zion-ai-meeting-transcriber" element={<AIMeetingTranscriberPage />} />
                  <Route path="/zion-ai-financial-forecaster" element={<AIFinancialForecasterPage />} />
                  <Route path="/zion-ai-sales-predictor" element={<AISalesPredictorPage />} />
                  <Route path="/zion-ai-customer-sentiment-tracker" element={<AICustomerSentimentTrackerPage />} />
                  <Route path="/zion-ai-task-scheduler" element={<AITaskSchedulerPage />} />
                  <Route path="/zion-ai-customer-churn-predictor" element={<AICustomerChurnPredictorPage />} />
                  <Route path="/zion-ai-content-moderator" element={<AIContentModeratorPage />} />
                  <Route path="/zion-smart-expense-tracker" element={<SmartExpenseTrackerPage />} />
                  <Route path="/zion-ai-social-scheduler-pro" element={<AISocialSchedulerProPage />} />
                  <Route path="/zion-ai-inventory-optimizer-pro" element={<AIInventoryOptimizerProPage />} />
                  <Route path="/zion-ai-workflow-automator-pro" element={<AIWorkflowAutomatorProPage />} />
                  <Route path="/zion-ai-email-marketing-pro" element={<AIEmailMarketingProPage />} />
                  <Route path="/zion-ai-customer-support-pro" element={<AICustomerSupportProPage />} />
                  <Route path="/zion-ai-content-generator" element={<AIContentGeneratorPage />} />
                  <Route path="/zion-customer-satisfaction-monitor" element={<CustomerSatisfactionMonitorPage />} />
                  
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