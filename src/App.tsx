import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { Footer } from './components/Footer';
import Sidebar from './components/Sidebar';
import { AccessibilityControls } from './components/AccessibilityControls';
import PerformanceDashboard from './components/PerformanceDashboard';
import { AnalyticsDashboard } from './components/AnalyticsDashboard';
import { AIChatbot } from './components/AIChatbot';
import { CollaborativeTextEditor } from './components/CollaborativeTextEditor';
import { AICodeGenerator } from './components/AICodeGenerator';
import { EnterpriseDashboard } from './components/EnterpriseDashboard';
import { SecurityComplianceDashboard } from './components/SecurityComplianceDashboard';
import { MachineLearningDashboard } from './components/MachineLearningDashboard';

import { LinkHealthMonitor } from './components/LinkHealthMonitor';
import { ThemeProvider } from "./components/ThemeProvider";
import { useScrollToTop } from "./hooks";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import { EnhancedErrorBoundary } from './components/EnhancedErrorBoundary';
import EnhancedSEO from './components/EnhancedSEO';
import EnhancedAccessibility from './components/EnhancedAccessibility';
import { PerformanceMonitor } from './components/PerformanceMonitor';
import { ScrollToTop } from './components/ScrollToTop';
import { ContentQualityEnhancer } from './components/ContentQualityEnhancer';
import { BrokenLinkFixer } from './components/BrokenLinkFixer';
import { WebsiteImprovementDashboard } from './components/WebsiteImprovementDashboard';

