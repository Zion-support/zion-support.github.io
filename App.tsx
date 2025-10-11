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
import AISocialMediaSchedulerPage from './app/ai-social-media-scheduler/page'
import AIEmailMarketingAutomationPage from './app/ai-email-marketing-automation/page'
import AICustomerSupportChatbotPage from './app/ai-customer-support-chatbot/page'
import AIAnalyticsDashboardProPage from './app/ai-analytics-dashboard-pro/page'

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
            <Route path="/ai-social-media-scheduler" element={<AISocialMediaSchedulerPage />} />
            <Route path="/ai-email-marketing-automation" element={<AIEmailMarketingAutomationPage />} />
            <Route path="/ai-customer-support-chatbot" element={<AICustomerSupportChatbotPage />} />
            <Route path="/ai-analytics-dashboard-pro" element={<AIAnalyticsDashboardProPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App