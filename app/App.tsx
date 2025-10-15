
import React, { Suspense, memo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './styles/futuristic.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './page';
import { PageLoader } from './components/LoadingStates';
import ErrorBoundary from './components/ErrorBoundary';
import SEOHead from './components/EnhancedSEOHead';
import SkipLink from './components/SkipLink';
import Breadcrumb from './components/Breadcrumb';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import EnhancedAccessibility from './components/EnhancedAccessibility';
import { usePerformanceMonitor } from './hooks/usePerformanceMonitor';
import { AnalyticsProvider } from './components/AnalyticsProvider';
import PerformanceMonitor from './components/PerformanceMonitor';

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
const AboutPage = React.lazy(() => import('./about/page'));
const ContactPage = React.lazy(() => import('./contact/page'));
const PricingPage = React.lazy(() => import('./pricing/page'));
const AIServicesPage = React.lazy(() => import('./ai-services/page'));
const ITServicesPage = React.lazy(() => import('./it-services/page'));
const MicroSaasPage = React.lazy(() => import('./micro-saas/page'));
const BlogPage = React.lazy(() => import('./blog/page'));
const CaseStudiesPage = React.lazy(() => import('./case-studies/page'));
const TeamPage = React.lazy(() => import('./team/page'));
const CareersPage = React.lazy(() => import('./careers/page'));
const PrivacyPage = React.lazy(() => import('./privacy/page'));
const TermsPage = React.lazy(() => import('./terms/page'));
const CookiesPage = React.lazy(() => import('./cookies/page'));
const DocsPage = React.lazy(() => import('./docs/page'));
const ApiDocsPage = React.lazy(() => import('./api-docs/page'));
const SupportPage = React.lazy(() => import('./support/page'));
const StatusPage = React.lazy(() => import('./status/page'));
const DemoPage = React.lazy(() => import('./demo/page'));
const ConsultationPage = React.lazy(() => import('./consultation/page'));
const ServicesPage = React.lazy(() => import('./services/page'));
const AIOpsPage = React.lazy(() => import('./ai-ops/page'));
const HealthcareITPage = React.lazy(() => import('./healthcare-it/page'));
const FinancialITPage = React.lazy(() => import('./financial-it/page'));
const EdgeComputingPage = React.lazy(() => import('./edge-computing/page'));
const FiveGImplementationPage = React.lazy(() => import('./5g-implementation/page'));
const IoTPlatformPage = React.lazy(() => import('./iot-platform/page'));

// Performance monitoring hook
const AppWithPerformanceMonitoring: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  usePerformanceMonitor();
  return <>{children}</>;
};

const App: React.FC = memo(() => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <AnalyticsProvider>
          <PerformanceOptimizer>
            <AccessibilityEnhancer>
              <EnhancedAccessibility>
                <AppWithPerformanceMonitoring>
                  <SEOHead />
                  <Router>
                    <div className="min-h-screen bg-white overflow-x-hidden">
                      <SkipLink to="#main-content">Skip to main content</SkipLink>
                      <Navigation />
                      <Breadcrumb />
                      <main id="main-content" className="w-full">
                        <Suspense fallback={<PageLoader message="Loading Zion Tech Group..." />}>
                          <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                            <Route path="/pricing" element={<PricingPage />} />
                            <Route path="/ai-services" element={<AIServicesPage />} />
                            <Route path="/it-services" element={<ITServicesPage />} />
                            <Route path="/micro-saas" element={<MicroSaasPage />} />
                            <Route path="/blog" element={<BlogPage />} />
                            <Route path="/case-studies" element={<CaseStudiesPage />} />
                            <Route path="/team" element={<TeamPage />} />
                            <Route path="/careers" element={<CareersPage />} />
                            <Route path="/privacy" element={<PrivacyPage />} />
                            <Route path="/terms" element={<TermsPage />} />
                            <Route path="/cookies" element={<CookiesPage />} />
                            <Route path="/docs" element={<DocsPage />} />
                            <Route path="/api-docs" element={<ApiDocsPage />} />
                            <Route path="/support" element={<SupportPage />} />
                            <Route path="/status" element={<StatusPage />} />
                            <Route path="/demo" element={<DemoPage />} />
                            <Route path="/consultation" element={<ConsultationPage />} />
                            <Route path="/services" element={<ServicesPage />} />
                            <Route path="/ai-ops" element={<AIOpsPage />} />
                            <Route path="/healthcare-it" element={<HealthcareITPage />} />
                            <Route path="/financial-it" element={<FinancialITPage />} />
                            <Route path="/edge-computing" element={<EdgeComputingPage />} />
                            <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
                            <Route path="/iot-platform" element={<IoTPlatformPage />} />
                          </Routes>
                        </Suspense>
                      </main>
                      <Footer />
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
});

App.displayName = 'App';

export default App;
