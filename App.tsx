
<<<<<<< HEAD
import React, { Suspense, memo, useEffect } from 'react';
=======
import React, { Suspense, memo, lazy } from 'react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-fb25
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './src/styles/futuristic.css';
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
<<<<<<< HEAD
import HomePage from './app/page';
import { PageLoader } from './src/components/EnhancedLoadingStates';
import EnhancedErrorBoundary from './src/components/EnhancedErrorBoundary';
import SEOHead from './src/components/EnhancedSEOHead';
import SkipLink from './src/components/SkipLink';
import PerformanceOptimizer from './src/components/PerformanceOptimizer';
import AccessibilityEnhancer from './src/components/AccessibilityEnhancer';
import { usePerformanceMonitor } from './src/hooks/usePerformanceMonitor';
import { AnalyticsProvider } from './src/components/Analytics';
=======
import LoadingSpinner from './src/components/LoadingSpinner';
<<<<<<< HEAD
import PerformanceMonitor from './src/components/PerformanceMonitor';
import AccessibilityEnhancer from './src/components/AccessibilityEnhancer';

// Lazy load heavy components for better performance
const UnifiedContentPromotion = lazy(() => import('./src/components/UnifiedContentPromotion'));
const InteractiveAIROICalculator = lazy(() => import('./src/components/InteractiveAIROICalculator'));
const ContentShowcase = lazy(() => import('./src/components/ContentShowcase'));
const InteractiveContentShowcase2026 = lazy(() => import('./src/components/InteractiveContentShowcase2026'));
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-fb25
=======
import UnifiedContentPromotion from './src/components/UnifiedContentPromotion';
import InteractiveAIROICalculator from './src/components/InteractiveAIROICalculator';
import ContentShowcase from './src/components/ContentShowcase';
import InteractiveContentShowcase2026 from './src/components/InteractiveContentShowcase2026';
import './src/styles/futuristic.css';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e939

// Structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Zion Tech Group",
  "url": "https://ziontechgroup.com",
  "logo": "https://ziontechgroup.com/logo.png",
  "description": "Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with our advanced AI capabilities, micro SAAS tools, and comprehensive IT solutions. Contact us at +1 302 464 0950 or kleber@ziontechgroup.com",
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
  "industry": "Information Technology",
  "services": [
    "AI Solutions",
    "Machine Learning",
    "Quantum Computing",
    "Digital Transformation",
    "IT Services",
    "Cybersecurity",
    "Cloud Computing",
    "Automation",
    "Micro SAAS Solutions",
    "Autonomous Systems",
    "Blockchain Technology",
    "IoT Solutions",
    "Edge Computing",
    "5G Implementation",
    "AR/VR Development",
    "Smart City Solutions",
    "Digital Twin Development",
    "Enterprise Integration",
    "Business Intelligence",
    "Robotic Process Automation"
  ]
};

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import('./app/about/page'));
const ContactPage = React.lazy(() => import('./app/contact/page'));
const PricingPage = React.lazy(() => import('./app/pricing/page'));
const AIServicesPage = React.lazy(() => import('./app/ai-services/page'));
const ITServicesPage = React.lazy(() => import('./app/it-services/page'));
const MicroSaasPage = React.lazy(() => import('./app/micro-saas/page'));
const BlogPage = React.lazy(() => import('./app/blog/page'));
const CaseStudiesPage = React.lazy(() => import('./app/case-studies/page'));
const TeamPage = React.lazy(() => import('./app/team/page'));
const CareersPage = React.lazy(() => import('./app/careers/page'));
const PrivacyPage = React.lazy(() => import('./app/privacy/page'));
const TermsPage = React.lazy(() => import('./app/terms/page'));
const CookiesPage = React.lazy(() => import('./app/cookies/page'));
const DocsPage = React.lazy(() => import('./app/docs/page'));
const ApiDocsPage = React.lazy(() => import('./app/api-docs/page'));
const SupportPage = React.lazy(() => import('./app/support/page'));
const StatusPage = React.lazy(() => import('./app/status/page'));
const DemoPage = React.lazy(() => import('./app/demo/page'));
const ConsultationPage = React.lazy(() => import('./app/consultation/page'));
const ServicesPage = React.lazy(() => import('./app/services/page'));
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-aedf
=======
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-a369
=======
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-63f8
const AIOpsPage = React.lazy(() => import('./app/ai-ops/page'));
const HealthcareITPage = React.lazy(() => import('./app/healthcare-it/page'));
const FinancialITPage = React.lazy(() => import('./app/financial-it/page'));
const EdgeComputingPage = React.lazy(() => import('./app/edge-computing/page'));
const FiveGImplementationPage = React.lazy(() => import('./app/5g-implementation/page'));
const IoTPlatformPage = React.lazy(() => import('./app/iot-platform/page'));
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
const AIVoiceAssistantPage = React.lazy(() => import('./app/ai-voice-assistant/page'));
const AIDocumentScannerPage = React.lazy(() => import('./app/ai-document-scanner/page'));
const AIMeetingTranscriberPage = React.lazy(() => import('./app/ai-meeting-transcriber/page'));
const AIWebsiteBuilderPage = React.lazy(() => import('./app/ai-website-builder/page'));
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-aeba
=======

