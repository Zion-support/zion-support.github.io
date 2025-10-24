'use client';

import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
const AiCrmPage = lazy(() => import('./ai-crm/page'));
const AiVoiceSolutionsPage = lazy(() => import('./ai-voice-solutions/page'));
const AiEcommerceSolutionsPage = lazy(() => import('./ai-ecommerce-solutions/page'));
const AiHrSolutionsPage = lazy(() => import('./ai-hr-solutions/page'));
const AiWorkflowAutomationPage = lazy(() => import('./ai-workflow-automation/page'));
const AiDocumentProcessingPage = lazy(() => import('./ai-document-processing/page'));
const AiPredictiveAnalyticsPage = lazy(() => import('./ai-predictive-analytics/page'));
const AiEdgeComputingPage = lazy(() => import('./ai-edge-computing/page'));
const AiVideoAnalysisPage = lazy(() => import('./ai-video-analysis/page'));
const AiSpeechSynthesisPage = lazy(() => import('./ai-speech-synthesis/page'));
const AiRecommendationEnginePage = lazy(() => import('./ai-recommendation-engine/page'));
const AiSentimentAnalysisPage = lazy(() => import('./ai-sentiment-analysis/page'));
const AiChatbotEnterprisePage = lazy(() => import('./ai-chatbot-enterprise/page'));
const AiContentModerationPage = lazy(() => import('./ai-content-moderation/page'));
const AiPredictiveModelingPage = lazy(() => import('./ai-predictive-modeling/page'));
const AiDocumentIntelligencePage = lazy(() => import('./ai-document-intelligence/page'));
const AiConversationAnalyticsPage = lazy(() => import('./ai-conversation-analytics/page'));

// 5G Services
const FiveGSolutionsPage = lazy(() => import('./5g-solutions/page'));
const FiveGDataAnalyticsPage = lazy(() => import('./5g-data-analytics/page'));
const FiveGEdgeComputingPage = lazy(() => import('./5g-edge-computing/page'));
const FiveGImplementationPage = lazy(() => import('./5g-implementation/page'));
const FiveGIotSolutionsPage = lazy(() => import('./5g-iot-solutions/page'));
const FiveGMobileApplicationsPage = lazy(() => import('./5g-mobile-applications/page'));
const FiveGNetworkInfrastructurePage = lazy(() => import('./5g-network-infrastructure/page'));
const FiveGPrivateNetworksPage = lazy(() => import('./5g-private-networks/page'));
const FiveGSmartCitySolutionsPage = lazy(() => import('./5g-smart-city-solutions/page'));

// IT Services
const ItServicesPage = lazy(() => import('./it-services/page'));
const CloudMigrationPage = lazy(() => import('./cloud-migration/page'));
const CybersecurityPage = lazy(() => import('./cybersecurity/page'));
const MobileDevelopmentPage = lazy(() => import('./mobile-development/page'));
const WebDevelopmentPage = lazy(() => import('./web-development/page'));
const DataAnalyticsPage = lazy(() => import('./data-analytics/page'));
const MachineLearningPage = lazy(() => import('./machine-learning/page'));
const BlockchainPage = lazy(() => import('./blockchain/page'));
const IotPage = lazy(() => import('./iot/page'));
const ArVrPage = lazy(() => import('./ar-vr/page'));

// Micro SAAS
const MicroSaasPage = lazy(() => import('./micro-saas/page'));
const ProjectManagementPage = lazy(() => import('./project-management/page'));
const CustomerSupportPage = lazy(() => import('./customer-support/page'));
const InventoryManagementPage = lazy(() => import('./inventory-management/page'));
const AccountingPage = lazy(() => import('./accounting/page'));
const HrManagementPage = lazy(() => import('./hr-management/page'));
const MarketingAutomationPage = lazy(() => import('./marketing-automation/page'));
const SalesCrmPage = lazy(() => import('./sales-crm/page'));
const AnalyticsDashboardPage = lazy(() => import('./analytics-dashboard/page'));
const EcommercePage = lazy(() => import('./ecommerce/page'));

