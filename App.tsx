import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navigation from './app/components/Navigation'
import Footer from './app/components/Footer'
import ErrorBoundary from './app/components/ErrorBoundary'
import PerformanceMonitor from './app/components/PerformanceMonitor'
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer'

// Lazy load pages for better performance
const HomePage = React.lazy(() => import('./app/page'))
const AboutPage = React.lazy(() => import('./app/about/page'))
const ContactPage = React.lazy(() => import('./app/contact/page'))
const PricingPage = React.lazy(() => import('./app/pricing/page'))
const ServicesPage = React.lazy(() => import('./app/services/page'))
const AIServicesPage = React.lazy(() => import('./app/ai-services/page'))
const MicroSaasPage = React.lazy(() => import('./app/micro-saas/page'))
const ITServicesPage = React.lazy(() => import('./app/it-services/page'))

// Individual service pages
const AISmartSchedulerPage = React.lazy(() => import('./app/ai-smart-scheduler/page'))
const AIEcommerceOptimizerProPage = React.lazy(() => import('./app/ai-ecommerce-optimizer-pro/page'))
const AIURLShortenerPage = React.lazy(() => import('./app/ai-url-shortener/page'))

// Loading component for Suspense
const PageLoader = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
    <span className="ml-3 text-white text-lg">Loading page...</span>
  </div>
)

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <PerformanceMonitor>
          <AccessibilityEnhancer>
            <Router>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                <a href="#main-content" className="skip-link">Skip to main content</a>
                <Navigation />
                <main id="main-content" className="min-h-screen">
                  <Suspense fallback={<PageLoader />}>
                    <Routes>
                      {/* Main Pages */}
                      <Route path="/" element={<HomePage />} />
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="/contact" element={<ContactPage />} />
                      <Route path="/pricing" element={<PricingPage />} />
                      <Route path="/services" element={<ServicesPage />} />
                      
                      {/* Service Category Pages */}
                      <Route path="/ai-services" element={<AIServicesPage />} />
                      <Route path="/micro-saas" element={<MicroSaasPage />} />
                      <Route path="/it-services" element={<ITServicesPage />} />
                      
                      {/* Individual Service Pages */}
                      <Route path="/ai-smart-scheduler" element={<AISmartSchedulerPage />} />
                      <Route path="/ai-ecommerce-optimizer-pro" element={<AIEcommerceOptimizerProPage />} />
                      <Route path="/ai-url-shortener" element={<AIURLShortenerPage />} />
                      
                      {/* 404 Page */}
                      <Route path="*" element={
                        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
                          <div className="text-center">
                            <h1 className="text-6xl font-bold text-white mb-4">404</h1>
                            <p className="text-xl text-gray-300 mb-8">Page not found</p>
                            <a 
                              href="/" 
                              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                            >
                              Go Home
                            </a>
                          </div>
                        </div>
                      } />
                    </Routes>
                  </Suspense>
                </main>
                <Footer />
              </div>
            </Router>
          </AccessibilityEnhancer>
        </PerformanceMonitor>
      </ErrorBoundary>
    </HelmetProvider>
  )
}

export default App