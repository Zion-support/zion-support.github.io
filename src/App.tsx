import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Careers = React.lazy(() => import('./pages/Careers'));
const News = React.lazy(() => import('./pages/News'));
const Press = React.lazy(() => import('./pages/Press'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const WhitePapers = React.lazy(() => import('./pages/WhitePapers'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));

// Enhanced lazy loading with preloading hints
const Services = lazy(() => import('./pages/Services'));
const AISolutions = lazy(() => import('./pages/AISolutions'));
const ServicesShowcase = lazy(() => import('./pages/ServicesShowcase'));
const AIMatcherPage = lazy(() => import('./pages/AIMatcher'));
const TalentDirectory = lazy(() => import('./pages/TalentDirectory'));
const TalentsPage = lazy(() => import('./pages/TalentsPage'));
const EmergingTech = lazy(() => import('./pages/EmergingTech'));

// New pages
const MicroSaasServicesPage = lazy(() => import('./pages/MicroSaasServices'));
const PricingPage = lazy(() => import('./pages/PricingPage'));

// 2027 Innovation Pages
const CuttingEdgeInnovations2027 = lazy(() => import('./pages/CuttingEdgeInnovations2027'));
const PracticalMicroSaas2027 = lazy(() => import('./pages/PracticalMicroSaas2027'));
const AllServices2027 = lazy(() => import('./pages/AllServices2027'));

// Service pages
const AIServices = lazy(() => import('./pages/services/AIServices'));
const CloudDevOps = lazy(() => import('./pages/services/CloudDevOps'));
const EnterpriseSolutionsPage = lazy(() => import('./pages/services/EnterpriseIT'));
const DigitalTransformation = lazy(() => import('./pages/services/DigitalTransformation'));
const AIBusinessIntelligence = lazy(() => import('./pages/services/AIBusinessIntelligence'));
const AIMarketingAutomation = lazy(() => import('./pages/services/AIMarketingAutomation'));

// Additional innovative services
const IoTManagementPlatform = lazy(() => import('./pages/services/IoTManagementPlatform'));
const BlockchainDeFiSolutions = lazy(() => import('./pages/services/BlockchainDeFiSolutions'));

// New innovative service pages
const AIWorkflowAutomation = lazy(() => import('./pages/services/AIWorkflowAutomation'));
const BlockchainEnterpriseSolutions = lazy(() => import('./pages/services/BlockchainEnterpriseSolutions'));
const IoTDataAnalytics = lazy(() => import('./pages/services/IoTDataAnalytics'));

// Next-Generation Innovative Services 2025
const NextGenInnovativeServices2025 = lazy(() => import('./pages/NextGenInnovativeServices2025'));
const InnovativeServicesShowcase = lazy(() => import('./pages/InnovativeServicesShowcase'));

// Ultimate Innovative Services 2026
const UltimateServicesShowcase2026 = lazy(() => import('./pages/UltimateServicesShowcase2026'));
const ComprehensivePricing2026 = lazy(() => import('./pages/ComprehensivePricing2026'));

// Additional innovative micro SAAS services
const AILegalDocumentAutomation = lazy(() => import('./pages/services/AILegalDocumentAutomation'));
const AIHealthcareAnalytics = lazy(() => import('./pages/services/AIHealthcareAnalytics'));
const AIFinancialTrading = lazy(() => import('./pages/services/AIFinancialTrading'));
const AISupplyChainOptimization = lazy(() => import('./pages/services/AISupplyChainOptimization'));
const AICustomerServiceAutomation = lazy(() => import('./pages/services/AICustomerServiceAutomation'));

// Missing pages from analysis
const QuantumNeuralNetworkPlatform = lazy(() => import('./pages/QuantumNeuralNetworkPlatform'));
const AutonomousBusinessOperationsPlatform = lazy(() => import('./pages/AutonomousBusinessOperationsPlatform'));
const AIPoweredITAssetManagement = lazy(() => import('./pages/AIPoweredITAssetManagement'));
const SOC2ComplianceAutomation = lazy(() => import('./pages/SOC2ComplianceAutomation'));
const AIAutonomousResearchAssistant = lazy(() => import('./pages/AIAutonomousResearchAssistant'));
const FiveGEnterpriseSolutions = lazy(() => import('./pages/5GEnterpriseSolutions'));
const HelpCenter = lazy(() => import('./pages/HelpCenter'));
const NewServices = lazy(() => import('./pages/NewServices'));

// Additional missing pages from existing structure
const Partners = React.lazy(() => import('./pages/Partners'));
const Documentation = React.lazy(() => import('./pages/Documentation'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const Training = React.lazy(() => import('./pages/Training'));
const Webinars = React.lazy(() => import('./pages/Webinars'));
const Events = React.lazy(() => import('./pages/Events'));
const Support = React.lazy(() => import('./pages/Support'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const GreenIT = React.lazy(() => import('./pages/GreenIT'));
const FinancialSolutions = React.lazy(() => import('./pages/FinancialSolutions'));
const Mobile = React.lazy(() => import('./pages/Mobile'));
const QuantumTechnology = React.lazy(() => import('./pages/QuantumTechnology'));
const SpaceTech = React.lazy(() => import('./pages/SpaceTech'));

// Service pages from existing structure
const CloudServices = React.lazy(() => import('./pages/services/Cloud'));
const ITServices = React.lazy(() => import('./pages/services/ITServices'));
const BlockchainServices = React.lazy(() => import('./pages/services/BlockchainServices'));
const MobileServices = React.lazy(() => import('./pages/services/MobileServices'));
const DataAnalytics = React.lazy(() => import('./pages/services/DataAnalytics'));
const IndustrySolutions = React.lazy(() => import('./pages/services/IndustrySolutions'));
const InfrastructureServices = React.lazy(() => import('./pages/services/InfrastructureServices'));

// Additional pages
const Contact = React.lazy(() => import('./pages/Contact'));
const Login = React.lazy(() => import('./pages/Login'));
const SignUp = React.lazy(() => import('./pages/SignUp'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Profile = React.lazy(() => import('./pages/Profile'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-zion-blue"></div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <AppHeader />
        <main className="flex-1">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Home Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              
              {/* Core Pages */}
              <Route path="/about" element={<About />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              
              {/* Services Routes */}
              <Route path="/services" element={<Services />} />
              <Route path="/services/showcase" element={<ServicesShowcase />} />
              <Route path="/ai-solutions" element={<AISolutions />} />
              <Route path="/micro-saas" element={<MicroSaasServicesPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              
              {/* AI Services */}
              <Route path="/services/ai" element={<AIServices />} />
              <Route path="/services/cloud-devops" element={<CloudDevOps />} />
              <Route path="/services/enterprise" element={<EnterpriseSolutionsPage />} />
              <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
              <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
              <Route path="/services/ai-marketing" element={<AIMarketingAutomation />} />
              
              {/* Additional Services */}
              <Route path="/services/iot" element={<IoTManagementPlatform />} />
              <Route path="/services/blockchain" element={<BlockchainDeFiSolutions />} />
              <Route path="/services/ai-workflow" element={<AIWorkflowAutomation />} />
              <Route path="/services/blockchain-enterprise" element={<BlockchainEnterpriseSolutions />} />
              <Route path="/services/iot-analytics" element={<IoTDataAnalytics />} />
              
              {/* Innovation Pages */}
              <Route path="/innovations/2025" element={<NextGenInnovativeServices2025 />} />
              <Route path="/innovations/showcase" element={<InnovativeServicesShowcase />} />
              <Route path="/innovations/2026" element={<UltimateServicesShowcase2026 />} />
              <Route path="/innovations/2027" element={<CuttingEdgeInnovations2027 />} />
              
              {/* Specialized Services */}
              <Route path="/services/ai-legal" element={<AILegalDocumentAutomation />} />
              <Route path="/services/ai-healthcare" element={<AIHealthcareAnalytics />} />
              <Route path="/services/ai-trading" element={<AIFinancialTrading />} />
              <Route path="/services/ai-supply-chain" element={<AISupplyChainOptimization />} />
              <Route path="/services/ai-customer-service" element={<AICustomerServiceAutomation />} />
              
              {/* Advanced Technology */}
              <Route path="/quantum-neural-network" element={<QuantumNeuralNetworkPlatform />} />
              <Route path="/autonomous-business" element={<AutonomousBusinessOperationsPlatform />} />
              <Route path="/ai-it-asset-management" element={<AIPoweredITAssetManagement />} />
              <Route path="/soc2-compliance" element={<SOC2ComplianceAutomation />} />
              <Route path="/ai-research-assistant" element={<AIAutonomousResearchAssistant />} />
              <Route path="/5g-enterprise" element={<FiveGEnterpriseSolutions />} />
              
              {/* Support & Resources */}
              <Route path="/help" element={<HelpCenter />} />
              <Route path="/new-services" element={<NewServices />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/documentation" element={<Documentation />} />
              <Route path="/training" element={<Training />} />
              <Route path="/webinars" element={<Webinars />} />
              <Route path="/events" element={<Events />} />
              <Route path="/support" element={<Support />} />
              <Route path="/faq" element={<FAQ />} />
              
              {/* Technology Pages */}
              <Route path="/green-it" element={<GreenIT />} />
              <Route path="/financial-solutions" element={<FinancialSolutions />} />
              <Route path="/mobile" element={<Mobile />} />
              <Route path="/quantum-technology" element={<QuantumTechnology />} />
              <Route path="/space-tech" element={<SpaceTech />} />
              
              {/* Infrastructure & Industry */}
              <Route path="/services/cloud" element={<CloudServices />} />
              <Route path="/services/it" element={<ITServices />} />
              <Route path="/services/blockchain-services" element={<BlockchainServices />} />
              <Route path="/services/mobile-services" element={<MobileServices />} />
              <Route path="/services/data-analytics" element={<DataAnalytics />} />
              <Route path="/services/industry" element={<IndustrySolutions />} />
              <Route path="/services/infrastructure" element={<InfrastructureServices />} />
              
              {/* User Routes */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              
              {/* Legal */}
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/sitemap" element={<Sitemap />} />
              
              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ChatAssistant />
      </div>
    </Router>
  );
}

// Type definitions
interface FallbackProps {
  resetErrorBoundary: () => void;
}

function RootErrorFallback({ resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert" className="p-4 text-center space-y-2">
      <p>Something went wrong</p>
      <button onClick={resetErrorBoundary} className="underline">
        Retry
      </button>
    </div>
  );
}


// Create QueryClient instance with optimized settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    },
    mutations: {
      retry: 1,
    },
  },
});

// Lazy load pages for better performance with error boundaries and retry logic
const createLazyComponent = (importFn: () => Promise<any>, componentName: string) => 
  lazy(() => importFn().catch(() => ({ 
    default: () => (
      <div className="flex items-center justify-center min-h-[400px] p-8">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Failed to load {componentName}</h2>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    ) 
  })));

const Home = createLazyComponent(() => import('./pages/Home'), 'Home');
const About = createLazyComponent(() => import('./pages/About'), 'About');
const Services = createLazyComponent(() => import('./pages/Services'), 'Services');
const Contact = createLazyComponent(() => import('./pages/Contact'), 'Contact');
const Pricing = createLazyComponent(() => import('./pages/Pricing'), 'Pricing');
const NotFound = createLazyComponent(() => import('./pages/NotFound'), 'NotFound');

// Additional pages from comprehensive improvements
const AIMatcherPage = createLazyComponent(() => import('./pages/AIMatcher'), 'AI Matcher');
const TalentDirectory = createLazyComponent(() => import('./pages/TalentDirectory'), 'Talent Directory');
const TalentsPage = createLazyComponent(() => import('./pages/TalentsPage'), 'Talents');
const ServicesPage = createLazyComponent(() => import('./pages/ServicesPage'), 'Services');
const EquipmentPage = createLazyComponent(() => import('./pages/EquipmentPage'), 'Equipment');
const EquipmentDetail = createLazyComponent(() => import('./pages/EquipmentDetail'), 'Equipment Detail');
const Analytics = createLazyComponent(() => import('./pages/Analytics'), 'Analytics');
const MobileLaunchPage = createLazyComponent(() => import('./pages/MobileLaunchPage'), 'Mobile Launch');
const Categories = createLazyComponent(() => import('./pages/Categories'), 'Categories');
const Blog = createLazyComponent(() => import('./pages/Blog'), 'Blog');
const PartnersPage = createLazyComponent(() => import('./pages/Partners'), 'Partners');
const Login = createLazyComponent(() => import('./pages/Login'), 'Login');
const Signup = createLazyComponent(() => import('./pages/Signup'), 'Signup');
const ITOnsiteServicesPage = createLazyComponent(() => import('./pages/ITOnsiteServicesPage'), 'IT Onsite Services');
const ContactPage = createLazyComponent(() => import('./pages/Contact'), 'Contact');
const ZionHireAI = createLazyComponent(() => import('./pages/ZionHireAI'), 'Zion Hire AI');
const RequestQuotePage = createLazyComponent(() => import('./pages/RequestQuote'), 'Request Quote');
const ExpandedServicesPage = createLazyComponent(() => import('./pages/ExpandedServicesPage'), 'Expanded Services');
const ServiceComparisonPage = createLazyComponent(() => import('./pages/ServiceComparisonPage'), 'Service Comparison');
const ServiceCalculatorPage = createLazyComponent(() => import('./pages/ServiceCalculatorPage'), 'Service Calculator');
const AllServicesOverviewPage = createLazyComponent(() => import('./pages/AllServicesOverviewPage'), 'All Services');
const ServiceAnalyticsDashboard = createLazyComponent(() => import('./pages/ServiceAnalyticsDashboard'), 'Service Analytics');
const ServiceMarketplace = createLazyComponent(() => import('./pages/ServiceMarketplace'), 'Service Marketplace');

// Service Pages - Lazy loaded for better performance
const AIServices = createLazyComponent(() => import('./pages/AIServices'), 'AI Services');
const ITServices = createLazyComponent(() => import('./pages/ITServices'), 'IT Services');
const MicroSaaS = createLazyComponent(() => import('./pages/MicroSaaS'), 'Micro SaaS');
const Cybersecurity = createLazyComponent(() => import('./pages/Cybersecurity'), 'Cybersecurity');
const CloudMigration = createLazyComponent(() => import('./pages/CloudMigration'), 'Cloud Migration');
const MobileDevelopment = createLazyComponent(() => import('./pages/MobileDevelopment'), 'Mobile Development');

// Additional Pages - Lazy loaded for better performance
const FAQ = createLazyComponent(() => import('./pages/FAQ'), 'FAQ');
const Privacy = createLazyComponent(() => import('./pages/Privacy'), 'Privacy');
const Terms = createLazyComponent(() => import('./pages/Terms'), 'Terms');
const Support = createLazyComponent(() => import('./pages/Support'), 'Support');

// Missing components that are referenced in routes
const AllCategoriesPage = createLazyComponent(() => import('./pages/AllCategoriesPage'), 'All Categories');
const SimpleSignup = createLazyComponent(() => import('./pages/SimpleSignup'), 'Simple Signup');
const OAuthCallback = createLazyComponent(() => import('./pages/OAuthCallback'), 'OAuth Callback');
const MoreTalentsPage = createLazyComponent(() => import('./pages/MoreTalentsPage'), 'More Talents');
const AdditionalTalentsPage = createLazyComponent(() => import('./pages/AdditionalTalentsPage'), 'Additional Talents');
const NewProductsPage = createLazyComponent(() => import('./pages/NewProductsPage'), 'New Products');
const OpenAppRedirect = createLazyComponent(() => import('./pages/OpenAppRedirect'), 'Open App Redirect');
const CommunityPage = createLazyComponent(() => import('./pages/CommunityPage'), 'Community');
const Sitemap = createLazyComponent(() => import('./pages/Sitemap'), 'Sitemap');
const Help = createLazyComponent(() => import('./pages/Help'), 'Help');
const FavoritesPage = createLazyComponent(() => import('./pages/Favorites'), 'Favorites');
const WishlistPage = createLazyComponent(() => import('./pages/Wishlist'), 'Wishlist');
const CartPage = createLazyComponent(() => import('./pages/Cart'), 'Cart');
const Wallet = createLazyComponent(() => import('./pages/Wallet'), 'Wallet');
const Profile = createLazyComponent(() => import('./pages/Profile'), 'Profile');
const RecommendationsPage = createLazyComponent(() => import('./pages/RecommendationsPage'), 'Recommendations');
const Checkout = createLazyComponent(() => import('./pages/Checkout'), 'Checkout');
const ForgotPassword = createLazyComponent(() => import('./pages/ForgotPassword'), 'Forgot Password');
const ResetPassword = createLazyComponent(() => import('./pages/ResetPassword'), 'Reset Password');
const BlogPost = createLazyComponent(() => import('./pages/BlogPost'), 'Blog Post');

const App = memo(() => {
  // Setup global error handling
  useEffect(() => {
    setupGlobalErrorHandling();
    // Initialize bundle optimization
    bundleOptimizer.preloadCriticalResources();
    // Register service worker
    registerServiceWorker();
  }, []);

  return (
    <EnhancedErrorBoundary>
      <EnhancedAccessibility />
      <ThemeProvider>
        <WhitelabelProvider>
          <Router>
              <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
                {/* Enhanced SEO */}
                <EnhancedSEO 
                  title="Zion Tech Group - AI-Powered Technology Solutions & Enterprise Services"
                  description="Leading provider of AI-powered technology solutions, quantum computing, cybersecurity, and enterprise digital transformation services. Transform your business with cutting-edge technology."
                  keywords="AI solutions, quantum computing, cybersecurity, digital transformation, enterprise technology, machine learning, cloud services, IT infrastructure"
                  image="/images/zion-tech-group-og.jpg"
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

                      <Route path="/comprehensive-innovative-services" element={<ComprehensiveInnovativeServices />} />
                      <Route path="/enhanced-services-showcase" element={<EnhancedServicesShowcase />} />
                      
                      {/* Solutions Routes */}
                      <Route path="/services/enterprise" element={<EnterpriseSolutions />} />
                      <Route path="/solutions/healthcare" element={<HealthcareSolutions />} />
                      
                      {/* Legacy route redirects for SEO */}
                      <Route path="/comprehensive-services" element={<Services />} />
                      <Route path="/services-comparison" element={<Services />} />
                      <Route path="/it-onsite-services" element={<Services />} />
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
                              </div>
          </Router>
        </WhitelabelProvider>
      </ThemeProvider>
    </EnhancedErrorBoundary>
  );
});

App.displayName = 'App';

export default App;