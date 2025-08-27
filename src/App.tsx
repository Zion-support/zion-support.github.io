import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';
import { LoadingSpinner } from './components/ui/loading-spinner';
import { SEO } from './components/SEO';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { ErrorBoundary } from './components/ErrorBoundary';
import EnhancedAccessibilityEnhancer from './components/EnhancedAccessibilityEnhancer';
import { MobileExperienceEnhancer } from './components/MobileExperienceEnhancer';
import PerformanceMonitor from './components/PerformanceMonitor';
import { FloatingActionButton } from './components/FloatingActionButton';

// Enhanced lazy loading with preloading hints
const createLazyComponent = (importFn: () => Promise<any>, fallback?: React.ReactNode) => {
  const LazyComponent = lazy(importFn);
  return (props: any) => (
    <Suspense fallback={fallback || <LoadingSpinner />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

// Core pages with optimized imports
const Home = createLazyComponent(() => import('./pages/Home'));
const About = createLazyComponent(() => import('./pages/About'));
const Contact = createLazyComponent(() => import('./pages/Contact'));
const Services = createLazyComponent(() => import('./pages/Services'));
const Blog = createLazyComponent(() => import('./pages/Blog'));
const Careers = createLazyComponent(() => import('./pages/Careers'));
const Pricing = createLazyComponent(() => import('./pages/Pricing'));
const Team = createLazyComponent(() => import('./pages/Team'));

// Service pages
const AIServices = createLazyComponent(() => import('./pages/AIServices'));
const ITServices = createLazyComponent(() => import('./pages/ITServices'));
const MicroSaaS = createLazyComponent(() => import('./pages/MicroSaaS'));

// Sitemap-aligned pages
const AiSolutions = React.lazy(() => import('./pages/AiSolutions'));
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

// Additional new innovative AI services
const AILegalDocumentAutomation = React.lazy(() => import('./pages/services/AILegalDocumentAutomation'));
const AIHealthcareAnalytics = React.lazy(() => import('./pages/services/AIHealthcareAnalytics'));
const AIFinancialTrading = React.lazy(() => import('./pages/services/AIFinancialTrading'));
const AIContentCreationSuite = React.lazy(() => import('./pages/services/AIContentCreationSuite'));

// Comprehensive services showcase
const ComprehensiveServicesShowcase2025Page = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2025'));

// Innovative services showcase
const InnovativeServicesShowcase2025 = React.lazy(() => import('./pages/InnovativeServicesShowcase2025'));

// New 2028 comprehensive services
const ComprehensiveServicesLanding2028 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2028'));

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

// Additional missing components
const UltimateServicesShowcase2025 = React.lazy(() => import('./pages/UltimateServicesShowcase2025'));
const UltimateServicesShowcase2026 = React.lazy(() => import('./pages/UltimateServicesShowcase2026'));
const ComprehensivePricing2026 = React.lazy(() => import('./pages/ComprehensivePricing2026'));
const ComprehensivePricing2028 = React.lazy(() => import('./pages/ComprehensivePricing2028'));
const API = React.lazy(() => import('./pages/API'));
const DeveloperPortal = React.lazy(() => import('./pages/DeveloperPortal'));
const ApiDemo = React.lazy(() => import('./components/ApiDemo'));

// Additional pages
const Dashboard = createLazyComponent(() => import('./pages/Dashboard'));
const Login = createLazyComponent(() => import('./pages/Login'));
const FAQ = createLazyComponent(() => import('./pages/FAQ'));
const SearchPage = createLazyComponent(() => import('./pages/SearchPage'));
const Partners = createLazyComponent(() => import('./pages/Partners'));
const News = createLazyComponent(() => import('./pages/News'));
const CaseStudies = createLazyComponent(() => import('./pages/CaseStudies'));
const HelpCenter = createLazyComponent(() => import('./pages/HelpCenter'));

// Enhanced loading component
const EnhancedLoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-cyan-400/20 rounded-full"></div>
      <div className="absolute top-0 left-0 w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
      <div className="mt-4 text-center">
        <div className="text-cyan-400 text-sm animate-pulse">Loading Zion Tech...</div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        <SEO 
          title="Zion Tech Group - Leading AI & Technology Solutions"
          description="Transform your business with Zion Tech Group's cutting-edge AI solutions, quantum computing, and innovative micro SAAS services. Leading the future of technology."
          keywords="AI solutions, quantum computing, micro SAAS, technology consulting, digital transformation"
          ogImage="/og-image.jpg"
          canonicalUrl="https://ziontechgroup.com"
        />
        
        <AppHeader />
        
        <main className="relative">
          <Suspense fallback={<EnhancedLoadingSpinner />}>
            <Routes>
              {/* Core Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/team" element={<Team />} />
              
              {/* Service Routes */}
              <Route path="/ai-services" element={<AIServices />} />
              <Route path="/it-services" element={<ITServices />} />
              <Route path="/micro-saas" element={<MicroSaaS />} />
              
              {/* Additional Routes */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/news" element={<News />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/help" element={<HelpCenter />} />
              
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
              
              {/* New innovative AI services */}
              <Route path="/services/ai-autonomous-research-assistant" element={<AIAutonomousResearchAssistant />} />
              <Route path="/services/ai-supply-chain-optimization" element={<AISupplyChainOptimization />} />
              <Route path="/services/ai-content-marketing-suite" element={<AIContentMarketingSuite />} />
              <Route path="/services/ai-quantum-hybrid-platform" element={<AIQuantumHybridPlatform />} />
              <Route path="/services/ai-cybersecurity-platform" element={<AICybersecurityPlatform />} />
              <Route path="/services/ai-healthcare-platform" element={<AIHealthcarePlatform />} />
              
              {/* Additional new innovative AI services */}
              <Route path="/services/ai-legal-document-automation" element={<AILegalDocumentAutomation />} />
              <Route path="/services/ai-healthcare-analytics" element={<AIHealthcareAnalytics />} />
              <Route path="/services/ai-financial-trading" element={<AIFinancialTrading />} />
              <Route path="/services/ai-content-creation-suite" element={<AIContentCreationSuite />} />
              
              {/* New 2025 service routes */}
              <Route path="/ultimate-services-2025" element={<UltimateServicesShowcase2025 />} />
              <Route path="/ultimate-services-showcase-2025" element={<UltimateServicesShowcase2025 />} />
              <Route path="/innovative-services-2025" element={<InnovativeServicesShowcase2025 />} />
              <Route path="/innovative-services-showcase-2025" element={<InnovativeServicesShowcase2025 />} />
              <Route path="/comprehensive-services-showcase-2025" element={<ComprehensiveServicesShowcase2025Page />} />
              <Route path="/services-showcase-2025" element={<ComprehensiveServicesShowcase2025Page />} />
              
              {/* New 2026 service routes */}
              <Route path="/ultimate-services-showcase-2026" element={<UltimateServicesShowcase2026 />} />
              <Route path="/ultimate-services-2026" element={<UltimateServicesShowcase2026 />} />
              <Route path="/comprehensive-pricing-2026" element={<ComprehensivePricing2026 />} />
              <Route path="/pricing-2026" element={<ComprehensivePricing2026 />} />
              
              {/* 2028 Pricing */}
              <Route path="/comprehensive-pricing-2028" element={<ComprehensivePricing2028 />} />
              <Route path="/pricing-2028" element={<ComprehensivePricing2028 />} />
              
              {/* 2028 Comprehensive Services */}
              <Route path="/comprehensive-services-2028" element={<ComprehensiveServicesLanding2028 />} />
              <Route path="/services-2028" element={<ComprehensiveServicesLanding2028 />} />
              
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
              
              {/* Hybrid App Demo */}
              <Route path="/hybrid-demo" element={<ApiDemo />} />
              
              {/* Catch-all */}
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>
        
        <Footer />
        <ChatAssistant />
        <PerformanceOptimizer />
        <EnhancedAccessibilityEnhancer enabled={true} showControls={true} />
        <MobileExperienceEnhancer enabled={true} />
        <PerformanceMonitor enabled={true} showMetrics={true} />
        <FloatingActionButton />
      </div>
    </ErrorBoundary>
  );
}

export default App;