import React, {Suspense, lazy}from 'react';
import {BrowserRouter, Routes, Route}}from 'react-router-dom';
import {HelmetProvider}}from 'react-helmet-async';
import ErrorBoundary from './components/ErrorBoundary';
import PerformanceMonitor from './components/PerformanceMonitor';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import AdvancedErrorBoundary from './components/AdvancedErrorBoundary';
import AdvancedSEOOptimizer from './components/AdvancedSEOOptimizer';
import AdvancedPerformanceMonitor from './components/AdvancedPerformanceMonitor';
import SEOEnhancer from './components/SEOEnhancer';
import PerformanceDashboard from './components/PerformanceDashboard';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load pages
const HomePage = lazy(() => import('./page').catch(() => ({ default: () => <div>Error loading page</div> })));

// AI Services;
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
const App: React.FC = () => {,
    return(<ErrorBoundary>)
      <HelmetProvider />
        <BrowserRouter>
          <div className="App">
            <PerformanceMonitor />
            <AccessibilityEnhancer />
            <Suspense fallback={<AppLoadingSpinner />}>
              <Routes>
                {/* Main Pages */}
                <Route path="/" element={<HomePage />} />

    <HelmetProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <PerformanceMonitor />
          <AccessibilityEnhancer>
            <CriticalResourcePreloader />
            <CacheManager />
            <AdvancedPerformanceMonitor />
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
              <Route path="/demo" element={<DemoPage />} />
              <Route path="/support" element={<SupportPage />} />
              <Route path="/consultation" element={<ConsultationPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/press" element={<PressPage />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="/docs" element={<DocsPage />} />
              <Route path="/api" element={<ApiPage />} />
              <Route path="/tutorials" element={<TutorialsPage />} />
              <Route path="/webinars" element={<WebinarsPage />} />
              <Route path="/whitepapers" element={<WhitepapersPage />} />
              <Route path="/accessibility" element={<AccessibilityPage />} />
              <Route path="/security" element={<SecurityPage />} />
              <Route path="/sitemap" element={<SitemapPage />} />

              {/* AI Services Routes */}
              <Route path="/ai-services" element={<AIServicesPage />} />
              <Route path="/ai-analytics-dashboard-pro" element={<AIAnalyticsDashboardProPage />} />
              <Route path="/ai-cybersecurity-suite-pro" element={<AICybersecuritySuiteProPage />} />
              <Route path="/ai-content-generation-pro" element={<AIContentGenerationProPage />} />
              <Route path="/ai-customer-support-chatbot" element={<AICustomerSupportChatbotPage />} />
              <Route path="/ai-code-assistant-pro" element={<AICodeAssistantProPage />} />
              <Route path="/ai-business-intelligence-pro" element={<AIBusinessIntelligenceProPage />} />
              <Route path="/ai-automation-platform" element={<AIAutomationPlatformPage />} />
              <Route path="/ai-data-analytics-pro" element={<AIDataAnalyticsProPage />} />
              <Route path="/ai-marketing-automation" element={<AIMarketingAutomationPage />} />
              <Route path="/ai-hr-recruitment-pro" element={<AIHRRecruitmentProPage />} />
              <Route path="/ai-financial-analysis" element={<AIFinancialAnalysisPage />} />
              <Route path="/ai-supply-chain-optimizer" element={<AISupplyChainOptimizerPage />} />
              <Route path="/ai-voice-assistant-pro" element={<AIVoiceAssistantProPage />} />
              <Route path="/ai-image-recognition-pro" element={<AIImageRecognitionProPage />} />
              <Route path="/ai-predictive-maintenance" element={<AIPredictiveMaintenancePage />} />
              <Route path="/ai-sentiment-analysis-pro" element={<AISentimentAnalysisProPage />} />
              <Route path="/ai-recommendation-engine" element={<AIRecommendationEnginePage />} />
              <Route path="/ai-fraud-detection-pro" element={<AIFraudDetectionProPage />} />
              <Route path="/ai-language-translation" element={<AILanguageTranslationPage />} />
              <Route path="/ai-chatbot-enterprise" element={<AIChatbotEnterprisePage />} />
              <Route path="/ai-data-mining-pro" element={<AIDataMiningProPage />} />
              <Route path="/ai-video-analysis" element={<AIVideoAnalysisPage />} />
              <Route path="/ai-time-series-forecasting" element={<AITimeSeriesForecastingPage />} />
              <Route path="/ai-nlp-text-analysis" element={<AINLPTextAnalysisPage />} />

              {/* IT Services Routes */}
              <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
              <Route path="/blockchain-development" element={<BlockchainDevelopmentPage />} />
              <Route path="/iot-solutions" element={<IoTSolutionsPage />} />
              <Route path="/ar-vr-development" element={<ARVRDevelopmentPage />} />
              <Route path="/devops-solutions" element={<DevOpsSolutionsPage />} />
              <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
              <Route path="/web-development" element={<WebDevelopmentPage />} />
              <Route path="/it-support" element={<ITSupportPage />} />
              <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} />
              <Route path="/it-consulting" element={<ITConsultingPage />} />
              <Route path="/cybersecurity-audit" element={<CybersecurityAuditPage />} />
              <Route path="/data-center-services" element={<DataCenterServicesPage />} />
              <Route path="/asset-management" element={<AssetManagementPage />} />

              {/* Micro SAAS Routes */}
              <Route path="/micro-saas" element={<MicroSAASPage />} />
              <Route path="/zion-analytics-pro" element={<ZionAnalyticsProPage />} />
              <Route path="/zion-security-shield" element={<ZionSecurityShieldPage />} />
              <Route path="/zion-cloud-vault" element={<ZionCloudVaultPage />} />
              <Route path="/zion-ai-inventory-manager" element={<ZionAIInventoryManagerPage />} />
              <Route path="/zion-hr-assistant-pro" element={<ZionHRAssistantProPage />} />
              <Route path="/zion-ai-accounting-suite" element={<ZionAIAccountingSuitePage />} />
              <Route path="/zion-ecommerce-optimizer" element={<ZionEcommerceOptimizerPage />} />
              <Route path="/zion-ai-customer-insights" element={<ZionAICustomerInsightsPage />} />
              <Route path="/zion-ai-lead-scoring" element={<ZionAILeadScoringPage />} />
              <Route path="/zion-ai-document-processor" element={<ZionAIDocumentProcessorPage />} />
              <Route path="/zion-ai-social-listener" element={<ZionAISocialListenerPage />} />
              <Route path="/zion-ai-email-optimizer" element={<ZionAIEmailOptimizerPage />} />
              <Route path="/zion-ai-meeting-assistant" element={<ZionAIMeetingAssistantPage />} />
              <Route path="/zion-ai-expense-tracker" element={<ZionAIExpenseTrackerPage />} />
              <Route path="/zion-ai-survey-builder" element={<ZionAISurveyBuilderPage />} />
              <Route path="/zion-ai-chatbot-builder" element={<ZionAIChatbotBuilderPage />} />
              <Route path="/zion-ai-workflow-automation" element={<ZionAIWorkflowAutomationPage />} />
              <Route path="/zion-ai-seo-optimizer" element={<ZionAISEOOptimizerPage />} />
              <Route path="/zion-ai-data-warehouse" element={<ZionAIDataWarehousePage />} />
              <Route path="/zion-ai-mobile-app-builder" element={<ZionAIMobileAppBuilderPage />} />
              <Route path="/zion-ai-api-manager" element={<ZionAIAPIManagerPage />} />
              <Route path="/zion-ai-backup-manager" element={<ZionAIBackupManagerPage />} />
              <Route path="/zion-ai-testing-automation" element={<ZionAITestingAutomationPage />} />

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
          </AccessibilityEnhancer>
        </ErrorBoundary>
      </BrowserRouter>
    </HelmetProvider>
// Import proper utilities
import { performanceOptimizer, lazyLoadImages, preloadCriticalResources, collectPerformanceMetrics } from './utils/performanceOptimizer';
import { logger } from './utils/logger';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize global error handling
    logger.info('App initialized', 'App');

    // Initialize performance monitoring
    lazyLoadImages();
    preloadCriticalResources();
    performanceOptimizer.init();
    
    // Initialize Web Vitals monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      const pageLoadMetrics = collectPerformanceMetrics();
      const metrics = performanceOptimizer.getMetrics();
      if (pageLoadMetrics) {
        logger.info('Performance metrics collected', 'App', { metrics: pageLoadMetrics });
      }
      if (metrics) {
        logger.info('Core Web Vitals metrics', 'App', { metrics });
      }
    }
    
    logger.info('Performance monitoring initialized', 'App');
    logger.info('🚀 Zion Tech Group App initialized with comprehensive monitoring');
  }, []);

  const handleError = useCallback((error: Error, errorInfo: any) => {
    logger.error('Application Error', error, { errorInfo, component: 'ErrorBoundary' });
  }, []);

  return (
    <HelmetProvider>
      <AdvancedErrorBoundary
        enableErrorReporting={true}
        enableRetry={true}
        onError={handleError}
      >
        <AccessibilityEnhancer>
          <SEOEnhancer
            title="Zion Tech Group - Advanced AI and IT Solutions"
            description="Leading provider of enterprise AI solutions, quantum computing, and autonomous systems. Transform your business with our cutting-edge technology."
          >
            <AdvancedSEOOptimizer
              seoData={{
                title: 'Zion Tech Group - Advanced AI and IT Solutions',
                description: 'Leading provider of enterprise AI solutions, quantum computing, and autonomous systems. Transform your business with our cutting-edge technology.',
                keywords: ['AI solutions', 'enterprise AI', 'quantum computing', 'autonomous systems', 'digital transformation', 'automation', 'cloud services', 'AI consulting', 'business intelligence', 'machine learning'],
                canonicalUrl: 'https://ziontechgroup.com'
              }}
              enableStructuredData={true}
              enableOpenGraph={true}
              enableTwitterCards={true}
              enableSchemaMarkup={true}
            />
            <Router>
              <div className="App">
                <main id="main-content">
                  <Suspense fallback={<LoadingSpinner />}>
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      {/* Add more routes as needed */}
                    </Routes>
                  </Suspense>
                </main>
                <AdvancedPerformanceMonitor />
                <PerformanceDashboard />
              </div>
            </Router>
          </SEOEnhancer>
        </AccessibilityEnhancer>
      </AdvancedErrorBoundary>
    </HelmetProvider>
  );
};

export default App;
