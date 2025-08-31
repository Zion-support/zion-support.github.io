import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';

// Enhanced Layout Components
import EnhancedHeader from './components/EnhancedHeader';
import EnhancedFooter from './components/EnhancedFooter';

// Enhanced Components
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import EnhancedAccessibilityEnhancer from './components/EnhancedAccessibilityEnhancer';
import { MobileExperienceEnhancer } from './components/MobileExperienceEnhancer';
import { SEO } from './components/SEO';
import { FloatingActionButton } from './components/FloatingActionButton';
import { AdvancedAnalytics } from './components/AdvancedAnalytics';
import { SmartNotificationSystem } from './components/SmartNotificationSystem';
import { ChatAssistant } from './components/ChatAssistant';
import { ErrorBoundary } from './components/ErrorBoundary';
import { LoadingSpinner } from './components/ui/loading-spinner';
import PerformanceMonitor from './components/PerformanceMonitor';

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
const Home2026 = createLazyComponent(() => import('./pages/Home2026'));
const About = createLazyComponent(() => import('./pages/About'));
const Contact = createLazyComponent(() => import('./pages/Contact'));
const Careers = createLazyComponent(() => import('./pages/Careers'));
const News = createLazyComponent(() => import('./pages/News'));
const Press = createLazyComponent(() => import('./pages/Press'));
const CaseStudies = createLazyComponent(() => import('./pages/CaseStudies'));
const WhitePapers = createLazyComponent(() => import('./pages/WhitePapers'));
const Privacy = createLazyComponent(() => import('./pages/Privacy'));
const Terms = createLazyComponent(() => import('./pages/Terms'));
const Blog = createLazyComponent(() => import('./pages/Blog'));

// Service pages
const Services = createLazyComponent(() => import('./pages/Services'));
const Services2026 = createLazyComponent(() => import('./pages/Services2026'));
const Services2027 = createLazyComponent(() => import('./pages/InnovativeServices2027'));
const AIServices = createLazyComponent(() => import('./pages/AIServices'));
const AISolutions = createLazyComponent(() => import('./pages/AISolutions'));
const ITServices = createLazyComponent(() => import('./pages/ITServices'));
const MicroSaaS = createLazyComponent(() => import('./pages/MicroSaaS'));
const MicroSAASSolutions = createLazyComponent(() => import('./pages/services/MicroSAASSolutions'));
const ComprehensiveServices = createLazyComponent(() => import('./pages/ComprehensiveServices'));

// Additional pages
const Partners = createLazyComponent(() => import('./pages/Partners'));
const Team = createLazyComponent(() => import('./pages/Team'));
const HelpCenter = createLazyComponent(() => import('./pages/HelpCenter'));
const Documentation = createLazyComponent(() => import('./pages/Documentation'));
const Developers = createLazyComponent(() => import('./pages/Developers'));
const Webinars = createLazyComponent(() => import('./pages/Webinars'));
const Status = createLazyComponent(() => import('./pages/Status'));

// Enhanced Services Showcase 2025
const EnhancedServicesShowcase2025 = lazy(() => import('./pages/EnhancedServicesShowcase2025'));

// 2025 Innovative Services
const InnovativeServices2025 = lazy(() => import('./pages/InnovativeServices2025'));
const ComprehensivePricingGuide2025 = lazy(() => import('./pages/ComprehensivePricingGuide2025'));
const ZionInnovativeServices2025 = lazy(() => import('./pages/ZionInnovativeServices2025'));

// 2029 Cutting-Edge Services
const ZionCuttingEdgeServices2029 = lazy(() => import('./pages/ZionCuttingEdgeServices2029'));

// New Innovative Services
const AIContentCreationStudioPro = lazy(() => import('./pages/services/AI-Content-Creation-Studio-Pro'));
const QuantumAITradingPlatform = lazy(() => import('./pages/services/Quantum-AI-Trading-Platform'));

// Sitemap-aligned pages
const AiSolutions = lazy(() => import('./pages/AiSolutions'));
const SolutionsEnterprise = lazy(() => import('./pages/solutions/Enterprise'));
const SolutionsHealthcare = lazy(() => import('./pages/solutions/Healthcare'));

