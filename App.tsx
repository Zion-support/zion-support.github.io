'use client';

import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './app/styles/futuristic.css';

// Components
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import ErrorBoundaryWrapper from './app/components/ErrorBoundaryWrapper';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import FuturisticBackground from './app/components/FuturisticBackground';
import LoadingSpinner from './app/components/LoadingSpinner';
import Breadcrumb from './app/components/Breadcrumb';
import HomePage from './app/page';
import PerformanceOptimizer from './app/components/EnhancedPerformanceOptimizer';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import EnhancedAccessibilityWrapper from './app/components/EnhancedAccessibilityWrapper';

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import('./app/about/page'));
const ContactPage = React.lazy(() => import('./app/contact/page'));
const ServicesPage = React.lazy(() => import('./app/services/page'));
const PricingPage = React.lazy(() => import('./app/pricing/page'));
const BlogPage = React.lazy(() => import('./app/blog/page'));
const CaseStudiesPage = React.lazy(() => import('./app/case-studies/page'));
const CareersPage = React.lazy(() => import('./app/careers/page'));
const AIServicesPage = React.lazy(() => import('./app/ai-services/page'));
const ItServicesPage = React.lazy(() => import('./app/it-services/page'));
const MicroSaasPage = React.lazy(() => import('./app/micro-saas/page'));
const TutorialsPage = React.lazy(() => import('./app/tutorials/page'));
const ConsultationPage = React.lazy(() => import('./app/consultation/page'));
const DemoPage = React.lazy(() => import('./app/demo/page'));
const SupportPage = React.lazy(() => import('./app/support/page'));
const PrivacyPage = React.lazy(() => import('./app/privacy/page'));
const TermsPage = React.lazy(() => import('./app/terms/page'));
const CookiesPage = React.lazy(() => import('./app/cookies/page'));
const SitemapPage = React.lazy(() => import('./app/sitemap/page'));

// AI Service Pages
const AiAnalyticsPage = React.lazy(() => import('./app/ai-analytics/page'));
const AiAutomationPage = React.lazy(() => import('./app/ai-automation/page'));
const AiChatbotBuilderPage = React.lazy(() => import('./app/ai-chatbot-builder/page'));
const AiCybersecurityPage = React.lazy(() => import('./app/ai-cybersecurity/page'));
const AiCrmPage = React.lazy(() => import('./app/ai-crm/page'));
const AiDataAnalyticsPage = React.lazy(() => import('./app/ai-data-analytics/page'));
const AiHealthcarePage = React.lazy(() => import('./app/ai-healthcare/page'));
const AiFinancialServicesPage = React.lazy(() => import('./app/ai-financial-services/page'));
const AiComputerVisionPage = React.lazy(() => import('./app/ai-computer-vision/page'));
const AiVoiceSolutionsPage = React.lazy(() => import('./app/ai-voice-solutions/page'));
const AiEcommerceSolutionsPage = React.lazy(() => import('./app/ai-ecommerce-solutions/page'));
const AiHrSolutionsPage = React.lazy(() => import('./app/ai-hr-solutions/page'));
const AiWorkflowAutomationPage = React.lazy(() => import('./app/ai-workflow-automation/page'));
const AiDocumentProcessingPage = React.lazy(() => import('./app/ai-document-processing/page'));
const AiPredictiveAnalyticsPage = React.lazy(() => import('./app/ai-predictive-analytics/page'));
const AiEdgeComputingPage = React.lazy(() => import('./app/ai-edge-computing/page'));
const AiVideoAnalysisPage = React.lazy(() => import('./app/ai-video-analysis/page'));
const AiSpeechSynthesisPage = React.lazy(() => import('./app/ai-speech-synthesis/page'));
const AiRecommendationEnginePage = React.lazy(() => import('./app/ai-recommendation-engine/page'));
const AiSentimentAnalysisPage = React.lazy(() => import('./app/ai-sentiment-analysis/page'));
const AiChatbotEnterprisePage = React.lazy(() => import('./app/ai-chatbot-enterprise/page'));
const AiContentModerationPage = React.lazy(() => import('./app/ai-content-moderation/page'));
const AiPredictiveModelingPage = React.lazy(() => import('./app/ai-predictive-modeling/page'));
const AiDocumentIntelligencePage = React.lazy(() => import('./app/ai-document-intelligence/page'));
const AiConversationAnalyticsPage = React.lazy(() => import('./app/ai-conversation-analytics/page'));
const AiSupplyChainAiPage = React.lazy(() => import('./app/ai-supply-chain-ai/page'));
const AiHealthcareDiagnosticsPage = React.lazy(() => import('./app/ai-healthcare-diagnostics/page'));

// 5G Service Pages
const FiveGDataAnalyticsPage = React.lazy(() => import('./app/5g-data-analytics/page'));
const FiveGEdgeComputingPage = React.lazy(() => import('./app/5g-edge-computing/page'));
const FiveGImplementationPage = React.lazy(() => import('./app/5g-implementation/page'));
const FiveGIotSolutionsPage = React.lazy(() => import('./app/5g-iot-solutions/page'));
const FiveGMobileApplicationsPage = React.lazy(() => import('./app/5g-mobile-applications/page'));
const FiveGNetworkInfrastructurePage = React.lazy(() => import('./app/5g-network-infrastructure/page'));
const FiveGPrivateNetworksPage = React.lazy(() => import('./app/5g-private-networks/page'));
const FiveGSmartCitySolutionsPage = React.lazy(() => import('./app/5g-smart-city-solutions/page'));
const FiveGSolutionsPage = React.lazy(() => import('./app/5g-solutions/page'));

