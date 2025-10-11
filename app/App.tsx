'use client';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import { HelmetProvider  } from 'react-helmet-async';
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

// Additional AI Services
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

// IT Services
const CloudServicesPage = lazy(() => import('./cloud-services/page'));
const CybersecurityPage = lazy(() => import('./cybersecurity/page'));
const BlockchainPage = lazy(() => import('./blockchain/page'));
const CustomDevelopmentPage = lazy(() => import('./custom-development/page'));
const ApiDevelopmentPage = lazy(() => import('./api-development/page'));
const MobileAppDevelopmentPage = lazy(() => import('./mobile-app-development/page'));
const WebDevelopmentPage = lazy(() => import('./web-development/page'));
const DataAnalyticsPage = lazy(() => import('./data-analytics/page'));
const BusinessIntelligencePage = lazy(() => import('./business-intelligence/page'));
const DigitalTransformationPage = lazy(() => import('./digital-transformation/page'));

// Additional Important Pages
const FaqPage = lazy(() => import('./faq/page'));
const DemoPage = lazy(() => import('./demo/page'));
const PartnersPage = lazy(() => import('./partners/page'));
const CommunityPage = lazy(() => import('./community/page'));
const TutorialsPage = lazy(() => import('./tutorials/page'));
const CompliancePage = lazy(() => import('./compliance/page'));
const EnterprisePage = lazy(() => import('./enterprise/page'));
const EdgeComputingPage = lazy(() => import('./edge-computing/page'));

// Loading component
const AppLoadingSpinner = () => (
  <LoadingSpinner /></LoadingSpinner>
);

const App: React.FC = () => >{return (
    <ErrorBoundary ></ErrorBoundary>
      <HelmetProvider ></HelmetProvider>
        <BrowserRouter ></BrowserRouter>
          <div className="App">
            <PerformanceMonitor /></PerformanceMonitor>
            <AccessibilityEnhancer /></AccessibilityEnhancer>
            <Suspense fallback={<AppLoadingSpinner />}
              <Routes ></Routes>
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