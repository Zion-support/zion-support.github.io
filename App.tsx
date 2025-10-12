import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navigation from './app/components/Navigation'
import Footer from './app/components/Footer'
import ErrorBoundary from './app/components/ErrorBoundary'
import PerformanceOptimizer from './app/components/PerformanceOptimizer'
import SEOOptimizer from './app/components/SEOOptimizer'
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer'

// Lazy load pages for better performance
const HomePage = React.lazy(() => import('./app/page'))
const AboutPage = React.lazy(() => import('./app/about/page'))
const ContactPage = React.lazy(() => import('./app/contact/page'))
const AIServicesPage = React.lazy(() => import('./app/ai-services/page'))
const ITServicesPage = React.lazy(() => import('./app/it-services/page'))
const FiveGImplementationPage = React.lazy(() => import('./app/5g-implementation/page'))

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
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <PerformanceOptimizer />
            <SEOOptimizer 
              title="Zion Tech Group - Advanced AI and IT Solutions"
              description="Leading provider of AI-powered solutions, IT services, 5G implementation, and micro SAAS platforms. Transform your business with cutting-edge technology."
              keywords="AI solutions, IT services, 5G implementation, micro SAAS, cloud migration, cybersecurity, mobile development, artificial intelligence, machine learning, Zion Tech Group, enterprise technology"
              canonicalUrl="https://ziontechgroup.com"
              ogImage="https://ziontechgroup.com/og-image.jpg"
            />
            <AccessibilityEnhancer />
            <Navigation />
            <main id="main-content" role="main">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/ai-services" element={<AIServicesPage />} />
                  <Route path="/it-services" element={<ITServicesPage />} />
                  <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                  {/* 404 Route */}
                  <Route path="*" element={
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
                      <div className="text-center">
                        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
                        <p className="text-xl text-gray-300 mb-8">Page not found</p>
                        <a 
                          href="/" 
                          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
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
      </ErrorBoundary>
    </HelmetProvider>
  )
}

export default App