import React, { Suspense, memo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from './app/components/ErrorBoundary';
import AnalyticsProvider from './app/components/AnalyticsProvider';
import PerformanceOptimizer from './app/components/PerformanceOptimizer';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import SEOEnhancer from './app/components/SEOEnhancer';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import LoadingStates from './app/components/LoadingStates';

// Import pages
import HomePage from './app/page';
import AboutPage from './app/about/page';
import ServicesPage from './app/services/page';
import ContactPage from './app/contact/page';

const App: React.FC = memo(() => {
  const handlePerformanceMetrics = (metrics: any) => {
    console.log('Performance metrics:', metrics);
  };

  return (
    <ErrorBoundary>
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
                <PerformanceMonitor onMetricsUpdate={handlePerformanceMetrics} />
                <Router>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                    <Navigation />
                    <main className="relative z-10" id="main-content" role="main">
                      <Suspense fallback={<LoadingStates type="page" />}>
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
              </SEOEnhancer>
            </AccessibilityEnhancer>
          </PerformanceOptimizer>
        </AnalyticsProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
});

App.displayName = 'App';

export default App;