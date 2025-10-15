import { Suspense, useEffect } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './app/styles/futuristic.css'

// Import pages
import HomePage from './app/page';
import AboutPage from './app/about/page';
import ServicesPage from './app/services/page';
import ContactPage from './app/contact/page';
import AIServicesPage from './app/ai-services/page';
import ITServicesPage from './app/it-services/page';
import CloudInfrastructurePage from './app/cloud-infrastructure/page';
import TeamPage from './app/team/page';
import CareersPage from './app/careers/page';
import HelpPage from './app/help/page';
import PrivacyPage from './app/privacy/page';
import TermsPage from './app/terms/page';
import CookiesPage from './app/cookies/page';
import PricingPage from './app/pricing/page';
import CaseStudiesPage from './app/case-studies/page';
import PartnershipsPage from './app/partnerships/page';
import FiveGSolutionsPage from './app/5g-solutions/page';
import AISolutionsPage from './app/ai-solutions/page';
import DigitalTransformationPage from './app/digital-transformation/page';
import DataAnalyticsPage from './app/data-analytics/page';
import DatabaseManagementPage from './app/database-management/page';
import MobileDevelopmentPage from './app/mobile-development/page';
import NetworkInfrastructurePage from './app/network-infrastructure/page';
import WebDevelopmentPage from './app/web-development/page';
import MicroSaasSolutionsPage from './app/micro-saas-solutions/page';
import APIDocsPage from './app/api-docs/page';
import AccessibilityPage from './app/accessibility/page';
import AIContentGeneratorPage from './app/ai-content-generator/page';

// Import Zion AI Tools
import ZionAIContentModeratorPage from './app/zion-ai-content-moderator/page';
import ZionAICustomerChurnPredictorPage from './app/zion-ai-customer-churn-predictor/page';
import ZionAICustomerChurnPredictorProPage from './app/zion-ai-customer-churn-predictor-pro/page';
import ZionAICustomerSentimentTrackerPage from './app/zion-ai-customer-sentiment-tracker/page';
import ZionAICustomerSupportProPage from './app/zion-ai-customer-support-pro/page';
import ZionAIDocumentAnalyzerPage from './app/zion-ai-document-analyzer/page';
import ZionAIEmailMarketingProPage from './app/zion-ai-email-marketing-pro/page';
import ZionAIFinancialForecasterPage from './app/zion-ai-financial-forecaster/page';
import ZionAIInventoryOptimizerProPage from './app/zion-ai-inventory-optimizer-pro/page';
import ZionAIMeetingTranscriberPage from './app/zion-ai-meeting-transcriber/page';
import ZionAISalesPredictorPage from './app/zion-ai-sales-predictor/page';
import ZionAISocialSchedulerProPage from './app/zion-ai-social-scheduler-pro/page';
import ZionAITaskSchedulerPage from './app/zion-ai-task-scheduler/page';
import ZionAIWorkflowAutomatorPage from './app/zion-ai-workflow-automator/page';
import ZionAIWorkflowAutomatorProPage from './app/zion-ai-workflow-automator-pro/page';
import ZionCustomerSatisfactionMonitorPage from './app/zion-customer-satisfaction-monitor/page';
import ZionSmartExpenseTrackerPage from './app/zion-smart-expense-tracker/page';
import BlogPage from './app/blog/page';

