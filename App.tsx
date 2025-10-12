import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './app/components/Navigation'
import Footer from './app/components/Footer'
import HomePage from './app/page'
import AboutPage from './app/about/page'
import ContactPage from './app/contact/page'
import AIServicesPage from './app/ai-services/page'
import ITServicesPage from './app/it-services/page'
import MicroSaasServicesPage from './app/micro-saas-services/page'
import FiveGImplementationPage from './app/5g-implementation/page'
import CloudServicesPage from './app/cloud-services/page'
import DigitalTransformationPage from './app/digital-transformation/page'
// New AI Services
import AICRMAssistantPage from './app/ai-crm-assistant/page'
import AICybersecurityMonitorPage from './app/ai-cybersecurity-monitor/page'
import AIBlockchainSolutionsPage from './app/ai-blockchain-solutions/page'
import AIEmailMarketingAutomationPage from './app/ai-email-marketing-automation/page'
// New IT Services
import CloudMigrationPage from './app/cloud-migration/page'

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
          {/* New AI Services */}
          <Route path="/ai-crm-assistant" element={<AICRMAssistantPage />} />
          <Route path="/ai-cybersecurity-monitor" element={<AICybersecurityMonitorPage />} />
          <Route path="/ai-blockchain-solutions" element={<AIBlockchainSolutionsPage />} />
          <Route path="/ai-email-marketing-automation" element={<AIEmailMarketingAutomationPage />} />
          {/* New IT Services */}
          <Route path="/cloud-migration" element={<CloudMigrationPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App