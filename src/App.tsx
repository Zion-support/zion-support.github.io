import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';

// Core Components
import Header from './components/Header';
import Footer from './components/Footer';
import BannerManager from './components/BannerManager';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import SEOHead from './components/EnhancedSEOHead';
import PerformanceOptimizer from './components/PerformanceOptimizer';

// Pages
import HomePage from './pages/HomePage';
import SolutionsPage from './pages/SolutionsPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import CaseStudiesPage from './pages/CaseStudiesPage';

// Data
import { bannerData } from './data/bannerData';

// Animation variants
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <SEOHead />
          <EnhancedErrorBoundary>
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
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/solutions/*" element={<SolutionsPage />} />
                <Route path="/services/*" element={<ServicesPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/blog/*" element={<BlogPage />} />
                <Route path="/case-studies" element={<CaseStudiesPage />} />

                {/* Blog Routes */}
                <Route path="/blog/:slug" element={<BlogPage />} />

                {/* 404 Fallback */}
                <Route
                  path="*"
                  element={
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
                  }
                />
              </Routes>
            </motion.main>

            <Footer />
          </EnhancedErrorBoundary>
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;