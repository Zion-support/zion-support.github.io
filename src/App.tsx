import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { EnhancedFuturisticFooter as Footer } from './components/EnhancedFuturisticFooter';
import { ChatAssistant } from './components/ChatAssistant';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { EnhancedSEO } from './components/EnhancedSEO';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { ThemeProvider } from './components/ThemeProvider';
import { EnhancedAccessibilityPanel } from './components/EnhancedAccessibilityPanel';
import { AdvancedPerformanceMonitor } from './components/AdvancedPerformanceMonitor';
import { InteractiveUserExperience } from './components/InteractiveUserExperience';
import { SecurityEnhancer } from './components/SecurityEnhancer';

// Core pages
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
const Community = React.lazy(() => import('./pages/Community'));
const Demo = React.lazy(() => import('./pages/Demo'));
const Careers = React.lazy(() => import('./pages/Careers'));
const Marketplace = React.lazy(() => import('./pages/Marketplace'));

// Service pages - only import existing ones
const DigitalTwin = React.lazy(() => import('./pages/services/DigitalTwin'));
const IoTServices = React.lazy(() => import('./pages/services/IoTServices'));
const MicroSAAS = React.lazy(() => import('./pages/services/MicroSAAS'));
const QuantumComputing = React.lazy(() => import('./pages/services/QuantumComputing'));
const SpaceTech = React.lazy(() => import('./pages/services/SpaceTech'));
const Sustainability = React.lazy(() => import('./pages/services/Sustainability'));
const ZeroTrustNetworkArchitecture = React.lazy(() => import('./pages/services/ZeroTrustNetworkArchitecture'));
const CloudDevOps = React.lazy(() => import('./pages/services/CloudDevOps'));
const DataAnalytics = React.lazy(() => import('./pages/services/DataAnalytics'));
const IoTEdge = React.lazy(() => import('./pages/services/IoTEdge'));
const BlockchainEnterpriseSolutions = React.lazy(() => import('./pages/services/BlockchainEnterpriseSolutions'));
const HealthcareTech = React.lazy(() => import('./pages/services/HealthcareTech'));
const ITInfrastructure = React.lazy(() => import('./pages/services/ITInfrastructure'));
const DigitalTransformation = React.lazy(() => import('./pages/services/DigitalTransformation'));
const ITConsulting = React.lazy(() => import('./pages/services/ITConsulting'));
const GreenIT = React.lazy(() => import('./pages/services/GreenIT'));

// AI services that exist
const AICybersecuritySuite = React.lazy(() => import('./pages/services/ai-cybersecurity-threat-detection'));
const QuantumAIPlatform = React.lazy(() => import('./pages/services/QuantumAIPlatform'));
const AIHealthcareAnalytics = React.lazy(() => import('./pages/services/ai-healthcare-analytics-platform'));
const AIWorkflowOrchestrator = React.lazy(() => import('./pages/services/AIWorkflowOrchestrator'));
const AIDataGovernance = React.lazy(() => import('./pages/services/DataAnalytics'));
const EdgeComputingPlatform = React.lazy(() => import('./pages/services/EdgeComputingPlatform'));
const AICustomerSuccessPlatform = React.lazy(() => import('./pages/services/AICustomerSuccessPlatform'));
const AIBusinessIntelligencePlatform = React.lazy(() => import('./pages/services/AIBusinessIntelligencePlatform'));
const AIFinancialTradingPlatform = React.lazy(() => import('./pages/services/ai-financial-trading-platform'));
const AISupplyChainOptimization = React.lazy(() => import('./pages/services/AISupplyChainOptimization'));
const AIHRPlatform = React.lazy(() => import('./pages/services/AIHRPlatform'));
const AIMarketingAutomation = React.lazy(() => import('./pages/services/AIMarketingAutomation'));
const AILegalResearchPlatform = React.lazy(() => import('./pages/services/AILegalResearchPlatform'));
const AIEducationPlatform = React.lazy(() => import('./pages/services/AIEducationPlatform'));
const AIProjectManagementPlatform = React.lazy(() => import('./pages/services/ai-project-management-platform'));
const AIContentMarketingAutomation = React.lazy(() => import('./pages/services/AIContentMarketingAutomation'));

