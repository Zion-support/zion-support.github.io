import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './app/components/Navigation'
import Footer from './app/components/Footer'
import HomePage from './app/page'
import AboutPage from './app/about/page'
import ServicesPage from './app/services/page'
import ContactPage from './app/contact/page'
import AIServicesPage from './app/ai-services/page'
import FiveGImplementationPage from './app/5g-implementation/page'
import ITServicesPage from './app/it-services/page'
import MicroSAASServicesPage from './app/micro-saas-services/page'
import CloudServicesPage from './app/cloud-services/page'
import CybersecurityPage from './app/cybersecurity/page'
import DataAnalyticsPage from './app/data-analytics/page'
import CustomDevelopmentPage from './app/custom-development/page'
import MobileDevelopmentPage from './app/mobile-development/page'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/ai-services" element={<AIServicesPage />} />
          <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
          <Route path="/it-services" element={<ITServicesPage />} />
          <Route path="/micro-saas-services" element={<MicroSAASServicesPage />} />
          <Route path="/cloud-services" element={<CloudServicesPage />} />
          <Route path="/cybersecurity" element={<CybersecurityPage />} />
          <Route path="/data-analytics" element={<DataAnalyticsPage />} />
          <Route path="/custom-development" element={<CustomDevelopmentPage />} />
          <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App