import React, { Suspense, useEffect, useState, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./app/styles/futuristic.css";
import "./app/styles/accessibility-enhanced.css";
import Navigation from "./app/components/Navigation";
import Footer from "./app/components/Footer";
import Sidebar from "./app/components/Sidebar";
import HomePage from "./app/page";
import { LoadingPage } from "./app/components/LoadingStates";
import { GlobalErrorBoundary } from "./app/components/EnhancedErrorFeedback";
import EnhancedAccessibility from "./app/components/EnhancedAccessibility";
import AnalyticsProvider from "./app/components/AnalyticsProvider";
import PerformanceMonitor from "./app/components/PerformanceMonitor";
import WebVitalsTracker from "./app/components/WebVitalsTracker";
import AccessibilityEnhancer from "./app/components/AccessibilityEnhancer";
import CoreWebVitals from "./app/components/CoreWebVitals";
import FuturisticBackground from "./app/components/FuturisticBackground";
import EnhancedErrorBoundary from "./app/components/EnhancedErrorBoundary";
import Breadcrumb from "./app/components/Breadcrumb";
import EnhancedSEO from "./app/components/EnhancedSEO";
import ImprovedErrorBoundary from "./app/components/ImprovedErrorBoundary";
import ImprovedAccessibility from "./app/components/ImprovedAccessibility";
import ImprovedPerformanceMonitor from "./app/components/ImprovedPerformanceMonitor";

// Main Pages
import HomePage from './app/page'
import AboutPage from './app/about/page'
import ContactPage from './app/contact/page'
import PricingPage from './app/pricing/page'
import DemoPage from './app/demo/page'
import BlogPage from './app/blog/page'
import CareersPage from './app/careers/page'
import NewsPage from './app/news/page'
import PartnersPage from './app/partners/page'
import InvestorsPage from './app/investors/page'
// import PageLoader from './app/components/PageLoader'
import NotFoundPage from './app/not-found/page'

// Additional AI Services
import AIContentGeneratorPage from './app/ai-content-generator/page'
import AIChatbotEnterprisePage from './app/ai-chatbot-enterprise/page'
import AIAnalyticsDashboardPage from './app/ai-analytics-dashboard/page'
import AI3DGenerationPage from './app/ai-3d-generation/page'
import AIDrugDiscoveryProPage from './app/ai-drug-discovery-pro/page'
import AICybersecuritySuitePage from './app/ai-cybersecurity-suite/page'
import AICRMAssistantPage from './app/ai-crm-assistant/page'
import AIEmailMarketingPage from './app/ai-email-marketing/page'
import AIDocumentProcessingPage from './app/ai-document-processing/page'
import AIVoiceAssistantPage from './app/ai-voice-assistant/page'
import AICustomerInsightsPage from './app/ai-customer-insights/page'
import AIWorkflowAutomationPage from './app/ai-workflow-automation/page'
import AIBlockchainAnalyticsPage from './app/ai-blockchain-analytics/page'

// Additional IT Services
import ITServicesPage from './app/it-services/page'
import CloudMigrationPage from './app/cloud-migration/page'
import MobileDevelopmentPage from './app/mobile-development/page'
import APIDevelopmentPage from './app/api-development/page'
import DatabaseManagementPage from './app/database-management/page'
import NetworkInfrastructurePage from './app/network-infrastructure/page'

// Micro SaaS Services
import AICRMPage from './app/ai-crm/page'
import SmartAnalyticsPage from './app/smart-analytics/page'
import AIAutomatedTestingPage from './app/ai-automated-testing/page'
import AISocialMediaManagerPage from './app/ai-social-media-manager/page'
import AIProjectManagementPage from './app/ai-project-management/page'
import AICustomerSupportPage from './app/ai-customer-support/page'
import AIInvoiceGeneratorPage from './app/ai-invoice-generator/page'
import AIPasswordManagerPage from './app/micro-saas/ai-password-manager/page'
import AITaskManagerPage from './app/micro-saas/ai-task-manager/page'
import AIEmailMarketingPage from './app/micro-saas/ai-email-marketing/page'

// Company Pages
import TeamPage from './app/team/page'
import CaseStudiesPage from './app/case-studies/page'
import HelpPage from './app/help/page'
import DocsPage from './app/docs/page'
import APIDocsPage from './app/api-docs/page'
import CommunityPage from './app/community/page'

// Additional Missing Pages
import DevOpsSolutionsPage from './app/devops-solutions/page'
import SystemIntegrationPage from './app/system-integration/page'
import AIContentManagementPage from './app/ai-content-management/page'
import PressPage from './app/press/page'
import CookiePolicyPage from './app/cookie-policy/page'
import GDPRCompliancePage from './app/gdpr-compliance/page'
import ResourcesPage from './app/resources/page'

// 5G Solutions
import FiveGSolutionsPage from './app/5g-solutions/page'

// AI Services
const AIAnalyticsPage = React.lazy(() => import("./app/ai-analytics/page"));
const AIContentGenerationPage = React.lazy(() => import("./app/ai-content-generation/page"));
const AICustomerSupportPage = React.lazy(() => import("./app/ai-customer-support/page"));
const AICybersecurityPage = React.lazy(() => import("./app/ai-cybersecurity/page"));
const AIDataAnalyticsPage = React.lazy(() => import("./app/ai-data-analytics-pro/page"));
const AIDocumentProcessingPage = React.lazy(() => import("./app/ai-document-processing/page"));
const AIMarketingAutomationPage = React.lazy(() => import("./app/ai-marketing-automation/page"));
const AIPredictiveAnalyticsPage = React.lazy(() => import("./app/ai-predictive-analytics/page"));
const AIVoiceAssistantPage = React.lazy(() => import("./app/ai-voice-assistant/page"));
const AIWorkflowAutomationPage = React.lazy(() => import("./app/ai-workflow-automation/page"));

// IT Services
const CloudMigrationPage = React.lazy(() => import("./app/cloud-migration/page"));
const DevOpsServicesPage = React.lazy(() => import("./app/devops-services/page"));
const ITConsultingPage = React.lazy(() => import("./app/it-consulting/page"));
const NetworkSecurityPage = React.lazy(() => import("./app/network-security/page"));
const SoftwareDevelopmentPage = React.lazy(() => import("./app/software-development/page"));
const SystemIntegrationPage = React.lazy(() => import("./app/system-integration/page"));
const WebDevelopmentPage = React.lazy(() => import("./app/web-development/page"));

// Zion Services
const ZionAnalyticsPage = React.lazy(() => import("./app/zion-analytics/page"));
const ZionAIPlatformPage = React.lazy(() => import("./app/zion-ai-platform/page"));
const ZionSecurityShieldPage = React.lazy(() => import("./app/zion-security-shield/page"));
const ZionCloudInfrastructurePage = React.lazy(() => import("./app/zion-cloud-infrastructure/page"));

// 5G Solutions
const FiveGNetworkOptimizationPage = React.lazy(() => import("./app/5g-network-optimization/page"));
const FiveGEdgeComputingPage = React.lazy(() => import("./app/5g-edge-computing/page"));
const FiveGIoTIntegrationPage = React.lazy(() => import("./app/5g-iot-integration/page"));

// Micro SAAS
const ProjectManagementPage = React.lazy(() => import("./app/project-management/page"));
const CustomerRelationshipPage = React.lazy(() => import("./app/customer-relationship/page"));
const InventoryManagementPage = React.lazy(() => import("./app/inventory-management/page"));
const FinancialManagementPage = React.lazy(() => import("./app/financial-management/page"));
const EmployeeManagementPage = React.lazy(() => import("./app/employee-management/page"));
const SocialMediaManagementPage = React.lazy(() => import("./app/social-media-management/page"));
const EmailMarketingPage = React.lazy(() => import("./app/email-marketing/page"));
const WebsiteBuilderPage = React.lazy(() => import("./app/website-builder/page"));
const TaskManagementPage = React.lazy(() => import("./app/task-management/page"));

// Additional AI Services
const AIAutomationPlatformPage = React.lazy(() => import("./app/ai-automation-platform/page"));
const AICustomerSentimentTrackerPage = React.lazy(() => import("./app/ai-customer-sentiment-tracker/page"));
const AIFinancialAnalysisPage = React.lazy(() => import("./app/ai-financial-analysis/page"));
const AIHealthcareDiagnosticsPage = React.lazy(() => import("./app/ai-healthcare-diagnostics/page"));
const AIHolographicWorkspacePage = React.lazy(() => import("./app/ai-holographic-workspace/page"));
const AIHRRecruitmentProPage = React.lazy(() => import("./app/ai-hr-recruitment-pro/page"));
const AIImageRecognitionProPage = React.lazy(() => import("./app/ai-image-recognition-pro/page"));
const AIPoweredDevOpsPage = React.lazy(() => import("./app/ai-powered-devops/page"));
const AIPoweredEmailAnalyzerPage = React.lazy(() => import("./app/ai-powered-email-analyzer/page"));
const AIQuantumComputingPage = React.lazy(() => import("./app/ai-quantum-computing/page"));
const AISupplyChainOptimizerPage = React.lazy(() => import("./app/ai-supply-chain-optimizer/page"));
const AITranslationServicePage = React.lazy(() => import("./app/ai-translation-service/page"));

// Other pages
const BlockchainWeb3Page = React.lazy(() => import("./app/blockchain-web3/page"));
const CaseStudiesPage = React.lazy(() => import("./app/case-studies/page"));
const CareersPage = React.lazy(() => import("./app/careers/page"));

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  useEffect(() => {
    // Initialize performance monitoring
    if (typeof window !== 'undefined') {
      // Preload critical resources
      const preloadCriticalResources = () => {
        const criticalImages = [
          '/images/hero-bg.jpg',
          '/images/logo.png',
        ];
        
        criticalImages.forEach(src => {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'image';
          link.href = src;
          document.head.appendChild(link);
        });
      };

      preloadCriticalResources();
    }
  }, []);

  const toggleSidebar = useCallback(() => {
    setSidebarOpen(prev => !prev);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <div className="min-h-screen bg-gray-900 text-white">
            <Header />
            <Breadcrumb />
            <main>
              <Suspense fallback={<LoadingSpinner fullScreen text="Loading application..." />}>
                  <Routes>
                {/* Main Pages */}
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/demo" element={<DemoPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/press" element={<PressPage />} />
                <Route path="/partners" element={<PartnersPage />} />
                <Route path="/investors" element={<InvestorsPage />} />
                <Route path="/community" element={<CommunityPage />} />
                <Route path="/case-studies" element={<CaseStudiesPage />} />
                
                {/* AI Services */}
                <Route path="/ai-content-generator" element={<AIContentGeneratorPage />} />
                <Route path="/ai-chatbot-enterprise" element={<AIChatbotEnterprisePage />} />
                <Route path="/ai-analytics-dashboard" element={<AIAnalyticsDashboardPage />} />
                <Route path="/ai-3d-generation" element={<AI3DGenerationPage />} />
                <Route path="/ai-drug-discovery-pro" element={<AIDrugDiscoveryProPage />} />
                <Route path="/ai-cybersecurity-suite" element={<AICybersecuritySuitePage />} />
                <Route path="/ai-crm-assistant" element={<AICRMAssistantPage />} />
                <Route path="/ai-email-marketing" element={<AIEmailMarketingPage />} />
                <Route path="/ai-document-processing" element={<AIDocumentProcessingPage />} />
                <Route path="/ai-voice-assistant" element={<AIVoiceAssistantPage />} />
                <Route path="/ai-customer-insights" element={<AICustomerInsightsPage />} />
                <Route path="/ai-workflow-automation" element={<AIWorkflowAutomationPage />} />
                <Route path="/ai-blockchain-analytics" element={<AIBlockchainAnalyticsPage />} />
                
                {/* IT Services */}
                <Route path="/it-services" element={<ITServicesPage />} />
                <Route path="/cloud-migration" element={<CloudMigrationPage />} />
                <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                <Route path="/api-development" element={<APIDevelopmentPage />} />
                <Route path="/database-management" element={<DatabaseManagementPage />} />
                <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} />
                
                {/* Micro SaaS Services */}
                <Route path="/ai-crm" element={<AICRMPage />} />
                <Route path="/smart-analytics" element={<SmartAnalyticsPage />} />
                <Route path="/ai-automated-testing" element={<AIAutomatedTestingPage />} />
                <Route path="/ai-social-media-manager" element={<AISocialMediaManagerPage />} />
                <Route path="/ai-project-management" element={<AIProjectManagementPage />} />
                <Route path="/ai-customer-support" element={<AICustomerSupportPage />} />
                <Route path="/ai-invoice-generator" element={<AIInvoiceGeneratorPage />} />
                <Route path="/micro-saas/ai-password-manager" element={<AIPasswordManagerPage />} />
                <Route path="/micro-saas/ai-task-manager" element={<AITaskManagerPage />} />
                <Route path="/micro-saas/ai-email-marketing" element={<AIEmailMarketingPage />} />
                
                {/* Company Pages */}
                <Route path="/team" element={<TeamPage />} />
                <Route path="/case-studies" element={<CaseStudiesPage />} />
                <Route path="/help" element={<HelpPage />} />
                <Route path="/docs" element={<DocsPage />} />
                <Route path="/api-docs" element={<APIDocsPage />} />
                <Route path="/community" element={<CommunityPage />} />
                
                {/* Additional Missing Pages */}
                <Route path="/devops-solutions" element={<DevOpsSolutionsPage />} />
                <Route path="/system-integration" element={<SystemIntegrationPage />} />
                <Route path="/ai-content-management" element={<AIContentManagementPage />} />
                <Route path="/press" element={<PressPage />} />
                <Route path="/cookie-policy" element={<CookiePolicyPage />} />
                <Route path="/gdpr-compliance" element={<GDPRCompliancePage />} />
                <Route path="/resources" element={<ResourcesPage />} />
                
                {/* 5G Solutions */}
                <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                
                {/* AI Services */}
                <Route path="/ai-translation-services" element={<AITranslationServicesPage />} />
                
                {/* IT Services */}
                <Route path="/server-management" element={<ServerManagementPage />} />
                
                {/* Micro SaaS Services */}
                <Route path="/micro-saas/contract-manager" element={<ContractManagerPage />} />
                <Route path="/micro-saas/email-signature" element={<EmailSignaturePage />} />
                <Route path="/micro-saas/employee-directory" element={<EmployeeDirectoryPage />} />
                
                {/* 404 Page */}
                <Route path="*" element={<NotFoundPage />} />
                  </Routes>
                </Suspense>
              </main>
              <Footer />
              <CookieConsent />
              <EnhancedPerformanceMonitor />
              <AccessibilityEnhancer />
              <MobileOptimizer />
            </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;