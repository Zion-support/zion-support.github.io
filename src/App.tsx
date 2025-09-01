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

// Revolutionary Services 2025
const RevolutionaryServicesShowcase2025 = createLazyComponent(() => import('./pages/RevolutionaryServicesShowcase2025'));
const RevolutionaryPricingGuide2025 = createLazyComponent(() => import('./pages/RevolutionaryPricingGuide2025'));
const RevolutionaryServicesLanding2025 = createLazyComponent(() => import('./pages/RevolutionaryServicesLanding2025'));

// Enhanced Services Showcase 2025
const EnhancedServicesShowcase2025 = lazy(() => import('./pages/EnhancedServicesShowcase2025'));

// Comprehensive Services Showcase 2025
const ComprehensiveServicesShowcase2025 = lazy(() => import('./pages/ComprehensiveServicesShowcase2025'));

// Comprehensive Pricing Guide 2025
const ComprehensivePricingGuide2025 = lazy(() => import('./pages/ComprehensivePricingGuide2025'));

// 2025 Innovative Services
const InnovativeServices2025 = lazy(() => import('./pages/InnovativeServices2025'));
const ZionInnovativeServices2025 = lazy(() => import('./pages/ZionInnovativeServices2025'));

// 2026 Innovative Services
const InnovativeServicesShowcase2026 = lazy(() => import('./pages/InnovativeServicesShowcase2026'));
const ComprehensivePricingGuide2026 = lazy(() => import('./pages/ComprehensivePricingGuide2026'));

// 2029 Cutting-Edge Services
const ZionCuttingEdgeServices2029 = lazy(() => import('./pages/ZionCuttingEdgeServices2029'));

// 2028 Ultimate Innovative Services
const UltimateInnovativeServicesShowcase2028 = lazy(() => import('./pages/UltimateInnovativeServicesShowcase2028'));
const ComprehensivePricingGuide2028 = lazy(() => import('./pages/ComprehensivePricingGuide2028'));

// New Innovative Services
const AIContentCreationStudioPro = lazy(() => import('./pages/services/AI-Content-Creation-Studio-Pro'));
const QuantumAITradingPlatform = lazy(() => import('./pages/services/Quantum-AI-Trading-Platform'));

// New Cutting-Edge Services 2025
const AIQuantumComputingPlatform = lazy(() => import('./pages/services/AI-Quantum-Computing-Platform'));
const AISpaceTechnologyPlatform = lazy(() => import('./pages/services/AI-Space-Technology-Platform'));
const AIFinancialTechnologyPlatform = lazy(() => import('./pages/services/AI-Financial-Technology-Platform'));

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

// Simple loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
  </div>
);

