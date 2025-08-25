import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Sidebar from './components/Sidebar';
import { AccessibilityControls } from './components/AccessibilityControls';
import { PerformanceDashboard } from './components/PerformanceDashboard';
import { AnalyticsDashboard } from './components/AnalyticsDashboard';
import { AIChatbot } from './components/AIChatbot';
import { CollaborativeTextEditor } from './components/CollaborativeTextEditor';
import { AICodeGenerator } from './components/AICodeGenerator';
import { EnterpriseDashboard } from './components/EnterpriseDashboard';
import { SecurityComplianceDashboard } from './components/SecurityComplianceDashboard';
import { MachineLearningDashboard } from './components/MachineLearningDashboard';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { LinkHealthMonitor } from './components/LinkHealthMonitor';
import { ThemeProvider } from "./components/ThemeProvider";
import { useScrollToTop } from "./hooks";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import { EnhancedErrorBoundary } from './components/EnhancedErrorBoundary';
import { EnhancedSEO } from './components/EnhancedSEO';
import { EnhancedAccessibility } from './components/EnhancedAccessibility';
import { PerformanceMonitor } from './components/PerformanceMonitor';

// Enhanced lazy loading with preloading hints
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const AISolutions = lazy(() => import('./pages/AISolutions'));
const ServicesShowcase = lazy(() => import('./pages/ServicesShowcase'));
const AIMatcherPage = lazy(() => import('./pages/AIMatcher'));
const TalentDirectory = lazy(() => import('./pages/TalentDirectory'));
const TalentsPage = lazy(() => import('./pages/TalentsPage'));
const EmergingTech = lazy(() => import('./pages/EmergingTech'));

// Service pages
const AIServices = lazy(() => import('./pages/AIServices'));
const CloudDevOps = lazy(() => import('./pages/CloudDevOps'));
const EnterpriseSolutionsPage = lazy(() => import('./pages/EnterpriseSolutions'));
const DigitalTransformation = lazy(() => import('./pages/DigitalTransformation'));

