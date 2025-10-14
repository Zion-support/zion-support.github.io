'use client';

import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './app/styles/futuristic.css';
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import { AnalyticsProvider } from './app/contexts/AnalyticsProvider';
import PerformanceOptimizer from './app/components/PerformanceOptimizer';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import ErrorBoundary from './app/components/ErrorBoundary';
import LoadingSpinner from './app/components/LoadingSpinner';
import SEOOptimizer from './app/components/SEOOptimizer';

import PerformanceMonitor from './app/components/PerformanceMonitor';
import MetaManager from './app/components/MetaManager';
import EnhancedAnalytics from './app/components/EnhancedAnalytics';
import AdvancedLoadingStates from './app/components/AdvancedLoadingStates';

// Pages
import HomePage from './app/page';

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import('./app/about/page'));
const ContactPage = React.lazy(() => import('./app/contact/page'));
const ServicesPage = React.lazy(() => import('./app/services/page'));
const PricingPage = React.lazy(() => import('./app/pricing/page'));
const BlogPage = React.lazy(() => import('./app/blog/page'));
const CaseStudiesPage = React.lazy(() => import('./app/case-studies/page'));
const CareersPage = React.lazy(() => import('./app/careers/page'));
const PartnersPage = React.lazy(() => import('./app/partners/page'));
const SupportPage = React.lazy(() => import('./app/support/page'));
const FAQPage = React.lazy(() => import('./app/faq/page'));
const DemoPage = React.lazy(() => import('./app/demo/page'));
const ConsultationPage = React.lazy(() => import('./app/consultation/page'));
const MicroSaasPage = React.lazy(() => import('./app/micro-saas/page'));
const AiServicesPage = React.lazy(() => import('./app/ai-services/page'));
const ItServicesPage = React.lazy(() => import('./app/it-services/page'));

// Performance monitoring hook
const AppWithPerformanceMonitoring: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

// Main App Component
const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <AnalyticsProvider>
          <PerformanceOptimizer>
            <AccessibilityEnhancer />
            <SEOOptimizer
              title="Zion Tech Group - Advanced AI and IT Solutions"
              description="Leading provider of AI and IT solutions. Transform your business with cutting-edge technology, automation, and digital innovation."
              keywords={['AI', 'IT solutions', 'automation', 'digital transformation', 'cybersecurity', 'cloud infrastructure']}
              type="website"
              structuredData={{
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Zion Tech Group",
                "description": "Leading provider of AI and IT solutions",
                "url": "https://ziontechgroup.com",
                "logo": "https://ziontechgroup.com/images/logo.png",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+1-555-0123",
                  "contactType": "customer service"
                }
              }}
            />
            <MetaManager />
            <PerformanceMonitor />
            <EnhancedAnalytics />
            <Router>
              <AppWithPerformanceMonitoring>
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                  <Navigation />
                  <main className="relative z-10" id="main-content" role="main">
                    <Suspense fallback={<AdvancedLoadingStates type="skeleton" fullScreen message="Loading application..." />}>
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
              </AppWithPerformanceMonitoring>
            </Router>
          </PerformanceOptimizer>
        </AnalyticsProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

App.displayName = 'App';

export default App;