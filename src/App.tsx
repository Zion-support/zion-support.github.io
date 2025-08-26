import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';

// Lazy load pages - only import existing components
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
const Services = React.lazy(() => import('./pages/Services'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const Signup = React.lazy(() => import('./pages/Signup'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const ComprehensiveServicesPage = React.lazy(() => import('./pages/ComprehensiveServicesPage'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote'));
const ZionHireAI = React.lazy(() => import('./pages/ZionHireAI'));
const CommunityPage = React.lazy(() => import('./pages/CommunityPage'));
const Profile = React.lazy(() => import('./pages/Profile'));
const Cart = React.lazy(() => import('./pages/Cart'));
const Orders = React.lazy(() => import('./pages/Orders'));
const ProductPage = React.lazy(() => import('./pages/ProductPage'));
const CategoryDetail = React.lazy(() => import('./pages/CategoryDetail'));
const ProjectDetails = React.lazy(() => import('./pages/ProjectDetails'));
const PortfolioBuilder = React.lazy(() => import('./pages/PortfolioBuilder'));
const AIBusinessSolutions = React.lazy(() => import('./pages/AIBusinessSolutions'));
const AIAnalyticsDashboard = React.lazy(() => import('./pages/AIAnalyticsDashboard'));
const BlockchainServicesPage = React.lazy(() => import('./pages/BlockchainServicesPage'));
const CloudInfrastructure = React.lazy(() => import('./pages/CloudInfrastructure'));
const CybersecuritySuite = React.lazy(() => import('./pages/CybersecuritySuite'));
const DigitalTransformation = React.lazy(() => import('./pages/DigitalTransformation'));
const FinancialSolutions = React.lazy(() => import('./pages/FinancialSolutions'));
const IoTServicesPage = React.lazy(() => import('./pages/IoTServicesPage'));
const ManufacturingSolutions = React.lazy(() => import('./pages/ManufacturingSolutions'));
const QuantumTechnology = React.lazy(() => import('./pages/QuantumTechnology'));
const ServicesOverview = React.lazy(() => import('./pages/ServicesOverview'));
const ServicesPricingPage = React.lazy(() => import('./pages/ServicesPricingPage'));
const ServicesShowcase = React.lazy(() => import('./pages/ServicesShowcase'));
const EnhancedServicesShowcase = React.lazy(() => import('./pages/EnhancedServicesShowcase'));
const ComprehensiveServicesOverview = React.lazy(() => import('./pages/ComprehensiveServicesOverview'));
const AdvancedServicesPage = React.lazy(() => import('./pages/AdvancedServicesPage'));
const BusinessSolutionsPage = React.lazy(() => import('./pages/BusinessSolutionsPage'));
const CloudMigrationServices = React.lazy(() => import('./pages/CloudMigrationServices'));
const DigitalMarketingServicesPage = React.lazy(() => import('./pages/DigitalMarketingServicesPage'));
const EnterpriseIT = React.lazy(() => import('./pages/EnterpriseIT'));
const ExpandedServicesPage = React.lazy(() => import('./pages/ExpandedServicesPage'));
const MicroSaasServices = React.lazy(() => import('./pages/MicroSaasServices'));
const NewServicesOverview = React.lazy(() => import('./pages/NewServicesOverview'));
const NextGenInnovativeServices = React.lazy(() => import('./pages/NextGenInnovativeServices'));
const EnhancedInnovativeServices = React.lazy(() => import('./pages/EnhancedInnovativeServices'));
const ServicesComparisonPage = React.lazy(() => import('./pages/ServicesComparisonPage'));
const UltimateHomepage2025 = React.lazy(() => import('./pages/UltimateHomepage2025'));
const EnhancedComprehensiveServicesShowcase = React.lazy(() => import('./pages/EnhancedComprehensiveServicesShowcase'));
const ComprehensiveContact = React.lazy(() => import('./pages/ComprehensiveContact'));
const EnhancedContactCTA = React.lazy(() => import('./components/EnhancedContactCTA'));
const EnhancedTestimonials = React.lazy(() => import('./components/EnhancedTestimonials'));
const EnhancedAbout = React.lazy(() => import('./components/EnhancedAbout'));
const EnhancedSEO = React.lazy(() => import('./components/EnhancedSEO'));
const EnhancedServicesShowcaseComponent = React.lazy(() => import('./components/EnhancedServicesShowcase'));
const EnhancedComprehensiveServicesShowcaseComponent = React.lazy(() => import('./components/EnhancedComprehensiveServicesShowcase'));

// Enhanced loading component with skeleton
const LoadingFallback = () => (
  <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light flex items-center justify-center">
    <div className="text-center space-y-4">
      <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
      <p className="text-cyan-400 text-lg font-medium">Loading Zion...</p>
      <p className="text-gray-300 text-sm">Preparing your AI marketplace experience</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        <AppHeader />
        
        <main className="flex-1">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              {/* Core Routes */}
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
              <Route path="/green-it" element={<GreenIT />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              
              {/* Services Routes */}
              <Route path="/services" element={<Services />} />
              <Route path="/services-page" element={<ServicesPage />} />
              <Route path="/comprehensive-services" element={<ComprehensiveServicesPage />} />
              <Route path="/services-overview" element={<ServicesOverview />} />
              <Route path="/services-showcase" element={<ServicesShowcase />} />
              <Route path="/enhanced-services-showcase" element={<EnhancedServicesShowcase />} />
              <Route path="/comprehensive-services-overview" element={<ComprehensiveServicesOverview />} />
              <Route path="/advanced-services" element={<AdvancedServicesPage />} />
              <Route path="/business-solutions" element={<BusinessSolutionsPage />} />
              <Route path="/cloud-infrastructure" element={<CloudInfrastructure />} />
              <Route path="/cybersecurity-suite" element={<CybersecuritySuite />} />
              <Route path="/digital-transformation" element={<DigitalTransformation />} />
              <Route path="/financial-solutions" element={<FinancialSolutions />} />
              <Route path="/iot-services" element={<IoTServicesPage />} />
              <Route path="/manufacturing-solutions" element={<ManufacturingSolutions />} />
              <Route path="/quantum-technology" element={<QuantumTechnology />} />
              <Route path="/blockchain-services" element={<BlockchainServicesPage />} />
              <Route path="/cloud-migration" element={<CloudMigrationServices />} />
              <Route path="/digital-marketing" element={<DigitalMarketingServicesPage />} />
              <Route path="/enterprise-it" element={<EnterpriseIT />} />
              <Route path="/expanded-services" element={<ExpandedServicesPage />} />
              <Route path="/micro-saas" element={<MicroSaasServices />} />
              <Route path="/new-services" element={<NewServicesOverview />} />
              <Route path="/next-gen-services" element={<NextGenInnovativeServices />} />
              <Route path="/enhanced-innovative-services" element={<EnhancedInnovativeServices />} />
              <Route path="/services-comparison" element={<ServicesComparisonPage />} />
              <Route path="/ultimate-homepage-2025" element={<UltimateHomepage2025 />} />
              <Route path="/enhanced-comprehensive-services" element={<EnhancedComprehensiveServicesShowcase />} />
              
              {/* Pricing Routes */}
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/services-pricing" element={<ServicesPricingPage />} />
              
              {/* User Routes */}
              <Route path="/profile" element={<Profile />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/category/:id" element={<CategoryDetail />} />
              <Route path="/project/:id" element={<ProjectDetails />} />
              <Route path="/portfolio-builder" element={<PortfolioBuilder />} />
              
              {/* AI & Business Routes */}
              <Route path="/ai-business-solutions" element={<AIBusinessSolutions />} />
              <Route path="/ai-analytics" element={<AIAnalyticsDashboard />} />
              <Route path="/zion-hire-ai" element={<ZionHireAI />} />
              <Route path="/hire-ai" element={<ZionHireAI />} />
              <Route path="/request-quote" element={<RequestQuote />} />
              
              {/* Community Routes */}
              <Route path="/community" element={<CommunityPage />} />
              
              {/* Enhanced Component Routes */}
              <Route path="/enhanced-contact" element={<EnhancedContactCTA />} />
              <Route path="/enhanced-testimonials" element={<EnhancedTestimonials />} />
              <Route path="/enhanced-about" element={<EnhancedAbout />} />
              <Route path="/enhanced-seo" element={<EnhancedSEO />} />
              <Route path="/enhanced-services-showcase-component" element={<EnhancedServicesShowcaseComponent />} />
              <Route path="/enhanced-comprehensive-services-component" element={<EnhancedComprehensiveServicesShowcaseComponent />} />
            </Routes>
          </Suspense>
        </main>
        
        <Footer />
        <ChatAssistant />
      </div>
    </Router>
  );
}

export default App;