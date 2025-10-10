
import React, { Suspense, memo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './src/styles/futuristic.css';
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import HomePage from './app/page';
import { PageLoader } from './src/components/EnhancedLoadingStates';
import EnhancedErrorBoundary from './src/components/EnhancedErrorBoundary';
import SEOHead from './src/components/EnhancedSEOHead';
import SkipLink from './src/components/SkipLink';
import PerformanceOptimizer from './src/components/PerformanceOptimizer';
import AccessibilityEnhancer from './src/components/AccessibilityEnhancer';
import EnhancedAccessibility from './src/components/EnhancedAccessibility';
import { usePerformanceMonitor } from './src/hooks/usePerformanceMonitor';
import { AnalyticsProvider } from './src/components/Analytics';
import PerformanceMonitor from './src/components/PerformanceMonitor';

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
const AIOpsPage = React.lazy(() => import('./app/ai-ops/page'));
// AI Services Pages
const AIProjectManagerPage = React.lazy(() => import('./app/ai-project-manager/page'));
const AIQuantumComputingPage = React.lazy(() => import('./app/ai-quantum-computing/page'));
const AIQuantumFinancialOraclePage = React.lazy(() => import('./app/ai-quantum-financial-oracle/page'));
const AISmartCalendarPage = React.lazy(() => import('./app/ai-smart-calendar/page'));
const AISocialMediaManagerPage = React.lazy(() => import('./app/ai-social-media-manager/page'));
const AISpaceTechnologyProPage = React.lazy(() => import('./app/ai-space-technology-pro/page'));
const AISupplyChainOptimizationProPage = React.lazy(() => import('./app/ai-supply-chain-optimization-pro/page'));
const AIVideoGeneratorPage = React.lazy(() => import('./app/ai-video-generator/page'));
const AIWorkflowAutomationPage = React.lazy(() => import('./app/ai-workflow-automation/page'));

// New Micro SAAS Services
const AIVoiceCloningStudioPage = React.lazy(() => import('./app/ai-voice-cloning-studio/page'));
const AICodeSecurityAuditorPage = React.lazy(() => import('./app/ai-code-security-auditor/page'));
const AIMentalHealthCompanionPage = React.lazy(() => import('./app/ai-mental-health-companion/page'));
const AISmartHomeControllerPage = React.lazy(() => import('./app/ai-smart-home-controller/page'));
const AIInvestmentOptimizerPage = React.lazy(() => import('./app/ai-investment-optimizer/page'));
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
const HealthcareITPage = React.lazy(() => import('./app/healthcare-it/page'));
const FinancialITPage = React.lazy(() => import('./app/financial-it/page'));
const EdgeComputingPage = React.lazy(() => import('./app/edge-computing/page'));
const FiveGImplementationPage = React.lazy(() => import('./app/5g-implementation/page'));
const IoTPlatformPage = React.lazy(() => import('./app/iot-platform/page'));
const ARVRPlatformPage = React.lazy(() => import('./app/ar-vr-platform/page'));
const SmartCityInfrastructurePage = React.lazy(() => import('./app/smart-city-infrastructure/page'));
const DigitalTwinPlatformPage = React.lazy(() => import('./app/digital-twin-platform/page'));
const RoboticsIntegrationPage = React.lazy(() => import('./app/robotics-integration/page'));


// Performance monitoring hook
const AppWithPerformanceMonitoring: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  usePerformanceMonitor();
  return <>{children}</>;
};

const App: React.FC = memo(() => {
  return (
    <EnhancedErrorBoundary>
      <HelmetProvider>
        <AnalyticsProvider>
          <PerformanceOptimizer>
            <AccessibilityEnhancer>
              <EnhancedAccessibility>
                <AppWithPerformanceMonitoring>
                <SEOHead />
                <Router>
                <div className="min-h-screen bg-white overflow-x-hidden">
                  <SkipLink to="#main-content">Skip to main content</SkipLink>
                  <Navigation />
                  <main id="main-content" className="w-full">
                    <Suspense fallback={<PageLoader message="Loading Zion Tech Group..." />}>
                    <Routes>
                      <Route path="/" element={<HomePage />} />
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
                      <Route path="/health" element={<HealthPage />} />
                      <Route path="/security" element={<SecurityPage />} />
                      <Route path="/compliance" element={<CompliancePage />} />
                      <Route path="/gdpr" element={<GDPRPage />} />

                      {/* AI Services Pages */}
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

                      {/* New Micro SAAS Services */}
                      <Route path="/ai-voice-cloning-studio" element={<AIVoiceCloningStudioPage />} />
                      <Route path="/ai-code-security-auditor" element={<AICodeSecurityAuditorPage />} />
                      <Route path="/ai-mental-health-companion" element={<AIMentalHealthCompanionPage />} />
                      <Route path="/ai-smart-home-controller" element={<AISmartHomeControllerPage />} />
                      <Route path="/ai-investment-optimizer" element={<AIInvestmentOptimizerPage />} />
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
                      <Route path="/ar-vr-platform" element={<ARVRPlatformPage />} />
                      <Route path="/smart-city-infrastructure" element={<SmartCityInfrastructurePage />} />
                      <Route path="/digital-twin-platform" element={<DigitalTwinPlatformPage />} />
                      <Route path="/robotics-integration" element={<RoboticsIntegrationPage />} />
                    </Routes>
                  </Suspense>
                  </main>
                  <Footer />
                </div>
                </Router>
                </AppWithPerformanceMonitoring>
              </EnhancedAccessibility>
            </AccessibilityEnhancer>
          </PerformanceOptimizer>
        </AnalyticsProvider>
      </HelmetProvider>
    </EnhancedErrorBoundary>
  );
}