import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { FuturisticNavigation } from './components/FuturisticNavigation';
import { FuturisticFooter } from './components/FuturisticFooter';
import { FuturisticAnimatedBackground } from './components/FuturisticAnimatedBackground';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';
import LoadingSpinner from './components/ui/LoadingSpinner';
import SEO from './components/SEO';

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
const ITOnsiteServices = React.lazy(() => import('./pages/ITOnsiteServicesPage'));
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
const Solutions = React.lazy(() => import('./pages/Solutions'));
const ResearchDevelopment = React.lazy(() => import('./pages/ResearchDevelopment'));
const News = React.lazy(() => import('./pages/News'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));

// Service pages
const CybersecurityServices = React.lazy(() => import('./pages/CybersecurityServices.tsx'));
const CloudServices = React.lazy(() => import('./pages/services/Cloud.tsx'));
const BlockchainServices = React.lazy(() => import('./pages/BlockchainServicesPage.tsx'));
const IoTServices = React.lazy(() => import('./pages/IoTServicesPage.tsx'));
const QuantumServices = React.lazy(() => import('./pages/services/QuantumServices.tsx'));
const AIServices = React.lazy(() => import('./pages/AIServicesPage.tsx'));
const DigitalMarketingServices = React.lazy(() => import('./pages/DigitalMarketingServicesPage.tsx'));
const FinancialSolutions = React.lazy(() => import('./pages/FinancialSolutions.tsx'));
const ManufacturingSolutions = React.lazy(() => import('./pages/ManufacturingSolutions.tsx'));
const EnterpriseSolutions = React.lazy(() => import('./pages/solutions/EnterpriseSolutions.tsx'));
const HealthcareSolutions = React.lazy(() => import('./pages/solutions/HealthcareSolutions.tsx'));
const GovernmentSolutions = React.lazy(() => import('./pages/solutions/GovernmentSolutions.tsx'));
const RetailSolutions = React.lazy(() => import('./pages/solutions/RetailSolutions.tsx'));

// New service pages
const AIServicesPage = React.lazy(() => import('./pages/AIServicesPage'));
const MicroSAASServicesPage = React.lazy(() => import('./pages/MicroSAASServicesPage'));
const ITServicesPage = React.lazy(() => import('./pages/ITServicesPage'));
const InnovativeServicesShowcase2027 = React.lazy(() => import('./pages/InnovativeServicesShowcase2027'));
const ComprehensiveServicesOverview2027 = React.lazy(() => import('./pages/ComprehensiveServicesOverview2027'));
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027'));
const EnhancedInnovativeServicesShowcase2027 = React.lazy(() => import('./pages/EnhancedInnovativeServicesShowcase2027'));
const ComprehensiveServicesOverview = React.lazy(() => import('./pages/ComprehensiveServicesOverview'));
const ComprehensivePricingGuide2027New = React.lazy(() => import('./pages/ComprehensivePricingGuide2027'));

// New enhanced service pages
const EnhancedServicesShowcase2025 = React.lazy(() => import('./pages/EnhancedServicesShowcase2025.tsx'));
const ComprehensivePricingGuide2025 = React.lazy(() => import('./pages/ComprehensivePricingGuide2025.tsx'));

// 2026 Innovative Services
const UltimateInnovativeServices2026 = React.lazy(() => import('./pages/UltimateInnovativeServices2026.tsx'));
const ComprehensiveServicesOverview2026 = React.lazy(() => import('./pages/ComprehensiveServicesOverview2026.tsx'));

// New comprehensive marketplace
const ComprehensiveServicesMarketplacePage = React.lazy(() => import('./pages/ComprehensiveServicesMarketplacePage'));

