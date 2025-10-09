'use client';

import React, { Suspense, lazy, memo, useMemo, useEffect } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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

// AI Services
const AIServicesPage = lazy(() => import('./app/ai-services/page'));
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
const AIDataVisualizationPage = lazy(() => import('./app/ai-data-visualization/page'));

// IT Services
const ITServicesPage = lazy(() => import('./app/it-services/page'));
const ITInfrastructurePage = lazy(() => import('./app/it-infrastructure/page'));
const ITSupportPage = lazy(() => import('./app/it-support/page'));
const CloudInfrastructurePage = lazy(() => import('./app/cloud-infrastructure/page'));
const CloudMigrationPage = lazy(() => import('./app/cloud-migration/page'));
const CybersecurityPage = lazy(() => import('./app/cybersecurity/page'));
const DatabaseManagementPage = lazy(() => import('./app/database-management/page'));
const ITConsultingPage = lazy(() => import('./app/it-consulting/page'));

// Specialized Solutions
const QuantumComputingPage = lazy(() => import('./app/quantum-computing/page'));
const AutonomousSystemsPage = lazy(() => import('./app/autonomous-systems/page'));
const BlockchainPage = lazy(() => import('./app/blockchain/page'));
const BusinessIntelligencePage = lazy(() => import('./app/ai-business-intelligence/page'));
const IotEdgeComputingPage = lazy(() => import('./app/iot-edge-computing/page'));
const RoboticsPage = lazy(() => import('./app/robotics/page'));
const ArVrSolutionsPage = lazy(() => import('./app/ar-vr-solutions/page'));

// Micro SaaS
const MicroSaasPage = lazy(() => import('./app/micro-saas/page'));

// Lazy load components
const Navigation = React.lazy(() => import('./app/components/Navigation'));
const Footer = React.lazy(() => import('./app/components/Footer'));
const PerformanceMonitor = React.lazy(() => import('./app/components/PerformanceMonitor'));
const AccessibilityEnhancer = React.lazy(() => import('./app/components/AccessibilityEnhancer'));

// Loading component
const LoadingSpinner = memo(() => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
      <p className="text-white text-lg">Loading...</p>
    </div>
  </div>
));

LoadingSpinner.displayName = 'LoadingSpinner';

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
    // Log error to monitoring service in production
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
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

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
    
    // Legal & Support Pages
    { path: '/privacy', component: PrivacyPage },
    { path: '/terms', component: TermsPage },
    { path: '/cookies', component: CookiesPage },
    { path: '/docs', component: DocsPage },
    { path: '/api-docs', component: ApiDocsPage },
    { path: '/consultation', component: ConsultationPage },
    { path: '/compliance', component: CompliancePage },
    { path: '/gdpr', component: GdprPage },
    
    // AI Services
    { path: '/ai-services', component: AIServicesPage },
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
    { path: '/ai-data-visualization', component: AIDataVisualizationPage },
    
    // IT Services
    { path: '/it-services', component: ITServicesPage },
    { path: '/it-infrastructure', component: ITInfrastructurePage },
    { path: '/it-support', component: ITSupportPage },
    { path: '/cloud-infrastructure', component: CloudInfrastructurePage },
    { path: '/cloud-migration', component: CloudMigrationPage },
    { path: '/cybersecurity', component: CybersecurityPage },
    { path: '/database-management', component: DatabaseManagementPage },
    { path: '/it-consulting', component: ITConsultingPage },
    
    // Specialized Solutions
    { path: '/quantum-computing', component: QuantumComputingPage },
    { path: '/autonomous-systems', component: AutonomousSystemsPage },
    { path: '/blockchain', component: BlockchainPage },
    { path: '/business-intelligence', component: BusinessIntelligencePage },
    { path: '/iot-edge-computing', component: IotEdgeComputingPage },
    { path: '/robotics', component: RoboticsPage },
    { path: '/ar-vr-solutions', component: ArVrSolutionsPage },
    
    // Micro SaaS
    { path: '/micro-saas', component: MicroSaasPage },
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