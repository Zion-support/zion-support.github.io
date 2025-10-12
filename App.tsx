import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navigation from './app/components/Navigation'
import Footer from './app/components/Footer'
import ErrorBoundary from './app/components/ErrorBoundary'

// Lazy load pages for better performance
const HomePage = React.lazy(() => import('./app/page'))
const AboutPage = React.lazy(() => import('./app/about/page'))
const ContactPage = React.lazy(() => import('./app/contact/page'))
const ITServicesPage = React.lazy(() => import('./app/it-services/page'))
const CloudServicesPage = React.lazy(() => import('./app/cloud-services/page'))
const CybersecurityPage = React.lazy(() => import('./app/cybersecurity/page'))
const DataAnalyticsPage = React.lazy(() => import('./app/data-analytics/page'))
const WebDevelopmentPage = React.lazy(() => import('./app/web-development/page'))
const MobileDevelopmentPage = React.lazy(() => import('./app/mobile-development/page'))
const DevOpsPage = React.lazy(() => import('./app/devops/page'))
const FiveGImplementationPage = React.lazy(() => import('./app/5g-implementation/page'))
const MicroSAASServicesPage = React.lazy(() => import('./app/micro-saas-services/page'))
const DigitalTransformationPage = React.lazy(() => import('./app/digital-transformation/page'))
const CareersPage = React.lazy(() => import('./app/careers/page'))
const BlogPage = React.lazy(() => import('./app/blog/page'))
const PrivacyPolicyPage = React.lazy(() => import('./app/privacy-policy/page'))
const TermsOfServicePage = React.lazy(() => import('./app/terms-of-service/page'))
const HelpPage = React.lazy(() => import('./app/help/page'))
const DocsPage = React.lazy(() => import('./app/docs/page'))
const SupportPage = React.lazy(() => import('./app/support/page'))
const StatusPage = React.lazy(() => import('./app/status/page'))
const SLAPage = React.lazy(() => import('./app/sla/page'))

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
            <a href="#main-content" className="skip-link">Skip to main content</a>
            <Navigation />
            <main id="main-content" className="min-h-screen">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  {/* Main Pages */}
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  
                  {/* IT Services */}
                  <Route path="/it-services" element={<ITServicesPage />} />
                  <Route path="/cloud-services" element={<CloudServicesPage />} />
                  <Route path="/cybersecurity" element={<CybersecurityPage />} />
                  <Route path="/data-analytics" element={<DataAnalyticsPage />} />
                  <Route path="/web-development" element={<WebDevelopmentPage />} />
                  <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                  <Route path="/devops" element={<DevOpsPage />} />
                  
                  {/* 5G Services */}
                  <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                  
                  {/* Micro SAAS Services */}
                  <Route path="/micro-saas-services" element={<MicroSAASServicesPage />} />
                  
                  {/* Additional Services */}
                  <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
                  
                  {/* Company Pages */}
                  <Route path="/careers" element={<CareersPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  
                  {/* Legal Pages */}
                  <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                  <Route path="/terms-of-service" element={<TermsOfServicePage />} />
                  
                  {/* Support Pages */}
                  <Route path="/help" element={<HelpPage />} />
                  <Route path="/docs" element={<DocsPage />} />
                  <Route path="/support" element={<SupportPage />} />
                  <Route path="/status" element={<StatusPage />} />
                  <Route path="/sla" element={<SLAPage />} />
                  
                  {/* 404 Page */}
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