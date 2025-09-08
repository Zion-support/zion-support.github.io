import React, { Suspense, lazy, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';

// Enhanced Layout Components
import { EnhancedHeader } from './components/EnhancedHeader';
import { EnhancedFooter } from './components/EnhancedFooter';
import { Sidebar } from './components/Sidebar';

// Enhanced Components
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import EnhancedAccessibilityEnhancer from './components/EnhancedAccessibilityEnhancer';
import { MobileExperienceEnhancer } from './components/MobileExperienceEnhancer';
import { SEO } from './components/SEO';
import FloatingActionButton from './components/FloatingActionButton';
import { AdvancedAnalytics } from './components/AdvancedAnalytics';
import { SmartNotificationSystem } from './components/SmartNotificationSystem';
import { ChatAssistant } from './components/ChatAssistant';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { EnhancedSEO } from './components/EnhancedSEO';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { EnhancedAccessibilityPanel } from './components/EnhancedAccessibilityPanel';
import { AdvancedPerformanceMonitor } from './components/AdvancedPerformanceMonitor';
import InteractiveUserExperience from './components/InteractiveUserExperience';
import SecurityEnhancer from './components/SecurityEnhancer';

// Service pages
const AIServices = lazy(() => import('./pages/AIServices'));
const ITServices = lazy(() => import('./pages/ITServices'));
const MicroSaaS = lazy(() => import('./pages/MicroSaaS'));

// 2029 Cutting-Edge Services
const ZionCuttingEdgeServices2029 = lazy(() => import('./pages/ZionCuttingEdgeServices2029'));

// Sitemap-aligned pages
const AiSolutions = lazy(() => import('./pages/AiSolutions'));
const SolutionsEnterprise = lazy(() => import('./pages/solutions/Enterprise'));
const SolutionsHealthcare = lazy(() => import('./pages/solutions/Healthcare'));

// Enhanced services pages - only import existing ones
// const ComprehensivePricingGuide2027 = lazy(() => import('./pages/ComprehensivePricingGuide2027.tsx'));

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

// AI Autonomous Services
const AIAutonomousForensics = lazy(() => import('./pages/ai-autonomous-forensics'));
const AIAutonomousThreatIntelligence = lazy(() => import('./pages/ai-autonomous-threat-intelligence'));
const AIAutonomousMobileSecurity = lazy(() => import('./pages/ai-autonomous-mobile-security'));
const AIAutonomousGovernance = lazy(() => import('./pages/ai-autonomous-governance'));

// 2025 Innovative Services
const InnovativeServicesLanding2025 = lazy(() => import('./pages/InnovativeServicesLanding2025'));
// const ComprehensiveServicesShowcase2025 = lazy(() => import('./pages/ComprehensiveServicesShowcase2025'));
const ComprehensivePricingGuide2025 = lazy(() => import('./pages/ComprehensivePricingGuide2025'));

// Additional missing imports
const AILegalDocumentAutomation = lazy(() => import('./pages/services/AILegalDocumentAutomation'));
const AIHealthcareAnalytics = lazy(() => import('./pages/services/AIHealthcareAnalytics'));
const AIFinancialTrading = lazy(() => import('./pages/services/AIFinancialTrading'));
const AIContentCreationSuite = lazy(() => import('./pages/services/AIContentCreationSuite'));
const AICybersecurity = lazy(() => import('./pages/services/ai-cybersecurity'));
const AIHRPlatform = lazy(() => import('./pages/services/ai-hr-platform'));
const SustainableTechnology = lazy(() => import('./pages/services/sustainable-technology'));
const AIPredictiveMaintenance = lazy(() => import('./pages/services/ai-predictive-maintenance'));
const QuantumMachineLearning = lazy(() => import('./pages/services/quantum-machine-learning'));
const AIContentCreation = lazy(() => import('./pages/services/ai-content-creation'));

// New innovative AI services
const AIQuantumComputingPlatform = lazy(() => import('./pages/services/AIQuantumComputingPlatform'));
const AIAutonomousVehiclePlatform = lazy(() => import('./pages/services/AIAutonomousVehiclePlatform'));
const AIMetaverseDevelopmentPlatform = lazy(() => import('./pages/services/AIMetaverseDevelopmentPlatform'));

// Comprehensive services imports
// const ComprehensiveServicesShowcase2025Page = lazy(() => import('./pages/ComprehensiveServicesShowcase2025'));
const ComprehensiveServicesShowcase2027Page = lazy(() => import('./pages/ComprehensiveServicesShowcase2027'));
const ComprehensiveServicesLanding2025 = lazy(() => import('./pages/ComprehensiveServicesLanding2025'));
const ComprehensivePricing2026 = lazy(() => import('./pages/ComprehensivePricing2026'));
const ComprehensivePricing2028 = lazy(() => import('./pages/ComprehensivePricing2028'));

// Innovative services imports
const InnovativeServicesShowcase2025 = lazy(() => import('./pages/InnovativeServicesShowcase2025'));
const UltimateInnovativeServicesShowcase2025 = lazy(() => import('./pages/UltimateInnovativeServicesShowcase2025'));
const UltimateServicesShowcase2026 = lazy(() => import('./pages/UltimateServicesShowcase2026'));

// Additional service imports
const SpaceTech = lazy(() => import('./pages/SpaceTech'));
const DataAnalytics = lazy(() => import('./pages/services/DataAnalytics'));
const QuantumComputing = lazy(() => import('./pages/services/quantum-computing'));
const IoTEdgeComputing = lazy(() => import('./pages/services/iot-edge-computing'));
const DigitalTwin = lazy(() => import('./pages/services/DigitalTwin'));
const Marketplace = lazy(() => import('./pages/Marketplace'));
const Pricing = lazy(() => import('./pages/Pricing'));
const ITConsulting = lazy(() => import('./pages/ITConsulting'));
const Sitemap = lazy(() => import('./pages/Sitemap'));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-900">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-500 mx-auto mb-4"></div>
      <p className="text-gray-400">Loading...</p>
    </div>
  </div>
);

