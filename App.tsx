import React, { Suspense, lazy, memo, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import('./app/about/page'));
const ContactPage = React.lazy(() => import('./app/contact/page'));
const ServicesPage = React.lazy(() => import('./app/services/page'));
const PricingPage = React.lazy(() => import('./app/pricing/page'));
const BlogPage = React.lazy(() => import('./app/blog/page'));
const CaseStudiesPage = React.lazy(() => import('./app/case-studies/page'));
const AIServicesPage = React.lazy(() => import('./app/ai-services/page'));
const MicroSaasPage = React.lazy(() => import('./app/micro-saas/page'));
const ITConsultingPage = React.lazy(() => import('./app/it-consulting/page'));
const ITInfrastructurePage = React.lazy(() => import('./app/it-infrastructure/page'));
const ITSupportPage = React.lazy(() => import('./app/it-support/page'));
const CloudInfrastructurePage = React.lazy(() => import('./app/cloud-infrastructure/page'));
const CybersecurityPage = React.lazy(() => import('./app/cybersecurity/page'));
const DatabaseManagementPage = React.lazy(() => import('./app/database-management/page'));
const ManagedITPage = React.lazy(() => import('./app/managed-it/page'));
const QuantumComputingPage = React.lazy(() => import('./app/quantum-computing/page'));
const AutonomousSystemsPage = React.lazy(() => import('./app/autonomous-systems/page'));
const BlockchainPage = React.lazy(() => import('./app/blockchain/page'));
const IotEdgeComputingPage = React.lazy(() => import('./app/iot-edge-computing/page'));
const RoboticsPage = React.lazy(() => import('./app/robotics/page'));
const ConsultationPage = React.lazy(() => import('./app/consultation/page'));
const DocsPage = React.lazy(() => import('./app/docs/page'));
const ApiDocsPage = React.lazy(() => import('./app/api-docs/page'));
const CompliancePage = React.lazy(() => import('./app/compliance/page'));
const GdprPage = React.lazy(() => import('./app/gdpr/page'));
const PrivacyPage = React.lazy(() => import('./app/privacy/page'));
const TermsPage = React.lazy(() => import('./app/terms/page'));
const CookiesPage = React.lazy(() => import('./app/cookies/page'));
const TeamPage = React.lazy(() => import('./app/team/page'));
const CareersPage = React.lazy(() => import('./app/careers/page'));

// Import components
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400"></div>
  </div>
);

// Home page component
const HomePage = React.lazy(() => import('./app/page'));

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <Navigation />
          <main>
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
                <Route path="/ai-services" element={<AIServicesPage />} />

                {/* IT Services Routes */}
                <Route path="/it-consulting" element={<ITConsultingPage />} />
                <Route path="/it-infrastructure" element={<ITInfrastructurePage />} />
                <Route path="/it-support" element={<ITSupportPage />} />
                <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                <Route path="/cybersecurity" element={<CybersecurityPage />} />
                <Route path="/database-management" element={<DatabaseManagementPage />} />
                <Route path="/managed-it" element={<ManagedITPage />} />

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
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
