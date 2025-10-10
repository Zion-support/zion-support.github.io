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

// AI Services Pages
const AiAnalyticsPage = React.lazy(() => import('./app/ai-analytics/page'));
const AiAutomationPage = React.lazy(() => import('./app/ai-automation/page'));
const AiChatbotBuilderPage = React.lazy(() => import('./app/ai-chatbot-builder/page'));
const AiContentWriterPage = React.lazy(() => import('./app/ai-content-writer/page'));
const AiCrmPage = React.lazy(() => import('./app/ai-crm/page'));
const AiCybersecurityPage = React.lazy(() => import('./app/ai-cybersecurity/page'));
const AiDataAnalyticsPage = React.lazy(() => import('./app/ai-data-analytics/page'));
const AiMarketingPage = React.lazy(() => import('./app/ai-marketing/page'));

// IT Services Pages
const CloudServicesPage = React.lazy(() => import('./app/cloud-services/page'));
const CybersecurityPage = React.lazy(() => import('./app/cybersecurity/page'));
const DevOpsPage = React.lazy(() => import('./app/devops/page'));
const DatabaseManagementPage = React.lazy(() => import('./app/database-management/page'));
const ItConsultingPage = React.lazy(() => import('./app/it-consulting/page'));
const NetworkSecurityPage = React.lazy(() => import('./app/network-security/page'));
const MobileDevelopmentPage = React.lazy(() => import('./app/mobile-development/page'));
const WebDevelopmentPage = React.lazy(() => import('./app/web-development/page'));

// Micro SaaS Pages
const MicroSaasAnalyticsDashboardPage = React.lazy(() => import('./app/micro-saas/analytics-dashboard/page'));
const MicroSaasContentGeneratorPage = React.lazy(() => import('./app/micro-saas/content-generator/page'));
const MicroSaasEmailMarketingPage = React.lazy(() => import('./app/micro-saas/email-marketing/page'));
const MicroSaasExpenseTrackerPage = React.lazy(() => import('./app/micro-saas/expense-tracker/page'));
const MicroSaasInventoryManagementPage = React.lazy(() => import('./app/micro-saas/inventory-management/page'));
const MicroSaasLeadScoringPage = React.lazy(() => import('./app/micro-saas/lead-scoring/page'));
const MicroSaasSeoOptimizerPage = React.lazy(() => import('./app/micro-saas/seo-optimizer/page'));
const MicroSaasSocialManagerPage = React.lazy(() => import('./app/micro-saas/social-manager/page'));

// Legal Pages
const PrivacyPage = React.lazy(() => import('./app/privacy/page'));
const TermsPage = React.lazy(() => import('./app/terms/page'));
const CookiesPage = React.lazy(() => import('./app/cookies/page'));

// 404 Page
const NotFoundPage = React.lazy(() => import('./app/not-found/page'));
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
                            {/* Main Pages */}
                            <Route path="/" element={<HomePage />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                            <Route path="/services" element={<ServicesPage />} />
                            <Route path="/pricing" element={<PricingPage />} />
                            <Route path="/case-studies" element={<CaseStudiesPage />} />
                            <Route path="/blog" element={<BlogPage />} />
                            <Route path="/careers" element={<CareersPage />} />
                            <Route path="/partners" element={<PartnersPage />} />
                            <Route path="/support" element={<SupportPage />} />
                            <Route path="/faq" element={<FAQPage />} />
                            <Route path="/demo" element={<DemoPage />} />
                            <Route path="/consultation" element={<ConsultationPage />} />
                            
                            {/* AI Services */}
                            <Route path="/ai-services" element={<AiServicesPage />} />
                            <Route path="/ai-analytics" element={<AiAnalyticsPage />} />
                            <Route path="/ai-automation" element={<AiAutomationPage />} />
                            <Route path="/ai-chatbot-builder" element={<AiChatbotBuilderPage />} />
                            <Route path="/ai-content-writer" element={<AiContentWriterPage />} />
                            <Route path="/ai-crm" element={<AiCrmPage />} />
                            <Route path="/ai-cybersecurity" element={<AiCybersecurityPage />} />
                            <Route path="/ai-data-analytics" element={<AiDataAnalyticsPage />} />
                            <Route path="/ai-marketing" element={<AiMarketingPage />} />
                            
                            {/* IT Services */}
                            <Route path="/it-services" element={<ItServicesPage />} />
                            <Route path="/cloud-services" element={<CloudServicesPage />} />
                            <Route path="/cybersecurity" element={<CybersecurityPage />} />
                            <Route path="/devops" element={<DevOpsPage />} />
                            <Route path="/database-management" element={<DatabaseManagementPage />} />
                            <Route path="/it-consulting" element={<ItConsultingPage />} />
                            <Route path="/network-security" element={<NetworkSecurityPage />} />
                            <Route path="/mobile-development" element={<MobileDevelopmentPage />} />
                            <Route path="/web-development" element={<WebDevelopmentPage />} />
                            
                            {/* Micro SaaS */}
                            <Route path="/micro-saas" element={<MicroSaasPage />} />
                            <Route path="/micro-saas/analytics-dashboard" element={<MicroSaasAnalyticsDashboardPage />} />
                            <Route path="/micro-saas/content-generator" element={<MicroSaasContentGeneratorPage />} />
                            <Route path="/micro-saas/email-marketing" element={<MicroSaasEmailMarketingPage />} />
                            <Route path="/micro-saas/expense-tracker" element={<MicroSaasExpenseTrackerPage />} />
                            <Route path="/micro-saas/inventory-management" element={<MicroSaasInventoryManagementPage />} />
                            <Route path="/micro-saas/lead-scoring" element={<MicroSaasLeadScoringPage />} />
                            <Route path="/micro-saas/seo-optimizer" element={<MicroSaasSeoOptimizerPage />} />
                            <Route path="/micro-saas/social-manager" element={<MicroSaasSocialManagerPage />} />
                            
                            {/* Legal Pages */}
                            <Route path="/privacy" element={<PrivacyPage />} />
                            <Route path="/terms" element={<TermsPage />} />
                            <Route path="/cookies" element={<CookiesPage />} />
                            
                            {/* 404 Page */}
                            <Route path="*" element={<NotFoundPage />} />
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