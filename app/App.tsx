<<<<<<< HEAD
'use client';
import React, {Suspense, lazy}from 'react';
import {BrowserRouter, Routes, Route}}from 'react-router-dom';
import {HelmetProvider}}from 'react-helmet-async';
import ErrorBoundary from './components/ErrorBoundary';
import PerformanceMonitor from './components/PerformanceMonitor';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load pages for better performance;
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

// Additional AI Services;
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
const AiVoiceSolutionsPage = lazy(() => import('./ai-voice-solutions/page'));
const AiHrSolutionsPage = lazy(() => import('./ai-hr-solutions/page'));

// IT Services;
const ItServicesPage = lazy(() => import('./it-services/page'));
const ItInfrastructurePage = lazy(() => import('./it-infrastructure/page'));
const ItSupportPage = lazy(() => import('./it-support/page'));
const CloudInfrastructurePage = lazy(() => import('./cloud-infrastructure/page'));
const CybersecurityPage = lazy(() => import('./cybersecurity/page'));

// Additional IT Services;
const ApiDevelopmentPage = lazy(() => import('./api/page'));
const DatabaseManagementPage = lazy(() => import('./database-management/page'));
const MobileDevelopmentPage = lazy(() => import('./mobile-development/page'));
const WebDevelopmentPage = lazy(() => import('./web-development/page'));
const DevOpsCicdPage = lazy(() => import('./devops-cicd/page'));
const DataAnalyticsPage = lazy(() => import('./data-analytics/page'));
const CustomSoftwarePage = lazy(() => import('./custom-development/page'));
const NetworkInfrastructurePage = lazy(() => import('./network-infrastructure/page'));
const ItAssetManagementPage = lazy(() => import('./it-asset-management/page'));
const PerformanceOptimizationPage = lazy(() => import('./performance-optimization/page'));
const ApiDevelopmentPage2 = lazy(() => import('./api-development/page'));
const CybersecuritySolutionsPage = lazy(() => import('./cybersecurity-solutions/page'));
const DataAnalyticsBiPage = lazy(() => import('./data-analytics-bi/page'));
const CustomSoftwarePage2 = lazy(() => import('./custom-software/page'));

// Emerging Technologies;
const BlockchainPage = lazy(() => import('./blockchain/page'));
const QuantumComputingPage = lazy(() => import('./quantum-computing/page'));
const IoTEdgeComputingPage = lazy(() => import('./iot-edge-computing/page'));
const ARVRSolutionsPage = lazy(() => import('./ar-vr-solutions/page'));
const AutonomousSystemsPage = lazy(() => import('./autonomous-systems/page'));

// Additional Emerging Technologies;
const FiveGImplementationPage = lazy(() => import('./5g-implementation/page'));
const Ai3DGenerationPage = lazy(() => import('./ai-3d-generation/page'));
const AiHolographicWorkspacePage = lazy(() => import('./ai-holographic-workspace/page'));
const AiBlockchainSolutionsPage = lazy(() => import('./ai-blockchain-solutions/page'));
const MachineLearningPage = lazy(() => import('./machine-learning/page'));
const IotPage = lazy(() => import('./iot/page'));
// Micro SaaS;
const MicroSaasPage = lazy(() => import('./micro-saas/page'));

// Support Pages;
const DocsPage = lazy(() => import('./docs/page'));
const ApiDocsPage = lazy(() => import('./api-docs/page'));
const SupportPage = lazy(() => import('./support/page'));
const StatusPage = lazy(() => import('./status/page'));
const ConsultationPage = lazy(() => import('./consultation/page'));