// Micro SaaS services that exist
const AffiliateMarketingTracker = React.lazy(() => import('./pages/services/AffiliateMarketingTracker'));
const UptimeSLAMonitor = React.lazy(() => import('./pages/services/UptimeSLAMonitor'));
const SOC2ComplianceTracker = React.lazy(() => import('./pages/services/SOC2ComplianceTracker'));
const EmployeeSchedulingSaaS = React.lazy(() => import('./pages/services/EmployeeSchedulingSaaS'));
const AISupportHelpdesk = React.lazy(() => import('./pages/services/AISupportHelpdesk'));
const AIContentGenerator = React.lazy(() => import('./pages/services/AIContentGenerator'));
const AiLeadScoring = React.lazy(() => import('./pages/services/AiLeadScoring'));
const WebsiteAiChatbot = React.lazy(() => import('./pages/services/WebsiteAiChatbot'));
const RagSearch = React.lazy(() => import('./pages/services/RagSearch'));
const MlopsPipeline = React.lazy(() => import('./pages/services/MlopsPipeline'));
const EcommercePersonalization = React.lazy(() => import('./pages/services/EcommercePersonalization'));
const ReturnsManagementSaaS = React.lazy(() => import('./pages/services/ReturnsManagementSaaS'));
const VendorRiskManagement = React.lazy(() => import('./pages/services/VendorRiskManagement'));
const AISEOOptimizer = React.lazy(() => import('./pages/services/AISEOOptimizer'));
const SaaSChurnPredictor = React.lazy(() => import('./pages/services/SaaSChurnPredictor'));
const AIIncidentPostmortems = React.lazy(() => import('./pages/services/AIIncidentPostmortems'));
const APIMonitoringSaaS = React.lazy(() => import('./pages/services/APIMonitoringSaaS'));
const GDPRCookieCompliance = React.lazy(() => import('./pages/services/GDPRCookieCompliance'));
const AIProofreadingStudio = React.lazy(() => import('./pages/services/AIProofreadingStudio'));
const AICustomerChurnPrediction = React.lazy(() => import('./pages/services/AICustomerChurnPrediction'));
const AIFinancialFraudDetection = React.lazy(() => import('./pages/services/AIFinancialFraudDetection'));
const AIHRTalentAcquisition = React.lazy(() => import('./pages/services/AIHRTalentAcquisition'));
const AILegalDocumentAutomation = React.lazy(() => import('./pages/services/AILegalDocumentAutomation'));
const AIHealthcarePredictiveAnalytics = React.lazy(() => import('./pages/services/AIHealthcarePredictiveAnalytics'));
const AIFinancialTradingRiskManagement = React.lazy(() => import('./pages/services/AIFinancialTradingRiskManagement'));

