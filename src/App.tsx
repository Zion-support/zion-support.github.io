import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';

// Layout Components
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';

// Enhanced Components
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import EnhancedAccessibilityEnhancer from './components/EnhancedAccessibilityEnhancer';
import { MobileExperienceEnhancer } from './components/MobileExperienceEnhancer';
import { EnhancedSEO } from './components/EnhancedSEO';
import { ServiceWorker } from './components/ServiceWorker';
import { FloatingActionButton } from './components/FloatingActionButton';
import { AdvancedAnalytics } from './components/AdvancedAnalytics';
import { SmartNotificationSystem } from './components/SmartNotificationSystem';
import { ChatAssistant } from './components/ChatAssistant';
import { ErrorBoundary } from './components/ErrorBoundary';
import LoadingSpinner from './components/ui/LoadingSpinner';

// Core pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/about'));
const Services = lazy(() => import('./pages/services'));
const Contact = lazy(() => import('./pages/contact'));
const Blog = lazy(() => import('./pages/Blog'));
const Careers = lazy(() => import('./pages/Careers'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Team = lazy(() => import('./pages/Team'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Login = lazy(() => import('./pages/Login'));
const FAQ = lazy(() => import('./pages/FAQ'));
const SearchPage = lazy(() => import('./pages/SearchPage'));
const Partners = lazy(() => import('./pages/Partners'));
const News = lazy(() => import('./pages/News'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const HelpCenter = lazy(() => import('./pages/HelpCenter'));

// Service category pages
const AIServices = lazy(() => import('./pages/AIServices'));
const ITServices = lazy(() => import('./pages/ITServices'));
const MicroSaaS = lazy(() => import('./pages/MicroSaaS'));

// 2029 Cutting-Edge Services
const ZionCuttingEdgeServices2029 = lazy(() => import('./pages/ZionCuttingEdgeServices2029'));

// 2026 AI Marketplace Services
const Zion2026AIMarketplaceShowcase = lazy(() => import('./pages/Zion2026AIMarketplaceShowcase'));

// Sitemap-aligned pages
const AiSolutions = lazy(() => import('./pages/AiSolutions'));
const SolutionsEnterprise = lazy(() => import('./pages/solutions/Enterprise'));
const SolutionsHealthcare = lazy(() => import('./pages/solutions/Healthcare'));

// Service pages
const CloudDevOps = lazy(() => import('./pages/services/CloudDevOps'));
const ITInfrastructure = lazy(() => import('./pages/services/ITInfrastructure'));
const AISalesCopilot = lazy(() => import('./pages/services/AISalesCopilot'));
const CloudFinOpsOptimizer = lazy(() => import('./pages/services/CloudFinOpsOptimizer'));
const AIComplianceAssistant = lazy(() => import('./pages/services/AIComplianceAssistant'));
const AIAutoEmailResponder = lazy(() => import('./pages/services/AIAutoEmailResponder'));
const CustomerFeedbackSurveys = lazy(() => import('./pages/services/CustomerFeedbackSurveys'));
const AIComplianceCopilot = lazy(() => import('./pages/services/AIComplianceCopilot'));
const LLMContentStudio = lazy(() => import('./pages/services/LLMContentStudio'));
const FinOpsAdvisor = lazy(() => import('./pages/services/FinOpsAdvisor'));
const ReturnsManagement = lazy(() => import('./pages/services/ReturnsManagement'));
const EmailSequencer = lazy(() => import('./pages/services/EmailSequencer'));
const PodcastTranscription = lazy(() => import('./pages/services/PodcastTranscription'));
const MicroCRM = lazy(() => import('./pages/services/MicroCRM'));

// New real service pages
const WebsiteAnalytics = lazy(() => import('./pages/services/WebsiteAnalytics'));
const ITHelpdesk = lazy(() => import('./pages/services/ITHelpdesk'));
const AffiliateTracking = lazy(() => import('./pages/services/AffiliateTracking'));
const MobileSurvey = lazy(() => import('./pages/services/MobileSurvey'));

// Additional innovative services
const AIAutonomousCodeReviewer = lazy(() => import('./pages/services/AIAutonomousCodeReviewer'));
const ZeroTrustNetworkAccess = lazy(() => import('./pages/services/ZeroTrustNetworkAccess'));
const AIPoweredSEO = lazy(() => import('./pages/services/AIPoweredSEO'));
const InterviewAssessmentAI = lazy(() => import('./pages/services/InterviewAssessmentAI'));
const HelpdeskPlatform = lazy(() => import('./pages/services/HelpdeskPlatform'));
const DSRPortal = lazy(() => import('./pages/services/DSRPortal'));
const SecurityHeadersCSP = lazy(() => import('./pages/services/SecurityHeadersCSP'));

// New AI-powered micro SAAS services
const AIProjectManagement = lazy(() => import('./pages/services/AIProjectManagement'));
const AICustomerSupportAutomation = lazy(() => import('./pages/services/AICustomerSupportAutomation'));
const AIFinancialAnalytics = lazy(() => import('./pages/services/AIFinancialAnalytics'));
const AIMarketingAutomation = lazy(() => import('./pages/services/AIMarketingAutomation'));
const NewServicesShowcase2025 = lazy(() => import('./pages/NewServicesShowcase2025'));

// Comprehensive improvements components
const AdvancedAIServicesHub = lazy(() => import('./components/AdvancedAIServicesHub'));
const PerformanceAnalytics = lazy(() => import('./components/PerformanceAnalytics'));
const EnhancedSEOManager = lazy(() => import('./components/EnhancedSEOManager'));
const ComprehensiveImprovements2025 = lazy(() => import('./pages/ComprehensiveImprovements2025'));

// New innovative AI services
const AIAutonomousResearchAssistant = lazy(() => import('./pages/services/AIAutonomousResearchAssistant'));
const AISupplyChainOptimization = lazy(() => import('./pages/services/AISupplyChainOptimization'));
const AIContentMarketingSuite = lazy(() => import('./pages/services/AIContentMarketingSuite'));
const AIQuantumHybridPlatform = lazy(() => import('./pages/services/AIQuantumHybridPlatform'));
const AICybersecurityPlatform = lazy(() => import('./pages/services/AICybersecurityPlatform'));
const AIHealthcarePlatform = lazy(() => import('./pages/services/AIHealthcarePlatform'));
const AIBusinessIntelligence = lazy(() => import('./pages/services/AIBusinessIntelligence'));
const DigitalTransformation = lazy(() => import('./pages/services/DigitalTransformation'));

// 2025 Innovative Services
const InnovativeServicesLanding2025 = lazy(() => import('./pages/InnovativeServicesLanding2025'));
const ComprehensivePricingGuide2025 = lazy(() => import('./pages/ComprehensivePricingGuide2025'));

// Additional missing imports
const AILegalDocumentAutomation = lazy(() => import('./pages/services/AILegalDocumentAutomation'));
const AIHealthcareAnalytics = lazy(() => import('./pages/services/AIHealthcareAnalytics'));
const AIFinancialTrading = lazy(() => import('./pages/services/AIFinancialTrading'));
const AIContentCreationSuite = lazy(() => import('./pages/services/AIContentCreationSuite'));

// Comprehensive services showcase
const ComprehensiveServicesShowcase2025Page = lazy(() => import('./pages/UltimateServicesShowcase2025'));

// Innovative services showcase
const InnovativeServicesShowcase2025 = lazy(() => import('./pages/InnovativeServicesShowcase2025'));

// New 2028 comprehensive services
const ComprehensiveServicesLanding2028 = lazy(() => import('./pages/ComprehensiveServicesLanding2028'));

// Additional service pages
const DigitalTwin = lazy(() => import('./pages/services/DigitalTwin'));
const DataAnalytics = lazy(() => import('./pages/services/DataAnalytics'));

// 2026 Services pages
const QuantumComputing = lazy(() => import('./pages/services/quantum-computing'));
const AICybersecurity = lazy(() => import('./pages/services/ai-cybersecurity'));
const IoTEdgeComputing = lazy(() => import('./pages/services/iot-edge-computing'));
const AIContentCreation = lazy(() => import('./pages/services/ai-content-creation'));
const AIHRPlatform = lazy(() => import('./pages/services/ai-hr-platform'));
const SustainableTechnology = lazy(() => import('./pages/services/sustainable-technology'));
const AIPredictiveMaintenance = lazy(() => import('./pages/services/ai-predictive-maintenance'));
const QuantumMachineLearning = lazy(() => import('./pages/services/quantum-machine-learning'));

// Comprehensive services imports
const ComprehensiveServicesShowcase2027Page = lazy(() => import('./pages/ComprehensiveServicesShowcase2027'));
const ComprehensiveServicesLanding2025 = lazy(() => import('./pages/ComprehensiveServicesLanding2025'));
const UltimateServicesShowcase2025 = lazy(() => import('./pages/UltimateServicesShowcase2025'));
const UltimateServicesShowcase2026 = lazy(() => import('./pages/UltimateServicesShowcase2026'));
const ComprehensivePricing2026 = lazy(() => import('./pages/ComprehensivePricing2026'));
const ComprehensivePricing2028 = lazy(() => import('./pages/ComprehensivePricing2028'));
const API = lazy(() => import('./pages/API'));
const DeveloperPortal = lazy(() => import('./pages/DeveloperPortal'));
const ApiDemo = lazy(() => import('./components/ApiDemo'));

// Additional pages
const Marketplace = lazy(() => import('./pages/Marketplace'));
const ITConsulting = lazy(() => import('./pages/ITConsulting'));
const SpaceTech = lazy(() => import('./pages/SpaceTech'));
const Sitemap = lazy(() => import('./pages/Sitemap'));

// 2029 Services Showcase
const ComprehensiveServicesShowcase2029 = lazy(() => import('./pages/ComprehensiveServicesShowcase2029'));

// Additional innovative AI services
const AIAutonomousSupplyChain = lazy(() => import('./pages/services/AIAutonomousSupplyChain'));
const AICybersecurityThreatIntelligence = lazy(() => import('./pages/services/AICybersecurityThreatIntelligence'));
const AIAutonomousThreatIntelligence = lazy(() => import('./pages/AIAutonomousThreatIntelligence'));

// Additional innovative services
const AIWorkflowOrchestrator = lazy(() => import('./pages/services/AIWorkflowOrchestrator'));
const AIDataGovernancePlatform = lazy(() => import('./pages/services/AIDataGovernancePlatform'));
const AICustomerExperienceAnalytics = lazy(() => import('./pages/services/AICustomerExperienceAnalytics'));
const AIFinancialRiskManagement = lazy(() => import('./pages/services/AIFinancialRiskManagement'));
const AICodeReviewSecurityScanner = lazy(() => import('./pages/services/AICodeReviewSecurityScanner'));
const AIDevOpsAutomationPlatform = lazy(() => import('./pages/services/AIDevOpsAutomationPlatform'));
const AIBusinessIntelligenceAnalytics = lazy(() => import('./pages/services/AIBusinessIntelligenceAnalytics'));
const AICustomerExperienceSupport = lazy(() => import('./pages/services/AICustomerExperienceSupport'));
const AIMarketingAutomationPersonalization = lazy(() => import('./pages/services/AIMarketingAutomationPersonalization'));
const NewInnovativeServices2025 = lazy(() => import('./pages/NewInnovativeServices2025'));

// Additional missing components
const ComprehensivePricingGuide2027 = lazy(() => import('./pages/ComprehensivePricingGuide2027'));

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <div className="App min-h-screen bg-white">
          {/* SEO Component */}
          <EnhancedSEO 
            title="Zion Tech Group - Empowering the Future Through Technology"
            description="Leading provider of AI, IT consulting, and digital transformation services. Discover cutting-edge solutions for your business needs."
            keywords={['AI services', 'IT consulting', 'digital transformation', 'technology solutions']}
            type="website"
          />
          
          {/* Service Worker */}
          <ServiceWorker />
          
          {/* Performance Optimizer */}
          <PerformanceOptimizer enabled={true} />
          
          {/* Enhanced Accessibility */}
          <EnhancedAccessibilityEnhancer enabled={true} />
          
          {/* Mobile Experience Enhancer */}
          <MobileExperienceEnhancer enabled={true} />
          
          {/* Advanced Analytics */}
          <AdvancedAnalytics enabled={true} />
          
          {/* Smart Notification System */}
          <SmartNotificationSystem enabled={true} />
          
          {/* Header */}
          <AppHeader />
          
          {/* Main Content */}
          <main className="flex-1">
            <AnimatePresence mode="wait">
              <Routes>
                {/* Core Routes */}
                <Route path="/" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <Home />
                  </Suspense>
                } />
                
                <Route path="/about" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <About />
                  </Suspense>
                } />
                
                <Route path="/services" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <Services />
                  </Suspense>
                } />
                
                <Route path="/contact" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <Contact />
                  </Suspense>
                } />
                
                <Route path="/blog" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <Blog />
                  </Suspense>
                } />
                
                <Route path="/careers" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <Careers />
                  </Suspense>
                } />
                
                <Route path="/pricing" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <Pricing />
                  </Suspense>
                } />
                
                <Route path="/team" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <Team />
                  </Suspense>
                } />
                
                <Route path="/dashboard" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <Dashboard />
                  </Suspense>
                } />
                
                <Route path="/login" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <Login />
                  </Suspense>
                } />
                
                <Route path="/faq" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <FAQ />
                  </Suspense>
                } />
                
                <Route path="/search" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <SearchPage />
                  </Suspense>
                } />
                
                <Route path="/partners" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <Partners />
                  </Suspense>
                } />
                
                <Route path="/news" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <News />
                  </Suspense>
                } />
                
                <Route path="/case-studies" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <CaseStudies />
                  </Suspense>
                } />
                
                <Route path="/help" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <HelpCenter />
                  </Suspense>
                } />
                
                {/* Service Category Routes */}
                <Route path="/ai-services" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <AIServices />
                  </Suspense>
                } />
                
                <Route path="/it-services" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <ITServices />
                  </Suspense>
                } />
                
                <Route path="/micro-saas" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <MicroSaaS />
                  </Suspense>
                } />
                
                {/* 2029 Cutting-Edge Services */}
                <Route path="/zion-cutting-edge-services-2029" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <ZionCuttingEdgeServices2029 />
                  </Suspense>
                } />
                
                {/* 2026 AI Marketplace Services */}
                <Route path="/zion-2026-ai-marketplace-showcase" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <Zion2026AIMarketplaceShowcase />
                  </Suspense>
                } />
                
                {/* Sitemap-aligned Routes */}
                <Route path="/ai-solutions" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <AiSolutions />
                  </Suspense>
                } />
                
                <Route path="/solutions/enterprise" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <SolutionsEnterprise />
                  </Suspense>
                } />
                
                <Route path="/solutions/healthcare" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <SolutionsHealthcare />
                  </Suspense>
                } />
                
                {/* Service Routes */}
                <Route path="/services/cloud-devops" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <CloudDevOps />
                  </Suspense>
                } />
                
                <Route path="/services/it-infrastructure" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <ITInfrastructure />
                  </Suspense>
                } />
                
                <Route path="/services/ai-sales-copilot" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <AISalesCopilot />
                  </Suspense>
                } />
                
                <Route path="/services/cloud-finops-optimizer" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <CloudFinOpsOptimizer />
                  </Suspense>
                } />
                
                <Route path="/services/ai-compliance-assistant" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <AIComplianceAssistant />
                  </Suspense>
                } />
                
                <Route path="/services/ai-auto-email-responder" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <AIAutoEmailResponder />
                  </Suspense>
                } />
                
                <Route path="/services/customer-feedback-surveys" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <CustomerFeedbackSurveys />
                  </Suspense>
                } />
                
                <Route path="/services/ai-compliance-copilot" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <AIComplianceCopilot />
                  </Suspense>
                } />
                
                <Route path="/services/llm-content-studio" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <LLMContentStudio />
                  </Suspense>
                } />
                
                <Route path="/services/finops-advisor" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <FinOpsAdvisor />
                  </Suspense>
                } />
                
                <Route path="/services/returns-management" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <ReturnsManagement />
                  </Suspense>
                } />
                
                <Route path="/services/email-sequencer" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <EmailSequencer />
                  </Suspense>
                } />
                
                <Route path="/services/podcast-transcription" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <PodcastTranscription />
                  </Suspense>
                } />
                
                <Route path="/services/micro-crm" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <MicroCRM />
                  </Suspense>
                } />
                
                <Route path="/services/website-analytics" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <WebsiteAnalytics />
                  </Suspense>
                } />
                
                <Route path="/services/it-helpdesk" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <ITHelpdesk />
                  </Suspense>
                } />
                
                <Route path="/services/affiliate-tracking" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <AffiliateTracking />
                  </Suspense>
                } />
                
                <Route path="/services/mobile-survey" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <MobileSurvey />
                  </Suspense>
                } />
                
                <Route path="/services/ai-autonomous-code-reviewer" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <AIAutonomousCodeReviewer />
                  </Suspense>
                } />
                
                <Route path="/services/zero-trust-network-access" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <ZeroTrustNetworkAccess />
                  </Suspense>
                } />
                
                <Route path="/services/ai-powered-seo" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <AIPoweredSEO />
                  </Suspense>
                } />
                
                <Route path="/services/interview-assessment-ai" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <InterviewAssessmentAI />
                  </Suspense>
                } />
                
                <Route path="/services/helpdesk-platform" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <HelpdeskPlatform />
                  </Suspense>
                } />
                
                <Route path="/services/dsr-portal" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <DSRPortal />
                  </Suspense>
                } />
                
                <Route path="/services/security-headers-csp" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <SecurityHeadersCSP />
                  </Suspense>
                } />
                
                <Route path="/services/ai-project-management" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <AIProjectManagement />
                  </Suspense>
                } />
                
                <Route path="/services/ai-customer-support-automation" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <AICustomerSupportAutomation />
                  </Suspense>
                } />
                
                <Route path="/services/ai-financial-analytics" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <AIFinancialAnalytics />
                  </Suspense>
                } />
                
                <Route path="/services/ai-marketing-automation" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <AIMarketingAutomation />
                  </Suspense>
                } />
                
                <Route path="/new-services-showcase-2025" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <NewServicesShowcase2025 />
                  </Suspense>
                } />
                
                {/* Comprehensive Improvements */}
                <Route path="/comprehensive-improvements-2025" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <ComprehensiveImprovements2025 />
                  </Suspense>
                } />
                
                {/* New Innovative AI Services */}
                <Route path="/services/ai-autonomous-research-assistant" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <AIAutonomousResearchAssistant />
                  </Suspense>
                } />
                
                <Route path="/services/ai-supply-chain-optimization" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <AISupplyChainOptimization />
                  </Suspense>
                } />
                
                <Route path="/services/ai-content-marketing-suite" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <AIContentMarketingSuite />
                  </Suspense>
                } />
                
                <Route path="/services/ai-quantum-hybrid-platform" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <AIQuantumHybridPlatform />
                  </Suspense>
                } />
                
                <Route path="/services/ai-cybersecurity-platform" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <AICybersecurityPlatform />
                  </Suspense>
                } />
                
                <Route path="/services/ai-healthcare-platform" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <AIHealthcarePlatform />
                  </Suspense>
                } />
                
                <Route path="/services/ai-business-intelligence" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <AIBusinessIntelligence />
                  </Suspense>
                } />
                
                <Route path="/services/digital-transformation" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <DigitalTransformation />
                  </Suspense>
                } />
                
                {/* 2025 Innovative Services */}
                <Route path="/innovative-services-landing-2025" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <InnovativeServicesLanding2025 />
                  </Suspense>
                } />
                
                <Route path="/comprehensive-pricing-guide-2025" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <ComprehensivePricingGuide2025 />
                  </Suspense>
                } />
                
                {/* Additional Missing Imports */}
                <Route path="/services/ai-legal-document-automation" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <AILegalDocumentAutomation />
                  </Suspense>
                } />
                
                <Route path="/services/ai-healthcare-analytics" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <AIHealthcareAnalytics />
                  </Suspense>
                } />
                
                <Route path="/services/ai-financial-trading" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <AIFinancialTrading />
                  </Suspense>
                } />
                
                <Route path="/services/ai-content-creation-suite" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <AIContentCreationSuite />
                  </Suspense>
                } />
                
                {/* Comprehensive Services Showcase */}
                <Route path="/comprehensive-services-showcase-2025" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <ComprehensiveServicesShowcase2025Page />
                  </Suspense>
                } />
                
                {/* Innovative Services Showcase */}
                <Route path="/innovative-services-showcase-2025" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <InnovativeServicesShowcase2025 />
                  </Suspense>
                } />
                
                {/* New 2028 Comprehensive Services */}
                <Route path="/comprehensive-services-landing-2028" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <ComprehensiveServicesLanding2028 />
                  </Suspense>
                } />
                
                {/* Additional Service Pages */}
                <Route path="/services/digital-twin" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <DigitalTwin />
                  </Suspense>
                } />
                
                <Route path="/services/data-analytics" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <DataAnalytics />
                  </Suspense>
                } />
                
                {/* 2026 Services Pages */}
                <Route path="/services/quantum-computing" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <QuantumComputing />
                  </Suspense>
                } />
                
                <Route path="/services/ai-cybersecurity" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <AICybersecurity />
                  </Suspense>
                } />
                
                <Route path="/services/iot-edge-computing" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <IoTEdgeComputing />
                  </Suspense>
                } />
                
                <Route path="/services/ai-content-creation" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <AIContentCreation />
                  </Suspense>
                } />
                
                <Route path="/services/ai-hr-platform" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <AIHRPlatform />
                  </Suspense>
                } />
                
                <Route path="/services/sustainable-technology" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <SustainableTechnology />
                  </Suspense>
                } />
                
                <Route path="/services/ai-predictive-maintenance" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <AIPredictiveMaintenance />
                  </Suspense>
                } />
                
                <Route path="/services/quantum-machine-learning" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <QuantumMachineLearning />
                  </Suspense>
                } />
                
                {/* Comprehensive Services Imports */}
                <Route path="/comprehensive-services-showcase-2027" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <ComprehensiveServicesShowcase2027Page />
                  </Suspense>
                } />
                
                <Route path="/comprehensive-services-landing-2025" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <ComprehensiveServicesLanding2025 />
                  </Suspense>
                } />
                
                <Route path="/ultimate-services-showcase-2025" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <UltimateServicesShowcase2025 />
                  </Suspense>
                } />
                
                <Route path="/ultimate-services-showcase-2026" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <UltimateServicesShowcase2026 />
                  </Suspense>
                } />
                
                <Route path="/comprehensive-pricing-2026" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <ComprehensivePricing2026 />
                  </Suspense>
                } />
                
                <Route path="/comprehensive-pricing-2028" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <ComprehensivePricing2028 />
                  </Suspense>
                } />
                
                <Route path="/api" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <API />
                  </Suspense>
                } />
                
                <Route path="/developer-portal" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <DeveloperPortal />
                  </Suspense>
                } />
                
                <Route path="/api-demo" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <ApiDemo />
                  </Suspense>
                } />
                
                {/* Additional Pages */}
                <Route path="/marketplace" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <Marketplace />
                  </Suspense>
                } />
                
                <Route path="/it-consulting" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <ITConsulting />
                  </Suspense>
                } />
                
                <Route path="/space-tech" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <SpaceTech />
                  </Suspense>
                } />
                
                <Route path="/sitemap" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <Sitemap />
                  </Suspense>
                } />
                
                {/* 2029 Services Showcase */}
                <Route path="/comprehensive-services-showcase-2029" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <ComprehensiveServicesShowcase2029 />
                  </Suspense>
                } />
                
                {/* Additional Innovative AI Services */}
                <Route path="/services/ai-autonomous-supply-chain" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <AIAutonomousSupplyChain />
                  </Suspense>
                } />
                
                <Route path="/services/ai-cybersecurity-threat-intelligence" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <AICybersecurityThreatIntelligence />
                  </Suspense>
                } />
                
                <Route path="/ai-autonomous-threat-intelligence" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <AIAutonomousThreatIntelligence />
                  </Suspense>
                } />
                
                {/* Additional Innovative Services */}
                <Route path="/services/ai-workflow-orchestrator" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <AIWorkflowOrchestrator />
                  </Suspense>
                } />
                
                <Route path="/services/ai-data-governance-platform" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <AIDataGovernancePlatform />
                  </Suspense>
                } />
                
                <Route path="/services/ai-customer-experience-analytics" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <AICustomerExperienceAnalytics />
                  </Suspense>
                } />
                
                <Route path="/services/ai-financial-risk-management" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <AIFinancialRiskManagement />
                  </Suspense>
                } />
                
                <Route path="/services/ai-code-review-security-scanner" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <AICodeReviewSecurityScanner />
                  </Suspense>
                } />
                
                <Route path="/services/ai-devops-automation-platform" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <AIDevOpsAutomationPlatform />
                  </Suspense>
                } />
                
                <Route path="/services/ai-business-intelligence-analytics" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <AIBusinessIntelligenceAnalytics />
                  </Suspense>
                } />
                
                <Route path="/services/ai-customer-experience-support" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <AICustomerExperienceSupport />
                  </Suspense>
                } />
                
                <Route path="/services/ai-marketing-automation-personalization" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <AIMarketingAutomationPersonalization />
                  </Suspense>
                } />
                
                <Route path="/new-innovative-services-2025" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <NewInnovativeServices2025 />
                  </Suspense>
                } />
                
                {/* Additional Missing Components */}
                <Route path="/comprehensive-pricing-guide-2027" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <ComprehensivePricingGuide2027 />
                  </Suspense>
                } />
                
                {/* Catch-all route for 404 */}
                <Route path="*" element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <div className="min-h-screen flex items-center justify-center">
                      <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
                        <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
                        <a href="/" className="text-blue-600 hover:text-blue-800 underline">Go back home</a>
                      </div>
                    </div>
                  </Suspense>
                } />
              </Routes>
            </AnimatePresence>
          </main>
          
          {/* Footer */}
          <Footer />
          
          {/* Floating Action Button */}
          <FloatingActionButton />
          
          {/* Chat Assistant */}
          <ChatAssistant />
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;