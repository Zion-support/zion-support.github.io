import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';
import Sidebar from './components/Sidebar';
import { AccessibilityControls } from './components/AccessibilityControls';
import PerformanceDashboard from './components/PerformanceDashboard';
import { AnalyticsDashboard } from './components/AnalyticsDashboard';
import { AIChatbot } from './components/AIChatbot';
import { CollaborativeTextEditor } from './components/CollaborativeTextEditor';
import { AICodeGenerator } from './components/AICodeGenerator';
import { EnterpriseDashboard } from './components/EnterpriseDashboard';
import { SecurityComplianceDashboard } from './components/SecurityComplianceDashboard';
import { MachineLearningDashboard } from './components/MachineLearningDashboard';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import { LinkHealthMonitor } from './components/LinkHealthMonitor';
import { ThemeProvider } from "./components/ThemeProvider";
import { useScrollToTop } from "./hooks";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import { Toaster } from "./components/ui/toaster";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import { EnhancedErrorBoundary } from './components/EnhancedErrorBoundary';
import EnhancedSEO from './components/EnhancedSEO';
import { EnhancedAccessibility } from './components/EnhancedAccessibility';
import PerformanceMonitor from './components/PerformanceMonitor';
import { ScrollToTop } from './components/ScrollToTop';
import { ContentQualityEnhancer } from './components/ContentQualityEnhancer';
import { BrokenLinkFixer } from './components/BrokenLinkFixer';
import { WebsiteImprovementDashboard } from './components/WebsiteImprovementDashboard';

// Lazy load pages - only import existing ones
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Services = React.lazy(() => import('./pages/ServicesPage'));
const AIServices = React.lazy(() => import('./pages/AIServices'));
const ITServices = React.lazy(() => import('./pages/ITServices'));
const MicroSaaS = React.lazy(() => import('./pages/MicroSaaS'));
const MicroSAASSolutions = React.lazy(() => import('./pages/services/MicroSAASSolutions'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote'));
const News = React.lazy(() => import('./pages/News'));
const Solutions = React.lazy(() => import('./pages/Solutions'));
const ResearchDevelopment = React.lazy(() => import('./pages/ResearchDevelopment'));
const Partners = React.lazy(() => import('./pages/Partners'));
const Help = React.lazy(() => import('./pages/Help'));
const Security = React.lazy(() => import('./pages/Security'));
const Status = React.lazy(() => import('./pages/Status'));
const Team = React.lazy(() => import('./pages/Team'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const GreenIT = React.lazy(() => import('./pages/GreenIT'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));

// New service pages
const AIServicesPage = React.lazy(() => import('./pages/AIServicesPage'));
const MicroSAASServicesPage = React.lazy(() => import('./pages/MicroSAASServicesPage'));
const ITServicesPage = React.lazy(() => import('./pages/ITServicesPage'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const ResearchDevelopment = React.lazy(() => import('./pages/ResearchDevelopment'));
const Solutions = React.lazy(() => import('./pages/Solutions'));

// Additional pages
const Leadership = React.lazy(() => import('./pages/Leadership.jsx'));
const Partners = React.lazy(() => import('./pages/Partners.jsx'));
const Careers = React.lazy(() => import('./pages/Careers.jsx'));
const News = React.lazy(() => import('./pages/News.jsx'));
const Events = React.lazy(() => import('./pages/Events.jsx'));
const Blog = React.lazy(() => import('./pages/Blog.jsx'));
const FAQ = React.lazy(() => import('./pages/FAQ.tsx'));
const Sitemap = React.lazy(() => import('./pages/Sitemap.jsx'));
const Marketplace = React.lazy(() => import('./pages/Marketplace.jsx'));
const Talent = React.lazy(() => import('./pages/Talent.jsx'));
const Equipment = React.lazy(() => import('./pages/EquipmentPage.jsx'));
const Categories = React.lazy(() => import('./pages/Categories.jsx'));
const HelpCenter = React.lazy(() => import('./pages/HelpCenter.jsx'));
const Documentation = React.lazy(() => import('./pages/Documentation.jsx'));
const GreenIT = React.lazy(() => import('./pages/GreenIT.tsx'));
const ManufacturingSolutions = React.lazy(() => import('./pages/ManufacturingSolutions.jsx'));
const MobileApps = React.lazy(() => import('./pages/Mobile.jsx'));
const MicroSAAS = React.lazy(() => import('./pages/MicroSAAS.jsx'));
const BlockchainServices = React.lazy(() => import('./pages/BlockchainServicesPage.jsx'));
const DigitalMarketing = React.lazy(() => import('./pages/DigitalMarketingServicesPage.jsx'));
const IoTServices = React.lazy(() => import('./pages/IoTServicesPage.jsx'));
const ITServices = React.lazy(() => import('./pages/ITServicesPage.tsx'));
const AIServicesOverview = React.lazy(() => import('./pages/AIServicesOverview.jsx'));
const Resources = React.lazy(() => import('./pages/Resources.jsx'));
const Community = React.lazy(() => import('./pages/Community.jsx'));
const Terms = React.lazy(() => import('./pages/Terms.jsx'));
const Privacy = React.lazy(() => import('./pages/Privacy.jsx'));

// Enhanced loading spinner with accessibility
const LoadingSpinner = () => (
  <div 
    className="min-h-screen bg-futuristic flex items-center justify-center"
    role="status"
    aria-label="Loading page content"
  >
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-zion-cyan text-lg">Loading...</p>
      <div className="sr-only">Loading page content, please wait...</div>
    </div>
  </div>
);

// Error boundary component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen bg-futuristic flex items-center justify-center p-4">
    <div className="text-center max-w-md">
      <h2 className="text-2xl font-bold text-red-400 mb-4">Something went wrong</h2>
      <p className="text-zion-slate-light mb-6">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="px-6 py-3 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-dark transition-colors"
      >
        Try again
      </button>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
        <AppHeader />
        <main className="flex-1" role="main">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Main Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/enhanced-services" element={<EnhancedServices />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/research-development" element={<ResearchDevelopment />} />
              <Route path="/solutions" element={<Solutions />} />
              
              {/* Service Routes */}
              <Route path="/services/overview" element={<ComprehensiveServicesOverview2027 />} />
              <Route path="/services/pricing" element={<ComprehensivePricingGuide2027 />} />
              <Route path="/services/showcase" element={<InnovativeServicesShowcase2027 />} />
              <Route path="/ai-services" element={<AIServicesOverview />} />
              <Route path="/it-services" element={<ITServices />} />
              <Route path="/green-it" element={<GreenIT />} />
              <Route path="/manufacturing-solutions" element={<ManufacturingSolutions />} />
              <Route path="/mobile-apps" element={<MobileApps />} />
              <Route path="/micro-saas" element={<MicroSAAS />} />
              <Route path="/blockchain-services" element={<BlockchainServices />} />
              <Route path="/digital-marketing" element={<DigitalMarketing />} />
              <Route path="/iot-services" element={<IoTServices />} />
              
              {/* Company Routes */}
              <Route path="/leadership" element={<Leadership />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/news" element={<News />} />
              <Route path="/events" element={<Events />} />
              
              {/* Marketplace Routes */}
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/talent" element={<Talent />} />
              <Route path="/equipment" element={<Equipment />} />
              <Route path="/categories" element={<Categories />} />
              
              {/* Resource Routes */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/help" element={<HelpCenter />} />
              <Route path="/docs" element={<Documentation />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/community" element={<Community />} />
              
              {/* Legal Routes */}
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ChatAssistant />
        <PerformanceMonitor />
      </div>
    </Router>
  );
}

export default App;