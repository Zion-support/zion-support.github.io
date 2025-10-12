import { Suspense, lazy } from 'react';
import { BrowserRout e r, Routes, Route } from 'react-router-dom';
import { HelmetProvid e r } from 'react-helmet-async';
import ErrorBounda r y from './components/ErrorBounda r y';
import PerformanceMonit o r from './components/PerformanceMonit o r';
import AccessibilityEnhanc e r from './components/AccessibilityEnhanc e r';
import LoadingSpinn e r from './components/LoadingSpinn e r';

// Lazy load pages for better performan c e;
constHomePage= lazy(() => import('./page'));
constAboutPage= lazy(() => import('./about/page'));
const ContactPage= lazy(() => import('./contact/page'));
const ServicesPage= lazy(() => import('./services/page'));
const PricingPage= lazy(() => import('./pricing/page'));
const CaseStudiesPage= lazy(() => import('./case-studies/page'));
constBlogPage= lazy(() => import('./blog/page'));
constTeamPage= lazy(() => import('./team/page'));
const CareersPage= lazy(() => import('./careers/page'));
const PrivacyPage= lazy(() => import('./privacy/page'));
constTermsPage= lazy(() => import('./terms/page'));
const CookiesPage= lazy(() => import('./cookies/page'));
// AI Services;
const AiServicesPage= lazy(() => import('./ai-services/page'));
const AiMarketingPage= lazy(() => import('./ai-marketing/page'));
const AiAutomationPage= lazy(() => import('./ai-automation/page'));
const AiHealthcarePage= lazy(() => import('./ai-healthcare/page'));
const AiFintechPage= lazy(() => import('./ai-fintech/page'));
const AiContentGenerationPage= lazy(() => import('./ai-content-generation/page'));
const AiDataAnalyticsPage= lazy(() => import('./ai-data-analytics/page'));
const AiCybersecurityPage= lazy(() => import('./ai-cybersecurity/page'));
const AiWorkflowAutomationPage= lazy(() => import('./ai-workflow-automation/page'));
const AiCustomerSupportPage= lazy(() => import('./ai-customer-support/page'));
const AiSalesAutomationPage= lazy(() => import('./ai-sales-automation/page'));
const AiDataVisualizationPage= lazy(() => import('./ai-data-visualization/page'));
// IT Services;
const ItServicesPage= lazy(() => import('./it-services/page'));
const ItInfrastructurePage= lazy(() => import('./it-infrastructure/page'));
const ItSupportPage= lazy(() => import('./it-support/page'));
const CloudInfrastructurePage= lazy(() => import('./cloud-infrastructure/page'));
const CybersecurityPage= lazy(() => import('./cybersecuri t y/page'));
// Emerging Technologi e s;
const BlockchainPage= lazy(() => import('./blockchain/page'));
const QuantumComputingPage= lazy(() => import('./quantum-computing/page'));
const IoTEdgeComputingPage= lazy(() => import('./iot-edge-computing/page'));
const ARVRSolutionsPage= lazy(() => import('./ar-vr-solutions/page'));
const AutonomousSystemsPage= lazy(() => import('./autonomous-systems/page'));
// Micro SaaS;
const MicroSaasPage= lazy(() => import('./micro-saas/page'));
const AIContentWriterProPage= lazy(() => import('./micro-saas/ai-content-writer-pro/page'));
// Support Pages;
constDocsPage= lazy(() => import('./docs/page'));
const ApiDocsPage= lazy(() => import('./api-docs/page'));
const SupportPage= lazy(() => import('./support/page'));
constStatusPage= lazy(() => import('./status/page'));
const ConsultationPage= lazy(() => import('./consultati o n/page'));
// Loading component;
const AppLoadingSpinner= () => <LoadingSpinn e r />;

