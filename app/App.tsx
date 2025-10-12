import React, { Suspense, lazy } from 'react';
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
const AiSupplyChainAiPage = lazy(() => import('./ai-supply-chain-ai/page'));
const AiHealthcareDiagnosticsPage = lazy(() => import('./ai-healthcare-diagnostics/page'));
const AiFinancialForecastingPage = lazy(() => import('./ai-financial-forecasting/page'));
const AiIotAnalyticsPage = lazy(() => import('./ai-iot-analytics/page'));
const AiConversationalAiPage = lazy(() => import('./ai-conversational-ai/page'));
const AiAutomatedTestingPage = lazy(() => import('./ai-automated-testing/page'));
const AiKnowledgeManagementPage = lazy(() => import('./ai-knowledge-management/page'));
const AiCustomerChurnPage = lazy(() => import('./ai-customer-churn/page'));
const AiAutomatedReportingPage = lazy(() => import('./ai-automated-reporting/page'));
const AiVoiceAssistantPage = lazy(() => import('./ai-voice-assistant/page'));
const AiContentGenerationProPage = lazy(() => import('./ai-content-generation-pro/page'));
const AiAccountingAssistantPage = lazy(() => import('./ai-accounting-assistant/page'));
const AiCybersecurityMonitorProPage = lazy(() => import('./ai-cybersecurity-monitor-pro/page'));

// Micro SAAS Pages
const ZionAnalyticsProPage = lazy(() => import('./zion-analytics-pro/page'));
const ZionChatAiPage = lazy(() => import('./zion-chat-ai/page'));
const ZionSecurityShieldPage = lazy(() => import('./zion-security-shield/page'));
const ZionCloudVaultPage = lazy(() => import('./zion-cloud-vault/page'));
const ZionContentStudioPage = lazy(() => import('./zion-content-studio/page'));
const ZionCrmIntelligencePage = lazy(() => import('./zion-crm-intelligence/page'));

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
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
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/cookies" element={<CookiesPage />} />
                
                {/* AI Service Routes */}
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
                <Route path="/ai-supply-chain-ai" element={<AiSupplyChainAiPage />} />
                <Route path="/ai-healthcare-diagnostics" element={<AiHealthcareDiagnosticsPage />} />
                <Route path="/ai-financial-forecasting" element={<AiFinancialForecastingPage />} />
                <Route path="/ai-iot-analytics" element={<AiIotAnalyticsPage />} />
                <Route path="/ai-conversational-ai" element={<AiConversationalAiPage />} />
                <Route path="/ai-automated-testing" element={<AiAutomatedTestingPage />} />
                <Route path="/ai-knowledge-management" element={<AiKnowledgeManagementPage />} />
                <Route path="/ai-customer-churn" element={<AiCustomerChurnPage />} />
                <Route path="/ai-automated-reporting" element={<AiAutomatedReportingPage />} />
                <Route path="/ai-voice-assistant" element={<AiVoiceAssistantPage />} />
                <Route path="/ai-content-generation-pro" element={<AiContentGenerationProPage />} />
                <Route path="/ai-accounting-assistant" element={<AiAccountingAssistantPage />} />
                <Route path="/ai-cybersecurity-monitor-pro" element={<AiCybersecurityMonitorProPage />} />
                
                {/* Micro SAAS Routes */}
                <Route path="/zion-analytics-pro" element={<ZionAnalyticsProPage />} />
                <Route path="/zion-chat-ai" element={<ZionChatAiPage />} />
                <Route path="/zion-security-shield" element={<ZionSecurityShieldPage />} />
                <Route path="/zion-cloud-vault" element={<ZionCloudVaultPage />} />
                <Route path="/zion-content-studio" element={<ZionContentStudioPage />} />
                <Route path="/zion-crm-intelligence" element={<ZionCrmIntelligencePage />} />
              </Routes>
            </Suspense>
            <PerformanceMonitor />
            <AccessibilityEnhancer />
          </div>
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;