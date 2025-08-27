import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FuturisticNavigation } from './components/FuturisticNavigation';
import { FuturisticFooter } from './components/FuturisticFooter';
import { FuturisticAnimatedBackground } from './components/FuturisticAnimatedBackground';
import { ChatAssistant } from './components/ChatAssistant';
// Lazy load pages - comprehensive import list
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
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
// Our Additional Innovative Services
const AdvancedInnovativeServicesShowcase2026 = React.lazy(() => import('./pages/AdvancedInnovativeServicesShowcase2026'));
const InnovativeServicesHub = React.lazy(() => import('./pages/InnovativeServicesHub'));
// New pages from incoming branch
const MicroSaasServicesPage = lazy(() => import('./pages/MicroSaasServices'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
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
);
function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-zion-slate-dark">
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
              {/* Our New Innovative Services Routes */}
              <Route path="/advanced-services-2026" element={<AdvancedInnovativeServicesShowcase2026 />} />
              <Route path="/innovative-services-hub" element={<InnovativeServicesHub />} />
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
              <Route path="/micro-saas-services" element={<MicroSaasServicesPage />} />
              <Route path="/pricing-page" element={<PricingPage />} />
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
  );
}
export default App;