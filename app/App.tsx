'use client'
import React, { Suspense, lazy } from 'react'
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
const ItInfrastructurePage = lazy(() => import('./it-infrastructure/page'));
const ItSupportPage = lazy(() => import('./it-support/page'));

// Additional Important Pages
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

// Loading component
const AppLoadingSpinner = () => (
  <LoadingSpinner />
)

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <PerformanceMonitor />
        <AccessibilityEnhancer />
        <BrowserRouter>
          <Suspense fallback={<AppLoadingSpinner />}>
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
              
              {/* AI Services Routes */}
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
              
              {/* IT Services Routes */}
              <Route path="/it-services" element={<ItServicesPage />} />
              <Route path="/it-infrastructure" element={<ItInfrastructurePage />} />
              <Route path="/it-support" element={<ItSupportPage />} />
              
              {/* Additional Pages */}
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/demo" element={<DemoPage />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/tutorials" element={<TutorialsPage />} />
              <Route path="/compliance" element={<CompliancePage />} />
              <Route path="/business-intelligence" element={<BusinessIntelligencePage />} />
              <Route path="/enterprise" element={<EnterprisePage />} />
              <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
              <Route path="/edge-computing" element={<EdgeComputingPage />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;
