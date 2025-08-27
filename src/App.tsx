import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';
import LoadingSpinner from './components/ui/LoadingSpinner';

// Lazy load pages - only import existing ones
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const PartnersPage = React.lazy(() => import('./pages/Partners'));
const Login = React.lazy(() => import('./pages/Login'));
const GreenIT = React.lazy(() => import('./pages/GreenIT'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const Solutions = React.lazy(() => import('./pages/Solutions'));
const ResearchDevelopment = React.lazy(() => import('./pages/ResearchDevelopment'));
const News = React.lazy(() => import('./pages/News'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const HelpCenter = React.lazy(() => import('./pages/HelpCenter'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));

// Service pages - only import existing ones
const CloudDevOps = React.lazy(() => import('./pages/services/CloudDevOps'));
const DigitalTwin = React.lazy(() => import('./pages/services/DigitalTwin'));
const DataAnalytics = React.lazy(() => import('./pages/services/DataAnalytics'));
const ITInfrastructure = React.lazy(() => import('./pages/services/ITInfrastructure'));
const AIBusinessIntelligence = React.lazy(() => import('./pages/services/AIBusinessIntelligence'));

// Import the new pages
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Careers = React.lazy(() => import('./pages/Careers'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const UltimateInnovativeServicesShowcase2025 = React.lazy(() => import('./pages/UltimateInnovativeServicesShowcase2025.tsx'));
const ComprehensiveServicesShowcase2026 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2026'));
const ComprehensivePricingGuide2026 = React.lazy(() => import('./pages/ComprehensivePricingGuide2026'));
const ExpandedServicesShowcase2027 = React.lazy(() => import('./pages/ExpandedServicesShowcase2027'));
const ExpandedServicesPricingGuide2027 = React.lazy(() => import('./pages/ExpandedServicesPricingGuide2027'));

const Sitemap = React.lazy(() => import('./pages/Sitemap'));

<<<<<<< HEAD
// Additional pages that were missing
const Solutions = React.lazy(() => import('./pages/Solutions'));
const ResearchDevelopment = React.lazy(() => import('./pages/ResearchDevelopment'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const News = React.lazy(() => import('./pages/News'));
const Events = React.lazy(() => import('./pages/Events'));
const Documentation = React.lazy(() => import('./pages/Documentation'));
const WhitePapers = React.lazy(() => import('./pages/WhitePapers'));
const Webinars = React.lazy(() => import('./pages/Webinars'));
const Training = React.lazy(() => import('./pages/Training'));
const HelpCenter = React.lazy(() => import('./pages/HelpCenter'));
const Support = React.lazy(() => import('./pages/Support'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

// Service-specific pages
const AIServices = React.lazy(() => import('./pages/services/AIServices'));
const CloudServices = React.lazy(() => import('./pages/services/CloudServices'));
const CybersecurityServices = React.lazy(() => import('./pages/services/CybersecurityServices'));
const InfrastructureServices = React.lazy(() => import('./pages/services/InfrastructureServices'));
const TransformationServices = React.lazy(() => import('./pages/services/TransformationServices'));
const ConsultingServices = React.lazy(() => import('./pages/services/ConsultingServices'));
=======
const Signup = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Sign Up</h1>
      <p className="text-xl text-gray-300">Create your account</p>
    </div>
  </div>
);
>>>>>>> cursor/expand-services-and-deploy-updates-fd31

const Marketplace = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Marketplace</h1>
      <p className="text-xl text-gray-300">Browse our services and solutions</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-futuristic">
        <AppHeader />
        
        <main className="flex-1">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Company Pages */}
              <Route path="/careers" element={<Careers />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/research-development" element={<ResearchDevelopment />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/news" element={<News />} />
              <Route path="/events" element={<Events />} />
              <Route path="/partners" element={<PartnersPage />} />
              
              {/* Resource Pages */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/docs" element={<Documentation />} />
              <Route path="/white-papers" element={<WhitePapers />} />
              <Route path="/webinars" element={<Webinars />} />
              <Route path="/training" element={<Training />} />
              
              {/* Support Pages */}
              <Route path="/help" element={<HelpCenter />} />
              <Route path="/support" element={<Support />} />
              <Route path="/faq" element={<FAQ />} />
              
              {/* Legal Pages */}
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/sitemap" element={<Sitemap />} />
<<<<<<< HEAD
              
              {/* Service-Specific Routes */}
              <Route path="/ai-services" element={<AIServices />} />
              <Route path="/cloud-services" element={<CloudServices />} />
              <Route path="/cybersecurity-services" element={<CybersecurityServices />} />
              <Route path="/infrastructure-services" element={<InfrastructureServices />} />
              <Route path="/transformation-services" element={<TransformationServices />} />
              <Route path="/consulting-services" element={<ConsultingServices />} />
              
              {/* Additional Routes */}
              <Route path="/services" element={<Services />} />
=======
>>>>>>> cursor/expand-services-and-deploy-updates-fd31
              <Route path="/green-it" element={<GreenIT />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/help-center" element={<HelpCenter />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/research-development" element={<ResearchDevelopment />} />
              <Route path="/news" element={<News />} />
              <Route path="/request-quote" element={<RequestQuote />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/ultimate-services-2025" element={<UltimateInnovativeServicesShowcase2025 />} />
              <Route path="/revolutionary-services-2026" element={<ComprehensiveServicesShowcase2026 />} />
              <Route path="/pricing-guide-2026" element={<ComprehensivePricingGuide2026 />} />
              <Route path="/expanded-services-2027" element={<ExpandedServicesShowcase2027 />} />
              <Route path="/expanded-services-pricing-2027" element={<ExpandedServicesPricingGuide2027 />} />
              
<<<<<<< HEAD
              {/* Catch all route */}
              <Route path="*" element={<NotFound />} />
=======
              {/* Service Routes - only for existing pages */}
              <Route path="/services/cloud-devops" element={<CloudDevOps />} />
              <Route path="/services/digital-twin" element={<DigitalTwin />} />
              <Route path="/services/data-analytics" element={<DataAnalytics />} />
              <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
              <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
              
              {/* Catch all route */}
              <Route path="*" element={<Home />} />
>>>>>>> cursor/expand-services-and-deploy-updates-fd31
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