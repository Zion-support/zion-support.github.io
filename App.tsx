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

// AI Services Pages
const AIQualityControlPage = React.lazy(() => import('./app/ai-quality-control/page'));
const AIEnergyManagementPage = React.lazy(() => import('./app/ai-energy-management/page'));
const AILegalAnalysisPage = React.lazy(() => import('./app/ai-legal-analysis/page'));
const AIEnvironmentalPage = React.lazy(() => import('./app/ai-environmental/page'));
const AIRetailPage = React.lazy(() => import('./app/ai-retail/page'));
const AISportsPage = React.lazy(() => import('./app/ai-sports/page'));
const AIMentalHealthPage = React.lazy(() => import('./app/ai-mental-health/page'));

// IT Services Pages
const DataBackupPage = React.lazy(() => import('./app/data-backup/page'));
const WebsiteHostingPage = React.lazy(() => import('./app/website-hosting/page'));

// Micro SAAS Pages
const SocialMediaManagerPage = React.lazy(() => import('./app/social-media-manager/page'));
const AdCampaignManagerPage = React.lazy(() => import('./app/ad-campaign-manager/page'));

// Company Pages
const TeamPage = React.lazy(() => import('./app/team/page'));
const NewsPage = React.lazy(() => import('./app/news/page'));

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
                            
                            {/* AI Services Routes */}
                            <Route path="/ai-quality-control" element={<AIQualityControlPage />} />
                            <Route path="/ai-energy-management" element={<AIEnergyManagementPage />} />
                            <Route path="/ai-legal-analysis" element={<AILegalAnalysisPage />} />
                            <Route path="/ai-environmental" element={<AIEnvironmentalPage />} />
                            <Route path="/ai-retail" element={<AIRetailPage />} />
                            <Route path="/ai-sports" element={<AISportsPage />} />
                            <Route path="/ai-mental-health" element={<AIMentalHealthPage />} />
                            
                            {/* IT Services Routes */}
                            <Route path="/data-backup" element={<DataBackupPage />} />
                            <Route path="/website-hosting" element={<WebsiteHostingPage />} />
                            
                            {/* Micro SAAS Routes */}
                            <Route path="/social-media-manager" element={<SocialMediaManagerPage />} />
                            <Route path="/ad-campaign-manager" element={<AdCampaignManagerPage />} />
                            
                            {/* Company Routes */}
                            <Route path="/team" element={<TeamPage />} />
                            <Route path="/news" element={<NewsPage />} />
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