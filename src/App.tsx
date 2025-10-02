import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import './index.css';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import BannerManager from './components/BannerManager';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import NotificationSystem from './components/NotificationSystem';
import PerformanceMonitor from './components/PerformanceMonitor';
import EnhancedSEOHead from './components/EnhancedSEOHead';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';

// Lazy loaded components for better performance
const HomePage = React.lazy(() => import('./pages/HomePage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const SolutionsPage = React.lazy(() => import('./pages/SolutionsPage'));
const BlogPage = React.lazy(() => import('./pages/BlogPage'));
const CaseStudiesPage = React.lazy(() => import('./pages/CaseStudiesPage'));
const Resources = React.lazy(() => import('./pages/Resources'));
const ServicesCatalog = React.lazy(() => import('./pages/ServicesCatalog'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

// Animation variants
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

  const pageTransition: any = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

// Banner data
  const bannerDataLocal = [] as any[];

// Types and interfaces
interface Notification {
  id: string;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
}

// Removed unused WindowWithEnhancements interface

// Initialize performance enhancements function
const initializePerformanceEnhancements = () => {
  // Performance enhancement initialization logic
  // Performance enhancements initialized
};

// Main App Component
const App: React.FC = () => {
  const [showPerformanceOptimizer, setShowPerformanceOptimizer] = useState(false);
  const [showPerformanceMonitor, setShowPerformanceMonitor] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  interface SEOData {
    title: string;
    description: string;
    canonical: string;
  }

  const seoDataForOptimizer: SEOData = useMemo(() => ({
    title: 'Zion Tech Group - Leading AI & Technology Solutions',
    description: 'Cutting-edge AI, cloud, and digital transformation solutions for modern enterprises.',
    canonical: typeof window !== 'undefined' ? window.location.href : 'https://zion.app/',
  }), []);

  // Simple hotkeys for demo toggles and initialization
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!e.ctrlKey || !e.shiftKey) return;
      switch (e.key.toLowerCase()) {
        case 'p':
          e.preventDefault();
          setShowPerformanceOptimizer((v) => !v);
          break;
        case 'm':
          e.preventDefault();
          setShowPerformanceMonitor((v) => !v);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', onKeyDown);
    
    // Initialize performance enhancements
    try {
      initializePerformanceEnhancements();
    } catch (error) {
      console.error('Error initializing enhancements:', error);
    }

    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleRemoveNotification = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  return (
    <>
      <HelmetProvider>
        <AccessibilityEnhancer></AccessibilityEnhancer>
        <EnhancedErrorBoundary>
            <EnhancedSEOHead 
              title={seoDataForOptimizer.title} 
              description={seoDataForOptimizer.description} 
              canonical={seoDataForOptimizer.canonical}
              keywords={'AI, IT Solutions, Enterprise Automation, Technology Services, Artificial Intelligence'}
              author="Zion Tech Group"
            />
            <Router>
              <div className="min-h-screen bg-gray-50">
                <Header />

                {/* Dynamic Banner System */}
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                  className="relative"
                >
                  <BannerManager
                    banners={bannerDataLocal}
                    rotationInterval={8000}
                    maxVisibleBanners={3}
                  />
                </motion.div>

                {/* Main Content */}
                <motion.main
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                  className="relative z-10"
                >
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 xl:grid-cols-[18rem_1fr] gap-8">
                    <Sidebar />
                    <div id="main-content">
                      <React.Suspense fallback={<LoadingSpinner />}>
                        <Routes>
                          <Route path="/" element={<HomePage />} />
                          <Route path="/solutions/*" element={<SolutionsPage />} />
                          <Route path="/services/*" element={<ServicesPage />} />
                          <Route path="/services/catalog" element={<ServicesCatalog />} />
                          {/* Common service category shortcuts */}
                          <Route path="/services/ai-services" element={<ServicesPage category="ai-solutions" />} />
                          <Route path="/services/micro-saas" element={<ServicesPage category="automation" />} />
                          <Route path="/services/it-services" element={<ServicesPage category="cloud" />} />
                          <Route path="/services/cloud" element={<ServicesPage category="cloud" />} />
                          <Route path="/services/analytics" element={<ServicesPage category="analytics" />} />
                          <Route path="/services/security" element={<ServicesPage category="security" />} />
                          <Route path="/services/automation" element={<ServicesPage category="automation" />} />
                          <Route path="/about" element={<AboutPage />} />
                          <Route path="/contact" element={<ContactPage />} />
                          <Route path="/blog/*" element={<BlogPage />} />
                          <Route path="/case-studies" element={<CaseStudiesPage />} />
                          <Route path="/resources" element={<Resources />} />
                          
                          {/* Dynamic Routes for Solutions */}
                          <Route path="/solutions/enterprise" element={<SolutionsPage />} />
                          <Route path="/solutions/smb" element={<SolutionsPage />} />
                          <Route path="/solutions/startup" element={<SolutionsPage />} />
                          <Route path="/solutions/government" element={<SolutionsPage />} />
                          <Route path="/solutions/healthcare" element={<SolutionsPage />} />
                          <Route path="/solutions/financial" element={<SolutionsPage />} />
                          <Route path="/solutions/manufacturing" element={<SolutionsPage />} />
                          <Route path="/solutions/retail" element={<SolutionsPage />} />
                          <Route path="/solutions/education" element={<SolutionsPage />} />
                          <Route path="/solutions/transportation" element={<SolutionsPage />} />
                          
                          {/* Dynamic Routes for Services */}
                          <Route path="/services/ai-content-generator" element={<ServicesPage />} />
                          <Route path="/services/smart-appointment-scheduler" element={<ServicesPage />} />
                          <Route path="/services/ai-workflow-automation" element={<ServicesPage />} />
                          <Route path="/services/ai-virtual-assistant" element={<ServicesPage />} />
                          <Route path="/services/ai-data-analytics" element={<ServicesPage />} />
                          <Route path="/services/ai-intelligent-document-processing" element={<ServicesPage />} />
                          <Route path="/services/real-time-cognitive-automation" element={<ServicesPage />} />
                          <Route path="/services/advanced-cybersecurity-ai" element={<ServicesPage />} />
                          
                          {/* AI Solutions Routes */}
                          <Route path="/ai-solutions" element={<ServicesPage category="ai-solutions" />} />
                          <Route path="/quantum-computing" element={<ServicesPage category="quantum-computing" />} />
                          <Route path="/cloud-devops" element={<ServicesPage category="cloud-devops" />} />
                          
                          {/* Blog Routes */}
                          <Route path="/blog/:slug" element={<BlogPage />} />
                          
                          {/* 404 Fallback */}
                          <Route path="*" element={
                            <div className="min-h-screen flex items-center justify-center">
                              <div className="text-center">
                                <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
                                <p className="text-xl text-gray-600 mb-8">Page not found</p>
                                <a 
                                  href="/" 
                                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                  Return Home
                                </a>
                              </div>
                            </div>
                          } />
                        </Routes>
                      </React.Suspense>
                    </div>
                  </div>
                </motion.main>

                <Footer />
              </div>
            </Router>
          </EnhancedErrorBoundary>

      {showPerformanceOptimizer && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center" role="dialog" aria-modal="true">
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Performance Optimizer</h2>
              <button onClick={() => setShowPerformanceOptimizer(false)} className="text-gray-500 hover:text-gray-700 text-2xl">✕</button>
            </div>
            <PerformanceOptimizer isVisible={true} onClose={() => setShowPerformanceOptimizer(false)} />
          </div>
        </div>
      )}

      {showPerformanceMonitor && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center" role="dialog" aria-modal="true">
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Performance Monitor</h2>
              <button onClick={() => setShowPerformanceMonitor(false)} className="text-gray-500 hover:text-gray-700 text-2xl">✕</button>
            </div>
            <PerformanceMonitor />
          </div>
        </div>
      )}

      <NotificationSystem notifications={notifications} onRemove={handleRemoveNotification} />
    </HelmetProvider>
    </>
  );
};

export default App;
