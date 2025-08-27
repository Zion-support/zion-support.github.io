<<<<<<< HEAD
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';
import { EnhancedLoadingSpinner } from './components/ui/EnhancedLoadingSpinner';
import { ErrorBoundary } from './components/error/ErrorBoundary';
import { AccessibilityProvider } from './components/accessibility/AccessibilityProvider';
import { SEOHead } from './components/seo/SEOHead';

// Lazy load pages - comprehensive import list
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Careers = React.lazy(() => import('./pages/Careers'));
const Partners = React.lazy(() => import('./pages/Partners'));
const PartnersPage = React.lazy(() => import('./pages/PartnersPage'));
const Marketplace = React.lazy(() => import('./pages/Marketplace'));
const Talent = React.lazy(() => import('./pages/Talent'));
const Equipment = React.lazy(() => import('./pages/EquipmentPage'));
const GreenIT = React.lazy(() => import('./pages/GreenIT'));
const ITOnsiteServices = React.lazy(() => import('./pages/ITOnsiteServices'));
const HelpCenter = React.lazy(() => import('./pages/HelpCenter'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Security = React.lazy(() => import('./pages/Security'));
const Status = React.lazy(() => import('./pages/Status'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const Accessibility = React.lazy(() => import('./pages/Accessibility'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Profile = React.lazy(() => import('./pages/Profile'));
const Settings = React.lazy(() => import('./pages/Settings'));
const Signup = React.lazy(() => import('./pages/Signup'));
const ForgotPassword = React.lazy(() => import('./pages/ForgotPassword'));
const ResetPassword = React.lazy(() => import('./pages/ResetPassword'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const EnhancedServices = React.lazy(() => import('./pages/EnhancedServices'));
const EnhancedServicesPage = React.lazy(() => import('./pages/EnhancedServicesPage'));
const EnhancedServicesShowcase2025 = React.lazy(() => import('./pages/EnhancedServicesShowcase2025'));
const RevolutionaryServicesShowcase2030 = React.lazy(() => import('./pages/RevolutionaryServicesShowcase2030'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const ServicesAdvertising = React.lazy(() => import('./pages/ServicesAdvertising'));
const Solutions = React.lazy(() => import('./pages/Solutions'));
const ResearchDevelopment = React.lazy(() => import('./pages/ResearchDevelopment'));
const News = React.lazy(() => import('./pages/News'));
const ComprehensiveServicesOverview2027 = React.lazy(() => import('./pages/ComprehensiveServicesOverview2027'));
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027'));
const InnovativeServicesShowcase2027 = React.lazy(() => import('./pages/InnovativeServicesShowcase2027'));
const UltimateInnovativeServicesShowcase2025 = React.lazy(() => import('./pages/UltimateInnovativeServicesShowcase2025'));
const ComprehensiveServicesLanding2025 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2025'));
const UltimateServicesShowcase2026 = React.lazy(() => import('./pages/UltimateServicesShowcase2026'));
const UltimateInnovativeServices2026 = React.lazy(() => import('./pages/UltimateInnovativeServices2026'));
const ComprehensiveServicesOverview2026 = React.lazy(() => import('./pages/ComprehensiveServicesOverview2026'));
const Zion2026ComprehensiveServicesShowcase = React.lazy(() => import('./pages/Zion2026ComprehensiveServicesShowcase'));

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

// Enhanced loading component with better UX
const AppLoadingSpinner = () => (
  <EnhancedLoadingSpinner 
    size="xl" 
    variant="default" 
    text="Loading amazing experiences..." 
    theme="zion"
  />
=======
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FuturisticNavigation } from './components/FuturisticNavigation';
import { FuturisticFooter } from './components/FuturisticFooter';
import { FuturisticAnimatedBackground } from './components/FuturisticAnimatedBackground';
import { ChatAssistant } from './components/ChatAssistant';

// Lazy load pages with better chunking
const Home = React.lazy(() => import('./pages/Home.tsx'));
const About = React.lazy(() => import('./pages/About.tsx'));
const Contact = React.lazy(() => import('./pages/Contact.tsx'));
const Blog = React.lazy(() => import('./pages/Blog.tsx'));
const BlogPost = React.lazy(() => import('./pages/BlogPost.tsx'));
const PartnersPage = React.lazy(() => import('./pages/PartnersPage.tsx'));
const Login = React.lazy(() => import('./pages/Login.tsx'));
const FAQ = React.lazy(() => import('./pages/FAQ.tsx'));
const Careers = React.lazy(() => import('./pages/Careers.tsx'));
const Privacy = React.lazy(() => import('./pages/Privacy.tsx'));
const Terms = React.lazy(() => import('./pages/Terms.tsx'));
const Sitemap = React.lazy(() => import('./pages/Sitemap.tsx'));
const Services = React.lazy(() => import('./pages/Services.tsx'));
const GreenIT = React.lazy(() => import('./pages/GreenIT.tsx'));
const EnhancedServices = React.lazy(() => import('./pages/EnhancedServices.tsx'));

// Service pages
const AIServicesPage = React.lazy(() => import('./pages/services/AIServicesPage.tsx'));
const CybersecurityServicesPage = React.lazy(() => import('./pages/services/CybersecurityServicesPage.tsx'));
const CloudSolutionsPage = React.lazy(() => import('./pages/services/CloudSolutionsPage.tsx'));
const ITConsultingPage = React.lazy(() => import('./pages/services/ITConsultingPage.tsx'));
const QuantumTechnologyPage = React.lazy(() => import('./pages/QuantumTechnologyPage.tsx'));
const BlockchainServicesPage = React.lazy(() => import('./pages/BlockchainServicesPage.tsx'));
const DigitalTransformationPage = React.lazy(() => import('./pages/DigitalTransformationPage.tsx'));
const MicroSAASPage = React.lazy(() => import('./pages/MicroSAASPage.tsx'));
const EnterprisePage = React.lazy(() => import('./pages/EnterprisePage.tsx'));

// Company pages
const TeamPage = React.lazy(() => import('./pages/TeamPage.tsx'));

// Additional service pages
const MicroSAASServicesPage = React.lazy(() => import('./pages/MicroSAASServicesPage.tsx'));
const ITServicesPage = React.lazy(() => import('./pages/ITServicesPage.tsx'));
const InnovativeServicesShowcase2027 = React.lazy(() => import('./pages/InnovativeServicesShowcase2027.tsx'));
const ComprehensiveServicesOverview2027 = React.lazy(() => import('./pages/ComprehensiveServicesOverview2027.tsx'));
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027.tsx'));
const EnhancedInnovativeServicesShowcase2027 = React.lazy(() => import('./pages/EnhancedInnovativeServicesShowcase2027.tsx'));
const ComprehensiveServicesOverview = React.lazy(() => import('./pages/ComprehensiveServicesOverview.tsx'));
const UltimateInnovativeServicesShowcase2025 = React.lazy(() => import('./pages/UltimateInnovativeServicesShowcase2025.tsx'));
const ComprehensiveServicesLanding2025 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2025.tsx'));
const EnhancedZionServicesShowcase2025 = React.lazy(() => import('./pages/EnhancedZionServicesShowcase2025.tsx'));
const ZionTechGroupMarketing2025 = React.lazy(() => import('./pages/ZionTechGroupMarketing2025.tsx'));
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
>>>>>>> ff4f0c93d22f1112230dad999864f5dae02b17b2
);

function App() {
  return (
<<<<<<< HEAD
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
                  
                  {/* Micro SAAS Routes */}
                  <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                  <Route path="/services/customer-experience" element={<CustomerExperience />} />
                  <Route path="/services/supply-chain" element={<SupplyChain />} />
                  <Route path="/services/content-creation" element={<ContentCreation />} />
                  <Route path="/services/hr-platform" element={<HRPlatform />} />
                  
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
=======
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light relative">
        {/* Futuristic Animated Background */}
        <FuturisticAnimatedBackground />
        
        {/* Navigation */}
        <FuturisticNavigation />
        
        <main className="flex-1 relative z-10">
          <Suspense fallback={<EnhancedLoadingSpinner />}>
            <Routes>
              {/* Main Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/services" element={<Services />} />
              <Route path="/green-it" element={<GreenIT />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="/login" element={<Login />} />
<<<<<<< HEAD
              <Route path="/enhanced-services" element={<EnhancedServices />} />
              
              {/* Service Routes */}
              <Route path="/services/ai" element={<AIServicesPage />} />
              <Route path="/services/cybersecurity" element={<CybersecurityServicesPage />} />
              <Route path="/services/cloud" element={<CloudSolutionsPage />} />
              <Route path="/services/consulting" element={<ITConsultingPage />} />
              <Route path="/quantum-technology" element={<QuantumTechnologyPage />} />
              <Route path="/blockchain-services" element={<BlockchainServicesPage />} />
              <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
              <Route path="/micro-saas" element={<MicroSAASPage />} />
              <Route path="/enterprise" element={<EnterprisePage />} />
              
              {/* Company Routes */}
              <Route path="/team" element={<TeamPage />} />
              
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
              <Route path="/comprehensive-services-overview" element={<ComprehensiveServicesOverview2027 />} />
              <Route path="/comprehensive-pricing-guide" element={<ComprehensivePricingGuide2027 />} />
              <Route path="/enhanced-innovative-services-2027" element={<EnhancedInnovativeServicesShowcase2027 />} />
              
              {/* New Comprehensive Routes */}
              <Route path="/services-overview" element={<ComprehensiveServicesOverview />} />
              <Route path="/pricing-guide" element={<ComprehensivePricingGuide2027 />} />
              
              {/* Legacy Routes */}
              <Route path="/services/overview" element={<ComprehensiveServicesOverview2027 />} />
              <Route path="/services/pricing" element={<ComprehensivePricingGuide2027 />} />
              <Route path="/services/showcase" element={<InnovativeServicesShowcase2027 />} />
              <Route path="/ultimate-services-2025" element={<UltimateInnovativeServicesShowcase2025 />} />
              <Route path="/comprehensive-services-2025" element={<ComprehensiveServicesLanding2025 />} />
              <Route path="/enhanced-zion-services-2025" element={<EnhancedZionServicesShowcase2025 />} />
              <Route path="/zion-tech-group-marketing-2025" element={<ZionTechGroupMarketing2025 />} />
              
              {/* Emerging Tech Routes */}
              <Route path="/emerging-tech" element={<GreenIT />} />
              <Route path="/emerging-tech/:service" element={<GreenIT />} />
              
              {/* Marketplace Routes */}
              <Route path="/marketplace" element={<GreenIT />} />
              <Route path="/marketplace/:service" element={<GreenIT />} />
            </Routes>
          </Suspense>
        </main>
        
        {/* Footer */}
        <FuturisticFooter />
        
        {/* Chat Assistant */}
        <ChatAssistant />
      </div>
    </Router>
>>>>>>> ff4f0c93d22f1112230dad999864f5dae02b17b2
  );
}

export default App;