// Additional Important Pages;
const FaqPage = lazy(() => import('./faq/page'));
const DemoPage = lazy(() => import('./demo/page'));
const PartnersPage = lazy(() => import('./partners/page'));
const CommunityPage = lazy(() => import('./community/page'));
const TutorialsPage = lazy(() => import('./tutorials/page'));
const CompliancePage = lazy(() => import('./compliance/page'));
const BusinessIntelligencePage = lazy(() => import('./business-intelligence/page'));
const EnterprisePage = lazy(() => import('./enterprise/page'));
const DigitalTransformationPage = lazy(() => import('./digital-transformation/page'));
const EdgeComputingPage = lazy(() => import('./edge-computing/page'));
// Loading component;
const AppLoadingSpinner = () => (
  <LoadingSpinner />
);

const App: React.FC = () => {,
    return(<ErrorBoundary>)
      <HelmetProvider />
        <BrowserRouter>
          <div className="App">
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/main
            <PerformanceMonitor />
            <AccessibilityEnhancer />
            <Suspense fallback={<AppLoadingSpinner />}>
              <Routes>
                {/* Main Pages */}
                <Route path="/" element={<HomePage />} />
<<<<<<< HEAD
=======
=======
            <PerformanceMonitor>
              <AccessibilityEnhancer />
            </PerformanceMonitor>
            <Suspense fallback={<AppLoadingSpinner />}>
              <Routes>
                {/* Main Pages */} <Route path="/" element={<HomePage />}/>
                <Route path="/about" element={<AboutPage />}/>
                <Route path="/contact" element={<ContactPage />}/>
                <Route path="/services" element={<ServicesPage />}/>
                <Route path="/pricing" element={<PricingPage />}/>
                <Route path="/case-studies" element={<CaseStudiesPage />}/>
                <Route path="/blog" element={<BlogPage />}/>
                <Route path="/team" element={<TeamPage />}/>
                <Route path="/careers" element={<CareersPage />}/>
                <Route path="/privacy" element={<PrivacyPage />}/>
                <Route path="/terms" element={<TermsPage />}/>
                <Route path="/cookies" element={<CookiesPage />}/>
                {/* AI Services */} <Route path="/ai-services" element={<AiServicesPage />}/>
                <Route path="/ai-marketing" element={<AiMarketingPage />}/>
                <Route path="/ai-automation" element={<AiAutomationPage />}/>
                <Route path="/ai-healthcare" element={<AiHealthcarePage />}/>
                <Route path="/ai-fintech" element={<AiFintechPage />}/>
                <Route path="/ai-content-generation" element={<AiContentGenerationPage />}/>
                <Route path="/ai-data-analytics" element={<AiDataAnalyticsPage />}/>
                <Route path="/ai-cybersecurity" element={<AiCybersecurityPage />}/>
                <Route path="/ai-workflow-automation" element={<AiWorkflowAutomationPage />}/>
                <Route path="/ai-customer-support" element={<AiCustomerSupportPage />}/>
                <Route path="/ai-sales-automation" element={<AiSalesAutomationPage />}/>
                <Route path="/ai-data-visualization" element={<AiDataVisualizationPage />}/>
                {/* Additional AI Services */} <Route path="/ai-analytics" element={<AiAnalyticsPage />}/>
                <Route path="/ai-chatbot-builder" element={<AiChatbotBuilderPage />}/>
                <Route path="/ai-crm" element={<AiCrmPage />}/>
                <Route path="/ai-computer-vision" element={<AiComputerVisionPage />}/>
                <Route path="/ai-document-processing" element={<AiDocumentProcessingPage />}/>
                <Route path="/ai-predictive-analytics" element={<AiPredictiveAnalyticsPage />}/>
                <Route path="/ai-edge-computing" element={<AiEdgeComputingPage />}/>
                <Route path="/ai-voice-assistant" element={<AiVoiceAssistantPage />}/>
                <Route path="/ai-recommendation-engine" element={<AiRecommendationEnginePage />}/>
                <Route path="/ai-hr" element={<AiHrPage />}/>
                <Route path="/ai-ecommerce-solutions" element={<AiEcommerceSolutionsPage />}/>
                <Route path="/ai-financial-services" element={<AiFinancialServicesPage />}/>
                <Route path="/ai-voice-solutions" element={<AiVoiceSolutionsPage />}/>
                <Route path="/ai-hr-solutions" element={<AiHrSolutionsPage />}/>
                {/* IT Services */} <Route path="/it-services" element={<ItServicesPage />}/>
                <Route path="/it-infrastructure" element={<ItInfrastructurePage />}/>
                <Route path="/it-support" element={<ItSupportPage />}/>
                <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />}/>
                <Route path="/cybersecurity" element={<CybersecurityPage />}/>
                {/* Additional IT Services */} <Route path="/api" element={<ApiDevelopmentPage />}/>
                <Route path="/database-management" element={<DatabaseManagementPage />}/>
                <Route path="/mobile-development" element={<MobileDevelopmentPage />}/>
                <Route path="/web-development" element={<WebDevelopmentPage />}/>
                <Route path="/devops-cicd" element={<DevOpsCicdPage />}/>
                <Route path="/data-analytics" element={<DataAnalyticsPage />}/>
                <Route path="/custom-development" element={<CustomSoftwarePage />}/>
                <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />}/>
                <Route path="/it-asset-management" element={<ItAssetManagementPage />}/>
                <Route path="/performance-optimization" element={<PerformanceOptimizationPage />}/>
                <Route path="/api-development" element={<ApiDevelopmentPage />}/>
                <Route path="/cybersecurity-solutions" element={<CybersecuritySolutionsPage />}/>
                <Route path="/data-analytics-bi" element={<DataAnalyticsBiPage />}/>
                <Route path="/custom-software" element={<CustomSoftwarePage2 />}/>
                {/* Emerging Technologies */} <Route path="/blockchain" element={<BlockchainPage />}/>
                <Route path="/quantum-computing" element={<QuantumComputingPage />}/>
                <Route path="/iot-edge-computing" element={<IoTEdgeComputingPage />}/>
                <Route path="/ar-vr-solutions" element={<ARVRSolutionsPage />}/>
                <Route path="/autonomous-systems" element={<AutonomousSystemsPage />}/>
                {/* Additional Emerging Technologies */} <Route path="/5g-implementation" element={<FiveGImplementationPage />}/>
                <Route path="/ai-3d-generation" element={<Ai3DGenerationPage />}/>
                <Route path="/ai-holographic-workspace" element={<AiHolographicWorkspacePage />}/>
                <Route path="/ai-blockchain-solutions" element={<AiBlockchainSolutionsPage />}/>
                <Route path="/machine-learning" element={<MachineLearningPage />}/>
                <Route path="/iot" element={<IotPage />}/>
                {/* Micro SaaS */} <Route path="/micro-saas" element={<MicroSaasPage />}/>
                {/* Support Pages */} <Route path="/docs" element={<DocsPage />}/>
                <Route path="/api-docs" element={<ApiDocsPage />}/>
                <Route path="/support" element={<SupportPage />}/>
                <Route path="/status" element={<StatusPage />}/>
                <Route path="/consultation" element={<ConsultationPage />}/>
                {/* Additional Important Pages */} <Route path="/faq" element={<FaqPage />}/>
                <Route path="/demo" element={<DemoPage />}/>
                <Route path="/partners" element={<PartnersPage />}/>
                <Route path="/community" element={<CommunityPage />}/>
                <Route path="/tutorials" element={<TutorialsPage />}/>
                <Route path="/compliance" element={<CompliancePage />}/>
                <Route path="/business-intelligence" element={<BusinessIntelligencePage />}/>
                <Route path="/enterprise" element={<EnterprisePage />}/>
                <Route path="/digital-transformation" element={<DigitalTransformationPage />}/>
                <Route path="/edge-computing" element={<EdgeComputingPage />}/>