// New innovative services 2026
const AIRealEstateInvestmentAnalyzer = React.lazy(() => import('./pages/services/AIRealEstateInvestmentAnalyzer'));
const AISupplyChainRiskManagement = React.lazy(() => import('./pages/services/AISupplyChainRiskManagement'));
const NewServicesShowcase2026 = React.lazy(() => import('./pages/NewServicesShowcase2026'));

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
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
                  <Route path="/careers" element={<Careers />} />
                  
                  {/* Service Routes */}
                  <Route path="/services/digital-twin" element={<DigitalTwin />} />
                  <Route path="/services/iot-services" element={<IoTServices />} />
                  <Route path="/services/micro-saas" element={<MicroSAAS />} />
                  <Route path="/services/quantum-computing" element={<QuantumComputing />} />
                  <Route path="/services/space-tech" element={<SpaceTech />} />
                  <Route path="/services/sustainability" element={<Sustainability />} />
                  <Route path="/services/zero-trust-network-architecture" element={<ZeroTrustNetworkArchitecture />} />
                  <Route path="/services/cloud-devops" element={<CloudDevOps />} />
                  <Route path="/services/data-analytics" element={<DataAnalytics />} />
                  <Route path="/services/iot-edge" element={<IoTEdge />} />
                  <Route path="/services/blockchain-enterprise-solutions" element={<BlockchainEnterpriseSolutions />} />
                  <Route path="/services/healthcare-tech" element={<HealthcareTech />} />
                  <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                  <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
                  <Route path="/services/it-consulting" element={<ITConsulting />} />
                  <Route path="/services/green-it" element={<GreenIT />} />
                  
                  {/* AI Service Routes */}
                  <Route path="/services/ai-cybersecurity-suite" element={<AICybersecuritySuite />} />
                  <Route path="/services/quantum-ai-platform" element={<QuantumAIPlatform />} />
                  <Route path="/services/ai-healthcare-analytics" element={<AIHealthcareAnalytics />} />
                  <Route path="/services/ai-workflow-orchestrator" element={<AIWorkflowOrchestrator />} />
                  <Route path="/services/ai-data-governance" element={<AIDataGovernance />} />
                  <Route path="/services/edge-computing-platform" element={<EdgeComputingPlatform />} />
                  <Route path="/services/ai-customer-success-platform" element={<AICustomerSuccessPlatform />} />
                  <Route path="/services/ai-business-intelligence-platform" element={<AIBusinessIntelligencePlatform />} />
                  <Route path="/services/ai-financial-trading-platform" element={<AIFinancialTradingPlatform />} />
                  <Route path="/services/ai-supply-chain-optimization" element={<AISupplyChainOptimization />} />
                  <Route path="/services/ai-hr-platform" element={<AIHRPlatform />} />
                  <Route path="/services/ai-marketing-automation" element={<AIMarketingAutomation />} />
                  <Route path="/services/ai-legal-research-platform" element={<AILegalResearchPlatform />} />
                  <Route path="/services/ai-education-platform" element={<AIEducationPlatform />} />
                  <Route path="/services/ai-project-management-platform" element={<AIProjectManagementPlatform />} />
                  <Route path="/services/ai-content-marketing-automation" element={<AIContentMarketingAutomation />} />
                  
                  {/* Micro SaaS Service Routes */}
                  <Route path="/services/affiliate-marketing-tracker" element={<AffiliateMarketingTracker />} />
                  <Route path="/services/uptime-sla-monitor" element={<UptimeSLAMonitor />} />
                  <Route path="/services/soc2-compliance-tracker" element={<SOC2ComplianceTracker />} />
                  <Route path="/services/employee-scheduling-saas" element={<EmployeeSchedulingSaaS />} />
                  <Route path="/services/ai-support-helpdesk" element={<AISupportHelpdesk />} />
                  <Route path="/services/ai-content-generator" element={<AIContentGenerator />} />
                  <Route path="/services/ai-lead-scoring" element={<AiLeadScoring />} />
                  <Route path="/services/website-ai-chatbot" element={<WebsiteAiChatbot />} />
                  <Route path="/services/rag-search" element={<RagSearch />} />
                  <Route path="/services/mlops-pipeline" element={<MlopsPipeline />} />
                  <Route path="/services/ecommerce-personalization" element={<EcommercePersonalization />} />
                  <Route path="/services/returns-management" element={<ReturnsManagementSaaS />} />
                  <Route path="/services/vendor-risk-management" element={<VendorRiskManagement />} />
                  <Route path="/services/ai-seo-optimizer" element={<AISEOOptimizer />} />
                  <Route path="/services/saas-churn-predictor" element={<SaaSChurnPredictor />} />
                  <Route path="/services/ai-incident-postmortems" element={<AIIncidentPostmortems />} />
                  <Route path="/services/api-monitoring" element={<APIMonitoringSaaS />} />
                  <Route path="/services/gdpr-cookie-compliance" element={<GDPRCookieCompliance />} />
                  <Route path="/services/ai-proofreading-studio" element={<AIProofreadingStudio />} />
                  <Route path="/services/ai-customer-churn-prediction" element={<AICustomerChurnPrediction />} />
                  <Route path="/services/ai-financial-fraud-detection" element={<AIFinancialFraudDetection />} />
                  <Route path="/services/ai-hr-talent-acquisition" element={<AIHRTalentAcquisition />} />
                  <Route path="/services/ai-legal-document-automation" element={<AILegalDocumentAutomation />} />
                  <Route path="/services/ai-healthcare-predictive-analytics" element={<AIHealthcarePredictiveAnalytics />} />
                  <Route path="/services/ai-financial-trading-risk-management" element={<AIFinancialTradingRiskManagement />} />

                  {/* New innovative services 2026 */}
                  <Route path="/services/ai-real-estate-investment-analyzer" element={<AIRealEstateInvestmentAnalyzer />} />
                  <Route path="/services/ai-supply-chain-risk-management" element={<AISupplyChainRiskManagement />} />
                  <Route path="/new-services-showcase-2026" element={<NewServicesShowcase2026 />} />

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
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;