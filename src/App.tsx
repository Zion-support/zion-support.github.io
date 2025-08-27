import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';
import { LoadingSpinner } from './components/ui/loading-spinner';
import { SEO } from './components/SEO';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { ErrorBoundary } from './components/ErrorBoundary';
<<<<<<< HEAD
import { AppWrapper } from './AppWrapper';
import { PerformanceMonitor } from './components/ui/performance-monitor';
=======
<<<<<<< HEAD
>>>>>>> ae517307e3a (Simplify app structure, update SEO, and use react-helmet-async)
import { FuturisticAnimatedBackground } from './components/FuturisticAnimatedBackground';
import { AccessibilityEnhancer } from './components/AccessibilityEnhancer';

// Lazy load pages - only import existing ones
const Home = React.lazy(() => import('./pages/Home'));
const Home2026 = React.lazy(() => import('./pages/Home2026'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Services = React.lazy(() => import('./pages/ServicesPage'));
const Services2026 = React.lazy(() => import('./pages/Services2026'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const Products = React.lazy(() => import('./pages/Products'));
const AIServices = React.lazy(() => import('./pages/AIServices'));
const ITServices = React.lazy(() => import('./pages/ITServices'));
const MicroSaaS = React.lazy(() => import('./pages/MicroSaaS'));
const MicroSAASSolutions = React.lazy(() => import('./pages/services/MicroSAASSolutions'));

const Careers = React.lazy(() => import('./pages/Careers'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const Partners = React.lazy(() => import('./pages/Partners'));
const Team = React.lazy(() => import('./pages/Team'));
const News = React.lazy(() => import('./pages/News'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const HelpCenter = React.lazy(() => import('./pages/HelpCenter'));
const ResearchDevelopment = React.lazy(() => import('./pages/research-development'));
const Documentation = React.lazy(() => import('./pages/Documentation'));
const WhitePapers = React.lazy(() => import('./pages/WhitePapers'));
const Webinars = React.lazy(() => import('./pages/Webinars'));
const Status = React.lazy(() => import('./pages/Status'));
const Training = React.lazy(() => import('./pages/Training'));
const Support = React.lazy(() => import('./pages/Support'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));


// Additional simple pages
const Events = React.lazy(() => import('./pages/Events'));
const Help = React.lazy(() => import('./pages/Help'));
const Security = React.lazy(() => import('./pages/Security'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const Talent = React.lazy(() => import('./pages/Talent'));
const Equipment = React.lazy(() => import('./pages/Equipment'));
const GreenIT = React.lazy(() => import('./pages/GreenIT'));
const Marketplace = React.lazy(() => import('./pages/Marketplace'));
const MarketplaceProducts = React.lazy(() => import('./pages/marketplace/Products'));
const MarketplaceTalent = React.lazy(() => import('./pages/marketplace/Talent'));
const MarketplaceEquipment = React.lazy(() => import('./pages/marketplace/Equipment'));
const MarketplaceServices = React.lazy(() => import('./pages/marketplace/Services'));
const LoginPage = React.lazy(() => import('./pages/Login'));

// New 2025 service imports
const UltimateServicesShowcase2025 = React.lazy(() => import('./pages/UltimateServicesShowcase2025'));
const UltimateServicesShowcase2026 = React.lazy(() => import('./pages/UltimateServicesShowcase2026'));
const ComprehensivePricing2026 = React.lazy(() => import('./pages/ComprehensivePricing2026'));

// Sitemap-aligned pages
const AiSolutions = React.lazy(() => import('./pages/AiSolutions'));
const Solutions = React.lazy(() => import('./pages/Solutions'));
const SolutionsEnterprise = React.lazy(() => import('./pages/solutions/Enterprise'));
const SolutionsHealthcare = React.lazy(() => import('./pages/solutions/Healthcare'));

// Enhanced services pages - only import existing ones
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027.tsx'));
const ComprehensiveServicesLanding2025 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2025.jsx'));

// Service pages - only import existing ones
const CloudDevOps = React.lazy(() => import('./pages/services/CloudDevOps'));
const ITInfrastructure = React.lazy(() => import('./pages/services/ITInfrastructure'));
const AISalesCopilot = React.lazy(() => import('./pages/services/AISalesCopilot'));
const CloudFinOpsOptimizer = React.lazy(() => import('./pages/services/CloudFinOpsOptimizer'));
const AIComplianceAssistant = React.lazy(() => import('./pages/services/AIComplianceAssistant'));
const AIAutoEmailResponder = React.lazy(() => import('./pages/services/AIAutoEmailResponder'));
const CustomerFeedbackSurveys = React.lazy(() => import('./pages/services/CustomerFeedbackSurveys'));
const AIComplianceCopilot = React.lazy(() => import('./pages/services/AIComplianceCopilot'));
const LLMContentStudio = React.lazy(() => import('./pages/services/LLMContentStudio'));
const FinOpsAdvisor = React.lazy(() => import('./pages/services/FinOpsAdvisor'));
const ReturnsManagement = React.lazy(() => import('./pages/services/ReturnsManagement'));
const EmailSequencer = React.lazy(() => import('./pages/services/EmailSequencer'));
const PodcastTranscription = React.lazy(() => import('./pages/services/PodcastTranscription'));
const MicroCRM = React.lazy(() => import('./pages/services/MicroCRM'));
// New real service pages
const WebsiteAnalytics = React.lazy(() => import('./pages/services/WebsiteAnalytics'));
const ITHelpdesk = React.lazy(() => import('./pages/services/ITHelpdesk'));
const AffiliateTracking = React.lazy(() => import('./pages/services/AffiliateTracking'));
const MobileSurvey = React.lazy(() => import('./pages/services/MobileSurvey'));
// Additional innovative services
const AIAutonomousCodeReviewer = React.lazy(() => import('./pages/services/AIAutonomousCodeReviewer'));
const ZeroTrustNetworkAccess = React.lazy(() => import('./pages/services/ZeroTrustNetworkAccess'));
// Additional new service pages
const AIPoweredSEO = React.lazy(() => import('./pages/services/AIPoweredSEO'));
const InterviewAssessmentAI = React.lazy(() => import('./pages/services/InterviewAssessmentAI'));
const HelpdeskPlatform = React.lazy(() => import('./pages/services/HelpdeskPlatform'));
const DSRPortal = React.lazy(() => import('./pages/services/DSRPortal'));
const SecurityHeadersCSP = React.lazy(() => import('./pages/services/SecurityHeadersCSP'));
// New AI-powered micro SAAS services
const AIProjectManagement = React.lazy(() => import('./pages/services/AIProjectManagement'));
const AICustomerSupportAutomation = React.lazy(() => import('./pages/services/AICustomerSupportAutomation'));
const AIFinancialAnalytics = React.lazy(() => import('./pages/services/AIFinancialAnalytics'));
const AIMarketingAutomation = React.lazy(() => import('./pages/services/AIMarketingAutomation'));
const NewServicesShowcase2025 = React.lazy(() => import('./pages/NewServicesShowcase2025'));
const AIBusinessIntelligence = React.lazy(() => import('./pages/services/AIBusinessIntelligence'));
const DigitalTransformation = React.lazy(() => import('./pages/services/DigitalTransformation'));

// Additional service pages
const DigitalTwin = React.lazy(() => import('./pages/services/DigitalTwin'));
const DataAnalytics = React.lazy(() => import('./pages/services/DataAnalytics'));

// 2026 Services pages
const QuantumComputing = React.lazy(() => import('./pages/services/quantum-computing'));
const AICybersecurity = React.lazy(() => import('./pages/services/ai-cybersecurity'));
const IoTEdgeComputing = React.lazy(() => import('./pages/services/iot-edge-computing'));
const AIContentCreation = React.lazy(() => import('./pages/services/ai-content-creation'));
const AIHRPlatform = React.lazy(() => import('./pages/services/ai-hr-platform'));
const SustainableTechnology = React.lazy(() => import('./pages/services/sustainable-technology'));
const AIPredictiveMaintenance = React.lazy(() => import('./pages/services/ai-predictive-maintenance'));
const QuantumMachineLearning = React.lazy(() => import('./pages/services/quantum-machine-learning'));

// Additional pages
const API = React.lazy(() => import('./pages/API'));
const DeveloperPortal = React.lazy(() => import('./pages/DeveloperPortal'));

// Accessibility page
const Accessibility = () => (
=======

// Lazy load only the pages we are certain exist
const Home = React.lazy(() => import('./pages/Index'));

// Simple placeholder pages for missing ones
const Careers = () => (
>>>>>>> bcdda716496 (Simplify app structure, update SEO, and use react-helmet-async)
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <SEO 
      title="Careers - Zion Tech Group"
      description="Join our team of technology experts and help shape the future of AI-powered business solutions."
    />
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Careers</h1>
      <p className="text-xl text-gray-300">Join our team</p>
    </div>
  </div>
);

const Marketplace = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <SEO 
      title="Marketplace - Zion Tech Group"
      description="Explore our marketplace of AI-powered technology solutions and services."
    />
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Marketplace</h1>
      <p className="text-xl text-gray-300">Explore our solutions</p>
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>

      <div className="min-h-screen bg-futuristic">
        <AppHeader />
<<<<<<< HEAD
        
        <main className="flex-1 relative z-10">
          <Suspense fallback={<AppLoadingSpinner />}>
=======
        <main className="flex-1">
          <Suspense fallback={<LoadingSpinner />}>
>>>>>>> bcdda716496 (Simplify app structure, update SEO, and use react-helmet-async)
            <Routes>
              <Route path="/" element={<Home />} />
<<<<<<< HEAD
              <Route path="/home2026" element={<Home2026 />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/news" element={<News />} />
              <Route path="/events" element={<Events />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/team" element={<Team />} />
              <Route path="/help" element={<HelpCenter />} />
              <Route path="/security" element={<Security />} />
              <Route path="/status" element={<Status />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/talent" element={<Talent />} />
              <Route path="/equipment" element={<Equipment />} />
              <Route path="/request-quote" element={<RequestQuote />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/marketplace/products" element={<MarketplaceProducts />} />
              <Route path="/marketplace/talent" element={<MarketplaceTalent />} />
              <Route path="/marketplace/equipment" element={<MarketplaceEquipment />} />
              <Route path="/marketplace/services" element={<MarketplaceServices />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services2026" element={<Services2026 />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/products" element={<Products />} />
              <Route path="/ai-services" element={<AIServices />} />
              <Route path="/it-services" element={<ITServices />} />
              <Route path="/micro-saas" element={<MicroSaaS />} />
              <Route path="/services/micro-saas-solutions" element={<MicroSAASSolutions />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/docs" element={<Documentation />} />
              <Route path="/white-papers" element={<WhitePapers />} />
              <Route path="/webinars" element={<Webinars />} />
              <Route path="/training" element={<Training />} />
              <Route path="/support" element={<Support />} />
              <Route path="/accessibility" element={<Accessibility />} />
              <Route path="/research-development" element={<ResearchDevelopment />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              
              {/* New sitemap routes */}
              <Route path="/ai-solutions" element={<AiSolutions />} />
              <Route path="/solutions/enterprise" element={<SolutionsEnterprise />} />
              <Route path="/solutions/healthcare" element={<SolutionsHealthcare />} />
              
              {/* Service Routes - only for existing pages */}
              <Route path="/services/cloud-devops" element={<CloudDevOps />} />
              <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
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
              <Route path="/new-services-showcase-2025" element={<NewServicesShowcase2025 />} />
              
              {/* New 2025 service routes */}
              <Route path="/ultimate-services-2025" element={<UltimateServicesShowcase2025 />} />
              <Route path="/ultimate-services-showcase-2025" element={<UltimateServicesShowcase2025 />} />
              
              {/* New 2026 service routes */}
              <Route path="/ultimate-services-showcase-2026" element={<UltimateServicesShowcase2026 />} />
              <Route path="/ultimate-services-2026" element={<UltimateServicesShowcase2026 />} />
              <Route path="/comprehensive-pricing-2026" element={<ComprehensivePricing2026 />} />
              <Route path="/pricing-2026" element={<ComprehensivePricing2026 />} />
              
              {/* Additional service routes */}
              <Route path="/services/digital-twin" element={<DigitalTwin />} />
              <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
              <Route path="/services/data-analytics" element={<DataAnalytics />} />
              <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
              <Route path="/services/ai" element={<AiSolutions />} />
              
              {/* 2026 Services routes */}
              <Route path="/services/quantum-computing" element={<QuantumComputing />} />
              <Route path="/services/ai-cybersecurity" element={<AICybersecurity />} />
              <Route path="/services/iot-edge-computing" element={<IoTEdgeComputing />} />
              <Route path="/services/ai-content-creation" element={<AIContentCreation />} />
              <Route path="/services/ai-hr-platform" element={<AIHRPlatform />} />
              <Route path="/services/sustainable-technology" element={<SustainableTechnology />} />
              <Route path="/services/ai-predictive-maintenance" element={<AIPredictiveMaintenance />} />
              <Route path="/services/quantum-machine-learning" element={<QuantumMachineLearning />} />
              
              {/* Additional routes */}
              <Route path="/api" element={<API />} />
              <Route path="/developers" element={<DeveloperPortal />} />
              
              {/* Catch-all */}
              <Route path="*" element={<NotFound />} />
=======
              {/* Catch all route */}
              <Route path="*" element={<Home />} />
>>>>>>> ae517307e3a (Simplify app structure, update SEO, and use react-helmet-async)
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ChatAssistant />
        <PerformanceOptimizer />
<<<<<<< HEAD
        <PerformanceMonitor enabled={true} autoRefresh={true} />
=======
<<<<<<< HEAD
>>>>>>> ae517307e3a (Simplify app structure, update SEO, and use react-helmet-async)
        <AccessibilityEnhancer />
        <PWAUpdater />
=======
>>>>>>> bcdda716496 (Simplify app structure, update SEO, and use react-helmet-async)
      </div>
    </ErrorBoundary>
  );
}

export default App;