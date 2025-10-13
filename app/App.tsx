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

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <div className="App">
            <PerformanceMonitor />
            <AccessibilityEnhancer />
            <Suspense fallback={<AppLoadingSpinner />}>
              <Routes>
                {/* Main Pages */}
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/ai-automation" element={<AIAutomationPage />} />
                <Route path="/ai-data-analytics" element={<AIDataAnalyticsPage />} />
                <Route path="/ai-email-assistant" element={<AIEmailAssistantPage />} />
                <Route path="/ai-email-marketing-automation" element={<AIEmailMarketingAutomationPage />} />
                <Route path="/ai-expense-tracker" element={<AIExpenseTrackerPage />} />
                <Route path="/ai-financial-analysis" element={<AIFinancialAnalysisPage />} />
                <Route path="/ai-fraud-detection" element={<AIFraudDetectionPage />} />
                <Route path="/ai-automated-reporting" element={<AIAutomatedReportingPage />} />
                <Route path="/ai-data-analytics-pro" element={<AIDataAnalyticsProPage />} />
                <Route path="/ad-management" element={<AdManagementPage />} />
                <Route path="/edge-computing" element={<EdgeComputingPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </div>
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  );
};






                {/* Micro SaaS */}
                <Route path="/micro-saas" element={<MicroSaasPage />} />

