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

// Additional AI Services
const AIEnergyManagementPage = React.lazy(() => import('./app/ai-energy-management/page'));
const AIEnvironmentalPage = React.lazy(() => import('./app/ai-environmental/page'));
const AILegalAnalysisPage = React.lazy(() => import('./app/ai-legal-analysis/page'));
const AIMentalHealthPage = React.lazy(() => import('./app/ai-mental-health/page'));
const AIQualityControlPage = React.lazy(() => import('./app/ai-quality-control/page'));
const AIRetailPage = React.lazy(() => import('./app/ai-retail/page'));
const AISportsPage = React.lazy(() => import('./app/ai-sports/page'));

// IT Services
const APIDevelopmentPage = React.lazy(() => import('./app/api-development/page'));
const ComplianceServicesPage = React.lazy(() => import('./app/compliance-services/page'));
const DataBackupPage = React.lazy(() => import('./app/data-backup/page'));
const DataMigrationPage = React.lazy(() => import('./app/data-migration/page'));
const HybridCloudPage = React.lazy(() => import('./app/hybrid-cloud/page'));

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
                            
                            {/* Additional AI Services Routes */}
                            <Route path="/ai-energy-management" element={<AIEnergyManagementPage />} />
                            <Route path="/ai-environmental" element={<AIEnvironmentalPage />} />
                            <Route path="/ai-legal-analysis" element={<AILegalAnalysisPage />} />
                            <Route path="/ai-mental-health" element={<AIMentalHealthPage />} />
                            <Route path="/ai-quality-control" element={<AIQualityControlPage />} />
                            <Route path="/ai-retail" element={<AIRetailPage />} />
                            <Route path="/ai-sports" element={<AISportsPage />} />
                            
                            {/* IT Services Routes */}
                            <Route path="/api-development" element={<APIDevelopmentPage />} />
                            <Route path="/compliance-services" element={<ComplianceServicesPage />} />
                            <Route path="/data-backup" element={<DataBackupPage />} />
                            <Route path="/data-migration" element={<DataMigrationPage />} />
                            <Route path="/hybrid-cloud" element={<HybridCloudPage />} />
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