import React, { Suspense } from 'react';
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';
import { ChatAssistant } from './components/ChatAssistant';
import { NewContentPromotionBanner } from './components/NewContentPromotionBanner';
import { NewContentPromotionBanner } from './components/NewContentPromotionBanner';
import NewContentPromotionBanner2025 from './components/NewContentPromotionBanner2025';
import NewContentPromotionBanner2025 from './components/NewContentPromotionBanner2025';
import { RevolutionaryContentBanner } from './components/RevolutionaryContentBanner';
import { RevolutionaryContentBanner } from './components/RevolutionaryContentBanner';
import InnovativeContentShowcase2026 from './components/InnovativeContentShowcase2026';
import InnovativeContentShowcase2026 from './components/InnovativeContentShowcase2026';
import InteractiveContentDiscovery2026 from './components/InteractiveContentDiscovery2026';
import InteractiveContentDiscovery2026 from './components/InteractiveContentDiscovery2026';
import EnhancedContentPromotionBanner from './components/EnhancedContentPromotionBanner';
import EnhancedContentPromotionBanner from './components/EnhancedContentPromotionBanner';

import AI2035OmniversalConsciousnessBanner from './components/AI2035OmniversalConsciousnessBanner';
import AI2035OmniversalConsciousnessBanner from './components/AI2035OmniversalConsciousnessBanner';
import AI2035OmniversalConsciousnessShowcase from './components/AI2035OmniversalConsciousnessShowcase';
import AI2035OmniversalConsciousnessShowcase from './components/AI2035OmniversalConsciousnessShowcase';
import NeuralInterfaceRevolutionBanner from './components/NeuralInterfaceRevolutionBanner';
import NeuralInterfaceRevolutionBanner from './components/NeuralInterfaceRevolutionBanner';
import SpaceTechnologySolutionsBanner from './components/SpaceTechnologySolutionsBanner';
import SpaceTechnologySolutionsBanner from './components/SpaceTechnologySolutionsBanner';
import RevolutionaryContentPromotionBanner from './components/RevolutionaryContentPromotionBanner';
import RevolutionaryContentPromotionBanner from './components/RevolutionaryContentPromotionBanner';
import FutureTechnologyShowcaseBanner from './components/FutureTechnologyShowcaseBanner';
import FutureTechnologyShowcaseBanner from './components/FutureTechnologyShowcaseBanner';
import { LoadingSpinner } from './components/ui/loading-spinner';
import { LoadingSpinner } from './components/ui/loading-spinner';
import { SEO } from './components/SEO';
import { SEO } from './components/SEO';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { ErrorBoundary } from './components/ErrorBoundary';
import { PerformanceMonitor } from './components/PerformanceMonitor';
import { PerformanceMonitor } from './components/PerformanceMonitor';

