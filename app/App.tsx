                {/* AI Services */}
                <Route path="/ai-services" element={<AiServicesPage />} />"
<Route path="/ai-marketing" element={<AiMarketingPage />} />"
<Route path="/ai-automation" element={<AiAutomationPage />} />"
<Route path="/ai-healthcare" element={<AiHealthcarePage />} />"
<Route path="/ai-fintech" element={<AiFintechPage />} />"
<Route path="/ai-content-generation" element={<AiContentGenerationPage />} />"
<Route path="/ai-data-analytics" element={<AiDataAnalyticsPage />} />"
<Route path="/ai-cybersecurity" element={<AiCybersecurityPage />} />"
<Route path="/ai-workflow-automation" element={<AiWorkflowAutomationPage />} />"
<Route path="/ai-customer-support" element={<AiCustomerSupportPage />} />"
<Route path="/ai-sales-automation" element={<AiSalesAutomationPage />} />"
<Route path="/ai-data-visualization" element={<AiDataVisualizationPage />} />"

                {/* IT Services */}
                <Route path="/it-services" element={<ItServicesPage />} />"
<Route path="/it-infrastructure" element={<ItInfrastructurePage />} />"
<Route path="/it-support" element={<ItSupportPage />} />"
<Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />"
<Route path="/cybersecurity" element={<CybersecurityPage />} />"

                {/* Emerging Technologies */}
                <Route path="/blockchain" element={<BlockchainPage />} />"
<Route path="/quantum-computing" element={<QuantumComputingPage />} />"
<Route path="/iot-edge-computing" element={<IoTEdgeComputingPage />} />"
<Route path="/ar-vr-solutions" element={<ARVRSolutionsPage />} />"
<Route path="/autonomous-systems" element={<AutonomousSystemsPage />} />"

                {/* Micro SaaS */}
                <Route path="/micro-saas" element={<MicroSaasPage />} />"

                {/* Support Pages */}
                <Route path="/docs" element={<DocsPage />} />"
<Route path="/api-docs" element={<ApiDocsPage />} />"
<Route path="/support" element={<SupportPage />} />"
<Route path="/status" element={<StatusPage />} />"
<Route path="/consultation" element={<ConsultationPage />} />"
                {/* Additional Important Pages */}
                <Route path="/faq" element={<FaqPage />} />"
<Route path="/demo" element={<DemoPage />} />"
<Route path="/partners" element={<PartnersPage />} />"
<Route path="/community" element={<CommunityPage />} />"
<Route path="/tutorials" element={<TutorialsPage />} />"
<Route path="/compliance" element={<CompliancePage />} />"
<Route path="/business-intelligence" element={<BusinessIntelligencePage />} />"
<Route path="/enterprise" element={<EnterprisePage />} />"
<Route path="/digital-transformation" element={<DigitalTransformationPage />} />"
<Route path="/edge-computing" element={<EdgeComputingPage />} />"
              </Routes></Suspense>
</div></BrowserRouter>
</HelmetProvider></ErrorBoundary>
  )
}
export default App;
  )
}
export default App</div>;

'use client';

import { Suspense, lazy } from 'react';
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
const AIServicesPage = lazy(() => import('./ai-services/page'));

// IT Services
const CloudInfrastructurePage = lazy(() => import('./cloud-infrastructure/page'));
const CybersecuritySolutionsPage = lazy(() => import('./cybersecurity-solutions/page'));
const WebDevelopmentPage = lazy(() => import('./web-development/page'));
const MobileDevelopmentPage = lazy(() => import('./mobile-development/page'));
const APIDevelopmentPage = lazy(() => import('./api-development/page'));
const DatabaseManagementPage = lazy(() => import('./database-management/page'));
const DevOpsCICDPage = lazy(() => import('./devops-cicd/page'));
const ITSupportPage = lazy(() => import('./it-support/page'));
const DataAnalyticsBIPage = lazy(() => import('./data-analytics-bi/page'));
const CustomSoftwarePage = lazy(() => import('./custom-software/page'));
const NetworkInfrastructurePage = lazy(() => import('./network-infrastructure/page'));
const ITAssetManagementPage = lazy(() => import('./it-asset-management/page'));
const ITSecurityServicesPage = lazy(() => import('./it-security-services/page'));
const ITProjectManagementPage = lazy(() => import('./it-project-management/page'));
const CloudNativeDevelopmentPage = lazy(() => import('./cloud-native-development/page'));
const AIIntegrationServicesPage = lazy(() => import('./ai-integration-services/page'));
const BlockchainDevelopmentPage = lazy(() => import('./blockchain-development/page'));
const IoTDevelopmentPage = lazy(() => import('./iot-development/page'));
const ECommerceDevelopmentPage = lazy(() => import('./e-commerce-development/page'));
const APIDevelopmentAdvancedPage = lazy(() => import('./api-development-advanced/page'));
const DataEngineeringPage = lazy(() => import('./data-engineering/page'));
const CybersecurityAdvancedPage = lazy(() => import('./cybersecurity-advanced/page'));
const CloudMigrationAdvancedPage = lazy(() => import('./cloud-migration-advanced/page'));
const DevOpsAdvancedPage = lazy(() => import('./devops-advanced/page'));
const MachineLearningOpsPage = lazy(() => import('./machine-learning-ops/page'));
const EnterpriseIntegrationPage = lazy(() => import('./enterprise-integration/page'));
const PerformanceOptimizationPage = lazy(() => import('./performance-optimization/page'));
const DisasterRecoveryAdvancedPage = lazy(() => import('./disaster-recovery-advanced/page'));
const ComplianceAutomationPage = lazy(() => import('./compliance-automation/page'));
const CloudCostOptimizationPage = lazy(() => import('./cloud-cost-optimization/page'));
const SecurityAutomationPage = lazy(() => import('./security-automation/page'));
const DataVisualizationPage = lazy(() => import('./data-visualization/page'));
const WorkflowAutomationPage = lazy(() => import('./workflow-automation/page'));
const CloudNativeSecurityPage = lazy(() => import('./cloud-native-security/page'));

