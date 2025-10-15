import { Suspense, useEffect } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Import pages
import HomePage from './app/page';
import AboutPage from './app/about/page';
import ServicesPage from './app/services/page';
import ContactPage from './app/contact/page';
import PricingPage from './app/pricing/page';
import CaseStudiesPage from './app/case-studies/page';
import TeamPage from './app/team/page';
import BlogPage from './app/blog/page';

// AI Services Pages
import AIServicesPage from './app/ai-services/page';
import AIContentGeneratorPage from './app/ai-content-generator/page';
import AICustomerSupportProPage from './app/zion-ai-customer-support-pro/page';
import AISalesPredictorPage from './app/zion-ai-sales-predictor/page';
import AIWorkflowAutomatorProPage from './app/zion-ai-workflow-automator-pro/page';
import AIEmailMarketingProPage from './app/zion-ai-email-marketing-pro/page';
import AISocialSchedulerProPage from './app/zion-ai-social-scheduler-pro/page';

// Micro SaaS Pages
import MicroSaasSolutionsPage from './app/micro-saas-solutions/page';
import SmartExpenseTrackerPage from './app/zion-smart-expense-tracker/page';
import InventoryOptimizerProPage from './app/zion-ai-inventory-optimizer-pro/page';

// IT Solutions Pages
import ITServicesPage from './app/it-services/page';
import WebDevelopmentPage from './app/web-development/page';
import MobileDevelopmentPage from './app/mobile-development/page';
import CloudInfrastructurePage from './app/cloud-infrastructure/page';
import DataAnalyticsPage from './app/data-analytics/page';
import FiveGSolutionsPage from './app/5g-solutions/page';

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
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/case-studies" element={<CaseStudiesPage />} />
                  <Route path="/team" element={<TeamPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  
                  {/* AI Services Pages */}
                  <Route path="/ai-services" element={<AIServicesPage />} />
                  <Route path="/ai-content-generator" element={<AIContentGeneratorPage />} />
                  <Route path="/zion-ai-customer-support-pro" element={<AICustomerSupportProPage />} />
                  <Route path="/zion-ai-sales-predictor" element={<AISalesPredictorPage />} />
                  <Route path="/zion-ai-workflow-automator-pro" element={<AIWorkflowAutomatorProPage />} />
                  <Route path="/zion-ai-email-marketing-pro" element={<AIEmailMarketingProPage />} />
                  <Route path="/zion-ai-social-scheduler-pro" element={<AISocialSchedulerProPage />} />
                  
                  {/* Micro SaaS Pages */}
                  <Route path="/micro-saas-solutions" element={<MicroSaasSolutionsPage />} />
                  <Route path="/zion-smart-expense-tracker" element={<SmartExpenseTrackerPage />} />
                  <Route path="/zion-ai-inventory-optimizer-pro" element={<InventoryOptimizerProPage />} />
                  
                  {/* IT Solutions Pages */}
                  <Route path="/it-services" element={<ITServicesPage />} />
                  <Route path="/web-development" element={<WebDevelopmentPage />} />
                  <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                  <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                  <Route path="/data-analytics" element={<DataAnalyticsPage />} />
                  <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                  
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