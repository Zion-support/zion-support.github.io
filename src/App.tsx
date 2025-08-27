import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { FuturisticNavigation } from './components/FuturisticNavigation';
import { FuturisticFooter } from './components/FuturisticFooter';
import { FuturisticAnimatedBackground } from './components/FuturisticAnimatedBackground';
import { ChatAssistant } from './components/ChatAssistant';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { NotificationSystem } from './components/NotificationSystem';
import { EnhancedLoading, loadingConfigs } from './components/EnhancedLoading';
import { AccessibilityProvider } from './components/AccessibilityProvider';
import { SEO } from './components/SEO';

// Lazy load pages - only import existing ones
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/about'));
const Contact = React.lazy(() => import('./pages/contact'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Services = React.lazy(() => import('./pages/Services'));
const CaseStudies = React.lazy(() => import('./pages/case-studies'));
const Events = React.lazy(() => import('./pages/events'));
const Products = React.lazy(() => import('./pages/products'));
const ResearchDevelopment = React.lazy(() => import('./pages/research-development'));
const Solutions = React.lazy(() => import('./pages/solutions'));
const GreenIT = React.lazy(() => import('./pages/GreenIT'));

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
    <HelmetProvider>
      <ErrorBoundary>
        <AccessibilityProvider>
          <Router>
            <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light relative">
              {/* Global SEO */}
              <SEO />
              
              {/* Futuristic Animated Background */}
              <FuturisticAnimatedBackground />
              
              {/* Navigation */}
              <nav id="navigation" role="navigation" aria-label="Main navigation">
                <FuturisticNavigation />
              </nav>
              
              <main id="main-content" className="flex-1 relative z-10" role="main">
                <Suspense fallback={<EnhancedLoadingSpinner />}>
                  <Routes>
                    {/* Main Routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blog/:slug" element={<BlogPost />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/case-studies" element={<CaseStudies />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/research-development" element={<ResearchDevelopment />} />
                    <Route path="/solutions" element={<Solutions />} />
                    <Route path="/green-it" element={<GreenIT />} />
                    
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
        </AccessibilityProvider>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;