import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navigation from './app/components/Navigation'
import Footer from './app/components/Footer'
import ErrorBoundary from './app/components/ErrorBoundary'
import LoadingSpinner from './app/components/LoadingSpinner'

// Lazy load pages for better performance
const HomePage = lazy(() => import('./app/page'))
const AboutPage = lazy(() => import('./app/about/page'))
const ContactPage = lazy(() => import('./app/contact/page'))
const AIServicesPage = lazy(() => import('./app/ai-services/page'))
const ITServicesPage = lazy(() => import('./app/it-services/page'))
const MicroSaasServicesPage = lazy(() => import('./app/micro-saas-services/page'))
const FiveGImplementationPage = lazy(() => import('./app/5g-implementation/page'))
const CloudServicesPage = lazy(() => import('./app/cloud-services/page'))
const DigitalTransformationPage = lazy(() => import('./app/digital-transformation/page'))

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <Navigation />
            <Suspense fallback={<LoadingSpinner />}>
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
    </HelmetProvider>
  )
}

export default App