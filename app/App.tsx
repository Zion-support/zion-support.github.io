import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from './components/ErrorBoundary';
import PerformanceMonitor from './components/PerformanceMonitor';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import LoadingSpinner from './components/LoadingSpinner';

// Main Pages
const HomePage = lazy(() => import('./page'));
const AboutPage = lazy(() => import('./about/page'));
const ContactPage = lazy(() => import('./contact/page'));
const ServicesPage = lazy(() => import('./services/page'));
const CaseStudiesPage = lazy(() => import('./case-studies/page'));
const CareersPage = lazy(() => import('./careers/page'));
const SupportPage = lazy(() => import('./support/page'));
const MicroSAASPage = lazy(() => import('./micro-saas/page'));
const DemoPage = lazy(() => import('./demo/page'));
const ConsultationPage = lazy(() => import('./consultation/page'));
const DocsPage = lazy(() => import('./docs/page'));
const CommunityPage = lazy(() => import('./community/page'));
const CompliancePage = lazy(() => import('./compliance/page'));
const CookiePolicyPage = lazy(() => import('./cookie-policy/page'));
const CustomDevelopmentPage = lazy(() => import('./custom-development/page'));
const CustomSoftwarePage = lazy(() => import('./custom-software/page'));
const DataAnalyticsPage = lazy(() => import('./data-analytics/page'));
const DataCenterPage = lazy(() => import('./data-center/page'));
const DataCenterServicesPage = lazy(() => import('./data-center-services/page'));
const DataCenterSolutionsPage = lazy(() => import('./data-center-solutions/page'));
const DataEngineeringPage = lazy(() => import('./data-engineering/page'));
const DataProtectionPage = lazy(() => import('./data-protection/page'));
const DataVisualizationPage = lazy(() => import('./data-visualization/page'));
const DatabasePage = lazy(() => import('./database/page'));
const DatabaseManagementPage = lazy(() => import('./database-management/page'));
const DatabaseServicesPage = lazy(() => import('./database-services/page'));
const DevopsPage = lazy(() => import('./devops/page'));
const DevopsAdvancedPage = lazy(() => import('./devops-advanced/page'));
const DevopsCicdPage = lazy(() => import('./devops-cicd/page'));
const DevopsServicesPage = lazy(() => import('./devops-services/page'));
const DevopsSolutionsPage = lazy(() => import('./devops-solutions/page'));
const DigitalTransformationPage = lazy(() => import('./digital-transformation/page'));
const DisasterRecoveryPage = lazy(() => import('./disaster-recovery/page'));
const ECommerceDevelopmentPage = lazy(() => import('./e-commerce-development/page'));
const EdgeComputingPage = lazy(() => import('./edge-computing/page'));
const EmailMarketingAutomationPage = lazy(() => import('./email-marketing-automation/page'));
const EmailMarketingPlatformPage = lazy(() => import('./email-marketing-platform/page'));
const EmailMarketingSaasPage = lazy(() => import('./email-marketing-saas/page'));
const EmailOptimizerPage = lazy(() => import('./email-optimizer/page'));

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <PerformanceMonitor />
          <AccessibilityEnhancer />
          <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                {/* Main Pages */}
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/case-studies" element={<CaseStudiesPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/support" element={<SupportPage />} />
                <Route path="/micro-saas" element={<MicroSAASPage />} />
                <Route path="/demo" element={<DemoPage />} />
                <Route path="/consultation" element={<ConsultationPage />} />
                <Route path="/docs" element={<DocsPage />} />
                <Route path="/community" element={<CommunityPage />} />
                <Route path="/compliance" element={<CompliancePage />} />
                <Route path="/cookie-policy" element={<CookiePolicyPage />} />
                <Route path="/custom-development" element={<CustomDevelopmentPage />} />
                <Route path="/custom-software" element={<CustomSoftwarePage />} />
                <Route path="/data-analytics" element={<DataAnalyticsPage />} />
                <Route path="/data-center" element={<DataCenterPage />} />
                <Route path="/data-center-services" element={<DataCenterServicesPage />} />
                <Route path="/data-center-solutions" element={<DataCenterSolutionsPage />} />
                <Route path="/data-engineering" element={<DataEngineeringPage />} />
                <Route path="/data-protection" element={<DataProtectionPage />} />
                <Route path="/data-visualization" element={<DataVisualizationPage />} />
                <Route path="/database" element={<DatabasePage />} />
                <Route path="/database-management" element={<DatabaseManagementPage />} />
                <Route path="/database-services" element={<DatabaseServicesPage />} />
                <Route path="/devops" element={<DevopsPage />} />
                <Route path="/devops-advanced" element={<DevopsAdvancedPage />} />
                <Route path="/devops-cicd" element={<DevopsCicdPage />} />
                <Route path="/devops-services" element={<DevopsServicesPage />} />
                <Route path="/devops-solutions" element={<DevopsSolutionsPage />} />
                <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
                <Route path="/disaster-recovery" element={<DisasterRecoveryPage />} />
                <Route path="/e-commerce-development" element={<ECommerceDevelopmentPage />} />
                <Route path="/edge-computing" element={<EdgeComputingPage />} />
                <Route path="/email-marketing-automation" element={<EmailMarketingAutomationPage />} />
                <Route path="/email-marketing-platform" element={<EmailMarketingPlatformPage />} />
                <Route path="/email-marketing-saas" element={<EmailMarketingSaasPage />} />
                <Route path="/email-optimizer" element={<EmailOptimizerPage />} />
                
                {/* AI Services - Add more as needed */}
                <Route path="/ai-services" element={<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"><div className="text-white text-xl">AI Services - Coming Soon</div></div>} />
                
                {/* 404 Page */}
                <Route path="*" element={<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"><div className="text-white text-xl">Page Not Found</div></div>} />
              </Routes>
            </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;