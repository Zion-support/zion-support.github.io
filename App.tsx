import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './app/styles/futuristic.css';
import './app/styles/futuristic-enhanced.css';
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import HomePage from './app/page';
import PageLoader from './app/components/LoadingStates';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import ErrorBoundary from './app/components/ErrorBoundary';

// Lazy load pages for better performance
const AboutPage = lazy(() => import('./app/about/page'));
const ContactPage = lazy(() => import('./app/contact/page'));
const ServicesPage = lazy(() => import('./app/services/page'));
const PricingPage = lazy(() => import('./app/pricing/page'));
const BlogPage = lazy(() => import('./app/blog/page'));
const CaseStudiesPage = lazy(() => import('./app/case-studies/page'));
const TeamPage = lazy(() => import('./app/team/page'));
const CareersPage = lazy(() => import('./app/careers/page'));
const PrivacyPage = lazy(() => import('./app/privacy/page'));
const TermsPage = lazy(() => import('./app/terms/page'));
const CookiesPage = lazy(() => import('./app/cookies/page'));
const SitemapPage = lazy(() => import('./app/sitemap/page'));

// AI Services
const AIServicesPage = lazy(() => import('./app/ai-services/page'));

// Micro SAAS Pages
const ZionAnalyticsProPage = lazy(() => import('./app/zion-analytics-pro/page'));
const ZionChatAiPage = lazy(() => import('./app/zion-chat-ai/page'));
const ZionSecurityShieldPage = lazy(() => import('./app/zion-security-shield/page'));
const ZionCloudVaultPage = lazy(() => import('./app/zion-cloud-vault/page'));
const ZionContentStudioPage = lazy(() => import('./app/zion-content-studio/page'));
const ZionCrmIntelligencePage = lazy(() => import('./app/zion-crm-intelligence/page'));
const ZionDataSyncPage = lazy(() => import('./app/zion-data-sync/page'));
const ZionLeadMagnetPage = lazy(() => import('./app/zion-lead-magnet/page'));
const ZionProjectMasterPage = lazy(() => import('./app/zion-project-master/page'));
const ZionEmailAutomationPage = lazy(() => import('./app/zion-email-automation/page'));
const ZionSocialSchedulerPage = lazy(() => import('./app/zion-social-scheduler/page'));
const ZionWorkflowAutomationPage = lazy(() => import('./app/zion-workflow-automation/page'));
const ZionAiContentModerationPage = lazy(() => import('./app/zion-ai-content-moderation/page'));
const ZionAiPredictiveMaintenancePage = lazy(() => import('./app/zion-ai-predictive-maintenance/page'));
const ZionAiFraudDetectorPage = lazy(() => import('./app/zion-ai-fraud-detector/page'));
const ZionAiSupplyChainOptimizerPage = lazy(() => import('./app/zion-ai-supply-chain-optimizer/page'));
const ZionAiDocumentAiPage = lazy(() => import('./app/zion-ai-document-ai/page'));
const ZionAiCustomerServiceProPage = lazy(() => import('./app/zion-ai-customer-service-pro/page'));
const ZionAiContractAnalyzerPage = lazy(() => import('./app/zion-ai-contract-analyzer/page'));
const ZionAiTranslatorProPage = lazy(() => import('./app/zion-ai-translator-pro/page'));
const ZionInvoiceGeniusPage = lazy(() => import('./app/zion-invoice-genius/page'));
const ZionInventorySmartPage = lazy(() => import('./app/zion-inventory-smart/page'));
const ZionComplianceManagerPage = lazy(() => import('./app/zion-compliance-manager/page'));
const ZionPerformanceMonitorPage = lazy(() => import('./app/zion-performance-monitor/page'));
const ZionAiCodeReviewerPage = lazy(() => import('./app/zion-ai-code-reviewer/page'));
const ZionAiSurveyBuilderPage = lazy(() => import('./app/zion-ai-survey-builder/page'));
const ZionAiMarketingAutomationPage = lazy(() => import('./app/zion-ai-marketing-automation/page'));
const ZionAiAccountingAssistantPage = lazy(() => import('./app/zion-ai-accounting-assistant/page'));
const ZionAiSeoOptimizerPage = lazy(() => import('./app/zion-ai-seo-optimizer/page'));
const ZionAiDataCleanerPage = lazy(() => import('./app/zion-ai-data-cleaner/page'));
const ZionCustomerInsightsPage = lazy(() => import('./app/zion-customer-insights/page'));

