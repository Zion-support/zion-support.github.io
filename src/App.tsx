import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';

// Layout Components
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';

// Enhanced Components
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { PerformanceMonitor } from './components/PerformanceMonitor';
import ErrorBoundary from './components/ErrorBoundary';
import { FuturisticAnimatedBackground } from './components/FuturisticAnimatedBackground';
import { AccessibilityEnhancer } from './components/AccessibilityEnhancer';
import { PWAUpdater } from './components/PWAUpdater';
import { ThemeToggle } from './components/ThemeToggle';
import { ToastContainer } from './components/ui/Toast';
import EnhancedAccessibilityEnhancer from './components/EnhancedAccessibilityEnhancer';
import { MobileExperienceEnhancer } from './components/MobileExperienceEnhancer';
import { EnhancedSEO } from './components/EnhancedSEO';
import { ServiceWorker } from './components/ServiceWorker';
import { FloatingActionButton } from './components/FloatingActionButton';
import { AdvancedAnalytics } from './components/AdvancedAnalytics';
import { SmartNotificationSystem } from './components/SmartNotificationSystem';
import { ChatAssistant } from './components/ChatAssistant';
import LoadingSpinner from './components/ui/LoadingSpinner';

// Lazy-loaded pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/about'));
const Services = lazy(() => import('./pages/services'));
const Contact = lazy(() => import('./pages/contact'));
const Blog = lazy(() => import('./pages/Blog'));
const Careers = lazy(() => import('./pages/Careers'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Team = lazy(() => import('./pages/Team'));

// Additional missing page imports
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Login = lazy(() => import('./pages/Login'));
const FAQ = lazy(() => import('./pages/FAQ'));
const SearchPage = lazy(() => import('./pages/SearchPage'));
const Partners = lazy(() => import('./pages/Partners'));
const News = lazy(() => import('./pages/News'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const HelpCenter = lazy(() => import('./pages/HelpCenter'));

// Service pages
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

// Enhanced services pages - only import existing ones
const ComprehensivePricingGuide2027 = lazy(() => import('./pages/ComprehensivePricingGuide2027'));

// Service pages - only import existing ones
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

// Additional new service pages
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
const ComprehensiveServicesShowcase2025Page = lazy(() => import('./pages/ComprehensiveServices.tsx'));

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

// Additional missing components
const UltimateServicesShowcase2025 = lazy(() => import('./pages/UltimateServicesShowcase2025'));
const UltimateServicesShowcase2026 = lazy(() => import('./pages/UltimateServicesShowcase2026'));

// Comprehensive services imports
const ComprehensiveServicesShowcase2027Page = lazy(() => import('./pages/ComprehensiveServicesShowcase2027'));
const ComprehensiveServicesLanding2025 = lazy(() => import('./pages/ComprehensiveServicesLanding2025'));
const ComprehensivePricing2026 = lazy(() => import('./pages/ComprehensivePricing2026'));
const ComprehensivePricing2028 = lazy(() => import('./pages/ComprehensivePricing2028'));
const API = lazy(() => import('./pages/API'));
const DeveloperPortal = lazy(() => import('./pages/DeveloperPortal'));
const ApiDemo = lazy(() => import('./components/ApiDemo'));

// Additional pages
const RevolutionaryServices2030 = lazy(() => import('./pages/RevolutionaryServices2030'));
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

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <div className="App min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
            {/* SEO Component */}
            <EnhancedSEO 
              title="Zion Tech Group - Leading AI & Technology Solutions"
              description="Transform your business with Zion Tech Group's cutting-edge AI solutions, quantum computing, and innovative micro SAAS services. Leading the future of technology."
              keywords="AI solutions, quantum computing, micro SAAS, technology consulting, digital transformation"
              ogImage="/og-image.jpg"
              canonicalUrl="https://ziontechgroup.com"
            />
            
            {/* Performance Optimizer */}
            <PerformanceOptimizer enabled={true} />
            
            {/* Enhanced Accessibility */}
            <EnhancedAccessibilityEnhancer enabled={true} showControls={true} />
            
            {/* Mobile Experience Enhancer */}
            <MobileExperienceEnhancer enabled={true} />
            
            {/* Advanced Analytics */}
            <AdvancedAnalytics enabled={true} showMetrics={true} />
            
            {/* Header */}
            <AppHeader />
            
            {/* Main Content */}
            <main className="flex-1">
              <Suspense fallback={<LoadingSpinner />}>
                <AnimatePresence mode="wait">
                  <Routes>
                    {/* Core Routes */}
                    <Route 
                      path="/" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Home />
                        </motion.div>
                      } 
                    />
                    <Route 
                      path="/about" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <About />
                        </motion.div>
                      } 
                    />
                    <Route 
                      path="/services" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Services />
                        </motion.div>
                      } 
                    />
                    <Route 
                      path="/contact" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Contact />
                        </motion.div>
                      } 
                    />
                    <Route 
                      path="/blog" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Blog />
                        </motion.div>
                      } 
                    />
                    <Route 
                      path="/careers" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Careers />
                        </motion.div>
                      } 
                    />
                    <Route 
                      path="/pricing" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Pricing />
                        </motion.div>
                      } 
                    />
                    <Route 
                      path="/team" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Team />
                        </motion.div>
                      } 
                    />
                    <Route 
                      path="/dashboard" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Dashboard />
                        </motion.div>
                      } 
                    />
                    <Route 
                      path="/login" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Login />
                        </motion.div>
                      } 
                    />
                    <Route 
                      path="/faq" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <FAQ />
                        </motion.div>
                      } 
                    />
                    <Route 
                      path="/search" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <SearchPage />
                        </motion.div>
                      } 
                    />
                    <Route 
                      path="/partners" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Partners />
                        </motion.div>
                      } 
                    />
                    <Route 
                      path="/news" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <News />
                        </motion.div>
                      } 
                    />
                    <Route 
                      path="/case-studies" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <CaseStudies />
                        </motion.div>
                      } 
                    />
                    <Route 
                      path="/help" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <HelpCenter />
                        </motion.div>
                      } 
                    />
                    
                    {/* Service Category Routes */}
                    <Route 
                      path="/ai-services" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <AIServices />
                        </motion.div>
                      } 
                    />
                    <Route 
                      path="/it-services" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ITServices />
                        </motion.div>
                      } 
                    />
                    <Route 
                      path="/micro-saas" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <MicroSaaS />
                        </motion.div>
                      } 
                    />
                    
                    {/* 2029 Cutting-Edge Services */}
                    <Route 
                      path="/zion-cutting-edge-services-2029" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ZionCuttingEdgeServices2029 />
                        </motion.div>
                      } 
                    />
                    
                    {/* 2026 AI Marketplace Services */}
                    <Route 
                      path="/zion-2026-ai-marketplace-showcase" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Zion2026AIMarketplaceShowcase />
                        </motion.div>
                      } 
                    />
                    
                    {/* Sitemap-aligned Routes */}
                    <Route 
                      path="/ai-solutions" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <AiSolutions />
                        </motion.div>
                      } 
                    />
                    <Route 
                      path="/solutions/enterprise" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <SolutionsEnterprise />
                        </motion.div>
                      } 
                    />
                    <Route 
                      path="/solutions/healthcare" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <SolutionsHealthcare />
                        </motion.div>
                      } 
                    />
                    
                    {/* Enhanced services pages */}
                    <Route 
                      path="/comprehensive-pricing-guide-2027" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ComprehensivePricingGuide2027 />
                        </motion.div>
                      } 
                    />
                    
                    {/* Service pages */}
                    <Route 
                      path="/services/cloud-devops" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <CloudDevOps />
                        </motion.div>
                      } 
                    />
                    <Route 
                      path="/services/it-infrastructure" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ITInfrastructure />
                        </motion.div>
                      } 
                    />
                    <Route 
                      path="/services/ai-sales-copilot" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <AISalesCopilot />
                        </motion.div>
                      } 
                    />
                    <Route 
                      path="/services/cloud-finops-optimizer" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <CloudFinOpsOptimizer />
                        </motion.div>
                      } 
                    />
                    <Route 
                      path="/services/ai-compliance-assistant" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <AIComplianceAssistant />
                        </motion.div>
                      } 
                    />
                    <Route 
                      path="/services/ai-auto-email-responder" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <AIAutoEmailResponder />
                        </motion.div>
                      } 
                    />
                    <Route 
                      path="/services/customer-feedback-surveys" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <CustomerFeedbackSurveys />
                        </motion.div>
                      } 
                    />
                    <Route 
                      path="/services/ai-compliance-copilot" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <AIComplianceCopilot />
                        </motion.div>
                      } 
                    />
                    <Route 
                      path="/services/llm-content-studio" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <LLMContentStudio />
                        </motion.div>
                      } 
                    />
                    <Route 
                      path="/services/finops-advisor" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <FinOpsAdvisor />
                        </motion.div>
                      } 
                    />
                    <Route 
                      path="/services/returns-management" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ReturnsManagement />
                        </motion.div>
                      } 
                    />
                    <Route 
                      path="/services/email-sequencer" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <EmailSequencer />
                        </motion.div>
                      } 
                    />
                    <Route 
                      path="/services/podcast-transcription" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <PodcastTranscription />
                        </motion.div>
                      } 
                    />
                    <Route 
                      path="/services/micro-crm" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <MicroCRM />
                        </motion.div>
                      } 
                    />
                    <Route 
                      path="/services/website-analytics" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <WebsiteAnalytics />
                        </motion.div>
                      } 
                    />
                    <Route 
                      path="/services/it-helpdesk" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ITHelpdesk />
                        </motion.div>
                      } 
                    />
                    <Route 
                      path="/services/affiliate-tracking" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <AffiliateTracking />
                        </motion.div>
                      } 
                    />
                    <Route 
                      path="/services/mobile-survey" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <MobileSurvey />
                        </motion.div>
                      } 
                    />
                    <Route 
                      path="/services/ai-autonomous-code-reviewer" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <AIAutonomousCodeReviewer />
                        </motion.div>
                      } 
                    />
                    <Route 
                      path="/services/zero-trust-network-access" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ZeroTrustNetworkAccess />
                        </motion.div>
                      } 
                    />
                    <Route 
                      path="/services/ai-powered-seo" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <AIPoweredSEO />
                        </motion.div>
                      } 
                    />
                    <Route 
                      path="/services/interview-assessment-ai" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <InterviewAssessmentAI />
                        </motion.div>
                      } 
                    />
                    <Route 
                      path="/services/helpdesk-platform" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <HelpdeskPlatform />
                        </motion.div>
                      } 
                    />
                    <Route 
                      path="/services/dsr-portal" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <DSRPortal />
                        </motion.div>
                      } 
                    />
                    <Route 
                      path="/services/security-headers-csp" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <SecurityHeadersCSP />
                        </motion.div>
                      } 
                    />
                    
                    {/* New 2029 Comprehensive Services Showcase */}
                    <Route 
                      path="/comprehensive-services-showcase-2029" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ComprehensiveServicesShowcase2029 />
                        </motion.div>
                      } 
                    />
                    
                    {/* Catch-all route for dynamic pages */}
                    <Route 
                      path="/:slug" 
                      element={
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="min-h-screen flex items-center justify-center">
                            <div className="text-center">
                              <h1 className="text-4xl font-bold text-zion-slate-dark mb-4">Page Not Found</h1>
                              <p className="text-zion-slate mb-6">The page you're looking for doesn't exist.</p>
                              <a 
                                href="/" 
                                className="inline-flex items-center px-6 py-3 bg-zion-blue text-white font-semibold rounded-lg hover:bg-zion-blue-dark transition-colors"
                              >
                                Go Home
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      } 
                    />
                  </Routes>
                </AnimatePresence>
              </Suspense>
            </main>
            
            {/* Footer */}
            <Footer />
            
            {/* Floating Action Button */}
            <FloatingActionButton />
            
            {/* Chat Assistant */}
            <ChatAssistant />
            
            {/* Toast Container */}
            <ToastContainer />
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;