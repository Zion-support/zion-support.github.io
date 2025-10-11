import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import HomePage from './page'
import AboutPage from './about/page'
import ContactPage from './contact/page'
import AIServicesPage from './ai-services/page'
import ITServicesPage from './it-services/page'
import MicroSaasServicesPage from './micro-saas-services/page'
import FiveGImplementationPage from './5g-implementation/page'
import CloudServicesPage from './cloud-services/page'
import DigitalTransformationPage from './digital-transformation/page'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
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
        <Footer />
      </div>
    </Router>
  )
}

export default App