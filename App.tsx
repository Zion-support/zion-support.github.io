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
import SkipLink from './app/components/SkipLink';
import Breadcrumb from './app/components/Breadcrumb';
import PerformanceOptimizer from './app/components/PerformanceOptimizer';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import EnhancedAccessibility from './app/components/EnhancedAccessibility';
import { usePerformanceMonitor } from './app/hooks/usePerformanceMonitor';
import { AnalyticsProvider } from './app/components/AnalyticsProvider';
import PerformanceMonitor from './app/components/PerformanceMonitor';

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

// AI Services Pages
const AiMarketingPage = React.lazy(() => import('./app/ai-marketing/page'));
const AiCustomerSupportPage = React.lazy(() => import('./app/ai-customer-support/page'));
const AiDataAnalyticsPage = React.lazy(() => import('./app/ai-data-analytics/page'));
const AiContentGenerationPage = React.lazy(() => import('./app/ai-content-generation/page'));
const AiHealthcarePage = React.lazy(() => import('./app/ai-healthcare/page'));
const AiFintechPage = React.lazy(() => import('./app/ai-fintech/page'));
const AiEcommerceSolutionsPage = React.lazy(() => import('./app/ai-ecommerce-solutions/page'));
const AiCybersecurityPage = React.lazy(() => import('./app/ai-cybersecurity/page'));

// IT Services Pages
const CloudServicesPage = React.lazy(() => import('./app/cloud-services/page'));
const CloudMigrationPage = React.lazy(() => import('./app/cloud-migration/page'));
const DevOpsPage = React.lazy(() => import('./app/devops/page'));
const CybersecurityPage = React.lazy(() => import('./app/cybersecurity/page'));
const ItConsultingPage = React.lazy(() => import('./app/it-consulting/page'));
const DatabaseServicesPage = React.lazy(() => import('./app/database-services/page'));
const NetworkSolutionsPage = React.lazy(() => import('./app/network-solutions/page'));
const ItSupportPage = React.lazy(() => import('./app/it-support/page'));

// Legal Pages
const PrivacyPage = React.lazy(() => import('./app/privacy/page'));
const TermsPage = React.lazy(() => import('./app/terms/page'));
const CookiesPage = React.lazy(() => import('./app/cookies/page'));

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
                            
                            {/* AI Services Routes */}
                            <Route path="/ai-marketing" element={<AiMarketingPage />} />
                            <Route path="/ai-customer-support" element={<AiCustomerSupportPage />} />
                            <Route path="/ai-data-analytics" element={<AiDataAnalyticsPage />} />
                            <Route path="/ai-content-generation" element={<AiContentGenerationPage />} />
                            <Route path="/ai-healthcare" element={<AiHealthcarePage />} />
                            <Route path="/ai-fintech" element={<AiFintechPage />} />
                            <Route path="/ai-ecommerce-solutions" element={<AiEcommerceSolutionsPage />} />
                            <Route path="/ai-cybersecurity" element={<AiCybersecurityPage />} />
                            
                            {/* IT Services Routes */}
                            <Route path="/cloud-services" element={<CloudServicesPage />} />
                            <Route path="/cloud-migration" element={<CloudMigrationPage />} />
                            <Route path="/devops" element={<DevOpsPage />} />
                            <Route path="/cybersecurity" element={<CybersecurityPage />} />
                            <Route path="/it-consulting" element={<ItConsultingPage />} />
                            <Route path="/database-services" element={<DatabaseServicesPage />} />
                            <Route path="/network-solutions" element={<NetworkSolutionsPage />} />
                            <Route path="/it-support" element={<ItSupportPage />} />
                            
                            {/* Legal Pages Routes */}
                            <Route path="/privacy" element={<PrivacyPage />} />
                            <Route path="/terms" element={<TermsPage />} />
                            <Route path="/cookies" element={<CookiesPage />} />
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