=======
'use client'
import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import ErrorBoundary from './components/ErrorBoundary'
import PerformanceMonitor from './components/PerformanceMonitor'
import AccessibilityEnhancer from './components/AccessibilityEnhancer'
import LoadingSpinner from './components/LoadingSpinner'
// Lazy load pages for better performance
<<<<<<< HEAD
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
const _AiServicesPage = lazy(() => import('./ai-services/page'));
const _AiMarketingPage = lazy(() => import('./ai-marketing/page'));
const _AiAutomationPage = lazy(() => import('./ai-automation/page'));
const _AiHealthcarePage = lazy(() => import('./ai-healthcare/page'));
const _AiFintechPage = lazy(() => import('./ai-fintech/page'));
const _AiDataAnalyticsPage = lazy(() => import('./ai-data-analytics/page'));
const _AiCybersecurityPage = lazy(() => import('./ai-cybersecurity/page'));
const _AiWorkflowAutomationPage = lazy(() => import('./ai-workflow-automation/page'));
const _AiCloudInfrastructurePage = lazy(() => import('./ai-cloud-infrastructure/page'));
const _AiEcommerceSolutionsPage = lazy(() => import('./ai-ecommerce-solutions/page'));
const _AiMobileAppDevelopmentPage = lazy(() => import('./ai-mobile-app-development/page'));

