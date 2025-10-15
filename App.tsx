import { Suspense, useEffect } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Import pages
import HomePage from './app/page';
import AboutPage from './app/about/page';
import ServicesPage from './app/services/page';
import ContactPage from './app/contact/page';
import AIServicesPage from './app/ai-services/page';
import ITServicesPage from './app/it-services/page';
import CloudInfrastructurePage from './app/cloud-infrastructure/page';
import FiveGSolutionsPage from './app/5g-solutions/page';
import TeamPage from './app/team/page';
import CareersPage from './app/careers/page';
import HelpPage from './app/help/page';
import PrivacyPage from './app/privacy/page';
import TermsPage from './app/terms/page';
import PricingPage from './app/pricing/page';
import BlogPage from './app/blog/page';
import CaseStudiesPage from './app/case-studies/page';
import PartnershipsPage from './app/partnerships/page';
import APIDocsPage from './app/api-docs/page';
import AccessibilityPage from './app/accessibility/page';
import AISolutionsPage from './app/ai-solutions/page';
import DigitalTransformationPage from './app/digital-transformation/page';
import MicroSAASSolutionsPage from './app/micro-saas-solutions/page';
import AIContentGeneratorPage from './app/ai-content-generator/page';
import DataAnalyticsPage from './app/data-analytics/page';
import WebDevelopmentPage from './app/web-development/page';
import MobileDevelopmentPage from './app/mobile-development/page';
import DatabaseManagementPage from './app/database-management/page';
import NetworkInfrastructurePage from './app/network-infrastructure/page';
import CookiesPage from './app/cookies/page';

// Import Micro SaaS Solutions
import ZionAITaskSchedulerPage from './app/zion-ai-task-scheduler/page';
import ZionAICustomerSupportProPage from './app/zion-ai-customer-support-pro/page';
import ZionAIWorkflowAutomatorProPage from './app/zion-ai-workflow-automator-pro/page';
import ZionAIContentModeratorPage from './app/zion-ai-content-moderator/page';
import ZionAIEmailMarketingProPage from './app/zion-ai-email-marketing-pro/page';
import ZionAIFinancialForecasterPage from './app/zion-ai-financial-forecaster/page';
import ZionAICustomerChurnPredictorPage from './app/zion-ai-customer-churn-predictor/page';
import ZionAICustomerChurnPredictorProPage from './app/zion-ai-customer-churn-predictor-pro/page';
import ZionAICustomerSentimentTrackerPage from './app/zion-ai-customer-sentiment-tracker/page';
import ZionAIDocumentAnalyzerPage from './app/zion-ai-document-analyzer/page';
import ZionAIInventoryOptimizerProPage from './app/zion-ai-inventory-optimizer-pro/page';
import ZionAIMeetingTranscriberPage from './app/zion-ai-meeting-transcriber/page';
import ZionAISalesPredictorPage from './app/zion-ai-sales-predictor/page';
import ZionAISocialSchedulerProPage from './app/zion-ai-social-scheduler-pro/page';
import ZionAIWorkflowAutomatorPage from './app/zion-ai-workflow-automator/page';
import ZionCustomerSatisfactionMonitorPage from './app/zion-customer-satisfaction-monitor/page';
import ZionSmartExpenseTrackerPage from './app/zion-smart-expense-tracker/page';

// Import components
import Navigation from './app/components/Navigation';
import Sidebar from './app/components/Sidebar';
import Footer from './app/components/Footer';
import GlobalErrorBoundary from './app/components/GlobalErrorBoundary';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';

// Loading component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
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
                  
                  {/* Micro SaaS Solutions */}
                  <Route path="/zion-ai-task-scheduler" element={<ZionAITaskSchedulerPage />} />
                  <Route path="/zion-ai-customer-support-pro" element={<ZionAICustomerSupportProPage />} />
                  <Route path="/zion-ai-workflow-automator-pro" element={<ZionAIWorkflowAutomatorProPage />} />
                  <Route path="/zion-ai-content-moderator" element={<ZionAIContentModeratorPage />} />
                  <Route path="/zion-ai-email-marketing-pro" element={<ZionAIEmailMarketingProPage />} />
                  <Route path="/zion-ai-financial-forecaster" element={<ZionAIFinancialForecasterPage />} />
                  <Route path="/zion-ai-customer-churn-predictor" element={<ZionAICustomerChurnPredictorPage />} />
                  <Route path="/zion-ai-customer-churn-predictor-pro" element={<ZionAICustomerChurnPredictorProPage />} />
                  <Route path="/zion-ai-customer-sentiment-tracker" element={<ZionAICustomerSentimentTrackerPage />} />
                  <Route path="/zion-ai-document-analyzer" element={<ZionAIDocumentAnalyzerPage />} />
                  <Route path="/zion-ai-inventory-optimizer-pro" element={<ZionAIInventoryOptimizerProPage />} />
                  <Route path="/zion-ai-meeting-transcriber" element={<ZionAIMeetingTranscriberPage />} />
                  <Route path="/zion-ai-sales-predictor" element={<ZionAISalesPredictorPage />} />
                  <Route path="/zion-ai-social-scheduler-pro" element={<ZionAISocialSchedulerProPage />} />
                  <Route path="/zion-ai-workflow-automator" element={<ZionAIWorkflowAutomatorPage />} />
                  <Route path="/zion-customer-satisfaction-monitor" element={<ZionCustomerSatisfactionMonitorPage />} />
                  <Route path="/zion-smart-expense-tracker" element={<ZionSmartExpenseTrackerPage />} />
                  
                  {/* Catch all route */}
                  <Route path="*" element={<div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
                      <p className="text-gray-600 mb-8">Page not found</p>
                      <a href="/" className="text-blue-600 hover:text-blue-800">Go back home</a>
                    </div>
                  </div>} />
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