// Lazy load pages - only import existing ones
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/EnhancedContact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Services = React.lazy(() => import('./pages/Services'));
const Solutions = React.lazy(() => import('./pages/Solutions'));
const Resources = React.lazy(() => import('./pages/Resources'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const WhitePapers = React.lazy(() => import('./pages/WhitePapers'));
const Webinars = React.lazy(() => import('./pages/Webinars'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Documentation = React.lazy(() => import('./pages/Documentation'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const Partners = React.lazy(() => import('./pages/Partners'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const Legal = React.lazy(() => import('./pages/Legal'));
const EnhancedContact = React.lazy(() => import('./components/EnhancedContact'));

// New pages from incoming branch

// New 2029 service imports
const UltimateServicesShowcase2029 = React.lazy(() => import('./pages/UltimateServicesShowcase2029'));

// Sitemap-aligned pages
const AiSolutions = React.lazy(() => import('./pages/AiSolutions'));
const SolutionsEnterprise = React.lazy(() => import('./pages/solutions/Enterprise'));
const SolutionsHealthcare = React.lazy(() => import('./pages/solutions/Healthcare'));

// Our new innovative services pages
const InnovativeServicesShowcase2029 = createLazyComponent(() => import('./pages/InnovativeServicesShowcase2029'));
const ComprehensivePricingGuide2029 = createLazyComponent(() => import('./pages/ComprehensivePricingGuide2029'));
const ComprehensiveServicesShowcase2029 = createLazyComponent(() => import('./pages/ComprehensiveServicesShowcase2029'));
const AIPoweredBusinessAutomation = createLazyComponent(() => import('./pages/AIPoweredBusinessAutomation'));
const QuantumComputingServices2029 = createLazyComponent(() => import('./pages/QuantumComputingServices2029'));

// Innovative services showcase 2025
const InnovativeServicesShowcase2025 = React.lazy(() => import('./pages/InnovativeServicesShowcase2025'));

// Service pages - only import existing ones
const CloudDevOps = React.lazy(() => import('./pages/services/CloudDevOps'));
const DigitalTwin = React.lazy(() => import('./pages/services/DigitalTwin'));
const DataAnalytics = React.lazy(() => import('./pages/services/DataAnalytics'));
const ITInfrastructure = React.lazy(() => import('./pages/services/ITInfrastructure'));
const AIBusinessIntelligence = React.lazy(() => import('./pages/services/AIBusinessIntelligence'));
const AISalesCopilot = React.lazy(() => import('./pages/services/AISalesCopilot'));
const CloudFinOpsOptimizer = React.lazy(() => import('./pages/services/CloudFinOpsOptimizer'));
const AIComplianceAssistant = React.lazy(() => import('./pages/services/AIComplianceAssistant'));
const AIAutoEmailResponder = React.lazy(() => import('./pages/services/AIAutoEmailResponder'));
const CustomerFeedbackSurveys = React.lazy(() => import('./pages/services/CustomerFeedbackSurveys'));
const AIComplianceCopilot = React.lazy(() => import('./pages/services/AIComplianceCopilot'));
const LLMContentStudio = React.lazy(() => import('./pages/services/LLMContentStudio'));
const FinOpsAdvisor = React.lazy(() => import('./pages/services/FinOpsAdvisor'));

// Newly added concrete micro SaaS/AI services
const AiLeadScoring = React.lazy(() => import('./pages/services/AiLeadScoring'));
const WebsiteAiChatbot = React.lazy(() => import('./pages/services/WebsiteAiChatbot'));
const RagSearch = React.lazy(() => import('./pages/services/RagSearch'));
const MlopsPipeline = React.lazy(() => import('./pages/services/MlopsPipeline'));
const EcommercePersonalization = React.lazy(() => import('./pages/services/EcommercePersonalization'));
const ReturnsManagementSaaS = React.lazy(() => import('./pages/services/ReturnsManagementSaaS'));

// Newly created service pages (this commit)
const VendorRiskManagement = React.lazy(() => import('./pages/services/VendorRiskManagement'));
const AISEOOptimizer = React.lazy(() => import('./pages/services/AISEOOptimizer'));
const SaaSChurnPredictor = React.lazy(() => import('./pages/services/SaaSChurnPredictor'));
const AIIncidentPostmortems = React.lazy(() => import('./pages/services/AIIncidentPostmortems'));

// New services added in this iteration
const APIMonitoringSaaS = React.lazy(() => import('./pages/services/APIMonitoringSaaS'));
const GDPRCookieCompliance = React.lazy(() => import('./pages/services/GDPRCookieCompliance'));
const AIProofreadingStudio = React.lazy(() => import('./pages/services/AIProofreadingStudio'));

// Catalog page
const ServicesCatalog = React.lazy(() => import('./pages/ServicesCatalog'));

// Additional service pages
const DigitalTransformation = React.lazy(() => import('./pages/services/DigitalTransformation'));
const ITConsulting = React.lazy(() => import('./pages/services/ITConsulting'));
const GreenIT = React.lazy(() => import('./pages/services/GreenIT'));
const QuantumComputing = React.lazy(() => import('./pages/services/QuantumComputing'));
const SpaceTech = React.lazy(() => import('./pages/services/SpaceTech'));

// New AI Services
const AICybersecuritySuite = React.lazy(() => import('./pages/services/AICybersecuritySuite'));
const QuantumAIPlatform = React.lazy(() => import('./pages/services/QuantumAIPlatform'));
const AIHealthcareAnalytics = React.lazy(() => import('./pages/services/AIHealthcareAnalytics'));
const AIWorkflowOrchestrator = React.lazy(() => import('./pages/services/AIWorkflowOrchestrator'));
const AIDataGovernance = React.lazy(() => import('./pages/services/AIDataGovernance'));
const EdgeComputingPlatform = React.lazy(() => import('./pages/services/EdgeComputingPlatform'));
const AICustomerSuccessPlatform = React.lazy(() => import('./pages/services/AICustomerSuccessPlatform'));
const IncidentResponsePlatform = React.lazy(() => import('./pages/services/IncidentResponsePlatform'));

// New innovative micro SaaS services
const AIProjectManagement = React.lazy(() => import('./pages/services/AIProjectManagement'));

// Additional innovative services
const AIBusinessIntelligencePlatform = React.lazy(() => import('./pages/services/AIBusinessIntelligencePlatform'));
const AIFinancialTradingPlatform = React.lazy(() => import('./pages/services/AIFinancialTradingPlatform'));
const AISupplyChainOptimization = React.lazy(() => import('./pages/services/AISupplyChainOptimization'));
const AIHRPlatform = React.lazy(() => import('./pages/services/AIHRPlatform'));
const AIMarketingAutomation = React.lazy(() => import('./pages/services/AIMarketingAutomation'));
const AILegalResearchPlatform = React.lazy(() => import('./pages/services/AILegalResearchPlatform'));
const AIEducationPlatform = React.lazy(() => import('./pages/services/AIEducationPlatform'));
const Status = React.lazy(() => import('./pages/Status'));
const Demo = React.lazy(() => import('./pages/Demo'));

// Simple placeholder pages for missing ones
const Community = React.lazy(() => import('./pages/Community'));
const Documentation = React.lazy(() => import('./pages/Documentation'));
const Training = React.lazy(() => import('./pages/Training'));
const Support = React.lazy(() => import('./pages/Support'));
const Accessibility = React.lazy(() => import('./pages/Accessibility'));
const Security = React.lazy(() => import('./pages/Security'));
const Compliance = React.lazy(() => import('./pages/Compliance'));
const OnsiteSupport = React.lazy(() => import('./pages/OnsiteSupport'));

// Advanced Innovative Services 2025
const AdvancedInnovativeServices2025 = lazy(() => import('./pages/AdvancedInnovativeServices2025'));

// Comprehensive Innovative Services Showcase
const ComprehensiveInnovativeServicesShowcase = lazy(() => import('./pages/ComprehensiveInnovativeServicesShowcase'));

// Missing pages from analysis
const QuantumNeuralNetworkPlatform = lazy(() => import('./pages/QuantumNeuralNetworkPlatform'));
const AutonomousBusinessOperationsPlatform = lazy(() => import('./pages/AutonomousBusinessOperationsPlatform'));
const AIPoweredITAssetManagement = lazy(() => import('./pages/AIPoweredITAssetManagement'));
const SOC2ComplianceAutomation = lazy(() => import('./pages/SOC2ComplianceAutomation'));
const AIAutonomousResearchAssistant = lazy(() => import('./pages/AIAutonomousResearchAssistant'));
const FiveGEnterpriseSolutions = lazy(() => import('./pages/5GEnterpriseSolutions'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const HelpCenter = lazy(() => import('./pages/HelpCenter'));
const NewServices = lazy(() => import('./pages/NewServices'));

// Additional missing pages

// Company information pages
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Mission = lazy(() => import('./pages/Mission'));
const Team = lazy(() => import('./pages/Team'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Careers = lazy(() => import('./pages/Careers'));
const Partners = lazy(() => import('./pages/Partners'));
const Blog = lazy(() => import('./pages/Blog'));
const News = lazy(() => import('./pages/News'));

// Service detail pages
const ServicesOverview = lazy(() => import('./pages/services/ServicesOverview'));
const AIAutonomousSystems = lazy(() => import('./pages/services/AIAutonomousSystems'));
const QuantumTechnology = lazy(() => import('./pages/services/QuantumTechnology'));
const Cybersecurity = lazy(() => import('./pages/services/Cybersecurity'));
const ITInfrastructure = lazy(() => import('./pages/services/ITInfrastructure'));
const MicroSAASSolutions = lazy(() => import('./pages/services/MicroSAASSolutions'));
const IndustrySolutions = lazy(() => import('./pages/services/IndustrySolutions'));
const InnovativeNewServices = lazy(() => import('./pages/services/InnovativeNewServices'));
const SpecializedITInfrastructure = lazy(() => import('./pages/services/SpecializedITInfrastructure'));
const InnovativeMicroSaasServices = lazy(() => import('./pages/InnovativeMicroSaasServices'));
const ComprehensiveInnovativeServices = lazy(() => import('./pages/ComprehensiveInnovativeServices'));
const ComprehensiveServicesOverview = lazy(() => import('./pages/ComprehensiveServicesOverview'));
const EnhancedServicesShowcase = lazy(() => import('./pages/EnhancedServicesShowcase'));
const InnovativeServicesShowcase = lazy(() => import('./pages/InnovativeServicesShowcase'));

// 2025 Advanced Innovative Services
const ComprehensiveInnovativeServices2025 = lazy(() => import('./pages/ComprehensiveInnovativeServices2025'));
const NextGenMicroSaasServices2025 = lazy(() => import('./pages/NextGenMicroSaasServices2025'));
const AdvancedInnovativeServices2025 = lazy(() => import('./pages/AdvancedInnovativeServices2025'));

// Solutions pages
const EnterpriseSolutions = lazy(() => import('./pages/solutions/Enterprise'));
const HealthcareSolutions = lazy(() => import('./pages/solutions/Healthcare'));

// Additional missing pages to fix broken links
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Cookies = lazy(() => import('./pages/Cookies'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Events = lazy(() => import('./pages/Events'));
const Webinars = lazy(() => import('./pages/Webinars'));
const WhitePapers = lazy(() => import('./pages/WhitePapers'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const Support = lazy(() => import('./pages/HelpCenter'));
const Docs = lazy(() => import('./pages/HelpCenter'));
const Marketplace = lazy(() => import('./pages/Marketplace'));
const Community = lazy(() => import('./pages/CommunityPage'));

// AI Autonomous Service pages
const AIAutonomousBusinessManager = lazy(() => import('./pages/services/AIAutonomousBusinessManager'));
const AIAutonomousBusinessPlatform = lazy(() => import('./pages/services/AIAutonomousBusinessPlatform'));
const AIAutonomousCodeReview = lazy(() => import('./pages/services/AIAutonomousCodeReview'));
const AIAutonomousCreativeDirector = lazy(() => import('./pages/services/AIAutonomousCreativeDirector'));
const AIAutonomousData = lazy(() => import('./pages/services/AIAutonomousData'));
const AIAutonomousDecisionEngine = lazy(() => import('./pages/services/AIAutonomousDecisionEngine'));
const AIAutonomousDecisionPlatform = lazy(() => import('./pages/services/AIAutonomousDecisionPlatform'));
const AIAutonomousDevOps = lazy(() => import('./pages/services/AIAutonomousDevOps'));
const AIAutonomousEducationProfessor = lazy(() => import('./pages/services/AIAutonomousEducationProfessor'));
const AIAutonomousHealthcarePhysician = lazy(() => import('./pages/services/AIAutonomousHealthcarePhysician'));
const AIAutonomousLearningSystem = lazy(() => import('./pages/services/AIAutonomousLearningSystem'));
const AIAutonomousLegalCounsel = lazy(() => import('./pages/services/AIAutonomousLegalCounsel'));
const AIAutonomousLogistics = lazy(() => import('./pages/services/AIAutonomousLogistics'));
const AIAutonomousManufacturing = lazy(() => import('./pages/services/AIAutonomousManufacturing'));
const AIAutonomousResearch = lazy(() => import('./pages/services/AIAutonomousResearch'));
const AIAutonomousRobotics = lazy(() => import('./pages/services/AIAutonomousRobotics'));
const AIAutonomousScientificResearcher = lazy(() => import('./pages/services/AIAutonomousScientificResearcher'));
const AIAutonomousSecurity = lazy(() => import('./pages/services/AIAutonomousSecurity'));
const AIAutonomousSystemsPlatform = lazy(() => import('./pages/services/AIAutonomousSystemsPlatform'));
const AIAutonomousTesting = lazy(() => import('./pages/services/AIAutonomousTesting'));
const AIAutonomousVehiclePlatform = lazy(() => import('./pages/services/AIAutonomousVehiclePlatform'));
const AIAutonomousVehicle = lazy(() => import('./pages/services/AIAutonomousVehicle'));
const AIAutonomousVehiclesPlatform = lazy(() => import('./pages/services/AIAutonomousVehiclesPlatform'));
const AIAutonomousVehicles = lazy(() => import('./pages/services/AIAutonomousVehicles'));
const AIAutonomousVentureCapitalist = lazy(() => import('./pages/services/AIAutonomousVentureCapitalist'));

// AI Content Generation pages
const AIContentGenerationAutomation = lazy(() => import('./pages/services/AIContentGenerationAutomation'));
const AIContentGenerationPro = lazy(() => import('./pages/services/AIContentGenerationPro'));
const AIConsciousnessEvolution = lazy(() => import('./pages/services/AIConsciousnessEvolution'));

// Enhanced AI service pages
const AIBusinessIntelligenceElite = lazy(() => import('./pages/services/AIBusinessIntelligenceElite'));
const AIBusinessIntelligenceSuite = lazy(() => import('./pages/services/AIBusinessIntelligenceSuite'));

// Loading spinner component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-500"></div>
  </div>
);

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useScrollToTop();

function App() {
  return (
    <EnhancedErrorBoundary>
      <EnhancedAccessibility />
      <PerformanceMonitor />
              <ThemeProvider>
          <WhitelabelProvider>
            <Router>
              <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">

                {/* Enhanced SEO */}
                <EnhancedSEO 
                  title="Zion Tech Group - AI-Powered Technology Solutions & Enterprise Services"
                  description="Leading provider of AI-powered technology solutions, quantum computing, cybersecurity, and enterprise digital transformation services. Transform your business with cutting-edge technology."
                  keywords="AI solutions, quantum computing, cybersecurity, digital transformation, enterprise technology, machine learning, cloud services, IT infrastructure"
                  type="website"
                  url="/"
                  canonicalUrl="https://ziontechgroup.com"
                  image="https://ziontechgroup.com/og-image.jpg"
                />
                
                <Header />
                <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
                
                <main id="main-content" className="pt-20">
                  <Suspense fallback={<LoadingSpinner />}>
                    <Routes>
                      {/* Main Routes */}
                      <Route path="/" element={<Home />} />
                      <Route path="/home" element={<Home />} />
                      <Route path="/services" element={<Services />} />
                      <Route path="/ai-solutions" element={<AISolutions />} />
                      <Route path="/services-showcase" element={<ServicesShowcase />} />
                      <Route path="/innovative-services-showcase" element={<InnovativeServicesShowcase />} />
                      <Route path="/comprehensive-innovative-services-2025" element={<ComprehensiveInnovativeServices2025 />} />
                      <Route path="/ai-matcher" element={<AIMatcherPage />} />
                      <Route path="/talent-directory" element={<TalentDirectory />} />
                      <Route path="/talents" element={<TalentsPage />} />
                      <Route path="/emerging-tech" element={<EmergingTech />} />
                      
                      {/* New innovative service routes */}
                      <Route path="/ai-workflow-automation" element={<AIWorkflowAutomation />} />
                      <Route path="/blockchain-enterprise-solutions" element={<BlockchainEnterpriseSolutions />} />
                      <Route path="/iot-data-analytics" element={<IoTDataAnalytics />} />
                      
                      {/* Next-Generation Innovative Services 2025 */}
                      <Route path="/next-gen-innovative-services-2025" element={<NextGenInnovativeServices2025 />} />
                      
                      {/* Additional innovative micro SAAS service routes */}
                      <Route path="/services/ai-legal-document-automation" element={<AILegalDocumentAutomation />} />
                      <Route path="/services/ai-healthcare-analytics" element={<AIHealthcareAnalytics />} />
                      <Route path="/services/ai-financial-trading" element={<AIFinancialTrading />} />
                      <Route path="/services/ai-supply-chain-optimization" element={<AISupplyChainOptimization />} />
                      <Route path="/services/ai-customer-service-automation" element={<AICustomerServiceAutomation />} />
                      
                      {/* Additional innovative service routes */}
                      <Route path="/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                      <Route path="/iot-management-platform" element={<IoTManagementPlatform />} />
                      <Route path="/blockchain-defi-solutions" element={<BlockchainDeFiSolutions />} />
                      
                      {/* Advanced Innovative Services 2025 */}
                      <Route path="/advanced-innovative-services-2025" element={<AdvancedInnovativeServices2025 />} />
                      
                      {/* Comprehensive Innovative Services Showcase */}
                      <Route path="/comprehensive-innovative-services-showcase" element={<ComprehensiveInnovativeServicesShowcase />} />
                      
                      {/* Solutions Routes */}
                      <Route path="/services/enterprise" element={<EnterpriseSolutions />} />
                      <Route path="/solutions/healthcare" element={<HealthcareSolutions />} />
                      
                      {/* Legacy route redirects for SEO */}
                      <Route path="/comprehensive-services" element={<ServicesPage />} />
                      <Route path="/services-comparison" element={<ServicesPage />} />
                    </Routes>
                  </Suspense>
                </main>
                
                <Footer />
                <SonnerToaster />
                
                {/* Enhanced Accessibility Controls */}
                <EnhancedAccessibility position="bottom-right" />
                
                {/* AI Chatbot - Always Available */}
                <AIChatbot />
                
                {/* Collaborative Text Editor - Development Mode */}
                {import.meta.env.DEV && (
                  <div className="fixed bottom-24 left-6 z-40 w-96">
                    <CollaborativeTextEditor
                      roomId="dev-editor"
                      userId="dev-user"
                      userName="Developer"
                      initialContent="Welcome to the collaborative text editor! Start typing to see AI suggestions and real-time collaboration features."
                      enableAI={true}
                      enableCollaboration={true}
                      enableVersioning={true}
                    />
                  </div>
                )}
                
                {/* AI Code Generator - Development Mode */}
                {import.meta.env.DEV && (
                  <div className="fixed bottom-24 right-6 z-40 w-96">
                    <AICodeGenerator />
                  </div>
                )}
                
                {/* Development Dashboards */}
                {import.meta.env.DEV && (
                  <>
                    {/* Performance Dashboard */}
                    <div className="fixed top-4 left-4 z-40">
                      <PerformanceDashboard />
                    </div>
                    
                    {/* Analytics Dashboard */}
                    <div className="fixed top-4 right-4 z-40">
                      <AnalyticsDashboard />
                    </div>
                    
                    {/* Enterprise Dashboard */}
                    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40">
                      <EnterpriseDashboard />
                    </div>
                    
                    {/* Security & Compliance Dashboard */}
                    <div className="fixed top-4 right-1/2 transform translate-x-1/2 z-40">
                      <SecurityComplianceDashboard />
                    </div>
                    
                    {/* Machine Learning Dashboard */}
                    <div className="fixed top-4 right-4 z-40">
                      <MachineLearningDashboard />
                    </div>
                  </>
                )}
                
                {/* Enhanced Performance Monitor - Always Available */}
                <PerformanceMonitor />
                
                {/* Link Health Monitor - Development Mode */}
                {import.meta.env.DEV && (
                  <LinkHealthMonitor
                    links={[
                      'https://ziontechgroup.com',
                      'https://www.linkedin.com/company/ziontechgroup',
                      'https://twitter.com/ziontechgroup',
                      'https://github.com/ziontechgroup',
                      'https://www.youtube.com/@ziontechgroup'
                    ]}
                    autoCheck={true}
                    checkInterval={600000} // 10 minutes
                    timeout={5000} // 5 seconds
                  />
                )}
              </div>
            </PerformanceOptimizer>
          </Router>
        </WhitelabelProvider>
      </ThemeProvider>
    </EnhancedErrorBoundary>
  );
}

export default App;