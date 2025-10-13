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
import LoadingSpinner from './app/components/LoadingSpinner';

// Pages
import HomePage from './app/page';
import AboutPage from './app/about/page';
import ContactPage from './app/contact/page';
import ServicesPage from './app/services/page';
import CareersPage from './app/careers/page';
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
                            <Route path="/careers" element={<CareersPage />} />
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
