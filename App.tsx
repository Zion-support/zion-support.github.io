import { Suspense, useEffect } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Import pages
import HomePage from './app/page';
import AboutPage from './app/about/page';
import ServicesPage from './app/services/page';
import ContactPage from './app/contact/page';
import AIServicesPage from './app/ai-services/page';
import MicroSAASPage from './app/micro-saas-solutions/page';
import ITServicesPage from './app/it-services/page';
import CloudInfrastructurePage from './app/cloud-infrastructure/page';
import DataAnalyticsPage from './app/data-analytics/page';
import MobileDevelopmentPage from './app/mobile-development/page';
import WebDevelopmentPage from './app/web-development/page';

// Import components
import Navigation from './app/components/Navigation';
import Sidebar from './app/components/Sidebar';
import Footer from './app/components/Footer';
import GlobalErrorBoundary from './app/components/GlobalErrorBoundary';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';

// Import futuristic styles
import './app/styles/futuristic.css';

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
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid particles">
            <Navigation />
            <Sidebar />
            
            <main className="flex-1 relative z-10">
              <PerformanceMonitor />
              <AccessibilityEnhancer />
              
              <Suspense fallback={<LoadingFallback />}>
                <Routes>
                  {/* Main Pages */}
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  
                  {/* AI Services */}
                  <Route path="/ai-services" element={<AIServicesPage />} />
                  <Route path="/ai-solutions" element={<AIServicesPage />} />
                  <Route path="/ai-content-generator" element={<AIServicesPage />} />
                  
                  {/* Micro SaaS Solutions */}
                  <Route path="/micro-saas-solutions" element={<MicroSAASPage />} />
                  
                  {/* IT Services */}
                  <Route path="/it-services" element={<ITServicesPage />} />
                  <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                  <Route path="/data-analytics" element={<DataAnalyticsPage />} />
                  <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                  <Route path="/web-development" element={<WebDevelopmentPage />} />
                  
                  {/* Individual AI Services */}
                  <Route path="/zion-ai-sales-predictor" element={<AIServicesPage />} />
                  <Route path="/zion-ai-customer-support-pro" element={<AIServicesPage />} />
                  <Route path="/zion-ai-content-moderator" element={<AIServicesPage />} />
                  <Route path="/zion-ai-document-analyzer" element={<AIServicesPage />} />
                  <Route path="/zion-ai-workflow-automator-pro" element={<AIServicesPage />} />
                  <Route path="/zion-ai-task-scheduler" element={<AIServicesPage />} />
                  <Route path="/zion-ai-email-marketing-pro" element={<AIServicesPage />} />
                  <Route path="/zion-ai-social-scheduler-pro" element={<AIServicesPage />} />
                  <Route path="/zion-smart-expense-tracker" element={<MicroSAASPage />} />
                  <Route path="/zion-customer-satisfaction-monitor" element={<MicroSAASPage />} />
                  
                  {/* Catch all route */}
                  <Route path="*" element={<div className="min-h-screen flex items-center justify-center">
                    <div className="text-center glass-dark rounded-lg p-8">
                      <h1 className="text-4xl font-bold text-white mb-4 holographic">404</h1>
                      <p className="text-gray-300 mb-8">Page not found</p>
                      <a href="/" className="cyber-button">Go back home</a>
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