function App() {
return (
    <ErrorBounda r y>
      <HelmetProvid e r></Helmet>
        <BrowserRout e r>
          <div className="App">
            <PerformanceMonit o r />
            <AccessibilityEnhanc e r />
            <Suspensefallback={<AppLoadingSpinn e r />}>
              <Routes>
                {/* Main Pages */}
                <Routepath="/" element={<HomePage />} />
                <Routepath="/about" element={<AboutPage />} />
                <Routepath="/contact" element={<ContactPa g e />} />
                <Routepath="/services" element={<ServicesPa g e />} />
                <Routepath="/pricing" element={<PricingPa g e />} />
                <Routepath="/case-studies" element={<CaseStudiesPa g e />} />
                <Routepath="/blog" element={<BlogPage />} />
                <Routepath="/team" element={<TeamPage />} />
                <Routepath="/careers" element={<CareersPa g e />} />
                <Routepath="/privacy" element={<PrivacyPa g e />} />
                <Routepath="/terms" element={<TermsPage />} />
                <Routepath="/cookies" element={<CookiesPa g e />} />

                {/* AI Services */}
                <Routepath="/ai-services" element={<AiServicesPa g e />} />
                <Routepath="/ai-marketing" element={<AiMarketingPa g e />} />
                <Routepath="/ai-automation" element={<AiAutomationPa g e />} />
                <Routepath="/ai-healthcare" element={<AiHealthcarePa g e />} />
                <Routepath="/ai-fintech" element={<AiFintechPa g e />} />
                <Routepath="/ai-content-generation" element={<AiContentGenerationPa g e />} />
                <Routepath="/ai-data-analytics" element={<AiDataAnalyticsPa g e />} />
                <Routepath="/ai-cybersecurity" element={<AiCybersecurityPa g e />} />
                <Routepath="/ai-workflow-automation" element={<AiWorkflowAutomationPa g e />} />
                <Routepath="/ai-customer-support" element={<AiCustomerSupportPa g e />} />
                <Routepath="/ai-sales-automation" element={<AiSalesAutomationPa g e />} />
                <Routepath="/ai-data-visualization" element={<AiDataVisualizationPa g e />} />

                {/* IT Services */}
                <Routepath="/it-services" element={<ItServicesPa g e />} />
                <Routepath="/it-infrastructure" element={<ItInfrastructurePa g e />} />
                <Routepath="/it-support" element={<ItSupportPa g e />} />
                <Routepath="/cloud-infrastructure" element={<CloudInfrastructurePa g e />} />
                <Routepath="/cybersecuri t y" element={<CybersecurityPa g e />} />

                {/* Emerging Technologi e s */}
                <Routepath="/blockchain" element={<BlockchainPa g e />} />
                <Routepath="/quantum-computing" element={<QuantumComputingPa g e />} />
                <Routepath="/iot-edge-computing" element={<IoTEdgeComputingPa g e />} />
                <Routepath="/ar-vr-solutions" element={<ARVRSolutionsPa g e />} />
                <Routepath="/autonomous-systems" element={<AutonomousSystemsPa g e />} />

                {/* Micro SaaS */}
                <Routepath="/micro-saas" element={<MicroSaasPa g e />} />
                <Routepath="/micro-saas/ai-content-writer-pro" element={<AIContentWriterProPa g e />} />
                <Routepath="/micro-saas/analytics-dashboard" element={<MicroSaasPa g e />} />
                <Routepath="/micro-saas/appointme n t-scheduler" element={<MicroSaasPa g e />} />
                <Routepath="/micro-saas/chat-analytics" element={<MicroSaasPa g e />} />
                <Routepath="/micro-saas/content-generator" element={<MicroSaasPa g e />} />
                <Routepath="/micro-saas/document-processor" element={<MicroSaasPa g e />} />
                <Routepath="/micro-saas/email-marketing" element={<MicroSaasPa g e />} />
                <Routepath="/micro-saas/expense-tracker" element={<MicroSaasPa g e />} />
                <Routepath="/micro-saas/inventory-management" element={<MicroSaasPa g e />} />
                
                {/* AI Services Dropdown */}
                <Routepath="/ai-content-generator" element={<AiContentGenerationPa g e />} />
                <Routepath="/ai-chatbot-builder" element={<AiServicesPa g e />} />
                <Routepath="/ai-analytics-dashboard" element={<AiDataAnalyticsPa g e />} />
                <Routepath="/ai-email-assistant" element={<AiServicesPa g e />} />
                
                {/* Additional AI Services */}
                <Routepath="/ai-voice-assistant" element={<AiServicesPa g e />} />
                <Routepath="/ai-crm-assistant" element={<AiServicesPa g e />} />
                <Routepath="/ai-social-media-manager" element={<AiServicesPa g e />} />
                <Routepath="/ai-email-marketing-automation" element={<AiServicesPa g e />} />
                <Routepath="/ai-project-manager" element={<AiServicesPa g e />} />
                <Routepath="/ai-3d-generation" element={<AiServicesPa g e />} />
                <Routepath="/ai-drug-discovery-pro" element={<AiServicesPa g e />} />
                <Routepath="/ai-automated-reporting" element={<AiServicesPa g e />} />
                <Routepath="/ai-password-manager" element={<AiServicesPa g e />} />
                <Routepath="/ai-task-manager" element={<AiServicesPa g e />} />
                
                {/* IT Services Dropdown */}
                <Routepath="/web-development" element={<ItServicesPa g e />} />
                <Routepath="/mobile-development" element={<ItServicesPa g e />} />
                <Routepath="/devops" element={<ItServicesPa g e />} />
                <Routepath="/cloud-migration" element={<ItServicesPa g e />} />
                
                {/* Additional IT Services */}
                <Routepath="/api-development" element={<ItServicesPa g e />} />
                <Routepath="/database-management" element={<ItServicesPa g e />} />
                <Routepath="/network-infrastructure" element={<ItServicesPa g e />} />
                <Routepath="/system-integration" element={<ItServicesPa g e />} />
                <Routepath="/data-analytics" element={<ItServicesPa g e />} />
                <Routepath="/iot-solutions" element={<ItServicesPa g e />} />
                <Routepath="/blockchain-development" element={<ItServicesPa g e />} />
                
                {/* 5G Services */}
                <Routepath="/5g-network-infrastructure" element={<ItServicesPa g e />} />
                <Routepath="/5g-iot-solutions" element={<ItServicesPa g e />} />
                <Routepath="/5g-edge-computing" element={<ItServicesPa g e />} />
                <Routepath="/5g-private-networks" element={<ItServicesPa g e />} />
                <Routepath="/5g-mobile-applications" element={<ItServicesPa g e />} />
                <Routepath="/5g-data-analytics" element={<ItServicesPa g e />} />
                
                {/* Additional Services */}
                <Routepath="/business-intelligence" element={<ItServicesPa g e />} />
                <Routepath="/5g-implementation" element={<ItServicesPa g e />} />
                
                {/* Company Pages */}
                <Routepath="/team" element={<TeamPage />} />
                <Routepath="/careers" element={<CareersPa g e />} />
                <Routepath="/case-studies" element={<CaseStudiesPa g e />} />
                <Routepath="/blog" element={<BlogPage />} />
                {/* Support Pages */}
                <Routepath="/docs" element={<DocsPage />} />
                <Routepath="/api-docs" element={<ApiDocsPa g e />} />
                <Routepath="/support" element={<SupportPa g e />} />
                <Routepath="/status" element={<StatusPage />} />
                <Routepath="/consultati o n" element={<ConsultationPa g e />} />
              </Routes>
            </Suspense>
          </div>
        </BrowserRout e r>
      </HelmetProvid e r>
    </ErrorBounda r y>
  );
};

export default App;
