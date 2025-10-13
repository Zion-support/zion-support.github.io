                {/* AI Services */}
                <Route path="/ai-services"
<Route path="/ai-marketing"
<Route path="/ai-automation"
<Route path="/ai-healthcare"
<Route path="/ai-fintech"
<Route path="/ai-content-generation"
<Route path="/ai-data-analytics"
<Route path="/ai-cybersecurity"
<Route path="/ai-workflow-automation"
<Route path="/ai-customer-support"
<Route path="/ai-sales-automation"
<Route path="/ai-data-visualization"

                {/* IT Services */}
                <Route path="/it-services"
<Route path="/it-infrastructure"
<Route path="/it-support"
<Route path="/cloud-infrastructure"
<Route path="/cybersecurity"

                {/* Emerging Technologies */}
                <Route path="/blockchain"
<Route path="/quantum-computing"
<Route path="/iot-edge-computing"
<Route path="/ar-vr-solutions"
<Route path="/autonomous-systems"

                {/* Micro SaaS */}
                <Route path="/micro-saas"

                {/* Support Pages */}
                <Route path="/docs"
<Route path="/api-docs"
<Route path="/support"
<Route path="/status"
<Route path="/consultation"
                {/* Additional Important Pages */}
                <Route path="/faq"
<Route path="/demo"
<Route path="/partners"
<Route path="/community"
<Route path="/tutorials"
<Route path="/compliance"
<Route path="/business-intelligence"
<Route path="/enterprise"
<Route path="/digital-transformation"
<Route path="/edge-computing"
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
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" element={<HomePage />} />
                <Route path="/about"/contact" element={<ContactPage />} />
                <Route path=" element={<ServicesPage />} />
                <Route path="/pricing"/case-studies" element={<CaseStudiesPage />} />
                <Route path=" element={<BlogPage />} />
                <Route path="/team"/careers" element={<CareersPage />} />
                <Route path=" element={<PrivacyPage />} />
                <Route path="/terms"/cookies" element={<CookiesPage />} />
                
                {/* AI Service Routes */}
                <Route path=" element={<AIServicesPage />} />
                
                {/* IT Service Routes */}
                <Route path="/cloud-infrastructure"/cybersecurity-solutions" element={<CybersecuritySolutionsPage />} />
                <Route path=" element={<WebDevelopmentPage />} />
                <Route path="/mobile-development"/api-development" element={<APIDevelopmentPage />} />
                <Route path=" element={<DatabaseManagementPage />} />
                <Route path="/devops-cicd"/it-support" element={<ITSupportPage />} />
                <Route path=" element={<DataAnalyticsBIPage />} />
                <Route path="/custom-software"/network-infrastructure" element={<NetworkInfrastructurePage />} />
                <Route path=" element={<ITAssetManagementPage />} />
                <Route path="/it-security-services"/it-project-management" element={<ITProjectManagementPage />} />
                <Route path=" element={<CloudNativeDevelopmentPage />} />
                <Route path="/ai-integration-services"/blockchain-development" element={<BlockchainDevelopmentPage />} />
                <Route path=" element={<IoTDevelopmentPage />} />
                <Route path="/e-commerce-development"/api-development-advanced" element={<APIDevelopmentAdvancedPage />} />
                <Route path=" element={<DataEngineeringPage />} />
                <Route path="/cybersecurity-advanced"/cloud-migration-advanced" element={<CloudMigrationAdvancedPage />} />
                <Route path=" element={<DevOpsAdvancedPage />} />
                <Route path="/machine-learning-ops"/enterprise-integration" element={<EnterpriseIntegrationPage />} />
                <Route path=" element={<PerformanceOptimizationPage />} />
                <Route path="/disaster-recovery-advanced"/compliance-automation" element={<ComplianceAutomationPage />} />
                <Route path=" element={<CloudCostOptimizationPage />} />
                <Route path="/security-automation"/data-visualization" element={<DataVisualizationPage />} />
                <Route path=" element={<WorkflowAutomationPage />} />
                <Route path="/cloud-native-security"./page"));
const AboutPage = lazy(() => import("));
const ContactPage = lazy(() => import("./contact/page"./services/page"));
const PricingPage = lazy(() => import("));
const CaseStudiesPage = lazy(() => import("./case-studies/page"./blog/page"));
const TeamPage = lazy(() => import("));
const CareersPage = lazy(() => import("./careers/page"./privacy/page"));
const TermsPage = lazy(() => import("));
const CookiesPage = lazy(() => import("./cookies/page"./5 g-data-analytics/page"));
const FiveGEdgeComputingPage = lazy(() => import("));
const FiveGImplementationPage = lazy(() => import("./5 g-implementation/page"./5 g-iot-solutions/page"));
const FiveGMobileApplicationsPage = lazy(() => import("));
const FiveGNetworkInfrastructurePage = lazy(() => import("./5 g-network-infrastructure/page"./5 g-private-networks/page"));
const FiveGSmartCitySolutionsPage = lazy(() => import("));
const FiveGSolutionsPage = lazy(() => import("./5 g-solutions/page"flex items-center justify-center min-h-screen"animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"/" element={<HomePage />} />
                <Route path=" element={<AboutPage />} />
                <Route path="/contact"/services" element={<ServicesPage />} />
                <Route path=" element={<PricingPage />} />
                <Route path="/case-studies"/blog" element={<BlogPage />} />
                <Route path=" element={<TeamPage />} />
                <Route path="/careers"/privacy" element={<PrivacyPage />} />
                <Route path=" element={<TermsPage />} />
                <Route path="/cookies"/5 g-solutions" element={<FiveGSolutionsPage />} />
                <Route path=" element={<FiveGDataAnalyticsPage />} />
                <Route path="/5 g-edge-computing"/5 g-implementation" element={<FiveGImplementationPage />} />
                <Route path=" element={<FiveGIoTSolutionsPage />} />
                <Route path="/5 g-mobile-applications"/5 g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
                <Route path=" element={<FiveGPrivateNetworksPage />} />
                <Route path="/5 g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
              </Routes>
            </Suspense>
          </AccessibilityEnhancer>
        </ErrorBoundary>
      </BrowserRouter>
    </HelmetProvider>
  );
