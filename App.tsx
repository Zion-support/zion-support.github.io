import { Suspense, useEffect } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

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
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <Navigation />
            <Sidebar />
            
            <main className="flex-1 pt-20">
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
                  <Route path="/ai-services" element={<AboutPage />} />
                  <Route path="/ai-content-generator" element={<AboutPage />} />
                  <Route path="/zion-ai-customer-support-pro" element={<AboutPage />} />
                  <Route path="/zion-ai-sales-predictor" element={<AboutPage />} />
                  <Route path="/zion-ai-financial-forecaster" element={<AboutPage />} />
                  <Route path="/zion-ai-document-analyzer" element={<AboutPage />} />
                  
                  {/* Micro SaaS */}
                  <Route path="/micro-saas-solutions" element={<AboutPage />} />
                  <Route path="/zion-ai-task-scheduler" element={<AboutPage />} />
                  <Route path="/zion-smart-expense-tracker" element={<AboutPage />} />
                  <Route path="/zion-ai-workflow-automator-pro" element={<AboutPage />} />
                  <Route path="/zion-ai-email-marketing-pro" element={<AboutPage />} />
                  <Route path="/zion-ai-social-scheduler-pro" element={<AboutPage />} />
                  
                  {/* IT Solutions */}
                  <Route path="/it-services" element={<AboutPage />} />
                  <Route path="/web-development" element={<AboutPage />} />
                  <Route path="/mobile-development" element={<AboutPage />} />
                  <Route path="/cloud-infrastructure" element={<AboutPage />} />
                  <Route path="/data-analytics" element={<AboutPage />} />
                  <Route path="/digital-transformation" element={<AboutPage />} />
                  
                  {/* Other Pages */}
                  <Route path="/team" element={<AboutPage />} />
                  <Route path="/pricing" element={<AboutPage />} />
                  <Route path="/blog" element={<AboutPage />} />
                  <Route path="/case-studies" element={<AboutPage />} />
                  <Route path="/api-docs" element={<AboutPage />} />
                  <Route path="/help" element={<AboutPage />} />
                  <Route path="/privacy" element={<AboutPage />} />
                  <Route path="/terms" element={<AboutPage />} />
                  <Route path="/cookies" element={<AboutPage />} />
                  <Route path="/accessibility" element={<AboutPage />} />
                  <Route path="/partnerships" element={<AboutPage />} />
                  <Route path="/careers" element={<AboutPage />} />
                  
                  {/* Catch all route */}
                  <Route path="*" element={<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                    <div className="text-center">
                      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4">404</h1>
                      <p className="text-gray-300 mb-8">Page not found</p>
                      <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">Go back home</a>
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