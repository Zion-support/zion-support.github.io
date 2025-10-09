
import React, { Suspense, memo, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import('./app/about/page'));
const ContactPage = React.lazy(() => import('./app/contact/page'));
const PricingPage = React.lazy(() => import('./app/pricing/page'));
const AIServicesPage = React.lazy(() => import('./app/ai-services/page'));
const ITServicesPage = React.lazy(() => import('./app/it-services/page'));
const MicroSaasPage = React.lazy(() => import('./app/micro-saas/page'));
const BlogPage = React.lazy(() => import('./app/blog/page'));
const CareersPage = React.lazy(() => import('./app/careers/page'));
const CaseStudiesPage = React.lazy(() => import('./app/case-studies/page'));
const ConsultationPage = React.lazy(() => import('./app/consultation/page'));
const DocsPage = React.lazy(() => import('./app/docs/page'));
const NewsPage = React.lazy(() => import('./app/news/page'));
const HomePage = React.lazy(() => import('./app/page'));
const TeamPage = React.lazy(() => import('./app/team/page'));
const PrivacyPage = React.lazy(() => import('./app/privacy/page'));
const TermsPage = React.lazy(() => import('./app/terms/page'));
const SupportPage = React.lazy(() => import('./app/support/page'));
const StatusPage = React.lazy(() => import('./app/status/page'));
const DemoPage = React.lazy(() => import('./app/demo/page'));

// AI Service Pages
const AI3DGenerationPage = React.lazy(() => import('./app/ai-3d-generation/page'));
const AIAnalyticsPage = React.lazy(() => import('./app/ai-analytics/page'));
const AIAnalyticsDashboardPage = React.lazy(() => import('./app/ai-analytics-dashboard/page'));
const AIAutomationPage = React.lazy(() => import('./app/ai-automation/page'));
const AIBusinessIntelligencePage = React.lazy(() => import('./app/ai-business-intelligence/page'));
const AIChatbotBuilderPage = React.lazy(() => import('./app/ai-chatbot-builder/page'));
const AICloudInfrastructurePage = React.lazy(() => import('./app/ai-cloud-infrastructure/page'));
const AICodeGenerationPage = React.lazy(() => import('./app/ai-code-generation/page'));
const AIContentGenerationPage = React.lazy(() => import('./app/ai-content-generation/page'));
const AIContentStudioPage = React.lazy(() => import('./app/ai-content-studio/page'));
const AICRMPage = React.lazy(() => import('./app/ai-crm/page'));
const AICustomerServicePage = React.lazy(() => import('./app/ai-customer-service/page'));
const AICustomerSupportPage = React.lazy(() => import('./app/ai-customer-support/page'));
const AICustomerSupportBotPage = React.lazy(() => import('./app/ai-customer-support-bot/page'));
const AICybersecurityPage = React.lazy(() => import('./app/ai-cybersecurity/page'));
const AIDataAnalyticsPage = React.lazy(() => import('./app/ai-data-analytics/page'));
const AIDataVisualizationPage = React.lazy(() => import('./app/ai-data-visualization/page'));
const AIDesignStudioPage = React.lazy(() => import('./app/ai-design-studio/page'));
const AIDocumentProcessorPage = React.lazy(() => import('./app/ai-document-processor/page'));
const AIEmailMarketingPage = React.lazy(() => import('./app/ai-email-marketing/page'));
const AIEnterpriseSolutionsPage = React.lazy(() => import('./app/ai-enterprise-solutions/page'));
const AIExpenseTrackerPage = React.lazy(() => import('./app/ai-expense-tracker/page'));
const AIFashionDesignPage = React.lazy(() => import('./app/ai-fashion-design/page'));
const AIFinancialAdvisorPage = React.lazy(() => import('./app/ai-financial-advisor/page'));
const AIFintechPage = React.lazy(() => import('./app/ai-fintech/page'));
const AIFitnessCoachPage = React.lazy(() => import('./app/ai-fitness-coach/page'));
const AIHealthcarePage = React.lazy(() => import('./app/ai-healthcare/page'));
const AIHealthcareSolutionsPage = React.lazy(() => import('./app/ai-healthcare-solutions/page'));
const AIHRAssistantPage = React.lazy(() => import('./app/ai-hr-assistant/page'));
const AIImageRecognitionPage = React.lazy(() => import('./app/ai-image-recognition/page'));
const AIInventoryManagementPage = React.lazy(() => import('./app/ai-inventory-management/page'));
const AIInvoiceGeneratorPage = React.lazy(() => import('./app/ai-invoice-generator/page'));
const AIMobileAppBuilderPage = React.lazy(() => import('./app/ai-mobile-app-builder/page'));
const AIMusicCompositionPage = React.lazy(() => import('./app/ai-music-composition/page'));
const AIPredictiveAnalyticsPage = React.lazy(() => import('./app/ai-predictive-analytics/page'));
const AIProjectManagementPage = React.lazy(() => import('./app/ai-project-management/page'));
const AIProjectManagerPage = React.lazy(() => import('./app/ai-project-manager/page'));
const AIRecommendationEnginePage = React.lazy(() => import('./app/ai-recommendation-engine/page'));
const AISalesAutomationPage = React.lazy(() => import('./app/ai-sales-automation/page'));
const AISchedulerPage = React.lazy(() => import('./app/ai-scheduler/page'));
const AISEOOptimizerPage = React.lazy(() => import('./app/ai-seo-optimizer/page'));
const AISocialMediaManagerPage = React.lazy(() => import('./app/ai-social-media-manager/page'));
const AITimeTrackerPage = React.lazy(() => import('./app/ai-time-tracker/page'));
const AIVideoGenerationPage = React.lazy(() => import('./app/ai-video-generation/page'));
const AIVoiceCloningPage = React.lazy(() => import('./app/ai-voice-cloning/page'));
const AIVoiceProcessingPage = React.lazy(() => import('./app/ai-voice-processing/page'));
const AIWorkflowAutomationPage = React.lazy(() => import('./app/ai-workflow-automation/page'));
const AIWritingAssistantPage = React.lazy(() => import('./app/ai-writing-assistant/page'));

