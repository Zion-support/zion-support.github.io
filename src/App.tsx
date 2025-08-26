import React, { lazy, useState } from 'react';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from "./components/ThemeProvider";
import { useScrollToTop } from "./hooks";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import { Toaster } from "./components/ui/toaster";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import { EnhancedErrorBoundary } from './components/EnhancedErrorBoundary';
import EnhancedSEO from './components/EnhancedSEO';
import EnhancedAccessibility from './components/EnhancedAccessibility';
import PerformanceMonitor from './components/PerformanceMonitor';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ContentQualityEnhancer from './components/ContentQualityEnhancer';
import BrokenLinkFixer from './components/BrokenLinkFixer';
import WebsiteImprovementDashboard from './components/WebsiteImprovementDashboard';
import AIChatbot from './components/AIChatbot';
import CollaborativeTextEditor from './components/CollaborativeTextEditor';
import AICodeGenerator from './components/AICodeGenerator';
import PerformanceDashboard from './components/PerformanceDashboard';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import EnterpriseDashboard from './components/EnterpriseDashboard';
import SecurityComplianceDashboard from './components/SecurityComplianceDashboard';
import MachineLearningDashboard from './components/MachineLearningDashboard';
import { BrowserRouter as Router } from 'react-router-dom';

// Enhanced lazy loading with preloading hints
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const AIServices = lazy(() => import('./pages/AIServices'));
const CloudDevOps = lazy(() => import('./pages/CloudDevOps'));
const MicroSaasServices = lazy(() => import('./pages/MicroSaasServices'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Careers = lazy(() => import('./pages/Careers'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const FAQ = lazy(() => import('./pages/FAQ'));
const HelpCenter = lazy(() => import('./pages/HelpCenter'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Service pages
const ServicesOverview = lazy(() => import('./pages/services/ServicesOverview'));
const AIBusinessIntelligence = lazy(() => import('./pages/services/AIBusinessIntelligence'));
const AIMarketingAutomation = lazy(() => import('./pages/services/AIMarketingAutomation'));
const AIWorkflowAutomation = lazy(() => import('./pages/services/AIWorkflowAutomation'));
const BlockchainEnterpriseSolutions = lazy(() => import('./pages/services/BlockchainEnterpriseSolutions'));
const IoTDataAnalytics = lazy(() => import('./pages/services/IoTDataAnalytics'));
const IoTManagementPlatform = lazy(() => import('./pages/services/IoTManagementPlatform'));
const BlockchainDeFiSolutions = lazy(() => import('./pages/services/BlockchainDeFiSolutions'));
const QuantumTechnology = lazy(() => import('./pages/services/QuantumTechnology'));
const Cybersecurity = lazy(() => import('./pages/services/Cybersecurity'));
const ITInfrastructure = lazy(() => import('./pages/services/ITInfrastructure'));
const MicroSAASSolutions = lazy(() => import('./pages/services/MicroSAASSolutions'));
const IndustrySolutions = lazy(() => import('./pages/services/IndustrySolutions'));
const InnovativeNewServices = lazy(() => import('./pages/services/InnovativeNewServices'));
const SpecializedITInfrastructure = lazy(() => import('./pages/services/SpecializedITInfrastructure'));

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
const AIAutonomousSystems = lazy(() => import('./pages/services/AIAutonomousSystems'));
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

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useScrollToTop();
  return (
    <EnhancedErrorBoundary>
      <PerformanceMonitor />
      <ThemeProvider>
        <WhitelabelProvider>
          <Router>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
              <Header />
              <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
              
              <main className="pt-16">
                <Suspense fallback={
                  <div className="min-h-screen flex items-center justify-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500"></div>
                  </div>
                }>
                  <Routes>
                    {/* Home Route */}
                    <Route path="/" element={<Home />} />
                    
                    {/* Main Service Routes */}
                    <Route path="/services" element={<Services />} />
                    <Route path="/services-overview" element={<ServicesOverview />} />
                    <Route path="/ai-services" element={<AIServices />} />
                    <Route path="/cloud-devops" element={<CloudDevOps />} />
                    <Route path="/micro-saas-services" element={<MicroSaasServices />} />
                    
                    {/* Service Detail Routes */}
                    <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                    <Route path="/services/ai-marketing-automation" element={<AIMarketingAutomation />} />
                    <Route path="/services/ai-workflow-automation" element={<AIWorkflowAutomation />} />
                    <Route path="/services/blockchain-enterprise-solutions" element={<BlockchainEnterpriseSolutions />} />
                    <Route path="/services/iot-data-analytics" element={<IoTDataAnalytics />} />
                    <Route path="/services/iot-management-platform" element={<IoTManagementPlatform />} />
                    <Route path="/services/blockchain-defi-solutions" element={<BlockchainDeFiSolutions />} />
                    <Route path="/services/quantum-technology" element={<QuantumTechnology />} />
                    <Route path="/services/cybersecurity" element={<Cybersecurity />} />
                    <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                    <Route path="/services/micro-saas-solutions" element={<MicroSAASSolutions />} />
                    <Route path="/services/industry-solutions" element={<IndustrySolutions />} />
                    <Route path="/services/innovative-new-services" element={<InnovativeNewServices />} />
                    <Route path="/services/specialized-it-infrastructure" element={<SpecializedITInfrastructure />} />
                    
                    {/* AI Autonomous Service routes */}
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
                    <Route path="/ai-autonomous-systems" element={<AIAutonomousSystems />} />
                    <Route path="/ai-autonomous-systems-platform" element={<AIAutonomousSystemsPlatform />} />
                    <Route path="/ai-autonomous-testing" element={<AIAutonomousTesting />} />
                    <Route path="/ai-autonomous-vehicle-platform" element={<AIAutonomousVehiclePlatform />} />
                    <Route path="/ai-autonomous-vehicle" element={<AIAutonomousVehicle />} />
                    <Route path="/ai-autonomous-vehicles-platform" element={<AIAutonomousVehiclesPlatform />} />
                    <Route path="/ai-autonomous-vehicles" element={<AIAutonomousVehicles />} />
                    <Route path="/ai-autonomous-venture-capitalist" element={<AIAutonomousVentureCapitalist />} />
                    
                    {/* AI Content Generation routes */}
                    <Route path="/ai-content-generation-automation" element={<AIContentGenerationAutomation />} />
                    <Route path="/ai-content-generation-pro" element={<AIContentGenerationPro />} />
                    <Route path="/ai-consciousness-evolution" element={<AIConsciousnessEvolution />} />
                    
                    {/* Enhanced AI service routes */}
                    <Route path="/ai-business-intelligence-elite" element={<AIBusinessIntelligenceElite />} />
                    <Route path="/ai-business-intelligence-suite" element={<AIBusinessIntelligenceSuite />} />
                    
                    {/* Company Routes */}
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/help" element={<HelpCenter />} />
                    <Route path="/sitemap" element={<Sitemap />} />
                    
                    {/* 404 Error Route - Must be last */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </main>
              
              <Footer />
              <SonnerToaster />
            </div>
                
            {/* Enhanced Accessibility Controls */}
            <EnhancedAccessibility 
              position="bottom-right" 
              showOnLoad={false}
              enableKeyboardShortcuts={true}
              enableVoiceCommands={import.meta.env.DEV}
            />
            
            {/* Website Improvement Tools */}
            <ContentQualityEnhancer />
            <BrokenLinkFixer />
            <WebsiteImprovementDashboard />
            
            {/* AI Chatbot - Always Available */}
            <AIChatbot />
            
            {/* Scroll to Top Button */}
            <ScrollToTop />
            
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
                <div className="fixed top-20 left-4 z-40">
                  <EnterpriseDashboard />
                </div>
                
                {/* Security & Compliance Dashboard */}
                <div className="fixed top-20 right-4 z-40">
                  <SecurityComplianceDashboard />
                </div>
                
                {/* Machine Learning Dashboard */}
                <div className="fixed top-36 left-4 z-40">
                  <MachineLearningDashboard />
                </div>
              </>
            )}
          </Router>
        </WhitelabelProvider>
      </ThemeProvider>
    </EnhancedErrorBoundary>
  );
};

export default App;