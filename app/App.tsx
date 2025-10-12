'use client';
import { Suspense, lazy} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from './components/ErrorBoundary';
import PerformanceMonitor from './components/PerformanceMonitor';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load pages for better performance
HomePage = lazy(() => import('./page'));
AboutPage = lazy(() => import('./about/page'));
ContactPage = lazy(() => import('./contact/page'));
ServicesPage = lazy(() => import('./services/page'));
PricingPage = lazy(() => import('./pricing/page'));
CaseStudiesPage = lazy(() => import('./case-studies/page'));
BlogPage = lazy(() => import('./blog/page'));
TeamPage = lazy(() => import('./team/page'));
CareersPage = lazy(() => import('./careers/page'));
PrivacyPage = lazy(() => import('./privacy/page'));
TermsPage = lazy(() => import('./terms/page'));
CookiesPage = lazy(() => import('./cookies/page'));
// AI Services
AiServicesPage = lazy(() => import('./ai-services/page'));
AiMarketingPage = lazy(() => import('./ai-marketing/page'));
AiAutomationPage = lazy(() => import('./ai-automation/page'));
AiHealthcarePage = lazy(() => import('./ai-healthcare/page'));
AiFintechPage = lazy(() => import('./ai-fintech/page'));
AiContentGenerationPage = lazy(() => import('./ai-content-generation/page'));
AiDataAnalyticsPage = lazy(() => import('./ai-data-analytics/page'));
AiCybersecurityPage = lazy(() => import('./ai-cybersecurity/page'));
AiWorkflowAutomationPage = lazy(() => import('./ai-workflow-automation/page'));
AiCustomerSupportPage = lazy(() => import('./ai-customer-support/page'));
AiSalesAutomationPage = lazy(() => import('./ai-sales-automation/page'));
AiDataVisualizationPage = lazy(() => import('./ai-data-visualization/page'));
// IT Services
ItServicesPage = lazy(() => import('./it-services/page'));
ItInfrastructurePage = lazy(() => import('./it-infrastructure/page'));
ItSupportPage = lazy(() => import('./it-support/page'));
CloudInfrastructurePage = lazy(() => import('./cloud-infrastructure/page'));
CybersecurityPage = lazy(() => import('./cybersecurity/page'));
// Emerging Technologies
BlockchainPage = lazy(() => import('./blockchain/page'));
QuantumComputingPage = lazy(() => import('./quantum-computing/page'));
IoTEdgeComputingPage = lazy(() => import('./iot-edge-computing/page'));
ARVRSolutionsPage = lazy(() => import('./ar-vr-solutions/page'));
AutonomousSystemsPage = lazy(() => import('./autonomous-systems/page'));
// Micro SaaS
MicroSaasPage = lazy(() => import('./micro-saas/page'));
AIContentWriterProPage = lazy(() => import('./micro-saas/ai-content-writer-pro/page'));
// Support Pages
DocsPage = lazy(() => import('./docs/page'));
ApiDocsPage = lazy(() => import('./api-docs/page'));
SupportPage = lazy(() => import('./support/page'));
StatusPage = lazy(() => import('./status/page'));
ConsultationPage = lazy(() => import('./consultation/page'));
// Loading component
AppLoadingSpinner = () => <LoadingSpinner />;
function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <div className="Ap p">
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
                <Route path="/ai-3 d-generation" element={<AiServicesPage />} />
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
                
                {/* 5 G Services */}
                <Route path="/5 g-network-infrastructure" element={<ItServicesPage />} />
                <Route path="/5 g-iot-solutions" element={<ItServicesPage />} />
                <Route path="/5 g-edge-computing" element={<ItServicesPage />} />
                <Route path="/5 g-private-networks" element={<ItServicesPage />} />
                <Route path="/5 g-mobile-applications" element={<ItServicesPage />} />
                <Route path="/5 g-data-analytics" element={<ItServicesPage />} />
                
                {/* Additional Services */}
                <Route path="/business-intelligence" element={<ItServicesPage />} />
                <Route path="/5 g-implementation" element={<ItServicesPage />} />
                
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
    </>