// Service pages - only import existing ones
const CloudDevOps = React.lazy(() => import('./pages/services/CloudDevOps'));
const DigitalTwin = React.lazy(() => import('./pages/services/DigitalTwin'));
const DataAnalytics = React.lazy(() => import('./pages/services/DataAnalytics'));
const ITInfrastructure = React.lazy(() => import('./pages/services/ITInfrastructure'));
const AIBusinessIntelligence = React.lazy(() => import('./pages/services/AIBusinessIntelligence'));

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
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light relative">
          {/* Futuristic Animated Background */}
          <FuturisticAnimatedBackground />
          
          {/* Header */}
          <FuturisticNavigation />
          
          {/* Main Content */}
          <main className="relative z-10">
            <Suspense fallback={<EnhancedLoadingSpinner />}>
              <Routes>
                {/* Main Pages */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/partners" element={<PartnersPage />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/sitemap" element={<Sitemap />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/green-it" element={<GreenIT />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/help-center" element={<HelpCenter />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/research-development" element={<ResearchDevelopment />} />
                <Route path="/news" element={<News />} />
                <Route path="/request-quote" element={<RequestQuote />} />
                <Route path="/marketplace" element={<Marketplace />} />
                
                {/* Enhanced Services */}
                <Route path="/enhanced-services" element={<EnhancedServices />} />
                
                {/* AI Services Routes */}
                <Route path="/ai-services" element={<AIServicesPage />} />
                <Route path="/micro-saas-services" element={<MicroSAASServicesPage />} />
                <Route path="/it-services" element={<ITServicesPage />} />
                <Route path="/enhanced-services-showcase-2025" element={<EnhancedServicesShowcase2025 />} />
                <Route path="/comprehensive-pricing-guide-2025" element={<ComprehensivePricingGuide2025 />} />
                
                {/* 2026 Innovative Services Routes */}
                <Route path="/ultimate-innovative-services-2026" element={<UltimateInnovativeServices2026 />} />
                <Route path="/comprehensive-services-overview-2026" element={<ComprehensiveServicesOverview2026 />} />
                
                {/* 2027 Services */}
                <Route path="/innovative-services-showcase-2027" element={<InnovativeServicesShowcase2027 />} />
                <Route path="/comprehensive-services-overview-2027" element={<ComprehensiveServicesOverview2027 />} />
                <Route path="/comprehensive-pricing-guide-2027" element={<ComprehensivePricingGuide2027 />} />
                <Route path="/enhanced-innovative-services-showcase-2027" element={<EnhancedInnovativeServicesShowcase2027 />} />
                <Route path="/comprehensive-services-overview" element={<ComprehensiveServicesOverview />} />
                <Route path="/comprehensive-pricing-guide-2027-new" element={<ComprehensivePricingGuide2027New />} />
                
                {/* Emerging Tech Routes */}
                <Route path="/emerging-tech" element={<GreenIT />} />
                <Route path="/emerging-tech/:service" element={<GreenIT />} />
                
                {/* New Comprehensive Marketplace Route */}
                <Route path="/comprehensive-services-marketplace" element={<ComprehensiveServicesMarketplacePage />} />
                
                {/* Additional Service Routes */}
                <Route path="/cybersecurity" element={<CybersecurityServices />} />
                <Route path="/cloud-services" element={<CloudServices />} />
                <Route path="/blockchain" element={<BlockchainServices />} />
                <Route path="/iot-services" element={<IoTServices />} />
                <Route path="/quantum-services" element={<QuantumServices />} />
                <Route path="/digital-marketing" element={<DigitalMarketingServices />} />
                <Route path="/financial-solutions" element={<FinancialSolutions />} />
                <Route path="/manufacturing-solutions" element={<ManufacturingSolutions />} />
                
                {/* Solutions Routes */}
                <Route path="/solutions/enterprise" element={<EnterpriseSolutions />} />
                <Route path="/solutions/healthcare" element={<HealthcareSolutions />} />
                <Route path="/solutions/government" element={<GovernmentSolutions />} />
                <Route path="/solutions/retail" element={<RetailSolutions />} />
                
                {/* Enhanced Services 2025 */}
                <Route path="/enhanced-services-2025" element={<EnhancedServicesShowcase2025 />} />
                <Route path="/comprehensive-pricing-2025" element={<ComprehensivePricingGuide2025 />} />
                
                {/* 2026 Services */}
                <Route path="/innovative-services-2026" element={<UltimateInnovativeServices2026 />} />
                <Route path="/services-overview-2026" element={<ComprehensiveServicesOverview2026 />} />
                
                {/* Other Routes */}
                <Route path="/talent" element={<Talent />} />
                <Route path="/equipment" element={<Equipment />} />
                <Route path="/it-onsite" element={<ITOnsiteServices />} />
                <Route path="/help" element={<HelpCenter />} />
                <Route path="/security" element={<Security />} />
                <Route path="/status" element={<Status />} />
                <Route path="/cookies" element={<Cookies />} />
                <Route path="/accessibility" element={<Accessibility />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                
                {/* Service Routes - only for existing pages */}
                <Route path="/services/cloud-devops" element={<CloudDevOps />} />
                <Route path="/services/digital-twin" element={<DigitalTwin />} />
                <Route path="/services/data-analytics" element={<DataAnalytics />} />
                <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                
                {/* 404 Route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          
          {/* Footer */}
          <FuturisticFooter />
          
          {/* Chat Assistant */}
          <ChatAssistant />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;