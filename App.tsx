import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './app/components/Navigation'
import Footer from './app/components/Footer'
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer'
import HomePage from './app/page'
import AboutPage from './app/about/page'
import ServicesPage from './app/services/page'
import ContactPage from './app/contact/page'
import AIServicesPage from './app/ai-services/page'
import FiveGImplementationPage from './app/5g-implementation/page'
import ITServicesPage from './app/it-services/page'
import MicroSAASServicesPage from './app/micro-saas-services/page'
import CloudServicesPage from './app/cloud-services/page'
import DigitalTransformationPage from './app/digital-transformation/page'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <AccessibilityEnhancer />
        <Navigation />
        <main id="main-content">
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
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App