// AI Service pages
const AILegalDocumentAutomation = createLazyComponent(() => import('./pages/services/AILegalDocumentAutomation'));
const AIContentOptimizer = createLazyComponent(() => import('./pages/services/ai-content-optimizer-pro'));
const AICybersecuritySuite = createLazyComponent(() => import('./pages/services/ai-cybersecurity-suite'));
const AIFinancialTrading = createLazyComponent(() => import('./pages/services/ai-financial-trading-platform'));
const AIHealthcareAnalytics = createLazyComponent(() => import('./pages/services/ai-healthcare-analytics-platform'));
const AIHRPlatform = createLazyComponent(() => import('./pages/services/ai-hr-platform'));
const AIIoTEdgeComputing = createLazyComponent(() => import('./pages/services/ai-iot-edge-computing-platform'));
const AIMarketingAutomation = createLazyComponent(() => import('./pages/services/ai-marketing-automation'));
const AIPoweredSEO = createLazyComponent(() => import('./pages/services/ai-powered-seo'));
const AIPredictiveMaintenance = createLazyComponent(() => import('./pages/services/ai-predictive-maintenance'));
const AIProjectManagement = createLazyComponent(() => import('./pages/services/ai-project-management-platform'));
const AISupplyChainOptimization = createLazyComponent(() => import('./pages/services/ai-supply-chain-optimization'));
const AIWorkflowAutomation = createLazyComponent(() => import('./pages/services/ai-workflow-automation'));
const AIWorkflowOrchestrator = createLazyComponent(() => import('./pages/services/ai-workflow-orchestrator'));

// New AI Services
const AIDataGovernancePlatform = createLazyComponent(() => import('./pages/services/AI-Data-Governance-Platform'));
const AIFinancialRiskManagement = createLazyComponent(() => import('./pages/services/AI-Financial-Risk-Management'));
const AISupplyChainRiskManagement = createLazyComponent(() => import('./pages/services/AI-Supply-Chain-Risk-Management'));
const AIESGCompliancePlatform = createLazyComponent(() => import('./pages/services/AI-ESG-Compliance-Platform'));
const AIDigitalTwinPlatform = createLazyComponent(() => import('./pages/services/AI-Digital-Twin-Platform'));
const AIEdgeComputingPlatform = createLazyComponent(() => import('./pages/services/AI-Edge-Computing-Platform'));
const AIQuantumMachineLearning = createLazyComponent(() => import('./pages/services/AI-Quantum-Machine-Learning'));

// Quantum Computing Services
const QuantumComputing = createLazyComponent(() => import('./pages/services/QuantumComputing'));
const QuantumAIPlatform = createLazyComponent(() => import('./pages/services/QuantumAIPlatform'));
const QuantumAITradingPlatform = createLazyComponent(() => import('./pages/services/QuantumAITradingPlatform'));
const QuantumComputingAsAService = createLazyComponent(() => import('./pages/services/QuantumComputingAsAService'));
const QuantumComputingElite = createLazyComponent(() => import('./pages/services/QuantumComputingElite'));
const QuantumComputingSolutions = createLazyComponent(() => import('./pages/services/QuantumComputingSolutions'));
const QuantumMachineLearning = createLazyComponent(() => import('./pages/services/QuantumMachineLearning'));
const QuantumTechnology = createLazyComponent(() => import('./pages/services/QuantumTechnology'));

// Other Services
const BlockchainEnterpriseSolutions = createLazyComponent(() => import('./pages/services/blockchain-enterprise-solutions'));
const CloudDevOps = createLazyComponent(() => import('./pages/services/cloud-devops'));
const Cybersecurity = createLazyComponent(() => import('./pages/services/cybersecurity'));
const DigitalTransformation = createLazyComponent(() => import('./pages/services/digital-transformation'));
const DigitalTwin = createLazyComponent(() => import('./pages/services/digital-twin'));
const FinOpsAdvisor = createLazyComponent(() => import('./pages/services/finops-advisor'));
const GreenIT = createLazyComponent(() => import('./pages/services/green-it'));
const HealthcareTech = createLazyComponent(() => import('./pages/services/healthcare-tech'));
const IncidentResponsePlatform = createLazyComponent(() => import('./pages/services/incident-response-platform'));
const InterviewAssessmentAI = createLazyComponent(() => import('./pages/services/interview-assessment-ai'));
const IoTEdgeComputing = createLazyComponent(() => import('./pages/services/iot-edge-computing'));
const LLMContentStudio = createLazyComponent(() => import('./pages/services/llm-content-studio'));
const MicroCRM = createLazyComponent(() => import('./pages/services/micro-crm'));
const MicroSAASSolutions = createLazyComponent(() => import('./pages/services/micro-saas-solutions'));
const SpaceTech = createLazyComponent(() => import('./pages/services/space-tech'));
const Sustainability = createLazyComponent(() => import('./pages/services/sustainability'));
const SustainableTechnology = createLazyComponent(() => import('./pages/services/sustainable-technology'));

