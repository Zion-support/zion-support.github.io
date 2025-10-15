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

// AI Service Pages - Lazy loaded
const LazyAI3DGeneration = React.lazy(() => import('./app/ai-3d-generation/page'));
const LazyAIAnalyticsDashboardPro = React.lazy(() => import('./app/ai-analytics-dashboard-pro/page'));
const LazyAIAutomationPlatform = React.lazy(() => import('./app/ai-automation-platform/page'));
const LazyAICustomerSentimentTracker = React.lazy(() => import('./app/ai-customer-sentiment-tracker/page'));
const LazyAICustomerSupportChatbot = React.lazy(() => import('./app/ai-customer-support-chatbot/page'));
const LazyAIEcommerceOptimizerPro = React.lazy(() => import('./app/ai-ecommerce-optimizer-pro/page'));
const LazyAIEmailAssistant = React.lazy(() => import('./app/ai-email-assistant/page'));
const LazyAIEmailMarketingAutomation = React.lazy(() => import('./app/ai-email-marketing-automation/page'));
const LazyAIExpenseTracker = React.lazy(() => import('./app/ai-expense-tracker/page'));
const LazyAIFinancialAnalyticsPro = React.lazy(() => import('./app/ai-financial-analytics-pro/page'));
const LazyAIHealthcareDiagnostics = React.lazy(() => import('./app/ai-healthcare-diagnostics/page'));
const LazyAIMarketingAutomation = React.lazy(() => import('./app/ai-marketing-automation/page'));
const LazyAIPersonalizedLearning = React.lazy(() => import('./app/ai-personalized-learning/page'));
const LazyAIPoweredDevOps = React.lazy(() => import('./app/ai-powered-devops/page'));
const LazyAIPoweredEmailAnalyzer = React.lazy(() => import('./app/ai-powered-email-analyzer/page'));
const LazyAIProjectManagementPro = React.lazy(() => import('./app/ai-project-management-pro/page'));
const LazyAIQuantumComputing = React.lazy(() => import('./app/ai-quantum-computing/page'));
const LazyAISmartScheduler = React.lazy(() => import('./app/ai-smart-scheduler/page'));
const LazyAISocialMediaManager = React.lazy(() => import('./app/ai-social-media-manager/page'));
const LazyAISupplyChainOptimizer = React.lazy(() => import('./app/ai-supply-chain-optimizer/page'));
const LazyAITranslationService = React.lazy(() => import('./app/ai-translation-service/page'));

// Zion Service Pages - Lazy loaded
const LazyZionAICRMPro = React.lazy(() => import('./app/zion-ai-crm-pro/page'));
const LazyZionAICustomerInsights = React.lazy(() => import('./app/zion-ai-customer-insights/page'));
const LazyZionAIInvoiceGenerator = React.lazy(() => import('./app/zion-ai-invoice-generator/page'));
const LazyZionAIMarketingAutomationPro = React.lazy(() => import('./app/zion-ai-marketing-automation-pro/page'));
const LazyZionAIProjectManagerPro = React.lazy(() => import('./app/zion-ai-project-manager-pro/page'));
const LazyZionAIVideoGenerator = React.lazy(() => import('./app/zion-ai-video-generator/page'));
const LazyZionAnalyticsPro = React.lazy(() => import('./app/zion-analytics-pro/page'));
const LazyZionCloudVault = React.lazy(() => import('./app/zion-cloud-vault/page'));
const LazyZionSecurityShield = React.lazy(() => import('./app/zion-security-shield/page'));

