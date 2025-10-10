
import React, { Suspense, memo } from 'react';
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
import { AnalyticsProvider } from './app/components/Analytics';
import PerformanceMonitor from './app/components/PerformanceMonitor';

// Structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Zion Tech Group",
  "url": "https://ziontechgroup.com",
  "logo": "https://ziontechgroup.com/logo.png",
  "description": "Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services. Transform your business with our advanced AI capabilities.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "364 E Main St STE 1008",
    "addressLocality": "Middletown",
    "addressRegion": "DE",
    "postalCode": "19709",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-302-464-0950",
    "contactType": "customer service",
    "email": "kleber@ziontechgroup.com"
  },
  "sameAs": [
    "https://linkedin.com/company/zion-tech-group",
    "https://twitter.com/ziontechgroup",
    "https://github.com/zion-tech-group"
  ],
  "foundingDate": "2020",
  "numberOfEmployees": "50-100",
  "industry": "Information Technology",
  "services": [
    "AI Solutions",
    "Machine Learning",
    "Quantum Computing",
    "Digital Transformation",
    "IT Services",
    "Cybersecurity",
    "Cloud Computing",
    "Automation"
  ]
};

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import('./app/about/page'));
const ContactPage = React.lazy(() => import('./app/contact/page'));
const PricingPage = React.lazy(() => import('./app/pricing/page'));
const AIServicesPage = React.lazy(() => import('./app/ai-services/page'));
const ITServicesPage = React.lazy(() => import('./app/it-services/page'));
const MicroSaasPage = React.lazy(() => import('./app/micro-saas/page'));
const BlogPage = React.lazy(() => import('./app/blog/page'));
const CaseStudiesPage = React.lazy(() => import('./app/case-studies/page'));
const TeamPage = React.lazy(() => import('./app/team/page'));
const CareersPage = React.lazy(() => import('./app/careers/page'));
const PrivacyPage = React.lazy(() => import('./app/privacy/page'));
const TermsPage = React.lazy(() => import('./app/terms/page'));
const CookiesPage = React.lazy(() => import('./app/cookies/page'));
const DocsPage = React.lazy(() => import('./app/docs/page'));
const ApiDocsPage = React.lazy(() => import('./app/api-docs/page'));
const SupportPage = React.lazy(() => import('./app/support/page'));
const StatusPage = React.lazy(() => import('./app/status/page'));
const DemoPage = React.lazy(() => import('./app/demo/page'));
const ConsultationPage = React.lazy(() => import('./app/consultation/page'));
const ServicesPage = React.lazy(() => import('./app/services/page'));
const AIOpsPage = React.lazy(() => import('./app/ai-ops/page'));
const HealthcareITPage = React.lazy(() => import('./app/healthcare-it/page'));
const FinancialITPage = React.lazy(() => import('./app/financial-it/page'));
const EdgeComputingPage = React.lazy(() => import('./app/edge-computing/page'));
const FiveGImplementationPage = React.lazy(() => import('./app/5 g-implementation/page'));
const IoTPlatformPage = React.lazy(() => import('./app/iot-platform/page'));

// Performance monitoring hook
const AppWithPerformanceMonitoring: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  usePerformanceMonitor();
  return <>{}</>{children};
};

const App: React.FC = memo(() => {
  return (
    <ErrorBoundary></ErrorBoundar>
      <HelmetProvider></HelmetProvider>
        <AnalyticsProvider></AnalyticsProvide>
          <PerformanceOptimizer></PerformanceOptimize>
            <AccessibilityEnhancer></AccessibilityEnhance>
              <EnhancedAccessibility></EnhancedAccessibilit>
                <AppWithPerformanceMonitoring></AppWithPerformanceMonitorin>
                  <SEOHead /></SEOHea>
                  <Router></Route>
                    <div className="min-h-screen bg-white overflow-x-hidden"></div>
                      <SkipLink to="#main-content">Skip to main content</SkipLin>
                      <Navigation /></Navigatio>
                      <Breadcrumb /></Breadcrum>
                      <main id="main-content" className="w-full"></mai>
                        <Suspense fallback={<PageLoader message="Loading Zion Tech Group..." />}></Suspens>
                          <Routes></Route>
                            <Route path="/" element={<HomePage />} /></Rout>
                            <Route path="/about" element={<AboutPage />} /></Rout>
                            <Route path="/contact" element={<ContactPage />} /></Rout>
                            <Route path="/pricing" element={<PricingPage />} /></Rout>
                            <Route path="/ai-services" element={<AIServicesPage />} /></Rout>
                            <Route path="/it-services" element={<ITServicesPage />} /></Rout>
                            <Route path="/micro-saas" element={<MicroSaasPage />} /></Rout>
                            <Route path="/blog" element={<BlogPage />} /></Rout>
                            <Route path="/case-studies" element={<CaseStudiesPage />} /></Rout>
                            <Route path="/team" element={<TeamPage />} /></Rout>
                            <Route path="/careers" element={<CareersPage />} /></Rout>
                            <Route path="/privacy" element={<PrivacyPage />} /></Rout>
                            <Route path="/terms" element={<TermsPage />} /></Rout>
                            <Route path="/cookies" element={<CookiesPage />} /></Rout>
                            <Route path="/docs" element={<DocsPage />} /></Rout>
                            <Route path="/api-docs" element={<ApiDocsPage />} /></Rout>
                            <Route path="/support" element={<SupportPage />} /></Rout>
                            <Route path="/status" element={<StatusPage />} /></Rout>
                            <Route path="/demo" element={<DemoPage />} /></Rout>
                            <Route path="/consultation" element={<ConsultationPage />} /></Rout>
                            <Route path="/services" element={<ServicesPage />} /></Rout>
                            <Route path="/ai-ops" element={<AIOpsPage />} /></Rout>
                            <Route path="/healthcare-it" element={<HealthcareITPage />} /></Rout>
                            <Route path="/financial-it" element={<FinancialITPage />} /></Rout>
                            <Route path="/edge-computing" element={<EdgeComputingPage />} /></Rout>
                            <Route path="/5 g-implementation" element={<FiveGImplementationPage />} /></Rout>
                            <Route path="/iot-platform" element={<IoTPlatformPage />} /></Rout>
                          </Routes>
                        </Suspense>
                      </main>
                      <Footer /></Foote>
                    </div>
                  </Router>
                </AppWithPerformanceMonitoring>
              </EnhancedAccessibility>
            </AccessibilityEnhancer>
          </PerformanceOptimizer>
        </AnalyticsProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

App.displayName = 'App';

export default App;