// Marketplace and other pages
const Marketplace = createLazyComponent(() => import('./pages/marketplace/Marketplace'));
const MarketplaceProducts = createLazyComponent(() => import('./pages/marketplace/MarketplaceProducts'));
const MarketplaceTalent = createLazyComponent(() => import('./pages/marketplace/MarketplaceTalent'));
const MarketplaceEquipment = createLazyComponent(() => import('./pages/marketplace/MarketplaceEquipment'));
const MarketplaceServices = createLazyComponent(() => import('./pages/marketplace/MarketplaceServices'));
const Login = createLazyComponent(() => import('./pages/Login'));
const Pricing = createLazyComponent(() => import('./pages/PricingPage'));
const Security = createLazyComponent(() => import('./pages/Security'));
const Cookies = createLazyComponent(() => import('./pages/Cookies'));
const Talent = createLazyComponent(() => import('./pages/Talent'));
const Equipment = createLazyComponent(() => import('./pages/Equipment'));
const RequestQuote = createLazyComponent(() => import('./pages/RequestQuote'));
const Analytics = createLazyComponent(() => import('./pages/Analytics'));
const Match = createLazyComponent(() => import('./pages/Match'));
const SearchPage = createLazyComponent(() => import('./pages/SearchPage'));
const MobileLaunch = createLazyComponent(() => import('./pages/MobileLaunch'));
const Sitemap = createLazyComponent(() => import('./pages/Sitemap'));

