'use client';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from './app/components/ErrorBoundary';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import LoadingSpinner from './app/components/LoadingSpinner';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./app/page'));
const AboutPage = lazy(() => import('./app/about/page'));
const ContactPage = lazy(() => import('./app/contact/page'));
const ServicesPage = lazy(() => import('./app/services/page'));
const PricingPage = lazy(() => import('./app/pricing/page'));
const CaseStudiesPage = lazy(() => import('./app/case-studies/page'));
const BlogPage = lazy(() => import('./app/blog/page'));
const TeamPage = lazy(() => import('./app/team/page'));
const CareersPage = lazy(() => import('./app/careers/page'));
const PrivacyPage = lazy(() => import('./app/privacy/page'));
const TermsPage = lazy(() => import('./app/terms/page'));
const CookiesPage = lazy(() => import('./app/cookies/page'));

// AI Services
const AiServicesPage = lazy(() => import('./app/ai-services/page'));
const AiMarketingPage = lazy(() => import('./app/ai-marketing/page'));
const AiAutomationPage = lazy(() => import('./app/ai-automation/page'));
const AiHealthcarePage = lazy(() => import('./app/ai-healthcare/page'));
const AiFintechPage = lazy(() => import('./app/ai-fintech/page'));
const AiContentGenerationPage = lazy(() => import('./app/ai-content-generation/page'));
const AiDataAnalyticsPage = lazy(() => import('./app/ai-data-analytics/page'));
const AiCybersecurityPage = lazy(() => import('./app/ai-cybersecurity/page'));
const AiWorkflowAutomationPage = lazy(() => import('./app/ai-workflow-automation/page'));
const AiCustomerSupportPage = lazy(() => import('./app/ai-customer-support/page'));
const AiSalesAutomationPage = lazy(() => import('./app/ai-sales-automation/page'));
const AiDataVisualizationPage = lazy(() => import('./app/ai-data-visualization/page'));

// IT Services
const ItServicesPage = lazy(() => import('./app/it-services/page'));
const ItInfrastructurePage = lazy(() => import('./app/it-infrastructure/page'));
const ItSupportPage = lazy(() => import('./app/it-support/page'));
const CloudInfrastructurePage = lazy(() => import('./app/cloud-infrastructure/page'));
const CybersecurityPage = lazy(() => import('./app/cybersecurity/page'));

// Emerging Technologies
const BlockchainPage = lazy(() => import('./app/blockchain/page'));
const QuantumComputingPage = lazy(() => import('./app/quantum-computing/page'));
const IoTEdgeComputingPage = lazy(() => import('./app/iot-edge-computing/page'));
const ARVRSolutionsPage = lazy(() => import('./app/ar-vr-solutions/page'));
const AutonomousSystemsPage = lazy(() => import('./app/autonomous-systems/page'));

// Micro SaaS
const MicroSaasPage = lazy(() => import('./app/micro-saas/page'));
const AIContentWriterProPage = lazy(() => import('./app/micro-saas/ai-content-writer-pro/page'));

// Support Pages
const DocsPage = lazy(() => import('./app/docs/page'));
const ApiDocsPage = lazy(() => import('./app/api-docs/page'));
const SupportPage = lazy(() => import('./app/support/page'));
const StatusPage = lazy(() => import('./app/status/page'));
const ConsultationPage = lazy(() => import('./app/consultation/page'));

