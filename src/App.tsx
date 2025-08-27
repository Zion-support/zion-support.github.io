import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Layout from './components/Layout'
import EnhancedLoadingSpinner from './components/EnhancedLoadingSpinner'
import PerformanceMonitor from './components/PerformanceMonitor'

// Lazy load essential pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Services = React.lazy(() => import('./pages/Services'));
const Team = React.lazy(() => import('./pages/Team'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const Signup = React.lazy(() => import('./pages/Signup'));

<<<<<<< HEAD
// Enhanced loading component with skeleton
const LoadingFallback = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="text-center space-y-4">
      <div className="w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin mx-auto"></div>
      <p className="text-zion-cyan text-lg font-medium">Loading Zion...</p>
      <p className="text-muted-foreground text-sm">Preparing your AI marketplace experience</p>
    </div>
  </div>
=======
// 2027 Comprehensive Services Showcase
const ComprehensiveServicesShowcase2027 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2027'));

// 2027 Enhanced Services and Case Studies
const AllServices2027 = React.lazy(() => import('./pages/AllServices2027'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));

// Service imports
const AIServices = React.lazy(() => import('./pages/services/AIServices'));
const CybersecurityServices = React.lazy(() => import('./pages/services/CybersecurityServices'));
const CloudDevOps = React.lazy(() => import('./pages/services/CloudDevOps'));
const IoTServices = React.lazy(() => import('./pages/services/IoTServices'));
const QuantumComputing = React.lazy(() => import('./pages/services/QuantumComputing'));
const BlockchainServices = React.lazy(() => import('./pages/services/BlockchainServices'));
const DigitalTwin = React.lazy(() => import('./pages/services/DigitalTwin'));
const Sustainability = React.lazy(() => import('./pages/services/Sustainability'));
const DataAnalytics = React.lazy(() => import('./pages/services/DataAnalytics'));
const ITInfrastructure = React.lazy(() => import('./pages/services/ITInfrastructure'));
const DigitalTransformation = React.lazy(() => import('./pages/services/DigitalTransformation'));
const ConsultingServices = React.lazy(() => import('./pages/services/ConsultingServices'));
const FiveGSolutions = React.lazy(() => import('./pages/services/FiveGSolutions'));

// Micro SAAS imports
const AIBusinessIntelligence = React.lazy(() => import('./pages/services/AIBusinessIntelligence'));
const CustomerExperience = React.lazy(() => import('./pages/services/CustomerExperience'));
const SupplyChain = React.lazy(() => import('./pages/services/SupplyChain'));
const ContentCreation = React.lazy(() => import('./pages/services/ContentCreation'));
const HRPlatform = React.lazy(() => import('./pages/services/HRPlatform'));

// Additional service imports
const Products = React.lazy(() => import('./pages/Products'));

// Our new pages for fixing broken navigation
const Team = React.lazy(() => import('./pages/Team'));
const Cybersecurity = React.lazy(() => import('./pages/services/Cybersecurity'));
const IoTEdge = React.lazy(() => import('./pages/services/IoTEdge'));
const Blockchain = React.lazy(() => import('./pages/services/Blockchain'));
const AIAnalytics = React.lazy(() => import('./pages/services/AIAnalytics'));
const AIBusinessIntelligenceSAAS = React.lazy(() => import('./pages/micro-saas/AIBusinessIntelligence'));
const Infrastructure = React.lazy(() => import('./pages/it-services/Infrastructure'));
const Products = React.lazy(() => import('./pages/marketplace/Products'));

// Enhanced loading component with better UX
const AppLoadingSpinner = () => (
  <EnhancedLoadingSpinner 
    size="xl" 
    variant="default" 
    text="Loading amazing experiences..." 
    theme="zion"
  />
>>>>>>> 66391aad2675410e65c3b6978d52ba23561a58a9
);

function App() {
  return (
<<<<<<< HEAD
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <AppHeader />
        <main className="flex-1">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="/team" element={<Team />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/signup" element={<Signup />} />
              
              {/* Catch-all route for 404 */}
              <Route path="*" element={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold text-zion-cyan mb-4">404</h1>
                    <p className="text-xl text-muted-foreground mb-8">Page not found</p>
                    <a href="/" className="text-zion-cyan hover:underline">Go back home</a>
                  </div>
                </div>
              } />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ChatAssistant />
      </div>
    </Router>
=======
    <ErrorBoundary>
      <AccessibilityProvider>
        <Router>
          <div className="App min-h-screen bg-zion-slate-dark">
            {/* SEO Head */}
            <SEOHead 
              title="Zion Tech Group - Future-Ready Technology Solutions"
              description="Cutting-edge technology solutions including AI, cybersecurity, cloud infrastructure, and emerging technologies. Transform your business with Zion Tech Group."
              keywords={['AI services', 'cybersecurity', 'cloud solutions', 'digital transformation']}
              canonicalUrl="https://ziontechgroup.com"
            />
            
            {/* App Header */}
            <AppHeader />
            
            {/* Main Content */}
            <main id="main-content" className="pt-24">
              <Suspense fallback={<AppLoadingSpinner />}>
                <Routes>
                  {/* Main Routes */}
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/search" element={<SearchPage />} />
                  <Route path="/help-center" element={<HelpCenter />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/services-advertising" element={<ServicesAdvertising />} />
                  <Route path="/solutions" element={<Solutions />} />
                  <Route path="/research-development" element={<ResearchDevelopment />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/request-quote" element={<RequestQuote />} />
                  
                  {/* Information Pages */}
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/marketplace" element={<Marketplace />} />
                  <Route path="/talent" element={<Talent />} />
                  <Route path="/equipment" element={<Equipment />} />
                  <Route path="/green-it" element={<GreenIT />} />
                  <Route path="/it-onsite-services" element={<ITOnsiteServices />} />
                  <Route path="/help" element={<HelpCenter />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/sitemap" element={<Sitemap />} />
                  
                  {/* Service Routes */}
                  <Route path="/services/ai" element={<AIServices />} />
                  <Route path="/services/cybersecurity" element={<CybersecurityServices />} />
                  <Route path="/services/cloud-devops" element={<CloudDevOps />} />
                  <Route path="/services/iot" element={<IoTServices />} />
                  <Route path="/services/quantum" element={<QuantumComputing />} />
                  <Route path="/services/blockchain" element={<BlockchainServices />} />
                  <Route path="/services/digital-twin" element={<DigitalTwin />} />
                  <Route path="/services/sustainability" element={<Sustainability />} />
                  <Route path="/services/data-analytics" element={<DataAnalytics />} />
                  <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                  <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
                  <Route path="/services/consulting" element={<ConsultingServices />} />
                  <Route path="/services/five-g" element={<FiveGSolutions />} />
                  
                  {/* Additional Service Routes */}
                  <Route path="/services/cybersecurity" element={<Cybersecurity />} />
                  <Route path="/services/iot-edge" element={<IoTEdge />} />
                  <Route path="/services/quantum-computing" element={<QuantumComputing />} />
                  <Route path="/services/blockchain" element={<Blockchain />} />
                  <Route path="/services/sustainability" element={<Sustainability />} />
                  <Route path="/services/ai-analytics" element={<AIAnalytics />} />
                  
                  {/* Micro SAAS Routes */}
                  <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                  <Route path="/services/customer-experience" element={<CustomerExperience />} />
                  <Route path="/services/supply-chain" element={<SupplyChain />} />
                  <Route path="/services/content-creation" element={<ContentCreation />} />
                  <Route path="/services/hr-platform" element={<HRPlatform />} />
                  
                  {/* New Micro SAAS Routes */}
                  <Route path="/micro-saas/ai-business-intelligence" element={<AIBusinessIntelligenceSAAS />} />
                  <Route path="/micro-saas/customer-experience" element={<CustomerExperience />} />
                  
                  {/* IT Services Routes */}
                  <Route path="/it-services/infrastructure" element={<Infrastructure />} />
                  
                  {/* Marketplace Routes */}
                  <Route path="/marketplace/products" element={<Products />} />
                  
                  {/* Team Route */}
                  <Route path="/team" element={<Team />} />
                  
                  {/* Enhanced Services Routes */}
                  <Route path="/enhanced-services" element={<EnhancedServices />} />
                  <Route path="/enhanced-services-page" element={<EnhancedServicesPage />} />
                  <Route path="/enhanced-services-showcase-2025" element={<EnhancedServicesShowcase2025 />} />
                  <Route path="/revolutionary-services-showcase-2030" element={<RevolutionaryServicesShowcase2030 />} />
                  <Route path="/comprehensive-services-overview-2027" element={<ComprehensiveServicesOverview2027 />} />
                  <Route path="/comprehensive-pricing-guide-2027" element={<ComprehensivePricingGuide2027 />} />
                  <Route path="/innovative-services-showcase-2027" element={<InnovativeServicesShowcase2027 />} />
                  <Route path="/ultimate-innovative-services-showcase-2025" element={<UltimateInnovativeServicesShowcase2025 />} />
                  <Route path="/comprehensive-services-landing-2025" element={<ComprehensiveServicesLanding2025 />} />
                  <Route path="/ultimate-services-showcase-2026" element={<UltimateServicesShowcase2026 />} />
                  <Route path="/ultimate-innovative-services-2026" element={<UltimateInnovativeServices2026 />} />
                  <Route path="/comprehensive-services-overview-2026" element={<ComprehensiveServicesOverview2026 />} />
                  <Route path="/zion-2026-comprehensive-services" element={<Zion2026ComprehensiveServicesShowcase />} />
                  <Route path="/comprehensive-services-showcase-2027" element={<ComprehensiveServicesShowcase2027 />} />
                  <Route path="/all-services-2027" element={<AllServices2027 />} />
                  <Route path="/case-studies" element={<CaseStudies />} />
                  
                  {/* Additional Routes */}
                  <Route path="/partners" element={<Partners />} />
                  <Route path="/partners-page" element={<PartnersPage />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                  <Route path="/reset-password" element={<ResetPassword />} />
                  <Route path="/security" element={<Security />} />
                  <Route path="/status" element={<Status />} />
                  <Route path="/cookies" element={<Cookies />} />
                  <Route path="/accessibility" element={<Accessibility />} />
                  
                  {/* Catch-all route for 404 */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
            
            {/* Footer */}
            <Footer />
            
            {/* Chat Assistant */}
            <ChatAssistant />
          </div>
        </Router>
      </AccessibilityProvider>
    </ErrorBoundary>
>>>>>>> 66391aad2675410e65c3b6978d52ba23561a58a9
  );
}

export default App;