<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AppPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>App - Zion Tech Group</title>
        <meta name="description" content="Advanced App solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            App
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is under development. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
}
=======
            <PerformanceMonitor />
<AccessibilityEnhancer />
<Suspense fallback={<AppLoadingSpinner />}>
<Routes>
                {/* Main Pages */}
                <Route path="/" element={<HomePage />} />"
<Route path="/about" element={<AboutPage />} />"
<Route path="/contact" element={<ContactPage />} />"
<Route path="/services" element={<ServicesPage />} />"
<Route path="/pricing" element={<PricingPage />} />"
<Route path="/case-studies" element={<CaseStudiesPage />} />"
<Route path="/blog" element={<BlogPage />} />"
<Route path="/team" element={<TeamPage />} />"
<Route path="/careers" element={<CareersPage />} />"
<Route path="/privacy" element={<PrivacyPage />} />"
<Route path="/terms" element={<TermsPage />} />"
<Route path="/cookies" element={<CookiesPage />} />"

>>>>>>> origin/main
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

>>>>>>> origin/main
                {/* IT Services */}
                <Route path="/it-services" element={<ItServicesPage />} />"
<Route path="/it-infrastructure" element={<ItInfrastructurePage />} />"
<Route path="/it-support" element={<ItSupportPage />} />"
<Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />"
<Route path="/cybersecurity" element={<CybersecurityPage />} />"

>>>>>>> origin/main
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
>>>>>>> origin/main
>>>>>>> origin/main
              </Routes></Suspense>
</div></BrowserRouter>
</HelmetProvider></ErrorBoundary>
  )
}
export default App;
  )
}
export default App</div>;
>>>>>>> cursor/delete-records-a75e
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-a070
