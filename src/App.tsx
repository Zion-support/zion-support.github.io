import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';
import { ErrorBoundary } from 'react-error-boundary';

// Enhanced lazy loading with preloading hints
const Home = lazy(() => import('./pages/Home'), {
  suspense: true
});

const About = lazy(() => import('./pages/About'), {
  suspense: true
});

const Contact = lazy(() => import('./pages/Contact'), {
  suspense: true
});

const Blog = lazy(() => import('./pages/Blog'), {
  suspense: true
});

const BlogPost = lazy(() => import('./pages/BlogPost'), {
  suspense: true
});

const PartnersPage = lazy(() => import('./pages/PartnersPage'), {
  suspense: true
});

const Login = lazy(() => import('./pages/Login'), {
  suspense: true
});

const FAQ = lazy(() => import('./pages/FAQ'), {
  suspense: true
});

const Careers = lazy(() => import('./pages/Careers'), {
  suspense: true
});

const Privacy = lazy(() => import('./pages/Privacy'), {
  suspense: true
});

const Terms = lazy(() => import('./pages/Terms'), {
  suspense: true
});

const Sitemap = lazy(() => import('./pages/Sitemap'), {
  suspense: true
});

const Services = lazy(() => import('./pages/Services'), {
  suspense: true
});

const GreenIT = lazy(() => import('./pages/GreenIT'), {
  suspense: true
});

const EnhancedServices = lazy(() => import('./pages/EnhancedServices'), {
  suspense: true
});

// New service pages with enhanced lazy loading
const AIServicesPage = lazy(() => import('./pages/AIServicesPage'), {
  suspense: true
});

const MicroSAASServicesPage = lazy(() => import('./pages/MicroSAASServicesPage'), {
  suspense: true
});

const ITServicesPage = lazy(() => import('./pages/ITServicesPage'), {
  suspense: true
});

const InnovativeServicesShowcase2027 = lazy(() => import('./pages/InnovativeServicesShowcase2027'), {
  suspense: true
});

const ComprehensiveServicesOverview2027 = lazy(() => import('./pages/ComprehensiveServicesOverview2027'), {
  suspense: true
});

const ComprehensivePricingGuide2027 = lazy(() => import('./pages/ComprehensivePricingGuide2027'), {
  suspense: true
});

const EnhancedInnovativeServicesShowcase2027 = lazy(() => import('./pages/EnhancedInnovativeServicesShowcase2027'), {
  suspense: true
});

const ComprehensiveServicesOverview = lazy(() => import('./pages/ComprehensiveServicesOverview'), {
  suspense: true
});

const ComprehensivePricingGuide2027New = lazy(() => import('./pages/ComprehensivePricingGuide2027'), {
  suspense: true
});

// Enhanced loading component with better UX and accessibility
const EnhancedLoadingSpinner = () => (
  <div 
    className="flex items-center justify-center min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light"
    role="status"
    aria-label="Loading Zion Tech Group website"
  >
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

// Error fallback component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-900 via-red-800 to-red-900">
    <div className="text-center p-8">
      <h2 className="text-2xl font-bold text-white mb-4">Something went wrong</h2>
      <p className="text-red-200 mb-6">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
      >
        Try again
      </button>
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light relative">
          {/* Futuristic Animated Background */}
          <FuturisticAnimatedBackground />
          
          {/* Navigation */}
          <FuturisticNavigation />
          
          <main className="flex-1 relative z-10">
            <Suspense fallback={<EnhancedLoadingSpinner />}>
              <Routes>
                {/* Main Routes */}
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
                <Route path="/services" element={<Services />} />
                <Route path="/green-it" element={<GreenIT />} />
                <Route path="/partners" element={<PartnersPage />} />
                <Route path="/login" element={<Login />} />
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
                
                {/* Marketplace Routes */}
                <Route path="/marketplace" element={<GreenIT />} />
                <Route path="/marketplace/:service" element={<GreenIT />} />
              </Routes>
            </Suspense>
          </main>
          
          {/* Footer */}
          <FuturisticFooter />
          
          {/* Chat Assistant */}
          <ChatAssistant />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;