// Error fallback component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
    <div className="text-center">
      <h1 className="text-2xl font-bold text-red-400 mb-4">Something went wrong</h1>
      <p className="text-gray-300 mb-6">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
      >
        Try again
      </button>
    </div>
  </div>
 );

// Innovative Micro SAAS Services 2025
const InnovativeMicroSaasServices2025 = React.lazy(() => import('./pages/innovative-micro-saas-services-2025'));

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <HelmetProvider>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col">
            {/* Header */}
            <Header />
            
            {/* Skip Link for Accessibility */}
            <a href="#main-content" className="skip-link">
              Skip to main content
            </a>
            
            <main id="main-content" className="flex-1 pt-20">
              <Suspense fallback={<EnhancedLoadingSpinner />}>
                <AnimatePresence mode="wait">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/ai-services" element={<AIServices />} />
                    <Route path="/ai-solutions" element={<AISolutions />} />
                    <Route path="/it-services" element={<ITServices />} />
                    <Route path="/micro-saas" element={<MicroSaaS />} />
                    <Route path="/cloud-devops" element={<CloudDevOps />} />
                    <Route path="/cybersecurity" element={<Cybersecurity />} />
                    <Route path="/quantum-computing" element={<QuantumComputing />} />
                    <Route path="/blockchain" element={<Blockchain />} />
                    <Route path="/digital-transformation" element={<DigitalTransformation />} />
                    <Route path="/enterprise" element={<Enterprise />} />
                    
                    {/* AI Autonomous Services Routes */}
                    <Route path="/ai-autonomous-forensics" element={<AIAutonomousForensics />} />
                    <Route path="/ai-autonomous-threat-intelligence" element={<AIAutonomousThreatIntelligence />} />
                    <Route path="/ai-autonomous-mobile-security" element={<AIAutonomousMobileSecurity />} />
                    <Route path="/ai-autonomous-governance" element={<AIAutonomousGovernance />} />
                    
                    {/* 2025 Innovative Services Routes */}
                    <Route path="/innovative-services-landing-2025" element={<InnovativeServicesLanding2025 />} />
                    {/* <Route path="/comprehensive-services-showcase-2025" element={<ComprehensiveServicesShowcase2025 />} /> */}
                    <Route path="/comprehensive-pricing-guide-2025" element={<ComprehensivePricingGuide2025 />} />
                    
                    {/* Comprehensive Services Routes */}
                    {/* <Route path="/comprehensive-services-showcase-2025" element={<ComprehensiveServicesShowcase2025Page />} /> */}
                    <Route path="/ultimate-services-showcase-2026" element={<UltimateServicesShowcase2026 />} />
                    <Route path="/comprehensive-services-showcase-2027" element={<ComprehensiveServicesShowcase2027Page />} />
                    <Route path="/comprehensive-services-landing-2025" element={<ComprehensiveServicesLanding2025 />} />
                    <Route path="/comprehensive-pricing-guide-2027" element={<ComprehensivePricingGuide2027 />} />
                    <Route path="/comprehensive-pricing-2026" element={<ComprehensivePricing2026 />} />
                    <Route path="/comprehensive-pricing-2028" element={<ComprehensivePricing2028 />} />
                    
                    {/* Innovative Services Routes */}
                    <Route path="/innovative-services-showcase-2025" element={<InnovativeServicesShowcase2025 />} />
                    <Route path="/ultimate-innovative-services-showcase-2025" element={<UltimateInnovativeServicesShowcase2025 />} />
                    <Route path="/new-services-showcase-2025" element={<NewServicesShowcase2025 />} />
                    
                    {/* Service Detail Routes */}
                    <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                    <Route path="/services/ai-compliance-assistant" element={<AIComplianceAssistant />} />
                    <Route path="/services/ai-sales-copilot" element={<AISalesCopilot />} />
                    <Route path="/services/ai-seo" element={<AIPoweredSEO />} />
                    <Route path="/services/interview-assessment" element={<InterviewAssessmentAI />} />
                    <Route path="/services/ai-content-marketing-suite" element={<AIContentMarketingSuite />} />
                    <Route path="/services/ai-customer-support-automation" element={<AICustomerSupportAutomation />} />
                    <Route path="/services/ai-project-management" element={<AIProjectManagement />} />
                    <Route path="/services/ai-financial-analytics" element={<AIFinancialAnalytics />} />
                    <Route path="/services/cloud-devops" element={<CloudDevOps />} />
                    <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                    <Route path="/services/finops-advisor" element={<FinOpsAdvisor />} />
                    <Route path="/services/cloud-finops-optimizer" element={<CloudFinOpsOptimizer />} />
                    <Route path="/services/ai-cybersecurity-platform" element={<AICybersecurityPlatform />} />
                    <Route path="/services/security-headers-csp" element={<SecurityHeadersCSP />} />
                    <Route path="/services/dsr-portal" element={<DSRPortal />} />
                    <Route path="/services/zero-trust-network-access" element={<ZeroTrustNetworkAccess />} />
                    <Route path="/services/digital-twin" element={<DigitalTwin />} />
                    <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
                    <Route path="/services/quantum-computing" element={<QuantumComputing />} />
                    <Route path="/services/iot-edge-computing" element={<IoTEdgeComputing />} />
                    <Route path="/services/ai-quantum-hybrid-platform" element={<AIQuantumHybridPlatform />} />
                    <Route path="/services/space-tech" element={<SpaceTech />} />
                    <Route path="/services/data-analytics" element={<DataAnalytics />} />
                    <Route path="/services/micro-crm" element={<MicroCRM />} />
                    <Route path="/services/helpdesk" element={<HelpdeskPlatform />} />
                    <Route path="/services/website-analytics" element={<WebsiteAnalytics />} />
                    <Route path="/services/ai-autonomous-research-assistant" element={<AIAutonomousResearchAssistant />} />
                    <Route path="/services/ai-supply-chain-optimization" element={<AISupplyChainOptimization />} />
                    <Route path="/services/ai-healthcare-platform" element={<AIHealthcarePlatform />} />
                    
                    {/* Additional Service Routes */}
                    <Route path="/services/ai-legal-document-automation" element={<AILegalDocumentAutomation />} />
                    <Route path="/services/ai-healthcare-analytics" element={<AIHealthcareAnalytics />} />
                    <Route path="/services/ai-financial-trading" element={<AIFinancialTrading />} />
                    <Route path="/services/ai-content-creation-suite" element={<AIContentCreationSuite />} />
                    <Route path="/services/ai-cybersecurity" element={<AICybersecurity />} />
                    <Route path="/services/ai-hr-platform" element={<AIHRPlatform />} />
                    <Route path="/services/sustainable-technology" element={<SustainableTechnology />} />
                    <Route path="/services/ai-predictive-maintenance" element={<AIPredictiveMaintenance />} />
                    <Route path="/services/quantum-machine-learning" element={<QuantumMachineLearning />} />
                    <Route path="/services/ai-content-creation" element={<AIContentCreation />} />
                    
                    {/* New innovative AI services */}
                    <Route path="/services/ai-quantum-computing-platform" element={<AIQuantumComputingPlatform />} />
                    <Route path="/services/ai-autonomous-vehicle-platform" element={<AIAutonomousVehiclePlatform />} />
                    <Route path="/services/ai-metaverse-development-platform" element={<AIMetaverseDevelopmentPlatform />} />
                    
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
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;