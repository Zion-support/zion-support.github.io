import React, { useState, useEffect, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navigation from './app/components/Navigation';
import Sidebar from './app/components/Sidebar';
import Footer from './app/components/Footer';
import LoadingPage from './app/components/Loading';
import HomePage from './app/page';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import ErrorBoundary from './app/components/ErrorBoundary';

// All necessary imports are already defined above





// Page Components
import AboutPage from './app/pages/AboutPage';
import ContactPage from './app/pages/ContactPage';
import ServicesPage from './app/pages/ServicesPage';
import BlogPage from './app/pages/BlogPage';
import TutorialsPage from './app/pages/TutorialsPage';
import DemoPage from './app/pages/DemoPage';
import SupportPage from './app/pages/SupportPage';
import PrivacyPage from './app/pages/PrivacyPage';
import TermsPage from './app/pages/TermsPage';
import CookiesPage from './app/pages/CookiesPage';
import SitemapPage from './app/pages/SitemapPage';
import PricingPage from './app/pages/PricingPage';
// Service Pages
import AIServicesPage from './app/pages/AIServicesPage';
import ITServicesPage from './app/pages/ITServicesPage';
import CloudInfrastructurePage from './app/pages/CloudInfrastructurePage';
import DigitalTransformationPage from './app/pages/DigitalTransformationPage';
import CaseStudiesPage from './app/pages/CaseStudiesPage';
import CareersPage from './app/pages/CareersPage';

// Additional Pages
import MicroSaaSPage from './app/pages/MicroSaaSPage';
// TODO: Add lazy imports for components when they are created

// New Innovative Micro SAAS Services

// 5G Solutions Pages
// Additional AI Services Pages

// New Advanced AI Services

// Additional IT Services Pages

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  useEffect(() => {
    // Performance monitoring
    if (typeof window !== 'undefined') {
      // Monitor Core Web Vitals
      import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB }) => {
        onCLS((_metric) => {
          // Performance monitoring - CLS
        });
        onFCP((_metric) => {
          // Performance monitoring - FCP
        });
        onLCP((_metric) => {
          // Performance monitoring - LCP
        });
        onTTFB((_metric) => {
          // Performance monitoring - TTFB
        });
      });

      // Monitor bundle size
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            // Performance monitoring - page load time
            // const navEntry = entry as PerformanceNavigationTiming;
            // const _loadTime = navEntry.loadEventEnd - navEntry.loadEventStart;
          }
        }
      });
      observer.observe({ entryTypes: ['navigation'] });
    }
  }, []);

  useEffect(() => {
    // Initialize performance monitoring
  }, []);

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <div className="min-h-screen bg-slate-900 flex">
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
            <div className="flex-1 flex flex-col">
              <Navigation onSidebarToggle={() => setIsSidebarOpen(true)} />
              <main className="relative z-10 flex-1">
                <Suspense fallback={<LoadingPage />}>
                  <Routes>
                    {/* Main Pages */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/pricing" element={<PricingPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/ai-services" element={<AIServicesPage />} />
                    <Route path="/tutorials" element={<TutorialsPage />} />
                    <Route path="/demo" element={<DemoPage />} />
                    <Route path="/support" element={<SupportPage />} />
                    <Route path="/privacy" element={<PrivacyPage />} />
                    <Route path="/terms" element={<TermsPage />} />
                    <Route path="/cookies" element={<CookiesPage />} />
                    <Route path="/sitemap" element={<SitemapPage />} />
                    <Route path="/micro-saas" element={<MicroSaaSPage />} />
                    <Route path="/it-services" element={<ITServicesPage />} />
                    <Route path="/cloud-services" element={<ServicesPage />} />
                    <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                    <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
                    <Route path="/case-studies" element={<CaseStudiesPage />} />
                    <Route path="/careers" element={<CareersPage />} />
                    
                    {/* New Innovative Micro SAAS Services */}
                    {/* TODO: Add micro SaaS service routes when components are created */}
                    
                    {/* Advanced AI Services */}
                    {/* TODO: Add advanced AI service routes when components are created */}

                    {/* Catch all route */}
                    <Route path="*" element={
                      <div className="min-h-screen flex items-center justify-center bg-slate-900">
                        <div className="text-center">
                          <h1 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h1>
                          <p className="text-gray-300 mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
                          <a href="/" className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-2 px-4 rounded transition-all duration-300">
                            Go Home
                          </a>
                        </div>
                      </div>
                    } />
                  </Routes>
                </Suspense>
              </main>
              <Footer />
              <PerformanceMonitor />
              <AccessibilityEnhancer />
            </div>
          </div>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;