<<<<<<< HEAD
// New service pages
const AISentimentAnalyzerProPage = React.lazy(() => import('./app/ai-sentiment-analyzer-pro/page'));
const AIWorkflowAutomationProPage = React.lazy(() => import('./app/ai-workflow-automation-pro/page'));
const AICybersecurityProPage = React.lazy(() => import('./app/ai-cybersecurity-pro/page'));
const AICloudOptimizationProPage = React.lazy(() => import('./app/ai-cloud-optimization-pro/page'));
const AISmartCalendarProPage = React.lazy(() => import('./app/ai-smart-calendar-pro/page'));
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-aedf
=======
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-a369
=======
// New AI Services
const AIVoiceCloningStudioPage = React.lazy(() => import('./app/ai-voice-cloning-studio/page'));
const AIFinancialAnalyzerProPage = React.lazy(() => import('./app/ai-financial-analyzer-pro/page'));
const AIInfrastructureMonitoringProPage = React.lazy(() => import('./app/ai-infrastructure-monitoring-pro/page'));
const AIDrugDiscoveryProPage = React.lazy(() => import('./app/ai-drug-discovery-pro/page'));

// Error Boundary Component
interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3064

// AI Services Pages
const AI3DGenerationPage = React.lazy(() => import('./app/ai-3d-generation/page'));
const AIAgriculturalIntelligenceProPage = React.lazy(() => import('./app/ai-agricultural-intelligence-pro/page'));
const AIAnalyticsDashboardPage = React.lazy(() => import('./app/ai-analytics-dashboard/page'));
const AIAPIManagementPage = React.lazy(() => import('./app/ai-api-management/page'));
const AIAutonomousSystemsPage = React.lazy(() => import('./app/ai-autonomous-systems/page'));
const AIBlockchainSolutionsPage = React.lazy(() => import('./app/ai-blockchain-solutions/page'));
const AIClimateSolutionsProPage = React.lazy(() => import('./app/ai-climate-solutions-pro/page'));
const AIComputerVisionPage = React.lazy(() => import('./app/ai-computer-vision/page'));
const AIContentGenerationPage = React.lazy(() => import('./app/ai-content-generation/page'));
const AIContentStudioPage = React.lazy(() => import('./app/ai-content-studio/page'));
const AIContentWriterPage = React.lazy(() => import('./app/ai-content-writer/page'));
const AICRMAssistantPage = React.lazy(() => import('./app/ai-crm-assistant/page'));
const AICustomerSupportPage = React.lazy(() => import('./app/ai-customer-support/page'));
const AICustomerSupportBotPage = React.lazy(() => import('./app/ai-customer-support-bot/page'));
const AIDataAnalyticsPage = React.lazy(() => import('./app/ai-data-analytics/page'));
const AIDrugDiscoveryProPage = React.lazy(() => import('./app/ai-drug-discovery-pro/page'));
const AIEmailMarketingPage = React.lazy(() => import('./app/ai-email-marketing/page'));
const AIEnergyPage = React.lazy(() => import('./app/ai-energy/page'));
const AIEnergyGridManagementProPage = React.lazy(() => import('./app/ai-energy-grid-management-pro/page'));
const AIFashionDesignPage = React.lazy(() => import('./app/ai-fashion-design/page'));
const AIFinancialAdvisorPage = React.lazy(() => import('./app/ai-financial-advisor/page'));
const AIFinancialCrimeDetectionProPage = React.lazy(() => import('./app/ai-financial-crime-detection-pro/page'));
const AIFintechPage = React.lazy(() => import('./app/ai-fintech/page'));
const AIHealthcarePage = React.lazy(() => import('./app/ai-healthcare/page'));
const AIHolographicWorkspacePage = React.lazy(() => import('./app/ai-holographic-workspace/page'));
const AIInfrastructureMonitoringPage = React.lazy(() => import('./app/ai-infrastructure-monitoring/page'));
const AILogoDesignerPage = React.lazy(() => import('./app/ai-logo-designer/page'));
const AIMLPlatformPage = React.lazy(() => import('./app/ai-ml-platform/page'));
const AIMobileAppBuilderPage = React.lazy(() => import('./app/ai-mobile-app-builder/page'));
const AIMusicCompositionPage = React.lazy(() => import('./app/ai-music-composition/page'));
const AINeuralMemoryAssistantPage = React.lazy(() => import('./app/ai-neural-memory-assistant/page'));
const AIOpsPage = React.lazy(() => import('./app/ai-ops/page'));
const AIProjectManagerPage = React.lazy(() => import('./app/ai-project-manager/page'));
const AIQuantumComputingPage = React.lazy(() => import('./app/ai-quantum-computing/page'));
const AIQuantumFinancialOraclePage = React.lazy(() => import('./app/ai-quantum-financial-oracle/page'));
const AISmartCalendarPage = React.lazy(() => import('./app/ai-smart-calendar/page'));
const AISocialMediaManagerPage = React.lazy(() => import('./app/ai-social-media-manager/page'));
const AISpaceTechnologyProPage = React.lazy(() => import('./app/ai-space-technology-pro/page'));
const AISupplyChainOptimizationProPage = React.lazy(() => import('./app/ai-supply-chain-optimization-pro/page'));
const AIVideoGeneratorPage = React.lazy(() => import('./app/ai-video-generator/page'));
const AIWorkflowAutomationPage = React.lazy(() => import('./app/ai-workflow-automation/page'));

