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
import PrivacyPage from './app/privacy/page'
import TermsPage from './app/terms/page'
import AIContentGeneratorPage from './app/ai-content-generator/page'
import AIChatbotBuilderPage from './app/ai-chatbot-builder/page'
import AIAnalyticsDashboardPage from './app/ai-analytics-dashboard/page'
import AIEmailAssistantPage from './app/ai-email-assistant/page'
import AIVoiceAssistantPage from './app/ai-voice-assistant/page'
import AIAutomationPage from './app/ai-automation/page'
import CloudMigrationPage from './app/cloud-migration/page'
import CybersecuritySolutionsPage from './app/cybersecurity-solutions/page'
import DevOpsCICDPage from './app/devops-cicd/page'
import DataAnalyticsPage from './app/data-analytics/page'
import MobileDevelopmentPage from './app/mobile-development/page'
import WebDevelopmentPage from './app/web-development/page'

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
          
          {/* Legal Pages */}
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          
          {/* AI Service Pages */}
          <Route path="/ai-content-generator" element={<AIContentGeneratorPage />} />
          <Route path="/ai-chatbot-builder" element={<AIChatbotBuilderPage />} />
          <Route path="/ai-analytics-dashboard" element={<AIAnalyticsDashboardPage />} />
          <Route path="/ai-email-assistant" element={<AIEmailAssistantPage />} />
          <Route path="/ai-voice-assistant" element={<AIVoiceAssistantPage />} />
          <Route path="/ai-automation" element={<AIAutomationPage />} />
          
          {/* IT Service Pages */}
          <Route path="/cloud-migration" element={<CloudMigrationPage />} />
          <Route path="/cybersecurity-solutions" element={<CybersecuritySolutionsPage />} />
          <Route path="/devops-cicd" element={<DevOpsCICDPage />} />
          <Route path="/data-analytics" element={<DataAnalyticsPage />} />
          <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
          <Route path="/web-development" element={<WebDevelopmentPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App