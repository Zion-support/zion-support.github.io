import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';
import { LoadingSpinner } from './components/ui/loading-spinner';
import { SEO } from './components/SEO';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { PerformanceMonitor } from './components/PerformanceMonitor';

// Lazy load pages - only import existing ones
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

// New 2025 service imports
const UltimateServicesShowcase2025 = React.lazy(() => import('./pages/UltimateServicesShowcase2025'));
const ComprehensivePricing2028 = React.lazy(() => import('./pages/ComprehensivePricing2028'));

// Sitemap-aligned pages

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
// const NewServicesShowcase2025 = React.lazy(() => import('./pages/NewServicesShowcase2025'));

// Comprehensive improvements components - commented out as they don't exist yet
// const AdvancedAIServicesHub = React.lazy(() => import('./components/AdvancedAIServicesHub'));
// const PerformanceAnalytics = React.lazy(() => import('./components/PerformanceAnalytics'));
// const EnhancedSEOManager = React.lazy(() => import('./components/EnhancedSEOManager'));
// const ComprehensiveImprovements2025 = React.lazy(() => import('./pages/ComprehensiveImprovements2025'));

// New innovative AI services - commented out as they don't exist yet
// const AIAutonomousResearchAssistant = React.lazy(() => import('./pages/services/AIAutonomousResearchAssistant'));
// const AISupplyChainOptimization = React.lazy(() => import('./pages/services/AISupplyChainOptimization'));
// const AIContentMarketingSuite = React.lazy(() => import('./pages/services/AIContentMarketingSuite'));
// const AIQuantumHybridPlatform = React.lazy(() => import('./pages/services/AIQuantumHybridPlatform'));
// const AICybersecurityPlatform = React.lazy(() => import('./pages/services/AICybersecurityPlatform'));
// const AIHealthcarePlatform = React.lazy(() => import('./pages/services/AIHealthcarePlatform'));
// const AIBusinessIntelligence = React.lazy(() => import('./pages/services/AIBusinessIntelligence'));
// Service pages - commented out as they don't exist yet
// const DigitalTransformation = React.lazy(() => import('./pages/services/DigitalTransformation'));

// Additional new innovative AI services - commented out as they don't exist yet
// const AILegalDocumentAutomation = React.lazy(() => import('./pages/services/AILegalDocumentAutomation'));
// const AIHealthcareAnalytics = React.lazy(() => import('./pages/services/AIHealthcareAnalytics'));
// const AIFinancialTrading = React.lazy(() => import('./pages/services/AIFinancialTrading'));
// const AIContentCreationSuite = React.lazy(() => import('./pages/services/AIContentCreationSuite'));

// New revolutionary content pages
const AIRevolution2025 = React.lazy(() => import('./pages/AIRevolution2025'));
const QuantumComputingBreakthrough = React.lazy(() => import('./pages/QuantumComputingBreakthrough'));
const AutonomousBusinessPlatform = React.lazy(() => import('./pages/AutonomousBusinessPlatform'));

// New blog posts
const BlogPostQuantumAI = React.lazy(() => import('./pages/BlogPostQuantumAI'));
const BlogPostAutomationGuide = React.lazy(() => import('./pages/BlogPostAutomationGuide'));

// New case studies
const CaseStudyHealthcareAI = React.lazy(() => import('./pages/CaseStudyHealthcareAI'));

// New resources
const ResourceImplementationChecklist = React.lazy(() => import('./pages/ResourceImplementationChecklist'));
const ResourceROICalculator = React.lazy(() => import('./pages/ResourceROICalculator'));

// Content showcase hub
const ContentShowcaseHub = React.lazy(() => import('./pages/ContentShowcaseHub'));

// Comprehensive services showcase - commented out as they don't exist yet
// const ComprehensiveServicesShowcase2025Page = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2025'));

// Innovative services showcase - commented out as they don't exist yet
// const InnovativeServicesShowcase2025 = React.lazy(() => import('./pages/InnovativeServicesShowcase2025'));

