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
const AIServicesPage = React.lazy(() => import('./app/ai-services/page'))
const ITServicesPage = React.lazy(() => import('./app/it-services/page'))
const MicroSaasServicesPage = React.lazy(() => import('./app/micro-saas-services/page'))
const FiveGImplementationPage = React.lazy(() => import('./app/5g-implementation/page'))
const CybersecurityPage = React.lazy(() => import('./app/cybersecurity/page'))
const CloudServicesPage = React.lazy(() => import('./app/cloud-services/page'))
const AIContentGenerationPage = React.lazy(() => import('./app/ai-content-generation/page'))
const AIChatbotBuilderPage = React.lazy(() => import('./app/ai-chatbot-builder/page'))

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
                <Navigation />
                <Suspense fallback={<PageLoader />}>
                  <Routes>
                    {/* Main Pages */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/pricing" element={<PricingPage />} />
                    
                    {/* Service Pages */}
                    <Route path="/ai-services" element={<AIServicesPage />} />
                    <Route path="/it-services" element={<ITServicesPage />} />
                    <Route path="/micro-saas-services" element={<MicroSaasServicesPage />} />
                    <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                    <Route path="/cybersecurity" element={<CybersecurityPage />} />
                    <Route path="/cloud-services" element={<CloudServicesPage />} />
                    <Route path="/ai-content-generation" element={<AIContentGenerationPage />} />
                    <Route path="/ai-chatbot-builder" element={<AIChatbotBuilderPage />} />
                    
                    {/* 404 Route */}
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