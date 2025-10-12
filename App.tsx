import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navigation from './app/components/Navigation'
import Footer from './app/components/Footer'
import ErrorBoundary from './app/components/ErrorBoundary'
import LoadingSpinner from './app/components/LoadingSpinner'
import SEOHead from './app/components/SEOHead'

// Lazy load pages for better performance
const HomePage = React.lazy(() => import('./app/page'))
const AboutPage = React.lazy(() => import('./app/about/page'))
const ContactPage = React.lazy(() => import('./app/contact/page'))
const AIServicesPage = React.lazy(() => import('./app/ai-services/page'))
const FiveGImplementationPage = React.lazy(() => import('./app/5g-implementation/page'))
const ITServicesPage = React.lazy(() => import('./app/it-services/page'))
const MicroSAASServicesPage = React.lazy(() => import('./app/micro-saas-services/page'))
const CloudServicesPage = React.lazy(() => import('./app/cloud-services/page'))
const DigitalTransformationPage = React.lazy(() => import('./app/digital-transformation/page'))
const CareersPage = React.lazy(() => import('./app/careers/page'))
const BlogPage = React.lazy(() => import('./app/blog/page'))
const PrivacyPolicyPage = React.lazy(() => import('./app/privacy-policy/page'))
const TermsOfServicePage = React.lazy(() => import('./app/terms-of-service/page'))

// Loading component for Suspense
const PageLoader = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <LoadingSpinner size="lg" text="Loading page..." />
  </div>
)

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <SEOHead />
            <Navigation />
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/ai-services" element={<AIServicesPage />} />
                <Route path="/it-services" element={<ITServicesPage />} />
                <Route path="/micro-saas-services" element={<MicroSAASServicesPage />} />
                <Route path="/cloud-services" element={<CloudServicesPage />} />
                <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
                <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/terms-of-service" element={<TermsOfServicePage />} />
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
            <Footer />
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  )
}

export default App