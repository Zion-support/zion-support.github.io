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
const PrivacyPage = React.lazy(() => import('./app/privacy/page'));
const TermsPage = React.lazy(() => import('./app/terms/page'));
const CookiesPage = React.lazy(() => import('./app/cookies/page'));

// AI Services Pages
const AiMarketingPage = React.lazy(() => import('./app/ai-marketing/page'));
const AiCustomerSupportPage = React.lazy(() => import('./app/ai-customer-support/page'));
const AiDataAnalyticsPage = React.lazy(() => import('./app/ai-data-analytics/page'));
const AiContentGenerationPage = React.lazy(() => import('./app/ai-content-generation/page'));
const AiHealthcarePage = React.lazy(() => import('./app/ai-healthcare/page'));
const AiFintechPage = React.lazy(() => import('./app/ai-fintech/page'));
const AiEcommerceSolutionsPage = React.lazy(() => import('./app/ai-ecommerce-solutions/page'));
const AiCybersecurityPage = React.lazy(() => import('./app/ai-cybersecurity/page'));
const AiMobileAppDevelopmentPage = React.lazy(() => import('./app/ai-mobile-app-development/page'));
const AiSalesAutomationPage = React.lazy(() => import('./app/ai-sales-automation/page'));
const AiWorkflowAutomationPage = React.lazy(() => import('./app/ai-workflow-automation/page'));
const AiDataVisualizationPage = React.lazy(() => import('./app/ai-data-visualization/page'));
const AiLeadGenerationPage = React.lazy(() => import('./app/ai-lead-generation/page'));
const AiDocumentProcessingPage = React.lazy(() => import('./app/ai-document-processing/page'));
const AiAutomationPage = React.lazy(() => import('./app/ai-automation/page'));
const AiVoiceAssistantPage = React.lazy(() => import('./app/ai-voice-assistant/page'));
const AiPredictiveMaintenancePage = React.lazy(() => import('./app/ai-predictive-maintenance/page'));
const AiSupplyChainPage = React.lazy(() => import('./app/ai-supply-chain/page'));
const AiQualityControlPage = React.lazy(() => import('./app/ai-quality-control/page'));
const AiEnergyManagementPage = React.lazy(() => import('./app/ai-energy-management/page'));
const AiLegalAnalysisPage = React.lazy(() => import('./app/ai-legal-analysis/page'));
const AiRealEstatePage = React.lazy(() => import('./app/ai-real-estate/page'));
const AiHrAssistantPage = React.lazy(() => import('./app/ai-hr-assistant/page'));
const AiInsurancePage = React.lazy(() => import('./app/ai-insurance/page'));
const AiEducationPage = React.lazy(() => import('./app/ai-education/page'));
const AiTransportationPage = React.lazy(() => import('./app/ai-transportation/page'));
const AiEnvironmentalPage = React.lazy(() => import('./app/ai-environmental/page'));
const AiRetailPage = React.lazy(() => import('./app/ai-retail/page'));
const AiSportsPage = React.lazy(() => import('./app/ai-sports/page'));
const AiMentalHealthPage = React.lazy(() => import('./app/ai-mental-health/page'));

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
                            <Route path="/privacy" element={<PrivacyPage />} />
                            <Route path="/terms" element={<TermsPage />} />
                            <Route path="/cookies" element={<CookiesPage />} />
                            
                            {/* AI Services Routes */}
                            <Route path="/ai-marketing" element={<AiMarketingPage />} />
                            <Route path="/ai-customer-support" element={<AiCustomerSupportPage />} />
                            <Route path="/ai-data-analytics" element={<AiDataAnalyticsPage />} />
                            <Route path="/ai-content-generation" element={<AiContentGenerationPage />} />
                            <Route path="/ai-healthcare" element={<AiHealthcarePage />} />
                            <Route path="/ai-fintech" element={<AiFintechPage />} />
                            <Route path="/ai-ecommerce-solutions" element={<AiEcommerceSolutionsPage />} />
                            <Route path="/ai-cybersecurity" element={<AiCybersecurityPage />} />
                            <Route path="/ai-mobile-app-development" element={<AiMobileAppDevelopmentPage />} />
                            <Route path="/ai-sales-automation" element={<AiSalesAutomationPage />} />
                            <Route path="/ai-workflow-automation" element={<AiWorkflowAutomationPage />} />
                            <Route path="/ai-data-visualization" element={<AiDataVisualizationPage />} />
                            <Route path="/ai-lead-generation" element={<AiLeadGenerationPage />} />
                            <Route path="/ai-document-processing" element={<AiDocumentProcessingPage />} />
                            <Route path="/ai-automation" element={<AiAutomationPage />} />
                            <Route path="/ai-voice-assistant" element={<AiVoiceAssistantPage />} />
                            <Route path="/ai-predictive-maintenance" element={<AiPredictiveMaintenancePage />} />
                            <Route path="/ai-supply-chain" element={<AiSupplyChainPage />} />
                            <Route path="/ai-quality-control" element={<AiQualityControlPage />} />
                            <Route path="/ai-energy-management" element={<AiEnergyManagementPage />} />
                            <Route path="/ai-legal-analysis" element={<AiLegalAnalysisPage />} />
                            <Route path="/ai-real-estate" element={<AiRealEstatePage />} />
                            <Route path="/ai-hr-assistant" element={<AiHrAssistantPage />} />
                            <Route path="/ai-insurance" element={<AiInsurancePage />} />
                            <Route path="/ai-education" element={<AiEducationPage />} />
                            <Route path="/ai-transportation" element={<AiTransportationPage />} />
                            <Route path="/ai-environmental" element={<AiEnvironmentalPage />} />
                            <Route path="/ai-retail" element={<AiRetailPage />} />
                            <Route path="/ai-sports" element={<AiSportsPage />} />
                            <Route path="/ai-mental-health" element={<AiMentalHealthPage />} />
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