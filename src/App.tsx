import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { FuturisticNavigation } from './components/FuturisticNavigation';
import { FuturisticFooter } from './components/FuturisticFooter';
import { FuturisticAnimatedBackground } from './components/FuturisticAnimatedBackground';
import { ErrorBoundary } from './components/ErrorBoundary';
import { AccessibilityProvider } from './components/AccessibilityProvider';
import { PerformanceMonitor } from './components/PerformanceMonitor';
import { SEO } from './components/SEO';

// Lazy load pages - only import existing ones
const Home = React.lazy(() => import('./pages/Home'));
const Services = React.lazy(() => import('./pages/Services'));
const GreenIT = React.lazy(() => import('./pages/GreenIT'));

// Enhanced loading component with better UX
const EnhancedLoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
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
                    <Route path="/services" element={<Services />} />
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
              
              {/* Performance Monitor */}
              <PerformanceMonitor />
            </div>
          </Router>
        </AccessibilityProvider>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;