import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';
import LoadingSpinner from './components/ui/LoadingSpinner';
import ErrorBoundary from './components/ErrorBoundary';
import PerformanceMonitor from './components/PerformanceMonitor';
import Analytics from './components/Analytics';

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

const Sitemap = React.lazy(() => import('./pages/Sitemap'));

const Signup = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Sign Up</h1>
      <p className="text-xl text-gray-300">Create your account</p>
    </div>
  </div>
);

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
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-futuristic">
          <AppHeader />
          
          <main className="flex-1">
            <Suspense fallback={<LoadingSpinner />}>
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
                <Route path="/sitemap" element={<Sitemap />} />
                <Route path="/green-it" element={<GreenIT />} />
                <Route path="/partners" element={<PartnersPage />} />
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
                
                {/* Service Routes - only for existing pages */}
                <Route path="/services/cloud-devops" element={<CloudDevOps />} />
                <Route path="/services/digital-twin" element={<DigitalTwin />} />
                <Route path="/services/data-analytics" element={<DataAnalytics />} />
                <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
                <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />} />
                
                {/* Catch all route */}
                <Route path="*" element={<Home />} />
              </Routes>
            </Suspense>
          </main>
          
          <Footer />
          <ChatAssistant />
          
          {/* Performance and Analytics Components */}
          <PerformanceMonitor />
          <Analytics />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;