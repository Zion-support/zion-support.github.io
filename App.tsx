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

// New AI Services
import AIChatbotEnterprisePage from './app/ai-chatbot-enterprise/page'
import AICybersecuritySuitePage from './app/ai-cybersecurity-suite/page'
import AICloudInfrastructurePage from './app/ai-cloud-infrastructure/page'
import AIContentGeneratorPage from './app/ai-content-generator/page'
import AIAnalyticsDashboardPage from './app/ai-analytics-dashboard/page'

// New IT Services
import ITInfrastructureManagementPage from './app/it-infrastructure-management/page'

// Import CSS
import './app/globals.css'

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
          
          {/* New AI Services Routes */}
          <Route path="/ai-chatbot-enterprise" element={<AIChatbotEnterprisePage />} />
          <Route path="/ai-cybersecurity-suite" element={<AICybersecuritySuitePage />} />
          <Route path="/ai-cloud-infrastructure" element={<AICloudInfrastructurePage />} />
          <Route path="/ai-content-generator" element={<AIContentGeneratorPage />} />
          <Route path="/ai-analytics-dashboard" element={<AIAnalyticsDashboardPage />} />
          
          {/* New IT Services Routes */}
          <Route path="/it-infrastructure-management" element={<ITInfrastructureManagementPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App