import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import Navigation from './app/components/Navigation';
import Sidebar from './app/components/Sidebar';
import Header from './app/components/Header';
import Footer from './app/components/Footer';
import ErrorBoundary from './app/components/ErrorBoundary';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import LoadingSpinner from './app/components/LoadingSpinner';

// Page Components
import HomePage from './app/page';
import AboutPage from './app/pages/AboutPage';
import ContactPage from './app/pages/ContactPage';
import ServicesPage from './app/pages/ServicesPage';
import BlogPage from './app/pages/BlogPage';
import TutorialsPage from './app/pages/TutorialsPage';
import DemoPage from './app/pages/DemoPage';
import SupportPage from './app/pages/SupportPage';
import PrivacyPage from './app/pages/PrivacyPage';
import TermsPage from './app/pages/TermsPage';
import PricingPage from './app/pages/PricingPage';
import SolutionsPage from './app/pages/SolutionsPage';
import MicroSaaSSolutionsPage from './app/micro-saas-solutions/page';
import AISolutionsPage from './app/ai-solutions/page';
import ITSolutionsPage from './app/it-solutions/page';

// Service Pages
import AIServicesPage from './app/ai-services/page';
import ITServicesPage from './app/it-services/page';
import CloudInfrastructurePage from './app/cloud-infrastructure/page';
import DigitalTransformationPage from './app/digital-transformation/page';
import CaseStudiesPage from './app/case-studies/page';
import CareersPage from './app/careers/page';

// Additional Pages
import CybersecurityPage from './app/cybersecurity/page';
import CloudSolutionsPage from './app/cloud-services/page';
import MicroSaaSPage from './app/micro-saas/page';
import FiveGSolutionsPage from './app/5g-solutions/page';
import TeamPage from './app/team/page';
import DocumentationPage from './app/docs/page';

// Lazy load heavy components
const LazyHomePage = React.lazy(() => import('./app/page'));
const LazyAboutPage = React.lazy(() => import('./app/pages/AboutPage'));
const LazyContactPage = React.lazy(() => import('./app/pages/ContactPage'));
const LazyServicesPage = React.lazy(() => import('./app/pages/ServicesPage'));
const LazyBlogPage = React.lazy(() => import('./app/pages/BlogPage'));
const LazyTutorialsPage = React.lazy(() => import('./app/pages/TutorialsPage'));
const LazyDemoPage = React.lazy(() => import('./app/pages/DemoPage'));
const LazySupportPage = React.lazy(() => import('./app/pages/SupportPage'));
const LazyPrivacyPage = React.lazy(() => import('./app/pages/PrivacyPage'));
const LazyTermsPage = React.lazy(() => import('./app/pages/TermsPage'));
const LazyPricingPage = React.lazy(() => import('./app/pages/PricingPage'));
const LazySolutionsPage = React.lazy(() => import('./app/pages/SolutionsPage'));