// Error Fallback Component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light flex items-center justify-center p-4">
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full text-center border border-white/20">
      <div className="text-red-400 text-6xl mb-4">⚠️</div>
      <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
      <p className="text-gray-300 mb-6">
        {error.message || 'An unexpected error occurred. Please try again.'}
      </p>
      <div className="space-y-3">
        <button
          onClick={resetErrorBoundary}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Try again
        </button>
        <button
          onClick={() => window.location.href = '/'}
          className="w-full bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Go home
        </button>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary fallback={<ErrorFallback error={new Error()} resetErrorBoundary={() => { /* empty */ }} />}>
        <div className="App min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
          {/* SEO Component */}
          <SEO
            title="Zion Tech Group - Leading AI & Technology Solutions"
            description="Transform your business with Zion Tech Group's cutting-edge AI solutions, quantum computing, and innovative micro SAAS services. Leading the future of technology."
            keywords="AI solutions, quantum computing, micro SAAS, technology consulting, digital transformation"
            ogImage="/og-image.jpg"
            canonicalUrl="https://ziontechgroup.com"
          />

          {/* Performance Optimizer */}
          <PerformanceOptimizer enabled={true} />

          {/* Enhanced Accessibility */}
          <EnhancedAccessibilityEnhancer enabled={true} />

          {/* Mobile Experience Enhancer */}
          <MobileExperienceEnhancer enabled={true} />

          {/* Advanced Analytics */}
          <AdvancedAnalytics enabled={true} showMetrics={true} />

          {/* Header */}
          <EnhancedHeader />

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
                  <Route path="/home2026" element={<Home2026 />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/team" element={<Team />} />
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
                  <Route path="/login" element={<Login />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/services2026" element={<Services2026 />} />
                  <Route path="/services2027" element={<Services2027 />} />

                  {/* Service Routes */}
                  <Route path="/ai-services" element={<AIServices />} />
                  <Route path="/ai-solutions" element={<AISolutions />} />
                  <Route path="/it-services" element={<ITServices />} />
                  <Route path="/micro-saas" element={<MicroSaaS />} />
                  <Route path="/services/micro-saas-solutions" element={<MicroSAASSolutions />} />
                  <Route path="/comprehensive-services" element={<ComprehensiveServices />} />
                  <Route path="/mobile-launch" element={<MobileLaunch />} />
                  <Route path="/analytics" element={<Analytics />} />
                  <Route path="/match" element={<Match />} />
                  <Route path="/search" element={<SearchPage />} />
                  <Route path="/case-studies" element={<CaseStudies />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/white-papers" element={<WhitePapers />} />
                  <Route path="/press" element={<Press />} />
                  <Route path="/webinars" element={<Webinars />} />
                  <Route path="/training" element={<Training />} />
                  <Route path="/support" element={<Support />} />
                  <Route path="/documentation" element={<Documentation />} />
                  <Route path="/developers" element={<Developers />} />
                  <Route path="/research-development" element={<ResearchDevelopment />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/green-it" element={<GreenIT />} />
                  <Route path="/space-tech" element={<GreenIT />} />
                  <Route path="/quantum-technology" element={<GreenIT />} />
                  <Route path="/financial-solutions" element={<GreenIT />} />
                  <Route path="/mobile" element={<GreenIT />} />

                  {/* 2025 Innovative Services Routes */}
                  <Route path="/innovative-services-2025" element={<InnovativeServices2025 />} />
                  <Route path="/comprehensive-pricing-guide-2025" element={<ComprehensivePricingGuide2025 />} />
                  <Route path="/zion-innovative-services-2025" element={<ZionInnovativeServices2025 />} />

                  {/* Enhanced Services Showcase 2025 */}
                  <Route path="/enhanced-services-showcase-2025" element={
                    <Suspense fallback={<div className="loading-spinner mx-auto mt-20"></div>}>
                      <EnhancedServicesShowcase2025 />
                    </Suspense>
                  } />

                  {/* Comprehensive Services Routes */}
                  <Route path="/comprehensive-services-showcase-2025" element={<ComprehensiveServicesShowcase2025Page />} />
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

                  {/* AI Service Routes */}
                  <Route path="/services/ai-legal-document-automation" element={<AILegalDocumentAutomation />} />
                  <Route path="/services/ai-healthcare-analytics" element={<AIHealthcareAnalytics />} />
                  <Route path="/services/ai-financial-trading" element={<AIFinancialTrading />} />
                  <Route path="/services/ai-content-creation-suite" element={<AIContentCreationSuite />} />
                  <Route path="/services/ai-workflow-orchestrator" element={<AIWorkflowOrchestrator />} />
                  <Route path="/services/ai-data-governance-platform" element={<AIDataGovernancePlatform />} />
                  <Route path="/services/ai-customer-experience-analytics" element={<AICustomerExperienceAnalytics />} />
                  <Route path="/services/ai-financial-risk-management" element={<AIFinancialRiskManagement />} />
                  <Route path="/services/ai-hr-talent-acquisition" element={<AIHRTalentAcquisition />} />
                  <Route path="/services/ai-iot-edge-computing" element={<AIIoTEdgeComputing />} />
                  <Route path="/services/ai-predictive-maintenance" element={<AIPredictiveMaintenance />} />
                  <Route path="/services/ai-sustainable-technology" element={<AISustainableTechnology />} />
                  <Route path="/services/ai-quantum-machine-learning" element={<AIQuantumMachineLearning />} />

                  {/* New AI Service Routes */}
                  <Route path="/services/ai-supply-chain-risk-management" element={<AISupplyChainRiskManagement />} />
                  <Route path="/services/ai-esg-compliance-platform" element={<AIESGCompliancePlatform />} />
                  <Route path="/services/ai-digital-twin-platform" element={<AIDigitalTwinPlatform />} />
                  <Route path="/services/ai-edge-computing-platform" element={<AIEdgeComputingPlatform />} />

                  {/* 2025 New Innovative Services */}
                  <Route path="/services/ai-supply-chain-risk-management" element={<AISupplyChainRiskManagement />} />
                  <Route path="/services/ai-esg-compliance-platform" element={<AIESGCompliancePlatform />} />
                  <Route path="/services/ai-digital-twin-platform" element={<AIDigitalTwinPlatform />} />
                  <Route path="/services/ai-quantum-computing-platform" element={<AIQuantumComputingPlatform />} />
                  <Route path="/services/ai-edge-computing-platform" element={<AIEdgeComputingPlatform />} />

                  {/* Additional Service Routes */}
                  <Route path="/services/ai-cybersecurity" element={<AICybersecurity />} />
                  <Route path="/services/ai-hr-platform" element={<AIHRPlatform />} />
                  <Route path="/services/sustainable-technology" element={<SustainableTechnology />} />
                  <Route path="/services/ai-content-creation" element={<AIContentCreation />} />
                  <Route path="/services/quantum-machine-learning" element={<QuantumMachineLearning />} />

                  {/* Additional Pages */}
                  <Route path="/api" element={<API />} />
                  <Route path="/developer-portal" element={<DeveloperPortal />} />

                  {/* Showcase Routes */}
                  <Route path="/ultimate-services-2025" element={<UltimateServicesShowcase2025 />} />
                  <Route path="/ultimate-services-2026" element={<UltimateServicesShowcase2026 />} />
                  <Route path="/comprehensive-pricing-2026" element={<ComprehensivePricing2026 />} />
                  <Route path="/comprehensive-pricing-2028" element={<ComprehensivePricing2028 />} />
                  <Route path="/innovative-services-2025" element={<InnovativeServicesLanding2025 />} />

                  {/* 2029 Cutting-Edge Services */}
                  <Route path="/zion-cutting-edge-services-2029" element={<ZionCuttingEdgeServices2029 />} />
                  <Route path="/cutting-edge-services-2029" element={<ZionCuttingEdgeServices2029 />} />

                  {/* New Innovative Services */}
                  <Route path="/services/AI-Content-Creation-Studio-Pro" element={<AIContentCreationStudioPro />} />
                  <Route path="/services/Quantum-AI-Trading-Platform" element={<QuantumAITradingPlatform />} />

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
          <EnhancedFooter />

          {/* Floating Action Button */}
          <FloatingActionButton />

          {/* Chat Assistant */}
          <ChatAssistant
            enabled={true}
            position="bottom-right"
            theme="auto"
            language="en"
          />

          {/* Smart Notification System */}
          <SmartNotificationSystem />

          {/* Performance Monitor */}
          <PerformanceMonitor showDetails={process.env.NODE_ENV === 'development'} />
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
