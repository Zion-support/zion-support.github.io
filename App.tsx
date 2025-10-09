<<<<<<< HEAD
import React, { Suspense, lazy, memo, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

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

// Memoized components for better performance
const UnifiedContentPromotion = memo(() => (
  <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Latest AI Innovations</h2>
      <p className="text-xl">Discover cutting-edge AI solutions for your business</p>
    </div>
  </div>
));

const InteractiveAIROICalculator = memo(() => (
  <div className="bg-gray-50 py-16">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">AI ROI Calculator</h2>
      <p className="text-xl text-gray-600">Calculate your potential AI investment returns</p>
    </div>
  </div>
));

const ContentShowcase = memo(() => (
  <div className="py-16">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Featured Content</h2>
      <p className="text-xl text-gray-600">Explore our latest insights and case studies</p>
    </div>
  </div>
));

const InteractiveContentShowcase2026 = memo(() => (
  <div className="bg-blue-50 py-16">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">2026 Content Showcase</h2>
      <p className="text-xl text-gray-600">Latest trends and innovations for 2026</p>
    </div>
  </div>
));

// Loading component
const LoadingSpinner = memo(() => (
  <div className="animate-pulse bg-gray-200 h-32 rounded flex items-center justify-center">
    <div className="text-gray-500">Loading...</div>
  </div>
));

// Error Boundary Component
interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error for debugging
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong!</h2>
            <button
              onClick={() => this.setState({ hasError: false, error: null })}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Try again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Main App component
const App: React.FC = () => {
  const structuredData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "description": "Leading provider of AI-powered enterprise solutions and digital transformation services",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      },
      "sameAs": [
        "https://linkedin.com/company/zion-tech-group",
        "https://twitter.com/ziontechgroup"
      ],
      "offers": {
        "@type": "Offer",
        "description": "AI and IT Solutions"
      }
    }),
    []
  );

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Helmet>
          <title>Zion Tech Group - AI & IT Solutions</title>
          <meta
            name="description"
            content="Leading provider of AI-powered enterprise solutions and digital transformation services. Achieve 300% ROI with our cutting-edge AI technology."
          />
          <meta
            name="keywords"
            content="AI, artificial intelligence, enterprise solutions, digital transformation, IT services"
          />
          <meta property="og:title" content="Zion Tech Group - AI & IT Solutions" />
          <meta
            property="og:description"
            content="Transform your enterprise with AI-powered solutions achieving 300% ROI, 70% cost reduction, and 90% efficiency gains"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://ziontechgroup.com" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Zion Tech Group - AI & IT Solutions" />
          <meta
            name="twitter:description"
            content="Transform your enterprise with AI-powered solutions achieving 300% ROI, 70% cost reduction, and 90% efficiency gains"
          />
          <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        </Helmet>

        <Router>
          <div className="min-h-screen bg-white">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<div>Home Page</div>} />
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
              </Routes>
            </Suspense>
          </div>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
=======
import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./app/page'));
const AboutPage = lazy(() => import('./app/about/page'));
const ContactPage = lazy(() => import('./app/contact/page'));
const ServicesPage = lazy(() => import('./app/services/page'));
const PricingPage = lazy(() => import('./app/pricing/page'));
const CaseStudiesPage = lazy(() => import('./app/case-studies/page'));
const BlogPage = lazy(() => import('./app/blog/page'));
const TeamPage = lazy(() => import('./app/team/page'));
const CareersPage = lazy(() => import('./app/careers/page'));
const PrivacyPage = lazy(() => import('./app/privacy/page'));
const TermsPage = lazy(() => import('./app/terms/page'));
const CookiesPage = lazy(() => import('./app/cookies/page'));
const GdprPage = lazy(() => import('./app/gdpr/page'));
const CompliancePage = lazy(() => import('./app/compliance/page'));
const DocsPage = lazy(() => import('./app/docs/page'));
const ApiDocsPage = lazy(() => import('./app/api-docs/page'));
const ConsultationPage = lazy(() => import('./app/consultation/page'));
const NotFoundPage = lazy(() => import('./app/not-found'));

// AI Services
const AiServicesPage = lazy(() => import('./app/ai-services/page'));
const AiMarketingPage = lazy(() => import('./app/ai-marketing/page'));
const AiAutomationPage = lazy(() => import('./app/ai-automation/page'));
const AiHealthcarePage = lazy(() => import('./app/ai-healthcare/page'));
const AiFintechPage = lazy(() => import('./app/ai-fintech/page'));
const AiContentGenerationPage = lazy(() => import('./app/ai-content-generation/page'));
const AiDataAnalyticsPage = lazy(() => import('./app/ai-data-analytics/page'));
const AiCybersecurityPage = lazy(() => import('./app/ai-cybersecurity/page'));
const AiWorkflowAutomationPage = lazy(() => import('./app/ai-workflow-automation/page'));
const AiCustomerSupportPage = lazy(() => import('./app/ai-customer-support/page'));
const AiSalesAutomationPage = lazy(() => import('./app/ai-sales-automation/page'));
const AiDataVisualizationPage = lazy(() => import('./app/ai-data-visualization/page'));

// IT Services
const ItServicesPage = lazy(() => import('./app/it-services/page'));
const ItInfrastructurePage = lazy(() => import('./app/it-infrastructure/page'));
const CybersecurityPage = lazy(() => import('./app/cybersecurity/page'));
const CloudMigrationPage = lazy(() => import('./app/cloud-migration/page'));
const DatabaseManagementPage = lazy(() => import('./app/database-management/page'));
const ItConsultingPage = lazy(() => import('./app/it-consulting/page'));
const ItSupportPage = lazy(() => import('./app/it-support/page'));

// Specialized Solutions
const QuantumComputingPage = lazy(() => import('./app/quantum-computing/page'));
const AutonomousSystemsPage = lazy(() => import('./app/autonomous-systems/page'));
const BlockchainWeb3Page = lazy(() => import('./app/blockchain-web3/page'));
const BusinessIntelligencePage = lazy(() => import('./app/business-intelligence/page'));
const IotEdgeComputingPage = lazy(() => import('./app/iot-edge-computing/page'));
const RoboticsPage = lazy(() => import('./app/robotics/page'));
const ArVrSolutionsPage = lazy(() => import('./app/ar-vr-solutions/page'));

// Micro SAAS
const MicroSaasPage = lazy(() => import('./app/micro-saas/page'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400"></div>
  </div>
);

// Import styles
import './app/globals.css';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/careers" element={<CareersPage />} />
            
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
      </BrowserRouter>
    </HelmetProvider>
>>>>>>> cursor/fix-errors-and-merge-to-main-6669
  );
};

export default App;