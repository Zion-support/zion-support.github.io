import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FuturisticNavigation } from './components/FuturisticNavigation';
import { FuturisticFooter } from './components/FuturisticFooter';
import { FuturisticAnimatedBackground } from './components/FuturisticAnimatedBackground';
import { ChatAssistant } from './components/ChatAssistant';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { NotificationSystem } from './components/NotificationSystem';
import { EnhancedLoading, loadingConfigs } from './components/EnhancedLoading';

// Lazy load pages - only import existing ones
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const PartnersPage = React.lazy(() => import('./pages/PartnersPage'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Careers = React.lazy(() => import('./pages/Careers'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const Services = React.lazy(() => import('./pages/Services'));
const GreenIT = React.lazy(() => import('./pages/GreenIT'));
const EnhancedServices = React.lazy(() => import('./pages/EnhancedServices'));

// New service pages
const AIServicesPage = React.lazy(() => import('./pages/AIServicesPage'));
const MicroSAASServicesPage = React.lazy(() => import('./pages/MicroSAASServicesPage'));
const ITServicesPage = React.lazy(() => import('./pages/ITServicesPage'));

// Enhanced Services 2025
const EnhancedServicesShowcase2025 = React.lazy(() => import('./pages/EnhancedServicesShowcase2025.tsx'));
const ComprehensivePricingGuide2025 = React.lazy(() => import('./pages/ComprehensivePricingGuide2025.tsx'));
const ComprehensiveServicesShowcase2025 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2025.tsx'));

// Innovative Services 2027
const InnovativeServicesShowcase2027 = React.lazy(() => import('./pages/InnovativeServicesShowcase2027'));
const ComprehensiveServicesOverview2027 = React.lazy(() => import('./pages/ComprehensiveServicesOverview2027'));
const ComprehensivePricingGuide2027 = React.lazy(() => import('./pages/ComprehensivePricingGuide2027'));
const EnhancedInnovativeServicesShowcase2027 = React.lazy(() => import('./pages/EnhancedInnovativeServicesShowcase2027'));
const ComprehensiveServicesOverview = React.lazy(() => import('./pages/ComprehensiveServicesOverview'));

// Admin pages
const Admin = React.lazy(() => import('./pages/Admin.tsx'));
const AdminDashboard = React.lazy(() => import('./pages/AdminDashboard.tsx'));

// Enhanced loading component with better UX
const EnhancedLoadingSpinner = () => (
  <EnhancedLoading
    isLoading={true}
    {...loadingConfigs.pageLoad}
    autoComplete={false}
  />
);

function App() {
  return (
    <ErrorBoundary>
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
                
                {/* Enhanced Services 2025 Routes */}
                <Route path="/enhanced-services-showcase-2025" element={<EnhancedServicesShowcase2025 />} />
                <Route path="/comprehensive-pricing-guide-2025" element={<ComprehensivePricingGuide2025 />} />
                <Route path="/comprehensive-services-showcase-2025" element={<ComprehensiveServicesShowcase2025 />} />
                
                {/* Innovative Services 2027 Routes */}
                <Route path="/innovative-services-2027" element={<InnovativeServicesShowcase2027 />} />
                <Route path="/comprehensive-services-overview" element={<ComprehensiveServicesOverview2027 />} />
                <Route path="/comprehensive-pricing-guide" element={<ComprehensivePricingGuide2027 />} />
                <Route path="/enhanced-innovative-services-2027" element={<EnhancedInnovativeServicesShowcase2027 />} />
                
                {/* New Comprehensive Routes */}
                <Route path="/services-overview" element={<ComprehensiveServicesOverview />} />
                
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
          
          {/* Performance Optimizer */}
          <PerformanceOptimizer />
          
          {/* Notification System */}
          <NotificationSystem />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;