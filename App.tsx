import React, { Suspense } from &apos;react&apos;;
import { BrowserRouter as Router, Routes, Route } from &apos;react-router-dom&apos;;
import { HelmetProvider } from &apos;react-helmet-async&apos;;

// Components
import Navigation from &apos;./app/components/Navigation&apos;;
import Footer from &apos;./app/components/Footer&apos;;
import { AnalyticsProvider } from &apos;./app/components/AnalyticsProvider&apos;;
import PerformanceOptimizer from &apos;./app/components/PerformanceOptimizer&apos;;
import SEOEnhancer from &apos;./app/components/SEOEnhancer&apos;;
import AccessibilityEnhancer from &apos;./app/components/AccessibilityEnhancer&apos;;
import ErrorBoundary from &apos;./app/components/ErrorBoundary&apos;;
// import LoadingStates from &apos;./app/components/LoadingStates&apos;;

import PerformanceMonitor from &apos;./app/components/PerformanceMonitor&apos;;
import MetaManager from &apos;./app/components/MetaManager&apos;;
import EnhancedAnalytics from &apos;./app/components/EnhancedAnalytics&apos;;
import AdvancedLoadingStates from &apos;./app/components/AdvancedLoadingStates&apos;;

// Pages
import HomePage from &apos;./app/page&apos;;
import AboutPage from &apos;./app/about/page&apos;;
import ServicesPage from &apos;./app/services/page&apos;;
import ContactPage from &apos;./app/contact/page&apos;;

const App: React.FC = () => {

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <AnalyticsProvider>
          <PerformanceOptimizer>
            <AccessibilityEnhancer />
            <SEOEnhancer
              title="Zion Tech Group - Advanced AI and IT Solutions"
              description="Leading provider of AI and IT solutions. Transform your business with cutting-edge technology, automation, and digital innovation."
              keywords={[&apos;AI&apos;, &apos;IT solutions&apos;, &apos;automation&apos;, &apos;digital transformation&apos;, &apos;cybersecurity&apos;, &apos;cloud infrastructure&apos]}
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
            />
            <MetaManager />
            <PerformanceMonitor />
            <EnhancedAnalytics />
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
          </PerformanceOptimizer>
        </AnalyticsProvider>
      </HelmetProvider>
    </ErrorBoundary>;
  );
};

export default App;