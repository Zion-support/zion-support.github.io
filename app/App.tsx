'use client'
import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import ErrorBoundary from './components/ErrorBoundary'
import PerformanceMonitor from './components/PerformanceMonitor'
import AccessibilityEnhancer from './components/AccessibilityEnhancer'
import LoadingSpinner from './components/LoadingSpinner'
// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'))
const AboutPage = lazy(() => import('./about/page'))
const ContactPage = lazy(() => import('./contact/page'))
const ServicesPage = lazy(() => import('./services/page'))
const PricingPage = lazy(() => import('./pricing/page'))
const CaseStudiesPage = lazy(() => import('./case-studies/page'))
const CareersPage = lazy(() => import('./careers/page'))
const AIServicesPage = lazy(() => import('./ai-services/page'))
const ItServicesPage = lazy(() => import('./it-services/page'))
const MicroSaasPage = lazy(() => import('./micro-saas/page'))
const TutorialsPage = lazy(() => import('./tutorials/page'))
const ConsultationPage = lazy(() => import('./consultation/page'))
const DemoPage = lazy(() => import('./demo/page'))
const SupportPage = lazy(() => import('./support/page'))
const PrivacyPage = lazy(() => import('./privacy/page'))
const TermsPage = lazy(() => import('./terms/page'))
const CookiesPage = lazy(() => import('./cookies/page'))
const SitemapPage = lazy(() => import('./sitemap/page'))
// AI Service Pages
const AiAnalyticsPage = lazy(() => import('./ai-analytics/page'))
const AiAutomationPage = lazy(() => import('./ai-automation/page'))
const AiChatbotBuilderPage = lazy(() => import('./ai-chatbot-builder/page'))
const AiCybersecurityPage = lazy(() => import('./ai-cybersecurity/page'))
const AiCrmPage = lazy(() => import('./ai-crm/page'))
const AiDataAnalyticsPage = lazy(() => import('./ai-data-analytics/page'))
const AiHealthcarePage = lazy(() => import('./ai-healthcare/page'))
const AiFinancialServicesPage = lazy(() => import('./ai-financial-services/page'))
const AiComputerVisionPage = lazy(() => import('./ai-computer-vision/page'))
const AiVoiceSolutionsPage = lazy(() => import('./ai-voice-solutions/page'))
const AiEcommerceSolutionsPage = lazy(() => import('./ai-ecommerce-solutions/page'))
const AiHrSolutionsPage = lazy(() => import('./ai-hr-solutions/page'))
const AiWorkflowAutomationPage = lazy(() => import('./ai-workflow-automation/page'))
const AiDocumentProcessingPage = lazy(() => import('./ai-document-processing/page'))
const AiPredictiveAnalyticsPage = lazy(() => import('./ai-predictive-analytics/page'))
const AiEdgeComputingPage = lazy(() => import('./ai-edge-computing/page'))
const AiVideoAnalysisPage = lazy(() => import('./ai-video-analysis/page'))
const AiSpeechSynthesisPage = lazy(() => import('./ai-speech-synthesis/page'))
const AiRecommendationEnginePage = lazy(() => import('./ai-recommendation-engine/page'))
const AiSentimentAnalysisPage = lazy(() => import('./ai-sentiment-analysis/page'))
const AiChatbotEnterprisePage = lazy(() => import('./ai-chatbot-enterprise/page'))
const AiContentModerationPage = lazy(() => import('./ai-content-moderation/page'))
const AiPredictiveModelingPage = lazy(() => import('./ai-predictive-modeling/page'))
const AiDocumentIntelligencePage = lazy(() => import('./ai-document-intelligence/page'))
const AiConversationAnalyticsPage = lazy(() => import('./ai-conversation-analytics/page'))
const AiSupplyChainAiPage = lazy(() => import('./ai-supply-chain-ai/page'))
const AiHealthcareDiagnosticsPage = lazy(() => import('./ai-healthcare-diagnostics/page'))
// 5G Service Pages
const FiveGDataAnalyticsPage = lazy(() => import('./5g-data-analytics/page'))
const FiveGEdgeComputingPage = lazy(() => import('./5g-edge-computing/page'))
const FiveGImplementationPage = lazy(() => import('./5g-implementation/page'))
const FiveGIotSolutionsPage = lazy(() => import('./5g-iot-solutions/page'))
const FiveGMobileApplicationsPage = lazy(() => import('./5g-mobile-applications/page'))
const FiveGNetworkInfrastructurePage = lazy(() => import('./5g-network-infrastructure/page'))
const FiveGPrivateNetworksPage = lazy(() => import('./5g-private-networks/page'))
const FiveGSmartCitySolutionsPage = lazy(() => import('./5g-smart-city-solutions/page'))
const FiveGSolutionsPage = lazy(() => import('./5g-solutions/page'))
// Main App Component
function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <BrowserRouter>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/case-studies" element={<CaseStudiesPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/ai-services" element={<AIServicesPage />} />
                <Route path="/it-services" element={<ItServicesPage />} />
                <Route path="/micro-saas" element={<MicroSaasPage />} />
                <Route path="/tutorials" element={<TutorialsPage />} />
                <Route path="/consultation" element={<ConsultationPage />} />
                <Route path="/demo" element={<DemoPage />} />
                <Route path="/support" element={<SupportPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/cookies" element={<CookiesPage />} />
                <Route path="/sitemap" element={<SitemapPage />} />
                {/* AI Service Routes */}
                <Route path="/ai-analytics" element={<AiAnalyticsPage />} />
                <Route path="/ai-automation" element={<AiAutomationPage />} />
                <Route path="/ai-chatbot-builder" element={<AiChatbotBuilderPage />} />
                <Route path="/ai-cybersecurity" element={<AiCybersecurityPage />} />
                <Route path="/ai-crm" element={<AiCrmPage />} />
                <Route path="/ai-data-analytics" element={<AiDataAnalyticsPage />} />
                <Route path="/ai-healthcare" element={<AiHealthcarePage />} />
                <Route path="/ai-financial-services" element={<AiFinancialServicesPage />} />
                <Route path="/ai-computer-vision" element={<AiComputerVisionPage />} />
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
                <Route path="/ai-supply-chain-ai" element={<AiSupplyChainAiPage />} />
                <Route path="/ai-healthcare-diagnostics" element={<AiHealthcareDiagnosticsPage />} />
                {/* 5G Service Routes */}
                <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
                <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
                <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                <Route path="/5g-iot-solutions" element={<FiveGIotSolutionsPage />} />
                <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
                <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
                <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
                <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />
                <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
              </Routes>
            </Suspense>
            <PerformanceMonitor />
            <AccessibilityEnhancer />
          </div>
        </BrowserRouter>
      </ErrorBoundary>
    </HelmetProvider>
  )
}
export default App
