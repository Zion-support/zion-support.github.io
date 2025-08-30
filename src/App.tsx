import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Layout Components
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';

// Enhanced Components - only import existing ones
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import ErrorBoundary from './components/ErrorBoundary';
import { EnhancedSEO } from './components/EnhancedSEO';
import LoadingSpinner from './components/ui/LoadingSpinner';

// Lazy-loaded pages for better performance - only import existing ones
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/about'));
const Services = lazy(() => import('./pages/services'));
const Contact = lazy(() => import('./pages/contact'));
const Blog = lazy(() => import('./pages/Blog'));
const Careers = lazy(() => import('./pages/Careers'));
const Team = lazy(() => import('./pages/Team'));
const CaseStudies = lazy(() => import('./pages/case-studies'));

export default function App() {
  return (
    <ErrorBoundary>
      <div className="App min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* SEO Component */}
        <EnhancedSEO 
          title="Zion Tech Group - Leading AI & Technology Solutions"
          description="Transform your business with Zion Tech Group's cutting-edge AI solutions, quantum computing, and innovative micro SAAS services. Leading the future of technology."
          keywords="AI solutions, quantum computing, micro SAAS, technology consulting, digital transformation"
          ogImage="/og-image.jpg"
          canonicalUrl="https://ziontechgroup.com"
        />
        
        {/* Performance Optimizer */}
        <PerformanceOptimizer enabled={true} />
        
        {/* Header */}
        <AppHeader />
        
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
                      transition={{ duration: 0.3 }}
                    >
                      <Home />
                    </motion.div>
                  } 
                />
                
                {/* Basic Pages */}
                <Route 
                  path="/about" 
                  element={
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <About />
                    </motion.div>
                  } 
                />
                <Route 
                  path="/services" 
                  element={
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Services />
                    </motion.div>
                  } 
                />
                <Route 
                  path="/contact" 
                  element={
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Contact />
                    </motion.div>
                  } 
                />
                <Route 
                  path="/blog" 
                  element={
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Blog />
                    </motion.div>
                  } 
                />
                <Route 
                  path="/careers" 
                  element={
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Careers />
                    </motion.div>
                  } 
                />
                <Route 
                  path="/team" 
                  element={
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Team />
                    </motion.div>
                  } 
                />
                <Route 
                  path="/case-studies" 
                  element={
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CaseStudies />
                    </motion.div>
                  } 
                />
                
                {/* Catch-all route for 404 */}
                <Route 
                  path="*" 
                  element={
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="min-h-screen flex items-center justify-center">
                        <div className="text-center text-white">
                          <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                          <p className="text-gray-300 mb-6">The page you're looking for doesn't exist.</p>
                          <a 
                            href="/" 
                            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            Go Home
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  } 
                />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </ErrorBoundary>
  );
}