import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { motion, AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';

// Layout Components
import { Header } from './components/header/Header';
import { Footer } from './components/layout/Footer';

// Enhanced Components
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { EnhancedAccessibilityEnhancer } from './components/EnhancedAccessibilityEnhancer';
import { MobileExperienceEnhancer } from './components/MobileExperienceEnhancer';
import { SEO } from './components/SEO';
import { FloatingActionButton } from './components/FloatingActionButton';
import { AdvancedAnalytics } from './components/AdvancedAnalytics';
import { SmartNotificationSystem } from './components/SmartNotificationSystem';
import { ChatAssistant } from './components/ChatAssistant';
import { LoadingSpinner } from './components/ui/loading-spinner';
import { EnhancedLoadingSpinner } from './components/EnhancedLoadingSpinner';
import { EnhancedNavigation } from './components/ui/EnhancedNavigation';
import { EnhancedFooter } from './components/ui/EnhancedFooter';

// Layout Components
import ModernLayout from './components/layout/ModernLayout';
import { AppFooter } from './components/layout/AppFooter';

// Enhanced lazy loading with preloading hints
const createLazyComponent = (importFn: () => Promise<any>, fallback?: React.ReactNode) => {
  const LazyComponent = lazy(importFn);
  return (props: any) => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
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

// New AI Services 2026
const AIBusinessIntelligencePlatform = createLazyComponent(() => import('./pages/services/AIBusinessIntelligencePlatform'));
const AICustomerExperiencePlatform = createLazyComponent(() => import('./pages/services/AICustomerExperiencePlatform'));
const AISupplyChainOptimizationPlatform = createLazyComponent(() => import('./pages/services/AISupplyChainOptimizationPlatform'));
const AIFinancialRiskManagementPlatform = createLazyComponent(() => import('./pages/services/AIFinancialRiskManagementPlatform'));

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
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
          {/* Header */}
          <Header />

          {/* Main Content */}
          <main className="flex-1">
            <Suspense fallback={<LoadingSpinner />}>
              <AnimatePresence mode="wait">
                <Routes>
                  {/* Core Routes */}
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/home2026" element={<Home2026 />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/press" element={<Press />} />
                  <Route path="/case-studies" element={<CaseStudies />} />
                  <Route path="/white-papers" element={<WhitePapers />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/blog" element={<Blog />} />

                  {/* Service Routes */}
                  <Route path="/services" element={<Services />} />
                  <Route path="/services2026" element={<Services2026 />} />
                  <Route path="/services2027" element={<Services2027 />} />
                  <Route path="/ai-services" element={<AIServices />} />
                  <Route path="/ai-solutions" element={<AISolutions />} />
                  <Route path="/it-services" element={<ITServices />} />
                  <Route path="/micro-saas" element={<MicroSaaS />} />
                  <Route path="/micro-saas-solutions" element={<MicroSAASSolutions />} />
                  <Route path="/comprehensive-services" element={<ComprehensiveServices />} />

                  {/* Additional Routes */}
                  <Route path="/partners" element={<Partners />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/help-center" element={<HelpCenter />} />
                  <Route path="/documentation" element={<Documentation />} />
                  <Route path="/developers" element={<Developers />} />
                  <Route path="/webinars" element={<Webinars />} />
                  <Route path="/status" element={<Status />} />

                  {/* Enhanced Services Showcase 2025 */}
                  <Route path="/enhanced-services-showcase-2025" element={<EnhancedServicesShowcase2025 />} />

                  {/* 2025 Innovative Services */}
                  <Route path="/innovative-services-2025" element={<InnovativeServices2025 />} />
                  <Route path="/comprehensive-pricing-guide-2025" element={<ComprehensivePricingGuide2025 />} />

                  {/* Sitemap-aligned Routes */}
                  <Route path="/ai-solutions" element={<AiSolutions />} />
                  <Route path="/solutions/enterprise" element={<SolutionsEnterprise />} />
                  <Route path="/solutions/healthcare" element={<SolutionsHealthcare />} />

                  {/* AI Service Routes */}
                  <Route path="/services/ai-legal-document-automation" element={<AILegalDocumentAutomation />} />
                  <Route path="/services/ai-content-optimizer" element={<AIContentOptimizer />} />
                  <Route path="/services/ai-cybersecurity-suite" element={<AICybersecuritySuite />} />
                  <Route path="/services/ai-financial-trading" element={<AIFinancialTrading />} />
                  <Route path="/services/ai-healthcare-analytics" element={<AIHealthcareAnalytics />} />
                  <Route path="/services/ai-hr-platform" element={<AIHRPlatform />} />
                  <Route path="/services/ai-iot-edge-computing" element={<AIIoTEdgeComputing />} />
                  <Route path="/services/ai-marketing-automation" element={<AIMarketingAutomation />} />
                  <Route path="/services/ai-powered-seo" element={<AIPoweredSEO />} />
                  <Route path="/services/ai-predictive-maintenance" element={<AIPredictiveMaintenance />} />
                  <Route path="/services/ai-project-management" element={<AIProjectManagement />} />
                  <Route path="/services/ai-supply-chain-optimization" element={<AISupplyChainOptimization />} />
                  <Route path="/services/ai-workflow-automation" element={<AIWorkflowAutomation />} />
                  <Route path="/services/ai-workflow-orchestrator" element={<AIWorkflowOrchestrator />} />

                  {/* New AI Services 2026 */}
                  <Route path="/services/ai-business-intelligence-platform" element={<AIBusinessIntelligencePlatform />} />
                  <Route path="/services/ai-customer-experience-platform" element={<AICustomerExperiencePlatform />} />
                  <Route path="/services/ai-supply-chain-optimization-platform" element={<AISupplyChainOptimizationPlatform />} />
                  <Route path="/services/ai-financial-risk-management-platform" element={<AIFinancialRiskManagementPlatform />} />

                  {/* New AI Services */}
                  <Route path="/services/ai-data-governance-platform" element={<AIDataGovernancePlatform />} />
                  <Route path="/services/ai-financial-risk-management" element={<AIFinancialRiskManagement />} />
                  <Route path="/services/ai-supply-chain-risk-management" element={<AISupplyChainRiskManagement />} />
                  <Route path="/services/ai-esg-compliance-platform" element={<AIESGCompliancePlatform />} />
                  <Route path="/services/ai-digital-twin-platform" element={<AIDigitalTwinPlatform />} />
                  <Route path="/services/ai-edge-computing-platform" element={<AIEdgeComputingPlatform />} />
                  <Route path="/services/ai-quantum-machine-learning" element={<AIQuantumMachineLearning />} />

                  {/* Quantum Computing Service Routes */}
                  <Route path="/services/quantum-computing" element={<QuantumComputing />} />
                  <Route path="/services/quantum-ai-platform" element={<QuantumAIPlatform />} />
                  <Route path="/services/quantum-ai-trading-platform" element={<QuantumAITradingPlatform />} />
                  <Route path="/services/quantum-computing-as-a-service" element={<QuantumComputingAsAService />} />
                  <Route path="/services/quantum-computing-elite" element={<QuantumComputingElite />} />
                  <Route path="/services/quantum-computing-solutions" element={<QuantumComputingSolutions />} />
                  <Route path="/services/quantum-machine-learning" element={<QuantumMachineLearning />} />
                  <Route path="/services/quantum-technology" element={<QuantumTechnology />} />

                  {/* Other Service Routes */}
                  <Route path="/services/blockchain-enterprise-solutions" element={<BlockchainEnterpriseSolutions />} />
                  <Route path="/services/cloud-devops" element={<CloudDevOps />} />
                  <Route path="/services/cybersecurity" element={<Cybersecurity />} />
                  <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
                  <Route path="/services/digital-twin" element={<DigitalTwin />} />
                  <Route path="/services/finops-advisor" element={<FinOpsAdvisor />} />
                  <Route path="/services/green-it" element={<GreenIT />} />
                  <Route path="/services/healthcare-tech" element={<HealthcareTech />} />
                  <Route path="/services/incident-response-platform" element={<IncidentResponsePlatform />} />
                  <Route path="/services/interview-assessment-ai" element={<InterviewAssessmentAI />} />
                  <Route path="/services/iot-edge-computing" element={<IoTEdgeComputing />} />
                  <Route path="/services/llm-content-studio" element={<LLMContentStudio />} />
                  <Route path="/services/micro-crm" element={<MicroCRM />} />
                  <Route path="/services/micro-saas-solutions" element={<MicroSAASSolutions />} />
                  <Route path="/services/space-tech" element={<SpaceTech />} />
                  <Route path="/services/sustainability" element={<Sustainability />} />
                  <Route path="/services/sustainable-technology" element={<SustainableTechnology />} />

                  {/* Marketplace Routes */}
                  <Route path="/marketplace" element={<Marketplace />} />
                  <Route path="/marketplace/products" element={<MarketplaceProducts />} />
                  <Route path="/marketplace/talent" element={<MarketplaceTalent />} />
                  <Route path="/marketplace/equipment" element={<MarketplaceEquipment />} />
                  <Route path="/marketplace/services" element={<MarketplaceServices />} />

                  {/* Other Routes */}
                  <Route path="/login" element={<Login />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/security" element={<Security />} />
                  <Route path="/cookies" element={<Cookies />} />
                  <Route path="/talent" element={<Talent />} />
                  <Route path="/equipment" element={<Equipment />} />
                  <Route path="/request-quote" element={<RequestQuote />} />
                  <Route path="/analytics" element={<Analytics />} />
                  <Route path="/match" element={<Match />} />
                  <Route path="/search" element={<SearchPage />} />
                  <Route path="/mobile-launch" element={<MobileLaunch />} />
                  <Route path="/sitemap" element={<Sitemap />} />

                  {/* Enhanced Components Routes */}
                  <Route path="/performance-optimizer" element={<PerformanceOptimizer />} />
                  <Route path="/accessibility-enhancer" element={<EnhancedAccessibilityEnhancer />} />
                  <Route path="/mobile-responsiveness" element={<MobileExperienceEnhancer />} />
                  <Route path="/seo-optimizer" element={<SEO />} />
                  <Route path="/floating-action" element={<FloatingActionButton />} />
                  <Route path="/advanced-analytics" element={<AdvancedAnalytics />} />
                  <Route path="/smart-notifications" element={<SmartNotificationSystem />} />
                  <Route path="/loading-spinner" element={<LoadingSpinner />} />
                  <Route path="/enhanced-loading" element={<EnhancedLoadingSpinner />} />
                  <Route path="/enhanced-navigation" element={<EnhancedNavigation />} />
                  <Route path="/enhanced-footer" element={<EnhancedFooter />} />
                </Routes>
              </AnimatePresence>
            </Suspense>
          </main>

          {/* Footer */}
          <Footer />

          {/* Floating Action Button */}
          <FloatingActionButton />

          {/* Enhanced Accessibility Enhancer */}
          <EnhancedAccessibilityEnhancer enabled={true} showSettings={false} />

          {/* Advanced Analytics */}
          <AdvancedAnalytics enabled={true} />

          {/* Chat Assistant */}
          <ChatAssistant
            enabled={true}
            position="bottom-right"
            theme="auto"
            language="en"
          />

          {/* Smart Notification System */}
          <SmartNotificationSystem />
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
