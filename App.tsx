'use client';

<<<<<<< HEAD
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
<<<<<<< HEAD
=======
    this.setState({ error, errorInfo });
>>>>>>> cursor/analyze-improve-and-deploy-application-f5c8
    // Log error to monitoring service in production
    // In production, this should be sent to an error tracking service
    if (process.env.NODE_ENV === 'development') {
<<<<<<< HEAD
      // Error logging would be handled by error tracking service in production
=======
      console.error('Error caught by boundary:', error, errorInfo);
>>>>>>> cursor/analyze-improve-and-deploy-application-f5c8
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
<<<<<<< HEAD
              Refresh Page
=======
              Reload Page
>>>>>>> cursor/analyze-improve-and-deploy-application-f5c8
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
<<<<<<< HEAD
  const routes = useMemo(() => [
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
  ], []);
=======
  const helmetContext = useMemo(() => ({}), []);
>>>>>>> cursor/analyze-improve-and-deploy-application-f5c8

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
=======
import React, { Suspense, lazy, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Routes, Route, Navigate } from 'react-router-dom';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'));
const AboutPage = lazy(() => import('./about/page'));
const ContactPage = lazy(() => import('./contact/page'));
const CaseStudiesPage = lazy(() => import('./case-studies/page'));
const BlogPage = lazy(() => import('./blog/page'));

// AI Services
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

// IT Services
const ItServicesPage = lazy(() => import('./it-services/page'));
const ItInfrastructurePage = lazy(() => import('./it-infrastructure/page'));
const CybersecurityPage = lazy(() => import('./cybersecurity/page'));
const CloudMigrationPage = lazy(() => import('./cloud-migration/page'));
const DatabaseManagementPage = lazy(() => import('./database-management/page'));
const ItConsultingPage = lazy(() => import('./it-consulting/page'));
const ItSupportPage = lazy(() => import('./it-support/page'));

// Specialized Solutions
const QuantumComputingPage = lazy(() => import('./quantum-computing/page'));
const AutonomousSystemsPage = lazy(() => import('./autonomous-systems/page'));
const BlockchainWeb3Page = lazy(() => import('./blockchain-web3/page'));
const BusinessIntelligencePage = lazy(() => import('./business-intelligence/page'));
const IotEdgeComputingPage = lazy(() => import('./iot-edge-computing/page'));
const RoboticsPage = lazy(() => import('./robotics/page'));
const ArVrSolutionsPage = lazy(() => import('./ar-vr-solutions/page'));

// Micro SAAS
const MicroSaasPage = lazy(() => import('./micro-saas/page'));

// Additional pages
const PrivacyPage = lazy(() => import('./privacy/page'));
const TermsPage = lazy(() => import('./terms/page'));
const CookiesPage = lazy(() => import('./cookies/page'));
const GdprPage = lazy(() => import('./gdpr/page'));
const CompliancePage = lazy(() => import('./compliance/page'));
const DocsPage = lazy(() => import('./docs/page'));
const ApiDocsPage = lazy(() => import('./api-docs/page'));
const ConsultationPage = lazy(() => import('./consultation/page'));
const NotFoundPage = lazy(() => import('./not-found'));

// Utils
import { performanceOptimizer, performanceMonitor, seoOptimizer, accessibilityEnhancer, collectPerformanceMetrics } from './utils/performanceUtils';

// Styles
import './globals.css';

// Mock components for now - these will be implemented
const PerformanceOptimizer = () => null;
const SEOOptimizer = () => null;
const AccessibilityEnhancer = () => null;
const UserExperienceEnhancer = () => null;
const SecurityEnhancer = () => null;

const App: React.FC = () => {
  useEffect(() => {
    // Initialize performance monitoring
    if (typeof window !== 'undefined') {
      try {
        performanceOptimizer();
        performanceMonitor();
        seoOptimizer();
        accessibilityEnhancer();
        collectPerformanceMetrics();
      } catch (error) {
        console.warn('Performance monitoring initialization failed:', error);
      }
    }
  }, []);

  return (
    <HelmetProvider>
      <div className="App">
        {/* Enhanced Components */}
        <PerformanceOptimizer />
        <SEOOptimizer />
        <AccessibilityEnhancer />
        <UserExperienceEnhancer />
        <SecurityEnhancer />
        
        {/* Main App Content with Routing */}
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400"></div>
        </div>}>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            
            {/* AI Services */}
            <Route path="/ai-services" element={<AiServicesPage />} />
            <Route path="/ai-marketing" element={<AiMarketingPage />} />
            <Route path="/ai-automation" element={<AiAutomationPage />} />
            <Route path="/ai-healthcare" element={<AiHealthcarePage />} />
            <Route path="/ai-fintech" element={<AiFintechPage />} />
            <Route path="/ai-content-generation" element={<AiContentGenerationPage />} />
            <Route path="/ai-data-analytics" element={<AiDataAnalyticsPage />} />
            <Route path="/ai-cybersecurity" element={<AiCybersecurityPage />} />
            <Route path="/ai-workflow-automation" element={<AiWorkflowAutomationPage />} />
            <Route path="/ai-customer-support" element={<AiCustomerSupportPage />} />
            <Route path="/ai-sales-automation" element={<AiSalesAutomationPage />} />
            <Route path="/ai-data-visualization" element={<AiDataVisualizationPage />} />
            
            {/* IT Services */}
            <Route path="/it-services" element={<ItServicesPage />} />
            <Route path="/it-infrastructure" element={<ItInfrastructurePage />} />
            <Route path="/cybersecurity" element={<CybersecurityPage />} />
            <Route path="/cloud-migration" element={<CloudMigrationPage />} />
            <Route path="/database-management" element={<DatabaseManagementPage />} />
            <Route path="/it-consulting" element={<ItConsultingPage />} />
            <Route path="/it-support" element={<ItSupportPage />} />
            
            {/* Specialized Solutions */}
            <Route path="/quantum-computing" element={<QuantumComputingPage />} />
            <Route path="/autonomous-systems" element={<AutonomousSystemsPage />} />
            <Route path="/blockchain-web3" element={<BlockchainWeb3Page />} />
            <Route path="/business-intelligence" element={<BusinessIntelligencePage />} />
            <Route path="/iot-edge-computing" element={<IotEdgeComputingPage />} />
            <Route path="/robotics" element={<RoboticsPage />} />
            <Route path="/ar-vr-solutions" element={<ArVrSolutionsPage />} />
            
            {/* Micro SAAS */}
            <Route path="/micro-saas" element={<MicroSaasPage />} />
            
            {/* Legal & Support Pages */}
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/cookies" element={<CookiesPage />} />
            <Route path="/gdpr" element={<GdprPage />} />
            <Route path="/compliance" element={<CompliancePage />} />
            <Route path="/docs" element={<DocsPage />} />
            <Route path="/api-docs" element={<ApiDocsPage />} />
            <Route path="/consultation" element={<ConsultationPage />} />
            
            {/* Catch all route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    </HelmetProvider>
  );
};

export default App;
>>>>>>> cursor/website-audit-and-update-with-deployment-73fd
