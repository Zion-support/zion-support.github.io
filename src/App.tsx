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

// Additional new innovative AI services
const AILegalDocumentAutomation = lazy(() => import('./pages/services/AILegalDocumentAutomation'));
const AIHealthcareAnalytics = lazy(() => import('./pages/services/AIHealthcareAnalytics'));
const AIFinancialTrading = lazy(() => import('./pages/services/AIFinancialTrading'));
const AIContentCreationSuite = lazy(() => import('./pages/services/AIContentCreationSuite'));

// Comprehensive services showcase
const ComprehensiveServicesShowcase2025Page = lazy(() => import('./pages/ComprehensiveServicesShowcase2025'));

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
          
          {/* Header */}
          <AppHeader />
          
          {/* Main Content */}
          <main className="flex-1">
            <Suspense fallback={<LoadingSpinner />}>
              <AnimatePresence mode="wait">
                <Routes>
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
                  
                  {/* Additional innovative AI services */}
                  <Route path="/services/ai-quantum-financial-trading" element={<AIQuantumFinancialTrading />} />
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
                  <Route path="/innovative-services-showcase-2025" element={<InnovativeServicesShowcase2025 />} />
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
                  <Route path="/services/ai-iot-edge-computing" element={<IoTEdgeComputing />} />
                  <Route path="/services/ai-content-creation" element={<AIContentCreation />} />
                  <Route path="/services/ai-hr-platform" element={<AIHRPlatform />} />
                  <Route path="/services/sustainable-technology" element={<SustainableTechnology />} />
                  <Route path="/services/ai-predictive-maintenance" element={<AIPredictiveMaintenance />} />
                  <Route path="/services/quantum-machine-learning" element={<QuantumMachineLearning />} />
                  
                  {/* Additional innovative AI services */}
                  <Route path="/services/ai-autonomous-supply-chain" element={<AIAutonomousSupplyChain />} />
                  <Route path="/services/ai-cybersecurity-threat-intelligence" element={<AICybersecurityThreatIntelligence />} />
                  <Route path="/services/ai-autonomous-threat-intelligence" element={<AIAutonomousThreatIntelligence />} />
                  
                  {/* Additional innovative AI service routes */}
                  <Route path="/services/ai-workflow-orchestrator" element={<AIWorkflowOrchestrator />} />
                  <Route path="/services/ai-data-governance-platform" element={<AIDataGovernancePlatform />} />
                  <Route path="/services/ai-customer-experience-analytics" element={<AICustomerExperienceAnalytics />} />
                  <Route path="/services/ai-financial-risk-management" element={<AIFinancialRiskManagement />} />
                  <Route path="/services/ai-supply-chain-optimization" element={<AISupplyChainOptimization />} />
                  <Route path="/services/AIAutonomousCodeReviewer" element={<AIAutonomousCodeReviewer />} />
                  
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
                  
                  {/* Additional Pages */}
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/search" element={<SearchPage />} />
                  <Route path="/partners" element={<Partners />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/case-studies" element={<CaseStudies />} />
                  <Route path="/help" element={<HelpCenter />} />
                  <Route path="/marketplace" element={<Marketplace />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/it-consulting" element={<ITConsulting />} />
                  <Route path="/space-tech" element={<SpaceTech />} />
                  <Route path="/sitemap" element={<Sitemap />} />
                  
                  {/* 404 Page */}
                  <Route 
                    path="*" 
                    element={
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
                      >
                        <div className="text-center text-white">
                          <h1 className="text-6xl font-bold mb-4">404</h1>
                          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
                          <p className="text-gray-300 mb-8">
                            The page you're looking for doesn't exist or has been moved.
                          </p>
                          <button
                            onClick={() => window.history.back()}
                            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors mr-4"
                          >
                            Go Back
                          </button>
                          <button
                            onClick={() => window.location.href = '/'}
                            className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                          >
                            Go Home
                          </button>
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
          <FloatingActionButton enabled={true} />
          
          {/* Smart Notification System */}
          <SmartNotificationSystem enabled={true} />
          
          {/* Chat Assistant */}
          <ChatAssistant 
            enabled={true} 
            position="bottom-right"
            theme="auto"
            language="en"
          />
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;