// Lazy load pages - only import existing ones
import React, { Suspense, lazy } from 'react';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FuturisticNavigation } from './components/FuturisticNavigation';
import { FuturisticNavigation } from './components/FuturisticNavigation';
import { FuturisticFooter } from './components/FuturisticFooter';
import { FuturisticFooter } from './components/FuturisticFooter';
import { FuturisticAnimatedBackground } from './components/FuturisticAnimatedBackground';
import { FuturisticAnimatedBackground } from './components/FuturisticAnimatedBackground';
import { ChatAssistant } from './components/ChatAssistant';
import { ChatAssistant } from './components/ChatAssistant';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Services = React.lazy(() => import('./pages/Services'));
const AIServices = React.lazy(() => import('./pages/AIServicesPage'));
const ITServices = React.lazy(() => import('./pages/ITServices'));
const ComprehensiveServices = React.lazy(() => import('./pages/ComprehensiveServices'));
const MobileLaunch = React.lazy(() => import('./pages/MobileLaunchPage'));
const Analytics = React.lazy(() => import('./pages/Analytics'));
const Match = React.lazy(() => import('./pages/AIMatcher'));
const Careers = React.lazy(() => import('./pages/Careers'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const Partners = React.lazy(() => import('./pages/Partners'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const HelpCenter = React.lazy(() => import('./pages/HelpCenter'));
const Developers = React.lazy(() => import('./pages/Developers'));
const WhitePapers = React.lazy(() => import('./pages/white-papers'));
const Webinars = React.lazy(() => import('./pages/webinars'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
// Additional simple pages
const Help = React.lazy(() => import('./pages/HelpCenter'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const Talent = React.lazy(() => import('./pages/TalentDirectory'));
const Equipment = React.lazy(() => import('./pages/EquipmentPage'));
const GreenIT = React.lazy(() => import('./pages/GreenIT'));
const Marketplace = React.lazy(() => import('./pages/Marketplace'));
const LoginPage = React.lazy(() => import('./pages/Login'));
const ITOnsiteServices = React.lazy(() => import('./pages/ITOnsiteServicesPage'));
const HelpCenter = React.lazy(() => import('./pages/HelpCenter'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Security = React.lazy(() => import('./pages/Security'));
const Status = React.lazy(() => import('./pages/Status'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const Accessibility = React.lazy(() => import('./pages/Accessibility'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Profile = React.lazy(() => import('./pages/Profile'));
const Settings = React.lazy(() => import('./pages/Settings'));
const Signup = React.lazy(() => import('./pages/Signup'));
const ForgotPassword = React.lazy(() => import('./pages/ForgotPassword'));
const ResetPassword = React.lazy(() => import('./pages/ResetPassword'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const EnhancedServices = React.lazy(() => import('./pages/EnhancedServices'));

// New 2025 service imports
const UltimateServicesShowcase2025 = React.lazy(() => import('./pages/UltimateServicesShowcase2025'));
const ComprehensivePricing2028 = React.lazy(() => import('./pages/ComprehensivePricing2028'));
const ContentShowcase2025 = React.lazy(() => import('../app/content-showcase-2025/page'));
const ITOnsiteServicesPage = React.lazy(() => import('./pages/ITOnsiteServicesPage'));
const OpenAppRedirect = React.lazy(() => import('./pages/OpenAppRedirect'));
const ContactPage = React.lazy(() => import('./pages/Contact'));
const ZionHireAI = React.lazy(() => import('./pages/ZionHireAI'));
const RequestQuotePage = React.lazy(() => import('./pages/RequestQuote'));
const ExpandedServicesPage = React.lazy(() => import('./pages/ExpandedServicesPage'));
const ServiceDetailPage = React.lazy(() => import('./pages/ServiceDetailPage'));

  { path: '/', element: <Home /> },
  { path: '/match', element: <AIMatcherPage /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/talent', element: <TalentDirectory /> },
  { path: '/talents', element: <TalentsPage /> },
  { path: '/services', element: <ServicesPage /> },
  { path: '/it-onsite-services', element: <ITOnsiteServicesPage /> },
  { path: '/categories', element: <Categories /> },
  { path: '/equipment', element: <EquipmentPage /> },
  { path: '/equipment/:id', element: <EquipmentDetail /> },
  { path: '/analytics', element: <Analytics /> },
  { path: '/mobile-launch', element: <MobileLaunchPage /> },
  { path: '/open-app', element: <OpenAppRedirect /> },
  { path: '/community', element: <CommunityPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/partners', element: <PartnersPage /> },
  { path: '/zion-hire-ai', element: <ZionHireAI /> },
  { path: '/hire-ai', element: <ZionHireAI /> },
  { path: '/request-quote', element: <RequestQuotePage /> },
  { path: '/expanded-services', element: <ExpandedServicesPage /> },
  { path: '/service/:serviceId', element: <ServiceDetailPage /> },
  { path: '/blog', element: <Blog /> },
  { path: '/blog/:slug', element: <BlogPost /> },

const AIServicesPage = React.lazy(() => import('./pages/AIServicesPage'));
const MicroSAASServicesPage = React.lazy(() => import('./pages/MicroSAASServicesPage'));
const ITServicesPage = React.lazy(() => import('./pages/ITServicesPage'));
const EnhancedServicesShowcase2025 = React.lazy(() => import('./pages/EnhancedServicesShowcase2025.tsx'));
const ComprehensivePricingGuide2025 = React.lazy(() => import('./pages/ComprehensivePricingGuide2025.tsx'));
const ComprehensiveServicesShowcase2025 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2025.tsx'));

// Enhanced services pages - only import existing ones
const ComprehensiveServicesLanding2025 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2025'));

// Service pages - only import existing ones
// Note: Most service pages are commented out as they don't exist yet
// const CloudDevOps = React.lazy(() => import('./pages/services/CloudDevOps'));
// const ITInfrastructure = React.lazy(() => import('./pages/services/ITInfrastructure'));
// const AISalesCopilot = React.lazy(() => import('./pages/services/AISalesCopilot'));
// const CloudFinOpsOptimizer = React.lazy(() => import('./pages/services/CloudFinOpsOptimizer'));
// const AIComplianceAssistant = React.lazy(() => import('./pages/services/AIComplianceAssistant'));
// const AIAutoEmailResponder = React.lazy(() => import('./pages/services/AIAutoEmailResponder'));
// const CustomerFeedbackSurveys = React.lazy(() => import('./pages/services/CustomerFeedbackSurveys'));
// const AIComplianceCopilot = React.lazy(() => import('./pages/services/AIComplianceCopilot'));
// const LLMContentStudio = React.lazy(() => import('./pages/services/LLMContentStudio'));
// const FinOpsAdvisor = React.lazy(() => import('./pages/services/FinOpsAdvisor'));
// const ReturnsManagement = React.lazy(() => import('./pages/services/ReturnsManagement'));
// const EmailSequencer = React.lazy(() => import('./pages/services/EmailSequencer'));
// const PodcastTranscription = React.lazy(() => import('./pages/services/PodcastTranscription'));
// const MicroCRM = React.lazy(() => import('./pages/services/MicroCRM'));
// New real service pages
// const WebsiteAnalytics = React.lazy(() => import('./pages/services/WebsiteAnalytics'));
// const ITHelpdesk = React.lazy(() => import('./pages/services/ITHelpdesk'));
// const AffiliateTracking = React.lazy(() => import('./pages/services/AffiliateTracking'));
// const MobileSurvey = React.lazy(() => import('./pages/services/MobileSurvey'));
// Additional innovative services
// const AIAutonomousCodeReviewer = React.lazy(() => import('./pages/services/AIAutonomousCodeReviewer'));
// const ZeroTrustNetworkAccess = React.lazy(() => import('./pages/services/ZeroTrustNetworkAccess'));
// Additional new service pages
// const AIPoweredSEO = React.lazy(() => import('./pages/services/AIPoweredSEO'));
// const InterviewAssessmentAI = React.lazy(() => import('./pages/services/InterviewAssessmentAI'));
// const HelpdeskPlatform = React.lazy(() => import('./pages/services/HelpdeskPlatform'));
// const DSRPortal = React.lazy(() => import('./pages/services/DSRPortal'));
// const SecurityHeadersCSP = React.lazy(() => import('./pages/services/SecurityHeadersCSP'));
// New AI-powered micro SAAS services
// const AIProjectManagement = React.lazy(() => import('./pages/services/AIProjectManagement'));
// const AICustomerSupportAutomation = React.lazy(() => import('./pages/services/AICustomerSupportAutomation'));
// const AIFinancialAnalytics = React.lazy(() => import('./pages/services/AIFinancialAnalytics'));
// const AIMarketingAutomation = React.lazy(() => import('./pages/services/AIMarketingAutomation'));
const NewServicesShowcase2025 = React.lazy(() => import('./components/NewServicesShowcase2025'));

// Comprehensive improvements components - commented out as they don't exist yet
// const AdvancedAIServicesHub = React.lazy(() => import('./components/AdvancedAIServicesHub'));
// const AdvancedAIServicesHub = React.lazy(() => import('./components/AdvancedAIServicesHub'));
// const PerformanceAnalytics = React.lazy(() => import('./components/PerformanceAnalytics'));
// const PerformanceAnalytics = React.lazy(() => import('./components/PerformanceAnalytics'));
// const EnhancedSEOManager = React.lazy(() => import('./components/EnhancedSEOManager'));
// const EnhancedSEOManager = React.lazy(() => import('./components/EnhancedSEOManager'));
// const ComprehensiveImprovements2025 = React.lazy(() => import('./pages/ComprehensiveImprovements2025'));

const AIAutonomousResearchAssistant = React.lazy(() => import('./pages/services/AIAutonomousResearchAssistant'));
const AISupplyChainOptimization = React.lazy(() => import('./pages/services/AISupplyChainOptimization'));
const AIQuantumHybridPlatform = React.lazy(() => import('./pages/services/AIQuantumHybridPlatform'));
const AI2026AutomationPlatform = React.lazy(() => import('./pages/services/AI2026AutomationPlatform'));
// const AIContentMarketingSuite = React.lazy(() => import('./pages/services/AIContentMarketingSuite'));
// const AICybersecurityPlatform = React.lazy(() => import('./pages/services/AICybersecurityPlatform'));
// const AIHealthcarePlatform = React.lazy(() => import('./pages/services/AIHealthcarePlatform'));
// const AIBusinessIntelligence = React.lazy(() => import('./pages/services/AIBusinessIntelligence'));
// const DigitalTransformation = React.lazy(() => import('./pages/services/DigitalTransformation'));

// const AILegalDocumentAutomation = React.lazy(() => import('./pages/services/AILegalDocumentAutomation'));
// const AIHealthcareAnalytics = React.lazy(() => import('./pages/services/AIHealthcareAnalytics'));
// const AIFinancialTrading = React.lazy(() => import('./pages/services/AIFinancialTrading'));
// const AIContentCreationSuite = React.lazy(() => import('./pages/services/AIContentCreationSuite'));

const AIRevolution2025 = React.lazy(() => import('./pages/AIRevolution2025'));
const QuantumComputingBreakthrough = React.lazy(() => import('./pages/QuantumComputingBreakthrough'));
const AutonomousBusinessPlatform = React.lazy(() => import('./pages/AutonomousBusinessPlatform'));
const AutonomousBusinessPlatform2026 = React.lazy(() => import('./pages/AutonomousBusinessPlatform2026'));
const InnovativeContentShowcase2026Page = () => <InnovativeContentShowcase2026 />;
const InteractiveContentDiscovery2026Page = () => <InteractiveContentDiscovery2026 />;

const BlogPostQuantumAI = React.lazy(() => import('./pages/BlogPostQuantumAI'));
const BlogPostAutomationGuide = React.lazy(() => import('./pages/BlogPostAutomationGuide'));
const BlogPostAIAutomation2025 = React.lazy(() => import('./pages/BlogPostAIAutomation2025'));

const CaseStudyHealthcareAI = React.lazy(() => import('./pages/CaseStudyHealthcareAI'));

const ResourceImplementationChecklist = React.lazy(() => import('./pages/ResourceImplementationChecklist'));
const ResourceROICalculator = React.lazy(() => import('./pages/ResourceROICalculator'));

const ContentShowcaseHub = React.lazy(() => import('./pages/ContentShowcaseHub'));

// const ComprehensiveServicesShowcase2025Page = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2025'));

// const InnovativeServicesShowcase2025 = React.lazy(() => import('./pages/InnovativeServicesShowcase2025'));

// const DigitalTwin = React.lazy(() => import('./pages/services/DigitalTwin'));
// const DataAnalytics = React.lazy(() => import('./pages/services/DataAnalytics'));

// const QuantumComputing = React.lazy(() => import('./pages/services/quantum-computing'));
// const AICybersecurity = React.lazy(() => import('./pages/services/ai-cybersecurity'));
// const IoTEdgeComputing = React.lazy(() => import('./pages/services/iot-edge-computing'));
// const AIContentCreation = React.lazy(() => import('./pages/services/ai-content-creation'));
// const AIHRPlatform = React.lazy(() => import('./pages/services/ai-hr-platform'));
// const SustainableTechnology = React.lazy(() => import('./pages/services/sustainable-technology'));
// const AIPredictiveMaintenance = React.lazy(() => import('./pages/services/ai-predictive-maintenance'));
// const QuantumMachineLearning = React.lazy(() => import('./pages/services/quantum-machine-learning'));

// const API = React.lazy(() => import('./pages/API'));
// const DeveloperPortal = React.lazy(() => import('./pages/DeveloperPortal'));

    <SEO 


// Enhanced loading component with better UX

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-futuristic">
        <RevolutionaryContentBanner />
        <NewContentPromotionBanner />
        <NewContentPromotionBanner2025 />
        <EnhancedContentPromotionBanner />
        <RevolutionaryContentPromotionBanner />
        <FutureTechnologyShowcaseBanner />
        <AppHeader />
        <main id="main-content" className="flex-1">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home2026" element={<Home />} />
              <Route path="/about" element={<Home />} />
              <Route path="/contact" element={<Home />} />
              <Route path="/blog" element={<Home />} />
              <Route path="/blog/:slug" element={<Home />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/help" element={<HelpCenter />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/talent" element={<Talent />} />
              <Route path="/equipment" element={<Equipment />} />
              <Route path="/request-quote" element={<RequestQuote />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/services" element={<Services />} />
              <Route path="/ai-services" element={<AIServices />} />
              <Route path="/it-services" element={<ITServices />} />
              <Route path="/comprehensive-services" element={<ComprehensiveServices />} />
              <Route path="/mobile-launch" element={<MobileLaunch />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/match" element={<Match />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/developers" element={<Developers />} />
              <Route path="/white-papers" element={<WhitePapers />} />
              <Route path="/webinars" element={<Webinars />} />
              <Route path="/accessibility" element={<Accessibility />} />
              <Route path="/content-showcase-2025" element={<ContentShowcase2025 />} />
              <Route path="/content-showcase" element={<ContentShowcase2025 />} />
              
              
              {/* <Route path="/services/cloud-devops" element={<CloudDevOps />} /> */}
              {/* <Route path="/services/it-infrastructure" element={<ITInfrastructure />} /> */}
              {/* <Route path="/services/ai-sales-copilot" element={<AISalesCopilot />} /> */}
              {/* <Route path="/services/cloud-finops-optimizer" element={<CloudFinOpsOptimizer />} /> */}
              {/* <Route path="/services/ai-compliance-assistant" element={<AIComplianceAssistant />} /> */}
              {/* <Route path="/services/ai-auto-email-responder" element={<AIAutoEmailResponder />} /> */}
              {/* <Route path="/services/mobile-feedback-surveys" element={<CustomerFeedbackSurveys />} /> */}
              {/* <Route path="/services/ai-compliance-copilot" element={<AIComplianceCopilot />} /> */}
              {/* <Route path="/services/llm-content-studio" element={<LLMContentStudio />} /> */}
              {/* <Route path="/services/finops-advisor" element={<FinOpsAdvisor />} /> */}
              {/* <Route path="/services/returns-management" element={<ReturnsManagement />} /> */}
              {/* <Route path="/services/email-sequencer" element={<EmailSequencer />} /> */}
              {/* <Route path="/services/podcast-transcription" element={<PodcastTranscription />} /> */}
              {/* <Route path="/services/micro-crm" element={<MicroCRM />} /> */}
              {/* <Route path="/services/website-analytics" element={<WebsiteAnalytics />} /> */}
              {/* <Route path="/services/it-helpdesk" element={<ITHelpdesk />} /> */}
              {/* <Route path="/services/affiliate-tracking" element={<AffiliateTracking />} /> */}
              {/* <Route path="/services/mobile-survey" element={<MobileSurvey />} /> */}
              {/* <Route path="/services/ai-seo" element={<AIPoweredSEO />} /> */}
              {/* <Route path="/services/interview-assessment" element={<InterviewAssessmentAI />} /> */}
              {/* <Route path="/services/helpdesk" element={<HelpdeskPlatform />} /> */}
              {/* <Route path="/services/dsr-portal" element={<DSRPortal />} /> */}
              {/* <Route path="/services/security-headers-csp" element={<SecurityHeadersCSP />} /> */}
              {/* <Route path="/services/ai-project-management" element={<AIProjectManagement />} /> */}
              {/* <Route path="/services/ai-customer-support-automation" element={<AICustomerSupportAutomation />} /> */}
              {/* <Route path="/services/ai-financial-analytics" element={<AIFinancialAnalytics />} /> */}
              {/* <Route path="/services/ai-marketing-automation" element={<AIMarketingAutomation />} /> */}
              <Route path="/new-services-showcase-2025" element={<NewServicesShowcase2025 />} />
              
              <Route path="/services/ai-autonomous-research-assistant" element={<AIAutonomousResearchAssistant />} />
              <Route path="/services/ai-supply-chain-optimization" element={<AISupplyChainOptimization />} />
              <Route path="/services/ai-quantum-hybrid-platform" element={<AIQuantumHybridPlatform />} />
              <Route path="/services/ai-2026-automation-platform" element={<AI2026AutomationPlatform />} />
              {/* <Route path="/services/ai-content-marketing-suite" element={<AIContentMarketingSuite />} /> */}
              {/* <Route path="/services/ai-cybersecurity-platform" element={<AICybersecurityPlatform />} /> */}
              {/* <Route path="/services/ai-healthcare-platform" element={<AIHealthcarePlatform />} /> */}
              
              {/* <Route path="/services/ai-legal-document-automation" element={<AILegalDocumentAutomation />} /> */}
              {/* <Route path="/services/ai-healthcare-analytics" element={<AIHealthcareAnalytics />} /> */}
              {/* <Route path="/services/ai-financial-trading" element={<AIFinancialTrading />} /> */}
              {/* <Route path="/services/ai-content-creation-suite" element={<AIContentCreationSuite />} /> */}
              
              {/* <Route path="/ultimate-services-2025" element={<UltimateServicesShowcase2025 />} /> */}
              {/* <Route path="/ultimate-services-showcase-2025" element={<UltimateServicesShowcase2025 />} /> */}
              {/* <Route path="/innovative-services-2025" element={<InnovativeServicesShowcase2025 />} /> */}
              {/* <Route path="/innovative-services-showcase-2025" element={<InnovativeServicesShowcase2025 />} /> */}
              {/* <Route path="/comprehensive-services-showcase-2025" element={<ComprehensiveServicesShowcase2025Page />} /> */}
              {/* <Route path="/services-showcase-2025" element={<ComprehensiveServicesShowcase2025Page />} /> */}
              
              {/* <Route path="/pricing-2028" element={<ComprehensivePricing2028 />} /> */}
              {/* <Route path="/comprehensive-pricing-2028" element={<ComprehensivePricing2028 />} /> */}
              {/* <Route path="/innovative-services-showcase-2025" element={<InnovativeServicesShowcase2025 />} /> */}
              {/* <Route path="/comprehensive-services-landing-2025" element={<ComprehensiveServicesLanding2025 />} /> */}
              {/* <Route path="/comprehensive-services-2025" element={<ComprehensiveServicesLanding2025 />} /> */}
              
              
              {/* <Route path="/comprehensive-pricing-2028" element={<ComprehensivePricing2028 />} /> */}
              {/* <Route path="/pricing-2028" element={<ComprehensivePricing2028 />} /> */}
              
              {/* <Route path="/services/digital-twin" element={<DigitalTwin />} /> */}
              {/* <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} /> */}
              {/* <Route path="/services/data-analytics" element={<DataAnalytics />} /> */}
              {/* <Route path="/services/digital-transformation" element={<DigitalTransformation />} /> */}
              
              {/* <Route path="/services/quantum-computing" element={<QuantumComputing />} /> */}
              {/* <Route path="/services/ai-cybersecurity" element={<AICybersecurity />} /> */}
              {/* <Route path="/services/iot-edge-computing" element={<IoTEdgeComputing />} /> */}
              {/* <Route path="/services/ai-content-creation" element={<AIContentCreation />} /> */}
              {/* <Route path="/services/ai-hr-platform" element={<AIHRPlatform />} /> */}
              {/* <Route path="/services/sustainable-technology" element={<SustainableTechnology />} /> */}
              {/* <Route path="/services/ai-predictive-maintenance" element={<AIPredictiveMaintenance />} /> */}
              {/* <Route path="/services/quantum-machine-learning" element={<QuantumMachineLearning />} /> */}
              
              {/* <Route path="/api" element={<API />} /> */}
              {/* <Route path="/developers" element={<DeveloperPortal />} /> */}
              
              <Route path="/ai-revolution-2025" element={<AIRevolution2025 />} />
              <Route path="/quantum-computing-breakthrough" element={<QuantumComputingBreakthrough />} />
              <Route path="/autonomous-business-platform" element={<AutonomousBusinessPlatform />} />
              <Route path="/autonomous-business-platform-2026" element={<AutonomousBusinessPlatform2026 />} />
              <Route path="/innovative-content-showcase-2026" element={<InnovativeContentShowcase2026Page />} />
              <Route path="/interactive-content-discovery-2026" element={<InteractiveContentDiscovery2026Page />} />
              
              <Route path="/blog/quantum-ai-breakthrough-2025" element={<BlogPostQuantumAI />} />
              <Route path="/blog/ai-automation-enterprise-guide-2025" element={<BlogPostAutomationGuide />} />
              <Route path="/blog/ai-2025-next-generation-business-automation" element={<BlogPostAIAutomation2025 />} />
              <Route path="/blog/ai-2026-next-generation-business-automation" element={<BlogPostAIAutomation2025 />} />
              <Route path="/blog/quantum-computing-business-applications-2025" element={<BlogPostAIAutomation2025 />} />
              <Route path="/blog/ai-2026-neural-computing-revolution" element={<InteractiveContentDiscovery2026Page />} />
              <Route path="/blog/quantum-ai-autonomous-systems-2026" element={<InteractiveContentDiscovery2026Page />} />
              <Route path="/blog/ai-2026-enterprise-autonomous-operations" element={<BlogPostAIAutomation2025 />} />
              <Route path="/blog/quantum-ai-hybrid-systems-2026" element={<BlogPostAIAutomation2025 />} />
              
              <Route path="/case-studies/healthcare-ai-transformation-success" element={<CaseStudyHealthcareAI />} />
              <Route path="/case-studies/ai-2026-global-automation-transformation" element={<CaseStudyHealthcareAI />} />
              <Route path="/case-studies/enterprise-quantum-ai-transformation-2026" element={<InteractiveContentDiscovery2026Page />} />
              <Route path="/case-studies/global-manufacturing-quantum-ai-transformation" element={<CaseStudyHealthcareAI />} />
              
              <Route path="/resources/ai-implementation-checklist-2025" element={<ResourceImplementationChecklist />} />
              <Route path="/resources/ai-roi-calculator-guide-2025" element={<ResourceROICalculator />} />
              <Route path="/resources/ai-2026-automation-implementation-roadmap" element={<ResourceROICalculator />} />
              <Route path="/resources/quantum-ai-implementation-master-guide-2026" element={<InteractiveContentDiscovery2026Page />} />
              <Route path="/resources/quantum-ai-implementation-roadmap-2026" element={<ResourceImplementationChecklist />} />
              
              <Route path="/content-showcase" element={<ContentShowcaseHub />} />
              
              
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
          </Suspense>
        <Footer />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/partners-page" element={<PartnersPage />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/talent" element={<Talent />} />
              <Route path="/equipment" element={<Equipment />} />
              <Route path="/green-it" element={<GreenIT />} />
              <Route path="/it-onsite-services" element={<ITOnsiteServices />} />
              <Route path="/help-center" element={<HelpCenter />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/security" element={<Security />} />
              <Route path="/status" element={<Status />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/accessibility" element={<Accessibility />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/enhanced-services" element={<EnhancedServices />} />
              
              <Route path="/services/cybersecurity" element={<CybersecurityServices />} />
              <Route path="/services/cloud" element={<CloudServices />} />
              <Route path="/services/blockchain" element={<BlockchainServices />} />
              <Route path="/services/iot" element={<IoTServices />} />
              <Route path="/services/quantum" element={<QuantumServices />} />
              <Route path="/services/ai" element={<AIServices />} />
              <Route path="/services/digital-marketing" element={<DigitalMarketingServices />} />
              <Route path="/services/financial" element={<FinancialSolutions />} />
              <Route path="/services/manufacturing" element={<ManufacturingSolutions />} />
              <Route path="/solutions/enterprise" element={<EnterpriseSolutions />} />
              <Route path="/solutions/healthcare" element={<HealthcareSolutions />} />
              <Route path="/solutions/government" element={<GovernmentSolutions />} />
              <Route path="/solutions/retail" element={<RetailSolutions />} />
              
              <Route path="/ai-services" element={<AIServicesPage />} />
              <Route path="/micro-saas-services" element={<MicroSAASServicesPage />} />
              <Route path="/it-services" element={<ITServicesPage />} />
              <Route path="/enhanced-services-showcase-2025" element={<EnhancedServicesShowcase2025 />} />
              <Route path="/comprehensive-pricing-guide-2025" element={<ComprehensivePricingGuide2025 />} />
              <Route path="/comprehensive-services-showcase-2025" element={<ComprehensiveServicesShowcase2025 />} />
              
              <Route path="/ultimate-innovative-services-2026" element={<UltimateInnovativeServices2026 />} />
              <Route path="/comprehensive-services-overview-2026" element={<ComprehensiveServicesOverview2026 />} />
              
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          </Suspense>
        
        <FuturisticFooter />
        
        <ChatAssistant />
        <PerformanceOptimizer />
        <PerformanceMonitor enabled={true} showMetrics={true} />
      </div>
    </ErrorBoundary>
  );
}

export default App;
