import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
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
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { LinkHealthMonitor } from './components/LinkHealthMonitor';
import { ThemeProvider } from "./components/ThemeProvider";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import { EnhancedErrorBoundary } from './components/EnhancedErrorBoundary';
import EnhancedSEO from './components/EnhancedSEO';
import { EnhancedAccessibility } from './components/EnhancedAccessibility';
import PerformanceMonitor from './components/PerformanceMonitor';
import { ScrollToTop } from './components/ScrollToTop';
import { ContentQualityEnhancer } from './components/ContentQualityEnhancer';
import { BrokenLinkFixer } from './components/BrokenLinkFixer';
import { WebsiteImprovementDashboard } from './components/WebsiteImprovementDashboard';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Pricing = lazy(() => import('./pages/Pricing'));

// New service showcase pages
const AdvancedMicroSaasServicesShowcase2025 = lazy(() => import('./components/services/AdvancedMicroSaasServicesShowcase2025'));
const ComprehensiveServicesOverview2025 = lazy(() => import('./components/services/ComprehensiveServicesOverview2025'));

// Loading spinner component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-500"></div>
  </div>
);

const App: React.FC = () => {
  return (
<<<<<<< HEAD
    <EnhancedErrorBoundary>
      <ThemeProvider>
        <WhitelabelProvider>
          <Router>
            <PerformanceOptimizer
              enableMonitoring={true}
              enableOptimizations={true}
              showMetrics={import.meta.env.DEV}
            >
              <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
                {/* Enhanced SEO */}
                <EnhancedSEO 
                  seoData={{
                    title: "Zion Tech Group - AI-Powered Technology Solutions & Enterprise Services",
                    description: "Leading provider of AI-powered technology solutions, quantum computing, cybersecurity, and enterprise digital transformation services. Transform your business with cutting-edge technology.",
                    keywords: ["AI solutions", "quantum computing", "cybersecurity", "digital transformation", "enterprise technology", "machine learning", "cloud services", "IT infrastructure"],
                    canonicalUrl: "https://ziontechgroup.com",
                    ogImage: "https://ziontechgroup.com/og-image.jpg",
                    ogType: "website",
                    twitterCard: "summary_large_image"
                  }}
                  pageType="home"
                />
=======
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
          <Header />
          
          <main className="pt-20">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                {/* Main Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/pricing" element={<Pricing />} />
>>>>>>> e338302db1b86638fedf4e3a90e3a7895c1470c0
                
                {/* New Service Showcase Routes */}
                <Route path="/advanced-micro-saas-services-2025" element={<AdvancedMicroSaasServicesShowcase2025 />} />
                <Route path="/comprehensive-services-overview-2025" element={<ComprehensiveServicesOverview2025 />} />
                
<<<<<<< HEAD
                <main className="pt-20">
                  <Suspense fallback={<LoadingSpinner />}>
                    <Routes>
                      {/* Main Routes */}
                      <Route path="/" element={<Home />} />
                      <Route path="/services" element={<Services />} />
                      <Route path="/ai-solutions" element={<AISolutions />} />
                      <Route path="/services-showcase" element={<ServicesShowcase />} />
                      <Route path="/innovative-services-showcase" element={<InnovativeServicesShowcase />} />
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
                      <Route path="/new-services" element={<NewServices />} />
                      
                      {/* Additional missing pages */}
                      <Route path="/ai-autonomous-business-manager" element={<AIAutonomousBusinessManager />} />
                      <Route path="/ai-autonomous-business-platform" element={<AIAutonomousBusinessPlatform />} />
                      <Route path="/ai-autonomous-research" element={<AIAutonomousResearch />} />
                      <Route path="/ai-autonomous-systems-platform" element={<AIAutonomousSystemsPlatform />} />
                      <Route path="/ai-autonomous-code-review" element={<AIAutonomousCodeReview />} />
                      <Route path="/ai-autonomous-creative-director" element={<AIAutonomousCreativeDirector />} />
                      
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
                      <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                      <Route path="/services/ai-marketing-automation" element={<AIMarketingAutomation />} />
                      <Route path="/services/quantum-technology" element={<QuantumTechnology />} />
                      <Route path="/services/cybersecurity" element={<Cybersecurity />} />
                      <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                      <Route path="/services/micro-saas-solutions" element={<MicroSAASSolutions />} />
                      <Route path="/services/industry-solutions" element={<IndustrySolutions />} />
                      <Route path="/services/innovative-new-services" element={<InnovativeNewServices />} />
                      <Route path="/services/specialized-it-infrastructure" element={<SpecializedITInfrastructure />} />
                      <Route path="/innovative-micro-saas-services" element={<InnovativeMicroSaasServices />} />
                      <Route path="/comprehensive-innovative-services" element={<ComprehensiveInnovativeServices />} />
                      <Route path="/comprehensive-services-overview" element={<ComprehensiveServicesOverview />} />
                      <Route path="/enhanced-services-showcase" element={<EnhancedServicesShowcase />} />
                      <Route path="/innovative-services-showcase" element={<InnovativeServicesShowcase />} />
                      <Route path="/advanced-services-showcase-2025" element={<AdvancedServicesShowcase2025 />} />
                      
                      {/* New innovative service routes */}
                      <Route path="/ai-workflow-automation" element={<AIWorkflowAutomation />} />
                      <Route path="/blockchain-enterprise-solutions" element={<BlockchainEnterpriseSolutions />} />
                      <Route path="/iot-data-analytics" element={<IoTDataAnalytics />} />
                      
                      {/* Additional innovative service routes */}
                      <Route path="/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                      <Route path="/iot-management-platform" element={<IoTManagementPlatform />} />
                      <Route path="/blockchain-defi-solutions" element={<BlockchainDeFiSolutions />} />
                      
                      {/* Solutions Routes */}
                      <Route path="/services/enterprise" element={<EnterpriseSolutions />} />
                      <Route path="/solutions/healthcare" element={<HealthcareSolutions />} />
                      
                      {/* Legacy route redirects for SEO */}
                      <Route path="/comprehensive-services" element={<Services />} />
                      <Route path="/services-comparison" element={<Services />} />
                      <Route path="/it-onsite-services" element={<Services />} />
                      
                      {/* Additional missing pages to fix broken links */}
                      <Route path="/privacy" element={<Privacy />} />
                      <Route path="/terms" element={<Terms />} />
                      <Route path="/cookies" element={<Cookies />} />
                      <Route path="/faq" element={<FAQ />} />
                      <Route path="/events" element={<Events />} />
                      <Route path="/webinars" element={<Webinars />} />
                      <Route path="/white-papers" element={<WhitePapers />} />
                      <Route path="/testimonials" element={<Testimonials />} />
                      <Route path="/support" element={<Support />} />
                      <Route path="/docs" element={<Docs />} />
                      <Route path="/marketplace" element={<Marketplace />} />
                      <Route path="/community" element={<Community />} />
                      
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
                      <Route path="/ai-autonomous-business-manager-2029" element={<AIAutonomousBusinessManager />} />
                      <Route path="/ai-autonomous-business-platform-2026" element={<AIAutonomousBusinessPlatform />} />
                      <Route path="/ai-business-intelligence-elite-2026" element={<AIBusinessIntelligenceElite />} />
                      <Route path="/ai-business-intelligence-suite-2029" element={<AIBusinessIntelligenceSuite />} />
                      <Route path="/ai-content-generation-automation-2033" element={<AIContentGenerationAutomation />} />
                      <Route path="/ai-content-generation-pro-2029" element={<AIContentGenerationPro />} />
                      <Route path="/ai-consciousness-evolution-2025" element={<AIConsciousnessEvolution />} />
                      <Route path="/ai-consciousness-evolution-2029" element={<AIConsciousnessEvolution />} />
                      
                      {/* Quantum and other technology routes */}
                      <Route path="/quantum-cloud-infrastructure" element={<QuantumTechnology />} />
                      <Route path="/quantum-financial-trading" element={<QuantumTechnology />} />
                      <Route path="/quantum-services" element={<QuantumTechnology />} />
                      <Route path="/space-tech" element={<EmergingTech />} />
                      <Route path="/research-development" element={<EmergingTech />} />
                      <Route path="/enterprise-it" element={<ITInfrastructure />} />
                      <Route path="/micro-saas" element={<MicroSAASSolutions />} />
                    </Routes>
                  </Suspense>
                </main>
                
                <Footer />
                <SonnerToaster />
              </div>
            </PerformanceOptimizer>
                
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
          </Router>
        </WhitelabelProvider>
      </ThemeProvider>
    </EnhancedErrorBoundary>
=======
                {/* Legacy route redirects for SEO */}
                <Route path="/comprehensive-services" element={<Services />} />
                <Route path="/services-comparison" element={<Services />} />
                <Route path="/it-onsite-services" element={<Services />} />
              </Routes>
            </Suspense>
          </main>
          
          <Footer />
          <SonnerToaster />
        </div>
      </Router>
    </ThemeProvider>
>>>>>>> e338302db1b86638fedf4e3a90e3a7895c1470c0
  );
};

export default App;