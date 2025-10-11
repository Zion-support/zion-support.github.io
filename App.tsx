import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './app/components/Navigation'
import Footer from './app/components/Footer'
import HomePage from './app/page'
import AboutPage from './app/about/page'
import ServicesPage from './app/services/page'
import ContactPage from './app/contact/page'
import AIServicesPage from './app/ai-services/page'
import ITServicesPage from './app/it-services/page'
import MicroSaasServicesPage from './app/micro-saas/page'
import FiveGImplementationPage from './app/5g-implementation/page'
import CloudConsultingPage from './app/it-services/cloud-consulting/page'
import NetworkSecurityPage from './app/it-services/network-security/page'
import DataBackupRecoveryPage from './app/it-services/data-backup-recovery/page'
import AIVoiceAssistantPage from './app/ai-services/ai-voice-assistant/page'
import AIImageGeneratorPage from './app/ai-services/ai-image-generator/page'
import AIProjectManagerPage from './app/micro-saas/ai-project-manager/page'
import AIInvoiceGeneratorPage from './app/micro-saas/ai-invoice-generator/page'
import AISocialSchedulerPage from './app/micro-saas/ai-social-scheduler/page'
import AICustomerInsightsPage from './app/micro-saas/ai-customer-insights/page'
import AIWorkflowAutomationPage from './app/micro-saas/ai-workflow-automation/page'
import AIEmailOptimizerPage from './app/micro-saas/ai-email-optimizer/page'
import AIDataAnalyzerPage from './app/micro-saas/ai-data-analyzer/page'

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
          <Route path="/ai-services" element={<AIServicesPage />} />
          <Route path="/it-services" element={<ITServicesPage />} />
          <Route path="/micro-saas" element={<MicroSaasServicesPage />} />
          <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
          
          {/* IT Services */}
          <Route path="/it-services/cloud-consulting" element={<CloudConsultingPage />} />
          <Route path="/it-services/network-security" element={<NetworkSecurityPage />} />
          <Route path="/it-services/data-backup-recovery" element={<DataBackupRecoveryPage />} />
          
          {/* AI Services */}
          <Route path="/ai-services/ai-voice-assistant" element={<AIVoiceAssistantPage />} />
          <Route path="/ai-services/ai-image-generator" element={<AIImageGeneratorPage />} />
          
          {/* Micro SAAS Services */}
          <Route path="/micro-saas/ai-project-manager" element={<AIProjectManagerPage />} />
          <Route path="/micro-saas/ai-invoice-generator" element={<AIInvoiceGeneratorPage />} />
          <Route path="/micro-saas/ai-social-scheduler" element={<AISocialSchedulerPage />} />
          <Route path="/micro-saas/ai-customer-insights" element={<AICustomerInsightsPage />} />
          <Route path="/micro-saas/ai-workflow-automation" element={<AIWorkflowAutomationPage />} />
          <Route path="/micro-saas/ai-email-optimizer" element={<AIEmailOptimizerPage />} />
          <Route path="/micro-saas/ai-data-analyzer" element={<AIDataAnalyzerPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App