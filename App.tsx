import ImprovedPerformanceMonitor from "./app/components/ImprovedPerformanceMonitor";

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import("./app/about/page"));
const ContactPage = React.lazy(() => import("./app/contact/page"));
const ServicesPage = React.lazy(() => import("./app/services/page"));
const BlogPage = React.lazy(() => import("./app/blog/page"));
const PrivacyPage = React.lazy(() => import("./app/privacy/page"));
const TermsPage = React.lazy(() => import("./app/terms/page"));

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
    <HelmetProvider>
      <Router>
        <GlobalErrorBoundary>
          <AnalyticsProvider>
            <PerformanceMonitor>
              <WebVitalsTracker>
                <CoreWebVitals>
                  <AccessibilityEnhancer>
                    <ImprovedAccessibility>
                      <ImprovedPerformanceMonitor>
                        <FuturisticBackground>
                          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                            <Navigation onMenuClick={toggleSidebar} />
                            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
                            
                            <main className="relative">
                              <Breadcrumb />
                              <Suspense fallback={<LoadingPage />}>
                                <Routes>
                                  {/* Main Pages */}
                                  <Route path="/" element={<HomePage />} />
                                  <Route path="/about" element={<AboutPage />} />
                                  <Route path="/contact" element={<ContactPage />} />
                                  <Route path="/services" element={<ServicesPage />} />
                                  <Route path="/blog" element={<BlogPage />} />
                                  <Route path="/privacy" element={<PrivacyPage />} />
                                  <Route path="/terms" element={<TermsPage />} />

                                  {/* AI Services */}
                                  <Route path="/ai-services" element={<AIServicesPage />} />
                                  <Route path="/ai-analytics" element={<AIAnalyticsPage />} />
                                  <Route path="/ai-automation-platform" element={<AIAutomationPlatformPage />} />
                                  <Route path="/ai-climate-prediction-engine" element={<AIClimatePredictionPage />} />
                                  <Route path="/ai-customer-sentiment-tracker" element={<AICustomerSentimentPage />} />
                                  <Route path="/ai-data-analytics-pro" element={<AIDataAnalyticsPage />} />
                                  <Route path="/ai-financial-analysis" element={<AIFinancialAnalysisPage />} />
                                  <Route path="/ai-healthcare-diagnostics" element={<AIHealthcareDiagnosticsPage />} />
                                  <Route path="/ai-holographic-workspace" element={<AIHolographicWorkspacePage />} />
                                  <Route path="/ai-hr-recruitment-pro" element={<AIHRRecruitmentPage />} />
                                  <Route path="/ai-image-recognition-pro" element={<AIImageRecognitionPage />} />
                                  <Route path="/ai-powered-devops" element={<AIPoweredDevOpsPage />} />
                                  <Route path="/ai-powered-email-analyzer" element={<AIPoweredEmailAnalyzerPage />} />
                                  <Route path="/ai-quantum-computing" element={<AIQuantumComputingPage />} />
                                  <Route path="/ai-supply-chain-optimizer" element={<AISupplyChainOptimizerPage />} />
                                  <Route path="/ai-translation-service" element={<AITranslationServicePage />} />

                                  {/* Zion Services */}
                                  <Route path="/zion-analytics" element={<ZionAnalyticsPage />} />
                                  <Route path="/zion-ai-platform" element={<ZionAIPlatformPage />} />
                                  <Route path="/zion-security-shield" element={<ZionSecurityShieldPage />} />

                                  {/* 5G Services */}
                                  <Route path="/5g-network-optimization" element={<FiveGNetworkOptimizationPage />} />
                                  <Route path="/5g-infrastructure" element={<FiveGInfrastructurePage />} />

                                  {/* IT Services */}
                                  <Route path="/cloud-infrastructure-management" element={<CloudInfrastructurePage />} />
                                  <Route path="/cloud-migration-pro" element={<CloudMigrationPage />} />
                                  <Route path="/blockchain-web3" element={<BlockchainWeb3Page />} />

                                  {/* Micro SAAS */}
                                  <Route path="/micro-saas" element={<MicroSAASPage />} />
                                  <Route path="/project-management-saas" element={<ProjectManagementPage />} />
                                  <Route path="/customer-relationship-saas" element={<CustomerRelationshipPage />} />
                                  <Route path="/inventory-management-saas" element={<InventoryManagementPage />} />
                                  <Route path="/financial-management-saas" element={<FinancialManagementPage />} />
                                  <Route path="/employee-management-saas" element={<EmployeeManagementPage />} />
                                  <Route path="/social-media-management-saas" element={<SocialMediaManagementPage />} />
                                  <Route path="/email-marketing-saas" element={<EmailMarketingPage />} />
                                  <Route path="/website-builder-saas" element={<WebsiteBuilderPage />} />
                                  <Route path="/task-management-saas" element={<TaskManagementPage />} />
                                  <Route path="/smart-home-saas" element={<SmartHomePage />} />
                                  <Route path="/ai-powered-chatbot-saas" element={<AIPoweredChatbotPage />} />
                                </Routes>
                              </Suspense>
                            </main>

                            <Footer />
                          </div>
                        </FuturisticBackground>
                      </ImprovedPerformanceMonitor>
                    </ImprovedAccessibility>
                  </AccessibilityEnhancer>
                </CoreWebVitals>
              </WebVitalsTracker>
            </PerformanceMonitor>
          </AnalyticsProvider>
        </GlobalErrorBoundary>
      </Router>
    </HelmetProvider>
  );
}

export default App;