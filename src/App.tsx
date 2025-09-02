import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';

// Enhanced Components
// Simple loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
  </div>
);
// Simple header component
const SimpleHeader = () => (
  <header className="bg-white shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center">
          <a href="/" className="text-xl font-bold text-gray-900">
            Zion Tech Group
          </a>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
          <a href="/about" className="text-gray-700 hover:text-blue-600">About</a>
          <a href="/services" className="text-gray-700 hover:text-blue-600">Services</a>
          <a href="/contact" className="text-gray-700 hover:text-blue-600">Contact</a>
        </nav>
      </div>
    </div>
  </header>
);

// Simple footer component
const SimpleFooter = () => (
  <footer className="bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-blue-400">About</a></li>
            <li><a href="/team" className="hover:text-blue-400">Team</a></li>
            <li><a href="/careers" className="hover:text-blue-400">Careers</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li><a href="/services" className="hover:text-blue-400">All Services</a></li>
            <li><a href="/ai-solutions" className="hover:text-blue-400">AI Solutions</a></li>
            <li><a href="/cloud-services" className="hover:text-blue-400">Cloud Services</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li><a href="/help-center" className="hover:text-blue-400">Help Center</a></li>
            <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
            <li><a href="/documentation" className="hover:text-blue-400">Documentation</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="/privacy-policy" className="hover:text-blue-400">Privacy Policy</a></li>
            <li><a href="/terms-of-service" className="hover:text-blue-400">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center">
        <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

// Enhanced lazy loading with preloading hints
const createLazyComponent = (importFn: () => Promise<any>, fallback?: React.ReactNode) => {
  const LazyComponent = lazy(importFn);
  return (props: any) => (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

// Core pages with optimized imports
const Home = createLazyComponent(() => import('./pages/Home'));
const About = createLazyComponent(() => import('./pages/About'));
const Contact = createLazyComponent(() => import('./pages/Contact'));
const Team = createLazyComponent(() => import('./pages/Team'));
const Partners = createLazyComponent(() => import('./pages/Partners'));
const HelpCenter = createLazyComponent(() => import('./pages/Help'));
const PrivacyPolicy = createLazyComponent(() => import('./pages/PrivacyPolicy'));
const TermsOfService = createLazyComponent(() => import('./pages/TermsOfService'));
const Services = createLazyComponent(() => import('./pages/Services'));
const Pricing = createLazyComponent(() => import('./pages/Pricing'));
const Blog = createLazyComponent(() => import('./pages/Blog'));
const News = createLazyComponent(() => import('./pages/News'));
const Careers = createLazyComponent(() => import('./pages/Careers'));
const Login = createLazyComponent(() => import('./pages/Login'));
const Marketplace = createLazyComponent(() => import('./pages/Marketplace'));
const Documentation = createLazyComponent(() => import('./pages/Documentation'));
const Training = createLazyComponent(() => import('./pages/Training'));
const Webinars = createLazyComponent(() => import('./pages/Webinars'));
const Research = createLazyComponent(() => import('./pages/Research'));
const Sitemap = createLazyComponent(() => import('./pages/Sitemap'));

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <SimpleHeader />
        
        <main className="flex-1">
          <Suspense fallback={<LoadingSpinner />}>
            <AnimatePresence mode="wait">
              <Routes>
                {/* Core Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/team" element={<Team />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/help-center" element={<HelpCenter />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/services" element={<Services />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/news" element={<News />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/login" element={<Login />} />
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/documentation" element={<Documentation />} />
                <Route path="/training" element={<Training />} />
                <Route path="/webinars" element={<Webinars />} />
                <Route path="/research" element={<Research />} />
                <Route path="/sitemap" element={<Sitemap />} />
                
                {/* Legacy routes for compatibility */}
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/help" element={<HelpCenter />} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </main>
        
        <SimpleFooter />
      </div>
    </HelmetProvider>
  );
}

export default App;