import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
<<<<<<< HEAD
import { HelmetProvider } from 'react-helmet-async'
import Navigation from './app/components/Navigation'
import Footer from './app/components/Footer'
<<<<<<< HEAD
import HomePage from './app/page'
import AboutPage from './app/about/page'
import ContactPage from './app/contact/page'
import AIServicesPage from './app/ai-services/page'
<<<<<<< HEAD
import ITServicesPage from './app/it-services/page'
import MicroSAASServicesPage from './app/micro-saas-services/page'
import FiveGImplementationPage from './app/5g-implementation/page'
import CloudServicesPage from './app/cloud-services/page'
import DigitalTransformationPage from './app/digital-transformation/page'
import CareersPage from './app/careers/page'
import BlogPage from './app/blog/page'
=======
import FiveGImplementationPage from './app/5g-implementation/page'
import ITServicesPage from './app/it-services/page'
import MicroSaasServicesPage from './app/micro-saas-services/page'
import CloudServicesPage from './app/cloud-services/page'
import DigitalTransformationPage from './app/digital-transformation/page'
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
=======
import Layout from './app/layout'
import PerformanceMonitor from './app/components/PerformanceMonitor'
import LoadingSpinner from './app/components/LoadingSpinner'

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
>>>>>>> cursor/analyze-improve-and-deploy-application-04ca

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <div className="min-h-screen bg-gray-900">
        <Navigation />
<<<<<<< HEAD
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/ai-services" element={<AIServicesPage />} />
            <Route path="/it-services" element={<ITServicesPage />} />
            <Route path="/micro-saas-services" element={<MicroSAASServicesPage />} />
            <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
            <Route path="/cloud-services" element={<CloudServicesPage />} />
            <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
          </Routes>
        </main>
=======
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
<<<<<<< HEAD
          <Route path="/services" element={<ServicesPage />} />
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-93a1
          <Route path="/ai-services" element={<AIServicesPage />} />
          <Route path="/it-services" element={<ITServicesPage />} />
          <Route path="/micro-saas-services" element={<MicroSaasServicesPage />} />
          <Route path="/cloud-services" element={<CloudServicesPage />} />
          <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
          <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
>>>>>>> cursor/website-audit-and-update-with-deployment-bee6
        <Footer />
      </div>
=======
      <PerformanceMonitor />
      <Suspense fallback={<LoadingSpinner size="lg" className="min-h-screen" />}>
        <Routes>
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/about" element={<Layout><AboutPage /></Layout>} />
          <Route path="/ai-services" element={<Layout><AIServicesPage /></Layout>} />
          <Route path="/it-services" element={<Layout><ITServicesPage /></Layout>} />
          <Route path="/micro-saas-services" element={<Layout><MicroSAASServicesPage /></Layout>} />
          <Route path="/cloud-services" element={<Layout><CloudServicesPage /></Layout>} />
          <Route path="/digital-transformation" element={<Layout><DigitalTransformationPage /></Layout>} />
          <Route path="/5g-implementation" element={<Layout><FiveGImplementationPage /></Layout>} />
          <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
        </Routes>
      </Suspense>
>>>>>>> cursor/analyze-improve-and-deploy-application-04ca
    </Router>
=======
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
          <div className="min-h-screen bg-gray-50">
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
>>>>>>> cursor/analyze-improve-and-deploy-application-da90
  )
}

export default App