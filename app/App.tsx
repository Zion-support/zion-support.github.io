<<<<<<< HEAD
"use client";
import React from 'react';

<<<<<<< HEAD
const App = () => {;
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          App
        </h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600">
            This page is under construction. Please check back later.
          </p>
        </div>
            </div>
          </div>
  );
};;

export default App;
=======
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from "./components/ErrorBoundary";
import PerformanceMonitor from "./components/PerformanceMonitor";
import AccessibilityEnhancer from "./components/AccessibilityEnhancer";
import LoadingSpinner from "./components/LoadingSpinner";
import CriticalResourcePreloader from "./components/CriticalResourcePreloader";
import CacheManager from "./components/CacheManager";
import AdvancedPerformanceMonitor from "./components/AdvancedPerformanceMonitor";
import { Helmet } from 'react-helmet-async';
import { Home } from 'lucide-react';
import { Network } from 'lucide-react';
import { Monitor } from 'lucide-react';
"use client";
// Lazy load pages for better performance
const HomePage = lazy(() => import("./page"));
const AboutPage = lazy(() => import("./about/page"));
const ContactPage = lazy(() => import("./contact/page"));
const ServicesPage = lazy(() => import("./services/page"));
const PricingPage = lazy(() => import("./pricing/page"));
const CaseStudiesPage = lazy(() => import("./case-studies/page"));
const BlogPage = lazy(() => import("./blog/page"));
const TeamPage = lazy(() => import("./team/page"));
const CareersPage = lazy(() => import("./careers/page"));
const PrivacyPage = lazy(() => import("./privacy/page"));
const TermsPage = lazy(() => import("./terms/page"));
const CookiesPage = lazy(() => import("./cookies/page"));
// 5G Solutions Pages
const FiveGDataAnalyticsPage = lazy(() => import("./5g-data-analytics/page"));
const FiveGEdgeComputingPage = lazy(() => import("./5g-edge-computing/page"));
const FiveGImplementationPage = lazy(() => import("./5g-implementation/page"));
const FiveGIoTSolutionsPage = lazy(() => import("./5g-iot-solutions/page"));
const FiveGMobileApplicationsPage = lazy(
  () => import("./5g-mobile-applications/page"),
);
const FiveGNetworkInfrastructurePage = lazy(
  () => import("./5g-network-infrastructure/page"),
);
const FiveGPrivateNetworksPage = lazy(
  () => import("./5g-private-networks/page"),
);
const FiveGSmartCitySolutionsPage = lazy(
  () => import("./5g-smart-city-solutions/page"),
);
const FiveGSolutionsPage = lazy(() => import("./5g-solutions/page"));
// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-900">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
  </div>
);

// Main App Component
export default function App() {
  return (
    <HelmetProvider>
<<<<<<< HEAD
      <BrowserRouter>
        <ErrorBoundary>
          <PerformanceMonitor />
          <AccessibilityEnhancer>
            <CriticalResourcePreloader />
            <CacheManager />
            <AdvancedPerformanceMonitor />
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
=======
'use client';

import React, { Suspense, memo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './globals.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './page';
import { PageLoader } from './components/LoadingStates';
import ErrorBoundary from './components/ErrorBoundary';
import SEOHead from './components/EnhancedSEOHead';
import SkipLink from './components/SkipLink';
import Breadcrumb from './components/Breadcrumb';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import EnhancedAccessibility from './components/EnhancedAccessibility';
import { usePerformanceMonitor } from './hooks/usePerformanceMonitor';
import { AnalyticsProvider } from './components/AnalyticsProvider';
import PerformanceMonitor from './components/PerformanceMonitor';

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import('./about/page'));
const ServicesPage = React.lazy(() => import('./services/page'));
const ContactPage = React.lazy(() => import('./contact/page'));
const BlogPage = React.lazy(() => import('./blog/page'));
const CaseStudiesPage = React.lazy(() => import('./case-studies/page'));
const PrivacyPage = React.lazy(() => import('./privacy/page'));
const TermsPage = React.lazy(() => import('./terms/page'));
const SitemapPage = React.lazy(() => import('./sitemap/page'));
const DocsPage = React.lazy(() => import('./docs/page'));
const ApiDocsPage = React.lazy(() => import('./api-docs/page'));
const SupportPage = React.lazy(() => import('./support/page'));
const StatusPage = React.lazy(() => import('./status/page'));
const DemoPage = React.lazy(() => import('./demo/page'));
const ConsultationPage = React.lazy(() => import('./consultation/page'));

// Structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Zion Tech Group",
  "url": "https://ziontechgroup.com",
  "logo": "https://ziontechgroup.com/logo.png",
  "description": "Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services. Transform your business with our advanced AI capabilities.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "364 E Main St STE 1008",
    "addressLocality": "Middletown",
    "addressRegion": "DE",
    "postalCode": "19709",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-302-464-0950",
    "contactType": "customer service",
    "email": "kleber@ziontechgroup.com"
  },
  "sameAs": [
    "https://linkedin.com/company/zion-tech-group",
    "https://twitter.com/ziontechgroup",
    "https://github.com/zion-tech-group"
  ],
  "foundingDate": "2020",
  "numberOfEmployees": "50-100",
  "industry": "Information Technology"
};