// Main App Component
function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <AccessibilityEnhancer />
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
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
                
                {/* AI Service Routes */}
                <Route path="/ai-services" element={<AIServicesPage />} />
                
                {/* IT Service Routes */}
                <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                <Route path="/cybersecurity-solutions" element={<CybersecuritySolutionsPage />} />
                <Route path="/web-development" element={<WebDevelopmentPage />} />
                <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                <Route path="/api-development" element={<APIDevelopmentPage />} />
                <Route path="/database-management" element={<DatabaseManagementPage />} />
                <Route path="/devops-cicd" element={<DevOpsCICDPage />} />
                <Route path="/it-support" element={<ITSupportPage />} />
                <Route path="/data-analytics-bi" element={<DataAnalyticsBIPage />} />
                <Route path="/custom-software" element={<CustomSoftwarePage />} />
                <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} />
                <Route path="/it-asset-management" element={<ITAssetManagementPage />} />
                <Route path="/it-security-services" element={<ITSecurityServicesPage />} />
                <Route path="/it-project-management" element={<ITProjectManagementPage />} />
                <Route path="/cloud-native-development" element={<CloudNativeDevelopmentPage />} />
                <Route path="/ai-integration-services" element={<AIIntegrationServicesPage />} />
                <Route path="/blockchain-development" element={<BlockchainDevelopmentPage />} />
                <Route path="/iot-development" element={<IoTDevelopmentPage />} />
                <Route path="/e-commerce-development" element={<ECommerceDevelopmentPage />} />
                <Route path="/api-development-advanced" element={<APIDevelopmentAdvancedPage />} />
                <Route path="/data-engineering" element={<DataEngineeringPage />} />
                <Route path="/cybersecurity-advanced" element={<CybersecurityAdvancedPage />} />
                <Route path="/cloud-migration-advanced" element={<CloudMigrationAdvancedPage />} />
                <Route path="/devops-advanced" element={<DevOpsAdvancedPage />} />
                <Route path="/machine-learning-ops" element={<MachineLearningOpsPage />} />
                <Route path="/enterprise-integration" element={<EnterpriseIntegrationPage />} />
                <Route path="/performance-optimization" element={<PerformanceOptimizationPage />} />
                <Route path="/disaster-recovery-advanced" element={<DisasterRecoveryAdvancedPage />} />
                <Route path="/compliance-automation" element={<ComplianceAutomationPage />} />
                <Route path="/cloud-cost-optimization" element={<CloudCostOptimizationPage />} />
                <Route path="/security-automation" element={<SecurityAutomationPage />} />
                <Route path="/data-visualization" element={<DataVisualizationPage />} />
                <Route path="/workflow-automation" element={<WorkflowAutomationPage />} />
                <Route path="/cloud-native-security" element={<CloudNativeSecurityPage />} />
              </Routes>
            </Suspense>
            <PerformanceMonitor />
          </div>
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import PerformanceMonitor from './components/PerformanceMonitor';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import CriticalResourcePreloader from './components/CriticalResourcePreloader';
import CacheManager from './components/CacheManager';
import AdvancedPerformanceMonitor from './components/AdvancedPerformanceMonitor';

// Lazy load pages for better performance
const HomePage = lazy(() => import("./page"));
const AboutPage = lazy(() => import("./about/page"));
const ContactPage = lazy(() => import("./contact/page"));
const ServicesPage = lazy(() => import("./services/page"));
const PricingPage = lazy(() => import("./pricing/page"));
const CaseStudiesPage = lazy(() => import("./case-studies/page"));
const BlogPage = lazy(() => import("./blog/page"));
const TeamPage = lazy(() => import("./team/page"));
const CareersPage = lazy(() => import("./careers/page"));
const PrivacyPage = lazy(() => import("./privacy/page"));
const TermsPage = lazy(() => import("./terms/page"));
const CookiesPage = lazy(() => import("./cookies/page"));

// 5G Solutions Pages
const FiveGDataAnalyticsPage = lazy(() => import("./5g-data-analytics/page"));
const FiveGEdgeComputingPage = lazy(() => import("./5g-edge-computing/page"));
const FiveGImplementationPage = lazy(() => import("./5g-implementation/page"));
const FiveGIoTSolutionsPage = lazy(() => import("./5g-iot-solutions/page"));
const FiveGMobileApplicationsPage = lazy(() => import("./5g-mobile-applications/page"));
const FiveGNetworkInfrastructurePage = lazy(() => import("./5g-network-infrastructure/page"));
const FiveGPrivateNetworksPage = lazy(() => import("./5g-private-networks/page"));
const FiveGSmartCitySolutionsPage = lazy(() => import("./5g-smart-city-solutions/page"));
const FiveGSolutionsPage = lazy(() => import("./5g-solutions/page"));

// Loading component
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
  </div>
);

// Main App Component
export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <PerformanceMonitor />
          <AccessibilityEnhancer>
            <CriticalResourcePreloader />
            <CacheManager />
            <AdvancedPerformanceMonitor />
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
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

                {/* 5G Solutions Routes */}
                <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
                <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                <Route path="/5g-iot-solutions" element={<FiveGIoTSolutionsPage />} />
                <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
                <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
                <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
                <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
              </Routes>
            </Suspense>
          </AccessibilityEnhancer>
        </ErrorBoundary>
      </BrowserRouter>
    </HelmetProvider>
  );
}