// Specialized Services Pages
const _QuantumComputingPage = lazy(() => import('./quantum-computing/page'));
const _AutonomousSystemsPage = lazy(() => import('./autonomous-systems/page'));
const _BusinessIntelligencePage = lazy(() => import('./business-intelligence/page'));
const _BlockchainWeb3Page = lazy(() => import('./blockchain-web3/page'));
const _IotEdgeComputingPage = lazy(() => import('./iot-edge-computing/page'));
const _CybersecurityPage = lazy(() => import('./cybersecurity/page'));
const _MicroSaasPage = lazy(() => import('./micro-saas/page'));
const _ItServicesPage = lazy(() => import('./it-services/page'));

// Additional Pages
const _BlogPage = lazy(() => import('./blog/page'));
const _GuidesPage = lazy(() => import('./guides/page'));
const _SitemapPage = lazy(() => import('./sitemap/page'));

// Utils
import { lazyLoadImages, preloadCriticalResources, collectPerformanceMetrics, performanceOptimizer } from './utils/performanceOptimizer';
import { logger } from './utils/logger';
import performanceMonitor from './utils/performanceMonitor';
import seoOptimizer from './utils/seoOptimizer';
import accessibilityEnhancer from './utils/accessibilityEnhancer';

// Styles
import './globals.css';

