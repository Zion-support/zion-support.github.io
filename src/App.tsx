import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Sidebar } from './components/Sidebar';
import { ErrorBoundary } from 'react-error-boundary';
import { LoadingSpinner } from './components/ui/loading-spinner';

// Enhanced Components;
import PerformanceOptimizer from './components/PerformanceOptimizer';
import EnhancedAccessibilityEnhancer from './components/EnhancedAccessibilityEnhancer';
import MobileExperienceEnhancer from './components/MobileExperienceEnhancer';
import PerformanceMonitor from './components/PerformanceMonitor';
import { FloatingActionButton } from './components/FloatingActionButton';

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
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const EnhancedContact = React.lazy(() => import('./components/EnhancedContact'));

// New comprehensive pages
const ComprehensiveServicesShowcase2026 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2026'));
const InnovativeMicroSAASServices2025 = React.lazy(() => import('./pages/InnovativeMicroSAASServices2025'));

// Enhanced components
const Community = React.lazy(() => import('./pages/Community'));
const Demo = React.lazy(() => import('./pages/Demo'));

// Import real pages
const Careers = React.lazy(() => import('./pages/Careers'));
const Marketplace = React.lazy(() => import('./pages/Marketplace'));
const Resources = React.lazy(() => import('./pages/Resources'));

// Service pages - only import existing ones
const DigitalTwin = React.lazy(() => import('./pages/services/DigitalTwin'));
const IoTServices = React.lazy(() => import('./pages/services/IoTServices'));
const MicroSAAS = React.lazy(() => import('./pages/services/MicroSAAS'));
const QuantumComputing = React.lazy(() => import('./pages/services/QuantumComputing'));
const SpaceTech = React.lazy(() => import('./pages/services/SpaceTech'));
const Sustainability = React.lazy(() => import('./pages/services/Sustainability'));
const ZeroTrustNetworkArchitecture = React.lazy(() => import('./pages/services/ZeroTrustNetworkArchitecture'));

// New service pages from our branch
const AIHealthcarePlatform = React.lazy(() => import('./pages/services/ai-healthcare-platform'));
const AIContentCreation = React.lazy(() => import('./pages/services/ai-content-creation'));
const AICybersecurity = React.lazy(() => import('./pages/services/ai-cybersecurity'));
const IoTEdgeComputing = React.lazy(() => import('./pages/services/iot-edge-computing'));

// AI services that exist
const AICybersecuritySuite = React.lazy(() => import('./pages/services/ai-cybersecurity-threat-detection'));
const QuantumAIPlatform = React.lazy(() => import('./pages/services/QuantumAIPlatform'));
const AIHealthcareAnalytics = React.lazy(() => import('./pages/services/ai-healthcare-analytics-platform'));
const AIWorkflowOrchestrator = React.lazy(() => import('./pages/services/AIWorkflowOrchestrator'));
const AIDataGovernance = React.lazy(() => import('./pages/services/DataAnalytics'));
const EdgeComputingPlatform = React.lazy(() => import('./pages/services/EdgeComputingPlatform'));
const AICustomerSuccessPlatform = React.lazy(() => import('./pages/services/AICustomerSuccessPlatform'));

// New AI services from remote branch
const AICustomerSuccessPrediction = React.lazy(() => import('./pages/services/AICustomerSuccessPrediction'));
const AIHealthcareAnalyticsPlatform = React.lazy(() => import('./pages/services/AIHealthcareAnalyticsPlatform'));
const QuantumComputingAsAService = React.lazy(() => import('./pages/services/QuantumComputingAsAService'));

// Micro SaaS services that exist
const AffiliateMarketingTracker = React.lazy(() => import('./pages/services/AffiliateMarketingTracker'));
const UptimeSLAMonitor = React.lazy(() => import('./pages/services/UptimeSLAMonitor'));
const SOC2ComplianceTracker = React.lazy(() => import('./pages/services/SOC2ComplianceTracker'));
const EmployeeSchedulingSaaS = React.lazy(() => import('./pages/services/EmployeeSchedulingSaaS'));
const AISupportHelpdesk = React.lazy(() => import('./pages/services/AISupportHelpdesk'));
const AIContentGenerator = React.lazy(() => import('./pages/services/AIContentGenerator'));

// AI platform services
const AIBusinessIntelligencePlatform = React.lazy(() => import('./pages/services/AIBusinessIntelligencePlatform'));
const AIFinancialTradingPlatform = React.lazy(() => import('./pages/services/AIFinancialTradingPlatform'));
const AISupplyChainOptimization = React.lazy(() => import('./pages/services/AISupplyChainOptimization'));
const AIFinancialTradingPlatform = React.lazy(() => import('./pages/services/AIFinancialTradingPlatform'));
const AIHRPlatform = React.lazy(() => import('./pages/services/AIHRPlatform'));
const AILegalResearchPlatform = React.lazy(() => import('./pages/services/AILegalResearchPlatform'));
const AIEducationPlatform = React.lazy(() => import('./pages/services/AIEducationPlatform'));
const AIMarketingAutomation = React.lazy(() => import('./pages/services/AIMarketingAutomation'));
const AIProjectManagementPlatform = React.lazy(() => import('./pages/services/AIProjectManagementPlatform'));
const AICustomerSuccessPlatform = React.lazy(() => import('./pages/services/AICustomerSuccessPlatform'));

