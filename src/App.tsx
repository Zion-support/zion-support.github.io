import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Sidebar } from './components/Sidebar';
import { AccessibilityControls } from './components/AccessibilityControls';
import { PerformanceDashboard } from './components/PerformanceDashboard';
import { AnalyticsDashboard } from './components/AnalyticsDashboard';
import { AIChatbot } from './components/AIChatbot';
import { CollaborativeTextEditor } from './components/CollaborativeTextEditor';
import { AICodeGenerator } from './components/AICodeGenerator';
import { EnterpriseDashboard } from './components/EnterpriseDashboard';
import { SecurityComplianceDashboard } from './components/SecurityComplianceDashboard';
import { MachineLearningDashboard } from './components/MachineLearningDashboard';
import './App.css';
import './styles/futuristic.css';

// Import only the essential pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Services = React.lazy(() => import('./pages/Services'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const AIMatcherPage = React.lazy(() => import('./pages/AIMatcher'));
const TalentDirectory = React.lazy(() => import('./pages/TalentDirectory'));
const TalentsPage = React.lazy(() => import('./pages/TalentsPage'));
const EquipmentPage = React.lazy(() => import('./pages/EquipmentPage'));
const EquipmentDetail = React.lazy(() => import('./pages/EquipmentDetail'));
const Analytics = React.lazy(() => import('./pages/Analytics'));
const MobileLaunchPage = React.lazy(() => import('./pages/MobileLaunchPage'));
const CommunityPage = React.lazy(() => import('./pages/CommunityPage'));
const Categories = React.lazy(() => import('./pages/Categories'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const PartnersPage = React.lazy(() => import('./pages/Partners'));
const Login = React.lazy(() => import('./pages/Login'));
const Signup = React.lazy(() => import('./pages/Signup'));
const ITOnsiteServicesPage = React.lazy(() => import('./pages/ITOnsiteServicesPage'));
const OpenAppRedirect = React.lazy(() => import('./pages/OpenAppRedirect'));
const ZionHireAI = React.lazy(() => import('./pages/ZionHireAI'));
const RequestQuotePage = React.lazy(() => import('./pages/RequestQuote'));
const MicroSaasServices = React.lazy(() => import('./pages/MicroSaasServices'));
const PricingPage = React.lazy(() => import('./pages/PricingPage'));

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
const EnhancedServicesShowcase = lazy(() => import('./pages/EnhancedServicesShowcase'));

// Solutions pages
const EnterpriseSolutions = lazy(() => import('./pages/solutions/Enterprise'));
const HealthcareSolutions = lazy(() => import('./pages/solutions/Healthcare'));

// Loading Component with improved accessibility
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

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
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
                    
                    {/* Enhanced SEO Meta Tags */}
                    <EnhancedSEO />
                    
                    {/* Enhanced Navigation */}
                    <EnhancedNavigation />
                    
                    <div className="min-h-screen bg-background text-foreground pt-16" id="main-content">
                      <PerformanceOptimizations>
                        <OptimizedSuspense fallback={<EnhancedLoadingSpinner size="lg" text="Loading application..." />}>
                          <Routes>
                            {/* Main Routes */}
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/services" element={<Services />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/pricing" element={<Pricing />} />
                            
                            {/* Comprehensive Service Routes */}
                            <Route path="/match" element={<AIMatcherPage />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Signup />} />
                            <Route path="/signup" element={<SimpleSignup />} />
                            <Route path="/oauth" element={<OAuthCallback />} />
                            <Route path="/talent" element={<TalentDirectory />} />
                            <Route path="/talents" element={<TalentsPage />} />
                            <Route path="/more-talents" element={<MoreTalentsPage />} />
                            <Route path="/additional-talents" element={<AdditionalTalentsPage />} />
                            <Route path="/services-page" element={<ServicesPage />} />
                            <Route path="/expanded-services" element={<ExpandedServicesPage />} />
                            <Route path="/all-services" element={<AllServicesOverviewPage />} />
                            <Route path="/service-comparison" element={<ServiceComparisonPage />} />
                            <Route path="/service-calculator" element={<ServiceCalculatorPage />} />
                            <Route path="/service-analytics" element={<ServiceAnalyticsDashboard />} />
                            <Route path="/service-marketplace" element={<ServiceMarketplace />} />
                            <Route path="/it-onsite-services" element={<ITOnsiteServicesPage />} />
                            <Route path="/it-onsite-services/:country" element={<ITOnsiteServicesPage />} />
                            <Route path="/categories" element={<Categories />} />
                            <Route path="/categories/all" element={<AllCategoriesPage />} />
                            <Route path="/equipment" element={<EquipmentPage />} />
                            <Route path="/equipment/:id" element={<EquipmentDetail />} />
                            <Route path="/new-products" element={<NewProductsPage />} />
                            <Route path="/analytics" element={<Analytics />} />
                            <Route path="/mobile-launch" element={<MobileLaunchPage />} />
                            <Route path="/open-app" element={<OpenAppRedirect />} />
                            <Route path="/community" element={
                              <CommunityProvider>
                                <CommunityPage />
                              </CommunityProvider>
                            } />
                            <Route path="/partners" element={<PartnersPage />} />
                            <Route path="/sitemap" element={<Sitemap />} />
                            <Route path="/help" element={<Help />} />
                            <Route path="/zion-hire-ai" element={<ZionHireAI />} />
                            <Route path="/hire-ai" element={<ZionHireAI />} />
                            <Route path="/request-quote" element={<RequestQuotePage />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/blog/:slug" element={<BlogPost />} />
                            <Route path="/favorites" element={<FavoritesPage />} />
                            <Route path="/wishlist" element={<WishlistPage />} />
                            <Route path="/cart" element={<PrivateRoute><CartPage /></PrivateRoute>} />
                            <Route path="/wallet" element={<PrivateRoute><Wallet /></PrivateRoute>} />
                            <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
                            <Route path="/recommendations" element={<PrivateRoute><RecommendationsPage /></PrivateRoute>} />
                            <Route path="/checkout" element={<PrivateRoute><Checkout /></PrivateRoute>} />
                            <Route path="/forgot-password" element={<ForgotPassword />} />
                            <Route path="/reset-password/:token" element={<ResetPassword />} />
                            
                            {/* Service Routes */}
                            <Route path="/services/ai-services" element={<AIServices />} />
                            <Route path="/services/it-services" element={<ITServices />} />
                            <Route path="/services/micro-saas" element={<MicroSaaS />} />
                            <Route path="/services/cybersecurity" element={<Cybersecurity />} />
                            <Route path="/services/cloud-solutions" element={<CloudMigration />} />
                            <Route path="/services/mobile-development" element={<MobileDevelopment />} />
                            
                            {/* Additional Routes */}
                            <Route path="/faq" element={<FAQ />} />
                            <Route path="/privacy" element={<Privacy />} />
                            <Route path="/terms" element={<Terms />} />
                            <Route path="/support" element={<Support />} />
                            
                            {/* 404 Route */}
                            <Route path="*" element={<NotFound />} />
                          </Routes>
                        </OptimizedSuspense>
                      </PerformanceOptimizations>
                    </div>
                  </PerformanceWrapper>
                </Router>
                <NotificationToast />
                <PerformanceMonitor enableLogging={process.env.NODE_ENV === 'development'} />
                <PerformanceDashboard />
              </AccessibilityEnhancements>
            </AccessibilityEnhancer>
          </ThemeProvider>
        </HelmetProvider>
      </EnhancedErrorBoundary>
    </QueryClientProvider>
  );
});

App.displayName = 'App';

export default App;