// AI Service Lazy Components
const LazyAI3DGenerationPage = React.lazy(() => import('./app/ai-3d-generation/page'));
const LazyAIAnalyticsDashboardProPage = React.lazy(() => import('./app/ai-analytics-dashboard-pro/page'));
const LazyAIAutomationPlatformPage = React.lazy(() => import('./app/ai-automation-platform/page'));
const LazyAICustomerSentimentTrackerPage = React.lazy(() => import('./app/ai-customer-sentiment-tracker/page'));
const LazyAICustomerSupportChatbotPage = React.lazy(() => import('./app/ai-customer-support-chatbot/page'));
const LazyAIEcommerceOptimizerProPage = React.lazy(() => import('./app/ai-ecommerce-optimizer-pro/page'));
const LazyAIEmailAssistantPage = React.lazy(() => import('./app/ai-email-assistant/page'));
const LazyAIEmailMarketingAutomationPage = React.lazy(() => import('./app/ai-email-marketing-automation/page'));
const LazyAIExpenseTrackerPage = React.lazy(() => import('./app/ai-expense-tracker/page'));
const LazyAIFinancialAnalyticsProPage = React.lazy(() => import('./app/ai-financial-analytics-pro/page'));
const LazyAIHealthcareDiagnosticsPage = React.lazy(() => import('./app/ai-healthcare-diagnostics/page'));
const LazyAIMarketingAutomationPage = React.lazy(() => import('./app/ai-marketing-automation/page'));
const LazyAIPersonalizedLearningPage = React.lazy(() => import('./app/ai-personalized-learning/page'));
const LazyAIPoweredDevOpsPage = React.lazy(() => import('./app/ai-powered-devops/page'));
const LazyAIPoweredEmailAnalyzerPage = React.lazy(() => import('./app/ai-powered-email-analyzer/page'));
const LazyAIProjectManagementProPage = React.lazy(() => import('./app/ai-project-management-pro/page'));
const LazyAIQuantumComputingPage = React.lazy(() => import('./app/ai-quantum-computing/page'));
const LazyAISmartSchedulerPage = React.lazy(() => import('./app/ai-smart-scheduler/page'));
const LazyAISocialMediaManagerPage = React.lazy(() => import('./app/ai-social-media-manager/page'));
const LazyAISupplyChainOptimizerPage = React.lazy(() => import('./app/ai-supply-chain-optimizer/page'));
const LazyAITranslationServicePage = React.lazy(() => import('./app/ai-translation-service/page'));

// Zion Service Lazy Components
const LazyZionAICRMProPage = React.lazy(() => import('./app/zion-ai-crm-pro/page'));
const LazyZionAICustomerInsightsPage = React.lazy(() => import('./app/zion-ai-customer-insights/page'));
const LazyZionAIInvoiceGeneratorPage = React.lazy(() => import('./app/zion-ai-invoice-generator/page'));
const LazyZionAIMarketingAutomationProPage = React.lazy(() => import('./app/zion-ai-marketing-automation-pro/page'));
const LazyZionAIProjectManagerProPage = React.lazy(() => import('./app/zion-ai-project-manager-pro/page'));
const LazyZionAIVideoGeneratorPage = React.lazy(() => import('./app/zion-ai-video-generator/page'));
const LazyZionAnalyticsProPage = React.lazy(() => import('./app/zion-analytics-pro/page'));
const LazyZionCloudVaultPage = React.lazy(() => import('./app/zion-cloud-vault/page'));
const LazyZionSecurityShieldPage = React.lazy(() => import('./app/zion-security-shield/page'));

