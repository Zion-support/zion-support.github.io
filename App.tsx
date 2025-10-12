import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './app/components/Navigation'
import Footer from './app/components/Footer'

// Main Pages
import HomePage from './app/page'
import AboutPage from './app/about/page'
import ContactPage from './app/contact/page'
import ServicesPage from './app/services/page'
import PricingPage from './app/pricing/page'
import CaseStudiesPage from './app/case-studies/page'
import BlogPage from './app/blog/page'
import TeamPage from './app/team/page'
import CareersPage from './app/careers/page'
import PrivacyPage from './app/privacy/page'
import TermsPage from './app/terms/page'
import CookiesPage from './app/cookies/page'

// AI Services
import AIServicesPage from './app/ai-services/page'
import AIMarketingPage from './app/ai-marketing/page'
import AIAutomationPage from './app/ai-automation/page'
import AIHealthcarePage from './app/ai-healthcare/page'
import AIFintechPage from './app/ai-fintech/page'
import AIContentGenerationPage from './app/ai-content-generation/page'
import AIDataAnalyticsPage from './app/ai-data-analytics/page'
import AICybersecurityPage from './app/ai-cybersecurity/page'
import AIWorkflowAutomationPage from './app/ai-workflow-automation/page'
import AICustomerSupportPage from './app/ai-customer-support/page'
import AISalesAutomationPage from './app/ai-sales-automation/page'
import AIDataVisualizationPage from './app/ai-data-visualization/page'

// IT Services
import ITServicesPage from './app/it-services/page'
import ITInfrastructurePage from './app/it-infrastructure/page'
import ITSupportPage from './app/it-support/page'
import CloudInfrastructurePage from './app/cloud-infrastructure/page'
import CybersecurityPage from './app/cybersecurity/page'
import CloudServicesPage from './app/cloud-services/page'

// Emerging Technologies
import BlockchainPage from './app/blockchain/page'
import QuantumComputingPage from './app/quantum-computing/page'
import IoTEdgeComputingPage from './app/iot-edge-computing/page'
import ARVRSolutionsPage from './app/ar-vr-solutions/page'
import AutonomousSystemsPage from './app/autonomous-systems/page'
import FiveGImplementationPage from './app/5g-implementation/page'

// Micro SaaS
import MicroSAASPage from './app/micro-saas/page'
import MicroSAASServicesPage from './app/micro-saas-services/page'

// Digital Transformation
import DigitalTransformationPage from './app/digital-transformation/page'

// Support Pages
import DocsPage from './app/docs/page'
import APIDocsPage from './app/api-docs/page'
import SupportPage from './app/support/page'
import StatusPage from './app/status/page'
import ConsultationPage from './app/consultation/page'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navigation />
        <main>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/cookies" element={<CookiesPage />} />
            
            {/* AI Services */}
            <Route path="/ai-services" element={<AIServicesPage />} />
            <Route path="/ai-marketing" element={<AIMarketingPage />} />
            <Route path="/ai-automation" element={<AIAutomationPage />} />
            <Route path="/ai-healthcare" element={<AIHealthcarePage />} />
            <Route path="/ai-fintech" element={<AIFintechPage />} />
            <Route path="/ai-content-generation" element={<AIContentGenerationPage />} />
            <Route path="/ai-data-analytics" element={<AIDataAnalyticsPage />} />
            <Route path="/ai-cybersecurity" element={<AICybersecurityPage />} />
            <Route path="/ai-workflow-automation" element={<AIWorkflowAutomationPage />} />
            <Route path="/ai-customer-support" element={<AICustomerSupportPage />} />
            <Route path="/ai-sales-automation" element={<AISalesAutomationPage />} />
            <Route path="/ai-data-visualization" element={<AIDataVisualizationPage />} />
            
            {/* IT Services */}
            <Route path="/it-services" element={<ITServicesPage />} />
            <Route path="/it-infrastructure" element={<ITInfrastructurePage />} />
            <Route path="/it-support" element={<ITSupportPage />} />
            <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
            <Route path="/cybersecurity" element={<CybersecurityPage />} />
            <Route path="/cloud-services" element={<CloudServicesPage />} />
            
            {/* Emerging Technologies */}
            <Route path="/blockchain" element={<BlockchainPage />} />
            <Route path="/quantum-computing" element={<QuantumComputingPage />} />
            <Route path="/iot-edge-computing" element={<IoTEdgeComputingPage />} />
            <Route path="/ar-vr-solutions" element={<ARVRSolutionsPage />} />
            <Route path="/autonomous-systems" element={<AutonomousSystemsPage />} />
            <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
            
            {/* Micro SaaS */}
            <Route path="/micro-saas" element={<MicroSAASPage />} />
            <Route path="/micro-saas-services" element={<MicroSAASServicesPage />} />
            
            {/* Digital Transformation */}
            <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
            
            {/* Support Pages */}
            <Route path="/docs" element={<DocsPage />} />
            <Route path="/api-docs" element={<APIDocsPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/status" element={<StatusPage />} />
            <Route path="/consultation" element={<ConsultationPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App