// IT Services Pages
const CloudMigrationPage = React.lazy(() => import('./app/cloud-migration/page'));
const CybersecurityPage = React.lazy(() => import('./app/cybersecurity/page'));
const ITInfrastructurePage = React.lazy(() => import('./app/it-infrastructure/page'));
const ITSupportPage = React.lazy(() => import('./app/it-support/page'));
const CustomDevelopmentPage = React.lazy(() => import('./app/custom-development/page'));
const DevOpsCICDPage = React.lazy(() => import('./app/devops-cicd/page'));
const DatabaseManagementPage = React.lazy(() => import('./app/database-management/page'));
const NetworkDesignPage = React.lazy(() => import('./app/network-design/page'));
const BlockchainIntegrationServicesPage = React.lazy(() => import('./app/blockchain-integration-services/page'));
const SmartContractSecurityAuditPage = React.lazy(() => import('./app/smart-contract-security-audit/page'));

// Emerging Technologies Pages
const AutonomousSystemsPage = React.lazy(() => import('./app/autonomous-systems/page'));
const BlockchainWeb3Page = React.lazy(() => import('./app/blockchain-web3/page'));
const IoTEdgeComputingPage = React.lazy(() => import('./app/iot-edge-computing/page'));
const ARVRSolutionsPage = React.lazy(() => import('./app/ar-vr-solutions/page'));
const SmartCitiesPage = React.lazy(() => import('./app/smart-cities/page'));
const DigitalTransformationPage = React.lazy(() => import('./app/digital-transformation/page'));
const InnovationLabsPage = React.lazy(() => import('./app/innovation-labs/page'));
const BusinessIntelligencePage = React.lazy(() => import('./app/business-intelligence/page'));
const RoboticsPage = React.lazy(() => import('./app/robotics/page'));

