import React, { Suspense, lazy, useState } from 'react';
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
import PerformanceOptimizer from './components/PerformanceOptimizer';
import { LinkHealthMonitor } from './components/LinkHealthMonitor';
import { ThemeProvider } from "./components/ThemeProvider";
import { useScrollToTop } from "./hooks";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import { Toaster } from "./components/ui/toaster";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import { EnhancedErrorBoundary } from './components/EnhancedErrorBoundary';
import EnhancedSEO from './components/EnhancedSEO';
import { EnhancedAccessibility } from './components/EnhancedAccessibility';
import PerformanceMonitor from './components/PerformanceMonitor';
import { ScrollToTop } from './components/ScrollToTop';
import { ContentQualityEnhancer } from './components/ContentQualityEnhancer';
import { BrokenLinkFixer } from './components/BrokenLinkFixer';
import { WebsiteImprovementDashboard } from './components/WebsiteImprovementDashboard';

// Lazy load pages - Main pages
const Home = React.lazy(() => import('./pages/Home.jsx'));
const About = React.lazy(() => import('./pages/About.jsx'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage.jsx'));
const Contact = React.lazy(() => import('./pages/Contact.jsx'));
const Login = React.lazy(() => import('./pages/Login.jsx'));

// New pages from incoming branch
const MicroSaasServicesPage = lazy(() => import('./pages/InnovativeMicroSaasServices'));
const PricingPage = lazy(() => import('./pages/PricingPage'));

// Lazy load pages - Products & Solutions
const ProductPage = React.lazy(() => import('./pages/ProductPage.jsx'));
const NewProductsPage = React.lazy(() => import('./pages/NewProductsPage.jsx'));
const EquipmentPage = React.lazy(() => import('./pages/EquipmentPage.jsx'));
const PortfolioBuilder = React.lazy(() => import('./pages/PortfolioBuilder.jsx'));
const ZionHireAI = React.lazy(() => import('./pages/ZionHireAI.jsx'));
const AIResearchAssistant = React.lazy(() => import('./pages/AIResearchAssistant.jsx'));
const AIContentGenerator = React.lazy(() => import('./pages/AIContentGenerator.jsx'));
const AICodeReview = React.lazy(() => import('./pages/AICodeReview.jsx'));
const CloudCostOptimizer = React.lazy(() => import('./pages/CloudCostOptimizer.jsx'));
const ServiceDescriptionGenerator = React.lazy(() => import('./pages/ServiceDescriptionGenerator.jsx'));

// Lazy load pages - Business & Enterprise
const BusinessSolutionsPage = React.lazy(() => import('./pages/BusinessSolutionsPage.jsx'));
const EnterpriseAdmin = React.lazy(() => import('./pages/EnterpriseAdmin.jsx'));
const EnterpriseBilling = React.lazy(() => import('./pages/EnterpriseBilling.jsx'));
const EnterpriseDemo = React.lazy(() => import('./pages/EnterpriseDemo.jsx'));
const EnterprisePlans = React.lazy(() => import('./pages/EnterprisePlans.jsx'));
const DigitalTransformation = React.lazy(() => import('./pages/DigitalTransformation.jsx'));
const AutonomousBusinessOperationsPlatform = React.lazy(() => import('./pages/AutonomousBusinessOperationsPlatform.jsx'));

// Lazy load pages - Community & Support
const FAQ = React.lazy(() => import('./pages/FAQ.jsx'));
const Partners = React.lazy(() => import('./pages/Partners.jsx'));
const Events = React.lazy(() => import('./pages/Events.jsx'));
const News = React.lazy(() => import('./pages/News.jsx'));
const BlogPost = React.lazy(() => import('./pages/BlogPost.jsx'));
const ForumPostPage = React.lazy(() => import('./pages/ForumPostPage.jsx'));
const ForumCategoryPage = React.lazy(() => import('./pages/ForumCategoryPage.jsx'));
const CreatePostPage = React.lazy(() => import('./pages/CreatePostPage.jsx'));
const EditPostPage = React.lazy(() => import('./pages/EditPostPage.jsx'));

// Lazy load pages - User & Account
const Signup = React.lazy(() => import('./pages/Signup.jsx'));
const ForgotPassword = React.lazy(() => import('./pages/ForgotPassword.jsx'));
const Dashboard = React.lazy(() => import('./pages/Dashboard.jsx'));
const Profile = React.lazy(() => import('./pages/Profile.jsx'));
const ProfilePage = React.lazy(() => import('./pages/ProfilePage.jsx'));
const UpdatePassword = React.lazy(() => import('./pages/UpdatePassword.jsx'));

// Lazy load pages - Marketplace & E-commerce
const Cart = React.lazy(() => import('./pages/Cart.jsx'));
const Orders = React.lazy(() => import('./pages/Orders.jsx'));
const OrderDetail = React.lazy(() => import('./pages/OrderDetail.jsx'));
const OrderConfirmation = React.lazy(() => import('./pages/OrderConfirmation.jsx'));
const SearchResultsPage = React.lazy(() => import('./pages/SearchResultsPage.jsx'));
const CategoryDetail = React.lazy(() => import('./pages/CategoryDetail.jsx'));
const ListingDetail = React.lazy(() => import('./pages/ListingDetail.jsx'));

// Lazy load pages - Jobs & Talent
const PostJob = React.lazy(() => import('./pages/PostJob.jsx'));
const JobDetails = React.lazy(() => import('./pages/JobDetails.jsx'));
const HiringTracker = React.lazy(() => import('./pages/HiringTracker.jsx'));
const TalentOnboarding = React.lazy(() => import('./pages/TalentOnboarding.jsx'));
const CommunityProfilePage = React.lazy(() => import('./pages/CommunityProfilePage.jsx'));

// Lazy load pages - Legal & Documentation
const Terms = React.lazy(() => import('./pages/Terms.jsx'));
const Privacy = React.lazy(() => import('./pages/Privacy.jsx'));
const Cookies = React.lazy(() => import('./pages/Cookies.jsx'));
const Documentation = React.lazy(() => import('./pages/Documentation.jsx'));
const DeveloperPortal = React.lazy(() => import('./pages/DeveloperPortal.jsx'));

// Lazy load pages - Pricing & Plans
const Pricing = React.lazy(() => import('./pages/Pricing.jsx'));
const PricingPage = React.lazy(() => import('./pages/PricingPage.jsx'));
const PricingGuidePage = React.lazy(() => import('./pages/PricingGuidePage.jsx'));
const ServicesPricingPage = React.lazy(() => import('./pages/ServicesPricingPage.jsx'));
const ServicesComparisonPage = React.lazy(() => import('./pages/ServicesComparisonPage.jsx'));

// Lazy load pages - Specialized Services
const NextGenServicesShowcase2025 = React.lazy(() => import('./pages/NextGenServicesShowcase2025.jsx'));
const CuttingEdgeInnovativeServices2025 = React.lazy(() => import('./pages/CuttingEdgeInnovativeServices2025.jsx'));
const EnhancedInnovativeServices = React.lazy(() => import('./pages/EnhancedInnovativeServices.jsx'));
const EnhancedServicesPage = React.lazy(() => import('./pages/EnhancedServicesPage.jsx'));
const EnhancedServicesShowcase = React.lazy(() => import('./pages/EnhancedServicesShowcase.jsx'));
const ComprehensiveServices = React.lazy(() => import('./pages/ComprehensiveServices.jsx'));
const ComprehensiveContact = React.lazy(() => import('./pages/ComprehensiveContact.jsx'));
const AdvancedServicesPage = React.lazy(() => import('./pages/AdvancedServicesPage.jsx'));
const ServicesOverview = React.lazy(() => import('./pages/ServicesOverview.jsx'));
const NewServicesOverview = React.lazy(() => import('./pages/NewServicesOverview.jsx'));
const MicroSAASServicesPage = React.lazy(() => import('./pages/MicroSAASServicesPage.jsx'));
const MicroSAASShowcase = React.lazy(() => import('./pages/MicroSAASShowcase.jsx'));
const ContentGenerator = React.lazy(() => import('./pages/ContentGenerator.jsx'));
const ServiceOnboarding = React.lazy(() => import('./pages/ServiceOnboarding.jsx'));
const TokenIntegrations = React.lazy(() => import('./pages/TokenIntegrations.jsx'));
const HowItWorks = React.lazy(() => import('./pages/HowItWorks.jsx'));
const GetStarted = React.lazy(() => import('./pages/GetStarted.jsx'));

// AI Autonomous Service pages
const AIAutonomousBusinessManager = lazy(() => import('./pages/services/AIAutonomousBusinessManager'));
const AIAutonomousBusinessPlatform = lazy(() => import('./pages/services/AIAutonomousBusinessPlatform'));
const AIAutonomousCodeReview = lazy(() => import('./pages/services/AIAutonomousCodeReview'));
const AIAutonomousCreativeDirector = lazy(() => import('./pages/services/AIAutonomousCreativeDirector'));
const AIAutonomousData = lazy(() => import('./pages/services/AIAutonomousData'));
const AIAutonomousDecisionEngine = lazy(() => import('./pages/services/AIAutonomousDecisionEngine'));
const AIAutonomousDecisionPlatform = lazy(() => import('./pages/services/AIAutonomousDecisionPlatform'));
const AIAutonomousDevOps = lazy(() => import('./pages/services/AIAutonomousDevOps'));
const AIAutonomousEducationProfessor = lazy(() => import('./pages/AIAutonomousEducationProfessor'));
const AIAutonomousHealthcarePhysician = lazy(() => import('./pages/AIAutonomousHealthcarePhysician'));
const AIAutonomousLearningSystem = lazy(() => import('./pages/AIAutonomousLearningSystem'));
const AIAutonomousLegalCounsel = lazy(() => import('./pages/AIAutonomousLegalCounsel'));
const AIAutonomousLogistics = lazy(() => import('./pages/AIAutonomousLogistics'));
const AIAutonomousManufacturing = lazy(() => import('./pages/AIAutonomousManufacturing'));
const AIAutonomousResearch = lazy(() => import('./pages/services/AIAutonomousResearch'));
const AIAutonomousRobotics = lazy(() => import('./pages/AIAutonomousRobotics'));
const AIAutonomousScientificResearcher = lazy(() => import('./pages/AIAutonomousScientificResearcher'));
const AIAutonomousSecurity = lazy(() => import('./pages/AIAutonomousSecurity'));
const AIAutonomousSystemsPlatform = lazy(() => import('./pages/services/AIAutonomousSystemsPlatform'));
const AIAutonomousTesting = lazy(() => import('./pages/AIAutonomousTesting'));
const AIAutonomousVehiclePlatform = lazy(() => import('./pages/AIAutonomousVehiclePlatform'));
const AIAutonomousVehicle = lazy(() => import('./pages/AIAutonomousVehicle'));
const AIAutonomousVehiclesPlatform = lazy(() => import('./pages/AIAutonomousVehiclesPlatform'));
const AIAutonomousVehicles = lazy(() => import('./pages/AIAutonomousVehicles'));
const AIAutonomousVentureCapitalist = lazy(() => import('./pages/AIAutonomousVentureCapitalist'));

// AI Content Generation pages
const AIContentGenerationAutomation = lazy(() => import('./pages/AIContentGenerationAutomation'));
const AIContentGenerationPro = lazy(() => import('./pages/AIContentGenerationPro'));
const AIConsciousnessEvolution = lazy(() => import('./pages/AIConsciousnessEvolution'));

// Enhanced AI service pages
const AIBusinessIntelligenceElite = lazy(() => import('./pages/AIBusinessIntelligenceElite'));
const AIBusinessIntelligenceSuite = lazy(() => import('./pages/AIBusinessIntelligenceSuite'));

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-500"></div>
  </div>
);

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
                  image="/og-image.jpg"
                  canonicalUrl="https://ziontechgroup.com"
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
                      <Route path="/ai-matcher" element={<AIMatcherPage />} />
                      <Route path="/talent-directory" element={<TalentDirectory />} />
                      <Route path="/talents" element={<TalentsPage />} />
                      <Route path="/emerging-tech" element={<EmergingTech />} />
                      
                      {/* New routes from incoming branch */}
                      <Route path="/micro-saas-services" element={<MicroSaasServicesPage />} />
                      <Route path="/pricing" element={<PricingPage />} />
                      
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
                      <Route path="/ai-business-intelligence-elite" element={<AIBusinessIntelligenceElite />} />
                      <Route path="/ai-business-intelligence-suite" element={<AIBusinessIntelligenceSuite />} />
                      
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
              
              {/* Enhanced Accessibility Controls */}
              <EnhancedAccessibility />
              
              {/* Website Improvement Tools */}
              <ContentQualityEnhancer />
              <BrokenLinkFixer />
              <WebsiteImprovementDashboard />
              
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
                  autoCheck={true}
                  showDetails={false}
                />
              )}
            </Router>
          </WhitelabelProvider>
        </ThemeProvider>
      </EnhancedErrorBoundary>
    );
  };

export default App;