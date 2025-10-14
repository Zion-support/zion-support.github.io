import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import Footer from './app/components/Footer';
<<<<<<< HEAD
import AnalyticsProvider from './app/components/AnalyticsProvider';
=======
import Navigation from './app/components/Navigation';
import { AnalyticsProvider } from './app/components/AnalyticsProvider';
import PerformanceOptimizer from './app/components/PerformanceOptimizer';
import SEOEnhancer from './app/components/SEOEnhancer';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import ErrorBoundary from './app/components/ErrorBoundary';
// import LoadingStates from './app/components/LoadingStates';
>>>>>>> 920b944e8bba511baac66aab500eb63187cbfa13

import PerformanceMonitor from './app/components/PerformanceMonitor';
import MetaManager from './app/components/MetaManager';
import EnhancedAnalytics from './app/components/EnhancedAnalytics';
import AdvancedLoadingStates from './app/components/AdvancedLoadingStates';

// Pages
import HomePage from './app/pages/HomePage';
import AboutPage from './app/pages/AboutPage';
import ServicesPage from './app/pages/ServicesPage';
import ContactPage from './app/pages/ContactPage';

const App: React.FC = () => {
  return (
<<<<<<< HEAD
    <ErrorBoundary fallbackRender={() => <div>Something went wrong.</div>}>
=======
    <ErrorBoundary>
>>>>>>> 920b944e8bba511baac66aab500eb63187cbfa13
      <HelmetProvider>
        <AnalyticsProvider>
          <PerformanceOptimizer>
            <AccessibilityEnhancer>
              <SEOEnhancer
                title="Zion Tech Group - Advanced AI and IT Solutions"
                description="Leading provider of AI and IT solutions. Transform your business with cutting-edge technology, automation, and digital innovation."
                keywords={['AI', 'IT solutions', 'automation', 'digital transformation', 'cybersecurity', 'cloud infrastructure']}
                type="website"
                structuredData={{
                  "@context": "https://schema.org",
                  "@type": "Organization",
                  "name": "Zion Tech Group",
                  "description": "Leading provider of AI and IT solutions",
                  "url": "https://ziontechgroup.com",
                  "logo": "https://ziontechgroup.com/images/logo.png",
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+1-555-0123",
                    "contactType": "customer service"
                  }
                }}
              >
                <MetaManager>
                  <PerformanceMonitor onMetricsUpdate={() => {}} />
                  <EnhancedAnalytics>
                    <Router>
                      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                        <Navigation />
                        <main className="relative z-10" id="main-content" role="main">
                          <Suspense fallback={<AdvancedLoadingStates type="skeleton" fullScreen message="Loading application..." />}>
                            <Routes>
                              <Route path="/" element={<HomePage />} />
                              <Route path="/about" element={<AboutPage />} />
                              <Route path="/services" element={<ServicesPage />} />
                              <Route path="/contact" element={<ContactPage />} />
                            </Routes>
                          </Suspense>
                        </main>
                        <Footer />
                      </div>
                    </Router>
                  </EnhancedAnalytics>
                </MetaManager>
              </SEOEnhancer>
            </AccessibilityEnhancer>
          </PerformanceOptimizer>
        </AnalyticsProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;