// Additional Pages
const HealthPage = React.lazy(() => import('./app/health/page'));
const SecurityPage = React.lazy(() => import('./app/security/page'));
const CompliancePage = React.lazy(() => import('./app/compliance/page'));
const GDPRPage = React.lazy(() => import('./app/gdpr/page'));
const EdgeComputingPage = React.lazy(() => import('./app/edge-computing/page'));
const FinancialITPage = React.lazy(() => import('./app/financial-it/page'));
const HealthcareITPage = React.lazy(() => import('./app/healthcare-it/page'));
const IoTPlatformPage = React.lazy(() => import('./app/iot-platform/page'));
const FiveGImplementationPage = React.lazy(() => import('./app/5g-implementation/page'));
=======
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-63f8
=======
const AIQuantumFinancialOraclePage = React.lazy(() => import('./app/ai-quantum-financial-oracle/page'));
const AIClimateSolutionsProPage = React.lazy(() => import('./app/ai-climate-solutions-pro/page'));
const AIDrugDiscoveryProPage = React.lazy(() => import('./app/ai-drug-discovery-pro/page'));
const QuantumCloudInfrastructurePage = React.lazy(() => import('./app/quantum-cloud-infrastructure/page'));
const AINeuralMemoryAssistantPage = React.lazy(() => import('./app/ai-neural-memory-assistant/page'));
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-8798

// Performance monitoring hook
const AppWithPerformanceMonitoring: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { preloadCriticalResources } = usePerformanceMonitor();
  
  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered successfully:', registration);
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error);
        });
    }
    
    // Preload critical resources
    preloadCriticalResources();
  }, [preloadCriticalResources]);
  
  return <>{children}</>;
};

