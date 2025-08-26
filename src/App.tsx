import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import { AccessibilityControls } from './components/AccessibilityControls';
// Note: These dashboard components may need to be created or have different exports
// import { PerformanceDashboard } from './components/PerformanceDashboard';
// import { AnalyticsDashboard } from './components/AnalyticsDashboard';
import { AIChatbot } from './components/AIChatbot';
import { CollaborativeTextEditor } from './components/CollaborativeTextEditor';
import { AICodeGenerator } from './components/AICodeGenerator';
import { EnterpriseDashboard } from './components/EnterpriseDashboard';
import { SecurityComplianceDashboard } from './components/SecurityComplianceDashboard';
// import { MachineLearningDashboard } from './components/MachineLearningDashboard';
// import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { LinkHealthMonitor } from './components/LinkHealthMonitor';
import { ThemeProvider } from "./components/ThemeProvider";
import { useScrollToTop } from "./hooks";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import { Toaster } from "./components/ui/toaster";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import Home from './pages/Home';
import AIMatcherPage from './pages/AIMatcher';
import TalentDirectory from './pages/TalentDirectory';
import TalentsPage from './pages/TalentsPage';
import MoreTalentsPage from './pages/MoreTalentsPage';
import ServicesPage from './pages/ServicesPage';
import EquipmentPage from './pages/EquipmentPage';
import EquipmentDetail from './pages/EquipmentDetail';
import Analytics from './pages/Analytics';
import MobileLaunchPage from './pages/MobileLaunchPage';
import CommunityPage from './pages/CommunityPage';
import Categories from './pages/Categories';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import NewProductsPage from './pages/NewProductsPage';
import MoreProductsPage from './pages/MoreProductsPage';
import Sitemap from './pages/Sitemap';
import PartnersPage from './pages/Partners';
import Help from './pages/Help';
import Login from './pages/Login';
const Home = React.lazy(() => import('./pages/Home'));
const AIMatcherPage = React.lazy(() => import('./pages/AIMatcher'));
const TalentDirectory = React.lazy(() => import('./pages/TalentDirectory'));
const TalentsPage = React.lazy(() => import('./pages/TalentsPage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const EquipmentPage = React.lazy(() => import('./pages/EquipmentPage'));
const Analytics = React.lazy(() => import('./pages/Analytics'));
const MobileLaunchPage = React.lazy(() => import('./pages/MobileLaunchPage'));
const CommunityPage = React.lazy(() => import('./pages/CommunityPage'));
const Categories = React.lazy(() => import('./pages/Categories'));
const Login = React.lazy(() => import('./pages/Login'));
const Signup = React.lazy(() => import('./pages/Signup'));
const ITOnsiteServicesPage = React.lazy(() => import('./pages/ITOnsiteServicesPage'));
const OpenAppRedirect = React.lazy(() => import('./pages/OpenAppRedirect'));
const ThemeTest = React.lazy(() => import('./pages/ThemeTest'));
const ContactPage = React.lazy(() => import('./pages/Contact'));
import Signup from './pages/Signup';
import SimpleSignup from './pages/SimpleSignup';
import ITOnsiteServicesPage from './pages/ITOnsiteServicesPage';
import OpenAppRedirect from './pages/OpenAppRedirect';
import ContactPage from './pages/Contact';
import ZionHireAI from './pages/ZionHireAI';
import RequestQuotePage from './pages/RequestQuote';
import Checkout from './pages/Checkout';
import PrivacyPage from './pages/PrivacyPage';
=======
import Rewards from './pages/Rewards';
import { SupportChatbot } from './components/SupportChatbot';
import PrivateRoute from './components/PrivateRoute';
const ZionHireAI = React.lazy(() => import('./pages/ZionHireAI'));
const RequestQuotePage = React.lazy(() => import('./pages/RequestQuote'));
const CartPage = React.lazy(() => import('./pages/Cart'));
const OrderSuccess = React.lazy(() => import('./pages/OrderSuccess'));
=======
const ExpandedServicesPage = React.lazy(() => import('./pages/ExpandedServicesPage'));
const ServiceComparisonPage = React.lazy(() => import('./pages/ServiceComparisonPage'));
const ServiceCalculatorPage = React.lazy(() => import('./pages/ServiceCalculatorPage'));
const AllServicesOverviewPage = React.lazy(() => import('./pages/AllServicesOverviewPage'));
const ServiceAnalyticsDashboard = React.lazy(() => import('./pages/ServiceAnalyticsDashboard'));
const ServiceMarketplace = React.lazy(() => import('./pages/ServiceMarketplace'));
=======
import { EnhancedErrorBoundary } from './components/EnhancedErrorBoundary';
import EnhancedSEO from './components/EnhancedSEO';
import EnhancedAccessibility from './components/EnhancedAccessibility';
import { PerformanceMonitor } from './components/PerformanceMonitor';
import { ScrollToTop } from './components/ScrollToTop';
import { ContentQualityEnhancer } from './components/ContentQualityEnhancer';
import { BrokenLinkFixer } from './components/BrokenLinkFixer';
import { WebsiteImprovementDashboard } from './components/WebsiteImprovementDashboard';
import { SiteHealthDashboard } from './components/SiteHealthDashboard';

const baseRoutes = [
  { path: '/', element: <Home /> },
  { path: '/match', element: <AIMatcherPage /> },
  { path: '/recommendations', element: <RecommendationsProtected /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/talent', element: <TalentDirectory /> },
  { path: '/talents', element: <TalentsPage /> },
  { path: '/services', element: <ServicesPage /> },
  { path: '/expanded-services', element: <ExpandedServicesPage /> },
  { path: '/all-services', element: <AllServicesOverviewPage /> },
  { path: '/service-comparison', element: <ServiceComparisonPage /> },
  { path: '/service-calculator', element: <ServiceCalculatorPage /> },
  { path: '/service-analytics', element: <ServiceAnalyticsDashboard /> },
  { path: '/service-marketplace', element: <ServiceMarketplace /> },
  { path: '/it-onsite-services', element: <ITOnsiteServicesPage /> },
  { path: '/it-onsite-services/:country', element: <ITOnsiteServicesPage /> },
  { path: '/categories', element: <Categories /> },
  { path: '/equipment', element: <EquipmentPage /> },
  { path: '/equipment/:id', element: <EquipmentDetail /> },
  { path: '/new-products', element: <NewProductsPage /> },
  { path: '/product/:id', element: <ProductPage /> },
  { path: '/analytics', element: <Analytics /> },
  { path: '/mobile-launch', element: <MobileLaunchPage /> },
  { path: '/open-app', element: <OpenAppRedirect /> },
  { path: '/community', element: <CommunityPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/partners', element: <PartnersPage /> },
  { path: '/sitemap', element: <Sitemap /> },
  { path: '/help', element: <Help /> },
  { path: '/zion-hire-ai', element: <ZionHireAI /> },
  { path: '/hire-ai', element: <ZionHireAI /> },
  { path: '/request-quote', element: <RequestQuotePage /> },
  { path: '/wishlist', element: <WishlistPage /> },
  { path: '/blog', element: <Blog /> },
  { path: '/blog/:slug', element: <BlogPost /> },
  { path: '/theme-test', element: <ThemeTest /> },
=======
  { path: '/profile/privacy', element: <PrivacyPage /> },
=======
  { path: '/cart', element: <CartPage /> },
  { path: '/order/success', element: <OrderSuccess /> },
];

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
=======

const App = () => {
  // Ensure each navigation starts at the top of the page
  useScrollToTop();
  
  return (
const Home = React.lazy(() => import('./pages/Home'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const ITOnsiteServicesPage = React.lazy(() => import('./pages/ITOnsiteServicesPage'));
const OpenAppRedirect = React.lazy(() => import('./pages/OpenAppRedirect'));
const ContactPage = React.lazy(() => import('./pages/Contact'));
const ComprehensiveServicesPage = React.lazy(() => import('./pages/ComprehensiveServicesPage'));

const baseRoutes = [
  { path: '/', element: <Home /> },
  { path: '/services', element: <ServicesPage /> },
  { path: '/comprehensive-services', element: <ComprehensiveServicesPage /> },
  { path: '/it-onsite-services', element: <ITOnsiteServicesPage /> },
  { path: '/open-app', element: <OpenAppRedirect /> },
  { path: '/contact', element: <ContactPage /> },
];

const App = () => {
  // Ensure each navigation starts at the top of the page
  useScrollToTop();
  
  return (
    <ErrorBoundary>
      <WhitelabelProvider>
        <ThemeProvider defaultTheme="dark">
          <Suspense fallback={<PageLoader text="Loading Zion Tech Group..." />}>
            <Routes>
              {baseRoutes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
              <Route path="/auth/*" element={<AuthRoutes />} />
              <Route path="/dashboard/*" element={<DashboardRoutes />} />
              <Route path="/marketplace/*" element={<MarketplaceRoutes />} />
              <Route path="/talent/*" element={<TalentRoutes />} />
              <Route path="/admin/*" element={<AdminRoutes />} />
              <Route path="/mobile/*" element={<MobileAppRoutes />} />
              <Route path="/content/*" element={<ContentRoutes />} />
              <Route path="/enterprise/*" element={<EnterpriseRoutes />} />
              <Route path="/community/*" element={<CommunityRoutes />} />
              <Route path="/developers/*" element={<DeveloperRoutes />} />
              <Route path="*" element={<ErrorRoutes />} />
            </Routes>
          </Suspense>
          <Toaster />
          <SonnerToaster position="top-right" />
        </ThemeProvider>
      </WhitelabelProvider>
    </ErrorBoundary>
=======
    <EnhancedErrorBoundary>
      <EnhancedAccessibility />
      <PerformanceMonitor />
      <ThemeProvider>
        <WhitelabelProvider>
          <Router>
            {/* <PerformanceOptimizer
              enableMonitoring={true}
              enableOptimizations={true}
              showMetrics={import.meta.env.DEV}
            > */}
              <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
                {/* Enhanced SEO */}
                {/* <EnhancedSEO 
                  title="Zion Tech Group - AI-Powered Technology Solutions & Enterprise Services"
                  description="Leading provider of AI-powered technology solutions, quantum computing, cybersecurity, and enterprise digital transformation services."
                  keywords="AI solutions, quantum computing, cybersecurity, digital transformation"
                  canonicalUrl="https://ziontechgroup.com"
                  ogImage="https://ziontechgroup.com/og-image.jpg"
                  ogType="website"
                  twitterCard="summary_large_image"
                /> */}
                
                <Header />
                <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
                
                <main className="pt-20">
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
                      <Route path="/site-health" element={<SiteHealthDashboard />} />
                      
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
                {/* {import.meta.env.DEV && (
                  <>
                    <div className="fixed top-4 left-4 z-40">
                      <PerformanceDashboard />
                    </div>
                    
                    <div className="fixed top-4 right-4 z-40">
                      <AnalyticsDashboard />
                    </div>
                    
                    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40">
                      <EnterpriseDashboard />
                    </div>
                    
                    <div className="fixed top-4 right-1/2 transform translate-x-1/2 z-40">
                      <SecurityComplianceDashboard />
                    </div>
                    
                    <div className="fixed top-4 right-4 z-40">
                      <MachineLearningDashboard />
                    </div>
                  </>
                )} */}
              </div>
            {/* </PerformanceOptimizer> */}
          </Router>
        </WhitelabelProvider>
      </ThemeProvider>
    </EnhancedErrorBoundary>
  );
};

export default App;