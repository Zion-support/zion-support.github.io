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

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import('./app/about/page'));
const ServicesPage = React.lazy(() => import('./app/services/page'));
const PricingPage = React.lazy(() => import('./app/pricing/page'));
const ContactPage = React.lazy(() => import('./app/contact/page'));
const BlogPage = React.lazy(() => import('./app/blog/page'));
const CareersPage = React.lazy(() => import('./app/careers/page'));
const PartnersPage = React.lazy(() => import('./app/partners/page'));
const SupportPage = React.lazy(() => import('./app/support/page'));
const CompliancePage = React.lazy(() => import('./app/compliance/page'));
const PrivacyPage = React.lazy(() => import('./app/privacy/page'));
const TermsPage = React.lazy(() => import('./app/terms/page'));
const CookiesPage = React.lazy(() => import('./app/cookies/page'));
const SitemapPage = React.lazy(() => import('./app/sitemap/page'));
const StatusPage = React.lazy(() => import('./app/status/page'));
const NotFoundPage = React.lazy(() => import('./app/not-found'));

// AI Services pages
const AiServicesPage = React.lazy(() => import('./app/ai-services/page'));
const AiAnalyticsPage = React.lazy(() => import('./app/ai-analytics/page'));
const AiMarketingPage = React.lazy(() => import('./app/ai-marketing/page'));
const AiCustomerSupportPage = React.lazy(() => import('./app/ai-customer-support/page'));
const AiDataAnalyticsPage = React.lazy(() => import('./app/ai-data-analytics/page'));

// IT Services pages
const ItServicesPage = React.lazy(() => import('./app/it-services/page'));
const CloudServicesPage = React.lazy(() => import('./app/cloud-services/page'));
const CybersecurityPage = React.lazy(() => import('./app/cybersecurity/page'));
const BlockchainPage = React.lazy(() => import('./app/blockchain/page'));

// Micro SaaS pages
const MicroSaasPage = React.lazy(() => import('./app/micro-saas/page'));

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <PerformanceOptimizer
          enableImageOptimization={true}
          enableLazyLoading={true}
          enablePreloading={true}
        />
        <AccessibilityEnhancer />
        <SkipLink />
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <Navigation />
            <Breadcrumb />
            <main id="main-content" className="relative">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/careers" element={<CareersPage />} />
                  <Route path="/partners" element={<PartnersPage />} />
                  <Route path="/support" element={<SupportPage />} />
                  <Route path="/compliance" element={<CompliancePage />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                  <Route path="/cookies" element={<CookiesPage />} />
                  <Route path="/sitemap" element={<SitemapPage />} />
                  <Route path="/status" element={<StatusPage />} />
                  
                  {/* AI Services Routes */}
                  <Route path="/ai-services" element={<AiServicesPage />} />
                  <Route path="/ai-analytics" element={<AiAnalyticsPage />} />
                  <Route path="/ai-marketing" element={<AiMarketingPage />} />
                  <Route path="/ai-customer-support" element={<AiCustomerSupportPage />} />
                  <Route path="/ai-data-analytics" element={<AiDataAnalyticsPage />} />
                  
                  {/* IT Services Routes */}
                  <Route path="/it-services" element={<ItServicesPage />} />
                  <Route path="/cloud-services" element={<CloudServicesPage />} />
                  <Route path="/cybersecurity" element={<CybersecurityPage />} />
                  <Route path="/blockchain" element={<BlockchainPage />} />
                  
                  {/* Micro SaaS Routes */}
                  <Route path="/micro-saas" element={<MicroSaasPage />} />
                  
                  {/* Catch all route */}
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;