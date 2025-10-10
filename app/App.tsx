'use client'
import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from './components/ErrorBoundary';
import PerformanceMonitor from './components/PerformanceMonitor';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load pages for better performance;
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

// AI Services;
const AiServicesPage = lazy(() => import('./ai-services/page'));
const AiMarketingPage = lazy(() => import('./ai-marketing/page'));
const AiAutomationPage = lazy(() => import('./ai-automation/page'));
const AiHealthcarePage = lazy(() => import('./ai-healthcare/page'));
const AiFintechPage = lazy(() => import('./ai-fintech/page'));
const AiContentGenerationPage = lazy(() => import('./ai-content-generation/page'));
const AiDataAnalyticsPage = lazy(() => import('./ai-data-analytics/page'));
const AiCybersecurityPage = lazy(() => import('./ai-cybersecurity/page'));
const AiWorkflowAutomationPage = lazy(() => import('./ai-workflow-automation/page'));
const AiCustomerSupportPage = lazy(() => import('./ai-customer-support/page'));
const AiSalesAutomationPage = lazy(() => import('./ai-sales-automation/page'));
const AiDataVisualizationPage = lazy(() => import('./ai-data-visualization/page'));

// Additional AI Services;
const AiAnalyticsPage = lazy(() => import('./ai-analytics/page'));
const AiChatbotBuilderPage = lazy(() => import('./ai-chatbot-builder/page'));
const AiCrmPage = lazy(() => import('./ai-crm/page'));
const AiComputerVisionPage = lazy(() => import('./ai-computer-vision/page'));
const AiDocumentProcessingPage = lazy(() => import('./ai-document-processing/page'));
const AiPredictiveAnalyticsPage = lazy(() => import('./ai-predictive-analytics/page'));
const AiEdgeComputingPage = lazy(() => import('./ai-edge-computing/page'));
const AiVoiceAssistantPage = lazy(() => import('./ai-voice-assistant/page'));
const AiRecommendationEnginePage = lazy(() => import('./ai-recommendation-engine/page'));
const AiHrPage = lazy(() => import('./ai-hr/page'));
const AiEcommerceSolutionsPage = lazy(() => import('./ai-ecommerce-solutions/page'));
const AiFinancialServicesPage = lazy(() => import('./ai-financial-services/page'));
const AiVoiceSolutionsPage = lazy(() => import('./ai-voice-solutions/page'));
const AiHrSolutionsPage = lazy(() => import('./ai-hr-solutions/page'));

// IT Services;
const ItServicesPage = lazy(() => import('./it-services/page'));
const ItInfrastructurePage = lazy(() => import('./it-infrastructure/page'));
const ItSupportPage = lazy(() => import('./it-support/page'));
const CloudInfrastructurePage = lazy(() => import('./cloud-infrastructure/page'));
const CybersecurityPage = lazy(() => import('./cybersecurity/page'));

// Additional IT Services;
const ApiDevelopmentPage = lazy(() => import('./api/page'));
const DatabaseManagementPage = lazy(() => import('./database-management/page'));
const MobileDevelopmentPage = lazy(() => import('./mobile-development/page'));
const WebDevelopmentPage = lazy(() => import('./web-development/page'));
const DevOpsCicdPage = lazy(() => import('./devops-cicd/page'));
const DataAnalyticsPage = lazy(() => import('./data-analytics/page'));
const CustomSoftwarePage = lazy(() => import('./custom-development/page'));
const NetworkInfrastructurePage = lazy(() => import('./network-infrastructure/page'));
const ItAssetManagementPage = lazy(() => import('./it-asset-management/page'));
const PerformanceOptimizationPage = lazy(() => import('./performance-optimization/page'));
const ApiDevelopmentPage2 = lazy(() => import('./api-development/page'));
const CybersecuritySolutionsPage = lazy(() => import('./cybersecurity-solutions/page'));
const DataAnalyticsBiPage = lazy(() => import('./data-analytics-bi/page'));
const CustomSoftwarePage2 = lazy(() => import('./custom-software/page'));

// Emerging Technologies;
const BlockchainPage = lazy(() => import('./blockchain/page'));
const QuantumComputingPage = lazy(() => import('./quantum-computing/page'));
const IoTEdgeComputingPage = lazy(() => import('./iot-edge-computing/page'));
const ARVRSolutionsPage = lazy(() => import('./ar-vr-solutions/page'));
const AutonomousSystemsPage = lazy(() => import('./autonomous-systems/page'));

