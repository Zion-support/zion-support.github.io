import React, { Suspense, lazy, memo, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./app/page'));
const AboutPage = lazy(() => import('./app/about/page'));
const ContactPage = lazy(() => import('./app/contact/page'));
const ServicesPage = lazy(() => import('./app/services/page'));
const PricingPage = lazy(() => import('./app/pricing/page'));
const BlogPage = lazy(() => import('./app/blog/page'));
const CaseStudiesPage = lazy(() => import('./app/case-studies/page'));
const TeamPage = lazy(() => import('./app/team/page'));
const CareersPage = lazy(() => import('./app/careers/page'));
const PrivacyPage = lazy(() => import('./app/privacy/page'));
const TermsPage = lazy(() => import('./app/terms/page'));
const CookiesPage = lazy(() => import('./app/cookies/page'));
const DocsPage = lazy(() => import('./app/docs/page'));
const ApiDocsPage = lazy(() => import('./app/api-docs/page'));
const ConsultationPage = lazy(() => import('./app/consultation/page'));
const CompliancePage = lazy(() => import('./app/compliance/page'));
const GdprPage = lazy(() => import('./app/gdpr/page'));
const AIServicesPage = lazy(() => import('./app/ai-services/page'));
const MicroSaasPage = lazy(() => import('./app/micro-saas/page'));
const ITConsultingPage = lazy(() => import('./app/it-consulting/page'));
const ITInfrastructurePage = lazy(() => import('./app/it-infrastructure/page'));
const CloudInfrastructurePage = lazy(() => import('./app/cloud-infrastructure/page'));
const CloudMigrationPage = lazy(() => import('./app/cloud-migration/page'));
const SecurityPage = lazy(() => import('./app/security/page'));
const SupportPage = lazy(() => import('./app/support/page'));

// AI Services Pages
const AIMarketingPage = lazy(() => import('./app/ai-marketing/page'));
const AIAutomationPage = lazy(() => import('./app/ai-automation/page'));
const AIHealthcarePage = lazy(() => import('./app/ai-healthcare/page'));
const AIFintechPage = lazy(() => import('./app/ai-fintech/page'));
const AIContentGenerationPage = lazy(() => import('./app/ai-content-generation/page'));
const AIDataAnalyticsPage = lazy(() => import('./app/ai-data-analytics/page'));
const AICybersecurityPage = lazy(() => import('./app/ai-cybersecurity/page'));
const AIWorkflowAutomationPage = lazy(() => import('./app/ai-workflow-automation/page'));
const AICustomerSupportPage = lazy(() => import('./app/ai-customer-support/page'));
const AISalesAutomationPage = lazy(() => import('./app/ai-sales-automation/page'));
const AIProjectManagementPage = lazy(() => import('./app/ai-project-management/page'));
const AICRMPage = lazy(() => import('./app/ai-crm/page'));
const AICustomerServicePage = lazy(() => import('./app/ai-customer-service/page'));
const AICustomerSupportBotPage = lazy(() => import('./app/ai-customer-support-bot/page'));
const AIDocumentProcessorPage = lazy(() => import('./app/ai-document-processor/page'));
const AIEmailMarketingPage = lazy(() => import('./app/ai-email-marketing/page'));
const AIEnterpriseSolutionsPage = lazy(() => import('./app/ai-enterprise-solutions/page'));
const AIExpenseTrackerPage = lazy(() => import('./app/ai-expense-tracker/page'));
const AIFashionDesignPage = lazy(() => import('./app/ai-fashion-design/page'));
const AIFinancialAdvisorPage = lazy(() => import('./app/ai-financial-advisor/page'));
const AIFitnessCoachPage = lazy(() => import('./app/ai-fitness-coach/page'));
const AIHealthcareSolutionsPage = lazy(() => import('./app/ai-healthcare-solutions/page'));
const AIHRAssistantPage = lazy(() => import('./app/ai-hr-assistant/page'));
const AIImageRecognitionPage = lazy(() => import('./app/ai-image-recognition/page'));
const AIInventoryManagementPage = lazy(() => import('./app/ai-inventory-management/page'));
const AIInvoiceGeneratorPage = lazy(() => import('./app/ai-invoice-generator/page'));
const AIMobileAppBuilderPage = lazy(() => import('./app/ai-mobile-app-builder/page'));
const AIMusicCompositionPage = lazy(() => import('./app/ai-music-composition/page'));
const AIPredictiveAnalyticsPage = lazy(() => import('./app/ai-predictive-analytics/page'));
const AIProjectManagerPage = lazy(() => import('./app/ai-project-manager/page'));
const AIRecommendationEnginePage = lazy(() => import('./app/ai-recommendation-engine/page'));
const AISchedulerPage = lazy(() => import('./app/ai-scheduler/page'));
const AISEOOptimizerPage = lazy(() => import('./app/ai-seo-optimizer/page'));
const AISocialMediaManagerPage = lazy(() => import('./app/ai-social-media-manager/page'));
const AITimeTrackerPage = lazy(() => import('./app/ai-time-tracker/page'));
const AIVideoGenerationPage = lazy(() => import('./app/ai-video-generation/page'));
const AIVoiceCloningPage = lazy(() => import('./app/ai-voice-cloning/page'));
const AIVoiceProcessingPage = lazy(() => import('./app/ai-voice-processing/page'));
const AIWritingAssistantPage = lazy(() => import('./app/ai-writing-assistant/page'));
const AI3DGenerationPage = lazy(() => import('./app/ai-3d-generation/page'));
const AIAnalyticsPage = lazy(() => import('./app/ai-analytics/page'));
const AIAnalyticsDashboardPage = lazy(() => import('./app/ai-analytics-dashboard/page'));
const AIBusinessIntelligencePage = lazy(() => import('./app/ai-business-intelligence/page'));
const AIChatbotBuilderPage = lazy(() => import('./app/ai-chatbot-builder/page'));
const AICloudInfrastructurePage = lazy(() => import('./app/ai-cloud-infrastructure/page'));
const AICodeGenerationPage = lazy(() => import('./app/ai-code-generation/page'));
const AIContentStudioPage = lazy(() => import('./app/ai-content-studio/page'));
const AIDesignStudioPage = lazy(() => import('./app/ai-design-studio/page'));
const AIDataVisualizationPage = lazy(() => import('./app/ai-data-visualization/page'));

// IT Services Pages
const ITServicesPage = lazy(() => import('./app/it-services/page'));
const ITSupportPage = lazy(() => import('./app/it-support/page'));
const CybersecurityPage = lazy(() => import('./app/cybersecurity/page'));
const DatabaseManagementPage = lazy(() => import('./app/database-management/page'));
const ManagedITPage = lazy(() => import('./app/managed-it/page'));
const NetworkSolutionsPage = lazy(() => import('./app/network-solutions/page'));

// Emerging Tech Pages
const QuantumComputingPage = lazy(() => import('./app/quantum-computing/page'));
const AutonomousSystemsPage = lazy(() => import('./app/autonomous-systems/page'));
const BlockchainPage = lazy(() => import('./app/blockchain/page'));
const IoTEdgeComputingPage = lazy(() => import('./app/iot-edge-computing/page'));
const RoboticsPage = lazy(() => import('./app/robotics/page'));
const ARVRSolutionsPage = lazy(() => import('./app/ar-vr-solutions/page'));

// Additional Pages
const NewsPage = lazy(() => import('./app/news/page'));
const SitemapPage = lazy(() => import('./app/sitemap/page'));
const SLAPage = lazy(() => import('./app/sla/page'));
const SmartAnalyticsPage = lazy(() => import('./app/smart-analytics/page'));
const SmartCitiesPage = lazy(() => import('./app/smart-cities/page'));
const StatusPage = lazy(() => import('./app/status/page'));
const SystemStatusPage = lazy(() => import('./app/system-status/page'));
const CybersecuritySuitePage = lazy(() => import('./app/cybersecurity-suite/page'));
const ITInfrastructureSolutionsPage = lazy(() => import('./app/it-infrastructure-solutions/page'));

// Lazy load components
const Navigation = React.lazy(() => import('./app/components/Navigation'));
const Footer = React.lazy(() => import('./app/components/Footer'));
const PerformanceMonitor = React.lazy(() => import('./app/components/PerformanceMonitor'));
const AccessibilityEnhancer = React.lazy(() => import('./app/components/AccessibilityEnhancer'));

// Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({ error, errorInfo });
    // Log error to monitoring service in production
    // In production, this should be sent to an error tracking service
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-lg p-8 text-center border border-white/20">
            <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Loading component
const LoadingSpinner = memo(() => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
      <p className="text-white text-lg">Loading...</p>
    </div>
  </div>
));