// Other Service Lazy Components
const LazyBlockchainWeb3Page = React.lazy(() => import('./app/blockchain-web3/page'));
const LazyCloudInfrastructureManagementPage = React.lazy(() => import('./app/cloud-infrastructure-management/page'));
const LazyCloudMigrationProPage = React.lazy(() => import('./app/cloud-migration-pro/page'));
const LazyCommunityPage = React.lazy(() => import('./app/community/page'));
const LazyCompliancePage = React.lazy(() => import('./app/compliance/page'));
const LazyConsultationPage = React.lazy(() => import('./app/consultation/page'));
const LazyCustomDevelopmentPage = React.lazy(() => import('./app/custom-development/page'));
const LazyCustomerRelationshipManagerPage = React.lazy(() => import('./app/customer-relationship-manager/page'));
const LazyDevOpsServicesPage = React.lazy(() => import('./app/devops-services/page'));
const LazyEmailMarketingPlatformPage = React.lazy(() => import('./app/email-marketing-platform/page'));
const LazyEmployeeTimeTrackerPage = React.lazy(() => import('./app/employee-time-tracker/page'));
const LazyFinancialReportingToolPage = React.lazy(() => import('./app/financial-reporting-tool/page'));
const LazyInventoryManagementSystemPage = React.lazy(() => import('./app/inventory-management-system/page'));
const LazyITSolutionsPage = React.lazy(() => import('./app/it-solutions/page'));
const LazyPartnersPage = React.lazy(() => import('./app/partners/page'));
const LazyPressPage = React.lazy(() => import('./app/press/page'));
const LazyProjectManagementToolPage = React.lazy(() => import('./app/project-management-tool/page'));
const LazySmartExpenseCategorizerPage = React.lazy(() => import('./app/smart-expense-categorizer/page'));
const LazySmartInventoryOptimizerPage = React.lazy(() => import('./app/smart-inventory-optimizer/page'));
const LazySocialMediaSchedulerPage = React.lazy(() => import('./app/social-media-scheduler/page'));
const LazySoftwareDevelopmentPage = React.lazy(() => import('./app/software-development/page'));
const LazyTaskAutomationWorkflowPage = React.lazy(() => import('./app/task-automation-workflow/page'));
const LazyWebsiteAnalyticsToolPage = React.lazy(() => import('./app/website-analytics-tool/page'));

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ErrorBoundary>
          <PerformanceMonitor />
          <AccessibilityEnhancer>
            <div className="min-h-screen bg-slate-900 text-white">
              <Navigation />
              <Sidebar />
              <Header />
              
              <main className="flex-1">
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    {/* Main Pages */}
                    <Route path="/" element={<LazyHomePage />} />
                    <Route path="/about" element={<LazyAboutPage />} />
                    <Route path="/contact" element={<LazyContactPage />} />
                    <Route path="/services" element={<LazyServicesPage />} />
                    <Route path="/blog" element={<LazyBlogPage />} />
                    <Route path="/tutorials" element={<LazyTutorialsPage />} />
                    <Route path="/demo" element={<LazyDemoPage />} />
                    <Route path="/support" element={<LazySupportPage />} />
                    <Route path="/privacy" element={<LazyPrivacyPage />} />
                    <Route path="/terms" element={<LazyTermsPage />} />
                    <Route path="/pricing" element={<LazyPricingPage />} />
                    <Route path="/solutions" element={<LazySolutionsPage />} />
                    
                    {/* Service Category Pages */}
                    <Route path="/ai-solutions" element={<AISolutionsPage />} />
                    <Route path="/it-solutions" element={<ITSolutionsPage />} />
                    <Route path="/micro-saas-solutions" element={<MicroSaaSSolutionsPage />} />
                    <Route path="/micro-saas" element={<MicroSaaSPage />} />
                    <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                    <Route path="/team" element={<TeamPage />} />
                    <Route path="/docs" element={<DocumentationPage />} />
                    
                    {/* Service Pages */}
                    <Route path="/ai-services" element={<AIServicesPage />} />
                    <Route path="/it-services" element={<ITServicesPage />} />
                    <Route path="/cybersecurity" element={<CybersecurityPage />} />
                    <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                    <Route path="/cloud-services" element={<CloudSolutionsPage />} />
                    <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
                    <Route path="/case-studies" element={<CaseStudiesPage />} />
                    <Route path="/careers" element={<CareersPage />} />
                    
                    {/* AI Service Pages */}
                    <Route path="/ai-3d-generation" element={<Suspense fallback={<LoadingSpinner />}><LazyAI3DGenerationPage /></Suspense>} />
                    <Route path="/ai-analytics-dashboard-pro" element={<Suspense fallback={<LoadingSpinner />}><LazyAIAnalyticsDashboardProPage /></Suspense>} />
                    <Route path="/ai-automation-platform" element={<Suspense fallback={<LoadingSpinner />}><LazyAIAutomationPlatformPage /></Suspense>} />
                    <Route path="/ai-customer-sentiment-tracker" element={<Suspense fallback={<LoadingSpinner />}><LazyAICustomerSentimentTrackerPage /></Suspense>} />
                    <Route path="/ai-customer-support-chatbot" element={<Suspense fallback={<LoadingSpinner />}><LazyAICustomerSupportChatbotPage /></Suspense>} />
                    <Route path="/ai-ecommerce-optimizer-pro" element={<Suspense fallback={<LoadingSpinner />}><LazyAIEcommerceOptimizerProPage /></Suspense>} />
                    <Route path="/ai-email-assistant" element={<Suspense fallback={<LoadingSpinner />}><LazyAIEmailAssistantPage /></Suspense>} />
                    <Route path="/ai-email-marketing-automation" element={<Suspense fallback={<LoadingSpinner />}><LazyAIEmailMarketingAutomationPage /></Suspense>} />
                    <Route path="/ai-expense-tracker" element={<Suspense fallback={<LoadingSpinner />}><LazyAIExpenseTrackerPage /></Suspense>} />
                    <Route path="/ai-financial-analytics-pro" element={<Suspense fallback={<LoadingSpinner />}><LazyAIFinancialAnalyticsProPage /></Suspense>} />
                    <Route path="/ai-healthcare-diagnostics" element={<Suspense fallback={<LoadingSpinner />}><LazyAIHealthcareDiagnosticsPage /></Suspense>} />
                    <Route path="/ai-marketing-automation" element={<Suspense fallback={<LoadingSpinner />}><LazyAIMarketingAutomationPage /></Suspense>} />
                    <Route path="/ai-personalized-learning" element={<Suspense fallback={<LoadingSpinner />}><LazyAIPersonalizedLearningPage /></Suspense>} />
                    <Route path="/ai-powered-devops" element={<Suspense fallback={<LoadingSpinner />}><LazyAIPoweredDevOpsPage /></Suspense>} />
                    <Route path="/ai-powered-email-analyzer" element={<Suspense fallback={<LoadingSpinner />}><LazyAIPoweredEmailAnalyzerPage /></Suspense>} />
                    <Route path="/ai-project-management-pro" element={<Suspense fallback={<LoadingSpinner />}><LazyAIProjectManagementProPage /></Suspense>} />
                    <Route path="/ai-quantum-computing" element={<Suspense fallback={<LoadingSpinner />}><LazyAIQuantumComputingPage /></Suspense>} />
                    <Route path="/ai-smart-scheduler" element={<Suspense fallback={<LoadingSpinner />}><LazyAISmartSchedulerPage /></Suspense>} />
                    <Route path="/ai-social-media-manager" element={<Suspense fallback={<LoadingSpinner />}><LazyAISocialMediaManagerPage /></Suspense>} />
                    <Route path="/ai-supply-chain-optimizer" element={<Suspense fallback={<LoadingSpinner />}><LazyAISupplyChainOptimizerPage /></Suspense>} />
                    <Route path="/ai-translation-service" element={<Suspense fallback={<LoadingSpinner />}><LazyAITranslationServicePage /></Suspense>} />
                    
                    {/* Zion Service Pages */}
                    <Route path="/zion-ai-crm-pro" element={<Suspense fallback={<LoadingSpinner />}><LazyZionAICRMProPage /></Suspense>} />
                    <Route path="/zion-ai-customer-insights" element={<Suspense fallback={<LoadingSpinner />}><LazyZionAICustomerInsightsPage /></Suspense>} />
                    <Route path="/zion-ai-invoice-generator" element={<Suspense fallback={<LoadingSpinner />}><LazyZionAIInvoiceGeneratorPage /></Suspense>} />
                    <Route path="/zion-ai-marketing-automation-pro" element={<Suspense fallback={<LoadingSpinner />}><LazyZionAIMarketingAutomationProPage /></Suspense>} />
                    <Route path="/zion-ai-project-manager-pro" element={<Suspense fallback={<LoadingSpinner />}><LazyZionAIProjectManagerProPage /></Suspense>} />
                    <Route path="/zion-ai-video-generator" element={<Suspense fallback={<LoadingSpinner />}><LazyZionAIVideoGeneratorPage /></Suspense>} />
                    <Route path="/zion-analytics-pro" element={<Suspense fallback={<LoadingSpinner />}><LazyZionAnalyticsProPage /></Suspense>} />
                    <Route path="/zion-cloud-vault" element={<Suspense fallback={<LoadingSpinner />}><LazyZionCloudVaultPage /></Suspense>} />
                    <Route path="/zion-security-shield" element={<Suspense fallback={<LoadingSpinner />}><LazyZionSecurityShieldPage /></Suspense>} />
                    
                    {/* Other Service Pages */}
                    <Route path="/blockchain-web3" element={<Suspense fallback={<LoadingSpinner />}><LazyBlockchainWeb3Page /></Suspense>} />
                    <Route path="/cloud-infrastructure-management" element={<Suspense fallback={<LoadingSpinner />}><LazyCloudInfrastructureManagementPage /></Suspense>} />
                    <Route path="/cloud-migration-pro" element={<Suspense fallback={<LoadingSpinner />}><LazyCloudMigrationProPage /></Suspense>} />
                    <Route path="/community" element={<Suspense fallback={<LoadingSpinner />}><LazyCommunityPage /></Suspense>} />
                    <Route path="/compliance" element={<Suspense fallback={<LoadingSpinner />}><LazyCompliancePage /></Suspense>} />
                    <Route path="/consultation" element={<Suspense fallback={<LoadingSpinner />}><LazyConsultationPage /></Suspense>} />
                    <Route path="/custom-development" element={<Suspense fallback={<LoadingSpinner />}><LazyCustomDevelopmentPage /></Suspense>} />
                    <Route path="/customer-relationship-manager" element={<Suspense fallback={<LoadingSpinner />}><LazyCustomerRelationshipManagerPage /></Suspense>} />
                    <Route path="/devops-services" element={<Suspense fallback={<LoadingSpinner />}><LazyDevOpsServicesPage /></Suspense>} />
                    <Route path="/email-marketing-platform" element={<Suspense fallback={<LoadingSpinner />}><LazyEmailMarketingPlatformPage /></Suspense>} />
                    <Route path="/employee-time-tracker" element={<Suspense fallback={<LoadingSpinner />}><LazyEmployeeTimeTrackerPage /></Suspense>} />
                    <Route path="/financial-reporting-tool" element={<Suspense fallback={<LoadingSpinner />}><LazyFinancialReportingToolPage /></Suspense>} />
                    <Route path="/inventory-management-system" element={<Suspense fallback={<LoadingSpinner />}><LazyInventoryManagementSystemPage /></Suspense>} />
                    <Route path="/it-solutions" element={<Suspense fallback={<LoadingSpinner />}><LazyITSolutionsPage /></Suspense>} />
                    <Route path="/partners" element={<Suspense fallback={<LoadingSpinner />}><LazyPartnersPage /></Suspense>} />
                    <Route path="/press" element={<Suspense fallback={<LoadingSpinner />}><LazyPressPage /></Suspense>} />
                    <Route path="/project-management-tool" element={<Suspense fallback={<LoadingSpinner />}><LazyProjectManagementToolPage /></Suspense>} />
                    <Route path="/smart-expense-categorizer" element={<Suspense fallback={<LoadingSpinner />}><LazySmartExpenseCategorizerPage /></Suspense>} />
                    <Route path="/smart-inventory-optimizer" element={<Suspense fallback={<LoadingSpinner />}><LazySmartInventoryOptimizerPage /></Suspense>} />
                    <Route path="/social-media-scheduler" element={<Suspense fallback={<LoadingSpinner />}><LazySocialMediaSchedulerPage /></Suspense>} />
                    <Route path="/software-development" element={<Suspense fallback={<LoadingSpinner />}><LazySoftwareDevelopmentPage /></Suspense>} />
                    <Route path="/task-automation-workflow" element={<Suspense fallback={<LoadingSpinner />}><LazyTaskAutomationWorkflowPage /></Suspense>} />
                    <Route path="/website-analytics-tool" element={<Suspense fallback={<LoadingSpinner />}><LazyWebsiteAnalyticsToolPage /></Suspense>} />
                  </Routes>
                </Suspense>
              </main>
              
              <Footer />
            </div>
          </AccessibilityEnhancer>
        </ErrorBoundary>
      </Router>
    </HelmetProvider>
  );
}

export default App;