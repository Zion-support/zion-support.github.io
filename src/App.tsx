import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { EnhancedFuturisticFooter as Footer } from './components/EnhancedFuturisticFooter';
import { ChatAssistant } from './components/ChatAssistant';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { EnhancedSEO } from './components/EnhancedSEO';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { EnhancedAccessibilityPanel } from './components/EnhancedAccessibilityPanel';
import { AdvancedPerformanceMonitor } from './components/AdvancedPerformanceMonitor';
import { InteractiveUserExperience } from './components/InteractiveUserExperience';
import { SecurityEnhancer } from './components/SecurityEnhancer';

// Core pages - only import existing ones
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const Services = React.lazy(() => import('./pages/Services'));
const Solutions = React.lazy(() => import('./pages/Solutions'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const WhitePapers = React.lazy(() => import('./pages/WhitePapers'));
const Webinars = React.lazy(() => import('./pages/Webinars'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const Partners = React.lazy(() => import('./pages/Partners'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const EnhancedContact = React.lazy(() => import('./components/EnhancedContact'));

// Enhanced components
const Community = React.lazy(() => import('./pages/Community'));
const Demo = React.lazy(() => import('./pages/Demo'));

// Import real pages
const Careers = React.lazy(() => import('./pages/Careers'));
const Marketplace = React.lazy(() => import('./pages/Marketplace'));
const ComprehensiveServicesShowcase2026 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2026'));
const ComprehensivePricingGuide2026 = React.lazy(() => import('./pages/ComprehensivePricingGuide2026'));
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027'));
const RevolutionaryServices2030 = React.lazy(() => import('./pages/RevolutionaryServices2030'));
const ComprehensivePricingGuide2025 = React.lazy(() => import('./pages/ComprehensivePricingGuide2025'));
const ScheduleDemo = React.lazy(() => import('./pages/ScheduleDemo'));
const AIBusinessIntelligence = React.lazy(() => import('./pages/services/AIBusinessIntelligence'));

// Service pages - only import existing ones
const DigitalTwin = React.lazy(() => import('./pages/services/DigitalTwin'));
const IoTServices = React.lazy(() => import('./pages/services/IoTServices'));
const MicroSAAS = React.lazy(() => import('./pages/services/MicroSAAS'));
const QuantumComputing = React.lazy(() => import('./pages/services/QuantumComputing'));
const SpaceTech = React.lazy(() => import('./pages/services/SpaceTech'));
const Sustainability = React.lazy(() => import('./pages/services/Sustainability'));
const ZeroTrustNetworkArchitecture = React.lazy(() => import('./pages/services/ZeroTrustNetworkArchitecture'));

// Advanced AI services that exist
const AICybersecuritySuite = React.lazy(() => import('./pages/services/ai-cybersecurity-threat-detection'));
const QuantumAIPlatform = React.lazy(() => import('./pages/services/QuantumAIPlatform'));
const AIHealthcareAnalytics = React.lazy(() => import('./pages/services/ai-healthcare-analytics-platform'));
const AIWorkflowOrchestrator = React.lazy(() => import('./pages/services/AIWorkflowOrchestrator'));
const AIDataGovernance = React.lazy(() => import('./pages/services/DataAnalytics'));
const EdgeComputingPlatform = React.lazy(() => import('./pages/services/EdgeComputingPlatform'));
const AICustomerSuccessPlatform = React.lazy(() => import('./pages/services/AICustomerSuccessPlatform'));

// New innovative services
const SmartContractRiskScanner = React.lazy(() => import('./pages/services/SmartContractRiskScanner'));

// Simple placeholder pages for missing ones
const Documentation = React.lazy(() => import('./pages/Documentation'));
const Training = React.lazy(() => import('./pages/Training'));
const Support = React.lazy(() => import('./pages/Support'));
const Accessibility = React.lazy(() => import('./pages/Accessibility'));
const Security = React.lazy(() => import('./pages/Security'));
const Compliance = React.lazy(() => import('./pages/Compliance'));
const OnsiteSupport = React.lazy(() => import('./pages/OnsiteSupport'));

// Emerging Technology 2030
const EmergingTech2030 = React.lazy(() => import('./pages/EmergingTech2030'));

// AI platform services that exist
const AIBusinessIntelligencePlatform = React.lazy(() => import('./pages/services/AIBusinessIntelligencePlatform'));
const AIFinancialTradingPlatform = React.lazy(() => import('./pages/services/ai-financial-trading-platform'));

// New AI-powered micro SaaS services that exist
const AIContentMarketingAutomation = React.lazy(() => import('./pages/services/AIContentMarketingAutomation'));
const AISupplyChainOptimization = React.lazy(() => import('./pages/services/AISupplyChainOptimization'));
const AIHRPlatform = React.lazy(() => import('./pages/services/AIHRPlatform'));
const AILegalResearchPlatform = React.lazy(() => import('./pages/services/AILegalResearchPlatform'));
const AIEducationPlatform = React.lazy(() => import('./pages/services/AIEducationPlatform'));
const AIMarketingAutomation = React.lazy(() => import('./pages/services/AIMarketingAutomation'));
const AIProjectManagementPlatform = React.lazy(() => import('./pages/services/ai-project-management-platform'));

// New AI services we added
const AILegalDocumentAutomation = React.lazy(() => import('./pages/services/AILegalDocumentAutomation'));
const AIHealthcarePredictiveAnalytics = React.lazy(() => import('./pages/services/AIHealthcarePredictiveAnalytics'));
const AIFinancialTradingRiskManagement = React.lazy(() => import('./pages/services/AIFinancialTradingRiskManagement'));
const ComprehensiveAIServicesShowcase2025 = React.lazy(() => import('./pages/ComprehensiveAIServicesShowcase2025'));

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-futuristic">
          <AppHeader />
          
          <main className="flex-1">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                {/* Core Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/cookies" element={<Cookies />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/services" element={<Services />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/white-papers" element={<WhitePapers />} />
                <Route path="/webinars" element={<Webinars />} />
                <Route path="/request-quote" element={<RequestQuote />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/community" element={<Community />} />
                <Route path="/demo" element={<Demo />} />
                
                {/* Service Routes - only for existing pages */}
                <Route path="/services/digital-twin" element={<DigitalTwin />} />
                <Route path="/services/iot-services" element={<IoTServices />} />
                <Route path="/services/micro-saas" element={<MicroSAAS />} />
                <Route path="/services/quantum-computing" element={<QuantumComputing />} />
                <Route path="/services/space-tech" element={<SpaceTech />} />
                <Route path="/services/sustainability" element={<Sustainability />} />
                <Route path="/services/zero-trust-network-architecture" element={<ZeroTrustNetworkArchitecture />} />
                
                {/* Advanced AI Service Routes */}
                <Route path="/services/ai-cybersecurity-suite" element={<AICybersecuritySuite />} />
                <Route path="/services/quantum-ai-platform" element={<QuantumAIPlatform />} />
                <Route path="/services/ai-healthcare-analytics" element={<AIHealthcareAnalytics />} />
                <Route path="/services/ai-workflow-orchestrator" element={<AIWorkflowOrchestrator />} />
                <Route path="/services/ai-data-governance" element={<AIDataGovernance />} />
                <Route path="/services/edge-computing-platform" element={<EdgeComputingPlatform />} />
                <Route path="/services/ai-customer-success-platform" element={<AICustomerSuccessPlatform />} />
                
                {/* AI Platform Service Routes */}
                <Route path="/services/ai-business-intelligence-platform" element={<AIBusinessIntelligencePlatform />} />
                <Route path="/services/ai-financial-trading-platform" element={<AIFinancialTradingPlatform />} />
                <Route path="/services/ai-supply-chain-optimization" element={<AISupplyChainOptimization />} />
                <Route path="/services/ai-hr-platform" element={<AIHRPlatform />} />
                <Route path="/services/ai-marketing-automation" element={<AIMarketingAutomation />} />
                <Route path="/services/ai-legal-research-platform" element={<AILegalResearchPlatform />} />
                <Route path="/services/ai-education-platform" element={<AIEducationPlatform />} />
                <Route path="/services/ai-project-management-platform" element={<AIProjectManagementPlatform />} />
                
                {/* New AI-powered micro SaaS service routes */}
                <Route path="/services/ai-content-marketing-automation" element={<AIContentMarketingAutomation />} />
                
                {/* New AI services we added */}
                <Route path="/services/ai-legal-document-automation" element={<AILegalDocumentAutomation />} />
                <Route path="/services/ai-healthcare-predictive-analytics" element={<AIHealthcarePredictiveAnalytics />} />
                <Route path="/services/ai-financial-trading-risk-management" element={<AIFinancialTradingRiskManagement />} />
                <Route path="/comprehensive-ai-services-showcase-2025" element={<ComprehensiveAIServicesShowcase2025 />} />
                
                {/* Emerging Tech 2030 */}
                <Route path="/emerging-tech-2030" element={<EmergingTech2030 />} />
                
                {/* New comprehensive pricing guide 2026 */}
                <Route path="/comprehensive-pricing-guide-2026" element={<ComprehensivePricingGuide2026 />} />
                
                {/* New comprehensive pricing guide 2027 */}
                <Route path="/comprehensive-pricing-guide-2027" element={<ComprehensivePricingGuide2027 />} />
                
                {/* New comprehensive services showcase 2026 */}
                <Route path="/comprehensive-services-showcase-2026" element={<ComprehensiveServicesShowcase2026 />} />
                
                {/* Revolutionary Services 2030 */}
                <Route path="/revolutionary-services-2030" element={<RevolutionaryServices2030 />} />
                
                {/* Pricing Guide 2025 */}
                <Route path="/pricing-guide-2025" element={<ComprehensivePricingGuide2025 />} />
                
                {/* Schedule Demo */}
                <Route path="/schedule-demo" element={<ScheduleDemo />} />
                
                {/* Service Pages */}
                <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />

                {/* Catch all route */}
                <Route path="*" element={<Home />} />
              </Routes>
            </Suspense>
          </main>
          
          <Footer />
          <ChatAssistant />
          <PerformanceOptimizer showMetrics={true} />
          <EnhancedAccessibilityPanel />
          <AdvancedPerformanceMonitor />
          <InteractiveUserExperience />
          <SecurityEnhancer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;