=======
const HomePage = lazy(() => import('./page'))
const AboutPage = lazy(() => import('./about/page'))
const ContactPage = lazy(() => import('./contact/page'))
const ServicesPage = lazy(() => import('./services/page'))
const PricingPage = lazy(() => import('./pricing/page'))
const CaseStudiesPage = lazy(() => import('./case-studies/page'))
const BlogPage = lazy(() => import('./blog/page'))
const TeamPage = lazy(() => import('./team/page'))
const CareersPage = lazy(() => import('./careers/page'))
const PrivacyPage = lazy(() => import('./privacy/page'))
const TermsPage = lazy(() => import('./terms/page'))
const CookiesPage = lazy(() => import('./cookies/page'))
// AI Services
const AiServicesPage = lazy(() => import('./ai-services/page'))
const AiMarketingPage = lazy(() => import('./ai-marketing/page'))
const AiAutomationPage = lazy(() => import('./ai-automation/page'))
const AiHealthcarePage = lazy(() => import('./ai-healthcare/page'))
const AiFintechPage = lazy(() => import('./ai-fintech/page'))
const AiContentGenerationPage = lazy(() => import('./ai-content-generation/page'))
const AiDataAnalyticsPage = lazy(() => import('./ai-data-analytics/page'))
const AiCybersecurityPage = lazy(() => import('./ai-cybersecurity/page'))
const AiWorkflowAutomationPage = lazy(() => import('./ai-workflow-automation/page'))
const AiCustomerSupportPage = lazy(() => import('./ai-customer-support/page'))
const AiSalesAutomationPage = lazy(() => import('./ai-sales-automation/page'))
const AiDataVisualizationPage = lazy(() => import('./ai-data-visualization/page'))
// Additional AI Services
const AiAnalyticsPage = lazy(() => import('./ai-analytics/page'))
const AiChatbotBuilderPage = lazy(() => import('./ai-chatbot-builder/page'))
const AiCrmPage = lazy(() => import('./ai-crm/page'))
const AiComputerVisionPage = lazy(() => import('./ai-computer-vision/page'))
const AiDocumentProcessingPage = lazy(() => import('./ai-document-processing/page'))
const AiPredictiveAnalyticsPage = lazy(() => import('./ai-predictive-analytics/page'))
const AiEdgeComputingPage = lazy(() => import('./ai-edge-computing/page'))
const AiVoiceAssistantPage = lazy(() => import('./ai-voice-assistant/page'))
const AiRecommendationEnginePage = lazy(() => import('./ai-recommendation-engine/page'))
const AiHrPage = lazy(() => import('./ai-hr/page'))
const AiEcommerceSolutionsPage = lazy(() => import('./ai-ecommerce-solutions/page'))
const AiFinancialServicesPage = lazy(() => import('./ai-financial-services/page'))
const AiVoiceSolutionsPage = lazy(() => import('./ai-voice-solutions/page'))
const AiHrSolutionsPage = lazy(() => import('./ai-hr-solutions/page'))
// IT Services
const ItServicesPage = lazy(() => import('./it-services/page'))
const ItInfrastructurePage = lazy(() => import('./it-infrastructure/page'))
const ItSupportPage = lazy(() => import('./it-support/page'))
const CloudInfrastructurePage = lazy(() => import('./cloud-infrastructure/page'))
const CybersecurityPage = lazy(() => import('./cybersecurity/page'))
// Additional IT Services
const ApiDevelopmentPage = lazy(() => import('./api/page'))
const DatabaseManagementPage = lazy(() => import('./database-management/page'))
const MobileDevelopmentPage = lazy(() => import('./mobile-development/page'))
const WebDevelopmentPage = lazy(() => import('./web-development/page'))
const DevOpsCicdPage = lazy(() => import('./devops-cicd/page'))
const DataAnalyticsPage = lazy(() => import('./data-analytics/page'))
const CustomSoftwarePage = lazy(() => import('./custom-development/page'))
const NetworkInfrastructurePage = lazy(() => import('./network-infrastructure/page'))
const ItAssetManagementPage = lazy(() => import('./it-asset-management/page'))
const PerformanceOptimizationPage = lazy(() => import('./performance-optimization/page'))
const ApiDevelopmentPage2 = lazy(() => import('./api-development/page'))
const CybersecuritySolutionsPage = lazy(() => import('./cybersecurity-solutions/page'))
const DataAnalyticsBiPage = lazy(() => import('./data-analytics-bi/page'))
const CustomSoftwarePage2 = lazy(() => import('./custom-software/page'))
// Emerging Technologies
const BlockchainPage = lazy(() => import('./blockchain/page'))
const QuantumComputingPage = lazy(() => import('./quantum-computing/page'))
const IoTEdgeComputingPage = lazy(() => import('./iot-edge-computing/page'))
const ARVRSolutionsPage = lazy(() => import('./ar-vr-solutions/page'))
const AutonomousSystemsPage = lazy(() => import('./autonomous-systems/page'))
// Additional Emerging Technologies
const FiveGImplementationPage = lazy(() => import('./5g-implementation/page'))
const Ai3DGenerationPage = lazy(() => import('./ai-3d-generation/page'))
const AiHolographicWorkspacePage = lazy(() => import('./ai-holographic-workspace/page'))
const AiBlockchainSolutionsPage = lazy(() => import('./ai-blockchain-solutions/page'))
const MachineLearningPage = lazy(() => import('./machine-learning/page'))
const IotPage = lazy(() => import('./iot/page'))
// Micro SaaS
const MicroSaasPage = lazy(() => import('./micro-saas/page'))
// Support Pages
const DocsPage = lazy(() => import('./docs/page'))
const ApiDocsPage = lazy(() => import('./api-docs/page'))
const SupportPage = lazy(() => import('./support/page'))
const StatusPage = lazy(() => import('./status/page'))
const ConsultationPage = lazy(() => import('./consultation/page'))
// Additional Important Pages
const FaqPage = lazy(() => import('./faq/page'))
const DemoPage = lazy(() => import('./demo/page'))
const PartnersPage = lazy(() => import('./partners/page'))
const CommunityPage = lazy(() => import('./community/page'))
const TutorialsPage = lazy(() => import('./tutorials/page'))
const CompliancePage = lazy(() => import('./compliance/page'))
const BusinessIntelligencePage = lazy(() => import('./business-intelligence/page'))
const EnterprisePage = lazy(() => import('./enterprise/page'))
const DigitalTransformationPage = lazy(() => import('./digital-transformation/page'))
const EdgeComputingPage = lazy(() => import('./edge-computing/page'))
// Loading component
const AppLoadingSpinner = () => ()
)
>>>>>>> origin/main
const App: React.FC = () => {
    return (
    <ErrorBoundary>
      </ErrorBoundary><HelmetProvider>
        </HelmetProvider><BrowserRouter>
          </BrowserRouter><div className="App">
            </div><PerformanceMonitor>
              </PerformanceMonitor><AccessibilityEnhancer />
            </PerformanceMonitor>
            <Suspense fallback={<AppLoadingSpinner />}>
              <Routes>
                {/* Main Pages */}
                </Routes><Route path="/" element={<HomePage />} />
>>>>>>> origin/main
>>>>>>> origin/main
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
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> origin/main
>>>>>>> origin/main
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
<<<<<<< HEAD

<<<<<<< HEAD
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
                        <Route path="/ai-services" element={<_AiServicesPage />} />
                        <Route path="/ai-marketing" element={<_AiMarketingPage />} />
                        <Route path="/ai-automation" element={<_AiAutomationPage />} />
                        <Route path="/ai-healthcare" element={<_AiHealthcarePage />} />
                        <Route path="/ai-fintech" element={<_AiFintechPage />} />
                        <Route path="/ai-data-analytics" element={<_AiDataAnalyticsPage />} />
                        <Route path="/ai-cybersecurity" element={<_AiCybersecurityPage />} />
                        <Route path="/ai-workflow-automation" element={<_AiWorkflowAutomationPage />} />
                        <Route path="/ai-cloud-infrastructure" element={<_AiCloudInfrastructurePage />} />
                        <Route path="/ai-ecommerce-solutions" element={<_AiEcommerceSolutionsPage />} />
                        <Route path="/ai-mobile-app-development" element={<_AiMobileAppDevelopmentPage />} />
                        
                        {/* Specialized Services Routes */}
                        <Route path="/quantum-computing" element={<_QuantumComputingPage />} />
                        <Route path="/autonomous-systems" element={<_AutonomousSystemsPage />} />
                        <Route path="/business-intelligence" element={<_BusinessIntelligencePage />} />
                        <Route path="/blockchain-web3" element={<_BlockchainWeb3Page />} />
                        <Route path="/iot-edge-computing" element={<_IotEdgeComputingPage />} />
                        <Route path="/cybersecurity" element={<_CybersecurityPage />} />
                        <Route path="/micro-saas" element={<_MicroSaasPage />} />
                        <Route path="/it-services" element={<_ItServicesPage />} />
                        
                        {/* Additional Routes */}
                        <Route path="/blog" element={<_BlogPage />} />
                        <Route path="/guides" element={<_GuidesPage />} />
                        <Route path="/sitemap" element={<_SitemapPage />} />
                      </Routes>
                    </Suspense>
                  </main>
                  <Footer />
=======
=======
<<<<<<< HEAD
>>>>>>> origin/main

=======
                {/* Additional AI Services */}
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
                <Route path="/ai-voice-solutions" element={<AiVoiceSolutionsPage />} />
                <Route path="/ai-hr-solutions" element={<AiHrSolutionsPage />} />
>>>>>>> origin/main
>>>>>>> origin/main
                {/* IT Services */}
                <Route path="/it-services" element={<ItServicesPage />} />
                <Route path="/it-infrastructure" element={<ItInfrastructurePage />} />
                <Route path="/it-support" element={<ItSupportPage />} />
                <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                <Route path="/cybersecurity" element={<CybersecurityPage />} />
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
                {/* Additional IT Services */}
                <Route path="/api" element={<ApiDevelopmentPage />} />
                <Route path="/database-management" element={<DatabaseManagementPage />} />
                <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                <Route path="/web-development" element={<WebDevelopmentPage />} />
                <Route path="/devops-cicd" element={<DevOpsCicdPage />} />
                <Route path="/data-analytics" element={<DataAnalyticsPage />} />
                <Route path="/custom-development" element={<CustomSoftwarePage />} />
                <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} />
                <Route path="/it-asset-management" element={<ItAssetManagementPage />} />
                <Route path="/performance-optimization" element={<PerformanceOptimizationPage />} />
                <Route path="/api-development" element={<ApiDevelopmentPage />} />
                <Route path="/cybersecurity-solutions" element={<CybersecuritySolutionsPage />} />
                <Route path="/data-analytics-bi" element={<DataAnalyticsBiPage />} />
                <Route path="/custom-software" element={<CustomSoftwarePage2 />} />
>>>>>>> origin/main
>>>>>>> origin/main
                {/* Emerging Technologies */}
                <Route path="/blockchain" element={<BlockchainPage />} />
                <Route path="/quantum-computing" element={<QuantumComputingPage />} />
                <Route path="/iot-edge-computing" element={<IoTEdgeComputingPage />} />
                <Route path="/ar-vr-solutions" element={<ARVRSolutionsPage />} />
                <Route path="/autonomous-systems" element={<AutonomousSystemsPage />} />
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/main

                {/* Micro SaaS */}
                <Route path="/micro-saas" element={<MicroSaasPage />} />

<<<<<<< HEAD
=======
=======
                {/* Additional Emerging Technologies */}
                <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                <Route path="/ai-3d-generation" element={<Ai3DGenerationPage />} />
                <Route path="/ai-holographic-workspace" element={<AiHolographicWorkspacePage />} />
                <Route path="/ai-blockchain-solutions" element={<AiBlockchainSolutionsPage />} />
                <Route path="/machine-learning" element={<MachineLearningPage />} />
                <Route path="/iot" element={<IotPage />} />
                {/* Micro SaaS */}
                <Route path="/micro-saas" element={<MicroSaasPage />} />
>>>>>>> origin/main
>>>>>>> origin/main
                {/* Support Pages */}
                <Route path="/docs" element={<DocsPage />} />
                <Route path="/api-docs" element={<ApiDocsPage />} />
                <Route path="/support" element={<SupportPage />} />
                <Route path="/status" element={<StatusPage />} />
                <Route path="/consultation" element={<ConsultationPage />} />
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
                {/* Additional Important Pages */}
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/demo" element={<DemoPage />} />
                <Route path="/partners" element={<PartnersPage />} />
                <Route path="/community" element={<CommunityPage />} />
                <Route path="/tutorials" element={<TutorialsPage />} />
                <Route path="/compliance" element={<CompliancePage />} />
                <Route path="/business-intelligence" element={<BusinessIntelligencePage />} />
                <Route path="/enterprise" element={<EnterprisePage />} />
                <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
                <Route path="/edge-computing" element={<EdgeComputingPage />} />
>>>>>>> origin/main
>>>>>>> origin/main
>>>>>>> origin/main
              </Routes>
            </Suspense>
          </div>
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  )
}
export default App
  )
}
export default App</div>
