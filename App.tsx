import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './app/components/Navigation'
import Footer from './app/components/Footer'
import HomePage from './app/page'
import AboutPage from './app/about/page'
import ContactPage from './app/contact/page'
import ServicesPage from './app/services/page'
import AIServicesPage from './app/ai-services/page'
import FiveGImplementationPage from './app/5g-implementation/page'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/ai-services" element={<AIServicesPage />} />
          <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App