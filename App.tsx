import React, { memo, useMemo, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';

// Lazy load components for better performance
const HomePage = lazy(() => import('./app/page'));
const AboutPage = lazy(() => import('./app/about/page'));
const ContactPage = lazy(() => import('./app/contact/page'));
const AIServicesPage = lazy(() => import('./app/ai-services/page'));
const ITServicesPage = lazy(() => import('./app/it-services/page'));
const MicroSaasPage = lazy(() => import('./app/micro-saas/page'));
const BlogPage = lazy(() => import('./app/blog/page'));
const PricingPage = lazy(() => import('./app/pricing/page'));
const TeamPage = lazy(() => import('./app/team/page'));
const CaseStudiesPage = lazy(() => import('./app/case-studies/page'));
const CareersPage = lazy(() => import('./app/careers/page'));
const SupportPage = lazy(() => import('./app/support/page'));
const PrivacyPage = lazy(() => import('./app/privacy/page'));
const TermsPage = lazy(() => import('./app/terms/page'));
const NotFoundPage = lazy(() => import('./app/not-found'));

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
const AIDataVisualizationPage = lazy(() => import('./app/ai-data-visualization/page'));
const AILeadGenerationPage = lazy(() => import('./app/ai-lead-generation/page'));
const AIDocumentProcessingPage = lazy(() => import('./app/ai-document-processing/page'));
const AIMobileAppDevelopmentPage = lazy(() => import('./app/ai-mobile-app-development/page'));
const AIEcommerceSolutionsPage = lazy(() => import('./app/ai-ecommerce-solutions/page'));

// IT Services Pages
const ITInfrastructurePage = lazy(() => import('./app/it-infrastructure/page'));
const CybersecurityPage = lazy(() => import('./app/cybersecurity/page'));
const CloudServicesPage = lazy(() => import('./app/cloud-services/page'));
const DevOpsPage = lazy(() => import('./app/devops/page'));
const DatabasePage = lazy(() => import('./app/database/page'));
const NetworkingPage = lazy(() => import('./app/networking/page'));

// Emerging Tech Pages
const QuantumComputingPage = lazy(() => import('./app/quantum-computing/page'));
const RoboticsPage = lazy(() => import('./app/robotics/page'));
const IoTEdgeComputingPage = lazy(() => import('./app/iot-edge-computing/page'));
const BlockchainWeb3Page = lazy(() => import('./app/blockchain-web3/page'));
const BusinessIntelligencePage = lazy(() => import('./app/business-intelligence/page'));
const AutonomousSystemsPage = lazy(() => import('./app/autonomous-systems/page'));

// Loading component
const LoadingSpinner = memo(() => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
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

  override componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    if (process.env.NODE_ENV === 'development') {
      console.error('App Error Boundary caught an error:', error, errorInfo);
    }
  }

  override render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">
              We're working to fix this issue. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
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

export default function App() {
  const structuredData = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      description:
        'Leading provider of AI-powered enterprise solutions and digital transformation services',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/logo.png',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-302-464-0950',
        contactType: 'customer service',
        email: 'kleber@ziontechgroup.com',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '364 E Main St STE 1008',
        addressLocality: 'Middletown',
        addressRegion: 'DE',
        postalCode: '19709',
        addressCountry: 'US',
      },
      sameAs: ['https://linkedin.com/company/zion-tech-group', 'https://twitter.com/ziontechgroup'],
      offers: {
        '@type': 'Offer',
        name: 'AI Enterprise Transformation Services',
        description:
          'Transform your enterprise with AI-powered solutions achieving 300% ROI, 70% cost reduction, and 90% efficiency gains',
        price: '50000',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
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
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/support" element={<SupportPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/blog" element={<BlogPage />} />

              {/* Service Categories */}
              <Route path="/ai-services" element={<AIServicesPage />} />
              <Route path="/it-services" element={<ITServicesPage />} />
              <Route path="/micro-saas" element={<MicroSaasPage />} />

              {/* AI Services */}
              <Route path="/ai-marketing" element={<AIMarketingPage />} />
              <Route path="/ai-automation" element={<AIAutomationPage />} />
              <Route path="/ai-healthcare" element={<AIHealthcarePage />} />
              <Route path="/ai-fintech" element={<AIFintechPage />} />
              <Route path="/ai-content-generation" element={<AIContentGenerationPage />} />
              <Route path="/ai-data-analytics" element={<AIDataAnalyticsPage />} />
              <Route path="/ai-cybersecurity" element={<AICybersecurityPage />} />
              <Route path="/ai-workflow-automation" element={<AIWorkflowAutomationPage />} />
              <Route path="/ai-customer-support" element={<AICustomerSupportPage />} />
              <Route path="/ai-sales-automation" element={<AISalesAutomationPage />} />
              <Route path="/ai-data-visualization" element={<AIDataVisualizationPage />} />
              <Route path="/ai-lead-generation" element={<AILeadGenerationPage />} />
              <Route path="/ai-document-processing" element={<AIDocumentProcessingPage />} />
              <Route path="/ai-mobile-app-development" element={<AIMobileAppDevelopmentPage />} />
              <Route path="/ai-ecommerce-solutions" element={<AIEcommerceSolutionsPage />} />

              {/* IT Services */}
              <Route path="/it-infrastructure" element={<ITInfrastructurePage />} />
              <Route path="/cybersecurity" element={<CybersecurityPage />} />
              <Route path="/cloud-services" element={<CloudServicesPage />} />
              <Route path="/devops" element={<DevOpsPage />} />
              <Route path="/database" element={<DatabasePage />} />
              <Route path="/networking" element={<NetworkingPage />} />

              {/* Emerging Technologies */}
              <Route path="/quantum-computing" element={<QuantumComputingPage />} />
              <Route path="/robotics" element={<RoboticsPage />} />
              <Route path="/iot-edge-computing" element={<IoTEdgeComputingPage />} />
              <Route path="/blockchain-web3" element={<BlockchainWeb3Page />} />
              <Route path="/business-intelligence" element={<BusinessIntelligencePage />} />
              <Route path="/autonomous-systems" element={<AutonomousSystemsPage />} />

              {/* 404 Page */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}