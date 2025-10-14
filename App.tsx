import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import ErrorBoundary from './app/components/ErrorBoundary';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';

// AI Services
const AIAnalyticsPage = React.lazy(() => import("./app/ai-analytics/page"));
const AIAutomationPlatformPage = React.lazy(() => import("./app/ai-automation-platform/page"));
const AIClimatePredictionPage = React.lazy(() => import("./app/ai-climate-prediction-engine/page"));
const AICustomerSentimentPage = React.lazy(() => import("./app/ai-customer-sentiment-tracker/page"));
const AIDataAnalyticsPage = React.lazy(() => import("./app/ai-data-analytics-pro/page"));
const AIFinancialAnalysisPage = React.lazy(() => import("./app/ai-financial-analysis/page"));
const AIHealthcareDiagnosticsPage = React.lazy(() => import("./app/ai-healthcare-diagnostics/page"));
const AIHolographicWorkspacePage = React.lazy(() => import("./app/ai-holographic-workspace/page"));
const AIHRRecruitmentPage = React.lazy(() => import("./app/ai-hr-recruitment-pro/page"));
const AIImageRecognitionPage = React.lazy(() => import("./app/ai-image-recognition-pro/page"));
const AIPoweredDevOpsPage = React.lazy(() => import("./app/ai-powered-devops/page"));
const AIPoweredEmailAnalyzerPage = React.lazy(() => import("./app/ai-powered-email-analyzer/page"));
const AIQuantumComputingPage = React.lazy(() => import("./app/ai-quantum-computing/page"));
const AIServicesPage = React.lazy(() => import("./app/ai-services/page"));
const AISupplyChainOptimizerPage = React.lazy(() => import("./app/ai-supply-chain-optimizer/page"));
const AITranslationServicePage = React.lazy(() => import("./app/ai-translation-service/page"));

// Zion Services
const ZionAnalyticsPage = React.lazy(() => import("./app/zion-analytics/page"));
const ZionAIPlatformPage = React.lazy(() => import("./app/zion-ai-platform/page"));
const ZionSecurityShieldPage = React.lazy(() => import("./app/zion-security-shield/page"));

// 5G Services
const FiveGNetworkOptimizationPage = React.lazy(() => import("./app/5g-network-optimization/page"));
const FiveGInfrastructurePage = React.lazy(() => import("./app/5g-infrastructure/page"));

// IT Services
const CloudInfrastructurePage = React.lazy(() => import("./app/cloud-infrastructure-management/page"));
const CloudMigrationPage = React.lazy(() => import("./app/cloud-migration-pro/page"));
const BlockchainWeb3Page = React.lazy(() => import("./app/blockchain-web3/page"));

// Micro SAAS
const MicroSAASPage = React.lazy(() => import("./app/micro-saas/page"));
const ProjectManagementPage = React.lazy(() => import("./app/project-management-saas/page"));
const CustomerRelationshipPage = React.lazy(() => import("./app/customer-relationship-saas/page"));
const InventoryManagementPage = React.lazy(() => import("./app/inventory-management-saas/page"));
const FinancialManagementPage = React.lazy(() => import("./app/financial-management-saas/page"));
const EmployeeManagementPage = React.lazy(() => import("./app/employee-management-saas/page"));
const SocialMediaManagementPage = React.lazy(() => import("./app/social-media-management-saas/page"));
const EmailMarketingPage = React.lazy(() => import("./app/email-marketing-saas/page"));
const WebsiteBuilderPage = React.lazy(() => import("./app/website-builder-saas/page"));
const TaskManagementPage = React.lazy(() => import("./app/task-management-saas/page"));
const SmartHomePage = React.lazy(() => import("./app/smart-home-saas/page"));
const AIPoweredChatbotPage = React.lazy(() => import("./app/ai-powered-chatbot-saas/page"));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const toggleSidebar = useCallback(() => {
    setSidebarOpen(prev => !prev);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <div className="min-h-screen bg-slate-900">
            <Navigation />
            <main className="relative z-10" id="main-content" role="main">
              <ErrorBoundary>
                <Routes>
                  {/* Main Pages */}
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/micro-saas-solutions" element={<MicroSaaSSolutionsPage />} />
                  <Route path="/ai-solutions" element={<AISolutionsPage />} />
                  <Route path="/it-solutions" element={<ITSolutionsPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/tutorials" element={<TutorialsPage />} />
                  <Route path="/demo" element={<DemoPage />} />
                  <Route path="/support" element={<SupportPage />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/solutions" element={<SolutionsPage />} />
                  
                  {/* Service Pages */}
                  <Route path="/ai-services" element={<AIServicesPage />} />
                  <Route path="/it-services" element={<ITServicesPage />} />
                  <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                  <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
                  <Route path="/case-studies" element={<CaseStudiesPage />} />
                  <Route path="/careers" element={<CareersPage />} />
                  
                  {/* Catch all route */}
                  <Route path="*" element={
                    <div className="min-h-screen flex items-center justify-center bg-slate-900">
                      <div className="text-center">
                        <h1 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h1>
                        <p className="text-gray-300 mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
                        <a href="/" className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-2 px-4 rounded transition-all duration-300">
                          Go Home
                        </a>
                      </div>
                    </div>
                  } />
                </Routes>
              </ErrorBoundary>
            </main>
            <Footer />
            <PerformanceMonitor />
            <AccessibilityEnhancer />
          </div>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;