import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Import pages
import HomePage from './app/page';
import AboutPage from './app/about/page';
import ContactPage from './app/contact/page';
import AIServicesPage from './app/ai-services/page';
import AIMarketingPage from './app/ai-marketing/page';
import AIAutomationPage from './app/ai-automation/page';
import AIHealthcarePage from './app/ai-healthcare/page';
import AIFintechPage from './app/ai-fintech/page';
import QuantumComputingPage from './app/quantum-computing/page';
import AutonomousSystemsPage from './app/autonomous-systems/page';
import BlockchainWeb3Page from './app/blockchain-web3/page';
import IoTEdgeComputingPage from './app/iot-edge-computing/page';
import BusinessIntelligencePage from './app/business-intelligence/page';
import MicroSAASPage from './app/micro-saas/page';
import ITInfrastructurePage from './app/it-infrastructure/page';
import ITServicesPage from './app/it-services/page';
import CybersecurityPage from './app/cybersecurity/page';
import EnterprisePage from './app/enterprise/page';
import TeamPage from './app/team/page';
import CaseStudiesPage from './app/case-studies/page';
import BlogIndexPage from './app/blog-index';
import PrivacyPage from './app/privacy/page';
import TermsPage from './app/terms/page';
import NotFoundPage from './app/not-found';

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
  </div>
);

export default function App() {
  return (
    <HelmetProvider>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/ai-services" element={<AIServicesPage />} />
          <Route path="/ai-marketing" element={<AIMarketingPage />} />
          <Route path="/ai-automation" element={<AIAutomationPage />} />
          <Route path="/ai-healthcare" element={<AIHealthcarePage />} />
          <Route path="/ai-fintech" element={<AIFintechPage />} />
          <Route path="/quantum-computing" element={<QuantumComputingPage />} />
          <Route path="/autonomous-systems" element={<AutonomousSystemsPage />} />
          <Route path="/blockchain-web3" element={<BlockchainWeb3Page />} />
          <Route path="/iot-edge-computing" element={<IoTEdgeComputingPage />} />
          <Route path="/business-intelligence" element={<BusinessIntelligencePage />} />
          <Route path="/micro-saas" element={<MicroSAASPage />} />
          <Route path="/it-infrastructure" element={<ITInfrastructurePage />} />
          <Route path="/it-services" element={<ITServicesPage />} />
          <Route path="/cybersecurity" element={<CybersecurityPage />} />
          <Route path="/enterprise" element={<EnterprisePage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/blog" element={<BlogIndexPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </HelmetProvider>
  );
}
