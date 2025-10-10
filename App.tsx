'use client';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './app/styles/futuristic.css';
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import HomePage from './app/page';
import { PageLoader } from './app/components/LoadingStates';
import ErrorBoundary from './app/components/ErrorBoundary';
import SEOHead from './app/components/EnhancedSEOHead';
import SkipLink from './app/components/EnhancedSkipLink';
import Breadcrumb from './app/components/Breadcrumb';
import PerformanceOptimizer from './app/components/EnhancedPerformanceOptimizer';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import EnhancedAccessibility from './app/components/EnhancedAccessibility';
import { usePerformanceMonitor } from './app/hooks/usePerformanceMonitor';
import { AnalyticsProvider } from './app/components/EnhancedAnalytics';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import ServiceWorker from './app/components/ServiceWorker';
import EnhancedErrorBoundary from './app/components/EnhancedErrorBoundary';
// Structured data for SEO - moved to SEOHead component
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
  usePerformanceMonitor();
  return <React.Fragment>{children}</React.Fragment>;
};

// Main App Component
const App: React.FC = () => {
  return (
    <EnhancedErrorBoundary>
      <HelmetProvider>
        <SEOHead />
        <SkipLink />
        <ServiceWorker />
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
                      <main id="main-content" className="flex-1" tabIndex={-1}>
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
                            {/* AI Services Routes */}
                            <Route path="/ai-analytics" element={<React.lazy(() => import('./app/ai-analytics/page')) />} />
                            <Route path="/ai-automation" element={<React.lazy(() => import('./app/ai-automation/page')) />} />
                            <Route path="/ai-chatbot-builder" element={<React.lazy(() => import('./app/ai-chatbot-builder/page')) />} />
                            <Route path="/ai-content-writer" element={<React.lazy(() => import('./app/ai-content-writer/page')) />} />
                            <Route path="/ai-crm" element={<React.lazy(() => import('./app/ai-crm/page')) />} />
                            <Route path="/ai-cybersecurity" element={<React.lazy(() => import('./app/ai-cybersecurity/page')) />} />
                            <Route path="/ai-data-analytics" element={<React.lazy(() => import('./app/ai-data-analytics/page')) />} />
                            <Route path="/ai-marketing" element={<React.lazy(() => import('./app/ai-marketing/page')) />} />
                            {/* IT Services Routes */}
                            <Route path="/cloud-services" element={<React.lazy(() => import('./app/cloud-services/page')) />} />
                            <Route path="/cybersecurity" element={<React.lazy(() => import('./app/cybersecurity/page')) />} />
                            <Route path="/devops" element={<React.lazy(() => import('./app/devops/page')) />} />
                            <Route path="/database-management" element={<React.lazy(() => import('./app/database-management/page')) />} />
                            <Route path="/it-consulting" element={<React.lazy(() => import('./app/it-consulting/page')) />} />
                            <Route path="/network-security" element={<React.lazy(() => import('./app/network-security/page')) />} />
                            <Route path="/mobile-development" element={<React.lazy(() => import('./app/mobile-development/page')) />} />
                            <Route path="/web-development" element={<React.lazy(() => import('./app/web-development/page')) />} />
                            {/* Micro SaaS Routes */}
                            <Route path="/micro-saas/analytics-dashboard" element={<React.lazy(() => import('./app/micro-saas/analytics-dashboard/page')) />} />
                            <Route path="/micro-saas/content-generator" element={<React.lazy(() => import('./app/micro-saas/content-generator/page')) />} />
                            <Route path="/micro-saas/email-marketing" element={<React.lazy(() => import('./app/micro-saas/email-marketing/page')) />} />
                            <Route path="/micro-saas/expense-tracker" element={<React.lazy(() => import('./app/micro-saas/expense-tracker/page')) />} />
                            <Route path="/micro-saas/inventory-management" element={<React.lazy(() => import('./app/micro-saas/inventory-management/page')) />} />
                            <Route path="/micro-saas/lead-scoring" element={<React.lazy(() => import('./app/micro-saas/lead-scoring/page')) />} />
                            <Route path="/micro-saas/seo-optimizer" element={<React.lazy(() => import('./app/micro-saas/seo-optimizer/page')) />} />
                            <Route path="/micro-saas/social-manager" element={<React.lazy(() => import('./app/micro-saas/social-manager/page')) />} />
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
    </EnhancedErrorBoundary>
  );
};

App.displayName = 'App';
export default App;