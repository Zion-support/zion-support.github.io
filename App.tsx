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

// AI Service Pages
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

// IT Service Pages
const AiCloudInfrastructurePage = React.lazy(() => import('./app/ai-cloud-infrastructure/page'));
const AiApiManagementPage = React.lazy(() => import('./app/ai-api-management/page'));
const AiCybersecuritySuitePage = React.lazy(() => import('./app/ai-cybersecurity-suite/page'));
const AiInfrastructureMonitoringPage = React.lazy(() => import('./app/ai-infrastructure-monitoring/page'));
const AiEdgeComputingPage = React.lazy(() => import('./app/ai-edge-computing/page'));
const AiContentDeliveryNetworkPage = React.lazy(() => import('./app/ai-content-delivery-network/page'));

// Micro SaaS Pages
const AiCrmAssistantPage = React.lazy(() => import('./app/ai-crm-assistant/page'));
const AiEmailAssistantPage = React.lazy(() => import('./app/ai-email-assistant/page'));
const AiExpenseTrackerPage = React.lazy(() => import('./app/ai-expense-tracker/page'));
const AiInvoiceGeneratorPage = React.lazy(() => import('./app/ai-invoice-generator/page'));
const AiLeadGenerationPage = React.lazy(() => import('./app/ai-lead-generation/page'));
const AiInventoryManagerPage = React.lazy(() => import('./app/ai-inventory-manager/page'));

// Emerging Tech Pages
const QuantumComputingPage = React.lazy(() => import('./app/quantum-computing/page'));
const FiveGImplementationPage = React.lazy(() => import('./app/5g-implementation/page'));
const AiBlockchainSolutionsPage = React.lazy(() => import('./app/ai-blockchain-solutions/page'));
const AiAutonomousSystemsPage = React.lazy(() => import('./app/ai-autonomous-systems/page'));
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
                            {/* AI Service Routes */}
                            <Route path="/ai-analytics" element={<React.lazy(() => import('./app/ai-analytics/page')) />} />
                            <Route path="/ai-automation" element={<React.lazy(() => import('./app/ai-automation/page')) />} />
                            <Route path="/ai-chatbot-builder" element={<React.lazy(() => import('./app/ai-chatbot-builder/page')) />} />
                            <Route path="/ai-content-generation" element={<React.lazy(() => import('./app/ai-content-generation/page')) />} />
                            <Route path="/ai-crm" element={<React.lazy(() => import('./app/ai-crm/page')) />} />
                            <Route path="/ai-customer-support" element={<React.lazy(() => import('./app/ai-customer-support/page')) />} />
                            <Route path="/ai-cybersecurity" element={<React.lazy(() => import('./app/ai-cybersecurity/page')) />} />
                            <Route path="/ai-data-analytics" element={<React.lazy(() => import('./app/ai-data-analytics/page')) />} />
                            <Route path="/ai-healthcare" element={<React.lazy(() => import('./app/ai-healthcare/page')) />} />
                            <Route path="/ai-fintech" element={<React.lazy(() => import('./app/ai-fintech/page')) />} />
                            {/* IT Service Routes */}
                            <Route path="/ai-cloud-infrastructure" element={<React.lazy(() => import('./app/ai-cloud-infrastructure/page')) />} />
                            <Route path="/ai-api-management" element={<React.lazy(() => import('./app/ai-api-management/page')) />} />
                            <Route path="/ai-cybersecurity-suite" element={<React.lazy(() => import('./app/ai-cybersecurity-suite/page')) />} />
                            <Route path="/ai-infrastructure-monitoring" element={<React.lazy(() => import('./app/ai-infrastructure-monitoring/page')) />} />
                            <Route path="/ai-edge-computing" element={<React.lazy(() => import('./app/ai-edge-computing/page')) />} />
                            <Route path="/ai-content-delivery-network" element={<React.lazy(() => import('./app/ai-content-delivery-network/page')) />} />
                            {/* Micro SaaS Routes */}
                            <Route path="/ai-crm-assistant" element={<React.lazy(() => import('./app/ai-crm-assistant/page')) />} />
                            <Route path="/ai-email-assistant" element={<React.lazy(() => import('./app/ai-email-assistant/page')) />} />
                            <Route path="/ai-expense-tracker" element={<React.lazy(() => import('./app/ai-expense-tracker/page')) />} />
                            <Route path="/ai-invoice-generator" element={<React.lazy(() => import('./app/ai-invoice-generator/page')) />} />
                            <Route path="/ai-lead-generation" element={<React.lazy(() => import('./app/ai-lead-generation/page')) />} />
                            <Route path="/ai-inventory-manager" element={<React.lazy(() => import('./app/ai-inventory-manager/page')) />} />
                            {/* Emerging Tech Routes */}
                            <Route path="/quantum-computing" element={<React.lazy(() => import('./app/quantum-computing/page')) />} />
                            <Route path="/5g-implementation" element={<React.lazy(() => import('./app/5g-implementation/page')) />} />
                            <Route path="/ai-blockchain-solutions" element={<React.lazy(() => import('./app/ai-blockchain-solutions/page')) />} />
                            <Route path="/ai-autonomous-systems" element={<React.lazy(() => import('./app/ai-autonomous-systems/page')) />} />
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