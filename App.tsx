import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './app/components/Navigation'
import Footer from './app/components/Footer'
import HomePage from './app/page'
import AboutPage from './app/about/page'
import ContactPage from './app/contact/page'
import AIServicesPage from './app/ai-services/page'
import ITServicesPage from './app/it-services/page'
import MicroSAASServicesPage from './app/micro-saas-services/page'
import CloudServicesPage from './app/cloud-services/page'
import DigitalTransformationPage from './app/digital-transformation/page'
import FiveGImplementationPage from './app/5g-implementation/page'
import AISocialMediaManagerPage from './app/ai-social-media-manager/page'
import AICryptoTradingAssistantPage from './app/ai-crypto-trading-assistant/page'
import AIRealEstateAnalyzerPage from './app/ai-real-estate-analyzer/page'
import AIHealthCoachPage from './app/ai-health-coach/page'
import AILanguageTutorPage from './app/ai-language-tutor/page'

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
          <Route path="/micro-saas-services" element={<MicroSAASServicesPage />} />
          <Route path="/cloud-services" element={<CloudServicesPage />} />
          <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
          <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
          <Route path="/ai-social-media-manager" element={<AISocialMediaManagerPage />} />
          <Route path="/ai-crypto-trading-assistant" element={<AICryptoTradingAssistantPage />} />
          <Route path="/ai-real-estate-analyzer" element={<AIRealEstateAnalyzerPage />} />
          <Route path="/ai-health-coach" element={<AIHealthCoachPage />} />
          <Route path="/ai-language-tutor" element={<AILanguageTutorPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App