// Performance monitoring wrapper
const AppWithPerformanceMonitoring = memo(() => {
  usePerformanceMonitor();
  
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <SkipLink />
        <SEOHead 
          title="Zion Tech Group - AI-Powered Enterprise Solutions"
          description="Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services. Transform your business with our advanced AI capabilities."
          structuredData={structuredData}
        />
        <Navigation />
        <Breadcrumb />
        <main id="main-content" className="relative">
          <Suspense fallback={<PageLoader />}>
            <Routes>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
<<<<<<< HEAD
              <Route path="/team" element={<TeamPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/cookies" element={<CookiesPage />} />
              {/* 5G Solutions Routes */}
              <Route
                path="/5g-data-analytics"
                element={<FiveGDataAnalyticsPage />}
              />
              <Route
                path="/5g-edge-computing"
                element={<FiveGEdgeComputingPage />}
              />
              <Route
                path="/5g-implementation"
                element={<FiveGImplementationPage />}
              />
              <Route
                path="/5g-iot-solutions"
                element={<FiveGIoTSolutionsPage />}
              />
              <Route
                path="/5g-mobile-applications"
                element={<FiveGMobileApplicationsPage />}
              />
              <Route
                path="/5g-network-infrastructure"
                element={<FiveGNetworkInfrastructurePage />}
              />
              <Route
                path="/5g-private-networks"
                element={<FiveGPrivateNetworksPage />}
              />
              <Route
                path="/5g-smart-city-solutions"
                element={<FiveGSmartCitySolutionsPage />}
              />
              <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
              </Routes>
            </Suspense>
          </AccessibilityEnhancer>
        </ErrorBoundary>

      </BrowserRouter>
    </HelmetProvider>
=======
      <ErrorBoundary>
        <BrowserRouter>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<HomePage />} />
              <Route path="/test" element={<TestPage />} />
=======
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/sitemap" element={<SitemapPage />} />
              <Route path="/docs" element={<DocsPage />} />
              <Route path="/api-docs" element={<ApiDocsPage />} />
              <Route path="/support" element={<SupportPage />} />
              <Route path="/status" element={<StatusPage />} />
              <Route path="/demo" element={<DemoPage />} />
              <Route path="/consultation" element={<ConsultationPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <PerformanceMonitor />
      </div>
    </Router>
  );
});

AppWithPerformanceMonitoring.displayName = 'AppWithPerformanceMonitoring';

