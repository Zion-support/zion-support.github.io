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
                            <Route path="/ai-analytics" element={<AiServicesPage />} />
                            <Route path="/ai-automation" element={<AiServicesPage />} />
                            <Route path="/ai-chatbot-builder" element={<AiServicesPage />} />
                            <Route path="/ai-crm" element={<AiServicesPage />} />
                            <Route path="/ai-cybersecurity" element={<AiServicesPage />} />
                            <Route path="/ai-data-analytics" element={<AiServicesPage />} />
                            <Route path="/ai-healthcare" element={<AiServicesPage />} />
                            <Route path="/ai-fintech" element={<AiServicesPage />} />
                            <Route path="/ai-content-generation" element={<AiServicesPage />} />
                            <Route path="/ai-customer-support" element={<AiServicesPage />} />
                            <Route path="/ai-design-studio" element={<AiServicesPage />} />
                            <Route path="/ai-document-processing" element={<AiServicesPage />} />
                            <Route path="/ai-ecommerce-solutions" element={<AiServicesPage />} />
                            <Route path="/ai-education" element={<AiServicesPage />} />
                            <Route path="/ai-email-marketing" element={<AiServicesPage />} />
                            <Route path="/ai-fraud-detection" element={<AiServicesPage />} />
                            <Route path="/ai-hr" element={<AiServicesPage />} />
                            <Route path="/ai-image-recognition" element={<AiServicesPage />} />
                            <Route path="/ai-inventory-management" element={<AiServicesPage />} />
                            <Route path="/ai-lead-generation" element={<AiServicesPage />} />
                            <Route path="/ai-marketing-automation" element={<AiServicesPage />} />
                            <Route path="/ai-project-management" element={<AiServicesPage />} />
                            <Route path="/ai-sales-automation" element={<AiServicesPage />} />
                            <Route path="/ai-workflow-automation" element={<AiServicesPage />} />
                            {/* IT Services Routes */}
                            <Route path="/cloud-infrastructure" element={<ItServicesPage />} />
                            <Route path="/cybersecurity" element={<ItServicesPage />} />
                            <Route path="/devops" element={<ItServicesPage />} />
                            <Route path="/database" element={<ItServicesPage />} />
                            <Route path="/managed-it" element={<ItServicesPage />} />
                            <Route path="/it-consulting" element={<ItServicesPage />} />
                            <Route path="/data-analytics" element={<ItServicesPage />} />
                            <Route path="/mobile-development" element={<ItServicesPage />} />
                            <Route path="/web-development" element={<ItServicesPage />} />
                            <Route path="/process-automation" element={<ItServicesPage />} />
                            <Route path="/network-infrastructure" element={<ItServicesPage />} />
                            <Route path="/disaster-recovery" element={<ItServicesPage />} />
                            {/* Micro SaaS Routes */}
                            <Route path="/analytics-dashboard" element={<MicroSaasPage />} />
                            <Route path="/customer-support-bot" element={<MicroSaasPage />} />
                            <Route path="/security-monitor" element={<MicroSaasPage />} />
                            <Route path="/cloud-backup" element={<MicroSaasPage />} />
                            <Route path="/performance-tracker" element={<MicroSaasPage />} />
                            <Route path="/workflow-automation" element={<MicroSaasPage />} />
                            <Route path="/email-marketing" element={<MicroSaasPage />} />
                            <Route path="/social-media-manager" element={<MicroSaasPage />} />
                            <Route path="/expense-tracker" element={<MicroSaasPage />} />
                            <Route path="/appointment-scheduler" element={<MicroSaasPage />} />
                            <Route path="/content-generator" element={<MicroSaasPage />} />
                            <Route path="/lead-generation" element={<MicroSaasPage />} />
                            <Route path="/seo-optimizer" element={<MicroSaasPage />} />
                            <Route path="/survey-builder" element={<MicroSaasPage />} />
                            <Route path="/project-management" element={<MicroSaasPage />} />
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