import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { FuturisticNavigation } from './components/FuturisticNavigation';
import { FuturisticFooter } from './components/FuturisticFooter';
import { FuturisticAnimatedBackground } from './components/FuturisticAnimatedBackground';
import { ChatAssistant } from './components/ChatAssistant';
import PerformanceMonitor from './components/PerformanceMonitor';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';

// Lazy load pages with enhanced services
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

// Enhanced services pages
const EnhancedServicesPage = React.lazy(() => import('./pages/EnhancedServicesPage.tsx'));
const ComprehensiveServicesOverview2027 = React.lazy(() => import('./pages/ComprehensiveServicesOverview2027.tsx'));
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027.tsx'));
const InnovativeServicesShowcase2027 = React.lazy(() => import('./pages/InnovativeServicesShowcase2027.tsx'));
const UltimateInnovativeServicesShowcase2025 = React.lazy(() => import('./pages/UltimateInnovativeServicesShowcase2025.tsx'));
const ComprehensiveServicesLanding2025 = React.lazy(() => import('./pages/ComprehensiveServicesLanding2025.tsx'));
const EnhancedZionServicesShowcase2025 = React.lazy(() => import('./pages/EnhancedZionServicesShowcase2025.tsx'));
const ZionTechGroupMarketing2025 = React.lazy(() => import('./pages/ZionTechGroupMarketing2025.tsx'));
const InnovativeServices2028 = React.lazy(() => import('./pages/InnovativeServices2028'));
const Revolutionary2026ServicesShowcase = React.lazy(() => import('./pages/Revolutionary2026ServicesShowcase.tsx'));
const Revolutionary2026PricingGuide = React.lazy(() => import('./pages/Revolutionary2026PricingGuide.tsx'));

// Service pages - only import existing ones
const CloudDevOps = React.lazy(() => import('./pages/services/CloudDevOps'));
const DigitalTwin = React.lazy(() => import('./pages/services/DigitalTwin'));
const DataAnalytics = React.lazy(() => import('./pages/services/DataAnalytics'));
const ITInfrastructure = React.lazy(() => import('./pages/services/ITInfrastructure'));
const AIBusinessIntelligence = React.lazy(() => import('./pages/services/AIBusinessIntelligence'));

// Simple placeholder pages for missing ones
const FAQ = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <SEO 
      title="FAQ - Zion Tech Group"
      description="Frequently asked questions about our AI-powered technology solutions and services."
    />
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">FAQ</h1>
      <p className="text-xl text-gray-300">Frequently asked questions</p>
    </div>
  </div>
);

// Error boundary component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <div className="text-center max-w-md mx-auto px-6">
      <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
        <span className="text-3xl">⚠️</span>
      </div>
      <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
      <p className="text-gray-400 mb-6">
        We're sorry, but something unexpected happened. Please try refreshing the page.
      </p>
      <div className="space-y-3">
        <button
          onClick={resetErrorBoundary}
          className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
        >
          Try Again
        </button>
        <button
          onClick={() => window.location.href = '/'}
          className="w-full px-6 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
        >
          Go Home
        </button>
      </div>
      {process.env.NODE_ENV === 'development' && (
        <details className="mt-6 text-left">
          <summary className="text-cyan-400 cursor-pointer">Error Details</summary>
          <pre className="mt-2 text-xs text-gray-400 bg-black/50 p-4 rounded overflow-auto">
            {error.message}
          </pre>
        </details>
      )}
    </div>
  </div>
);

