import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { EnhancedFuturisticFooter } from './components/EnhancedFuturisticFooter';
import { ChatAssistant } from './components/ChatAssistant';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { SEO } from './components/SEO';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { AccessibilityEnhancer } from './components/AccessibilityEnhancer';
import { ErrorBoundary } from './components/ErrorBoundary';

// Core pages with better code splitting
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const Services = React.lazy(() => import('./pages/Services'));
const Partners = React.lazy(() => import('./pages/Partners'));
const Documentation = React.lazy(() => import('./pages/Documentation'));
const SystemStatus = React.lazy(() => import('./pages/SystemStatus'));

// New services showcase pages
const AdvancedInnovativeServices2032 = React.lazy(() => import('./pages/AdvancedInnovativeServices2032'));
const ComprehensiveServicesOverview2032 = React.lazy(() => import('./pages/ComprehensiveServicesOverview2032'));

// Enhanced loading component with better UX
const EnhancedLoadingSpinner = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
    <div className="text-center text-white">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-500 mx-auto mb-4"></div>
      <h2 className="text-xl font-semibold mb-2">Loading Zion Tech Group</h2>
      <p className="text-gray-400">Preparing your futuristic experience...</p>
    </div>
  </div>
);

function App(...args[]):  {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-futuristic">
        <AppHeader />
        
        <main id="main-content" className="flex-1">
          <Suspense fallback={<EnhancedLoadingSpinner />}>
            <Routes>
              {/* Core Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/services" element={<Services />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/docs" element={<Documentation />} />
              <Route path="/system-status" element={<SystemStatus />} />
              
              {/* New Services Showcase Routes */}
              <Route path="/advanced-innovative-services-2032" element={<AdvancedInnovativeServices2032 />} />
              <Route path="/comprehensive-services-overview-2032" element={<ComprehensiveServicesOverview2032 />} />
              
              {/* Catch all route */}
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>
        
        <EnhancedFuturisticFooter />
        <ChatAssistant />
        <PerformanceOptimizer />
        <AccessibilityEnhancer />
      </div>
    </ErrorBoundary>
  )}

export default App;