// Additional service pages - commented out as they don't exist yet
// const DigitalTwin = React.lazy(() => import('./pages/services/DigitalTwin'));
// const DataAnalytics = React.lazy(() => import('./pages/services/DataAnalytics'));

// 2026 Services pages - commented out as they don't exist yet
// const QuantumComputing = React.lazy(() => import('./pages/services/quantum-computing'));
// const AICybersecurity = React.lazy(() => import('./pages/services/ai-cybersecurity'));
// const IoTEdgeComputing = React.lazy(() => import('./pages/services/iot-edge-computing'));
// const AIContentCreation = React.lazy(() => import('./pages/services/ai-content-creation'));
// const AIHRPlatform = React.lazy(() => import('./pages/services/ai-hr-platform'));
// const SustainableTechnology = React.lazy(() => import('./pages/services/sustainable-technology'));
// const AIPredictiveMaintenance = React.lazy(() => import('./pages/services/ai-predictive-maintenance'));
// const QuantumMachineLearning = React.lazy(() => import('./pages/services/quantum-machine-learning'));

// Additional pages - commented out as they don't exist yet
// const API = React.lazy(() => import('./pages/API'));
// const DeveloperPortal = React.lazy(() => import('./pages/DeveloperPortal'));

// Accessibility page
const Accessibility = () => (
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



function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-futuristic">
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
              
              {/* New sitemap routes */}
              
              {/* Service Routes - commented out as service pages don't exist yet */}
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
              {/* Additional new service routes */}
              {/* <Route path="/services/ai-seo" element={<AIPoweredSEO />} /> */}
              {/* <Route path="/services/interview-assessment" element={<InterviewAssessmentAI />} /> */}
              {/* <Route path="/services/helpdesk" element={<HelpdeskPlatform />} /> */}
              {/* <Route path="/services/dsr-portal" element={<DSRPortal />} /> */}
              {/* <Route path="/services/security-headers-csp" element={<SecurityHeadersCSP />} /> */}
              {/* New AI-powered micro SAAS service routes */}
              {/* <Route path="/services/ai-project-management" element={<AIProjectManagement />} /> */}
              {/* <Route path="/services/ai-customer-support-automation" element={<AICustomerSupportAutomation />} /> */}
              {/* <Route path="/services/ai-financial-analytics" element={<AIFinancialAnalytics />} /> */}
              {/* <Route path="/services/ai-marketing-automation" element={<AIMarketingAutomation />} /> */}
              {/* <Route path="/new-services-showcase-2025" element={<NewServicesShowcase2025 />} /> */}
              
              {/* New innovative AI services */}
              {/* <Route path="/services/ai-autonomous-research-assistant" element={<AIAutonomousResearchAssistant />} /> */}
              {/* <Route path="/services/ai-supply-chain-optimization" element={<AISupplyChainOptimization />} /> */}
              {/* <Route path="/services/ai-content-marketing-suite" element={<AIContentMarketingSuite />} /> */}
              {/* <Route path="/services/ai-quantum-hybrid-platform" element={<AIQuantumHybridPlatform />} /> */}
              {/* <Route path="/services/ai-cybersecurity-platform" element={<AICybersecurityPlatform />} /> */}
              {/* <Route path="/services/ai-healthcare-platform" element={<AIHealthcarePlatform />} /> */}
              
              {/* Additional new innovative AI services - commented out as they don't exist yet */}
              {/* <Route path="/services/ai-legal-document-automation" element={<AILegalDocumentAutomation />} /> */}
              {/* <Route path="/services/ai-healthcare-analytics" element={<AIHealthcareAnalytics />} /> */}
              {/* <Route path="/services/ai-financial-trading" element={<AIFinancialTrading />} /> */}
              {/* <Route path="/services/ai-content-creation-suite" element={<AIContentCreationSuite />} /> */}
              
              {/* New 2025 service routes - commented out as they don't exist yet */}
              {/* <Route path="/ultimate-services-2025" element={<UltimateServicesShowcase2025 />} /> */}
              {/* <Route path="/ultimate-services-showcase-2025" element={<UltimateServicesShowcase2025 />} /> */}
              {/* <Route path="/innovative-services-2025" element={<InnovativeServicesShowcase2025 />} /> */}
              {/* <Route path="/innovative-services-showcase-2025" element={<InnovativeServicesShowcase2025 />} /> */}
              {/* <Route path="/comprehensive-services-showcase-2025" element={<ComprehensiveServicesShowcase2025Page />} /> */}
              {/* <Route path="/services-showcase-2025" element={<ComprehensiveServicesShowcase2025Page />} /> */}
              
              {/* Enhanced 2028 routes - commented out as they don't exist yet */}
              {/* <Route path="/pricing-2028" element={<ComprehensivePricing2028 />} /> */}
              {/* <Route path="/comprehensive-pricing-2028" element={<ComprehensivePricing2028 />} /> */}
              {/* <Route path="/innovative-services-showcase-2025" element={<InnovativeServicesShowcase2025 />} /> */}
              {/* <Route path="/comprehensive-services-landing-2025" element={<ComprehensiveServicesLanding2025 />} /> */}
              {/* <Route path="/comprehensive-services-2025" element={<ComprehensiveServicesLanding2025 />} /> */}
              
              {/* New 2026 service routes - commented out as they don't exist yet */}
              
              {/* 2028 Pricing - commented out as they don't exist yet */}
              {/* <Route path="/comprehensive-pricing-2028" element={<ComprehensivePricing2028 />} /> */}
              {/* <Route path="/pricing-2028" element={<ComprehensivePricing2028 />} /> */}
              
              {/* Additional service routes - commented out as they don't exist yet */}
              {/* <Route path="/services/digital-twin" element={<DigitalTwin />} /> */}
              {/* <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} /> */}
              {/* <Route path="/services/data-analytics" element={<DataAnalytics />} /> */}
              {/* <Route path="/services/digital-transformation" element={<DigitalTransformation />} /> */}
              
              {/* 2026 Services routes - commented out as they don't exist yet */}
              {/* <Route path="/services/quantum-computing" element={<QuantumComputing />} /> */}
              {/* <Route path="/services/ai-cybersecurity" element={<AICybersecurity />} /> */}
              {/* <Route path="/services/iot-edge-computing" element={<IoTEdgeComputing />} /> */}
              {/* <Route path="/services/ai-content-creation" element={<AIContentCreation />} /> */}
              {/* <Route path="/services/ai-hr-platform" element={<AIHRPlatform />} /> */}
              {/* <Route path="/services/sustainable-technology" element={<SustainableTechnology />} /> */}
              {/* <Route path="/services/ai-predictive-maintenance" element={<AIPredictiveMaintenance />} /> */}
              {/* <Route path="/services/quantum-machine-learning" element={<QuantumMachineLearning />} /> */}
              
              {/* Additional routes - commented out as they don't exist yet */}
              {/* <Route path="/api" element={<API />} /> */}
              {/* <Route path="/developers" element={<DeveloperPortal />} /> */}
              
              {/* New revolutionary content routes */}
              <Route path="/ai-revolution-2025" element={<AIRevolution2025 />} />
              <Route path="/quantum-computing-breakthrough" element={<QuantumComputingBreakthrough />} />
              <Route path="/autonomous-business-platform" element={<AutonomousBusinessPlatform />} />
              
              {/* New blog post routes */}
              <Route path="/blog/quantum-ai-breakthrough-2025" element={<BlogPostQuantumAI />} />
              <Route path="/blog/ai-automation-enterprise-guide-2025" element={<BlogPostAutomationGuide />} />
              
              {/* New case study routes */}
              <Route path="/case-studies/healthcare-ai-transformation-success" element={<CaseStudyHealthcareAI />} />
              
              {/* New resource routes */}
              <Route path="/resources/ai-implementation-checklist-2025" element={<ResourceImplementationChecklist />} />
              <Route path="/resources/ai-roi-calculator-guide-2025" element={<ResourceROICalculator />} />
              
              {/* Content showcase hub */}
              <Route path="/content-showcase" element={<ContentShowcaseHub />} />
              
              {/* Hybrid App Demo */}
              
              {/* Catch-all */}
              <Route path="*" element={<Home />} />
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