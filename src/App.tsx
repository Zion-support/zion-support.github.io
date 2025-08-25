import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import { AccessibilityControls } from './components/AccessibilityControls';
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

// Enhanced lazy loading with preloading hints and better chunking
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const AISolutions = lazy(() => import('./pages/AISolutions'));
const ServicesShowcase = lazy(() => import('./pages/ServicesShowcase'));
const AIMatcherPage = lazy(() => import('./pages/AIMatcher'));
const TalentDirectory = lazy(() => import('./pages/TalentDirectory'));
const TalentsPage = lazy(() => import('./pages/TalentsPage'));
const EmergingTech = lazy(() => import('./pages/EmergingTech'));

// Service pages - grouped for better chunking
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Mission = lazy(() => import('./pages/Mission'));
const Team = lazy(() => import('./pages/Team'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Careers = lazy(() => import('./pages/Careers'));
const Partners = lazy(() => import('./pages/Partners'));
const Blog = lazy(() => import('./pages/Blog'));
const News = lazy(() => import('./pages/News'));

// 404 Page
const NotFound = lazy(() => import('./pages/NotFound'));

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

// New Innovative Services
const AIWorkflowAutomation = lazy(() => import('./pages/services/AIWorkflowAutomation'));
const AICustomerExperiencePlatform = lazy(() => import('./pages/services/AICustomerExperiencePlatform'));
const BlockchainSupplyChainTransparency = lazy(() => import('./pages/services/BlockchainSupplyChainTransparency'));

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

// Enhanced Loading Component with better accessibility
const LoadingSpinner = () => (
  <div 
    className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900"
    role="status"
    aria-label="Loading Zion Tech Group application"
  >
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

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useScrollToTop();

  return (
    <EnhancedErrorBoundary>
      <EnhancedAccessibility />
      <PerformanceMonitor />
      <ThemeProvider>
        <WhitelabelProvider>
          <Router>
            <PerformanceOptimizer>
              <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
                {/* Enhanced SEO */}
                <EnhancedSEO 
                  title="Zion Tech Group - AI-Powered Technology Solutions & Enterprise Services"
                  description="Leading provider of AI-powered technology solutions, quantum computing, cybersecurity, and enterprise digital transformation services. Transform your business with cutting-edge technology."
                  keywords="AI solutions, quantum computing, cybersecurity, digital transformation, enterprise technology, machine learning, cloud services, IT infrastructure"
                  type="website"
                  url="https://ziontechgroup.com"
                />
                
                <Header />
                <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
                
                <main className="pt-20">
                  <Suspense fallback={<LoadingSpinner />}>
                    <Routes>
                      {/* Main Routes */}
                      <Route path="/" element={<Home />} />
                      <Route path="/services" element={<Services />} />
                      <Route path="/ai-solutions" element={<AISolutions />} />
                      <Route path="/services-showcase" element={<ServicesShowcase />} />
                      <Route path="/ai-matcher" element={<AIMatcherPage />} />
                      <Route path="/talent-directory" element={<TalentDirectory />} />
                      <Route path="/talents" element={<TalentsPage />} />
                      <Route path="/emerging-tech" element={<EmergingTech />} />
                      
                      {/* Service Routes */}
                      <Route path="/ai-services" element={<AIServices />} />
                      <Route path="/cloud-devops" element={<CloudDevOps />} />
                      <Route path="/enterprise-solutions" element={<EnterpriseSolutionsPage />} />
                      <Route path="/digital-transformation" element={<DigitalTransformation />} />
                      
                      {/* Missing pages from analysis */}
                      <Route path="/quantum-neural-network-platform" element={<QuantumNeuralNetworkPlatform />} />
                      <Route path="/autonomous-business-operations-platform" element={<AutonomousBusinessOperationsPlatform />} />
                      <Route path="/ai-powered-it-asset-management" element={<AIPoweredITAssetManagement />} />
                      <Route path="/soc2-compliance-automation" element={<SOC2ComplianceAutomation />} />
                      <Route path="/ai-autonomous-research-assistant" element={<AIAutonomousResearchAssistant />} />
                      <Route path="/5g-enterprise-solutions" element={<FiveGEnterpriseSolutions />} />
                      <Route path="/case-studies" element={<CaseStudies />} />
                      <Route path="/help" element={<HelpCenter />} />
                      
                      {/* Company Routes */}
                      <Route path="/about" element={<About />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/mission" element={<Mission />} />
                      <Route path="/team" element={<Team />} />
                      <Route path="/pricing" element={<Pricing />} />
                      <Route path="/careers" element={<Careers />} />
                      <Route path="/partners" element={<Partners />} />
                      <Route path="/blog" element={<Blog />} />
                      <Route path="/news" element={<News />} />
                      
                      {/* Service Detail Routes */}
                      <Route path="/services-overview" element={<ServicesOverview />} />
                      <Route path="/services/ai-autonomous-systems" element={<AIAutonomousSystems />} />
                      <Route path="/services/quantum-technology" element={<QuantumTechnology />} />
                      <Route path="/services/cybersecurity" element={<Cybersecurity />} />
                      <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                      <Route path="/services/micro-saas-solutions" element={<MicroSAASSolutions />} />
                      <Route path="/services/industry-solutions" element={<IndustrySolutions />} />
                      <Route path="/services/innovative-new-services" element={<InnovativeNewServices />} />
                      <Route path="/services/specialized-it-infrastructure" element={<SpecializedITInfrastructure />} />
                      <Route path="/innovative-micro-saas-services" element={<InnovativeMicroSaasServices />} />
                      <Route path="/comprehensive-innovative-services" element={<ComprehensiveInnovativeServices />} />
                      
                      {/* New Innovative Service Routes */}
                      <Route path="/services/ai-workflow-automation" element={<AIWorkflowAutomation />} />
                      <Route path="/services/ai-customer-experience-platform" element={<AICustomerExperiencePlatform />} />
                      <Route path="/services/blockchain-supply-chain-transparency" element={<BlockchainSupplyChainTransparency />} />
                      
                      {/* Solutions Routes */}
                      <Route path="/services/enterprise" element={<EnterpriseSolutions />} />
                      <Route path="/solutions/healthcare" element={<HealthcareSolutions />} />
                      
                      {/* Legacy route redirects for SEO */}
                      <Route path="/comprehensive-services" element={<Services />} />
                      <Route path="/services-comparison" element={<Services />} />
                      <Route path="/it-onsite-services" element={<Services />} />

                      {/* 404 Route */}
                      <Route path="*" element={<NotFound />} />
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
                    
                    {/* Service routes */}
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/mission" element={<Mission />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/services-overview" element={<ServicesOverview />} />
                    <Route path="/services/ai-autonomous-systems" element={<AIAutonomousSystems />} />
                    <Route path="/services/quantum-technology" element={<QuantumTechnology />} />
                    <Route path="/services/cybersecurity" element={<Cybersecurity />} />
                    <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                    <Route path="/services/micro-saas-solutions" element={<MicroSAASSolutions />} />
                    <Route path="/services/industry-solutions" element={<IndustrySolutions />} />
                  </Routes>
                </Suspense>
              </main>
              
              <Footer />
              <SonnerToaster />
              
              {/* Enhanced Accessibility Controls */}
              <AccessibilityControls position="bottom-right" />
            </div>
          </Router>
        </WhitelabelProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;