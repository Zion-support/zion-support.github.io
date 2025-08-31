import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';

// Enhanced Layout Components
import { EnhancedHeader } from './components/EnhancedHeader';
import { EnhancedFooter } from './components/EnhancedFooter';
import { EnhancedSidebar } from './components/EnhancedSidebar';

// Enhanced Components
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import EnhancedAccessibilityEnhancer from './components/EnhancedAccessibilityEnhancer';
import { MobileExperienceEnhancer } from './components/MobileExperienceEnhancer';
import { SEO } from './components/SEO';
import { FloatingActionButton } from './components/FloatingActionButton';
import { AdvancedAnalytics } from './components/AdvancedAnalytics';
import { SmartNotificationSystem } from './components/SmartNotificationSystem';
import { ChatAssistant } from './components/ChatAssistant';
import { ErrorBoundary } from './components/ErrorBoundary';
import { LoadingSpinner } from './components/ui/loading-spinner';

// Enhanced lazy loading with preloading hints
const createLazyComponent = (importFn: () => Promise<any>, fallback?: React.ReactNode) => {
  const LazyComponent = lazy(importFn);
  return (props: any) => (
    <Suspense fallback={fallback || <LoadingSpinner />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

// Core pages with optimized imports
const Home = createLazyComponent(() => import('./pages/Home'));
const About = createLazyComponent(() => import('./pages/About'));
const Contact = createLazyComponent(() => import('./pages/Contact'));
const Careers = createLazyComponent(() => import('./pages/Careers'));
const Blog = createLazyComponent(() => import('./pages/Blog'));
const Partners = createLazyComponent(() => import('./pages/Partners'));
const Services = createLazyComponent(() => import('./pages/Services'));
const FAQ = createLazyComponent(() => import('./pages/FAQ'));
const Privacy = createLazyComponent(() => import('./pages/Privacy'));
const Terms = createLazyComponent(() => import('./pages/Terms'));
const Cookies = createLazyComponent(() => import('./pages/Cookies'));
const DataProtection = createLazyComponent(() => import('./pages/DataProtection'));
const Accessibility = createLazyComponent(() => import('./pages/Accessibility'));
const Sitemap = createLazyComponent(() => import('./pages/Sitemap'));

// Service pages
const ServicesPricingPage = createLazyComponent(() => import('./pages/ServicesPricingPage'));
const SystemStatus = createLazyComponent(() => import('./pages/SystemStatus'));
const Search = createLazyComponent(() => import('./pages/Search'));
const Documentation = createLazyComponent(() => import('./pages/Documentation'));
const Marketplace = createLazyComponent(() => import('./pages/Marketplace'));
const Training = createLazyComponent(() => import('./pages/Training'));
const Webinars = createLazyComponent(() => import('./pages/Webinars'));
const ApiPlayground = createLazyComponent(() => import('./pages/ApiPlayground'));
const Research = createLazyComponent(() => import('./pages/Research'));
const Categories = createLazyComponent(() => import('./pages/Categories'));
const Login = createLazyComponent(() => import('./pages/Login'));

// Error Fallback Component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <div className="text-center text-white max-w-md mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4 text-red-400">Something went wrong</h1>
      <p className="text-gray-300 mb-6">
        {error.message || 'An unexpected error occurred'}
      </p>
      <div className="space-y-3">
        <button
          onClick={resetErrorBoundary}
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors"
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
  return (
    <HelmetProvider>
      <ErrorBoundary fallback={<ErrorFallback error={new Error()} resetErrorBoundary={() => {}} />}>
        <Router>
          <div className="App min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
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

            {/* Mobile Experience Enhancer */}
            <MobileExperienceEnhancer enabled={true} />

            {/* Advanced Analytics */}
            <AdvancedAnalytics enabled={true} showMetrics={true} />

            {/* Header */}
            <EnhancedHeader />

            {/* Main Content */}
            <main className="flex-1">
              <Suspense fallback={<LoadingSpinner />}>
                <AnimatePresence mode="wait">
                  <Routes>
                    {/* Core Routes */}
                    <Route
                      path="/"
                      element={
                        <div className="min-h-screen">
                          <Home />
                        </div>
                      }
                    />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/partners" element={<Partners />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/cookies" element={<Cookies />} />
                    <Route path="/data-protection" element={<DataProtection />} />
                    <Route path="/accessibility" element={<Accessibility />} />
                    <Route path="/sitemap" element={<Sitemap />} />

                    {/* Service Routes */}
                    <Route path="/services-pricing" element={<ServicesPricingPage />} />
                    <Route path="/system-status" element={<SystemStatus />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/documentation" element={<Documentation />} />
                    <Route path="/marketplace" element={<Marketplace />} />
                    <Route path="/training" element={<Training />} />
                    <Route path="/webinars" element={<Webinars />} />
                    <Route path="/api-playground" element={<ApiPlayground />} />
                    <Route path="/research" element={<Research />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/login" element={<Login />} />

                    {/* 404 Page */}
                    <Route
                      path="*"
                      element={
                        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                          <div className="text-center text-white">
                            <h1 className="text-6xl font-bold mb-4">404</h1>
                            <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
                            <p className="text-gray-300 mb-8">
                              The page you're looking for doesn't exist or has been moved.
                            </p>
                            <button
                              onClick={() => window.history.back()}
                              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors mr-4"
                            >
                              Go Back
                            </button>
                            <button
                              onClick={() => window.location.href = '/'}
                              className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                            >
                              Go Home
                            </button>
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
            <FloatingActionButton enabled={true} />

            {/* Smart Notification System */}
            <SmartNotificationSystem enabled={true} />

            {/* Chat Assistant */}
            <ChatAssistant
              enabled={true}
              position="bottom-right"
              theme="auto"
              language="en"
            />
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
