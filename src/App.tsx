import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { ThemeProvider } from './components/ThemeProvider';
import { ErrorBoundary } from './components/ErrorBoundary';
import ScrollToTop from './components/ScrollToTop';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceMonitor from './components/PerformanceMonitor';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { PerformanceDashboard } from './components/PerformanceDashboard';
import { AdvancedPerformanceOptimizer } from './components/AdvancedPerformanceOptimizer';
import { EnhancedSEO } from './components/EnhancedSEO';
import { EnhancedAnalytics } from './components/EnhancedAnalytics';
import LoadingSpinner from './components/LoadingSpinner';

// Pages - Lazy loaded for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const Pricing = lazy(() => import('./pages/Pricing'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Service Pages - Lazy loaded for better performance
const AIServices = lazy(() => import('./pages/AIServices'));
const ITServices = lazy(() => import('./pages/ITServices'));
const MicroSaaS = lazy(() => import('./pages/MicroSaaS'));
const Cybersecurity = lazy(() => import('./pages/Cybersecurity'));
const CloudMigration = lazy(() => import('./pages/CloudMigration'));
const MobileDevelopment = lazy(() => import('./pages/MobileDevelopment'));

// Additional Pages - Lazy loaded for better performance
const FAQ = lazy(() => import('./pages/FAQ'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Support = lazy(() => import('./pages/Support'));
const EnhancedMicroSAAS = lazy(() => import('./pages/EnhancedMicroSAAS'));

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <ThemeProvider>
          <AccessibilityEnhancer>
            <Router>
              <ScrollToTop />
              <PerformanceMonitor />
              <PerformanceOptimizer enableMonitoring={import.meta.env.DEV} />
              <AdvancedPerformanceOptimizer enableMonitoring={true} enableAutoOptimization={true} />
              <EnhancedAnalytics />
              {import.meta.env.DEV && <PerformanceDashboard />}
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
                    <Route path="/enhanced-micro-saas" element={<EnhancedMicroSAAS />} />
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