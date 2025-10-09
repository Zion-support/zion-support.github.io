import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'));

// Core pages
const AboutPage = lazy(() => import('./about/page'));
const ServicesPage = lazy(() => import('./services/page'));
const ContactPage = lazy(() => import('./contact/page'));
const TeamPage = lazy(() => import('./team/page'));
const BlogPage = lazy(() => import('./blog/page'));
const CaseStudiesPage = lazy(() => import('./case-studies/page'));

// AI Services
const AiServicesPage = lazy(() => import('./ai-services/page'));
const AiAnalyticsPage = lazy(() => import('./ai-analytics/page'));
const AiAutomationPage = lazy(() => import('./ai-automation/page'));
const AiHealthcarePage = lazy(() => import('./ai-healthcare/page'));
const AiMarketingPage = lazy(() => import('./ai-marketing/page'));
const AiCrmPage = lazy(() => import('./ai-crm/page'));
const AiCustomerSupportPage = lazy(() => import('./ai-customer-support/page'));
const AiContentGenerationPage = lazy(() => import('./ai-content-generation/page'));
const AiDataAnalyticsPage = lazy(() => import('./ai-data-analytics/page'));
const AiProjectManagerPage = lazy(() => import('./ai-project-manager/page'));
const AiSalesAutomationPage = lazy(() => import('./ai-sales-automation/page'));
const AiWorkflowAutomationPage = lazy(() => import('./ai-workflow-automation/page'));
const AiWritingAssistantPage = lazy(() => import('./ai-writing-assistant/page'));

// IT Services
const ItServicesPage = lazy(() => import('./it-services/page'));
const ItConsultingPage = lazy(() => import('./it-consulting/page'));
const ItInfrastructurePage = lazy(() => import('./it-infrastructure/page'));
const CloudServicesPage = lazy(() => import('./cloud-services/page'));
const CybersecurityPage = lazy(() => import('./cybersecurity/page'));
const DatabaseManagementPage = lazy(() => import('./database-management/page'));
const DevOpsCicdPage = lazy(() => import('./devops-cicd/page'));
const DigitalTransformationPage = lazy(() => import('./digital-transformation/page'));
const ManagedItPage = lazy(() => import('./managed-it/page'));
const NetworkSolutionsPage = lazy(() => import('./network-solutions/page'));

// Additional pages
const PrivacyPage = lazy(() => import('./privacy/page'));
const TermsPage = lazy(() => import('./terms/page'));
const CookiesPage = lazy(() => import('./cookies/page'));
const SitemapPage = lazy(() => import('./sitemap/page'));
const FaqPage = lazy(() => import('./faq/page'));
const SupportPage = lazy(() => import('./support/page'));
const StatusPage = lazy(() => import('./status/page'));
const CompliancePage = lazy(() => import('./compliance/page'));
const GdprPage = lazy(() => import('./gdpr/page'));
const DocsPage = lazy(() => import('./docs/page'));
const ApiDocsPage = lazy(() => import('./api-docs/page'));

// Loading component
const LoadingSpinner: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4"></div>
      <p className="text-cyan-400 text-lg">Loading Zion Tech Group...</p>
    </div>
  </div>
);

// 404 Page
const NotFoundPage: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-white mb-4">404</h1>
      <p className="text-xl text-gray-300 mb-8">Page not found</p>
      <a href="/" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200">
        Go Home
      </a>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />

            {/* AI Services */}
            <Route path="/ai-services" element={<AiServicesPage />} />
            <Route path="/ai-analytics" element={<AiAnalyticsPage />} />
            <Route path="/ai-automation" element={<AiAutomationPage />} />
            <Route path="/ai-healthcare" element={<AiHealthcarePage />} />
            <Route path="/ai-marketing" element={<AiMarketingPage />} />
            <Route path="/ai-crm" element={<AiCrmPage />} />
            <Route path="/ai-customer-support" element={<AiCustomerSupportPage />} />
            <Route path="/ai-content-generation" element={<AiContentGenerationPage />} />
            <Route path="/ai-data-analytics" element={<AiDataAnalyticsPage />} />
            <Route path="/ai-project-manager" element={<AiProjectManagerPage />} />
            <Route path="/ai-sales-automation" element={<AiSalesAutomationPage />} />
            <Route path="/ai-workflow-automation" element={<AiWorkflowAutomationPage />} />
            <Route path="/ai-writing-assistant" element={<AiWritingAssistantPage />} />

            {/* IT Services */}
            <Route path="/it-services" element={<ItServicesPage />} />
            <Route path="/it-consulting" element={<ItConsultingPage />} />
            <Route path="/it-infrastructure" element={<ItInfrastructurePage />} />
            <Route path="/cloud-services" element={<CloudServicesPage />} />
            <Route path="/cybersecurity" element={<CybersecurityPage />} />
            <Route path="/database-management" element={<DatabaseManagementPage />} />
            <Route path="/devops-cicd" element={<DevOpsCicdPage />} />
            <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
            <Route path="/managed-it" element={<ManagedItPage />} />
            <Route path="/network-solutions" element={<NetworkSolutionsPage />} />

            {/* Additional Pages */}
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/cookies" element={<CookiesPage />} />
            <Route path="/sitemap" element={<SitemapPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/status" element={<StatusPage />} />
            <Route path="/compliance" element={<CompliancePage />} />
            <Route path="/gdpr" element={<GdprPage />} />
            <Route path="/docs" element={<DocsPage />} />
            <Route path="/api-docs" element={<ApiDocsPage />} />

            {/* 404 Route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
