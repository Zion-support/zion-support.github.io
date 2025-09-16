<<<<<<< HEAD
import React from 'react';

const AppOptimized: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">AppOptimized</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
=======
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from './store/store';
import ErrorBoundary from './components/ErrorBoundary';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import MobileOptimizer from './components/MobileOptimizer';
import SecurityEnhancer from './components/SecurityEnhancer';
import PerformanceMonitor from './components/PerformanceMonitor';
import SEOHead from './components/SEOHead';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load components for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));

// Create a separate query client for better performance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
      retry: 3,
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    },
    mutations: {
      retry: 1,
    },
  },
});

const AppOptimized: React.FC = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <SecurityEnhancer>
              <AccessibilityEnhancer>
                <MobileOptimizer>
                  <Router>
                    <SEOHead />
                    <div className="min-h-screen bg-gray-50">
                      <Suspense fallback={<LoadingSpinner />}>
                        <Routes>
                          <Route path="/" element={<Home />} />
                          <Route path="/about" element={<About />} />
                          <Route path="/services" element={<Services />} />
                          <Route path="/contact" element={<Contact />} />
                          <Route path="/blog" element={<Blog />} />
                          <Route path="/blog/:slug" element={<BlogPost />} />
                        </Routes>
                      </Suspense>
                    </div>
                    {process.env.NODE_ENV === 'development' && <PerformanceMonitor />}
                  </Router>
                </MobileOptimizer>
              </AccessibilityEnhancer>
            </SecurityEnhancer>
          </Provider>
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
  );
};

export default AppOptimized;