// 5G Solutions Pages
const FiveGDataAnalyticsPage = lazy(() => import('./app/5g-data-analytics/page'));
const FiveGEdgeComputingPage = lazy(() => import('./app/5g-edge-computing/page'));
const FiveGImplementationPage = lazy(() => import('./app/5g-implementation/page'));
const FiveGIotSolutionsPage = lazy(() => import('./app/5g-iot-solutions/page'));
const FiveGMobileApplicationsPage = lazy(() => import('./app/5g-mobile-applications/page'));
const FiveGNetworkInfrastructurePage = lazy(() => import('./app/5g-network-infrastructure/page'));
const FiveGPrivateNetworksPage = lazy(() => import('./app/5g-private-networks/page'));
const FiveGSmartCitySolutionsPage = lazy(() => import('./app/5g-smart-city-solutions/page'));
const FiveGSolutionsPage = lazy(() => import('./app/5g-solutions/page'));

// Main App Component
function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <PerformanceMonitor>
          <BrowserRouter>
            <div className="app">
              <Navigation />
              <main>
                <Suspense fallback={<PageLoader />}>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/pricing" element={<PricingPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/case-studies" element={<CaseStudiesPage />} />
                    <Route path="/careers" element={<CareersPage />} />
                    <Route path="/ai-services" element={<AIServicesPage />} />
                    <Route path="/privacy" element={<PrivacyPage />} />
                    <Route path="/terms" element={<TermsPage />} />
                    <Route path="/cookies" element={<CookiesPage />} />
                    <Route path="/sitemap" element={<SitemapPage />} />
                    
                    {/* Micro SAAS Routes */}
                    <Route path="/zion-analytics-pro" element={<ZionAnalyticsProPage />} />
                    <Route path="/zion-chat-ai" element={<ZionChatAIPage />} />
                    <Route path="/zion-security-shield" element={<ZionSecurityShieldPage />} />
                    <Route path="/zion-cloud-vault" element={<ZionCloudVaultPage />} />
                    <Route path="/zion-content-studio" element={<ZionContentStudioPage />} />
                    <Route path="/zion-crm-intelligence" element={<ZionCRMIntelligencePage />} />
                    <Route path="/zion-data-sync" element={<ZionDataSyncPage />} />
                    <Route path="/zion-lead-magnet" element={<ZionLeadMagnetPage />} />
                    <Route path="/zion-project-master" element={<ZionProjectMasterPage />} />
                    <Route path="/zion-email-automation" element={<ZionEmailAutomationPage />} />
                    <Route path="/zion-social-scheduler" element={<ZionSocialSchedulerPage />} />
                    <Route path="/zion-workflow-automation" element={<ZionWorkflowAutomationPage />} />
                    <Route path="/zion-ai-content-moderation" element={<ZionAIContentModerationPage />} />
                    <Route path="/zion-ai-predictive-maintenance" element={<ZionAIPredictiveMaintenancePage />} />
                    <Route path="/zion-ai-fraud-detector" element={<ZionAIFraudDetectorPage />} />
                    <Route path="/zion-ai-supply-chain-optimizer" element={<ZionAISupplyChainOptimizerPage />} />
                    <Route path="/zion-ai-document-ai" element={<ZionAIDocumentAIPage />} />
                    <Route path="/zion-ai-customer-service-pro" element={<ZionAICustomerServiceProPage />} />
                    <Route path="/zion-ai-contract-analyzer" element={<ZionAIContractAnalyzerPage />} />
                    <Route path="/zion-ai-translator-pro" element={<ZionAITranslatorProPage />} />
                    <Route path="/zion-invoice-genius" element={<ZionInvoiceGeniusPage />} />
                    <Route path="/zion-inventory-smart" element={<ZionInventorySmartPage />} />
                    <Route path="/zion-compliance-manager" element={<ZionComplianceManagerPage />} />
                    <Route path="/zion-performance-monitor" element={<ZionPerformanceMonitorPage />} />
                    <Route path="/zion-ai-code-reviewer" element={<ZionAICodeReviewerPage />} />
                    <Route path="/zion-ai-survey-builder" element={<ZionAISurveyBuilderPage />} />
                    <Route path="/zion-ai-marketing-automation" element={<ZionAIMarketingAutomationPage />} />
                    <Route path="/zion-ai-accounting-assistant" element={<ZionAIAccountingAssistantPage />} />
                    <Route path="/zion-ai-seo-optimizer" element={<ZionAISEOOptimizerPage />} />
                    <Route path="/zion-ai-data-cleaner" element={<ZionAIDataCleanerPage />} />
                    <Route path="/zion-customer-insights" element={<ZionCustomerInsightsPage />} />
                    
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
              </main>
              <Footer />
            </div>
          </BrowserRouter>
        </PerformanceMonitor>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;