<<<<<<< HEAD
// Import components
import Navigation from './app/components/Navigation';
import Sidebar from './app/components/Sidebar';
import Footer from './app/components/Footer';
import GlobalErrorBoundary from './app/components/GlobalErrorBoundary';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
=======
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
<<<<<<< HEAD
const AIProjectManagerPage = React.lazy(() => import('./app/ai-project-manager/page'));
const AIQuantumComputingPage = React.lazy(() => import('./app/ai-quantum-computing/page'));
const AIQuantumFinancialOraclePage = React.lazy(() => import('./app/ai-quantum-financial-oracle/page'));
const AISmartCalendarPage = React.lazy(() => import('./app/ai-smart-calendar/page'));
const AISocialMediaManagerPage = React.lazy(() => import('./app/ai-social-media-manager/page'));
const AISpaceTechnologyProPage = React.lazy(() => import('./app/ai-space-technology-pro/page'));
const AISupplyChainOptimizationProPage = React.lazy(() => import('./app/ai-supply-chain-optimization-pro/page'));
const AIVideoGeneratorPage = React.lazy(() => import('./app/ai-video-generator/page'));
const AIWorkflowAutomationPage = React.lazy(() => import('./app/ai-workflow-automation/page'));

<<<<<<< HEAD
=======
// New Micro SAAS Services
const AIVoiceCloningStudioPage = React.lazy(() => import('./app/ai-voice-cloning-studio/page'));
const AICodeSecurityAuditorPage = React.lazy(() => import('./app/ai-code-security-auditor/page'));
const AIMentalHealthCompanionPage = React.lazy(() => import('./app/ai-mental-health-companion/page'));
const AISmartHomeControllerPage = React.lazy(() => import('./app/ai-smart-home-controller/page'));
const AIInvestmentOptimizerPage = React.lazy(() => import('./app/ai-investment-optimizer/page'));

>>>>>>> origin/main
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
=======
>>>>>>> origin/main
const HealthcareITPage = React.lazy(() => import('./app/healthcare-it/page'));
const FinancialITPage = React.lazy(() => import('./app/financial-it/page'));
const EdgeComputingPage = React.lazy(() => import('./app/edge-computing/page'));
const FiveGImplementationPage = React.lazy(() => import('./app/5g-implementation/page'));
const IoTPlatformPage = React.lazy(() => import('./app/iot-platform/page'));
>>>>>>> 38b43e42238c1581a5624bf9b55de28a497ee69f

// Loading component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
  </div>
)

