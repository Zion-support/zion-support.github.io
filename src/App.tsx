import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { FuturisticNavigation } from './components/FuturisticNavigation';
import { FuturisticFooter } from './components/FuturisticFooter';
import { FuturisticAnimatedBackground } from './components/FuturisticAnimatedBackground';
import { ChatAssistant } from './components/ChatAssistant';
import PerformanceMonitor from './components/PerformanceMonitor';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';

// Lazy load pages with enhanced services
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const PartnersPage = React.lazy(() => import('./pages/Partners'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
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
const Cookies = React.lazy(() => import('./pages/Cookies'));
const SystemStatus = React.lazy(() => import('./pages/SystemStatus'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const AIWorkflowAutomation = React.lazy(() => import('./pages/services/AIWorkflowAutomation'));
const QuantumComputingSolutions = React.lazy(() => import('./pages/services/QuantumComputingSolutions'));
const GreenIT = React.lazy(() => import('./pages/GreenIT'));
const AISolutions = React.lazy(() => import('./pages/AISolutions'));
const Leadership = React.lazy(() => import('./pages/Leadership'));

// Additional simple pages
const Events = React.lazy(() => import('./pages/Events'));
const Help = React.lazy(() => import('./pages/Help'));
const Security = React.lazy(() => import('./pages/Security'));
const Talent = React.lazy(() => import('./pages/Talent'));
const Equipment = React.lazy(() => import('./pages/Equipment'));
const GreenIT = React.lazy(() => import('./pages/GreenIT'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const Solutions = React.lazy(() => import('./pages/Solutions'));
const ResearchDevelopment = React.lazy(() => import('./pages/ResearchDevelopment'));
const News = React.lazy(() => import('./pages/News'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const HelpCenter = React.lazy(() => import('./pages/HelpCenter'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));

// Enhanced services pages
const EnhancedServicesPage = React.lazy(() => import('./pages/EnhancedServicesPage.tsx'));
const ComprehensiveServicesOverview2027 = React.lazy(() => import('./pages/ComprehensiveServicesOverview2027.tsx'));
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027.tsx'));
const InnovativeServicesShowcase2027 = React.lazy(() => import('./pages/InnovativeServicesShowcase2027.tsx'));
const UltimateInnovativeServicesShowcase2025 = React.lazy(() => import('./pages/UltimateInnovativeServicesShowcase2025.tsx'));
const ComprehensiveServicesLanding2025 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2025.tsx'));
const EnhancedZionServicesShowcase2025 = React.lazy(() => import('./pages/EnhancedZionServicesShowcase2025.tsx'));
const ZionTechGroupMarketing2025 = React.lazy(() => import('./pages/ZionTechGroupMarketing2025.tsx'));
const InnovativeServices2028 = React.lazy(() => import('./pages/InnovativeServices2028'));
const Revolutionary2026ServicesShowcase = React.lazy(() => import('./pages/Revolutionary2026ServicesShowcase.tsx'));
const Revolutionary2026PricingGuide = React.lazy(() => import('./pages/Revolutionary2026PricingGuide.tsx'));

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

// Comprehensive improvements components
const AdvancedAIServicesHub = React.lazy(() => import('./components/AdvancedAIServicesHub'));
const PerformanceAnalytics = React.lazy(() => import('./components/PerformanceAnalytics'));
const EnhancedSEOManager = React.lazy(() => import('./components/EnhancedSEOManager'));
const ComprehensiveImprovements2025 = React.lazy(() => import('./pages/ComprehensiveImprovements2025'));

// New innovative AI services
const AIAutonomousResearchAssistant = React.lazy(() => import('./pages/services/AIAutonomousResearchAssistant'));
const AISupplyChainOptimization = React.lazy(() => import('./pages/services/AISupplyChainOptimization'));
const AIContentMarketingSuite = React.lazy(() => import('./pages/services/AIContentMarketingSuite'));
const AIQuantumHybridPlatform = React.lazy(() => import('./pages/services/AIQuantumHybridPlatform'));
const AICybersecurityPlatform = React.lazy(() => import('./pages/services/AICybersecurityPlatform'));
const AIHealthcarePlatform = React.lazy(() => import('./pages/services/AIHealthcarePlatform'));
const AIBusinessIntelligence = React.lazy(() => import('./pages/services/AIBusinessIntelligence'));
const DigitalTransformation = React.lazy(() => import('./pages/services/DigitalTransformation'));

// New AI-powered micro SAAS services
const AIWorkflowAutomation = React.lazy(() => import('./pages/services/AIWorkflowAutomation'));
const AIVirtualAssistant = React.lazy(() => import('./pages/services/AIVirtualAssistant'));
const AIDataAnalytics = React.lazy(() => import('./pages/services/AIDataAnalytics'));

// Additional service pages
const DigitalTwin = React.lazy(() => import('./pages/services/DigitalTwin'));
const DataAnalytics = React.lazy(() => import('./pages/services/DataAnalytics'));
const ITInfrastructure = React.lazy(() => import('./pages/services/ITInfrastructure'));
const AIBusinessIntelligence = React.lazy(() => import('./pages/services/AIBusinessIntelligence'));

// Simple placeholder pages for missing ones
const FAQ = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <SEO 
      title="FAQ - Zion Tech Group"
      description="Frequently asked questions about our AI-powered technology solutions and services."
    />
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">FAQ</h1>
      <p className="text-xl text-gray-300">Frequently asked questions</p>
    </div>
  </div>
);

// Error boundary component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <div className="text-center max-w-md mx-auto px-6">
      <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
        <span className="text-3xl">⚠️</span>
      </div>
      <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
      <p className="text-gray-400 mb-6">
        We're sorry, but something unexpected happened. Please try refreshing the page.
      </p>
      <div className="space-y-3">
        <button
          onClick={resetErrorBoundary}
          className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
        >
          Try Again
        </button>
        <button
          onClick={() => window.location.href = '/'}
          className="w-full px-6 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
        >
          Go Home
        </button>
      </div>
      {process.env.NODE_ENV === 'development' && (
        <details className="mt-6 text-left">
          <summary className="text-cyan-400 cursor-pointer">Error Details</summary>
          <pre className="mt-2 text-xs text-gray-400 bg-black/50 p-4 rounded overflow-auto">
            {error.message}
          </pre>
        </details>
      )}
    </div>
  </div>
);

// Lazy load pages with better error handling
const Home = lazy(() => import('./pages/Home').catch(() => ({ default: () => <div>Error loading Home page</div> })));
const About = lazy(() => import('./pages/About').catch(() => ({ default: () => <div>Error loading About page</div> })));
const Contact = lazy(() => import('./pages/Contact').catch(() => ({ default: () => <div>Error loading Contact page</div> })));
const Blog = lazy(() => import('./pages/Blog').catch(() => ({ default: () => <div>Error loading Blog page</div> })));
const BlogPost = lazy(() => import('./pages/BlogPost').catch(() => ({ default: () => <div>Error loading Blog Post page</div> })));
const PartnersPage = lazy(() => import('./pages/PartnersPage').catch(() => ({ default: () => <div>Error loading Partners page</div> })));
const Login = lazy(() => import('./pages/Login').catch(() => ({ default: () => <div>Error loading Login page</div> })));
const FAQ = lazy(() => import('./pages/FAQ').catch(() => ({ default: () => <div>Error loading FAQ page</div> })));
const Careers = lazy(() => import('./pages/Careers').catch(() => ({ default: () => <div>Error loading Careers page</div> })));
const Privacy = lazy(() => import('./pages/Privacy').catch(() => ({ default: () => <div>Error loading Privacy page</div> })));
const Terms = lazy(() => import('./pages/Terms').catch(() => ({ default: () => <div>Error loading Terms page</div> })));
const Sitemap = lazy(() => import('./pages/Sitemap').catch(() => ({ default: () => <div>Error loading Sitemap page</div> })));
const Services = lazy(() => import('./pages/Services').catch(() => ({ default: () => <div>Error loading Services page</div> })));
const GreenIT = lazy(() => import('./pages/GreenIT').catch(() => ({ default: () => <div>Error loading Green IT page</div> })));
const EnhancedServices = lazy(() => import('./pages/EnhancedServices').catch(() => ({ default: () => <div>Error loading Enhanced Services page</div> })));

// New service pages with error handling
const AIServicesPage = lazy(() => import('./pages/AIServicesPage').catch(() => ({ default: () => <div>Error loading AI Services page</div> })));
const MicroSAASServicesPage = lazy(() => import('./pages/MicroSAASServicesPage').catch(() => ({ default: () => <div>Error loading Micro SAAS Services page</div> })));
const ITServicesPage = lazy(() => import('./pages/ITServicesPage').catch(() => ({ default: () => <div>Error loading IT Services page</div> })));
const InnovativeServicesShowcase2027 = lazy(() => import('./pages/InnovativeServicesShowcase2027').catch(() => ({ default: () => <div>Error loading Innovative Services 2027 page</div> })));
const ComprehensiveServicesOverview2027 = lazy(() => import('./pages/ComprehensiveServicesOverview2027').catch(() => ({ default: () => <div>Error loading Comprehensive Services Overview 2027 page</div> })));
const ComprehensivePricingGuide2027 = lazy(() => import('./pages/ComprehensivePricingGuide2027').catch(() => ({ default: () => <div>Error loading Comprehensive Pricing Guide 2027 page</div> })));
const EnhancedInnovativeServicesShowcase2027 = lazy(() => import('./pages/EnhancedInnovativeServicesShowcase2027').catch(() => ({ default: () => <div>Error loading Enhanced Innovative Services 2027 page</div> })));
const ComprehensiveServicesOverview = lazy(() => import('./pages/ComprehensiveServicesOverview').catch(() => ({ default: () => <div>Error loading Comprehensive Services Overview page</div> })));
const ComprehensivePricingGuide2027New = lazy(() => import('./pages/ComprehensivePricingGuide2027').catch(() => ({ default: () => <div>Error loading Comprehensive Pricing Guide 2027 New page</div> })));

// Route configuration for better organization
const routes = [
  // Main Routes
  { path: "/", element: Home, name: "Home" },
  { path: "/about", element: About, name: "About" },
  { path: "/contact", element: Contact, name: "Contact" },
  { path: "/blog", element: Blog, name: "Blog" },
  { path: "/blog/:slug", element: BlogPost, name: "Blog Post" },
  { path: "/faq", element: FAQ, name: "FAQ" },
  { path: "/careers", element: Careers, name: "Careers" },
  { path: "/privacy", element: Privacy, name: "Privacy" },
  { path: "/terms", element: Terms, name: "Terms" },
  { path: "/sitemap", element: Sitemap, name: "Sitemap" },
  { path: "/services", element: Services, name: "Services" },
  { path: "/green-it", element: GreenIT, name: "Green IT" },
  { path: "/partners", element: PartnersPage, name: "Partners" },
  { path: "/login", element: Login, name: "Login" },
  { path: "/enhanced-services", element: EnhancedServices, name: "Enhanced Services" },
  
  // AI Services Routes
  { path: "/ai-services", element: AIServicesPage, name: "AI Services" },
  { path: "/ai-services/:service", element: AIServicesPage, name: "AI Service Detail" },
  
  // Micro SAAS Routes
  { path: "/micro-saas", element: MicroSAASServicesPage, name: "Micro SAAS Services" },
  { path: "/micro-saas/:service", element: MicroSAASServicesPage, name: "Micro SAAS Service Detail" },
  
  // IT Services Routes
  { path: "/it-services", element: ITServicesPage, name: "IT Services" },
  { path: "/it-services/:service", element: ITServicesPage, name: "IT Service Detail" },
  
  // Innovative Services 2027 Routes
  { path: "/innovative-services-2027", element: InnovativeServicesShowcase2027, name: "Innovative Services 2027" },
  { path: "/comprehensive-services-overview", element: ComprehensiveServicesOverview2027, name: "Comprehensive Services Overview 2027" },
  { path: "/comprehensive-pricing-guide", element: ComprehensivePricingGuide2027, name: "Comprehensive Pricing Guide 2027" },
  { path: "/enhanced-innovative-services-2027", element: EnhancedInnovativeServicesShowcase2027, name: "Enhanced Innovative Services 2027" },
  
  // New Comprehensive Routes
  { path: "/services-overview", element: ComprehensiveServicesOverview, name: "Services Overview" },
  { path: "/pricing-guide", element: ComprehensivePricingGuide2027New, name: "Pricing Guide" },
  
  // Emerging Tech Routes
  { path: "/emerging-tech", element: GreenIT, name: "Emerging Tech" },
  { path: "/emerging-tech/:service", element: GreenIT, name: "Emerging Tech Service" },
  
  // Marketplace Routes
  { path: "/marketplace", element: GreenIT, name: "Marketplace" },
  { path: "/marketplace/:service", element: GreenIT, name: "Marketplace Service" }
];

function App() {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = (toast: Omit<ToastProps, 'id'>) => {
    const id = Date.now().toString();
    setToasts(prev => [...prev, { ...toast, id }]);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-futuristic">
        <FuturisticAnimatedBackground />
        <AppHeader />
        
        <main className="flex-1 relative z-10">
          <Suspense fallback={<AppLoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
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
              <Route path="/ai-solutions" element={<AISolutions />} />
              <Route path="/team" element={<Team />} />
              <Route path="/leadership" element={<Leadership />} />
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
              <Route path="/green-it" element={<GreenIT />} />
              
              {/* Service Routes - only for existing pages */}
              <Route path="/services/ai-workflow-automation" element={<AIWorkflowAutomation />} />
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
              {/* New innovative AI service routes */}
              <Route path="/services/ai-project-manager" element={<AIProjectManager />} />
              <Route path="/services/ai-content-generator" element={<AIContentGenerator />} />
              <Route path="/services/ai-customer-support" element={<AICustomerSupport />} />
              <Route path="/services/ai-data-analytics" element={<AIDataAnalytics />} />
              <Route path="/services/ai-marketing-automation" element={<AIMarketingAutomation />} />
              <Route path="/new-services-showcase-2025" element={<NewServicesShowcase2025 />} />
              
              {/* New innovative AI services */}
              <Route path="/services/ai-autonomous-research-assistant" element={<AIAutonomousResearchAssistant />} />
              <Route path="/services/ai-supply-chain-optimization" element={<AISupplyChainOptimization />} />
              <Route path="/services/ai-content-marketing-suite" element={<AIContentMarketingSuite />} />
              <Route path="/services/ai-quantum-hybrid-platform" element={<AIQuantumHybridPlatform />} />
              <Route path="/services/ai-cybersecurity-platform" element={<AICybersecurityPlatform />} />
              <Route path="/services/ai-healthcare-platform" element={<AIHealthcarePlatform />} />
              
              {/* New AI-powered micro SAAS services */}
              <Route path="/services/ai-workflow-automation" element={<AIWorkflowAutomation />} />
              <Route path="/services/ai-virtual-assistant" element={<AIVirtualAssistant />} />
              <Route path="/services/ai-data-analytics" element={<AIDataAnalytics />} />
              
              {/* New 2025 service routes */}
              <Route path="/ultimate-services-2025" element={<UltimateServicesShowcase2025 />} />
              <Route path="/ultimate-services-showcase-2025" element={<UltimateServicesShowcase2025 />} />
              
              {/* New 2026 service routes */}
              <Route path="/ultimate-services-showcase-2026" element={<UltimateServicesShowcase2026 />} />
              <Route path="/ultimate-services-2026" element={<UltimateServicesShowcase2026 />} />
              <Route path="/comprehensive-pricing-2026" element={<ComprehensivePricing2026 />} />
              <Route path="/pricing-2026" element={<ComprehensivePricing2026 />} />
              
              {/* 2028 Pricing */}
              <Route path="/comprehensive-pricing-2028" element={<ComprehensivePricing2028 />} />
              <Route path="/pricing-2028" element={<ComprehensivePricing2028 />} />
              
              {/* Additional service routes */}
              <Route path="/services/digital-twin" element={<DigitalTwin />} />
              <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
              <Route path="/services/data-analytics" element={<DataAnalytics />} />
              <Route path="/services/ai-solutions" element={<AISolutions />} />
              
              {/* 2026 Services routes */}
              <Route path="/services/quantum-computing" element={<QuantumComputing />} />
              <Route path="/services/quantum-computing-solutions" element={<QuantumComputingSolutions />} />
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
            </Routes>
          </Suspense>
        </main>
        
        <EnhancedFuturisticFooter />
        <ChatAssistant />
        <PerformanceOptimizer />
        <PerformanceMonitor showMetrics={import.meta.env.DEV} />
        <AccessibilityEnhancer />
        <PWAUpdater />
        <ThemeToggle />
        <ToastContainer />
        <PerformanceMonitor />
      </div>
    </ErrorBoundary>
  );
}

export default App;