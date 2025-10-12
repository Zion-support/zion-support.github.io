import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './app/components/Navigation'
import Footer from './app/components/Footer'
import HomePage from './app/page'
import AboutPage from './app/about/page'
import ContactPage from './app/contact/page'
import AIServicesPage from './app/ai-services/page'
import ServicesPage from './app/services/page'
import FiveGImplementationPage from './app/5g-implementation/page'
import ITServicesPage from './app/it-services/page'
import MicroSaasServicesPage from './app/micro-saas-services/page'
import CloudServicesPage from './app/cloud-services/page'
import DigitalTransformationPage from './app/digital-transformation/page'

// AI Services
import AIContentGeneratorPage from './app/ai-content-generator/page'
import AIChatbotBuilderPage from './app/ai-chatbot-builder/page'
import AIAnalyticsDashboardPage from './app/ai-analytics-dashboard/page'
import AIEmailAssistantPage from './app/ai-email-assistant/page'
import AIVoiceAssistantPage from './app/ai-voice-assistant/page'
import AIAutomationPage from './app/ai-automation/page'

// IT Services
import CloudMigrationPage from './app/cloud-migration/page'
import CybersecuritySolutionsPage from './app/cybersecurity-solutions/page'
import DevOpsCICDPage from './app/devops-cicd/page'
import DataAnalyticsPage from './app/data-analytics/page'
import MobileDevelopmentPage from './app/mobile-development/page'
import BlockchainPage from './app/blockchain/page'

// Micro SAAS Services
import AITaskManagerPage from './app/ai-task-manager/page'
import AIExpenseTrackerPage from './app/ai-expense-tracker/page'
import AIPasswordManagerPage from './app/ai-password-manager/page'
import AIInvoiceGeneratorPage from './app/ai-invoice-generator/page'
import AIHealthTrackerPage from './app/ai-health-tracker/page'
import AISmartCalendarPage from './app/ai-smart-calendar/page'

// Legal Pages
import PrivacyPage from './app/privacy/page'
import TermsPage from './app/terms/page'
import CookiesPage from './app/cookies/page'
import CompliancePage from './app/compliance/page'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Main Service Pages */}
          <Route path="/ai-services" element={<AIServicesPage />} />
          <Route path="/it-services" element={<ITServicesPage />} />
          <Route path="/micro-saas-services" element={<MicroSaasServicesPage />} />
          <Route path="/cloud-services" element={<CloudServicesPage />} />
          <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
          <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
          
          {/* AI Services */}
          <Route path="/ai-content-generator" element={<AIContentGeneratorPage />} />
          <Route path="/ai-chatbot-builder" element={<AIChatbotBuilderPage />} />
          <Route path="/ai-analytics-dashboard" element={<AIAnalyticsDashboardPage />} />
          <Route path="/ai-email-assistant" element={<AIEmailAssistantPage />} />
          <Route path="/ai-voice-assistant" element={<AIVoiceAssistantPage />} />
          <Route path="/ai-automation" element={<AIAutomationPage />} />
          
          {/* IT Services */}
          <Route path="/cloud-migration" element={<CloudMigrationPage />} />
          <Route path="/cybersecurity-solutions" element={<CybersecuritySolutionsPage />} />
          <Route path="/devops-cicd" element={<DevOpsCICDPage />} />
          <Route path="/data-analytics" element={<DataAnalyticsPage />} />
          <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
          <Route path="/blockchain" element={<BlockchainPage />} />
          
          {/* Micro SAAS Services */}
          <Route path="/ai-task-manager" element={<AITaskManagerPage />} />
          <Route path="/ai-expense-tracker" element={<AIExpenseTrackerPage />} />
          <Route path="/ai-password-manager" element={<AIPasswordManagerPage />} />
          <Route path="/ai-invoice-generator" element={<AIInvoiceGeneratorPage />} />
          <Route path="/ai-health-tracker" element={<AIHealthTrackerPage />} />
          <Route path="/ai-smart-calendar" element={<AISmartCalendarPage />} />
          
          {/* Legal Pages */}
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
          <Route path="/compliance" element={<CompliancePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App