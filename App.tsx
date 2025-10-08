import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { GlobalErrorBoundary } from './app/components/GlobalErrorBoundary';
import { AnalyticsProvider } from './app/components/AnalyticsProvider';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import PerformanceOptimizer from './app/components/PerformanceOptimizer';
import PWAInstaller from './app/components/PWAInstaller';

// Import pages
import HomePage from './app/page';
import AboutPage from './app/about/page';
import ContactPage from './app/contact/page';
import ServicesPage from './app/services/page';
import AIServicesPage from './app/ai-services/page';
import AIMarketingPage from './app/ai-marketing/page';
import AIAutomationPage from './app/ai-automation/page';
import AIHealthcarePage from './app/ai-healthcare/page';
import AIFintechPage from './app/ai-fintech/page';
import QuantumComputingPage from './app/quantum-computing/page';
import AutonomousSystemsPage from './app/autonomous-systems/page';
import BlockchainPage from './app/blockchain-web3/page';
import CybersecurityPage from './app/cybersecurity/page';
import EnterprisePage from './app/enterprise/page';
import TeamPage from './app/team/page';
import CaseStudiesPage from './app/case-studies/page';
import MicroSAASPage from './app/micro-saas/page';
import ITServicesPage from './app/it-services/page';
import BusinessIntelligencePage from './app/business-intelligence/page';
import IoTEdgePage from './app/iot-edge-computing/page';
import ServicesAdvertisingPage from './app/services-advertising/page';
import PrivacyPage from './app/privacy/page';
import TermsPage from './app/terms/page';
import NotFoundPage from './app/not-found';

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <div className="cyber-card text-center">
      <div className="animate-spin w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full mx-auto mb-4"></div>
      <p className="text-white">Loading...</p>
    </div>
  </div>
);

export default function App() {
  return (
    <GlobalErrorBoundary>
      <HelmetProvider>
        <AnalyticsProvider>
          <AccessibilityEnhancer>
            <PerformanceMonitor />
            <PerformanceOptimizer />
            <PWAInstaller />
            <Router>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/ai-services" element={<AIServicesPage />} />
                <Route path="/ai-marketing" element={<AIMarketingPage />} />
                <Route path="/ai-automation" element={<AIAutomationPage />} />
                <Route path="/ai-healthcare" element={<AIHealthcarePage />} />
                <Route path="/ai-fintech" element={<AIFintechPage />} />
                <Route path="/quantum-computing" element={<QuantumComputingPage />} />
                <Route path="/autonomous-systems" element={<AutonomousSystemsPage />} />
                <Route path="/blockchain-web3" element={<BlockchainPage />} />
                <Route path="/cybersecurity" element={<CybersecurityPage />} />
                <Route path="/enterprise" element={<EnterprisePage />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/case-studies" element={<CaseStudiesPage />} />
                <Route path="/micro-saas" element={<MicroSAASPage />} />
                <Route path="/it-services" element={<ITServicesPage />} />
                <Route path="/business-intelligence" element={<BusinessIntelligencePage />} />
                <Route path="/iot-edge-computing" element={<IoTEdgePage />} />
                <Route path="/services-advertising" element={<ServicesAdvertisingPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Router>
          </AccessibilityEnhancer>
        </AnalyticsProvider>
      </HelmetProvider>
    </GlobalErrorBoundary>
  );
}
