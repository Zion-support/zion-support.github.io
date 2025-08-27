<<<<<<< HEAD
import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Layout from './components/Layout'
import EnhancedLoadingSpinner from './components/EnhancedLoadingSpinner'
import PerformanceMonitor from './components/PerformanceMonitor'
=======
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FuturisticNavigation } from './components/FuturisticNavigation';
import { FuturisticFooter } from './components/FuturisticFooter';
import { FuturisticAnimatedBackground } from './components/FuturisticAnimatedBackground';
import { ChatAssistant } from './components/ChatAssistant';
>>>>>>> e71ddb0f29f9adf76b34755be1a22b5dd2a9388b

// Lazy load essential pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
<<<<<<< HEAD
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
=======
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const PartnersPage = React.lazy(() => import('./pages/PartnersPage'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Careers = React.lazy(() => import('./pages/Careers'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const Services = React.lazy(() => import('./pages/Services'));
const GreenIT = React.lazy(() => import('./pages/GreenIT'));
const EnhancedServices = React.lazy(() => import('./pages/EnhancedServices'));

// New service pages
const AIServicesPage = React.lazy(() => import('./pages/AIServicesPage'));
const MicroSAASServicesPage = React.lazy(() => import('./pages/MicroSAASServicesPage'));
const ITServicesPage = React.lazy(() => import('./pages/ITServicesPage'));
const InnovativeServicesShowcase2027 = React.lazy(() => import('./pages/InnovativeServicesShowcase2027'));
const InnovativeServicesShowcase2025 = React.lazy(() => import('./pages/InnovativeServicesShowcase2025'));
const ComprehensiveServicesOverview2027 = React.lazy(() => import('./pages/ComprehensiveServicesOverview2027'));
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027'));
const ComprehensivePricingGuide2025 = React.lazy(() => import('./pages/ComprehensivePricingGuide2025'));
const EnhancedInnovativeServicesShowcase2027 = React.lazy(() => import('./pages/EnhancedInnovativeServicesShowcase2027'));
const ComprehensiveServicesOverview = React.lazy(() => import('./pages/ComprehensiveServicesOverview'));
const ComprehensivePricingGuide2027New = React.lazy(() => import('./pages/ComprehensivePricingGuide2027'));
// Enhanced loading component with better UX
const EnhancedLoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
    <div className="relative">
      <div className="w-32 h-32 border-4 border-zion-cyan/20 rounded-full"></div>
      <div className="absolute top-0 left-0 w-32 h-32 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-zion-cyan font-bold text-lg">
        ZION
      </div>
      <div className="mt-4 text-center">
        <div className="text-zion-cyan text-sm animate-pulse">Loading amazing experiences...</div>
      </div>
    </div>
  </div>
>>>>>>> e71ddb0f29f9adf76b34755be1a22b5dd2a9388b
);

function App() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e71ddb0f29f9adf76b34755be1a22b5dd2a9388b
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
              
<<<<<<< HEAD
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
=======
              {/* AI Services Routes */}
              <Route path="/ai-services" element={<AIServicesPage />} />
              <Route path="/ai-services/:service" element={<AIServicesPage />} />
              
              {/* Micro SAAS Routes */}
              <Route path="/micro-saas" element={<MicroSAASServicesPage />} />
              <Route path="/micro-saas/:service" element={<MicroSAASServicesPage />} />
              
              {/* IT Services Routes */}
              <Route path="/it-services" element={<ITServicesPage />} />
              <Route path="/it-services/:service" element={<ITServicesPage />} />
              
              {/* Innovative Services 2027 Routes */}
              <Route path="/innovative-services-2027" element={<InnovativeServicesShowcase2027 />} />
              <Route path="/innovative-services-2025" element={<InnovativeServicesShowcase2025 />} />
              <Route path="/comprehensive-services-overview" element={<ComprehensiveServicesOverview2027 />} />
              <Route path="/comprehensive-pricing-guide" element={<ComprehensivePricingGuide2027 />} />
              <Route path="/pricing-guide-2025" element={<ComprehensivePricingGuide2025 />} />
              <Route path="/enhanced-innovative-services-2027" element={<EnhancedInnovativeServicesShowcase2027 />} />
              
              {/* New Comprehensive Routes */}
              <Route path="/services-overview" element={<ComprehensiveServicesOverview />} />
              <Route path="/pricing-guide" element={<ComprehensivePricingGuide2027New />} />
              
              {/* Emerging Tech Routes */}
              <Route path="/emerging-tech" element={<GreenIT />} />
              <Route path="/emerging-tech/:service" element={<GreenIT />} />
              
              {/* Marketplace Routes */}
              <Route path="/marketplace" element={<GreenIT />} />
              <Route path="/marketplace/:service" element={<GreenIT />} />
>>>>>>> e71ddb0f29f9adf76b34755be1a22b5dd2a9388b
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ChatAssistant />
      </div>
    </Router>
<<<<<<< HEAD
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
=======
>>>>>>> e71ddb0f29f9adf76b34755be1a22b5dd2a9388b
  );
}

export default App;