// Error fallback component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-900 flex items-center justify-center p-4">
    <div className="text-center text-white max-w-md">
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

          {/* Enhanced Header */}
          <EnhancedHeader />

          {/* Performance Optimizer */}
          <PerformanceOptimizer enabled={true} showMetrics={true} targetScore={95} />

          {/* Enhanced Accessibility */}
          <EnhancedAccessibilityEnhancer enabled={true} showControls={true} />

          {/* Mobile Experience Enhancer */}
          <MobileExperienceEnhancer enabled={true} showControls={true} />

          {/* Main Content */}
          <main className="flex-1">
            <AnimatePresence mode="wait">
              <Routes>
                {/* Core Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/home-2026" element={<Home2026 />} />
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
                <Route path="/services-2026" element={<Services2026 />} />
                <Route path="/services-2027" element={<Services2027 />} />
                <Route path="/ai-services" element={<AIServices />} />
                <Route path="/ai-solutions" element={<AISolutions />} />
                <Route path="/it-services" element={<ITServices />} />
                <Route path="/micro-saas" element={<MicroSaaS />} />
                <Route path="/micro-saas-solutions" element={<MicroSAASSolutions />} />
                <Route path="/comprehensive-services" element={<ComprehensiveServices />} />

                {/* Revolutionary Services 2025 */}
                <Route path="/revolutionary-services-showcase-2025" element={<RevolutionaryServicesShowcase2025 />} />
                <Route path="/revolutionary-pricing-guide-2025" element={<RevolutionaryPricingGuide2025 />} />
                <Route path="/revolutionary-services-landing-2025" element={<RevolutionaryServicesLanding2025 />} />

                {/* Enhanced Services Showcase 2025 */}
                <Route path="/enhanced-services-showcase-2025" element={<EnhancedServicesShowcase2025 />} />

                {/* Comprehensive Services Showcase 2025 */}
                <Route path="/comprehensive-services-showcase-2025" element={<ComprehensiveServicesShowcase2025 />} />

                {/* Comprehensive Pricing Guide 2025 */}
                <Route path="/comprehensive-pricing-guide-2025" element={<ComprehensivePricingGuide2025 />} />

                {/* 2025 Innovative Services */}
                <Route path="/innovative-services-2025" element={<InnovativeServices2025 />} />
                <Route path="/zion-innovative-services-2025" element={<ZionInnovativeServices2025 />} />

                {/* 2026 Innovative Services */}
                <Route path="/innovative-services-showcase-2026" element={<InnovativeServicesShowcase2026 />} />
                <Route path="/comprehensive-pricing-guide-2026" element={<ComprehensivePricingGuide2026 />} />

                {/* 2029 Cutting-Edge Services */}
                <Route path="/zion-cutting-edge-services-2029" element={<ZionCuttingEdgeServices2029 />} />

                {/* 2028 Ultimate Innovative Services */}
                <Route path="/ultimate-innovative-services-showcase-2028" element={<UltimateInnovativeServicesShowcase2028 />} />
                <Route path="/comprehensive-pricing-guide-2028" element={<ComprehensivePricingGuide2028 />} />

                {/* Additional Routes */}
                <Route path="/partners" element={<Partners />} />
                <Route path="/team" element={<Team />} />
                <Route path="/help-center" element={<HelpCenter />} />
                <Route path="/documentation" element={<Documentation />} />
                <Route path="/developers" element={<Developers />} />
                <Route path="/webinars" element={<Webinars />} />
                <Route path="/status" element={<Status />} />

                {/* AI Service Routes */}
                <Route path="/services/ai-legal-document-automation" element={<AILegalDocumentAutomation />} />
                <Route path="/services/ai-content-optimizer-pro" element={<AIContentOptimizer />} />
                <Route path="/services/ai-cybersecurity-suite" element={<AICybersecuritySuite />} />
                <Route path="/services/ai-financial-trading-platform" element={<AIFinancialTrading />} />
                <Route path="/services/ai-healthcare-analytics-platform" element={<AIHealthcareAnalytics />} />
                <Route path="/services/ai-hr-platform" element={<AIHRPlatform />} />
                <Route path="/services/ai-iot-edge-computing-platform" element={<AIIoTEdgeComputing />} />
                <Route path="/services/ai-marketing-automation" element={<AIMarketingAutomation />} />
                <Route path="/services/ai-powered-seo" element={<AIPoweredSEO />} />
                <Route path="/services/ai-predictive-maintenance" element={<AIPredictiveMaintenance />} />
                <Route path="/services/ai-project-management-platform" element={<AIProjectManagement />} />
                <Route path="/services/ai-supply-chain-optimization" element={<AISupplyChainOptimization />} />
                <Route path="/services/ai-workflow-automation" element={<AIWorkflowAutomation />} />
                <Route path="/services/ai-workflow-orchestrator" element={<AIWorkflowOrchestrator />} />

                {/* New AI Service Routes */}
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

                {/* New Innovative Service Routes */}
                <Route path="/services/ai-content-creation-studio-pro" element={<AIContentCreationStudioPro />} />
                <Route path="/services/quantum-ai-trading-platform" element={<QuantumAITradingPlatform />} />
                <Route path="/services/ai-quantum-computing-platform" element={<AIQuantumComputingPlatform />} />
                <Route path="/services/ai-space-technology-platform" element={<AISpaceTechnologyPlatform />} />
                <Route path="/services/ai-financial-technology-platform" element={<AIFinancialTechnologyPlatform />} />

                {/* Sitemap Routes */}
                <Route path="/ai-solutions" element={<AiSolutions />} />
                <Route path="/solutions/enterprise" element={<SolutionsEnterprise />} />
                <Route path="/solutions/healthcare" element={<SolutionsHealthcare />} />

                {/* Marketplace Routes */}
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/marketplace/products" element={<MarketplaceProducts />} />

                {/* Catch all route */}
                <Route path="*" element={<Home />} />
              </Routes>
            </AnimatePresence>
          </main>

          {/* Enhanced Footer */}
          <EnhancedFooter />

          {/* Enhanced Components */}
          <ChatAssistant />
          <FloatingActionButton />
          <AdvancedAnalytics />
          <SmartNotificationSystem />
          <PerformanceMonitor />
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