// Loading component
const AppLoadingSpinner = () => <LoadingSpinner />;

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <div className="App">
            <PerformanceMonitor />
            <AccessibilityEnhancer />
            <Suspense fallback={<AppLoadingSpinner />}>
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
                <Route path="/ai-services" element={<AiServicesPage />} />
                <Route path="/ai-marketing" element={<AiMarketingPage />} />
                <Route path="/ai-automation" element={<AiAutomationPage />} />
                <Route path="/ai-healthcare" element={<AiHealthcarePage />} />
                <Route path="/ai-fintech" element={<AiFintechPage />} />
                <Route path="/ai-content-generation" element={<AiContentGenerationPage />} />
                <Route path="/ai-data-analytics" element={<AiDataAnalyticsPage />} />
                <Route path="/ai-cybersecurity" element={<AiCybersecurityPage />} />
                <Route path="/ai-workflow-automation" element={<AiWorkflowAutomationPage />} />
                <Route path="/ai-customer-support" element={<AiCustomerSupportPage />} />
                <Route path="/ai-sales-automation" element={<AiSalesAutomationPage />} />
                <Route path="/ai-data-visualization" element={<AiDataVisualizationPage />} />

                {/* IT Services */}
                <Route path="/it-services" element={<ItServicesPage />} />
                <Route path="/it-infrastructure" element={<ItInfrastructurePage />} />
                <Route path="/it-support" element={<ItSupportPage />} />
                <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                <Route path="/cybersecurity" element={<CybersecurityPage />} />

                {/* Emerging Technologies */}
                <Route path="/blockchain" element={<BlockchainPage />} />
                <Route path="/quantum-computing" element={<QuantumComputingPage />} />
                <Route path="/iot-edge-computing" element={<IoTEdgeComputingPage />} />
                <Route path="/ar-vr-solutions" element={<ARVRSolutionsPage />} />
                <Route path="/autonomous-systems" element={<AutonomousSystemsPage />} />

                {/* Micro SaaS */}
                <Route path="/micro-saas" element={<MicroSaasPage />} />
                <Route path="/micro-saas/ai-content-writer-pro" element={<AIContentWriterProPage />} />
                <Route path="/micro-saas/analytics-dashboard" element={<MicroSaasPage />} />
                <Route path="/micro-saas/appointment-scheduler" element={<MicroSaasPage />} />
                <Route path="/micro-saas/chat-analytics" element={<MicroSaasPage />} />
                <Route path="/micro-saas/content-generator" element={<MicroSaasPage />} />
                <Route path="/micro-saas/document-processor" element={<MicroSaasPage />} />
                <Route path="/micro-saas/email-marketing" element={<MicroSaasPage />} />
                <Route path="/micro-saas/expense-tracker" element={<MicroSaasPage />} />
                <Route path="/micro-saas/inventory-management" element={<MicroSaasPage />} />
                
                {/* AI Services Dropdown */}
                <Route path="/ai-content-generator" element={<AiContentGenerationPage />} />
                <Route path="/ai-chatbot-builder" element={<AiServicesPage />} />
                <Route path="/ai-analytics-dashboard" element={<AiDataAnalyticsPage />} />
                <Route path="/ai-email-assistant" element={<AiServicesPage />} />
                
                {/* Additional AI Services */}
                <Route path="/ai-voice-assistant" element={<AiServicesPage />} />
                <Route path="/ai-crm-assistant" element={<AiServicesPage />} />
                <Route path="/ai-social-media-manager" element={<AiServicesPage />} />
                <Route path="/ai-email-marketing-automation" element={<AiServicesPage />} />
                <Route path="/ai-project-manager" element={<AiServicesPage />} />
                <Route path="/ai-3d-generation" element={<AiServicesPage />} />
                <Route path="/ai-drug-discovery-pro" element={<AiServicesPage />} />
                <Route path="/ai-automated-reporting" element={<AiServicesPage />} />
                <Route path="/ai-password-manager" element={<AiServicesPage />} />
                <Route path="/ai-task-manager" element={<AiServicesPage />} />
                
                {/* IT Services Dropdown */}
                <Route path="/web-development" element={<ItServicesPage />} />
                <Route path="/mobile-development" element={<ItServicesPage />} />
                <Route path="/devops" element={<ItServicesPage />} />
                <Route path="/cloud-migration" element={<ItServicesPage />} />
                
                {/* Additional IT Services */}
                <Route path="/api-development" element={<ItServicesPage />} />
                <Route path="/database-management" element={<ItServicesPage />} />
                <Route path="/network-infrastructure" element={<ItServicesPage />} />
                <Route path="/system-integration" element={<ItServicesPage />} />
                <Route path="/data-analytics" element={<ItServicesPage />} />
                <Route path="/iot-solutions" element={<ItServicesPage />} />
                <Route path="/blockchain-development" element={<ItServicesPage />} />
                
                {/* 5G Services */}
                <Route path="/5g-network-infrastructure" element={<ItServicesPage />} />
                <Route path="/5g-iot-solutions" element={<ItServicesPage />} />
                <Route path="/5g-edge-computing" element={<ItServicesPage />} />
                <Route path="/5g-private-networks" element={<ItServicesPage />} />
                <Route path="/5g-mobile-applications" element={<ItServicesPage />} />
                <Route path="/5g-data-analytics" element={<ItServicesPage />} />
                
                {/* Additional Services */}
                <Route path="/business-intelligence" element={<ItServicesPage />} />
                <Route path="/5g-implementation" element={<ItServicesPage />} />
                
                {/* Company Pages */}
                <Route path="/team" element={<TeamPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/case-studies" element={<CaseStudiesPage />} />
                <Route path="/blog" element={<BlogPage />} />
                {/* Support Pages */}
                <Route path="/docs" element={<DocsPage />} />
                <Route path="/api-docs" element={<ApiDocsPage />} />
                <Route path="/support" element={<SupportPage />} />
                <Route path="/status" element={<StatusPage />} />
                <Route path="/consultation" element={<ConsultationPage />} />
              </Routes>
            </Suspense>
          </div>
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;