// Main App component
const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <AnalyticsProvider>
          <AppWithPerformanceMonitoring />
          <PerformanceOptimizer />
          <AccessibilityEnhancer />
          <EnhancedAccessibility />
        </AnalyticsProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc

              {/* AI Services */} />
              <Route path="/ai-services" element={<AIServicesPage />} /> />
              <Route path="/ai-marketing" element={<AIMarketingPage />} /> />
              <Route path="/ai-automation" element={<AIAutomationPage />} /> />
              <Route path="/ai-healthcare" element={<AIHealthcarePage />} /> />
              <Route path="/ai-fintech" element={<AIFintechPage />} /> />
              <Route path="/ai-content-generation" element={<AIContentGenerationPage />} /> />
              <Route path="/ai-data-analytics" element={<AIDataAnalyticsPage />} /> />
              <Route path="/ai-cybersecurity" element={<AICybersecurityPage />} /> />
              <Route path="/ai-crm" element={<AICRMPage />} /> />
              <Route path="/ai-voice-solutions" element={<AIVoiceSolutionsPage />} /> />
              <Route path="/ai-ecommerce-solutions" element={<AIEcommerceSolutionsPage />} /> />
              <Route path="/ai-hr-solutions" element={<AIHRSolutionsPage />} /> />
              <Route path="/ai-workflow-automation" element={<AIWorkflowAutomationPage />} /> />
              <Route path="/ai-document-processing" element={<AIDocumentProcessingPage />} /> />
              <Route path="/ai-predictive-analytics" element={<AIPredictiveAnalyticsPage />} /> />
              <Route path="/ai-edge-computing" element={<AIEdgeComputingPage />} /> />
              <Route path="/ai-video-analysis" element={<AIVideoAnalysisPage />} /> />
              <Route path="/ai-speech-synthesis" element={<AISpeechSynthesisPage />} /> />
              <Route path="/ai-recommendation-engine" element={<AIRecommendationEnginePage />} /> />
              <Route path="/ai-sentiment-analysis" element={<AISentimentAnalysisPage />} /> />
              <Route path="/ai-chatbot-enterprise" element={<AIChatbotEnterprisePage />} /> />
              <Route path="/ai-content-moderation" element={<AIContentModerationPage />} /> />
              <Route path="/ai-predictive-modeling" element={<AIPredictiveModelingPage />} /> />
              <Route path="/ai-document-intelligence" element={<AIDocumentIntelligencePage />} /> />
              <Route path="/ai-conversation-analytics" element={<AIConversationAnalyticsPage />} /> />
              <Route path="/ai-supply-chain-ai" element={<AISupplyChainAIPage />} /> />
              <Route path="/ai-healthcare-diagnostics" element={<AIHealthcareDiagnosticsPage />} /> />
              <Route path="/ai-financial-forecasting" element={<AIFinancialForecastingPage />} /> />
              <Route path="/ai-iot-analytics" element={<AIIoTAnalyticsPage />} /> />
              <Route path="/ai-conversational-ai" element={<AIConversationalAIPage />} /> />
              <Route path="/ai-automated-testing" element={<AIAutomatedTestingPage />} /> />
              <Route path="/ai-knowledge-management" element={<AIKnowledgeManagementPage />} /> />
              <Route path="/ai-customer-churn" element={<AICustomerChurnPage />} /> />
              <Route path="/ai-automated-reporting" element={<AIAutomatedReportingPage />} /> />
              <Route path="/ai-voice-assistant" element={<AIVoiceAssistantPage />} /> />
              <Route path="/ai-content-generation-pro" element={<AIContentGenerationProPage />} /> />
              <Route path="/ai-accounting-assistant" element={<AIAccountingAssistantPage />} /> />
              <Route path="/ai-cybersecurity-monitor-pro" element={<AICybersecurityMonitorProPage />} />

              {/* IT Services */} />
              <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} /> />
              <Route path="/cybersecurity-solutions" element={<CybersecuritySolutionsPage />} /> />
              <Route path="/web-development" element={<WebDevelopmentPage />} /> />
              <Route path="/mobile-development" element={<MobileDevelopmentPage />} /> />
              <Route path="/api-development" element={<APIDevelopmentPage />} /> />
              <Route path="/database-management" element={<DatabaseManagementPage />} /> />
              <Route path="/devops-cicd" element={<DevOpsCICDPage />} /> />
              <Route path="/it-support" element={<ITSupportPage />} /> />
              <Route path="/data-analytics-bi" element={<DataAnalyticsBIPage />} /> />
              <Route path="/custom-software" element={<CustomSoftwarePage />} /> />
              <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} /> />
              <Route path="/it-asset-management" element={<ITAssetManagementPage />} /> />
              <Route path="/it-security-services" element={<ITSecurityServicesPage />} /> />
              <Route path="/it-project-management" element={<ITProjectManagementPage />} /> />
              <Route path="/cloud-native-development" element={<CloudNativeDevelopmentPage />} /> />
              <Route path="/ai-integration-services" element={<AIIntegrationServicesPage />} /> />
              <Route path="/blockchain-development" element={<BlockchainDevelopmentPage />} /> />
              <Route path="/iot-development" element={<IoTDevelopmentPage />} /> />
              <Route path="/e-commerce-development" element={<ECommerceDevelopmentPage />} /> />
              <Route path="/api-development-advanced" element={<APIDevelopmentAdvancedPage />} /> />
              <Route path="/data-engineering" element={<DataEngineeringPage />} /> />
              <Route path="/cybersecurity-advanced" element={<CybersecurityAdvancedPage />} /> />
              <Route path="/cloud-migration-advanced" element={<CloudMigrationAdvancedPage />} /> />
              <Route path="/devops-advanced" element={<DevOpsAdvancedPage />} /> />
              <Route path="/machine-learning-ops" element={<MachineLearningOpsPage />} /> />
              <Route path="/enterprise-integration" element={<EnterpriseIntegrationPage />} /> />
              <Route path="/performance-optimization" element={<PerformanceOptimizationPage />} /> />
              <Route path="/disaster-recovery-advanced" element={<DisasterRecoveryAdvancedPage />} /> />
              <Route path="/compliance-automation" element={<ComplianceAutomationPage />} /> />
              <Route path="/cloud-cost-optimization" element={<CloudCostOptimizationPage />} /> />
              <Route path="/security-automation" element={<SecurityAutomationPage />} /> />
              <Route path="/data-visualization" element={<DataVisualizationPage />} /> />
              <Route path="/workflow-automation" element={<WorkflowAutomationPage />} /> />
              <Route path="/cloud-native-security" element={<CloudNativeSecurityPage />} />

              {/* Micro SAAS Pages */} />
              <Route path="/zion-analytics-pro" element={<ZionAnalyticsProPage />} /> />
              <Route path="/zion-chat-ai" element={<ZionChatAIPage />} /> />
              <Route path="/zion-security-shield" element={<ZionSecurityShieldPage />} /> />
              <Route path="/zion-cloud-vault" element={<ZionCloudVaultPage />} /> />
              <Route path="/zion-content-studio" element={<ZionContentStudioPage />} /> />
              <Route path="/zion-crm-intelligence" element={<ZionCRMIntelligencePage />} /> />
              <Route path="/zion-data-sync" element={<ZionDataSyncPage />} /> />
              <Route path="/zion-lead-magnet" element={<ZionLeadMagnetPage />} /> />
              <Route path="/zion-project-master" element={<ZionProjectMasterPage />} /> />
              <Route path="/zion-email-automation" element={<ZionEmailAutomationPage />} /> />
              <Route path="/zion-social-scheduler" element={<ZionSocialSchedulerPage />} /> />
              <Route path="/zion-workflow-automation" element={<ZionWorkflowAutomationPage />} /> />
              <Route path="/zion-ai-content-moderation" element={<ZionAIContentModerationPage />} /> />
              <Route path="/zion-ai-predictive-maintenance" element={<ZionAIPredictiveMaintenancePage />} /> />
              <Route path="/zion-ai-fraud-detector" element={<ZionAIFraudDetectorPage />} /> />
              <Route path="/zion-ai-supply-chain-optimizer" element={<ZionAISupplyChainOptimizerPage />} /> />
              <Route path="/zion-ai-document-ai" element={<ZionAIDocumentAIPage />} /> />
              <Route path="/zion-ai-customer-service-pro" element={<ZionAICustomerServiceProPage />} /> />
              <Route path="/zion-ai-contract-analyzer" element={<ZionAIContractAnalyzerPage />} /> />
              <Route path="/zion-ai-translator-pro" element={<ZionAITranslatorProPage />} /> />
              <Route path="/zion-invoice-genius" element={<ZionInvoiceGeniusPage />} /> />
              <Route path="/zion-inventory-smart" element={<ZionInventorySmartPage />} /> />
              <Route path="/zion-compliance-manager" element={<ZionComplianceManagerPage />} /> />
              <Route path="/zion-performance-monitor" element={<ZionPerformanceMonitorPage />} /> />
              <Route path="/zion-ai-code-reviewer" element={<ZionAICodeReviewerPage />} /> />
              <Route path="/zion-ai-survey-builder" element={<ZionAISurveyBuilderPage />} /> />
              <Route path="/zion-ai-marketing-automation" element={<ZionAIMarketingAutomationPage />} /> />
              <Route path="/zion-ai-accounting-assistant" element={<ZionAIAccountingAssistantPage />} /> />
              <Route path="/zion-ai-seo-optimizer" element={<ZionAISEOOptimizerPage />} /> />
              <Route path="/zion-ai-data-cleaner" element={<ZionAIDataCleanerPage />} /> />
              <Route path="/zion-customer-insights" element={<ZionCustomerInsightsPage />} />

              {/* 5G Solutions Pages */} />
              <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} /> />
              <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} /> />
              <Route path="/5g-implementation" element={<FiveGImplementationPage />} /> />
              <Route path="/5g-iot-solutions" element={<FiveGIoTSolutionsPage />} /> />
              <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} /> />
              <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} /> />
              <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} /> />
              <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} /> />
              <Route path="/5g-solutions" element={<FiveGSolutionsPage />} /> />
            
                    </Suspense>
        
      
    
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0314
