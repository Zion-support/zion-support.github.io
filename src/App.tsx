import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';
import { PerformanceMonitor } from './components/PerformanceMonitor';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const PartnersPage = React.lazy(() => import('./pages/Partners'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Careers = React.lazy(() => import('./pages/Careers'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const GreenIT = React.lazy(() => import('./pages/GreenIT'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const ServicesAdvertising = React.lazy(() => import('./pages/ServicesAdvertising'));
const Solutions = React.lazy(() => import('./pages/Solutions'));
const ResearchDevelopment = React.lazy(() => import('./pages/ResearchDevelopment'));
const News = React.lazy(() => import('./pages/News'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote'));

// Enhanced loading component with better UX
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
    <div className="relative">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20 rounded-full blur-xl animate-pulse"></div>
      
      {/* Main spinner */}
      <div className="relative w-32 h-32 border-4 border-zion-cyan/20 rounded-full">
        <div className="absolute top-0 left-0 w-32 h-32 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin"></div>
      </div>
      
      {/* Zion logo overlay */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-zion-cyan font-bold text-2xl">
        ZION
      </div>
      
      {/* Loading text */}
      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-zion-cyan text-lg font-medium">
        Loading...
      </div>
      
      {/* Animated dots */}
      <div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-1">
        <div className="w-2 h-2 bg-zion-cyan rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-zion-cyan rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-2 h-2 bg-zion-cyan rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-futuristic">
        {/* Global SEO Meta Tags */}
        <Helmet>
          <title>Zion Tech Group - AI-Powered Business Solutions & IT Services</title>
          <meta name="description" content="Transform your business with Zion Tech Group's cutting-edge AI solutions, cybersecurity services, cloud infrastructure, and digital transformation expertise. Serving businesses worldwide with innovative technology solutions." />
          <meta name="keywords" content="AI solutions, cybersecurity, cloud services, digital transformation, quantum computing, blockchain, IT consulting, business intelligence" />
          <meta name="author" content="Zion Tech Group" />
          <meta name="robots" content="index, follow" />
          
          {/* Open Graph Meta Tags */}
          <meta property="og:title" content="Zion Tech Group - AI-Powered Business Solutions" />
          <meta property="og:description" content="Transform your business with cutting-edge AI solutions, cybersecurity services, and digital transformation expertise." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://ziontechgroup.com" />
          <meta property="og:image" content="https://ziontechgroup.com/images/og-image.jpg" />
          <meta property="og:site_name" content="Zion Tech Group" />
          
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Zion Tech Group - AI-Powered Business Solutions" />
          <meta name="twitter:description" content="Transform your business with cutting-edge AI solutions and IT services." />
          <meta name="twitter:image" content="https://ziontechgroup.com/images/twitter-card.jpg" />
          
          {/* Additional Meta Tags */}
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color" content="#22ddd2" />
          <meta name="msapplication-TileColor" content="#22ddd2" />
          
          {/* Canonical URL */}
          <link rel="canonical" href="https://ziontechgroup.com" />
          
          {/* Favicon and App Icons */}
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          
          {/* Preconnect to external domains for performance */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          
          {/* Structured Data for SEO */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com",
              "logo": "https://ziontechgroup.com/images/logo.png",
              "description": "Leading technology solutions provider offering comprehensive AI, cybersecurity, cloud, and digital transformation services.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "364 E Main St STE 1008",
                "addressLocality": "Middletown",
                "addressRegion": "DE",
                "postalCode": "19709",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-302-464-0950",
                "contactType": "customer service",
                "email": "kleber@ziontechgroup.com"
              },
              "sameAs": [
                "https://linkedin.com/company/ziontechgroup",
                "https://twitter.com/ziontechgroup"
              ]
            })}
          </script>
        </Helmet>
        
        <AppHeader />
        
        {/* Marketplace Routes */}
        <Route path="/marketplace/*" element={<AppLayout><MarketplaceRoutes /></AppLayout>} />
        
        <Footer />
        <ChatAssistant />
        
        {/* Performance Monitor - Only show in development or when explicitly enabled */}
        <PerformanceMonitor 
          enabled={process.env.NODE_ENV === 'development' || process.env.REACT_APP_SHOW_PERFORMANCE === 'true'}
          showMetrics={true}
          onMetricsUpdate={(metrics) => {
            // Log performance metrics to console in development
            if (process.env.NODE_ENV === 'development') {
              console.log('Performance Metrics Updated:', metrics);
            }
          }}
        />
      </div>
    </Router>
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