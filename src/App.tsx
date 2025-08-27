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

// Additional enhanced services from remote
const ComprehensiveServicesOverview2027 = React.lazy(() => import('./pages/ComprehensiveServicesOverview2027'));
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027'));
const InnovativeServicesShowcase2027 = React.lazy(() => import('./pages/InnovativeServicesShowcase2027'));
const UltimateInnovativeServicesShowcase2025 = React.lazy(() => import('./pages/UltimateInnovativeServicesShowcase2025'));
const ComprehensiveServicesLanding2025 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2025'));
const UltimateServicesShowcase2026 = React.lazy(() => import('./pages/UltimateServicesShowcase2026'));

// 2026 Innovative Services - Our core services
const UltimateInnovativeServices2026 = React.lazy(() => import('./pages/UltimateInnovativeServices2026'));
const ComprehensiveServicesOverview2026 = React.lazy(() => import('./pages/ComprehensiveServicesOverview2026'));

// Service pages
const AIServices = React.lazy(() => import('./pages/services/AIServices'));
const CybersecurityServices = React.lazy(() => import('./pages/services/CybersecurityServices'));
const CloudDevOps = React.lazy(() => import('./pages/services/CloudDevOps'));
const IoTServices = React.lazy(() => import('./pages/services/IoTServices'));
const QuantumComputing = React.lazy(() => import('./pages/services/QuantumComputing'));
const BlockchainServices = React.lazy(() => import('./pages/services/BlockchainServices'));
const DigitalTwin = React.lazy(() => import('./pages/services/GreenIT'));
const Sustainability = React.lazy(() => import('./pages/services/GreenIT'));
const DataAnalytics = React.lazy(() => import('./pages/services/DataAnalytics'));
const ITInfrastructure = React.lazy(() => import('./pages/services/ITInfrastructure'));
const DigitalTransformation = React.lazy(() => import('./pages/services/DigitalTransformation'));
const ConsultingServices = React.lazy(() => import('./pages/services/ConsultingServices'));
const ITOnsiteServicesPage = React.lazy(() => import('./pages/services/ITOnsiteServices'));
const FiveGSolutions = React.lazy(() => import('./pages/services/FiveGNetworkOptimization'));

// Micro SAAS pages
const AIBusinessIntelligence = React.lazy(() => import('./pages/services/AIBusinessIntelligence'));
const CustomerExperience = React.lazy(() => import('./pages/services/AICustomerServiceAutomation'));
const SupplyChain = React.lazy(() => import('./pages/services/ManufacturingSolutions'));
const ContentCreation = React.lazy(() => import('./pages/services/AIMarketingAutomation'));
const HRPlatform = React.lazy(() => import('./pages/services/AIWorkflowAutomation'));

// Enhanced loading component with better UX
const AppLoadingSpinner = () => (
  <EnhancedLoadingSpinner 
    size="xl" 
    variant="default" 
    text="Loading amazing experiences..." 
    theme="zion"
  />
);

function App() {
  return (
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
  );
}

export default App;