import React, { Suspense, lazy, memo, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import ErrorBoundary from './app/components/ErrorBoundary';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import LoadingSpinner from './app/components/LoadingSpinner';
import { usePerformanceMonitoring } from './hooks/usePerformanceMonitoring';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./app/page'));
const AboutPage = lazy(() => import('./app/about/page'));
const ContactPage = lazy(() => import('./app/contact/page'));
const ServicesPage = lazy(() => import('./app/services/page'));
const PricingPage = lazy(() => import('./app/pricing/page'));
const BlogPage = lazy(() => import('./app/blog/page'));
const CaseStudiesPage = lazy(() => import('./app/case-studies/page'));
const TeamPage = lazy(() => import('./app/team/page'));
const CareersPage = lazy(() => import('./app/careers/page'));
const PrivacyPage = lazy(() => import('./app/privacy/page'));
const TermsPage = lazy(() => import('./app/terms/page'));
const CookiesPage = lazy(() => import('./app/cookies/page'));
const DocsPage = lazy(() => import('./app/docs/page'));
const ApiDocsPage = lazy(() => import('./app/api-docs/page'));
const ConsultationPage = lazy(() => import('./app/consultation/page'));
const CompliancePage = lazy(() => import('./app/compliance/page'));
const GdprPage = lazy(() => import('./app/gdpr/page'));

// AI Services
const AiServicesPage = lazy(() => import('./app/ai-services/page'));
const AiMarketingPage = lazy(() => import('./app/ai-marketing/page'));
const AiAutomationPage = lazy(() => import('./app/ai-automation/page'));
const AiHealthcarePage = lazy(() => import('./app/ai-healthcare/page'));
const AiFintechPage = lazy(() => import('./app/ai-fintech/page'));

// IT Services
const ItServicesPage = lazy(() => import('./app/it-services/page'));
const ItInfrastructurePage = lazy(() => import('./app/it-infrastructure/page'));
const ItSupportPage = lazy(() => import('./app/it-support/page'));
const CloudInfrastructurePage = lazy(() => import('./app/cloud-infrastructure/page'));
const CybersecurityPage = lazy(() => import('./app/cybersecurity/page'));

// Emerging Technologies
const QuantumComputingPage = lazy(() => import('./app/quantum-computing/page'));
const AutonomousSystemsPage = lazy(() => import('./app/autonomous-systems/page'));
const BlockchainPage = lazy(() => import('./app/blockchain/page'));
const IotEdgeComputingPage = lazy(() => import('./app/iot-edge-computing/page'));
const RoboticsPage = lazy(() => import('./app/robotics/page'));

// Micro SaaS
const MicroSaasPage = lazy(() => import('./app/micro-saas/page'));

// Performance monitoring hook
const PerformanceMonitor: React.FC = () => {
  usePerformanceMonitoring();
  return null;
};

// Main App component with performance monitoring

// Main App component
const App: React.FC = () => {
  const helmetContext = useMemo(() => ({}), []);

  return (
    <ErrorBoundary>
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>Zion Tech Group - Advanced AI and IT Solutions</title>
          <meta name="description" content="Leading provider of AI-powered solutions, IT consulting, and innovative technology services for businesses worldwide." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="canonical" href="https://ziontechgroup.com" />
        </Helmet>
        
        <AccessibilityEnhancer>
          <PerformanceMonitor />
          <Router>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
              <main className="min-h-screen">
                <Suspense fallback={<LoadingSpinner size="large" text="Loading Zion Tech Group..." />}>
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
              </main>
            </div>
          </Router>
        </AccessibilityEnhancer>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;