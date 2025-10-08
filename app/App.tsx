'use client';

import React, { Suspense, lazy, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import ErrorBoundary from './components/ErrorBoundary';
import PerformanceMonitor from './components/PerformanceMonitor';

// Lazy load components for better performance
const HomePage = lazy(() => import('./page'));
const AboutPage = lazy(() => import('./about/page'));
const ContactPage = lazy(() => import('./contact/page'));
const BlogPage = lazy(() => import('./blog/page'));
const EnterprisePage = lazy(() => import('./enterprise/page'));
const TeamPage = lazy(() => import('./team/page'));
const PrivacyPage = lazy(() => import('./privacy/page'));
const TermsPage = lazy(() => import('./terms/page'));

// Main App component
const App: React.FC = () => {
  // Performance optimization
  const handleRouteChange = useCallback(() => {
    // Track page views
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: window.location.pathname,
      });
    }
  }, []);

  useEffect(() => {
    // Initialize performance monitoring
    if (typeof window !== 'undefined') {
      // Track Core Web Vitals
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      });
    }
  }, []);

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <AccessibilityEnhancer>
          <SEOOptimizer
            title="Zion Tech Group - AI & IT Solutions"
            description="Leading provider of AI-powered enterprise solutions, automation, and digital transformation services."
            keywords={['AI solutions', 'enterprise AI', 'digital transformation', 'automation', 'cloud services']}
            image="https://ziontechgroup.com/og-image.jpg"
            url="https://ziontechgroup.com"
            type="website"
          />
          
          <Router>
            <div className="min-h-screen bg-gray-50">
              {/* Navigation */}
              <nav className="bg-white shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex justify-between h-16">
                    <div className="flex items-center">
                      <Link href="/" className="flex-shrink-0 flex items-center">
                        <span className="text-2xl font-bold text-blue-600">Zion Tech Group</span>
                      </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                      <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                        Home
                      </Link>
                      <Link href="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                        About
                      </Link>
                      <Link href="/services" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                        Services
                      </Link>
                      <Link href="/blog" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                        Blog
                      </Link>
                      <Link href="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                        Contact
                      </Link>
                    </div>
                  </div>
                </div>
              </nav>

              {/* Main Content */}
              <main>
                <Suspense fallback={<div className="flex justify-center items-center h-64">Loading...</div>}>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/enterprise" element={<EnterprisePage />} />
                    <Route path="/team" element={<TeamPage />} />
                    <Route path="/privacy" element={<PrivacyPage />} />
                    <Route path="/terms" element={<TermsPage />} />
                  </Routes>
                </Suspense>
              </main>

              {/* Footer */}
              <footer className="bg-gray-800 text-white">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
                      <p className="text-gray-300">
                        Leading provider of AI-powered enterprise solutions and digital transformation services.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Services</h3>
                      <ul className="space-y-2">
                        <li><Link href="/services/ai-solutions" className="text-gray-300 hover:text-white">AI Solutions</Link></li>
                        <li><Link href="/services/automation" className="text-gray-300 hover:text-white">Automation</Link></li>
                        <li><Link href="/services/cloud-services" className="text-gray-300 hover:text-white">Cloud Services</Link></li>
                        <li><Link href="/services/consulting" className="text-gray-300 hover:text-white">Consulting</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Company</h3>
                      <ul className="space-y-2">
                        <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
                        <li><Link href="/team" className="text-gray-300 hover:text-white">Our Team</Link></li>
                        <li><Link href="/careers" className="text-gray-300 hover:text-white">Careers</Link></li>
                        <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Resources</h3>
                      <ul className="space-y-2">
                        <li><Link href="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
                        <li><Link href="/guides" className="text-gray-300 hover:text-white">Guides</Link></li>
                        <li><Link href="/case-studies" className="text-gray-300 hover:text-white">Case Studies</Link></li>
                        <li><Link href="/api-docs" className="text-gray-300 hover:text-white">API Docs</Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8 pt-8 border-t border-gray-700">
                    <p className="text-center text-gray-300">
                      © 2025 Zion Tech Group. All rights reserved.
                    </p>
                  </div>
                </div>
              </footer>
            </div>
          </Router>

          {/* Performance Monitor (only in development) */}
          {process.env.NODE_ENV === 'development' && <PerformanceMonitor />}
        </AccessibilityEnhancer>
      </ErrorBoundary>
    </HelmetProvider>
  );
};

export default App;