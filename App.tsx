import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import ErrorBoundary from './app/components/ErrorBoundary'
import PerformanceMonitor from './app/components/PerformanceMonitor'
import LoadingSpinner from './app/components/LoadingSpinner'
import Navigation from './app/components/Navigation'
import Footer from './app/components/Footer'

// Lazy load pages for better performance
const HomePage = React.lazy(() => import('./app/page'))
const AboutPage = React.lazy(() => import('./app/about/page'))
const ContactPage = React.lazy(() => import('./app/contact/page'))
const AIServicesPage = React.lazy(() => import('./app/ai-services/page'))
const ITServicesPage = React.lazy(() => import('./app/it-services/page'))
const MicroSaasServicesPage = React.lazy(() => import('./app/micro-saas-services/page'))
const FiveGImplementationPage = React.lazy(() => import('./app/5g-implementation/page'))
const CloudServicesPage = React.lazy(() => import('./app/cloud-services/page'))
const DigitalTransformationPage = React.lazy(() => import('./app/digital-transformation/page'))

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <Navigation />
            <Suspense fallback={<LoadingSpinner fullScreen text="Loading..." />}>
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
            <PerformanceMonitor enableLogging={process.env.NODE_ENV === 'development'} />
          </div>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  )
}

export default App