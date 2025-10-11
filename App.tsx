import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import './app/globals.css'
import Navigation from './app/components/Navigation'
import Footer from './app/components/Footer'
import HomePage from './app/page'
import AboutPage from './app/about/page'
import ServicesPage from './app/services/page'
import ContactPage from './app/contact/page'
import AIServicesPage from './app/ai-services/page'
import FiveGImplementationPage from './app/5g-implementation/page'
import MicroSaasServicesPage from './app/micro-saas-services/page'
import ItServicesPage from './app/it-services/page'
import CloudServicesPage from './app/cloud-services/page'
import DigitalTransformationPage from './app/digital-transformation/page'
import ErrorPage from './app/error'
import NotFoundPage from './app/not-found'
import LoadingPage from './app/loading'

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/micro-saas-services" element={<MicroSaasServicesPage />} />
            <Route path="/it-services" element={<ItServicesPage />} />
            <Route path="/cloud-services" element={<CloudServicesPage />} />
            <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
            <Route path="/ai-services" element={<AIServicesPage />} />
            <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  )
}

export default App