// Lazy load pages with better error handling
const Home = lazy(() => import('./pages/Home').catch(() => ({ default: () => <div>Error loading Home page</div> })));
const About = lazy(() => import('./pages/About').catch(() => ({ default: () => <div>Error loading About page</div> })));
const Contact = lazy(() => import('./pages/Contact').catch(() => ({ default: () => <div>Error loading Contact page</div> })));
const Blog = lazy(() => import('./pages/Blog').catch(() => ({ default: () => <div>Error loading Blog page</div> })));
const BlogPost = lazy(() => import('./pages/BlogPost').catch(() => ({ default: () => <div>Error loading Blog Post page</div> })));
const PartnersPage = lazy(() => import('./pages/PartnersPage').catch(() => ({ default: () => <div>Error loading Partners page</div> })));
const Login = lazy(() => import('./pages/Login').catch(() => ({ default: () => <div>Error loading Login page</div> })));
const FAQ = lazy(() => import('./pages/FAQ').catch(() => ({ default: () => <div>Error loading FAQ page</div> })));
const Careers = lazy(() => import('./pages/Careers').catch(() => ({ default: () => <div>Error loading Careers page</div> })));
const Privacy = lazy(() => import('./pages/Privacy').catch(() => ({ default: () => <div>Error loading Privacy page</div> })));
const Terms = lazy(() => import('./pages/Terms').catch(() => ({ default: () => <div>Error loading Terms page</div> })));
const Sitemap = lazy(() => import('./pages/Sitemap').catch(() => ({ default: () => <div>Error loading Sitemap page</div> })));
const Services = lazy(() => import('./pages/Services').catch(() => ({ default: () => <div>Error loading Services page</div> })));
const GreenIT = lazy(() => import('./pages/GreenIT').catch(() => ({ default: () => <div>Error loading Green IT page</div> })));
const EnhancedServices = lazy(() => import('./pages/EnhancedServices').catch(() => ({ default: () => <div>Error loading Enhanced Services page</div> })));

// New service pages with error handling
const AIServicesPage = lazy(() => import('./pages/AIServicesPage').catch(() => ({ default: () => <div>Error loading AI Services page</div> })));
const MicroSAASServicesPage = lazy(() => import('./pages/MicroSAASServicesPage').catch(() => ({ default: () => <div>Error loading Micro SAAS Services page</div> })));
const ITServicesPage = lazy(() => import('./pages/ITServicesPage').catch(() => ({ default: () => <div>Error loading IT Services page</div> })));
const InnovativeServicesShowcase2027 = lazy(() => import('./pages/InnovativeServicesShowcase2027').catch(() => ({ default: () => <div>Error loading Innovative Services 2027 page</div> })));
const ComprehensiveServicesOverview2027 = lazy(() => import('./pages/ComprehensiveServicesOverview2027').catch(() => ({ default: () => <div>Error loading Comprehensive Services Overview 2027 page</div> })));
const ComprehensivePricingGuide2027 = lazy(() => import('./pages/ComprehensivePricingGuide2027').catch(() => ({ default: () => <div>Error loading Comprehensive Pricing Guide 2027 page</div> })));
const EnhancedInnovativeServicesShowcase2027 = lazy(() => import('./pages/EnhancedInnovativeServicesShowcase2027').catch(() => ({ default: () => <div>Error loading Enhanced Innovative Services 2027 page</div> })));
const ComprehensiveServicesOverview = lazy(() => import('./pages/ComprehensiveServicesOverview').catch(() => ({ default: () => <div>Error loading Comprehensive Services Overview page</div> })));
const ComprehensivePricingGuide2027New = lazy(() => import('./pages/ComprehensivePricingGuide2027').catch(() => ({ default: () => <div>Error loading Comprehensive Pricing Guide 2027 New page</div> })));

