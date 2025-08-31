import React, { Suspense, lazy, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';

// Enhanced Layout Components
import { EnhancedHeader } from './components/EnhancedHeader';
import { EnhancedFooter } from './components/EnhancedFooter';
import { Sidebar } from './components/Sidebar';

// Enhanced Components
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import EnhancedAccessibilityEnhancer from './components/EnhancedAccessibilityEnhancer';
import { MobileExperienceEnhancer } from './components/MobileExperienceEnhancer';
import { SEO } from './components/SEO';
import FloatingActionButton from './components/FloatingActionButton';
import { AdvancedAnalytics } from './components/AdvancedAnalytics';
import { SmartNotificationSystem } from './components/SmartNotificationSystem';
import { ChatAssistant } from './components/ChatAssistant';
import { ErrorBoundary } from './components/ErrorBoundary';
import { LoadingSpinner } from './components/ui/loading-spinner';
import PerformanceMonitor from './components/PerformanceMonitor';

// Enhanced lazy loading with preloading hints
const createLazyComponent = (importFn: () => Promise<any>, fallback?: React.ReactNode) => {
  const LazyComponent = lazy(importFn);
  return (props: any) => (
    <Suspense fallback={fallback || <LoadingSpinner />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

// Core pages with optimized imports - only importing pages that exist
const About = createLazyComponent(() => import('./pages/About'));
const Contact = createLazyComponent(() => import('./pages/Contact'));
const Blog = createLazyComponent(() => import('./pages/Blog'));
const Analytics = createLazyComponent(() => import('./pages/Analytics'));

// Service pages that exist - temporarily disabled
// const Services = createLazyComponent(() => import('./pages/services'));

// Error Fallback Component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light flex items-center justify-center p-4">
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full text-center border border-white/20">
      <div className="text-red-400 text-6xl mb-4">⚠️</div>
      <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
      <p className="text-gray-300 mb-6">
        {error.message || 'An unexpected error occurred. Please try again.'}
      </p>
      <div className="space-y-3">
        <button
          onClick={resetErrorBoundary}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Try again
        </button>
        <button
          onClick={() => window.location.href = '/'}
          className="w-full bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Go home
        </button>
      </div>
    </div>
  </div>
);

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <HelmetProvider>
      <ErrorBoundary fallback={<ErrorFallback error={new Error()} resetErrorBoundary={() => { /* empty */ }} />}>
        <div className="App min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
          {/* SEO Component */}
          <SEO
            title="Zion Tech Group - Leading AI & Technology Solutions"
            description="Transform your business with Zion Tech Group's cutting-edge AI solutions, quantum computing, and innovative micro SAAS services. Leading the future of technology."
            keywords="AI solutions, quantum computing, micro SAAS, technology consulting, digital transformation"
            ogImage="/og-image.jpg"
            canonicalUrl="https://ziontechgroup.com"
          />

          {/* Performance Optimizer */}
          <PerformanceOptimizer enabled={true} />

          {/* Enhanced Accessibility */}
          <EnhancedAccessibilityEnhancer enabled={true} />

          {/* Mobile Experience Enhancer - Temporarily disabled for build troubleshooting */}
          {/* <MobileExperienceEnhancer enabled={true} /> */}

          {/* Advanced Analytics */}
          <AdvancedAnalytics enabled={true} showMetrics={true} />

          {/* Sidebar */}
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

          {/* Header */}
          <EnhancedHeader onMenuClick={() => setSidebarOpen(true)} />

          {/* Main Content */}
          <main className="flex-1">
            <Suspense fallback={<LoadingSpinner />}>
              <AnimatePresence mode="wait">
                <Routes>
                  {/* Core Routes */}
                  <Route
                    path="/"
                    element={
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="min-h-screen flex items-center justify-center"
                      >
                        <div className="text-center">
                          <h1 className="text-4xl font-bold text-white mb-4">Welcome to Zion Tech Group</h1>
                          <p className="text-xl text-gray-300 mb-8">
                            Leading AI & Technology Solutions
                          </p>
                          <div className="space-x-4">
                            <a
                              href="/about"
                              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                            >
                              About Us
                            </a>
                            <a
                              href="/services"
                              className="inline-block bg-transparent border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg transition-colors"
                            >
                              Our Services
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    }
                  />
                  
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/blog" element={<Blog />} />
                  {/* <Route path="/services" element={<Services />} /> */}
                  <Route path="/analytics" element={<Analytics />} />

                  {/* Catch-all route for 404 */}
                  <Route
                    path="*"
                    element={
                      <div className="flex items-center justify-center min-h-screen">
                        <div className="text-center">
                          <h1 className="text-4xl font-bold text-zion-cyan mb-4">404 - Page Not Found</h1>
                          <p className="text-zion-slate-light mb-6">The page you're looking for doesn't exist.</p>
                          <a href="/" className="bg-zion-purple text-white px-6 py-3 rounded-lg hover:bg-zion-purple-dark transition-colors">
                            Go Home
                          </a>
                        </div>
                      </div>
                    }
                  />
                </Routes>
              </AnimatePresence>
            </Suspense>
          </main>

          {/* Footer */}
          <EnhancedFooter />

          {/* Floating Action Button */}
          <FloatingActionButton />

          {/* Performance Monitor */}
          <PerformanceMonitor enabled={true} showMetrics={true} />

          {/* Chat Assistant - Temporarily disabled for build troubleshooting */}
          {/* <ChatAssistant /> */}
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
