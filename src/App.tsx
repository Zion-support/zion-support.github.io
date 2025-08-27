import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { FuturisticNavigation } from './components/FuturisticNavigation';
import { FuturisticFooter } from './components/FuturisticFooter';
import { FuturisticAnimatedBackground } from './components/FuturisticAnimatedBackground';
import { ChatAssistant } from './components/ChatAssistant';
import PerformanceMonitor from './components/PerformanceMonitor';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';

// Enhanced loading component with better UX
const EnhancedLoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <div className="relative">
      <div className="w-32 h-32 border-4 border-cyan-400/20 rounded-full"></div>
      <div className="absolute top-0 left-0 w-32 h-32 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-cyan-400 font-bold text-lg">
        ZION
      </div>
      <div className="mt-4 text-center">
        <div className="text-cyan-400 text-sm animate-pulse">Loading amazing experiences...</div>
      </div>
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
                {routes.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={<route.element />}
                  />
                ))}
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