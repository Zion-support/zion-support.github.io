import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './app/components/Navigation'
import Footer from './app/components/Footer'
import HomePage from './app/page'
import AboutPage from './app/about/page'
import ContactPage from './app/contact/page'
import AIServicesPage from './app/ai-services/page'
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-fec5
import FiveGImplementationPage from './app/5g-implementation/page'
import MicroSaasServicesPage from './app/micro-saas-services/page'
import ItServicesPage from './app/it-services/page'
import CloudServicesPage from './app/cloud-services/page'
import DigitalTransformationPage from './app/digital-transformation/page'
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-099c
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-fec5

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/ai-services" element={<AIServicesPage />} />
          <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
          <Route path="/micro-saas-services" element={<MicroSaasServicesPage />} />
=======
          <Route path="/ai-services" element={<AIServicesPage />} />
>>>>>>> cursor/fix-errors-and-merge-to-main-fec5
          <Route path="/it-services" element={<ItServicesPage />} />
          <Route path="/micro-saas-services" element={<MicroSaasServicesPage />} />
          <Route path="/cloud-services" element={<CloudServicesPage />} />
          <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-099c
=======
          <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
          <Route path="/contact" element={<ContactPage />} />
>>>>>>> cursor/fix-errors-and-merge-to-main-fec5
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App