'use client';

import React, { Suspense, lazy, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceDashboard from './components/PerformanceDashboard';
import AdvancedPerformanceMonitor from './components/AdvancedPerformanceMonitor';
import AdvancedErrorBoundary from './components/AdvancedErrorBoundary';
import SEOEnhancer from './components/SEOEnhancer';
import AdvancedSEOOptimizer from './components/AdvancedSEOOptimizer';
import LoadingSpinner from './components/LoadingSpinner';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import Analytics from './components/Analytics';

// Lazy load components for better performance
// const _ContentShowcase = lazy(() => import('./components/ContentShowcase'));
// const InteractiveContentShowcase2026 = lazy(
//   () => import('./components/InteractiveContentShowcase2026')
// );
// const InteractiveAIROICalculator = lazy(
//   () => import('./components/InteractiveAIROICalculator')
// );

// Lazy load pages for better performance
const _HomePage = lazy(() => import('./page'));
const _AboutPage = lazy(() => import('./about/page'));
const _ServicesPage = lazy(() => import('./services/page'));
const _ContactPage = lazy(() => import('./contact/page'));
const _TeamPage = lazy(() => import('./team/page'));
const _PrivacyPage = lazy(() => import('./privacy/page'));
const _TermsPage = lazy(() => import('./terms/page'));
const _EnterprisePage = lazy(() => import('./enterprise/page'));
const _ServicesAdvertisingPage = lazy(() => import('./services-advertising/page'));
const _CaseStudiesPage = lazy(() => import('./case-studies/page'));

// AI Services Pages
const _AIServicesPage = lazy(() => import('./ai-services/page'));
const _AIMarketingPage = lazy(() => import('./ai-marketing/page'));
const _AIAutomationPage = lazy(() => import('./ai-automation/page'));
const _AIHealthcarePage = lazy(() => import('./ai-healthcare/page'));
const _AIFintechPage = lazy(() => import('./ai-fintech/page'));
const _AIDataAnalyticsPage = lazy(() => import('./ai-data-analytics/page'));
const _AICybersecurityPage = lazy(() => import('./ai-cybersecurity/page'));
const _AIWorkflowAutomationPage = lazy(() => import('./ai-workflow-automation/page'));
const _AICloudInfrastructurePage = lazy(() => import('./ai-cloud-infrastructure/page'));
const _AIEcommerceSolutionsPage = lazy(() => import('./ai-ecommerce-solutions/page'));
const _AIMobileAppDevelopmentPage = lazy(() => import('./ai-mobile-app-development/page'));

// Additional AI Services Pages
const _AI3DGenerationPage = lazy(() => import('./ai-3d-generation/page'));
const _AIAnalyticsPage = lazy(() => import('./ai-analytics/page'));
const _AIAutonomousSystemsPage = lazy(() => import('./ai-autonomous-systems/page'));
const _AIBlockchainSolutionsPage = lazy(() => import('./ai-blockchain-solutions/page'));
const _AIBusinessIntelligencePage = lazy(() => import('./ai-business-intelligence/page'));
const _AIChatbotBuilderPage = lazy(() => import('./ai-chatbot-builder/page'));
const _AICodeGenerationPage = lazy(() => import('./ai-code-generation/page'));
const _AIContentGenerationPage = lazy(() => import('./ai-content-generation/page'));
const _AIContentWriterPage = lazy(() => import('./ai-content-writer/page'));
const _AICRMPage = lazy(() => import('./ai-crm/page'));
const _AICustomerSupportPage = lazy(() => import('./ai-customer-support/page'));
const _AICustomerSupportBotPage = lazy(() => import('./ai-customer-support-bot/page'));
const _AICustomerSupportChatbotPage = lazy(() => import('./ai-customer-support-chatbot/page'));
const _AIDataVisualizationPage = lazy(() => import('./ai-data-visualization/page'));
const _AIDesignStudioPage = lazy(() => import('./ai-design-studio/page'));
const _AIDocumentProcessingPage = lazy(() => import('./ai-document-processing/page'));
const _AIEcommerceOptimizerPage = lazy(() => import('./ai-ecommerce-optimizer/page'));
const _AIEducationPage = lazy(() => import('./ai-education/page'));
const _AIEmailAssistantPage = lazy(() => import('./ai-email-assistant/page'));
const _AIEmailMarketingPage = lazy(() => import('./ai-email-marketing/page'));
const _AIEmailMarketingAutomationPage = lazy(() => import('./ai-email-marketing-automation/page'));
const _AIEnergyPage = lazy(() => import('./ai-energy/page'));
const _AIExpenseTrackerPage = lazy(() => import('./ai-expense-tracker/page'));
const _AIFashionDesignPage = lazy(() => import('./ai-fashion-design/page'));
const _AIFinancialAdvisorPage = lazy(() => import('./ai-financial-advisor/page'));
const _AIFinancialAnalyzerPage = lazy(() => import('./ai-financial-analyzer/page'));
const _AIFitnessCoachPage = lazy(() => import('./ai-fitness-coach/page'));
const _AIFraudDetectionPage = lazy(() => import('./ai-fraud-detection/page'));
const _AIHRPage = lazy(() => import('./ai-hr/page'));
const _AIHRAssistantPage = lazy(() => import('./ai-hr-assistant/page'));
const _AIInsurancePage = lazy(() => import('./ai-insurance/page'));
const _AIInventoryManagerPage = lazy(() => import('./ai-inventory-manager/page'));
const _AIInvoiceGeneratorPage = lazy(() => import('./ai-invoice-generator/page'));
const _AILeadGenerationPage = lazy(() => import('./ai-lead-generation/page'));
const _AILegalPage = lazy(() => import('./ai-legal/page'));
const _AILegalAssistantPage = lazy(() => import('./ai-legal-assistant/page'));
const _AILogoDesignerPage = lazy(() => import('./ai-logo-designer/page'));
const _AIManufacturingPage = lazy(() => import('./ai-manufacturing/page'));
const _AIMLPage = lazy(() => import('./ai-ml/page'));
const _AIMusicCompositionPage = lazy(() => import('./ai-music-composition/page'));
const _AINLPPage = lazy(() => import('./ai-nlp/page'));
const _AIPasswordManagerPage = lazy(() => import('./ai-password-manager/page'));
const _AIPredictiveAnalyticsPage = lazy(() => import('./ai-predictive-analytics/page'));
const _AIPredictiveMaintenancePage = lazy(() => import('./ai-predictive-maintenance/page'));
const _AIProjectManagerPage = lazy(() => import('./ai-project-manager/page'));
const _AIQualityAssurancePage = lazy(() => import('./ai-quality-assurance/page'));
const _AIQuantumComputingPage = lazy(() => import('./ai-quantum-computing/page'));
const _AIRealEstatePage = lazy(() => import('./ai-real-estate/page'));
const _AIRoboticsPage = lazy(() => import('./ai-robotics/page'));
const _AISalesAutomationPage = lazy(() => import('./ai-sales-automation/page'));
const _AISchedulerPage = lazy(() => import('./ai-scheduler/page'));
const _AISEOOptimizerPage = lazy(() => import('./ai-seo-optimizer/page'));
const _AISocialMediaManagerPage = lazy(() => import('./ai-social-media-manager/page'));
const _AISolutionsPage = lazy(() => import('./ai-solutions/page'));
const _AIStockPortfolioManagerPage = lazy(() => import('./ai-stock-portfolio-manager/page'));
const _AISupplyChainPage = lazy(() => import('./ai-supply-chain/page'));
const _AITaskManagerPage = lazy(() => import('./ai-task-manager/page'));
const _AITimeTrackerPage = lazy(() => import('./ai-time-tracker/page'));
const _AITransportationPage = lazy(() => import('./ai-transportation/page'));
const _AIVideoGenerationPage = lazy(() => import('./ai-video-generation/page'));
const _AIVisionPage = lazy(() => import('./ai-vision/page'));
const _AIVoiceCloningPage = lazy(() => import('./ai-voice-cloning/page'));
const _AIVoiceSynthesisPage = lazy(() => import('./ai-voice-synthesis/page'));
const _AIWebsiteBuilderPage = lazy(() => import('./ai-website-builder/page'));
const _AIWritingAssistantPage = lazy(() => import('./ai-writing-assistant/page'));

// IT Services Pages
const _ITServicesPage = lazy(() => import('./it-services/page'));
const _MicroSAASPage = lazy(() => import('./micro-saas/page'));
const _CybersecurityPage = lazy(() => import('./cybersecurity/page'));

// Additional IT Services Pages
const _BackupRecoveryPage = lazy(() => import('./backup-recovery/page'));
const _BlockchainPage = lazy(() => import('./blockchain/page'));
const _CloudMigrationPage = lazy(() => import('./cloud-migration/page'));
const _CloudMigrationServicesPage = lazy(() => import('./cloud-migration-services/page'));
const _CloudSecurityPage = lazy(() => import('./cloud-security/page'));
const _CloudServicesPage = lazy(() => import('./cloud-services/page'));
const _CompliancePage = lazy(() => import('./compliance/page'));
const _ComputerVisionPage = lazy(() => import('./computer-vision/page'));
const _DatabasePage = lazy(() => import('./database/page'));
const _DatabaseServicesPage = lazy(() => import('./database-services/page'));
const _DevOpsPage = lazy(() => import('./devops/page'));
const _DigitalTransformationPage = lazy(() => import('./digital-transformation/page'));
const _EnterpriseSecurityPage = lazy(() => import('./enterprise-security/page'));
const _ITAssetManagementPage = lazy(() => import('./it-asset-management/page'));
const _ITConsultingPage = lazy(() => import('./it-consulting/page'));
const _ITInfrastructurePage = lazy(() => import('./it-infrastructure/page'));
const _ITPerformancePage = lazy(() => import('./it-performance/page'));
const _ITSupportPage = lazy(() => import('./it-support/page'));
const _ITTrainingPage = lazy(() => import('./it-training/page'));
const _ManagedITPage = lazy(() => import('./managed-it/page'));
const _MachineLearningPage = lazy(() => import('./machine-learning/page'));
const _MobileDevelopmentPage = lazy(() => import('./mobile-development/page'));
const _NetworkInfrastructurePage = lazy(() => import('./network-infrastructure/page'));
const _NetworkSecurityPage = lazy(() => import('./network-security/page'));
const _NLPPage = lazy(() => import('./nlp/page'));
const _PerformanceOptimizationPage = lazy(() => import('./performance-optimization/page'));
const _RoboticsPage = lazy(() => import('./robotics/page'));
const _SystemAdminPage = lazy(() => import('./system-admin/page'));
const _WebDevelopmentPage = lazy(() => import('./web-development/page'));

// Specialized Technology Pages
const _QuantumComputingPage = lazy(() => import('./quantum-computing/page'));
const _AutonomousSystemsPage = lazy(() => import('./autonomous-systems/page'));
const _BusinessIntelligencePage = lazy(() => import('./business-intelligence/page'));
const _BlockchainWeb3Page = lazy(() => import('./blockchain/page'));
const _IoTEdgeComputingPage = lazy(() => import('./iot-edge/page'));

// Additional Pages
const _BlogPage = lazy(() => import('./blog/page'));
const _GuidesPage = lazy(() => import('./guides/page'));
const _SitemapPage = lazy(() => import('./sitemap/page'));

// Other Pages
const _AnalyticsToolsPage = lazy(() => import('./analytics-tools/page'));
const _BusinessAppsPage = lazy(() => import('./business-apps/page'));
const _CareersPage = lazy(() => import('./careers/page'));
const _ConsultationPage = lazy(() => import('./consultation/page'));
const _CRMLitePage = lazy(() => import('./crm-lite/page'));
const _DataCenterPage = lazy(() => import('./data-center/page'));
const _DemoPage = lazy(() => import('./demo/page'));
const _DeveloperToolsPage = lazy(() => import('./developer-tools/page'));
const _EmailOptimizerPage = lazy(() => import('./email-optimizer/page'));
const _ExpenseTrackerPage = lazy(() => import('./expense-tracker/page'));
const _LandingPageBuilderPage = lazy(() => import('./landing-page-builder/page'));
const _MarketingToolsPage = lazy(() => import('./marketing-tools/page'));
const _PricingPage = lazy(() => import('./pricing/page'));
const _ProductivityPage = lazy(() => import('./productivity/page'));
const _QuantumAIPage = lazy(() => import('./quantum-ai/page'));
const _SEOOptimizerPage = lazy(() => import('./seo-optimizer/page'));
const _SmartAnalyticsPage = lazy(() => import('./smart-analytics/page'));
const _SpecializedServicesPage = lazy(() => import('./specialized-services/page'));
const _TaskManagerProPage = lazy(() => import('./task-manager-pro/page'));

// Utils
import { lazyLoadImages, preloadCriticalResources, collectPerformanceMetrics, performanceOptimizer } from './utils/performanceOptimizer';
import { logger } from './utils/logger';
import performanceMonitor from './utils/performanceMonitor';
import seoOptimizer from './utils/seoOptimizer';
import accessibilityEnhancer from './utils/accessibilityEnhancer';

// Styles
import './globals.css';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize global error handling
    logger.info('initialized', { component: 'App' });

    // Initialize performance monitoring
    lazyLoadImages();
    preloadCriticalResources();
    performanceOptimizer.init();
    performanceMonitor.init();
    
    // Initialize SEO optimization
    seoOptimizer.init();
    
    // Initialize accessibility enhancements
    accessibilityEnhancer.init();
    
    // Initialize Web Vitals monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      const pageLoadMetrics = collectPerformanceMetrics();
      const metrics = performanceOptimizer.getMetrics();
      const performanceMetrics = performanceMonitor.getMetrics();
      
      if (pageLoadMetrics) {
        // eslint-disable-next-line no-console
        console.log('Performance metrics collected:', pageLoadMetrics);
      }
      if (metrics) {
        // eslint-disable-next-line no-console
        console.log('Performance metrics:', metrics);
      }
      if (performanceMetrics) {
        // eslint-disable-next-line no-console
        console.log('Core Web Vitals:', performanceMetrics);
      }
    }
    
    // Log performance and accessibility metrics periodically - optimized
    const metricsInterval = setInterval(() => {
      if (process.env.NODE_ENV === 'development') {
        const performanceMetrics = performanceMonitor.getMetrics();
        const accessibilityMetrics = accessibilityEnhancer.getMetrics();
        
        if (performanceMetrics) {
          // eslint-disable-next-line no-console
          console.log('Performance Score:', performanceMonitor.getScore());
        }
        if (accessibilityMetrics) {
          // eslint-disable-next-line no-console
          console.log('Accessibility Score:', accessibilityMetrics.overallScore);
        }
      }
    }, 30000);
    
    logger.info('performance monitoring initialized', { component: 'App' });
    logger.info('🚀 Zion Tech Group App initialized with comprehensive monitoring', { component: 'App' });

    return () => {
      // Cleanup
      performanceOptimizer.cleanup();
      performanceMonitor.cleanup();
      accessibilityEnhancer.cleanup();
      clearInterval(metricsInterval);
    };
  }, []);

  return (
    <HelmetProvider>
      <AdvancedErrorBoundary
        enableErrorReporting={true}
        enableRetry={true}
        onError={(error, errorInfo) => {
          logger.error(error.message, { error, errorInfo });
        }}
      >
        <PerformanceOptimizer>
          <AccessibilityEnhancer>
            <SEOEnhancer
              title="Zion Tech Group - Advanced AI and IT Solutions"
              description="Leading provider of enterprise AI solutions, quantum computing, and autonomous systems. Transform your business with our cutting-edge technology."
            >
              <AdvancedSEOOptimizer
                config={{
                  title: 'Zion Tech Group - Advanced AI and IT Solutions',
                  description: 'Leading provider of enterprise AI solutions, quantum computing, and autonomous systems. Transform your business with our cutting-edge technology.',
                  keywords: ['AI solutions', 'enterprise AI', 'quantum computing', 'autonomous systems', 'digital transformation', 'automation', 'cloud services', 'AI consulting', 'business intelligence', 'machine learning'],
                  canonicalUrl: 'https://ziontechgroup.com',
                  ogImage: 'https://ziontechgroup.com/og-image.jpg',
                  structuredData: {
                    '@type': 'TechCompany',
                    name: 'Zion Tech Group',
                    description: 'Advanced AI and IT Solutions Provider',
                    foundingDate: '2020',
                    numberOfEmployees: '50-100',
                    industry: 'Technology',
                    services: [
                      'AI Solutions',
                      'Digital Transformation',
                      'Cloud Services',
                      'Automation',
                      'Business Intelligence'
                    ]
                  }
                }}
                enableStructuredData={true}
                enableOpenGraph={true}
                enableTwitterCards={true}
                enableSchemaMarkup={true}
              />
              <Router>
                <div className="App">
                  <Analytics trackingId="G-XXXXXXXXXX" />
                  <Navigation />
                  <main id="main-content">
                    <Suspense fallback={<LoadingSpinner />}>
                      <Routes>
                        <Route path="/" element={<_HomePage />} />
                        <Route path="/about" element={<_AboutPage />} />
                        <Route path="/services" element={<_ServicesPage />} />
                        <Route path="/contact" element={<_ContactPage />} />
                        <Route path="/team" element={<_TeamPage />} />
                        <Route path="/privacy" element={<_PrivacyPage />} />
                        <Route path="/terms" element={<_TermsPage />} />
                        <Route path="/enterprise" element={<_EnterprisePage />} />
                        <Route path="/services-advertising" element={<_ServicesAdvertisingPage />} />
                        <Route path="/case-studies" element={<_CaseStudiesPage />} />
                        
                        {/* AI Services Routes */}
                        <Route path="/ai-services" element={<_AIServicesPage />} />
                        <Route path="/ai-marketing" element={<_AIMarketingPage />} />
                        <Route path="/ai-automation" element={<_AIAutomationPage />} />
                        <Route path="/ai-healthcare" element={<_AIHealthcarePage />} />
                        <Route path="/ai-fintech" element={<_AIFintechPage />} />
                        <Route path="/ai-data-analytics" element={<_AIDataAnalyticsPage />} />
                        <Route path="/ai-cybersecurity" element={<_AICybersecurityPage />} />
                        <Route path="/ai-workflow-automation" element={<_AIWorkflowAutomationPage />} />
                        <Route path="/ai-cloud-infrastructure" element={<_AICloudInfrastructurePage />} />
                        <Route path="/ai-ecommerce-solutions" element={<_AIEcommerceSolutionsPage />} />
                        <Route path="/ai-mobile-app-development" element={<_AIMobileAppDevelopmentPage />} />
                        
                        {/* Additional AI Services Routes */}
                        <Route path="/ai-3d-generation" element={<_AI3DGenerationPage />} />
                        <Route path="/ai-analytics" element={<_AIAnalyticsPage />} />
                        <Route path="/ai-autonomous-systems" element={<_AIAutonomousSystemsPage />} />
                        <Route path="/ai-blockchain-solutions" element={<_AIBlockchainSolutionsPage />} />
                        <Route path="/ai-business-intelligence" element={<_AIBusinessIntelligencePage />} />
                        <Route path="/ai-chatbot-builder" element={<_AIChatbotBuilderPage />} />
                        <Route path="/ai-code-generation" element={<_AICodeGenerationPage />} />
                        <Route path="/ai-content-generation" element={<_AIContentGenerationPage />} />
                        <Route path="/ai-content-writer" element={<_AIContentWriterPage />} />
                        <Route path="/ai-crm" element={<_AICRMPage />} />
                        <Route path="/ai-customer-support" element={<_AICustomerSupportPage />} />
                        <Route path="/ai-customer-support-bot" element={<_AICustomerSupportBotPage />} />
                        <Route path="/ai-customer-support-chatbot" element={<_AICustomerSupportChatbotPage />} />
                        <Route path="/ai-data-visualization" element={<_AIDataVisualizationPage />} />
                        <Route path="/ai-design-studio" element={<_AIDesignStudioPage />} />
                        <Route path="/ai-document-processing" element={<_AIDocumentProcessingPage />} />
                        <Route path="/ai-ecommerce-optimizer" element={<_AIEcommerceOptimizerPage />} />
                        <Route path="/ai-education" element={<_AIEducationPage />} />
                        <Route path="/ai-email-assistant" element={<_AIEmailAssistantPage />} />
                        <Route path="/ai-email-marketing" element={<_AIEmailMarketingPage />} />
                        <Route path="/ai-email-marketing-automation" element={<_AIEmailMarketingAutomationPage />} />
                        <Route path="/ai-energy" element={<_AIEnergyPage />} />
                        <Route path="/ai-expense-tracker" element={<_AIExpenseTrackerPage />} />
                        <Route path="/ai-fashion-design" element={<_AIFashionDesignPage />} />
                        <Route path="/ai-financial-advisor" element={<_AIFinancialAdvisorPage />} />
                        <Route path="/ai-financial-analyzer" element={<_AIFinancialAnalyzerPage />} />
                        <Route path="/ai-fitness-coach" element={<_AIFitnessCoachPage />} />
                        <Route path="/ai-fraud-detection" element={<_AIFraudDetectionPage />} />
                        <Route path="/ai-hr" element={<_AIHRPage />} />
                        <Route path="/ai-hr-assistant" element={<_AIHRAssistantPage />} />
                        <Route path="/ai-insurance" element={<_AIInsurancePage />} />
                        <Route path="/ai-inventory-manager" element={<_AIInventoryManagerPage />} />
                        <Route path="/ai-invoice-generator" element={<_AIInvoiceGeneratorPage />} />
                        <Route path="/ai-lead-generation" element={<_AILeadGenerationPage />} />
                        <Route path="/ai-legal" element={<_AILegalPage />} />
                        <Route path="/ai-legal-assistant" element={<_AILegalAssistantPage />} />
                        <Route path="/ai-logo-designer" element={<_AILogoDesignerPage />} />
                        <Route path="/ai-manufacturing" element={<_AIManufacturingPage />} />
                        <Route path="/ai-ml" element={<_AIMLPage />} />
                        <Route path="/ai-music-composition" element={<_AIMusicCompositionPage />} />
                        <Route path="/ai-nlp" element={<_AINLPPage />} />
                        <Route path="/ai-password-manager" element={<_AIPasswordManagerPage />} />
                        <Route path="/ai-predictive-analytics" element={<_AIPredictiveAnalyticsPage />} />
                        <Route path="/ai-predictive-maintenance" element={<_AIPredictiveMaintenancePage />} />
                        <Route path="/ai-project-manager" element={<_AIProjectManagerPage />} />
                        <Route path="/ai-quality-assurance" element={<_AIQualityAssurancePage />} />
                        <Route path="/ai-quantum-computing" element={<_AIQuantumComputingPage />} />
                        <Route path="/ai-real-estate" element={<_AIRealEstatePage />} />
                        <Route path="/ai-robotics" element={<_AIRoboticsPage />} />
                        <Route path="/ai-sales-automation" element={<_AISalesAutomationPage />} />
                        <Route path="/ai-scheduler" element={<_AISchedulerPage />} />
                        <Route path="/ai-seo-optimizer" element={<_AISEOOptimizerPage />} />
                        <Route path="/ai-social-media-manager" element={<_AISocialMediaManagerPage />} />
                        <Route path="/ai-solutions" element={<_AISolutionsPage />} />
                        <Route path="/ai-stock-portfolio-manager" element={<_AIStockPortfolioManagerPage />} />
                        <Route path="/ai-supply-chain" element={<_AISupplyChainPage />} />
                        <Route path="/ai-task-manager" element={<_AITaskManagerPage />} />
                        <Route path="/ai-time-tracker" element={<_AITimeTrackerPage />} />
                        <Route path="/ai-transportation" element={<_AITransportationPage />} />
                        <Route path="/ai-video-generation" element={<_AIVideoGenerationPage />} />
                        <Route path="/ai-vision" element={<_AIVisionPage />} />
                        <Route path="/ai-voice-cloning" element={<_AIVoiceCloningPage />} />
                        <Route path="/ai-voice-synthesis" element={<_AIVoiceSynthesisPage />} />
                        <Route path="/ai-website-builder" element={<_AIWebsiteBuilderPage />} />
                        <Route path="/ai-writing-assistant" element={<_AIWritingAssistantPage />} />
                        
                        {/* IT Services Routes */}
                        <Route path="/it-services" element={<_ITServicesPage />} />
                        <Route path="/micro-saas" element={<_MicroSAASPage />} />
                        <Route path="/cybersecurity" element={<_CybersecurityPage />} />
                        
                        {/* Additional IT Services Routes */}
                        <Route path="/backup-recovery" element={<_BackupRecoveryPage />} />
                        <Route path="/blockchain" element={<_BlockchainPage />} />
                        <Route path="/cloud-migration" element={<_CloudMigrationPage />} />
                        <Route path="/cloud-migration-services" element={<_CloudMigrationServicesPage />} />
                        <Route path="/cloud-security" element={<_CloudSecurityPage />} />
                        <Route path="/cloud-services" element={<_CloudServicesPage />} />
                        <Route path="/compliance" element={<_CompliancePage />} />
                        <Route path="/computer-vision" element={<_ComputerVisionPage />} />
                        <Route path="/database" element={<_DatabasePage />} />
                        <Route path="/database-services" element={<_DatabaseServicesPage />} />
                        <Route path="/devops" element={<_DevOpsPage />} />
                        <Route path="/digital-transformation" element={<_DigitalTransformationPage />} />
                        <Route path="/enterprise-security" element={<_EnterpriseSecurityPage />} />
                        <Route path="/it-asset-management" element={<_ITAssetManagementPage />} />
                        <Route path="/it-consulting" element={<_ITConsultingPage />} />
                        <Route path="/it-infrastructure" element={<_ITInfrastructurePage />} />
                        <Route path="/it-performance" element={<_ITPerformancePage />} />
                        <Route path="/it-support" element={<_ITSupportPage />} />
                        <Route path="/it-training" element={<_ITTrainingPage />} />
                        <Route path="/managed-it" element={<_ManagedITPage />} />
                        <Route path="/machine-learning" element={<_MachineLearningPage />} />
                        <Route path="/mobile-development" element={<_MobileDevelopmentPage />} />
                        <Route path="/network-infrastructure" element={<_NetworkInfrastructurePage />} />
                        <Route path="/network-security" element={<_NetworkSecurityPage />} />
                        <Route path="/nlp" element={<_NLPPage />} />
                        <Route path="/performance-optimization" element={<_PerformanceOptimizationPage />} />
                        <Route path="/robotics" element={<_RoboticsPage />} />
                        <Route path="/system-admin" element={<_SystemAdminPage />} />
                        <Route path="/web-development" element={<_WebDevelopmentPage />} />
                        
                        {/* Specialized Technology Routes */}
                        <Route path="/quantum-computing" element={<_QuantumComputingPage />} />
                        <Route path="/autonomous-systems" element={<_AutonomousSystemsPage />} />
                        <Route path="/business-intelligence" element={<_BusinessIntelligencePage />} />
                        <Route path="/blockchain-web3" element={<_BlockchainWeb3Page />} />
                        <Route path="/iot-edge-computing" element={<_IoTEdgeComputingPage />} />
                        
                        {/* Additional Routes */}
                        <Route path="/blog" element={<_BlogPage />} />
                        <Route path="/guides" element={<_GuidesPage />} />
                        <Route path="/sitemap" element={<_SitemapPage />} />
                        
                        {/* Other Routes */}
                        <Route path="/analytics-tools" element={<_AnalyticsToolsPage />} />
                        <Route path="/business-apps" element={<_BusinessAppsPage />} />
                        <Route path="/careers" element={<_CareersPage />} />
                        <Route path="/consultation" element={<_ConsultationPage />} />
                        <Route path="/crm-lite" element={<_CRMLitePage />} />
                        <Route path="/data-center" element={<_DataCenterPage />} />
                        <Route path="/demo" element={<_DemoPage />} />
                        <Route path="/developer-tools" element={<_DeveloperToolsPage />} />
                        <Route path="/email-optimizer" element={<_EmailOptimizerPage />} />
                        <Route path="/expense-tracker" element={<_ExpenseTrackerPage />} />
                        <Route path="/landing-page-builder" element={<_LandingPageBuilderPage />} />
                        <Route path="/marketing-tools" element={<_MarketingToolsPage />} />
                        <Route path="/pricing" element={<_PricingPage />} />
                        <Route path="/productivity" element={<_ProductivityPage />} />
                        <Route path="/quantum-ai" element={<_QuantumAIPage />} />
                        <Route path="/seo-optimizer" element={<_SEOOptimizerPage />} />
                        <Route path="/smart-analytics" element={<_SmartAnalyticsPage />} />
                        <Route path="/specialized-services" element={<_SpecializedServicesPage />} />
                        <Route path="/task-manager-pro" element={<_TaskManagerProPage />} />
                      </Routes>
                    </Suspense>
                  </main>
                  <Footer />

                  {/* Performance Dashboard */}
                  <PerformanceDashboard />
                  
                  {/* Advanced Performance Monitor */}
                  <AdvancedPerformanceMonitor
                    enableRealTimeMonitoring={process.env['NODE_ENV'] === 'development'}
                    onMetricsUpdate={(metrics) => {
                      if (process.env['NODE_ENV'] === 'development') {
                        logger.info('Performance Metrics', { component: 'PerformanceMonitor', metrics });
                      }
                    }}
                  />
                </div>
              </Router>
            </SEOEnhancer>
          </AccessibilityEnhancer>
        </PerformanceOptimizer>
      </AdvancedErrorBoundary>
    </HelmetProvider>
  );
};

export default App;