
import React, { Suspense, memo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './src/styles/futuristic.css';
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import { PageLoader } from './src/components/EnhancedLoadingStates';
import ErrorBoundary from './src/components/ErrorBoundary';
import SEOOptimizer from './src/components/SEOOptimizer';
import SkipLink from './src/components/SkipLink';
import UnifiedContentPromotion from './src/components/UnifiedContentPromotion';
import InteractiveAIROICalculator from './src/components/InteractiveAIROICalculator';
import ContentShowcase from './src/components/ContentShowcase';
import InteractiveContentShowcase2026 from './src/components/InteractiveContentShowcase2026';
import PerformanceOptimizer from './src/components/PerformanceOptimizer';
import AccessibilityEnhancer from './src/components/AccessibilityEnhancer';
import PerformanceMonitor from './src/components/PerformanceMonitor';
import { usePerformanceMonitor } from './src/hooks/usePerformanceMonitor';
import { AnalyticsProvider } from './src/components/Analytics';

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
  "industry": "Information Technology",
  "services": [
    "AI Solutions",
    "Machine Learning",
    "Quantum Computing",
    "Digital Transformation",
    "IT Services",
    "Cybersecurity",
    "Cloud Computing",
    "Automation"
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

// Performance monitoring hook
const AppWithPerformanceMonitoring: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  usePerformanceMonitor();
  return <>{children}</>;
};

const App: React.FC = memo(() => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <AnalyticsProvider>
          <PerformanceOptimizer>
            <AccessibilityEnhancer>
              <AppWithPerformanceMonitoring>
                <SEOOptimizer />
                <PerformanceMonitor />
                <Router>
                <div className="min-h-screen bg-white overflow-x-hidden">
                  <SkipLink to="#main-content">Skip to main content</SkipLink>
                  <Navigation />
                  <main id="main-content" className="w-full">
                    <Suspense fallback={<PageLoader message="Loading Zion Tech Group..." />}>
                    <Routes>
                      <Route path="/" element={
                        <div className="w-full">
                          <UnifiedContentPromotion />
                          <InteractiveAIROICalculator />
                          <ContentShowcase />
                          <InteractiveContentShowcase2026 />
                        </div>
                      } />
                      
                      {/* Main Pages */}
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
      </HelmetProvider>
    </ErrorBoundary>
  );
}