export default function App() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical fonts
      const fontPreload = document.createElement('link')
      fontPreload.rel = 'preload'
      fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
      fontPreload.as = 'style'
      document.head.appendChild(fontPreload)
    }

    preloadCriticalResources()
  }, [])

  return (
    <GlobalErrorBoundary>
      <HelmetProvider>
<<<<<<< HEAD
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Navigation />
            <Sidebar />
            
            <main className="flex-1">
              <PerformanceMonitor />
              <AccessibilityEnhancer />
              
              <Suspense fallback={<LoadingFallback />}>
                <Routes>
                  {/* Main Pages */}
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  
                  {/* Service Pages */}
                  <Route path="/ai-services" element={<AIServicesPage />} />
                  <Route path="/it-services" element={<ITServicesPage />} />
                  <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                  <Route path="/ai-solutions" element={<AISolutionsPage />} />
                  <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
                  <Route path="/data-analytics" element={<DataAnalyticsPage />} />
                  <Route path="/database-management" element={<DatabaseManagementPage />} />
                  <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                  <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} />
                  <Route path="/web-development" element={<WebDevelopmentPage />} />
                  <Route path="/micro-saas-solutions" element={<MicroSaasSolutionsPage />} />
                  <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                  
                  {/* Company Pages */}
                  <Route path="/team" element={<TeamPage />} />
                  <Route path="/careers" element={<CareersPage />} />
                  <Route path="/partnerships" element={<PartnershipsPage />} />
                  <Route path="/case-studies" element={<CaseStudiesPage />} />
                  <Route path="/pricing" element={<PricingPage />} />
                  
                  {/* Support Pages */}
                  <Route path="/help" element={<HelpPage />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                  <Route path="/cookies" element={<CookiesPage />} />
                  <Route path="/accessibility" element={<AccessibilityPage />} />
                  
                  {/* Additional Pages */}
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/api-docs" element={<APIDocsPage />} />
                  
                  {/* AI Tools Pages */}
                  <Route path="/ai-content-generator" element={<AIContentGeneratorPage />} />
                  
                  {/* Zion AI Tools */}
                  <Route path="/zion-ai-content-moderator" element={<ZionAIContentModeratorPage />} />
                  <Route path="/zion-ai-customer-churn-predictor" element={<ZionAICustomerChurnPredictorPage />} />
                  <Route path="/zion-ai-customer-churn-predictor-pro" element={<ZionAICustomerChurnPredictorProPage />} />
                  <Route path="/zion-ai-customer-sentiment-tracker" element={<ZionAICustomerSentimentTrackerPage />} />
                  <Route path="/zion-ai-customer-support-pro" element={<ZionAICustomerSupportProPage />} />
                  <Route path="/zion-ai-document-analyzer" element={<ZionAIDocumentAnalyzerPage />} />
                  <Route path="/zion-ai-email-marketing-pro" element={<ZionAIEmailMarketingProPage />} />
                  <Route path="/zion-ai-financial-forecaster" element={<ZionAIFinancialForecasterPage />} />
                  <Route path="/zion-ai-inventory-optimizer-pro" element={<ZionAIInventoryOptimizerProPage />} />
                  <Route path="/zion-ai-meeting-transcriber" element={<ZionAIMeetingTranscriberPage />} />
                  <Route path="/zion-ai-sales-predictor" element={<ZionAISalesPredictorPage />} />
                  <Route path="/zion-ai-social-scheduler-pro" element={<ZionAISocialSchedulerProPage />} />
                  <Route path="/zion-ai-task-scheduler" element={<ZionAITaskSchedulerPage />} />
                  <Route path="/zion-ai-workflow-automator" element={<ZionAIWorkflowAutomatorPage />} />
                  <Route path="/zion-ai-workflow-automator-pro" element={<ZionAIWorkflowAutomatorProPage />} />
                  <Route path="/zion-customer-satisfaction-monitor" element={<ZionCustomerSatisfactionMonitorPage />} />
                  <Route path="/zion-smart-expense-tracker" element={<ZionSmartExpenseTrackerPage />} />
                  
                  {/* Catch all route */}
                  <Route path="*" element={<div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
                      <p className="text-gray-600 mb-8">Page not found</p>
                      <a href="/" className="text-blue-600 hover:text-blue-800">Go back home</a>
                    </div>
                  </div>} />
                </Routes>
              </Suspense>
            </main>
            
            <Footer />
          </div>
        </Router>
=======
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
<<<<<<< HEAD
<<<<<<< HEAD
                      <Route path="/" element={
                        <div className="w-full">
                          <UnifiedContentPromotion />
                          <InteractiveAIROICalculator />
                          <ContentShowcase />
                          <InteractiveContentShowcase2026 />
                        </div>
                      } />
                      
                      {/* Main Pages */}
=======
                      <Route path="/" element={<HomePage />} />
>>>>>>> origin/main
=======
<Route path="/" element={<HomePage />} />
>>>>>>> origin/main
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
<<<<<<< HEAD
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

<<<<<<< HEAD
=======
                      {/* New Micro SAAS Services */}
                      <Route path="/ai-voice-cloning-studio" element={<AIVoiceCloningStudioPage />} />
                      <Route path="/ai-code-security-auditor" element={<AICodeSecurityAuditorPage />} />
                      <Route path="/ai-mental-health-companion" element={<AIMentalHealthCompanionPage />} />
                      <Route path="/ai-smart-home-controller" element={<AISmartHomeControllerPage />} />
                      <Route path="/ai-investment-optimizer" element={<AIInvestmentOptimizerPage />} />

>>>>>>> origin/main
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
=======
<Route path="/services" element={<ServicesPage />} />
>>>>>>> origin/main
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
>>>>>>> 38b43e42238c1581a5624bf9b55de28a497ee69f
      </HelmetProvider>
    </GlobalErrorBoundary>
  )
}