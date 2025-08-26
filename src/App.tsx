import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader.jsx';
import { Footer } from './components/Footer.jsx';
import { ChatAssistant } from './components/ChatAssistant.jsx';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home.jsx'));
const About = React.lazy(() => import('./pages/About.jsx'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage.jsx'));
const ComprehensiveServices = React.lazy(() => import('./pages/ComprehensiveServices.jsx'));
const ComprehensivePricing = React.lazy(() => import('./pages/ComprehensivePricing.jsx'));
const Contact = React.lazy(() => import('./pages/Contact.jsx'));
const Login = React.lazy(() => import('./pages/Login.jsx'));
const FAQ = React.lazy(() => import('./pages/FAQ.jsx'));
const Privacy = React.lazy(() => import('./pages/Privacy.jsx'));
const Terms = React.lazy(() => import('./pages/Terms.jsx'));
const Cookies = React.lazy(() => import('./pages/Cookies.jsx'));
const Accessibility = React.lazy(() => import('./pages/Accessibility.jsx'));
const Marketplace = React.lazy(() => import('./pages/Marketplace.jsx'));
const Talent = React.lazy(() => import('./pages/Talent.jsx'));
const Equipment = React.lazy(() => import('./pages/EquipmentPage.jsx'));
const Categories = React.lazy(() => import('./pages/CategoryDetail.jsx'));
const GreenIT = React.lazy(() => import('./pages/GreenIT.jsx'));
const ITOnsiteServices = React.lazy(() => import('./pages/EnterpriseIT.jsx'));
const Blog = React.lazy(() => import('./pages/Blog.jsx'));
const Partners = React.lazy(() => import('./pages/Partners.jsx'));
const Careers = React.lazy(() => import('./pages/Careers.jsx'));
const Help = React.lazy(() => import('./pages/Help.jsx'));
const Security = React.lazy(() => import('./pages/Security.jsx'));
const Status = React.lazy(() => import('./pages/Status.jsx'));
const Sitemap = React.lazy(() => import('./pages/Sitemap.jsx'));
const ComprehensiveServicesShowcase2029 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2029.tsx'));

// Additional service pages
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const PartnersPage = React.lazy(() => import('./pages/PartnersPage'));
const Services = React.lazy(() => import('./pages/Services'));
const EnhancedServices = React.lazy(() => import('./pages/EnhancedServices'));
const AIServicesPage = React.lazy(() => import('./pages/AIServicesPage'));
const MicroSAASServicesPage = React.lazy(() => import('./pages/MicroSAASServicesPage'));
const ITServicesPage = React.lazy(() => import('./pages/ITServicesPage'));
const InnovativeServicesShowcase2027 = React.lazy(() => import('./pages/InnovativeServicesShowcase2027'));
const ComprehensiveServicesOverview2027 = React.lazy(() => import('./pages/ComprehensiveServicesOverview2027'));
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027'));
const EnhancedInnovativeServicesShowcase2027 = React.lazy(() => import('./pages/EnhancedInnovativeServicesShowcase2027'));
const ComprehensiveServicesOverview = React.lazy(() => import('./pages/ComprehensiveServicesOverview'));
const ComprehensivePricingGuide2027New = React.lazy(() => import('./pages/ComprehensivePricingGuide2027'));

// Service pages
const ServicesPage = React.lazy(() => import('./pages/services'));
const AIAnalyticsPage = React.lazy(() => import('./pages/services/ai-analytics'));
const CybersecurityPage = React.lazy(() => import('./pages/services/cybersecurity'));
const CloudDevOpsPage = React.lazy(() => import('./pages/services/cloud-devops'));

// Additional pages
const SolutionsPage = React.lazy(() => import('./pages/solutions'));

const LoadingSpinner = () => (
  <div className="min-h-screen bg-futuristic flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-zion-cyan text-lg">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
        <AppHeader />
        <main className="flex-1">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Main Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/comprehensive-services" element={<ComprehensiveServices />} />
              <Route path="/comprehensive-pricing" element={<ComprehensivePricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/faq" element={<FAQ />} />
              
              {/* Legal & Policy Routes */}
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/accessibility" element={<Accessibility />} />
              
              {/* Marketplace Routes */}
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/talent" element={<Talent />} />
              <Route path="/equipment" element={<Equipment />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/green-it" element={<GreenIT />} />
              <Route path="/it-onsite-services" element={<ITOnsiteServices />} />
              
              {/* Company Routes */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/careers" element={<Careers />} />
              
              {/* Support Routes */}
              <Route path="/help" element={<Help />} />
              <Route path="/security" element={<Security />} />
              <Route path="/status" element={<Status />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/services/showcase-2029" element={<ComprehensiveServicesShowcase2029 />} />
              
              {/* Additional Routes */}
              <Route path="/enhanced-services" element={<EnhancedServices />} />
              
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
              <Route path="/pricing-guide" element={<ComprehensivePricingGuide2027New />} />
              
              {/* Emerging Tech Routes */}
              <Route path="/emerging-tech" element={<GreenIT />} />
              <Route path="/emerging-tech/:service" element={<GreenIT />} />
              
              {/* Service routes */}
              <Route path="/services/ai-analytics" element={<AIAnalyticsPage />} />
              <Route path="/services/cybersecurity" element={<CybersecurityPage />} />
              <Route path="/services/cloud-devops" element={<CloudDevOpsPage />} />
              
              {/* Additional routes */}
              <Route path="/solutions" element={<SolutionsPage />} />
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