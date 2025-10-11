import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './app/components/Navigation'
import Footer from './app/components/Footer'
import HomePage from './app/page'
import AboutPage from './app/about/page'
import ContactPage from './app/contact/page'
import AIServicesPage from './app/ai-services/page'
<<<<<<< HEAD
import FiveGImplementationPage from './app/5g-implementation/page'
import ITServicesPage from './app/it-services/page'
import MicroSAASServicesPage from './app/micro-saas-services/page'
import CloudServicesPage from './app/cloud-services/page'
import DigitalTransformationPage from './app/digital-transformation/page'
=======
import ITServicesPage from './app/it-services/page'
import MicroSaasServicesPage from './app/micro-saas-services/page'
import FiveGImplementationPage from './app/5g-implementation/page'
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-59b6

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
<<<<<<< HEAD
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/ai-services" element={<AIServicesPage />} />
          <Route path="/it-services" element={<ITServicesPage />} />
          <Route path="/micro-saas-services" element={<MicroSAASServicesPage />} />
          <Route path="/cloud-services" element={<CloudServicesPage />} />
          <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
          <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
          <Route path="/contact" element={<ContactPage />} />
=======
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/ai-services" element={<AIServicesPage />} />
          <Route path="/it-services" element={<ITServicesPage />} />
          <Route path="/micro-saas-services" element={<MicroSaasServicesPage />} />
          <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-59b6
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App