// IT Service Pages
const ARVRSolutionsPage = React.lazy(() => import('./app/ar-vr-solutions/page'));
const CloudInfrastructurePage = React.lazy(() => import('./app/cloud-infrastructure/page'));
const CloudMigrationPage = React.lazy(() => import('./app/cloud-migration/page'));
const CompliancePage = React.lazy(() => import('./app/compliance/page'));
const CybersecuritySuitePage = React.lazy(() => import('./app/cybersecurity-suite/page'));
const DatabaseManagementPage = React.lazy(() => import('./app/database-management/page'));
const ExpenseTrackerPage = React.lazy(() => import('./app/expense-tracker/page'));
const ITConsultingPage = React.lazy(() => import('./app/it-consulting/page'));
const ITInfrastructurePage = React.lazy(() => import('./app/it-infrastructure/page'));
const ITInfrastructureSolutionsPage = React.lazy(() => import('./app/it-infrastructure-solutions/page'));
const ITSupportPage = React.lazy(() => import('./app/it-support/page'));
const ManagedITPage = React.lazy(() => import('./app/managed-it/page'));
const NetworkSolutionsPage = React.lazy(() => import('./app/network-solutions/page'));

// Other Pages
const APIDocsPage = React.lazy(() => import('./app/api-docs/page'));
const CookiesPage = React.lazy(() => import('./app/cookies/page'));
const GDPRPage = React.lazy(() => import('./app/gdpr/page'));
const AIMarketingPage = React.lazy(() => import('./app/ai-marketing/page'));
const QuantumComputingPage = React.lazy(() => import('./app/quantum-computing/page'));
const CybersecurityPage = React.lazy(() => import('./app/cybersecurity/page'));

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

  override componentDidCatch(_error: Error, _errorInfo: React.ErrorInfo) {
    // Log error for debugging in development
    if (process.env.NODE_ENV === 'development') {
       
      // // console.error('App Error Boundary caught an error:', _error, _errorInfo);
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
          <div className="min-h-screen bg-white">
            <Navigation />
            <main>
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/careers" element={<CareersPage />} />
                  <Route path="/case-studies" element={<CaseStudiesPage />} />
                  <Route path="/consultation" element={<ConsultationPage />} />
                  <Route path="/docs" element={<DocsPage />} />
                  <Route path="/news" element={<NewsPage />} />
                  <Route path="/team" element={<TeamPage />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                  <Route path="/support" element={<SupportPage />} />
                  <Route path="/status" element={<StatusPage />} />
                  <Route path="/demo" element={<DemoPage />} />
                  
                  {/* AI Services */}
                  <Route path="/ai-services" element={<AIServicesPage />} />
                  <Route path="/ai-3d-generation" element={<AI3DGenerationPage />} />
                  <Route path="/ai-analytics" element={<AIAnalyticsPage />} />
                  <Route path="/ai-analytics-dashboard" element={<AIAnalyticsDashboardPage />} />
                  <Route path="/ai-automation" element={<AIAutomationPage />} />
                  <Route path="/ai-business-intelligence" element={<AIBusinessIntelligencePage />} />
                  <Route path="/ai-chatbot-builder" element={<AIChatbotBuilderPage />} />
                  <Route path="/ai-cloud-infrastructure" element={<AICloudInfrastructurePage />} />
                  <Route path="/ai-code-generation" element={<AICodeGenerationPage />} />
                  <Route path="/ai-content-generation" element={<AIContentGenerationPage />} />
                  <Route path="/ai-content-studio" element={<AIContentStudioPage />} />
                  <Route path="/ai-crm" element={<AICRMPage />} />
                  <Route path="/ai-customer-service" element={<AICustomerServicePage />} />
                  <Route path="/ai-customer-support" element={<AICustomerSupportPage />} />
                  <Route path="/ai-customer-support-bot" element={<AICustomerSupportBotPage />} />
                  <Route path="/ai-cybersecurity" element={<AICybersecurityPage />} />
                  <Route path="/ai-data-analytics" element={<AIDataAnalyticsPage />} />
                  <Route path="/ai-data-visualization" element={<AIDataVisualizationPage />} />
                  <Route path="/ai-design-studio" element={<AIDesignStudioPage />} />
                  <Route path="/ai-document-processor" element={<AIDocumentProcessorPage />} />
                  <Route path="/ai-email-marketing" element={<AIEmailMarketingPage />} />
                  <Route path="/ai-enterprise-solutions" element={<AIEnterpriseSolutionsPage />} />
                  <Route path="/ai-expense-tracker" element={<AIExpenseTrackerPage />} />
                  <Route path="/ai-fashion-design" element={<AIFashionDesignPage />} />
                  <Route path="/ai-financial-advisor" element={<AIFinancialAdvisorPage />} />
                  <Route path="/ai-fintech" element={<AIFintechPage />} />
                  <Route path="/ai-fitness-coach" element={<AIFitnessCoachPage />} />
                  <Route path="/ai-healthcare" element={<AIHealthcarePage />} />
                  <Route path="/ai-healthcare-solutions" element={<AIHealthcareSolutionsPage />} />
                  <Route path="/ai-hr-assistant" element={<AIHRAssistantPage />} />
                  <Route path="/ai-image-recognition" element={<AIImageRecognitionPage />} />
                  <Route path="/ai-inventory-management" element={<AIInventoryManagementPage />} />
                  <Route path="/ai-invoice-generator" element={<AIInvoiceGeneratorPage />} />
                  <Route path="/ai-mobile-app-builder" element={<AIMobileAppBuilderPage />} />
                  <Route path="/ai-music-composition" element={<AIMusicCompositionPage />} />
                  <Route path="/ai-predictive-analytics" element={<AIPredictiveAnalyticsPage />} />
                  <Route path="/ai-project-management" element={<AIProjectManagementPage />} />
                  <Route path="/ai-project-manager" element={<AIProjectManagerPage />} />
                  <Route path="/ai-recommendation-engine" element={<AIRecommendationEnginePage />} />
                  <Route path="/ai-sales-automation" element={<AISalesAutomationPage />} />
                  <Route path="/ai-scheduler" element={<AISchedulerPage />} />
                  <Route path="/ai-seo-optimizer" element={<AISEOOptimizerPage />} />
                  <Route path="/ai-social-media-manager" element={<AISocialMediaManagerPage />} />
                  <Route path="/ai-time-tracker" element={<AITimeTrackerPage />} />
                  <Route path="/ai-video-generation" element={<AIVideoGenerationPage />} />
                  <Route path="/ai-voice-cloning" element={<AIVoiceCloningPage />} />
                  <Route path="/ai-voice-processing" element={<AIVoiceProcessingPage />} />
                  <Route path="/ai-workflow-automation" element={<AIWorkflowAutomationPage />} />
                  <Route path="/ai-writing-assistant" element={<AIWritingAssistantPage />} />
                  
                  {/* IT Services */}
                  <Route path="/it-services" element={<ITServicesPage />} />
                  <Route path="/ar-vr-solutions" element={<ARVRSolutionsPage />} />
                  <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                  <Route path="/cloud-migration" element={<CloudMigrationPage />} />
                  <Route path="/compliance" element={<CompliancePage />} />
                  <Route path="/cybersecurity-suite" element={<CybersecuritySuitePage />} />
                  <Route path="/database-management" element={<DatabaseManagementPage />} />
                  <Route path="/expense-tracker" element={<ExpenseTrackerPage />} />
                  <Route path="/it-consulting" element={<ITConsultingPage />} />
                  <Route path="/it-infrastructure" element={<ITInfrastructurePage />} />
                  <Route path="/it-infrastructure-solutions" element={<ITInfrastructureSolutionsPage />} />
                  <Route path="/it-support" element={<ITSupportPage />} />
                  <Route path="/managed-it" element={<ManagedITPage />} />
                  <Route path="/network-solutions" element={<NetworkSolutionsPage />} />
                  
                  {/* Micro SAAS */}
                  <Route path="/micro-saas" element={<MicroSaasPage />} />
                  
                  {/* Other Pages */}
                  <Route path="/api-docs" element={<APIDocsPage />} />
                  <Route path="/cookies" element={<CookiesPage />} />
                  <Route path="/gdpr" element={<GDPRPage />} />
                  <Route path="/ai-marketing" element={<AIMarketingPage />} />
                  <Route path="/quantum-computing" element={<QuantumComputingPage />} />
                  <Route path="/cybersecurity" element={<CybersecurityPage />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}