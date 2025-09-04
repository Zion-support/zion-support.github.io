<<<<<<< HEAD
<<<<<<< HEAD

import React from 'react';
=======
=======
>>>>>>> origin/merge-pr-11195
import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './src/components/Header.tsx';
import { Footer } from './src/components/Footer.tsx';
import { Sidebar } from './src/components/Sidebar.tsx';
import { ErrorBoundary } from 'react-error-boundary';
import { LoadingSpinner } from './src/components/ui/loading-spinner.tsx';

// Enhanced Components
import PerformanceOptimizer from './src/components/PerformanceOptimizer.tsx';
import EnhancedAccessibilityEnhancer from './src/components/EnhancedAccessibilityEnhancer.tsx';
import { MobileExperienceEnhancer } from './src/components/MobileExperienceEnhancer.tsx';
import { ChatAssistant } from './components/ChatAssistant';

// Enhanced lazy loading with preloading hints
const createLazyComponent = (importFn: () => Promise<any>, fallback?: React.ReactNode) => {
  const LazyComponent = lazy(importFn);
  return (props: any) => (
    <Suspense fallback={fallback || <LoadingSpinner />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage').then(module => ({ default: module.HomePage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(module => ({ default: module.default })));
const SolutionsPage = lazy(() => import('./pages/SolutionsPage').then(module => ({ default: module.SolutionsPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(module => ({ default: module.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(module => ({ default: module.ContactPage })));
const BlogPage = lazy(() => import('./pages/BlogPage').then(module => ({ default: module.BlogPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(module => ({ default: module.NotFoundPage })));
const ComprehensiveServicesPage = lazy(() => import('./pages/ComprehensiveServicesPage').then(module => ({ default: module.ComprehensiveServicesPage })));
const Sitemap = lazy(() => import('./pages/Sitemap').then(module => ({ default: module.default })));
const ComprehensiveSitemap = lazy(() => import('./pages/ComprehensiveSitemap').then(module => ({ default: module.ComprehensiveSitemap })));
const Support = lazy(() => import('./pages/Support').then(module => ({ default: module.default })));
const Training = lazy(() => import('./pages/Training').then(module => ({ default: module.default })));
const Helpdesk = lazy(() => import('./pages/Helpdesk').then(module => ({ default: module.default })));
const RevolutionaryServicesPage = lazy(() => import('./pages/RevolutionaryServicesPage').then(module => ({ default: module.RevolutionaryServicesPage })));
const NewServicesShowcase2025 = lazy(() => import('./pages/NewServicesShowcase2025').then(module => ({ default: module.NewServicesShowcase2025 })));
const EnhancedNewServices2025 = lazy(() => import('./pages/EnhancedNewServices2025').then(module => ({ default: module.EnhancedNewServices2025 })));
const PricingPage = lazy(() => import('./pages/PricingPage').then(module => ({ default: module.PricingPage })));

<<<<<<< HEAD
// Service Pages
const AISolutions = lazy(() => import('./pages/services/AISolutions').then(module => ({ default: module.AISolutions })));
const QuantumComputing = lazy(() => import('./pages/services/QuantumComputing').then(module => ({ default: module.QuantumComputing })));
const Cybersecurity = lazy(() => import('./pages/services/Cybersecurity').then(module => ({ default: module.Cybersecurity })));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-900">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-500 mx-auto mb-4"></div>
      <p className="text-gray-400">Loading...</p>
    </div>
  </div>
);

// Lazy load pages - only import existing ones
const Home = createLazyComponent(() => import('./pages/Home'));
const About = createLazyComponent(() => import('./pages/About'));
const Contact = createLazyComponent(() => import('./pages/Contact'));
const Services = createLazyComponent(() => import('./pages/Services'));
const Solutions = createLazyComponent(() => import('./pages/Solutions'));
const RequestQuote = createLazyComponent(() => import('./pages/RequestQuote'));
const Dashboard = createLazyComponent(() => import('./pages/Dashboard'));
const Login = createLazyComponent(() => import('./pages/Login'));
const FAQ = createLazyComponent(() => import('./pages/FAQ'));
const Privacy = createLazyComponent(() => import('./pages/Privacy'));
const Terms = createLazyComponent(() => import('./pages/Terms'));
const Cookies = createLazyComponent(() => import('./pages/Cookies'));
const Pricing = createLazyComponent(() => import('./pages/Pricing'));
const Help = createLazyComponent(() => import('./pages/Help'));
const News = createLazyComponent(() => import('./pages/News'));
const Careers = createLazyComponent(() => import('./pages/Careers'));
const Support = createLazyComponent(() => import('./pages/Support'));
const WhitePapers = createLazyComponent(() => import('./pages/WhitePapers'));
const ComprehensivePricing = createLazyComponent(() => import('./pages/ComprehensivePricing'));
>>>>>>> origin/merge-pr-10625

export default function App(props: any) {
  return (
<<<<<<< HEAD
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center p-8">
        <h1 className="text-3xl font-bold text-gray-900">Zion Tech Group</h1>
        <p className="text-gray-600 mt-2">Application shell loaded.</p>
      </div>
    </div>
=======
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-futuristic">
          <AppHeader />
          <Sidebar />
          
          <main className="flex-1 lg:ml-<mAIN_80">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/docs" element={<Documentation />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/cookies" element={<Cookies />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/services" element={<Services />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/white-papers" element={<WhitePapers />} />
                <Route path="/webinars" element={<Webinars />} />
                <Route path="/request-quote" element={<RequestQuote />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/schedule-demo" element={<ScheduleDemo />} />
                <Route path="/community" element={<Community />} />
                <Route path="/demo" element={<Demo />} />
                <Route path="/team" element={<Team />} />
                <Route path="/news" element={<News />} />
                <Route path="/help" element={<HelpCenter />} />
                
                {/* New pricing guide route */}
                <Route path="/comprehensive-pricing-guide-2025" element={<ComprehensivePricingGuide2025 />} />
                
                {/* Service Routes */}
                <Route path="/ai-services" element={<AIServices />} />
                <Route path="/it-services" element={<ITServices />} />
                <Route path="/micro-saas" element={<MicroSaaS />} />
                
                {/* New sitemap routes */}
                <Route path="/ai-solutions" element={<AiSolutions />} />
                <Route path="/solutions/enterprise" element={<SolutionsEnterprise />} />
                <Route path="/solutions/healthcare" element={<SolutionsHealthcare />} />
                
                {/* Service routes */}
                <Route path="/services/cloud-devops" element={<CloudDevOps />} />
                <Route path="/services/digital-twin" element={<DigitalTwin />} />
                <Route path="/services/data-analytics" element={<DataAnalytics />} />
                <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                <Route path="/services/ai-sales-copilot" element={<AISalesCopilot />} />
                <Route path="/services/cloud-finops-optimizer" element={<CloudFinOpsOptimizer />} />
                <Route path="/services/ai-compliance-assistant" element={<AIComplianceAssistant />} />
                <Route path="/services/ai-auto-email-responder" element={<AIAutoEmailResponder />} />
                <Route path="/services/mobile-feedback-surveys" element={<CustomerFeedbackSurveys />} />
                <Route path="/services/ai-compliance-copilot" element={<AIComplianceCopilot />} />
                <Route path="/services/llm-content-studio" element={<LLMContentStudio />} />
                <Route path="/services/finops-advisor" element={<FinOpsAdvisor />} />
                <Route path="/services/returns-management" element={<ReturnsManagement />} />
                <Route path="/services/email-sequencer" element={<EmailSequencer />} />
                <Route path="/services/podcast-transcription" element={<PodcastTranscription />} />
                <Route path="/services/micro-crm" element={<MicroCRM />} />
                <Route path="/services/website-analytics" element={<WebsiteAnalytics />} />
                <Route path="/services/it-helpdesk" element={<ITHelpdesk />} />
                <Route path="/services/affiliate-tracking" element={<AffiliateTracking />} />
                <Route path="/services/mobile-survey" element={<MobileSurvey />} />
                
                {/* Additional new service routes */}
                <Route path="/services/ai-seo" element={<AIPoweredSEO />} />
                <Route path="/services/interview-assessment" element={<InterviewAssessmentAI />} />
                <Route path="/services/helpdesk" element={<HelpdeskPlatform />} />
                <Route path="/services/dsr-portal" element={<DSRPortal />} />
                <Route path="/services/security-headers-csp" element={<SecurityHeadersCSP />} />
                
                {/* New AI-powered micro SAAS service routes */}
                <Route path="/services/ai-project-management" element={<AIProjectManagement />} />
                <Route path="/services/ai-customer-support-automation" element={<AICustomerSupportAutomation />} />
                <Route path="/services/ai-financial-analytics" element={<AIFinancialAnalytics />} />
                <Route path="/services/ai-marketing-automation" element={<AIMarketingAutomation />} />
                
                {/* Additional innovative AI services */}
                <Route path="/services/ai-quantum-financial-trading" element={<AIQuantumFinancialTrading />} />
                <Route path="/services/ai-predictive-maintenance" element={<AIPredictiveMaintenance />} />
                {/* <Route path="/services/quantum-machine-learning" element={<QuantumMachineLearning />} /> */}
                
                {/* Additional innovative AI services */}
                <Route path="/services/ai-autonomous-supply-chain" element={<AIAutonomousSupplyChain />} />
                <Route path="/services/ai-cybersecurity-threat-intelligence" element={<AICybersecurityThreatIntelligence />} />
                {/* <Route path="/services/ai-autonomous-threat-intelligence" element={<AIAutonomousThreatIntelligence />} /> */}
                
                {/* Additional innovative AI service routes */}
                <Route path="/services/ai-workflow-orchestrator" element={<AIWorkflowOrchestrator />} />
                <Route path="/services/ai-data-governance-platform" element={<AIDataGovernancePlatform />} />
                <Route path="/services/ai-customer-experience-analytics" element={<AICustomerExperienceAnalytics />} />
                <Route path="/services/ai-financial-risk-management" element={<AIFinancialRiskManagement />} />
                
                {/* New innovative micro SAAS service routes */}
                <Route path="/services/ai-customer-feedback-analytics" element={<AICustomerFeedbackAnalytics />} />
                <Route path="/services/ai-inventory-management" element={<AIInventoryManagement />} />
                <Route path="/services/ai-employee-performance-analytics" element={<AIEmployeePerformanceAnalytics />} />
                <Route path="/services/ai-financial-planning" element={<AIFinancialPlanning />} />
                
                {/* Advanced AI service routes */}
                <Route path="/services/ai-autonomous-business-intelligence" element={<AIAutonomousBusinessIntelligence />} />
                <Route path="/services/ai-quantum-computing-platform" element={<AIQuantumComputingPlatform />} />
                
                {/* Service Showcase Pages */}
                <Route path="/new-innovative-services-2025" element={<NewInnovativeServices2025 />} />
                <Route path="/comprehensive-improvements-2025" element={<ComprehensiveImprovements2025 />} />
                
                {/* Additional innovative AI service routes */}
                <Route path="/services/ai-code-review-security-scanner" element={<AICodeReviewSecurityScanner />} />
                <Route path="/services/ai-devops-automation-platform" element={<AIDevOpsAutomationPlatform />} />
                <Route path="/services/ai-business-intelligence-analytics" element={<AIBusinessIntelligenceAnalytics />} />
                <Route path="/services/ai-customer-experience-support" element={<AICustomerExperienceSupport />} />
                <Route path="/services/ai-marketing-automation-personalization" element={<AIMarketingAutomationPersonalization />} />
                
                {/* 2029 Services Showcase */}
                <Route path="/comprehensive-services-showcase-2029" element={<ComprehensiveServicesShowcase2029 />} />
                <Route path="/2029-comprehensive-services-showcase" element={<ComprehensiveServicesShowcase2029 />} />
                
                {/* 2031 Comprehensive Services Showcase */}
                <Route path="/comprehensive-services-showcase-2031" element={<ComprehensiveServicesShowcase2031 />} />
                <Route path="/services-2031" element={<ComprehensiveServicesShowcase2031 />} />
                <Route path="/ai-services-2031" element={<ComprehensiveServicesShowcase2031 />} />
                <Route path="/micro-saas-2031" element={<ComprehensiveServicesShowcase2031 />} />
                
                {/* Additional Pages */}
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/it-consulting" element={<ITConsulting />} />
                <Route path="/space-tech" element={<SpaceTech />} />
                <Route path="/sitemap" element={<Sitemap />} />
                
                {/* Enhanced Services Showcase 2025 */}
                <Route path="/services/enhanced-services-showcase-2025" element={<EnhancedServicesShowcase2025 />} />
                
                {/* Zion Tech Group 2025 Comprehensive Showcase */}
                <Route path="/zion-tech-group-2025-comprehensive-showcase" element={<ZionTechGroup2025ComprehensiveShowcase />} />
                
                {/* 2032 Innovative Services Showcase */}
                <Route path="/innovative-services-showcase-2032" element={<InnovativeServicesShowcase2032 />} />
                <Route path="/services-2032" element={<InnovativeServicesShowcase2032 />} />
                <Route path="/ai-services-2032" element={<InnovativeServicesShowcase2032 />} />
                <Route path="/micro-saas-2032" element={<InnovativeServicesShowcase2032 />} />
                
                {/* {/*_404 Page */}
                <Route path="*" element={<div>Page not found</div>} />
              </Routes>
            </Suspense>
          </main>
          
          <Footer />
          <ChatAssistant />
          {/* <PerformanceOptimizer /> */}
          <AccessibilityEnhancer />
        </div>
      </Router>
    </ErrorBoundary>
>>>>>>> origin/merge-pr-10615
=======
const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <AppHeader />
            <main className="relative">
              <Suspense fallback={<LoadingSpinner />}>
                <AnimatePresence mode="wait">
                  <Routes>
                    {/* Main Routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/team" element={<Team />} />
                    
                    {/* Services Routes */}
                    <Route path="/services" element={<Services />} />
                    <Route path="/services-overview" element={<Services />} />
                    
                    {/* Pricing Routes */}
                    <Route path="/pricing" element={<Pricing />} />
                    
                    {/* Content Routes */}
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/case-studies" element={<CaseStudies />} />
                    <Route path="/white-papers" element={<WhitePapers />} />
                    <Route path="/webinars" element={<Webinars />} />
                    
                    {/* Support Routes */}
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/help" element={<Help />} />
                    <Route path="/support" element={<Help />} />
                    <Route path="/search" element={<Search />} />
                    
                    {/* Company Routes */}
                    <Route path="/partners" element={<Partners />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/status" element={<Status />} />
                    <Route path="/system-status" element={<Status />} />
                    
                    {/* Legal Routes */}
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/cookies" element={<Cookies />} />
                    <Route path="/data-protection" element={<DataProtection />} />
                    <Route path="/accessibility" element={<Accessibility />} />
                    <Route path="/sitemap" element={<Sitemap />} />
                    
                    {/* API Routes */}
                    <Route path="/api" element={<API />} />
                    <Route path="/api-reference" element={<API />} />
                    <Route path="/docs" element={<Documentation />} />
                    <Route path="/documentation" element={<Documentation />} />
                    
                    {/* 404 Route */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </AnimatePresence>
              </Suspense>
            </main>
            <Footer />
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
>>>>>>> origin/merge-pr-11195
  );
}
