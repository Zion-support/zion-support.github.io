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
import CybersecurityPage from './app/cybersecurity/page'
import DataAnalyticsPage from './app/data-analytics/page'
import CustomDevelopmentPage from './app/custom-development/page'
import MobileDevelopmentPage from './app/mobile-development/page'
import DigitalTransformationPage from './app/digital-transformation/page'
import CareersPage from './app/careers/page'
import CaseStudiesPage from './app/case-studies/page'
import BlogPage from './app/blog/page'
import DocsPage from './app/docs/page'
import ApiPage from './app/api/page'
import SupportPage from './app/support/page'
import HelpPage from './app/help/page'
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
          <Route path="/ai-services" element={<AIServicesPage />} />
          <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
          <Route path="/it-services" element={<ITServicesPage />} />
          <Route path="/micro-saas-services" element={<MicroSAASServicesPage />} />
          <Route path="/cloud-services" element={<CloudServicesPage />} />
          <Route path="/cybersecurity" element={<CybersecurityPage />} />
          <Route path="/data-analytics" element={<DataAnalyticsPage />} />
          <Route path="/custom-development" element={<CustomDevelopmentPage />} />
          <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
          <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/api" element={<ApiPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/help" element={<HelpPage />} />
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