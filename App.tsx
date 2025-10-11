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
import DigitalTransformationPage from './app/digital-transformation/page'

// Individual AI Service Pages
import AiContentGeneratorPage from './app/ai-content-generator/page'
import AiChatbotBuilderPage from './app/ai-chatbot-builder/page'
import AiAnalyticsDashboardPage from './app/ai-analytics-dashboard/page'
import AiEmailAssistantPage from './app/ai-email-assistant/page'
import AiVoiceAssistantPage from './app/ai-voice-assistant/page'
import AiAutomationPage from './app/ai-automation/page'
import NotFoundPage from './app/404/page'
import PrivacyPage from './app/privacy/page'
import TermsPage from './app/terms/page'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
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
          
          {/* Individual AI Service Routes */}
          <Route path="/ai-content-generator" element={<AiContentGeneratorPage />} />
          <Route path="/ai-chatbot-builder" element={<AiChatbotBuilderPage />} />
          <Route path="/ai-analytics-dashboard" element={<AiAnalyticsDashboardPage />} />
          <Route path="/ai-email-assistant" element={<AiEmailAssistantPage />} />
          <Route path="/ai-voice-assistant" element={<AiVoiceAssistantPage />} />
          <Route path="/ai-automation" element={<AiAutomationPage />} />
          
          {/* Legal Pages */}
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          
          {/* 404 Page */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App