// Main App Component
function App() {
  return (
    <HelmetProvider></HelmetProvider>
      <ErrorBoundaryWrapper></ErrorBoundaryWrapper>
        <Router></Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
            <FuturisticBackground /></FuturisticBackground>
            <Navigation /></Navigation>
            <Breadcrumb /></Breadcrumb>
            <Suspense fallback={<LoadingSpinner />}></Suspense>
              <Routes></Routes>
                <Route path="/" element={<HomePage />} /></Route>
                <Route path="/about" element={<AboutPage />} /></Route>
                <Route path="/contact" element={<ContactPage />} /></Route>
                <Route path="/services" element={<ServicesPage />} /></Route>
                <Route path="/pricing" element={<PricingPage />} /></Route>
                <Route path="/blog" element={<BlogPage />} /></Route>
                <Route path="/case-studies" element={<CaseStudiesPage />} /></Route>
                <Route path="/careers" element={<CareersPage />} /></Route>
                <Route path="/ai-services" element={<AIServicesPage />} /></Route>
                <Route path="/it-services" element={<ItServicesPage />} /></Route>
                <Route path="/micro-saas" element={<MicroSaasPage />} /></Route>
                <Route path="/tutorials" element={<TutorialsPage />} /></Route>
                <Route path="/consultation" element={<ConsultationPage />} /></Route>
                <Route path="/demo" element={<DemoPage />} /></Route>
                <Route path="/support" element={<SupportPage />} /></Route>
                <Route path="/privacy" element={<PrivacyPage />} /></Route>
                <Route path="/terms" element={<TermsPage />} /></Route>
                <Route path="/cookies" element={<CookiesPage />} /></Route>
                <Route path="/sitemap" element={<SitemapPage />} />
                
                {/* AI Service Routes */}</Route>
                <Route path="/ai-analytics" element={<AiAnalyticsPage />} /></Route>
                <Route path="/ai-automation" element={<AiAutomationPage />} /></Route>
                <Route path="/ai-chatbot-builder" element={<AiChatbotBuilderPage />} /></Route>
                <Route path="/ai-cybersecurity" element={<AiCybersecurityPage />} /></Route>
                <Route path="/ai-crm" element={<AiCrmPage />} /></Route>
                <Route path="/ai-data-analytics" element={<AiDataAnalyticsPage />} /></Route>
                <Route path="/ai-healthcare" element={<AiHealthcarePage />} /></Route>
                <Route path="/ai-financial-services" element={<AiFinancialServicesPage />} /></Route>
                <Route path="/ai-computer-vision" element={<AiComputerVisionPage />} /></Route>
                <Route path="/ai-voice-solutions" element={<AiVoiceSolutionsPage />} /></Route>
                <Route path="/ai-ecommerce-solutions" element={<AiEcommerceSolutionsPage />} /></Route>
                <Route path="/ai-hr-solutions" element={<AiHrSolutionsPage />} /></Route>
                <Route path="/ai-workflow-automation" element={<AiWorkflowAutomationPage />} /></Route>
                <Route path="/ai-document-processing" element={<AiDocumentProcessingPage />} /></Route>
                <Route path="/ai-predictive-analytics" element={<AiPredictiveAnalyticsPage />} /></Route>
                <Route path="/ai-edge-computing" element={<AiEdgeComputingPage />} /></Route>
                <Route path="/ai-video-analysis" element={<AiVideoAnalysisPage />} /></Route>
                <Route path="/ai-speech-synthesis" element={<AiSpeechSynthesisPage />} /></Route>
                <Route path="/ai-recommendation-engine" element={<AiRecommendationEnginePage />} /></Route>
                <Route path="/ai-sentiment-analysis" element={<AiSentimentAnalysisPage />} /></Route>
                <Route path="/ai-chatbot-enterprise" element={<AiChatbotEnterprisePage />} /></Route>
                <Route path="/ai-content-moderation" element={<AiContentModerationPage />} /></Route>
                <Route path="/ai-predictive-modeling" element={<AiPredictiveModelingPage />} /></Route>
                <Route path="/ai-document-intelligence" element={<AiDocumentIntelligencePage />} /></Route>
                <Route path="/ai-conversation-analytics" element={<AiConversationAnalyticsPage />} /></Route>
                <Route path="/ai-supply-chain-ai" element={<AiSupplyChainAiPage />} /></Route>
                <Route path="/ai-healthcare-diagnostics" element={<AiHealthcareDiagnosticsPage />} />
                
                {/* 5G Service Routes */}</Route>
                <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} /></Route>
                <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} /></Route>
                <Route path="/5g-implementation" element={<FiveGImplementationPage />} /></Route>
                <Route path="/5g-iot-solutions" element={<FiveGIotSolutionsPage />} /></Route>
                <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} /></Route>
                <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} /></Route>
                <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} /></Route>
                <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} /></Route>
                <Route path="/5g-solutions" element={<FiveGSolutionsPage />} /></Route>
              </Routes>
            </Suspense>
            <Footer /></Footer>
            <PerformanceOptimizer /></PerformanceOptimizer>
            <AccessibilityEnhancer></AccessibilityEnhancer>
              <EnhancedAccessibilityWrapper></EnhancedAccessibilityWrapper>
                <div></div>
              </EnhancedAccessibilityWrapper>
            </AccessibilityEnhancer>
            <PerformanceMonitor /></PerformanceMonitor>
          </div>
        </Router>
      </ErrorBoundaryWrapper>
    </HelmetProvider>
  );
}

export default App;