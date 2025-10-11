import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './app/components/Navigation'
import Footer from './app/components/Footer'
import HomePage from './app/page'
import AboutPage from './app/about/page'
import ServicesPage from './app/services/page'
import ContactPage from './app/contact/page'
import FiveGImplementationPage from './app/5g-implementation/page'
import AIContentGeneratorPage from './app/ai-content-generator/page'
import AIAnalyticsDashboardPage from './app/ai-analytics-dashboard/page'
import AICustomerSupportBotPage from './app/ai-customer-support-bot/page'
import AICodeAssistantPage from './app/ai-code-assistant/page'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
          <Route path="/ai-content-generator" element={<AIContentGeneratorPage />} />
          <Route path="/ai-analytics-dashboard" element={<AIAnalyticsDashboardPage />} />
          <Route path="/ai-customer-support-bot" element={<AICustomerSupportBotPage />} />
          <Route path="/ai-code-assistant" element={<AICodeAssistantPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App