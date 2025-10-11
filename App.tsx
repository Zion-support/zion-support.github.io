'use client';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from './app/components/ErrorBoundary';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import LoadingSpinner from './app/components/LoadingSpinner';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./app/page'));
const AboutPage = lazy(() => import('./app/about/page'));
const ContactPage = lazy(() => import('./app/contact/page'));
const ServicesPage = lazy(() => import('./app/services/page'));
const PricingPage = lazy(() => import('./app/pricing/page'));
const CaseStudiesPage = lazy(() => import('./app/case-studies/page'));
const BlogPage = lazy(() => import('./app/blog/page'));
const TeamPage = lazy(() => import('./app/team/page'));
const CareersPage = lazy(() => import('./app/careers/page'));
const PrivacyPage = lazy(() => import('./app/privacy/page'));
const TermsPage = lazy(() => import('./app/terms/page'));
const CookiesPage = lazy(() => import('./app/cookies/page'));

// AI Services
const AiServicesPage = lazy(() => import('./app/ai-services/page'));
const AiMarketingPage = lazy(() => import('./app/ai-marketing/page'));
const AiAutomationPage = lazy(() => import('./app/ai-automation/page'));
const AiHealthcarePage = lazy(() => import('./app/ai-healthcare/page'));
const AiFintechPage = lazy(() => import('./app/ai-fintech/page'));
const AiContentGenerationPage = lazy(() => import('./app/ai-content-generation/page'));
const AiDataAnalyticsPage = lazy(() => import('./app/ai-data-analytics/page'));
const AiCybersecurityPage = lazy(() => import('./app/ai-cybersecurity/page'));
const AiWorkflowAutomationPage = lazy(() => import('./app/ai-workflow-automation/page'));
const AiCustomerSupportPage = lazy(() => import('./app/ai-customer-support/page'));
const AiSalesAutomationPage = lazy(() => import('./app/ai-sales-automation/page'));
const AiDataVisualizationPage = lazy(() => import('./app/ai-data-visualization/page'));

// Additional AI Services
const AiAnalyticsPage = lazy(() => import('./app/ai-analytics/page'));
const AiChatbotBuilderPage = lazy(() => import('./app/ai-chatbot-builder/page'));
const AiCrmPage = lazy(() => import('./app/ai-crm/page'));
const AiComputerVisionPage = lazy(() => import('./app/ai-computer-vision/page'));
const AiDocumentProcessingPage = lazy(() => import('./app/ai-document-processing/page'));
const AiPredictiveAnalyticsPage = lazy(() => import('./app/ai-predictive-analytics/page'));
const AiEdgeComputingPage = lazy(() => import('./app/ai-edge-computing/page'));
const AiVoiceAssistantPage = lazy(() => import('./app/ai-voice-assistant/page'));
const AiRecommendationEnginePage = lazy(() => import('./app/ai-recommendation-engine/page'));
const AiHrPage = lazy(() => import('./app/ai-hr/page'));
const AiEcommerceSolutionsPage = lazy(() => import('./app/ai-ecommerce-solutions/page'));
const AiFinancialServicesPage = lazy(() => import('./app/ai-financial-services/page'));

// IT Services
const CloudServicesPage = lazy(() => import('./app/cloud-services/page'));
const CybersecurityPage = lazy(() => import('./app/cybersecurity/page'));
const BlockchainPage = lazy(() => import('./app/blockchain/page'));
const CustomDevelopmentPage = lazy(() => import('./app/custom-development/page'));
const ApiDevelopmentPage = lazy(() => import('./app/api-development/page'));
const MobileAppDevelopmentPage = lazy(() => import('./app/mobile-app-development/page'));
const WebDevelopmentPage = lazy(() => import('./app/web-development/page'));
const DataAnalyticsPage = lazy(() => import('./app/data-analytics/page'));
const BusinessIntelligencePage = lazy(() => import('./app/business-intelligence/page'));
const DigitalTransformationPage = lazy(() => import('./app/digital-transformation/page'));

// Additional Important Pages
const FaqPage = lazy(() => import('./app/faq/page'));
const DemoPage = lazy(() => import('./app/demo/page'));
const PartnersPage = lazy(() => import('./app/partners/page'));
const CommunityPage = lazy(() => import('./app/community/page'));
const TutorialsPage = lazy(() => import('./app/tutorials/page'));
const CompliancePage = lazy(() => import('./app/compliance/page'));
const EnterprisePage = lazy(() => import('./app/enterprise/page'));
const EdgeComputingPage = lazy(() => import('./app/edge-computing/page'));

// Loading component
const AppLoadingSpinner = () => (
  <LoadingSpinner />
);

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <div className="App">
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
                <Route path="/ai-analytics" element={<AiAnalyticsPage />} />
                <Route path="/ai-chatbot-builder" element={<AiChatbotBuilderPage />} />
                <Route path="/ai-crm" element={<AiCrmPage />} />
                <Route path="/ai-computer-vision" element={<AiComputerVisionPage />} />
                <Route path="/ai-document-processing" element={<AiDocumentProcessingPage />} />
                <Route path="/ai-predictive-analytics" element={<AiPredictiveAnalyticsPage />} />
                <Route path="/ai-edge-computing" element={<AiEdgeComputingPage />} />
                <Route path="/ai-voice-assistant" element={<AiVoiceAssistantPage />} />
                <Route path="/ai-recommendation-engine" element={<AiRecommendationEnginePage />} />
                <Route path="/ai-hr" element={<AiHrPage />} />
                <Route path="/ai-ecommerce-solutions" element={<AiEcommerceSolutionsPage />} />
                <Route path="/ai-financial-services" element={<AiFinancialServicesPage />} />

                {/* IT Services */}
                <Route path="/cloud-services" element={<CloudServicesPage />} />
                <Route path="/cybersecurity" element={<CybersecurityPage />} />
                <Route path="/blockchain" element={<BlockchainPage />} />
                <Route path="/custom-development" element={<CustomDevelopmentPage />} />
                <Route path="/api-development" element={<ApiDevelopmentPage />} />
                <Route path="/mobile-app-development" element={<MobileAppDevelopmentPage />} />
                <Route path="/web-development" element={<WebDevelopmentPage />} />
                <Route path="/data-analytics" element={<DataAnalyticsPage />} />
                <Route path="/business-intelligence" element={<BusinessIntelligencePage />} />
                <Route path="/digital-transformation" element={<DigitalTransformationPage />} />

                {/* Additional Pages */}
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/demo" element={<DemoPage />} />
                <Route path="/partners" element={<PartnersPage />} />
                <Route path="/community" element={<CommunityPage />} />
                <Route path="/tutorials" element={<TutorialsPage />} />
                <Route path="/compliance" element={<CompliancePage />} />
                <Route path="/enterprise" element={<EnterprisePage />} />
                <Route path="/edge-computing" element={<EdgeComputingPage />} />
              </Routes>
            </Suspense>
          </div>
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;