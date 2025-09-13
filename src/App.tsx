import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';
import { NewContentPromotionBanner } from './components/NewContentPromotionBanner';
import NewContentPromotionBanner2025 from './components/NewContentPromotionBanner2025';
import { RevolutionaryContentBanner } from './components/RevolutionaryContentBanner';
import InnovativeContentShowcase2026 from './components/InnovativeContentShowcase2026';
import InteractiveContentDiscovery2026 from './components/InteractiveContentDiscovery2026';
import EnhancedContentPromotionBanner from './components/EnhancedContentPromotionBanner';
import AI2035OmniversalConsciousnessBanner from './components/AI2035OmniversalConsciousnessBanner';
import AI2035OmniversalConsciousnessShowcase from './components/AI2035OmniversalConsciousnessShowcase';
import NeuralInterfaceRevolutionBanner from './components/NeuralInterfaceRevolutionBanner';
import SpaceTechnologySolutionsBanner from './components/SpaceTechnologySolutionsBanner';
import RevolutionaryContentPromotionBanner from './components/RevolutionaryContentPromotionBanner';
import FutureTechnologyShowcaseBanner from './components/FutureTechnologyShowcaseBanner';
import { LoadingSpinner } from './components/ui/loading-spinner';
import { SEO } from './components/SEO';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { PerformanceMonitor } from './components/PerformanceMonitor';

// Lazy load pages
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
const Cookies = React.lazy(() => import('./pages/Cookies'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const Talent = React.lazy(() => import('./pages/TalentDirectory'));
const Equipment = React.lazy(() => import('./pages/EquipmentPage'));
const GreenIT = React.lazy(() => import('./pages/GreenIT'));
const Marketplace = React.lazy(() => import('./pages/Marketplace'));
const ITOnsiteServices = React.lazy(() => import('./pages/ITOnsiteServicesPage'));
// const Security = React.lazy(() => import('./pages/Security'));
// const Status = React.lazy(() => import('./pages/Status'));
// const Accessibility = React.lazy(() => import('./pages/Accessibility'));
// const Profile = React.lazy(() => import('./pages/Profile'));
// const Settings = React.lazy(() => import('./pages/Settings'));
const Signup = React.lazy(() => import('./pages/Signup'));
// const ForgotPassword = React.lazy(() => import('./pages/ForgotPassword'));
// const ResetPassword = React.lazy(() => import('./pages/ResetPassword'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
// const EnhancedServices = React.lazy(() => import('./pages/EnhancedServices'));

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

// Additional service pages
const AIServicesPage = React.lazy(() => import('./pages/AIServicesPage'));
const MicroSAASServicesPage = React.lazy(() => import('./pages/MicroSaasServicesPage'));
const ITServicesPage = React.lazy(() => import('./pages/ITServicesPage'));
// const EnhancedServicesShowcase2025 = React.lazy(() => import('./pages/EnhancedServicesShowcase2025.tsx'));
// const ComprehensivePricingGuide2025 = React.lazy(() => import('./pages/ComprehensivePricingGuide2025.tsx'));
// const ComprehensiveServicesShowcase2025 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2025.tsx'));
// const ComprehensiveServicesLanding2025 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2025'));

// Service pages
const NewServicesShowcase2025 = React.lazy(() => import('./components/NewServicesShowcase2025'));
const AIAutonomousResearchAssistant = React.lazy(() => import('./pages/services/AIAutonomousResearchAssistant'));
const AISupplyChainOptimization = React.lazy(() => import('./pages/services/AISupplyChainOptimization'));
const AIQuantumHybridPlatform = React.lazy(() => import('./pages/services/AIQuantumHybridPlatform'));
const AI2026AutomationPlatform = React.lazy(() => import('./pages/services/AI2026AutomationPlatform'));

// Additional pages
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

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-futuristic">
        <SEO />
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
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
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
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
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
              {/* <Route path="/accessibility" element={<Accessibility />} /> */}
              <Route path="/content-showcase-2025" element={<ContentShowcase2025 />} />
              <Route path="/content-showcase" element={<ContentShowcase2025 />} />
              <Route path="/new-services-showcase-2025" element={<NewServicesShowcase2025 />} />
              
              <Route path="/services/ai-autonomous-research-assistant" element={<AIAutonomousResearchAssistant />} />
              <Route path="/services/ai-supply-chain-optimization" element={<AISupplyChainOptimization />} />
              <Route path="/services/ai-quantum-hybrid-platform" element={<AIQuantumHybridPlatform />} />
              <Route path="/services/ai-2026-automation-platform" element={<AI2026AutomationPlatform />} />
              
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
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ChatAssistant />
        <PerformanceOptimizer />
        <PerformanceMonitor enabled={true} showMetrics={true} />
      </div>
    </ErrorBoundary>
  );
}

export default App;