// Main App Component
const App: React.FC = () => {
  const routes = useMemo(() => [
    // Main Pages
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/contact', component: ContactPage },
    { path: '/services', component: ServicesPage },
    { path: '/pricing', component: PricingPage },
    { path: '/blog', component: BlogPage },
    { path: '/case-studies', component: CaseStudiesPage },
    { path: '/team', component: TeamPage },
    { path: '/careers', component: CareersPage },
    { path: '/privacy', component: PrivacyPage },
    { path: '/terms', component: TermsPage },
    { path: '/cookies', component: CookiesPage },
    { path: '/docs', component: DocsPage },
    { path: '/api-docs', component: ApiDocsPage },
    { path: '/consultation', component: ConsultationPage },
    { path: '/compliance', component: CompliancePage },
    { path: '/gdpr', component: GdprPage },
    { path: '/ai-services', component: AIServicesPage },
    { path: '/micro-saas', component: MicroSaasPage },
    { path: '/it-consulting', component: ITConsultingPage },
    { path: '/it-infrastructure', component: ITInfrastructurePage },
    { path: '/cloud-infrastructure', component: CloudInfrastructurePage },
    { path: '/cloud-migration', component: CloudMigrationPage },
    { path: '/security', component: SecurityPage },
    { path: '/support', component: SupportPage },
    
    // AI Services
    { path: '/ai-marketing', component: AIMarketingPage },
    { path: '/ai-automation', component: AIAutomationPage },
    { path: '/ai-healthcare', component: AIHealthcarePage },
    { path: '/ai-fintech', component: AIFintechPage },
    { path: '/ai-content-generation', component: AIContentGenerationPage },
    { path: '/ai-data-analytics', component: AIDataAnalyticsPage },
    { path: '/ai-cybersecurity', component: AICybersecurityPage },
    { path: '/ai-workflow-automation', component: AIWorkflowAutomationPage },
    { path: '/ai-customer-support', component: AICustomerSupportPage },
    { path: '/ai-sales-automation', component: AISalesAutomationPage },
    { path: '/ai-project-management', component: AIProjectManagementPage },
    { path: '/ai-crm', component: AICRMPage },
    { path: '/ai-customer-service', component: AICustomerServicePage },
    { path: '/ai-customer-support-bot', component: AICustomerSupportBotPage },
    { path: '/ai-document-processor', component: AIDocumentProcessorPage },
    { path: '/ai-email-marketing', component: AIEmailMarketingPage },
    { path: '/ai-enterprise-solutions', component: AIEnterpriseSolutionsPage },
    { path: '/ai-expense-tracker', component: AIExpenseTrackerPage },
    { path: '/ai-fashion-design', component: AIFashionDesignPage },
    { path: '/ai-financial-advisor', component: AIFinancialAdvisorPage },
    { path: '/ai-fitness-coach', component: AIFitnessCoachPage },
    { path: '/ai-healthcare-solutions', component: AIHealthcareSolutionsPage },
    { path: '/ai-hr-assistant', component: AIHRAssistantPage },
    { path: '/ai-image-recognition', component: AIImageRecognitionPage },
    { path: '/ai-inventory-management', component: AIInventoryManagementPage },
    { path: '/ai-invoice-generator', component: AIInvoiceGeneratorPage },
    { path: '/ai-mobile-app-builder', component: AIMobileAppBuilderPage },
    { path: '/ai-music-composition', component: AIMusicCompositionPage },
    { path: '/ai-predictive-analytics', component: AIPredictiveAnalyticsPage },
    { path: '/ai-project-manager', component: AIProjectManagerPage },
    { path: '/ai-recommendation-engine', component: AIRecommendationEnginePage },
    { path: '/ai-scheduler', component: AISchedulerPage },
    { path: '/ai-seo-optimizer', component: AISEOOptimizerPage },
    { path: '/ai-social-media-manager', component: AISocialMediaManagerPage },
    { path: '/ai-time-tracker', component: AITimeTrackerPage },
    { path: '/ai-video-generation', component: AIVideoGenerationPage },
    { path: '/ai-voice-cloning', component: AIVoiceCloningPage },
    { path: '/ai-voice-processing', component: AIVoiceProcessingPage },
    { path: '/ai-writing-assistant', component: AIWritingAssistantPage },
    { path: '/ai-3d-generation', component: AI3DGenerationPage },
    { path: '/ai-analytics', component: AIAnalyticsPage },
    { path: '/ai-analytics-dashboard', component: AIAnalyticsDashboardPage },
    { path: '/ai-business-intelligence', component: AIBusinessIntelligencePage },
    { path: '/ai-chatbot-builder', component: AIChatbotBuilderPage },
    { path: '/ai-cloud-infrastructure', component: AICloudInfrastructurePage },
    { path: '/ai-code-generation', component: AICodeGenerationPage },
    { path: '/ai-content-studio', component: AIContentStudioPage },
    { path: '/ai-design-studio', component: AIDesignStudioPage },
    { path: '/ai-data-visualization', component: AIDataVisualizationPage },
    
    // IT Services
    { path: '/it-services', component: ITServicesPage },
    { path: '/it-support', component: ITSupportPage },
    { path: '/cybersecurity', component: CybersecurityPage },
    { path: '/database-management', component: DatabaseManagementPage },
    { path: '/managed-it', component: ManagedITPage },
    { path: '/network-solutions', component: NetworkSolutionsPage },
    
    // Emerging Tech
    { path: '/quantum-computing', component: QuantumComputingPage },
    { path: '/autonomous-systems', component: AutonomousSystemsPage },
    { path: '/blockchain', component: BlockchainPage },
    { path: '/iot-edge-computing', component: IoTEdgeComputingPage },
    { path: '/robotics', component: RoboticsPage },
    { path: '/ar-vr-solutions', component: ARVRSolutionsPage },
    
    // Additional Pages
    { path: '/news', component: NewsPage },
    { path: '/sitemap', component: SitemapPage },
    { path: '/sla', component: SLAPage },
    { path: '/smart-analytics', component: SmartAnalyticsPage },
    { path: '/smart-cities', component: SmartCitiesPage },
    { path: '/status', component: StatusPage },
    { path: '/system-status', component: SystemStatusPage },
    { path: '/cybersecurity-suite', component: CybersecuritySuitePage },
    { path: '/it-infrastructure-solutions', component: ITInfrastructureSolutionsPage },
  ], []);

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Helmet>
          <title>Zion Tech Group - Advanced AI and IT Solutions</title>
          <meta name="description" content="Leading provider of AI-powered solutions, IT consulting, and innovative technology services for businesses worldwide." />
          <meta name="keywords" content="AI solutions, IT consulting, cloud infrastructure, cybersecurity, digital transformation" />
          <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
          <meta property="og:description" content="Leading provider of AI-powered solutions, IT consulting, and innovative technology services." />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
          <meta name="twitter:description" content="Leading provider of AI-powered solutions, IT consulting, and innovative technology services." />
        </Helmet>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <Suspense fallback={<LoadingSpinner />}>
              <Navigation />
            </Suspense>
            
            <main className="relative">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  {routes.map(({ path, component: Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                  ))}
                </Routes>
              </Suspense>
            </main>
            
            <Suspense fallback={<div className="h-32 bg-slate-800" />}>
              <Footer />
            </Suspense>
            
            <Suspense fallback={null}>
              <PerformanceMonitor />
            </Suspense>
            
            <Suspense fallback={null}>
              <AccessibilityEnhancer />
            </Suspense>
          </div>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;
