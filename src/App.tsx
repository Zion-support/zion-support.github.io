import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { EnhancedFuturisticFooter as Footer } from './components/EnhancedFuturisticFooter';
import { ChatAssistant } from './components/ChatAssistant';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { SEO } from './components/SEO';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { ErrorBoundary } from './components/ErrorBoundary';

// Lazy load pages with error boundaries
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Services = React.lazy(() => import('./pages/Services'));
const Solutions = React.lazy(() => import('./pages/solutions'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const CaseStudies = React.lazy(() => import('./pages/case-studies'));
const AISolutions = React.lazy(() => import('./pages/AISolutions'));
const ResearchDevelopment = React.lazy(() => import('./pages/ResearchDevelopment'));
const News = React.lazy(() => import('./pages/News'));
const Team = React.lazy(() => import('./pages/Team'));
const Partners = React.lazy(() => import('./pages/Partners'));
const Events = React.lazy(() => import('./pages/Events'));
const Help = React.lazy(() => import('./pages/Help'));
const Docs = React.lazy(() => import('./pages/Docs'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const Sitemap = React.lazy(() => import('./pages/sitemap'));
const Webinars = React.lazy(() => import('./pages/Webinars'));
const WhitePapers = React.lazy(() => import('./pages/WhitePapers'));
const Support = React.lazy(() => import('./pages/Support'));

// Service pages - only import existing ones
const CloudDevOps = React.lazy(() => import('./pages/services/CloudDevOps'));
const DigitalTwin = React.lazy(() => import('./pages/services/DigitalTwin'));
const DataAnalytics = React.lazy(() => import('./pages/services/DataAnalytics'));
const ITInfrastructure = React.lazy(() => import('./pages/services/ITInfrastructure'));
const AIBusinessIntelligence = React.lazy(() => import('./pages/services/AIBusinessIntelligence'));
const MicroSaaSProducts = React.lazy(() => import('./pages/services/MicroSaaSProducts'));
const AIHealthcarePlatform = React.lazy(() => import('./pages/services/ai-healthcare-platform'));
const AIAutonomousResearchAssistant = React.lazy(() => import('./pages/services/ai-autonomous-research-assistant'));
const AIQuantumHybridPlatform = React.lazy(() => import('./pages/services/ai-quantum-hybrid-platform'));

// Enhanced placeholder pages with better UX
const Careers = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <SEO 
      title="Careers - Zion Tech Group"
      description="Join our team of technology experts and help shape the future of AI-powered business solutions."
    />
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Careers</h1>
      <p className="text-xl text-gray-300">Join our team</p>
      <p className="text-lg text-gray-400 mt-2">We're always looking for talented individuals</p>
    </div>
  </div>
);

const Marketplace = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <SEO 
      title="Marketplace - Zion Tech Group"
      description="Explore our marketplace of AI-powered technology solutions and services."
    />
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Marketplace</h1>
      <p className="text-xl text-gray-300">Explore our solutions</p>
      <p className="text-lg text-gray-400 mt-2">Coming soon - AI-powered marketplace</p>
    </div>
  </div>
);

// Enhanced loading component
const PageLoader = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <div className="text-center text-white">
      <LoadingSpinner />
      <p className="text-lg text-gray-300 mt-4">Loading amazing content...</p>
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-futuristic">
          <AppHeader />
          
          <main className="flex-1">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/cookies" element={<Cookies />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/services" element={<Services />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/ai-solutions" element={<AISolutions />} />
                <Route path="/research-development" element={<ResearchDevelopment />} />
                <Route path="/events" element={<Events />} />
                <Route path="/news" element={<News />} />
                <Route path="/team" element={<Team />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/help" element={<Help />} />
                <Route path="/docs" element={<Docs />} />
                <Route path="/services/micro-saas" element={<MicroSaaSProducts />} />
                <Route path="/request-quote" element={<RequestQuote />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/sitemap" element={<Sitemap />} />
                <Route path="/webinars" element={<Webinars />} />
                <Route path="/white-papers" element={<WhitePapers />} />
                <Route path="/support" element={<Support />} />
                
                {/* Service Routes - only for existing pages */}
                <Route path="/services/cloud-devops" element={<CloudDevOps />} />
                <Route path="/services/digital-twin" element={<DigitalTwin />} />
                <Route path="/services/data-analytics" element={<DataAnalytics />} />
                <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                <Route path="/services/ai-healthcare-platform" element={<AIHealthcarePlatform />} />
                <Route path="/services/ai-autonomous-research-assistant" element={<AIAutonomousResearchAssistant />} />
                <Route path="/services/ai-quantum-hybrid-platform" element={<AIQuantumHybridPlatform />} />
                
                {/* Catch all route */}
                <Route path="*" element={<Home />} />
              </Routes>
            </Suspense>
          </main>
          
          <Footer />
          <ChatAssistant />
          <PerformanceOptimizer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;