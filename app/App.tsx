import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Suspense, lazy } from 'react';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'));
const AboutPage = lazy(() => import('./about/page'));
const ContactPage = lazy(() => import('./contact/page'));
const ServicesPage = lazy(() => import('./services/page'));
const PricingPage = lazy(() => import('./pricing/page'));
const CaseStudiesPage = lazy(() => import('./case-studies/page'));
const BlogPage = lazy(() => import('./blog/page'));
const TeamPage = lazy(() => import('./team/page'));
const CareersPage = lazy(() => import('./careers/page'));
const PrivacyPage = lazy(() => import('./privacy/page'));
const TermsPage = lazy(() => import('./terms/page'));
const CookiesPage = lazy(() => import('./cookies/page'));

// AI Services
const AiServicesPage = lazy(() => import('./ai-services/page'));
const AiMarketingPage = lazy(() => import('./ai-marketing/page'));
const AiAutomationPage = lazy(() => import('./ai-automation/page'));
const AiHealthcarePage = lazy(() => import('./ai-healthcare/page'));
const AiFintechPage = lazy(() => import('./ai-fintech/page'));

// IT Services
const ItServicesPage = lazy(() => import('./it-services/page'));
const ItInfrastructurePage = lazy(() => import('./it-infrastructure/page'));
const ItSupportPage = lazy(() => import('./it-support/page'));
const CloudInfrastructurePage = lazy(() => import('./cloud-infrastructure/page'));
const CybersecurityPage = lazy(() => import('./cybersecurity/page'));

// Emerging Technologies
const QuantumComputingPage = lazy(() => import('./quantum-computing/page'));
const AutonomousSystemsPage = lazy(() => import('./autonomous-systems/page'));
const BlockchainPage = lazy(() => import('./blockchain/page'));
const IotEdgeComputingPage = lazy(() => import('./iot-edge-computing/page'));
const RoboticsPage = lazy(() => import('./robotics/page'));

// Micro SaaS
const MicroSaasPage = lazy(() => import('./micro-saas/page'));

// Additional pages
const ConsultationPage = lazy(() => import('./consultation/page'));
const DocsPage = lazy(() => import('./docs/page'));
const ApiDocsPage = lazy(() => import('./api-docs/page'));
const CompliancePage = lazy(() => import('./compliance/page'));
const GdprPage = lazy(() => import('./gdpr/page'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400"></div>
  </div>
);

// Import styles
import './globals.css';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {/* Main Routes */}
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

            {/* AI Services Routes */}
            <Route path="/ai-services" element={<AiServicesPage />} />
            <Route path="/ai-marketing" element={<AiMarketingPage />} />
            <Route path="/ai-automation" element={<AiAutomationPage />} />
            <Route path="/ai-healthcare" element={<AiHealthcarePage />} />
            <Route path="/ai-fintech" element={<AiFintechPage />} />

            {/* IT Services Routes */}
            <Route path="/it-services" element={<ItServicesPage />} />
            <Route path="/it-infrastructure" element={<ItInfrastructurePage />} />
            <Route path="/it-support" element={<ItSupportPage />} />
            <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
            <Route path="/cybersecurity" element={<CybersecurityPage />} />

            {/* Emerging Technologies Routes */}
            <Route path="/quantum-computing" element={<QuantumComputingPage />} />
            <Route path="/autonomous-systems" element={<AutonomousSystemsPage />} />
            <Route path="/blockchain" element={<BlockchainPage />} />
            <Route path="/iot-edge-computing" element={<IotEdgeComputingPage />} />
            <Route path="/robotics" element={<RoboticsPage />} />

            {/* Micro SaaS Routes */}
            <Route path="/micro-saas" element={<MicroSaasPage />} />

            {/* Additional Routes */}
            <Route path="/consultation" element={<ConsultationPage />} />
            <Route path="/docs" element={<DocsPage />} />
            <Route path="/api-docs" element={<ApiDocsPage />} />
            <Route path="/compliance" element={<CompliancePage />} />
            <Route path="/gdpr" element={<GdprPage />} />

            {/* Catch all route */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