// Additional Emerging Technologies;
const FiveGImplementationPage = lazy(() => import('./5g-implementation/page'));
const Ai3DGenerationPage = lazy(() => import('./ai-3d-generation/page'));
const AiHolographicWorkspacePage = lazy(() => import('./ai-holographic-workspace/page'));
const AiBlockchainSolutionsPage = lazy(() => import('./ai-blockchain-solutions/page'));
const MachineLearningPage = lazy(() => import('./machine-learning/page'));
const IotPage = lazy(() => import('./iot/page'));
// Micro SaaS;
const MicroSaasPage = lazy(() => import('./micro-saas/page'));

// Support Pages;
const DocsPage = lazy(() => import('./docs/page'));
const ApiDocsPage = lazy(() => import('./api-docs/page'));
const SupportPage = lazy(() => import('./support/page'));
const StatusPage = lazy(() => import('./status/page'));
const ConsultationPage = lazy(() => import('./consultation/page'));

// Additional Important Pages;
const FaqPage = lazy(() => import('./faq/page'));
const DemoPage = lazy(() => import('./demo/page'));
const PartnersPage = lazy(() => import('./partners/page'));
const CommunityPage = lazy(() => import('./community/page'));
const TutorialsPage = lazy(() => import('./tutorials/page'));
const CompliancePage = lazy(() => import('./compliance/page'));
const BusinessIntelligencePage = lazy(() => import('./business-intelligence/page'));
const EnterprisePage = lazy(() => import('./enterprise/page'));
const DigitalTransformationPage = lazy(() => import('./digital-transformation/page'));
const EdgeComputingPage = lazy(() => import('./edge-computing/page'));
// Loading component;
const AppLoadingSpinner = () => (
  <LoadingSpinner />)
