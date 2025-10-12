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
import FiveGImplementationPage from './app/5g-implementation/page'
import CloudServicesPage from './app/cloud-services/page'
import DigitalTransformationPage from './app/digital-transformation/page'
import AICRMAssistantPage from './app/ai-crm-assistant/page'
import AICybersecuritySuitePage from './app/ai-cybersecurity-suite/page'
import AIBlockchainSolutionsPage from './app/ai-blockchain-solutions/page'
import AIExpenseTrackerPage from './app/ai-expense-tracker/page'
import CloudMigrationPage from './app/cloud-migration/page'
import AI3DGenerationPage from './app/ai-3d-generation/page'
import AIAccountingAssistantPage from './app/ai-accounting-assistant/page'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/ai-services" element={<AIServicesPage />} />
            <Route path="/it-services" element={<ITServicesPage />} />
            <Route path="/micro-saas-services" element={<MicroSAASServicesPage />} />
            <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
            <Route path="/cloud-services" element={<CloudServicesPage />} />
            <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
            <Route path="/ai-crm-assistant" element={<AICRMAssistantPage />} />
            <Route path="/ai-cybersecurity-suite" element={<AICybersecuritySuitePage />} />
            <Route path="/ai-blockchain-solutions" element={<AIBlockchainSolutionsPage />} />
            <Route path="/ai-expense-tracker" element={<AIExpenseTrackerPage />} />
            <Route path="/cloud-migration" element={<CloudMigrationPage />} />
            <Route path="/ai-3d-generation" element={<AI3DGenerationPage />} />
            <Route path="/ai-accounting-assistant" element={<AIAccountingAssistantPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App