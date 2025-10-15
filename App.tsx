import { Suspense, useEffect } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Import pages
import HomePage from './app/page';
import AboutPage from './app/about/page';
import ServicesPage from './app/services/page';
import ContactPage from './app/contact/page';
import PricingPage from './app/pricing/page';

// AI Services
import AIServicesPage from './app/ai-services/page';
import AIContentGeneratorPage from './app/ai-content-generator/page';
import ZionAICustomerSupportProPage from './app/zion-ai-customer-support-pro/page';
import ZionAISalesPredictorPage from './app/zion-ai-sales-predictor/page';
import ZionAIWorkflowAutomatorProPage from './app/zion-ai-workflow-automator-pro/page';
import ZionAIEmailMarketingProPage from './app/zion-ai-email-marketing-pro/page';

// IT Solutions
import ITServicesPage from './app/it-services/page';
import WebDevelopmentPage from './app/web-development/page';
import MobileDevelopmentPage from './app/mobile-development/page';
import CloudInfrastructurePage from './app/cloud-infrastructure/page';
import CybersecurityPage from './app/cybersecurity/page';
import DataAnalyticsPage from './app/data-analytics/page';
import FiveGSolutionsPage from './app/5g-solutions/page';

// Micro SAAS
import MicroSAASSolutionsPage from './app/micro-saas-solutions/page';
import ZionSmartExpenseTrackerPage from './app/zion-smart-expense-tracker/page';
import ZionAIInventoryOptimizerProPage from './app/zion-ai-inventory-optimizer-pro/page';
import ZionAISocialSchedulerProPage from './app/zion-ai-social-scheduler-pro/page';
import ZionCustomerSatisfactionMonitorPage from './app/zion-customer-satisfaction-monitor/page';

// Other Pages
import TeamPage from './app/team/page';
import CareersPage from './app/careers/page';
import BlogPage from './app/blog/page';
import CaseStudiesPage from './app/case-studies/page';
import PartnershipsPage from './app/partnerships/page';
import HelpPage from './app/help/page';
import PrivacyPage from './app/privacy/page';
import TermsPage from './app/terms/page';
import CookiesPage from './app/cookies/page';
import ApiDocsPage from './app/api-docs/page';
import AccessibilityPage from './app/accessibility/page';
import DigitalTransformationPage from './app/digital-transformation/page';
import DatabaseManagementPage from './app/database-management/page';
import NetworkInfrastructurePage from './app/network-infrastructure/page';

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
          <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navigation />
            
            <div className="flex flex-1">
              <Sidebar />
              
              <main className="flex-1 min-w-0">
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
                    
                    {/* AI Services */}
                    <Route path="/ai-services" element={<AIServicesPage />} />
                    <Route path="/ai-content-generator" element={<AIContentGeneratorPage />} />
                    <Route path="/zion-ai-customer-support-pro" element={<ZionAICustomerSupportProPage />} />
                    <Route path="/zion-ai-sales-predictor" element={<ZionAISalesPredictorPage />} />
                    <Route path="/zion-ai-workflow-automator-pro" element={<ZionAIWorkflowAutomatorProPage />} />
                    <Route path="/zion-ai-email-marketing-pro" element={<ZionAIEmailMarketingProPage />} />
                    
                    {/* IT Solutions */}
                    <Route path="/it-services" element={<ITServicesPage />} />
                    <Route path="/web-development" element={<WebDevelopmentPage />} />
                    <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                    <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                    <Route path="/cybersecurity" element={<CybersecurityPage />} />
                    <Route path="/data-analytics" element={<DataAnalyticsPage />} />
                    <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                    
                    {/* Micro SAAS */}
                    <Route path="/micro-saas-solutions" element={<MicroSAASSolutionsPage />} />
                    <Route path="/zion-smart-expense-tracker" element={<ZionSmartExpenseTrackerPage />} />
                    <Route path="/zion-ai-inventory-optimizer-pro" element={<ZionAIInventoryOptimizerProPage />} />
                    <Route path="/zion-ai-social-scheduler-pro" element={<ZionAISocialSchedulerProPage />} />
                    <Route path="/zion-customer-satisfaction-monitor" element={<ZionCustomerSatisfactionMonitorPage />} />
                    
                    {/* Other Pages */}
                    <Route path="/team" element={<TeamPage />} />
                    <Route path="/careers" element={<CareersPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/case-studies" element={<CaseStudiesPage />} />
                    <Route path="/partnerships" element={<PartnershipsPage />} />
                    <Route path="/help" element={<HelpPage />} />
                    <Route path="/privacy" element={<PrivacyPage />} />
                    <Route path="/terms" element={<TermsPage />} />
                    <Route path="/cookies" element={<CookiesPage />} />
                    <Route path="/api-docs" element={<ApiDocsPage />} />
                    <Route path="/accessibility" element={<AccessibilityPage />} />
                    <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
                    <Route path="/database-management" element={<DatabaseManagementPage />} />
                    <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} />
                    
                    {/* Catch all route */}
                    <Route path="*" element={<div className="min-h-screen flex items-center justify-center px-4">
                      <div className="text-center max-w-md">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">404</h1>
                        <p className="text-gray-600 mb-8 text-lg">Page not found</p>
                        <a href="/" className="text-blue-600 hover:text-blue-800 text-lg font-medium">Go back home</a>
                      </div>
                    </div>} />
                  </Routes>
                </Suspense>
              </main>
            </div>
            
            <Footer />
          </div>
        </Router>
      </HelmetProvider>
    </GlobalErrorBoundary>
  )
}