// Other Service Pages - Lazy loaded
const LazyBlockchainWeb3 = React.lazy(() => import('./app/blockchain-web3/page'));
const LazyCloudInfrastructureManagement = React.lazy(() => import('./app/cloud-infrastructure-management/page'));
const LazyCloudMigrationPro = React.lazy(() => import('./app/cloud-migration-pro/page'));
const LazyCommunity = React.lazy(() => import('./app/community/page'));
const LazyCompliance = React.lazy(() => import('./app/compliance/page'));
const LazyConsultation = React.lazy(() => import('./app/consultation/page'));
const LazyCustomDevelopment = React.lazy(() => import('./app/custom-development/page'));
const LazyCustomerRelationshipManager = React.lazy(() => import('./app/customer-relationship-manager/page'));
const LazyDevOpsServices = React.lazy(() => import('./app/devops-services/page'));
const LazyEmailMarketingPlatform = React.lazy(() => import('./app/email-marketing-platform/page'));
const LazyEmployeeTimeTracker = React.lazy(() => import('./app/employee-time-tracker/page'));
const LazyFinancialReportingTool = React.lazy(() => import('./app/financial-reporting-tool/page'));
const LazyInventoryManagementSystem = React.lazy(() => import('./app/inventory-management-system/page'));
const LazyITSolutions = React.lazy(() => import('./app/it-solutions/page'));
const LazyPartners = React.lazy(() => import('./app/partners/page'));
const LazyPress = React.lazy(() => import('./app/press/page'));
const LazyProjectManagementTool = React.lazy(() => import('./app/project-management-tool/page'));
const LazySmartExpenseCategorizer = React.lazy(() => import('./app/smart-expense-categorizer/page'));
const LazySmartInventoryOptimizer = React.lazy(() => import('./app/smart-inventory-optimizer/page'));
const LazySocialMediaScheduler = React.lazy(() => import('./app/social-media-scheduler/page'));
const LazySoftwareDevelopment = React.lazy(() => import('./app/software-development/page'));
const LazyTaskAutomationWorkflow = React.lazy(() => import('./app/task-automation-workflow/page'));
const LazyWebsiteAnalyticsTool = React.lazy(() => import('./app/website-analytics-tool/page'));

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
                    <Route path="/ai-3d-generation" element={<LazyAI3DGeneration />} />
                    <Route path="/ai-analytics-dashboard-pro" element={<LazyAIAnalyticsDashboardPro />} />
                    <Route path="/ai-automation-platform" element={<LazyAIAutomationPlatform />} />
                    <Route path="/ai-customer-sentiment-tracker" element={<LazyAICustomerSentimentTracker />} />
                    <Route path="/ai-customer-support-chatbot" element={<LazyAICustomerSupportChatbot />} />
                    <Route path="/ai-ecommerce-optimizer-pro" element={<LazyAIEcommerceOptimizerPro />} />
                    <Route path="/ai-email-assistant" element={<LazyAIEmailAssistant />} />
                    <Route path="/ai-email-marketing-automation" element={<LazyAIEmailMarketingAutomation />} />
                    <Route path="/ai-expense-tracker" element={<LazyAIExpenseTracker />} />
                    <Route path="/ai-financial-analytics-pro" element={<LazyAIFinancialAnalyticsPro />} />
                    <Route path="/ai-healthcare-diagnostics" element={<LazyAIHealthcareDiagnostics />} />
                    <Route path="/ai-marketing-automation" element={<LazyAIMarketingAutomation />} />
                    <Route path="/ai-personalized-learning" element={<LazyAIPersonalizedLearning />} />
                    <Route path="/ai-powered-devops" element={<LazyAIPoweredDevOps />} />
                    <Route path="/ai-powered-email-analyzer" element={<LazyAIPoweredEmailAnalyzer />} />
                    <Route path="/ai-project-management-pro" element={<LazyAIProjectManagementPro />} />
                    <Route path="/ai-quantum-computing" element={<LazyAIQuantumComputing />} />
                    <Route path="/ai-smart-scheduler" element={<LazyAISmartScheduler />} />
                    <Route path="/ai-social-media-manager" element={<LazyAISocialMediaManager />} />
                    <Route path="/ai-supply-chain-optimizer" element={<LazyAISupplyChainOptimizer />} />
                    <Route path="/ai-translation-service" element={<LazyAITranslationService />} />
                    
                    {/* Zion Service Pages */}
                    <Route path="/zion-ai-crm-pro" element={<LazyZionAICRMPro />} />
                    <Route path="/zion-ai-customer-insights" element={<LazyZionAICustomerInsights />} />
                    <Route path="/zion-ai-invoice-generator" element={<LazyZionAIInvoiceGenerator />} />
                    <Route path="/zion-ai-marketing-automation-pro" element={<LazyZionAIMarketingAutomationPro />} />
                    <Route path="/zion-ai-project-manager-pro" element={<LazyZionAIProjectManagerPro />} />
                    <Route path="/zion-ai-video-generator" element={<LazyZionAIVideoGenerator />} />
                    <Route path="/zion-analytics-pro" element={<LazyZionAnalyticsPro />} />
                    <Route path="/zion-cloud-vault" element={<LazyZionCloudVault />} />
                    <Route path="/zion-security-shield" element={<LazyZionSecurityShield />} />
                    
                    {/* Other Service Pages */}
                    <Route path="/blockchain-web3" element={<LazyBlockchainWeb3 />} />
                    <Route path="/cloud-infrastructure-management" element={<LazyCloudInfrastructureManagement />} />
                    <Route path="/cloud-migration-pro" element={<LazyCloudMigrationPro />} />
                    <Route path="/community" element={<LazyCommunity />} />
                    <Route path="/compliance" element={<LazyCompliance />} />
                    <Route path="/consultation" element={<LazyConsultation />} />
                    <Route path="/custom-development" element={<LazyCustomDevelopment />} />
                    <Route path="/customer-relationship-manager" element={<LazyCustomerRelationshipManager />} />
                    <Route path="/devops-services" element={<LazyDevOpsServices />} />
                    <Route path="/email-marketing-platform" element={<LazyEmailMarketingPlatform />} />
                    <Route path="/employee-time-tracker" element={<LazyEmployeeTimeTracker />} />
                    <Route path="/financial-reporting-tool" element={<LazyFinancialReportingTool />} />
                    <Route path="/inventory-management-system" element={<LazyInventoryManagementSystem />} />
                    <Route path="/it-solutions" element={<LazyITSolutions />} />
                    <Route path="/partners" element={<LazyPartners />} />
                    <Route path="/press" element={<LazyPress />} />
                    <Route path="/project-management-tool" element={<LazyProjectManagementTool />} />
                    <Route path="/smart-expense-categorizer" element={<LazySmartExpenseCategorizer />} />
                    <Route path="/smart-inventory-optimizer" element={<LazySmartInventoryOptimizer />} />
                    <Route path="/social-media-scheduler" element={<LazySocialMediaScheduler />} />
                    <Route path="/software-development" element={<LazySoftwareDevelopment />} />
                    <Route path="/task-automation-workflow" element={<LazyTaskAutomationWorkflow />} />
                    <Route path="/website-analytics-tool" element={<LazyWebsiteAnalyticsTool />} />
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