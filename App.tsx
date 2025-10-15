import { Suspense, useEffect } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Import styles
import './app/styles/futuristic.css'

// Import pages
import HomePage from './app/page';
import AboutPage from './app/about/page';
import ServicesPage from './app/services/page';
import ContactPage from './app/contact/page';
import MicroSAASSolutionsPage from './app/micro-saas-solutions/page';
import AIServicesPage from './app/ai-services/page';
import ITServicesPage from './app/it-services/page';
import PricingPage from './app/pricing/page';
import TeamPage from './app/team/page';
import CareersPage from './app/careers/page';
import BlogPage from './app/blog/page';
import CaseStudiesPage from './app/case-studies/page';
import PartnershipsPage from './app/partnerships/page';
import HelpPage from './app/help/page';
import PrivacyPage from './app/privacy/page';
import TermsPage from './app/terms/page';

// Import AI Services
import ZionaicontentmoderatorPage from './app/zion-ai-content-moderator/page';
import ZionaicustomersupportproPage from './app/zion-ai-customer-support-pro/page';
import ZionaidocumentanalyzerPage from './app/zion-ai-document-analyzer/page';
import ZionaifinancialforecasterPage from './app/zion-ai-financial-forecaster/page';
import ZionaissalespredictorPage from './app/zion-ai-sales-predictor/page';
import ZionaicustomersentimenttrackerPage from './app/zion-ai-customer-sentiment-tracker/page';
import ZionaimeetingtranscriberPage from './app/zion-ai-meeting-transcriber/page';
import ZionaissocialschedulerproPage from './app/zion-ai-social-scheduler-pro/page';
import ZionaissworkflowautomatorPage from './app/zion-ai-workflow-automator/page';
import ZionaissworkflowautomatorproPage from './app/zion-ai-workflow-automator-pro/page';
import ZionaissinventoryoptimizerproPage from './app/zion-ai-inventory-optimizer-pro/page';
import ZionaissemailmarketingproPage from './app/zion-ai-email-marketing-pro/page';
import ZionaisscustomersatisfactionmonitorPage from './app/zion-customer-satisfaction-monitor/page';
import ZionaissmartexpensetrackerPage from './app/zion-smart-expense-tracker/page';
import ZionaissaitaskschedulerPage from './app/zion-ai-task-scheduler/page';

// Import IT Services
import CloudInfrastructurePage from './app/cloud-infrastructure/page';
import DataAnalyticsPage from './app/data-analytics/page';
import DatabaseManagementPage from './app/database-management/page';
import DigitalTransformationPage from './app/digital-transformation/page';
import MobileDevelopmentPage from './app/mobile-development/page';
import NetworkInfrastructurePage from './app/network-infrastructure/page';
import WebDevelopmentPage from './app/web-development/page';
import FiveGSolutionsPage from './app/5g-solutions/page';
import AccessibilityPage from './app/accessibility/page';
import APIDocsPage from './app/api-docs/page';

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
          <div className="min-h-screen animated-bg-dark">
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
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/team" element={<TeamPage />} />
                  <Route path="/careers" element={<CareersPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/case-studies" element={<CaseStudiesPage />} />
                  <Route path="/partnerships" element={<PartnershipsPage />} />
                  <Route path="/help" element={<HelpPage />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                  
                  {/* Service Categories */}
                  <Route path="/micro-saas-solutions" element={<MicroSAASSolutionsPage />} />
                  <Route path="/ai-services" element={<AIServicesPage />} />
                  <Route path="/it-services" element={<ITServicesPage />} />
                  
                  {/* AI Services */}
                  <Route path="/zion-ai-content-moderator" element={<ZionaicontentmoderatorPage />} />
                  <Route path="/zion-ai-customer-support-pro" element={<ZionaicustomersupportproPage />} />
                  <Route path="/zion-ai-document-analyzer" element={<ZionaidocumentanalyzerPage />} />
                  <Route path="/zion-ai-financial-forecaster" element={<ZionaifinancialforecasterPage />} />
                  <Route path="/zion-ai-sales-predictor" element={<ZionaissalespredictorPage />} />
                  <Route path="/zion-ai-customer-sentiment-tracker" element={<ZionaicustomersentimenttrackerPage />} />
                  <Route path="/zion-ai-meeting-transcriber" element={<ZionaimeetingtranscriberPage />} />
                  <Route path="/zion-ai-social-scheduler-pro" element={<ZionaissocialschedulerproPage />} />
                  <Route path="/zion-ai-workflow-automator" element={<ZionaissworkflowautomatorPage />} />
                  <Route path="/zion-ai-workflow-automator-pro" element={<ZionaissworkflowautomatorproPage />} />
                  <Route path="/zion-ai-inventory-optimizer-pro" element={<ZionaissinventoryoptimizerproPage />} />
                  <Route path="/zion-ai-email-marketing-pro" element={<ZionaissemailmarketingproPage />} />
                  <Route path="/zion-customer-satisfaction-monitor" element={<ZionaisscustomersatisfactionmonitorPage />} />
                  <Route path="/zion-smart-expense-tracker" element={<ZionaissmartexpensetrackerPage />} />
                  <Route path="/zion-ai-task-scheduler" element={<ZionaissaitaskschedulerPage />} />
                  
                  {/* IT Services */}
                  <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                  <Route path="/data-analytics" element={<DataAnalyticsPage />} />
                  <Route path="/database-management" element={<DatabaseManagementPage />} />
                  <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
                  <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                  <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} />
                  <Route path="/web-development" element={<WebDevelopmentPage />} />
                  <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                  <Route path="/accessibility" element={<AccessibilityPage />} />
                  <Route path="/api-docs" element={<APIDocsPage />} />
                  
                  {/* Catch all route */}
                  <Route path="*" element={<div className="min-h-screen flex items-center justify-center animated-bg-dark">
                    <div className="text-center glass-dark p-8 rounded-2xl">
                      <h1 className="text-6xl font-bold neon-glow-cyan mb-4">404</h1>
                      <p className="text-xl text-gray-300 mb-8">Page not found</p>
                      <a href="/" className="btn-neon">Go back home</a>
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