import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import ErrorBoundary from './app/components/ErrorBoundary';
import PerformanceOptimizer from './app/components/PerformanceOptimizer';
import FuturisticBackground from './app/components/FuturisticBackground';
import AnalyticsProvider from './app/components/AnalyticsProvider';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import EnhancedAccessibility from './app/components/EnhancedAccessibility';
<<<<<<< HEAD
import LoadingSpinner from './app/components/LoadingSpinner';

// Pages
import HomePage from './app/page';
import AboutPage from './app/about/page';
import ContactPage from './app/contact/page';
import ServicesPage from './app/services/page';
import CaseStudiesPage from './app/case-studies/page';
import PartnersPage from './app/partners/page';
import PrivacyPage from './app/privacy/page';
import TermsPage from './app/terms/page';
import AIServicesPage from './app/ai-services/page';
import MicroSAASPage from './app/micro-saas/page';
import FiveGSolutionsPage from './app/5g-solutions/page';
import BlogPage from './app/blog/page';
import DemoPage from './app/demo/page';
import SupportPage from './app/support/page';
import TutorialsPage from './app/tutorials/page';

function App() {
=======
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
// Performance monitoring hook
const AppWithPerformanceMonitoring: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  usePerformanceMonitor();
  return <React.Fragment>{children}</React.Fragment>;
};
// Main App Component
const App: React.FC = () => {
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0d86
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <AnalyticsProvider>
            <PerformanceOptimizer>
              <EnhancedAccessibility>
                <AccessibilityEnhancer>
                  <div className="min-h-screen bg-gray-900 text-white">
                    <FuturisticBackground>
                      <Navigation />
                      <main className="relative z-10">
                        <Suspense fallback={<LoadingSpinner />}>
                          <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                            <Route path="/services" element={<ServicesPage />} />
                            <Route path="/case-studies" element={<CaseStudiesPage />} />
                            <Route path="/partners" element={<PartnersPage />} />
                            <Route path="/privacy" element={<PrivacyPage />} />
                            <Route path="/terms" element={<TermsPage />} />
                            <Route path="/ai-services" element={<AIServicesPage />} />
                            <Route path="/micro-saas" element={<MicroSAASPage />} />
                            <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
                            <Route path="/blog" element={<BlogPage />} />
                            <Route path="/demo" element={<DemoPage />} />
                            <Route path="/support" element={<SupportPage />} />
                            <Route path="/tutorials" element={<TutorialsPage />} />
                          </Routes>
                        </Suspense>
                      </main>
                      <Footer />
                    </FuturisticBackground>
                  </div>
                </AccessibilityEnhancer>
              </EnhancedAccessibility>
            </PerformanceOptimizer>
          </AnalyticsProvider>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
