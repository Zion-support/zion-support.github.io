import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { EnhancedFuturisticFooter as Footer } from './components/EnhancedFuturisticFooter';
import { ChatAssistant } from './components/ChatAssistant';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { AccessibilityEnhancer } from './components/AccessibilityEnhancer';

// Core pages - only import existing ones
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const Services = React.lazy(() => import('./pages/Services'));
const Solutions = React.lazy(() => import('./pages/Solutions'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const Partners = React.lazy(() => import('./pages/Partners'));
const Pricing = React.lazy(() => import('./pages/Pricing'));

// Service pages - only import existing ones
const DigitalTwin = React.lazy(() => import('./pages/services/DigitalTwin'));
const IoTServices = React.lazy(() => import('./pages/services/IoTServices'));
const MicroSAAS = React.lazy(() => import('./pages/services/MicroSAAS'));
const MicroSAASSolutions = React.lazy(() => import('./pages/services/MicroSAASSolutions'));
const QuantumComputing = React.lazy(() => import('./pages/services/QuantumComputing'));
const SpaceTech = React.lazy(() => import('./pages/services/SpaceTech'));
const Sustainability = React.lazy(() => import('./pages/services/Sustainability'));
const ZeroTrustNetworkArchitecture = React.lazy(() => import('./pages/services/ZeroTrustNetworkArchitecture'));

// Advanced AI services
const AICybersecuritySuite = React.lazy(() => import('./pages/services/AICybersecuritySuite'));
const QuantumAIPlatform = React.lazy(() => import('./pages/services/QuantumAIPlatform'));
const AIHealthcareAnalytics = React.lazy(() => import('./pages/services/AIHealthcareAnalytics'));
const AIWorkflowOrchestrator = React.lazy(() => import('./pages/services/AIWorkflowOrchestrator'));
const AIDataGovernance = React.lazy(() => import('./pages/services/AIDataGovernance'));
const EdgeComputingPlatform = React.lazy(() => import('./pages/services/EdgeComputingPlatform'));
const AICustomerSuccessPlatform = React.lazy(() => import('./pages/services/AICustomerSuccessPlatform'));
const IncidentResponsePlatform = React.lazy(() => import('./pages/services/IncidentResponsePlatform'));

// New innovative services
const SmartContractRiskScanner = React.lazy(() => import('./pages/services/SmartContractRiskScanner'));

// Simple placeholder pages for missing ones
const Community = React.lazy(() => import('./pages/Community'));
const Documentation = React.lazy(() => import('./pages/Documentation'));
const Training = React.lazy(() => import('./pages/Training'));
const Support = React.lazy(() => import('./pages/Support'));
const Accessibility = React.lazy(() => import('./pages/Accessibility'));
const Security = React.lazy(() => import('./pages/Security'));
const Compliance = React.lazy(() => import('./pages/Compliance'));
const OnsiteSupport = React.lazy(() => import('./pages/OnsiteSupport'));

// Emerging Technology 2030
const EmergingTech2030 = React.lazy(() => import('./pages/EmergingTech2030'));

// AI platform services
const AIBusinessIntelligencePlatform = React.lazy(() => import('./pages/services/AIBusinessIntelligencePlatform'));
const AIFinancialTradingPlatform = React.lazy(() => import('./pages/services/AIFinancialTradingPlatform'));

// New AI-powered micro SaaS services
const AIContentMarketingAutomation = React.lazy(() => import('./pages/services/AIContentMarketingAutomation'));
const AISupplyChainOptimization = React.lazy(() => import('./pages/services/AISupplyChainOptimization'));
const AIHRPlatform = React.lazy(() => import('./pages/services/AIHRPlatform'));
const AILegalResearchPlatform = React.lazy(() => import('./pages/services/AILegalResearchPlatform'));
const AIEducationPlatform = React.lazy(() => import('./pages/services/AIEducationPlatform'));
const AIMarketingAutomation = React.lazy(() => import('./pages/services/AIMarketingAutomation'));
const AIProjectManagementPlatform = React.lazy(() => import('./pages/services/AIProjectManagementPlatform'));

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
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                
                {/* Service Routes - only for existing pages */}
                <Route path="/services/digital-twin" element={<DigitalTwin />} />
                <Route path="/services/iot-services" element={<IoTServices />} />
                <Route path="/services/micro-saas" element={<MicroSAAS />} />
                <Route path="/services/micro-saas-solutions" element={<MicroSAASSolutions />} />
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
                
                {/* Catch all route */}
                <Route path="*" element={<Home />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <ChatAssistant />
          <PerformanceOptimizer showMetrics={true} />
          <AccessibilityEnhancer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;