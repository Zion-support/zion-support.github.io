import React, { Suspense, memo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './styles/futuristic.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './page';
import Loading from './components/Loading';
import ErrorBoundary from './components/ErrorBoundary';
import SEOHead from './components/EnhancedSEOHead';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import EnhancedAccessibility from './components/EnhancedAccessibility';
import { AnalyticsProvider } from './components/Analytics';
import PerformanceMonitor from './components/PerformanceMonitor';

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

const App: React.FC = memo(() => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <AnalyticsProvider>
          <PerformanceOptimizer>
            <AccessibilityEnhancer>
              <EnhancedAccessibility>
                <SEOHead />
                <Router>
                  <div className="min-h-screen bg-white overflow-x-hidden">
                    <Navigation />
                    <main id="main-content" className="w-full">
                      <Suspense fallback={<Loading />}>
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