'use client';

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './styles/futuristic.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './page';
import { PageLoader } from './components/LoadingStates';
import ErrorBoundary from './components/ErrorBoundary';
import SEOHead from './components/EnhancedSEOHead';
import SkipLink from './components/SkipLink';
import Breadcrumb from './components/Breadcrumb';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import EnhancedAccessibility from './components/EnhancedAccessibility';
import { usePerformanceMonitor } from './hooks/usePerformanceMonitor';
import { AnalyticsProvider } from './components/AnalyticsProvider';
import PerformanceMonitor from './components/PerformanceMonitor';

// Lazy load pages for better performance
const AboutPage = lazy(() => import('./about/page'));
const ContactPage = lazy(() => import('./contact/page'));
const ServicesPage = lazy(() => import('./services/page'));
const PricingPage = lazy(() => import('./pricing/page'));
const BlogPage = lazy(() => import('./blog/page'));
const CaseStudiesPage = lazy(() => import('./case-studies/page'));
const CareersPage = lazy(() => import('./careers/page'));
const PartnersPage = lazy(() => import('./partners/page'));
const SupportPage = lazy(() => import('./support/page'));
const FAQPage = lazy(() => import('./faq/page'));
const DemoPage = lazy(() => import('./demo/page'));
const ConsultationPage = lazy(() => import('./consultation/page'));
const MicroSaasPage = lazy(() => import('./micro-saas/page'));
const AiServicesPage = lazy(() => import('./ai-services/page'));
const ItServicesPage = lazy(() => import('./it-services/page'));

// Performance monitoring hook
const AppWithPerformanceMonitoring: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  usePerformanceMonitor();
  return <>{children}</>;
};

// Main App Component
const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <SEOHead />
        <SkipLink />
        <Router>
          <AppWithPerformanceMonitoring>
            <AnalyticsProvider>
              <PerformanceOptimizer>
                <EnhancedAccessibility>
                  <AccessibilityEnhancer>
                    <PerformanceMonitor />
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                      <Navigation />
                      <Breadcrumb />
                      <main id="main-content" className="flex-1">
                        <Suspense fallback={<PageLoader />}>
                          <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                            <Route path="/services" element={<ServicesPage />} />
                            <Route path="/pricing" element={<PricingPage />} />
                            <Route path="/blog" element={<BlogPage />} />
                            <Route path="/case-studies" element={<CaseStudiesPage />} />
                            <Route path="/careers" element={<CareersPage />} />
                            <Route path="/partners" element={<PartnersPage />} />
                            <Route path="/support" element={<SupportPage />} />
                            <Route path="/faq" element={<FAQPage />} />
                            <Route path="/demo" element={<DemoPage />} />
                            <Route path="/consultation" element={<ConsultationPage />} />
                            <Route path="/micro-saas" element={<MicroSaasPage />} />
                            <Route path="/ai-services" element={<AiServicesPage />} />
                            <Route path="/it-services" element={<ItServicesPage />} />
                          </Routes>
                        </Suspense>
                      </main>
                      <Footer />
                    </div>
                  </AccessibilityEnhancer>
                </EnhancedAccessibility>
              </PerformanceOptimizer>
            </AnalyticsProvider>
          </AppWithPerformanceMonitoring>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

App.displayName = 'App';

export default App;