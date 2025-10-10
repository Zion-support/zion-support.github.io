'use client';

import React, { Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceDashboard from './components/PerformanceDashboard';
import AdvancedPerformanceMonitor from './components/AdvancedPerformanceMonitor';
import AdvancedErrorBoundary from './components/AdvancedErrorBoundary';
import SEOEnhancer from './components/SEOEnhancer';
import AdvancedSEOOptimizer from './components/AdvancedSEOOptimizer';
import LoadingSpinner from './components/LoadingSpinner';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import Analytics from './components/Analytics';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'));
const AboutPage = lazy(() => import('./about/page'));
const ServicesPage = lazy(() => import('./services/page'));
const ContactPage = lazy(() => import('./contact/page'));
const TeamPage = lazy(() => import('./team/page'));
const CareersPage = lazy(() => import('./careers/page'));
const PrivacyPage = lazy(() => import('./privacy/page'));
const TermsPage = lazy(() => import('./terms/page'));
const EnterprisePage = lazy(() => import('./enterprise/page'));
const ServicesAdvertisingPage = lazy(() => import('./services-advertising/page'));
const CaseStudiesPage = lazy(() => import('./case-studies/page'));

// AI Services Pages
const AIServicesPage = lazy(() => import('./ai-services/page'));
const ITServicesPage = lazy(() => import('./it-services/page'));

// Main loading component
const MainLoadingSpinner = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <LoadingSpinner size="xl" text="Loading Zion Tech Group..." />
  </div>
);

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <AdvancedErrorBoundary enableErrorReporting={true} enableRetry={true}>
        <Router>
          <AccessibilityEnhancer />
          <SEOEnhancer />
          <PerformanceOptimizer />
          <Analytics />
          <PerformanceDashboard />
          <AdvancedPerformanceMonitor />
          <AdvancedSEOOptimizer />
          
          <Suspense fallback={<MainLoadingSpinner />}>
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/enterprise" element={<EnterprisePage />} />
              <Route path="/services-advertising" element={<ServicesAdvertisingPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              
              {/* AI Services Pages */}
              <Route path="/ai-services" element={<AIServicesPage />} />
              <Route path="/it-services" element={<ITServicesPage />} />
              
              {/* 404 Page */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </Suspense>
        </Router>
      </AdvancedErrorBoundary>
    </HelmetProvider>
  );
};

export default App;