const App: React.FC = memo(() => {
  return (
<<<<<<< HEAD
    <EnhancedErrorBoundary>
      <HelmetProvider>
<<<<<<< HEAD
        <AnalyticsProvider>
          <PerformanceOptimizer>
            <AccessibilityEnhancer>
              <AppWithPerformanceMonitoring>
                <SEOHead />
                <Router>
                <div className="min-h-screen bg-white overflow-x-hidden">
                  <SkipLink to="#main-content">Skip to main content</SkipLink>
                  <Navigation />
                  <main id="main-content" className="w-full">
                    <Suspense fallback={<PageLoader message="Loading Zion Tech Group..." />}>
                    <Routes>
<<<<<<< HEAD
                      <Route path="/" element={<HomePage />} />
=======
                      <Route path="/" element={
                        <div className="w-full">
                          <UnifiedContentPromotion />
                          <InteractiveAIROICalculator />
                          <ContentShowcase />
                          <InteractiveContentShowcase2026 />
                        </div>
                      } />
                      
                      {/* Main Pages */}
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-db70
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="/contact" element={<ContactPage />} />
                      <Route path="/pricing" element={<PricingPage />} />
                      <Route path="/services" element={<ServicesPage />} />
                      <Route path="/blog" element={<BlogPage />} />
                      <Route path="/case-studies" element={<CaseStudiesPage />} />
                      <Route path="/team" element={<TeamPage />} />
                      <Route path="/careers" element={<CareersPage />} />
                      <Route path="/privacy" element={<PrivacyPage />} />
                      <Route path="/terms" element={<TermsPage />} />
                      <Route path="/cookies" element={<CookiesPage />} />
                      <Route path="/docs" element={<DocsPage />} />
                      <Route path="/api-docs" element={<ApiDocsPage />} />
                      <Route path="/support" element={<SupportPage />} />
                      <Route path="/status" element={<StatusPage />} />
                      <Route path="/demo" element={<DemoPage />} />
                      <Route path="/consultation" element={<ConsultationPage />} />
<<<<<<< HEAD
                      <Route path="/services" element={<ServicesPage />} />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-aedf
=======
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-a369
=======
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-63f8
                      <Route path="/ai-ops" element={<AIOpsPage />} />
                      <Route path="/healthcare-it" element={<HealthcareITPage />} />
                      <Route path="/financial-it" element={<FinancialITPage />} />
                      <Route path="/edge-computing" element={<EdgeComputingPage />} />
                      <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                      <Route path="/iot-platform" element={<IoTPlatformPage />} />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
                      <Route path="/ai-voice-assistant" element={<AIVoiceAssistantPage />} />
                      <Route path="/ai-document-scanner" element={<AIDocumentScannerPage />} />
                      <Route path="/ai-meeting-transcriber" element={<AIMeetingTranscriberPage />} />
                      <Route path="/ai-website-builder" element={<AIWebsiteBuilderPage />} />
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-aeba
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-aedf
=======
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-a369
=======
                      <Route path="/health" element={<HealthPage />} />
                      <Route path="/security" element={<SecurityPage />} />
                      <Route path="/compliance" element={<CompliancePage />} />
                      <Route path="/gdpr" element={<GDPRPage />} />

                      {/* Service Category Pages */}
                      <Route path="/ai-services" element={<AIServicesPage />} />
                      <Route path="/it-services" element={<ITServicesPage />} />
                      <Route path="/micro-saas" element={<MicroSaasPage />} />

                      {/* AI Services Pages */}
                      <Route path="/ai-3d-generation" element={<AI3DGenerationPage />} />
                      <Route path="/ai-agricultural-intelligence-pro" element={<AIAgriculturalIntelligenceProPage />} />
                      <Route path="/ai-analytics-dashboard" element={<AIAnalyticsDashboardPage />} />
                      <Route path="/ai-api-management" element={<AIAPIManagementPage />} />
                      <Route path="/ai-autonomous-systems" element={<AIAutonomousSystemsPage />} />
                      <Route path="/ai-blockchain-solutions" element={<AIBlockchainSolutionsPage />} />
                      <Route path="/ai-climate-solutions-pro" element={<AIClimateSolutionsProPage />} />
                      <Route path="/ai-computer-vision" element={<AIComputerVisionPage />} />
                      <Route path="/ai-content-generation" element={<AIContentGenerationPage />} />
                      <Route path="/ai-content-studio" element={<AIContentStudioPage />} />
                      <Route path="/ai-content-writer" element={<AIContentWriterPage />} />
                      <Route path="/ai-crm-assistant" element={<AICRMAssistantPage />} />
                      <Route path="/ai-customer-support" element={<AICustomerSupportPage />} />
                      <Route path="/ai-customer-support-bot" element={<AICustomerSupportBotPage />} />
                      <Route path="/ai-data-analytics" element={<AIDataAnalyticsPage />} />
                      <Route path="/ai-drug-discovery-pro" element={<AIDrugDiscoveryProPage />} />
                      <Route path="/ai-email-marketing" element={<AIEmailMarketingPage />} />
                      <Route path="/ai-energy" element={<AIEnergyPage />} />
                      <Route path="/ai-energy-grid-management-pro" element={<AIEnergyGridManagementProPage />} />
                      <Route path="/ai-fashion-design" element={<AIFashionDesignPage />} />
                      <Route path="/ai-financial-advisor" element={<AIFinancialAdvisorPage />} />
                      <Route path="/ai-financial-crime-detection-pro" element={<AIFinancialCrimeDetectionProPage />} />
                      <Route path="/ai-fintech" element={<AIFintechPage />} />
                      <Route path="/ai-healthcare" element={<AIHealthcarePage />} />
                      <Route path="/ai-holographic-workspace" element={<AIHolographicWorkspacePage />} />
                      <Route path="/ai-infrastructure-monitoring" element={<AIInfrastructureMonitoringPage />} />
                      <Route path="/ai-logo-designer" element={<AILogoDesignerPage />} />
                      <Route path="/ai-ml-platform" element={<AIMLPlatformPage />} />
                      <Route path="/ai-mobile-app-builder" element={<AIMobileAppBuilderPage />} />
                      <Route path="/ai-music-composition" element={<AIMusicCompositionPage />} />
                      <Route path="/ai-neural-memory-assistant" element={<AINeuralMemoryAssistantPage />} />
                      <Route path="/ai-ops" element={<AIOpsPage />} />
                      <Route path="/ai-project-manager" element={<AIProjectManagerPage />} />
                      <Route path="/ai-quantum-computing" element={<AIQuantumComputingPage />} />
                      <Route path="/ai-quantum-financial-oracle" element={<AIQuantumFinancialOraclePage />} />
                      <Route path="/ai-smart-calendar" element={<AISmartCalendarPage />} />
                      <Route path="/ai-social-media-manager" element={<AISocialMediaManagerPage />} />
                      <Route path="/ai-space-technology-pro" element={<AISpaceTechnologyProPage />} />
                      <Route path="/ai-supply-chain-optimization-pro" element={<AISupplyChainOptimizationProPage />} />
                      <Route path="/ai-video-generator" element={<AIVideoGeneratorPage />} />
                      <Route path="/ai-workflow-automation" element={<AIWorkflowAutomationPage />} />

                      {/* IT Services Pages */}
                      <Route path="/cloud-migration" element={<CloudMigrationPage />} />
                      <Route path="/cybersecurity" element={<CybersecurityPage />} />
                      <Route path="/it-infrastructure" element={<ITInfrastructurePage />} />
                      <Route path="/it-support" element={<ITSupportPage />} />
                      <Route path="/custom-development" element={<CustomDevelopmentPage />} />
                      <Route path="/devops-cicd" element={<DevOpsCICDPage />} />
                      <Route path="/database-management" element={<DatabaseManagementPage />} />
                      <Route path="/network-design" element={<NetworkDesignPage />} />
                      <Route path="/blockchain-integration-services" element={<BlockchainIntegrationServicesPage />} />
                      <Route path="/smart-contract-security-audit" element={<SmartContractSecurityAuditPage />} />

                      {/* Emerging Technologies Pages */}
                      <Route path="/autonomous-systems" element={<AutonomousSystemsPage />} />
                      <Route path="/blockchain-web3" element={<BlockchainWeb3Page />} />
                      <Route path="/iot-edge-computing" element={<IoTEdgeComputingPage />} />
                      <Route path="/ar-vr-solutions" element={<ARVRSolutionsPage />} />
                      <Route path="/smart-cities" element={<SmartCitiesPage />} />
                      <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
                      <Route path="/innovation-labs" element={<InnovationLabsPage />} />
                      <Route path="/business-intelligence" element={<BusinessIntelligencePage />} />
                      <Route path="/robotics" element={<RoboticsPage />} />

                      {/* Additional Pages */}
                      <Route path="/edge-computing" element={<EdgeComputingPage />} />
                      <Route path="/financial-it" element={<FinancialITPage />} />
                      <Route path="/healthcare-it" element={<HealthcareITPage />} />
                      <Route path="/iot-platform" element={<IoTPlatformPage />} />
                      <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-db70
=======
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-63f8
=======
                      <Route path="/ai-quantum-financial-oracle" element={<AIQuantumFinancialOraclePage />} />
                      <Route path="/ai-climate-solutions-pro" element={<AIClimateSolutionsProPage />} />
                      <Route path="/ai-drug-discovery-pro" element={<AIDrugDiscoveryProPage />} />
                      <Route path="/quantum-cloud-infrastructure" element={<QuantumCloudInfrastructurePage />} />
                      <Route path="/ai-neural-memory-assistant" element={<AINeuralMemoryAssistantPage />} />
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-8798
                    </Routes>
                  </Suspense>
                  </main>
                  <Footer />
                </div>
                </Router>
              </AppWithPerformanceMonitoring>
            </AccessibilityEnhancer>
          </PerformanceOptimizer>
        </AnalyticsProvider>
=======
        <Helmet>
          <title>Zion Tech Group - AI & IT Solutions</title>
=======
    <AccessibilityEnhancer>
      <PerformanceMonitor>
        <ErrorBoundary>
          <HelmetProvider>
          <Helmet>
          <title>Zion Tech Group - AI & IT Solutions | Enterprise AI Services</title>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-fb25
          <meta
            name="description"
            content="Leading provider of AI-powered enterprise solutions and digital transformation services. Achieve 300% ROI with our cutting-edge AI technology. Quantum computing, automation, and micro SAAS solutions."
          />
          <meta
            name="keywords"
            content="AI, artificial intelligence, enterprise solutions, digital transformation, IT services, quantum computing, automation, micro SAAS, machine learning, business intelligence"
          />
          <meta name="author" content="Zion Tech Group" />
          <meta name="robots" content="index, follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color" content="#0f172a" />
          
          {/* Open Graph */}
          <meta property="og:title" content="Zion Tech Group - AI & IT Solutions | Enterprise AI Services" />
          <meta
            property="og:description"
            content="Transform your enterprise with AI-powered solutions achieving 300% ROI, 70% cost reduction, and 90% efficiency gains. Quantum computing, automation, and micro SAAS solutions."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://ziontechgroup.com" />
          <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:site_name" content="Zion Tech Group" />
          <meta property="og:locale" content="en_US" />
          
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Zion Tech Group - AI & IT Solutions" />
          <meta
            name="twitter:description"
            content="Transform your enterprise with AI-powered solutions achieving 300% ROI, 70% cost reduction, and 90% efficiency gains"
          />
          <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" />
          <meta name="twitter:site" content="@ziontechgroup" />
          <meta name="twitter:creator" content="@ziontechgroup" />
          
          {/* Additional SEO */}
          <link rel="canonical" href="https://ziontechgroup.com" />
          <link rel="alternate" hrefLang="en" href="https://ziontechgroup.com" />
          <meta name="geo.region" content="US-DE" />
          <meta name="geo.placename" content="Middletown" />
          <meta name="geo.position" content="39.4496;-75.7163" />
          <meta name="ICBM" content="39.4496, -75.7163" />
          
          {/* Structured Data */}
          <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        </Helmet>
        <Router>
          <div className="min-h-screen bg-white">
            <Navigation />
            <main>
              <Suspense fallback={
                <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-white text-lg">Loading Zion Tech Group...</p>
                  </div>
                </div>
              }>
                <Routes>
                  <Route path="/" element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <UnifiedContentPromotion />
                      <InteractiveAIROICalculator />
                      <ContentShowcase />
                      <InteractiveContentShowcase2026 />
                    </Suspense>
                  } />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/ai-services" element={<AIServicesPage />} />
                  <Route path="/it-services" element={<ITServicesPage />} />
                  <Route path="/micro-saas" element={<MicroSaasPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/case-studies" element={<CaseStudiesPage />} />
                  <Route path="/team" element={<TeamPage />} />
                  <Route path="/careers" element={<CareersPage />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                  <Route path="/cookies" element={<CookiesPage />} />
                  <Route path="/docs" element={<DocsPage />} />
                  <Route path="/api-docs" element={<ApiDocsPage />} />
                  <Route path="/support" element={<SupportPage />} />
                  <Route path="/status" element={<StatusPage />} />
                  <Route path="/demo" element={<DemoPage />} />
                  <Route path="/consultation" element={<ConsultationPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  
                  {/* New AI Services Routes */}
                  <Route path="/ai-voice-cloning-studio" element={<AIVoiceCloningStudioPage />} />
                  <Route path="/ai-financial-analyzer-pro" element={<AIFinancialAnalyzerProPage />} />
                  <Route path="/ai-infrastructure-monitoring-pro" element={<AIInfrastructureMonitoringProPage />} />
                  <Route path="/ai-drug-discovery-pro" element={<AIDrugDiscoveryProPage />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </Router>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3064
      </HelmetProvider>
<<<<<<< HEAD
    </EnhancedErrorBoundary>
  );
<<<<<<< HEAD
<<<<<<< HEAD
};
=======
});
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-cb01
=======
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2efa
=======
    </ErrorBoundary>
    </PerformanceMonitor>
    </AccessibilityEnhancer>
  );
};

export default App;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-fb25