// Additional service pages that exist
const ServicesOverview = React.lazy(() => import('./pages/ServicesOverview'));
const ITServicesPage = React.lazy(() => import('./pages/ITServicesPage'));
const AIServicesPage = React.lazy(() => import('./pages/AIServicesPage'));
const MicroSaasServicesPage = React.lazy(() => import('./pages/MicroSaasServicesPage'));
const ServicesCatalog = React.lazy(() => import('./pages/ServicesCatalog'));
const ServicesComparisonPage = React.lazy(() => import('./pages/ServicesComparisonPage'));
// Temporarily disabled due to build issues
// const InnovativeServicesShowcase2025 = React.lazy(() => import('./pages/InnovativeServicesShowcase2025'));
const RevolutionaryServicesShowcase2030 = React.lazy(() => import('./pages/RevolutionaryServicesShowcase2030'));
const ComprehensiveServicesLanding2028 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2028'));
const PricingGuide = React.lazy(() => import('./pages/PricingGuide'));
const ComprehensivePricingGuide2028 = React.lazy(() => import('./pages/ComprehensivePricingGuide2028'));
const ComprehensivePricingGuide2030 = React.lazy(() => import('./pages/ComprehensivePricingGuide2030'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const Accessibility = React.lazy(() => import('./pages/Accessibility'));
const Support = React.lazy(() => import('./pages/Support'));
const Documentation = React.lazy(() => import('./pages/Documentation'));
const Training = React.lazy(() => import('./pages/Training'));
const Support = React.lazy(() => import('./pages/Support'));
const Accessibility = React.lazy(() => import('./pages/Accessibility'));
const Security = React.lazy(() => import('./pages/Security'));
const Compliance = React.lazy(() => import('./pages/Compliance'));
const OnsiteSupport = React.lazy(() => import('./pages/OnsiteSupport'));

const Careers = React.lazy(() => import('./pages/Careers'));

const Marketplace = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <SEO 
      title="Marketplace - Zion Tech Group"
      description="Explore our marketplace of AI-powered technology solutions and services."
    />
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Marketplace</h1>
      <p className="text-xl text-gray-300">Explore our solutions</p>
    </div>
  </div>
);

// New innovative micro SAAS services
const AIRealEstateAnalytics = React.lazy(() => import('./pages/services/AIRealEstateAnalytics'));
const AILogisticsOptimization = React.lazy(() => import('./pages/services/AILogisticsOptimization'));
const AICybersecurityThreatIntelligence = React.lazy(() => import('./pages/services/AICybersecurityThreatIntelligence'));

// New comprehensive services showcase 2026
const ComprehensiveServicesShowcase2026 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2026'));

// New innovative micro SAAS services
const AIEnergyOptimizationPlatform = React.lazy(() => import('./pages/services/AIEnergyOptimizationPlatform'));
const AISupplyChainRiskManagement = React.lazy(() => import('./pages/services/AISupplyChainRiskManagement'));
const AIPredictiveMaintenancePlatform = React.lazy(() => import('./pages/services/AIPredictiveMaintenancePlatform'));
const AIFraudDetectionPlatform = React.lazy(() => import('./pages/services/AIFraudDetectionPlatform'));
const AICustomerExperienceOptimization = React.lazy(() => import('./pages/services/AICustomerExperienceOptimization'));

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router>
          <div className="min-h-screen bg-futuristic">
            <AppHeader onSidebarToggle={() => setIsSidebarOpen(!isSidebarOpen)} isSidebarOpen={isSidebarOpen} />
            
            {/* Main Content with Sidebar */}
            <div className="flex flex-1">
              <Sidebar isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
              
              <main className="flex-1 min-h-screen">
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    {/* Core Routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/help" element={<Help />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/terms-of-service" element={<TermsOfService />} />
                    <Route path="/cookies" element={<Cookies />} />
                    <Route path="/partners" element={<Partners />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/pricing-guide" element={<PricingGuide />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/services-overview" element={<ServicesOverview />} />
                    <Route path="/services-catalog" element={<ServicesCatalog />} />
                    <Route path="/services-comparison" element={<ServicesComparisonPage />} />
                    <Route path="/solutions" element={<Solutions />} />
                    <Route path="/case-studies" element={<CaseStudies />} />
                    <Route path="/white-papers" element={<WhitePapers />} />
                    <Route path="/webinars" element={<Webinars />} />
                    <Route path="/request-quote" element={<RequestQuote />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/marketplace" element={<Marketplace />} />
                    <Route path="/community" element={<Community />} />
                    <Route path="/demo" element={<Demo />} />
                    <Route path="/schedule-demo" element={<ScheduleDemo />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/press" element={<Press />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/sitemap" element={<Sitemap />} />
                    <Route path="/accessibility" element={<Accessibility />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/documentation" element={<Documentation />} />
                    <Route path="/research" element={<Research />} />
                    <Route path="/training" element={<Training />} />
                    <Route path="/tutorials" element={<Tutorials />} />
                    <Route path="/security" element={<Security />} />
                    <Route path="/status" element={<Status />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/resources" element={<Resources />} />
                    
                    {/* Service Category Routes */}
                    <Route path="/ai-services" element={<AIServicesPage />} />
                    <Route path="/it-services" element={<ITServicesPage />} />
                    <Route path="/micro-saas" element={<MicroSaasServicesPage />} />
                    
                    {/* Service Routes */}
                    <Route path="/services/digital-twin" element={<DigitalTwin />} />
                    <Route path="/services/iot-services" element={<IoTServices />} />
                    <Route path="/services/micro-saas" element={<MicroSAAS />} />
                    <Route path="/services/micro-saas-solutions" element={<MicroSAASSolutions />} />
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
                    <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                    <Route path="/services/ai-sales-copilot" element={<AISalesCopilot />} />
                    <Route path="/services/cloud-finops-optimizer" element={<CloudFinOpsOptimizer />} />
                    <Route path="/services/ai-compliance-assistant" element={<AIComplianceAssistant />} />
                    <Route path="/services/ai-auto-email-responder" element={<AIAutoEmailResponder />} />
                    <Route path="/services/mobile-feedback-surveys" element={<CustomerFeedbackSurveys />} />
                    <Route path="/services/ai-compliance-copilot" element={<AIComplianceCopilot />} />
                    <Route path="/services/llm-content-studio" element={<LLMContentStudio />} />
                    <Route path="/services/finops-advisor" element={<FinOpsAdvisor />} />
                    
                    {/* New Service Routes from our branch */}
                    <Route path="/services/ai-healthcare-platform" element={<AIHealthcarePlatform />} />
                    <Route path="/services/ai-content-creation" element={<AIContentCreation />} />
                    <Route path="/services/ai-cybersecurity" element={<AICybersecurity />} />
                    <Route path="/services/iot-edge-computing" element={<IoTEdgeComputing />} />
                    
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
                    <Route path="/services/ai-legal-document-automation" element={<AILegalDocumentAutomation />} />
                    <Route path="/services/ai-healthcare-predictive-analytics" element={<AIHealthcarePredictiveAnalytics />} />
                    <Route path="/services/ai-financial-trading-risk-management" element={<AIFinancialTradingRiskManagement />} />
                    
                    {/* New AI Service Routes from remote branch */}
                    <Route path="/services/ai-customer-success-prediction" element={<AICustomerSuccessPrediction />} />
                    <Route path="/services/ai-healthcare-analytics-platform" element={<AIHealthcareAnalyticsPlatform />} />
                    <Route path="/services/quantum-computing-as-a-service" element={<QuantumComputingAsAService />} />
                    
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
                    
                    {/* Special Showcase Routes */}
                    {/* Temporarily disabled due to build issues */}
                    {/* <Route path="/innovative-services-showcase-2025" element={<InnovativeServicesShowcase2025 />} /> */}
                    <Route path="/revolutionary-services-showcase-2030" element={<RevolutionaryServicesShowcase2030 />} />
                    <Route path="/comprehensive-services-landing-2028" element={<ComprehensiveServicesLanding2028 />} />
                    <Route path="/comprehensive-ai-services-showcase-2025" element={<ComprehensiveAIServicesShowcase2025 />} />
                    <Route path="/emerging-tech-2030" element={<EmergingTech2030 />} />
                    <Route path="/comprehensive-pricing-guide-2025" element={<ComprehensivePricingGuide2025 />} />
                    <Route path="/comprehensive-pricing-guide-2026" element={<ComprehensivePricingGuide2026 />} />
                    <Route path="/comprehensive-pricing-guide-2027" element={<ComprehensivePricingGuide2027 />} />
                    <Route path="/comprehensive-pricing-guide-2028" element={<ComprehensivePricingGuide2028 />} />
                    <Route path="/comprehensive-pricing-guide-2030" element={<ComprehensivePricingGuide2030 />} />
                    <Route path="/comprehensive-services-showcase-2026" element={<ComprehensiveServicesShowcase2026 />} />
                    <Route path="/revolutionary-services-2030" element={<RevolutionaryServices2030 />} />
                    
                    {/* Catch all route */}
                    <Route path="*" element={<Home />} />
                  </Routes>
                </Suspense>
              </main>
            </div>
            
            <EnhancedFuturisticFooter />
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
