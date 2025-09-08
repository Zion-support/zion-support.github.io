import { Suspense, lazy, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';

// Layout Components
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';
import { Sidebar } from './components/Sidebar';

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
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { AppHeader } from './layout/AppHeader';
import { EnhancedFuturisticFooter as Footer } from './components/EnhancedFuturisticFooter';
import { ChatAssistant } from './components/ChatAssistant';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { AccessibilityEnhancer } from './components/AccessibilityEnhancer';
import { AdvancedPerformanceMonitor } from './components/AdvancedPerformanceMonitor';
import { AIServiceRecommendationEngine } from './components/AIServiceRecommendationEngine';
import { EnhancedServiceShowcase } from './components/EnhancedServiceShowcase';

// Core pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Cookies = lazy(() => import('./pages/Cookies'));
const Services = lazy(() => import('./pages/Services'));
const Solutions = lazy(() => import('./pages/Solutions'));
const Resources = lazy(() => import('./pages/Resources'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Team = lazy(() => import('./pages/Team'));
const Resources = lazy(() => import('./pages/Resources'));

// Additional missing page imports
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Login = lazy(() => import('./pages/Login'));
const ScheduleDemo = lazy(() => import('./pages/ScheduleDemo'));
const InvestorRelations = lazy(() => import('./pages/InvestorRelations'));
const Press = lazy(() => import('./pages/Press'));
const Legal = lazy(() => import('./pages/Legal'));
const WhitePapers = lazy(() => import('./pages/WhitePapers'));
const Webinars = lazy(() => import('./pages/Webinars'));
const Documentation = lazy(() => import('./pages/Documentation'));
const APIDocumentation = lazy(() => import('./pages/APIDocumentation'));
const Developers = lazy(() => import('./pages/Developers'));
const Training = lazy(() => import('./pages/Training'));
const Community = lazy(() => import('./pages/Community'));
const Support = lazy(() => import('./pages/Support'));

// Enhanced services pages - only import existing ones
const ComprehensivePricingGuide2027 = lazy(() => import('./pages/ComprehensivePricingGuide2027.tsx'));
const ComprehensivePricingGuide2030 = lazy(() => import('./pages/ComprehensivePricingGuide2030.tsx'));
const ComprehensiveServicesLanding2025 = lazy(() => import('./pages/ComprehensiveServicesLanding2025.jsx'));
const EnhancedServicesLanding = lazy(() => import('./pages/EnhancedServicesLanding.tsx'));
const InnovativeServicesShowcase2025 = lazy(() => import('./pages/InnovativeServicesShowcase2025.tsx'));

// New pages
const RevolutionaryServices2030 = React.lazy(() => import('./pages/RevolutionaryServices2030'));
const InnovativeServicesShowcase2027 = React.lazy(() => import('./pages/InnovativeServicesShowcase2027'));
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027'));
const ComprehensiveServicesLanding2027 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2027'));
const InnovativeServices2025 = React.lazy(() => import('./pages/InnovativeServices2025'));
const ComprehensivePricingGuide2025 = React.lazy(() => import('./pages/ComprehensivePricingGuide2025'));
const ComprehensivePricingGuide2030 = React.lazy(() => import('./pages/ComprehensivePricingGuide2030'));
const ComprehensiveServicesLanding2025 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2025'));
const ComprehensiveServicesLanding2030 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2030'));
const EnhancedServicesLanding = React.lazy(() => import('./pages/EnhancedServicesLanding'));
const ComprehensiveServicesAdvertising = React.lazy(() => import('./pages/ComprehensiveServicesAdvertising'));
const ComprehensiveServicesShowcase2030 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2030'));
const InnovativeServicesOverview = React.lazy(() => import('./pages/InnovativeServicesOverview'));

// New innovative services
const AILegalDocumentAnalysis = React.lazy(() => import('./pages/services/ai-legal-document-analysis'));
const AISupplyChainOptimization = React.lazy(() => import('./pages/services/ai-supply-chain-optimization'));
const AIHealthcareAnalytics = React.lazy(() => import('./pages/services/ai-healthcare-analytics'));
const AIFinancialTrading = React.lazy(() => import('./pages/services/ai-financial-trading'));
const AIFraudDetectionPlatform = React.lazy(() => import('./pages/services/ai-fraud-detection-platform'));
const AIHealthcareDiagnosis = React.lazy(() => import('./pages/services/ai-healthcare-diagnosis'));
const AIMarketingAutomation = React.lazy(() => import('./pages/services/ai-marketing-automation'));
// Service pages - only import existing ones
const CloudDevOps = lazy(() => import('./pages/services/CloudDevOps'));
const DigitalTwin = lazy(() => import('./pages/services/DigitalTwin'));
const DataAnalytics = lazy(() => import('./pages/services/DataAnalytics'));
const ITInfrastructure = lazy(() => import('./pages/services/ITInfrastructure'));
const AIBusinessIntelligence = lazy(() => import('./pages/services/AIBusinessIntelligence'));
const MicroSaaSProducts = lazy(() => import('./pages/services/MicroSaaSProducts'));

// Additional service pages
const BlockchainWeb3Platform = lazy(() => import('./pages/services/blockchain-web3-platform'));
const AIHealthcareDiagnosticsPlatform = lazy(() => import('./pages/services/ai-healthcare-diagnostics-platform'));
const AIEducationPlatform = lazy(() => import('./pages/services/ai-education-platform'));
const AIMetaversePlatform = lazy(() => import('./pages/services/ai-metaverse-platform'));
const AISpaceTechnologyPlatform = lazy(() => import('./pages/services/ai-space-technology-platform'));
const AIGreenTechnologyPlatform = lazy(() => import('./pages/services/ai-green-technology-platform'));
const AIDevelopmentPlatform = lazy(() => import('./pages/services/ai-development-platform'));
const AIContentCreation = lazy(() => import('./pages/services/ai-content-creation'));
const AICybersecurity = lazy(() => import('./pages/services/ai-cybersecurity'));
const QuantumComputing = lazy(() => import('./pages/services/quantum-computing'));
const IoTEdgeComputing = lazy(() => import('./pages/services/iot-edge-computing'));
const Showcase2025 = lazy(() => import('./pages/services/showcase-2025'));
const MicroSAAS = lazy(() => import('./pages/services/micro-saas'));

// Simple placeholder pages for missing ones
const Careers = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Careers</h1>
      <p className="text-xl text-gray-300">Join our team</p>
    </div>
  </div>
);

const Marketplace = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Marketplace</h1>
      <p className="text-xl text-gray-300">Coming Soon</p>
    </div>
  </div>
);

// New innovative services
const AIContractAnalysis = lazy(() => import('./pages/services/AI-Powered-Contract-Analysis'));
const AISupplyChainOptimizationNew = lazy(() => import('./pages/services/AI-Supply-Chain-Optimization'));
const AICybersecurityThreatIntelligence = lazy(() => import('./pages/services/AI-Cybersecurity-Threat-Intelligence'));
const AIHealthcareDiagnostics = lazy(() => import('./pages/services/AI-Healthcare-Diagnostics'));

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

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
          <AppHeader onSidebarToggle={toggleSidebar} />
          
          {/* Sidebar */}
          <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
          
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
                  <Route path="/services/micro-saas" element={<MicroSaaS />} />
                  
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
                  <Route path="/resources" element={<Resources />} />
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
          <Footer />
          <ChatAssistant />
          <PerformanceOptimizer />
          <AccessibilityEnhancer />
          <AdvancedPerformanceMonitor />
          <AIServiceRecommendationEngine />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;