// Missing pages from analysis
const QuantumNeuralNetworkPlatform = lazy(() => import('./pages/QuantumNeuralNetworkPlatform'));
const AutonomousBusinessOperationsPlatform = lazy(() => import('./pages/AutonomousBusinessOperationsPlatform'));
const AIPoweredITAssetManagement = lazy(() => import('./pages/AIPoweredITAssetManagement'));
const SOC2ComplianceAutomation = lazy(() => import('./pages/SOC2ComplianceAutomation'));
const AIAutonomousResearchAssistant = lazy(() => import('./pages/AIAutonomousResearchAssistant'));
const FiveGEnterpriseSolutions = lazy(() => import('./pages/5GEnterpriseSolutions'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const HelpCenter = lazy(() => import('./pages/HelpCenter'));

// Additional missing pages
const AccessibilityAuditor = lazy(() => import('./pages/AccessibilityAuditor'));
const AffiliateAttributionHub = lazy(() => import('./pages/AffiliateAttributionHub'));
const AgenticRagHelpdesk = lazy(() => import('./pages/AgenticRagHelpdesk'));

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
const Community = lazy(() => import('./pages/HelpCenter'));

// AI Service specific pages
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
const AIBiomedicalResearch = lazy(() => import('./pages/services/AIBiomedicalResearch'));
const AIBiotechDrugDiscovery = lazy(() => import('./pages/services/AIBiotechDrugDiscovery'));
const AIBlockchainGovernance = lazy(() => import('./pages/services/AIBlockchainGovernance'));
const AIBrainComputerInterface = lazy(() => import('./pages/services/AIBrainComputerInterface'));
const AIBrainInterface = lazy(() => import('./pages/services/AIBrainInterface'));
const AIBusinessIntelligenceElite = lazy(() => import('./pages/services/AIBusinessIntelligenceElite'));
const AIBusinessIntelligencePro = lazy(() => import('./pages/services/AIBusinessIntelligencePro'));
const AIBusinessIntelligenceSuite = lazy(() => import('./pages/services/AIBusinessIntelligenceSuite'));
const AIClimatePredictionEngine = lazy(() => import('./pages/services/AIClimatePredictionEngine'));
const AIClimatePredictionPlatform = lazy(() => import('./pages/services/AIClimatePredictionPlatform'));
const AIClimatePrediction = lazy(() => import('./pages/services/AIClimatePrediction'));
const AICodeGenerationEnterprise = lazy(() => import('./pages/services/AICodeGenerationEnterprise'));
const AIComplianceAutomation = lazy(() => import('./pages/services/AIComplianceAutomation'));
const AIComputerVisionPlatform = lazy(() => import('./pages/services/AIComputerVisionPlatform'));
const AIConsciousnessEvolutionPlatform = lazy(() => import('./pages/services/AIConsciousnessEvolutionPlatform'));
const AIConsciousnessSimulationPlatform = lazy(() => import('./pages/services/AIConsciousnessSimulationPlatform'));
const AIConsciousnessSimulation = lazy(() => import('./pages/services/AIConsciousnessSimulation'));
const AIConsciousnessSimulator = lazy(() => import('./pages/services/AIConsciousnessSimulator'));
const AIContentCreationRevolution = lazy(() => import('./pages/services/AIContentCreationRevolution'));
const AIContentCreation = lazy(() => import('./pages/services/AIContentCreation'));
const AIContentFactory = lazy(() => import('./pages/services/AIContentFactory'));
const AIContentGenerationAutomation = lazy(() => import('./pages/services/AIContentGenerationAutomation'));
const AIContentGenerationPro = lazy(() => import('./pages/services/AIContentGenerationPro'));
const AIConsciousnessEvolution = lazy(() => import('./pages/services/AIConsciousnessEvolution'));

// Loading Component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
    <div className="text-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto" style={{ animationDelay: '-0.5s' }}></div>
      </div>
      <p className="text-cyan-400 text-lg font-medium">Loading Zion Tech Group...</p>
      <p className="text-gray-400 text-sm mt-2">Preparing your experience</p>
    </div>
  </div>
);

const App = () => {
  const [isPerformanceOptimized, setIsPerformanceOptimized] = useState(false);
  const [isLinkHealthMonitored, setIsLinkHealthMonitored] = useState(false);
  useScrollToTop();

  return (
    <EnhancedErrorBoundary>
      <EnhancedSEO />
      <EnhancedAccessibility />
      <PerformanceMonitor />
      <ThemeProvider>
        <WhitelabelProvider>
          <Router>
            <div className="App min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
              <Header />
              <Sidebar isOpen={false} onClose={() => {}} />
              
              {/* Main Content with enhanced Suspense */}
              <main className="ml-64 pt-20 min-h-screen">
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/ai-solutions" element={<AISolutions />} />
                    <Route path="/services-showcase" element={<ServicesShowcase />} />
                    <Route path="/match" element={<AIMatcherPage />} />
                    <Route path="/talent" element={<TalentDirectory />} />
                    <Route path="/talents" element={<TalentsPage />} />
                    <Route path="/emerging-tech" element={<EmergingTech />} />
                    <Route path="/comprehensive-services" element={<Services />} />
                    <Route path="/services-comparison" element={<Services />} />
                    <Route path="/it-onsite-services" element={<Services />} />
                    
                    {/* Newly added explicit service routes */}
                    <Route path="/ai-services" element={<AIServices />} />
                    <Route path="/cloud-devops" element={<CloudDevOps />} />
                    <Route path="/enterprise-solutions" element={<EnterpriseSolutionsPage />} />
                    <Route path="/digital-transformation" element={<DigitalTransformation />} />
                    
                    {/* Our enhanced service routes */}
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/mission" element={<Mission />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/partners" element={<Partners />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/services-overview" element={<ServicesOverview />} />
                    <Route path="/services/ai-autonomous-systems" element={<AIAutonomousSystems />} />
                    <Route path="/services/quantum-technology" element={<QuantumTechnology />} />
                    <Route path="/services/cybersecurity" element={<Cybersecurity />} />
                    <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                    <Route path="/services/micro-saas-solutions" element={<MicroSAASSolutions />} />
                    <Route path="/services/industry-solutions" element={<IndustrySolutions />} />
                    
                    {/* Solutions Routes */}
                    <Route path="/solutions/enterprise" element={<EnterpriseSolutions />} />
                    <Route path="/solutions/healthcare" element={<HealthcareSolutions />} />

                    {/* Additional missing pages to fix broken links */}
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/cookies" element={<Cookies />} />
                    <Route path="/case-studies" element={<CaseStudies />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/webinars" element={<Webinars />} />
                    <Route path="/white-papers" element={<WhitePapers />} />
                    <Route path="/testimonials" element={<Testimonials />} />
                    <Route path="/help" element={<HelpCenter />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/docs" element={<Docs />} />
                    <Route path="/marketplace" element={<Marketplace />} />
                    <Route path="/community" element={<Community />} />

                    {/* New missing pages */}
                    <Route path="/accessibility-auditor" element={<AccessibilityAuditor />} />
                    <Route path="/affiliate-attribution-hub" element={<AffiliateAttributionHub />} />
                    <Route path="/agentic-rag-helpdesk" element={<AgenticRagHelpdesk />} />

                    {/* AI Service specific routes */}
                    <Route path="/ai-autonomous-business-manager" element={<AIAutonomousBusinessManager />} />
                    <Route path="/ai-autonomous-business-platform" element={<AIAutonomousBusinessPlatform />} />
                    <Route path="/ai-autonomous-code-review" element={<AIAutonomousCodeReview />} />
                    <Route path="/ai-autonomous-creative-director" element={<AIAutonomousCreativeDirector />} />
                    <Route path="/ai-autonomous-data" element={<AIAutonomousData />} />
                    <Route path="/ai-autonomous-decision-engine" element={<AIAutonomousDecisionEngine />} />
                    <Route path="/ai-autonomous-decision-platform" element={<AIAutonomousDecisionPlatform />} />
                    <Route path="/ai-autonomous-devops" element={<AIAutonomousDevOps />} />
                    <Route path="/ai-autonomous-education-professor" element={<AIAutonomousEducationProfessor />} />
                    <Route path="/ai-autonomous-healthcare-physician" element={<AIAutonomousHealthcarePhysician />} />
                    <Route path="/ai-autonomous-learning-system" element={<AIAutonomousLearningSystem />} />
                    <Route path="/ai-autonomous-legal-counsel" element={<AIAutonomousLegalCounsel />} />
                    <Route path="/ai-autonomous-logistics" element={<AIAutonomousLogistics />} />
                    <Route path="/ai-autonomous-manufacturing" element={<AIAutonomousManufacturing />} />
                    <Route path="/ai-autonomous-research" element={<AIAutonomousResearch />} />
                    <Route path="/ai-autonomous-robotics" element={<AIAutonomousRobotics />} />
                    <Route path="/ai-autonomous-scientific-researcher" element={<AIAutonomousScientificResearcher />} />
                    <Route path="/ai-autonomous-security" element={<AIAutonomousSecurity />} />
                    <Route path="/ai-autonomous-systems-platform" element={<AIAutonomousSystemsPlatform />} />
                    <Route path="/ai-autonomous-testing" element={<AIAutonomousTesting />} />
                    <Route path="/ai-autonomous-vehicle-platform" element={<AIAutonomousVehiclePlatform />} />
                    <Route path="/ai-autonomous-vehicle" element={<AIAutonomousVehicle />} />
                    <Route path="/ai-autonomous-vehicles-platform" element={<AIAutonomousVehiclesPlatform />} />
                    <Route path="/ai-autonomous-vehicles" element={<AIAutonomousVehicles />} />
                    <Route path="/ai-autonomous-venture-capitalist" element={<AIAutonomousVentureCapitalist />} />
                    <Route path="/ai-biomedical-research" element={<AIBiomedicalResearch />} />
                    <Route path="/ai-biotech-drug-discovery" element={<AIBiotechDrugDiscovery />} />
                    <Route path="/ai-blockchain-governance" element={<AIBlockchainGovernance />} />
                    <Route path="/ai-brain-computer-interface" element={<AIBrainComputerInterface />} />
                    <Route path="/ai-brain-interface" element={<AIBrainInterface />} />
                    <Route path="/ai-business-intelligence-elite" element={<AIBusinessIntelligenceElite />} />
                    <Route path="/ai-business-intelligence-pro" element={<AIBusinessIntelligencePro />} />
                    <Route path="/ai-business-intelligence-suite" element={<AIBusinessIntelligenceSuite />} />
                    <Route path="/ai-climate-prediction-engine" element={<AIClimatePredictionEngine />} />
                    <Route path="/ai-climate-prediction-platform" element={<AIClimatePredictionPlatform />} />
                    <Route path="/ai-climate-prediction" element={<AIClimatePrediction />} />
                    <Route path="/ai-code-generation-enterprise" element={<AICodeGenerationEnterprise />} />
                    <Route path="/ai-compliance-automation" element={<AIComplianceAutomation />} />
                    <Route path="/ai-computer-vision-platform" element={<AIComputerVisionPlatform />} />
                    <Route path="/ai-consciousness-evolution-platform" element={<AIConsciousnessEvolutionPlatform />} />
                    <Route path="/ai-consciousness-simulation-platform" element={<AIConsciousnessSimulationPlatform />} />
                    <Route path="/ai-consciousness-simulation" element={<AIConsciousnessSimulation />} />
                    <Route path="/ai-consciousness-simulator" element={<AIConsciousnessSimulator />} />
                    <Route path="/ai-content-creation-revolution" element={<AIContentCreationRevolution />} />
                    <Route path="/ai-content-creation" element={<AIContentCreation />} />
                    <Route path="/ai-content-factory" element={<AIContentFactory />} />
                    <Route path="/ai-content-generation-automation" element={<AIContentGenerationAutomation />} />
                    <Route path="/ai-content-generation-pro" element={<AIContentGenerationPro />} />
                    <Route path="/ai-consciousness-evolution" element={<AIConsciousnessEvolution />} />

                    {/* Additional AI service routes */}
                    <Route path="/ai-autonomous-business-manager-2029" element={<AIAutonomousBusinessManager />} />
                    <Route path="/ai-autonomous-business-platform-2026" element={<AIAutonomousBusinessPlatform />} />
                    <Route path="/ai-business-intelligence-elite-2026" element={<AIBusinessIntelligenceElite />} />
                    <Route path="/ai-business-intelligence-suite-2029" element={<AIBusinessIntelligenceSuite />} />
                    <Route path="/ai-content-generation-automation-2033" element={<AIContentGenerationAutomation />} />
                    <Route path="/ai-content-generation-pro-2029" element={<AIContentGenerationPro />} />
                    <Route path="/ai-consciousness-evolution-2025" element={<AIConsciousnessEvolution />} />
                    <Route path="/ai-consciousness-evolution-2029" element={<AIConsciousnessEvolution />} />

                    {/* Quantum and other technology routes */}
                    <Route path="/quantum-neural-network-platform" element={<QuantumNeuralNetworkPlatform />} />
                    <Route path="/autonomous-business-operations-platform" element={<AutonomousBusinessOperationsPlatform />} />
                    <Route path="/ai-powered-it-asset-management" element={<AIPoweredITAssetManagement />} />
                    <Route path="/quantum-cloud-infrastructure" element={<QuantumTechnology />} />
                    <Route path="/quantum-financial-trading" element={<QuantumTechnology />} />
                    <Route path="/quantum-services" element={<QuantumTechnology />} />
                    <Route path="/space-tech" element={<EmergingTech />} />
                    <Route path="/research-development" element={<EmergingTech />} />
                    <Route path="/enterprise-it" element={<ITInfrastructure />} />
                    <Route path="/micro-saas" element={<MicroSAASSolutions />} />
                    <Route path="/webinars" element={<Webinars />} />
                    <Route path="/white-papers" element={<WhitePapers />} />
                  </Routes>
                </Suspense>
              </main>
              
              <Footer />
              <SonnerToaster />
              
              {/* Enhanced Accessibility Controls */}
              <AccessibilityControls position="bottom-right" />
              
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
            </div>
          </Router>
        </WhitelabelProvider>
      </ThemeProvider>
    </EnhancedErrorBoundary>
  );
};

export default App;