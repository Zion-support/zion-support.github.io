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
<<<<<<< HEAD
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

// AI Services Pages
const AiAnalyticsPage = React.lazy(() => import('./app/ai-analytics/page'));
const AiAutomationPage = React.lazy(() => import('./app/ai-automation/page'));
const AiChatbotBuilderPage = React.lazy(() => import('./app/ai-chatbot-builder/page'));
const AiContentGenerationPage = React.lazy(() => import('./app/ai-content-generation/page'));
const AiCrmPage = React.lazy(() => import('./app/ai-crm/page'));
const AiCustomerSupportPage = React.lazy(() => import('./app/ai-customer-support/page'));
const AiCybersecurityPage = React.lazy(() => import('./app/ai-cybersecurity/page'));
const AiDataAnalyticsPage = React.lazy(() => import('./app/ai-data-analytics/page'));
const AiHealthcarePage = React.lazy(() => import('./app/ai-healthcare/page'));
const AiFintechPage = React.lazy(() => import('./app/ai-fintech/page'));

// IT Services Pages
const CloudInfrastructurePage = React.lazy(() => import('./app/cloud-infrastructure/page'));
const CybersecurityPage = React.lazy(() => import('./app/cybersecurity/page'));
const DevOpsPage = React.lazy(() => import('./app/devops/page'));
const ItInfrastructurePage = React.lazy(() => import('./app/it-infrastructure/page'));

// Micro SaaS Pages
const AiEmailAssistantPage = React.lazy(() => import('./app/ai-email-assistant/page'));
const AiExpenseTrackerPage = React.lazy(() => import('./app/ai-expense-tracker/page'));
const AiInvoiceGeneratorPage = React.lazy(() => import('./app/ai-invoice-generator/page'));
const AiLeadGenerationPage = React.lazy(() => import('./app/ai-lead-generation/page'));

// Additional Pages
const PrivacyPage = React.lazy(() => import('./app/privacy/page'));
const TermsPage = React.lazy(() => import('./app/terms/page'));
const CookiesPage = React.lazy(() => import('./app/cookies/page'));
const TeamPage = React.lazy(() => import('./app/team/page'));
=======

>>>>>>> cursor/analyze-improve-and-deploy-application-3800
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
                            
                            {/* Main Pages */}
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
                            <Route path="/team" element={<TeamPage />} />
                            
                            {/* Service Categories */}
                            <Route path="/ai-services" element={<AiServicesPage />} />
                            <Route path="/it-services" element={<ItServicesPage />} />
                            <Route path="/micro-saas" element={<MicroSaasPage />} />
                            
                            {/* AI Services */}
                            <Route path="/ai-analytics" element={<AiAnalyticsPage />} />
                            <Route path="/ai-automation" element={<AiAutomationPage />} />
                            <Route path="/ai-chatbot-builder" element={<AiChatbotBuilderPage />} />
                            <Route path="/ai-content-generation" element={<AiContentGenerationPage />} />
                            <Route path="/ai-crm" element={<AiCrmPage />} />
                            <Route path="/ai-customer-support" element={<AiCustomerSupportPage />} />
                            <Route path="/ai-cybersecurity" element={<AiCybersecurityPage />} />
                            <Route path="/ai-data-analytics" element={<AiDataAnalyticsPage />} />
                            <Route path="/ai-healthcare" element={<AiHealthcarePage />} />
                            <Route path="/ai-fintech" element={<AiFintechPage />} />
                            
                            {/* IT Services */}
                            <Route path="/cloud-infrastructure" element={<CloudInfrastructurePage />} />
                            <Route path="/cybersecurity" element={<CybersecurityPage />} />
                            <Route path="/devops" element={<DevOpsPage />} />
                            <Route path="/it-infrastructure" element={<ItInfrastructurePage />} />
                            
                            {/* Micro SaaS */}
                            <Route path="/ai-email-assistant" element={<AiEmailAssistantPage />} />
                            <Route path="/ai-expense-tracker" element={<AiExpenseTrackerPage />} />
                            <Route path="/ai-invoice-generator" element={<AiInvoiceGeneratorPage />} />
                            <Route path="/ai-lead-generation" element={<AiLeadGenerationPage />} />
                            
                            {/* Legal Pages */}
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
    </EnhancedErrorBoundary>
  );
};

App.displayName = 'App';
export default App;