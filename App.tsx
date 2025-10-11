import React, { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './app/components/Navigation'
import Footer from './app/components/Footer'
import Loading from './app/components/Loading'
import PWAInstaller from './app/components/PWAInstaller'

// Lazy load pages for better performance
const HomePage = lazy(() => import('./app/page'))
const AboutPage = lazy(() => import('./app/about/page'))
const ServicesPage = lazy(() => import('./app/services/page'))
const ContactPage = lazy(() => import('./app/contact/page'))
const AIServicesPage = lazy(() => import('./app/ai-services/page'))
const FiveGImplementationPage = lazy(() => import('./app/5g-implementation/page'))
const ITServicesPage = lazy(() => import('./app/it-services/page'))
const MicroSAASServicesPage = lazy(() => import('./app/micro-saas-services/page'))
const CloudServicesPage = lazy(() => import('./app/cloud-services/page'))
const DigitalTransformationPage = lazy(() => import('./app/digital-transformation/page'))

function App() {
  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration)
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError)
        })
    }
  }, [])

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <Navigation />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/ai-services" element={<AIServicesPage />} />
            <Route path="/it-services" element={<ITServicesPage />} />
            <Route path="/micro-saas-services" element={<MicroSAASServicesPage />} />
            <Route path="/cloud-services" element={<CloudServicesPage />} />
            <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
            <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
        <Footer />
        <PWAInstaller />
      </div>
    </Router>
  )
}

export default App