// Compliance
const CompliancePage = lazy(() => import('./compliance/page'));
const AccessibilityPage = lazy(() => import('./accessibility/page'));

const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
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
            
            {/* AI Services Routes */}
            <Route path="/ai-services" element={<AiServicesPage />} />
            <Route path="/ai-marketing" element={<AiMarketingPage />} />
            <Route path="/ai-automation" element={<AiAutomationPage />} />
            <Route path="/ai-healthcare" element={<AiHealthcarePage />} />
            <Route path="/ai-fintech" element={<AiFintechPage />} />
            <Route path="/ai-content-generation" element={<AiContentGenerationPage />} />
            <Route path="/ai-data-analytics" element={<AiDataAnalyticsPage />} />
            <Route path="/ai-cybersecurity" element={<AiCybersecurityPage />} />
            <Route path="/ai-crm" element={<AiCrmPage />} />
            <Route path="/ai-voice-solutions" element={<AiVoiceSolutionsPage />} />
            <Route path="/ai-ecommerce-solutions" element={<AiEcommerceSolutionsPage />} />
            <Route path="/ai-hr-solutions" element={<AiHrSolutionsPage />} />
            <Route path="/ai-workflow-automation" element={<AiWorkflowAutomationPage />} />
            <Route path="/ai-document-processing" element={<AiDocumentProcessingPage />} />
            <Route path="/ai-predictive-analytics" element={<AiPredictiveAnalyticsPage />} />
            <Route path="/ai-edge-computing" element={<AiEdgeComputingPage />} />
            <Route path="/ai-video-analysis" element={<AiVideoAnalysisPage />} />
            <Route path="/ai-speech-synthesis" element={<AiSpeechSynthesisPage />} />
            <Route path="/ai-recommendation-engine" element={<AiRecommendationEnginePage />} />
            <Route path="/ai-sentiment-analysis" element={<AiSentimentAnalysisPage />} />
            <Route path="/ai-chatbot-enterprise" element={<AiChatbotEnterprisePage />} />
            <Route path="/ai-content-moderation" element={<AiContentModerationPage />} />
            <Route path="/ai-predictive-modeling" element={<AiPredictiveModelingPage />} />
            <Route path="/ai-document-intelligence" element={<AiDocumentIntelligencePage />} />
            <Route path="/ai-conversation-analytics" element={<AiConversationAnalyticsPage />} />
            
            {/* 5G Services Routes */}
            <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
            <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
            <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
            <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
            <Route path="/5g-iot-solutions" element={<FiveGIotSolutionsPage />} />
            <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
            <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
            <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
            <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
            
            {/* IT Services Routes */}
            <Route path="/it-services" element={<ItServicesPage />} />
            <Route path="/cloud-migration" element={<CloudMigrationPage />} />
            <Route path="/cybersecurity" element={<CybersecurityPage />} />
            <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
            <Route path="/web-development" element={<WebDevelopmentPage />} />
            <Route path="/data-analytics" element={<DataAnalyticsPage />} />
            <Route path="/machine-learning" element={<MachineLearningPage />} />
            <Route path="/blockchain" element={<BlockchainPage />} />
            <Route path="/iot" element={<IotPage />} />
            <Route path="/ar-vr" element={<ArVrPage />} />
            
            {/* Micro SAAS Routes */}
            <Route path="/micro-saas" element={<MicroSaasPage />} />
            <Route path="/project-management" element={<ProjectManagementPage />} />
            <Route path="/customer-support" element={<CustomerSupportPage />} />
            <Route path="/inventory-management" element={<InventoryManagementPage />} />
            <Route path="/accounting" element={<AccountingPage />} />
            <Route path="/hr-management" element={<HrManagementPage />} />
            <Route path="/marketing-automation" element={<MarketingAutomationPage />} />
            <Route path="/sales-crm" element={<SalesCrmPage />} />
            <Route path="/analytics-dashboard" element={<AnalyticsDashboardPage />} />
            <Route path="/ecommerce" element={<EcommercePage />} />
            
            {/* Compliance Routes */}
            <Route path="/compliance" element={<CompliancePage />} />
            <Route path="/accessibility" element={<AccessibilityPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;