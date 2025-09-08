import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { ThemeProvider } from './components/ThemeProvider';
import ErrorBoundary from './components/ErrorBoundary';
import ScrollToTop from './components/ScrollToTop';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceMonitor from './components/PerformanceMonitor';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import LoadingSpinner from './components/LoadingSpinner';

// Pages - Lazy loaded for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const Pricing = lazy(() => import('./pages/Pricing'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Service Pages
import AIServices from './pages/AIServices';
import ITServices from './pages/ITServices';
import MicroSaaS from './pages/MicroSaaS';
import Cybersecurity from './pages/Cybersecurity';
import CloudMigration from './pages/CloudMigration';
import MobileDevelopment from './pages/MobileDevelopment';

// Additional Pages
import FAQ from './pages/FAQ';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Support from './pages/Support';

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <ThemeProvider>
          <AccessibilityEnhancer>
            <Router>
              <ScrollToTop />
              <PerformanceMonitor />
              <PerformanceOptimizer enableMonitoring={process.env.NODE_ENV === 'development'} />
              {/* SEO Meta Tags */}
              <Helmet>
                <title>Zion Tech Group - AI, IT & Micro SaaS Solutions</title>
                <meta name="description" content="Leading provider of AI-powered solutions, IT services, and Micro SaaS products. Transform your business with cutting-edge technology." />
                <meta name="keywords" content="AI services, IT solutions, Micro SaaS, cybersecurity, cloud migration, mobile development" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content="Zion Tech Group - AI, IT & Micro SaaS Solutions" />
                <meta property="og:description" content="Leading provider of AI-powered solutions, IT services, and Micro SaaS products." />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <link rel="canonical" href="https://ziontechgroup.com" />
              </Helmet>
              <div className="min-h-screen bg-background text-foreground" id="main-content">
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    {/* Main Routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/pricing" element={<Pricing />} />
                    
                    {/* Service Routes */}
                    <Route path="/services/ai-services" element={<AIServices />} />
                    <Route path="/services/it-services" element={<ITServices />} />
                    <Route path="/services/micro-saas" element={<MicroSaaS />} />
                    <Route path="/services/cybersecurity" element={<Cybersecurity />} />
                    <Route path="/services/cloud-solutions" element={<CloudMigration />} />
                    <Route path="/services/mobile-development" element={<MobileDevelopment />} />
                    
                    {/* Additional Routes */}
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/support" element={<Support />} />
                    
                    {/* 404 Route */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </div>
            </Router>
          </AccessibilityEnhancer>
        </ThemeProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;