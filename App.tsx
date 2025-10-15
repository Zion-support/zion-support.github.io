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

// Import components
import Navigation from './app/components/Navigation';
import Sidebar from './app/components/Sidebar';
import Footer from './app/components/Footer';
import GlobalErrorBoundary from './app/components/GlobalErrorBoundary';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';

// Loading component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-black">
    <div className="text-center">
      <div className="loading-spinner mx-auto mb-4"></div>
      <div className="neon-text text-xl">Loading...</div>
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
          <div className="min-h-screen bg-black text-white">
            <Navigation />
            
            <main className="pt-20">
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
                  <Route path="/ai-services" element={<ServicesPage />} />
                  <Route path="/ai-content-generator" element={<ServicesPage />} />
                  <Route path="/ai-customer-support-pro" element={<ServicesPage />} />
                  <Route path="/ai-financial-forecaster" element={<ServicesPage />} />
                  
                  {/* Micro SAAS Services */}
                  <Route path="/micro-saas-solutions" element={<ServicesPage />} />
                  <Route path="/zion-task-scheduler" element={<ServicesPage />} />
                  <Route path="/zion-ai-workflow-automator-pro" element={<ServicesPage />} />
                  <Route path="/zion-ai-email-marketing-pro" element={<ServicesPage />} />
                  <Route path="/zion-ai-social-scheduler-pro" element={<ServicesPage />} />
                  <Route path="/zion-ai-inventory-optimizer-pro" element={<ServicesPage />} />
                  <Route path="/zion-ai-customer-sentiment-tracker" element={<ServicesPage />} />
                  <Route path="/zion-ai-document-analyzer" element={<ServicesPage />} />
                  <Route path="/zion-ai-meeting-transcriber" element={<ServicesPage />} />
                  <Route path="/zion-ai-sales-predictor" element={<ServicesPage />} />
                  <Route path="/zion-ai-customer-churn-predictor-pro" element={<ServicesPage />} />
                  <Route path="/zion-smart-expense-tracker" element={<ServicesPage />} />
                  <Route path="/zion-customer-satisfaction-monitor" element={<ServicesPage />} />
                  
                  {/* IT Services */}
                  <Route path="/it-services" element={<ServicesPage />} />
                  <Route path="/cloud-infrastructure" element={<ServicesPage />} />
                  <Route path="/web-development" element={<ServicesPage />} />
                  <Route path="/mobile-development" element={<ServicesPage />} />
                  <Route path="/database-management" element={<ServicesPage />} />
                  <Route path="/network-infrastructure" element={<ServicesPage />} />
                  <Route path="/data-analytics" element={<ServicesPage />} />
                  <Route path="/cybersecurity" element={<ServicesPage />} />
                  <Route path="/digital-transformation" element={<ServicesPage />} />
                  <Route path="/5g-solutions" element={<ServicesPage />} />
                  
                  {/* Additional Pages */}
                  <Route path="/pricing" element={<ServicesPage />} />
                  <Route path="/team" element={<ServicesPage />} />
                  <Route path="/careers" element={<ServicesPage />} />
                  <Route path="/help" element={<ServicesPage />} />
                  <Route path="/privacy" element={<ServicesPage />} />
                  <Route path="/terms" element={<ServicesPage />} />
                  <Route path="/cookies" element={<ServicesPage />} />
                  <Route path="/accessibility" element={<ServicesPage />} />
                  <Route path="/api-docs" element={<ServicesPage />} />
                  <Route path="/blog" element={<ServicesPage />} />
                  <Route path="/case-studies" element={<ServicesPage />} />
                  <Route path="/partnerships" element={<ServicesPage />} />
                  
                  {/* Catch all route */}
                  <Route path="*" element={<div className="min-h-screen flex items-center justify-center bg-black">
                    <div className="text-center">
                      <h1 className="text-6xl font-bold neon-text mb-4">404</h1>
                      <p className="text-gray-300 mb-8 text-xl">Page not found</p>
                      <a href="/" className="neon-button">Go back home</a>
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