const App: React.FC = () => {</LoadingSpinner>
    return (</LoadingSpinner>
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <div className="App">
            <PerformanceMonitor>
              <AccessibilityEnhancer />
            </PerformanceMonitor>
            <Suspense fallback={<AppLoadingSpinner />}></Suspense>
              <Routes>{/* Main Pages */};</Routes>
                <Route path="/" element={<HomePage />} /></Route>
                <Route path="/about" element={<AboutPage />} /></Route>
                <Route path="/contact" element={<ContactPage />} /></Route>
                <Route path="/services" element={<ServicesPage />} /></Route>
                <Route path="/pricing" element={<PricingPage />} /></Route>
                <Route path="/case-studies" element={<CaseStudiesPage />} /></Route>
                <Route path="/blog" element={<BlogPage />} /></Route>
                <Route path="/team" element={<TeamPage />} /></Route>
                <Route path="/careers" element={<CareersPage />} /></Route>
                <Route path="/privacy" element={<PrivacyPage />} /></Route>
                <Route path="/terms" element={<TermsPage />} /></Route>
                <Route path="/cookies" element={<CookiesPage />} /></Route>
                {/* AI Services */}</Route>
                <Route path="/ai-services" element={<AiServicesPage />} /></Route>
                <Route path="/ai-marketing" element={<AiMarketingPage />} /></Route>
                <Route path="/ai-automation" element={<AiAutomationPage />} /></Route>
                <Route path="/ai-healthcare" element={<AiHealthcarePage />} /></Route>
                <Route path="/ai-fintech" element={<AiFintechPage />} /></Route>
                <Route path="/ai-content-generation" element={<AiContentGenerationPage />} /></Route>
                <Route path="/ai-data-analytics" element={<AiDataAnalyticsPage />} /></Route>
                <Route path="/ai-cybersecurity" element={<AiCybersecurityPage />} /></Route>
                <Route path="/ai-workflow-automation" element={<AiWorkflowAutomationPage />} /></Route>
                <Route path="/ai-customer-support" element={<AiCustomerSupportPage />} /></Route>
                <Route path="/ai-sales-automation" element={<AiSalesAutomationPage />} /></Route>
                <Route path="/ai-data-visualization" element={<AiDataVisualizationPage />} /></Route>
                {/* Additional AI Services */}</Route>
                <Route path="/ai-analytics" element={<AiAnalyticsPage />} /></Route>
                <Route path="/ai-chatbot-builder" element={<AiChatbotBuilderPage />} /></Route>
                <Route path="/ai-crm" element={<AiCrmPage />} /></Route>
                <Route path="/ai-computer-vision" element={<AiComputerVisionPage />} /></Route>
                <Route path="/ai-document-processing" element={<AiDocumentProcessingPage />} /></Route>
                <Route path="/ai-predictive-analytics" element={<AiPredictiveAnalyticsPage />} /></Route>
                <Route path="/ai-edge-computing" element={<AiEdgeComputingPage />} /></Route>
                <Route path="/ai-voice-assistant" element={<AiVoiceAssistantPage />} /></Route>
                <Route path="/ai-recommendation-engine" element={<AiRecommendationEnginePage />} /></Route>
                <Route path="/ai-hr" element={<AiHrPage />} /></Route>
                <Route path="/ai-ecommerce-solutions" element={<AiEcommerceSolutionsPage />} /></Route>
                <Route path="/ai-financial-services" element={<AiFinancialServicesPage />} /></Route>
                <Route path="/ai-voice-solutions" element={<AiVoiceSolutionsPage />} /></Route>
                <Route path="/ai-hr-solutions" element={<AiHrSolutionsPage />} /></Route>
                {/* IT Services */}</Route>
                <Route path="/it-services" element={<ItServicesPage />} /></Route>
                <Route path="/it-infrastructure" element={<ItInfrastructurePage />} /></Route>
                <Route path="/it-support" element={<ItSupportPage />} /></Route>
                <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} /></Route>
                <Route path="/cybersecurity" element={<CybersecurityPage />} /></Route>
                {/* Additional IT Services */}</Route>
                <Route path="/api" element={<ApiDevelopmentPage />} /></Route>
                <Route path="/database-management" element={<DatabaseManagementPage />} /></Route>
                <Route path="/mobile-development" element={<MobileDevelopmentPage />} /></Route>
                <Route path="/web-development" element={<WebDevelopmentPage />} /></Route>
                <Route path="/devops-cicd" element={<DevOpsCicdPage />} /></Route>
                <Route path="/data-analytics" element={<DataAnalyticsPage />} /></Route>
                <Route path="/custom-development" element={<CustomSoftwarePage />} /></Route>
                <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} /></Route>
                <Route path="/it-asset-management" element={<ItAssetManagementPage />} /></Route>
                <Route path="/performance-optimization" element={<PerformanceOptimizationPage />} /></Route>
                <Route path="/api-development" element={<ApiDevelopmentPage />} /></Route>
                <Route path="/cybersecurity-solutions" element={<CybersecuritySolutionsPage />} /></Route>
                <Route path="/data-analytics-bi" element={<DataAnalyticsBiPage />} /></Route>
                <Route path="/custom-software" element={<CustomSoftwarePage2 />} /></Route>
                {/* Emerging Technologies */}</Route>
                <Route path="/blockchain" element={<BlockchainPage />} /></Route>
                <Route path="/quantum-computing" element={<QuantumComputingPage />} /></Route>
                <Route path="/iot-edge-computing" element={<IoTEdgeComputingPage />} /></Route>
                <Route path="/ar-vr-solutions" element={<ARVRSolutionsPage />} /></Route>
                <Route path="/autonomous-systems" element={<AutonomousSystemsPage />} /></Route>
                {/* Additional Emerging Technologies */}</Route>
                <Route path="/5g-implementation" element={<FiveGImplementationPage />} /></Route>
                <Route path="/ai-3d-generation" element={<Ai3DGenerationPage />} /></Route>
                <Route path="/ai-holographic-workspace" element={<AiHolographicWorkspacePage />} /></Route>
                <Route path="/ai-blockchain-solutions" element={<AiBlockchainSolutionsPage />} /></Route>
                <Route path="/machine-learning" element={<MachineLearningPage />} /></Route>
                <Route path="/iot" element={<IotPage />} /></Route>
                {/* Micro SaaS */}</Route>
                <Route path="/micro-saas" element={<MicroSaasPage />} /></Route>
                {/* Support Pages */}</Route>
                <Route path="/docs" element={<DocsPage />} /></Route>
                <Route path="/api-docs" element={<ApiDocsPage />} /></Route>
                <Route path="/support" element={<SupportPage />} /></Route>
                <Route path="/status" element={<StatusPage />} /></Route>
                <Route path="/consultation" element={<ConsultationPage />} /></Route>
                {/* Additional Important Pages */}</Route>
                <Route path="/faq" element={<FaqPage />} /></Route>
                <Route path="/demo" element={<DemoPage />} /></Route>
                <Route path="/partners" element={<PartnersPage />} /></Route>
                <Route path="/community" element={<CommunityPage />} /></Route>
                <Route path="/tutorials" element={<TutorialsPage />} /></Route>
                <Route path="/compliance" element={<CompliancePage />} /></Route>
                <Route path="/business-intelligence" element={<BusinessIntelligencePage />} /></Route>
                <Route path="/enterprise" element={<EnterprisePage />} /></Route>
                <Route path="/digital-transformation" element={<DigitalTransformationPage />} /></Route>
                <Route path="/edge-computing" element={<EdgeComputingPage />} /></Route>
              </Routes>
            </Suspense>
          </div>
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  )
}
export default App;