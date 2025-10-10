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
// New AI Services
const AIProjectManagerPage = React.lazy(() => import('./app/ai-project-manager/page'));
const AISocialMediaManagerPage = React.lazy(() => import('./app/ai-social-media-manager/page'));
const AIEmailMarketingAutomationPage = React.lazy(() => import('./app/ai-email-marketing-automation/page'));
const AIVoiceAssistantPlatformPage = React.lazy(() => import('./app/ai-voice-assistant-platform/page'));
const AIPredictiveMaintenancePage = React.lazy(() => import('./app/ai-predictive-maintenance/page'));
const AISupplyChainOptimizationPage = React.lazy(() => import('./app/ai-supply-chain-optimization/page'));
const AICloudInfrastructurePage = React.lazy(() => import('./app/ai-cloud-infrastructure/page'));

// Additional AI Services
const AIAnalyticsPage = React.lazy(() => import('./app/ai-analytics/page'));
const AIAutomationPage = React.lazy(() => import('./app/ai-automation/page'));
const AIChatbotBuilderPage = React.lazy(() => import('./app/ai-chatbot-builder/page'));
const AICRMPage = React.lazy(() => import('./app/ai-crm/page'));
const AICybersecurityPage = React.lazy(() => import('./app/ai-cybersecurity/page'));
const AIDataAnalyticsPage = React.lazy(() => import('./app/ai-data-analytics/page'));
const AIHealthcarePage = React.lazy(() => import('./app/ai-healthcare/page'));
const AIFintechPage = React.lazy(() => import('./app/ai-fintech/page'));
const AIAPIManagementPage = React.lazy(() => import('./app/ai-api-management/page'));
const AICybersecuritySuitePage = React.lazy(() => import('./app/ai-cybersecurity-suite/page'));
const AINetworkSolutionsPage = React.lazy(() => import('./app/ai-network-solutions/page'));
const AIMobileDevelopmentPage = React.lazy(() => import('./app/ai-mobile-development/page'));
const AISystemIntegrationPage = React.lazy(() => import('./app/ai-system-integration/page'));
const AIAutonomousSystemsPage = React.lazy(() => import('./app/ai-autonomous-systems/page'));
const AIBlockchainSolutionsPage = React.lazy(() => import('./app/ai-blockchain-solutions/page'));
const AIEdgeComputingPage = React.lazy(() => import('./app/ai-edge-computing/page'));

// Micro SaaS Services
const MicroSaasProjectManagementPage = React.lazy(() => import('./app/micro-saas-project-management/page'));
const MicroSaasCustomerSupportPage = React.lazy(() => import('./app/micro-saas-customer-support/page'));
const MicroSaasAnalyticsPage = React.lazy(() => import('./app/micro-saas-analytics/page'));
const MicroSaasCMSPage = React.lazy(() => import('./app/micro-saas-cms/page'));
const MicroSaasCollaborationPage = React.lazy(() => import('./app/micro-saas-collaboration/page'));
const MicroSaasFinancePage = React.lazy(() => import('./app/micro-saas-finance/page'));
const MicroSaasInventoryPage = React.lazy(() => import('./app/micro-saas-inventory/page'));
const MicroSaasMonitoringPage = React.lazy(() => import('./app/micro-saas-monitoring/page'));

// Legal and Documentation Pages
const PrivacyPage = React.lazy(() => import('./app/privacy/page'));
const TermsPage = React.lazy(() => import('./app/terms/page'));
const CookiesPage = React.lazy(() => import('./app/cookies/page'));
const DocsPage = React.lazy(() => import('./app/docs/page'));
const APIDocsPage = React.lazy(() => import('./app/api-docs/page'));
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
                            {/* New AI Services Routes */}
                            <Route path="/ai-project-manager" element={<AIProjectManagerPage />} />
                            <Route path="/ai-social-media-manager" element={<AISocialMediaManagerPage />} />
                            <Route path="/ai-email-marketing-automation" element={<AIEmailMarketingAutomationPage />} />
                            <Route path="/ai-voice-assistant-platform" element={<AIVoiceAssistantPlatformPage />} />
                            <Route path="/ai-predictive-maintenance" element={<AIPredictiveMaintenancePage />} />
                            <Route path="/ai-supply-chain-optimization" element={<AISupplyChainOptimizationPage />} />
                            <Route path="/ai-cloud-infrastructure" element={<AICloudInfrastructurePage />} />
                            
                            {/* Additional AI Services Routes */}
                            <Route path="/ai-analytics" element={<AIAnalyticsPage />} />
                            <Route path="/ai-automation" element={<AIAutomationPage />} />
                            <Route path="/ai-chatbot-builder" element={<AIChatbotBuilderPage />} />
                            <Route path="/ai-crm" element={<AICRMPage />} />
                            <Route path="/ai-cybersecurity" element={<AICybersecurityPage />} />
                            <Route path="/ai-data-analytics" element={<AIDataAnalyticsPage />} />
                            <Route path="/ai-healthcare" element={<AIHealthcarePage />} />
                            <Route path="/ai-fintech" element={<AIFintechPage />} />
                            <Route path="/ai-api-management" element={<AIAPIManagementPage />} />
                            <Route path="/ai-cybersecurity-suite" element={<AICybersecuritySuitePage />} />
                            <Route path="/ai-network-solutions" element={<AINetworkSolutionsPage />} />
                            <Route path="/ai-mobile-development" element={<AIMobileDevelopmentPage />} />
                            <Route path="/ai-system-integration" element={<AISystemIntegrationPage />} />
                            <Route path="/ai-autonomous-systems" element={<AIAutonomousSystemsPage />} />
                            <Route path="/ai-blockchain-solutions" element={<AIBlockchainSolutionsPage />} />
                            <Route path="/ai-edge-computing" element={<AIEdgeComputingPage />} />
                            
                            {/* Micro SaaS Services Routes */}
                            <Route path="/micro-saas-project-management" element={<MicroSaasProjectManagementPage />} />
                            <Route path="/micro-saas-customer-support" element={<MicroSaasCustomerSupportPage />} />
                            <Route path="/micro-saas-analytics" element={<MicroSaasAnalyticsPage />} />
                            <Route path="/micro-saas-cms" element={<MicroSaasCMSPage />} />
                            <Route path="/micro-saas-collaboration" element={<MicroSaasCollaborationPage />} />
                            <Route path="/micro-saas-finance" element={<MicroSaasFinancePage />} />
                            <Route path="/micro-saas-inventory" element={<MicroSaasInventoryPage />} />
                            <Route path="/micro-saas-monitoring" element={<MicroSaasMonitoringPage />} />
                            
                            {/* Legal and Documentation Routes */}
                            <Route path="/privacy" element={<PrivacyPage />} />
                            <Route path="/terms" element={<TermsPage />} />
                            <Route path="/cookies" element={<CookiesPage />} />
                            <Route path="/docs" element={<DocsPage />} />
                            <Route path="/api-docs" element={<APIDocsPage />} />
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