// Route configuration for better organization
const routes = [
  // Main Routes
  { path: "/", element: Home, name: "Home" },
  { path: "/about", element: About, name: "About" },
  { path: "/contact", element: Contact, name: "Contact" },
  { path: "/blog", element: Blog, name: "Blog" },
  { path: "/blog/:slug", element: BlogPost, name: "Blog Post" },
  { path: "/faq", element: FAQ, name: "FAQ" },
  { path: "/careers", element: Careers, name: "Careers" },
  { path: "/privacy", element: Privacy, name: "Privacy" },
  { path: "/terms", element: Terms, name: "Terms" },
  { path: "/sitemap", element: Sitemap, name: "Sitemap" },
  { path: "/services", element: Services, name: "Services" },
  { path: "/green-it", element: GreenIT, name: "Green IT" },
  { path: "/partners", element: PartnersPage, name: "Partners" },
  { path: "/login", element: Login, name: "Login" },
  { path: "/enhanced-services", element: EnhancedServices, name: "Enhanced Services" },
  
  // AI Services Routes
  { path: "/ai-services", element: AIServicesPage, name: "AI Services" },
  { path: "/ai-services/:service", element: AIServicesPage, name: "AI Service Detail" },
  
  // Micro SAAS Routes
  { path: "/micro-saas", element: MicroSAASServicesPage, name: "Micro SAAS Services" },
  { path: "/micro-saas/:service", element: MicroSAASServicesPage, name: "Micro SAAS Service Detail" },
  
  // IT Services Routes
  { path: "/it-services", element: ITServicesPage, name: "IT Services" },
  { path: "/it-services/:service", element: ITServicesPage, name: "IT Service Detail" },
  
  // Innovative Services 2027 Routes
  { path: "/innovative-services-2027", element: InnovativeServicesShowcase2027, name: "Innovative Services 2027" },
  { path: "/comprehensive-services-overview", element: ComprehensiveServicesOverview2027, name: "Comprehensive Services Overview 2027" },
  { path: "/comprehensive-pricing-guide", element: ComprehensivePricingGuide2027, name: "Comprehensive Pricing Guide 2027" },
  { path: "/enhanced-innovative-services-2027", element: EnhancedInnovativeServicesShowcase2027, name: "Enhanced Innovative Services 2027" },
  
  // New Comprehensive Routes
  { path: "/services-overview", element: ComprehensiveServicesOverview, name: "Services Overview" },
  { path: "/pricing-guide", element: ComprehensivePricingGuide2027New, name: "Pricing Guide" },
  
  // Emerging Tech Routes
  { path: "/emerging-tech", element: GreenIT, name: "Emerging Tech" },
  { path: "/emerging-tech/:service", element: GreenIT, name: "Emerging Tech Service" },
  
  // Marketplace Routes
  { path: "/marketplace", element: GreenIT, name: "Marketplace" },
  { path: "/marketplace/:service", element: GreenIT, name: "Marketplace Service" }
];

function App() {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = (toast: Omit<ToastProps, 'id'>) => {
    const id = Date.now().toString();
    setToasts(prev => [...prev, { ...toast, id }]);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
          {/* Futuristic Animated Background */}
          <FuturisticAnimatedBackground />
          
          {/* Navigation */}
          <FuturisticNavigation />
          
          <main className="flex-1 relative z-10">
            <Suspense fallback={<EnhancedLoadingSpinner />}>
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
                
                {/* Enhanced Services Routes */}
                <Route path="/enhanced-services" element={<EnhancedServicesPage />} />
                <Route path="/services/overview" element={<ComprehensiveServicesOverview2027 />} />
                <Route path="/services/pricing" element={<ComprehensivePricingGuide2027 />} />
                <Route path="/services/showcase" element={<InnovativeServicesShowcase2027 />} />
                <Route path="/ultimate-services-2025" element={<UltimateInnovativeServicesShowcase2025 />} />
                <Route path="/comprehensive-services-2025" element={<ComprehensiveServicesLanding2025 />} />
                <Route path="/enhanced-zion-services-2025" element={<EnhancedZionServicesShowcase2025 />} />
                <Route path="/zion-tech-group-marketing-2025" element={<ZionTechGroupMarketing2025 />} />
                <Route path="/innovative-services-2028" element={<InnovativeServices2028 />} />
                <Route path="/revolutionary-2026-services" element={<Revolutionary2026ServicesShowcase />} />
                <Route path="/revolutionary-2026-pricing" element={<Revolutionary2026PricingGuide />} />
                
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
          
          {/* Footer */}
          <FuturisticFooter />
          
          {/* Chat Assistant */}
          <ChatAssistant />
          
          {/* Performance Monitor */}
          <PerformanceMonitor enableReporting={true} />
          
          {/* Accessibility Enhancer */}
          <AccessibilityEnhancer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;