import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Core Components
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { SEO } from './components/SEO';
import { ErrorBoundary } from './components/ErrorBoundary';
import { LoadingSpinner } from './components/ui/loading-spinner';

// Layout Components
import { EnhancedHeader } from './components/EnhancedHeader';
import { EnhancedFooter } from './components/EnhancedFooter';
import { Sidebar } from './components/Sidebar';

// Optimized lazy loading with preloading hints
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
const Team = createLazyComponent(() => import('./pages/Team'));
const Partners = createLazyComponent(() => import('./pages/Partners'));
const HelpCenter = createLazyComponent(() => import('./pages/Help'));
const PrivacyPolicy = createLazyComponent(() => import('./pages/PrivacyPolicy'));
const TermsOfService = createLazyComponent(() => import('./pages/TermsOfService'));
const Services = createLazyComponent(() => import('./pages/Services'));
const Pricing = createLazyComponent(() => import('./pages/Pricing'));
const Blog = createLazyComponent(() => import('./pages/Blog'));
const News = createLazyComponent(() => import('./pages/News'));
const Careers = createLazyComponent(() => import('./pages/Careers'));
const Login = createLazyComponent(() => import('./pages/Login'));
const Marketplace = createLazyComponent(() => import('./pages/Marketplace'));
const Documentation = createLazyComponent(() => import('./pages/Documentation'));
const Training = createLazyComponent(() => import('./pages/Training'));
const Webinars = createLazyComponent(() => import('./pages/Webinars'));
const Research = createLazyComponent(() => import('./pages/Research'));
const Sitemap = createLazyComponent(() => import('./pages/Sitemap'));

// Revolutionary Services 2025
const RevolutionaryServicesShowcase2025 = createLazyComponent(() => import('./pages/RevolutionaryServicesShowcase2025'));
const RevolutionaryPricingGuide2025 = createLazyComponent(() => import('./pages/RevolutionaryPricingGuide2025'));
const RevolutionaryServicesLanding2025 = createLazyComponent(() => import('./pages/RevolutionaryServicesLanding2025'));

// AI Service pages
const AILegalDocumentAutomation = createLazyComponent(() => import('./pages/services/AILegalDocumentAutomation'));
const AIContentGenerator = createLazyComponent(() => import('./pages/services/ai-content-generator'));
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
const AISpaceTechnologyPlatform = createLazyComponent(() => import('./pages/services/ai-space-technology-platform'));

// Additional AI Services
const AIDataGovernancePlatform = createLazyComponent(() => import('./pages/services/AIDataGovernancePlatform'));
const AIFinancialRiskManagement = createLazyComponent(() => import('./pages/services/AIFinancialRiskManagement'));
const AISupplyChainRiskManagement = createLazyComponent(() => import('./pages/services/AISupplyChainRiskManagement'));
const AIESGCompliancePlatform = createLazyComponent(() => import('./pages/services/AIESGCompliancePlatform'));
const AIDigitalTwinPlatform = createLazyComponent(() => import('./pages/services/AIDigitalTwinPlatform'));
const AIEdgeComputingPlatform = createLazyComponent(() => import('./pages/services/AIEdgeComputingPlatform'));
const AIQuantumMachineLearning = createLazyComponent(() => import('./pages/services/AIQuantumMachineLearning'));

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
const CloudMigrationServices = createLazyComponent(() => import('./pages/services/cloud-migration-services'));
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
const SmartInventoryManagement = createLazyComponent(() => import('./pages/services/smart-inventory-management'));
const SpaceTech = createLazyComponent(() => import('./pages/services/space-tech'));
const Sustainability = createLazyComponent(() => import('./pages/services/sustainability'));

// AI Business Intelligence and Digital Transformation
const AIBusinessIntelligence = createLazyComponent(() => import('./pages/services/AIBusinessIntelligence'));

// 2025 Additional Innovative Services - New
const AICustomerJourneyOrchestrationPlatform = createLazyComponent(() => import('./pages/services/ai-customer-journey-orchestration-platform'));
const QuantumEnhancedCybersecurityOperationsCenter = createLazyComponent(() => import('./pages/services/quantum-enhanced-cybersecurity-operations-center'));
const AIDrivenSustainabilityAnalyticsPlatform = createLazyComponent(() => import('./pages/services/ai-driven-sustainability-analytics-platform'));
const AutonomousDigitalTwinManagementSystem = createLazyComponent(() => import('./pages/services/autonomous-digital-twin-management-system'));

// 2025 Innovative Services
const InnovativeServicesLanding2025 = createLazyComponent(() => import('./pages/InnovativeServicesLanding2025'));

// Additional innovative services
const AIAutonomousResearchAssistant = createLazyComponent(() => import('./pages/services/AIAutonomousResearchAssistant'));
const AIContentMarketingSuite = createLazyComponent(() => import('./pages/services/AIContentMarketingSuite'));
const AIQuantumHybridPlatform = createLazyComponent(() => import('./pages/services/AIQuantumHybridPlatform'));
const AICybersecurityPlatform = createLazyComponent(() => import('./pages/services/AICybersecurityPlatform'));
const AIHealthcarePlatform = createLazyComponent(() => import('./pages/services/AIHealthcarePlatform'));

