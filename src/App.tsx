import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load pages for better performance
const Home = lazy(() => import('../pages/index'));
const About = lazy(() => import('../pages/about'));
const Contact = lazy(() => import('../pages/contact'));
const Careers = lazy(() => import('../pages/careers'));
const Services = lazy(() => import('../pages/services-overview'));
const Pricing = lazy(() => import('../pages/pricing'));
const Blog = lazy(() => import('../pages/blog'));
const CaseStudies = lazy(() => import('../pages/case-studies'));
const WhitePapers = lazy(() => import('../pages/whitepapers'));
const Webinars = lazy(() => import('../pages/webinars'));
const Team = lazy(() => import('../pages/team'));
const Privacy = lazy(() => import('../pages/privacy'));
const Terms = lazy(() => import('../pages/terms'));
const Sitemap = lazy(() => import('../pages/sitemap'));
const NotFound = lazy(() => import('../pages/NotFound'));
const FAQ = lazy(() => import('../pages/faq'));
const Help = lazy(() => import('../pages/help'));
const Partners = lazy(() => import('../pages/partners'));
const Products = lazy(() => import('../pages/products'));
const Search = lazy(() => import('../pages/search'));
const Status = lazy(() => import('../pages/status'));
const Accessibility = lazy(() => import('../pages/accessibility'));
const Cookies = lazy(() => import('../pages/cookies'));
const DataProtection = lazy(() => import('../pages/data-protection'));
const Documentation = lazy(() => import('../pages/documentation'));
const API = lazy(() => import('../pages/api'));

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <AppHeader />
            <main className="relative">
              <Suspense fallback={<LoadingSpinner />}>
                <AnimatePresence mode="wait">
                  <Routes>
                    {/* Main Routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/team" element={<Team />} />
                    
                    {/* Services Routes */}
                    <Route path="/services" element={<Services />} />
                    <Route path="/services-overview" element={<Services />} />
                    
                    {/* Pricing Routes */}
                    <Route path="/pricing" element={<Pricing />} />
                    
                    {/* Content Routes */}
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/case-studies" element={<CaseStudies />} />
                    <Route path="/white-papers" element={<WhitePapers />} />
                    <Route path="/webinars" element={<Webinars />} />
                    
                    {/* Support Routes */}
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/help" element={<Help />} />
                    <Route path="/support" element={<Help />} />
                    <Route path="/search" element={<Search />} />
                    
                    {/* Company Routes */}
                    <Route path="/partners" element={<Partners />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/status" element={<Status />} />
                    <Route path="/system-status" element={<Status />} />
                    
                    {/* Legal Routes */}
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/cookies" element={<Cookies />} />
                    <Route path="/data-protection" element={<DataProtection />} />
                    <Route path="/accessibility" element={<Accessibility />} />
                    <Route path="/sitemap" element={<Sitemap />} />
                    
                    {/* API Routes */}
                    <Route path="/api" element={<API />} />
                    <Route path="/api-reference" element={<API />} />
                    <Route path="/docs" element={<Documentation />} />
                    <Route path="/documentation" element={<Documentation />} />
                    
                    {/* 404 Route */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </AnimatePresence>
              </Suspense>
            </main>
            <Footer />
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
};

export default App;