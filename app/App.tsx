'use client';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from './components/ErrorBoundary';
import PerformanceMonitor from './components/PerformanceMonitor';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import LoadingSpinner from './components/LoadingSpinner';

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
const AiContentGenerationPage = lazy(() => import('./ai-content-generation/page'));
const AiDataAnalyticsPage = lazy(() => import('./ai-data-analytics/page'));
const AiCybersecurityPage = lazy(() => import('./ai-cybersecurity/page'));
const AiWorkflowAutomationPage = lazy(() => import('./ai-workflow-automation/page'));
const AiCustomerSupportPage = lazy(() => import('./ai-customer-support/page'));
const AiSalesAutomationPage = lazy(() => import('./ai-sales-automation/page'));
const AiDataVisualizationPage = lazy(() => import('./ai-data-visualization/page'));

// IT Services
const ItServicesPage = lazy(() => import('./it-services/page'));
const CloudServicesPage = lazy(() => import('./cloud-services/page'));
const CybersecurityServicesPage = lazy(() => import('./cybersecurity-services/page'));
const DataAnalyticsPage = lazy(() => import('./data-analytics/page'));
const DigitalTransformationPage = lazy(() => import('./digital-transformation/page'));
const EnterpriseItPage = lazy(() => import('./enterprise-it/page'));
const ItConsultingPage = lazy(() => import('./it-consulting/page'));
const MachineLearningPage = lazy(() => import('./machine-learning/page'));
const MicroSaasPage = lazy(() => import('./micro-saas/page'));
const QuantumComputingPage = lazy(() => import('./quantum-computing/page'));
const RoboticsAutomationPage = lazy(() => import('./robotics-automation/page'));

// Additional Pages
const DemoPage = lazy(() => import('./demo/page'));
const ConsultationPage = lazy(() => import('./consultation/page'));

// Loading component
const AppLoadingSpinner = () => ()
  <LoadingSpinner 
    size="xl" 
    text="Loading Zion Tech Group..." 
    fullScreen 
  /></LoadingSpinner>
);

const App: React.FC = () => {}
  return ()
    <ErrorBoundary></ErrorBoundary>
      <HelmetProvider></HelmetProvider>
        <BrowserRouter></BrowserRouter>
          <div className="App"></div>
            <PerformanceMonitor /></PerformanceMonitor>
            <AccessibilityEnhancer /></AccessibilityEnhancer>
            <Suspense fallback={<AppLoadingSpinner />}>
              <Routes></Routes>
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
                <Route path="/blockchain-development" element={<BlockchainDevelopmentPage />} />
                <Route path="/iot-solutions" element={<IoTSolutionsPage />} />
                <Route path="/ar-vr-development" element={<ARVRDevelopmentPage />} />
                <Route path="/devops-solutions" element={<DevOpsSolutionsPage />} />
                <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                <Route path="/web-development" element={<WebDevelopmentPage />} />
                <Route path="/it-support" element={<ITSupportPage />} />
                <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} />
                <Route path="/it-consulting" element={<ITConsultingPage />} />
                <Route path="/cybersecurity-audit" element={<CybersecurityAuditPage />} />
                <Route path="/data-center-services" element={<DataCenterServicesPage />} />
                <Route path="/asset-management" element={<AssetManagementPage />} />

                {/* Micro SAAS Routes */}
                <Route path="/micro-saas" element={<MicroSAASPage />} />
                <Route path="/zion-analytics-pro" element={<ZionAnalyticsProPage />} />
                <Route path="/zion-security-shield" element={<ZionSecurityShieldPage />} />
                <Route path="/zion-cloud-vault" element={<ZionCloudVaultPage />} />
                <Route path="/zion-ai-inventory-manager" element={<ZionAIInventoryManagerPage />} />
                <Route path="/zion-hr-assistant-pro" element={<ZionHRAssistantProPage />} />
                <Route path="/zion-ai-accounting-suite" element={<ZionAIAccountingSuitePage />} />
                <Route path="/zion-ecommerce-optimizer" element={<ZionEcommerceOptimizerPage />} />
                <Route path="/zion-ai-customer-insights" element={<ZionAICustomerInsightsPage />} />
                <Route path="/zion-ai-lead-scoring" element={<ZionAILeadScoringPage />} />
                <Route path="/zion-ai-document-processor" element={<ZionAIDocumentProcessorPage />} />
                <Route path="/zion-ai-social-listener" element={<ZionAISocialListenerPage />} />
                <Route path="/zion-ai-email-optimizer" element={<ZionAIEmailOptimizerPage />} />
                <Route path="/zion-ai-meeting-assistant" element={<ZionAIMeetingAssistantPage />} />
                <Route path="/zion-ai-expense-tracker" element={<ZionAIExpenseTrackerPage />} />
                <Route path="/zion-ai-survey-builder" element={<ZionAISurveyBuilderPage />} />
                <Route path="/zion-ai-chatbot-builder" element={<ZionAIChatbotBuilderPage />} />
                <Route path="/zion-ai-workflow-automation" element={<ZionAIWorkflowAutomationPage />} />
                <Route path="/zion-ai-seo-optimizer" element={<ZionAISEOOptimizerPage />} />
                <Route path="/zion-ai-data-warehouse" element={<ZionAIDataWarehousePage />} />
                <Route path="/zion-ai-mobile-app-builder" element={<ZionAIMobileAppBuilderPage />} />
                <Route path="/zion-ai-api-manager" element={<ZionAIAPIManagerPage />} />
                <Route path="/zion-ai-backup-manager" element={<ZionAIBackupManagerPage />} />
                <Route path="/zion-ai-testing-automation" element={<ZionAITestingAutomationPage />} />

                {/* 5G Solutions Routes */}
                <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
                <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                <Route path="/5g-iot-solutions" element={<FiveGIoTSolutionsPage />} />
                <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
                <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
                <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
                <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
                <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
              </Routes>
            </Suspense>
          </div>
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;