// Showcase pages
const UltimateServicesShowcase2025 = createLazyComponent(() => import('./components/UltimateServicesShowcase2025'));
const UltimateServicesShowcase2026 = createLazyComponent(() => import('./pages/UltimateServicesShowcase2026'));
const ComprehensivePricing2026 = createLazyComponent(() => import('./pages/ComprehensivePricing2026'));
const ComprehensivePricing2028 = createLazyComponent(() => import('./pages/ComprehensivePricing2028'));

// 2025 Innovative Services Showcase and Pricing Guide
const InnovativeServicesShowcase2025 = createLazyComponent(() => import('./pages/InnovativeServicesShowcase2025'));
const ComprehensivePricingGuide2025 = createLazyComponent(() => import('./pages/ComprehensivePricingGuide2025'));

// 2025 Comprehensive Services Showcase - New
const ComprehensiveServicesShowcase2025 = createLazyComponent(() => import('./pages/ComprehensiveServicesShowcase2025'));

// Error Fallback Component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center p-4">
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
      <ErrorBoundary fallback={<ErrorFallback error={new Error('App failed to load')} resetErrorBoundary={() => window.location.reload()} />}>
        <PerformanceOptimizer>
          <SEO />
          <div className="min-h-screen bg-gray-50">
            <EnhancedHeader />
            <div className="flex">
              <Sidebar />
              <main className="flex-1">
                <Routes>
                  {/* Core Routes */}
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/case-studies" element={<CaseStudies />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/sitemap" element={<Sitemap />} />

                  {/* Revolutionary Services 2025 Routes */}
                  <Route path="/revolutionary-services-showcase-2025" element={<RevolutionaryServicesShowcase2025 />} />
                  <Route path="/revolutionary-pricing-guide-2025" element={<RevolutionaryPricingGuide2025 />} />
                  <Route path="/revolutionary-services-landing-2025" element={<RevolutionaryServicesLanding2025 />} />

                  {/* Service Routes */}
                  <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                  <Route path="/services/ai-legal-document-automation" element={<AILegalDocumentAutomation />} />
                  <Route path="/services/ai-healthcare-analytics" element={<AIHealthcareAnalytics />} />
                  <Route path="/services/ai-financial-trading" element={<AIFinancialTrading />} />
                  <Route path="/services/ai-content-generator" element={<AIContentGenerator />} />
                  <Route path="/services/ai-workflow-orchestrator" element={<AIWorkflowOrchestrator />} />
                  <Route path="/services/ai-data-governance-platform" element={<AIDataGovernancePlatform />} />
                  <Route path="/services/ai-financial-risk-management" element={<AIFinancialRiskManagement />} />
                  <Route path="/services/ai-supply-chain-risk-management" element={<AISupplyChainRiskManagement />} />
                  <Route path="/services/ai-esg-compliance-platform" element={<AIESGCompliancePlatform />} />
                  <Route path="/services/ai-digital-twin-platform" element={<AIDigitalTwinPlatform />} />
                  <Route path="/services/ai-edge-computing-platform" element={<AIEdgeComputingPlatform />} />
                  <Route path="/services/ai-quantum-machine-learning" element={<AIQuantumMachineLearning />} />
                  <Route path="/services/ai-space-technology-platform" element={<AISpaceTechnologyPlatform />} />

                  {/* Quantum Computing Services */}
                  <Route path="/services/quantum-computing" element={<QuantumComputing />} />
                  <Route path="/services/quantum-ai-platform" element={<QuantumAIPlatform />} />
                  <Route path="/services/quantum-ai-trading-platform" element={<QuantumAITradingPlatform />} />
                  <Route path="/services/quantum-computing-as-a-service" element={<QuantumComputingAsAService />} />
                  <Route path="/services/quantum-computing-elite" element={<QuantumComputingElite />} />
                  <Route path="/services/quantum-computing-solutions" element={<QuantumComputingSolutions />} />
                  <Route path="/services/quantum-machine-learning" element={<QuantumMachineLearning />} />
                  <Route path="/services/quantum-technology" element={<QuantumTechnology />} />

                  {/* Other Services */}
                  <Route path="/services/blockchain-enterprise-solutions" element={<BlockchainEnterpriseSolutions />} />
                  <Route path="/services/cloud-devops" element={<CloudDevOps />} />
                  <Route path="/services/cloud-migration-services" element={<CloudMigrationServices />} />
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
                  <Route path="/services/smart-inventory-management" element={<SmartInventoryManagement />} />
                  <Route path="/services/space-tech" element={<SpaceTech />} />
                  <Route path="/services/sustainability" element={<Sustainability />} />

                  {/* 404 Page */}
                  <Route
                    path="*"
                    element={
                      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
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
                      </div>
                    }
                  />
                </Routes>
              </main>
            </div>
            <EnhancedFooter />
          </div>
        </PerformanceOptimizer>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
