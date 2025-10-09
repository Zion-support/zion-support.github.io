import React, { memo, useMemo, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';

// Import pages
import HomePage from './src/page';
import AboutPage from './src/about/page';
import ContactPage from './src/contact/page';
import ServicesPage from './src/services/page';
import PricingPage from './src/pricing/page';
import BlogPage from './src/blog/page';
import CaseStudiesPage from './src/case-studies/page';
import TeamPage from './src/team/page';
import CareersPage from './src/careers/page';
import PrivacyPage from './src/privacy/page';
import TermsPage from './src/terms/page';
import CookiesPage from './src/cookies/page';
import GDPRPage from './src/gdpr/page';
import SecurityPage from './src/security/page';
import CompliancePage from './src/compliance/page';
import SupportPage from './src/support/page';
import DocsPage from './src/docs/page';
import APIDocsPage from './src/api-docs/page';
import StatusPage from './src/status/page';
import SystemStatusPage from './src/system-status/page';
import DemoPage from './src/demo/page';
import ConsultationPage from './src/consultation/page';
import EnterprisePage from './src/enterprise/page';

// Import AI service pages
import AIProjectManagerPage from './src/ai-project-manager/page';
import AISocialMediaManagerPage from './src/ai-social-media-manager/page';
import AIAnalyticsDashboardPage from './src/ai-analytics-dashboard/page';
import AIEmailMarketingPage from './src/ai-email-marketing/page';
import AICustomerSupportBotPage from './src/ai-customer-support-bot/page';
import AICodeGenerationPage from './src/ai-code-generation/page';
import AIContentGenerationPage from './src/ai-content-generation/page';
import AILeadGenerationPage from './src/ai-lead-generation/page';
import AIDocumentProcessingPage from './src/ai-document-processing/page';
import AISEOOptimizerPage from './src/ai-seo-optimizer/page';
import AIEcommerceSolutionsPage from './src/ai-ecommerce-solutions/page';
import AIFinancialAnalyzerPage from './src/ai-financial-analyzer/page';

// Import AI services pages
import MachineLearningPage from './src/machine-learning/page';
import NLPPage from './src/nlp/page';
import ComputerVisionPage from './src/computer-vision/page';
import AIAutomationPage from './src/ai-automation/page';
import QuantumAIPage from './src/quantum-ai/page';
import AICybersecurityPage from './src/ai-cybersecurity/page';

// Import IT services pages
import CloudServicesPage from './src/cloud-services/page';
import CybersecurityPage from './src/cybersecurity/page';
import DevOpsPage from './src/devops/page';
import DatabaseServicesPage from './src/database-services/page';
import NetworkInfrastructurePage from './src/network-infrastructure/page';
import ITSupportPage from './src/it-support/page';

// Import specialized services pages
import QuantumComputingPage from './src/quantum-computing/page';
import AutonomousSystemsPage from './src/autonomous-systems/page';
import BlockchainPage from './src/blockchain/page';
import IoTEdgePage from './src/iot-edge/page';
import BusinessIntelligencePage from './src/business-intelligence/page';
import RoboticsPage from './src/robotics/page';

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

  override componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error for debugging in development
    if (process.env.NODE_ENV === 'development') {
       
      // console.error('App Error Boundary caught an error:', error, errorInfo);
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
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/demo" element={<DemoPage />} />
            <Route path="/consultation" element={<ConsultationPage />} />
            <Route path="/enterprise" element={<EnterprisePage />} />
            
            {/* Legal Pages */}
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/cookies" element={<CookiesPage />} />
            <Route path="/gdpr" element={<GDPRPage />} />
            <Route path="/security" element={<SecurityPage />} />
            <Route path="/compliance" element={<CompliancePage />} />
            
            {/* Support Pages */}
            <Route path="/support" element={<SupportPage />} />
            <Route path="/docs" element={<DocsPage />} />
            <Route path="/api-docs" element={<APIDocsPage />} />
            <Route path="/status" element={<StatusPage />} />
            <Route path="/system-status" element={<SystemStatusPage />} />
            
            {/* Micro SAAS Services */}
            <Route path="/ai-project-manager" element={<AIProjectManagerPage />} />
            <Route path="/ai-social-media-manager" element={<AISocialMediaManagerPage />} />
            <Route path="/ai-analytics-dashboard" element={<AIAnalyticsDashboardPage />} />
            <Route path="/ai-email-marketing" element={<AIEmailMarketingPage />} />
            <Route path="/ai-customer-support-bot" element={<AICustomerSupportBotPage />} />
            <Route path="/ai-code-generation" element={<AICodeGenerationPage />} />
            <Route path="/ai-content-generation" element={<AIContentGenerationPage />} />
            <Route path="/ai-lead-generation" element={<AILeadGenerationPage />} />
            <Route path="/ai-document-processing" element={<AIDocumentProcessingPage />} />
            <Route path="/ai-seo-optimizer" element={<AISEOOptimizerPage />} />
            <Route path="/ai-ecommerce-solutions" element={<AIEcommerceSolutionsPage />} />
            <Route path="/ai-financial-analyzer" element={<AIFinancialAnalyzerPage />} />
            
            {/* AI Services */}
            <Route path="/machine-learning" element={<MachineLearningPage />} />
            <Route path="/nlp" element={<NLPPage />} />
            <Route path="/computer-vision" element={<ComputerVisionPage />} />
            <Route path="/ai-automation" element={<AIAutomationPage />} />
            <Route path="/quantum-ai" element={<QuantumAIPage />} />
            <Route path="/ai-cybersecurity" element={<AICybersecurityPage />} />
            
            {/* IT Services */}
            <Route path="/cloud-services" element={<CloudServicesPage />} />
            <Route path="/cybersecurity" element={<CybersecurityPage />} />
            <Route path="/devops" element={<DevOpsPage />} />
            <Route path="/database-services" element={<DatabaseServicesPage />} />
            <Route path="/network-infrastructure" element={<NetworkInfrastructurePage />} />
            <Route path="/it-support" element={<ITSupportPage />} />
            
            {/* Specialized Services */}
            <Route path="/quantum-computing" element={<QuantumComputingPage />} />
            <Route path="/autonomous-systems" element={<AutonomousSystemsPage />} />
            <Route path="/blockchain" element={<BlockchainPage />} />
            <Route path="/iot-edge" element={<IoTEdgePage />} />
            <Route path="/business-intelligence" element={<BusinessIntelligencePage />} />
            <Route path="/robotics" element={<RoboticsPage />} />
          </Routes>
        </Suspense>
      </HelmetProvider>
    </ErrorBoundary>
  );
}
