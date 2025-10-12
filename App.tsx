import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navigation from './app/components/Navigation'
import Footer from './app/components/Footer'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import ErrorBoundary from './app/components/ErrorBoundary'
import OptimizedLoading from './app/components/OptimizedLoading'
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-51d9
import HomePage from './app/page'
import AboutPage from './app/about/page'
import ContactPage from './app/contact/page'
import AIServicesPage from './app/ai-services/page'
<<<<<<< HEAD
<<<<<<< HEAD
import ITServicesPage from './app/it-services/page'
import MicroSaasPage from './app/micro-saas/page'
import AIContentWriterProPage from './app/micro-saas/ai-content-writer-pro/page'
import FiveGImplementationPage from './app/5g-implementation/page'
=======
import FiveGImplementationPage from './app/5g-implementation/page'
import ITServicesPage from './app/it-services/page'
import MicroSaasServicesPage from './app/micro-saas-services/page'
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
=======
import ITServicesPage from './app/it-services/page'
import MicroSaasServicesPage from './app/micro-saas-services/page'
import FiveGImplementationPage from './app/5g-implementation/page'
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
import CloudServicesPage from './app/cloud-services/page'
import DigitalTransformationPage from './app/digital-transformation/page'
<<<<<<< HEAD

function App() {
  return (
<<<<<<< HEAD
    <Router>
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
          <Route path="/ai-services" element={<AIServicesPage />} />
          <Route path="/it-services" element={<ITServicesPage />} />
          <Route path="/micro-saas-services" element={<MicroSaasServicesPage />} />
          <Route path="/cloud-services" element={<CloudServicesPage />} />
          <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
          <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
>>>>>>> cursor/website-audit-and-update-with-deployment-e118
        <Footer />
      </div>
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
=======
import CareersPage from './app/careers/page'
import BlogPage from './app/blog/page'
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-51d9

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gray-900">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/ai-services" element={<AIServicesPage />} />
              <Route path="/it-services" element={<ITServicesPage />} />
              <Route path="/micro-saas" element={<MicroSaasPage />} />
              <Route path="/micro-saas/ai-content-writer-pro" element={<AIContentWriterProPage />} />
              <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
              <Route path="/cloud-services" element={<CloudServicesPage />} />
              <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/blog" element={<BlogPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
<<<<<<< HEAD
>>>>>>> cursor/analyze-improve-and-deploy-application-da90
=======
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <Navigation />
          <Suspense fallback={<OptimizedLoading fullScreen text="Loading..." />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/ai-services" element={<AIServicesPage />} />
              <Route path="/it-services" element={<ITServicesPage />} />
              <Route path="/micro-saas-services" element={<MicroSaasServicesPage />} />
              <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
              <Route path="/cloud-services" element={<CloudServicesPage />} />
              <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
>>>>>>> cursor/analyze-improve-and-deploy-application-b46d
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-51d9
  )
}

export default App