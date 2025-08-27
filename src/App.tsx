import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { EnhancedHeader } from './components/header/EnhancedHeader';
import { EnhancedFooter } from './components/footer/EnhancedFooter';
import { FuturisticAnimatedBackground } from './components/backgrounds/FuturisticAnimatedBackground';

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
const EnhancedServicesPage = React.lazy(() => import('./pages/EnhancedServicesPage'));
const EnhancedServicesShowcase2025 = React.lazy(() => import('./pages/EnhancedServicesShowcase2025'));
const RevolutionaryServicesShowcase2030 = React.lazy(() => import('./pages/RevolutionaryServicesShowcase2030'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote'));

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

// Admin pages
const Admin = React.lazy(() => import('./pages/Admin.tsx'));
const AdminDashboard = React.lazy(() => import('./pages/AdminDashboard.tsx'));

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
        {/* Futuristic animated background */}
        <FuturisticAnimatedBackground variant="default" intensity="low" />
        
        {/* Enhanced Header */}
        <EnhancedHeader />
        
        {/* Main Content */}
        <main className="pt-24">
          <Suspense fallback={<EnhancedLoadingSpinner />}>
            <Routes>
              {/* Main Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              
              {/* Information Pages */}
              <Route path="/faq" element={<FAQ />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/partners-page" element={<PartnersPage />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/talent" element={<Talent />} />
              <Route path="/equipment" element={<Equipment />} />
              <Route path="/green-it" element={<GreenIT />} />
              <Route path="/it-onsite-services" element={<ITOnsiteServices />} />
              <Route path="/help" element={<HelpCenter />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/security" element={<Security />} />
              <Route path="/status" element={<Status />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/accessibility" element={<Accessibility />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/enhanced-services" element={<EnhancedServices />} />
              <Route path="/enhanced-services-2025" element={<EnhancedServicesPage />} />
              <Route path="/request-quote" element={<RequestQuote />} />
              
              {/* User Dashboard */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              
              {/* Service Routes */}
              <Route path="/services/cybersecurity" element={<CybersecurityServices />} />
              <Route path="/services/cloud" element={<CloudServices />} />
              <Route path="/services/blockchain" element={<BlockchainServices />} />
              <Route path="/services/iot" element={<IoTServices />} />
              <Route path="/services/quantum" element={<QuantumServices />} />
              <Route path="/services/ai" element={<AIServices />} />
              <Route path="/services/digital-marketing" element={<DigitalMarketingServices />} />
              <Route path="/services/financial" element={<FinancialSolutions />} />
              <Route path="/services/manufacturing" element={<ManufacturingSolutions />} />
              
              {/* Solution Routes */}
              <Route path="/solutions/enterprise" element={<EnterpriseSolutions />} />
              <Route path="/solutions/healthcare" element={<HealthcareSolutions />} />
              <Route path="/solutions/government" element={<GovernmentSolutions />} />
              <Route path="/solutions/retail" element={<RetailSolutions />} />
              
              {/* AI Services Routes */}
              <Route path="/ai-services" element={<EnhancedServicesShowcase2025 />} />
              <Route path="/cloud-devops" element={<EnhancedServicesShowcase2025 />} />
              <Route path="/emerging-tech" element={<EnhancedServicesShowcase2025 />} />
              <Route path="/solutions" element={<EnhancedServicesShowcase2025 />} />
              
              {/* Revolutionary Services Routes */}
              <Route path="/revolutionary-services-2030" element={<RevolutionaryServicesShowcase2030 />} />
              
              {/* Company Routes */}
              <Route path="/leadership" element={<About />} />
              <Route path="/news" element={<Blog />} />
              <Route path="/case-studies" element={<About />} />
              
              {/* Resources Routes */}
              <Route path="/docs" element={<About />} />
              <Route path="/api" element={<About />} />
              <Route path="/training" element={<About />} />
              <Route path="/webinars" element={<About />} />
              <Route path="/white-papers" element={<About />} />
              <Route path="/research" element={<About />} />
              
              {/* Industry Solutions Routes */}
              <Route path="/solutions/healthcare" element={<EnhancedServicesShowcase2025 />} />
              <Route path="/solutions/financial" element={<EnhancedServicesShowcase2025 />} />
              <Route path="/solutions/manufacturing" element={<EnhancedServicesShowcase2025 />} />
              <Route path="/solutions/retail" element={<EnhancedServicesShowcase2025 />} />
              <Route path="/solutions/transportation" element={<EnhancedServicesShowcase2025 />} />
              <Route path="/solutions/energy" element={<EnhancedServicesShowcase2025 />} />
              <Route path="/solutions/real-estate" element={<EnhancedServicesShowcase2025 />} />
              <Route path="/solutions/agriculture" element={<EnhancedServicesShowcase2025 />} />
              
              {/* Admin Routes */}
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              
              {/* Catch-all route for 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        
        {/* Enhanced Footer */}
        <EnhancedFooter />
      </div>
    </Router>
  );
}

export default App;