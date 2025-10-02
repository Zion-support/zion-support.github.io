import React, { Suspense, useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import BannerManager from './components/BannerManager';
import Sidebar from './components/Sidebar';
import EnhancedSEOHead from './components/EnhancedSEOHead';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import { bannerData } from './data/bannerData';

// Lazy loaded pages
const HomePage = React.lazy(() => import('./pages/HomePage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const ServicesPage = React.lazy(() => import('./pages/ComprehensiveServices'));
const SolutionsPage = React.lazy(() => import('./pages/ComprehensiveServices'));
const BlogPage = React.lazy(() => import('./pages/BlogPage'));
const CaseStudiesPage = React.lazy(() => import('./pages/CaseStudiesPage'));
const Resources = React.lazy(() => import('./pages/Resources'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Team = React.lazy(() => import('./pages/Team'));
const SupportPage = React.lazy(() => import('./pages/Support'));
const SitemapPage = React.lazy(() => import('./pages/Sitemap'));
const CookiesPage = React.lazy(() => import('./pages/Cookies'));

const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const pageTransition: any = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const initializePerformanceEnhancements = () => {
  // placeholder for any boot-time enhancements
};

const App: React.FC = () => {
  const seoDataForOptimizer = useMemo(
    () => ({
      title: 'Zion Tech Group - Leading AI & Technology Solutions',
      description: 'Cutting-edge AI, cloud, and digital transformation solutions for modern enterprises.',
      canonical: typeof window !== 'undefined' ? window.location.href : 'https://ziontechgroup.com/',
    }),
    []
  );

  useEffect(() => {
    try {
      initializePerformanceEnhancements();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error initializing enhancements:', error);
    }
  }, []);

  return (
    <HelmetProvider>
      <AccessibilityEnhancer />
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

          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="relative"
          >
            <BannerManager banners={bannerData} rotationInterval={8000} maxVisibleBanners={3} />
          </motion.div>

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
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/solutions/*" element={<SolutionsPage />} />
                    <Route path="/services/*" element={<ServicesPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/blog/*" element={<BlogPage />} />
                    <Route path="/case-studies" element={<CaseStudiesPage />} />
                    <Route path="/resources" element={<Resources />} />

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
                </Suspense>
              </div>
            </div>
          </motion.main>

          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;