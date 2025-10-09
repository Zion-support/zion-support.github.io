import React, { Suspense, memo, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Phone, Mail, Brain, Cloud, Zap } from 'lucide-react';
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
  <section className="relative py-20 lg:py-32 overflow-hidden neural-network-bg">
    <div className="container mx-auto px-4 text-center">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl lg:text-7xl font-bold mb-6">
          <span className="holographic-text cyber-text">Zion Tech Group</span>
        </h1>
        <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
          Transform Your Enterprise with AI-Powered Solutions
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="flex items-center text-cyan-400">
            <Brain className="w-6 h-6 mr-2" />
            <span className="text-lg font-semibold">300% ROI</span>
          </div>
          <div className="flex items-center text-purple-400">
            <Cloud className="w-6 h-6 mr-2" />
            <span className="text-lg font-semibold">70% Cost Reduction</span>
          </div>
          <div className="flex items-center text-green-400">
            <Zap className="w-6 h-6 mr-2" />
            <span className="text-lg font-semibold">90% Efficiency Gains</span>
          </div>
        </div>
        <div className="mt-12">
          <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  </section>
));

const InteractiveAIROICalculator = memo(() => (
  <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          <span className="neon-text">AI ROI Calculator</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Calculate your potential savings and ROI with our AI solutions
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">$2.5M</div>
              <div className="text-gray-300">Average Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">18</div>
              <div className="text-gray-300">Months Payback Period</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">340%</div>
              <div className="text-gray-300">ROI Over 3 Years</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
));

const ContentShowcase = memo(() => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          <span className="neon-text">Our Services</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Comprehensive AI and IT solutions for modern enterprises
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-colors">
          <Brain className="w-12 h-12 text-cyan-400 mb-4" />
          <h3 className="text-xl font-bold text-white mb-3">AI Solutions</h3>
          <p className="text-gray-300">Advanced AI-powered tools and automation</p>
        </div>
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-colors">
          <Cloud className="w-12 h-12 text-purple-400 mb-4" />
          <h3 className="text-xl font-bold text-white mb-3">Cloud Infrastructure</h3>
          <p className="text-gray-300">Scalable and secure cloud solutions</p>
        </div>
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-green-500 transition-colors">
          <Zap className="w-12 h-12 text-green-400 mb-4" />
          <h3 className="text-xl font-bold text-white mb-3">IT Consulting</h3>
          <p className="text-gray-300">Strategic technology consulting services</p>
        </div>
      </div>
    </div>
  </section>
));

const InteractiveContentShowcase2026 = memo(() => (
  <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
        Ready to Transform Your Business?
      </h2>
      <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
        Join thousands of enterprises already using our AI solutions to drive growth and innovation.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
          Start Free Trial
        </button>
        <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300">
          Schedule Demo
        </button>
      </div>
    </div>
  </section>
));

const LoadingSpinner = memo(() => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-500"></div>
  </div>
));

const ErrorBoundary = memo(({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-slate-900">
      {children}
    </div>
  );
});

const App = memo(() => {
  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": "Advanced AI and IT Solutions for Enterprise",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-0123",
      "contactType": "customer service",
      "email": "info@ziontechgroup.com"
    },
    "sameAs": [
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup"
    ]
  }), []);

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Helmet>
          <title>Zion Tech Group - Advanced AI and IT Solutions</title>
          <meta name="description" content="Transform your enterprise with AI-powered solutions achieving 300% ROI, 70% cost reduction, and 90% efficiency gains" />
          <meta name="keywords" content="AI solutions, IT consulting, cloud infrastructure, enterprise software, automation" />
          <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
          <meta property="og:description" content="Transform your enterprise with AI-powered solutions achieving 300% ROI, 70% cost reduction, and 90% efficiency gains" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://ziontechgroup.com" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
          <meta name="twitter:description" content="Transform your enterprise with AI-powered solutions achieving 300% ROI, 70% cost reduction, and 90% efficiency gains" />
          <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        </Helmet>
        <Router>
          <div className="min-h-screen bg-slate-900 cyber-grid">
            <Navigation />
            <main>
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={
                    <>
                      <UnifiedContentPromotion />
                      <InteractiveAIROICalculator />
                      <ContentShowcase />
                      <InteractiveContentShowcase2026 />
                    </>
                  } />
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
                  
                  {/* Additional Pages */}
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
});

App.displayName = 'App';

export default App;