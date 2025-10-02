import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import BannerManager from './components/BannerManager';
import Sidebar from './components/Sidebar';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import EnhancedSEOHead from './components/EnhancedSEOHead';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import PerformanceMonitor from './components/EnhancedPerformanceMonitor';
import NotificationSystem from './components/NotificationSystem';
import type { } from './components/NotificationSystem';
// Lazy loaded pages
const HomePage = React.lazy(() => import('./pages/HomePage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const SolutionsPage = React.lazy(() => import('./pages/SolutionsPage'));
const BlogPage = React.lazy(() => import('./pages/BlogPage'));
const CaseStudiesPage = React.lazy(() => import('./pages/CaseStudiesPage'));
const Resources = React.lazy(() => import('./pages/Resources'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Team = React.lazy(() => import('./pages/Team'));
const SupportPage = React.lazy(() => import('./pages/Support'));
const SitemapPage = React.lazy(() => import('./pages/Sitemap'));
const CookiesPage = React.lazy(() => import('./pages/Cookies'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const pageTransition: any = {,
  type: 'tween',',
  ease: 'anticipate',',
  duration: 0.5
};

interface AppNotification {
  id: string,
  message: string,
  type: 'success' | 'error' | 'warning' | 'info';
}

const initializePerformanceEnhancements = () => {
  // placeholder for any boot-time enhancements
};

const App: React.FC = () => {,
  const [showPerformanceOptimizer, setShowPerformanceOptimizer] = useState(false);
  const [showPerformanceMonitor, setShowPerformanceMonitor] = useState(false);
  const [notifications, setNotifications] = useState<any[]>([]);

  interface SEOData {
    title: string,
    description: string,
    canonical: string,
  }

  const seoDataForOptimizer: SEOData = useMemo(() => ({
    title: 'Zion Tech Group - Leading AI & Technology Solutions',
    description: 'Cutting-edge AI, cloud, and digital transformation solutions for modern enterprises.',
    canonical: typeof window !== 'undefined' ? window.location.href : 'https://ziontechgroup.com/',
  }), []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {,
      if (!e.ctrlKey || !e.shiftKey) return;
      switch (e.key.toLowerCase()) {
        case 'p':;
          e.preventDefault();
          setShowPerformanceOptimizer((v) => !v);
          break;
        case 'm':;
          e.preventDefault();
          setShowPerformanceMonitor((v) => !v);
          break;
        default: break,
      };
    };

    window.addEventListener('keydown', onKeyDown);
    try { initializePerformanceEnhancements(); } catch (error) { console.error('Error initializing enhancements:', error); };
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleRemoveNotification = useCallback((id: string) => {,
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
            keywords={'AI, IT Solutions, Enterprise Automation, Technology Services, Artificial Intelligence'};
            author="Zion Tech Group/>
          <Router>
            <div className="min-h-screen bg-gray-50">
              <Header />
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                className="relative"
              >
                <BannerManager />
              </motion.div>

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
                    banners={bannerData}
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
                          <Route path="/about" element={<AboutPage />} />
                          <Route path="/contact" element={<ContactPage />} />
                          <Route path="/blog/*" element={<BlogPage />} />
                          <Route path="/case-studies" element={<CaseStudiesPage />} />
                          <Route path="/resources" element={<Resources />} />
                          
                          {/* Company & Info routes to align with sitemap */}
                          <Route path="/partners" element={<AboutPage />} />
                          <Route path="/news" element={<AboutPage />} />
                          <Route path="/careers" element={<AboutPage />} />
                          <Route path="/faq" element={<SupportPage />} />
                          <Route path="/team" element={<Team />} />
                          <Route path="/help" element={<SupportPage />} />
                          <Route path="/security" element={<SupportPage />} />
                          <Route path="/status" element={<SupportPage />} />
                          <Route path="/privacy" element={<Privacy />} />
                          <Route path="/terms" element={<Terms />} />
                          <Route path="/cookies" element={<CookiesPage />} />
                          <Route path="/sitemap" element={<SitemapPage />} />
                          
                          {/* Dynamic Routes for Solutions */}
                          <Route path="/solutions/enterprise" element={<SolutionsPage category="enterprise" />} />
                          <Route path="/solutions/smb" element={<SolutionsPage category="smb" />} />
                          <Route path="/solutions/startup" element={<SolutionsPage category="startup" />} />
                          <Route path="/solutions/government" element={<SolutionsPage category="government" />} />
                          <Route path="/solutions/healthcare" element={<SolutionsPage category="healthcare" />} />
                          <Route path="/solutions/financial" element={<SolutionsPage category="financial" />} />
                          <Route path="/solutions/manufacturing" element={<SolutionsPage category="manufacturing" />} />
                          <Route path="/solutions/retail" element={<SolutionsPage category="retail" />} />
                          <Route path="/solutions/education" element={<SolutionsPage category="education" />} />
                          <Route path="/solutions/transportation" element={<SolutionsPage category="transportation" />} />
                          
                          {/* Dynamic Routes for Services */}
                          <Route path="/services/ai-content-generator" element={<ServicesPage service="ai-content-generator" />} />
                          <Route path="/services/smart-appointment-scheduler" element={<ServicesPage service="smart-appointment-scheduler" />} />
                          <Route path="/services/ai-workflow-automation" element={<ServicesPage service="ai-workflow-automation" />} />
                          <Route path="/services/ai-virtual-assistant" element={<ServicesPage service="ai-virtual-assistant" />} />
                          <Route path="/services/ai-data-analytics" element={<ServicesPage service="ai-data-analytics" />} />
                          <Route path="/services/ai-intelligent-document-processing" element={<ServicesPage service="ai-intelligent-document-processing" />} />
                          <Route path="/services/real-time-cognitive-automation" element={<ServicesPage service="real-time-cognitive-automation" />} />
                          <Route path="/services/advanced-cybersecurity-ai" element={<ServicesPage service="advanced-cybersecurity-ai" />} />
                          
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
                <button onClick={() => setShowPerformanceOptimizer(false)} className="text-gray-500 hover: text-gray-700 text-2xl">✕</button>",
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
                <button onClick={() => setShowPerformanceMonitor(false)} className="text-gray-500 hover: text-gray-700 text-2xl">✕</button>",
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
;