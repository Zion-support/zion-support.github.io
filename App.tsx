import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './app/components/Navigation'
import Footer from './app/components/Footer'
import HomePage from './app/page'
import AboutPage from './app/about/page'
import FiveGImplementationPage from './app/5g-implementation/page'
import MicroSAASServicesPage from './app/micro-saas-services/page'
import AIContentGeneratorPage from './app/micro-saas-services/ai-content-generator/page'
import ITServicesPage from './app/it-services/page'
import ContactPage from './app/contact/page'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
          <Route path="/micro-saas-services" element={<MicroSAASServicesPage />} />
          <Route path="/micro-saas-services/ai-content-generator" element={<AIContentGeneratorPage />} />
          <Route path="/it-services" element={<ITServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App